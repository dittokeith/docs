(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[989],{43462:(e,t,a)=>{"use strict";a.r(t),a.d(t,{contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));a(78561);const o={title:"Overview",sidebar_position:1,displayed_sidebar:"common"},n=void 0,l={unversionedId:"concepts/overview",id:"concepts/overview",isDocsHomePage:!1,title:"Overview",description:"Intro",source:"@site/docs/common/concepts/overview.mdx",sourceDirName:"concepts",slug:"/concepts/overview",permalink:"/common/concepts/overview",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/concepts/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,displayed_sidebar:"common"},sidebar:"defaultSidebar",next:{title:"Documents",permalink:"/common/concepts/documents"}},s=[{value:"Intro",id:"intro",children:[{value:"Big Peer",id:"big-peer",children:[],level:3},{value:"Small Peer",id:"small-peer",children:[],level:3}],level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("div",{className:"iframe-container",align:"center"},(0,i.kt)("iframe",{className:"responsive-iframe",width:"560",height:"315",src:"https://www.youtube.com/embed/u3y2NpA5R0A",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("p",null,"The Ditto platform is a fully distributed database that runs in the cloud and on\nlocal devices. Each Ditto instance is a called a ",(0,i.kt)("strong",{parentName:"p"},"peer"),". There are two types\nof peers in the Ditto distributed database system: ",(0,i.kt)("strong",{parentName:"p"},"Big Peer")," and ",(0,i.kt)("strong",{parentName:"p"},"Small\nPeer"),". When you install Ditto in a client device like a web, desktop, mobile,\nor IoT application, you are installing a ",(0,i.kt)("strong",{parentName:"p"},"Small Peer"),". Running on the cloud is\na ",(0,i.kt)("strong",{parentName:"p"},"Big Peer"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Big Peers")," and ",(0,i.kt)("strong",{parentName:"p"},"Small Peers")," can sync with eachother with a common ",(0,i.kt)("strong",{parentName:"p"},"appID"),". To get an ",(0,i.kt)("strong",{parentName:"p"},"appID"),", ",(0,i.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"create an app on our portal.")),(0,i.kt)("h3",{id:"big-peer"},"Big Peer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Big Peers will try to sync everything from the Small Peers. If a small peer adds, removes, or updates data, the big peer will be notified of these changes. We call this an ",(0,i.kt)("strong",{parentName:"li"},"altruistic replication strategy"),"."),(0,i.kt)("li",{parentName:"ul"},"The Big Peer is capable of storing a tremendous amount of data and is capable of of sharding and partitioning. While it still looks like any peer, underneath the hood, it is capable of scaling to meet the demands of large amount of data. ",(0,i.kt)("a",{parentName:"li",href:"../how-it-works/big-peer"},"Read more about its internal architecture here.")),(0,i.kt)("li",{parentName:"ul"},"To get data in or out of the Big Peer, you can use a Small Peer or the ",(0,i.kt)("a",{parentName:"li",href:"/http/installation"},"HTTP API"),", or using our Server Side Webhooks.")),(0,i.kt)("h3",{id:"small-peer"},"Small Peer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generally, a Small Peer is embedded in a web, mobile, desktop, or IoT application. We distribute the Small Peer as an SDK with several language bindings."),(0,i.kt)("li",{parentName:"ul"},"Small peers will ",(0,i.kt)("strong",{parentName:"li"},"only sync data down from nearby Small Peers or Big Peers")," when it has a ",(0,i.kt)("a",{parentName:"li",href:"../concepts/syncing-data"},"live query"),". We call this a ",(0,i.kt)("strong",{parentName:"li"},"selfish replication strategy"),". Small peers can stop syncing by disposing or stopping a live query."),(0,i.kt)("li",{parentName:"ul"},"Small peers are ",(0,i.kt)("strong",{parentName:"li"},"not capable of sharding or partitioning"),". It will use whatever storage size the device allows but not any more. When you buy a mobile phone with 256 GB of storage, you're stuck until you buy a new one. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Small peers are capable of using device peer to peer communication tactics")," like Bluetooth Low Energy, Wi-Fi Direct, AWDL, Wi-Fi Aware, Local Area Network, and more to transmit data.")),(0,i.kt)("p",null,"In the narrated video above, we will walk you through the difference between Ditto's Big and Small Peers, and how they make connections between devices to efficiently sync data with or even without the internet."))}d.isMDXComponent=!0},11748:(e,t,a)=>{var r={"./locale":89234,"./locale.js":89234};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=11748}}]);