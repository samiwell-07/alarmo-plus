var AlarmoCard=function(t){"use strict";function e(t,e,i,a){var s,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=Array(e);i<e;i++)a[i]=t[i];return a}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e,i,a,s,o,n){try{var r=t[o](n),l=r.value}catch(t){return void i(t)}r.done?e(l):Promise.resolve(l).then(a,s)}function o(t,e,i){return e=u(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}(t,_()?Reflect.construct(e,i||[],u(t).constructor):e.apply(t,i))}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,w(a.key),a)}}function l(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=x(t))||e){i&&(t=i);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return n=t.done,t},e:function(t){r=!0,o=t},f:function(){try{n||null==i.return||i.return()}finally{if(r)throw o}}}}function c(t,e,i){return(e=w(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,i){var a=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(a){var s=Object.getOwnPropertyDescriptor(a,e);return s.get?s.get.call(arguments.length<3?t:i):s.value}},h.apply(null,arguments)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}function _(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_=function(){return!!t})()}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach(function(e){c(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function v(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var t,e,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.toStringTag||"@@toStringTag";function o(i,a,s,o){var l=a&&a.prototype instanceof r?a:r,d=Object.create(l.prototype);return f(d,"_invoke",function(i,a,s){var o,r,l,d=0,c=s||[],h=!1,u={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,i){return o=e,r=0,l=t,u.n=i,n}};function p(i,a){for(r=i,l=a,e=0;!h&&d&&!s&&e<c.length;e++){var s,o=c[e],p=u.p,_=o[2];i>3?(s=_===a)&&(l=o[(r=o[4])?5:(r=3,3)],o[4]=o[5]=t):o[0]<=p&&((s=i<2&&p<o[1])?(r=0,u.v=a,u.n=o[1]):p<_&&(s=i<3||o[0]>a||a>_)&&(o[4]=i,o[5]=a,u.n=_,r=0))}if(s||i>1)return n;throw h=!0,a}return function(s,c,_){if(d>1)throw TypeError("Generator is already running");for(h&&1===c&&p(c,_),r=c,l=_;(e=r<2?t:l)||!h;){o||(r?r<3?(r>1&&(u.n=-1),p(r,l)):u.n=l:u.v=l);try{if(d=2,o){if(r||(s="next"),e=o[s]){if(!(e=e.call(o,l)))throw TypeError("iterator result is not an object");if(!e.done)return e;l=e.value,r<2&&(r=0)}else 1===r&&(e=o.return)&&e.call(o),r<2&&(l=TypeError("The iterator does not provide a '"+s+"' method"),r=1);o=t}else if((e=(h=u.n<0)?l:i.call(a,u))!==n)break}catch(e){o=t,r=1,l=e}finally{d=1}}return{value:e,done:h}}}(i,s,o),!0),d}var n={};function r(){}function l(){}function d(){}e=Object.getPrototypeOf;var c=[][a]?e(e([][a]())):(f(e={},a,function(){return this}),e),h=d.prototype=r.prototype=Object.create(c);function u(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,f(t,s,"GeneratorFunction")),t.prototype=Object.create(h),t}return l.prototype=d,f(h,"constructor",d),f(d,"constructor",l),l.displayName="GeneratorFunction",f(d,s,"GeneratorFunction"),f(h),f(h,s,"Generator"),f(h,a,function(){return this}),f(h,"toString",function(){return"[object Generator]"}),(v=function(){return{w:o,m:u}})()}function f(t,e,i,a){var s=Object.defineProperty;try{s({},"",{})}catch(t){s=0}f=function(t,e,i,a){function o(e,i){f(t,e,function(t){return this._invoke(e,i,t)})}e?s?s(t,e,{value:i,enumerable:!a,configurable:!a,writable:!a}):t[e]=i:(o("next",0),o("throw",1),o("return",2))},f(t,e,i,a)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var a,s,o,n,r=[],l=!0,d=!1;try{if(o=(i=i.call(t)).next,0===e);else for(;!(l=(a=o.call(i)).done)&&(r.push(a.value),r.length!==e);l=!0);}catch(t){d=!0,s=t}finally{try{if(!l&&null!=i.return&&(n=i.return(),Object(n)!==n))return}finally{if(d)throw s}}return r}}(t,e)||x(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e,i,a){var s=h(u(t.prototype),e,i);return 2&a&&"function"==typeof s?function(t){return s.apply(i,t)}:s}function k(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i;if("undefined"!=typeof Symbol&&void 0!==(i=t[Symbol.toPrimitive])){var a=i.call(t,e);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:e+""}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function x(t,e){if(t){if("string"==typeof t)return i(t,e);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}function C(t){var e="function"==typeof Map?new Map:void 0;return C=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return function(t,e,i){if(_())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,e);var s=new(t.bind.apply(t,a));return i&&b(s,i.prototype),s}(t,arguments,u(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),b(i,t)},C(t)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var S,O,E,z=globalThis,j=z.ShadowRoot&&(void 0===z.ShadyCSS||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),L=new WeakMap,M=function(){return l(function t(e,i,a){if(n(this,t),this._$cssResult$=!0,a!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i},[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(j&&void 0===t){var i=void 0!==e&&1===e.length;i&&(t=L.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&L.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}])}(),P=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var s=1===t.length?t[0]:i.reduce(function(e,i,a){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+t[a+1]},t[0]);return new M(s,t,T)},I=j?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,i="",a=d(t.cssRules);try{for(a.s();!(e=a.n()).done;){i+=e.value.cssText}}catch(t){a.e(t)}finally{a.f()}return function(t){return new M("string"==typeof t?t:t+"",void 0,T)}(i)}(t):t},H=Object.is,N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,q=globalThis,V=q.trustedTypes,W=V?V.emptyScript:"",F=q.reactiveElementPolyfillSupport,Z=function(t,e){return t},G={toAttribute:function(t,e){switch(e){case Boolean:t=t?W:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Q=function(t,e){return!H(t,e)},K={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:Q};null!==(S=Symbol.metadata)&&void 0!==S||(Symbol.metadata=Symbol("metadata")),null!==(O=q.litPropertyMetadata)&&void 0!==O||(q.litPropertyMetadata=new WeakMap);var J,Y=function(t){function e(){var t;return n(this,e),(t=o(this,e))._$Ep=void 0,t.isUpdatePending=!1,t.hasUpdated=!1,t._$Em=null,t._$Ev(),t}return p(e,t),l(e,[{key:"_$Ev",value:function(){var t,e=this;this._$ES=new Promise(function(t){return e.enableUpdating=t}),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(function(t){return t(e)})}},{key:"addController",value:function(t){var e,i;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}},{key:"_$E_",value:function(){var t,e=new Map,i=d(this.constructor.elementProperties.keys());try{for(i.s();!(t=i.n()).done;){var a=t.value;this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a])}}catch(t){i.e(t)}finally{i.f()}e.size>0&&(this._$Ep=e)}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){if(j)t.adoptedStyleSheets=e.map(function(t){return t instanceof CSSStyleSheet?t:t.styleSheet});else{var i,a=d(e);try{for(a.s();!(i=a.n()).done;){var s=i.value,o=document.createElement("style"),n=z.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=s.cssText,t.appendChild(o)}}catch(t){a.e(t)}finally{a.f()}}}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach(function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$EO)||void 0===t||t.forEach(function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}},{key:"attributeChangedCallback",value:function(t,e,i){this._$AK(t,i)}},{key:"_$ET",value:function(t,e){var i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){var s,o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:G).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}},{key:"_$AK",value:function(t,e){var i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){var s,o,n,r=i.getPropertyOptions(a),l="function"==typeof r.converter?{fromAttribute:r.converter}:void 0!==(null===(s=r.converter)||void 0===s?void 0:s.fromAttribute)?r.converter:G;this._$Em=a;var d=l.fromAttribute(e,r.type);this[a]=null!==(o=null!=d?d:null===(n=this._$Ej)||void 0===n?void 0:n.get(a))&&void 0!==o?o:d,this._$Em=null}}},{key:"requestUpdate",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;if(void 0!==t){var o,n,r=this.constructor;if(!1===a&&(s=this[t]),null!=i||(i=r.getPropertyOptions(t)),!((null!==(o=i.hasChanged)&&void 0!==o?o:Q)(s,e)||i.useDefault&&i.reflect&&s===(null===(n=this._$Ej)||void 0===n?void 0:n.get(t))&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}},{key:"C",value:function(t,e,i,a){var s,o,n,r=i.useDefault,l=i.reflect,d=i.wrapped;r&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,null!==(o=null!=a?a:e)&&void 0!==o?o:this[t]),!0!==d||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===l&&this._$Em!==t&&(null!==(n=this._$Eq)&&void 0!==n?n:this._$Eq=new Set).add(t))}},{key:"_$EP",value:(i=function(t){return function(){var e=this,i=arguments;return new Promise(function(a,o){var n=t.apply(e,i);function r(t){s(n,a,o,r,l,"next",t)}function l(t){s(n,a,o,r,l,"throw",t)}r(void 0)})}}(v().m(function t(){var e,i;return v().w(function(t){for(;;)switch(t.p=t.n){case 0:return this.isUpdatePending=!0,t.p=1,t.n=2,this._$ES;case 2:t.n=4;break;case 3:t.p=3,i=t.v,Promise.reject(i);case 4:if(null==(e=this.scheduleUpdate())){t.n=5;break}return t.n=5,e;case 5:return t.a(2,!this.isUpdatePending)}},t,this,[[1,3]])})),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){var e,i=d(this._$Ep);try{for(i.s();!(e=i.n()).done;){var a=y(e.value,2),s=a[0],o=a[1];this[s]=o}}catch(t){i.e(t)}finally{i.f()}this._$Ep=void 0}var n=this.constructor.elementProperties;if(n.size>0){var r,l=d(n);try{for(l.s();!(r=l.n()).done;){var c=y(r.value,2),h=c[0],u=c[1],p=u.wrapped,_=this[h];!0!==p||this._$AL.has(h)||void 0===_||this.C(h,void 0,u,_)}}catch(t){l.e(t)}finally{l.f()}}}var m=!1,g=this._$AL;try{var v;(m=this.shouldUpdate(g))?(this.willUpdate(g),null!==(v=this._$EO)&&void 0!==v&&v.forEach(function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(g)):this._$EM()}catch(g){throw m=!1,this._$EM(),g}m&&this._$AE(g)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null!==(e=this._$EO)&&void 0!==e&&e.forEach(function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$EM",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;this._$Eq&&(this._$Eq=this._$Eq.forEach(function(t){return e._$ET(t,e[t])})),this._$EM()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&k(this._$Eh.keys())}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&N(this.prototype,t,a)}}},{key:"getPropertyDescriptor",value:function(t,e,i){var a,s=null!==(a=R(this.prototype,t))&&void 0!==a?a:{get:function(){return this[e]},set:function(t){this[e]=t}},o=s.get,n=s.set;return{get:o,set:function(e){var a=null==o?void 0:o.call(this);null!=n&&n.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:K}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(Z("elementProperties"))){var t=B(this);t.finalize(),void 0!==t.l&&(this.l=k(t.l)),this.elementProperties=new Map(t.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(Z("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){var t,e=this.properties,i=d([].concat(k(D(e)),k(U(e))));try{for(i.s();!(t=i.n()).done;){var a=t.value;this.createProperty(a,e[a])}}catch(t){i.e(t)}finally{i.f()}}var s=this[Symbol.metadata];if(null!==s){var o=litPropertyMetadata.get(s);if(void 0!==o){var n,r=d(o);try{for(r.s();!(n=r.n()).done;){var l=y(n.value,2),c=l[0],h=l[1];this.elementProperties.set(c,h)}}catch(t){r.e(t)}finally{r.f()}}}this._$Eh=new Map;var u,p=d(this.elementProperties);try{for(p.s();!(u=p.n()).done;){var _=y(u.value,2),m=_[0],g=_[1],v=this._$Eu(m,g);void 0!==v&&this._$Eh.set(v,m)}}catch(t){p.e(t)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var i,a=d(new Set(t.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var s=i.value;e.unshift(I(s))}}catch(t){a.e(t)}finally{a.f()}}else void 0!==t&&e.push(I(t));return e}},{key:"_$Eu",value:function(t,e){var i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}}]);var i}(C(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Z("elementProperties")]=new Map,Y[Z("finalized")]=new Map,null!=F&&F({ReactiveElement:Y}),(null!==(E=q.reactiveElementVersions)&&void 0!==E?E:q.reactiveElementVersions=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var X=globalThis,tt=X.trustedTypes,et=tt?tt.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,it="$lit$",at="lit$".concat(Math.random().toFixed(9).slice(2),"$"),st="?"+at,ot="<".concat(st,">"),nt=document,rt=function(){return nt.createComment("")},lt=function(t){return null===t||"object"!=A(t)&&"function"!=typeof t},dt=Array.isArray,ct="[ \t\n\f\r]",ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,pt=/>/g,_t=RegExp(">|".concat(ct,"(?:([^\\s\"'>=/]+)(").concat(ct,"*=").concat(ct,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),mt=/'/g,gt=/"/g,vt=/^(?:script|style|textarea|title)$/i,ft=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),yt=new WeakMap,$t=nt.createTreeWalker(nt,129);function kt(t,e){if(!dt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==et?et.createHTML(e):e}var wt=function(){return l(function t(e,i){var a,s=e.strings,o=e._$litType$;n(this,t),this.parts=[];var r=0,l=0,c=s.length-1,h=this.parts,u=function(t,e){for(var i,a=t.length-1,s=[],o=2===e?"<svg>":3===e?"<math>":"",n=ht,r=0;r<a;r++){for(var l=t[r],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(n.lastIndex=u,null!==(c=n.exec(l)));)u=n.lastIndex,n===ht?"!--"===c[1]?n=ut:void 0!==c[1]?n=pt:void 0!==c[2]?(vt.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=_t):void 0!==c[3]&&(n=_t):n===_t?">"===c[0]?(n=null!=i?i:ht,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=void 0===c[3]?_t:'"'===c[3]?gt:mt):n===gt||n===mt?n=_t:n===ut||n===pt?n=ht:(n=_t,i=void 0);var p=n===_t&&t[r+1].startsWith("/>")?" ":"";o+=n===ht?l+ot:h>=0?(s.push(d),l.slice(0,h)+it+l.slice(h)+at+p):l+at+(-2===h?r:p)}return[kt(t,o+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]}(s,o),p=y(u,2),_=p[0],m=p[1];if(this.el=t.createElement(_,i),$t.currentNode=this.el.content,2===o||3===o){var g=this.el.content.firstChild;g.replaceWith.apply(g,k(g.childNodes))}for(;null!==(a=$t.nextNode())&&h.length<c;){if(1===a.nodeType){if(a.hasAttributes()){var v,f=d(a.getAttributeNames());try{for(f.s();!(v=f.n()).done;){var b=v.value;if(b.endsWith(it)){var $=m[l++],w=a.getAttribute(b).split(at),A=/([.?@])?(.*)/.exec($);h.push({type:1,index:r,name:A[2],strings:w,ctor:"."===A[1]?Et:"?"===A[1]?zt:"@"===A[1]?jt:Ot}),a.removeAttribute(b)}else b.startsWith(at)&&(h.push({type:6,index:r}),a.removeAttribute(b))}}catch(t){f.e(t)}finally{f.f()}}if(vt.test(a.tagName)){var x=a.textContent.split(at),C=x.length-1;if(C>0){a.textContent=tt?tt.emptyScript:"";for(var S=0;S<C;S++)a.append(x[S],rt()),$t.nextNode(),h.push({type:2,index:++r});a.append(x[C],rt())}}}else if(8===a.nodeType)if(a.data===st)h.push({type:2,index:r});else for(var O=-1;-1!==(O=a.data.indexOf(at,O+1));)h.push({type:7,index:r}),O+=at.length-1;r++}},null,[{key:"createElement",value:function(t,e){var i=nt.createElement("template");return i.innerHTML=t,i}}])}();function At(t,e){var i,a,s,o,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,l=arguments.length>3?arguments[3]:void 0;if(e===ft)return e;var d=void 0!==l?null===(i=r._$Co)||void 0===i?void 0:i[l]:r._$Cl,c=lt(e)?void 0:e._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(s=d)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===c?d=void 0:(d=new c(t))._$AT(t,r,l),void 0!==l?(null!==(n=r._$Co)&&void 0!==n?n:r._$Co=[])[l]=d:r._$Cl=d),void 0!==d&&(e=At(t,d._$AS(t,e.values),d,l)),e}var xt,Ct=function(){return l(function t(e,i){n(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,a=i.el.content,s=i.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:nt).importNode(a,!0);$t.currentNode=o;for(var n=$t.nextNode(),r=0,l=0,d=s[0];void 0!==d;){var c;if(r===d.index){var h=void 0;2===d.type?h=new St(n,n.nextSibling,this,t):1===d.type?h=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(h=new Tt(n,this,t)),this._$AV.push(h),d=s[++l]}r!==(null===(c=d)||void 0===c?void 0:c.index)&&(n=$t.nextNode(),r++)}return $t.currentNode=nt,o}},{key:"p",value:function(t){var e,i=0,a=d(this._$AV);try{for(a.s();!(e=a.n()).done;){var s=e.value;void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}catch(t){a.e(t)}finally{a.f()}}}])}(),St=function(){function t(e,i,a,s){var o;n(this,t),this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}return l(t,[{key:"_$AU",get:function(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t,e=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=At(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),lt(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==ft&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):function(t){return dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.k(t):this._(t)}},{key:"O",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"_",value:function(t){this._$AH!==bt&&lt(this._$AH)?this._$AA.nextSibling.data=t:this.T(nt.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,a=t._$litType$,s="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=wt.createElement(kt(a.h,a.h[0]),this.options)),a);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{var o=new Ct(s,this),n=o.u(this.options);o.p(i),this.T(n),this._$AH=o}}},{key:"_$AC",value:function(t){var e=yt.get(t.strings);return void 0===e&&yt.set(t.strings,e=new wt(t)),e}},{key:"k",value:function(e){dt(this._$AH)||(this._$AH=[],this._$AR());var i,a,s=this._$AH,o=0,n=d(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;o===s.length?s.push(i=new t(this.O(rt()),this.O(rt()),this,this.options)):i=s[o],i._$AI(r),o++}}catch(t){n.e(t)}finally{n.f()}o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}},{key:"_$AR",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t!==this._$AB;){var i,a=t.nextSibling;t.remove(),t=a}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),Ot=function(){return l(function t(e,i,a,s,o){n(this,t),this.type=1,this._$AH=bt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=bt},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=this.strings,o=!1;if(void 0===s)t=At(this,t,e,0),(o=!lt(t)||t!==this._$AH&&t!==ft)&&(this._$AH=t);else{var n,r,l=t;for(t=s[0],n=0;n<s.length-1;n++)(r=At(this,l[i+n],e,n))===ft&&(r=this._$AH[n]),o||(o=!lt(r)||r!==this._$AH[n]),r===bt?t=bt:t!==bt&&(t+=(null!=r?r:"")+s[n+1]),this._$AH[n]=r}o&&!a&&this.j(t)}},{key:"j",value:function(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),Et=function(t){function e(){var t;return n(this,e),(t=o(this,e,arguments)).type=3,t}return p(e,t),l(e,[{key:"j",value:function(t){this.element[this.name]=t===bt?void 0:t}}])}(Ot),zt=function(t){function e(){var t;return n(this,e),(t=o(this,e,arguments)).type=4,t}return p(e,t),l(e,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==bt)}}])}(Ot),jt=function(t){function e(t,i,a,s,r){var l;return n(this,e),(l=o(this,e,[t,i,a,s,r])).type=5,l}return p(e,t),l(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=At(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:bt)!==ft){var i=this._$AH,a=t===bt&&i!==bt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==bt&&(i===bt||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}])}(Ot),Tt=function(){return l(function t(e,i,a){n(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){At(this,t)}}])}(),Lt=X.litHtmlPolyfillSupport;null!=Lt&&Lt(wt,St),(null!==(J=X.litHtmlVersions)&&void 0!==J?J:X.litHtmlVersions=[]).push("3.3.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Mt=globalThis,Pt=Mt.trustedTypes,It=Pt?Pt.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,Ht="$lit$",Nt="lit$".concat(Math.random().toFixed(9).slice(2),"$"),Rt="?"+Nt,Dt="<".concat(Rt,">"),Ut=document,Bt=function(){return Ut.createComment("")},qt=function(t){return null===t||"object"!=A(t)&&"function"!=typeof t},Vt=Array.isArray,Wt="[ \t\n\f\r]",Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zt=/-->/g,Gt=/>/g,Qt=RegExp(">|".concat(Wt,"(?:([^\\s\"'>=/]+)(").concat(Wt,"*=").concat(Wt,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),Kt=/'/g,Jt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,Xt=function(t){return function(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return{_$litType$:t,strings:e,values:a}}}(1),te=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),ie=new WeakMap,ae=Ut.createTreeWalker(Ut,129);function se(t,e){if(!Vt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==It?It.createHTML(e):e}var oe=function(t,e){for(var i,a=t.length-1,s=[],o=2===e?"<svg>":3===e?"<math>":"",n=Ft,r=0;r<a;r++){for(var l=t[r],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(n.lastIndex=u,null!==(c=n.exec(l)));)u=n.lastIndex,n===Ft?"!--"===c[1]?n=Zt:void 0!==c[1]?n=Gt:void 0!==c[2]?(Yt.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=Qt):void 0!==c[3]&&(n=Qt):n===Qt?">"===c[0]?(n=null!=i?i:Ft,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=void 0===c[3]?Qt:'"'===c[3]?Jt:Kt):n===Jt||n===Kt?n=Qt:n===Zt||n===Gt?n=Ft:(n=Qt,i=void 0);var p=n===Qt&&t[r+1].startsWith("/>")?" ":"";o+=n===Ft?l+Dt:h>=0?(s.push(d),l.slice(0,h)+Ht+l.slice(h)+Nt+p):l+Nt+(-2===h?r:p)}return[se(t,o+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]},ne=function(){return l(function t(e,i){var a,s=e.strings,o=e._$litType$;n(this,t),this.parts=[];var r=0,l=0,c=s.length-1,h=this.parts,u=y(oe(s,o),2),p=u[0],_=u[1];if(this.el=t.createElement(p,i),ae.currentNode=this.el.content,2===o||3===o){var m=this.el.content.firstChild;m.replaceWith.apply(m,k(m.childNodes))}for(;null!==(a=ae.nextNode())&&h.length<c;){if(1===a.nodeType){if(a.hasAttributes()){var g,v=d(a.getAttributeNames());try{for(v.s();!(g=v.n()).done;){var f=g.value;if(f.endsWith(Ht)){var b=_[l++],$=a.getAttribute(f).split(Nt),w=/([.?@])?(.*)/.exec(b);h.push({type:1,index:r,name:w[2],strings:$,ctor:"."===w[1]?he:"?"===w[1]?ue:"@"===w[1]?pe:ce}),a.removeAttribute(f)}else f.startsWith(Nt)&&(h.push({type:6,index:r}),a.removeAttribute(f))}}catch(t){v.e(t)}finally{v.f()}}if(Yt.test(a.tagName)){var A=a.textContent.split(Nt),x=A.length-1;if(x>0){a.textContent=Pt?Pt.emptyScript:"";for(var C=0;C<x;C++)a.append(A[C],Bt()),ae.nextNode(),h.push({type:2,index:++r});a.append(A[x],Bt())}}}else if(8===a.nodeType)if(a.data===Rt)h.push({type:2,index:r});else for(var S=-1;-1!==(S=a.data.indexOf(Nt,S+1));)h.push({type:7,index:r}),S+=Nt.length-1;r++}},null,[{key:"createElement",value:function(t,e){var i=Ut.createElement("template");return i.innerHTML=t,i}}])}();function re(t,e){var i,a,s,o,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,l=arguments.length>3?arguments[3]:void 0;if(e===te)return e;var d=void 0!==l?null===(i=r._$Co)||void 0===i?void 0:i[l]:r._$Cl,c=qt(e)?void 0:e._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(s=d)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===c?d=void 0:(d=new c(t))._$AT(t,r,l),void 0!==l?(null!==(n=r._$Co)&&void 0!==n?n:r._$Co=[])[l]=d:r._$Cl=d),void 0!==d&&(e=re(t,d._$AS(t,e.values),d,l)),e}var le=function(){return l(function t(e,i){n(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,a=i.el.content,s=i.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Ut).importNode(a,!0);ae.currentNode=o;for(var n=ae.nextNode(),r=0,l=0,d=s[0];void 0!==d;){var c;if(r===d.index){var h=void 0;2===d.type?h=new de(n,n.nextSibling,this,t):1===d.type?h=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(h=new _e(n,this,t)),this._$AV.push(h),d=s[++l]}r!==(null===(c=d)||void 0===c?void 0:c.index)&&(n=ae.nextNode(),r++)}return ae.currentNode=Ut,o}},{key:"p",value:function(t){var e,i=0,a=d(this._$AV);try{for(a.s();!(e=a.n()).done;){var s=e.value;void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}catch(t){a.e(t)}finally{a.f()}}}])}(),de=function(){function t(e,i,a,s){var o;n(this,t),this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}return l(t,[{key:"_$AU",get:function(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t,e=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=re(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),qt(t)?t===ee||null==t||""===t?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==te&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):function(t){return Vt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.k(t):this._(t)}},{key:"O",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"_",value:function(t){this._$AH!==ee&&qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ut.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,a=t._$litType$,s="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=ne.createElement(se(a.h,a.h[0]),this.options)),a);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{var o=new le(s,this),n=o.u(this.options);o.p(i),this.T(n),this._$AH=o}}},{key:"_$AC",value:function(t){var e=ie.get(t.strings);return void 0===e&&ie.set(t.strings,e=new ne(t)),e}},{key:"k",value:function(e){Vt(this._$AH)||(this._$AH=[],this._$AR());var i,a,s=this._$AH,o=0,n=d(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;o===s.length?s.push(i=new t(this.O(Bt()),this.O(Bt()),this,this.options)):i=s[o],i._$AI(r),o++}}catch(t){n.e(t)}finally{n.f()}o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}},{key:"_$AR",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t!==this._$AB;){var i,a=t.nextSibling;t.remove(),t=a}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),ce=function(){return l(function t(e,i,a,s,o){n(this,t),this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=ee},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=this.strings,o=!1;if(void 0===s)t=re(this,t,e,0),(o=!qt(t)||t!==this._$AH&&t!==te)&&(this._$AH=t);else{var n,r,l=t;for(t=s[0],n=0;n<s.length-1;n++)(r=re(this,l[i+n],e,n))===te&&(r=this._$AH[n]),o||(o=!qt(r)||r!==this._$AH[n]),r===ee?t=ee:t!==ee&&(t+=(null!=r?r:"")+s[n+1]),this._$AH[n]=r}o&&!a&&this.j(t)}},{key:"j",value:function(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),he=function(t){function e(){var t;return n(this,e),(t=o(this,e,arguments)).type=3,t}return p(e,t),l(e,[{key:"j",value:function(t){this.element[this.name]=t===ee?void 0:t}}])}(ce),ue=function(t){function e(){var t;return n(this,e),(t=o(this,e,arguments)).type=4,t}return p(e,t),l(e,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==ee)}}])}(ce),pe=function(t){function e(t,i,a,s,r){var l;return n(this,e),(l=o(this,e,[t,i,a,s,r])).type=5,l}return p(e,t),l(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=re(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:ee)!==te){var i=this._$AH,a=t===ee&&i!==ee||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==ee&&(i===ee||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}])}(ce),_e=function(){return l(function t(e,i,a){n(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){re(this,t)}}])}(),me=Mt.litHtmlPolyfillSupport;null!=me&&me(ne,de),(null!==(xt=Mt.litHtmlVersions)&&void 0!==xt?xt:Mt.litHtmlVersions=[]).push("3.3.1");var ge,ve,fe=globalThis,be=function(t){function e(){var t;return n(this,e),(t=o(this,e,arguments)).renderOptions={host:a(t)},t._$Do=void 0,t}return p(e,t),l(e,[{key:"createRenderRoot",value:function(){var t,i,a=$(e,"createRenderRoot",this,3)([]);return null!==(i=(t=this.renderOptions).renderBefore)&&void 0!==i||(t.renderBefore=a.firstChild),a}},{key:"update",value:function(t){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),$(e,"update",this,3)([t]),this._$Do=function(t,e,i){var a,s=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:e,o=s._$litPart$;if(void 0===o){var n,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new de(e.insertBefore(Bt(),r),r,void 0,null!=i?i:{})}return o._$AI(t),o}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;$(e,"connectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;$(e,"disconnectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return te}}])}(Y);be._$litElement$=!0,be.finalized=!0,null===(ge=fe.litElementHydrateSupport)||void 0===ge||ge.call(fe,{LitElement:be});var ye=fe.litElementPolyfillSupport;null==ye||ye({LitElement:be}),(null!==(ve=fe.litElementVersions)&&void 0!==ve?ve:fe.litElementVersions=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var $e=function(t){return function(e,i){void 0!==i?i.addInitializer(function(){customElements.define(t,e)}):customElements.define(t,e)}},ke={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:Q},we=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,s=i.metadata,o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===a){var n=i.name;return{set:function(i){var a=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,a,t,!0,i)},init:function(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===a){var r=i.name;return function(i){var a=this[r];e.call(this,i),this.requestUpdate(r,a,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ae(t){return function(e,i){return"object"==A(i)?we(t,e,i):function(t,e,i){var a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0}(t,e,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function xe(t){return Ae(g(g({},t),{},{state:!0,attribute:!1}))}const Ce="number";var Se;!function(t){t.Disarmed="disarmed",t.Arming="arming",t.Pending="pending",t.Triggered="triggered",t.ArmedAway="armed_away",t.ArmedHome="armed_home",t.ArmedNight="armed_night",t.ArmedVacation="armed_vacation",t.ArmedCustomBypass="armed_custom_bypass"}(Se||(Se={}));const Oe={[Se.ArmedAway]:"hass:shield-lock",[Se.ArmedHome]:"hass:shield-home",[Se.ArmedNight]:"hass:shield-moon",[Se.ArmedVacation]:"hass:shield-airplane",[Se.ArmedCustomBypass]:"hass:security",[Se.Disarmed]:"hass:shield-off",[Se.Arming]:"hass:shield-outline",[Se.Pending]:"hass:shield-outline",[Se.Triggered]:"hass:bell-ring"};var Ee;!function(t){t.ArmAway="arm_away",t.ArmHome="arm_home",t.ArmNight="arm_night",t.ArmVacation="arm_vacation",t.ArmCustomBypass="arm_custom_bypass",t.Disarm="disarm"}(Ee||(Ee={}));const ze={[Ee.ArmAway]:"mdi:lock",[Ee.ArmHome]:"mdi:home",[Ee.ArmNight]:"mdi:moon-waning-crescent",[Ee.ArmVacation]:"mdi:airplane",[Ee.ArmCustomBypass]:"mdi:shield",[Ee.Disarm]:"mdi:shield-off"},je={[Ee.ArmAway]:Se.ArmedAway,[Ee.ArmHome]:Se.ArmedHome,[Ee.ArmNight]:Se.ArmedNight,[Ee.ArmVacation]:Se.ArmedVacation,[Ee.ArmCustomBypass]:Se.ArmedCustomBypass,[Ee.Disarm]:Se.Disarmed};var Te;!function(t){t.Disarm="disarm",t.Arm="arm",t.Trigger="trigger",t.FailedToArm="failed_to_arm",t.CommandNotAllowed="command_not_allowed",t.NoCodeProvided="no_code_provided",t.InvalidCodeProvided="invalid_code_provided",t.TriggerTimeExpired="trigger_time_expired",t.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Te||(Te={}));const Le="alarmo_updated",Me=["arming","pending"],Pe={type:"",entity:"",name:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1,auto_submit:!1,auto_submit_anywhere:!1,auto_submit_rate_limit:40},Ie=2.5,He=120,Ne={skip_delay:!1,force:!1};var Re;!function(t){t.Red="red",t.Pink="pink",t.Purple="purple",t.DeepPurple="deep-purple",t.Indigo="indigo",t.Blue="blue",t.LightBlue="light-blue",t.Cyan="cyan",t.Teal="teal",t.Green="green",t.LightGreen="light-green",t.Lime="lime",t.Yellow="yellow",t.Amber="amber",t.Orange="orange",t.DeepOrange="deep-orange",t.Brown="brown",t.LightGrey="light-grey",t.Grey="grey",t.DarkGrey="dark-grey",t.BlueGrey="blue-grey",t.Black="black",t.White="white"}(Re||(Re={}));const De=8e15,Ue=9e15,Be=t=>"number"==typeof t&&t>=De&&t<Ue;class qe{constructor(t,e=6e4,i=()=>Date.now()){this.limit=t,this.windowMs=e,this.now=i,this.stamps=[]}prune(){const t=this.now()-this.windowMs;for(;this.stamps.length&&this.stamps[0]<=t;)this.stamps.shift()}consume(t){this.prune();const e=Math.max(0,Math.min(t,this.limit-this.stamps.length)),i=this.now();for(let t=0;t<e;t++)this.stamps.push(i);return e}waitTime(){return this.prune(),this.stamps.length<this.limit?0:Math.max(0,this.stamps[this.stamps.length-this.limit]+this.windowMs-this.now())}}const Ve=(t,e,i)=>e.filter(e=>i?t.length>=e:t.length===e).map(e=>t.slice(-e)),We=(t,e)=>{let i=0;for(;i<t.length&&i<e.length&&t[i]===e[i];)i++;return i},Fe=(t,e,i,a)=>{const s=[];for(let o=We(t,e)+1;o<=e.length;o++)s.push(Ve(e.slice(0,o),i,a));return s};class Ze{constructor(t,e,i,a){this.send=t,this.onSaturated=e,this.onError=i,this.canSend=a,this.pending=[],this.tried=new Set}add(t,e){for(const i of t){const t=`${e}\n${i}`;if(!this.tried.has(t)&&!this.pending.some(t=>t.target===e&&t.code===i)){if(this.pending.length>=10)return this.cancel(),this.onSaturated(),!1;this.pending.push({code:i,target:e})}}return this.next(),!0}cancel(){this.pending=[],this.tried.clear()}next(){if(void 0!==this.inFlight||!this.pending.length)return;const t=this.pending.shift();if(!this.canSend(t.target))return void this.cancel();const e=`${t.target}\n${t.code}`;this.tried.add(e);const i=De+Math.floor(1e15*Math.random());this.inFlight=i,this.send(t.code,i,t.target).then(()=>{this.inFlight=void 0,this.next()},t=>{this.inFlight=void 0,this.tried.delete(e),this.pending=[],this.onError(t)})}}var Ge={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},Qe={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},Ke={invalid_pin:"Neplatný",blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},Je={arm_options:Ge,editor:Qe,errors:Ke},Ye={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},Xe={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},ti={invalid_pin:"Ungültig",blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},ei={arm_options:Ye,editor:Xe,errors:ti},ii={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},ai={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},si={invalid_pin:"Ακυρος",blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},oi={arm_options:ii,editor:ai,errors:si},ni={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},ri={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",auto_submit:"Submit the code automatically as soon as it is complete (a wrong code is ignored silently).",auto_submit_anywhere:"Also accept the code when it appears anywhere in what is typed.",auto_submit_rate_limit:"Maximum digits per minute with automatic submission",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},li={invalid_pin:"Invalid",blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors",auto_submit_too_fast:"Typed too fast to check every digit. Type the code again.",auto_submit_failed:"Could not send the code to Alarmo. Check the connection and type the code again.",auto_submit_unavailable:"Auto-submit is unavailable: the code lengths could not be loaded.",auto_submit_rate_limited:"Too many digits typed. Try again in {seconds} s."},di={arm_options:ni,editor:ri,errors:li},ci={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},hi={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},ui={invalid_pin:"Inválido",blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},pi={arm_options:ci,editor:hi,errors:ui},_i={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},mi={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",auto_submit:"Valider le code automatiquement dès qu'il est complet (un code erroné est ignoré sans message).",auto_submit_anywhere:"Accepter aussi le code s'il se trouve n'importe où dans la saisie.",auto_submit_rate_limit:"Nombre maximal de chiffres par minute avec la validation automatique",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},gi={invalid_pin:"Invalide",blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés",auto_submit_too_fast:"Saisie trop rapide pour vérifier chaque chiffre. Retapez le code.",auto_submit_failed:"Impossible d'envoyer le code à Alarmo. Vérifiez la connexion et retapez le code.",auto_submit_unavailable:"Validation automatique indisponible : les longueurs de code n'ont pas pu être chargées.",auto_submit_rate_limited:"Trop de chiffres saisis. Réessayez dans {seconds} s."},vi={arm_options:_i,editor:mi,errors:gi},fi={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},bi={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},yi={invalid_pin:"Non valido",blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},$i={arm_options:fi,editor:bi,errors:yi},ki={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},wi={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},Ai={invalid_pin:"Ongeldig",blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},xi={arm_options:ki,editor:wi,errors:Ai},Ci={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Si={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},Oi={invalid_pin:"Inválido",blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Ei={arm_options:Ci,editor:Si,errors:Oi},zi={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},ji={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},Ti={invalid_pin:"Неверный",blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},Li={arm_options:zi,editor:ji,errors:Ti},Mi={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},Pi={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},Ii={invalid_pin:"Ogiltig",blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},Hi={arm_options:Mi,editor:Pi,errors:Ii},Ni={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Ri={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},Di={invalid_pin:"无效的",blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Ui={arm_options:Ni,editor:Ri,errors:Di},Bi={cs:Object.freeze({__proto__:null,arm_options:Ge,default:Je,editor:Qe,errors:Ke}),de:Object.freeze({__proto__:null,arm_options:Ye,default:ei,editor:Xe,errors:ti}),el:Object.freeze({__proto__:null,arm_options:ii,default:oi,editor:ai,errors:si}),en:Object.freeze({__proto__:null,arm_options:ni,default:di,editor:ri,errors:li}),es:Object.freeze({__proto__:null,arm_options:ci,default:pi,editor:hi,errors:ui}),fr:Object.freeze({__proto__:null,arm_options:_i,default:vi,editor:mi,errors:gi}),it:Object.freeze({__proto__:null,arm_options:fi,default:$i,editor:bi,errors:yi}),nl:Object.freeze({__proto__:null,arm_options:ki,default:xi,editor:wi,errors:Ai}),"pt-BR":Object.freeze({__proto__:null,arm_options:Ci,default:Ei,editor:Si,errors:Oi}),ru:Object.freeze({__proto__:null,arm_options:zi,default:Li,editor:ji,errors:Ti}),sv:Object.freeze({__proto__:null,arm_options:Mi,default:Hi,editor:Pi,errors:Ii}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Ni,default:Ui,editor:Ri,errors:Di})};function qi(t,e,i="",a=""){const s=e.replace(/['"]+/g,"");var o;try{o=t.split(".").reduce((t,e)=>t[e],Bi[s])}catch(e){o=t.split(".").reduce((t,e)=>t[e],Bi.en)}if(void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],Bi.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let t=0;t<i.length;t++)o=o.replace(i[t],a[t])}return o}function Vi(t){return null!=t}function Wi(t){switch(typeof t){case"object":return 0==Object.keys(t).length;case"string":return 0==String(t).length;default:return!Vi(t)}}function Fi(t){return t.substring(0,t.indexOf("."))}const Zi=(t,e)=>{let i={hide:!1};return(e.states||{}).hasOwnProperty(t)&&(i=Object.assign(Object.assign({},i),e.states[t])),i},Gi=t=>{if(!t)return[];const e=t.attributes.supported_features||0;let i=[];return 2&e&&i.push(Ee.ArmAway),1&e&&i.push(Ee.ArmHome),4&e&&i.push(Ee.ArmNight),32&e&&i.push(Ee.ArmVacation),16&e&&i.push(Ee.ArmCustomBypass),i},Qi=(t,e,i)=>{const a=Fi(t.entity_id),s=t.attributes.device_class,o=t.state;if(Object.values(Se).includes(o)&&i){const t=Zi(o,i);if(!Wi(t.state_label))return t.state_label}let n="";return s&&(n=e(`component.${a}.entity_component.${s}.state.${t.state}`)),n||(n=e(`component.${a}.entity_component._.state.${t.state}`)),n},Ki=t=>null!==t.attributes.code_format,Ji=(t,e,i=!1)=>{if(!t||!t.state)return"var(--state-unavailable-color)";let a=t.state;if(i){const i=Object.values(Ee).map(t=>je[t]);if(!i.includes(a)){const e=t.attributes.arm_mode;e&&(a=e)}const s=[Ee.Disarm,...Gi(t)].filter(t=>!Zi(je[t],e).hide);1==s.length&&(a=je[s[0]])}if(Object.keys(e.states||{}).includes(a)&&Vi((e.states[a]||{}).color)){const t=e.states[a].color;return Object.values(Re).includes(t)?`var(--${t}-color)`:t}return a==Se.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Se).includes(a)?`var(--state-alarm_control_panel-${a}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},Yi=t=>t.callWS({type:"alarmo/entities"}),Xi=t=>t.callWS({type:"alarmo/config"}),ta=(t,e,i,a)=>{a=a||{},i=null==i?{}:i;const s=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,t.dispatchEvent(s),s};let ea=class extends be{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){Yi(this.hass).then(t=>{this._entities=t.map(t=>t.entity_id)}).catch(t=>{var e;null===(e=this.hass)||void 0===e||e.callService("system_log","write",{message:`Failed to fetch entities: ${t}`,level:"error"})}),this._alarmoConfig=await Xi(this.hass)}setConfig(t){!(null==t?void 0:t.button_scale_actions)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_actions:null==t?void 0:t.button_scale})),!(null==t?void 0:t.button_scale_keypad)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_keypad:null==t?void 0:t.button_scale})),this._config=Object.assign(Object.assign({},Pe),t)}render(){var t,e,i,a,s,o,n,r,l;if(!this._config||!this.hass||!this._entities)return Xt``;if(!this._entities.length)return Xt`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const d=this._config.entity?this.hass.states[this._config.entity]:void 0,c=(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)===Ce&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const t=Zi(je[this._editAction],this._config);return Xt`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${qi("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div>
          <span>${qi("editor.action_dialog.show_button.title",this.hass.language)}</span>
          <div style="display: flex; flex-direction: row">
            <ha-formfield label="${qi("editor.action_dialog.show_button.options.always",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="never"
                @change=${()=>this._updateStateConfig(je[this._editAction],{hide:void 0})}
                ?checked=${!Vi(t.hide)||[!1,"never"].includes(t.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${qi("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(je[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(t.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==Ee.Disarm?Xt`
            <ha-formfield label="${qi("editor.action_dialog.show_button.options.armed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="disarmed"
                @change=${()=>this._updateStateConfig(je[this._editAction],{hide:"disarmed"})}
                ?checked=${"disarmed"==t.hide}
              >
              </ha-radio>
            </ha-formfield>`:Xt`
            <ha-formfield label="${qi("editor.action_dialog.show_button.options.disarmed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="armed"
                @change=${()=>this._updateStateConfig(je[this._editAction],{hide:"armed"})}
                ?checked=${"armed"==t.hide}
              >
              </ha-radio>
            </ha-formfield>
              `}
          </div>
        </div>

        <div class="grid">
          <ha-input
            label="${qi("editor.action_dialog.button_label",this.hass.language)}"
            .value="${t.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${t.hide}
            @input=${t=>this._updateStateConfig(je[this._editAction],{button_label:String(t.target.value).trim()})}
          ></ha-input>

          <ha-icon-picker
            .hass=${this.hass}
            label="${qi("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${t.button_icon||ze[this._editAction]}"
            ?disabled=${t.hide}
            @value-changed=${t=>this._updateStateConfig(je[this._editAction],{button_icon:t.detail.value})}
            >
          </ha-icon-picker>

          <ha-input
            label="${qi("editor.action_dialog.state_label",this.hass.language)}"
            .value="${t.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${je[this._editAction]}`)}"
            @input=${t=>this._updateStateConfig(je[this._editAction],{state_label:String(t.target.value).trim()})}
          ></ha-input>

          <ha-select
            .icon=${Vi(t.color)}
            label="${qi("editor.action_dialog.color",this.hass.language)}"
            .value=${t.color}
            @closed=${t=>{t.stopPropagation()}}
            @selected=${t=>{t.stopPropagation();const e=t.target.value;this._updateStateConfig(je[this._editAction],{color:e||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${t.color?Xt`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(Re).includes(t.color)?`var(--${t.color}-color)`:t.color}">
                </span>
              </span>
            `:ee}
            ${Vi(t.color)&&t.color.length&&!Object.values(Re).includes(t.color)?Xt`
                <ha-list-item .value=${t.color} graphic="icon">
                  ${t.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${t.color}">
                    </span>
                  </span>
                </ha-list-item>
            `:ee}
            ${Object.values(Re).map(t=>Xt`
                <ha-list-item .value=${t} graphic="icon">
                  ${this.hass.localize(`ui.components.color-picker.colors.${t}`)||t}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${t}-color)`}">
                    </span>
                  </span>
                </ha-list-item>
              `)}
          </ha-select>
        </div>
      `}return Xt`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${t=>this._entities.includes(t.entity_id)}
            @change=${t=>this._updateConfig("entity",t.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${t=>this._updateConfig("name",String(t.target.value).trim())}
          ></ha-input>
        </div>

        ${d?Xt`
              <div class="config-item">
                <span>${qi("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row">
                ${this._renderActionOptions()}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${qi("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_actions||1}
              @change=${t=>this._updateConfig("button_scale_actions",Number(t.target.value))}
              min="${1}"
              max="${Ie}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${qi("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_keypad||1}
              @change=${t=>this._updateConfig("button_scale_keypad",Number(t.target.value))}
              min="${1}"
              max="${Ie}"
              step="0.1"
              labeled
              ?disabled=${!d||!c||(null===(e=this._config)||void 0===e?void 0:e.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${qi("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${t=>this._updateConfig("hide_keypad",t.target.checked)}
              ?disabled=${!d||!c}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${t=>this._updateConfig("keep_keypad_visible",t.target.checked)}
              ?disabled=${!d||!c||(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_arm_required)==(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_disarm_required)||(null===(s=this._config)||void 0===s?void 0:s.use_code_dialog)||(null===(o=this._config)||void 0===o?void 0:o.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${t=>this._updateConfig("use_code_dialog",t.target.checked)}
              ?disabled=${!d||!(null===(n=this._alarmoConfig)||void 0===n?void 0:n.code_arm_required)&&!(null===(r=this._alarmoConfig)||void 0===r?void 0:r.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Vi(this._config.show_messages)}
              @change=${t=>this._updateConfig("show_messages",t.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${t=>this._updateConfig("show_ready_indicator",t.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${t=>this._updateConfig("show_bypassed_sensors",t.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.auto_submit",this.hass.language)}>
            <ha-switch
              .checked=${this._config.auto_submit}
              @change=${t=>this._updateConfig("auto_submit",t.target.checked)}
              ?disabled=${!d||!c}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.auto_submit_anywhere",this.hass.language)}>
            <ha-switch
              .checked=${!!this._config.auto_submit&&!!this._config.auto_submit_anywhere}
              @change=${t=>this._updateConfig("auto_submit_anywhere",t.target.checked)}
              ?disabled=${!d||!c||!this._config.auto_submit}
            ></ha-switch
          ></ha-formfield>

          <ha-input
            type="number"
            min="${10}"
            max="${He}"
            step="1"
            .label=${qi("editor.auto_submit_rate_limit",this.hass.language)}
            .value=${String(null!==(l=this._config.auto_submit_rate_limit)&&void 0!==l?l:Pe.auto_submit_rate_limit)}
            ?disabled=${!d||!c||!this._config.auto_submit}
            @input=${this._rateLimitChanged}
          ></ha-input>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return ee;const t=this.hass.states[this._config.entity],e=Gi(t);let i=[Ee.Disarm,...e].map(t=>({id:t,label:this.hass.localize(`ui.card.alarm_control_panel.${t}`),hidden:["always",!0].includes(Zi(je[t],this._config).hide||!1),order:Zi(je[t],this._config).button_order}));return i.sort((t,e)=>t.hidden&&!e.hidden?1:e.hidden&&!t.hidden?-1:Vi(t.order)||Vi(e.order)?Vi(t.order)&&!Vi(e.order)?-1:!Vi(t.order)&&Vi(e.order)?1:t.order-e.order:0),Xt`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${t=>this._handleActionsMoved(t,i.map(t=>je[t.id]))}
      >
        <div class="sortable-list">
        ${i.map((t,e)=>Xt`
          <div class="sortable-item ${t.hidden?"":"draggable"}"">
            <ha-svg-icon
              class="handle"
              style="cursor: grab"
              .path=${"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
            ></ha-svg-icon>

            <ha-icon-button
              .path=${t.hidden?"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z":"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
              style="${t.hidden?"":"color: var(--primary-color)"}"
              ?disabled=${!t.hidden&&i.filter(t=>!t.hidden).length<=2||t.id==Ee.Disarm}
              @click=${a=>{if(this._updateStateConfig(je[t.id],t.hidden?{hide:void 0}:{hide:"always"}),t.hidden){let t=new CustomEvent("",{detail:{oldIdx:e,nexIdx:i.filter(t=>!t.hidden).length}});this._handleActionsMoved(t,i.map(t=>je[t.id]))}a.target.blur()}}
            >
            </ha-icon-button>
            <span>${t.label}</span>
            <ha-icon-button
              .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
              style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
              ?disabled=${t.hidden}
              @click=${()=>this._editActionClick(t.id)}
            >
            </ha-icon-button>
          </div>
        `)}
        </div>
      </ha-sortable>
    `}_handleActionsMoved(t,e){const i=t.detail.oldIndex,a=t.detail.newIndex;let s=e[i];e=e.filter((t,e)=>e!=i),e.splice(a,0,s);let o=Object.assign({},this._config.states);e.forEach((t,e)=>{o=Object.assign(Object.assign({},o),{[t]:Object.assign(Object.assign({},o[t]||{}),{button_order:e+1})})}),this._updateConfig("states",o)}_rateLimitChanged(t){const e=String(t.target.value).trim(),i=Number(e);""!==e&&Number.isInteger(i)&&i>=10&&i<=He&&this._updateConfig("auto_submit_rate_limit",i)}_updateConfig(t,e){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[t]:e}),"auto_submit"!=t||e||(this._config=Object.assign(Object.assign({},this._config),{auto_submit_anywhere:!1})),"entity"==t){const t=this._config.entity?this.hass.states[this._config.entity]:void 0;t&&t.attributes.code_arm_required!=t.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}ta(this,"config-changed",{config:this._config})}}_updateStateConfig(t,e){var i;const a=t=>function(t,e){return t?Object.entries(t).filter(([t])=>e.includes(t)).reduce((t,[e,i])=>Object.assign(t,{[e]:i}),{}):{}}(t,Object.keys(t).filter(e=>Vi(t[e]||"string"==typeof t[e])));let s=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const o=a(Object.assign(Object.assign({},s[t]),e));s=a(Object.assign(Object.assign({},s),{[t]:o})),this._updateConfig("states",s)}_editActionClick(t){this._editAction=t}_goBack(){this._editAction=null}static get styles(){return P`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-input {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.sortable-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.sortable-item {
        display: flex;
        font-size: 0.875rem;
        align-items: center;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: var(--ha-border-radius-pill);
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
    `}};e([Ae({attribute:!1})],ea.prototype,"hass",void 0),e([xe()],ea.prototype,"_config",void 0),e([xe()],ea.prototype,"_alarmoConfig",void 0),e([xe()],ea.prototype,"_entities",void 0),e([xe()],ea.prototype,"_editAction",void 0),ea=e([$e("alarmo-card-editor-plus")],ea);var ia,aa,sa=Object.freeze({__proto__:null,get AlarmoCardEditor(){return ea}});class oa extends be{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(t){if(!t.size)return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language)return!0;if(e.states[this.entity].state!==this.hass.states[this.entity].state||e.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const t=e.states[this.entity].state,i=this.hass.states[this.entity].state;return Me.includes(i)?this.startTimer():Me.includes(t)&&this.stopTimer(),!0}return!1}firstUpdated(){const t=this.hass.states[this.entity].state;Me.includes(t)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",()=>{this._touchStarted=!0}),this.addEventListener("touchend",()=>{setTimeout(()=>{this._touchStarted=!1},10)}),this.addEventListener("mouseenter",()=>{this._touchStarted||(this._hover=!0)}),this.addEventListener("mouseleave",()=>{this._hover=!1})}async startTimer(){var t,e;clearInterval(this.timer),(t=this.hass,e=this.entity,t.callWS({type:"alarmo/countdown",entity_id:e})).then(t=>{this.duration=t.delay,this.datetime=new Date((new Date).getTime()+1e3*t.remaining)}).catch(t=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const t=(this.datetime.getTime()-(new Date).getTime())/1e3;return t<0?(clearInterval(this.timer),0):t}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(t){return this._hover&&Me.includes(t)&&this.timer?Xt` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?Xt` ${Math.max(Math.round(this.getRemaining()),0)} `:Xt` <ha-icon .icon=${Oe[t]}></ha-icon> `}handleClick(){const t=this.hass.states[this.entity].state;Me.includes(t)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):ta(this,"hass-more-info",{entityId:this.entity})}render(){let t=45,e=2*Math.PI*t;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return Xt`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${t}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*e).toFixed(2)} ${e.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${t}, 0
              a ${t},${t} 0 1,0 90,0
              a ${t},${t} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${a?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return P`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}}e([Ae()],oa.prototype,"hass",void 0),e([Ae()],oa.prototype,"entity",void 0),e([xe()],oa.prototype,"_hover",void 0),customElements.define("alarmo-state-badge-plus",oa),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ia||(ia={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(aa||(aa={}));class na extends be{shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entity||e.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return Xt``;const t=this.entity in this.hass.states;let e=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(e=Object.assign(Object.assign({},e),{state:this.state}));const i=t?Qi(e,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:ia.language}),a=t?e.attributes.friendly_name||(s=e.entity_id).substring(s.indexOf(".")+1):this.entity;var s;let o=!!this.state||"on"==e.state;return Xt`
      <div class="badge-container" @click=${()=>ta(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${o?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon
              .hass=${this.hass}
              .stateObj=${e}
            ></ha-state-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return P`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}e([Ae()],na.prototype,"hass",void 0),e([Ae()],na.prototype,"entity",void 0),e([Ae()],na.prototype,"state",void 0),customElements.define("alarmo-sensor-badge-plus",na);class ra extends be{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return Xt`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(t){t.target.blur()}static get styles(){return P`
      button {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid var(--alarmo-button-border-color, var(--outline-color));
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: transparent;
        color: var(--alarmo-button-color, var(--primary-color));
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * var(--alarmo-button-font-size));
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease-in-out;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: var(--alarmo-button-background-color, var(--card-background-color));
        opacity: var(--alarmo-button-background-opacity, 0);
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled):hover:before {
        background: var(--alarmo-button-background-color, var(--primary-color));
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.12);
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
      }
      button:not(:disabled):active:before {
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.24);
      }
      button:not(:disabled):active {
        border: 1px solid var(--alarmo-button-border-color, var(--outline-hover-color));
      }
      button:focus {
        outline: none;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `}}e([Ae({type:Boolean})],ra.prototype,"disabled",void 0),e([Ae({type:Boolean})],ra.prototype,"scaled",void 0),customElements.define("alarmo-button-plus",ra);const la=t=>{class i extends t{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then(t=>t()):t()}this.__unsubs=void 0}}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return e([Ae({attribute:!1})],i.prototype,"hass",void 0),i},da=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let ca=class extends(la(be)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0,this._processedInput="",this._rateLimitWait=0,this._rateLimitTimer=0,this._autoQueue=new Ze((t,e)=>this._callService(t,e),()=>{this._input="",this._processedInput="",this._showCodeError(qi("errors.auto_submit_too_fast",this.hass.language))},()=>{this._showCodeError(qi("errors.auto_submit_failed",this.hass.language))},t=>{var e;return!!(null===(e=this._params)||void 0===e?void 0:e.auto_submit)&&this._autoSubmitTarget()===t})}hassSubscribe(){return[this.hass.connection.subscribeMessage(t=>this._fetchData(t),{type:Le})]}async _fetchData(t){var e;if(t.data.area_id===(null===(e=this._params)||void 0===e?void 0:e.area_id))switch(t.data.event){case Te.Disarm:case Te.Arm:case Te.Trigger:this._confirm(t.data.event);break;case Te.InvalidCodeProvided:case Te.NoCodeProvided:if(Be(t.data.context_id))break;this._showCodeError();break;case Te.FailedToArm:case Te.CommandNotAllowed:this._confirm(t.data.event);case Te.TriggerTimeExpired:case Te.ReadyToArmModesChanged:}}shouldUpdate(t){const e=t.get("hass");return!(!t.has("_params")&&this._params)||(!(!t.has("_input")&&!t.has("_rateLimitWait"))||(!e||e.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(e.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keypress",t=>{"Enter"===t.key&&this._input.length&&this._submit()})}async showDialog(t){var e;this._autoQueue.cancel(),this._params=t,this._input="",this._processedInput="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,(null===(e=t.auto_submit)||void 0===e?void 0:e.limiter.waitTime())&&this._startRateLimitTimer(),await this.updateComplete}closeDialog(){return this._autoQueue.cancel(),this._stopRateLimitTimer(),this._params=void 0,this._showClearButton=!1,!0}_showCodeError(t=qi("errors.invalid_pin",this.hass.language)){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");i&&(i.classList.remove("error"),i.classList.add("error"),i.hint=t)}_clearCodeError(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code");e&&e.classList.contains("error")&&(e.classList.remove("error"),e.hint="",this._input="",this._processedInput="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._processedInput="",this._autoQueue.cancel(),this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var t;const e=null!==(t=this._input)&&void 0!==t?t:"";this._clearCodeError(),this._callService(e)}_callService(t,e){const i=void 0===e?{}:{context_id:e};return this._params.action==Ee.Disarm?this.hass.callService("alarmo","disarm",Object.assign({entity_id:this._params.entity_id,code:t},i)):this.hass.callService("alarmo","arm",Object.assign(Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:je[this._params.action],code:t}),i))}_autoSubmitTarget(){var t,e;return`${null===(t=this._params)||void 0===t?void 0:t.entity_id}|${null===(e=this._params)||void 0===e?void 0:e.action}`}_autoSubmit(){var t;const e=null===(t=this._params)||void 0===t?void 0:t.auto_submit;if(!e||this._params.code_format!==Ce)return void(this._processedInput=this._input);const i=Fe(this._processedInput,this._input,e.lengths,e.anywhere);for(const t of i)if(!this._autoQueue.add(t,this._autoSubmitTarget()))return;this._input=this._input.slice(-Math.max(20,...e.lengths)),this._processedInput=this._input}_consumeDigits(t){var e,i;const a=null===(i=null===(e=this._params)||void 0===e?void 0:e.auto_submit)||void 0===i?void 0:i.limiter;if(!a||this._params.code_format!==Ce)return t;const s=a.consume(t);return s<t&&this._startRateLimitTimer(),s}_startRateLimitTimer(){const t=()=>{var t,e;this._rateLimitWait=Math.ceil(((null===(e=null===(t=this._params)||void 0===t?void 0:t.auto_submit)||void 0===e?void 0:e.limiter.waitTime())||0)/1e3),this._rateLimitWait||this._stopRateLimitTimer()};t(),this._rateLimitWait&&!this._rateLimitTimer&&(this._rateLimitTimer=window.setInterval(t,1e3))}_stopRateLimitTimer(){this._rateLimitTimer&&clearInterval(this._rateLimitTimer),this._rateLimitTimer=0,this._rateLimitWait=0}_handleCodeInput(t){const e=t.target,i=this._input;let a=e.value;const s=We(i,a),o=a.length-s;if(o>0){const t=this._consumeDigits(o);if(t<o&&(a=a.slice(0,s+t),e.value=a,a===i))return}this._clearCodeError(),this._input=a,this._setCodeClearTimer(),this._autoSubmit()}_confirm(t){var e,i;null===(i=null===(e=this._params)||void 0===e?void 0:e.confirm)||void 0===i||i.call(e,t),this.closeDialog()}_cancel(){var t,e;null===(e=null===(t=this._params)||void 0===t?void 0:t.cancel)||void 0===e||e.call(t),this.closeDialog()}_numberClick(t){const e=t.currentTarget.value;this._consumeDigits(1)&&(this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+e,this._showClearButton=!0,this._autoSubmit())}_clear(){this._autoQueue.cancel(),this._input="",this._processedInput="",this._showClearButton=!1}_renderRateLimited(){return this._rateLimitWait?Xt`
      <div class="rate-limited">
        ${qi("errors.auto_submit_rate_limited",this.hass.language,"{seconds}",String(this._rateLimitWait))}
      </div>
    `:ee}render(){if(!this._params||!this.hass)return ee;return"text"===this._params.code_format?Xt`
        <ha-dialog
          open
          @closed=${this._cancel}
          header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
          width="small"
        >
          <ha-input
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="text"
            @input=${t=>{this._clearCodeError(),this._input=t.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-input>
          <ha-dialog-footer>
            <ha-button slot="secondaryAction" data-dialog="close" appearance="plain">
              ${this.hass.localize("ui.common.cancel")}
            </ha-button>
            <ha-button @click=${this._submit} slot="primaryAction">
              ${this.hass.localize("ui.common.submit")}
            </ha-button>
          </ha-dialog-footer>
        </ha-dialog>
      `:Xt`
      <ha-dialog
        open
        header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
        @closed=${this._cancel}
        width="small"
      >
        <div class="container">
          <ha-input
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="numeric"
            @input=${this._handleCodeInput}
            @focus=${this._clearCodeError}
          ></ha-input>
          ${this._renderRateLimited()}
          <div class="keypad">
            ${da.map(t=>""===t?Xt`<span></span>`:"clear"===t?Xt`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===t?Xt`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:Xt`
                        <ha-control-button
                          .value=${t}
                          @click=${this._numberClick}
                          .disabled=${this._rateLimitWait>0}
                          .label=${t}
                        >
                          ${t}
                        </ha-control-button>
                      `)}
          </div>
        </div>
      </ha-dialog>
    `}};ca.styles=P`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-input {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-input.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
      --ha-color-border-neutral-loud: var(--ha-color-on-danger-quiet);
    }
    ha-input.error:not([value='']) {
      --secondary-text-color: var(--ha-color-on-danger-quiet);
    }
    ha-input.error::part(wa-hint) {
      color: var(--ha-color-on-danger-quiet);
    }
    @keyframes shake {
      0% {
        margin-left: calc(50% - 240px / 2);
      }
      25% {
        margin-left: calc(50% - 240px / 2 + 10px);
      }
      75% {
        margin-left: calc(50% - 240px / 2 - 10px);
      }
      100% {
        margin-left: calc(50% - 240px / 2);
      }
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .rate-limited {
      font-size: 14px;
      text-align: center;
      color: var(--error-color);
    }
    .keypad {
      --keypad-columns: 3;
      margin-top: 12px;
      padding: 12px;
      display: grid;
      grid-template-columns: repeat(var(--keypad-columns), auto);
      grid-auto-rows: auto;
      grid-gap: 24px;
      justify-items: center;
      align-items: center;
    }
    .clear {
      grid-row-start: 4;
      grid-column-start: 0;
    }
    @media all and (max-height: 450px) {
      .keypad {
        --keypad-columns: 6;
      }
      .clear {
        grid-row-start: 1;
        grid-column-start: 6;
      }
    }

    ha-control-button {
      width: 56px;
      height: 56px;
      --control-button-border-radius: 28px;
      --mdc-icon-size: 24px;
      font-size: 24px;
    }
    .submit {
      --control-button-background-color: var(--green-color);
      --control-button-icon-color: var(--green-color);
    }
    .clear {
      --control-button-background-color: var(--red-color);
      --control-button-icon-color: var(--red-color);
    }
    .hidden {
      display: none;
    }
    .buttons {
      margin-top: 12px;
    }
  `,e([Ae({attribute:!1})],ca.prototype,"hass",void 0),e([xe()],ca.prototype,"_params",void 0),e([xe()],ca.prototype,"_input",void 0),e([xe()],ca.prototype,"_showClearButton",void 0),e([xe()],ca.prototype,"_narrow",void 0),e([xe()],ca.prototype,"_rateLimitWait",void 0),ca=e([$e("alarmo-code-dialog-plus")],ca);var ha=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return ca}});let ua=class extends be{render(){if(!this.hass||!this.config)return ee;const t=this.hass.states[this.config.entity];let e=t.state;const i=Object.values(Ee).map(t=>je[t]);if(!i.includes(e)){const i=t.attributes.arm_mode;i&&(e=i)}return Xt`
      <div class="container">
        ${this._renderOptions(e)}
      </div>
    `}_renderOptions(t){const e=this.hass.states[this.config.entity],i=[Ee.Disarm,...Gi(e)].filter(t=>{const i=Zi(je[t],this.config).hide;if("boolean"==typeof i||!Vi(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==e.state;case"disarmed":return"disarmed"!==e.state}}),a=i.map(t=>Zi(je[t],this.config)).some(t=>!Vi(t.button_label)||t.button_label.length);return i.sort((t,e)=>{const i=Zi(je[t],this.config).button_order,a=Zi(je[e],this.config).button_order;return Vi(i)||Vi(a)?Vi(i)&&!Vi(a)?-1:!Vi(i)&&Vi(a)?1:i-a:0}),i.map(i=>{const s=Vi(this.readyForArmModes)&&!this.readyForArmModes.includes(je[i])&&i!=Ee.Disarm,o=Zi(je[i],this.config);return Xt`
        <div class="button ${je[i]==t?"selected":""}" @click=${t=>this._handleClick(t,i)}>
          <div class="content ${a?"has-text":""}">
            <ha-icon icon="${Wi(o.button_icon)?ze[i]:o.button_icon}"></ha-icon>
            ${je[i]!=t&&Vi(this.readyForArmModes)?Xt`
              <ha-icon
                icon="${"mdi:circle-medium"}"
                class="badge ${s?"error":"success"}"
              ></ha-icon>
            `:ee}
            <span>
              ${Vi(o.button_label)?o.button_label:i==Ee.Disarm&&e.state!==Se.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${je[i]}`)}
            </span>
          </div>
        </div>
      `})}_handleClick(t,e){ta(this,"button-clicked",{ev:t,action:e})}static get styles(){return P`
      :host {
        width: 100%;
        display: inline-block;
        padding: 0px 10px;
        box-sizing: border-box;
      }
      div.container {
        position: relative;
        display: flex;
        width: 100%;
        gap: 0px;
        flex-wrap: wrap;
        padding: 4px;
        box-sizing: border-box;
        --selected-color: var(--alarm-state-color);
      }
      div.container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--primary-text-color);
        opacity: 0.05;
        border-radius: calc(var(--content-scale, 1) * 18px);
      }
      div.button {
        cursor: pointer;
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* For safari border-radius overflow */
        z-index: 0;
      }
      div.content {
        display: flex;
        position: relative;
        inline-size: calc(100% - 4px);
        border-radius: calc(var(--content-scale, 1) * 6px);
        height: calc(var(--content-scale, 1) * 26px);
        color: var(--primary-text-color);
        --mdc-icon-size: calc(var(--content-scale, 1) * 22px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        padding: 8px 2px;
        overvlow: hidden;
        flex: 1;
        gap: 4px;
        transition:
          color ease-in-out 180ms;
      }
      div.content.has-text {
        height: calc(var(--content-scale, 1) * 40px);
      }
      div.content::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--selected-color);
        opacity: 0;
        border-radius: calc(var(--content-scale, 1) * 14px);
        transition:
          background-color ease-in-out 180ms,
          opacity ease-in-out 80ms;
      }
      div.content.focused::before,
      div.content:hover::before {
        opacity: 0.24;
      }
      div.button.selected .content::before {
        opacity: 1;
      }
      div.content ha-icon {
        display: flex;
      }
      div.content span {
        display: flex;
        max-width: calc(100% - 4px);
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: clip;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        font-weight: 400;
        font-size: calc(var(--content-scale, 1) * 1rem);
      }
      div.button.selected div.content ha-icon, div.button.selected div.content {
        color: white;
      }
      @media (max-width: 280px) {
        div.container {
          flex-direction: column;
        }
      }
      div.content ha-icon.badge {
        position: absolute;
        top: 0px;
        margin-left: calc(var(--content-scale, 1) * 28px);
      }
      div.content ha-icon.success {
        color: var(--green-color);
      }
      div.content ha-icon.error {
        color: var(--red-color);
      }
    `}};e([Ae({attribute:!1})],ua.prototype,"hass",void 0),e([Ae({attribute:!1})],ua.prototype,"config",void 0),e([Ae({attribute:!1})],ua.prototype,"readyForArmModes",void 0),ua=e([$e("alarmo-actions-bar-plus")],ua);const pa=["1","2","3","4","5","6","7","8","9","","0","clear"];return t.AlarmoCard=class extends(la(be)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Ne),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0,this._codeLengths={arm:[],disarm:[]},this._codeLengthsStatus="idle",this._codeLengthsRequest=0,this._areaIds=[],this._processedInput="",this._rateLimiter=new qe(Pe.auto_submit_rate_limit),this._rateLimitWait=0,this._rateLimitTimer=0,this._autoQueue=new Ze((t,e,i)=>this.hass.callService("alarmo","disarm",{entity_id:i,code:t,context_id:e}),()=>{this._input="",this._processedInput="",this._showCodeError(qi("errors.auto_submit_too_fast",this.hass.language))},()=>{this._showCodeError(qi("errors.auto_submit_failed",this.hass.language))},t=>{var e;return this.isConnected&&!!(null===(e=this._config)||void 0===e?void 0:e.auto_submit)&&this._config.entity===t})}static async getConfigElement(){return await Promise.resolve().then(function(){return sa}),document.createElement("alarmo-card-editor-plus")}static async getStubConfig(t){let e=Object.keys(t.states).find(t=>"alarm_control_panel"==Fi(t));return await Yi(t).then(t=>{const i=t.sort((t,e)=>Number(t.area_id)-Number(e.area_id));i.length&&(e=i[0].entity_id)}),{type:"custom:alarmo-card-plus",entity:e}}async getCardSize(){var t;if(!this._config||!this.hass)return 9;const e=this.hass.states[this._config.entity];return e&&(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)===Ce?!Ki(e)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(t){var e;!(null==t?void 0:t.button_scale_actions)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_actions:null==t?void 0:t.button_scale})),!(null==t?void 0:t.button_scale_keypad)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_keypad:null==t?void 0:t.button_scale})),(t=>{if(!t||!t.entity||"alarm_control_panel"!==Fi(t.entity))throw new Error("Invalid configuration provided for entity");if(Vi(t.button_scale_keypad)&&("number"!=typeof t.button_scale_keypad||t.button_scale_keypad<1||t.button_scale_keypad>Ie))throw new Error("Invalid configuration provided for button_scale_keypad");if(Vi(t.button_scale_actions)&&("number"!=typeof t.button_scale_actions||t.button_scale_actions<1||t.button_scale_actions>Ie))throw new Error("Invalid configuration provided for button_scale_actions");if(Vi(t.auto_submit_rate_limit)&&("number"!=typeof t.auto_submit_rate_limit||!Number.isInteger(t.auto_submit_rate_limit)||t.auto_submit_rate_limit<10||t.auto_submit_rate_limit>He))throw new Error("Invalid configuration provided for auto_submit_rate_limit (10-120)")})(t);const i=this._config;this._config=Object.assign(Object.assign({},Pe),t),this._rateLimiter.limit=null!==(e=this._config.auto_submit_rate_limit)&&void 0!==e?e:Pe.auto_submit_rate_limit,i&&this.hass&&(i.entity!==this._config.entity&&(i.auto_submit||this._config.auto_submit)?(this._clearCode(),this.backendConnection=null,this.loadBackendConfig()):i.auto_submit!==this._config.auto_submit&&(this._config.auto_submit||(this._autoQueue.cancel(),this._processedInput=this._input),this._loadCodeLengths()))}disconnectedCallback(){var t;super.disconnectedCallback(),(null===(t=this._config)||void 0===t?void 0:t.auto_submit)&&this._clearCode(),this._stopRateLimitTimer()}hassSubscribe(){const t=()=>this._loadCodeLengths();return this.hass.connection.addEventListener("ready",t),this._loadCodeLengths(),this._rateLimiter.waitTime()&&this._startRateLimitTimer(),[this.hass.connection.subscribeMessage(t=>this._fetchData(t),{type:Le}),this.hass.connection.subscribeMessage(()=>this._loadCodeLengths(),{type:"alarmo_config_updated"}).catch(()=>()=>{}),Promise.resolve(()=>{var e;return null===(e=this.hass)||void 0===e?void 0:e.connection.removeEventListener("ready",t)})]}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||Yi(this.hass).then(t=>{const e=t.find(t=>t.entity_id==this._config.entity);e&&(this.area_id=e.area_id?e.area_id:null),this._areaIds=t.filter(t=>t.area_id).map(t=>String(t.area_id))}).then(()=>Xi(this.hass)).then(t=>{this._alarmoConfig=t,this.backendConnection=!0,this._loadCodeLengths()}).then(()=>{return t=this.hass,e=this._config.entity,t.callWS({type:"alarmo/ready_to_arm_modes",entity_id:e});var t,e}).then(t=>{this.readyForArmModes=t.modes}).catch(t=>{this.backendConnection=!1})}_loadCodeLengths(){var t,e;const i=++this._codeLengthsRequest;if(!this.hass||!(null===(t=this._config)||void 0===t?void 0:t.auto_submit)||!this.backendConnection||(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)!==Ce)return this._codeLengths={arm:[],disarm:[]},void(this._codeLengthsStatus="idle");var a;this._codeLengthsStatus="loading",(a=this.hass,a.callWS({type:"alarmo/users"})).then(t=>{if(i!==this._codeLengthsRequest)return;const e=this.area_id?[String(this.area_id)]:this._areaIds;this._codeLengths=((t,e)=>{const i=t.filter(t=>{var i;return t.enabled&&t.code_format===Ce&&t.code_length>0&&(!(null===(i=t.area_limit)||void 0===i?void 0:i.length)||e.every(e=>t.area_limit.map(String).includes(e)))}),a=t=>[...new Set(t.map(t=>t.code_length))].sort((t,e)=>t-e);return{arm:a(i.filter(t=>t.can_arm)),disarm:a(i.filter(t=>t.can_disarm))}})(Object.values(t),e),this._codeLengthsStatus="ready",this._input!==this._processedInput&&this._autoSubmit()}).catch(()=>{i===this._codeLengthsRequest&&(this._codeLengths={arm:[],disarm:[]},this._codeLengthsStatus="failed")})}async _fetchData(t){if(t.data.area_id===this.area_id)switch(t.data.event){case Te.Arm:this._clearCode();break;case Te.Disarm:this._autoQueue.cancel();break;case Te.Trigger:break;case Te.InvalidCodeProvided:case Te.NoCodeProvided:if(Be(t.data.context_id))break;this._showCodeError(),this.subscribedEntities=[];break;case Te.FailedToArm:this.warning="blocking_sensors",this._last_command=t.data.command,this._last_code=this._input,this._clearCode();break;case Te.CommandNotAllowed:this._clearCode();break;case Te.TriggerTimeExpired:break;case Te.ReadyToArmModesChanged:this.readyForArmModes=t.data.modes}}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language||e.config.state!==this.hass.config.state)return!0;if(e.states[this._config.entity]!==this.hass.states[this._config.entity]){const t=e.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(t,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(t=>e.states[t]!==this.hass.states[t]))}processStateUpdate(t,e){e.state!=t.state&&(this.subscribedEntities=[]),(e.state==Se.Disarmed||e.last_changed!==t.last_changed)&&this._clearCode()}render(){var t,e;if(!this._config||!this.hass||null===this.backendConnection)return Xt``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?Xt`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:Xt`
      <ha-card>
        ${i.state===Se.Disarmed?Xt`
              <ha-dropdown
                placement="bottom-end"
                id="cornerMenu"
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <span class="title">
                  ${qi("arm_options.heading",this.hass.language)}
                </span>
                <ha-dropdown-item @click=${t=>this._toggleArmOptions(t,"skip_delay")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.skip_delay?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${qi("arm_options.skip_delay",this.hass.language)}
                </ha-dropdown-item>
                <ha-dropdown-item @click=${t=>this._toggleArmOptions(t,"force")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.force?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${qi("arm_options.force",this.hass.language)}
                </ha-dropdown-item>
              </ha-dropdown>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge-plus
              .hass=${this.hass}
              .entity=${this._config.entity}
              style="--alarm-state-color: ${Ji(i,this._config)}"
            >
            </alarmo-state-badge-plus>
          </div>
          <div class="summary">
            <div class="name">
              ${((t,e)=>Wi(e.name)?t.attributes.friendly_name:e.name)(i,this._config)}
            </div>
            <div class="state">
              ${Qi(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="actions" class="actions">
          ${this._renderActions()}
        </div>

        ${!Ki(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?Xt``:Xt`
              <ha-input
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!Ki(i)}
                @input=${this._handleCodeInput}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)===Ce?"numeric":"text"}
              ></ha-input>
            `}
        ${this._renderAutoSubmitStatus()}
        ${!Ki(i)&&!this._config.keep_keypad_visible||(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)!==Ce||this._config.use_code_dialog||this._config.hide_keypad?Xt``:Xt`
          <div id="keypad" class="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${pa.map(t=>""===t?Xt`
              <alarmo-button-plus
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
                class="placeholder"
              ></alarmo-button-plus>
            `:Xt`
              <alarmo-button-plus
                .value="${t}"
                @click=${this._handlePadClick}
                ?disabled=${!Ki(i)||("clear"===t?!this._input.length:this._isRateLimited())}
                class="${"clear"!==t?"numberKey":"clear"}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===t?Xt`<ha-icon icon="mdi:close" style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"></ha-icon>`:Xt` <span>${t}</span>`}
              </alarmo-button-plus>
            `)}
          </div>
        `}
      </ha-card>
    `:Xt`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return Xt``;const t=this.hass.states[this._config.entity],e=this._config.show_ready_indicator;return Xt`
      <alarmo-actions-bar-plus
        @button-clicked=${t=>this._handleActionClick(t,t.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${e?this.readyForArmModes:void 0}
        style="--alarm-state-color: ${Ji(t,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar-plus>
    `}_renderWarning(){var t;if(!this.hass||!this._config||!this._config.show_messages)return Xt``;const e=this.hass.states[this._config.entity];return e.attributes.open_sensors&&e.state==Se.Triggered||"blocking_sensors"==this.warning&&e.attributes.open_sensors?Xt`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?qi("errors.blocking_sensors",this.hass.language):qi("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(e.attributes.open_sensors).map(([t])=>(this.subscribedEntities.includes(t)||this.subscribedEntities.push(t),Xt`
                  <div class="badge">
                    <alarmo-sensor-badge-plus .hass=${this.hass} .entity=${t}> </alarmo-sensor-badge-plus>
                  </div>
                `))}
            </div>
          ${"blocking_sensors"==this.warning&&e.attributes.open_sensors?Xt`
            <alarmo-button-plus
              @click=${this._forceRetryClick}
              style="--content-scale: ${this._config.button_scale_actions}"
              ?scaled=${1!=this._config.button_scale_actions}
            >
              <span>${qi("arm_options.force",this.hass.language)}</span>
            </alarmo-button-plus>
          `:""}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:e.state.startsWith("armed_")&&(null===(t=e.attributes.bypassed_sensors)||void 0===t?void 0:t.length)&&this._config.show_bypassed_sensors?Xt`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${qi("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${e.attributes.bypassed_sensors.map(t=>(this.subscribedEntities.includes(t)||this.subscribedEntities.push(t),Xt`
                  <div class="badge">
                    <alarmo-sensor-badge-plus .hass=${this.hass} .entity=${t}> </alarmo-sensor-badge-plus>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:Xt``}_renderAutoSubmitStatus(){var t;return this.hass&&(null===(t=this._config)||void 0===t?void 0:t.auto_submit)&&this._autoSubmitApplies()?"failed"===this._codeLengthsStatus?Xt`
        <div class="auto-submit-status">
          <span>${qi("errors.auto_submit_unavailable",this.hass.language)}</span>
          <button type="button" @click=${()=>this._loadCodeLengths()}>
            ${this.hass.localize("ui.common.retry")||"Retry"}
          </button>
        </div>
      `:this._rateLimitWait>0?Xt`
        <div class="auto-submit-status">
          <span>
            ${qi("errors.auto_submit_rate_limited",this.hass.language,"{seconds}",String(this._rateLimitWait))}
          </span>
        </div>
      `:Xt``:Xt``}_handlePadClick(t){const e=t.currentTarget.value;("clear"===e||this._consumeDigits(1))&&(this._clearCodeError(),"clear"===e&&(this._autoQueue.cancel(),this._processedInput=""),this._input="clear"===e?"":this._input+e,this._autoSubmit())}_handleCodeInput(t){const e=t.target,i=this._input;let a=e.value;const s=We(i,a),o=a.length-s;if(o>0){const t=this._consumeDigits(o);if(t<o&&(a=a.slice(0,s+t),e.value=a,a===i))return}this._clearCodeError(),this._input=a,this._setCodeClearTimer(),this._autoSubmit()}_autoSubmitApplies(){var t,e;if(!this.isConnected||!this.hass||!(null===(t=this._config)||void 0===t?void 0:t.auto_submit))return!1;if((null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)!==Ce)return!1;const i=this.hass.states[this._config.entity];return!!i&&i.state!==Se.Disarmed&&Ki(i)}_isRateLimited(){return this._rateLimitWait>0&&this._autoSubmitApplies()}_consumeDigits(t){if(!this._autoSubmitApplies())return t;const e=this._rateLimiter.consume(t);return e<t&&this._startRateLimitTimer(),e}_startRateLimitTimer(){const t=()=>{this._rateLimitWait=Math.ceil(this._rateLimiter.waitTime()/1e3),this._rateLimitWait||this._stopRateLimitTimer()};t(),this._rateLimitWait&&!this._rateLimitTimer&&(this._rateLimitTimer=window.setInterval(t,1e3))}_stopRateLimitTimer(){this._rateLimitTimer&&clearInterval(this._rateLimitTimer),this._rateLimitTimer=0,this._rateLimitWait=0}_autoSubmit(){if(!this._autoSubmitApplies())return void(this._processedInput=this._input);if("ready"!==this._codeLengthsStatus)return;const t=this._codeLengths.disarm,e=Fe(this._processedInput,this._input,t,this._config.auto_submit_anywhere);for(const t of e)if(!this._autoQueue.add(t,this._config.entity))return;this._input=this._input.slice(-Math.max(20,...t)),this._processedInput=this._input}async _handleActionClick(t,e){var i;t.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&Ki(a)){const i=await new Promise(i=>{var a;const s=t.target,o={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:e,armOptions:this.armOptions,auto_submit:this._config.auto_submit&&(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_format)===Ce&&"ready"===this._codeLengthsStatus?{lengths:e==Ee.Disarm?this._codeLengths.disarm:this._codeLengths.arm,anywhere:this._config.auto_submit_anywhere,limiter:this._rateLimiter}:void 0,cancel:()=>{i(null)},confirm:t=>{i(t)}};ta(s,"show-dialog",{dialogTag:"alarmo-code-dialog-plus",dialogImport:()=>Promise.resolve().then(function(){return ha}),dialogParams:o})});i!=Te.Arm&&i!=Te.Disarm||(this.warning="",this.armOptions=Object.assign({},Ne))}else e==Ee.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:je[e],code:this._input})),this.warning="",this.armOptions=Object.assign({},Ne)}_showCodeError(t=qi("errors.invalid_pin",this.hass.language)){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");i&&(i.classList.remove("error"),i.classList.add("error"),i.hint=t)}_clearCodeError(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");e&&e.classList.contains("error")&&(e.classList.remove("error"),e.hint="",this._input="",this._processedInput="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._processedInput="",this._autoQueue.cancel(),this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(t,e){t.stopImmediatePropagation(),t.target.blur(),"skip_delay"==e?this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay}):"force"==e&&(this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force}))}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let t=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:je[t],code:this._last_code,force:!0}),this._last_command=void 0,this._last_code=void 0}static get styles(){return P`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
        gap: 20px;
        margin: 0px 50px;
      }
      .header .icon {
        display: flex;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button-plus {
        margin: 0 8px 8px;
      }
      ha-input {
        margin: 15px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
        margin-right: calc(50% - 200px / 2);
      }
      ha-input.error {
        animation: shake 0.2s ease-in-out 0s 2;
        --ha-color-border-neutral-loud: var(--ha-color-on-danger-quiet);
      }
      ha-input.error:not([value='']) {
        --secondary-text-color: var(--ha-color-on-danger-quiet);
      }
      ha-input.error::part(wa-hint) {
        color: var(--ha-color-on-danger-quiet);
      }
      #keypad {
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        direction: ltr;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: auto;
        grid-gap: var(--ha-space-4, 16px);
      }
      #keypad alarmo-button-plus {
        width: calc(var(--content-scale, 1) * 56px);
        height: calc(var(--content-scale, 1) * 56px);
        --alarmo-button-font-size: 24px;
        --alarmo-button-background-color: var(--primary-text-color);
        --alarmo-button-background-opacity: 0.05;
        --alarmo-button-border-radius: 50%;
        --alarmo-button-border-color: none;
        --alarmo-button-color: var(--primary-text-color);
        font-weight: 500;
      }
      #keypad alarmo-button-plus.clear:not([disabled]) {
        --alarmo-button-background-color: var(--red-color);
        --alarmo-button-color: var(--red-color);
        --alarmo-button-background-opacity: 0.10;
      }
      #keypad alarmo-button-plus.placeholder {
        visibility: hidden;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge-plus {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      div.messagebox alarmo-button-plus {
        display: flex;
        justify-self: center;
        margin-bottom: 10px;
      }
      ha-dropdown {
        display: block;
        position: absolute;
        right: 4px;
        top: 4px;
      }
      ha-dropdown span.title {
        font-weight: bold;
        display: flex;
        height: 32px;
        align-items: center;
        padding: 0px 8px;
      }
      @media all and (max-width: 250px) {
        ha-dropdown {
          display: none;
        }
      }
      div.auto-submit-status {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0px 16px 8px;
        font-size: 14px;
        color: var(--error-color);
      }
      div.auto-submit-status button {
        background: none;
        border: none;
        padding: 4px 8px;
        font: inherit;
        font-weight: 500;
        color: var(--primary-color);
        cursor: pointer;
      }
    `}},e([Ae({attribute:!1})],t.AlarmoCard.prototype,"hass",void 0),e([xe()],t.AlarmoCard.prototype,"_config",void 0),e([xe()],t.AlarmoCard.prototype,"_alarmoConfig",void 0),e([xe()],t.AlarmoCard.prototype,"_input",void 0),e([xe()],t.AlarmoCard.prototype,"warning",void 0),e([xe()],t.AlarmoCard.prototype,"area_id",void 0),e([xe()],t.AlarmoCard.prototype,"armOptions",void 0),e([xe()],t.AlarmoCard.prototype,"readyForArmModes",void 0),e([xe()],t.AlarmoCard.prototype,"backendConnection",void 0),e([xe()],t.AlarmoCard.prototype,"showBypassedSensors",void 0),e([xe()],t.AlarmoCard.prototype,"_codeLengthsStatus",void 0),e([xe()],t.AlarmoCard.prototype,"_rateLimitWait",void 0),t.AlarmoCard=e([$e("alarmo-card-plus")],t.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card-plus",name:"Alarmo Card Plus",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD-PLUS  \n%c  Version: ${"v1.6.9".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),t}({});
