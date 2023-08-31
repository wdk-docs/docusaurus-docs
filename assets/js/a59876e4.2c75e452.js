"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[42929],{39847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(85893),r=t(11151),i=t(91545);const l={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},a="no-untranslated-text",o={unversionedId:"api/misc/eslint-plugin/no-untranslated-text",id:"version-2.0.1/api/misc/eslint-plugin/no-untranslated-text",title:"no-untranslated-text",description:"Enforce text labels in JSX to be wrapped by translate calls.",source:"@site/versioned_docs/version-2.0.1/api/misc/eslint-plugin/no-untranslated-text.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",permalink:"/docusaurus-docs/docs/2.0.1/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.mdx",tags:[],version:"2.0.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},sidebar:"api",previous:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docusaurus-docs/docs/2.0.1/api/misc/@docusaurus/eslint-plugin"},next:{title:"string-literal-i18n-messages",permalink:"/docusaurus-docs/docs/2.0.1/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}},d={},c=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"no-untranslated-text",children:"no-untranslated-text"}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"Enforce text labels in JSX to be wrapped by translate calls."}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/2.0.1/i18n/introduction",children:"i18n feature"})," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."]}),"\n",(0,s.jsx)(n.h2,{id:"details",children:"Rule Details"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Hello World is not translated\n<Component>Hello World</Component>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ignoredStrings"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Text labels that only contain strings in this list will not be reported."})]})})]})}),"\n",(0,s.jsx)(n.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,s.jsxs)(n.p,{children:["If you're not using the ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/2.0.1/i18n/introduction",children:"i18n feature"}),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},91545:(e,n,t)=>{t.d(n,{Z:()=>d});var s=t(85893),r=t(67294),i=t(16550);const l={apiTable:"apiTable_e8hp"};function a({name:e,children:n},t){const l=function(e){let n=e;for(;(0,r.isValidElement)(n);)[n]=r.Children.toArray(n.props.children);return n}(n),a=e?`${e}-${l}`:l,o=`#${a}`,d=(0,i.k6)();return(0,s.jsx)("tr",{id:a,tabIndex:0,ref:d.location.hash===o?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||d.push(o)},onKeyDown:e=>{"Enter"===e.key&&d.push(o)},children:n.props.children})}const o=r.forwardRef(a);function d({children:e,name:n}){const[t,i]=r.Children.toArray(e.props.children),a=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null===(e=a.current)||void 0===e||e.focus()}),[a]);const d=r.Children.map(i.props.children,(e=>(0,s.jsx)(o,{name:n,ref:a,children:e})));return(0,s.jsxs)("table",{className:l.apiTable,children:[t,(0,s.jsx)("tbody",{children:d})]})}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:i(e),s.createElement(r.Provider,{value:a},n)}}}]);