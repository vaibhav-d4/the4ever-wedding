// Service Worker for The4Ever Wedding Site
// Use a simple cache version so we can update it on new deployments.
const CACHE_VERSION = 'v2';
const CACHE_NAME = `the4ever-wedding-cache-${CACHE_VERSION}`;

// Only cache known static assets (avoid hard-coded unhashed JS filenames)
const STATIC_ASSETS = ['/', '/index.html', '/vy-logo-bg-black-font-1.svg'];

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
  // Activate new service worker faster
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([...STATIC_ASSETS, ...FONT_FILES, ...IMAGE_ASSETS]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => {
        // Claim clients so the new service worker takes effect immediately
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Treat navigation / HTML requests as network-first so users get updates
  const acceptHeader = req.headers.get('accept') || '';
  const isNavigate =
    req.mode === 'navigate' || acceptHeader.includes('text/html');

  if (isNavigate) {
    event.respondWith(
      fetch(req)
        .then((networkResp) => {
          // Update the cache for navigation responses
          caches.open(CACHE_NAME).then((cache) => {
            cache.put('/index.html', networkResp.clone());
          });
          return networkResp;
        })
        .catch(() => {
          return caches.match('/index.html');
        })
    );
    return;
  }

  // For other requests, try cache first then network
  event.respondWith(
    caches.match(req).then((response) => {
      if (response) return response;

      const fetchRequest = req.clone();
      return fetch(fetchRequest)
        .then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });

          return response;
        })
        .catch(() => caches.match(req));
    })
  );
});
