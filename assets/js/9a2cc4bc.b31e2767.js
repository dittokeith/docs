"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2297],{3905:function(e,n,i){i.d(n,{Zo:function(){return p},kt:function(){return c}});var r=i(67294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var d=r.createContext({}),m=function(e){var n=r.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var i=e.components,s=e.mdxType,t=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=m(i),c=s,f=u["".concat(d,".").concat(c)]||u[c]||l[c]||t;return i?r.createElement(f,o(o({ref:n},p),{},{components:i})):r.createElement(f,o({ref:n},p))}));function c(e,n){var i=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var t=i.length,o=new Array(t);o[0]=u;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var m=2;m<t;m++)o[m]=i[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},48087:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var r=i(87462),s=i(63366),t=(i(67294),i(3905)),o=["components"],a={title:"Android",sidebar_position:2},d="Android Platform Permissions",m={unversionedId:"advanced/platform-permissions/android-platform-permissions",id:"advanced/platform-permissions/android-platform-permissions",isDocsHomePage:!1,title:"Android",description:"The Android operating system restricts access to some functionality for the sake of user control and privacy. Therefore, to unlock the full capabilities of Ditto, it is essential to configure your app so that it requests all the permissions that it needs.",source:"@site/docs/advanced/platform-permissions/android-platform-permissions.mdx",sourceDirName:"advanced/platform-permissions",slug:"/advanced/platform-permissions/android-platform-permissions",permalink:"/advanced/platform-permissions/android-platform-permissions",editUrl:"https://github.com/getditto/docs/edit/master/docs/advanced/platform-permissions/android-platform-permissions.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Android",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/advanced/platform-permissions/ios-platform-permissions"},next:{title:"Conflict-Free Replicated Data Types (CRDTs)",permalink:"/advanced/architecture/crdt"}},p=[{value:"Modern Manifest (API Level &gt; 30)",id:"modern-manifest-api-level--30",children:[],level:2},{value:"Legacy Manifest (API Level &lt;= 30)",id:"legacy-manifest-api-level--30",children:[],level:2},{value:"Runtime Permissions",id:"runtime-permissions",children:[],level:2}],l={toc:p};function u(e){var n=e.components,i=(0,s.Z)(e,o);return(0,t.kt)("wrapper",(0,r.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"android-platform-permissions"},"Android Platform Permissions"),(0,t.kt)("p",null,"The Android operating system restricts access to some functionality for the sake of user control and privacy. Therefore, to unlock the full capabilities of Ditto, it is essential to configure your app so that it requests all the permissions that it needs."),(0,t.kt)("p",null,"First you must the following permissions in your app's ",(0,t.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file."),(0,t.kt)("p",null,"Then at runtime your app must prompt the user to request certain permissions."),(0,t.kt)("h2",{id:"modern-manifest-api-level--30"},"Modern Manifest (API Level > 30)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'<uses-permission android:name="android.permission.BLUETOOTH"\n    android:maxSdkVersion="30" />\n<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"\n    android:maxSdkVersion="30" />\n<uses-permission android:name="android.permission.BLUETOOTH_SCAN"\n    android:usesPermissionFlags="neverForLocation" />\n<uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />\n<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"\n    android:maxSdkVersion="30" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE" />\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />\n<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />\n')),(0,t.kt)("p",null,"Since the Ditto SDK does not use BLE to locate the user physically it assumes you are using the ",(0,t.kt)("inlineCode",{parentName:"p"},"neverForLocation")," flag on ",(0,t.kt)("inlineCode",{parentName:"p"},"BLUETOOTH_SCAN"),". On Android 12, this means that ",(0,t.kt)("inlineCode",{parentName:"p"},"ACCESS_FINE_LOCATION")," is no longer required. If you wish to use ",(0,t.kt)("inlineCode",{parentName:"p"},"ACCESS_FINE_LOCATION")," on an app targeting API level 31+, you must check for and request this permission on your own. Refer to the ",(0,t.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/connectivity/bluetooth/permissions"},"Android Documentation")," for details."),(0,t.kt)("h2",{id:"legacy-manifest-api-level--30"},"Legacy Manifest (API Level <= 30)"),(0,t.kt)("p",null,"The following manifest is sufficient for apps that are not yet targeting Android 12."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'<uses-permission android:name="android.permission.BLUETOOTH" />\n<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />\n<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />\n<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE" />\n')),(0,t.kt)("p",null,"In these older Android versions, ",(0,t.kt)("inlineCode",{parentName:"p"},"ACCESS_FINE_LOCATION")," is mandatory and Ditto will check that it is present."),(0,t.kt)("h2",{id:"runtime-permissions"},"Runtime Permissions"),(0,t.kt)("p",null,"Your apps must ensure all required permissions for sync have been requested from the user. The Android Ditto SDK provides a ",(0,t.kt)("inlineCode",{parentName:"p"},"DittoSyncPermissions")," helper which makes this easy. For example, a fragment can use a method like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun checkPermissions() {\n    val missing = DittoSyncPermissions(requireActivity()).missingPermissions()\n    if (missing.isNotEmpty()) {\n        ActivityCompat.requestPermissions(\n            requireActivity(),\n            missing,\n            0\n        )\n    }\n}\n")),(0,t.kt)("p",null,"For more information about requesting permissions in a user-friendly way refer to Android's documentation: ",(0,t.kt)("a",{parentName:"p",href:"https://developer.android.com/training/permissions/requesting"},"Request App Permissions"),"."),(0,t.kt)("p",null,"On Android there may be a noticeable delay between when the user grants location access and when Ditto notices the new permission. For this reason it is recommended to call ",(0,t.kt)("inlineCode",{parentName:"p"},"refreshPermissions()")," whenever a relevant permission might have changed. This will force an immediate check. If a permission has become available your app can begin syncing as quickly as possible."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun onRequestPermissionsResult(\n    requestCode: Int,\n    permissions: Array<out String>,\n    grantResults: IntArray\n) {\n    super.onRequestPermissionsResult(requestCode, permissions, grantResults)\n    // Regardless of the outcome, tell Ditto that permissions maybe changed\n    ditto?.refreshPermissions()\n}\n")))}u.isMDXComponent=!0}}]);