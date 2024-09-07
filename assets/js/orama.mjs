import { OramaClient } from 'https://unpkg.com/@oramacloud/client@1.3.15/dist/index.js'

let oramaApiKey;

fetch('https://recomedicales.fr/.netlify/functions/api')
.then(response => response.json())
.then(json => {
  oramaApiKey = json.api;
})

const client = new OramaClient ({
  endpoint: 'https://cloud.orama.run/v1/indexes/recomedicales-y8a67g',
  api_key: oramaApiKey
});

const searchInput = document.getElementById('search-input');
['change', 'cut', 'focus', 'input', 'paste', 'search'].forEach((type) =>
  searchInput.addEventListener(type, query)
);

async function query(event) {
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
