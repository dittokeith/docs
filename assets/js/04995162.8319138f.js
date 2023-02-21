(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2017],{79443:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n=(0,i(67294).createContext)(void 0)},80944:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(67294),a=i(79443);const s=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(67294);const a=function(e){let{children:t,hidden:i,className:a}=e;return n.createElement("div",{role:"tabpanel",hidden:i,className:a},t)}},49366:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(67294),a=i(80944),s=i(86010);const r=function(e){const{lazy:t,platform:i,block:r,defaultValue:l,values:o,groupId:c,className:d}=e,u=n.Children.toArray(e.children),h=o??u.map((e=>({value:e.props.value,label:e.props.label}))),p=l??u.find((e=>e.props.default))?.props.value,{tabGroupChoices:m,setTabGroupChoices:f}=(0,a.Z)(),[k,y]=(0,n.useState)(p);(0,n.useEffect)((()=>{if(null!=c){const e=m[c];null!=e&&e!==k&&(h.some((t=>t.value===e))?y(e):y(p))}}),[i,m[c]]);const v=e=>{y(e),null!=c&&f(c,e)},g=h.length>1;return n.createElement("div",{className:"tabs-container"},g&&n.createElement(n.Fragment,null,n.createElement("div",{className:"sm:hidden"},n.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),n.createElement("select",{id:"tabs",name:"tabs",value:k,onChange:e=>v(e.currentTarget.value),className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},h.map((e=>{let{value:t,label:i}=e;return n.createElement("option",{value:t,key:t},i??t)})))),n.createElement("div",{className:"hidden sm:block"},n.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},h.map((e=>{let{value:t,label:i}=e;return n.createElement("button",{key:t,onClick:()=>v(t),className:(0,s.Z)(k===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":k===t?"page":void 0},i??t)}))))),t?(0,n.cloneElement)(u.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},34968:(e,t,i)=>{"use strict";i.r(t),i.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=i(87462),a=(i(67294),i(3905));i(8209),i(49366),i(30547);const s={title:"Certificate-Based Security",sidebar_position:10},r=void 0,l={unversionedId:"how-it-works/certificate-security",id:"how-it-works/certificate-security",isDocsHomePage:!1,title:"Certificate-Based Security",description:"This section contains an advanced discussion of Ditto's underlying certificate, identity, and",source:"@site/docs/common/how-it-works/certificate-security.mdx",sourceDirName:"how-it-works",slug:"/how-it-works/certificate-security",permalink:"/common/how-it-works/certificate-security",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/how-it-works/certificate-security.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Certificate-Based Security",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Mesh Network",permalink:"/common/how-it-works/mesh-network"},next:{title:"Big Peer",permalink:"/common/how-it-works/big-peer"}},o=[{value:"Identities",id:"identities",children:[],level:2},{value:"Certificates",id:"certificates",children:[],level:2},{value:"Discovering peers",id:"discovering-peers",children:[],level:2},{value:"Synchronizing with the Big Peer",id:"synchronizing-with-the-big-peer",children:[{value:"Overview",id:"overview",children:[],level:3},{value:"Step 1: Complete a Peer Key Challenge",id:"step-1-complete-a-peer-key-challenge",children:[],level:3},{value:"Step 2: Log in with Credentials",id:"step-2-log-in-with-credentials",children:[],level:3},{value:"Step 3: Upgrade to an X.509 Certificate",id:"step-3-upgrade-to-an-x509-certificate",children:[],level:3},{value:"Rationale",id:"rationale",children:[],level:3}],level:2}],c={toc:o},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This section contains an advanced discussion of Ditto's underlying certificate, identity, and\nencryption implementation. Most readers can skip this section.  However, if you are deploying an enterprise\non-premises deployment of Ditto, you may be required to reference the following\nmaterial.  "))),(0,a.kt)("p",null,"All communications are consistently protected by modern and robust encryption\nfor all of Ditto's communication methods. Cryptographically-signed business\nrules ensure users can only sync data that they are permitted to access. The app\ndeveloper is in complete control of the keys, certificates, and rules."),(0,a.kt)("p",null,"The Ditto Big Peer provisions a signed x509 certificate. This certificate may\nthen be presented to other Ditto peers to mutually establish trust and create\nencrypted communications channels. "),(0,a.kt)("p",null,"The following details information about the certificates used to encrypt the\ncommunication channels."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Capability"),(0,a.kt)("th",null,"Type")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Encryption"),(0,a.kt)("td",null,"TLS 1.3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Authentication"),(0,a.kt)("td",null,"EC keypairs with signed certificates")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Trust infrastructure"),(0,a.kt)("td",null,"X.509 with a developer-controlled certificate authority")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Access Rules"),(0,a.kt)("td",null,"Query patterns on Document _id's describing read and or write access"))),(0,a.kt)("h2",{id:"identities"},"Identities"),(0,a.kt)("p",null,"An identity is a bundle of the device and app-specific information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Site ID - A number unique to this device."),(0,a.kt)("li",{parentName:"ul"},"App Name - A name identifying the application. This avoids different Ditto-enabled apps trying to sync with each other. These are unique identifiers, for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"5322afcd-5a70-43a3-bc2d-85d98ccf5ac0")),(0,a.kt)("li",{parentName:"ul"},"Access Rules - Define which documents this device is allowed to read or write during sync."),(0,a.kt)("li",{parentName:"ul"},"Private Key - A secret for authenticating as this identity."),(0,a.kt)("li",{parentName:"ul"},"Identity Certificate - A certificate verifying the particulars of this device, signed by the CA."),(0,a.kt)("li",{parentName:"ul"},"CA Certificate - Used to verify certificates presented by other devices with the same app.")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Production"),(0,a.kt)("th",null,"Development")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Site ID"),(0,a.kt)("td",null,"Allocated by central authority"),(0,a.kt)("td",null,"Defaults to a random number; can be customized")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"App ID"),(0,a.kt)("td",null,"Set by central authority"),(0,a.kt)("td",null,'For example, "5322afcd-5a70-43a3-bc2d-85d98ccf5ac0"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Access Rules"),(0,a.kt)("td",null,"Set by central authority"),(0,a.kt)("td",null,"All devices may read/write all documents")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Private Key"),(0,a.kt)("td",null,"Either generated on device or distributed by central authority"),(0,a.kt)("td",null,"Hard-coded and shared by all devices")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Identity Certificate"),(0,a.kt)("td",null,"Unique and signed by a central authority; contains this device's public key"),(0,a.kt)("td",null,"Hard-coded and shared by all devices")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CA Certificate"),(0,a.kt)("td",null,"Shared by all users of the same app"),(0,a.kt)("td",null,"Hard-coded and shared by all devices")),(0,a.kt)("table",null)),(0,a.kt)("h2",{id:"certificates"},"Certificates"),(0,a.kt)("p",null,"Ditto identities and public keys are distributed in the standard X.509\ncertificate format. They do not directly contain potentially sensitive data such as access rules,\nbut these can be defined by the app's authentication webhook with the\n",(0,a.kt)("a",{parentName:"p",href:"../concepts/designing-permissions"},"OnlineWithAuthentication identity"),", or by the\ndeveloper through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Manual")," identity."),(0,a.kt)("p",null,"When you are ready to use production identities, feel free to contact\nus through the Ditto Portal and we will help you set up the right CA\ntooling for your use case - or provide specifications so you can build your own."),(0,a.kt)("h2",{id:"discovering-peers"},"Discovering peers"),(0,a.kt)("p",null,"Devices need to have the same AppID to discover other peers on the network, as\nwell as matching certificates to connect over TLS 1.3. Peer-to-peer connections use mTLS (client certificates) with TLS 1.3. Connections to the Big Peer use a TLS-secured WebSocket connection, with authentication by JWT. Once the certificates match,\nthen the embedded authorization information inside each certificate is used to\nauthorize any incoming requests by that peer. This ensures that those access\ncontrol rules are enforced. "),(0,a.kt)("h2",{id:"synchronizing-with-the-big-peer"},"Synchronizing with the Big Peer"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The description below covers internal details of the Big Peer implementation.  Ditto\u2019s authentication module handles this\nimplementation for you under the hood as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnlineWithAuthentication")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OnlinePlayground"),"\nidentities. "))),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Online Authentication can be used when a Ditto application is hosted on a Big Peer. The Big Peer hosts an HTTPS identity service, which handles login requests. In Online Authentication mode, a Small Peer must log in with credentials before it can communicate with any peers. The login flow populates the Small Peer with valid authentication material that identifies the user and defines their level of access. Once the Small Peer receives this data after a successful login, the transports which depend on it will start automatically."),(0,a.kt)("h3",{id:"step-1-complete-a-peer-key-challenge"},"Step 1: Complete a Peer Key Challenge"),(0,a.kt)("p",null,"The peer\u2019s public key will be included in the certificates returned by the identity service. The identity service needs proof that the authenticating Small Peer actually holds the corresponding private key."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Small Peer downloads a challenge token from ",(0,a.kt)("inlineCode",{parentName:"li"},"/_ditto/auth/cert")," - this is a time-limited JWT which the client treats as opaque data."),(0,a.kt)("li",{parentName:"ol"},"Small Peer uses their Peer Key to sign it.")),(0,a.kt)("h3",{id:"step-2-log-in-with-credentials"},"Step 2: Log in with Credentials"),(0,a.kt)("p",null,"When a client attempts to authenticate, it will make an HTTPS request to the identity service containing the following payload:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Signed challenge"),(0,a.kt)("li",{parentName:"ul"},"App ID"),(0,a.kt)("li",{parentName:"ul"},"Provider name"),(0,a.kt)("li",{parentName:"ul"},"Credentials to be forwarded to the app's ",(0,a.kt)("a",{parentName:"li",href:"../security/authentication"},"authentication webhook"))),(0,a.kt)("p",null,"Once the identity service has a response from the auth webhook, it will build and sign a JWT. In addition to the information we would expect to find in a JWT (issuer, issued at, expiry, etc), we also include an encoded representation of the Ditto Identity.\nThe Ditto Identity is built from the information provided by the app's authentication webhook response."),(0,a.kt)("h3",{id:"step-3-upgrade-to-an-x509-certificate"},"Step 3: Upgrade to an X.509 Certificate"),(0,a.kt)("p",null,"Once a peer has a JWT, it will want to use this to get a device certificate.\xa0 The\npeer will now make an HTTPS certificate request to the identity service.\nThe \u201crequest certificate\u201d endpoint requires a valid JWT.\xa0 The contents of the\nnew certificate is closely tied to the JWT.\xa0 The certificate expiration time is the same as the JWT, and the ditto identity embedded in the\ncertificate is pulled from the JWT.\xa0 The identity service generates a\nprivate key for the device.\xa0 It uses this private key to generate a CSR on\nbehalf of the client and then the identity service\u2019s CA keys to sign it."),(0,a.kt)("p",null,"Once this information is prepared, the identity service is ready to respond to the request.\nThe response will include the client's generated certificate and private key, a list of CA certificates the client should trust, and a DateTime for\nexpiration.\xa0The client will persist the JWT, device private key, device\ncertificate, and CA certificates on disk and only update them when they get near\nexpiration."),(0,a.kt)("p",null,"When two peers authenticate with each other, they can use either\nthe JWT or the device certificate via MTLS. The decision depends on the client's\ncapabilities and connection type."),(0,a.kt)("h3",{id:"rationale"},"Rationale"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why does X.509 return both a key and a certificate instead of locally generating a key and sending a CSR?")),(0,a.kt)("p",null,"It would be possible to use a standard CSR flow. It was chosen to issue keys directly for a few reasons."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is no security benefit as our certificate request is in a secured tunnel, and the identity service is presumed to be completely trustworthy."),(0,a.kt)("li",{parentName:"ul"},"Validating and signing CSRs is more complex than simply creating one with the correct format and fields."),(0,a.kt)("li",{parentName:"ul"},"This is a convenient workflow if using Hashicorp Vault or similar to manage your PKI and issue certificates on demand.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why is X.509 a separate request?")),(0,a.kt)("p",null,"The idea is that JWTs could be quite short-lived but the X.509 certs could be long-lived to permit long periods of working offline, so the Small Peer could call them to refresh at different intervals. Different expiry periods between JWT and X.509 isn\u2019t implemented yet."),(0,a.kt)("p",null,"Additionally, browser peers have no use for X.509 certificates so they don\u2019t request them."),(0,a.kt)("p",null,"Of course, the Small Peer could have a single request that lets you request some combination of identities at once. There is no reason this couldn\u2019t be added in the future to reduce latency."))}u.isMDXComponent=!0},86010:(e,t,i)=>{"use strict";function n(e){var t,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=n(e[t]))&&(a&&(a+=" "),a+=i);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}i.d(t,{Z:()=>a});const a=function(){for(var e,t,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},46700:(e,t,i)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=46700}}]);