/* TyövuoroPdf service worker (v1.71.93-web).
   Minimaalinen: EI tallenna mitään välimuistiin, kaikki pyynnöt menevät suoraan verkkoon.
   Siksi sivu ja versiotarkistus (versio_web.txt) päivittyvät kuten ennenkin. Tämä tiedosto
   vain täyttää selaimen "asennettava sovellus" -vaatimuksen. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
