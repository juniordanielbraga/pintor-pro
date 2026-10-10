// Guarda la app en el celular para que abra sin señal en la obra.
const C = "pintorpro-v2";
const CORE = ["./", "index.html", "style.css", "app.js", "i18n.js", "data/fichas.js", "manifest.webmanifest", "icon.svg", "bonos.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok && (new URL(e.request.url).origin === location.origin || e.request.url.includes("cdnjs") || e.request.url.includes("fonts."))) {
      const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy));
    }
    return r;
  }).catch(() => hit)));
});
