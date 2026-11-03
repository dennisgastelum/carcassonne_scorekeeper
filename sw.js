// Offline support. Files are served from the cache straight away and refreshed
// in the background, so a new upload reaches players on their next app launch.
// Change CACHE only if you rename or remove files in the ASSETS list.
const CACHE = 'carcassonne-v13';
const RULES_CACHE = 'carcassonne-rulebooks'; // kept across app updates, so PDFs are not downloaded again
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/xlsx.full.min.js',
  './vendor/pdfjs/pdf.min.js',
  './vendor/pdfjs/pdf.worker.min.js',
  './vendor/fonts/fraunces-latin-wght-normal.woff2',
  './vendor/fonts/work-sans-latin-wght-normal.woff2',
  './vendor/fonts/work-sans-latin-ext-wght-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/final-scoring.png',
  './icons/tiles/starting.png',
  './icons/tiles/landscape.png',
  './icons/meeples/red.png',
  './icons/meeples/blue.png',
  './icons/meeples/yellow.png',
  './icons/meeples/green.png',
  './icons/meeples/black.png',
  './icons/meeples/pink.png',
  './icons/features/road.png',
  './icons/features/city.png',
  './icons/features/monastery.png',
  './icons/features/expansion.png',
  './icons/features/field.png',
  './icons/expansions/abbot.png',
  './icons/expansions/base-game.png',
  './icons/expansions/river.png',
  './icons/expansions/other-starting-tableau.png',
  './icons/expansions/inns-cathedrals.png',
  './icons/expansions/traders-builders.png',
  './icons/expansions/dragon-fairy.png',
  './icons/expansions/towers-thieves.png',
  './icons/expansions/messengers-mayors.png',
  './icons/expansions/jousts-crests.png',
  './icons/expansions/siege-defense.png',
  './icons/expansions/castles-bridges.png',
  './icons/expansions/sheep-shepherds.png',
  './icons/expansions/circus-artists.png',
  './icons/expansions/ghosts-castles-cemeteries.png',
  './icons/expansions/mini-flying-machines.png',
  './icons/expansions/mini-messengers.png',
  './icons/expansions/mini-ferries.png',
  './icons/expansions/mini-gold-mines.png',
  './icons/expansions/mini-magician-witch.png',
  './icons/expansions/mini-robbers.png',
  './icons/expansions/mini-crop-circles.png',
  './icons/expansions/other-autumn.png',
  './icons/expansions/other-barber-surgeons.png',
  './icons/expansions/other-bets.png',
  './icons/expansions/other-castles-in-germany.png',
  './icons/expansions/other-drawbridges.png',
  './icons/expansions/other-festival.png',
  './icons/expansions/other-fruit-bearing-trees.png',
  './icons/expansions/other-german-cathedrals.png',
  './icons/expansions/other-gifts.png',
  './icons/expansions/other-halflings.png',
  './icons/expansions/other-hansa.png',
  './icons/expansions/other-labyrinth.png',
  './icons/expansions/other-journey-to-carcassonne.png',
  './icons/expansions/other-markets-of-leipzig.png',
  './icons/expansions/other-monasteries-in-germany.png',
  './icons/expansions/other-peasant-revolts.png',
  './icons/expansions/other-phantom.png',
  './icons/expansions/other-signposts.png',
  './icons/expansions/other-snakes-and-ladders.png',
  './icons/expansions/other-spell-circles.png',
  './icons/expansions/other-spiel.png',
  './icons/expansions/other-spring.png',
  './icons/expansions/other-summer.png',
  './icons/expansions/other-tollkeepers.png',
  './icons/expansions/other-watchtowers.png',
  './icons/expansions/other-winter.png',
  './icons/expansions/other-wonders-of-humanity.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('carcassonne-') && k !== CACHE && k !== RULES_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const isRulebook = new URL(e.request.url).pathname.includes('/rulebooks/');
    const cache = await caches.open(isRulebook ? RULES_CACHE : CACHE);
    const cached = await cache.match(e.request, {ignoreSearch: true});
    const network = fetch(e.request).then(async res => {
      if (res.ok) await cache.put(e.request, res.clone());
      return res;
    });
    e.waitUntil(network.catch(() => {}));
    if (cached) return cached;
    try {
      return await network;
    } catch (err) {
      if (e.request.mode === 'navigate') return cache.match('./index.html');
      throw err;
    }
  })());
});
