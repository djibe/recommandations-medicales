import { OramaClient } from 'https://esm.run/@oramacloud/client@2.1.4';

let client;

async function initializeClient() {
  const response = await fetch('https://recomedicales.fr/.netlify/functions/api');
  const json = await response.json();
  const oramaApiKey = json.api;

  // Initialisation du client avec la clé API récupérée
  client = new OramaClient({
    endpoint: 'https://cloud.orama.run/v1/indexes/recomed-dl104p',
    api_key: oramaApiKey
  });
}

initializeClient();

const searchInput = document.getElementById('search-input');
['change', 'cut', 'focus', 'input', 'paste', 'search'].forEach((type) =>
  searchInput.addEventListener(type, query)
);

async function query(event) {
  if (!client) {
    console.error("Le client n'est pas encore initialisé.");
    return;
  }

  const searchResponse = await client.search({
    term: event.target.value,
    properties: '*',
    mode: 'fulltext'
  });

  document.getElementById('search-results').innerHTML = searchResponse.hits
    .map(
      (i) =>
        `<a href='${i.document.uri}' class='list-group-item list-group-item-action' role='listitem'>${i.document.title}</a>`
    )
    .join('');
}
