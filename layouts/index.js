// ServiceWorker layout
// HTML files: try the network first, then the cache.
// Other files: try the cache first, then the network.
// Both: cache a fresh version if possible.
// (beware: the cache will grow and grow; there's no cleanup)

const cacheName = 'v2';

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
