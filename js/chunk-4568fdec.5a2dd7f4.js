(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4568fdec"],{"27b5":function(e,t,n){"use strict";n("27e7")},"27e7":function(e,t,n){},3573:function(e,t,n){"use strict";var a=n("7a23"),c=function(e){return Object(a["M"])("data-v-73a3e5c4"),e=e(),Object(a["K"])(),e},r={class:"page-content"},o=c((function(){return Object(a["m"])("span",{style:{"vertical-align":"middle"}}," 刷新 ",-1)})),i=Object(a["o"])("新建数据"),l={class:"hander-btns"},u=Object(a["o"])("编辑"),s=Object(a["o"])("删除");function b(e,t,n,c,b,p){var d=Object(a["S"])("refresh"),f=Object(a["S"])("el-icon"),j=Object(a["S"])("el-button"),O=Object(a["S"])("lx-table");return Object(a["J"])(),Object(a["l"])("div",r,[Object(a["p"])(O,Object(a["x"])({listData:e.listData},e.contentTableConfig,{listCount:e.dataCount,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=function(t){return e.pageInfo=t})}),Object(a["n"])({handerHandler:Object(a["hb"])((function(){return[Object(a["p"])(j,{size:"medium"},{default:Object(a["hb"])((function(){return[Object(a["p"])(f,{style:{"vertical-align":"middle"}},{default:Object(a["hb"])((function(){return[Object(a["p"])(d)]})),_:1}),o]})),_:1}),e.isCreate?(Object(a["J"])(),Object(a["j"])(j,{key:0,size:"medium",type:"primary",onClick:e.handleNewClick},{default:Object(a["hb"])((function(){return[i]})),_:1},8,["onClick"])):Object(a["k"])("",!0)]})),createAt:Object(a["hb"])((function(t){return[Object(a["m"])("span",null,Object(a["W"])(e.$filters.formatTime(t.row.createAt)),1)]})),updateAt:Object(a["hb"])((function(t){return[Object(a["m"])("span",null,Object(a["W"])(e.$filters.formatTime(t.row.updateAt)),1)]})),handler:Object(a["hb"])((function(t){return[Object(a["m"])("div",l,[e.isUpdate?(Object(a["J"])(),Object(a["j"])(j,{key:0,size:"mini",type:"text",icon:"el-icon-edit",onClick:function(n){return e.handleEditClick(t.row)}},{default:Object(a["hb"])((function(){return[u]})),_:2},1032,["onClick"])):Object(a["k"])("",!0),e.isDelete?(Object(a["J"])(),Object(a["j"])(j,{key:1,size:"mini",type:"text",icon:"el-icon-delete",style:{color:"red"},onClick:function(n){return e.handleDeleteClick(t.row)}},{default:Object(a["hb"])((function(){return[s]})),_:2},1032,["onClick"])):Object(a["k"])("",!0)])]})),_:2},[Object(a["Q"])(e.otherPropSlots,(function(t){return{name:t.slotName,fn:Object(a["hb"])((function(n){return[t.slotName?Object(a["R"])(e.$slots,t.slotName,{key:0,row:n.row},void 0,!0):Object(a["k"])("",!0)]}))}}))]),1040,["listData","listCount","page"])])}var p=n("5530"),d=(n("4de4"),n("0613"));n("99af"),n("7db0");function f(e,t){var n=Object(d["c"])(),a=n.state.loginModule.permissions,c="system:".concat(e,":").concat(t);return!!a.find((function(e){return e===c}))}var j={class:"lx-table"},O={class:"header"},g={class:"title"},h={class:"handler"},m={key:0,class:"footer"};function C(e,t,n,c,r,o){var i=Object(a["S"])("el-table-column"),l=Object(a["S"])("el-table"),u=Object(a["S"])("el-pagination");return Object(a["J"])(),Object(a["l"])("div",j,[Object(a["m"])("div",O,[Object(a["R"])(e.$slots,"header",{},(function(){return[Object(a["m"])("div",g,Object(a["W"])(e.title),1),Object(a["m"])("div",h,[Object(a["R"])(e.$slots,"handerHandler",{},void 0,!0)])]}),!0)]),Object(a["p"])(l,Object(a["x"])({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:Object(a["hb"])((function(){return[e.showSelectColum?(Object(a["J"])(),Object(a["j"])(i,{key:0,type:"selection",align:"center",width:"60"})):Object(a["k"])("",!0),e.showIndexColumn?(Object(a["J"])(),Object(a["j"])(i,{key:1,type:"index",label:"序号",align:"center",width:"60"})):Object(a["k"])("",!0),(Object(a["J"])(!0),Object(a["l"])(a["b"],null,Object(a["Q"])(e.propList,(function(t){return Object(a["J"])(),Object(a["j"])(i,Object(a["x"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(a["hb"])((function(n){return[Object(a["R"])(e.$slots,t.slotName,{row:n.row},(function(){return[Object(a["o"])(Object(a["W"])(n.row[t.prop]),1)]}),!0)]})),_:2},1040)})),128))]})),_:3},16,["data","onSelectionChange"]),e.showFooter?(Object(a["J"])(),Object(a["l"])("div",m,[Object(a["R"])(e.$slots,"footer",{},(function(){return[Object(a["p"])(u,{"current-page":e.page.currentPage,"page-size":e.page.pageSize,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:e.listCount,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]}),!0)])):Object(a["k"])("",!0)])}n("a9e3");var v=Object(a["q"])({props:{title:{type:String,default:""},listData:{type:Array,required:!0},listCount:{type:Number,default:0},propList:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectColum:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},page:{type:Object,default:function(){return{currentPage:0,pageSize:10}}},childrenProps:{type:Object,default:function(){return{}}}},emits:["selectionChange","update:page"],setup:function(e,t){var n=t.emit,a=function(e){n("selectionChange",e)},c=function(t){n("update:page",Object(p["a"])(Object(p["a"])({},e.page),{},{pageSize:t}))},r=function(t){n("update:page",Object(p["a"])(Object(p["a"])({},e.page),{},{currentPage:t}))};return{handleSelectionChange:a,handleSizeChange:c,handleCurrentChange:r}}});n("47d0");v.render=C,v.__scopeId="data-v-700d4772";var y=v,N=y,S=Object(a["q"])({props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},components:{LxTable:N},emits:["newBtnClick","editBtnClick"],setup:function(e,t){var n,c=t.emit,r=Object(d["c"])(),o=f(e.pageName,"create"),i=f(e.pageName,"delete"),l=f(e.pageName,"update"),u=f(e.pageName,"query"),s=Object(a["O"])({currentPage:1,pageSize:10});Object(a["fb"])(s,(function(){return b()}));var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u&&r.dispatch("systemModule/getPageListAction",{pageName:e.pageName,queryInfo:Object(p["a"])({offset:(s.value.currentPage-1)*s.value.pageSize,size:s.value.pageSize},t)})};b();var j=Object(a["h"])((function(){return r.getters["systemModule/pageListData"](e.pageName)})),O=Object(a["h"])((function(){return r.getters["systemModule/pageListCount"](e.pageName)})),g=null===(n=e.contentTableConfig)||void 0===n?void 0:n.propList.filter((function(e){return"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName)})),h=function(t){console.log(t),r.dispatch("systemModule/deletePageDataAction",{pageName:e.pageName,id:t.id})},m=function(){c("newBtnClick")},C=function(e){c("editBtnClick",e)};return{pageInfo:s,listData:j,dataCount:O,getPageData:b,otherPropSlots:g,isCreate:o,isDelete:i,isUpdate:l,handleDeleteClick:h,handleNewClick:m,handleEditClick:C}}});n("27b5");S.render=b,S.__scopeId="data-v-73a3e5c4";var k=S;t["a"]=k},"47d0":function(e,t,n){"use strict";n("72ae")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),c=n("577e"),r=n("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(e){return function(t){var n=c(a(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,n){var a=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var r,o;return c&&"function"==typeof(r=t.constructor)&&r!==n&&a(o=r.prototype)&&o!==n.prototype&&c(e,o),e}},"72ae":function(e,t,n){},a9e3:function(e,t,n){"use strict";var a=n("83ab"),c=n("da84"),r=n("94ca"),o=n("6eeb"),i=n("5135"),l=n("c6b6"),u=n("7156"),s=n("d9b5"),b=n("c04e"),p=n("d039"),d=n("7c73"),f=n("241c").f,j=n("06cf").f,O=n("9bf2").f,g=n("58a8").trim,h="Number",m=c[h],C=m.prototype,v=l(d(C))==h,y=function(e){if(s(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,a,c,r,o,i,l,u=b(e,"number");if("string"==typeof u&&u.length>2)if(u=g(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+u}for(r=u.slice(2),o=r.length,i=0;i<o;i++)if(l=r.charCodeAt(i),l<48||l>c)return NaN;return parseInt(r,a)}return+u};if(r(h,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(v?p((function(){C.valueOf.call(n)})):l(n)!=h)?u(new m(y(t)),n,S):y(t)},k=a?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;k.length>w;w++)i(m,N=k[w])&&!i(S,N)&&O(S,N,j(m,N));S.prototype=C,C.constructor=S,o(c,h,S)}},f3e6:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"list"};function r(e,t,n,r,o,i){var l=Object(a["S"])("page-content");return Object(a["J"])(),Object(a["l"])("div",c,[Object(a["p"])(l,{contentTableConfig:e.contentTableConfig,pageName:"story"},null,8,["contentTableConfig"])])}var o=n("0613"),i=n("3573"),l={title:"故事列表",propList:[{prop:"title",label:"故事标题",minWidth:"120"},{prop:"content",label:"我的故事",minWidth:"500"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"create"}],showIndexColumn:!0,showSelectColumn:!1},u=Object(a["q"])({name:"list",components:{PageContent:i["a"]},setup:function(){var e=Object(o["c"])();return e.dispatch("listModule/getStoryDataAction"),{contentTableConfig:l}}});u.render=r;t["default"]=u}}]);
//# sourceMappingURL=chunk-4568fdec.5a2dd7f4.js.map