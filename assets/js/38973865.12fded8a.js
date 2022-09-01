"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4266],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,y=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62864:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={},l="Authentication Server",c={unversionedId:"quick-tips/authserver",id:"quick-tips/authserver",isDocsHomePage:!1,title:"Authentication Server",description:"You can configure the C# SDK itself as a Ditto-standard authentication service.",source:"@site/docs/csharp/quick-tips/authserver.md",sourceDirName:"quick-tips",slug:"/quick-tips/authserver",permalink:"/csharp/quick-tips/authserver",editUrl:"https://github.com/getditto/docs/tree/main/docs/csharp/quick-tips/authserver.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Manual Configuration",permalink:"/csharp/common/mesh-network/manual"},next:{title:"Overview",permalink:"/csharp/common/security/overview"}},u=[{value:"Setup",id:"setup",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Server code",id:"server-code",children:[],level:4},{value:"Client code",id:"client-code",children:[],level:4}],level:3},{value:"Enabling HTTPS",id:"enabling-https",children:[{value:"1. For development with HTTPS, you can create a self-signed certificate using <code>openssl</code>:",id:"1-for-development-with-https-you-can-create-a-self-signed-certificate-using-openssl",children:[],level:4},{value:"2. Update your C# server code",id:"2-update-your-c-server-code",children:[],level:4},{value:"3. Update your client code",id:"3-update-your-client-code",children:[],level:4},{value:"4. Trust the certificate",id:"4-trust-the-certificate",children:[],level:4},{value:"Troubleshooting",id:"troubleshooting",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication-server"},"Authentication Server"),(0,o.kt)("p",null,"You can configure the C# SDK itself as a Ditto-standard authentication service.\nThe server looks at the incoming credentials to decide whether to let a peer\nsynchronize with the server or not. You provide all of the signing and verifying\nkeys yourself through the SDK, thereby making the resulting JWTs (",(0,o.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web\nTokens"),") properly authenticate with Ditto. "),(0,o.kt)("p",null,"Now the web browser peer has a way to log in and sync with Ditto, in\n",(0,o.kt)("inlineCode",{parentName:"p"},"OnlineWithAuthentication")," mode, while other devices are in SharedKey mode."),(0,o.kt)("p",null,"In this arrangement, the C# server peer chooses the read and write permissions\nthat each authenticating peer will receive. After login, if you proceed to sync\nusing the WebSocket transport, be aware that there is no permission control in\nthe reverse direction: the server peer is always granted read/write access to\nall documents."),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"First, you need to create three keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a signing key in PEM format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl ecparam -name prime256v1 -genkey -text | openssl pkcs8 -topk8 -nocrypt -out priv.key\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a verifiying key in PEM format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl ec -in priv.key -pubout -out pub.key\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"../common/security/shared-key"},"shared key"))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We will have two small peer Ditto instances running locally:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One configured as an HTTP listener and identity provider"),(0,o.kt)("li",{parentName:"ul"},"One configured as a WebSocket client.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/c-sharp-server"},"See the full code in the Samples Repository")),(0,o.kt)("h4",{id:"server-code"},"Server code"),(0,o.kt)("p",null,"The server and their other devices can use SharedKey identity while a web\nbrowser can connect to this C# peer over LAN and sync. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'string appId = "YOUR_APP_ID_HERE";\nstring verifyingKey = @"-----BEGIN PUBLIC KEY-----\n....\n-----END PUBLIC KEY-----\n";\n\nstring signingKey = @"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----";\n\nstring license = "...";\nstring sharedKey = "...";\n\nvar serverIdentity = DittoIdentity.SharedKey(\n    appId,\n    sharedKey\n);\nvar serverDitto = new Ditto(serverIdentity);\nserverDitto.DeviceName = "TestServer";\nserverDitto.SetOfflineOnlyLicenseToken(license);\n\n// Server is an HTTP/WebSocket server only\nvar serverConfig = new DittoTransportConfig();\nserverConfig.Listen.Http.Enabled = true;\nserverConfig.Listen.Http.InterfaceIp = "127.0.0.1";\nserverConfig.Listen.Http.Port = 45001;\nserverConfig.Listen.Http.WebsocketSync = true;\nserverConfig.Listen.Http.IdentityProvider = true;\nserverConfig.Listen.Http.IdentityProviderSigningKey = signingKey;\nserverConfig.Listen.Http.IdentityProviderVerifyingKeys.Add(verifyingKey);\nserverDitto.SetTransportConfig(serverConfig);\ntry\n{\n    ditto.SetOfflineOnlyLicenseToken(license);\n    ditto.StartSync();\n}\ncatch (DittoException ex)\n{\n    Console.WriteLine("There was an error starting Ditto.");\n    Console.WriteLine("Here\'s the following error");\n    Console.WriteLine(ex.ToString());\n    Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n    Console.WriteLine("Ditto will still work as a local database.");\n}\n\n// Handle any incoming authentication requests\nserverDitto.DittoIdentityProviderAuthenticationRequest += (sender, args) =>\n{\n    Console.WriteLine("\\nGot Request: ");\n    Console.WriteLine(args.ThirdPartyToken);\n    Console.WriteLine(args.AppId);\n    if (args.AppId == appId && args.ThirdPartyToken == "jellybeans")\n    {\n        var success = new DittoAuthenticationSuccess();\n        success.AccessExpires = DateTime.Now + new TimeSpan(1, 0, 0);\n        success.UserId = "bob";\n        success.ReadEverythingPermission = true;\n        success.WriteEverythingPermission = true;\n        args.Allow(success);\n    }\n    else\n    {\n        args.Deny();\n    }\n};\n')),(0,o.kt)("h4",{id:"client-code"},"Client code"),(0,o.kt)("p",null,"Integrate this into your web application. Because it's a web browser, only the\nWebSocket transport is available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const authHandler = {\n    authenticationRequired: async function(authenticator) {\n      console.log("Login request.");\n      await authenticator.loginWithToken("jellybeans", "provider");\n    },\n    authenticationExpiringSoon: function(authenticator, secondsRemaining) {\n      console.log(`Auth token expiring in ${secondsRemaining} seconds`)\n    }\n}\n\nconst identity = { \n    type: \'onlineWithAuthentication\', \n    appID: "YOUR_APP_ID_HERE", \n    authHandler: authHandler, \n    enableDittoCloudSync: false, \n    customAuthURL: "http://127.0.0.1:45001" \n}\n\nconst ditto = new Ditto(identity, \'ditto\')\n\nconst config = new TransportConfig()\nconfig.connect.websocketURLs.push(\'ws://127.0.0.1:45001\')\nditto.setTransportConfig(config)\nditto.tryStartSync()\n')),(0,o.kt)("h2",{id:"enabling-https"},"Enabling HTTPS"),(0,o.kt)("p",null,"The Ditto Authentication server has two modes - ",(0,o.kt)("a",{parentName:"p",href:"https://software.ditto.live/dotnet/Ditto/1.1.10/api-reference/class_ditto_s_d_k_1_1_ditto_http_listen_config.html"},"http and\nhttps"),".\nIf those fields are empty (the default) then Ditto will create an HTTP listener,\nand you use http:// and ws:// URLs in the JavaScript client."),(0,o.kt)("p",null,"This section will walk you through how to create a self-signed certificate to\nset up an HTTPS authentication server on your own server or locally for\ndevelopment. Another common way to have HTTPS is to make your application server\nrun HTTP and then use a standard reverse proxy to terminate the TLS, which is not covered by these examples."),(0,o.kt)("h4",{id:"1-for-development-with-https-you-can-create-a-self-signed-certificate-using-openssl"},"1. For development with HTTPS, you can create a self-signed certificate using ",(0,o.kt)("inlineCode",{parentName:"h4"},"openssl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out MyCertificate.crt -keyout MyKey.key\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Generating a 4096 bit RSA private key\n..............................................................................+++\n..............................................+++\nwriting new private key to 'MyKey.key'\n-----\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [AU]:US\nState or Province Name (full name) [Some-State]:PA\nLocality Name (eg, city) []:Philadelphia\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:MyCompany\nOrganizational Unit Name (eg, section) []:MyApp\n//highlight-start\nCommon Name (e.g. server FQDN or YOUR name) []:127.0.0.1\n//highlight-end\nEmail Address []:admin@example.com\n")),(0,o.kt)("h4",{id:"2-update-your-c-server-code"},"2. Update your C# server code"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"TlsKeyPath")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TlsCertificatePath")," so that they contain paths to a valid\nTLS key and certificate, then your server will become an HTTPS listener at the given port."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'// Server is an HTTP/WebSocket server only\nvar serverConfig = new DittoTransportConfig();\nserverConfig.Listen.Http.Enabled = true;\nserverConfig.Listen.Http.InterfaceIp = "127.0.0.1";\nserverConfig.Listen.Http.Port = 45001;\nserverConfig.Listen.Http.WebsocketSync = true;\nserverConfig.Listen.Http.IdentityProvider = true;\n//highlight-start\nserverConfig.Listen.Http.TlsKeyPath = "/path/to/MyKey.key";\nserverConfig.Listen.Http.TlsCertificatePath = "/path/to/MyCertificate.crt";\n//highlight-end\nserverConfig.Listen.Http.IdentityProviderSigningKey = signingKey;\nserverConfig.Listen.Http.IdentityProviderVerifyingKeys.Add(verifyingKey);\nditto.SetTransportConfig(serverConfig);\n')),(0,o.kt)("h4",{id:"3-update-your-client-code"},"3. Update your client code"),(0,o.kt)("p",null,"Now, use https:// and wss:// URLs in the Client SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const identity = {\n    type: 'onlineWithAuthentication',\n    appID: \"YOUR_APP_ID_HERE\",\n    authHandler: authHandler,\n    enableDittoCloudSync: false,\n    //highlight-start\n    customAuthURL: \"https://127.0.0.1:45001\"\n    //highlight-end\n}\n\nconst ditto = new Ditto(identity, 'ditto')\n\nconst config = new TransportConfig()\n//highlight-start\nconfig.connect.websocketURLs.push('wss://127.0.0.1:45001')\n//highlight-end\nditto.setTransportConfig(config)\nditto.tryStartSync()\n")),(0,o.kt)("h4",{id:"4-trust-the-certificate"},"4. Trust the certificate"),(0,o.kt)("p",null," Visit ",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:45001/_ditto/auth/login"},"https://127.0.0.1:45001/_ditto/auth/login")," and manually go through the steps to accept the cert in your browser. "),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have a typo in either directory name or path, you\u2019ll get ",(0,o.kt)("inlineCode",{parentName:"li"},"ERR_CONNECTION_REFUSED")),(0,o.kt)("li",{parentName:"ul"},"If you have it set to the right path but with an untrusted certificate, you\u2019ll get ",(0,o.kt)("inlineCode",{parentName:"li"},"ERR_CERT_INVALID")),(0,o.kt)("li",{parentName:"ul"},"You get ",(0,o.kt)("inlineCode",{parentName:"li"},"ERR_SSL_PROTOCOL_ERROR")," when the trusted certificate doesn\u2019t match the one you\u2019re using as the TlsCertificatePath"),(0,o.kt)("li",{parentName:"ul"},"You get ",(0,o.kt)("inlineCode",{parentName:"li"},"ERR_CERT_COMMON_NAME_INVALID")," when the common name in the cert doesn\u2019t match the url you\u2019re using in your browser. If you're using a self-signed certificate, make sure it is trusted by your computer and the certificiate has the same \u201cCommon Name (eg, fully qualified host name)\u201d as it\u2019s IP address.")),(0,o.kt)("p",null,"You can also set up your own DNS record, so you access the host via your.chosen.common.name rather than 127.0.0.1."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a static record on your LAN's DNS server"),(0,o.kt)("li",{parentName:"ul"},"Create an entry in the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hosts_%28file%29"},"hosts file"))))}h.isMDXComponent=!0}}]);