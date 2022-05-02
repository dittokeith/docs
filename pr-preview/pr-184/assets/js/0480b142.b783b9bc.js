"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return p}});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(i),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return i?o.createElement(m,r(r({ref:t},d),{},{components:i})):o.createElement(m,r({ref:t},d))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<a;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},43584:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=i(87462),n=i(63366),a=(i(67294),i(3905)),r=["components"],s={title:"Frequently Asked Questions",sidebar_position:14},l=void 0,c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"General SDK",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/pr-preview/pr-184/faq",editUrl:"https://github.com/getditto/docs/edit/master/docs/faq.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Frequently Asked Questions",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Big Peer",permalink:"/pr-preview/pr-184/how-it-works/big-peer"},next:{title:"Changelog",permalink:"/pr-preview/pr-184/changelog"}},d=[{value:"<strong>General SDK</strong>",id:"general-sdk",children:[{value:"How do Ditto enabled apps sync without internet connectivity?",id:"how-do-ditto-enabled-apps-sync-without-internet-connectivity",children:[],level:3},{value:"What is the typical bandwidth of Ditto syncing over Bluetooth?",id:"what-is-the-typical-bandwidth-of-ditto-syncing-over-bluetooth",children:[],level:3},{value:"What are the device and operating system requirements?",id:"what-are-the-device-and-operating-system-requirements",children:[],level:3},{value:"How does Ditto still enable offline data?",id:"how-does-ditto-still-enable-offline-data",children:[],level:3},{value:"Is there backward compatibility when upgrading?",id:"is-there-backward-compatibility-when-upgrading",children:[],level:3},{value:"How fast does the SDK follow the iOS version update?",id:"how-fast-does-the-sdk-follow-the-ios-version-update",children:[],level:3}],level:2},{value:"<strong>Battery</strong>",id:"battery",children:[{value:"How much does the SDK consume battery?",id:"how-much-does-the-sdk-consume-battery",children:[],level:3},{value:"Does the iOS Low Power Mode affect the performance?",id:"does-the-ios-low-power-mode-affect-the-performance",children:[],level:3}],level:2},{value:"<strong>Performance</strong>",id:"performance",children:[{value:"Does having a device in Airplane Mode affect the performance?",id:"does-having-a-device-in-airplane-mode-affect-the-performance",children:[],level:3},{value:"How fast is the sync?",id:"how-fast-is-the-sync",children:[],level:3},{value:"How much data can Ditto hold? How big can a Ditto document be?",id:"how-much-data-can-ditto-hold-how-big-can-a-ditto-document-be",children:[],level:3},{value:"Are there any limits to the number of collections?",id:"are-there-any-limits-to-the-number-of-collections",children:[],level:3}],level:2},{value:"<strong>Bluetooth</strong>",id:"bluetooth",children:[{value:"What is the difference between Bluetooth Classic and Bluetooth Low Energy?",id:"what-is-the-difference-between-bluetooth-classic-and-bluetooth-low-energy",children:[],level:3},{value:"Does the SDK require Bluetooth paring?",id:"does-the-sdk-require-bluetooth-paring",children:[],level:3},{value:"How does the sync work if devices have different BLE versions?",id:"how-does-the-sync-work-if-devices-have-different-ble-versions",children:[],level:3},{value:"What is the range for Bluetooth connections?",id:"what-is-the-range-for-bluetooth-connections",children:[],level:3},{value:"Does the sync still work if the smartphone is connected to audio devices via Bluetooth?",id:"does-the-sync-still-work-if-the-smartphone-is-connected-to-audio-devices-via-bluetooth",children:[],level:3}],level:2},{value:"<strong>Database/Sync</strong>",id:"databasesync",children:[{value:"Can I sync data with devices that I am not directly connected to in the mesh?",id:"can-i-sync-data-with-devices-that-i-am-not-directly-connected-to-in-the-mesh",children:[],level:3},{value:"Can multiple apps share a database?",id:"can-multiple-apps-share-a-database",children:[],level:3},{value:"Can I explicitly control the start and end of synchronization?",id:"can-i-explicitly-control-the-start-and-end-of-synchronization",children:[],level:3},{value:"Will the app sync in the background?",id:"will-the-app-sync-in-the-background",children:[],level:3},{value:"Does the sync happen even when the device is locked?",id:"does-the-sync-happen-even-when-the-device-is-locked",children:[],level:3},{value:"Is there a limit to the amount of data?",id:"is-there-a-limit-to-the-amount-of-data",children:[],level:3},{value:"When will the data be deleted?",id:"when-will-the-data-be-deleted",children:[],level:3},{value:"What happens if data is changed by multiple devices at the same time?",id:"what-happens-if-data-is-changed-by-multiple-devices-at-the-same-time",children:[],level:3},{value:"Is there a transaction feature?",id:"is-there-a-transaction-feature",children:[],level:3}],level:2},{value:"<strong>Connection</strong>",id:"connection",children:[{value:"Can you track the connection status of all devices in real time?",id:"can-you-track-the-connection-status-of-all-devices-in-real-time",children:[],level:3},{value:"Can I detect a loss of connection?",id:"can-i-detect-a-loss-of-connection",children:[],level:3},{value:"Can I specify the connection type?",id:"can-i-specify-the-connection-type",children:[],level:3},{value:"Can you keep track of offline devices in your team?",id:"can-you-keep-track-of-offline-devices-in-your-team",children:[],level:3}],level:2},{value:"<strong>Security</strong>",id:"security",children:[{value:"Is the data in the database encrypted?",id:"is-the-data-in-the-database-encrypted",children:[],level:3},{value:"How can I limit the devices the SDK can connect to?",id:"how-can-i-limit-the-devices-the-sdk-can-connect-to",children:[],level:3},{value:"Is the communication encrypted?",id:"is-the-communication-encrypted",children:[],level:3},{value:"How can I control what data can or cannot be synced?",id:"how-can-i-control-what-data-can-or-cannot-be-synced",children:[],level:3},{value:"Can other apps with the Ditto SDK intercept the communication?",id:"can-other-apps-with-the-ditto-sdk-intercept-the-communication",children:[],level:3},{value:"How does the certificate work?",id:"how-does-the-certificate-work",children:[],level:3}],level:2},{value:"<strong>Wi-Fi</strong>",id:"wi-fi",children:[{value:"Can Android and iOS devices sync with each other over P2P WiFi using Ditto?",id:"can-android-and-ios-devices-sync-with-each-other-over-p2p-wifi-using-ditto",children:[],level:3}],level:2}],h={toc:d};function u(e){var t=e.components,i=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general-sdk"},(0,a.kt)("strong",{parentName:"h2"},"General SDK")),(0,a.kt)("h3",{id:"how-do-ditto-enabled-apps-sync-without-internet-connectivity"},"How do Ditto enabled apps sync without internet connectivity?"),(0,a.kt)("p",null,"There are 3 ways for Ditto enabled apps to sync without connectivity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WiFi Access Point\nWiFi Access Point is when devices discover and sync with each other over the same local network. Typically, this means you have a wireless access point where your devices are all connected to. Even if the internet or modem fails, devices will still be able to synchronize. This is completely cross platform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WiFi Direct and Apple Wireless Direct\niOS and Android devices are able to create peer to peer WiFi connections with each other. However these are not cross platform. Meaning that, iOS devices are only able to connect to other iOS devices via Apple Wireless Direct. Android devices are able to make P2P WiFi Direct connections with each other.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bluetooth Low Energy\niOS and Android devices are able connect with each other over a standard Bluetooth Low Energy (BLE) connection. Ditto supports both Bluetooth 4.x and 5.x protocols seamlessly. Bluetooth 5 devices are able to communicate with each other over a higher bandwidth (an average of 1.8 Megabits per second). If a Bluetooth 5.x device needs to connect with a Bluetooth 4.x device, the devices will connect over a Bluetooth 4.x protocol."))),(0,a.kt)("h3",{id:"what-is-the-typical-bandwidth-of-ditto-syncing-over-bluetooth"},"What is the typical bandwidth of Ditto syncing over Bluetooth?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If two Bluetooth 4.x devices are syncing with each other: about 2.5 kilobits per second."),(0,a.kt)("li",{parentName:"ul"},"If two Bluetooth 5.x devices are syncing with each other: about 2.1 megabits per second (that's a lot faster!)"),(0,a.kt)("li",{parentName:"ul"},"If a Bluetooth 4.x device is trying to sync with a Bluetooth 5.x device, then we are still looking at 2.5 kilobits per second.")),(0,a.kt)("h3",{id:"what-are-the-device-and-operating-system-requirements"},"What are the device and operating system requirements?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iOS: Ditto can run on devices as low as iOS 12. This is over 98% of iOS devices as measured by the App Store. ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/support/app-store/"},"See here for more information"),"."),(0,a.kt)("li",{parentName:"ul"},"Android: We support Android Version 7.1 or higher. If you need a version that is lower please contact our team through the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"Ditto Portal"),"."),(0,a.kt)("li",{parentName:"ul"},"System Requirements: Ditto is regularly tested on devices similar to a ",(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/products/raspberry-pi-zero/"},"Raspberry Pi Zero")," (1GHz single-core CPU and 512MB RAM). We recommend at least 128MB RAM for applications using Ditto, depending on the size of data and number of sync connections.")),(0,a.kt)("h3",{id:"how-does-ditto-still-enable-offline-data"},"How does Ditto still enable offline data?"),(0,a.kt)("p",null,"At the heart of Ditto is a realtime database that takes in JSON-like data structures. That means that even if a device with Ditto is completely disconnected from other devices, it will still have the data stored locally. That means even in a completely offline environment, users will still be able to edit, read, and observe data. When devices reconnect, they will exchange relevant information that was edited when they were offline. You can think of this as a similar behavior to Google Docs or Google Sheets."),(0,a.kt)("h3",{id:"is-there-backward-compatibility-when-upgrading"},"Is there backward compatibility when upgrading?"),(0,a.kt)("p",null,"Yes. We follow semantic versioning so only versions where the major version number changes will potentially contain breaking changes that won't be backwards compatible. For example, version 1.2.2 will be compatible with all previous 1.X releases, but may not be compatible with version 2.0.0."),(0,a.kt)("h3",{id:"how-fast-does-the-sdk-follow-the-ios-version-update"},"How fast does the SDK follow the iOS version update?"),(0,a.kt)("p",null,"We aim to have a version of the iOS SDKs that is compatible with latest iOS version before the iOS version has been made available to the public. We will likely publish alpha or beta releases of the SDKs during the iOS beta period, if necessary."),(0,a.kt)("h2",{id:"battery"},(0,a.kt)("strong",{parentName:"h2"},"Battery")),(0,a.kt)("h3",{id:"how-much-does-the-sdk-consume-battery"},"How much does the SDK consume battery?"),(0,a.kt)("p",null,"The SDK is designed to be as power efficient as possible. We strive to keep CPU and network usage to a minimum."),(0,a.kt)("h3",{id:"does-the-ios-low-power-mode-affect-the-performance"},"Does the iOS Low Power Mode affect the performance?"),(0,a.kt)("p",null,"Ditto should not be affected in most circumstances, although background sync on iOS may become less reliable."),(0,a.kt)("h2",{id:"performance"},(0,a.kt)("strong",{parentName:"h2"},"Performance")),(0,a.kt)("h3",{id:"does-having-a-device-in-airplane-mode-affect-the-performance"},"Does having a device in Airplane Mode affect the performance?"),(0,a.kt)("p",null,"Ditto can be used in Airplane Mode. If Bluetooth or WiFi is manually toggled on after selecting Airplane Mode, then Ditto will be able to sync using those modes."),(0,a.kt)("h3",{id:"how-fast-is-the-sync"},"How fast is the sync?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WiFi: the full speed of your connection"),(0,a.kt)("li",{parentName:"ul"},"P2P WiFi: similar to WiFi speeds"),(0,a.kt)("li",{parentName:"ul"},"Bluetooth LE: typically 4 kB/second (higher speeds currently in development)")),(0,a.kt)("h3",{id:"how-much-data-can-ditto-hold-how-big-can-a-ditto-document-be"},"How much data can Ditto hold? How big can a Ditto document be?"),(0,a.kt)("p",null,"There isn't a size limit to a Ditto document or store. Like other databases, Ditto will use as much data as you insert into the device. Controlling the size of Ditto in your app is completely up to your descretion."),(0,a.kt)("h3",{id:"are-there-any-limits-to-the-number-of-collections"},"Are there any limits to the number of collections?"),(0,a.kt)("p",null,"No there are no limits to the number of collections. While there is no limit, try to keep the names shorter than 30 characters. The collection names are stored with each document. This is merely a suggestion."),(0,a.kt)("h2",{id:"bluetooth"},(0,a.kt)("strong",{parentName:"h2"},"Bluetooth")),(0,a.kt)("h3",{id:"what-is-the-difference-between-bluetooth-classic-and-bluetooth-low-energy"},"What is the difference between Bluetooth Classic and Bluetooth Low Energy?"),(0,a.kt)("p",null,"Bluetooth Classic is an older mode used for accessories like headphones. It requires a manual pairing procedure between devices. Ditto does not use Bluetooth Classic."),(0,a.kt)("p",null,"Bluetooth Low Energy is a newer mode of Bluetooth that requires less power and does not require user interaction to connect to another device. All Ditto Bluetooth sync uses this mode."),(0,a.kt)("p",null,"For a more detailed explanation, please look to our blog post ",(0,a.kt)("a",{parentName:"p",href:"https://ditto.live/blog/posts/whats-the-difference-between-btclassic-and-ble"},"What's the Difference Between Bluetooth Classic and Bluetooth Low Energy?")),(0,a.kt)("h3",{id:"does-the-sdk-require-bluetooth-paring"},"Does the SDK require Bluetooth paring?"),(0,a.kt)("p",null,"No. Ditto uses exclusively Bluetooth Low Energy, which does not require pairing."),(0,a.kt)("h3",{id:"how-does-the-sync-work-if-devices-have-different-ble-versions"},"How does the sync work if devices have different BLE versions?"),(0,a.kt)("p",null,"Ditto will take advantage of features in newer versions of BLE when they are supported by both devices. These features are optional, and Ditto sync will work with even the earliest BLE hardware adapters."),(0,a.kt)("h3",{id:"what-is-the-range-for-bluetooth-connections"},"What is the range for Bluetooth connections?"),(0,a.kt)("p",null,"Approximately 100 metres (tested in the open with modern Apple hardware). Newer hardware usually performs better."),(0,a.kt)("h3",{id:"does-the-sync-still-work-if-the-smartphone-is-connected-to-audio-devices-via-bluetooth"},"Does the sync still work if the smartphone is connected to audio devices via Bluetooth?"),(0,a.kt)("p",null,"Yes, Bluetooth Low Energy sync can operate at the same time as other Bluetooth devices such as headphones."),(0,a.kt)("h2",{id:"databasesync"},(0,a.kt)("strong",{parentName:"h2"},"Database/Sync")),(0,a.kt)("h3",{id:"can-i-sync-data-with-devices-that-i-am-not-directly-connected-to-in-the-mesh"},"Can I sync data with devices that I am not directly connected to in the mesh?"),(0,a.kt)("p",null,"Yes. All participating devices must be subscribing to the same data query. For more information, look ",(0,a.kt)("a",{parentName:"p",href:"/concepts/syncing-data#subscriptions"},"here")),(0,a.kt)("h3",{id:"can-multiple-apps-share-a-database"},"Can multiple apps share a database?"),(0,a.kt)("p",null,"No. Ditto does not support more than one app using the database at the same time."),(0,a.kt)("h3",{id:"can-i-explicitly-control-the-start-and-end-of-synchronization"},"Can I explicitly control the start and end of synchronization?"),(0,a.kt)("p",null,"Yes. The Ditto SDK provides ",(0,a.kt)("inlineCode",{parentName:"p"},"tryStartSync()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stopSync()")," methods that will enable and disable network sync."),(0,a.kt)("h3",{id:"will-the-app-sync-in-the-background"},"Will the app sync in the background?"),(0,a.kt)("p",null,"Partial support. iOS offers best-effort background sync provided Bluetooth LE is enabled and the Bluetooth central and peripheral background modes are enabled. Android can sync in the background over WiFi. Development is ongoing to permit background sync in more scenarios."),(0,a.kt)("h3",{id:"does-the-sync-happen-even-when-the-device-is-locked"},"Does the sync happen even when the device is locked?"),(0,a.kt)("p",null,"See above about background mode."),(0,a.kt)("h3",{id:"is-there-a-limit-to-the-amount-of-data"},"Is there a limit to the amount of data?"),(0,a.kt)("p",null,"This will depend on the type of data, query complexity and the performance required. As a rule of thumb, a Small Peer such as the mobile SDK is designed to handle up to 2GB of key-value data and tens of thousands of documents in a collection."),(0,a.kt)("p",null,"Data synced using the file attachments API is stored outside the main database and does not contribute towards the 2GB. Even very large attachments are supported and the limits will depend mostly on the storage and network bandwidth available on your device."),(0,a.kt)("h3",{id:"when-will-the-data-be-deleted"},"When will the data be deleted?"),(0,a.kt)("p",null,"There are two ways in which data can be deleted."),(0,a.kt)("p",null,"If you want the data to be deleted from a specific device but you want it to remain untouched on other devices then you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"evict()")," functionality."),(0,a.kt)("p",null,"If you want the data to be deleted from all devices that you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," functionality. This will delete the data from the device that calls ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," and will communicate with other devices that they should also delete the data."),(0,a.kt)("p",null,"Without using either the ",(0,a.kt)("inlineCode",{parentName:"p"},"evict()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," functionality the data will not be deleted."),(0,a.kt)("h3",{id:"what-happens-if-data-is-changed-by-multiple-devices-at-the-same-time"},"What happens if data is changed by multiple devices at the same time?"),(0,a.kt)("p",null,"The data will be merged when the data from one device reaches the other device."),(0,a.kt)("h3",{id:"is-there-a-transaction-feature"},"Is there a transaction feature?"),(0,a.kt)("p",null,"Yes. You can perform multiple updates, across multiple documents in multiple collections, inside a single write transaction. You can do this by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"store.write()")," functionality."),(0,a.kt)("h2",{id:"connection"},(0,a.kt)("strong",{parentName:"h2"},"Connection")),(0,a.kt)("h3",{id:"can-you-track-the-connection-status-of-all-devices-in-real-time"},"Can you track the connection status of all devices in real time?"),(0,a.kt)("p",null,"Ditto provides a Presence Viewer UI on iOS and Android that can be launched within your app to show all active connections to other devices. This information can also be accessed programmatically using the ",(0,a.kt)("inlineCode",{parentName:"p"},"observePeers()")," SDK function."),(0,a.kt)("h3",{id:"can-i-detect-a-loss-of-connection"},"Can I detect a loss of connection?"),(0,a.kt)("p",null,"If a device is disconnected, this will be reflected through the ",(0,a.kt)("inlineCode",{parentName:"p"},"observePeers()")," callback."),(0,a.kt)("h3",{id:"can-i-specify-the-connection-type"},"Can I specify the connection type?"),(0,a.kt)("p",null,"You can specify which transport types to enable, e.g. Bluetooth only, WiFi only, or everything. Ditto will use its own algorithms to decide which devices to connect to and which modes to use."),(0,a.kt)("h3",{id:"can-you-keep-track-of-offline-devices-in-your-team"},"Can you keep track of offline devices in your team?"),(0,a.kt)("p",null,"If, separate to Ditto, you know the complete list of devices in your team then you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"observePeers()")," functionality provided by the SDK to keep track of which devices are online. Therefore you'll be able to determine which devices are offline."),(0,a.kt)("p",null,"If you don't maintain a separate list of devices in your team then the best you can currently do is to keep track of all devices that Ditto sees, again by making use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"observePeers()")," functionality. You can then use this list of all known devices to keep track of which of those are online/offline at any given moment."),(0,a.kt)("h2",{id:"security"},(0,a.kt)("strong",{parentName:"h2"},"Security")),(0,a.kt)("h3",{id:"is-the-data-in-the-database-encrypted"},"Is the data in the database encrypted?"),(0,a.kt)("p",null,"Ditto does not encrypt its database, however both iOS and Android offer disk encryption to protect your data in case a device is stolen, provided a screen lock code has been set."),(0,a.kt)("h3",{id:"how-can-i-limit-the-devices-the-sdk-can-connect-to"},"How can I limit the devices the SDK can connect to?"),(0,a.kt)("p",null,'Ditto will only connect to devices that advertise the same "application name". Further controls are under development. Please speak to us for advice if you have special requirements for limiting connections.'),(0,a.kt)("h3",{id:"is-the-communication-encrypted"},"Is the communication encrypted?"),(0,a.kt)("p",null,"Communication is encrypted using TLS 1.3 and peer identities are verified using certificates. This is the same state-of-the-art technology used in web browsers. It applies to every communication mode from Bluetooth to WiFi."),(0,a.kt)("h3",{id:"how-can-i-control-what-data-can-or-cannot-be-synced"},"How can I control what data can or cannot be synced?"),(0,a.kt)("p",null,"The certificates that you provide to devices contain a set of permissions. You can use these permissions to specify whether or not a given device should be able to access given data."),(0,a.kt)("p",null,"If you only want a device to sync a subset of the data that it has access to then you do this by only using queries for that device's live queries and subscriptions that relate to the data that you wish to be synced."),(0,a.kt)("h3",{id:"can-other-apps-with-the-ditto-sdk-intercept-the-communication"},"Can other apps with the Ditto SDK intercept the communication?"),(0,a.kt)("p",null,"Ditto provides multiple production security modes that robustly protect against eavesdropping. You can either use a shared secret key, or device-specific keys with a central authority."),(0,a.kt)("p",null,"Ditto also has a development security mode which does not require you to provide a key. This is not secure, and provided for ease of development."),(0,a.kt)("h3",{id:"how-does-the-certificate-work"},"How does the certificate work?"),(0,a.kt)("p",null,"Ditto certificates are standard X.509 certificates. Each device has a keypair and the certificate grants that device a unique ID and rules for which collections and documents it is permitted to read and write. Organizations with strict on-premises requirements may operate their own certificate authority (CA). Certificates can also be generated and distributed automatically from the Ditto Big Peer service. For more information about certificate deployments please speak to us."),(0,a.kt)("h2",{id:"wi-fi"},(0,a.kt)("strong",{parentName:"h2"},"Wi-Fi")),(0,a.kt)("h3",{id:"can-android-and-ios-devices-sync-with-each-other-over-p2p-wifi-using-ditto"},"Can Android and iOS devices sync with each other over P2P WiFi using Ditto?"),(0,a.kt)("p",null,"No. Android Wi-Fi Direct is, at least for now, only capable of syncing with other Android devices. Apple devices running iOS and macOS are capable of syncing over Apple Wireless Direct. These two transports are not compatible with each other. ",(0,a.kt)("em",{parentName:"p"},"However, other transports like Bluetooth Low Energy and Access Points will be able to sync with each other just fine.")))}u.isMDXComponent=!0}}]);