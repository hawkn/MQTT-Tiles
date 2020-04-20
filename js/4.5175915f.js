(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"5a50":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"k",(function(){return o})),n.d(e,"l",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"h",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return u})),n.d(e,"d",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return h})),n.d(e,"s",(function(){return g})),n.d(e,"o",(function(){return f})),n.d(e,"m",(function(){return v})),n.d(e,"r",(function(){return b})),n.d(e,"q",(function(){return S})),n.d(e,"p",(function(){return y})),n.d(e,"n",(function(){return q}));var s="mqtt-tiles-boards",i="mqtt-tiles-clients",r="mqtt-tiles-active-client",o=0,a=1,c=0,l=1,d=0,u=1,p=0,m=1,h=2,g=0,f=1,v=2,b=3,S=4,y=5,q=6},9224:function(t){t.exports=JSON.parse('{"a":"1.9.2"}')},f241:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"hHh Lpr lFf"}},[n("client-settings",{attrs:{settings:t.currentSettings},on:{save:t.saveSettingsHandler,hide:t.hideSettingsHandler},model:{value:t.clientSettingsOpened,callback:function(e){t.clientSettingsOpened=e},expression:"clientSettingsOpened"}}),t.fullViewMode?n("q-header",[n("q-toolbar",{staticClass:"bg-grey-9"},[n("q-btn",{attrs:{flat:"",rounded:"",icon:"mdi-menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",{staticStyle:{"line-height":"36px"}},[n("img",{staticStyle:{height:"30px","vertical-align":"text-bottom"},attrs:{src:"statics/mqtttiles-logo.png",alt:"MQTT Tiles"}}),t._v("\n        MQTT Tiles\n        "),n("sup",{staticStyle:{position:"relative","font-size":".9rem","padding-left":"4px"}},[t._v(t._s(t.version))])])],1)],1):t._e(),t.fullViewMode?n("q-drawer",{attrs:{side:"left"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("div",{staticClass:"connections__subheader q-px-md bg-grey-9",staticStyle:{position:"relative",height:"70px"}},[n("span",{staticClass:"text-white",staticStyle:{"font-size":"1.4rem","line-height":"70px"}},[t._v("My connections")]),n("q-btn",{staticClass:"text-grey-9",staticStyle:{position:"absolute",bottom:"-20px",right:"16px","z-index":"1"},attrs:{"fab-mini":"",icon:"mdi-plus",color:"white"},on:{click:t.openSettings}})],1),t.clientsIds.length?n("q-list",{staticClass:"scroll",staticStyle:{position:"absolute",top:"70px",bottom:"0",right:"0",left:"0"}},[n("q-item-label",{staticClass:"q-py-md q-pl-md text-grey-9"},[n("span",[t._v("Connections")])]),t._l(t.clients,(function(e,s){var i;return n("q-item",{key:s,class:{active:s===t.activeClientId},attrs:{clickable:""},on:{click:function(e){return t.setActiveClient(s)}}},[n("q-item-section",{attrs:{avatar:""}},[t.connected&&s===t.activeClientId?n("q-btn",{attrs:{icon:"mdi-lan-connect",dense:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.setActiveClient()}}},[n("q-tooltip",[t._v("Disconnect")])],1):n("q-icon",{staticClass:"q-ma-xs",attrs:{name:"mdi-lan-disconnect",size:"1.5rem"}},[s===t.activeClientId?n("q-tooltip",[t._v("Active")]):t._e()],1)],1),n("q-item-section",[n("q-item-label",{class:(i={},i["text-"+(t.connected?"green":"red")+"-6"]=s===t.activeClientId,i)},[n("div",{staticStyle:{"max-width":"calc(100% - 25px)",display:"inline-flex"}},[n("div",{staticClass:"ellipsis"},[t._v(t._s(e.clientName))])]),n("div",{staticStyle:{display:"inline-flex"}},[e.attachedBoards&&e.attachedBoards.length?n("q-icon",{staticClass:"q-ml-xs",attrs:{name:"mdi-link-variant",flat:"",dense:"",size:"15px",color:"yellow-9"}},[n("q-tooltip",[t._v("\n                  "+t._s("Attached boards: "+e.attachedBoards.join(", "))+"\n                ")])],1):t._e()],1)]),n("q-item-label",{staticClass:"ellipsis",attrs:{caption:""}},[t._v(t._s(e.host))])],1),n("q-item-section",{staticStyle:{"padding-left":"4px!important"},attrs:{side:""}},[n("q-btn",{attrs:{round:"",flat:"",dense:"",icon:"mdi-dots-vertical"},on:{click:function(t){t.stopPropagation()}}},[n("q-menu",{attrs:{anchor:"bottom right",self:"top right"}},[n("q-list",[n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.editClientSettings(s)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"mdi-settings"}})],1),n("q-item-section",[t._v("Edit")])],1),n("q-separator"),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.removeClient(s)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"mdi-delete-outline",color:"red"}})],1),n("q-item-section",[t._v("Remove")])],1)],1)],1)],1)],1)],1)}))],2):n("div",{staticClass:"q-px-md q-pt-lg text-center"},[n("div",{staticClass:"text-bold"},[t._v("No connections")]),n("div",{staticStyle:{"font-size":".8rem"}},[t._v("Create a connection to visualize its data on boards")])])],1):t._e(),n("q-page-container",[n("router-view",{attrs:{client:t.clients[t.activeClientId]},on:{"change:status":t.changeStatus,share:t.shareHandler,"change:attach":t.changeAttachedBoards,"delete:boards":t.deleteBoardsHandler,"add:boards":t.addBoardsHandler}})],1)],1)},i=[],r=(n("6b54"),n("a481"),n("6762"),n("2fdb"),n("4db1")),o=n.n(r),a=(n("ac6a"),n("cadf"),n("06db"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{attrs:{maximized:t.$q.platform.is.mobile},on:{hide:t.closeHandler},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("div",{style:{width:t.$q.platform.is.mobile?"100%":"50vw"}},[n("q-toolbar",{staticClass:"bg-grey-9 text-white"},[n("q-toolbar-title",[t._v("\n        MQTT client\n      ")])],1),n("div",{staticClass:"q-pa-md scroll bg-white",style:{height:t.$q.platform.is.mobile?"calc(100% - 100px)":"50vh"}},[n("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",label:"MQTT client name",error:!t.currentSettings.clientName},model:{value:t.currentSettings.clientName,callback:function(e){t.$set(t.currentSettings,"clientName",e)},expression:"currentSettings.clientName"}}),n("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",label:"Client ID",error:!t.currentSettings.clientId},model:{value:t.currentSettings.clientId,callback:function(e){t.$set(t.currentSettings,"clientId",e)},expression:"currentSettings.clientId"}},[n("q-btn",{attrs:{slot:"append",flat:"",dense:"",icon:"mdi-refresh"},on:{click:function(e){t.currentSettings.clientId="mqtt-tiles-"+Math.random().toString(16).substr(2,8)}},slot:"append"})],1),n("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",label:"Host",error:!t.currentSettings.host||0===t.currentSettings.host.indexOf("ws:")},model:{value:t.currentSettings.host,callback:function(e){t.$set(t.currentSettings,"host",e)},expression:"currentSettings.host"}},[t.currentSettings.host&&0!==t.currentSettings.host.indexOf("ws:")?t._e():n("q-btn",{attrs:{slot:"append",flat:"",dense:"",icon:"mdi-alert-outline"},on:{click:t.hostErrorHandler},slot:"append"})],1),n("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",type:"number",label:"Keep alive"},model:{value:t.currentSettings.keepalive,callback:function(e){t.$set(t.currentSettings,"keepalive",t._n(e))},expression:"currentSettings.keepalive"}}),n("q-select",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"","emit-value":"","map-options":"",options:[{label:"3.1.1",value:4},{label:"5.0",value:5}],label:"Version of MQTT"},model:{value:t.currentSettings.protocolVersion,callback:function(e){t.$set(t.currentSettings,"protocolVersion",e)},expression:"currentSettings.protocolVersion"}}),n("q-checkbox",{staticClass:"q-mr-sm",staticStyle:{height:"56px"},attrs:{color:"grey-9",label:5===t.currentSettings.protocolVersion?"Clean start":"Clean session"},model:{value:t.currentSettings.clean,callback:function(e){t.$set(t.currentSettings,"clean",e)},expression:"currentSettings.clean"}}),5===t.currentSettings.protocolVersion?n("q-input",{attrs:{outlined:"","hide-bottom-space":"",color:"grey-9 q-mb-sm",type:"number",label:"Session expiry interval",clearable:""},model:{value:t.currentSettings.properties.sessionExpiryInterval,callback:function(e){t.$set(t.currentSettings.properties,"sessionExpiryInterval",t._n(e))},expression:"currentSettings.properties.sessionExpiryInterval"}}):t._e(),n("q-input",{attrs:{outlined:"","hide-bottom-space":"",color:"grey-9 q-mb-sm",label:"Username"},model:{value:t.currentSettings.username,callback:function(e){t.$set(t.currentSettings,"username",e)},expression:"currentSettings.username"}},[-1!==t.currentSettings.host.indexOf("flespi")?n("q-btn",{attrs:{slot:"append",flat:"",dense:"",icon:"mdi-login"},on:{click:t.flespiLoginHandler},slot:"append"}):t._e()],1),n("q-input",{attrs:{color:"grey-9 q-mb-sm",outlined:"","hide-bottom-space":"",label:"Password"},model:{value:t.currentSettings.password,callback:function(e){t.$set(t.currentSettings,"password",e)},expression:"currentSettings.password"}}),5===t.currentSettings.protocolVersion?n("q-expansion-item",{staticClass:"q-mt-md q-mb-sm bg-grey-4",attrs:{label:"Subscribe User Properties"}},[n("div",[t.currentSettings.userProperties?n("q-list",t._l(t.currentSettings.userProperties,(function(e,s){return n("q-item",{key:s+": "+e},[n("q-icon",{staticClass:"q-mr-sm cursor-pointer",attrs:{size:"1rem",name:"mdi-close-circle"},nativeOn:{click:function(e){return t.removeUserProperty(s)}}}),n("span",[t._v(t._s(s+": "+e))])],1)})),1):t._e(),n("q-input",{attrs:{color:"grey-9 q-ma-sm",outlined:"","hide-bottom-space":"",label:"User property name"},model:{value:t.userProperty.name,callback:function(e){t.$set(t.userProperty,"name",e)},expression:"userProperty.name"}}),n("q-input",{attrs:{color:"grey-9 q-mx-sm q-mb-sm",outlined:"","hide-bottom-space":"",label:"User property value"},model:{value:t.userProperty.value,callback:function(e){t.$set(t.userProperty,"value",e)},expression:"userProperty.value"}}),n("q-btn",{staticClass:"q-mt-sm",staticStyle:{width:"100%"},attrs:{disable:!t.userProperty.name||!t.userProperty.value,color:"grey-9"},on:{click:t.addUserProperty}},[t._v("Add")])],1)]):t._e(),5===t.currentSettings.protocolVersion&&-1!==t.currentSettings.host.indexOf("flespi.io")?n("div",{staticClass:"share-tokens__items-wrapper col-12 relative-position q-mt-lg q-mb-md"},[n("q-list",{attrs:{bordered:""}},[n("q-btn",{staticClass:"col-12",staticStyle:{top:"-20px",right:"8px",position:"absolute","z-index":"1130"},attrs:{color:"grey-9","fab-mini":"",icon:"mdi-plus"},on:{click:t.addSyncCredsItem}}),n("q-item-label",{staticClass:"q-py-md q-px-sm"},[n("div",{class:{"text-red-6":!t.currentSettings.syncCreds||!t.currentSettings.syncCreds.length}},[t._v("Tokens for sharing"+t._s(t.currentSettings.syncCreds&&t.currentSettings.syncCreds.length?"":" are empty"))]),n("div",{staticClass:"text-grey-6 q-mt-xs",staticStyle:{"font-size":".8rem"}},[t._v("List of standard or ACL flespi tokens to be used for sharing boards.")])]),t._l(t.currentSettings.syncCreds,(function(e,s){return n("q-expansion-item",{key:""+s,attrs:{group:"singleselect-items","header-class":["bg-"+(t.checkUniqueSyncCredsValue(e,s)?"grey-4":"red-2")],"expand-icon":"mdi-settings","default-opened":""}},[n("template",{slot:"header"},[n("q-item-section",{attrs:{avatar:""}},[n("div",[n("q-btn",{staticClass:"col-1",attrs:{disabled:0===s,round:"",dense:"",flat:"",icon:"mdi-arrow-up"},on:{click:function(e){return e.stopPropagation(),t.upItem(s)}}}),n("q-btn",{staticClass:"col-1",attrs:{disabled:s===t.currentSettings.syncCreds.length-1,round:"",dense:"",flat:"",icon:"mdi-arrow-down"},on:{click:function(e){return e.stopPropagation(),t.downItem(s)}}})],1)]),n("q-item-section",[n("q-item-label",{staticClass:"ellipsis"},[t._v(t._s(e.label?e.label:"Item "+(s+1)))]),n("q-item-label",{staticClass:"text-grey-8 ellipsis",staticStyle:{"font-size":".8rem"}},[t._v(t._s(e.credentions.username||"*Empty*"))])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{flat:"",color:"red-6",round:"",dense:"",icon:"mdi-delete"},on:{click:function(e){return e.stopPropagation(),t.removeSyncCredsItem(s)}}})],1)],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 q-my-sm q-px-sm"},[n("q-input",{attrs:{autofocus:"",outlined:"","hide-bottom-space":"",color:"grey-9",label:"Label"},model:{value:e.label,callback:function(n){t.$set(e,"label",n)},expression:"syncCreds.label"}})],1),n("div",{staticClass:"col-12 q-mb-sm q-px-sm"},[n("q-input",{attrs:{outlined:"","hide-bottom-space":"",color:"grey-9",label:"Token",error:!t.checkUniqueSyncCredsValue(e,s)},model:{value:e.credentions.username,callback:function(n){t.$set(e.credentions,"username",n)},expression:"syncCreds.credentions.username"}})],1)])],2)}))],2)],1):t._e()],1),n("q-toolbar",{staticClass:"bg-grey-9 text-white"},[n("q-toolbar-title"),n("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:""},on:{click:t.closeHandler}},[t._v("Close")]),n("q-btn",{attrs:{flat:"",dense:"",disable:!t.validateCurrentSettings},on:{click:t.saveSettingsHandler}},[t._v(t._s(t.settings?"Update":"Save"))])],1)],1)])}),c=[],l=(n("7f7f"),n("42454")),d=n.n(l),u=function(){return{clientName:"New client",clientId:"mqtt-tiles-".concat(Math.random().toString(16).substr(2,8)),host:"wss://mqtt.flespi.io",keepalive:60,protocolVersion:5,clean:!0,username:"FlespiToken XXXXXXXXXXXXXXXXXXX",password:"",properties:{sessionExpiryInterval:void 0},syncNamespace:"xflespifront/mqtttiles/boards"}},p=n("0644"),m=n.n(p),h={name:"ClientSettings",props:["value","settings"],data:function(){var t=u();return{defaultSettings:t,currentSettings:this.settings?d()({},t,this.settings):d()({},t),userProperty:{name:"",value:""},syncCreds:{label:"",credentions:{username:""}}}},computed:{validateCurrentSettings:function(){return!!this.currentSettings.clientId&&!!this.currentSettings.host&&!(0===this.currentSettings.host.indexOf("ws:"))&&(!this.currentSettings.syncCreds||!this.currentSettings.syncCreds.length||!!this.currentSettings.syncCreds&&!!this.currentSettings.syncCreds.length&&this.currentSettings.syncCreds.reduce((function(t,e,n,s){var i=e.credentions.username;return t[i]||(t[i]=0),t[i]++,n===s.length-1?Object.keys(t).reduce((function(e,n){return e?1===t[n]:e}),!0):t}),{}))},status:function(){return this.value}},methods:{saveSettingsHandler:function(){var t=this;this.$emit("save",this.currentSettings),this.closeHandler(),this.$nextTick((function(){t.defaultSettings.clientId="mqtt-tiles-".concat(Math.random().toString(16).substr(2,8)),t.currentSettings=d()({},t.defaultSettings)}))},closeHandler:function(){this.$emit("input",!1),this.$emit("hide")},hostErrorHandler:function(){this.$q.notify({color:"warning",message:"Host must be not empty and only over secured sockets"})},addUserProperty:function(){this.currentSettings.userProperties||this.$set(this.currentSettings,"userProperties",{}),this.$set(this.currentSettings.userProperties,this.userProperty.name,this.userProperty.value),this.userProperty={value:"",name:""}},removeUserProperty:function(t){this.$delete(this.currentSettings.userProperties,t),Object.keys(this.currentSettings.userProperties).length||this.$set(this.currentSettings,"userProperties",null)},flespiLoginHandler:function(){var t=this,e=function e(n){if("string"===typeof n.data&&~n.data.indexOf("FlespiLogin|token:")){var s=n.data;s=s.replace("FlespiLogin|token:",""),s=JSON.parse(s),t.currentSettings.username=s.token,t.currentSettings.host="wss://".concat(s.region["mqtt-ws"]),window.removeEventListener("message",e)}};window.addEventListener("message",e),this.openWindow("https://flespi.io/login/#/providers")},openWindow:function(t,e){e=e||"auth";var n=500,s=600,i=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,o=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=o/2-n/2+i,l=a/2-s/2+r,d=window.open(t,e,"toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width="+n+", height="+s+", top="+l+", left="+c);window.focus&&d.focus()},addSyncCredsItem:function(){this.currentSettings.syncCreds||this.$set(this.currentSettings,"syncCreds",[]),this.currentSettings.syncCreds.push(m()(this.syncCreds))},removeSyncCredsItem:function(t){this.$delete(this.currentSettings.syncCreds,t)},upSyncCredsItem:function(t){var e=this.currentSettings.syncCreds.splice(t,1)[0];this.currentSettings.syncCreds.splice(t-1,0,e)},downSyncCredsItem:function(t){var e=this.currentSettings.syncCreds.splice(t,1)[0];this.currentSettings.syncCreds.splice(t+1,0,e)},checkUniqueSyncCredsValue:function(t,e){var n=!0;return this.currentSettings.syncCreds.map((function(t){return t.credentions.username})).some((function(s,i){var r=s===t.credentions.username;return r&&(n=i===e),r})),n}},watch:{settings:function(t){this.currentSettings=d()({},this.defaultSettings,t)}}},g=h,f=n("2877"),v=Object(f["a"])(g,a,c,!1,null,null,null),b=v.exports,S=n("18d6"),y=n("b047c"),q=n.n(y),C=n("2b0e"),w=n("27ae"),x=n("5a50"),k=n("9224"),I=q()((function(t){S["a"].set(x["c"],t)}),500,{trailing:!0}),_={name:"MyLayout",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,clientSettingsOpened:!1,currentSettings:void 0,clients:{},activeClientId:void 0,editedClientId:void 0,connected:!1,version:k["a"],fullViewMode:!0}},computed:{clientsIds:function(){return Object.keys(this.clients)}},methods:{openSettings:function(){this.clientSettingsOpened=!0},hideSettingsHandler:function(){this.currentSettings=void 0,this.editedClientId=void 0},saveSettingsHandler:function(t){var e=this.editedClientId?this.editedClientId:this.clientsIds.length?parseInt(this.clientsIds[this.clientsIds.length-1])+1:0;C["default"].set(this.clients,e,t)},editClientSettings:function(t){this.currentSettings=this.clients[t],this.editedClientId=t,this.openSettings()},removeClient:function(t){var e=this;this.$q.dialog({title:"Delete client?",message:"Do you really want to delete «".concat(this.clients[t].clientName,"» client?"),color:"grey-9",ok:!0,cancel:!0}).onOk((function(){e.activeClientId===t&&(e.activeClientId=void 0),C["default"].delete(e.clients,t)}))},setActiveClient:function(t){this.activeClientId=t,S["a"].set(x["a"],t)},changeStatus:function(t){this.connected=t},shareHandler:function(t){},clearAttachMode:function(t){this.$q.notify({message:"No boards attached to the connection. Showing all available boards.",timeout:3e3,color:"info",icon:"mdi-link-variant",position:"bottom-left"}),this.$delete(t,"attachedBoards")},changeAttachedBoards:function(t){t.length?this.$set(this.clients[this.activeClientId],"attachedBoards",o()(t)):this.clients[this.activeClientId].attachedBoards&&this.clearAttachMode(this.clients[this.activeClientId])},deleteBoardsHandler:function(t){var e=this;Object.keys(this.clients).forEach((function(n){e.clients[n].attachedBoards&&(e.clients[n].attachedBoards.forEach((function(s,i){t.includes(s)&&e.$delete(e.clients[n].attachedBoards,i)})),e.clients[n].attachedBoards.length||e.clearAttachMode(e.clients[n]))}))},addBoardsHandler:function(t){var e=this;if(!this.activeClientId)return!1;var n=this.clients[this.activeClientId],s=!!n.attachedBoards;s&&this.$q.notify({message:"Attach new board to the connection?",timeout:0,color:"info",icon:"mdi-link-variant",position:"bottom-left",closeBtn:"Close",classes:"text-white",actions:[{label:"Attach",handler:function(){e.$set(e.clients[e.activeClientId],"attachedBoards",[].concat(o()(e.clients[e.activeClientId].attachedBoards),o()(t)))}}]})}},created:function(){var t=this,e=this.$q.sessionStorage.getItem("mqtt-tiles-share");if(this.$route.params.hash||e){this.fullViewMode=!1;var n,s=u();n=this.$route.params.hash?JSON.parse(w["Base64"].decode(this.$route.params.hash)):e,this.$q.sessionStorage.set("mqtt-tiles-share",n),n.host&&(s.host=n.host),s.username=n.token,s.syncNamespace=n.topic,s.syncToRetain=!0,s.flespiBoard=n.boardId,C["default"].set(this.clients,0,s),this.setActiveClient(0)}else{var i=S["a"].getItem(x["c"]),r=S["a"].getItem(x["a"]);if(i){if(this.clients=i,this.$route.params.flespiToken){var o=this.$route.params.flespiToken.replace("FlespiToken ",""),a=this.clientsIds.filter((function(e){var n=t.clients[e].username.replace("FlespiToken ","");return o===n}));if(a.length)r=a[0];else{var c=u();c.username=o;var l=(parseInt(this.clientsIds[this.clientsIds.slice(-1)])+1).toString();C["default"].set(this.clients,l,c),r=l}this.$router.push("/")}r&&this.clients[r]&&this.$nextTick((function(){t.setActiveClient(r)}))}}},watch:{clients:{deep:!0,handler:function(t){this.fullViewMode&&I(t)}}},components:{clientSettings:b}},$=_,P=Object(f["a"])($,s,i,!1,null,null,null);e["default"]=P.exports}}]);