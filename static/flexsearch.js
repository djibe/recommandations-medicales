/**
 * @file
 * A JavaScript file for flexsearch.
 * Doc: https://github.com/nextapps-de/flexsearch#presets
 */

(function () {

  'use strict';

  let count = 0;
  const index = new FlexSearch.Document({
    document: {
      index: ['title', 'synonyms', 'content'],
      store: ['title', 'synonyms', 'uri'] // TODO:
    },
    preset: 'match',
    tokenize: 'forward',
    cache: 100,
    optimize: true,
    charset: 'latin', // TODO:
    encoder: 'extra'
  });

  function showResults(items) {
    const results = document.getElementById('search-results');
    results.innerHTML = '';

    for (const id in items) {
      // console.log(items)
      const item = items[id];
      const renderItem = `<a href="${item.uri}" class="list-group-item list-group-item-action">${item.title}</a>`;
      results.innerHTML += renderItem;
    }
  }

  function doSearch() {
    const query = document.getElementById('search-input').value.trim();
    const results = index.search({
      query: query,
      enrich: true, // TODO:
      // limit: params.searchLimit
    });
    const items = {};
    results.forEach(function (result) {
      result.result.forEach(function (r) {
        items[r.id] = r.doc;
      });
    });
    showResults(items);
  }

  function enableUI() {
    const searchform = document.getElementById('search-input');
    searchform.addEventListener('keyup', function () {
      doSearch();
    });
    document.querySelector('#search-loading').classList.add('d-none');
    // document.querySelector('.search-input').classList.remove('hidden');
    document.getElementById('search-input').focus();
  }

  function buildIndex() {
    document.querySelector('#search-loading').classList.remove('d-none');
    let counter = 0;
    fetch('/index.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.forEach(function (item) {
          index.add(counter, item);
          counter++;
        });
      });
  }

  buildIndex();
  enableUI();
})();
