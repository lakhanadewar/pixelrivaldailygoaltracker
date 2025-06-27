'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bf5ba4bf9af893e40329b17704eb9c",
".git/config": "3dc33c368e0d6afd47e82482993cf221",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7342ce445b826269a8269b22a3d33725",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5e818cd858ad0ad1f42f2ed83285008",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "30614c5150398e01cbde7adcb952f48a",
".git/logs/refs/heads/main": "30614c5150398e01cbde7adcb952f48a",
".git/logs/refs/remotes/origin/main": "6517795f7e00701db6be06bc8623c22b",
".git/objects/12/439381c74fda1b6646ec03ede50e1acb7d7489": "6e1497f2a6472e7f65e87c587209c638",
".git/objects/19/c79beb5d7020bd728c2a7221937de3f9b911da": "85fe10a98f0d743b846760114fd406d3",
".git/objects/1a/12181da227c712affdd20f620ca0689cc88ac5": "902cb5602f1343fb592c63893794bb7d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/eabe73b9a190444b9bd33c2052ef9319de53ff": "312ad281fdd1ce466d1e6973b5ff1ed4",
".git/objects/2b/586c3fb2e07a4516df7bbad78ccbb32bd4f5a5": "3879847c86c580ecb5b2a57324ee3665",
".git/objects/2f/4060b01272733763bc3c4a9b780d5ea0849023": "72e69c465fec9f8a7b53bd3057719314",
".git/objects/2f/b735efd2400006a1979e4c3e5d75ae96ffd41d": "b8ab187632dfe6b7e424dc2fdba38736",
".git/objects/34/9db207dd0ed85c5b73e10dfeb18490580a73cf": "684d7946cef2dc5eb6418528b91ffb74",
".git/objects/36/0da8cbad8e6d9dbf21a9a5ce539b320fc9e564": "1806e01d1a5345b5ec5ef81343c2b06b",
".git/objects/43/1563515a631b33d949a1833581905375da67cb": "028784a94a5529864c11a7ad1ea86247",
".git/objects/44/db9a8aca1b8c8bbc1327e916098cc3d5298ebf": "90c6f91d79df6e8b80fb646c08951d3d",
".git/objects/48/2d0eb3f761ff1f35456368c1defad9787d05fb": "16667c8c604406c155c2216babd9095c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/59/6334b3eb65021f199eaef1e4ee56cdabe579c9": "fac821201f2c82365ef207646e3002bc",
".git/objects/5d/cd75f97a157f49faff30b68ca2ca36676591b1": "0be15a79658373836031a91cfa405a10",
".git/objects/63/5031052b6bc657ec5c6db48c6134e0516e6187": "f5546f0077d15b8740016cd84eb23908",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7a/4481236cff663c7f5bfabc08308ee9116c9c8b": "7891084ffc44baf0a0766af6bd714886",
".git/objects/82/22831e6a45e5176f0f7dddf2551b1effedb429": "319481399848e752c3811dc924c694ab",
".git/objects/82/e427df6178a6147456876c9a6c2fcca884a8de": "2e47e32d9e6e40e1e158f75ca8331ed7",
".git/objects/83/71dabee5ebdc9e291589487fc47d6b6c22ea36": "4bd558bf6709e4fa661f72b717d609da",
".git/objects/85/3e10a29984d225e40f0dafcaefe0f52a114151": "cd25c585735337d58094ee6ba7f9d644",
".git/objects/87/c3028453feedcd8e0bf23b4957f250e3186cb6": "c9a22c6dff591f12015167d47c4e5240",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/c268bc7cbce93368b01c3dae7efd8303942f6c": "fde3ef2e75476027f0f3e3b4da33d7a8",
".git/objects/91/a6fb20c32b7f9306d7c02523a66d49e2d8fa2b": "d9fc358d3d2cfe1e290bd157128f2854",
".git/objects/95/cd372534b533c9cb7ce35b782f0623ecb4de00": "bbdf9a00b3e507ab2901525d15134b91",
".git/objects/9b/bcb8deeeaa01739feb295322d72cc208d25b48": "9ae7c613e5491053d641da07c6a86c85",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/436303fce3404fb2132de14e09e0878d8320e1": "dc67a6ca32cecf04927c2fef05625cb1",
".git/objects/a6/ef26462299549bc7b81610a9453a7a863643f5": "a9c8073966aa15281fe3337f20916aa4",
".git/objects/b4/c026e5b0f152dbc29ce190414af4442ac05e86": "09bb154e8b93fdc8f6b44aee270e3b24",
".git/objects/b6/1f2274d8e636250833443dc77fb060fb7d6b41": "162aded9bf492f8fc9b8a9034a65e945",
".git/objects/b6/959983af6f6543ed7af8bbbc5a4386d14a3913": "1c42bd08538b8a1843d781d13a77bbc1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/cce1beddce12ace79d7dbea96cadf02d71ebfa": "4a298ecf5156173d99cde2e9170b25b5",
".git/objects/bc/db8002d129db70bed1f2d21c374a4f31c86625": "8ba139897b1a03d8bfddd73aefeaf1c5",
".git/objects/c2/fc285af60acbeb14a6eaff499a3c95a9caf207": "33d85d2e05aabf74bfeeeff9be2fc8e2",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/252775387bed721c4bad759b62fbf010e792d8": "b87d63acb33f55f811e654b83429ef41",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/67c430074dee9c5d51bc6f8c344c4057207c07": "4d7699e8b0a279870ac10c48f3db4464",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/f3d6e8c20fe6cfb613989b40c8ecbcb1bdd664": "ae88e02ecdc4b03846691fba6f1197c8",
".git/objects/e8/fcc8b6ffcd6891555ad81c1bbc2fb2b171cd49": "8a82897994c53dd6789e3196cafc227a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/56bc6f713747ec8cd0ae031cbc6344d48dec43": "ccf6361a1946f3ce0fc7509f0f25650c",
".git/objects/ec/cd7b9851f4dd32f29a2da6782f6b55d867a78c": "a4fde2cae258b6241745e26270814f08",
".git/objects/ef/12d399073d1ebf6ce54504d759821e7765c42a": "9585100e60a088ff306d45e5f520c835",
".git/objects/f0/31e61ab1609e210f168ecc8e26a3f5f6645592": "d6f5088bbc06dbf8c38259721f8ddbc5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/1ac725dc1de7a8b60d6690a79ca6aae16b7aaf": "8bc690185341f207d1ebe6466202a5a0",
".git/objects/fd/8869cbbae33d630cf2798d9dc7e25e44dfa41a": "bee802f923c3c31d8c6707982957248a",
".git/ORIG_HEAD": "1fc1b31b93f7c1ad48f4565b478eccfe",
".git/refs/heads/main": "08bd8ff0c29cf6d0528933574dd743f4",
".git/refs/remotes/origin/main": "08bd8ff0c29cf6d0528933574dd743f4",
"assets/AssetManifest.bin": "b7ab0274cb4d90e2abbadf5e90c2cf12",
"assets/AssetManifest.bin.json": "c87f724fd2e9fb169cb356ec9727be5c",
"assets/AssetManifest.json": "2e254798685f0b6d976b2296c412dd7d",
"assets/assets/fonts/PixelifySans-Medium.ttf": "2f02459f75a3a4a902a573a3844fb4d5",
"assets/assets/images/avatar.png": "d2ee36866ee19f40ff306ba037f1d8a2",
"assets/assets/images/rival.png": "6dee4b346cfc80368ea3d8135d7da0a7",
"assets/FontManifest.json": "a1a6d9920c61966256cb4648dce87b6b",
"assets/fonts/MaterialIcons-Regular.otf": "56c871f6fa697499d4f2842a161d85f5",
"assets/NOTICES": "20075629eb73c291c734a58461c2c0d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm_heavy.js": "ff62b0ccde0d87bb610723a5276bfcfc",
"canvaskit/skwasm_heavy.js.symbols": "7796a7b188709b3a483a471911e3d566",
"canvaskit/skwasm_heavy.wasm": "3b844ebf2432c40b467b51d24ab8454f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d379afed23ee4491cef7e9bd6e0d3758",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aae848141449ba36dcd00a3e135c8114",
"/": "aae848141449ba36dcd00a3e135c8114",
"main.dart.js": "306421f9b2c560f6f20e8434b9866554",
"manifest.json": "864c8cd9830b4a60b262dd6a973a2d67",
"version.json": "99897d4b9cd5147e0e535c715fd83ae8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
