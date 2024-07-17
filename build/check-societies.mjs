import fs from 'fs';
import csv from 'csv-parser';
// import fetch from 'node-fetch';

const csvFilePath = '../assets/data/societes-savantes.csv';

// Fonction pour vérifier si un texte est un lien
const isValidUrl = (text) => {
  try {
    new URL(text);
    return true;
  } catch (_) {
    return false;
  }
};

// Fonction pour vérifier un lien
const checkLink = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Fonction pour traiter le fichier CSV
const processCSV = async (filePath) => {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', async (row) => {
        const rowResults = [];
        for (const [key, value] of Object.entries(row)) {
          if (isValidUrl(value)) {
            const isValid = await checkLink(value);
            rowResults.push({ link: value, isValid });
          }
        }
        results.push(rowResults);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

// Traiter le CSV et afficher les résultats
processCSV(csvFilePath)
  .then((results) => {
    results.forEach((rowResults, rowIndex) => {
      if (rowResults.length > 0) {
        console.log(`Row ${rowIndex + 1}:`);
        rowResults.forEach(({ link, isValid }) => {
          console.log(`  ${link} is ${isValid ? 'valid' : 'invalid'}`);
        });
      }
    });
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });
