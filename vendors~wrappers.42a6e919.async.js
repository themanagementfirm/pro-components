(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"7ZSp":function(e,t,a){},JBu9:function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),l=a("q1tI"),r=a.n(l),o=a("dEAq"),c=a("MZF8");a("OxFa");const u=({location:e})=>{const t=Object(l["useContext"])(o["context"]),a=t.locale,n=t.config.locales,u=n.find(({name:e})=>e!==a);function i(t){let l=e.pathname.replace("/"+a,"")||"/";return t!==n[0].name&&(l=`/${t}${l}`.replace(/\/$/,"")),l}return Boolean(n.length)&&r.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":n.length},n.length>2?r.a.createElement("select",{value:a,onChange:e=>c["a"].push(i(e.target.value))},n.map(e=>r.a.createElement("option",{value:e.name,key:e.name},e.label))):r.a.createElement(o["Link"],{to:i(u.name)},u.label))};var i=u;a("jp8u");const s=({onMobileMenuClick:e,navPrefix:t,location:a})=>{const n=Object(l["useContext"])(o["context"]),c=n.base,u=n.config,s=u.mode,m=u.title,d=u.logo,f=n.nav;return r.a.createElement("div",{className:"__dumi-default-navbar","data-mode":s},r.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:e}),r.a.createElement(o["Link"],{className:"__dumi-default-navbar-logo",style:{backgroundImage:d&&`url('${d}')`},to:c,"data-plaintext":!1===d||void 0},m),r.a.createElement("nav",null,t,f.map(e=>{var t;const a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.a.createElement("ul",null,e.children.map(e=>r.a.createElement("li",{key:e.path},r.a.createElement(o["NavLink"],{to:e.path},e.title))));return e.path?r.a.createElement(o["NavLink"],{to:e.path,key:e.path},e.title,a):r.a.createElement("span",{key:e.title},e.title,a)}),r.a.createElement(i,{location:a})))};var m=s,d=a("0Owb");a("mAF5");const f=({slugs:e,...t})=>r.a.createElement("ul",Object(d["a"])({role:"slug-list"},t),e.filter(({depth:e})=>e>1&&e<4).map(e=>r.a.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},r.a.createElement(o["AnchorLink"],{to:"#"+e.heading},r.a.createElement("span",null,e.value)))));var p=f;a("hQjr");const h=({mobileMenuCollapsed:e,location:t})=>{const a=Object(l["useContext"])(o["context"]),n=a.config,c=n.logo,u=n.title,s=n.description,m=n.mode,d=n.repository.url,f=a.menu,h=a.nav,v=a.base,g=a.meta,y=Boolean(g.hero||g.features||g.gapless)||!1===g.sidemenu||void 0;return r.a.createElement("div",{className:"__dumi-default-menu","data-mode":m,"data-hidden":y,"data-mobile-show":!e||void 0},r.a.createElement("div",{className:"__dumi-default-menu-inner"},r.a.createElement("div",{className:"__dumi-default-menu-header"},r.a.createElement(o["Link"],{to:v,className:"__dumi-default-menu-logo",style:{backgroundImage:c&&`url('${c}')`}}),r.a.createElement("h1",null,u),r.a.createElement("p",null,s),/github\.com/.test(d)&&"doc"===m&&r.a.createElement("p",null,r.a.createElement("object",{type:"image/svg+xml",data:`https://img.shields.io/github/stars${d.match(/((\/[^\/]+){2})$/)[1]}?style=social`}))),h.length?r.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},r.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},h.map(e=>{var t;const a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.a.createElement("ul",null,e.children.map(e=>r.a.createElement("li",{key:e.path||e.title},r.a.createElement(o["NavLink"],{to:e.path},e.title))));return r.a.createElement("li",{key:e.path||e.title},e.path?r.a.createElement(o["NavLink"],{to:e.path},e.title,a):r.a.createElement("span",null,e.title,a))})),r.a.createElement(i,{location:t})):r.a.createElement("div",{className:"__dumi-default-menu-doc-locale"},r.a.createElement(i,{location:t})),r.a.createElement("ul",{className:"__dumi-default-menu-list"},!y&&f.map(e=>{var a;const n=Boolean(null===(a=g.slugs)||void 0===a?void 0:a.length),l=e.children&&Boolean(e.children.length),c="menu"===g.toc&&!l&&n&&e.path===t.pathname;return r.a.createElement("li",{key:e.path||e.title},r.a.createElement(o["NavLink"],{to:e.path,exact:!(e.children&&e.children.length)},e.title),Boolean(e.children&&e.children.length)&&r.a.createElement("ul",null,e.children.map(e=>r.a.createElement("li",{key:e.path},r.a.createElement(o["NavLink"],{to:e.path,exact:!0},r.a.createElement("span",null,e.title)),Boolean("menu"===g.toc&&"undefined"!==typeof window&&e.path===t.pathname&&n)&&r.a.createElement(p,{slugs:g.slugs})))),c&&r.a.createElement(p,{slugs:g.slugs}))}))))};var v=h,g=(a("KAdo"),()=>{const e=Object(l["useState"])(""),t=Object(n["a"])(e,2),a=t[0],c=t[1],u=Object(l["useState"])([]),i=Object(n["a"])(u,2),s=i[0],m=i[1],f=Object(l["useRef"])(),p=Object(o["useSearch"])(a);return Object(l["useEffect"])(()=>{Array.isArray(p)?m(p):"function"===typeof p&&p("."+f.current.className)},[p]),r.a.createElement("div",{className:"__dumi-default-search"},r.a.createElement("input",Object(d["a"])({className:"__dumi-default-search-input",type:"search",ref:f},Array.isArray(p)?{value:a,onChange:e=>c(e.target.value)}:{})),r.a.createElement("ul",null,s.map(e=>{var t;return r.a.createElement("li",{key:e.path,onClick:()=>c("")},r.a.createElement(o["AnchorLink"],{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&r.a.createElement("span",null,e.parent.title),e.title))})))});a("7ZSp");const y=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"__dumi-default-layout-hero"},r.a.createElement("h1",null,e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map(e=>r.a.createElement(o["Link"],{to:e.link,key:e.text},r.a.createElement("button",{type:"button"},e.text))))),E=e=>r.a.createElement("div",{className:"__dumi-default-layout-features"},e.map(e=>r.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?`url(${e.icon})`:void 0}},r.a.createElement("dt",null,e.title),r.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}})))),b=({children:e,location:t})=>{var a,c,u;const i=Object(l["useContext"])(o["context"]),s=i.config,d=s.mode,f=s.locales,h=s.repository,b=(s.navs,i.meta),_=i.locale,k=i.nav,j=h.url,O=h.branch,N=Object(l["useState"])(!0),S=Object(n["a"])(N,2),w=S[0],L=S[1],x="site"===d,A=x&&b.hero,C=x&&b.features,M=!1!==b.sidemenu&&!A&&!C&&!b.gapless,$=!A&&!C&&Boolean(null===(a=b.slugs)||void 0===a?void 0:a.length)&&("content"===b.toc||void 0===b.toc)&&!b.gapless,P="zh-CN"===_||"*"===_&&"zh-CN"===(null===(c=f[0])||void 0===c?void 0:c.name)||/[\u4e00-\u9fa5]/.test(JSON.stringify(k)),B=new Date(b.updatedTime).toLocaleString(),I={github:"GitHub",gitlab:"GitLab"}[(null===(u=(j||"").match(/(github|gitlab)/))||void 0===u?void 0:u[1])||"nothing"];return Object(l["useEffect"])(()=>{window.scrollTo({top:0})},[t.pathname]),r.a.createElement("div",{className:"__dumi-default-layout","data-show-sidemenu":String(M),"data-show-slugs":String($),"data-site-mode":x,"data-gapless":String(!!b.gapless),onClick:()=>L(!0)},r.a.createElement(m,{location:t,navPrefix:r.a.createElement(g,null),onMobileMenuClick:e=>{L(e=>!e),e.stopPropagation()}}),r.a.createElement(v,{mobileMenuCollapsed:w,location:t}),$&&r.a.createElement(p,{slugs:b.slugs,className:"__dumi-default-layout-toc"}),A&&y(b.hero),C&&E(b.features),r.a.createElement("div",{className:"__dumi-default-layout-content"},e,!A&&!C&&b.filePath&&!b.gapless&&r.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},I&&r.a.createElement(o["Link"],{to:`${j}/edit/${O}/${b.filePath}`},P?`\u5728 ${I} \u4e0a\u7f16\u8f91\u8fd9\u7bc7\u6587\u6863`:"Edit this doc on "+I),r.a.createElement("span",{"data-updated-text":P?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last Update: "},B)),(A||C)&&b.footer&&r.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:b.footer}})))};t["default"]=b},KAdo:function(e,t,a){},KcUY:function(e,t,a){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a("q1tI")),r=u(a("RGYn")),o=u(a("bYHP")),c=u(a("nLCz"));function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}function m(e,t){return v(e)||h(e,t)||f(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(a.push(o.value),t&&a.length===t)break}catch(u){l=!0,r=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(l)throw r}}return a}}function v(e){if(Array.isArray(e))return e}a("qHiR"),a("vg9a");var g=function(e,t){var a=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var l=a[1].replace(/[^^]\/$/,"");return(null===(e=a[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}},n=(0,l.useState)(a(e,t)),r=m(n,2),o=r[0],c=r[1];return(0,l.useLayoutEffect)((function(){c(a(e,t))}),[t]),o},y=function(e,t){var a=function(){for(var t,a,n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(null===(t=l[0].find((function(e){return l[1].startsWith("/".concat(e.name))})))||void 0===t?void 0:t.name)||(null===(a=e[0])||void 0===a?void 0:a.name)||"*"},n=(0,l.useState)(a(e,t)),r=m(n,2),o=r[0],c=r[1];return(0,l.useLayoutEffect)((function(){c(a(e,t))}),[t]),o},E=function(e,t,a){var n=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var l=a[0].navs[a[1]]||[],r="*",o=l.length-1;o>=0;o-=1){var c=l[o],u=[c].concat(c.children).filter(Boolean),i=u.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(a[2])}));if(i){r=i.path;break}}return(null===(e=a[0].menus[a[1]])||void 0===e?void 0:e[r])||[]},r=(0,l.useState)(n(e,t,a)),o=m(r,2),c=o[0],u=o[1];return(0,l.useLayoutEffect)((function(){u(n(e,t,a))}),[e.navs,e.menus,t,a]),c},b=function(e){var t=e.location,a=e.route,n=e.children,u=g(a.routes,t.pathname),i=y(r.default.locales,t.pathname),s=E(r.default,i,t.pathname);return(0,l.useEffect)((function(){t.hash&&o.default.scrollToAnchor(t.hash.slice(1))}),[]),l.default.createElement(c.default.Provider,{value:{config:r.default,meta:u,locale:i,nav:r.default.navs[i]||[],menu:s,base:r.default.locales.length&&i!==r.default.locales[0].name?"/".concat(i):"/",routes:a.routes}},n)},_=b;t.default=_},OxFa:function(e,t,a){},hQjr:function(e,t,a){},jp8u:function(e,t,a){},mAF5:function(e,t,a){},qHiR:function(e,t,a){},vg9a:function(e,t,a){}}]);