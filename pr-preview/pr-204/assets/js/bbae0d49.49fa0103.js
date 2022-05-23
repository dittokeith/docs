"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1052],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99919:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"4 - Integrate Ditto"},l=void 0,c={unversionedId:"tutorials/android-kotlin/integrate-ditto",id:"tutorials/android-kotlin/integrate-ditto",isDocsHomePage:!1,title:"4 - Integrate Ditto",description:"4-1 Create Your Ditto App on the Portal",source:"@site/docs/tutorials/android-kotlin/4-integrate-ditto.md",sourceDirName:"tutorials/android-kotlin",slug:"/tutorials/android-kotlin/integrate-ditto",permalink:"/pr-preview/pr-204/tutorials/android-kotlin/integrate-ditto",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/android-kotlin/4-integrate-ditto.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4 - Integrate Ditto"},sidebar:"tutorialSidebar",previous:{title:"3 - Activities",permalink:"/pr-preview/pr-204/tutorials/android-kotlin/activities"},next:{title:"1 - Setup",permalink:"/pr-preview/pr-204/tutorials/c-sharp-console/setup"}},d=[{value:"4-1 Create Your Ditto App on the Portal",id:"4-1-create-your-ditto-app-on-the-portal",children:[],level:2},{value:"4-2 Integrate Ditto",id:"4-2-integrate-ditto",children:[],level:2},{value:"4-3 Setup Live Query",id:"4-3-setup-live-query",children:[],level:2},{value:"4-4 Check For Location Permissions",id:"4-4-check-for-location-permissions",children:[],level:2},{value:"4-5 Ensure Imports",id:"4-5-ensure-imports",children:[],level:2},{value:"4-5 Build and Run!",id:"4-5-build-and-run",children:[],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"4-1-create-your-ditto-app-on-the-portal"},"4-1 Create Your Ditto App on the Portal"),(0,o.kt)("p",null,"In order to integrate Ditto into our app we first need to create a new app on the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"portal"),". Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer."),(0,o.kt)("p",null,"Each app created on the portal has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"appID")," which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance."),(0,o.kt)("h2",{id:"4-2-integrate-ditto"},"4-2 Integrate Ditto"),(0,o.kt)("p",null,"To finish the app, we now need to integrate Ditto. We will initialize it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate()")," function within ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity"),". Furthermore, we will add handlers for the swipe to delete and listening for row clicks to mark a task as completed (or in-completed). Replace the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate()")," code with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},'override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n    setSupportActionBar(toolbar)\n\n    // Setup the layout\n    viewManager = LinearLayoutManager(this)\n    val tasksAdapter = TasksAdapter()\n    viewAdapter = tasksAdapter\n\n    recyclerView = findViewById<RecyclerView>(R.id.recyclerView).apply {\n        setHasFixedSize(true)\n        layoutManager = viewManager\n        adapter = viewAdapter\n    }\n\n    recyclerView.addItemDecoration(DividerItemDecoration(this, DividerItemDecoration.VERTICAL))\n\n    // Create an instance of Ditto\n    val androidDependencies = DefaultAndroidDittoDependencies(applicationContext)\n    val ditto = Ditto(androidDependencies, DittoIdentity.OnlinePlaygroundV2(androidDependencies, "REPLACE_WITH_YOUR_APP_ID", "REPLACE_WITH_TOKEN"))\n    this.ditto = ditto\n\n    // This starts Ditto\'s background synchronization\n    ditto.tryStartSync()\n\n    // Add swipe to delete\n    val swipeHandler = object : SwipeToDeleteCallback(this) {\n        override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {\n            val adapter = recyclerView.adapter as TasksAdapter\n            // Retrieve the task at the row swiped\n            val task = adapter.tasks()[viewHolder.adapterPosition]\n            // Delete the task from Ditto\n            ditto.store.collection("tasks").findByID(task.id).remove()\n        }\n    }\n\n    // Configure the RecyclerView for swipe to delete\n    val itemTouchHelper = ItemTouchHelper(swipeHandler)\n    itemTouchHelper.attachToRecyclerView(recyclerView)\n\n    // Respond to new task button click\n    addTaskButton.setOnClickListener { _ ->\n        showNewTaskUI()\n    }\n\n    // Listen for clicks to mark tasks [in]complete\n    tasksAdapter.onItemClick = { task ->\n        ditto.store.collection("tasks").findByID(task.id).update { newTask ->\n            newTask!!["isCompleted"].set(!newTask["isCompleted"].booleanValue)\n        }\n    }\n\n    // This function will create a "live-query" that will update\n    // our RecyclerView\n    setupTaskList()\n\n    // This will check if the app has permissions\n    // to fully enable Bluetooth\n    checkPermissions()\n}\n\n')),(0,o.kt)("p",null,"The important things to note is that you need an access license to use Ditto. If you do not have one yet, reach out and we can supply one. To enable background synchronization, we need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"tryStartSync()")," which allows you to control when synchronization occurs. For this application we want it to run the entire time the app is in use."),(0,o.kt)("h2",{id:"4-3-setup-live-query"},"4-3 Setup Live Query"),(0,o.kt)("p",null,"Finally, we then use Ditto's key API to observe changes to the database by creating a live-query in the ",(0,o.kt)("inlineCode",{parentName:"p"},"setupTaskList()")," function. This allows us to set the initial state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"RecyclerView")," after the query is immediately run and then subsequently get callbacks for any new data changes that occur locally or that were synced from other devices:"),(0,o.kt)("p",null,"Note, that we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," API in Ditto. This API performs two functions. First, it sets up a local observer for data changes in the database that match the query and second it creates a subscription for the same query that will be used to request this data from other devices. For simplicity, we are using this combined API, but you can also call them independently. To learn more, see the ",(0,o.kt)("a",{href:"/concepts/syncing-data"},"Observing Changes")," section in the documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun setupTaskList() {\n    // We will create a long-running live query to keep UI up-to-date\n    this.collection = this.ditto!!.store.collection("tasks")\n\n    // We use observe to create a live query with a subscription to sync this query with other devices\n    this.liveQuery = collection!!.findAll().observe { docs, event ->\n        val adapter = (this.viewAdapter as TasksAdapter)\n        when (event) {\n            is DittoLiveQueryEvent.Update -> {\n                runOnUiThread {\n                    adapter.set(docs)\n                    adapter.inserts(event.insertions)\n                    adapter.deletes(event.deletions)\n                    adapter.updates(event.updates)\n                    adapter.moves(event.moves)\n                }\n            }\n            is DittoLiveQueryEvent.Initial -> {\n                runOnUiThread {\n                    adapter.setInitial(docs)\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This is a best-practice when using Ditto, since it allows your UI to simply react to data changes which can come at any time given the ad-hoc nature of how Ditto synchronizes with nearby devices."),(0,o.kt)("h2",{id:"4-4-check-for-location-permissions"},"4-4 Check For Location Permissions"),(0,o.kt)("p",null,"Android requires you to request location permissions to fully enable Bluetooth Low Energy (since Bluetooth can be involved with location tracking). Insert this function in ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},"fun checkPermissions() {\n    val missing = DittoSyncPermissions(this).missingPermissions()\n    if (missing.isNotEmpty()) {\n        this.requestPermissions(missing, 0)\n    }\n}\n")),(0,o.kt)("h2",{id:"4-5-ensure-imports"},"4-5 Ensure Imports"),(0,o.kt)("p",null,"Just in case your project did not auto import as you went along, you can replace the import statements in ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity")," with these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},"import android.Manifest\nimport android.content.Context\nimport android.content.pm.PackageManager\nimport android.graphics.*\nimport android.graphics.drawable.ColorDrawable\nimport android.os.Bundle\nimport android.view.LayoutInflater\nimport android.view.View\nimport android.view.ViewGroup\nimport androidx.appcompat.app.AppCompatActivity\nimport androidx.core.app.ActivityCompat\nimport androidx.core.content.ContextCompat\nimport androidx.fragment.app.DialogFragment\nimport androidx.recyclerview.widget.DividerItemDecoration\nimport androidx.recyclerview.widget.ItemTouchHelper\nimport androidx.recyclerview.widget.LinearLayoutManager\nimport androidx.recyclerview.widget.RecyclerView\nimport kotlinx.android.synthetic.main.activity_main.*\nimport kotlinx.android.synthetic.main.task_view.view.*\nimport live.ditto.*\nimport live.ditto.transports.*\nimport live.ditto.android.DefaultAndroidDittoDependencies\nimport java.time.Instant\n")),(0,o.kt)("h2",{id:"4-5-build-and-run"},"4-5 Build and Run!"),(0,o.kt)("p",null,"\ud83c\udf89 You now have a fully functioning Tasks app. Build and run it on a device. The simulator will not show any data sync because neither Bluetooth or the necessary network system is available to allow simulators to find each other or another device."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(27574).Z})))}u.isMDXComponent=!0},27574:function(e,t,n){t.Z=n.p+"assets/images/android-sync-15f1fcf66f471e4b365f4d28456862f6.gif"}}]);