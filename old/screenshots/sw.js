self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('biblia365-cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/Biblia.36x36.png',
          '/assets/Biblia.48x48.png',
          '/assets/Biblia.72x72.png',
          '/assets/Biblia.96x96.png',
          '/assets/Biblia.144x144.png',
          '/assets/Biblia.192x192.png',
          '/assets/Biblia.256x256.png',
          '/assets/Biblia.512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  