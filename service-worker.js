/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a6ab54773a4960ddb39cfa86f634ddd3"
  },
  {
    "url": "assets/css/0.styles.e7c98a94.css",
    "revision": "bef140026a83de706adadf9d7ef00969"
  },
  {
    "url": "assets/img/1.b3283401.png",
    "revision": "b32834013d7b35cfbd5731754457accf"
  },
  {
    "url": "assets/img/2.b40f7531.png",
    "revision": "b40f753199c59e274c6d62c78f40c812"
  },
  {
    "url": "assets/img/3.111e3134.png",
    "revision": "111e3134433e5d14e2aa170d3af3ae61"
  },
  {
    "url": "assets/img/4.d7221327.png",
    "revision": "d72213274ce1ddd602547a8e255cfc8f"
  },
  {
    "url": "assets/img/5.785e71df.png",
    "revision": "785e71df638b1d321f6df30a100d71b4"
  },
  {
    "url": "assets/img/6.520f5926.png",
    "revision": "520f5926298c82e5889d0af8bc121c16"
  },
  {
    "url": "assets/img/7.a0a283fb.png",
    "revision": "a0a283fb3224ba0cfeb7c8080953270d"
  },
  {
    "url": "assets/img/8.d684f123.png",
    "revision": "d684f123e86b98784e615afeb8e33f9b"
  },
  {
    "url": "assets/img/schema.1cb431ec.png",
    "revision": "1cb431ecbe8a26e136315acd164ae205"
  },
  {
    "url": "assets/img/schema0.8d88ce75.png",
    "revision": "8d88ce75b97e00ce463c29b34bc9eb85"
  },
  {
    "url": "assets/img/schema1.6a765d87.png",
    "revision": "6a765d87640723de45a6186ea910df53"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2afef406.js",
    "revision": "61f4677d2007812230bbeb4f5ac1d702"
  },
  {
    "url": "assets/js/11.6a84f7f7.js",
    "revision": "368dcee50e017aa273525e679a0b49e0"
  },
  {
    "url": "assets/js/12.b802a1e0.js",
    "revision": "8f0a36b9b4317659c8514277947ffc2a"
  },
  {
    "url": "assets/js/13.5579b6cb.js",
    "revision": "96076fd9793757e1669faad0ea007fc6"
  },
  {
    "url": "assets/js/14.0f80e116.js",
    "revision": "31b1cd5faa9685fc7dc8a48e27b5765a"
  },
  {
    "url": "assets/js/15.cc114a8c.js",
    "revision": "613c50f9a28273cd9dc680268c611fc6"
  },
  {
    "url": "assets/js/16.ed98b386.js",
    "revision": "135540c74e52abe8bc7794ec3f18c8f0"
  },
  {
    "url": "assets/js/17.7ddd4789.js",
    "revision": "5deef824648616a421852557bca71984"
  },
  {
    "url": "assets/js/18.ef13e993.js",
    "revision": "905ba8042e4abafe476e08ce2584ca49"
  },
  {
    "url": "assets/js/19.9776f643.js",
    "revision": "00b643ad40a5da766411a7f014d0d3e5"
  },
  {
    "url": "assets/js/2.704fd68b.js",
    "revision": "6e083a16c6bdda14242062f12d5139a5"
  },
  {
    "url": "assets/js/20.5a9f28a4.js",
    "revision": "ff21f4ea7f239abdd047b1e0e694eaba"
  },
  {
    "url": "assets/js/21.224a2a95.js",
    "revision": "6172736a387c34c18347e43f72853368"
  },
  {
    "url": "assets/js/22.3ab65b74.js",
    "revision": "e1c07230fc7e8d9011258a2fd4a56deb"
  },
  {
    "url": "assets/js/23.fda800d8.js",
    "revision": "47aff7d11267562e34ac4175a191a17f"
  },
  {
    "url": "assets/js/24.3f477723.js",
    "revision": "9711726d308b96dd2aed2750f801719b"
  },
  {
    "url": "assets/js/26.0e2b4074.js",
    "revision": "fe7a56c53e2b539b59b35ab0f179ffd7"
  },
  {
    "url": "assets/js/3.4cac5b51.js",
    "revision": "d7ed5a9c8033f88cd71c3456bc285928"
  },
  {
    "url": "assets/js/4.8233a89c.js",
    "revision": "83ae0e1325be58fcb2f4f85a89258f65"
  },
  {
    "url": "assets/js/5.cc15a58c.js",
    "revision": "3ca204fba8a2e88d269e13d11d1ab345"
  },
  {
    "url": "assets/js/6.58d3b519.js",
    "revision": "b552ad20537a73354385817428aa3b57"
  },
  {
    "url": "assets/js/7.c0ed9195.js",
    "revision": "e890327e1849afd3841b8e4aaa7601a4"
  },
  {
    "url": "assets/js/8.c61e4c89.js",
    "revision": "b1204655f97f9dd8bb4cda51070eae21"
  },
  {
    "url": "assets/js/9.d81d5695.js",
    "revision": "f4ae8c7bac7246157c9da94e71d91439"
  },
  {
    "url": "assets/js/app.4d818724.js",
    "revision": "4d9495299967d98887483dafd1de9a62"
  },
  {
    "url": "conclusion/index.html",
    "revision": "60e4e3bb50bdf60834689b6762d951f2"
  },
  {
    "url": "design/index.html",
    "revision": "623b5663704e21b3bfc645566efa571b"
  },
  {
    "url": "index.html",
    "revision": "33220c428c851b754b00c19d1ab02ee8"
  },
  {
    "url": "intro/index.html",
    "revision": "97f0e45b2d55d0ae07c6ef486edd66a5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5c7f8515c4b46bac9a913951ad07548d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "df6eefc9fb8250c14f6d5a9a3e29eb7d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3ae814b53f0104c2e91867d7d101b2e2"
  },
  {
    "url": "software/index.html",
    "revision": "1bb49343936a288e4be51b763f30a125"
  },
  {
    "url": "test/index.html",
    "revision": "719592fa433f9366bd259ec84eacc298"
  },
  {
    "url": "use cases/index.html",
    "revision": "f6ec93aa32cdda8699a4e69707945ec5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
