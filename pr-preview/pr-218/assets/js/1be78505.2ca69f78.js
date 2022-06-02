"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,465],{50494:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(87462),r=n(63366),l=n(86010),i=n(67294),o=n(45697),s=n.n(o),c=n(44225),m=n(90401),u=n(53382),d=n(23184),f=n(89713),v=n(35044),b=n(63680),p=n(78372),h=n(30396);var g=["className"],E=["className"],Z=["className"],N=["className"],_=["className"],k=function(e){var t=e.className,n=(0,r.Z)(e,g);return i.createElement(c.t,(0,a.Z)({className:(0,l.Z)("text-[#3ddb85]",t)},n))},C=function(e){var t=e.className,n=(0,r.Z)(e,E);return i.createElement(m.A,(0,a.Z)({className:(0,l.Z)("text-text",t)},n))};C.propTypes=k.propTypes={className:s().string};var y=[{id:"javascript",name:"JavaScript",icon:function(e){return i.createElement("svg",(0,a.Z)({viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{d:"M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z",fill:"#F5DE19"}),i.createElement("path",{d:"M32.3894 37.6804C32.8 38.5145 33.4379 39.2155 34.2296 39.7027C35.0213 40.1899 35.9346 40.4435 36.8642 40.4342C38.7402 40.4342 39.9398 39.4962 39.9398 38.1968C39.9398 36.6478 38.7075 36.0936 36.6422 35.19L35.5097 34.7047C32.2396 33.3123 30.071 31.5688 30.071 27.8822C30.071 24.4865 32.6527 21.8997 36.7024 21.8997C38.0134 21.805 39.3232 22.0984 40.4686 22.7433C41.6139 23.3882 42.544 24.356 43.1428 25.5261L39.6025 27.7893C39.3719 27.2092 38.9704 26.7128 38.4512 26.3661C37.9321 26.0194 37.3198 25.8387 36.6956 25.8479C36.4232 25.8206 36.1482 25.8504 35.888 25.9353C35.6278 26.0202 35.3881 26.1584 35.1842 26.341C34.9804 26.5237 34.8168 26.7468 34.7039 26.9961C34.5911 27.2455 34.5314 27.5156 34.5287 27.7893C34.5287 29.1472 35.3703 29.698 37.3134 30.5431L38.4459 31.0284C42.2943 32.6789 44.4698 34.3604 44.4698 38.1417C44.4698 42.219 41.2668 44.453 36.9658 44.453C35.2899 44.5597 33.619 44.1793 32.1546 43.3574C30.6902 42.5356 29.495 41.3076 28.7131 39.8215L32.3894 37.6804ZM16.3917 38.0728C17.1025 39.3344 17.7496 40.4015 19.3055 40.4015C20.7925 40.4015 21.7323 39.8198 21.7323 37.5565V22.1579H26.2605V37.6168C26.2605 42.305 23.5067 44.4392 19.4983 44.4392C18.0814 44.5166 16.6742 44.1635 15.4617 43.4263C14.2493 42.689 13.2883 41.6022 12.7051 40.3086L16.3917 38.0728Z",fill:"black"}))}},{id:"android",name:"Android",icon:k},{id:"ios",name:"iOS",icon:C},{id:"rust",name:"Rust",icon:function(e){var t=e.className,n=(0,r.Z)(e,Z);return i.createElement(p.T,(0,a.Z)({className:(0,l.Z)("text-[#88361b]",t)},n))}},{id:"csharp",name:"C#",icon:b.F},{id:"http",name:"HTTP",icon:f.d},{id:"raspberrypi",name:"RaspberryPi",icon:function(e){var t=e.className,n=(0,r.Z)(e,N);return i.createElement(h.n,(0,a.Z)({className:(0,l.Z)("text-[#cc2555]",t)},n))}},{id:"cpp",name:"C++",icon:d.q},{id:"xamarin",name:"Xamarin",icon:function(e){var t=e.className,n=(0,r.Z)(e,_);return i.createElement(v.w,(0,a.Z)({className:(0,l.Z)("text-[#3097d8]",t)},n))},disabled:!0},{id:"flutter",name:"Flutter",icon:u.W,disabled:!0}]},99013:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(87462),r=n(67294),l=n(86010),i=n(23746),o=n(10195),s=n(87594),c=n.n(s),m=n(95999),u=n(67804),d=n(71418),f="codeBlockContainer_2gih",v="codeBlockContent_3z4W",b="codeBlockTitle_1Kb7",p="codeBlock_6upA",h="copyButton_2e3i",g="codeBlockLines_xlV7",E=n(32822),Z=/{([\d,-]+)}/,N=["js","jsBlock","jsx","python","html"],_={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},k=["highlight-next-line","highlight-start","highlight-end"],C=function(e){void 0===e&&(e=N);var t=e.map((function(e){var t=_[e],n=t.start,a=t.end;return"(?:"+n+"\\s*("+k.join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function y(e){var t=e.children,n=e.className,s=e.metastring,N=e.title,_=(0,E.LU)().prism,k=(0,r.useState)(!1),y=k[0],w=k[1],x=(0,r.useState)(!1),I=x[0],S=x[1];(0,r.useEffect)((function(){S(!0)}),[]);var B=(0,E.bc)(s)||N,D=(0,r.useRef)(null),L=[],T=Array.isArray(t)?t.join(""):t;if(s&&Z.test(s)){var j=s.match(Z)[1];L=c()(j).filter((function(e){return e>0}))}var A=null==n?void 0:n.replace(/language-/,"");!A&&_.defaultLanguage&&(A=_.defaultLanguage);var P=T.replace(/\n$/,"");if(0===L.length&&void 0!==A){for(var R,V="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(A),H=T.replace(/\n$/,"").split("\n"),U=0;U<H.length;){var O=U+1,W=H[U].match(M);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":V+=O+",";break;case"highlight-start":R=O;break;case"highlight-end":V+=R+"-"+(O-1)+","}H.splice(U,1)}else U+=1}L=c()(V),P=H.join("\n")}var F=function(){(0,o.Z)(P),w(!0),setTimeout((function(){return w(!1)}),2e3)};return r.createElement(i.ZP,(0,a.Z)({},i.lG,{key:String(I),theme:d.Z,code:P,language:A}),(function(e){var t=e.className,n=e.style,i=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:f},B&&r.createElement("div",{style:n,className:b},B),r.createElement("div",{className:(0,l.Z)(v,A)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,p,"thin-scrollbar")},r.createElement("code",{className:g},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),i=L.includes(t+1);L.includes(t+1)&&(n.className+="bg-gray-800 docusaurus-highlight-code-line");var c=(0,l.Z)(n.className,i&&"bg-gray-700");return r.createElement("span",(0,a.Z)({key:t},n,{className:c}),e.map((function(e,t){var n=Object.assign({},s({token:e,key:t})),i=n.className;return i.includes("inserted-sign")&&(i=(0,l.Z)(i,"bg-green-900")),i.includes("deleted-sign")&&(i=(0,l.Z)(i,"bg-red-900")),r.createElement("span",(0,a.Z)({key:t},n,{className:i}))})))})))),r.createElement("button",{ref:D,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(h,"clean-btn",y?"bg-green-500":""),onClick:F},y?r.createElement("div",null,r.createElement(u.C2q,{className:"w-4 h-4 inline mr-1"}),r.createElement("span",{className:"text-xs"},"Copied")):r.createElement("div",null,r.createElement(u.Kmg,{className:"w-4 h-4 inline mr-1"}),r.createElement("span",{className:"text-xs"},"Copy")))))}))}},39824:function(e,t,n){n.d(t,{Z:function(){return K}});var a=n(67294),r=n(86010),l=n(32822),i=n(93783),o=n(87462),s=n(63366),c=n(39960),m=n(13919),u="menuLinkText_3A25",d=["items"],f=["item"],v=["item","onItemClick","activePath","level"],b=["item","onItemClick","activePath","level"],p=function e(t,n){return"link"===t.type?(0,l.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},h=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,d);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(g,(0,o.Z)({key:t,item:e},n))})))}));function g(e){var t=e.item,n=(0,s.Z)(e,f);return"category"===t.type?0===t.items.length?null:a.createElement(E,(0,o.Z)({item:t},n)):a.createElement(Z,(0,o.Z)({item:t},n))}function E(e){var t,n=e.item,i=e.onItemClick,c=e.activePath,m=e.level,d=(0,s.Z)(e,v),f=n.items,b=n.label,g=n.collapsible,E=n.className,Z=p(n,c),N=(0,l.uR)({initialState:function(){return!!g&&(!Z&&n.collapsed)}}),_=N.collapsed,k=N.setCollapsed,C=N.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,i=(0,l.D9)(t);(0,a.useEffect)((function(){t&&!i&&n&&r(!1)}),[t,i,n])}({isActive:Z,collapsed:_,setCollapsed:k}),a.createElement("li",{className:(0,r.Z)(l.kM.docs.docSidebarItemCategory,l.kM.docs.docSidebarItemCategoryLevel(m),"menu__list-item",{"menu__list-item--collapsed":_},E)},a.createElement("a",(0,o.Z)({className:(0,r.Z)("menu__link",(t={"menu__link--sublist":g,"menu__link--active":g&&Z},t[u]=!g,t)),onClick:g?function(e){e.preventDefault(),C()}:void 0,href:g?"#":void 0},d),b),a.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(h,{items:f,tabIndex:_?-1:0,onItemClick:i,activePath:c,level:m+1})))}function Z(e){var t=e.item,n=e.onItemClick,i=e.activePath,u=e.level,d=(0,s.Z)(e,b),f=t.href,v=t.label,h=t.className,g=p(t,i);return a.createElement("li",{className:(0,r.Z)(l.kM.docs.docSidebarItemLink,l.kM.docs.docSidebarItemLinkLevel(u),"menu__list-item",h),key:v},a.createElement(c.Z,(0,o.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":g}),"aria-current":g?"page":void 0,to:f},(0,m.Z)(f)&&{onClick:n},d),(0,m.Z)(f)?v:a.createElement("span",null,v)))}var N="sidebar_3jCp",_="sidebarWithHideableNavbar_Uxjr",k="sidebarHidden_22GT",C="menu_1DcY",y="menuWithAnnouncementBar_3IKd",w=n(74501),x=n(6654),I=n(14653),S=n(76775),B=n(96730),D=n(80944),L=n(45697),T=n(50494),j=function(){return window.location.pathname.split("/").slice(1)},A=function(e){var t=e.className,n=(0,D.Z)(),l=n.tabGroupChoices,i=n.setTabGroupChoices,o=T.Z.find((function(e){return e.id===l.platform})),s=(0,a.useState)(o||T.Z[0]),c=s[0],m=s[1],u=(0,B._r)(),d=(0,S.k6)();(0,a.useEffect)((function(){var e,t=j()[0],n=(e=t,T.Z.find((function(t){return t.id===e})));n&&n.id!==c.id&&m(n)}),[]);return a.createElement(w.R,{value:c,onChange:function(e){m(e),i("platform",e.id);var t=j().slice(1),n=e.id,a="/"+n+"/"+t.join("/");!function(e,t,n){return console.log(e,t),n[e].versions[0].docs.some((function(e){return e.path===t}))}(n,a,u)?d.push("/"+n+"/installation"):(window.location.hash&&(a+=window.location.hash),d.push(a))},className:(0,r.Z)("relative",t)},a.createElement("div",{className:"relative mt-1"},a.createElement(w.R.Button,{className:"relative flex h-12 w-full cursor-pointer items-center rounded-lg border-none bg-background-100 py-2 pl-3 pr-10 text-left outline-none focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},a.createElement(c.icon,{className:"mr-2 h-8","aria-hidden":"true",alt:c.name}),a.createElement("span",{className:"lv0_link block truncate text-text"},c.name),a.createElement("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},a.createElement(I.Ta4,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}))),a.createElement("div",{className:"relative w-full"},a.createElement(x.u,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},a.createElement(w.R.Options,{style:{background:"white"},className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background-100 p-0 py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},T.Z.filter((function(e){return!e.disabled})).map((function(e){return a.createElement(w.R.Option,{key:e.id,className:function(e){var t=e.active;return(0,r.Z)("relative cursor-pointer select-none py-2 px-4",t&&"bg-background-200")},value:e},(function(t){var n=t.selected;return a.createElement("div",{className:"flex items-center justify-between"},a.createElement("div",{className:"flex items-center"},a.createElement(e.icon,{className:"mr-2 h-8",alt:e.name,"aria-hidden":"true"}),a.createElement("span",{className:(0,r.Z)("block truncate",n?"font-medium":"font-normal")},e.name)),n?a.createElement("span",{className:"left-0 flex items-center pl-3 text-blue-600"},a.createElement(I.nQG,{className:"h-5 w-5","aria-hidden":"true"})):null)}))})))))))};A.propTypes={className:L.string};var P=(0,a.memo)(A),R=n(67804),V=n(91262);function M(e){var t=e.onClick;return a.createElement("div",{className:"absolute top-0 right-0 flex h-full w-1"},a.createElement("button",{className:"absolute right-[-12px] mt-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-background-200",onClick:t,onKeyDown:t,tabIndex:0,"aria-label":"Collapse sidebar"},a.createElement(R.wyc,{className:"h-3 text-text"})))}var H=function(){var e;e=window.location.pathname.split("/")[1],["docs","","guides","cli"].includes(e);return a.createElement("div",{className:"my-4 flex items-center justify-end px-4"},a.createElement(P,{className:"flex-[3]"}))};function U(e){var t,n,i=e.path,o=e.sidebar,s=e.onCollapse,c=e.isHidden,m=function(){var e=(0,l.nT)().isClosed,t=(0,a.useState)(!e),n=t[0];return t[1],n}(),u=(0,l.LU)(),d=u.navbar.hideOnScroll,f=u.hideableSidebar,v=(0,l.nT)().isClosed;return a.createElement("div",{className:(0,r.Z)(N,(t={},t[_]=d,t[k]=c,t))},a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar","overflow-x-visible",C,(n={},n[y]=!v&&m,n))},a.createElement("ul",{className:(0,r.Z)(l.kM.docs.docSidebarMenu,"menu__list")},a.createElement(V.Z,null,(function(){return a.createElement(H,null)})),a.createElement(h,{items:o,activePath:i}))),f&&a.createElement(M,{onClick:s}))}var O=function(e){var t=e.toggleSidebar,n=e.sidebar,i=e.path;return a.createElement("ul",{className:(0,r.Z)(l.kM.docs.docSidebarMenu,"menu__list")},a.createElement(V.Z,null,(function(){return a.createElement(H,null)})),a.createElement(h,{items:n,activePath:i,onItemClick:function(){return t()}}))};function W(e){return a.createElement(l.Cv,{component:O,props:e})}var F=a.memo(U),z=a.memo(W);function K(e){var t=(0,i.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(F,e),r&&a.createElement(z,e))}},82838:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),o=n(39960),s=n(32822),c=n(44996),m=n(13919),u="footerLogoLink_qW4Z",d=n(89750),f=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,n=e.href,i=e.label,s=e.prependBaseUrlToHref,u=(0,r.Z)(e,f),d=(0,c.Z)(t),v=(0,c.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,a.Z)({className:"footer__link-item"},n?{href:s?v:n}:{to:d},u),n&&!(0,m.Z)(n)?l.createElement("span",null,i):i)}var b=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};var p=function(){var e=(0,s.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,m=t.logo,d=void 0===m?{}:m,f={light:(0,c.Z)(d.src),dark:(0,c.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,i.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),(d||n)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(o.Z,{href:d.href,className:u},l.createElement(b,{alt:d.alt,sources:f})):l.createElement(b,{alt:d.alt,sources:f})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}},12172:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(87462),r=n(67294),l=n(86010),i=n(95999),o=n(51588),s=n(40232),c=n(85350),m=n(32822),u=n(55662),d=n(31839),f=n(93783),v=n(96730),b=n(26475),p=n(55537),h=n(67804),g="toggle_2xs0",E="navbarHideable_1VR7",Z="navbarHidden_1FmO",N="navbarSidebarToggle_nWi-",_="navbarSidebarCloseSvg_fJdH",k="right";function C(){return(0,m.LU)().navbar.items}function y(){var e=(0,m.LU)().colorMode.disableSwitch,t=(0,c.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function w(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,d.Z)(t);var o=C(),c=y(),u=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,m.g8)())?void 0:t({toggleSidebar:a}),i=(0,m.D9)(l),o=(0,r.useState)((function(){return!1})),s=o[0],c=o[1];(0,r.useEffect)((function(){l&&!i&&c(!0)}),[l,i]);var u=!!l;return(0,r.useEffect)((function(){u?n||c(!0):c(!1)}),[n,u]),{shown:s,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(s.Z,{className:N,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(h.b0D,{width:20,height:20,className:_}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var x=function(){var e,t=(0,m.LU)().navbar,n=t.hideOnScroll,i=t.style,c=function(){var e=(0,f.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],l=n[1];(0,m.Rb)((function(){a&&l(!1)}));var i=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:i,shown:a}}(),d=y(),N=(0,v.gA)(),_=(0,u.Z)(n),x=_.navbarRef,I=_.isNavbarVisible,S=C(),B=S.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:k)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:k)}))}}(S),L=D.leftItems,T=D.rightItems;return r.createElement("nav",{ref:x,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":c.shown},e[E]=n,e[Z]=n&&!I,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==S?void 0:S.length)>0||N)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:c.toggle,onKeyDown:c.toggle},r.createElement(h.Oqj,{width:25,height:25})),r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),L.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},T.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))})),!d.disabled&&r.createElement(s.Z,{className:g,checked:d.isDarkTheme,onChange:d.toggle}),!B&&r.createElement(o.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:c.toggle}),c.shouldRender&&r.createElement(w,{sidebarShown:c.shown,toggleSidebar:c.toggle}))}},44517:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),o=n(39960),s=n(44996),c=n(13919),m=n(26475),u=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function b(e){var t,n=e.activeBasePath,i=e.activeBaseRegex,m=e.to,d=e.href,f=e.label,v=e.activeClassName,b=void 0===v?"":v,p=e.prependBaseUrlToHref,h=(0,r.Z)(e,u),g=(0,s.Z)(m),E=(0,s.Z)(n),Z=(0,s.Z)(d,{forcePrependBaseUrl:!0}),N=f&&d&&!(0,c.Z)(d);return l.createElement(o.Z,(0,a.Z)({className:"inline"},d?{href:p?Z:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=h.className)&&t.includes(b)?"":b,to:g},n||i?{isActive:function(e,t){return i?new RegExp(i).test(t.pathname):t.pathname.startsWith(E)}}:null),h),N?l.createElement("span",{className:"inline"},f):f)}function p(e){var t=e.className,n=e.isDropdownItem,o=void 0!==n&&n,s=(0,r.Z)(e,d),c=l.createElement(b,(0,a.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},s));return o?l.createElement("li",null,c):c}function h(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,i=void 0!==n&&n,o=(e.position,(0,r.Z)(e,v)),s=i?h:p;return l.createElement(s,(0,a.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,m.E)(i)}))}},79061:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),i=n(44517),o=n(96730),s=n(86010),c=n(26475),m=n(32822),u=n(18780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,b=(0,r.Z)(e,d),p=(0,o.Iw)(v),h=p.activeVersion,g=p.activeDoc,E=(0,m.J)(v).preferredVersion,Z=(0,o.yW)(v),N=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,u.uniq)([h,E,Z].filter(Boolean)),n),_=(0,c.E)(b.mobile);return l.createElement(i.Z,(0,a.Z)({exact:!0},b,{className:(0,s.Z)(b.className,(t={},t[_]=(null==g?void 0:g.sidebar)&&g.sidebar===N.sidebar,t)),activeClassName:_,label:null!=f?f:N.id,to:N.path}))}},43886:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),i=n(44517),o=n(29553),s=n(96730),c=n(32822),m=n(95999),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,b=e.dropdownActiveClassDisabled,p=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,r.Z)(e,u),E=(0,s.Iw)(v),Z=(0,s.gB)(v),N=(0,s.yW)(v),_=(0,c.J)(v),k=_.preferredVersion,C=_.savePreferredVersionName;var y,w=(y=Z.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){C(e.name)}}})),[].concat(p,y,h)),x=null!=(t=null!=(n=E.activeVersion)?n:k)?t:N,I=f&&w?(0,m.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):x.label,S=f&&w?void 0:d(x).path;return w.length<=1?l.createElement(i.Z,(0,a.Z)({},g,{mobile:f,label:I,to:S,isActive:b?function(){return!1}:void 0})):l.createElement(o.Z,(0,a.Z)({},g,{mobile:f,label:I,to:S,items:w,isActive:b?function(){return!1}:void 0}))}},85412:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),l=n(67294),i=n(44517),o=n(96730),s=n(32822),c=["label","to","docsPluginId"];function m(e){var t,n=e.label,m=e.to,u=e.docsPluginId,d=(0,r.Z)(e,c),f=(0,o.zu)(u),v=(0,s.J)(u).preferredVersion,b=(0,o.yW)(u),p=null!=(t=null!=f?f:v)?t:b,h=null!=n?n:p.label,g=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(p).path;return l.createElement(i.Z,(0,a.Z)({},d,{label:h,to:g}))}},29553:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),i=n(86010),o=n(32822),s=n(44517),c=n(26475),m=["items","position","className"],u=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,o=e.position,u=e.className,d=(0,r.Z)(e,m),f=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),p=b[0],h=b[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":p})},l.createElement(s.O,(0,a.Z)({className:(0,i.Z)("navbar__link",u)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!p))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(c.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,u)),v=(0,o.be)(),b=f(n,v),p=(0,o.uR)({initialState:function(){return!b}}),h=p.collapsed,g=p.toggleCollapsed,E=p.setCollapsed;return(0,l.useEffect)((function(){b&&E(!b)}),[v,b]),l.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":h})},l.createElement(s.O,(0,a.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),g()}}),null!=(t=d.children)?t:d.label),l.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.map((function(e,t){return l.createElement(c.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),i=n?b:v;return l.createElement(i,a)}},26475:function(e,t,n){n.d(t,{Z:function(){return E},E:function(){return g}});var a=n(63366),r=n(67294),l=n(44517),i=n(29553),o=n(87462),s=n(23264),c=n(52263),m=n(32822),u="iconLanguage_17ys",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,f=(0,a.Z)(e,d),v=(0,c.Z)().i18n,b=v.currentLocale,p=v.locales,h=v.localeConfigs,g=(0,m.l5)();function E(e){return h[e].label}var Z=p.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===b?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),N=[].concat(n,Z,l),_=t?"Languages":E(b);return r.createElement(i.Z,(0,o.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s.Z,{className:u}),r.createElement("span",null,_)),items:N}))}var v=n(51588);function b(e){return e.mobile?null:r.createElement(v.Z,null)}var p=["type"],h={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return b},dropdown:function(){return i.Z},docsVersion:function(){return n(85412).Z},docsVersionDropdown:function(){return n(43886).Z},doc:function(){return n(79061).Z}};var g=function(e){return e?"menu__link--active":"navbar__link--active"};function E(e){var t=e.type,n=(0,a.Z)(e,p),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),i=function(e){var t=h[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(i,n)}}}]);