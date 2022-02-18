"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3604],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},49366:function(e,t,n){var a=n(67294),r=n(80944),o=n(86010);t.Z=function(e){var t,n=e.lazy,l=(e.block,e.defaultValue),i=e.values,c=e.groupId,u=(e.className,a.Children.toArray(e.children)),s=null!=i?i:u.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=l?l:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,d=(0,r.Z)(),m=d.tabGroupChoices,v=d.setTabGroupChoices,f=(0,a.useState)(p),b=f[0],g=f[1];if(null!=c){var y=m[c];null!=y&&y!==b&&s.some((function(e){return e.value===y}))&&g(y)}var h=function(e){g(e),null!=c&&v(c,e)};return a.createElement("div",{className:"tabs-container"},a.createElement("div",{className:"sm:hidden"},a.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),a.createElement("select",{id:"tabs",name:"tabs",value:b,onChange:function(e){return h(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},s.map((function(e){var t=e.value,n=e.label;return a.createElement("option",{value:t,key:t},null!=n?n:t)})))),a.createElement("div",{className:"hidden sm:block"},a.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},s.map((function(e){var t=e.value,n=e.label;return a.createElement("button",{key:t,onClick:function(){return h(t)},className:(0,o.Z)(b===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":b===t?"page":void 0},null!=n?n:t)})))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},54681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(49366),i=n(30547),c=["components"],u={title:"Evict",sidebar_position:6},s=void 0,p={unversionedId:"concepts/evict",id:"concepts/evict",isDocsHomePage:!1,title:"Evict",description:"Evicting Data",source:"@site/docs/concepts/evict.mdx",sourceDirName:"concepts",slug:"/concepts/evict",permalink:"/concepts/evict",editUrl:"https://github.com/getditto/docs/edit/master/docs/concepts/evict.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Evict",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Remove",permalink:"/concepts/remove"},next:{title:"HTTP API Reference",permalink:"/concepts/http"}},d=[{value:"Evicting Data",id:"evicting-data",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"evicting-data"},"Evicting Data"),(0,o.kt)("p",null,"There are times where you want to remove data ",(0,o.kt)("em",{parentName:"p"},"without")," syncing the delete operation. This operation is different than remove in that it only removes one of more documents from the local storage and ",(0,o.kt)("strong",{parentName:"p"},"does not sync the change to other devices.")),(0,o.kt)("p",null,"For example, you might use this operation when a device has completed an activity that involved synchronizing data with other devices and has transmitted the data to a backend. At this point, the device can evict the data locally to free up storage, but it does not want to remove the data from any other device."),(0,o.kt)("p",null,"The API is extremely similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove()")," API, however it uses ",(0,o.kt)("inlineCode",{parentName:"p"},"evict()")," instead."),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"},{label:"HTTP",value:"http"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await ditto.store.collection('people').find('age <= 32').evict()\n"))),(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.store["people"].find("age <= 32").evict()\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'DITCollection *collection = [ditto.store collection:@"people"];\n[[collection find:@"age <= 32"] evict];\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.store["people"].find("age <= 32").evict()\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ditto.store.collection("people").find("age <= 32").evict();\n'))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'ditto.Store.Collection("people").Find("age <= 32").evict();\n'))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.store.collection("people").find("age <= 32").evict();\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'ditto.store().collection("people")?.find("age <= 32").evict()?;\n'))),(0,o.kt)(i.Z,{value:"http",mdxType:"TabItem"},"Evict is not supported by the HTTP API.")))}v.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);