var CACHE_NAME = "pwa_v1";
var cacheFiles = [
  '/',
  'index.html',
  'favicon.ico',
];




self.addEventListener('install', function(e) {

  console.log("install");
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("caching files!!!");
      return cache.addAll(cacheFiles);
    })
  )

})





self.addEventListener('activate', function(e) {

  console.log("activate");
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {

        console.log("Removing from cache: ", thisCacheName);
        if(thisCacheName !== CACHE_NAME) {
          return caches.delete(thisCacheName);
        }

      }))
    })
  )

})





self.addEventListener('fetch', function(e) {

  console.log("fetch", e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if( response ) {
        console.log("ServiceWorker found in cache!!!");
        return response;
      }

      return fetch(e.request);
    })
  )

})
