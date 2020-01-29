(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{"29b8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=u(n("0794"));function u(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{msg:""}},created:function(){t.$on("cc",this.recive),c.default.$on("cc",this.recive)},beforeDestroy:function(){t.$off("cc",this.recive),c.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=r}).call(this,n("543d")["default"])},"29cb":function(t,e,n){},"75fb":function(t,e,n){"use strict";n.r(e);var c=n("29b8"),u=n.n(c);for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);e["default"]=u.a},"836a":function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u})},e390:function(t,e,n){"use strict";var c=n("29cb"),u=n.n(c);u.a},e762:function(t,e,n){"use strict";n.r(e);var c=n("836a"),u=n("75fb");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("e390");var i=n("2877"),a=Object(i["a"])(u["default"],c["a"],c["b"],!1,null,null,null);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e762"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
