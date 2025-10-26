// Service Worker for The4Ever Wedding Site
const CACHE_NAME = 'the4ever-wedding-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/js/main.js',
  '/assets/js/vendor.js',
  '/assets/js/ui.js',
  '/assets/js/modules.js',
  '/assets/css/index.css',
  '/vy-logo-bg-black-font-1.svg',
];

// Image assets to cache
const IMAGE_ASSETS = [
  // Logo assets
  '/assets/images/logo/vy-logo-black-1.svg',
  '/assets/images/logo/loader-logo.svg',
  '/assets/images/logo/vy-logo-blue-1.svg',
  '/assets/images/logo/vy-logo-blue-2.svg',
  '/assets/images/logo/vy-logo-black-2.svg',
  '/assets/images/logo/vy-logo-blue-bg-t.svg',

  // Common assets
  '/assets/images/common/single-black-floral-moments.svg',
  '/assets/images/common/floral-top-left.svg',
  '/assets/images/common/floral-bottom-right.svg',

  // Couple photos
  '/assets/images/couple/mid-3.jpg',
  '/assets/images/couple/image-6.jpg',

  // Event assets
  '/assets/images/events/garba-event-1.svg',
  '/assets/images/events/garba-main-1.svg',
  '/assets/images/events/sangeet-temp-1.jpg',
  '/assets/images/events/haldi-event-1.svg',
  '/assets/images/events/haldi-main-1.svg',
  '/assets/images/events/haldi-temp-1.jpg',
  '/assets/images/events/wedding-event-1.svg',
  '/assets/images/events/wedding-main-1.svg',
  '/assets/images/events/wedding-temp-1.jpg',
];

// Font files to cache
const FONT_FILES = [
  '/assets/fonts/Alice-Regular.ttf',
  '/assets/fonts/Brandon-medium.otf',
  '/assets/fonts/Brandon_reg.otf',
  '/assets/fonts/Hannah_Regular.otf',
  '/assets/fonts/Malarkey-Regular.otf',
  '/assets/fonts/Somersette.otf',
  '/assets/fonts/amsterdam.ttf',
  '/assets/fonts/rottering.otf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([...STATIC_ASSETS, ...FONT_FILES, ...IMAGE_ASSETS]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is in cache, return it
      if (response) {
        return response;
      }

      // Clone the request because it can only be used once
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then((response) => {
          // Check if response is valid
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          // Clone the response because it can only be used once
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Return cached response if fetch fails
          return caches.match(event.request);
        });
    })
  );
});
