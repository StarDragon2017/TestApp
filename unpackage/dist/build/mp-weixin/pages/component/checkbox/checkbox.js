(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/checkbox/checkbox"],{"35bf":function(e,t,n){"use strict";var a=n("4a98"),u=n.n(a);u.a},"3bab":function(e,t,n){"use strict";n.r(t);var a=n("824a"),u=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=u.a},"4a98":function(e,t,n){},7751:function(e,t,n){"use strict";(function(e){n("b784"),n("921b");a(n("66fd"));var t=a(n("7f78"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7f78":function(e,t,n){"use strict";n.r(t);var a=n("f636"),u=n("3bab");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);n("35bf");var r=n("2877"),o=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},"824a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{checkboxChange:function(e){for(var t=this.items,n=e.detail.value,a=0,u=t.length;a<u;++a){var c=t[a];n.indexOf(c.value)>=0?this.$set(c,"checked",!0):this.$set(c,"checked",!1)}}}};t.default=a},f636:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})}},[["7751","common/runtime","common/vendor"]]]);