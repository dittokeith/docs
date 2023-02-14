"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69745:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Animating UITableView with the Observe API",sidebar_position:2},o=void 0,s={unversionedId:"quick-tips/uitableview-animations-with-observe",id:"quick-tips/uitableview-animations-with-observe",isDocsHomePage:!1,title:"Animating UITableView with the Observe API",description:"The Ditto .observe callback will fire for any changes to the underlying query. These changes can happen from your own device or a replication. There are two parameters for the callback handler, the current snaphot of documents and an event which gives a bit more information about how snapshots evolve after subsequent calls.",source:"@site/docs/ios/quick-tips/uitableview-animations-with-observe.md",sourceDirName:"quick-tips",slug:"/quick-tips/uitableview-animations-with-observe",permalink:"/ios/quick-tips/uitableview-animations-with-observe",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/quick-tips/uitableview-animations-with-observe.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Animating UITableView with the Observe API",sidebar_position:2},sidebar:"docs",previous:{title:"Manual Configuration",permalink:"/ios/common/mesh-network/manual"},next:{title:"Testing",permalink:"/ios/quick-tips/testing"}},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Ditto ",(0,i.kt)("inlineCode",{parentName:"p"},".observe")," callback will fire for any changes to the underlying query. These changes can happen from your own device or a replication. There are two parameters for the callback handler, the current snaphot of documents and an ",(0,i.kt)("em",{parentName:"p"},"event")," which gives a bit more information about how snapshots evolve after subsequent calls. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let liveQuery = myCollection.find("store_id == \'abc123\'").observeLocal { [weak self] documents, event in\n    print("current snapshot of documents", documents)\n    print("event information", event)\n}\n')),(0,i.kt)("p",null,"The event parameter gives you information about how the live query has evolved from callback fire. It can tell you which document indices were inserted, updated, moved, or removed. The following example below shows a common pattern to parse the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," parameter, and apply ",(0,i.kt)("inlineCode",{parentName:"p"},"tableView.performBatchUpdates")," using the indices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport DittoSwift\n\nclass ViewController: UIViewController: {\n    \n    var liveQuery: DittoLiveQuery?\n    @IBOutlet weak var tableView!\n    var documents: [DittoDocument] = []\n    \n    override func viewDidLoad(){\n        super.viewDidLoad();\n        tableView.dataSource = self\n        \n        liveQuery = collection.find("store_id == \'abc123\'").observeLocal { [weak self] docs, event in\n            guard let `self` = self else { return }\n            switch event {\n            case .update(let changes):\n                guard changes.insertions.count > 0 || changes.deletions.count > 0 || changes.updates.count > 0  || changes.moves.count > 0 else { return }\n                DispatchQueue.main.async {\n                    self.tableView.beginUpdates()\n                    self.tableView.performBatchUpdates({\n                        let deletionIndexPaths = changes.deletions.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.deleteRows(at: deletionIndexPaths, with: .automatic)\n                        let insertionIndexPaths = changes.insertions.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.insertRows(at: insertionIndexPaths, with: .automatic)\n                        let updateIndexPaths = changes.updates.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.reloadRows(at: updateIndexPaths, with: .automatic)\n                        for move in changes.moves {\n                            let from = IndexPath(row: move.from, section: 0)\n                            let to = IndexPath(row: move.to, section: 0)\n                            self.tableView.moveRow(at: from, to: to)\n                        }\n                    }) { _ in }\n                    // Set the tasks array backing the UITableView to the new documents\n                    self.tasks = docs\n                    self.tableView.endUpdates()\n                }\n            case .initial:\n                // Set the tasks array backing the UITableView to the new documents\n                self.tasks = docs\n                DispatchQueue.main.async {\n                    self.tableView.reloadData()\n                }\n            default: break\n            }\n        }\n    }\n}\n\nextension ViewController: UITableViewDataSource {\n\n    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n        return documents.count\n    }\n\n    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n        let document = documents[indexPath.row]\n        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell") ?? UITableViewCell(style: .default, reuseIdentifier: "Cell")\n        cell.textLabel?.text = document["text"].stringValue\n        return cell\n    }\n}\n')),(0,i.kt)("p",null,"Note: This code snippet assumes that you only have ",(0,i.kt)("strong",{parentName:"p"},"one")," ",(0,i.kt)("inlineCode",{parentName:"p"},"UITableView")," section."))}d.isMDXComponent=!0}}]);