"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[73762],{61144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const l={sidebar_position:3},a="I18n lifecycles",o={unversionedId:"api/plugin-methods/i18n-lifecycles",id:"version-2.0.1/api/plugin-methods/i18n-lifecycles",title:"I18n lifecycles",description:"Plugins use these lifecycles to load i18n-related data.",source:"@site/versioned_docs/version-2.0.1/api/plugin-methods/i18n-lifecycles.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/i18n-lifecycles",permalink:"/docusaurus-docs/docs/2.0.1/api/plugin-methods/i18n-lifecycles",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/i18n-lifecycles.mdx",tags:[],version:"2.0.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Extending infrastructure",permalink:"/docusaurus-docs/docs/2.0.1/api/plugin-methods/extend-infrastructure"},next:{title:"Static methods",permalink:"/docusaurus-docs/docs/2.0.1/api/plugin-methods/static-methods"}},r={},c=[{value:"<code>getTranslationFiles({content})</code>",id:"getTranslationFiles",level:2},{value:"<code>translateContent({content,translationFiles})</code>",id:"translateContent",level:2},{value:"<code>translateThemeConfig({themeConfig,translationFiles})</code>",id:"translateThemeConfig",level:2},{value:"<code>async getDefaultCodeTranslationMessages()</code>",id:"getDefaultCodeTranslationMessages",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",a:"a",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"i18n-lifecycles",children:"I18n lifecycles"}),"\n",(0,s.jsx)(n.p,{children:"Plugins use these lifecycles to load i18n-related data."}),"\n",(0,s.jsx)(n.h2,{id:"getTranslationFiles",children:(0,s.jsx)(n.code,{children:"getTranslationFiles({content})"})}),"\n",(0,s.jsx)(n.p,{children:"Plugins declare the JSON translation files they want to use."}),"\n",(0,s.jsxs)(n.p,{children:["Returns translation files ",(0,s.jsx)(n.code,{children:"{path: string, content: ChromeI18nJSON}"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": relative to the plugin localized folder ",(0,s.jsx)(n.code,{children:"i18n/[locale]/[pluginName]"}),". Extension ",(0,s.jsx)(n.code,{children:".json"})," should be omitted to remain generic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"}),": using the Chrome i18n JSON format."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These files will be written by the ",(0,s.jsxs)(n.a,{href:"/docusaurus-docs/docs/2.0.1/cli#docusaurus-write-translations-sitedir",children:[(0,s.jsx)(n.code,{children:"write-translations"})," CLI"]})," to the plugin i18n subfolder, and will be read in the appropriate locale before calling ",(0,s.jsx)(n.a,{href:"#translateContent",children:(0,s.jsx)(n.code,{children:"translateContent()"})})," and ",(0,s.jsx)(n.a,{href:"#translateThemeConfig",children:(0,s.jsx)(n.code,{children:"translateThemeConfig()"})})]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = function (context, options) {\n  return {\n    name: 'my-plugin',\n    // highlight-start\n    async getTranslationFiles({content}) {\n      return [\n        {\n          path: 'sidebar-labels',\n          content: {\n            someSidebarLabel: {\n              message: 'Some Sidebar Label',\n              description: 'A label used in my plugin in the sidebar',\n            },\n            someLabelFromContent: content.myLabel,\n          },\n        },\n      ];\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"translateContent",children:(0,s.jsx)(n.code,{children:"translateContent({content,translationFiles})"})}),"\n",(0,s.jsx)(n.p,{children:"Translate the plugin content, using the localized translation files."}),"\n",(0,s.jsx)(n.p,{children:"Returns the localized plugin content."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"contentLoaded()"})," lifecycle will be called with the localized plugin content returned by ",(0,s.jsx)(n.code,{children:"translateContent()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = function (context, options) {\n  return {\n    name: 'my-plugin',\n    // highlight-start\n    translateContent({content, translationFiles}) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === 'myTranslationFile',\n      );\n      return {\n        ...content,\n        someContentLabel: myTranslationFile.someContentLabel.message,\n      };\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"translateThemeConfig",children:(0,s.jsx)(n.code,{children:"translateThemeConfig({themeConfig,translationFiles})"})}),"\n",(0,s.jsxs)(n.p,{children:["Translate the site ",(0,s.jsx)(n.code,{children:"themeConfig"})," labels, using the localized translation files."]}),"\n",(0,s.jsxs)(n.p,{children:["Returns the localized ",(0,s.jsx)(n.code,{children:"themeConfig"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    translateThemeConfig({themeConfig, translationFiles}) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === 'myTranslationFile',\n      );\n      return {\n        ...themeConfig,\n        someThemeConfigLabel: myTranslationFile.someThemeConfigLabel.message,\n      };\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"getDefaultCodeTranslationMessages",children:(0,s.jsx)(n.code,{children:"async getDefaultCodeTranslationMessages()"})}),"\n",(0,s.jsxs)(n.p,{children:["Themes using the ",(0,s.jsx)(n.code,{children:"<Translate>"})," API can provide default code translation messages."]}),"\n",(0,s.jsxs)(n.p,{children:["It should return messages in ",(0,s.jsx)(n.code,{children:"Record<string, string>"}),", where keys are translation IDs and values are messages (without the description) localized using the site's current locale."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    async getDefaultCodeTranslationMessages() {\n      return readJsonFile(`${context.i18n.currentLocale}.json`);\n    },\n    // highlight-end\n  };\n};\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>l});var s=t(67294);const i=s.createContext({});function l(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:l(e),s.createElement(i.Provider,{value:o},n)}}}]);