"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/elhedran/rxjs-dew/index.html","c500634f5fe1473d46568bc23c721f1b"],["/elhedran/rxjs-dew/js/dist/App.d.ts","bbb2f7d644bb9076b22012a0240647f4"],["/elhedran/rxjs-dew/js/dist/HeroCard.d.ts","98f003e37898c1cfc726a6b0c8c0a084"],["/elhedran/rxjs-dew/js/dist/MyHeros.d.ts","5cea310ea178c6afaa3a213a41018436"],["/elhedran/rxjs-dew/js/dist/Rated.d.ts","49d2dfd436bb4f3e1e46b83f18abdd21"],["/elhedran/rxjs-dew/js/dist/RatedTier.d.ts","b036743786b2aa6df1698312760a8fcd"],["/elhedran/rxjs-dew/js/dist/Service/Action.d.ts","89b90220da91c7ac2029a99870d6c957"],["/elhedran/rxjs-dew/js/dist/Service/State.d.ts","9ae21a21697c686c5e9ce52de9a71409"],["/elhedran/rxjs-dew/js/dist/Service/Store.d.ts","f8b64d8a326f210b0a83b8c713891c79"],["/elhedran/rxjs-dew/js/dist/Service/index.d.ts","06f4795ffa38d5a3ba1bcdabcf569baa"],["/elhedran/rxjs-dew/js/dist/find.d.ts","059370dc962cc8593f5af084dea153f3"],["/elhedran/rxjs-dew/js/dist/hero.d.ts","3b21cfa5a6599ec3b7dbb86a60d5842c"],["/elhedran/rxjs-dew/js/dist/index.d.ts","3eedeb3f2b80bc0c6aa6fdc105d459cf"],["/elhedran/rxjs-dew/js/dist/ratings.d.ts","c019457ae8db55ee8a2f89ecef8866c7"],["/elhedran/rxjs-dew/static/css/main.3d5b1d7e.css","c588fcd76028313877cfa9f4970d8577"],["/elhedran/rxjs-dew/static/js/main.8366126f.js","29eddd4951697f1d9cbb2af0f1ca63c5"],["/elhedran/rxjs-dew/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/elhedran/rxjs-dew/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/elhedran/rxjs-dew/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/elhedran/rxjs-dew/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/elhedran/rxjs-dew/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/elhedran/rxjs-dew/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var a=new Request(r,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),t=urlsToCacheKeys.has(r));var n="/elhedran/rxjs-dew/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});