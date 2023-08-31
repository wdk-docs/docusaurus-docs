"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[18531],{29542:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(85893),n=a(11151);const r={slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},i="string-literal-i18n-messages",l={unversionedId:"api/misc/eslint-plugin/string-literal-i18n-messages",id:"version-3.0.0-alpha.0/api/misc/eslint-plugin/string-literal-i18n-messages",title:"string-literal-i18n-messages",description:"Enforce translate APIs to be called on plain text labels.",source:"@site/versioned_docs/version-3.0.0-alpha.0/api/misc/eslint-plugin/string-literal-i18n-messages.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},sidebar:"api",previous:{title:"prefer-docusaurus-heading",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"},next:{title:"\ud83d\udce6 logger",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/misc/@docusaurus/logger"}},o={},c=[{value:"Rule Details",id:"details",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){const s=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",strong:"strong",pre:"pre",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"string-literal-i18n-messages",children:"string-literal-i18n-messages"}),"\n",(0,t.jsx)(s.p,{children:"Enforce translate APIs to be called on plain text labels."}),"\n",(0,t.jsxs)(s.p,{children:["Docusaurus offers the ",(0,t.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/cli#docusaurus-write-translations-sitedir",children:(0,t.jsx)(s.code,{children:"docusaurus write-translations"})})," API, which statically extracts the text labels marked as translatable. Dynamic values used in ",(0,t.jsx)(s.code,{children:"<Translate>"})," or ",(0,t.jsx)(s.code,{children:"translate()"})," calls will fail to be extracted. This rule will ensure that all translate calls are statically extractable."]}),"\n",(0,t.jsx)(s.h2,{id:"details",children:"Rule Details"}),"\n",(0,t.jsxs)(s.p,{children:["Examples of ",(0,t.jsx)(s.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const text = 'Some text to be translated'\n\n// Invalid <Translate> child\n<Translate>{text}</Translate>\n\n// Invalid message attribute\ntranslate({message: text})\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Examples of ",(0,t.jsx)(s.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Valid <Translate> child\n<Translate>Some text to be translated</Translate>\n\n// Valid message attribute\ntranslate({message: 'Some text to be translated'})\n\n// Valid <Translate> child using values object as prop\n<Translate values={{firstName: 'S\xe9bastien'}}>\n  {'Welcome, {firstName}! How are you?'}\n</Translate>\n\n// Valid message attribute using values object as second argument\ntranslate({message: 'The logo of site {siteName}'}, {siteName: 'Docusaurus'})\n"})}),"\n",(0,t.jsx)(s.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,t.jsxs)(s.p,{children:["If you're not using the ",(0,t.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/i18n/introduction",children:"i18n feature"}),", you can disable this rule."]}),"\n",(0,t.jsx)(s.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,s,a)=>{a.d(s,{Zo:()=>l,ah:()=>r});var t=a(67294);const n=t.createContext({});function r(e){const s=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||i:r(e),t.createElement(n.Provider,{value:l},s)}}}]);