const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/src/main.tsx',
  '/src/assets/logo.png', // Example asset
  '/src/assets/styles.css', // Example CSS file
  '/src/assets/script.js', // Example JavaScript file
  '/src/assets/fonts/Roboto-Regular.ttf', // Example font file
  '/src/assets/images/background.jpg', // Example image file
  // Add other assets you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
