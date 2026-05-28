// Open command anywhere and run: node build/check-societies.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';

// --- Path Setup ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvFilePath = path.resolve(__dirname, '../assets/data/societes-savantes.csv');

const CONCURRENCY_LIMIT = 100; // Max global simultaneous link checks

const isValidUrl = (text) => {
  try {
    new URL(text);
    return true;
  } catch (_) {
    return false;
  }
};

// Fonction pour vérifier un lien respectueusement
const checkLink = async (url) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkCheckerBot/1.0; +https://github.com/your-username/your-repo)'
      }
    });

    clearTimeout(timeoutId);
    return response.status;
  } catch (error) {
    if (error.name === 'AbortError') return 'TIMEOUT (5s)';
    return 'ERROR';
  }
};

// Main processing logic
const processCSV = async (filePath) => {
  const allUrls = [];

  // 1. Extract all valid URLs from the CSV and track their original Row ID
  await new Promise((resolve, reject) => {
    let rowIndex = 1;
    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        for (const [key, value] of Object.entries(row)) {
          if (isValidUrl(value)) {
            allUrls.push({ url: value, rowIndex });
          }
        }
        rowIndex++;
      })
      .on('end', resolve)
      .on('error', reject);
  });

  // 2. Group URLs by their hostname (domain)
  const domainQueues = {};
  allUrls.forEach((item) => {
    try {
      const parsedUrl = new URL(item.url);
      const host = parsedUrl.hostname;
      if (!domainQueues[host]) domainQueues[host] = [];
      domainQueues[host].push(item);
    } catch (_) {
      // Fallback safecheck
    }
  });

  // Convert the grouped object into an array of queues
  const queues = Object.values(domainQueues);
  const finalResults = [];

  // 3. Worker logic: Each worker pulls a domain queue and processes it sequentially
  const worker = async () => {
    while (queues.length > 0) {
      // Pull a unique domain queue from the pool
      const currentDomainQueue = queues.shift();
      if (!currentDomainQueue) break;

      // Process this specific domain's links sequentially (1 request at a time for this server)
      for (const item of currentDomainQueue) {
        const statusCode = await checkLink(item.url);

        // Only keep track of issues/redirections (skip 200 OK)
        if (statusCode !== 200) {
          finalResults.push({
            rowIndex: item.rowIndex,
            link: item.url,
            statusCode
          });
        }
      }
    }
  };

  // 4. Start up to 100 workers running in parallel
  const workers = Array.from({ length: Math.min(CONCURRENCY_LIMIT, queues.length) }, worker);
  await Promise.all(workers);

  return finalResults;
};

// --- Execution and Logging ---
console.log(`🔄 Script started... Processing up to ${CONCURRENCY_LIMIT} unique domains in parallel (1 request/server max).`);

if (!fs.existsSync(csvFilePath)) {
  console.error(`❌ Error: File not found at ${csvFilePath}`);
  process.exit(1);
}

processCSV(csvFilePath)
  .then((issues) => {
    if (issues.length === 0) {
      console.log('\n✨ All links are perfectly healthy (200 OK)! No errors or redirects found.');
      return;
    }

    // Sort issues by row index for readable console output
    issues.sort((a, b) => a.rowIndex - b.rowIndex);

    let currentRow = -1;
    issues.forEach(({ rowIndex, link, statusCode }) => {
      if (rowIndex !== currentRow) {
        console.log(`\nRow ${rowIndex}:`);
        currentRow = rowIndex;
      }

      let statusSymbol = '';
      if (statusCode >= 300 && statusCode < 400) statusSymbol = `🔄 ${statusCode} (Redirect)`;
      else if (statusCode >= 400 && statusCode < 500) statusSymbol = `❌ ${statusCode} (Client Error)`;
      else if (statusCode >= 500) statusSymbol = `🔥 ${statusCode} (Server Error)`;
      else statusSymbol = `⚠️ ${statusCode}`; // For TIMEOUT or network ERROR

      console.log(`  ${statusSymbol} -> ${link}`);
    });

    console.log(`\n🏁 Process complete. Found ${issues.length} links with errors or redirects.`);
  })
  .catch((error) => {
    console.error('❌ Error processing CSV file:', error);
  });
  