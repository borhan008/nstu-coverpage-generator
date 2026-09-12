const CACHE_NAME = "nstu-coverpage-v2";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/contributors.html",
  "/coverpagebangla.html",
  "/coverpageenglish.html",
  "/guidline.html",
  "/index-generator.html",
  "/index-generator-wo-page.html",
  "/LabReport.html",
  "/user-details.html",
  "/user-styling.html",
  "/user-styling-v2.html",

  "/manifest.json",

  "/assets/css/style.css",
  "/assets/css/tailwind.css",
  "/assets/script/script.js",

  "/assets/images/guideline-1.png",
  "/assets/images/logo.png",
  "/assets/images/logo2.png",
  "/assets/images/me.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );

  self.skipWaiting();
});


self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});


self.addEventListener("fetch", event => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {

        // If cached, use cache
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise try network
        return fetch(request)
          .then(networkResponse => {

            // Cache successful same-origin responses
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              new URL(request.url).origin === location.origin
            ) {
              const responseToCache = networkResponse.clone();

              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(request, responseToCache);
                });
            }

            return networkResponse;
          })
          .catch(() => {

            // If navigation fails, show index page
            if (request.mode === "navigate") {
              return caches.match("/index.html");
            }

            return new Response("Offline - resource unavailable", {
              status: 503,
              headers: {
                "Content-Type": "text/plain"
              }
            });
          });
      })
  );
});