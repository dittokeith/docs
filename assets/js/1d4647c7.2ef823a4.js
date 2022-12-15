"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1042],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28994:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},s="3.0 Migration guide",c={unversionedId:"v3",id:"v3",isDocsHomePage:!1,title:"3.0 Migration guide",description:"This is a migration guide that covers the most substantial",source:"@site/docs/common/v3.md",sourceDirName:".",slug:"/v3",permalink:"/common/v3",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/v3.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"2.0 Migration Guide",permalink:"/common/v2"}},u=[{value:"Replicated Growable Array (RGA) is removed from the API",id:"replicated-growable-array-rga-is-removed-from-the-api",children:[],level:2},{value:"Observe will no longer implicitly create subscriptions",id:"observe-will-no-longer-implicitly-create-subscriptions",children:[],level:2},{value:"Swift changes",id:"swift-changes",children:[{value:"Removal of Codable Support in DittoSwift",id:"removal-of-codable-support-in-dittoswift",children:[],level:3}],level:2},{value:"Android changes",id:"android-changes",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"30-migration-guide"},"3.0 Migration guide"),(0,a.kt)("p",null,"This is a migration guide that covers the most substantial\nchanges. For a comprehensive list of all deprecated and\nremoved methods, see the ",(0,a.kt)("a",{parentName:"p",href:"/changelog"},"changelog"),"."),(0,a.kt)("h2",{id:"replicated-growable-array-rga-is-removed-from-the-api"},"Replicated Growable Array (RGA) is removed from the API"),(0,a.kt)("p",null,"In v2, the Replicated Growable Array (RGA) was deprecated. In v3, they are\nentirely removed from the API. You'll still be able to read legacy RGA fields,\nbut not write to them."),(0,a.kt)("h2",{id:"observe-will-no-longer-implicitly-create-subscriptions"},"Observe will no longer implicitly create subscriptions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"observe")," is now removed from the API. "),(0,a.kt)("p",null,"Instead, use ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"observeLocal")," together. If you\nhave ",(0,a.kt)("inlineCode",{parentName:"p"},".observe()")," double check that you are also subscribing to that data in an\napplication-wide Ditto manager object."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to sync something use ",(0,a.kt)("inlineCode",{parentName:"li"},".subscribe()"),". "),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"observeLocal")," to listen for changes and render documents in the user interface.")),(0,a.kt)("p",null,"For example, if you have this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let liveQuery = collection.find(query).observe { (docs, event) in\n   ...\n}\n")),(0,a.kt)("p",null,"You need to now expand this to be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let subscription = collection.find(query).subscribe()\nlet liveQuery = collection.find(query).observeLocal { (docs, event) in\n   ...\n}\n")),(0,a.kt)("p",null,"Further, it is best practice to separate your subscribe functions from observe. "),(0,a.kt)("p",null,"For example, you should create a DittoManager singleton to hold subscribe calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'class DittoManager {\n\n    var ditto: Ditto\n    var subscription: DittoSubscription\n\n    static var shared = DittoManager()\n\n    init() {\n        self.ditto = Ditto(identity: .onlinePlayground(appID: "MY_APP", token: "MY_TOKEN"))\n        self.subscription = self.ditto.store["orders"].find(getOrdersQuery()).subscribe()\n    }\n\n    getOrdersQuery () {\n        return "restaurantId == \'\\(MyApp.restaurantId)\' && forScreen == \'\\(MyApp.deviceType)\'"\n    }\n}\n\n')),(0,a.kt)("p",null,"And use ",(0,a.kt)("inlineCode",{parentName:"p"},"observeLocal")," in your ViewModel to watch whenever the device's database is updated with changes. Both local and remote changes will fire this callback."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'class OrdersListViewModel: ObservableObject {\n    @Published var orders = [Order]()\n\n    init() {\n        self.liveQuery = DittoManager.shared.ditto.store["orders"]\n            .findAll()\n            .observeLocal(eventHandler: {  docs, event in\n                self.orders = docs.map({ Order(document: $0) })\n            }\n    }\n}\n')),(0,a.kt)("h2",{id:"swift-changes"},"Swift changes"),(0,a.kt)("h3",{id:"removal-of-codable-support-in-dittoswift"},"Removal of Codable Support in DittoSwift"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The current Codable Support in v1 forced magic types with no escape hatch. There was no way to customize the _id field to a struct or class\u2019s property name nor any ability to annotate that certain properties should behave like CRDTs. "),(0,a.kt)("li",{parentName:"ul"},"Ditto v3 deprecates native Codable support."),(0,a.kt)("li",{parentName:"ul"},"Native Codable support will be removed completely in v5, but there will be an alternative Codable implementation.")),(0,a.kt)("p",null,"If you have a struct or class that you want to map to a Document, please start\npopulating the fields using our document accessors explicitly.  This is verbose\nbut will prepare your code for the removal of Codable support from our core\nlibrary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'class Car {\n    var id: String\n    var name: String\n    var mileage: Int\n\n    init(document: DittoDocument) {\n        self.id = document.id.stringValue\n        self.name = document["name"].register?.stringValue ?? ""\n        self.mileage = document["mileage"].register?.intValue ?? 0\n  }\n}\n')),(0,a.kt)("h2",{id:"android-changes"},"Android changes"),(0,a.kt)("p",null,"All instances of ID are now Id. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"findByID")," is now ",(0,a.kt)("inlineCode",{parentName:"p"},"findById"),". For the full list of deprecations, see the ",(0,a.kt)("a",{parentName:"p",href:"/changelog"},"changelog"),"."))}p.isMDXComponent=!0}}]);