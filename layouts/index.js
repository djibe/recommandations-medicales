 {{ $sass := resources.Get "sass/style.scss" | toCSS | postCSS | minify | fingerprint "sha384" }}

// Service Worker
const CACHE_VERSION = 'v4';
const CACHE_NAME = 'my-cache-' + CACHE_VERSION;
const FILES_TO_CACHE = [];

self.addEventListener('appinstalled', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // If the resource is in the cache, return it.
      if (response) {
        return response;
      }

      // Otherwise, fetch the resource from the network.
      return fetch(event.request).then(function(networkResponse) {
        // If the network request succeeded, add the resource to the cache.
        if (networkResponse.ok) {
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, networkResponse.clone());
          });
        }

        // If the network request failed and the requested page is not the offline page, return the offline page.
        if (!networkResponse.ok && event.request.mode === 'navigate') {
          return caches.match('/offline/');
        }

        // Return the network response.
        return networkResponse;
      }).catch(function() {
        // If the network request failed and the requested page is not the offline page, return the offline page.
        if (event.request.mode === 'navigate') {
          return caches.match('/offline/');
        }
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          // Return true if the cache name starts with 'my-cache-' and is not the current cache.
          return cacheName.startsWith('my-cache-') && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          // Delete the old cache.
          return caches.delete(cacheName);
        })
      );
    })
  );
});
