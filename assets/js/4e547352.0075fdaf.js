"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[11120],{50603:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var n=r(85893),o=r(11151);const t={description:"How to keep a reasonable bundle size while ensuring sufficient browser support."},i="Browser support",a={unversionedId:"browser-support",id:"version-2.2.0/browser-support",title:"Browser support",description:"How to keep a reasonable bundle size while ensuring sufficient browser support.",source:"@site/versioned_docs/version-2.2.0/browser-support.mdx",sourceDirName:".",slug:"/browser-support",permalink:"/docusaurus-docs/docs/2.2.0/browser-support",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/browser-support.mdx",tags:[],version:"2.2.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{description:"How to keep a reasonable bundle size while ensuring sufficient browser support."},sidebar:"docs",previous:{title:"Search",permalink:"/docusaurus-docs/docs/2.2.0/search"},next:{title:"SEO",permalink:"/docusaurus-docs/docs/2.2.0/seo"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Default values",id:"default-values",level:2},{value:"Read more",id:"read-more",level:2}];function c(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",admonition:"admonition",ul:"ul",li:"li",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"browser-support",children:"Browser support"}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus allows sites to define the list of supported browsers through a ",(0,n.jsx)(s.a,{href:"https://github.com/browserslist/browserslist",children:"browserslist configuration"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"purpose",children:"Purpose"}),"\n",(0,n.jsx)(s.p,{children:"Websites need to balance between backward compatibility and bundle size. As old browsers do not support modern APIs or syntax, more code is needed to implement the same functionality."}),"\n",(0,n.jsxs)(s.p,{children:["For example, you may use the ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",children:"optional chaining syntax"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const value = obj?.prop?.val;\n"})}),"\n",(0,n.jsx)(s.p,{children:"...which unfortunately is only recognized by browser versions released after 2020. To be compatible with earlier browser versions, when building your site for production, our JS loader will transpile your code to a more verbose syntax:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"var _obj, _obj$prop;\n\nconst value =\n  (_obj = obj) === null || _obj === void 0\n    ? void 0\n    : (_obj$prop = _obj.prop) === null || _obj$prop === void 0\n    ? void 0\n    : _obj$prop.val;\n"})}),"\n",(0,n.jsx)(s.p,{children:"However, this penalizes all other users with increased site load time because the 29-character line now becomes 168 characters\u2014a 6-fold increase! (In practice, it will be better because the names used will be shorter.) As a tradeoff, the JS loader only transpiles the syntax to the degree that's supported by all browser versions defined in the browser list."}),"\n",(0,n.jsxs)(s.p,{children:["The browser list by default is provided through the ",(0,n.jsx)(s.code,{children:"package.json"})," file as a root ",(0,n.jsx)(s.code,{children:"browserslist"})," field."]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"On old browsers, the compiled output will use unsupported (too recent) JS syntax, causing React to fail to initialize and end up with a static website with only HTML/CSS and no JS."})}),"\n",(0,n.jsx)(s.h2,{id:"default-values",children:"Default values"}),"\n",(0,n.jsxs)(s.p,{children:["Websites initialized with the default classic template has the following in ",(0,n.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "docusaurus",\n  // ...\n  // highlight-start\n  "browserslist": {\n    "production": [">0.5%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n  // highlight-end\n  // ...\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Explained in natural language, the browsers supported in production are those:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["With more than 0.5% of market share; ",(0,n.jsx)(s.em,{children:"and"})]}),"\n",(0,n.jsxs)(s.li,{children:['Has official support or updates in the past 24 months (the opposite of "dead"); ',(0,n.jsx)(s.em,{children:"and"})]}),"\n",(0,n.jsx)(s.li,{children:"Is not Opera Mini."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"And browsers used in development are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The latest version of Chrome ",(0,n.jsx)(s.em,{children:"or"})," Firefox ",(0,n.jsx)(s.em,{children:"or"})," Safari."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:['You can "evaluate" any config with the ',(0,n.jsx)(s.code,{children:"browserslist"})," CLI to obtain the actual list:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'npx browserslist --env="production"\n'})}),"\n",(0,n.jsx)(s.p,{children:"The output is all browsers supported in production. Below is the output in January 2022:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"and_chr 96\nand_uc 12.12\nchrome 96\nchrome 95\nchrome 94\nedge 96\nfirefox 95\nfirefox 94\nie 11\nios_saf 15.2\nios_saf 15.0-15.1\nios_saf 14.5-14.8\nios_saf 14.0-14.4\nios_saf 12.2-12.5\nopera 82\nopera 81\nsafari 15.1\nsafari 14.1\nsafari 13.1\n"})}),"\n",(0,n.jsx)(s.h2,{id:"read-more",children:"Read more"}),"\n",(0,n.jsxs)(s.p,{children:["You may wish to visit the ",(0,n.jsx)(s.a,{href:"https://github.com/browserslist/browserslist/blob/main/README.md",children:"browserslist documentation"})," for more specifications, especially the accepted ",(0,n.jsx)(s.a,{href:"https://github.com/browserslist/browserslist/blob/main/README.md#queries",children:"query values"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/browserslist/browserslist/blob/main/README.md#best-practices",children:"best practices"}),"."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>a,ah:()=>t});var n=r(67294);const o=n.createContext({});function t(e){const s=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function a({components:e,children:s,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:t(e),n.createElement(o.Provider,{value:a},s)}}}]);