(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{4008:function(t,e,s){},"5a50":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"k",(function(){return a})),s.d(e,"l",(function(){return o})),s.d(e,"c",(function(){return i})),s.d(e,"a",(function(){return r})),s.d(e,"h",(function(){return l})),s.d(e,"g",(function(){return c})),s.d(e,"i",(function(){return d})),s.d(e,"j",(function(){return u})),s.d(e,"d",(function(){return p})),s.d(e,"f",(function(){return h})),s.d(e,"e",(function(){return m})),s.d(e,"s",(function(){return g})),s.d(e,"o",(function(){return b})),s.d(e,"m",(function(){return f})),s.d(e,"r",(function(){return v})),s.d(e,"q",(function(){return y})),s.d(e,"p",(function(){return S})),s.d(e,"n",(function(){return q}));const n="mqtt-tiles-boards",i="mqtt-tiles-clients",r="mqtt-tiles-active-client",a=0,o=1,l=0,c=1,d=0,u=1,p=0,h=1,m=2,g=0,b=1,f=2,v=3,y=4,S=5,q=6},9224:function(t){t.exports=JSON.parse('{"a":"1.15.0"}')},a11b:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return a}));var n=s("ded3"),i=s.n(n);const r=()=>({clientName:"New client",clientId:`mqtt-tiles-${Math.random().toString(16).substr(2,8)}`,host:"wss://mqtt.flespi.io",keepalive:60,protocolVersion:5,clean:!0,username:"FlespiToken XXXXXXXXXXXXXXXXXXX",password:"",properties:{sessionExpiryInterval:void 0},syncNamespace:"xflespifront/mqtttiles/boards"}),a=(t={})=>i()({topicTemplate:"",topicFilter:"",payloadType:0,payloadField:"",payloadNameField:"",default:""},t)},b4ec:function(t,e,s){"use strict";s("4008")},f241:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"hHh Lpr lFf"}},[s("client-settings",{attrs:{settings:t.currentSettings},on:{save:t.saveSettingsHandler,hide:t.hideSettingsHandler},model:{value:t.clientSettingsOpened,callback:function(e){t.clientSettingsOpened=e},expression:"clientSettingsOpened"}}),t.fullViewMode?s("q-header",[s("q-toolbar",{staticClass:"bg-grey-9"},[t.fullViewMode&&!t.$integrationMode?s("q-btn",{attrs:{flat:"",rounded:"",icon:"mdi-menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}):t._e(),s("q-toolbar-title",{staticStyle:{"line-height":"36px"}},[s("img",{staticStyle:{height:"30px","vertical-align":"text-bottom"},attrs:{src:"mqtttiles-logo.png",alt:"MQTT Tiles"}}),t._v("\n        MQTT Tiles\n        "),s("sup",{staticStyle:{position:"relative","font-size":".9rem","padding-left":"4px"}},[t._v(t._s(t.version))])])],1)],1):t._e(),t.fullViewMode&&!t.$integrationMode?s("q-drawer",{attrs:{side:"left"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[s("div",{staticClass:"connections__subheader q-px-md bg-grey-9",staticStyle:{position:"relative",height:"70px"}},[s("span",{staticClass:"text-white",staticStyle:{"font-size":"1.4rem","line-height":"70px"}},[t._v("My connections")]),s("q-btn",{staticClass:"text-grey-9",staticStyle:{position:"absolute",bottom:"-20px",right:"16px","z-index":"1"},attrs:{"fab-mini":"",icon:"mdi-plus",color:"white"},on:{click:t.openSettings}})],1),t.clientsIds.length?s("q-list",{staticClass:"scroll",staticStyle:{position:"absolute",top:"70px",bottom:"0",right:"0",left:"0"}},[s("q-item-label",{staticClass:"q-py-md q-pl-md text-grey-9"},[s("span",[t._v("Connections")])]),t._l(t.clients,(function(e,n){var i;return s("q-item",{key:n,class:{active:n===t.activeClientId},attrs:{clickable:""},on:{click:function(e){return t.setActiveClient(n)}}},[s("q-item-section",{attrs:{avatar:""}},[t.connected&&n===t.activeClientId?s("q-btn",{attrs:{icon:"mdi-lan-connect",dense:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.setActiveClient()}}},[s("q-tooltip",[t._v("Disconnect")])],1):s("q-icon",{staticClass:"q-ma-xs",attrs:{name:"mdi-lan-disconnect",size:"1.5rem"}},[n===t.activeClientId?s("q-tooltip",[t._v("Active")]):t._e()],1)],1),s("q-item-section",[s("q-item-label",{class:(i={},i["text-"+(t.connected?"green":"red")+"-6"]=n===t.activeClientId,i)},[s("div",{staticStyle:{"max-width":"calc(100% - 25px)",display:"inline-flex"}},[s("div",{staticClass:"ellipsis"},[t._v(t._s(e.clientName))])]),s("div",{staticStyle:{display:"inline-flex"}},[e.attachedBoards&&e.attachedBoards.length?s("q-icon",{staticClass:"q-ml-xs",attrs:{name:"mdi-link-variant",flat:"",dense:"",size:"15px",color:"yellow-9"}},[s("q-tooltip",[t._v("\n                  "+t._s("Attached boards: "+e.attachedBoards.join(", "))+"\n                ")])],1):t._e()],1)]),s("q-item-label",{staticClass:"ellipsis",attrs:{caption:""}},[t._v(t._s(e.host))])],1),s("q-item-section",{staticStyle:{"padding-left":"4px!important"},attrs:{side:""}},[s("q-btn",{attrs:{round:"",flat:"",dense:"",icon:"mdi-dots-vertical"},on:{click:function(t){t.stopPropagation()}}},[s("q-menu",{attrs:{anchor:"bottom right",self:"top right"}},[s("q-list",[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.editClientSettings(n)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"mdi-cog"}})],1),s("q-item-section",[t._v("Edit")])],1),s("q-separator"),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.removeClient(n)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"mdi-delete-outline",color:"red"}})],1),s("q-item-section",[t._v("Remove")])],1)],1)],1)],1)],1)],1)}))],2):s("div",{staticClass:"q-px-md q-pt-lg text-center"},[s("div",{staticClass:"text-bold"},[t._v("No connections")]),s("div",{staticStyle:{"font-size":".8rem"}},[t._v("Create a connection to visualize its data on boards")])])],1):t._e(),s("q-page-container",[s("router-view",{attrs:{client:t.clients[t.activeClientId]},on:{"change-status":t.changeStatus,share:t.shareHandler,"change:attach":t.changeAttachedBoards,"delete:boards":t.deleteBoardsHandler,"add:boards":t.addBoardsHandler,"update-client-settings":function(e){return t.editClientSettings(t.activeClientId)}}})],1)],1)},i=[],r=(s("13d5"),s("ddb0"),s("5319"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{maximized:t.$q.platform.is.mobile},on:{hide:t.closeHandler},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[s("div",{style:{width:t.$q.platform.is.mobile?"100%":"50vw"}},[s("q-toolbar",{staticClass:"bg-grey-9 text-white"},[s("q-toolbar-title",[t._v("\n        MQTT client\n      ")])],1),s("div",{staticClass:"q-pa-md scroll bg-white",style:{height:t.$q.platform.is.mobile?"calc(100% - 100px)":"50vh"}},[s("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",dense:"",label:"MQTT client name",error:!t.currentSettings.clientName},model:{value:t.currentSettings.clientName,callback:function(e){t.$set(t.currentSettings,"clientName",e)},expression:"currentSettings.clientName"}}),s("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",dense:"",label:"Client ID",error:!t.currentSettings.clientId},model:{value:t.currentSettings.clientId,callback:function(e){t.$set(t.currentSettings,"clientId",e)},expression:"currentSettings.clientId"}},[s("q-btn",{attrs:{slot:"append",flat:"",dense:"",icon:"mdi-refresh"},on:{click:function(e){t.currentSettings.clientId="mqtt-tiles-"+Math.random().toString(16).substr(2,8)}},slot:"append"})],1),s("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",dense:"",label:"Host",error:!t.currentSettings.host||0===t.currentSettings.host.indexOf("ws:")},model:{value:t.currentSettings.host,callback:function(e){t.$set(t.currentSettings,"host",e)},expression:"currentSettings.host"}},[t.currentSettings.host&&0!==t.currentSettings.host.indexOf("ws:")?t._e():s("q-btn",{attrs:{slot:"append",flat:"",dense:"",icon:"mdi-alert-outline"},on:{click:t.hostErrorHandler},slot:"append"})],1),s("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",dense:"",type:"number",label:"Keep alive"},model:{value:t.currentSettings.keepalive,callback:function(e){t.$set(t.currentSettings,"keepalive",t._n(e))},expression:"currentSettings.keepalive"}}),s("q-select",{attrs:{color:"grey-9 q-mb-sm",outlined:"",dense:"","hide-bottom-space":"","emit-value":"","map-options":"",options:[{label:"3.1.1",value:4},{label:"5.0",value:5}],label:"Version of MQTT"},model:{value:t.currentSettings.protocolVersion,callback:function(e){t.$set(t.currentSettings,"protocolVersion",e)},expression:"currentSettings.protocolVersion"}}),s("q-checkbox",{staticClass:"q-mr-sm",staticStyle:{height:"56px"},attrs:{color:"grey-9",label:5===t.currentSettings.protocolVersion?"Clean start":"Clean session"},model:{value:t.currentSettings.clean,callback:function(e){t.$set(t.currentSettings,"clean",e)},expression:"currentSettings.clean"}}),5===t.currentSettings.protocolVersion?s("q-input",{attrs:{outlined:"","hide-bottom-space":"",dense:"",color:"grey-9 q-mb-sm",type:"number",label:"Session expiry interval",clearable:""},model:{value:t.currentSettings.properties.sessionExpiryInterval,callback:function(e){t.$set(t.currentSettings.properties,"sessionExpiryInterval",t._n(e))},expression:"currentSettings.properties.sessionExpiryInterval"}}):t._e(),s("q-input",{attrs:{outlined:"","hide-bottom-space":"",dense:"",color:"grey-9 q-mb-sm",label:"Username"},model:{value:t.currentSettings.username,callback:function(e){t.$set(t.currentSettings,"username",e)},expression:"currentSettings.username"}},[-1!==t.currentSettings.host.indexOf("flespi")?s("q-btn",{attrs:{slot:"append",flat:"",dense:"",icon:"mdi-login"},on:{click:t.flespiLoginHandler},slot:"append"}):t._e()],1),s("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",dense:"",label:"Password"},model:{value:t.currentSettings.password,callback:function(e){t.$set(t.currentSettings,"password",e)},expression:"currentSettings.password"}}),5===t.currentSettings.protocolVersion?s("q-expansion-item",{staticClass:"q-mt-md q-mb-sm bg-grey-4",attrs:{label:"Subscribe User Properties"}},[s("div",[t.currentSettings.userProperties?s("q-list",t._l(t.currentSettings.userProperties,(function(e,n){return s("q-item",{key:n+": "+e},[s("q-icon",{staticClass:"q-mr-sm cursor-pointer",attrs:{size:"1rem",name:"mdi-close-circle"},nativeOn:{click:function(e){return t.removeUserProperty(n)}}}),s("span",[t._v(t._s(n+": "+e))])],1)})),1):t._e(),s("q-input",{attrs:{color:"grey-9 q-ma-sm",outlined:"",dense:"","hide-bottom-space":"",label:"User property name"},model:{value:t.userProperty.name,callback:function(e){t.$set(t.userProperty,"name",e)},expression:"userProperty.name"}}),s("q-input",{attrs:{color:"grey-9 q-mx-sm q-mb-sm",outlined:"",dense:"","hide-bottom-space":"",label:"User property value"},model:{value:t.userProperty.value,callback:function(e){t.$set(t.userProperty,"value",e)},expression:"userProperty.value"}}),s("q-btn",{staticClass:"q-mt-sm",staticStyle:{width:"100%"},attrs:{disable:!t.userProperty.name||!t.userProperty.value,color:"grey-9"},on:{click:t.addUserProperty}},[t._v("Add")])],1)]):t._e(),5===t.currentSettings.protocolVersion&&-1!==t.currentSettings.host.indexOf("flespi.io")?s("div",{staticClass:"share-tokens__items-wrapper col-12 relative-position q-mt-lg q-mb-md"},[s("q-list",{attrs:{bordered:""}},[s("q-item-label",{staticClass:"q-py-md q-px-sm list__header"},[s("div",{class:{"text-red-6":!t.currentSettings.syncCreds||!t.currentSettings.syncCreds.length}},[t._v("Tokens for sharing"+t._s(t.currentSettings.syncCreds&&t.currentSettings.syncCreds.length?"":" are empty"))]),s("div",{staticClass:"text-grey-6 q-mt-xs",staticStyle:{"font-size":".8rem"}},[t._v("List of standard or ACL flespi tokens to be used for sharing boards.")]),s("q-btn",{staticClass:"absolute-right",attrs:{color:"grey-9",flat:"",label:"ADD",icon:"mdi-plus"},on:{click:t.addSyncCredsItem}})],1),t._l(t.currentSettings.syncCreds,(function(e,n){return s("q-expansion-item",{key:""+n,attrs:{group:"singleselect-items","header-class":["bg-"+(t.checkUniqueSyncCredsValue(e,n)?"grey-4":"red-2")],"expand-icon":"mdi-cog",value:n===t.currentSettings.syncCreds.length-1}},[s("template",{slot:"header"},[s("q-item-section",{attrs:{avatar:""}},[s("div",[s("q-btn",{staticClass:"col-1",attrs:{disabled:0===n,round:"",dense:"",flat:"",icon:"mdi-arrow-up"},on:{click:function(e){return e.stopPropagation(),t.upItem(n)}}}),s("q-btn",{staticClass:"col-1",attrs:{disabled:n===t.currentSettings.syncCreds.length-1,round:"",dense:"",flat:"",icon:"mdi-arrow-down"},on:{click:function(e){return e.stopPropagation(),t.downItem(n)}}})],1)]),s("q-item-section",[s("q-item-label",{staticClass:"ellipsis"},[t._v(t._s(e.label?e.label:"New token"))]),s("q-item-label",{staticClass:"text-grey-8 ellipsis",staticStyle:{"font-size":".8rem"}},[t._v(t._s(e.credentions.username||"*Empty*"))])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{flat:"",color:"red-6",round:"",dense:"",icon:"mdi-delete"},on:{click:function(e){return e.stopPropagation(),t.removeSyncCredsItem(n)}}})],1)],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 q-my-sm q-px-sm"},[s("q-input",{attrs:{autofocus:"",outlined:"",dense:"","hide-bottom-space":"",color:"grey-9",label:"Label"},model:{value:e.label,callback:function(s){t.$set(e,"label",s)},expression:"syncCreds.label"}})],1),s("div",{staticClass:"col-12 q-mb-sm q-px-sm"},[s("q-input",{attrs:{outlined:"","hide-bottom-space":"",dense:"",color:"grey-9",label:"Token",error:!t.checkUniqueSyncCredsValue(e,n)},model:{value:e.credentions.username,callback:function(s){t.$set(e.credentions,"username",s)},expression:"syncCreds.credentions.username"}})],1)])],2)}))],2)],1):t._e()],1),s("q-toolbar",{staticClass:"bg-grey-9 text-white"},[s("q-toolbar-title"),s("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:""},on:{click:t.closeHandler}},[t._v("Close")]),s("q-btn",{attrs:{flat:"",dense:"",disable:!t.validateCurrentSettings},on:{click:t.saveSettingsHandler}},[t._v(t._s(t.settings?"Update":"Save"))])],1)],1)])}),a=[],o=s("42454"),l=s.n(o),c=s("a11b"),d=s("0644"),u=s.n(d),p={name:"ClientSettings",props:["value","settings"],data(){const t=Object(c["a"])();return{defaultSettings:t,currentSettings:this.settings?l()({},t,this.settings):l()({},t),userProperty:{name:"",value:""},syncCreds:{label:"",credentions:{username:""}}}},computed:{validateCurrentSettings(){return!!this.currentSettings.clientId&&!!this.currentSettings.host&&!(0===this.currentSettings.host.indexOf("ws:"))&&(!this.currentSettings.syncCreds||!this.currentSettings.syncCreds.length||!!this.currentSettings.syncCreds&&!!this.currentSettings.syncCreds.length&&this.currentSettings.syncCreds.reduce(((t,e,s,n)=>{const i=e.credentions.username;return t[i]||(t[i]=0),t[i]++,s===n.length-1?Object.keys(t).reduce(((e,s)=>e?1===t[s]:e),!0):t}),{}))},status(){return this.value}},methods:{saveSettingsHandler(){this.$emit("save",this.currentSettings),this.closeHandler(),this.$nextTick((()=>{this.defaultSettings.clientId=`mqtt-tiles-${Math.random().toString(16).substr(2,8)}`,this.currentSettings=l()({},this.defaultSettings)}))},closeHandler(){this.$emit("input",!1),this.$emit("hide")},hostErrorHandler(){this.$q.notify({color:"warning",message:"Host must be not empty and only over secured sockets"})},addUserProperty(){this.currentSettings.userProperties||this.$set(this.currentSettings,"userProperties",{}),this.$set(this.currentSettings.userProperties,this.userProperty.name,this.userProperty.value),this.userProperty={value:"",name:""}},removeUserProperty(t){this.$delete(this.currentSettings.userProperties,t),Object.keys(this.currentSettings.userProperties).length||this.$set(this.currentSettings,"userProperties",null)},flespiLoginHandler(){const t=e=>{if("string"===typeof e.data&&~e.data.indexOf("FlespiLogin|token:")){let s=e.data;s=s.replace("FlespiLogin|token:",""),s=JSON.parse(s),this.currentSettings.username=s.token,this.currentSettings.host=`wss://${s.region["mqtt-ws"]}`,window.removeEventListener("message",t)}};window.addEventListener("message",t),this.openWindow("https://flespi.io/login/#/providers")},openWindow(t,e){e=e||"auth";const s=500,n=600,i=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,o=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,l=a/2-s/2+i,c=o/2-n/2+r,d=window.open(t,e,"toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width="+s+", height="+n+", top="+c+", left="+l);window.focus&&d.focus()},addSyncCredsItem(){this.currentSettings.syncCreds||this.$set(this.currentSettings,"syncCreds",[]),this.currentSettings.syncCreds.push(u()(this.syncCreds))},removeSyncCredsItem(t){this.$delete(this.currentSettings.syncCreds,t)},upSyncCredsItem(t){const e=this.currentSettings.syncCreds.splice(t,1)[0];this.currentSettings.syncCreds.splice(t-1,0,e)},downSyncCredsItem(t){const e=this.currentSettings.syncCreds.splice(t,1)[0];this.currentSettings.syncCreds.splice(t+1,0,e)},checkUniqueSyncCredsValue(t,e){let s=!0;return this.currentSettings.syncCreds.map((t=>t.credentions.username)).some(((n,i)=>{const r=n===t.credentions.username;return r&&(s=i===e),r})),s}},watch:{settings(t){this.currentSettings=l()({},this.defaultSettings,t)}}},h=p,m=(s("b4ec"),s("2877")),g=s("24e8"),b=s("65c6"),f=s("6ac5"),v=s("27f9"),y=s("9c40"),S=s("ddd8"),q=s("8f8e"),C=s("3b73"),w=s("1c1c"),k=s("66e5"),x=s("0016"),$=s("0170"),I=s("4074"),_=s("eebe"),O=s.n(_),T=Object(m["a"])(h,r,a,!1,null,null,null),P=T.exports;O()(T,"components",{QDialog:g["a"],QToolbar:b["a"],QToolbarTitle:f["a"],QInput:v["a"],QBtn:y["a"],QSelect:S["a"],QCheckbox:q["a"],QExpansionItem:C["a"],QList:w["a"],QItem:k["a"],QIcon:x["a"],QItemLabel:$["a"],QItemSection:I["a"]});var Q=s("18d6"),B=s("b047c"),M=s.n(B),H=s("2b0e"),j=s("e762"),D=s("5a50"),A=s("9224"),E=s("ded3"),L=s.n(E),N=(s("4e82"),s("70e1")),X=s.n(N),V=s("9b02"),F=s.n(V);class z{constructor(t){this.bus=new X.a(t)}get settings(){return this.bus.settings}set settings(t){this.bus.settings=t}get token(){return this.bus.token}set token(t){this.bus.token=t}async getDevices(t){let e="all";if(t&&"all"!==t){const s=t.join(",");try{const t=await this.bus.gw.getCalcsDevices(s,"all",{fileds:"device_id"}),n=F()(t,"data.result",[]),i=n.reduce(((t,e)=>(t[e.device_id]=!0,t)),{});e=Object.keys(i).join(",")}catch(i){return[]}}const s=await this.bus.gw.getDevices(e,{fields:"id,name"});let n=F()(s,"data.result",[]);return n=n.map((t=>({label:t.name||`#${t.id}`,value:`${t.id}`}))),n}async getChannels(){const t=await this.bus.gw.getChannels("all",{fileds:"id,name"});let e=F()(t,"data.result",[]);return e=e.map((t=>({label:t.name||`#${t.id}`,value:`${t.id}`}))),e}async getCalcs(t){let e="all";if(t&&"all"!==t)try{const s=t.join(","),n=await this.bus.gw.getCalcsDevices("all",s,{fields:"calc_id"}),i=F()(n,"data.result",[]),r=i.reduce(((t,e)=>(t[e.calc_id]=!0,t)),{});e=Object.keys(r).join(",")}catch(i){return[]}const s=await this.bus.gw.getCalcs(e,{fileds:"id,name"});let n=F()(s,"data.result",[]);return n=n.map((t=>({label:t.name||`#${t.id}`,value:`${t.id}`}))),n}async getDevicesTelemetry(t){const e=await this.bus.gw.getDevicesTelemetry(t,"all");let s=F()(e,"data.result",[]);return s=s.reduce(((t,e)=>{const s=e.telemetry;return s&&(t=L()(L()({},t),s)),t}),{}),s=Object.keys(s).sort().map((t=>({label:t,value:t}))),s}async getDevicesSettings(t){const e=await this.bus.gw.getDevicesSettings(t,"all",{fields:"name,schema"});let s=F()(e,"data.result",[]);return s=s.reduce(((t,e)=>{const s=e.name,n=e.schema.title;return t[s]||(t[s]={}),t[s][n]=!0,t}),{}),s=Object.keys(s).map((t=>({label:Object.keys(s[t]).join(", "),value:t}))),s}}var U=z;const R=M()((t=>{Q["a"].set(D["c"],t)}),500,{trailing:!0});var W={name:"MyLayout",data(){return{leftDrawerOpen:this.$q.platform.is.desktop,clientSettingsOpened:!1,currentSettings:void 0,clients:{},activeClientId:void 0,editedClientId:void 0,connected:!1,version:A["a"],fullViewMode:!0}},computed:{clientsIds(){return Object.keys(this.clients)}},methods:{openSettings(){this.clientSettingsOpened=!0},hideSettingsHandler(){this.currentSettings=void 0,this.editedClientId=void 0},saveSettingsHandler(t){const e=this.editedClientId?this.editedClientId:this.clientsIds.length?parseInt(this.clientsIds[this.clientsIds.length-1])+1:0;H["default"].set(this.clients,e,t),this.setActiveClient(e)},editClientSettings(t){this.currentSettings=this.clients[t],this.editedClientId=t,this.openSettings()},removeClient(t){this.$q.dialog({title:"Delete client?",message:`Do you really want to delete «${this.clients[t].clientName}» client?`,color:"grey-9",ok:!0,cancel:!0}).onOk((()=>{this.activeClientId===t&&(this.activeClientId=void 0),H["default"].delete(this.clients,t)}))},setActiveClient(t){this.activeClientId=t,Q["a"].set(D["a"],t),void 0!==t&&(this.setFlespiMode(t),this.makeFlespiRestBus(t))},changeStatus(t){this.connected=t},shareHandler(t){},clearAttachMode(t){this.$q.notify({message:"No boards attached to the connection. Showing all available boards.",timeout:3e3,color:"info",icon:"mdi-link-variant",position:"bottom-left"}),this.$delete(t,"attachedBoards")},setFlespiMode(t){const e=this.clients[t];e.host.indexOf("flespi")>-1?H["default"].prototype.$flespiMode=!0:H["default"].prototype.$flespiMode=!1},makeFlespiRestBus(t){const e=this.clients[t],s=new U;s.bus.auth.getRegions().then((t=>{t=F()(t,"data.result",[]);const n=t.reduce(((t,s)=>{const n=s["mqtt-ws"].split(":")[0];return-1!==e.host.indexOf(n)?s:t}));n?(s.settings={server:n.rest},s.token=e.username,H["default"].prototype.$flespiRestBus=s):H["default"].prototype.$flespiRestBus=null}))},changeAttachedBoards(t){t.length?this.$set(this.clients[this.activeClientId],"attachedBoards",[...t]):this.clients[this.activeClientId].attachedBoards&&this.clearAttachMode(this.clients[this.activeClientId])},deleteBoardsHandler(t){Object.keys(this.clients).forEach((e=>{this.clients[e].attachedBoards&&(this.clients[e].attachedBoards.forEach(((s,n)=>{t.includes(s)&&this.$delete(this.clients[e].attachedBoards,n)})),this.clients[e].attachedBoards.length||this.clearAttachMode(this.clients[e]))}))},addBoardsHandler(t){if(!this.activeClientId)return!1;const e=this.clients[this.activeClientId],s=!!e.attachedBoards;s&&this.$q.notify({message:"Attach new board to the connection?",timeout:0,color:"info",icon:"mdi-link-variant",position:"bottom-left",closeBtn:"Close",classes:"text-white",actions:[{label:"Attach",handler:()=>{this.$set(this.clients[this.activeClientId],"attachedBoards",[...this.clients[this.activeClientId].attachedBoards,...t])}}]})}},mounted(){this.$integrationBus.send("ready")},created(){const t=this.$q.sessionStorage.getItem("mqtt-tiles-share");if(H["default"].prototype.$flespiMode=!1,H["default"].prototype.$integrationMode=!1,this.$root.$on("new-share-token",(t=>{const e=this.clients[this.activeClientId];e&&(e.syncCreds||(e.syncCreds=[]),e.syncCreds.push(t))})),this.$route.path.indexOf("integration")>-1)H["default"].prototype.$integrationMode=!0,this.$integrationBus.on("SetFlespiLogin",(({token:t,region:e})=>{const s=Object(c["a"])();s.host=`wss://${e["mqtt-ws"]}`,s.username=t,this.$set(this.clients,0,s),this.setActiveClient(0)}));else if(this.$route.params.hash||t){this.fullViewMode=!1;const e=Object(c["a"])();let s;s=this.$route.params.hash?JSON.parse(j["a"].decode(this.$route.params.hash)):t,this.$q.sessionStorage.set("mqtt-tiles-share",s),s.host&&(e.host=s.host),e.username=s.token,e.syncNamespace=s.topic,e.syncToRetain=!0,e.flespiBoard=s.boardId,H["default"].set(this.clients,0,e),this.setActiveClient(0)}else{const t=Q["a"].getItem(D["c"]);let e=Q["a"].getItem(D["a"]);if(t){if(this.clients=t,this.$route.params.flespiToken){const t=this.$route.params.flespiToken.replace("FlespiToken ",""),s=this.clientsIds.filter((e=>{const s=this.clients[e].username.replace("FlespiToken ","");return t===s}));if(s.length)e=s[0];else{const s=Object(c["a"])();s.username=t;const n=(parseInt(this.clientsIds[this.clientsIds.slice(-1)])+1).toString();H["default"].set(this.clients,n,s),e=n}this.$router.push("/")}e&&this.clients[e]&&this.$nextTick((()=>{this.setActiveClient(e)}))}}},watch:{clients:{deep:!0,handler(t){this.fullViewMode&&R(t)}}},components:{clientSettings:P}},J=W,K=s("4d5a"),G=s("e359"),Y=s("9404"),Z=s("05c0"),tt=s("4e73"),et=s("eb85"),st=s("09e3"),nt=s("7f67"),it=Object(m["a"])(J,n,i,!1,null,null,null);e["default"]=it.exports;O()(it,"components",{QLayout:K["a"],QHeader:G["a"],QToolbar:b["a"],QBtn:y["a"],QToolbarTitle:f["a"],QDrawer:Y["a"],QList:w["a"],QItemLabel:$["a"],QItem:k["a"],QItemSection:I["a"],QTooltip:Z["a"],QIcon:x["a"],QMenu:tt["a"],QSeparator:et["a"],QPageContainer:st["a"]}),O()(it,"directives",{ClosePopup:nt["a"]})}}]);