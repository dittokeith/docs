"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4664],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:e},p),{},{components:n})):a.createElement(k,r({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89124:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"2 - Configure Ditto"},r=void 0,s={unversionedId:"tutorial/jetpack-compose/configure-ditto",id:"tutorial/jetpack-compose/configure-ditto",isDocsHomePage:!1,title:"2 - Configure Ditto",description:"2-1 Create Your Ditto App",source:"@site/docs/android/tutorial/jetpack-compose/2-configure-ditto.md",sourceDirName:"tutorial/jetpack-compose",slug:"/tutorial/jetpack-compose/configure-ditto",permalink:"/android/tutorial/jetpack-compose/configure-ditto",editUrl:"https://github.com/getditto/docs/tree/main/docs/android/tutorial/jetpack-compose/2-configure-ditto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configure Ditto"},sidebar:"docs",previous:{title:"1 - Setup",permalink:"/android/tutorial/jetpack-compose/setup"},next:{title:"3 - Navigation",permalink:"/android/tutorial/jetpack-compose/navigation"}},l=[{value:"2-1 Create Your Ditto App",id:"2-1-create-your-ditto-app",children:[],level:2},{value:"2-2 Create Application Class",id:"2-2-create-application-class",children:[],level:2},{value:"2-3 Start Ditto Sync",id:"2-3-start-ditto-sync",children:[],level:2},{value:"2-4 Create a Task data class",id:"2-4-create-a-task-data-class",children:[],level:2}],c={toc:l},p="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"2-1-create-your-ditto-app"},"2-1 Create Your Ditto App"),(0,i.kt)("p",null,"Before we start coding, we first need to create a new app in the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"portal"),". Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer."),(0,i.kt)("p",null,"Each app created on the portal has a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"appID")," which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance."),(0,i.kt)("h2",{id:"2-2-create-application-class"},"2-2 Create Application Class"),(0,i.kt)("p",null,"Typically, applications with Ditto will need to run Ditto as a singleton. To construct Ditto it'll need access to a live Android ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),". Since the Application class is a singleton and has the necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),", we can create a subclass called ",(0,i.kt)("strong",{parentName:"p"},"TasksApplication.kt")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"companion object")," and declare ",(0,i.kt)("inlineCode",{parentName:"li"},"var ditto: Ditto? = null"),". This will create a static variable that we can always access throughout our entire application."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"override fun onCreate()"),", construct ditto with ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultAndroidDittoDependencies")," see below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TasksApplication.kt"',title:'"TasksApplication.kt"'},'import android.app.Application\nimport live.ditto.Ditto\nimport live.ditto.DittoIdentity\nimport live.ditto.android.DefaultAndroidDittoDependencies\n\n\nclass TasksApplication: Application() {\n\n    companion object {\n        var ditto: Ditto? = null;\n    }\n\n    override fun onCreate() {\n        super.onCreate()\n        // construct a DefaultAndroidDittoDependencies object with the applicationContext\n        val androidDependencies = DefaultAndroidDittoDependencies(applicationContext)\n        // for this example we will use a Development identity\n        val identity = DittoIdentity.OnlinePlayground(\n            appID = "REPLACE_ME", \n            dependencies = androidDependencies, \n            token = "REPLACE_ME")\n        ditto = Ditto(androidDependencies, identity)\n    }\n\n}\n')),(0,i.kt)("p",null,"Now you will be able to access this Ditto anywhere in your application like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docs = TasksApplication.ditto!!.store["tasks"].find("!isDeleted").exec()\n')),(0,i.kt)("h2",{id:"2-3-start-ditto-sync"},"2-3 Start Ditto Sync"),(0,i.kt)("p",null,"When Android studio created the project, it should have created a file called ",(0,i.kt)("strong",{parentName:"p"},"MainActivity.kt"),". In this file, we will take the singleton ",(0,i.kt)("inlineCode",{parentName:"p"},"TasksApplication.ditto!!")," and begin to start the sync process with ",(0,i.kt)("inlineCode",{parentName:"p"},"startSync()")),(0,i.kt)("p",null,"The app will show a ",(0,i.kt)("inlineCode",{parentName:"p"},"Toast")," error if ",(0,i.kt)("inlineCode",{parentName:"p"},"startSync")," encounters a mistake. Don't worry if an error occurs or if you omit this step, Ditto will continue to work as a local database. However, it's advised that you fix the errors to see the app sync across multiple devices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MainActivity" {5-18}',title:'"MainActivity"',"{5-18}":!0},'class MainActivity : ComponentActivity() {\n\n    val ditto = TasksApplication.ditto\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n      super.onCreate(savedInstanceState)\n\n      try {\n          ditto!!.startSync()\n      } catch (e: DittoError) {\n          // 2.\n          Toast.makeText(\n              this@MainActivity,\n              """\n                  Uh oh! There was an error trying to start Ditto\'s sync feature.\n                  That\'s okay, it will still work as a local database.\n                  This is the error: ${e.localizedMessage}\n              """.trimIndent(), Toast.LENGTH_LONG\n          ).show()\n      }\n\n      setContent {\n          // ...\n      }\n      \n      ditto!!.store["tasks"].find("isDeleted == true").evict()\n    }\n\n    fun checkPermissions() {\n        val missing = DittoSyncPermissions(this).missingPermissions()\n        if (missing.isNotEmpty()) {\n            this.requestPermissions(missing, 0)\n        }\n    }\n\n    override fun onRequestPermissionsResult(\n    requestCode: Int,\n    permissions: Array<out String>,\n    grantResults: IntArray\n    ) {\n        super.onRequestPermissionsResult(requestCode, permissions, grantResults)\n        // Regardless of the outcome, tell Ditto that permissions maybe changed\n        ditto?.refreshPermissions()\n    }\n}\n')),(0,i.kt)("h2",{id:"2-4-create-a-task-data-class"},"2-4 Create a Task data class"),(0,i.kt)("p",null,"Ditto is a document database, which represents all of its rows in the database a JSON-like structure. In this tutorial, we will define each task like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "_id": "123abc",\n  "body": "Get Milk",\n  "isCompleted": true\n}\n')),(0,i.kt)("p",null,'These Task documents will all be in the "tasks" collection. We will be referencing this collection throughout this tutorial with:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tasksCollection = TasksApplication.ditto!!.store["tasks"]\n')),(0,i.kt)("p",null,"Ditto documents have a flexible structure. Oftentimes, in strongly-typed languages like Kotlin, we will create a data structure to give more definition to the app."),(0,i.kt)("p",null,"Create a new Kotlin file called ",(0,i.kt)("strong",{parentName:"p"},"Task.kt")," in your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Task.kt"',title:'"Task.kt"'},'data class Task(\n    val _id: String = UUID.randomUUID().toString(),\n    val body: String,\n    val isCompleted: Boolean\n) {\n    constructor(document: DittoDocument) : this(\n        document["_id"].stringValue,\n        document["body"].stringValue,\n        document["isCompleted"].booleanValue\n    ) {\n\n    }\n}\n')),(0,i.kt)("p",null,"This data class takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"DittoDocument")," and safely parses out the values into native Kotlin types. We also added an additional constructor that allows for us to preview data without requiring DItto."),(0,i.kt)("p",null,"So now in our application if we want a ",(0,i.kt)("inlineCode",{parentName:"p"},"List<Task>")," we write the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tasks: List<Task> = TasksApplication\n  .ditto!!.store["tasks"]\n  .find("!isDeleted")\n  .exec().map { it -> Task(it) }\n')),(0,i.kt)("p",null,"Once we set up our user interface, you'll notice that reading these values becomes a bit easier with this added structure."))}d.isMDXComponent=!0}}]);