"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8032],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58177:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Overview",sidebar_position:1},l=void 0,p={unversionedId:"guides/http/overview",id:"guides/http/overview",isDocsHomePage:!1,title:"Overview",description:"The Ditto HTTP API follows a RESTful pattern and is organized into several resources. API Resources typically map to the key elements of the Ditto Data Model. Applications may contain one or more Collections of Documents or TimeSeries of Events. JSON is used as the default representation for individual resources, and will be indicated by the Content-Type HTTP Header. Resources which are best represented by a sequence or stream of items are represented by JSONlines, that is new line delimited JSON. This will be indicated by the MIME type application/json-l. UTF-8 encoding is used and required unless otherwise indicated. Binary data should be Base64 encoded. Where alternative representations are desired, the API Client may use the Accept HTTP Header to indicate this in the Request.",source:"@site/docs/guides/http/overview.md",sourceDirName:"guides/http",slug:"/guides/http/overview",permalink:"/pr-preview/pr-215/guides/http/overview",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/http/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SwiftUI",permalink:"/pr-preview/pr-215/guides/testing/iOS"},next:{title:"Documents",permalink:"/pr-preview/pr-215/guides/http/documents"}},c=[{value:"Endpoint",id:"endpoint",children:[],level:2},{value:"Errors",id:"errors",children:[],level:2},{value:"Authorization",id:"authorization",children:[],level:2},{value:"Generating an X-DITTO-CLIENT-ID",id:"generating-an-x-ditto-client-id",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Ditto HTTP API follows a RESTful pattern and is organized into several resources. API Resources typically map to the key elements of the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/overview"},"Ditto Data Model"),". Applications may contain one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),"s of ",(0,o.kt)("inlineCode",{parentName:"p"},"Documents")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"TimeSeries")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Event"),"s. JSON is used as the default representation for individual resources, and will be indicated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," HTTP Header. Resources which are best represented by a sequence or stream of items are represented by ",(0,o.kt)("a",{parentName:"p",href:"https://jsonlines.org"},"JSONlines"),", that is new line delimited JSON. This will be indicated by the MIME type ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json-l"),". UTF-8 encoding is used and required unless otherwise indicated. Binary data should be Base64 encoded. Where alternative representations are desired, the API Client may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept")," HTTP Header to indicate this in the Request."),(0,o.kt)("h2",{id:"endpoint"},"Endpoint"),(0,o.kt)("p",null,"The Ditto HTTP API provides a programmatic interface for interactions with Ditto-powered Apps which expose an HTTP Server Interface. A primary use case for the HTTP API is external systems which integrate with ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud.ditto.live"),"."),(0,o.kt)("p",null,"The canonical root URL for the HTTP API is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<app-uuid>.cloud.ditto.live/api/v1/"),". The standard port 443 is used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://f81d4fae-7dec-11d0-a765-00a0c91e6bf6.cloud.ditto.live/api/v1\n")),(0,o.kt)("p",null,"For simple examples for using the HTTP API for document storage, see the corresponding sections in the Concepts section for ",(0,o.kt)("a",{parentName:"p",href:"/concepts/querying"},"querying"),", ",(0,o.kt)("a",{parentName:"p",href:"/concepts/update"},"update"),", and ",(0,o.kt)("a",{parentName:"p",href:"/concepts/remove"},"remove"),". "),(0,o.kt)("p",null,"Ditto Big Peer also provides HTTP APIs for querying timeseries data. See the ",(0,o.kt)("a",{parentName:"p",href:"/guides/http/timeseries"},"timeseries section")," for more information."),(0,o.kt)("p",null,"In addition to these examples, we also have JSON schema documents that help describe the request bodies and responses. They can be helpful if you have any questions on what any field means or what the server might return."),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("p",null,'Ditto HTTP API errors are indicated with an HTTP Status Code and with a JSON response body containing an object with a single "error" key. This Error object contains the following fields:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"error.code - The HTTP Status Code for"),(0,o.kt)("li",{parentName:"ul"},"error.message - A short description of the error"),(0,o.kt)("li",{parentName:"ul"},"error.data - An optional object which contains further elaboration about the error")),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Access to the Ditto HTTP API is mediated by an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer")," HTTP Header containing a valid, signed, JWT Token (RFC 7519). This token can be obtained from the following endpoint: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<app-uuid>.cloud.ditto.live/_ditto/auth/login"),". See ",(0,o.kt)("a",{parentName:"p",href:"/security/online-with-authentication"},"Online With Authentication")," to secure your HTTP endpoint."),(0,o.kt)("p",null,"The JWT encodes the identity of the client, the target application, and the permissions the client is entitled to access."),(0,o.kt)("h2",{id:"generating-an-x-ditto-client-id"},"Generating an X-DITTO-CLIENT-ID"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"X-DITTO-CLIENT-ID")," is required whenever issuing POST requests to the HTTP API. You should generate one for each client, as this ID represents a client in the Ditto mesh. Generating a new ID for each request, rather than one for the HTTP client, could cause performance issues. When possible generate this ID and cache it for the duration of the client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},">>> import base64\n>>> site_id = 5\n>>> epoch = 0\n>>> site_id_bytes = site_id.to_bytes(8,'big')\n>>> epoch_bytes = epoch.to_bytes(8, 'big')\n>>> actor_id_bytes = site_id_bytes + epoch_bytes\n>>> actor_id_bytes\nb'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x05\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\n>>> base64.b64encode(actor_id_bytes)\nb'AAAAAAAAAAUAAAAAAAAAAA=='\n")))}u.isMDXComponent=!0}}]);