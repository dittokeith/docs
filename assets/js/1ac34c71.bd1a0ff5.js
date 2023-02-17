(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2997],{50479:(e,t,n)=>{"use strict";n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var a=n(87462),i=(n(67294),n(3905));n(8209);const o={},l="Troubleshooting",s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Ditto won't sync",source:"@site/docs/common/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/common/troubleshooting",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/troubleshooting.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Big Peer",permalink:"/common/how-it-works/big-peer"},next:{title:"2.0 Migration Guide",permalink:"/common/v2"}},r=[{value:"Ditto won&#39;t sync",id:"ditto-wont-sync",children:[{value:"Synchronization seems slow, or comes to a halt over time",id:"synchronization-seems-slow-or-comes-to-a-halt-over-time",children:[],level:3},{value:"General diagnostics",id:"general-diagnostics",children:[],level:3},{value:"Bluetooth",id:"bluetooth",children:[],level:3},{value:"Apple Wireless Direct Link, P2P-Wifi, Wifi Aware",id:"apple-wireless-direct-link-p2p-wifi-wifi-aware",children:[],level:3},{value:"Local Area Network (LAN)",id:"local-area-network-lan",children:[],level:3},{value:"Online Playground",id:"online-playground",children:[{value:"Did you copy your playground token and App ID correctly?",id:"did-you-copy-your-playground-token-and-app-id-correctly",children:[],level:4},{value:"Did your device connect to the internet?",id:"did-your-device-connect-to-the-internet",children:[],level:4},{value:"Do you have a firewall or proxy enabled that is blocking Ditto&#39;s connection to the Big Peer?",id:"do-you-have-a-firewall-or-proxy-enabled-that-is-blocking-dittos-connection-to-the-big-peer",children:[],level:4}],level:3},{value:"Online with Authentication",id:"online-with-authentication",children:[],level:3}],level:2},{value:"Diagnosing Blocked Transactions",id:"diagnosing-blocked-transactions",children:[{value:"What is a \u201cblocked\u201d transaction?",id:"what-is-a-blocked-transaction",children:[],level:3},{value:"Read vs. Write Transactions",id:"read-vs-write-transactions",children:[],level:3},{value:"Reading the Logs",id:"reading-the-logs",children:[],level:3},{value:"Originators",id:"originators",children:[],level:3}],level:2},{value:"Causes of Blocked Transactions",id:"causes-of-blocked-transactions",children:[{value:"User blocks User",id:"user-blocks-user",children:[],level:3},{value:"User deadlocks User",id:"user-deadlocks-user",children:[],level:3},{value:"Replication blocks User",id:"replication-blocks-user",children:[],level:3},{value:"Replication blocks Replication",id:"replication-blocks-replication",children:[],level:3},{value:"User or Replication blocks Internal",id:"user-or-replication-blocks-internal",children:[],level:3}],level:2}],c={toc:r},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"ditto-wont-sync"},"Ditto won't sync"),(0,i.kt)("p",null,"If you are having trouble synchronizing devices in Ditto, follow this guide."),(0,i.kt)("p",null,"If you continue to have problems, please email us at\n",(0,i.kt)("a",{parentName:"p",href:"mailto:support@ditto.live"},"support@ditto.live")," or ",(0,i.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"login to your Ditto\naccount")," to chat with the support bot in the lower\nright corner of your screen. An engineer will reach out to you shortly."),(0,i.kt)("h3",{id:"synchronization-seems-slow-or-comes-to-a-halt-over-time"},"Synchronization seems slow, or comes to a halt over time"),(0,i.kt)("p",null,"Ensure that you are only creating a fixed number of live queries, with a smaller amount of data. Do not use ",(0,i.kt)("inlineCode",{parentName:"p"},"findAll()"),". "),(0,i.kt)("h3",{id:"general-diagnostics"},"General diagnostics"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"DittoLogger.minimumLogLevel = DittoLogLevel.VERBOSE")," before you initialize ",(0,i.kt)("inlineCode",{parentName:"li"},"Ditto(identity)"),"."),(0,i.kt)("li",{parentName:"ol"},"Look at the logs. Do you see any helpful errors or warnings?"),(0,i.kt)("li",{parentName:"ol"},"Verify that your app id is the same on all devices")),(0,i.kt)("h3",{id:"bluetooth"},"Bluetooth"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Turn Use Location on"),(0,i.kt)("li",{parentName:"ol"},"Turn Bluetooth Scanning on"),(0,i.kt)("li",{parentName:"ol"},"Are permissions set correctly? See ",(0,i.kt)("a",{parentName:"li",href:"../installation"},"installation"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to your OS-level permissions for Bluetooth and clear the app permissions for your application."),(0,i.kt)("li",{parentName:"ol"},"Delete the app, install it again, and open it. Does it ask for Bluetooth permissions?"),(0,i.kt)("li",{parentName:"ol"},"Android only: are you calling ",(0,i.kt)("inlineCode",{parentName:"li"},"ditto.refreshPermissions()"),"?")),(0,i.kt)("h3",{id:"apple-wireless-direct-link-p2p-wifi-wifi-aware"},"Apple Wireless Direct Link, P2P-Wifi, Wifi Aware"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Are permissions set correctly? See ",(0,i.kt)("a",{parentName:"li",href:"../installation"},"installation"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to your OS-level permissions and clear the app permissions for your application."),(0,i.kt)("li",{parentName:"ol"},"Delete the app, install it again, and open it. Does it ask for location permissions?"),(0,i.kt)("li",{parentName:"ol"},"If you are using a custom ",(0,i.kt)("inlineCode",{parentName:"li"},"TransportConfig"),", make sure you have enabled all peer-to-peer transports using ",(0,i.kt)("inlineCode",{parentName:"li"},"enableAllPeerToPeer()"),".")),(0,i.kt)("h3",{id:"local-area-network-lan"},"Local Area Network (LAN)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Are permissions set correctly? See ",(0,i.kt)("a",{parentName:"li",href:"../installation"},"installation"),"."),(0,i.kt)("li",{parentName:"ol"},"Are both devices connected to the same WiFi network?"),(0,i.kt)("li",{parentName:"ol"},"Check your router settings and see the ",(0,i.kt)("a",{parentName:"li",href:"./mesh-network/supported-transports/#local-area-network"},"LAN troubleshooting guide"),".")),(0,i.kt)("h3",{id:"online-playground"},"Online Playground"),(0,i.kt)("h4",{id:"did-you-copy-your-playground-token-and-app-id-correctly"},"Did you copy your playground token and App ID correctly?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to the ",(0,i.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"Portal")," "),(0,i.kt)("li",{parentName:"ol"},"Go to your App."),(0,i.kt)("li",{parentName:"ol"},"Make sure that the portal playground token is the same as the value you are using in your code.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Online Playground enabled in the Ditto Portal",src:n(21035).Z})),(0,i.kt)("h4",{id:"did-your-device-connect-to-the-internet"},"Did your device connect to the internet?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OnlinePlayground")," applications must connect to the Big Peer first\n",(0,i.kt)("em",{parentName:"p"},"before")," going offline. ",(0,i.kt)("a",{parentName:"p",href:"./mesh-network/online-playground"},"Read more about online playground"),"."),(0,i.kt)("h4",{id:"do-you-have-a-firewall-or-proxy-enabled-that-is-blocking-dittos-connection-to-the-big-peer"},"Do you have a firewall or proxy enabled that is blocking Ditto's connection to the Big Peer?"),(0,i.kt)("p",null,"Verify that you can reach the following endpoints. You should see the output exactly as written below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> nc -v MY_APP_ID.cloud.ditto.live 443\nConnection to MY_APP_ID.cloud.ditto.live port 443 [tcp/https] succeeded!\n^C\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> curl -i https://MY_APP_ID.cloud.ditto.live/_ditto/auth/login\nHTTP/1.1 405 Method Not Allowed\nDate: Fri, 30 Sep 2022 02:03:36 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: 23\nConnection: keep-alive\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true\nAccess-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS\nAccess-Control-Allow-Headers: X-DITTO-ENSURE-INSERT,X-HYDRA-ENSURE-INSERT,X-DITTO-CLIENT-ID,X-HYDRA-CLIENT-ID,Accept,Referer,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,X-Forwarded-For\nAccess-Control-Max-Age: 1728000\n\nHTTP method not allowed% \n")),(0,i.kt)("p",null,"If this test passes, next check to see if WebSockets are blocked on your\nmachine. Some corporate networks, firewalls, or proxies block the HTTP upgrade\npacket that tells the WebSocket server to keep the connection alive. Check with\nyour IT administrator to see if your computer is configured to block WebSocket connections."),(0,i.kt)("h3",{id:"online-with-authentication"},"Online with Authentication"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Did you follow the ",(0,i.kt)("a",{parentName:"li",href:"./security/authentication#tutorial"},"tutorial"),"?"),(0,i.kt)("li",{parentName:"ol"},"Is the website address behind ",(0,i.kt)("inlineCode",{parentName:"li"},"https")," and available on the open Internet? "),(0,i.kt)("li",{parentName:"ol"},"Verfiy that your server is reachable by the Big Peer at ",(0,i.kt)("inlineCode",{parentName:"li"},"https://APP_ID.ditto.live")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"https://cloud.ditto.live"),"."),(0,i.kt)("li",{parentName:"ol"},"Are you implementing the ",(0,i.kt)("a",{parentName:"li",href:"./security/authentication#creating-your-client"},"authentication expiring soon")," delegate?"),(0,i.kt)("li",{parentName:"ol"},"Verify that your webhook provider name is ",(0,i.kt)("a",{parentName:"li",href:"./security/authentication#login"},"correctly copied in the Ditto portal"),".")),(0,i.kt)("h1",{id:"debugging-blocked-transactions"},"Debugging Blocked Transactions"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udca1 This section only discusses blocked transactions on ",(0,i.kt)("strong",{parentName:"p"},"native")," platforms (e.g. iOS, Android, Windows, Linux). Ditto in web browsers operates sufficiently differently and isn\u2019t covered here."))),(0,i.kt)("p",null,"Blocked write transactions will automatically retry until they succeed. A\nblocked write transaction will never crash. Howewever, blocked write\ntransactions are a common cause for poor database performance. Long running blocks are\ngenerally bad since they mean that nothing else can be writing to the\ndatabase during this time. This could manifest itself as one of many problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unresponsive UI: an interaction might try to update a document, but is blocked by an existing write transaction"),(0,i.kt)("li",{parentName:"ul"},"Slow sync: new updates cannot be integrated into the store, since they\u2019re blocked by another write transaction")),(0,i.kt)("p",null,"A blocked write transaction can hint that something is wrong with the application code, or at a deeper level in Ditto. This page contains some tips & tricks to help understand the situation."),(0,i.kt)("p",null,"The process of unblocking is automatic and you don\u2019t need to write any code to handle this. However, you can drastically reduce the chance of blocking transactions by ",(0,i.kt)("strong",{parentName:"p"},"making sure a device is only syncing the data it really needs"),"."),(0,i.kt)("h2",{id:"diagnosing-blocked-transactions"},"Diagnosing Blocked Transactions"),(0,i.kt)("h3",{id:"what-is-a-blocked-transaction"},"What is a \u201cblocked\u201d transaction?"),(0,i.kt)("p",null,"At any given time, there can be only one write transaction. Any subsequent\nattempts to open another write transaction will become blocked\nuntil the existing write transaction finishes. "),(0,i.kt)("h3",{id:"read-vs-write-transactions"},"Read vs. Write Transactions"),(0,i.kt)("p",null,"Read transactions operate differently to write transactions."),(0,i.kt)("p",null,"Read transactions cannot be blocked and can run in parallel with write transactions. Read transactions don\u2019t block each other, don\u2019t block write transactions, and aren\u2019t blocked by write transactions."),(0,i.kt)("p",null,"If a write transaction is blocked, Ditto will log a message with increasing severity every 10s."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Time (t) a transaction has been blocked"),(0,i.kt)("th",{parentName:"tr",align:null},"Log Level"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t \u2264 30s"),(0,i.kt)("td",{parentName:"tr",align:null},"DEBUG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"31s < t \u2264 120s"),(0,i.kt)("td",{parentName:"tr",align:null},"WARN")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"120s < t"),(0,i.kt)("td",{parentName:"tr",align:null},"ERROR")))),(0,i.kt)("p",null,"To see these logs in the database, it\u2019s important to have a minimum log level\nset. Transactions that are blocked for over 2 minutes should always be visible\nin the logs."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," level is used, then ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WARN"),",  and ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR")," messages will all be\nincluded in the logs. This means any write transactions blocking for more than\n30s should always be visible in the logs."),(0,i.kt)("h3",{id:"reading-the-logs"},"Reading the Logs"),(0,i.kt)("p",null,"If a write transaction is blocked, the device logs will look something like the following. In this example we can see a write transaction was blocked for a total of 150s (or 2.5 minutes)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"204421276-4eee2f5d-806d-4d0d-af3e-d96a035d97a0.png",src:n(6923).Z})),(0,i.kt)("p",null,"As time progressed, Ditto complained more and more loudly (starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),"\nlogs before eventually logging at ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR")," level). Eventually the existing\ntransaction finished and blocked transaction was was able to proceed."),(0,i.kt)("p",null,"The write transaction which was blocked was for a Ditto internal component. This is identified by\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u201coriginator=Internal\u201d"),". "),(0,i.kt)("p",null,"The existing, long-running write transaction which was causing the block was a\nuser call in the public SDK. This is identified by\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cblocked_by=User\u201d"),". So a user-level write transaction is blocking some internal\nworkload. This is not ",(0,i.kt)("em",{parentName:"p"},"necessarily")," a problem, as the internal system will catch up eventually."),(0,i.kt)("h3",{id:"originators"},"Originators"),(0,i.kt)("p",null,"The three values you\u2019ll see for ",(0,i.kt)("inlineCode",{parentName:"p"},"originator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"blocked_by")," are: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Originator / Blocked By"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'\u201cUser"'),(0,i.kt)("td",{parentName:"tr",align:null},"Any user-level API which modifies data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'\u201cInternal"'),(0,i.kt)("td",{parentName:"tr",align:null},"An internal job (presence data, DB maintenance, etc.).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'\u201cReplication"'),(0,i.kt)("td",{parentName:"tr",align:null},"Updating the store with data received via replication.")))),(0,i.kt)("h2",{id:"causes-of-blocked-transactions"},"Causes of Blocked Transactions"),(0,i.kt)("p",null,"This section presents a few examples blocked transaction scenarios, how they would appear in logs, and what they might mean."),(0,i.kt)("h3",{id:"user-blocks-user"},"User blocks User"),(0,i.kt)("p",null,"An application might block it's own write transactions by performing multiple writes at the same time in different places. If one is slow (perhaps it does too much work, or perhaps it reaches out to external APIs, etc.) then the other write transactions will block until it finishes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Thread/Queue 1 (starts first):\n{\n   // Somewhere in the app, a long running write transaction exists\n   ditto.store["people"].findByID(docID).update { mutableDoc in\n    // Most update tasks are quick, but a developer might\n    // doing something slow within the update block:\n    let apiData = getDataFromASlowExternalAPICall() // <-- !!!!\n        \n    mutableDoc?["age"] = apiData.age\n    mutableDoc?["ownedCars"].set(DittoCounter())\n    mutableDoc?["ownedCars"].counter?.increment(by: apiData.count)\n   }\n}\n\n// Thread/Queue 2 (starts second):\n{\n    // Somewhere else in the app, concurrently (e.g. background thread or queue)\n    // another write transaction tries to update a document. \n    //\n    // This will block until the "people" update block above completes.\n    let docID = try! ditto.store["settings"].upsert([\n        "_id": "abc123",\n    "preference": 31,\n    ])\n}\n')),(0,i.kt)("p",null,"In logs, this scenario will look like the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL: Waiting for write transaction (elapsed: XXs), originator=User blocked_by=User")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cUser\u201d")," is blocking ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cUser\u201d"),". This ",(0,i.kt)("em",{parentName:"p"},"could")," be temporary, but it could also be a deadlock which is much worse. See below."),(0,i.kt)("h3",{id:"user-deadlocks-user"},"User deadlocks User"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Start a write transaction:\nditto.store["people"].findByID(docID).update { mutableDoc in\n    // Start a write transaction _within_ a write transacton.\n    // !! Deadlocks !!\n    let docID = try! ditto.store["settings"].upsert([\n        "_id": "abc123",\n        "preference": 31,\n    ]) \n\n    // ...\n}\n')),(0,i.kt)("p",null,"You cannot start a write transaction within a write transaction. The result will be a deadlock which ",(0,i.kt)("strong",{parentName:"p"},"never")," resolves itself. This might manifest itself in the logs as: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL: Waiting for write transaction (elapsed: XXs), originator=User blocked_by=User")),(0,i.kt)("p",null,"Note that User blocking User doesn\u2019t necessarily mean a deadlock. It might\nmerely be a long running write transaction and this situation might be expected\ndepending on the task. However, if the transaction never unblocks and the log\nmessages at ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR")," level continue forever - you have a strong indication that\nthere\u2019s a deadlock and should investigate the application code."),(0,i.kt)("h3",{id:"replication-blocks-user"},"Replication blocks User"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Somewhere in the app, a simple enough user write transaction is happening.\n// There\'s no other user write transaction happening concurrently in the\n// app, yet the update seems blocked or slow and UI might seems slugglish\n// or unresponsive.\nlet docID = try! ditto.store["settings"].upsert([\n    "_id": "abc123",\n    "preference": 31,\n])\n')),(0,i.kt)("p",null,"From the application code, it might not be obvious what the problem is. By looking in the logs, you might get a hint. For instance:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL: Waiting for write transaction (elapsed: XXs), originator=User blocked_by=Replication")),(0,i.kt)("p",null,"Here we can see that replication is blocking our user\u2019s write transaction. This might happen if we\u2019ve just received a large amount of sync data from another peer. Most commonly, happens during initial sync (either with the Big Peer, or joining a mesh for the first time, or re-joining a mesh after an extended period away)."),(0,i.kt)("p",null,"This scenario is something to be aware of, but will resolve itself automatically once the sync is complete. The user transaction will eventually unblock and continue when replication has finished updating the store.  "),(0,i.kt)("h3",{id:"replication-blocks-replication"},"Replication blocks Replication"),(0,i.kt)("p",null,"If you see the following in logs, it\u2019s an indication that one replication session with a remote peer is blocking another: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL: Waiting for write transaction (elapsed: XXs), originator=Replication blocked_by=Replication")),(0,i.kt)("p",null,"This can happen when the device has received large amounts of data from multiple peers ",(0,i.kt)("strong",{parentName:"p"},"simultaneously")," and must update the database with the changes it received from each. Ditto can only update the database with sync data from remote peers one at a time, so the other updates must wait their turn."),(0,i.kt)("p",null,"This scenario is most likely to happen during a large initial sync - either with the Big Peer ",(0,i.kt)("strong",{parentName:"p"},"at the same time")," as with nearby devices, or just with ",(0,i.kt)("strong",{parentName:"p"},"multiple")," nearby devices when joining a mesh for the first time (or re-joining after an extended period away)."),(0,i.kt)("p",null,"This scenario is something to be aware of, but will resolve itself automatically once the sync is complete. You can drastically reduce the chance of this type of blocking transaction by ",(0,i.kt)("strong",{parentName:"p"},"making sure each device is only syncing the data it really needs"),"."),(0,i.kt)("h3",{id:"user-or-replication-blocks-internal"},"User or Replication blocks Internal"),(0,i.kt)("p",null,"A long running write transaction might block an internal job. This scenario will be the least obvious to spot and it might not be obvious that it\u2019s happening at all. It\u2019s also the least likely to cause actual problems."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Somewhere in the app, a long running write transaction exists\nditto.store["people"].findByID(docID).update { mutableDoc in\n    // Most update tasks are quick, but you might\n    // doing something slow within the update block\n    let apiData = getDataFromASlowExternalAPICall() // <-- !!!!\n\n    mutableDoc?["age"] = apiData.age\n    mutableDoc?["ownedCars"].set(DittoCounter())\n    mutableDoc?["ownedCars"].counter?.increment(by: apiData.count)\n}\n')),(0,i.kt)("p",null,"In logs, you might see the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL: Waiting for write transaction (elapsed: XXs), originator=Internal blocked_by=User")),(0,i.kt)("p",null,"or:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL: Waiting for write transaction (elapsed: XXs), originator=Internal blocked_by=Replication")),(0,i.kt)("p",null,"i.e. something is blocking ",(0,i.kt)("inlineCode",{parentName:"p"},"Internal"),"."),(0,i.kt)("p",null,"This might not have any observable effect, but if it does, it is most likely to manifest as slow/unreliable Ditto Bus connections, an inaccurate presence viewer, or slow/unreliable multihop replication. Ditto's internal mesh presence component must persist an update every 30s for these systems to keep working. If presence can\u2019t do this because it\u2019s blocked by another write transaction, those systems will begin to to fail until presence can successfully write its next update. This scenario should automatically recover just fine once the blocking write transaction finishes."))}p.isMDXComponent=!0},46700:(e,t,n)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=46700},21035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-playground-setting-99074a40a3741119540b4be524814aa5.png"},6923:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/troubleshooting-bcf003363710f0246b90b4b01331942e.png"}}]);