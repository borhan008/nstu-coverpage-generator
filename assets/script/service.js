self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cach    e-v1').then((cache) => {
      return cache.addAll([
        '../../',
        
        '../../index.html',
        '../../contributors.html',
        '../../coverpagebangla.html',
        '../../coverpageenglish.html',
        '../../guidline.html',
        '../../index-generator.html',
        '../../index-generator-wo-page.html',
        '../../LabReport.html',
        '../../user-details.html',
        '../../user-styling.html',
        '../../user-styling-v2.html',
        
        '../../assets/css/style.css',
        
        '../../assets/script/script.js',
        '../../assets/script/service.js',
        
        '../../assets/images/guideline-1.png',
        '../../assets/images/logo.png',
        '../../assets/images/logo2.png',
        '../../assets/images/me.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== 'my-cache-v1') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
