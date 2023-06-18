import {
  create,
  search,
  insertBatch,
} from 'https://cdn.jsdelivr.net/npm/@lyrasearch/lyra@0.4.12/dist/index.js';
import { stemmer } from 'https://cdn.jsdelivr.net/npm/@lyrasearch/lyra@0.4.12/dist/stemmer/fr.min.js';
const indexResponse = await fetch('https://recomedicales.fr/index.json');
const index = await indexResponse.json();

const searchEngine = await create({
  schema: {
    date: 'string',
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
await insertBatch(searchEngine, index);

const searchInput = document.getElementById('search-input');
['change', 'cut', 'focus', 'input', 'paste', 'search'].forEach((type) =>
  searchInput.addEventListener(type, query)
);

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
