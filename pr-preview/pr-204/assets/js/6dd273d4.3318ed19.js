"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8259],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21797:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Overview",sidebar_position:1},l=void 0,c={unversionedId:"guides/testing/overview",id:"guides/testing/overview",isDocsHomePage:!1,title:"Overview",description:"Testing peer-to-peer systems can be challenging, but worth the initial effort to",source:"@site/docs/guides/testing/overview.mdx",sourceDirName:"guides/testing",slug:"/guides/testing/overview",permalink:"/pr-preview/pr-204/guides/testing/overview",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/testing/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manual Configuration",permalink:"/pr-preview/pr-204/guides/mesh-network/manual"},next:{title:"Android Kotlin",permalink:"/pr-preview/pr-204/guides/testing/kotlin"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Testing peer-to-peer systems can be challenging, but worth the initial effort to\nensure your data model works across multiple instances. It is important to test\nyour business logic with end-to-end unit tests that involve multiple Ditto peers. "),(0,o.kt)("p",null,"A typical test lifecycle is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create two instances of Ditto with the same identity and different directories."),(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"tryStartSync()")," on both instances."),(0,o.kt)("li",{parentName:"ol"},"Listen for changes to data using ",(0,o.kt)("inlineCode",{parentName:"li"},"observe()")," and write tests as a response to the ",(0,o.kt)("inlineCode",{parentName:"li"},"observe()")," function."),(0,o.kt)("li",{parentName:"ol"},"Clean up Ditto directories between tests and stop any open syncronization\nthreads using ",(0,o.kt)("inlineCode",{parentName:"li"},"stopSync()"),".")),(0,o.kt)("p",null,"For complete examples and running tests, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/testing/"},"open source samples GitHub repository"),"."))}d.isMDXComponent=!0}}]);