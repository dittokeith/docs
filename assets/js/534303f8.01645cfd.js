"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9049],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90744:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Introduction",sidebar_position:1},l=void 0,c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Introduction",description:"The Ditto HTTP API follows a RESTful pattern and is organized into several resources. API Resources typically map to the key elements of the Ditto Data Model. Applications may contain one or more Collections of Documents or TimeSeries of Events. JSON is used as the default representation for individual resources, and will be indicated by the Content-Type HTTP Header. Resources which are best represented by a sequence or stream of items are represented by JSONlines, that is new line delimited JSON. This will be indicated by the MIME type application/json-l. UTF-8 encoding is used and required unless otherwise indicated. Binary data should be Base64 encoded. Where alternative representations are desired, the API Client may use the Accept HTTP Header to indicate this in the Request.",source:"@site/docs/http/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/http/installation",editUrl:"https://github.com/getditto/docs/tree/main/docs/http/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"docs",next:{title:"API Reference",permalink:"/http/api"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Endpoint",id:"endpoint",children:[],level:3},{value:"Generating a Client ID",id:"generating-a-client-id",children:[],level:3}],level:2},{value:"Authorization",id:"authorization",children:[{value:"API Key",id:"api-key",children:[],level:3},{value:"Online With Authentication",id:"online-with-authentication",children:[],level:3},{value:"Errors",id:"errors",children:[],level:3}],level:2},{value:"Advanced",id:"advanced",children:[{value:"Transactions",id:"transactions",children:[],level:3},{value:"Remove Wins",id:"remove-wins",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Ditto HTTP API follows a RESTful pattern and is organized into several resources. API Resources typically map to the key elements of the ",(0,a.kt)("a",{parentName:"p",href:"../common/concepts/overview"},"Ditto Data Model"),". Applications may contain one or more ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection"),"s of ",(0,a.kt)("inlineCode",{parentName:"p"},"Documents")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeSeries")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Event"),"s. JSON is used as the default representation for individual resources, and will be indicated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," HTTP Header. Resources which are best represented by a sequence or stream of items are represented by ",(0,a.kt)("a",{parentName:"p",href:"https://jsonlines.org"},"JSONlines"),", that is new line delimited JSON. This will be indicated by the MIME type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json-l"),". UTF-8 encoding is used and required unless otherwise indicated. Binary data should be Base64 encoded. Where alternative representations are desired, the API Client may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept")," HTTP Header to indicate this in the Request."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"For simple examples for using the HTTP API for document storage, see the\ncorresponding sections in the Concepts section for\n",(0,a.kt)("a",{parentName:"p",href:"./common/concepts/querying"},"querying"),", ",(0,a.kt)("a",{parentName:"p",href:"./common/concepts/writing"},"writing"),",\nand ",(0,a.kt)("a",{parentName:"p",href:"./common/concepts/remove"},"remove"),". Ditto Big Peer also provides HTTP APIs for querying timeseries data. See the\n",(0,a.kt)("a",{parentName:"p",href:"./timeseries"},"timeseries section")," for more information."),(0,a.kt)("h3",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,"The Ditto HTTP API provides a programmatic interface for interactions with\nDitto-powered Apps which expose an HTTP Server Interface. A primary use case for\nthe HTTP API is external systems which integrate with ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud.ditto.live"),"."),(0,a.kt)("p",null,"The canonical root URL for the HTTP API can be found in your app's page on the Ditto Portal. The standard port 443 is used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://{app_id}.cloud.ditto.live/api/v2\n")),(0,a.kt)("h3",{id:"generating-a-client-id"},"Generating a Client ID"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"X-DITTO-CLIENT-ID")," is required whenever issuing POST requests to the HTTP\nAPI. You should generate one for each client, as this ID represents a client in\nthe Ditto mesh. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("h3",{parentName:"div",id:"generate-this-id-once-and-cache-it-for-the-duration-of-each-client"},"Generate this ID once and cache it for the duration of each client."),(0,a.kt)("p",{parentName:"div"},"Client IDs are used to resolve conflicts as part of the ",(0,a.kt)("a",{parentName:"p",href:"../common/how-it-works/crdt"},"CRDT"),". Generating a new ID for each request will cause performance issues, because each\nclient represents a new device in the ditto mesh.  "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> import base64\n>>> site_id = 5\n>>> epoch = 0\n>>> site_id_bytes = site_id.to_bytes(8,'big')\n>>> epoch_bytes = epoch.to_bytes(8, 'big')\n>>> actor_id_bytes = site_id_bytes + epoch_bytes\n>>> actor_id_bytes\nb'\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x05\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\n>>> base64.b64encode(actor_id_bytes)\nb'AAAAAAAAAAUAAAAAAAAAAA=='\n")),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"Access to the Ditto HTTP API is mediated by an ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer")," HTTP\nHeader containing a valid, signed, JWT Token (RFC 7519)."),(0,a.kt)("h3",{id:"api-key"},"API Key"),(0,a.kt)("p",null,'Long-lived API tokens are great for server-side hydration, which are not owned\nby a particular user. These API keys can be obtained and managed through the\nportal in the "API Key" section. '),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api_key_top.png",src:n(16782).Z})),(0,a.kt)("p",null,"You can give each API key it's own read and write permissions, scoped to particular collections or document ids. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently, you can only specify a permission query on the _id field of a document. Mutable properties are currently not supported. We are working on adding this feature."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api_key.png",src:n(90454).Z})),(0,a.kt)("p",null,"Once you have your API Key, you can use it as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer")," HTTP header in subsequent HTTP requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'https://{YOUR_APP_ID}.cloud.ditto.live/api/v2/store/write\' \\\n--header \'X-DITTO-CLIENT-ID: AAAAAAAAAAAAAAAAAAAABQ==\' \\\n--header \'Authorization: Bearer {YOUR_API_KEY}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "commands": [{\n      "method": "upsert",\n      "collection": "people",\n      "value": {\n        "name": "Susan", "age": 31\n      }\n    }]\n  }\'\'\n')),(0,a.kt)("h3",{id:"online-with-authentication"},"Online With Authentication"),(0,a.kt)("p",null,"There are specific cases where a broad, long-lived HTTP API key is not the right\nauthorization mechanism. For user-scoped credentials, you can use a JWT retrieved from ",(0,a.kt)("a",{parentName:"p",href:"../common/security/online-with-authentication"},"Online With\nAuthentication")," to secure your\nHTTP endpoint. To retrieve a JWT for a particular user, send a POST request to the Big Peer\nwith the given provider and the user's token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --location \\\n    --request POST '{YOUR_APP_ID}.cloud.ditto.live/_ditto/auth/login' \\\n    --data-raw 'appId={YOUR_APP_ID}&provider={YOUR_PROVIDER}&token={USER_TOKEN}&siteId=1'\n")),(0,a.kt)("p",null,"Once you have this token, you can use it as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer")," HTTP header in subsequent requests (as seen in the previous section)."),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("p",null,'Ditto HTTP API errors are indicated with an HTTP Status Code and with a JSON response body containing an object with a single "error" key. This Error object contains the following fields:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"error.code - The HTTP Status Code for"),(0,a.kt)("li",{parentName:"ul"},"error.message - A short description of the error"),(0,a.kt)("li",{parentName:"ul"},"error.data - An optional object which contains further elaboration about the error")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"A successful response to POST or DELETE requests will include a\nTransaction ID, which can be used on subsequent GET requests. This type of\ninsertion is non-blocking and so is very performant."),(0,a.kt)("p",null,"Each HTTP API write request represents a distinct transaction which may be one\nor many operations (e.g., upsert or remove). Because Ditto is also a distributed\nsystem, ",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction ID"),"s are used to represent the order in which transactions\nshould be applied. Each write request returns it's associated ",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction ID"),". "),(0,a.kt)("p",null,"GET requests can optionally specify a Transaction ID in an HTTP\nHEADER called ",(0,a.kt)("inlineCode",{parentName:"p"},"X-DITTO-TXN-ID"),". This header will instruct the\nserver to wait until the given transaction is applied before executing the\nquery. The newly inserted events may still be replicating through the Ditto mesh\nbetween the time of the write and the time of the find request. If you don't supply this header, the default behavior is to use the\nmost recent version common to all Ditto nodes. If the Ditto node\nservicing the Request can't supply the version of the data requested, an error\nwill be returned."),(0,a.kt)("p",null,"For example, you write data using the HTTP API and get back Transaction 17. If\nyou want to ensure that the values included in Transaction included in our\nsubsequent query, we would include the header ",(0,a.kt)("inlineCode",{parentName:"p"},"X-DITTO-TXN-ID: 17")," in the next request. "),(0,a.kt)("h3",{id:"remove-wins"},"Remove Wins"),(0,a.kt)("p",null,'Ditto uses "remove-wins" semantics, so in some situations the client may want to\nforce Ditto to first read its current data and ensure another peer hasn\'t issued\na concurrent DELETE request before attempting an insertion with a POST request.\nTo do this, the client provides the HTTP HEADER ',(0,a.kt)("inlineCode",{parentName:"p"},"X-DITTO-ENSURE-INSERT: true"),"."))}u.isMDXComponent=!0},90454:function(e,t,n){t.Z=n.p+"assets/images/api_key-14dc6daf32ad2841de781bb3ca20e4ff.png"},16782:function(e,t,n){t.Z=n.p+"assets/images/api_key_top-91f47455bfc2165ea68d63f83a685978.png"}}]);