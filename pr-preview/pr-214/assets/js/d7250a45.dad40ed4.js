"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3409],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20943:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"3 - Responding to events"},p=void 0,c={unversionedId:"guides/kafka/nodejs",id:"guides/kafka/nodejs",isDocsHomePage:!1,title:"3 - Responding to events",description:"Pipe Ditto events into an existing database",source:"@site/docs/guides/kafka/3-nodejs.md",sourceDirName:"guides/kafka",slug:"/guides/kafka/nodejs",permalink:"/pr-preview/pr-214/guides/kafka/nodejs",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/kafka/3-nodejs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Responding to events"},sidebar:"tutorialSidebar",previous:{title:"2 - Ditto events",permalink:"/pr-preview/pr-214/guides/kafka/consumer"},next:{title:"4 - Producing events",permalink:"/pr-preview/pr-214/guides/kafka/producers"}},l=[{value:"Pipe Ditto events into an existing database",id:"pipe-ditto-events-into-an-existing-database",children:[],level:2},{value:"Exercise",id:"exercise",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pipe-ditto-events-into-an-existing-database"},"Pipe Ditto events into an existing database"),(0,i.kt)("p",null,"In this section we will listen to Kafka events and pipe them into a script on the commandline. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To stream events from our app starting at the beginning of time, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"--group $TOPIC")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"--offset 0 --partition 0"),". This could stream a significant number of events to your consumer for applications with a large amount of data."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$KAFKA/bin/kafka-console-consumer.sh \\\n --bootstrap-server $CLOUD_ENDPOINT \\\n --consumer-property security.protocol=SSL \\\n --consumer-property ssl.truststore.password=$CLUSTER_PW \\\n --consumer-property ssl.truststore.location=$CLUSTER_LOCATION \\\n --consumer-property ssl.keystore.password=$USER_PW \\\n --consumer-property ssl.keystore.location=$USER_LOCATION \\\n --topic $TOPIC --group $TOPIC \n")),(0,i.kt)("p",null,"We will now write a script that responds to Ditto events. This script assumes there is an HTTP server with a REST endpoint for mutating an external database."),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"echo.js"),". You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"event-stream")," to split each item from the process.stdin and parse it as ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let es = require('event-stream')\nlet inspect = require('util').inspect\n\nprocess.stdin               \n    .pipe(es.split())                  \n    .pipe(es.map(function (data, cb) { \n        try {\n            let row = JSON.parse(data.toString())\n            return cb(null, inspect(row))\n        } catch (err ) {\n            return cb(null)\n        }\n    }))\n    .pipe(process.stdout)\n")),(0,i.kt)("p",null,"In a new terminal, pipe events from the Kafka script to the response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./all.sh | node echo.js\n")),(0,i.kt)("p",null,"If all is working, you should see events streaming into terminal as data is changed."),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("p",null,"Now, update this script to send an HTTP request to an external server on every event. Use this script as a start and fill in the TODO."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let es = require('event-stream')\nlet Stream = require('stream')\n\nconst processDittoEvents = new Stream.Writable({ objectMode: true })\nprocessDittoEvents._write = (data, encoding, next) => {\n  // TODO: process events\n}\n\nprocess.stdin               \n    .pipe(es.split())                  \n    .pipe(es.map(function (data, cb) { \n        try {\n            let row = JSON.parse(data.toString())\n            return cb(null, row)\n        } catch (err ) {\n            return cb(null)\n        }\n    }))\n    .pipe(processDittoEvents)\n")))}d.isMDXComponent=!0}}]);