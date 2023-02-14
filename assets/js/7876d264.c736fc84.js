"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34047:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"3 - Create tasks"},i=void 0,s={unversionedId:"tutorial/create-task",id:"tutorial/create-task",isDocsHomePage:!1,title:"3 - Create tasks",description:"See the full source code here",source:"@site/docs/javascript/tutorial/3-create-task.mdx",sourceDirName:"tutorial",slug:"/tutorial/create-task",permalink:"/javascript/tutorial/create-task",editUrl:"https://github.com/getditto/docs/tree/main/docs/javascript/tutorial/3-create-task.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Create tasks"},sidebar:"docs",previous:{title:"2 - Syncing data",permalink:"/javascript/tutorial/subscription"},next:{title:"Overview",permalink:"/javascript/common/concepts/overview"}},l=[{value:"3-1 Create a command",id:"3-1-create-a-command",children:[],level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/tasks/nodejs"},"See the full source code here")),(0,r.kt)("h2",{id:"3-1-create-a-command"},"3-1 Create a command"),(0,r.kt)("p",null,"In the command line, the user can input a task they want to create using ",(0,r.kt)("inlineCode",{parentName:"p"},"readline"),". We will listen to four different commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"--insert"),". We will parse the string without ",(0,r.kt)("inlineCode",{parentName:"li"},"--insert")," and create a new task with the ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"--list"),". We print out the tasks. Every time a task is changed, both locally and by other devices, the global ",(0,r.kt)("inlineCode",{parentName:"li"},"tasks")," variable is updated from ",(0,r.kt)("inlineCode",{parentName:"li"},"observeLocal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"--toggle"),". We will parse the string without --toggle and assume the user's input is a Task document's id. We can then find the document by it's id and call ",(0,r.kt)("inlineCode",{parentName:"li"},".update")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"--delete"),". We will parse the string without --delete and assume the user's input is a Task document's id. We can then find the document by it's id and toggle the ",(0,r.kt)("inlineCode",{parentName:"li"},"isDeleted")," property")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { init, Ditto, Document } from \'@dittolive/ditto\'\nimport * as readline from \'readline/promises\'\nimport { stdin as input, stdout as output } from \'node:process\';\n\nlet ditto\nlet subscription\nlet liveQuery\nlet tasks: Document[] = []\n\nasync function main () {\n  await init()\n\n  ditto = new Ditto({ type: \'onlinePlayground\', appID: \'YOUR_APP_ID\', token: \'YOUR_TOKEN\' })\n  ditto.startSync()\n\n  subscription = ditto.store.collection("tasks").find("isDeleted == false").subscribe()\n  liveQuery = ditto.store.collection("tasks").find("isDeleted == false").observeLocal((docs, event) => {\n    tasks = docs\n  })\n  let isAskedToExit = false\n  \n  console.log("************* Commands *************");\n  console.log("--insert my new task");\n  console.log("   Inserts a task");\n  console.log("   Example: \\"--insert Get Milk\\"");\n  console.log("--toggle myTaskTd");\n  console.log("   Toggles the isComplete property to the opposite value");\n  console.log("   Example: \\"--toggle 1234abc\\"");\n  console.log("--delete myTaskTd");\n  console.log("   Deletes a task");\n  console.log("   Example: \\"--delete 1234abc\\"");\n  console.log("--list");\n  console.log("   List the current tasks");\n  console.log("--exit");\n  console.log("   Exits the program");\n  console.log("************* Commands *************");\n\n  const rl = readline.createInterface({ input, output });\n  while (!isAskedToExit) {\n\n      let answer = await rl.question(\'Your command:\')\n      if (answer.startsWith("--insert")) {\n        let body = answer.replace("--insert ", "")\n        ditto.store.collection("tasks").upsert({\n          body,\n          isDeleted: false,\n          isCompleted: false\n        })\n      }\n      if (answer.startsWith("--toggle")) {\n        let id = answer.replace("--toggle ", "")\n        ditto.store.collection("tasks")\n        .findByID(id).update((doc) => {\n          let isCompleted = doc.value.isCompleted\n          doc.at("isCompleted").set(!isCompleted)\n        })\n      }\n      if (answer.startsWith("--list")) {\n        console.log(tasks.map((task) => task.value))\n      }\n      if (answer.startsWith("--delete")) {\n        let id = answer.replace("--delete ", "")\n        ditto.store.collection("tasks")\n        .findByID(id).update((doc) => {\n          doc.at("isDeleted").set(true)\n        })\n      }\n      if (answer.startsWith("--exit")) {\n        ditto.stopSync()\n        process.exit()\n        \n      }\n  }\n\n}\n\nmain()\n\n')))}p.isMDXComponent=!0}}]);