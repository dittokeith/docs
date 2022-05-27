"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8039],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),l=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65279:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"1 - Setup"},d=void 0,l={unversionedId:"tutorials/android-kotlin/setup",id:"tutorials/android-kotlin/setup",isDocsHomePage:!1,title:"1 - Setup",description:"1-1 Create Android Studio Project",source:"@site/docs/tutorials/android-kotlin/1-setup.md",sourceDirName:"tutorials/android-kotlin",slug:"/tutorials/android-kotlin/setup",permalink:"/pr-preview/pr-215/tutorials/android-kotlin/setup",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/android-kotlin/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"tutorialSidebar",previous:{title:"4 - Editing Tasks",permalink:"/pr-preview/pr-215/tutorials/uikit/edit-tasks"},next:{title:"2 - Create UI",permalink:"/pr-preview/pr-215/tutorials/android-kotlin/create-ui"}},p=[{value:"1-1 Create Android Studio Project",id:"1-1-create-android-studio-project",children:[],level:2},{value:"1-2 Install Ditto",id:"1-2-install-ditto",children:[],level:2}],u={toc:p};function c(e){var n=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-1-create-android-studio-project"},"1-1 Create Android Studio Project"),(0,o.kt)("p",null,"This guide is based on Android Studio 4.1 and Kotlin 1.4"),(0,o.kt)("p",null,"The first step is to create a project. Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"File \u2192 New \u2192 New Project")," and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Basic Activity"),":"),(0,o.kt)("p",null,'Next, fill out the options with the product name: "Tasks", choose Kotlin, and set the minimum API level to 26:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Project 2",src:t(66631).Z})),(0,o.kt)("p",null,"In newer version of Android Studio the Basic Activity template includes additional files that are not need for this tutorial. To continue, remove the following if they exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FirstFragment.kt"),(0,o.kt)("li",{parentName:"ul"},"SecondFragment.kt"),(0,o.kt)("li",{parentName:"ul"},"fragment_first.xml"),(0,o.kt)("li",{parentName:"ul"},"fragment_second.xml"),(0,o.kt)("li",{parentName:"ul"},"nav_graph.xml")),(0,o.kt)("p",null,"Android requires requesting permission to use Bluetooth Low Energy and P2P Wifi, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," and add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'    <uses-permission android:name="android.permission.BLUETOOTH"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.BLUETOOTH_SCAN"\n        android:usesPermissionFlags="neverForLocation" />\n    <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />\n    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />\n    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"\n        android:maxSdkVersion="30" />\n    <uses-permission\n        android:name="android.permission.ACCESS_FINE_LOCATION"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    <uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />\n    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />\n')),(0,o.kt)("p",null,"It should look like this now:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Project 3",src:t(49550).Z})),(0,o.kt)("h2",{id:"1-2-install-ditto"},"1-2 Install Ditto"),(0,o.kt)("p",null,"To install Ditto, we need to add it as a dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\nscript for the app, as well as ensuring that we have the relevant Java\ncompatibility set:"),(0,o.kt)("div",{class:"alert alert-warning"},(0,o.kt)("p",null,"For the UI in this example, we are still using Kotlin synthetics, which are no\nlonger bundled automatically. We need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlin-android-extensions")," in the\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," to enable.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=build.gradle",title:"build.gradle"},"plugins {\n    // ...\n    id 'kotlin-android-extensions'\n}\n\ndependencies {\n    // ...\n    implementation \"live.ditto:ditto:1.1.6\"\n}\n\nandroid {\n    // ...\n\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install Ditto",src:t(36315).Z})),(0,o.kt)("p",null,"Be sure to ",(0,o.kt)("inlineCode",{parentName:"p"},"Sync Project with Gradle Files")," after you add Ditto as a dependency. Click the elephant icon with the blue arrow in the top right to manually trigger if it doesn't prompt."),(0,o.kt)("p",null,"At this point, you have the basic project in place! Now we need to start to build the UI elements."))}c.isMDXComponent=!0},66631:function(e,n,t){n.Z=t.p+"assets/images/create_project2-0ff4f23f2be1504faf3fb2e8972a51c6.png"},49550:function(e,n,t){n.Z=t.p+"assets/images/create_project3-167d2ef0a6611cc2828cb2cc89d018f0.png"},36315:function(e,n,t){n.Z=t.p+"assets/images/install_ditto-b2e42c8e0e2c9b5b5f0a35e5d423b0bd.png"}}]);