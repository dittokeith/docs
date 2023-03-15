"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4445],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},93374:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=o(87462),i=(o(67294),o(3905));const n={title:"DittoSwiftTools",sidebar_position:8},a=void 0,l={unversionedId:"quick-tips/DittoSwiftTools",id:"quick-tips/DittoSwiftTools",isDocsHomePage:!1,title:"DittoSwiftTools",description:"DittoSwiftTools is an iOS package that gives you access to the Ditto Presence Viewer and Disk Usage.",source:"@site/docs/ios/quick-tips/DittoSwiftTools.md",sourceDirName:"quick-tips",slug:"/quick-tips/DittoSwiftTools",permalink:"/ios/quick-tips/DittoSwiftTools",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/quick-tips/DittoSwiftTools.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"DittoSwiftTools",sidebar_position:8},sidebar:"docs",previous:{title:"@StateObject vs. @ObservedObject",permalink:"/ios/quick-tips/StateObject-vs-ObservedObject"},next:{title:"Avoiding Excessive Memory Consumption",permalink:"/ios/quick-tips/avoiding-excessive-memory-consumption"}},s=[{value:"Setup",id:"setup",children:[],level:3},{value:"Presence Viewer",id:"presence-viewer",children:[],level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DittoSwiftTools is an iOS package that gives you access to the Ditto Presence Viewer and Disk Usage."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Open your Xcode project and select the "File" > "Add Packages..." menu entry. Enter the following package URL in search box in the upper right corner:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/getditto/dittoswifttools"},"https://github.com/getditto/dittoswifttools")))),(0,i.kt)("li",{parentName:"ol"},'Click the "Add Package" button.')),(0,i.kt)("p",null,"Xcode will take a minute or two to download the Ditto package."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the package product(s) you want to use in your app.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Presence Viewer"),(0,i.kt)("li",{parentName:"ol"},"Disk Usage (coming soon)")))),(0,i.kt)("p",null,'Click the "Add Package" button.'),(0,i.kt)("h3",{id:"presence-viewer"},"Presence Viewer"),(0,i.kt)("p",null,"The Presence Viewer allows you see a visualization of all the currently connected peers and the type of transport each peer is connected with."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import the ",(0,i.kt)("inlineCode",{parentName:"li"},"DittoPresenceViewer")),(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"PresenceView(YOUR_DITTO_INSTANCE)")," method from your View")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var body: some View {\n  PresenceView(YOUR_DITTO_INSTANCE)\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(83769).Z})))}u.isMDXComponent=!0},83769:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/PresenceViewer-81642fc5e0d22d1d59bef68ef73c2dfd.png"}}]);