"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[76808],{34821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(85893),i=t(11151),s=t(51715),a=t(7626),o=t(92101);const l={sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},c="\ud83d\udce6 plugin-pwa",u={unversionedId:"api/plugins/plugin-pwa",id:"version-2.1.0/api/plugins/plugin-pwa",title:"\ud83d\udce6 plugin-pwa",description:"Docusaurus Plugin to add PWA support using Workbox. This plugin generates a Service Worker in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support.",source:"@site/versioned_docs/version-2.1.0/api/plugins/plugin-pwa.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-pwa",permalink:"/docusaurus-docs/docs/2.1.0/api/plugins/@docusaurus/plugin-pwa",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-pwa.mdx",tags:[],version:"2.1.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docusaurus-docs/docs/2.1.0/api/plugins/@docusaurus/plugin-ideal-image"},next:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/docusaurus-docs/docs/2.1.0/api/plugins/@docusaurus/plugin-sitemap"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Progressive Web App",id:"progressive-web-app",level:2},{value:"App installation support",id:"app-installation-support",level:2},{value:"Offline mode (precaching)",id:"offline-mode-precaching",level:2},{value:"Options",id:"options",level:2},{value:"<code>debug</code>",id:"debug",level:3},{value:"<code>offlineModeActivationStrategies</code>",id:"offlinemodeactivationstrategies",level:3},{value:"<code>injectManifestConfig</code>",id:"injectmanifestconfig",level:3},{value:"<code>pwaHead</code>",id:"pwahead",level:3},{value:"<code>swCustom</code>",id:"swcustom",level:3},{value:"<code>swRegister</code>",id:"swregister",level:3},{value:"Manifest example",id:"manifest-example",level:2},{value:"Customizing reload popup",id:"customizing-reload-popup",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",img:"img",admonition:"admonition",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-pwa",children:"\ud83d\udce6 plugin-pwa"}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus Plugin to add PWA support using ",(0,r.jsx)(n.a,{href:"https://developers.google.com/web/tools/workbox",children:"Workbox"}),". This plugin generates a ",(0,r.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/primers/service-workers",children:"Service Worker"})," in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(a.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-pwa\n"})})}),(0,r.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-pwa\n"})})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-pwa\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.a,{href:"https://web.dev/add-manifest/",children:"PWA manifest"})," at ",(0,r.jsx)(n.code,{children:"./static/manifest.json"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," with a minimal PWA config, like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        debug: true,\n        offlineModeActivationStrategies: [\n          'appInstalled',\n          'standalone',\n          'queryString',\n        ],\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json', // your PWA manifest\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n        ],\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"progressive-web-app",children:"Progressive Web App"}),"\n",(0,r.jsxs)(n.p,{children:["Having a service worker installed is not enough to make your application a PWA. You'll need to at least include a ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",children:"Web App Manifest"})," and have the correct tags in ",(0,r.jsx)(n.code,{children:"<head>"})," (",(0,r.jsx)(n.a,{href:"#pwahead",children:"Options > pwaHead"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["After deployment, you can use ",(0,r.jsx)(n.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Lighthouse"})," to run an audit on your site."]}),"\n",(0,r.jsxs)(n.p,{children:["For a more exhaustive list of what it takes for your site to be a PWA, refer to the ",(0,r.jsx)(n.a,{href:"https://developers.google.com/web/progressive-web-apps/checklist",children:"PWA Checklist"})]}),"\n",(0,r.jsx)(n.h2,{id:"app-installation-support",children:"App installation support"}),"\n",(0,r.jsx)(n.p,{children:"If your browser supports it, you should be able to install a Docusaurus site as an app."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"A screen recording of the installation process. A button appears in the address bar of the browser, which displays a dialog asking &quot;install this application?&quot; when clicked. After clicking the &quot;Install&quot; button, a new application is opened in the operating system, opening to the Docusaurus homepage.",src:t(1887).Z+"",width:"640",height:"505"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"App installation requires the HTTPS protocol and a valid manifest."})}),"\n",(0,r.jsx)(n.h2,{id:"offline-mode-precaching",children:"Offline mode (precaching)"}),"\n",(0,r.jsx)(n.p,{children:"We enable users to browse a Docusaurus site offline, by using service-worker precaching."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching",children:"workbox-precaching"})," page explains the idea:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'One feature of service workers is the ability to save a set of files to the cache when the service worker is installing. This is often referred to as "precaching", since you are caching content ahead of the service worker being used.'}),"\n",(0,r.jsx)(n.p,{children:"The main reason for doing this is that it gives developers control over the cache, meaning they can determine when and how long a file is cached as well as serve it to the browser without going to the network, meaning it can be used to create web apps that work offline."}),"\n",(0,r.jsx)(n.p,{children:"Workbox takes a lot of the heavy lifting out of precaching by simplifying the API and ensuring assets are downloaded efficiently."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, offline mode is enabled when the site is installed as an app. See the ",(0,r.jsx)(n.code,{children:"offlineModeActivationStrategies"})," option for details."]}),"\n",(0,r.jsxs)(n.p,{children:["After the site has been precached, the service worker will serve cached responses for later visits. When a new build is deployed along with a new service worker, the new one will begin installing and eventually move to a waiting state. During this waiting state, a reload popup will show and ask the user to reload the page for new content. Until the user either clears the application cache or clicks the ",(0,r.jsx)(n.code,{children:"reload"})," button on the popup, the service worker will continue serving the old content."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Offline mode / precaching requires downloading all the static assets of the site ahead of time, and can consume unnecessary bandwidth. It may not be a good idea to activate it for all kind of sites."})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"debug",children:(0,r.jsx)(n.code,{children:"debug"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Turn debug mode on:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Workbox logs"}),"\n",(0,r.jsx)(n.li,{children:"Additional Docusaurus logs"}),"\n",(0,r.jsx)(n.li,{children:"Unoptimized SW file output"}),"\n",(0,r.jsx)(n.li,{children:"Source maps"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"offlinemodeactivationstrategies",children:(0,r.jsx)(n.code,{children:"offlineModeActivationStrategies"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"('appInstalled' | 'mobile' | 'saveData'| 'queryString' | 'always')[]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"['appInstalled', 'queryString', 'standalone']"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Strategies used to turn the offline mode on:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"appInstalled"}),": activates for users having installed the site as an app (not 100% reliable)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"standalone"}),": activates for users running the app as standalone (often the case once a PWA is installed)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queryString"}),": activates if queryString contains ",(0,r.jsx)(n.code,{children:"offlineMode=true"})," (convenient for PWA debugging)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mobile"}),": activates for mobile users (",(0,r.jsx)(n.code,{children:"width <= 996px"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"saveData"}),": activates for users with ",(0,r.jsx)(n.code,{children:"navigator.connection.saveData === true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"always"}),": activates for all users"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Use this carefully: some users may not like to be forced to use the offline mode."})}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"It is not possible to detect if an as a PWA in a very reliable way."}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"appinstalled"})," event has been ",(0,r.jsx)(n.a,{href:"https://github.com/w3c/manifest/pull/836",children:"removed from the specification"}),", and the ",(0,r.jsx)(n.a,{href:"https://web.dev/get-installed-related-apps/",children:(0,r.jsx)(n.code,{children:"navigator.getInstalledRelatedApps()"})})," API is only supported in recent Chrome versions and require ",(0,r.jsx)(n.code,{children:"related_applications"})," declared in the manifest."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsxs)(n.a,{href:"https://petelepage.com/blog/2019/07/is-my-pwa-installed/",children:[(0,r.jsx)(n.code,{children:"standalone"})," strategy"]})," is a nice fallback to activate the offline mode (at least when running the installed app)."]})]}),"\n",(0,r.jsx)(n.h3,{id:"injectmanifestconfig",children:(0,r.jsx)(n.code,{children:"injectManifestConfig"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-InjectManifestOptions",children:"Workbox options"})," to pass to ",(0,r.jsx)(n.code,{children:"workbox.injectManifest()"}),". This gives you control over which assets will be precached, and be available offline."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"InjectManifestOptions"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        injectManifestConfig: {\n          manifestTransforms: [\n            //...\n          ],\n          modifyURLPrefix: {\n            //...\n          },\n          // We already add regular static assets (HTML, images...) to be available offline\n          // You can add more files according to your needs\n          globPatterns: ['**/*.{pdf,docx,xlsx}'],\n          // ...\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pwahead",children:(0,r.jsx)(n.code,{children:"pwaHead"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"({ tagName: string; [attributeName: string]: string })[]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Array of objects containing ",(0,r.jsx)(n.code,{children:"tagName"})," and key-value pairs for attributes to inject into the ",(0,r.jsx)(n.code,{children:"<head>"})," tag. Technically you can inject any head tag through this, but it's ideally used for tags to make your site PWA compliant. Here's a list of tag to make your app fully compliant:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json',\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-capable',\n            content: 'yes',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-status-bar-style',\n            content: '#000',\n          },\n          {\n            tagName: 'link',\n            rel: 'apple-touch-icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'mask-icon',\n            href: '/img/docusaurus.svg',\n            color: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileImage',\n            content: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileColor',\n            content: '#000',\n          },\n        ],\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"swcustom",children:(0,r.jsx)(n.code,{children:"swCustom"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Useful for additional Workbox rules. You can do whatever a service worker can do here, and use the full power of workbox libraries. The code is transpiled, so you can use modern ES6+ syntax here."}),"\n",(0,r.jsx)(n.p,{children:"For example, to cache files from external routes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import {registerRoute} from 'workbox-routing';\nimport {StaleWhileRevalidate} from 'workbox-strategies';\n\n// default fn export receiving some useful params\nexport default function swCustom(params) {\n  const {\n    debug, // :boolean\n    offlineMode, // :boolean\n  } = params;\n\n  // Cache responses from external resources\n  registerRoute((context) => {\n    return [\n      /graph\\.facebook\\.com\\/.*\\/picture/,\n      /netlify\\.com\\/img/,\n      /avatars1\\.githubusercontent/,\n    ].some((regex) => context.url.href.match(regex));\n  }, new StaleWhileRevalidate());\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The module should have a ",(0,r.jsx)(n.code,{children:"default"})," function export, and receives some params."]}),"\n",(0,r.jsx)(n.h3,{id:"swregister",children:(0,r.jsx)(n.code,{children:"swRegister"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string | false"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"'docusaurus-plugin-pwa/src/registerSW.js'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Adds an entry before the Docusaurus app so that registration can happen before the app runs. The default ",(0,r.jsx)(n.code,{children:"registerSW.js"})," file is enough for simple registration."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing ",(0,r.jsx)(n.code,{children:"false"})," will disable registration entirely."]}),"\n",(0,r.jsx)(n.h2,{id:"manifest-example",children:"Manifest example"}),"\n",(0,r.jsx)(n.p,{children:"The Docusaurus site manifest can serve as an inspiration:"}),"\n","\n","\n",(0,r.jsx)(o.Z,{className:"language-json",children:JSON.stringify(t(8047),null,2)}),"\n",(0,r.jsx)(n.h2,{id:"customizing-reload-popup",children:"Customizing reload popup"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@theme/PwaReloadPopup"})," component is rendered when a new service worker is waiting to be installed, and we suggest a reload to the user. You can ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/2.1.0/swizzling",children:"swizzle"})," this component and implement your own UI. It will receive an ",(0,r.jsx)(n.code,{children:"onReload"})," callback as props, which should be called when the ",(0,r.jsx)(n.code,{children:"reload"})," button is clicked. This will tell the service worker to install the waiting service worker and reload the page."]}),"\n",(0,r.jsxs)(n.p,{children:["The default theme includes an implementation for the reload popup and uses ",(0,r.jsx)(n.a,{href:"https://infima.dev/docs/components/alert",children:"Infima Alerts"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"A screen recording of the reload process. An alert box shows in the bottom right of the window, saying &quot;New content available&quot;. After clicking the &quot;Refresh&quot; button, the page&#39;s main heading changes from &quot;Introduction&quot; to &quot;PWA :))&quot;.",src:t(28592).Z+"",width:"1000",height:"502"})}),"\n",(0,r.jsxs)(n.p,{children:["Your component can render ",(0,r.jsx)(n.code,{children:"null"}),", but this is not recommended: users won't have a way to get up-to-date content."]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(85893),i=(t(67294),t(86010));const s={tabItem:"tabItem_Ymn6"};function a({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>A});var r=t(85893),i=t(67294),s=t(86010),a=t(8241),o=t(16550),l=t(40841),c=t(2834),u=t(35715),d=t(95417);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function g(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function f(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),s=(0,c._X)(r),a=(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(h(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[s,a]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=f(e),[a,o]=(0,i.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=b({queryString:t,groupId:r}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),g=(()=>{const e=null!=c?c:p;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var x=t(90980);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:i,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e),children:o.map((({value:e,label:n,attributes:i})=>(0,r.jsx)("li",O(y({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},i),{className:(0,s.Z)("tabs__item",w.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function S(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",w.tabList),children:[(0,r.jsx)(k,y({},e,n)),(0,r.jsx)(P,y({},e,n))]})}function A(e){const n=(0,x.Z)();return(0,r.jsx)(S,O(y({},e),{children:g(e.children)}),String(n))}},92101:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(85893),i=(t(67294),t(50191));function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({},e))}},5379:(e,n,t)=>{t.d(n,{Z:()=>d});var r={};t.r(r),t.d(r,{ButtonExample:()=>c});var i=t(67294),s=t(85893);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c(e){return(0,s.jsx)("button",l(o({type:"button"},e),{style:o({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const d=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({React:i},i,r)},1887:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/pwa_install-169e763a3e99bb01e41be11c1a4af51f.gif"},28592:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/pwa_reload-6af462b35d0ed752c44ad0899559bedf.gif"},8047:e=>{e.exports=JSON.parse('{"name":"Docusaurus v2","short_name":"Docusaurus","theme_color":"#2196f3","background_color":"#424242","display":"standalone","scope":"./","start_url":"./index.html","related_applications":[{"platform":"webapp","url":"https://docusaurus.io/manifest.json"}],"icons":[{"src":"img/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"img/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"img/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"img/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"img/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"img/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"img/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"img/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]}')}}]);