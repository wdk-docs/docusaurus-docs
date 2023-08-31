"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[64013],{80035:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(85893),s=r(67294),i=r(86010),a=r(1795),l=r(64767),c=r(61596),o=r(27692),u=r(16550),b=r(7266);function m(e){const{pathname:t}=(0,u.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,b.Mg)(e.permalink,t))}(e,t)))),[e,t])}const d={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function g({sidebar:e}){const t=m(e.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,i.Z)(d.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,i.Z)(d.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,n.jsx)("ul",{className:(0,i.Z)(d.sidebarItemList,"clean-list"),children:t.map((e=>(0,n.jsx)("li",{className:d.sidebarItem,children:(0,n.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=r(18901);function f({sidebar:e}){const t=m(e.items);return(0,n.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,n.jsx)("li",{className:"menu__list-item",children:(0,n.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,n.jsx)(p.Zo,{component:f,props:e})}function h({sidebar:e}){const t=(0,l.i)();return(null==e?void 0:e.items.length)?"mobile"===t?(0,n.jsx)(j,{sidebar:e}):(0,n.jsx)(g,{sidebar:e}):null}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function y(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function x(e){const{sidebar:t,toc:r,children:s}=e,l=y(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return(0,n.jsx)(a.Z,v(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}({},l),{children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(h,{sidebar:t}),(0,n.jsx)("main",{className:(0,i.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog",children:s}),r&&(0,n.jsx)("div",{className:"col col--2",children:r})]})})}))}},64200:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n,s,i=r(85893),a=(r(67294),r(86010)),l=r(27692);const c=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var o=r(83355),u=r(77560),b=r(80035),m=r(39748),d=r(24805);const g={tag:"tag_Nnez"};function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function j({letterEntry:e}){return(0,i.jsxs)("article",{children:[(0,i.jsx)(d.Z,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((e=>(0,i.jsx)("li",{className:g.tag,children:(0,i.jsx)(m.Z,f({},e))},e.permalink)))}),(0,i.jsx)("hr",{})]})}function h({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);var i;null!==(i=(n=t)[s=r])&&void 0!==i||(n[s]=[]),t[r].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,i.jsx)(j,{letterEntry:e},e.letter)))})}var O=r(92417);function v({tags:e,sidebar:t}){const r=c();return(0,i.jsxs)(o.FG,{className:(0,a.Z)(u.k.wrapper.blogPages,u.k.page.blogTagsListPage),children:[(0,i.jsx)(o.d,{title:r}),(0,i.jsx)(O.Z,{tag:"blog_tags_list"}),(0,i.jsxs)(b.Z,{sidebar:t,children:[(0,i.jsx)(d.Z,{as:"h1",children:r}),(0,i.jsx)(h,{tags:e})]})]})}},39748:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(85893),s=(r(67294),r(86010)),i=r(61596);const a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function l({permalink:e,label:t,count:r}){return(0,n.jsxs)(i.Z,{href:e,className:(0,s.Z)(a.tag,r?a.tagWithCount:a.tagRegular),children:[t,r&&(0,n.jsx)("span",{children:r})]})}}}]);