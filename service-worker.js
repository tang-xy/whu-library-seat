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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2f8288f2a03ee3ed89bb02603999e2f7"
  },
  {
    "url": "assets/css/0.styles.736aa5f6.css",
    "revision": "4dc0bc5374e141d1011bbce8b0a1ce13"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a272c72f.js",
    "revision": "853cd310b5e516bdc9fadf6e03eaf9f6"
  },
  {
    "url": "assets/js/2.2eacc74f.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.3653fc6c.js",
    "revision": "294b6808dfc277d2a462440cf950fd08"
  },
  {
    "url": "assets/js/4.9fd3fc51.js",
    "revision": "e07cd0f9f8a54758264fd4729ab10a89"
  },
  {
    "url": "assets/js/5.c0067d4b.js",
    "revision": "4ad99540d884f9b5a0472500204c259e"
  },
  {
    "url": "assets/js/6.2e1eaf6c.js",
    "revision": "71dddcebe89431dbdf5051d485792195"
  },
  {
    "url": "assets/js/7.8d6b4b5e.js",
    "revision": "256a083e99bff02babd721f5cf6bcbe1"
  },
  {
    "url": "assets/js/8.27959784.js",
    "revision": "10d49cac681aa5cd141614837f304442"
  },
  {
    "url": "assets/js/9.9a1169cf.js",
    "revision": "82639feca86abc498495c52705787f47"
  },
  {
    "url": "assets/js/app.c9826bca.js",
    "revision": "9fb0a3842f276b6f41c7bb8f4a81ca58"
  },
  {
    "url": "copyright/index.html",
    "revision": "65ffd6db7cba41a564b2cabf9d1a0250"
  },
  {
    "url": "hero.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "2b28b6cbf7741e7e176a5e0b531fd6d0"
  },
  {
    "url": "logo.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "specification/index.html",
    "revision": "50dd5af1a36b4c4ad4503d42fe08072e"
  },
  {
    "url": "specification/menu.html",
    "revision": "4b30ab1677fcded5f22a83dda8669b27"
  },
  {
    "url": "specification/others.html",
    "revision": "a3ad08bfe66f84c2386ca45061a97d04"
  },
  {
    "url": "specification/reservation.html",
    "revision": "b663f2d4f96c6f458609e9cf293ac757"
  },
  {
    "url": "specification/settings.html",
    "revision": "d5a59400541264e022082662211b9cc1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
