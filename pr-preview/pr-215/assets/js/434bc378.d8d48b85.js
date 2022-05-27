"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1166],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,a(a({ref:e},p),{},{components:n})):i.createElement(m,a({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15408:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"SwiftUI",sidebar_position:3},l=void 0,c={unversionedId:"guides/testing/iOS",id:"guides/testing/iOS",isDocsHomePage:!1,title:"SwiftUI",description:"To test Ditto using SwiftUI, we provide you with some basic convenience functions",source:"@site/docs/guides/testing/iOS.mdx",sourceDirName:"guides/testing",slug:"/guides/testing/iOS",permalink:"/pr-preview/pr-215/guides/testing/iOS",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/testing/iOS.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SwiftUI",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Android Kotlin",permalink:"/pr-preview/pr-215/guides/testing/kotlin"},next:{title:"Overview",permalink:"/pr-preview/pr-215/guides/http/overview"}},p=[{value:"Create custom directories",id:"create-custom-directories",children:[],level:3},{value:"Create your test",id:"create-your-test",children:[],level:3},{value:"Listen for changes to data",id:"listen-for-changes-to-data",children:[],level:3},{value:"Clean up",id:"clean-up",children:[],level:3},{value:"Full example",id:"full-example",children:[],level:3}],u={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To test Ditto using SwiftUI, we provide you with some basic convenience functions\nyou can use to get started."),(0,o.kt)("p",null,"For code that you can use in your project, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/testing/SwiftUI"},"see the example on GitHub"),"."),(0,o.kt)("h3",{id:"create-custom-directories"},"Create custom directories"),(0,o.kt)("p",null,"Each instance of Ditto should use a different directoriy. You can create a\nconvenience class to provide a custom directory for every instance of Ditto."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'/// Test helper which wraps a Ditto instance.\npublic class DittoInstance {\n    internal var ditto: Ditto?\n    private let instanceDir: URL\n    \n    public init(appID: String) {\n        // No need for cleanup, as the TestsSetup class is configured as NSPrincipalClass\n        // and will delete topLevelDittoDir() before any test job is run\n\n        //highlight-start\n        let instanceDir = topLevelDittoDir()\n            .appendingPathComponent(appID)\n            .appendingPathComponent(UUID().uuidString)\n\n        self.instanceDir = instanceDir\n        self.ditto = Ditto(\n            identity: .offlinePlayground(appID: appID, persistenceDirectory: instanceDir),\n            persistenceDirectory: instanceDir\n        )\n        //highlight-end\n        let testLicense = "YOUR_LICENSE_HERE"\n        try! self.ditto!.setOfflineOnlyLicenseToken(testLicense)\n    }\n    \n    public func stop() {\n        self.ditto!.stopSync()\n        self.ditto = nil\n    }\n}\n\nfunc topLevelDittoDir() -> URL {\n    let fileManager = FileManager.default\n    return try! fileManager.url(\n        for: .documentDirectory,\n        in: .userDomainMask,\n        appropriateFor: nil,\n        create: false\n    ).appendingPathComponent("ditto_top_level")\n}\n')),(0,o.kt)("h3",{id:"create-your-test"},"Create your test"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize two ditto instances with different directories."),(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"tryStartSync()")," on both instances.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import XCTest\nimport DittoSwift\n\n\nfinal class SwiftUITests: XCTestCase {\n   \n    var ditto1: DittoInstance!\n    var ditto2: DittoInstance!\n    \n    override func setUp() {\n        self.ditto1 = DittoInstance(appID: "test-app")\n        self.ditto2 = DittoInstance(appID: "test-app")\n        try! self.ditto1.ditto?.tryStartSync()\n        try! self.ditto2.ditto?.tryStartSync()\n    }\n    \n    func testExample() throws {\n      // your test here\n    }\n}\n')),(0,o.kt)("h3",{id:"listen-for-changes-to-data"},"Listen for changes to data"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"observe()"),", we listen to changes to data. We write tests as a response to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"observe()")," function based on what we expect to happen."),(0,o.kt)("p",null,"The tests should reside within the callback so that they properly test the\nstate of the database ",(0,o.kt)("strong",{parentName:"p"},"after")," syncronization has completed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'...\nlet initialResultExpectation = expectation(description: "Initial event received")\nlet docID = try! ditto1.ditto!.store.collection("cars").upsert(["make": "toyota", "color": "red"])\nlet liveQuery = ditto2.ditto!.store.collection("cars").findByID(docID).observe { doc, event in\n    if (!event.isInitial) {\n        XCTAssertEqual(doc!.value["make"] as! String, "toyota")\n        initialResultExpectation.fulfill()\n    }\n}\n\nwait(for: [initialResultExpectation], timeout: 2)\n')),(0,o.kt)("h3",{id:"clean-up"},"Clean up"),(0,o.kt)("p",null,"Don't forget to clean up between tests. This can also be implemented as part of\na base test class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'\nfunc testExample() throws {\n  let initialResultExpectation = expectation(description: "Initial event received")\n  let docID = try! ditto1.ditto!.store.collection("cars").upsert(["make": "toyota", "color": "red"])\n  let liveQuery = ditto2.ditto!.store.collection("cars").findByID(docID).observe { doc, event in\n      if (!event.isInitial) {\n          XCTAssertEqual(doc!.value["make"] as! String, "toyota")\n          initialResultExpectation.fulfill()\n      }\n  }\n  \n  wait(for: [initialResultExpectation], timeout: 2)\n  //highlight-start\n  liveQuery.stop()\n  ditto1.stop()\n  ditto2.stop()\n  //highlight-end\n}\n')),(0,o.kt)("h3",{id:"full-example"},"Full example"),(0,o.kt)("p",null,"For the full example that you can use in your project, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/testing/android/app/src/androidTest/java/live/ditto/dittotesting"},"see the open source testing library on GitHub"),".`"))}d.isMDXComponent=!0}}]);