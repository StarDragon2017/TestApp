(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-fav/uni-fav"],{"0b71":function(e,t,n){"use strict";n.r(t);var o=n("ace2"),c=n("aee7");for(var u in c)"default"!==u&&function(e){n.d(t,e,function(){return c[e]})}(u);n("970d");var a=n("2877"),r=Object(a["a"])(c["default"],o["a"],o["b"],!1,null,"f18c9f9a",null);t["default"]=r.exports},"34c8":function(e,t,n){},"970d":function(e,t,n){"use strict";var o=n("34c8"),c=n.n(o);c.a},ace2:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},aee7:function(e,t,n){"use strict";n.r(t);var o=n("d702"),c=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=c.a},d702:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"a34b"))},c={name:"UniFav",components:{uniIcons:o},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){e.report&&(this.checked?e.report("收藏","收藏"):e.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};t.default=c}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-fav/uni-fav-create-component',
    {
        'components/uni-fav/uni-fav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0b71"))
        })
    },
    [['components/uni-fav/uni-fav-create-component']]
]);
