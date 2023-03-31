// HTML files: try the network first, then the cache.
// Other files: try the cache first, then the network.
// Both: cache a fresh version if possible.
// (beware: the cache will grow and grow; there's no cleanup)

const cacheName = 'files';

// Install the app by preloading all recommandations
self.addEventListener('install', (event) => {
  const urlsToPrefetch = [
  {{- range $index, $value := where site.RegularPages "Section" "recommandations" -}}
    {{ if $index }}, {{ end }}
    "{{ .RelPermalink }}"
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
});

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

// Modified version of https://gist.github.com/adactio/3717b7da007a9363ddf21f584aae34af
