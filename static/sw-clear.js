self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
clients.claim().then(() =>
caches.keys().then(names =>
Promise.all(names.map(name => caches.delete(name)))
).then(() => self.registration.unregister())
)
));