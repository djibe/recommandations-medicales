// Service Worker
const CACHE_VERSION = 'v1';
const CACHE_NAME = 'my-cache-' + CACHE_VERSION;
const FILES_TO_CACHE = [
  '/',
  '/sass/',
  '/offline/',
  '/index.json',
  '/manifest.webmanifest',
  '/android-chrome-512x512.png'
];

self.addEventListener('appinstalled', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  console.log('App was installed.');
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

        // Return the network response.
        return networkResponse;
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if the cache name starts with 'my-cache-' and is not the current cache.
          return cacheName.startsWith('my-cache-') && cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          // Delete the old cache.
          return caches.delete(cacheName);
        })
      );
    })
  );
});
