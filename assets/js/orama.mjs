import {
  create,
  search,
  insertMultiple,
} from 'https://cdn.jsdelivr.net/npm/@orama/orama@2.0.17/dist/index.js';
import { stemmer } from 'https://cdn.jsdelivr.net/npm/@orama/stemmers/dist/fr.js';
const indexResponse = await fetch('https://recomedicales.fr/index.json');
const index = await indexResponse.json();

const searchEngine = await create({
  schema: {
    uri: 'string',
    title: 'string',
    synonyms: 'string',
    content: 'string',
    tags: 'string',
    section: 'string',
    annees: 'string',
    sources: 'string'
  },
  defaultLanguage: 'french',
  components: {
    tokenizer: {
      stemmingFn: stemmer,
    },
  },
});
await insertMultiple(searchEngine, index);

const searchInput = document.getElementById('search-input');
['change', 'cut', 'focus', 'input', 'paste', 'search'].forEach((type) =>
  searchInput.addEventListener(type, query)
);

if (navigator.userAgent.match(/firefox|fxios/i)) {
  document.getElementById('search-results').innerHTML = '<p class="lead px-3">Des problèmes de recherche peuvent survenir avec Firefox</p>'
}

async function query(event) {
  const searchResponse = await search(searchEngine, {
    term: event.target.value,
    properties: '*',
  });
  document.getElementById('search-results').innerHTML = searchResponse.hits
    .map(
      (i) =>
        `<a href='${i.document.uri}' class='list-group-item list-group-item-action' role='listitem'>${i.document.title}</a>`
    )
    .join('');
}
