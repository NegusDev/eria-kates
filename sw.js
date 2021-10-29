self.addEventListener("install", e =>{
	e.waitUntil(
		caches.open("static").then(cache =>{

			return cache.addAll([
				"./",
			
				"./assets/css",
				"./assets/css/style.css",
				"./assets/fonts/",
				"./assets/img/"
				
			]);
		})
	);
});

self.addEventListener("fetch", e => {

	e.respondWith(

		caches.match(e.request).then(response =>{
			return response || fetch(e.request);
		})
	);

});