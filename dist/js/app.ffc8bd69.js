(function(t){function e(e){for(var r,o,c=e[0],u=e[1],l=e[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/captcha/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0569":function(t,e,n){},"16fa":function(t,e,n){"use strict";var r=n("715b"),a=n.n(r);a.a},3115:function(t,e,n){"use strict";var r=n("c758"),a=n.n(r);a.a},4971:function(t,e,n){"use strict";var r=n("0569"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{title:"Captcha"}}),n("Instruction",{attrs:{userNotification:t.userNotification}}),n("CaptchaImages",{attrs:{images:t.images},on:{"img-clicked":t.clickHandler}}),n("CheckImages",{on:{verify:t.verifyHandler}})],1)},i=[],o=(n("a623"),n("c975"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v(t._s(t.title))])])}),c=[],u={name:"Header",props:["title"]},l=u,s=n("2877"),f=Object(s["a"])(l,o,c,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery"},t._l(t.images,(function(e){return n("CaptchaImage",{key:e.id,attrs:{category:e.category,src:e.src},on:{"img-clicked":function(n){return t.$emit("img-clicked",e)}}})})),1)},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.src,alt:t.category},on:{click:function(e){return t.$emit("img-clicked")}}})},g=[],v={name:"CaptchaImage",props:["src","category"]},y=v,b=(n("3115"),Object(s["a"])(y,h,g,!1,null,"147d09c0",null)),_=b.exports,C={name:"CaptchaImages",props:["images"],components:{CaptchaImage:_}},O=C,k=(n("16fa"),Object(s["a"])(O,d,m,!1,null,"e9ef00c0",null)),j=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v(t._s(t.userNotification))])},x=[],I={name:"Instruction",props:["userNotification"]},$=I,M=Object(s["a"])($,w,x,!1,null,null,null),P=M.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return t.$emit("verify")}}},[t._v("Verify")])},H=[],E={name:"CheckImages"},S=E,T=(n("4971"),Object(s["a"])(S,N,H,!1,null,"d508e7d8",null)),J=T.exports,U=(n("99af"),n("4de4"),["tree","cat","dog","bird","car","train","cow"]);function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=U.filter((function(e){return e!==t}));return e[B(e.length)]}function q(t){for(var e=t.number,n=t.validCategory,r=t.invalidCategory,a=[],i=0;i<e;i++)Math.random()<.5?a.push(z(n)):a.push(z(r));return a}function z(t){var e=A();return{id:e,category:t,src:"https://loremflickr.com/100/100/".concat(t,"?random=").concat(e)}}var A=function(){var t=0;return function(){return t++}}();function B(t){return t=Math.floor(t),Math.floor(Math.random()*t)}var D={name:"app",components:{Header:p,CaptchaImages:j,Instruction:P,CheckImages:J},data:function(){var t=V(),e=V(t),n='Please select all images with "'.concat(t,'" symbol.');return{validCategory:t,invalidCategory:e,userNotification:n,images:q({number:16,validCategory:t,invalidCategory:e})}},methods:{clickHandler:function(t){var e=Math.random()<.5?this.validCategory:this.invalidCategory,n=z(e);this.images.splice(this.images.indexOf(t),1,n)},verifyHandler:function(){var t=this;this.images.every((function(e){return e.category===t.invalidCategory}))?this.userNotification="Congratulation!!!":(this.userNotification='Unfortunatelly there are more images with "'.concat(this.validCategory,'".'),setTimeout((function(){t.userNotification='Please select all images with "'.concat(t.validCategory,'" symbol.')}),2e3))}}},F=D,G=(n("034f"),Object(s["a"])(F,a,i,!1,null,null,null)),K=G.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(K)}}).$mount("#app")},"715b":function(t,e,n){},"85ec":function(t,e,n){},c758:function(t,e,n){}});
//# sourceMappingURL=app.ffc8bd69.js.map