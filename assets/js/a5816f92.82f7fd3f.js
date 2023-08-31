"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),o=n(67294),l=n(86010),r=n(72957),i=n(16550),s=n(75238),u=n(33609),p=n(92560);function m(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??m;return c({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=n(51048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:d},r,{className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},47258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),l=n(73992),r=n(18679);const i={description:"Deploy a full-featured blog in no time with Docusaurus."},s="\u535a\u5ba2",u={unversionedId:"blog",id:"blog",title:"\u535a\u5ba2",description:"Deploy a full-featured blog in no time with Docusaurus.",source:"@site/docs/blog.mdx",sourceDirName:".",slug:"/blog",permalink:"/docs/blog",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blog.mdx",tags:[],version:"current",frontMatter:{description:"Deploy a full-featured blog in no time with Docusaurus."},sidebar:"docs",previous:{title:"\u6587\u6863\u591a\u5b9e\u4f8b",permalink:"/docs/docs-multi-instance"},next:{title:"Markdown \u7279\u6027",permalink:"/docs/markdown-features"}},p={},m=[{value:"\u521d\u59cb\u8bbe\u7f6e",id:"initial-setup",level:2},{value:"\u6dfb\u52a0\u6587\u7ae0",id:"adding-posts",level:2},{value:"\u535a\u5ba2\u5217\u8868",id:"blog-list",level:2},{value:"\u535a\u5ba2\u4fa7\u8fb9\u680f",id:"blog-sidebar",level:2},{value:"\u535a\u5ba2\u53d1\u5e03\u65e5\u671f",id:"blog-post-date",level:2},{value:"\u535a\u5ba2\u4f5c\u8005",id:"blog-post-authors",level:2},{value:"\u5185\u8054\u7684\u4f5c\u8005",id:"inline-authors",level:3},{value:"\u5168\u5c40\u7684\u4f5c\u8005",id:"global-authors",level:3},{value:"\u9605\u8bfb\u65f6\u95f4",id:"reading-time",level:2},{value:"Feed",id:"feed",level:2},{value:"\u9ad8\u7ea7\u7684\u4e3b\u9898",id:"advanced-topics",level:2},{value:"Blog-only \u6a21\u5f0f",id:"blog-only-mode",level:3},{value:"\u591a\u4e2a\u535a\u5ba2",id:"multiple-blogs",level:3}],d={toc:m},c="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u535a\u5ba2"},"\u535a\u5ba2"),(0,o.kt)("p",null,"\u535a\u5ba2\u7279\u6027\u4f7f\u60a8\u80fd\u591f\u7acb\u5373\u90e8\u7f72\u529f\u80fd\u9f50\u5168\u7684\u535a\u5ba2\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-blog"},"\u535a\u5ba2\u63d2\u4ef6 API \u53c2\u8003\u6587\u6863"),"\u4ee5\u83b7\u53d6\u8be6\u5c3d\u7684\u9009\u9879\u5217\u8868\u3002")),(0,o.kt)("h2",{id:"initial-setup"},"\u521d\u59cb\u8bbe\u7f6e"),(0,o.kt)("p",null,"To set up your site's blog, start by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.kt)("p",null,"Then, add an item link to your blog within ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  themeConfig: {\n    // ...\n    navbar: {\n      items: [\n        // ...\n        // highlight-next-line\n        { to: "blog", label: "Blog", position: "left" }, // or position: \'right\'\n      ],\n    },\n  },\n};\n')),(0,o.kt)("h2",{id:"adding-posts"},"\u6dfb\u52a0\u6587\u7ae0"),(0,o.kt)("p",null,"To publish in the blog, create a Markdown file within the blog directory."),(0,o.kt)("p",null,"For example, create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"website/blog/2019-09-05-hello-docusaurus-v2.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="website/blog/2019-09-05-hello-docusaurus-v2.md"',title:'"website/blog/2019-09-05-hello-docusaurus-v2.md"'},"---\ntitle: Welcome Docusaurus v2\ndescription: This is my first post on Docusaurus 2.\nslug: welcome-docusaurus-v2\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [hello, docusaurus-v2]\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\n\nWelcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).\n\n\x3c!-- truncate --\x3e\n\nThis is my first post on Docusaurus 2.\n\nA whole bunch of exploration to follow.\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/markdown-features#front-matter"},"front matter")," is useful to add more metadata to your blog post, for example, author information, but Docusaurus will be able to infer all necessary metadata without the front matter. For all possible fields, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter"},"the API documentation"),"."),(0,o.kt)("h2",{id:"blog-list"},"\u535a\u5ba2\u5217\u8868"),(0,o.kt)("p",null,"The blog's index page (by default, it is at ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog"),") is the ",(0,o.kt)("em",{parentName:"p"},"blog list page"),", where all blog posts are collectively displayed."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above ",(0,o.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," will be part of the summary. Note that the portion above the truncate marker must be standalone renderable Markdown. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="website/blog/my-post.md" {7}',title:'"website/blog/my-post.md"',"{7}":!0},"---\ntitle: Markdown blog truncation example\n---\n\nAll these will be part of the blog post summary.\n\n\x3c!-- truncate --\x3e\n\nBut anything from here on down will not be.\n")),(0,o.kt)("p",null,"For files using the ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," extension, use a ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," comment ",(0,o.kt)("inlineCode",{parentName:"p"},"{/* truncate */}")," instead:"),(0,o.kt)("p",null,"{/",(0,o.kt)("em",{parentName:"p"}," prettier-ignore "),"/}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="website/blog/my-post.mdx" {7}',title:'"website/blog/my-post.mdx"',"{7}":!0},"---\ntitle: MDX blog truncation Example\n---\n\nAll these will be part of the blog post summary.\n\n{/* truncate */}\n\nBut anything from here on down will not be.\n")),(0,o.kt)("p",null,"By default, 10 posts are shown on each blog list page, but you can control pagination with the ",(0,o.kt)("inlineCode",{parentName:"p"},"postsPerPage")," option in the plugin configuration. If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"postsPerPage: 'ALL'"),", pagination will be disabled and all posts will be displayed on the first page. You can also add a meta description to the blog list page for better SEO:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          // highlight-start\n          blogTitle: "Docusaurus blog!",\n          blogDescription: "A Docusaurus powered blog!",\n          postsPerPage: "ALL",\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("h2",{id:"blog-sidebar"},"\u535a\u5ba2\u4fa7\u8fb9\u680f"),(0,o.kt)("p",null,"The blog sidebar displays recent blog posts. The default number of items shown is 5, but you can customize with the ",(0,o.kt)("inlineCode",{parentName:"p"},"blogSidebarCount")," option in the plugin configuration. By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"blogSidebarCount: 0"),", the sidebar will be completely disabled, with the container removed as well. This will increase the width of the main container. Specially, if you have set ",(0,o.kt)("inlineCode",{parentName:"p"},"blogSidebarCount: 'ALL'"),", ",(0,o.kt)("em",{parentName:"p"},"all")," posts will be displayed."),(0,o.kt)("p",null,"You can also alter the sidebar heading text with the ",(0,o.kt)("inlineCode",{parentName:"p"},"blogSidebarTitle")," option. For example, if you have set ",(0,o.kt)("inlineCode",{parentName:"p"},"blogSidebarCount: 'ALL'"),', instead of the default "Recent posts", you may rather make it say "All posts":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          // highlight-start\n          blogSidebarTitle: "All posts",\n          blogSidebarCount: "ALL",\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("h2",{id:"blog-post-date"},"\u535a\u5ba2\u53d1\u5e03\u65e5\u671f"),(0,o.kt)("p",null,"Docusaurus will extract a ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," date from many patterns such as ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD-my-blog-post-title.md")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY/MM/DD/my-blog-post-title.md"),". This enables you to easily group blog posts by year, by month, or to use a flat structure."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Supported date extraction patterns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Single file"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021-05-28-my-blog-post-title.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MDX file"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021-05-28-my-blog-post-title.mdx"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Single folder + ",(0,o.kt)("inlineCode",{parentName:"td"},"index.md")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021-05-28-my-blog-post-title/index.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Folder named by date"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021-05-28/my-blog-post-title.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nested folders by date"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021/05/28/my-blog-post-title.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Partially nested folders by date"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021/05-28-my-blog-post-title.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nested folders + ",(0,o.kt)("inlineCode",{parentName:"td"},"index.md")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2021/05/28/my-blog-post-title/index.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Date in the middle of path"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"category/2021/05-28-my-blog-post-title.md"))))),(0,o.kt)("p",null,"Docusaurus can extract the date from the posts using any of the naming patterns above. It is advisable to choose one pattern and apply it to all posts to avoid confusion.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using a folder can be convenient to co-locate blog post images alongside the Markdown file.")),(0,o.kt)("p",null,"This naming convention is optional, and you can also provide the date as front matter. Since the front matter follows YAML syntax where the datetime notation is supported, you can use front matter if you need more fine-grained publish dates. For example, if you have multiple posts published on the same day, you can order them according to the time of the day:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="earlier-post.md"',title:'"earlier-post.md"'},"---\ndate: 2021-09-13T10:00\n---\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="later-post.md"',title:'"later-post.md"'},"---\ndate: 2021-09-13T18:00\n---\n")),(0,o.kt)("h2",{id:"blog-post-authors"},"\u535a\u5ba2\u4f5c\u8005"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"authors")," front matter field to declare blog post authors. An author should have at least a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"image_url"),". Docusaurus uses information like ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", but any other information is allowed."),(0,o.kt)("h3",{id:"inline-authors"},"\u5185\u8054\u7684\u4f5c\u8005"),(0,o.kt)("p",null,"Blog post authors can be declared directly inside the front matter:"),(0,o.kt)(l.Z,{groupId:"author-front-matter",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"single",label:"Single author",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n  email: jimarcey@gmail.com\n---\n"))),(0,o.kt)(r.Z,{value:"multiple",label:"Multiple authors",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n    email: jimarcey@gmail.com\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\n---\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This option works best to get started, or for casual, irregular authors.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Prefer using the ",(0,o.kt)("inlineCode",{parentName:"p"},"authors")," front matter, but the legacy ",(0,o.kt)("inlineCode",{parentName:"p"},"author_*")," front matter remains supported:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthor: Joel Marcey\nauthor_title: Co-creator of Docusaurus 1\nauthor_url: https://github.com/JoelMarcey\nauthor_image_url: https://github.com/JoelMarcey.png\n---\n"))),(0,o.kt)("h3",{id:"global-authors"},"\u5168\u5c40\u7684\u4f5c\u8005"),(0,o.kt)("p",null,"For regular blog post authors, it can be tedious to maintain authors' information inlined in each blog post."),(0,o.kt)("p",null,"It is possible to declare those authors globally in a configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="website/blog/authors.yml"',title:'"website/blog/authors.yml"'},"jmarcey:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n  email: jimarcey@gmail.com\n\nslorber:\n  name: S\xe9bastien Lorber\n  title: Docusaurus maintainer\n  url: https://sebastienlorber.com\n  image_url: https://github.com/slorber.png\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorsMapPath")," plugin option to configure the path. JSON is also supported.")),(0,o.kt)("p",null,"In blog posts front matter, you can reference the authors declared in the global configuration file:"),(0,o.kt)(l.Z,{groupId:"author-front-matter",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"single",label:"Single author",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors: jmarcey\n---\n"))),(0,o.kt)(r.Z,{value:"multiple",label:"Multiple authors",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors: [jmarcey, slorber]\n---\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authors")," system is very flexible and can suit more advanced use-case:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Mix inline authors and global authors"),(0,o.kt)("p",{parentName:"admonition"},"You can use global authors most of the time, and still use inline authors:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors:\n  - jmarcey\n  - slorber\n  - name: Inline Author name\n    title: Inline Author Title\n    url: https://github.com/inlineAuthor\n    image_url: https://github.com/inlineAuthor\n---\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Local override of global authors"),(0,o.kt)("p",{parentName:"admonition"},"You can customize the global author's data on per-blog-post basis:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'},"---\nauthors:\n  - key: jmarcey\n    title: Joel Marcey's new title\n  - key: slorber\n    name: S\xe9bastien Lorber's new name\n---\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Localize the author's configuration file"),(0,o.kt)("p",{parentName:"admonition"},"The configuration file can be localized, just create a localized copy of it at:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/[locale]/docusaurus-plugin-content-blog/authors.yml\n")))),(0,o.kt)("p",null,"An author, either declared through front matter or through the authors map, needs to have a name or an avatar, or both. If all authors of a post don't have names, Docusaurus will display their avatars compactly. See ",(0,o.kt)("a",{parentName:"p",href:"/tests/blog/2022/01/20/image-only-authors"},"this test post")," for the effect."),(0,o.kt)("admonition",{title:"Feed generation",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"#feed"},"RSS feeds")," require the author's email to be set for the author to appear in the feed.")),(0,o.kt)("h2",{id:"reading-time"},"\u9605\u8bfb\u65f6\u95f4"),(0,o.kt)("p",null,"Docusaurus generates a reading time estimation for each blog post based on word count. We provide an option to customize this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          // highlight-start\n          showReadingTime: true, // When set to false, the "x min read" won\'t be shown\n          readingTime: ({ content, frontMatter, defaultReadingTime }) =>\n            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"readingTime")," callback receives three parameters: the blog content text as a string, front matter as a record of string keys and their values, and the default reading time function. It returns a number (reading time in minutes) or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," (disable reading time for this page)."),(0,o.kt)("p",null,"The default reading time is able to accept additional options: ",(0,o.kt)("inlineCode",{parentName:"p"},"wordsPerMinute")," as a number (default: 300), and ",(0,o.kt)("inlineCode",{parentName:"p"},"wordBound")," as a function from string to boolean. If the string passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"wordBound")," should be a word bound (spaces, tabs, and line breaks by default), the function should return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the callback for all your customization needs:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"disable-per-post",label:"Per-post disabling",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u7981\u7528\u9605\u8bfb\u65f6\u95f4\u5728\u4e00\u9875:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          showReadingTime: true,\n          // highlight-start\n          readingTime: ({ content, frontMatter, defaultReadingTime }) =>\n            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content }),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("p",{parentName:"admonition"},"Usage:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'"my-blog-post.md"','"my-blog-post.md"':!0},"---\nhide_reading_time: true\n---\n\nThis page will no longer display the reading time stats!\n"))),(0,o.kt)(r.Z,{value:"passing-options",label:"Passing options",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5c06\u9009\u9879\u4f20\u9012\u7ed9\u9ed8\u8ba4\u7684\u8bfb\u53d6\u65f6\u95f4\u51fd\u6570:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          // highlight-start\n          readingTime: ({ content, defaultReadingTime }) =>\n            defaultReadingTime({ content, options: { wordsPerMinute: 100 } }),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n'))),(0,o.kt)(r.Z,{value:"using-custom-algo",label:"Using custom algorithms",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u9605\u8bfb\u65f6\u95f4\u5b9e\u73b0:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'const myReadingTime = require("./myReadingTime");\n\nmodule.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          // highlight-next-line\n          readingTime: ({ content }) => myReadingTime(content),\n        },\n      },\n    ],\n  ],\n};\n'))))),(0,o.kt)("h2",{id:"feed"},"Feed"),(0,o.kt)("p",null,"You can generate RSS / Atom / JSON feed by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"feedOptions"),". By default, RSS and Atom feeds are generated. To disable feed generation, set ",(0,o.kt)("inlineCode",{parentName:"p"},"feedOptions.type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type FeedType = "rss" | "atom" | "json";\n\ntype BlogOptions = {\n  feedOptions?: {\n    type?: FeedType | "all" | FeedType[] | null;\n    title?: string;\n    description?: string;\n    copyright: string;\n    language?: string; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes\n    limit?: number | false | null; // defaults to 20\n    /** Allow control over the construction of BlogFeedItems */\n    createFeedItems?: (params: {\n      blogPosts: BlogPost[];\n      siteConfig: DocusaurusConfig;\n      outDir: string;\n      defaultCreateFeedItems: (params: {\n        blogPosts: BlogPost[];\n        siteConfig: DocusaurusConfig;\n        outDir: string;\n      }) => Promise<BlogFeedItem[]>;\n    }) => Promise<BlogFeedItem[]>;\n  };\n};\n')),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        blog: {\n          // highlight-start\n          feedOptions: {\n            type: "all",\n            copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`,\n            createFeedItems: async (params) => {\n              const { blogPosts, defaultCreateFeedItems, ...rest } = params;\n              return defaultCreateFeedItems({\n                // keep only the 10 most recent blog posts in the feed\n                blogPosts: blogPosts.filter((item, index) => index < 10),\n                ...rest,\n              });\n            },\n          },\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("p",null,"The feeds can be found at:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"RSS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://example.com/blog/rss.xml\n"))),(0,o.kt)(r.Z,{value:"Atom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://example.com/blog/atom.xml\n"))),(0,o.kt)(r.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://example.com/blog/feed.json\n")))),(0,o.kt)("h2",{id:"advanced-topics"},"\u9ad8\u7ea7\u7684\u4e3b\u9898"),(0,o.kt)("h3",{id:"blog-only-mode"},"Blog-only \u6a21\u5f0f"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u8fd0\u884c\u4f60\u7684 Docusaurus 2 \u7f51\u7ad9\uff0c\u800c\u4e0d\u9700\u8981\u4e00\u4e2a\u4e13\u95e8\u7684\u767b\u9646\u9875\u9762\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4f60\u7684\u535a\u5ba2\u5e16\u5b50\u5217\u8868\u9875\u9762\u4f5c\u4e3a\u7d22\u5f15\u9875\u9762\u3002\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"routeBasePath"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"'/'"),"\uff0c\u4ee5\u901a\u8fc7\u6839\u8def\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"example.com/"),"\u800c\u4e0d\u662f\u5b50\u8def\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"example.com/blog/"),"\u4e3a\u535a\u5ba2\u63d0\u4f9b\u670d\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        // highlight-next-line\n        docs: false, // Optional: disable the docs plugin\n        blog: {\n          // highlight-next-line\n          routeBasePath: "/", // Serve the blog at the site\'s root\n          /* other blog options */\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u5fd8\u8bb0\u5220\u9664\u73b0\u6709\u7684\u4e3b\u9875",(0,o.kt)("inlineCode",{parentName:"p"},"./src/pages/index.js"),"\uff0c\u5426\u5219\u4f1a\u6709\u4e24\u4e2a\u6587\u4ef6\u6620\u5c04\u5230\u76f8\u540c\u7684\u8def\u7531!")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u90a3\u4e9b\u53ea\u60f3\u4f7f\u7528\u6587\u6863\u7684\u7528\u6237\uff0c\u8fd8\u6709\u4e00\u4e2a\u201c\u4ec5\u9650\u6587\u6863\u6a21\u5f0f\u201d\u3002\n\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"/docs/docs-introduction"},"Docs-only \u6a21\u5f0f"),"\u83b7\u53d6\u8be6\u7ec6\u8bf4\u660e\u6216\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"routeBasePath"),"\u7684\u66f4\u8be6\u7ec6\u89e3\u91ca\u3002")),(0,o.kt)("h3",{id:"multiple-blogs"},"\u591a\u4e2a\u535a\u5ba2"),(0,o.kt)("p",null,"By default, the classic theme assumes only one blog per website and hence includes only one instance of the blog plugin. If you would like to have multiple blogs on a single website, it's possible too! You can add another blog by specifying another blog plugin in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," option for ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"routeBasePath")," to the URL route that you want your second blog to be accessed on. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"routeBasePath")," here has to be different from the first blog or else there could be a collision of paths! Also, set ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," to the path to the directory containing your second blog's entries."),(0,o.kt)("p",null,"As documented for ",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins#multi-instance-plugins-and-plugin-ids"},"multi-instance plugins"),", you need to assign a unique ID to the plugins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: [\n    [\n      "@docusaurus/plugin-content-blog",\n      {\n        /**\n         * Required for any multi-instance plugin\n         */\n        id: "second-blog",\n        /**\n         * URL route for the blog section of your site.\n         * *DO NOT* include a trailing slash.\n         */\n        routeBasePath: "my-second-blog",\n        /**\n         * Path to data on filesystem relative to site dir.\n         */\n        path: "./my-second-blog",\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u5f00\u8bbe\u4e86\u7b2c\u4e8c\u4e2a\u535a\u5ba2",(0,o.kt)("a",{parentName:"p",href:"/tests/blog"},"\u5728\u8fd9\u91cc"),"."))}g.isMDXComponent=!0}}]);