self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if (e.request.url.includes('script.google.com') || 
      e.request.url.includes('script.googleusercontent.com')) {
    return;
  }
  e.respondWith(fetch(e.request));
});
