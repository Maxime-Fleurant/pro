if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,i)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const f={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return f;default:return e(c)}})).then(e=>{const c=i(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/_buildManifest.js",revision:"cd32a2cca4752143290568b45621c5c7"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/404.js",revision:"e83c23e5574618d9bf1f7721feb804d6"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/_app.js",revision:"94557f37e090a77ae5944263900d3e73"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/_error.js",revision:"b02d4b56535c334b07fb43a0b3b97101"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/3layer.js",revision:"b8d6aaa4b095186195ad017ad069d48f"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/apollo.js",revision:"e93262dd342a111b681aeb1310ca43fe"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/apolloclient.js",revision:"b97845078fc85865c3c975e1aa86d70b"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/dataloader.js",revision:"55d7d65eb24ee8d841ba864aa1cd88ca"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/dbnormalization.js",revision:"399f2f124be6e8e0d3dea8f9ee860c27"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/di.js",revision:"5758228b80b62eb571b169b38129a8e2"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/docker.js",revision:"f2bf89a3795494c35a0b3994eba2cfc5"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/dry.js",revision:"42120980ff30b5142dc5b6658e9c7894"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/emotion.js",revision:"1e687f14ee2e8eccb1542344e2e9d87f"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/express.js",revision:"44c48460670fcb6e313a9387cf46811c"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/jest.js",revision:"a5aeff3142741e0003473f186c8bf926"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/jwt.js",revision:"c2ccd1ec4cc7447344f40192fd1f2fb5"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/mongodb.js",revision:"4b03a54210dd60cafa367cb31f64847a"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/neo4j.js",revision:"b345a16231cdea429f5e0fa4d92ffd13"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/nest.js",revision:"2619a4e727bb32e9eec928e1f4d36cc8"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/next.js",revision:"0245dde8757a520ea3d3bbed4c49ea19"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/passport.js",revision:"aa49c872733bcf321ebcc81f7d291ba2"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/postgres.js",revision:"e6511cc94340ccd0aaf5e792707c5b2c"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/react.js",revision:"2056e013360a2d29327c732152003274"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/redux.js",revision:"4e3996e3690d4b18143f941e1547d7df"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/typedi.js",revision:"e37e4729f43b8e063da8524015b9918d"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/typegraphql.js",revision:"4189796b1673db329e0b91099be41e93"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/compute/typescript.js",revision:"a70dc93b675af85682133321bbf465e0"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/contact.js",revision:"be4243e21e9c333149b0f1f5d870f8bb"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/design/color.js",revision:"9822a24c98ee578df80adad629aa1e87"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/design/grid.js",revision:"745b34ca2ea17d983c6517a7ec145745"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/design/motion.js",revision:"229178f3f8f9862225ba7c41bea08536"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/design/typography.js",revision:"a3e395699d92ff6994cc0e0f24a72def"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/index.js",revision:"07dc8145cac2aee4ec268d35b7a69805"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/antonioni.js",revision:"f2e33e5530e30326c9ae9dfa7b7c5b2c"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/araki.js",revision:"cad92927e3eee1b960e00bc905c81301"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/bergman.js",revision:"6e5413252ec79e6f13b37927ffa05306"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/bresson.js",revision:"13f44f46fa74cab3ff8100024426ee86"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/cassavetes.js",revision:"5bd91ba3a5d016f7f3a70e49cc83c7d1"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/dreyer.js",revision:"3b39f06cb320a386daec4810adffb51f"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/eustache.js",revision:"f7280c382ad4310ccada40581b681b1d"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/fassbinder.js",revision:"aa2a1192814ae34dc21bcb2104aaa586"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/fellini.js",revision:"c62f2eb40938017caa3cea2cab905fc1"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/ferrara.js",revision:"474ce5af75223375ff678288cfe2ee9b"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/godard.js",revision:"13302fa5f6b7a540b0b23230c0051fd2"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/hsiao-hsien.js",revision:"e3bde784828021b9871830700775e1cd"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/jarmusch.js",revision:"267cfda8c8aba00a19e529359c7b6d73"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/kitano.js",revision:"2b757904d4d051e1083631c22969068a"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/kubrick.js",revision:"db11136a85c788d35f65a1cbb2af6eca"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/lynch.js",revision:"6c4c3ee66615adc6b5c4f92009575145"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/malick.js",revision:"ca1fe66bb496d5d46e2fd818880d40e0"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/resnais.js",revision:"c342fbfd71965c8e32247086bdc65e83"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/rohmer.js",revision:"bbe09b1550efe7b053e59fbb5f3e8a43"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/tarkovsky.js",revision:"efbd37406b2afe7095e8132b0a332a1d"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/wai.js",revision:"63cc645e4ceb84ea156f0cbee8099571"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/cinema/wenders.js",revision:"c803ba4d69f575184e11c4903c8a925a"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/cuphead.js",revision:"b61fb4d1d462b979cdc1b0fece561793"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/darksouls.js",revision:"16bb6979204bab98bf031be9345cedbd"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/devotion.js",revision:"cf201af466e43031b3d7cf50a82f8268"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/divinity2.js",revision:"df04e80d9b2657a04012a78e1fb412c0"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/ethan.js",revision:"c81f7f644fc3d4dcc3bb05fc752848a5"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/gonehome.js",revision:"4b1a12dd144a800b0f8fd9ca3d124a38"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/inside.js",revision:"0fa96d24c936fd37dc5a7ab2a4ad8aa3"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/nier.js",revision:"d752fd3ec46936990535148acbe6c132"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/obradin.js",revision:"8507ddcc74535ac5e00f8b4a23992cc9"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/outerwilds.js",revision:"c5a67c516eec463a62066ca641d1ccbe"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/outlast.js",revision:"2b2e6a8b74ded3acb7fe1560efe5db43"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/pillars.js",revision:"77253a9f81bec93b2bef6ad3a0806573"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/soma.js",revision:"809d11812c83e05b9fb43362372ad12c"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/stanley.js",revision:"d4a2f2c1e77971b3b97d5f4ee1def30b"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/undertale.js",revision:"65a6040ea930dc9d0b3fd05c7e40bd44"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/games/witness.js",revision:"ebc14b922a57f8d8a32de0212b0b9691"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/balzac.js",revision:"c042331c00a12d6881f78bebad5fd4f8"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/coupland.js",revision:"9986027d796a708e7d77af3eea7c100d"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/delillo.js",revision:"55947f1a784afe92b0a5dd241c8dae2c"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/dostoevsky.js",revision:"3bc1f24c34726707838ef1ba60199bdc"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/ellis.js",revision:"b56fe9eef694ba4e5436774059d5a885"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/faulkner.js",revision:"353bc1d91ebe02ccfda78269436ab22e"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/fitzgerald.js",revision:"d2de990c55350a1d0c7846b222d27d89"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/franzen.js",revision:"b8f294fdccb9cf96eac737ecf8fff705"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/gibson.js",revision:"2b91826387e77234dff31668fc51458e"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/houellebecq.js",revision:"636d957a2d5c87cd6b25903b9ebc92de"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/kdick.js",revision:"ee4384b6142d2ad8b6b635bdb69b682d"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/king.js",revision:"ed516708ef6ed43346e3217bdc958159"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/mcinerney.js",revision:"70213acce2343d2ff075dac3fc74329f"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/murakami.js",revision:"5f34bf3abf5ae08f40275bfe522d3b05"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/nabokov.js",revision:"dcb2202b7255d0f95b9de4e7b4b33ae9"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/orwell.js",revision:"b6b82cfcdc619bf9a57a0f984912925a"},{url:"/_next/static/FuCPvZw6cCwfoyN_FU6XB/pages/life/novels/simmons.js",revision:"4e5a2e8495fa2f0248230c618fd526fb"},{url:"/_next/static/chunks/2dedcaf4.fdebc3f0495bae4e2dde.js",revision:"09ed79cca04ed36042dd6f3b785ae744"},{url:"/_next/static/chunks/35b3ff3d8d73687bd5483878c20ee3d018909744.4bece95a3b0b9db64f57.js",revision:"64a92191069008553abef4bc90f0b438"},{url:"/_next/static/chunks/3ac4abde.fd549f6dc1879578bdeb.js",revision:"9b5663b3cb79bbd58a4df4c8b8e3a977"},{url:"/_next/static/chunks/6e7d6586.386fb6fe179b7c4dc1e7.js",revision:"1c65b359394746139181adf9bff3ef72"},{url:"/_next/static/chunks/78c0546e.7b19a644e5a6aeb3998b.js",revision:"b10c5f2d554400aeed9f868594231e2b"},{url:"/_next/static/chunks/7a6fdf6582dffe58027fc3ead0f250b269b7d77b.26fc82bedb31d2c90139.js",revision:"e90fe3c2a03873b35ed1fb365b745f16"},{url:"/_next/static/chunks/7ee056d95dacad237a80358b815a2684143cb710.c5785b9df5ddca25a131.js",revision:"0eca9ca13f3c064109ca73ef1f9feb7f"},{url:"/_next/static/chunks/909a606fff6d850f8a3d67ffcc9208a1d4835fd4.80e09b6a684b55a47f51.js",revision:"8d3547689e78daed60152e3a2d07152b"},{url:"/_next/static/chunks/9d56d6ef54a34a7f409f9ddbfa0c87088244f614.b7b0582b374ffd5b96ba.js",revision:"17d3bdeb1c90cf704cc17624264719c6"},{url:"/_next/static/chunks/a39c196d.7732bb4d623c4027b07a.js",revision:"6bd2016e02454b9e2e0f8f2cb7752195"},{url:"/_next/static/chunks/a77ead71.47451887426841332640.js",revision:"0428027174700a9e6ac0909cf97452f3"},{url:"/_next/static/chunks/ad2e444f622332dc7059614666c0727ea79a2d71.4edcd8715149e9f9d315.js",revision:"2565b571d05b63f9ef9f55f65c126ae8"},{url:"/_next/static/chunks/beb80f4da46bdfce8a2013c14c4fb6480f5e399f.53b50bdb0fd599bfe2b0.js",revision:"c1ebfb6ed6e42baffc112374b7c19c16"},{url:"/_next/static/chunks/cbdd218c44df0c31705eb0ab6c5dc22461a54c6a.67a8b6179067c3abb918.js",revision:"24b7e21575121cc91374416ace461f6e"},{url:"/_next/static/chunks/framework.4dd1003cc9c949c7fcd3.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/css/cf48728eb59a745b9bdf.css",revision:"fbf3e65f27ee7c6d3ff0053dd9427797"},{url:"/_next/static/media/icomoon.298b8fb199a114e952e67c9d9ad2730d.eot",revision:"270e857538b4ec7e95e4f1b0160bb66c"},{url:"/_next/static/media/icomoon.72fc3928f8a5c0af89e20436bb30206e.svg",revision:"924763cfd243845a6965db0e0c66e5e2"},{url:"/_next/static/media/icomoon.9c21fa44f5b5e0a6abbb8fca71ee8bf8.woff",revision:"bffc4f77f379857f908e44821632322b"},{url:"/_next/static/media/icomoon.c1fceacfe3098867447bce16dfdf234f.ttf",revision:"9567cfafab9d1cab7e8432cc6a284cf2"},{url:"/_next/static/runtime/main-2e488d592db11cbb90c3.js",revision:"93af6f6d7e4e3f4f5ca0b69fbcce5120"},{url:"/_next/static/runtime/polyfills-c1389fd8ebdfa435719b.js",revision:"05072f204521a83eb8153381f7cfe8f1"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/church.png",revision:"3c18e236e37943ab5d260dd27ac793f5"},{url:"/fav.ico",revision:"fd1d01e02629bc8288b055b2ee4b177f"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/icomoon.eot",revision:"270e857538b4ec7e95e4f1b0160bb66c"},{url:"/fonts/icomoon.svg",revision:"924763cfd243845a6965db0e0c66e5e2"},{url:"/fonts/icomoon.ttf",revision:"9567cfafab9d1cab7e8432cc6a284cf2"},{url:"/fonts/icomoon.woff",revision:"bffc4f77f379857f908e44821632322b"},{url:"/hover-min.css",revision:"c3b8b4eec4f7e8d0737b9484b9ffe458"},{url:"/iconStyle.css",revision:"ff8048fbb4873cb38f18968c5c5ba50f"},{url:"/icons/144icon-.png",revision:"5a31ca6c3ef2776c918c1516a805a44e"},{url:"/icons/85icon-.png",revision:"c5d39a720b5b01a3628020f31fed75ff"},{url:"/icons/86icon-.png",revision:"5f4a174eb022cdbf181acee72b40fa15"},{url:"/icons/87icon-.png",revision:"4212d9afe2d8cb38157270b38e09fe04"},{url:"/icons/89icon-.png",revision:"06b6c34038d24cdf197f6ae926283552"},{url:"/icons/90icon-.png",revision:"210544a6917f75e09b9ebf93e57168d2"},{url:"/icons/91icon-.png",revision:"e107258dc413a600137b6dd6d180c875"},{url:"/icons/92icon-.png",revision:"78fe508be0a32d15ad81657fa05a551a"},{url:"/icons/maskable_icon.png",revision:"210544a6917f75e09b9ebf93e57168d2"},{url:"/img/grid.png",revision:"b2594714867aadf59ffb343891ca0eda"},{url:"/img/jimp.js",revision:"65a12f5e33b78cf7ba790aef33f34387"},{url:"/img/nest.png",revision:"a136d3b81038fd1b4aa170ac67ec9b29"},{url:"/img/test.js",revision:"178bace2210dd927fc6d2b3ba51e15c0"},{url:"/img/type.gif",revision:"d72c9df4d6e23fe43dc40d38fa32247a"},{url:"/manifest.json",revision:"ddcb3be3672d95f8e46c25aef2cadf08"},{url:"/maximefleurantcom.xml",revision:"1d48e02404c18cfa82bddf5b394f0094"},{url:"/prism.css",revision:"3884993c69bfe15610fe7803351a6a87"},{url:"/share.png",revision:"680b70deb99d4f2a53e85906d13fd8d5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
