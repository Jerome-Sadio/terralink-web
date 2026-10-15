'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "99315f86eab94d28d91420b95bfb059b",
".git/config": "735fec39b965479c20dd2e34bc8b126a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "79cb5ffffcf4bf198d0fb91b6d516092",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "875be8cf71a2a1cf4581329ec77136a2",
".git/logs/refs/heads/master": "875be8cf71a2a1cf4581329ec77136a2",
".git/logs/refs/remotes/origin/master": "dade9d3438d4d151521d7e90666cf050",
".git/objects/07/265caf9f82febfc2a165904510e581b48b6247": "6c2d5aaebdf600c6b1c45511b094b2d8",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0e/522596288ead922c65339afd3c4da57cf01ef8": "591ef8974b36b981813183e049eb4e3b",
".git/objects/10/f3b15a627da886e0244d2f24def79af08aed6d": "315ef615e7db632e0504c85162441ea1",
".git/objects/11/c197b81154d269efd7dd0cc65d3e61df045463": "b18372ef50d4f6fc67157e8f0b79a9be",
".git/objects/13/0decea268b3d0781eb2a543a1fb98e96ec0e04": "aedfc57b21f92d7e91fb797bfef8ec28",
".git/objects/1a/12648e5183a9055c1b9b7ffe87ca9186366b11": "520d0ba56d4f8e8cc7b148cb307a0b11",
".git/objects/20/878e35a6d9caaaa03faf074cfca2c6416415f9": "d8bcb04a1d53977cabd830c3d2655ad2",
".git/objects/27/024e38e32eb7dd955542e09740a388d3a66e3f": "60539fbadb7dd292ec444763b087984b",
".git/objects/2a/89271227160c409a6908865ebd425eaa1c8138": "b04ec77feec4e8d267215b9bc11d11bf",
".git/objects/2a/ac29bafd2b51e72c062e3c057aaac7b99ca9cf": "e82ac120dc6e87b5a657f9e436369efe",
".git/objects/3a/5cdb666f1a941a53f96698fd122a4c50f7a21c": "bc244fe691f97e84ad083ea145decdb6",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/41/f66fd7d989bcb4b3b8269bc2408b08eaf68b2e": "6f956744ed3a322cd047aab862a17864",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/976b062d71d8d8accc1dab6eee0e6d77c5e51c": "c465fe6f6ca206709b15d76f959c6425",
".git/objects/46/9a2c7ab5af36605bff2cd08b902e0a492f84cf": "0fd6735e9ff56189f0c3ce8876edfadc",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/ebd913df22ba57708397ce55d8a77682aaaaea": "948c3b0d135ba6423d7c8cee04c5e2a7",
".git/objects/52/8415ea05701880221f9aa943aa687ee4e8fbef": "06fbf2610c4e4c36879dcad4b98302d1",
".git/objects/55/e9944712eb7867d140792d36d29ac849ad2842": "f31635b934f11948824979ec8c747920",
".git/objects/5a/76561b5f39f111d81bcdd416d19d45bb896259": "37c9433dea287ee86bdcf70c20dfbbc3",
".git/objects/5d/ebc99be178ddc6a1ac31908bcd03f679132fe6": "d7bccdaa0dae15dec19608d885372a9a",
".git/objects/5e/24bb7c40ef4bb06903b434e8695297ed4df1db": "62622fc8049cf76d28fc1e5d17f1eae8",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/7459ea33a1f938466f4a2e98f69e43727b502f": "7ad26c888ce39d1a734085018dc362d8",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/fa2818047cc1d8e0c3d0e815e965a7b9500a0a": "1d71bf2936c1f42d3bccc80e765ecdd3",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/78/e402087b46bc506d1f4dad7f980c531117216a": "ab7ad30ac98dfbacde5ad51771e9e716",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/f3a4e030bee00b57f64fd3d093637c4dcf726d": "a338be62f836672bb52e5c3b21fec104",
".git/objects/80/3b7712732761c4f7299641491d69c638c5a6ae": "e90c7b57cdc310ecc1dcee03ede09bfd",
".git/objects/80/495d97e0a6b3a4eb7ac0865f63b0f6faec58e8": "01c77e68320b8f4ce33e8f70e086ffbd",
".git/objects/80/8aed8469eadc54575abd6a9411c504e25370fe": "043e18221a643ba754cbaa3026d28188",
".git/objects/81/97489ab504b8b67047bea20efe95441f2b646c": "5cf73e9fb479fa434fb81d8eddfcd0f4",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0221dbbc32529803c1ad9b3a2be77261b5a22a": "893789132a3988529d78eefd7f36c7e1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/dbccf4bef037cad29093228ef4bfae3863380c": "08519abc1b11c1d8eeb909fdec4a6218",
".git/objects/90/574f6607de52399529486b605e65508108af61": "e97317908e08b8da6b1eebe89e2acbe9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/93/c3298fbe34cb2c42fc19c38920ecfcb7fa1e78": "d91a1cf0b7aa81f26041aba8fc77e509",
".git/objects/94/d852a374fa62dead78be70ca97ba6bf51a09ef": "c474e0ef6917341fe7e18b2896595db3",
".git/objects/a4/e017557281f0315aba12513d1816ce36bd5c68": "b307e22700e26ab47eb5d4ec3ba9cb16",
".git/objects/a5/5a4a46a339bc85014acfe6f4d1a3bc8e9046e8": "02bb4c5087212229f8c076e56f879f83",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/e98001e902d3f82a197788e8222b93c46b157d": "47570e2b16721e09bb655eb5294010a9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/45b5ac86bd436913d22710a43c34a247ab2a9f": "e1d471c0f554b7ea6cf97a4a8b173201",
".git/objects/c2/118792bb668167f6015439ab81ba648123d5db": "1b41c6e3014ae423c495b09635c45f79",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/e103047bbcdaee8f002f5df20a9931ba00afee": "a98ee5fe20d81474109a36b4bccc37ca",
".git/objects/c9/9e10d6ed31cd6a1cfc3af35ed7cb5acd4ed347": "bfec93afdee8168eb281837858c40897",
".git/objects/d3/dcb10453af5af8b247d1525708e724a8aa33a3": "8dee94811bd7deea4e1dcde529389059",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f4dbc936856213d10300f76ac3385d3e66805c": "68823bc92047c438d009d2185bad466d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a8c21b2248fe750a5abc08d7ecbcd52fd4af2a": "1dce4eb5b53ad6e03b08509e46ffe1a8",
".git/objects/d7/6173198423682ab7d66b773e8c07aecef59ff8": "f45aa6850196ae0f63f3517d98578d15",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/c19188eb05705d021dbeea546d27280606202f": "c364acf70821dc65f3e69391dc85a549",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/17f425de80e91cdd16d85a195d013521cacd70": "1ff1518de1fb89cb6b38e6271377cd42",
".git/objects/e3/52f688b06a764399d9d410f5bd4ebca734e4bc": "98b9f0a05a7e459a17e8057b54c28fee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/abcb3c713867a12d494c5ad94e4deac1ed9688": "08cb5a62ec4cacbdb75925f9548abec5",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/2ba05ebc59fd0c901d1d6f16775ed0acbdbeea": "8e876cd8cebdf51076f8f5ec903c7d2b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/3b1c4b8331a833775055bc53a0a17eec0d2582": "5a90d3dc71fce856bb1c9a708f41d6a3",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/refs/heads/master": "521267bc94ac5a8a8e0c4e7e7aa51940",
".git/refs/remotes/origin/master": "521267bc94ac5a8a8e0c4e7e7aa51940",
"assets/AssetManifest.bin": "1aede398b6acc2694944b2c8d523890c",
"assets/AssetManifest.bin.json": "452cf45057f13f0fc0070f0b96bcc3ce",
"assets/assets/images/terra_link_icon_square.png": "77b63b088430ced9212fbe8823df4978",
"assets/assets/images/terra_link_logo.png": "34a560c23507ece26c901ae0d8c2f070",
"assets/assets/images/terra_link_symbol.png": "3b82a4165c25b6b66f227ce5b40923da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c95232dc1cb8a9e2c285df2697d32ddd",
"assets/NOTICES": "5a7065fa39694163d03d63ad321b71c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "aedffb303996ff400e521ea0d3cf7c74",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f46f484a7d0cb1e88618889a9d38da0",
"/": "0f46f484a7d0cb1e88618889a9d38da0",
"main.dart.js": "ce23cdf0f43942eddffc70334b0f4655",
"manifest.json": "30b24dcdc364b6f80ce511c26c1146d4",
"version.json": "47234036038bea5c2825a19c29924feb"};
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
