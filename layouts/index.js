// ServiceWorker layout
// HTML files: try the network first, then the cache.
// Other files: try the cache first, then the network.
// Both: cache a fresh version if possible.
// (beware: the cache will grow and grow; there's no cleanup)

const cacheName = 'files';

// Install the app by preloading all recommandations
/*self.addEventListener('install', (event) => {
  const urlsToPrefetch = [
    'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    '/sass/style.css',
    'https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/djibe-material@4.6.2-1.0/js/material.min.js',
    '/js/search.min.3575570338356f92346231966c2b380dfc1d6d652428d9778eb15afb44ae5e9dc94a83a0942ada32b8878ff889a9e736.js',
    'https://cdn.jsdelivr.net/npm/apexcharts@3.37.0/dist/apexcharts.min.js',
    'https://cdn.jsdelivr.net/npm/mermaid@10.0/+esm',
    'https://cdn.jsdelivr.net/npm/ion-rangeslider/js/ion.rangeSlider.min.js',
    '/recommandations/',
  {{- range $index, $value := where site.RegularPages "Section" "recommandations" -}}
    {{ if $index }}, {{ end }}
    '{{ .RelPermalink }}'
  {{- end -}}
  ];

  event.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      return cache
          .addAll(
            urlsToPrefetch.map((urlToPrefetch) => {
              return new Request(urlToPrefetch, { mode: "no-cors" });
            })
          )
          .then(() => {
            console.log("All resources have been fetched and cached.");
          });
    })
    .catch((error) => {
      console.error("Pre-fetching failed:", error);
    })
  );
});*/

// Cache visited pages
self.addEventListener('fetch',  fetchEvent => {
  const request = fetchEvent.request;
  if (request.method !== 'GET') {
    return;
  }
  fetchEvent.respondWith(async function() {
    const fetchPromise = fetch(request);
    fetchEvent.waitUntil(async function() {
      const responseFromFetch = await fetchPromise;
      const responseCopy = responseFromFetch.clone();
      const myCache = await caches.open(cacheName);
      return myCache.put(request, responseCopy);
    }());
    if (request.headers.get('Accept').includes('text/html')) {
      try {
        return await fetchPromise;
      }
      catch(error) {
        return caches.match(request);
      }
    } else {
      const responseFromCache = await caches.match(request);
      return responseFromCache || fetchPromise;
    }
  }());
});

// Improved version of https://gist.github.com/adactio/3717b7da007a9363ddf21f584aae34af
