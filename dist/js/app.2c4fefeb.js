(function(t){function e(e){for(var a,n,c=e[0],s=e[1],d=e[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,n=1;n<o.length;n++){var s=o[n];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var a={},r={app:0},i=[];function n(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cbe4b4f9"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=r[t]=[e,a]}));e.push(o[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=n(t);var d=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(u);var o=r[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,o[1](d)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(o,a,function(e){return t[e]}.bind(null,a));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=d;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("nav-bar"),o("v-main",[o("router-view")],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{},[a("v-app-bar",{attrs:{color:"#6A76AB",dark:"","shrink-on-scroll":"",prominent:"",src:o("e6a4"),"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3"},scopedSlots:t._u([{key:"img",fn:function(e){var o=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",o,!1))]}},{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":""}},[a("v-tab",{on:{click:t.menuHome}},[t._v("Home")]),a("v-tab",{on:{click:t.menuUsuarios}},[t._v("Usuarios")]),a("v-tab",{on:{click:t.menuProductos}},[t._v("Productos")]),a("v-tab",{on:{click:t.menuVentas}},[t._v("Ventas")])],1)]},proxy:!0}])},[a("v-app-bar-nav-icon",[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-liquor")])],1),a("v-app-title",{staticClass:"mt-2"},[t._v("POSBAR System")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-3","max-height":"600"}})],1)},c=[],s={data:function(){},methods:{menuHome:function(){this.$router.push("/")},menuProductos:function(){this.$router.push("/products")},menuUsuarios:function(){this.$router.push("/users")},menuVentas:function(){this.$router.push("/sales")}}},d=s,u=o("2877"),l=o("6544"),p=o.n(l),m=o("40dc"),v=o("5bc1"),h=o("8336"),f=o("b0af"),b=o("132d"),_=o("adda"),g=o("8dd9"),k=o("2fa4"),x=o("71a3"),y=o("fe57"),V=Object(u["a"])(d,n,c,!1,null,null,null),C=V.exports;p()(V,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VBtn:h["a"],VCard:f["a"],VIcon:b["a"],VImg:_["a"],VSheet:g["a"],VSpacer:k["a"],VTab:x["a"],VTabs:y["a"]});var P={components:{NavBar:C},name:"App",data:function(){return{NavBar:C}}},S=P,w=o("7496"),O=o("f6c4"),j=Object(u["a"])(S,r,i,!1,null,null,null),A=j.exports;p()(j,{VApp:w["a"],VMain:O["a"]});o("d3b7"),o("3ca3"),o("ddb0");var T=o("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",{staticClass:"text-primary"},[t._v(" Sistema de gestión y administración de Bares y Restaurantes ")]),a("img",{staticClass:"img-thumbnail",attrs:{width:"100%",src:o("fbf5")}})])},E=[],$={name:"Home",components:{}},B=$,R=o("a523"),M=Object(u["a"])(B,I,E,!1,null,null,null),N=M.exports;p()(M,{VContainer:R["a"]});o("e6dc");a["a"].use(T["a"]);var U=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/products",name:"Products",component:function(){return o.e("about").then(o.bind(null,"e6dc"))}},{path:"/users",name:"Users",component:function(){return o.e("about").then(o.bind(null,"ed81"))}},{path:"/sales",name:"Sales",component:function(){return o.e("about").then(o.bind(null,"af7c"))}}],D=new T["a"]({mode:"history",base:"/",routes:U}),q=D,F=o("2f62");a["a"].use(F["a"]);var H=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=o("f309");a["a"].use(G["a"]);var L=new G["a"]({}),z=o("bc3a"),J=o.n(z),K=o("130e");a["a"].use(K["a"],J.a),J.a.defaults.baseURL="https://immense-peak-52311.herokuapp.com/",a["a"].config.productionTip=!1,new a["a"]({router:q,store:H,vuetify:L,render:function(t){return t(A)}}).$mount("#app")},e6a4:function(t,e,o){t.exports=o.p+"img/bar_1.96cd93d0.jpg"},e6dc:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.productos,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[o("v-avatar",[o("img",{attrs:{src:"https://immense-peak-52311.herokuapp.com/"+e.image,alt:e.sku}})])]}},{key:"top",fn:function(){return[o("v-col",{attrs:{cols:"12",sm:"12"}},[o("v-text-field",{attrs:{"append-icon":"mdi-magnify-expand",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[t._v("Productos")]),o("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),o("v-spacer"),o("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),a),[t._v(" Crear Producto ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"cyan white--text"},[o("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{staticClass:"mt-4",attrs:{cols:"12"}},[[o("v-row",{attrs:{justify:"space-around"}},[t.editado.image?o("v-avatar",{attrs:{size:"150"}},[o("img",{attrs:{src:"https://immense-peak-52311.herokuapp.com/"+t.editado.image}})]):t._e()],1)]],2),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{"prepend-icon":"mdi-qrcode-scan",label:"SKU"},model:{value:t.editado.sku,callback:function(e){t.$set(t.editado,"sku",e)},expression:"editado.sku"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-select",{attrs:{"prepend-icon":"mdi-alpha-c-circle-outline",items:t.categorias,label:"Seleccione la categoria del producto"},model:{value:t.editado.categoria_producto,callback:function(e){t.$set(t.editado,"categoria_producto",e)},expression:"editado.categoria_producto"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{"prepend-icon":"mdi-alpha-p-circle-outline",label:"Nombre del Producto"},model:{value:t.editado.nombre_producto,callback:function(e){t.$set(t.editado,"nombre_producto",e)},expression:"editado.nombre_producto"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-file-input",{attrs:{label:"Imagen del producto"},on:{change:t.onFileSelected},model:{value:t.editado.image,callback:function(e){t.$set(t.editado,"image",e)},expression:"editado.image"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{"prepend-icon":"mdi-currency-usd",type:"number",step:"1",min:"0",label:"Precio de compra del producto"},model:{value:t.editado.precio_compra_producto,callback:function(e){t.$set(t.editado,"precio_compra_producto",e)},expression:"editado.precio_compra_producto"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{"prepend-icon":"mdi-currency-usd",type:"number",step:"1",min:"0",label:"Precio de venta del producto"},model:{value:t.editado.precio_venta_producto,callback:function(e){t.$set(t.editado,"precio_venta_producto",e)},expression:"editado.precio_venta_producto"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:t.cancelar}},[t._v("Cancelar")]),o("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"teal accent-4"},on:{click:t.guardar}},[t._v("Guardar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[o("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"cyan"},on:{click:function(e){return t.editar(a)}}},[o("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1),o("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(e){return t.borrar(a)}}},[o("v-icon",{attrs:{dark:""}},[t._v("mdi-delete")])],1)]}}])}),[o("div",{staticClass:"text-center ma-2"},[o("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.textSnack)+" "),o("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Cerrar")])],1)],1)]],2)},r=[],i={data:function(){return{image:null,search:"",snackbar:!1,textSnack:"texto snackbar",dialog:!1,headers:[{text:"IMG",value:"image"},{text:"SKU - COD",align:"left",sortable:!0,value:"sku"},{text:"CATEGORIA",value:"categoria_producto"},{text:"NOMBRE",value:"nombre_producto"},{text:"PRECIO COMPRA",value:"precio_compra_producto"},{text:"PRECIO VENTA",value:"precio_venta_producto",sortable:!0},{text:"Acciones",value:"actions",sortable:!1}],productos:[],categorias:["Bebidas calientes","Bebidas frias","Comestible"],editedIndex:-1,editado:{image:null,sku:"",categoria_producto:"",nombre_producto:"",precio_compra_producto:"",precio_venta_producto:""},defaultItem:{image:null,sku:"",categoria_producto:"",nombre_producto:"",precio_compra_producto:"",precio_venta_producto:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}},watch:{dialog:function(t){t||this.cancelar()}},created:function(){this.listarProductos()},methods:{onFileSelected:function(t){console.log(t),this.image=t},listarProductos:function(){var t=this;this.axios.get("/products").then((function(e){t.productos=e.data}))},altaProducto:function(){var t=this,e=new FormData;e.append("image",this.editado.image),e.append("sku",this.editado.sku),e.append("categoria_producto",this.editado.categoria_producto),e.append("nombre_producto",this.editado.nombre_producto),e.append("precio_compra_producto",this.editado.precio_compra_producto),e.append("precio_venta_producto",this.editado.precio_venta_producto),this.axios.post("/products",e).then((function(e){t.listarProductos()})),this.image=null,this.sku="",this.categoria_producto="",this.nombre_producto="",this.precio_compra_producto="",this.precio_venta_producto=""},editarProducto:function(t,e,o,a,r,i,n){var c=this;this.axios.put("/products/".concat(t),{id:t,image:e,sku:o,categoria_producto:a,nombre_producto:r,precio_compra_producto:i,precio_venta_producto:n}).then((function(t){c.listarProductos()}))},borrarProducto:function(t){var e=this;this.axios.delete("/products/".concat(t),{id:t}).then((function(t){e.listarProductos()}))},editar:function(t){this.editedIndex=this.productos.indexOf(t),this.editado=Object.assign({},t),this.dialog=!0},borrar:function(t){var e=this.productos.indexOf(t);console.log(this.productos[e]._id);var o=confirm("¿Está seguro de borrar el registro?");1==o?(this.borrarProducto(this.productos[e]._id),this.snackbar=!0,this.textSnack="Se eliminó el registro."):(this.snackbar=!0,this.textSnack="Operación cancelada.")},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1},guardar:function(){this.editedIndex>-1?(this.id=this.editado.id,this.image=this.editado.image,this.sku=this.editado.sku,this.categoria_producto=this.editado.categoria_producto,this.nombre_producto=this.editado.nombre_producto,this.precio_compra_producto=this.editado.precio_compra_producto,this.precio_venta_producto=this.editado.precio_venta_producto,this.snackbar=!0,this.textSnack="¡Actualización Exitosa!",this.editarProducto(this.id,this.image,this.sku,this.categoria_producto,this.nombre_producto,this.precio_compra_producto,this.precio_venta_producto)):""==this.editado.sku||null==this.editado.image||""==this.editado.categoria_producto||""==this.editado.nombre_producto||""==this.editado.precio_compra_producto||""==this.editado.precio_venta_producto?(this.snackbar=!0,this.textSnack="Datos incompletos."):(this.sku=this.editado.sku,this.image=this.editado.image,this.categoria_producto=this.editado.categoria_producto,this.nombre_producto=this.editado.nombre_producto,this.precio_compra_producto=this.editado.precio_compra_producto,this.precio_venta_producto=this.editado.precio_venta_producto,this.snackbar=!0,this.textSnack="¡Alta exitosa!",this.altaProducto()),this.cancelar()}}},n=i,c=o("2877"),s=o("6544"),d=o.n(s),u=o("8212"),l=o("8336"),p=o("b0af"),m=o("99d9"),v=o("62ad"),h=o("a523"),f=o("8fea"),b=o("169a"),_=o("ce7e"),g=o("23a7"),k=o("132d"),x=o("0fd9"),y=o("b974"),V=o("2db4"),C=o("2fa4"),P=o("8654"),S=o("71d9"),w=o("2a7f"),O=Object(c["a"])(n,a,r,!1,null,null,null);e["default"]=O.exports;d()(O,{VAvatar:u["a"],VBtn:l["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:v["a"],VContainer:h["a"],VDataTable:f["a"],VDialog:b["a"],VDivider:_["a"],VFileInput:g["a"],VIcon:k["a"],VRow:x["a"],VSelect:y["a"],VSnackbar:V["a"],VSpacer:C["a"],VTextField:P["a"],VToolbar:S["a"],VToolbarTitle:w["a"]})},fbf5:function(t,e,o){t.exports=o.p+"img/home.d30cc8c8.png"}});
//# sourceMappingURL=app.2c4fefeb.js.map