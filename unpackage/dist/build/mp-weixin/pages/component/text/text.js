(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/text/text"],{1932:function(t,e,n){"use strict";var i=n("b18c"),a=n.n(i);a.a},"261a":function(t,e,n){"use strict";n.r(e);var i=n("8209"),a=n("52e0");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("1932");var r=n("2877"),o=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"52e0":function(t,e,n){"use strict";n.r(e);var i=n("5ff3"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a},"5ff3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"text",texts:["HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","......"],text:"",canAdd:!0,canRemove:!1,extraLine:[]}},methods:{add:function(t){this.extraLine.push(this.texts[this.extraLine.length%12]),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0},remove:function(t){this.extraLine.length>0&&(this.extraLine.pop(),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0)}}};e.default=i},8209:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a5fb:function(t,e,n){"use strict";(function(t){n("b784"),n("921b");i(n("66fd"));var e=i(n("261a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b18c:function(t,e,n){}},[["a5fb","common/runtime","common/vendor"]]]);