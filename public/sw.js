if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,s,c)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const t={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return a;case"module":return t;default:return e(i)}})).then(e=>{const i=c(...e);return a.default||(a.default=i),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1a35667def4fa2aabfa375f6153c332f79234c95.91c5048386db2c90d419.js",revision:"b78ebdf96fcedee4e7b04217fb77fdbc"},{url:"/_next/static/chunks/25c37ec045f6304cce00c5e56cae4ca60bd5d489.4a747284c2191e50f354.js",revision:"c81d69dd2354ba5be97ee12a90dd2b74"},{url:"/_next/static/chunks/2dedcaf4.be8a14981de1e49f3a43.js",revision:"2c4548c4667d1686b203ae34b2743463"},{url:"/_next/static/chunks/3622b5fcfbfb769b8f06f0e0b8beb6382362dd42.039aaa764d3681aa7c79.js",revision:"cbac57353f1e322c017c675a0335aab5"},{url:"/_next/static/chunks/3ac4abde.fb557174a857fced71bd.js",revision:"42a757f4f45a8e397069fb0b86a05559"},{url:"/_next/static/chunks/439464f67f3ccd25c35609ccf334d1ba9c3dda5a.4ac61f2caef5644d7380.js",revision:"139bf0d9431fb7c22368257b0818544c"},{url:"/_next/static/chunks/500a3fbcc7f22c3478b672dd41f34563f82ad92c.3e1930ad3ab6e557e715.js",revision:"882e70784bf525cfa5418c8569291304"},{url:"/_next/static/chunks/6e7d6586.a9e33c39163592bb6e09.js",revision:"e13098a18d6ee2e298483df8b755f37c"},{url:"/_next/static/chunks/78c0546e.043adf4c3e17f81859eb.js",revision:"ce3ad7ee7248ceb525df699bc4a9012a"},{url:"/_next/static/chunks/88f9f47fd8aaa31d785dc08a5da0b118fb4bdfbd.0faa493296c5fc91a568.js",revision:"2565b571d05b63f9ef9f55f65c126ae8"},{url:"/_next/static/chunks/a39c196d.84d6b6877d691f366d77.js",revision:"a1cb913f18b2b0a0cd9ca7b7a1ebadc4"},{url:"/_next/static/chunks/a5c9aa26f040d37c987540b9206461b054d9fe0e.964eae2782c729892db4.js",revision:"0e69ebe03c49f0d7c8e93600cc4fd55f"},{url:"/_next/static/chunks/a77ead71.0da1cfff043514c53a5c.js",revision:"05b6929068ccecead4f97c9dc4e69ffb"},{url:"/_next/static/chunks/aba21239349bee8f14face6b86694f54c96f028f.4484f450998d8153e73a.js",revision:"db1a8d9b47aeffcb64339ba4393c2c31"},{url:"/_next/static/chunks/e2192bbb3eb1f672976a02b79dd4104141c3b760.e2809c1d592a422db37d.js",revision:"e124dfa6df071659ed1a464efdcaa600"},{url:"/_next/static/chunks/f822666461d2938a958598de72e2dadaa437a52a.7921a641b75a54aa7996.js",revision:"22161d8ab80e22e1e1556b50a968ca35"},{url:"/_next/static/chunks/framework.4dd1003cc9c949c7fcd3.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/css/938b38f4b812daa9fe83.css",revision:"fbf3e65f27ee7c6d3ff0053dd9427797"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/_buildManifest.js",revision:"73169898b83782e1373f2910daf930ad"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/404.js",revision:"77691f47d6d01bb21cd016353f168523"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/_app.js",revision:"c28413aa3992a75113efc0c92929acdc"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/_error.js",revision:"a9c7975c60c3e12e98f61381f26497fa"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/3layer.js",revision:"d03ae9940bc013bade5b8e88be5d2ff1"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/apollo.js",revision:"3be818005f61e9a32af054fed0f20477"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/apolloclient.js",revision:"140bf2840fdef30ea2ddbe64f8093bd3"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/dataloader.js",revision:"1f6cac4f916e72db8ff6b352ffcde226"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/dbnormalization.js",revision:"27add936b07d5159a27d457f8fb0c934"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/di.js",revision:"838877cecfe55fa5b948cba0a062b801"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/docker.js",revision:"8bb94f36c4e41f73e1a66a634c51d5a5"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/dry.js",revision:"5e0f3390280dce5e867ca8a3542ab181"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/emotion.js",revision:"4a07d4869fa3f11c8aead8d595613bab"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/express.js",revision:"a584a05deeac7c62d06c25f9138749ed"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/jest.js",revision:"c259b3eebc0dd83aee650da2b7123e27"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/jwt.js",revision:"c7185ff3fcf4f2b35b82770b718724d8"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/mongodb.js",revision:"ad0fe9243fc76b56ecdd67548539227f"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/neo4j.js",revision:"ca7adf72fe9834f256dcb653df62be64"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/nest.js",revision:"a32291a12527cbd811aa258bdf2ce828"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/next.js",revision:"dc161e7b666ce97253d850676486235e"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/passport.js",revision:"729b5cf60696dabd9adec90a496d8de6"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/postgres.js",revision:"1224d191afb3de4cb43c55aa9c640c41"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/react.js",revision:"5375d9cac910a4099f247a363f0d43b4"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/redux.js",revision:"9ef7f28dedafcea8cd1786ed0c4e97be"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/typedi.js",revision:"8496890523787f74e5090f1a9703b052"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/typegraphql.js",revision:"97742b48be919b8f3fc0b7cdefc253a0"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/compute/typescript.js",revision:"f6ad0a4f093605cbe14251f8efc34111"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/contact.js",revision:"f083ac10e5dff15d6f81c508ebde7b0e"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/design/color.js",revision:"c10651f8719eb06ebc5b6fb7e3395de4"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/design/grid.js",revision:"642b3d2218f2dead14e16c2cf83750e3"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/design/motion.js",revision:"f7b8d7f81a2e0f0b76fa3edc96f0e370"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/design/typography.js",revision:"8bc16bf532e9f51253339a61b664280b"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/index.js",revision:"697adeebda505cf397cc86d1954adfb4"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/antonioni.js",revision:"8c65513f2c454c8cbd1e91c5438121f9"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/araki.js",revision:"5798e3eec560ac95d6d30834b21993b2"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/bergman.js",revision:"eb2ecb305eb59329cf3abd0a1b4a4747"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/bresson.js",revision:"c43b22d509c9904ee8309b844c625adb"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/cassavetes.js",revision:"d4a2bf9a9e46759e9de3456b79f82cfa"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/dreyer.js",revision:"2f0de241b6d455af6239edd4ca1044a5"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/eustache.js",revision:"ec3e24004f52b88f5f6c25a12dcb1488"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/fassbinder.js",revision:"72984fb15fcd1680eccb4c07dcdf9dbc"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/fellini.js",revision:"43841819201d030bafec022eea39bcc9"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/ferrara.js",revision:"e39281632eb108f2b50e9ca9d55e6498"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/godard.js",revision:"0e4d4a62dd16d5dab141150d6f70b473"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/hsiao-hsien.js",revision:"229efce7ba858036f5032e3684d04f0e"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/jarmusch.js",revision:"5da6dd9f21f0e9015ac6192bfb7ed59a"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/kitano.js",revision:"ad76c85137ea720e2f9b2d96c3766d7a"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/kubrick.js",revision:"607dadf54f3cfb4531b8acaf1230699e"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/lynch.js",revision:"30284dbcee47f4b9706f2f5a45a0681e"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/malick.js",revision:"87c6a3e6b97fc8f702097d90a80d13b6"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/resnais.js",revision:"8f1d8f3578be3f655ce423ee5ca9026d"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/rohmer.js",revision:"ac11841ee8e93ff6707e4947eaf3363c"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/tarkovsky.js",revision:"f73ba4d4f739eb7f05fe1b3eec9247ea"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/wai.js",revision:"8f93cb35687bdc706842fbda2b3e48b7"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/cinema/wenders.js",revision:"7cc4ba8341e001d8d44abc5c5cedc113"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/cuphead.js",revision:"a4e218f22a6e870ef167c3039970c3d4"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/darksouls.js",revision:"5d37c124ab9aa7af11548b618ee94ca3"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/devotion.js",revision:"f7392ce7ec5c283a5c1a5fd438a87fc0"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/divinity2.js",revision:"d888bce0fc7939ae3bbeb376505e6190"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/ethan.js",revision:"c7d3df254bd38e27b5ff59c179223373"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/gonehome.js",revision:"7af80d7af0cea1f5ce8d9bfdf72ae5e6"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/inside.js",revision:"d28fd7e0210d51fae2280dfcb676c7de"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/nier.js",revision:"035acfbf7fcb269961b5c976c82e0d62"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/obradin.js",revision:"fa378f6db89d9d051c3e87237307ecfe"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/outerwilds.js",revision:"16fb3c7ae4e26fad4b7f23e57f8569d4"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/outlast.js",revision:"c7a5c2769e2c03189519879ebedc1407"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/pillars.js",revision:"3ec27c7184524417618cab8b33a6db4b"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/soma.js",revision:"775378228b495928815eb3987ed907e0"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/stanley.js",revision:"7f062d765cab583cc0c4515028825919"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/undertale.js",revision:"d572fe28e23250f4bc6dc7d88e07d9cc"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/games/witness.js",revision:"2bccd42e602020bcf7399c72e69467e3"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/balzac.js",revision:"e49aa4d9d3d28fbd2937b69d9fefcdf1"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/coupland.js",revision:"720d5ba65f3d68351b094a5c64f382b7"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/delillo.js",revision:"a6b6c28f55e26eef5e6d5fe6878241e6"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/dostoevsky.js",revision:"880b6a0384cfcb5f6c278f1f94830b1a"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/ellis.js",revision:"219d21760887dd80becfe8b82ad33901"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/faulkner.js",revision:"5a0481fd60911791ebaf2bc8c466ceb7"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/fitzgerald.js",revision:"208b87d4e274cbbcceefb40fc6be6bfc"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/franzen.js",revision:"f9ff4d6f215b84093d24922643d62902"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/gibson.js",revision:"a84daa5e4b0102c86380f2d92c3852fa"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/houellebecq.js",revision:"8e45ecff3914b3e4c7474593c0f56f82"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/kdick.js",revision:"6336bd26cb4912281ca48064a7ab2441"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/king.js",revision:"a3eeedb51b14dc1c3e685d4680683008"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/mcinerney.js",revision:"8b3a95982108081521ce799d8313a855"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/murakami.js",revision:"d56e2a9b793d819e41716a32f55a139b"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/nabokov.js",revision:"1364af1114800f0e64288f55aeac2d85"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/orwell.js",revision:"df03e07adc6ba0c5a63b43838adb4669"},{url:"/_next/static/ikG2SSlGVAZ5mjorO9toB/pages/life/novels/simmons.js",revision:"64d07e00d259b455bb2673cb8584dd5e"},{url:"/_next/static/media/icomoon.298b8fb199a114e952e67c9d9ad2730d.eot",revision:"270e857538b4ec7e95e4f1b0160bb66c"},{url:"/_next/static/media/icomoon.72fc3928f8a5c0af89e20436bb30206e.svg",revision:"924763cfd243845a6965db0e0c66e5e2"},{url:"/_next/static/media/icomoon.9c21fa44f5b5e0a6abbb8fca71ee8bf8.woff",revision:"bffc4f77f379857f908e44821632322b"},{url:"/_next/static/media/icomoon.c1fceacfe3098867447bce16dfdf234f.ttf",revision:"9567cfafab9d1cab7e8432cc6a284cf2"},{url:"/_next/static/runtime/main-265506f050baa2b29819.js",revision:"77fd72e1ebe2936589265db1d0d7f7ac"},{url:"/_next/static/runtime/polyfills-799c8cb3786ec3bdd052.js",revision:"90bceb342b2c6945f4adfc0bfc89479a"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/church.png",revision:"3c18e236e37943ab5d260dd27ac793f5"},{url:"/fav.ico",revision:"fd1d01e02629bc8288b055b2ee4b177f"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/icomoon.eot",revision:"270e857538b4ec7e95e4f1b0160bb66c"},{url:"/fonts/icomoon.svg",revision:"924763cfd243845a6965db0e0c66e5e2"},{url:"/fonts/icomoon.ttf",revision:"9567cfafab9d1cab7e8432cc6a284cf2"},{url:"/fonts/icomoon.woff",revision:"bffc4f77f379857f908e44821632322b"},{url:"/iconStyle.css",revision:"ff8048fbb4873cb38f18968c5c5ba50f"},{url:"/icons/144icon-.png",revision:"5a31ca6c3ef2776c918c1516a805a44e"},{url:"/icons/85icon-.png",revision:"c5d39a720b5b01a3628020f31fed75ff"},{url:"/icons/86icon-.png",revision:"5f4a174eb022cdbf181acee72b40fa15"},{url:"/icons/87icon-.png",revision:"4212d9afe2d8cb38157270b38e09fe04"},{url:"/icons/89icon-.png",revision:"06b6c34038d24cdf197f6ae926283552"},{url:"/icons/90icon-.png",revision:"210544a6917f75e09b9ebf93e57168d2"},{url:"/icons/91icon-.png",revision:"e107258dc413a600137b6dd6d180c875"},{url:"/icons/92icon-.png",revision:"78fe508be0a32d15ad81657fa05a551a"},{url:"/icons/maskable_icon.png",revision:"210544a6917f75e09b9ebf93e57168d2"},{url:"/img/grid.png",revision:"b2594714867aadf59ffb343891ca0eda"},{url:"/img/jimp.js",revision:"65a12f5e33b78cf7ba790aef33f34387"},{url:"/img/nest.png",revision:"a136d3b81038fd1b4aa170ac67ec9b29"},{url:"/img/test.js",revision:"178bace2210dd927fc6d2b3ba51e15c0"},{url:"/img/type.gif",revision:"d72c9df4d6e23fe43dc40d38fa32247a"},{url:"/manifest.json",revision:"ddcb3be3672d95f8e46c25aef2cadf08"},{url:"/prism.css",revision:"3884993c69bfe15610fe7803351a6a87"},{url:"/share.png",revision:"680b70deb99d4f2a53e85906d13fd8d5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
