(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],f=0,b=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"root"},o=Object(r["c"])("header",{class:"nav__menu"},[Object(r["c"])("ul",null,[Object(r["c"])("li",null,[Object(r["c"])("a",{href:"#"},"Home")])])],-1),a=Object(r["c"])("hr",null,null,-1),u={href:"#"},l=Object(r["c"])("footer",null,[Object(r["c"])("hr"),Object(r["c"])("ul",null,[Object(r["c"])("li",null,[Object(r["c"])("a",{href:"mailto:idealful@gmail.com"},"Contact me")]),Object(r["c"])("li",null,[Object(r["c"])("a",{href:"https://github.com/idealful/simple-dark-mode",target:"_blank"},"Github")])])],-1);function i(e,t,n,i,s,f){return Object(r["d"])(),Object(r["b"])("div",c,[o,Object(r["c"])("section",null,[a,Object(r["c"])("article",null,[Object(r["c"])("a",u,"Welcome! It's \""+Object(r["e"])(s.base.isScreenDark?"DARK":"LIGHT")+'" mode. ',1),Object(r["c"])("button",{class:"btn",onClick:t[1]||(t[1]=function(e){return f.changeScreenMode()})},"Change")])]),l])}var s={name:"App",data:function(){return{base:{isScreenDark:!1}}},methods:{changeScreenMode:function(){this.base.isScreenDark=!this.base.isScreenDark;var e=document.body;this.base.isScreenDark?e.classList.add("dark"):e.classList.remove("dark")}}};n("cbfd"),n("96e9");s.render=i;var f=s;Object(r["a"])(f).mount("#app")},"6d3d":function(e,t,n){},"96e9":function(e,t,n){"use strict";n("6d3d")},a509:function(e,t,n){},cbfd:function(e,t,n){"use strict";n("a509")}});
//# sourceMappingURL=app.d1f51e14.js.map