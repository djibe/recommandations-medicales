import { OramaCloud } from "https://esm.sh/@orama/core@1.2.19";
let client;

async function initializeClient() {
  const CACHE_KEY = "orama_api_key_data";
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  let oramaApiKey = null;

  // 1. Try to load and validate the cached key
  const cachedDataStr = localStorage.getItem(CACHE_KEY);
  if (cachedDataStr) {
    try {
      const cachedData = JSON.parse(cachedDataStr);
      if (Date.now() < cachedData.expiry) {
        oramaApiKey = cachedData.value; // Cache hit!
      } else {
        localStorage.removeItem(CACHE_KEY); // Expired
      }
    } catch (error) {
      localStorage.removeItem(CACHE_KEY); // Corrupted JSON failsafe
    }
  }

  // 2. If no valid key was found in cache, fetch it from the API
  if (!oramaApiKey) {
    try {
      const response = await fetch(
        "https://recomedicales.fr/.netlify/functions/api",
      );
      const json = await response.json();
      oramaApiKey = json.api;

      // Store the new key with a 1-week expiration timestamp
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        value: oramaApiKey,
        expiry: Date.now() + ONE_WEEK_MS
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération de la clé API:", error);
      return; // Exit early if the fetch fails so we don't initialize with a null key
    }
  }

  // 3. Initialisation du client avec la clé API récupérée (ou en cache)
  client = new OramaCloud({
    projectId: "c6e48c90-4856-4f2b-b850-47dffc4c5181",
    apiKey: oramaApiKey,
  });
}

initializeClient();

const searchInput = document.getElementById("search-input");
["input"].forEach((type) =>
  searchInput.addEventListener(type, query),
);

async function query(event) {
  if (!client) {
    console.error("Orama Search n’est pas encore initialisé.");
    return;
  }

  const results = document.getElementById("search-results");
  const term = event.target.value.trim();

  if (!term) {
    results.innerHTML = "";
    return;
  }

  try {
    const searchResponse = await client.search({
      term,
      properties: "*",
      mode: "fulltext",
      boost: {
        title: 5,
        content: 2,
      },
    });

    if (searchResponse.hits.length === 0) {
      results.innerHTML = `
        <p class="list-group-item">
          Aucun résultat trouvé pour « ${term.replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          })[char])} ».<br><a href="/soumettre-chapitre/">Proposer un sujet</a>.
        </p>
      `;
      return;
    }

    results.innerHTML = searchResponse.hits
      .map(
        (i) =>
          `<a href="${i.document.uri}" class="list-group-item list-group-item-action" role="listitem">${i.document.title}</a>`,
      )
      .join("");
  } catch (error) {
    console.error("Erreur lors de la recherche Orama :", error);
    results.innerHTML = `
      <p class="list-group-item">
        Une erreur est survenue lors de la recherche.
      </p>
    `;
  }
}
