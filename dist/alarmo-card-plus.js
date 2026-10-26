var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var s,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,i,a,s,o,n){try{var r=e[o](n),l=r.value}catch(e){return void i(e)}r.done?t(l):Promise.resolve(l).then(a,s)}function o(e,t,i){return t=u(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(e,_()?Reflect.construct(t,i||[],u(e).constructor):t.apply(e,i))}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,w(a.key),a)}}function l(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=x(e))||t){i&&(e=i);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return n=e.done,e},e:function(e){r=!0,o=e},f:function(){try{n||null==i.return||i.return()}finally{if(r)throw o}}}}function c(e,t,i){return(t=w(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(a){var s=Object.getOwnPropertyDescriptor(a,t);return s.get?s.get.call(arguments.length<3?e:i):s.value}},h.apply(null,arguments)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_=function(){return!!e})()}function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach(function(t){c(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function v(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var e,t,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.toStringTag||"@@toStringTag";function o(i,a,s,o){var l=a&&a.prototype instanceof r?a:r,d=Object.create(l.prototype);return f(d,"_invoke",function(i,a,s){var o,r,l,d=0,c=s||[],h=!1,u={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,i){return o=t,r=0,l=e,u.n=i,n}};function p(i,a){for(r=i,l=a,t=0;!h&&d&&!s&&t<c.length;t++){var s,o=c[t],p=u.p,_=o[2];i>3?(s=_===a)&&(l=o[(r=o[4])?5:(r=3,3)],o[4]=o[5]=e):o[0]<=p&&((s=i<2&&p<o[1])?(r=0,u.v=a,u.n=o[1]):p<_&&(s=i<3||o[0]>a||a>_)&&(o[4]=i,o[5]=a,u.n=_,r=0))}if(s||i>1)return n;throw h=!0,a}return function(s,c,_){if(d>1)throw TypeError("Generator is already running");for(h&&1===c&&p(c,_),r=c,l=_;(t=r<2?e:l)||!h;){o||(r?r<3?(r>1&&(u.n=-1),p(r,l)):u.n=l:u.v=l);try{if(d=2,o){if(r||(s="next"),t=o[s]){if(!(t=t.call(o,l)))throw TypeError("iterator result is not an object");if(!t.done)return t;l=t.value,r<2&&(r=0)}else 1===r&&(t=o.return)&&t.call(o),r<2&&(l=TypeError("The iterator does not provide a '"+s+"' method"),r=1);o=e}else if((t=(h=u.n<0)?l:i.call(a,u))!==n)break}catch(t){o=e,r=1,l=t}finally{d=1}}return{value:t,done:h}}}(i,s,o),!0),d}var n={};function r(){}function l(){}function d(){}t=Object.getPrototypeOf;var c=[][a]?t(t([][a]())):(f(t={},a,function(){return this}),t),h=d.prototype=r.prototype=Object.create(c);function u(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,f(e,s,"GeneratorFunction")),e.prototype=Object.create(h),e}return l.prototype=d,f(h,"constructor",d),f(d,"constructor",l),l.displayName="GeneratorFunction",f(d,s,"GeneratorFunction"),f(h),f(h,s,"Generator"),f(h,a,function(){return this}),f(h,"toString",function(){return"[object Generator]"}),(v=function(){return{w:o,m:u}})()}function f(e,t,i,a){var s=Object.defineProperty;try{s({},"",{})}catch(e){s=0}f=function(e,t,i,a){function o(t,i){f(e,t,function(e){return this._invoke(t,i,e)})}t?s?s(e,t,{value:i,enumerable:!a,configurable:!a,writable:!a}):e[t]=i:(o("next",0),o("throw",1),o("return",2))},f(e,t,i,a)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,s,o,n,r=[],l=!0,d=!1;try{if(o=(i=i.call(e)).next,0===t);else for(;!(l=(a=o.call(i)).done)&&(r.push(a.value),r.length!==t);l=!0);}catch(e){d=!0,s=e}finally{try{if(!l&&null!=i.return&&(n=i.return(),Object(n)!==n))return}finally{if(d)throw s}}return r}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t,i,a){var s=h(u(e.prototype),t,i);return 2&a&&"function"==typeof s?function(e){return s.apply(i,e)}:s}function k(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i;if("undefined"!=typeof Symbol&&void 0!==(i=e[Symbol.toPrimitive])){var a=i.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:t+""}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function x(e,t){if(e){if("string"==typeof e)return i(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function C(e){var t="function"==typeof Map?new Map:void 0;return C=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(_())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var s=new(e.bind.apply(e,a));return i&&b(s,i.prototype),s}(e,arguments,u(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),b(i,e)},C(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var S,O,E,z=globalThis,j=z.ShadowRoot&&(void 0===z.ShadyCSS||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),L=new WeakMap,M=function(){return l(function e(t,i,a){if(n(this,e),this._$cssResult$=!0,a!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i},[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(j&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=L.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&L.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),P=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=1===e.length?e[0]:i.reduce(function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]},e[0]);return new M(s,e,T)},I=j?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=d(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new M("string"==typeof e?e:e+"",void 0,T)}(i)}(e):e},H=Object.is,N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,q=globalThis,V=q.trustedTypes,W=V?V.emptyScript:"",F=q.reactiveElementPolyfillSupport,Z=function(e,t){return e},G={toAttribute:function(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Q=function(e,t){return!H(e,t)},K={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:Q};null!==(S=Symbol.metadata)&&void 0!==S||(Symbol.metadata=Symbol("metadata")),null!==(O=q.litPropertyMetadata)&&void 0!==O||(q.litPropertyMetadata=new WeakMap);var J,Y=function(e){function t(){var e;return n(this,t),(e=o(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return p(t,e),l(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise(function(e){return t.enableUpdating=e}),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(function(e){return e(t)})}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=d(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(j)e.adoptedStyleSheets=t.map(function(e){return e instanceof CSSStyleSheet?e:e.styleSheet});else{var i,a=d(t);try{for(a.s();!(i=a.n()).done;){var s=i.value,o=document.createElement("style"),n=z.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=s.cssText,e.appendChild(o)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach(function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$ET",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var s,o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:G).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var s,o,n,r=i.getPropertyOptions(a),l="function"==typeof r.converter?{fromAttribute:r.converter}:void 0!==(null===(s=r.converter)||void 0===s?void 0:s.fromAttribute)?r.converter:G;this._$Em=a;var d=l.fromAttribute(t,r.type);this[a]=null!==(o=null!=d?d:null===(n=this._$Ej)||void 0===n?void 0:n.get(a))&&void 0!==o?o:d,this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;if(void 0!==e){var o,n,r=this.constructor;if(!1===a&&(s=this[e]),null!=i||(i=r.getPropertyOptions(e)),!((null!==(o=i.hasChanged)&&void 0!==o?o:Q)(s,t)||i.useDefault&&i.reflect&&s===(null===(n=this._$Ej)||void 0===n?void 0:n.get(e))&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}},{key:"C",value:function(e,t,i,a){var s,o,n,r=i.useDefault,l=i.reflect,d=i.wrapped;r&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(o=null!=a?a:t)&&void 0!==o?o:this[e]),!0!==d||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===l&&this._$Em!==e&&(null!==(n=this._$Eq)&&void 0!==n?n:this._$Eq=new Set).add(e))}},{key:"_$EP",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise(function(a,o){var n=e.apply(t,i);function r(e){s(n,a,o,r,l,"next",e)}function l(e){s(n,a,o,r,l,"throw",e)}r(void 0)})}}(v().m(function e(){var t,i;return v().w(function(e){for(;;)switch(e.p=e.n){case 0:return this.isUpdatePending=!0,e.p=1,e.n=2,this._$ES;case 2:e.n=4;break;case 3:e.p=3,i=e.v,Promise.reject(i);case 4:if(null==(t=this.scheduleUpdate())){e.n=5;break}return e.n=5,t;case 5:return e.a(2,!this.isUpdatePending)}},e,this,[[1,3]])})),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=d(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=y(t.value,2),s=a[0],o=a[1];this[s]=o}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var n=this.constructor.elementProperties;if(n.size>0){var r,l=d(n);try{for(l.s();!(r=l.n()).done;){var c=y(r.value,2),h=c[0],u=c[1],p=u.wrapped,_=this[h];!0!==p||this._$AL.has(h)||void 0===_||this.C(h,void 0,u,_)}}catch(e){l.e(e)}finally{l.f()}}}var m=!1,g=this._$AL;try{var v;(m=this.shouldUpdate(g))?(this.willUpdate(g),null!==(v=this._$EO)&&void 0!==v&&v.forEach(function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(g)):this._$EM()}catch(g){throw m=!1,this._$EM(),g}m&&this._$AE(g)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EM",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Eq&&(this._$Eq=this._$Eq.forEach(function(e){return t._$ET(e,t[e])})),this._$EM()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&k(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&N(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,s=null!==(a=R(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},o=s.get,n=s.set;return{get:o,set:function(t){var a=null==o?void 0:o.call(this);null!=n&&n.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:K}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(Z("elementProperties"))){var e=B(this);e.finalize(),void 0!==e.l&&(this.l=k(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(Z("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){var e,t=this.properties,i=d([].concat(k(D(t)),k(U(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var s=this[Symbol.metadata];if(null!==s){var o=litPropertyMetadata.get(s);if(void 0!==o){var n,r=d(o);try{for(r.s();!(n=r.n()).done;){var l=y(n.value,2),c=l[0],h=l[1];this.elementProperties.set(c,h)}}catch(e){r.e(e)}finally{r.f()}}}this._$Eh=new Map;var u,p=d(this.elementProperties);try{for(p.s();!(u=p.n()).done;){var _=y(u.value,2),m=_[0],g=_[1],v=this._$Eu(m,g);void 0!==v&&this._$Eh.set(v,m)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=d(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var s=i.value;t.unshift(I(s))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(I(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(C(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Z("elementProperties")]=new Map,Y[Z("finalized")]=new Map,null!=F&&F({ReactiveElement:Y}),(null!==(E=q.reactiveElementVersions)&&void 0!==E?E:q.reactiveElementVersions=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var X=globalThis,ee=X.trustedTypes,te=ee?ee.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,ie="$lit$",ae="lit$".concat(Math.random().toFixed(9).slice(2),"$"),se="?"+ae,oe="<".concat(se,">"),ne=document,re=function(){return ne.createComment("")},le=function(e){return null===e||"object"!=A(e)&&"function"!=typeof e},de=Array.isArray,ce="[ \t\n\f\r]",he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,pe=/>/g,_e=RegExp(">|".concat(ce,"(?:([^\\s\"'>=/]+)(").concat(ce,"*=").concat(ce,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),me=/'/g,ge=/"/g,ve=/^(?:script|style|textarea|title)$/i,fe=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),ye=new WeakMap,$e=ne.createTreeWalker(ne,129);function ke(e,t){if(!de(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==te?te.createHTML(t):t}var we=function(){return l(function e(t,i){var a,s=t.strings,o=t._$litType$;n(this,e),this.parts=[];var r=0,l=0,c=s.length-1,h=this.parts,u=function(e,t){for(var i,a=e.length-1,s=[],o=2===t?"<svg>":3===t?"<math>":"",n=he,r=0;r<a;r++){for(var l=e[r],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(n.lastIndex=u,null!==(c=n.exec(l)));)u=n.lastIndex,n===he?"!--"===c[1]?n=ue:void 0!==c[1]?n=pe:void 0!==c[2]?(ve.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=_e):void 0!==c[3]&&(n=_e):n===_e?">"===c[0]?(n=null!=i?i:he,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=void 0===c[3]?_e:'"'===c[3]?ge:me):n===ge||n===me?n=_e:n===ue||n===pe?n=he:(n=_e,i=void 0);var p=n===_e&&e[r+1].startsWith("/>")?" ":"";o+=n===he?l+oe:h>=0?(s.push(d),l.slice(0,h)+ie+l.slice(h)+ae+p):l+ae+(-2===h?r:p)}return[ke(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]}(s,o),p=y(u,2),_=p[0],m=p[1];if(this.el=e.createElement(_,i),$e.currentNode=this.el.content,2===o||3===o){var g=this.el.content.firstChild;g.replaceWith.apply(g,k(g.childNodes))}for(;null!==(a=$e.nextNode())&&h.length<c;){if(1===a.nodeType){if(a.hasAttributes()){var v,f=d(a.getAttributeNames());try{for(f.s();!(v=f.n()).done;){var b=v.value;if(b.endsWith(ie)){var $=m[l++],w=a.getAttribute(b).split(ae),A=/([.?@])?(.*)/.exec($);h.push({type:1,index:r,name:A[2],strings:w,ctor:"."===A[1]?Ee:"?"===A[1]?ze:"@"===A[1]?je:Oe}),a.removeAttribute(b)}else b.startsWith(ae)&&(h.push({type:6,index:r}),a.removeAttribute(b))}}catch(e){f.e(e)}finally{f.f()}}if(ve.test(a.tagName)){var x=a.textContent.split(ae),C=x.length-1;if(C>0){a.textContent=ee?ee.emptyScript:"";for(var S=0;S<C;S++)a.append(x[S],re()),$e.nextNode(),h.push({type:2,index:++r});a.append(x[C],re())}}}else if(8===a.nodeType)if(a.data===se)h.push({type:2,index:r});else for(var O=-1;-1!==(O=a.data.indexOf(ae,O+1));)h.push({type:7,index:r}),O+=ae.length-1;r++}},null,[{key:"createElement",value:function(e,t){var i=ne.createElement("template");return i.innerHTML=e,i}}])}();function Ae(e,t){var i,a,s,o,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===fe)return t;var d=void 0!==l?null===(i=r._$Co)||void 0===i?void 0:i[l]:r._$Cl,c=le(t)?void 0:t._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(s=d)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===c?d=void 0:(d=new c(e))._$AT(e,r,l),void 0!==l?(null!==(n=r._$Co)&&void 0!==n?n:r._$Co=[])[l]=d:r._$Cl=d),void 0!==d&&(t=Ae(e,d._$AS(e,t.values),d,l)),t}var xe,Ce=function(){return l(function e(t,i){n(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,s=i.parts,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ne).importNode(a,!0);$e.currentNode=o;for(var n=$e.nextNode(),r=0,l=0,d=s[0];void 0!==d;){var c;if(r===d.index){var h=void 0;2===d.type?h=new Se(n,n.nextSibling,this,e):1===d.type?h=new d.ctor(n,d.name,d.strings,this,e):6===d.type&&(h=new Te(n,this,e)),this._$AV.push(h),d=s[++l]}r!==(null===(c=d)||void 0===c?void 0:c.index)&&(n=$e.nextNode(),r++)}return $e.currentNode=ne,o}},{key:"p",value:function(e){var t,i=0,a=d(this._$AV);try{for(a.s();!(t=a.n()).done;){var s=t.value;void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Se=function(){function e(t,i,a,s){var o;n(this,e),this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=Ae(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),le(e)?e===be||null==e||""===e?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==fe&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return de(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==be&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,s="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=we.createElement(ke(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.p(i);else{var o=new Ce(s,this),n=o.u(this.options);o.p(i),this.T(n),this._$AH=o}}},{key:"_$AC",value:function(e){var t=ye.get(e.strings);return void 0===t&&ye.set(e.strings,t=new we(e)),t}},{key:"k",value:function(t){de(this._$AH)||(this._$AH=[],this._$AR());var i,a,s=this._$AH,o=0,n=d(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;o===s.length?s.push(i=new e(this.O(re()),this.O(re()),this,this.options)):i=s[o],i._$AI(r),o++}}catch(e){n.e(e)}finally{n.f()}o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Oe=function(){return l(function e(t,i,a,s,o){n(this,e),this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=be},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=this.strings,o=!1;if(void 0===s)e=Ae(this,e,t,0),(o=!le(e)||e!==this._$AH&&e!==fe)&&(this._$AH=e);else{var n,r,l=e;for(e=s[0],n=0;n<s.length-1;n++)(r=Ae(this,l[i+n],t,n))===fe&&(r=this._$AH[n]),o||(o=!le(r)||r!==this._$AH[n]),r===be?e=be:e!==be&&(e+=(null!=r?r:"")+s[n+1]),this._$AH[n]=r}o&&!a&&this.j(e)}},{key:"j",value:function(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),Ee=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===be?void 0:e}}])}(Oe),ze=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}])}(Oe),je=function(e){function t(e,i,a,s,r){var l;return n(this,t),(l=o(this,t,[e,i,a,s,r])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=Ae(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:be)!==fe){var i=this._$AH,a=e===be&&i!==be||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==be&&(i===be||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Oe),Te=function(){return l(function e(t,i,a){n(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){Ae(this,e)}}])}(),Le=X.litHtmlPolyfillSupport;null!=Le&&Le(we,Se),(null!==(J=X.litHtmlVersions)&&void 0!==J?J:X.litHtmlVersions=[]).push("3.3.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Me=globalThis,Pe=Me.trustedTypes,Ie=Pe?Pe.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,He="$lit$",Ne="lit$".concat(Math.random().toFixed(9).slice(2),"$"),Re="?"+Ne,De="<".concat(Re,">"),Ue=document,Be=function(){return Ue.createComment("")},qe=function(e){return null===e||"object"!=A(e)&&"function"!=typeof e},Ve=Array.isArray,We="[ \t\n\f\r]",Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Ge=/>/g,Qe=RegExp(">|".concat(We,"(?:([^\\s\"'>=/]+)(").concat(We,"*=").concat(We,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),Ke=/'/g,Je=/"/g,Ye=/^(?:script|style|textarea|title)$/i,Xe=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return{_$litType$:e,strings:t,values:a}}}(1),et=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),it=new WeakMap,at=Ue.createTreeWalker(Ue,129);function st(e,t){if(!Ve(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ie?Ie.createHTML(t):t}var ot=function(e,t){for(var i,a=e.length-1,s=[],o=2===t?"<svg>":3===t?"<math>":"",n=Fe,r=0;r<a;r++){for(var l=e[r],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(n.lastIndex=u,null!==(c=n.exec(l)));)u=n.lastIndex,n===Fe?"!--"===c[1]?n=Ze:void 0!==c[1]?n=Ge:void 0!==c[2]?(Ye.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=Qe):void 0!==c[3]&&(n=Qe):n===Qe?">"===c[0]?(n=null!=i?i:Fe,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=void 0===c[3]?Qe:'"'===c[3]?Je:Ke):n===Je||n===Ke?n=Qe:n===Ze||n===Ge?n=Fe:(n=Qe,i=void 0);var p=n===Qe&&e[r+1].startsWith("/>")?" ":"";o+=n===Fe?l+De:h>=0?(s.push(d),l.slice(0,h)+He+l.slice(h)+Ne+p):l+Ne+(-2===h?r:p)}return[st(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]},nt=function(){return l(function e(t,i){var a,s=t.strings,o=t._$litType$;n(this,e),this.parts=[];var r=0,l=0,c=s.length-1,h=this.parts,u=y(ot(s,o),2),p=u[0],_=u[1];if(this.el=e.createElement(p,i),at.currentNode=this.el.content,2===o||3===o){var m=this.el.content.firstChild;m.replaceWith.apply(m,k(m.childNodes))}for(;null!==(a=at.nextNode())&&h.length<c;){if(1===a.nodeType){if(a.hasAttributes()){var g,v=d(a.getAttributeNames());try{for(v.s();!(g=v.n()).done;){var f=g.value;if(f.endsWith(He)){var b=_[l++],$=a.getAttribute(f).split(Ne),w=/([.?@])?(.*)/.exec(b);h.push({type:1,index:r,name:w[2],strings:$,ctor:"."===w[1]?ht:"?"===w[1]?ut:"@"===w[1]?pt:ct}),a.removeAttribute(f)}else f.startsWith(Ne)&&(h.push({type:6,index:r}),a.removeAttribute(f))}}catch(e){v.e(e)}finally{v.f()}}if(Ye.test(a.tagName)){var A=a.textContent.split(Ne),x=A.length-1;if(x>0){a.textContent=Pe?Pe.emptyScript:"";for(var C=0;C<x;C++)a.append(A[C],Be()),at.nextNode(),h.push({type:2,index:++r});a.append(A[x],Be())}}}else if(8===a.nodeType)if(a.data===Re)h.push({type:2,index:r});else for(var S=-1;-1!==(S=a.data.indexOf(Ne,S+1));)h.push({type:7,index:r}),S+=Ne.length-1;r++}},null,[{key:"createElement",value:function(e,t){var i=Ue.createElement("template");return i.innerHTML=e,i}}])}();function rt(e,t){var i,a,s,o,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===et)return t;var d=void 0!==l?null===(i=r._$Co)||void 0===i?void 0:i[l]:r._$Cl,c=qe(t)?void 0:t._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(s=d)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===c?d=void 0:(d=new c(e))._$AT(e,r,l),void 0!==l?(null!==(n=r._$Co)&&void 0!==n?n:r._$Co=[])[l]=d:r._$Cl=d),void 0!==d&&(t=rt(e,d._$AS(e,t.values),d,l)),t}var lt=function(){return l(function e(t,i){n(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,s=i.parts,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Ue).importNode(a,!0);at.currentNode=o;for(var n=at.nextNode(),r=0,l=0,d=s[0];void 0!==d;){var c;if(r===d.index){var h=void 0;2===d.type?h=new dt(n,n.nextSibling,this,e):1===d.type?h=new d.ctor(n,d.name,d.strings,this,e):6===d.type&&(h=new _t(n,this,e)),this._$AV.push(h),d=s[++l]}r!==(null===(c=d)||void 0===c?void 0:c.index)&&(n=at.nextNode(),r++)}return at.currentNode=Ue,o}},{key:"p",value:function(e){var t,i=0,a=d(this._$AV);try{for(a.s();!(t=a.n()).done;){var s=t.value;void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),dt=function(){function e(t,i,a,s){var o;n(this,e),this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=rt(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),qe(e)?e===tt||null==e||""===e?(this._$AH!==tt&&this._$AR(),this._$AH=tt):e!==this._$AH&&e!==et&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return Ve(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==tt&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ue.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,s="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=nt.createElement(st(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.p(i);else{var o=new lt(s,this),n=o.u(this.options);o.p(i),this.T(n),this._$AH=o}}},{key:"_$AC",value:function(e){var t=it.get(e.strings);return void 0===t&&it.set(e.strings,t=new nt(e)),t}},{key:"k",value:function(t){Ve(this._$AH)||(this._$AH=[],this._$AR());var i,a,s=this._$AH,o=0,n=d(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;o===s.length?s.push(i=new e(this.O(Be()),this.O(Be()),this,this.options)):i=s[o],i._$AI(r),o++}}catch(e){n.e(e)}finally{n.f()}o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),ct=function(){return l(function e(t,i,a,s,o){n(this,e),this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=tt},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=this.strings,o=!1;if(void 0===s)e=rt(this,e,t,0),(o=!qe(e)||e!==this._$AH&&e!==et)&&(this._$AH=e);else{var n,r,l=e;for(e=s[0],n=0;n<s.length-1;n++)(r=rt(this,l[i+n],t,n))===et&&(r=this._$AH[n]),o||(o=!qe(r)||r!==this._$AH[n]),r===tt?e=tt:e!==tt&&(e+=(null!=r?r:"")+s[n+1]),this._$AH[n]=r}o&&!a&&this.j(e)}},{key:"j",value:function(e){e===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),ht=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===tt?void 0:e}}])}(ct),ut=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==tt)}}])}(ct),pt=function(e){function t(e,i,a,s,r){var l;return n(this,t),(l=o(this,t,[e,i,a,s,r])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=rt(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:tt)!==et){var i=this._$AH,a=e===tt&&i!==tt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==tt&&(i===tt||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(ct),_t=function(){return l(function e(t,i,a){n(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){rt(this,e)}}])}(),mt=Me.litHtmlPolyfillSupport;null!=mt&&mt(nt,dt),(null!==(xe=Me.litHtmlVersions)&&void 0!==xe?xe:Me.litHtmlVersions=[]).push("3.3.1");var gt,vt,ft=globalThis,bt=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).renderOptions={host:a(e)},e._$Do=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,a=$(t,"createRenderRoot",this,3)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),$(t,"update",this,3)([e]),this._$Do=function(e,t,i){var a,s=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,o=s._$litPart$;if(void 0===o){var n,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new dt(t.insertBefore(Be(),r),r,void 0,null!=i?i:{})}return o._$AI(e),o}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;$(t,"connectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;$(t,"disconnectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return et}}])}(Y);bt._$litElement$=!0,bt.finalized=!0,null===(gt=ft.litElementHydrateSupport)||void 0===gt||gt.call(ft,{LitElement:bt});var yt=ft.litElementPolyfillSupport;null==yt||yt({LitElement:bt}),(null!==(vt=ft.litElementVersions)&&void 0!==vt?vt:ft.litElementVersions=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var $t=function(e){return function(t,i){void 0!==i?i.addInitializer(function(){customElements.define(e,t)}):customElements.define(e,t)}},kt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:Q},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,s=i.metadata,o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){var n=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e,!0,i)},init:function(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===a){var r=i.name;return function(i){var a=this[r];t.call(this,i),this.requestUpdate(r,a,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function At(e){return function(t,i){return"object"==A(i)?wt(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function xt(e){return At(g(g({},e),{},{state:!0,attribute:!1}))}const Ct="number";var St;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(St||(St={}));const Ot={[St.ArmedAway]:"hass:shield-lock",[St.ArmedHome]:"hass:shield-home",[St.ArmedNight]:"hass:shield-moon",[St.ArmedVacation]:"hass:shield-airplane",[St.ArmedCustomBypass]:"hass:security",[St.Disarmed]:"hass:shield-off",[St.Arming]:"hass:shield-outline",[St.Pending]:"hass:shield-outline",[St.Triggered]:"hass:bell-ring"};var Et;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(Et||(Et={}));const zt={[Et.ArmAway]:"mdi:lock",[Et.ArmHome]:"mdi:home",[Et.ArmNight]:"mdi:moon-waning-crescent",[Et.ArmVacation]:"mdi:airplane",[Et.ArmCustomBypass]:"mdi:shield",[Et.Disarm]:"mdi:shield-off"},jt={[Et.ArmAway]:St.ArmedAway,[Et.ArmHome]:St.ArmedHome,[Et.ArmNight]:St.ArmedNight,[Et.ArmVacation]:St.ArmedVacation,[Et.ArmCustomBypass]:St.ArmedCustomBypass,[Et.Disarm]:St.Disarmed};var Tt;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Tt||(Tt={}));const Lt="alarmo_updated",Mt=["arming","pending"],Pt={type:"",entity:"",name:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1,auto_submit:!1,auto_submit_anywhere:!1,auto_submit_rate_limit:30},It=2.5,Ht=120,Nt={skip_delay:!1,force:!1};var Rt;!function(e){e.Red="red",e.Pink="pink",e.Purple="purple",e.DeepPurple="deep-purple",e.Indigo="indigo",e.Blue="blue",e.LightBlue="light-blue",e.Cyan="cyan",e.Teal="teal",e.Green="green",e.LightGreen="light-green",e.Lime="lime",e.Yellow="yellow",e.Amber="amber",e.Orange="orange",e.DeepOrange="deep-orange",e.Brown="brown",e.LightGrey="light-grey",e.Grey="grey",e.DarkGrey="dark-grey",e.BlueGrey="blue-grey",e.Black="black",e.White="white"}(Rt||(Rt={}));const Dt=8e15,Ut=9e15,Bt=e=>"number"==typeof e&&e>=Dt&&e<Ut;class qt{constructor(e,t=6e4,i=()=>Date.now()){this.limit=e,this.windowMs=t,this.now=i,this.stamps=[]}prune(){const e=this.now()-this.windowMs;for(;this.stamps.length&&this.stamps[0]<=e;)this.stamps.shift()}consume(e){this.prune();const t=Math.max(0,Math.min(e,this.limit-this.stamps.length)),i=this.now();for(let e=0;e<t;e++)this.stamps.push(i);return t}waitTime(){return this.prune(),this.stamps.length<this.limit?0:Math.max(0,this.stamps[this.stamps.length-this.limit]+this.windowMs-this.now())}}const Vt=(e,t,i)=>t.filter(t=>i?e.length>=t:e.length===t).map(t=>e.slice(-t)),Wt=(e,t)=>{let i=0;for(;i<e.length&&i<t.length&&e[i]===t[i];)i++;return i},Ft=(e,t,i,a)=>{const s=[];for(let o=Wt(e,t)+1;o<=t.length;o++)s.push(Vt(t.slice(0,o),i,a));return s};class Zt{constructor(e,t,i,a){this.send=e,this.onSaturated=t,this.onError=i,this.canSend=a,this.pending=[],this.tried=new Set}add(e,t){for(const i of e){const e=`${t}\n${i}`;if(!this.tried.has(e)&&!this.pending.some(e=>e.target===t&&e.code===i)){if(this.pending.length>=10)return this.cancel(),this.onSaturated(),!1;this.pending.push({code:i,target:t})}}return this.next(),!0}cancel(){this.pending=[],this.tried.clear()}next(){if(void 0!==this.inFlight||!this.pending.length)return;const e=this.pending.shift();if(!this.canSend(e.target))return void this.cancel();const t=`${e.target}\n${e.code}`;this.tried.add(t);const i=Dt+Math.floor(1e15*Math.random());this.inFlight=i,this.send(e.code,i,e.target).then(()=>{this.inFlight=void 0,this.next()},e=>{this.inFlight=void 0,this.tried.delete(t),this.pending=[],this.onError(e)})}}var Gt={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},Qt={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},Kt={invalid_pin:"Neplatný",blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},Jt={arm_options:Gt,editor:Qt,errors:Kt},Yt={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},Xt={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},ei={invalid_pin:"Ungültig",blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},ti={arm_options:Yt,editor:Xt,errors:ei},ii={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},ai={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},si={invalid_pin:"Ακυρος",blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},oi={arm_options:ii,editor:ai,errors:si},ni={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},ri={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",auto_submit:"Submit the code automatically as soon as it is complete (a wrong code is ignored silently).",auto_submit_anywhere:"Also accept the code when it appears anywhere in what is typed.",auto_submit_rate_limit:"Auto-submit, maximum digits per minute:",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},li={invalid_pin:"Invalid",blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors",auto_submit_too_fast:"Typed too fast to check every digit. Type the code again.",auto_submit_failed:"Could not send the code to Alarmo. Check the connection and type the code again.",auto_submit_unavailable:"Auto-submit is unavailable: the code lengths could not be loaded.",auto_submit_rate_limited:"Too many digits typed. Try again in {seconds} s."},di={arm_options:ni,editor:ri,errors:li},ci={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},hi={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},ui={invalid_pin:"Inválido",blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},pi={arm_options:ci,editor:hi,errors:ui},_i={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},mi={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",auto_submit:"Valider le code automatiquement dès qu'il est complet (un code erroné est ignoré sans message).",auto_submit_anywhere:"Accepter aussi le code s'il se trouve n'importe où dans la saisie.",auto_submit_rate_limit:"Validation automatique, nombre maximal de chiffres par minute :",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},gi={invalid_pin:"Invalide",blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés",auto_submit_too_fast:"Saisie trop rapide pour vérifier chaque chiffre. Retapez le code.",auto_submit_failed:"Impossible d'envoyer le code à Alarmo. Vérifiez la connexion et retapez le code.",auto_submit_unavailable:"Validation automatique indisponible : les longueurs de code n'ont pas pu être chargées.",auto_submit_rate_limited:"Trop de chiffres saisis. Réessayez dans {seconds} s."},vi={arm_options:_i,editor:mi,errors:gi},fi={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},bi={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},yi={invalid_pin:"Non valido",blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},$i={arm_options:fi,editor:bi,errors:yi},ki={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},wi={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},Ai={invalid_pin:"Ongeldig",blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},xi={arm_options:ki,editor:wi,errors:Ai},Ci={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Si={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},Oi={invalid_pin:"Inválido",blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Ei={arm_options:Ci,editor:Si,errors:Oi},zi={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},ji={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},Ti={invalid_pin:"Неверный",blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},Li={arm_options:zi,editor:ji,errors:Ti},Mi={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},Pi={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},Ii={invalid_pin:"Ogiltig",blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},Hi={arm_options:Mi,editor:Pi,errors:Ii},Ni={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Ri={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},Di={invalid_pin:"无效的",blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Ui={arm_options:Ni,editor:Ri,errors:Di},Bi={cs:Object.freeze({__proto__:null,arm_options:Gt,default:Jt,editor:Qt,errors:Kt}),de:Object.freeze({__proto__:null,arm_options:Yt,default:ti,editor:Xt,errors:ei}),el:Object.freeze({__proto__:null,arm_options:ii,default:oi,editor:ai,errors:si}),en:Object.freeze({__proto__:null,arm_options:ni,default:di,editor:ri,errors:li}),es:Object.freeze({__proto__:null,arm_options:ci,default:pi,editor:hi,errors:ui}),fr:Object.freeze({__proto__:null,arm_options:_i,default:vi,editor:mi,errors:gi}),it:Object.freeze({__proto__:null,arm_options:fi,default:$i,editor:bi,errors:yi}),nl:Object.freeze({__proto__:null,arm_options:ki,default:xi,editor:wi,errors:Ai}),"pt-BR":Object.freeze({__proto__:null,arm_options:Ci,default:Ei,editor:Si,errors:Oi}),ru:Object.freeze({__proto__:null,arm_options:zi,default:Li,editor:ji,errors:Ti}),sv:Object.freeze({__proto__:null,arm_options:Mi,default:Hi,editor:Pi,errors:Ii}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Ni,default:Ui,editor:Ri,errors:Di})};function qi(e,t,i="",a=""){const s=t.replace(/['"]+/g,"");var o;try{o=e.split(".").reduce((e,t)=>e[t],Bi[s])}catch(t){o=e.split(".").reduce((e,t)=>e[t],Bi.en)}if(void 0===o&&(o=e.split(".").reduce((e,t)=>e[t],Bi.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)o=o.replace(i[e],a[e])}return o}function Vi(e){return null!=e}function Wi(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Vi(e)}}function Fi(e){return e.substring(0,e.indexOf("."))}const Zi=(e,t)=>{let i={hide:!1};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},Gi=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(Et.ArmAway),1&t&&i.push(Et.ArmHome),4&t&&i.push(Et.ArmNight),32&t&&i.push(Et.ArmVacation),16&t&&i.push(Et.ArmCustomBypass),i},Qi=(e,t,i)=>{const a=Fi(e.entity_id),s=e.attributes.device_class,o=e.state;if(Object.values(St).includes(o)&&i){const e=Zi(o,i);if(!Wi(e.state_label))return e.state_label}let n="";return s&&(n=t(`component.${a}.entity_component.${s}.state.${e.state}`)),n||(n=t(`component.${a}.entity_component._.state.${e.state}`)),n},Ki=e=>null!==e.attributes.code_format,Ji=(e,t,i=!1)=>{if(!e||!e.state)return"var(--state-unavailable-color)";let a=e.state;if(i){const i=Object.values(Et).map(e=>jt[e]);if(!i.includes(a)){const t=e.attributes.arm_mode;t&&(a=t)}const s=[Et.Disarm,...Gi(e)].filter(e=>!Zi(jt[e],t).hide);1==s.length&&(a=jt[s[0]])}if(Object.keys(t.states||{}).includes(a)&&Vi((t.states[a]||{}).color)){const e=t.states[a].color;return Object.values(Rt).includes(e)?`var(--${e}-color)`:e}return a==St.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(St).includes(a)?`var(--state-alarm_control_panel-${a}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},Yi=e=>e.callWS({type:"alarmo/entities"}),Xi=e=>e.callWS({type:"alarmo/config"}),ea=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const s=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,e.dispatchEvent(s),s};let ta=class extends bt{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){Yi(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})}),this._alarmoConfig=await Xi(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Pt),e)}render(){var e,t,i,a,s,o,n,r,l,d;if(!this._config||!this.hass||!this._entities)return Xe``;if(!this._entities.length)return Xe`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const c=this._config.entity?this.hass.states[this._config.entity]:void 0,h=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=Zi(jt[this._editAction],this._config);return Xe`
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
                @change=${()=>this._updateStateConfig(jt[this._editAction],{hide:void 0})}
                ?checked=${!Vi(e.hide)||[!1,"never"].includes(e.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${qi("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(jt[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(e.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==Et.Disarm?Xe`
            <ha-formfield label="${qi("editor.action_dialog.show_button.options.armed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="disarmed"
                @change=${()=>this._updateStateConfig(jt[this._editAction],{hide:"disarmed"})}
                ?checked=${"disarmed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>`:Xe`
            <ha-formfield label="${qi("editor.action_dialog.show_button.options.disarmed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="armed"
                @change=${()=>this._updateStateConfig(jt[this._editAction],{hide:"armed"})}
                ?checked=${"armed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>
              `}
          </div>
        </div>

        <div class="grid">
          <ha-input
            label="${qi("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(jt[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-input>

          <ha-icon-picker
            .hass=${this.hass}
            label="${qi("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${e.button_icon||zt[this._editAction]}"
            ?disabled=${e.hide}
            @value-changed=${e=>this._updateStateConfig(jt[this._editAction],{button_icon:e.detail.value})}
            >
          </ha-icon-picker>

          <ha-input
            label="${qi("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${jt[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(jt[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-input>

          <ha-select
            .icon=${Vi(e.color)}
            label="${qi("editor.action_dialog.color",this.hass.language)}"
            .value=${e.color}
            @closed=${e=>{e.stopPropagation()}}
            @selected=${e=>{e.stopPropagation();const t=e.target.value;this._updateStateConfig(jt[this._editAction],{color:t||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${e.color?Xe`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(Rt).includes(e.color)?`var(--${e.color}-color)`:e.color}">
                </span>
              </span>
            `:tt}
            ${Vi(e.color)&&e.color.length&&!Object.values(Rt).includes(e.color)?Xe`
                <ha-list-item .value=${e.color} graphic="icon">
                  ${e.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${e.color}">
                    </span>
                  </span>
                </ha-list-item>
            `:tt}
            ${Object.values(Rt).map(e=>Xe`
                <ha-list-item .value=${e} graphic="icon">
                  ${this.hass.localize(`ui.components.color-picker.colors.${e}`)||e}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${e}-color)`}">
                    </span>
                  </span>
                </ha-list-item>
              `)}
          </ha-select>
        </div>
      `}return Xe`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-input>
        </div>

        ${c?Xe`
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
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${It}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${qi("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${It}"
              step="0.1"
              labeled
              ?disabled=${!c||!h||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${qi("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${e=>this._updateConfig("hide_keypad",e.target.checked)}
              ?disabled=${!c||!h}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!c||!h||(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_arm_required)==(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_disarm_required)||(null===(s=this._config)||void 0===s?void 0:s.use_code_dialog)||(null===(o=this._config)||void 0===o?void 0:o.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!c||!(null===(n=this._alarmoConfig)||void 0===n?void 0:n.code_arm_required)&&!(null===(r=this._alarmoConfig)||void 0===r?void 0:r.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Vi(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.auto_submit",this.hass.language)}>
            <ha-switch
              .checked=${this._config.auto_submit}
              @change=${e=>this._updateConfig("auto_submit",e.target.checked)}
              ?disabled=${!c||!h}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${qi("editor.auto_submit_anywhere",this.hass.language)}>
            <ha-switch
              .checked=${!!this._config.auto_submit&&!!this._config.auto_submit_anywhere}
              @change=${e=>this._updateConfig("auto_submit_anywhere",e.target.checked)}
              ?disabled=${!c||!h||!this._config.auto_submit}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield
            .label=${`${qi("editor.auto_submit_rate_limit",this.hass.language)} ${null!==(l=this._config.auto_submit_rate_limit)&&void 0!==l?l:Pt.auto_submit_rate_limit}`}
          >
            <ha-slider
              .value=${null!==(d=this._config.auto_submit_rate_limit)&&void 0!==d?d:Pt.auto_submit_rate_limit}
              @change=${this._rateLimitChanged}
              min="${10}"
              max="${Ht}"
              step="5"
              labeled
              ?disabled=${!c||!h||!this._config.auto_submit}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return tt;const e=this.hass.states[this._config.entity],t=Gi(e);let i=[Et.Disarm,...t].map(e=>({id:e,label:this.hass.localize(`ui.card.alarm_control_panel.${e}`),hidden:["always",!0].includes(Zi(jt[e],this._config).hide||!1),order:Zi(jt[e],this._config).button_order}));return i.sort((e,t)=>e.hidden&&!t.hidden?1:t.hidden&&!e.hidden?-1:Vi(e.order)||Vi(t.order)?Vi(e.order)&&!Vi(t.order)?-1:!Vi(e.order)&&Vi(t.order)?1:e.order-t.order:0),Xe`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${e=>this._handleActionsMoved(e,i.map(e=>jt[e.id]))}
      >
        <div class="sortable-list">
        ${i.map((e,t)=>Xe`
          <div class="sortable-item ${e.hidden?"":"draggable"}"">
            <ha-svg-icon
              class="handle"
              style="cursor: grab"
              .path=${"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
            ></ha-svg-icon>

            <ha-icon-button
              .path=${e.hidden?"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z":"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
              style="${e.hidden?"":"color: var(--primary-color)"}"
              ?disabled=${!e.hidden&&i.filter(e=>!e.hidden).length<=2||e.id==Et.Disarm}
              @click=${a=>{if(this._updateStateConfig(jt[e.id],e.hidden?{hide:void 0}:{hide:"always"}),e.hidden){let e=new CustomEvent("",{detail:{oldIdx:t,nexIdx:i.filter(e=>!e.hidden).length}});this._handleActionsMoved(e,i.map(e=>jt[e.id]))}a.target.blur()}}
            >
            </ha-icon-button>
            <span>${e.label}</span>
            <ha-icon-button
              .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
              style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
              ?disabled=${e.hidden}
              @click=${()=>this._editActionClick(e.id)}
            >
            </ha-icon-button>
          </div>
        `)}
        </div>
      </ha-sortable>
    `}_handleActionsMoved(e,t){const i=e.detail.oldIndex,a=e.detail.newIndex;let s=t[i];t=t.filter((e,t)=>t!=i),t.splice(a,0,s);let o=Object.assign({},this._config.states);t.forEach((e,t)=>{o=Object.assign(Object.assign({},o),{[e]:Object.assign(Object.assign({},o[e]||{}),{button_order:t+1})})}),this._updateConfig("states",o)}_rateLimitChanged(e){const t=Math.round(Number(e.target.value));Number.isInteger(t)&&t>=10&&t<=Ht&&this._updateConfig("auto_submit_rate_limit",t)}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"auto_submit"!=e||t||(this._config=Object.assign(Object.assign({},this._config),{auto_submit_anywhere:!1})),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}ea(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}(e,Object.keys(e).filter(t=>Vi(e[t]||"string"==typeof e[t])));let s=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const o=a(Object.assign(Object.assign({},s[e]),t));s=a(Object.assign(Object.assign({},s),{[e]:o})),this._updateConfig("states",s)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return P`
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
    `}};t([At({attribute:!1})],ta.prototype,"hass",void 0),t([xt()],ta.prototype,"_config",void 0),t([xt()],ta.prototype,"_alarmoConfig",void 0),t([xt()],ta.prototype,"_entities",void 0),t([xt()],ta.prototype,"_editAction",void 0),ta=t([$t("alarmo-card-editor-plus")],ta);var ia,aa,sa=Object.freeze({__proto__:null,get AlarmoCardEditor(){return ta}});class oa extends bt{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Mt.includes(i)?this.startTimer():Mt.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Mt.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",()=>{this._touchStarted=!0}),this.addEventListener("touchend",()=>{setTimeout(()=>{this._touchStarted=!1},10)}),this.addEventListener("mouseenter",()=>{this._touchStarted||(this._hover=!0)}),this.addEventListener("mouseleave",()=>{this._hover=!1})}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&Mt.includes(e)&&this.timer?Xe` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?Xe` ${Math.max(Math.round(this.getRemaining()),0)} `:Xe` <ha-icon .icon=${Ot[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;Mt.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):ea(this,"hass-more-info",{entityId:this.entity})}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return Xe`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
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
    `}}t([At()],oa.prototype,"hass",void 0),t([At()],oa.prototype,"entity",void 0),t([xt()],oa.prototype,"_hover",void 0),customElements.define("alarmo-state-badge-plus",oa),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ia||(ia={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(aa||(aa={}));class na extends bt{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return Xe``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?Qi(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:ia.language}),a=e?t.attributes.friendly_name||(s=t.entity_id).substring(s.indexOf(".")+1):this.entity;var s;let o=!!this.state||"on"==t.state;return Xe`
      <div class="badge-container" @click=${()=>ea(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${o?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon
              .hass=${this.hass}
              .stateObj=${t}
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
    `}}t([At()],na.prototype,"hass",void 0),t([At()],na.prototype,"entity",void 0),t([At()],na.prototype,"state",void 0),customElements.define("alarmo-sensor-badge-plus",na);class ra extends bt{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return Xe`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return P`
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
    `}}t([At({type:Boolean})],ra.prototype,"disabled",void 0),t([At({type:Boolean})],ra.prototype,"scaled",void 0),customElements.define("alarmo-button-plus",ra);const la=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([At({attribute:!1})],i.prototype,"hass",void 0),i},da=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let ca=class extends(la(bt)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0,this._processedInput="",this._rateLimitWait=0,this._rateLimitTimer=0,this._autoQueue=new Zt((e,t)=>this._callService(e,t),()=>{this._input="",this._processedInput="",this._showCodeError(qi("errors.auto_submit_too_fast",this.hass.language))},()=>{this._showCodeError(qi("errors.auto_submit_failed",this.hass.language))},e=>{var t;return!!(null===(t=this._params)||void 0===t?void 0:t.auto_submit)&&this._autoSubmitTarget()===e})}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:Lt})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case Tt.Disarm:case Tt.Arm:case Tt.Trigger:this._confirm(e.data.event);break;case Tt.InvalidCodeProvided:case Tt.NoCodeProvided:if(Bt(e.data.context_id))break;this._showCodeError();break;case Tt.FailedToArm:case Tt.CommandNotAllowed:this._confirm(e.data.event);case Tt.TriggerTimeExpired:case Tt.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!(!e.has("_input")&&!e.has("_rateLimitWait"))||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",e=>{"Enter"===e.key&&this._input.length&&this._submit()})}async showDialog(e){var t;this._autoQueue.cancel(),this._params=e,this._input="",this._processedInput="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,(null===(t=e.auto_submit)||void 0===t?void 0:t.limiter.waitTime())&&this._startRateLimitTimer(),await this.updateComplete}closeDialog(){return this._autoQueue.cancel(),this._stopRateLimitTimer(),this._params=void 0,this._showClearButton=!1,!0}_showCodeError(e=qi("errors.invalid_pin",this.hass.language)){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code");i&&(i.classList.remove("error"),i.classList.add("error"),i.hint=e)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.hint="",this._input="",this._processedInput="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._processedInput="",this._autoQueue.cancel(),this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._callService(t)}_callService(e,t){const i=void 0===t?{}:{context_id:t};return this._params.action==Et.Disarm?this.hass.callService("alarmo","disarm",Object.assign({entity_id:this._params.entity_id,code:e},i)):this.hass.callService("alarmo","arm",Object.assign(Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:jt[this._params.action],code:e}),i))}_autoSubmitTarget(){var e,t;return`${null===(e=this._params)||void 0===e?void 0:e.entity_id}|${null===(t=this._params)||void 0===t?void 0:t.action}`}_autoSubmit(){var e;const t=null===(e=this._params)||void 0===e?void 0:e.auto_submit;if(!t||this._params.code_format!==Ct)return void(this._processedInput=this._input);const i=Ft(this._processedInput,this._input,t.lengths,t.anywhere);for(const e of i)if(!this._autoQueue.add(e,this._autoSubmitTarget()))return;this._input=this._input.slice(-Math.max(20,...t.lengths)),this._processedInput=this._input}_consumeDigits(e){var t,i;const a=null===(i=null===(t=this._params)||void 0===t?void 0:t.auto_submit)||void 0===i?void 0:i.limiter;if(!a||this._params.code_format!==Ct)return e;const s=a.consume(e);return s<e&&this._startRateLimitTimer(),s}_startRateLimitTimer(){const e=()=>{var e,t;this._rateLimitWait=Math.ceil(((null===(t=null===(e=this._params)||void 0===e?void 0:e.auto_submit)||void 0===t?void 0:t.limiter.waitTime())||0)/1e3),this._rateLimitWait||this._stopRateLimitTimer()};e(),this._rateLimitWait&&!this._rateLimitTimer&&(this._rateLimitTimer=window.setInterval(e,1e3))}_stopRateLimitTimer(){this._rateLimitTimer&&clearInterval(this._rateLimitTimer),this._rateLimitTimer=0,this._rateLimitWait=0}_handleCodeInput(e){const t=e.target,i=this._input;let a=t.value;const s=Wt(i,a),o=a.length-s;if(o>0){const e=this._consumeDigits(o);if(e<o&&(a=a.slice(0,s+e),t.value=a,a===i))return}this._clearCodeError(),this._input=a,this._setCodeClearTimer(),this._autoSubmit()}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._consumeDigits(1)&&(this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._showClearButton=!0,this._autoSubmit())}_clear(){this._autoQueue.cancel(),this._input="",this._processedInput="",this._showClearButton=!1}_renderRateLimited(){return this._rateLimitWait?Xe`
      <div class="rate-limited">
        ${qi("errors.auto_submit_rate_limited",this.hass.language,"{seconds}",String(this._rateLimitWait))}
      </div>
    `:tt}render(){if(!this._params||!this.hass)return tt;return"text"===this._params.code_format?Xe`
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
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
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
      `:Xe`
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
            ${da.map(e=>""===e?Xe`<span></span>`:"clear"===e?Xe`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?Xe`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:Xe`
                        <ha-control-button
                          .value=${e}
                          @click=${this._numberClick}
                          .disabled=${this._rateLimitWait>0}
                          .label=${e}
                        >
                          ${e}
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
  `,t([At({attribute:!1})],ca.prototype,"hass",void 0),t([xt()],ca.prototype,"_params",void 0),t([xt()],ca.prototype,"_input",void 0),t([xt()],ca.prototype,"_showClearButton",void 0),t([xt()],ca.prototype,"_narrow",void 0),t([xt()],ca.prototype,"_rateLimitWait",void 0),ca=t([$t("alarmo-code-dialog-plus")],ca);var ha=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return ca}});let ua=class extends bt{render(){if(!this.hass||!this.config)return tt;const e=this.hass.states[this.config.entity];let t=e.state;const i=Object.values(Et).map(e=>jt[e]);if(!i.includes(t)){const i=e.attributes.arm_mode;i&&(t=i)}return Xe`
      <div class="container">
        ${this._renderOptions(t)}
      </div>
    `}_renderOptions(e){const t=this.hass.states[this.config.entity],i=[Et.Disarm,...Gi(t)].filter(e=>{const i=Zi(jt[e],this.config).hide;if("boolean"==typeof i||!Vi(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==t.state;case"disarmed":return"disarmed"!==t.state}}),a=i.map(e=>Zi(jt[e],this.config)).some(e=>!Vi(e.button_label)||e.button_label.length);return i.sort((e,t)=>{const i=Zi(jt[e],this.config).button_order,a=Zi(jt[t],this.config).button_order;return Vi(i)||Vi(a)?Vi(i)&&!Vi(a)?-1:!Vi(i)&&Vi(a)?1:i-a:0}),i.map(i=>{const s=Vi(this.readyForArmModes)&&!this.readyForArmModes.includes(jt[i])&&i!=Et.Disarm,o=Zi(jt[i],this.config);return Xe`
        <div class="button ${jt[i]==e?"selected":""}" @click=${e=>this._handleClick(e,i)}>
          <div class="content ${a?"has-text":""}">
            <ha-icon icon="${Wi(o.button_icon)?zt[i]:o.button_icon}"></ha-icon>
            ${jt[i]!=e&&Vi(this.readyForArmModes)?Xe`
              <ha-icon
                icon="${"mdi:circle-medium"}"
                class="badge ${s?"error":"success"}"
              ></ha-icon>
            `:tt}
            <span>
              ${Vi(o.button_label)?o.button_label:i==Et.Disarm&&t.state!==St.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${jt[i]}`)}
            </span>
          </div>
        </div>
      `})}_handleClick(e,t){ea(this,"button-clicked",{ev:e,action:t})}static get styles(){return P`
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
    `}};t([At({attribute:!1})],ua.prototype,"hass",void 0),t([At({attribute:!1})],ua.prototype,"config",void 0),t([At({attribute:!1})],ua.prototype,"readyForArmModes",void 0),ua=t([$t("alarmo-actions-bar-plus")],ua);const pa=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(la(bt)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Nt),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0,this._codeLengths={arm:[],disarm:[]},this._codeLengthsStatus="idle",this._codeLengthsRequest=0,this._areaIds=[],this._processedInput="",this._rateLimiter=new qt(Pt.auto_submit_rate_limit),this._rateLimitWait=0,this._rateLimitTimer=0,this._autoQueue=new Zt((e,t,i)=>this.hass.callService("alarmo","disarm",{entity_id:i,code:e,context_id:t}),()=>{this._input="",this._processedInput="",this._showCodeError(qi("errors.auto_submit_too_fast",this.hass.language))},()=>{this._showCodeError(qi("errors.auto_submit_failed",this.hass.language))},e=>{var t;return this.isConnected&&!!(null===(t=this._config)||void 0===t?void 0:t.auto_submit)&&this._config.entity===e})}static async getConfigElement(){return await Promise.resolve().then(function(){return sa}),document.createElement("alarmo-card-editor-plus")}static async getStubConfig(e){let t=Object.keys(e.states).find(e=>"alarm_control_panel"==Fi(e));return await Yi(e).then(e=>{const i=e.sort((e,t)=>Number(e.area_id)-Number(t.area_id));i.length&&(t=i[0].entity_id)}),{type:"custom:alarmo-card-plus",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct?!Ki(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){var t;!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Fi(e.entity))throw new Error("Invalid configuration provided for entity");if(Vi(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>It))throw new Error("Invalid configuration provided for button_scale_keypad");if(Vi(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>It))throw new Error("Invalid configuration provided for button_scale_actions");if(Vi(e.auto_submit_rate_limit)&&("number"!=typeof e.auto_submit_rate_limit||!Number.isInteger(e.auto_submit_rate_limit)||e.auto_submit_rate_limit<10||e.auto_submit_rate_limit>Ht))throw new Error("Invalid configuration provided for auto_submit_rate_limit (10-120)")})(e);const i=this._config;this._config=Object.assign(Object.assign({},Pt),e),this._rateLimiter.limit=null!==(t=this._config.auto_submit_rate_limit)&&void 0!==t?t:Pt.auto_submit_rate_limit,i&&this.hass&&(i.entity!==this._config.entity&&(i.auto_submit||this._config.auto_submit)?(this._clearCode(),this.backendConnection=null,this.loadBackendConfig()):i.auto_submit!==this._config.auto_submit&&(this._config.auto_submit||(this._autoQueue.cancel(),this._processedInput=this._input),this._loadCodeLengths()))}disconnectedCallback(){var e;super.disconnectedCallback(),(null===(e=this._config)||void 0===e?void 0:e.auto_submit)&&this._clearCode(),this._stopRateLimitTimer()}hassSubscribe(){const e=()=>this._loadCodeLengths();return this.hass.connection.addEventListener("ready",e),this._loadCodeLengths(),this._rateLimiter.waitTime()&&this._startRateLimitTimer(),[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:Lt}),this.hass.connection.subscribeMessage(()=>this._loadCodeLengths(),{type:"alarmo_config_updated"}).catch(()=>()=>{}),Promise.resolve(()=>{var t;return null===(t=this.hass)||void 0===t?void 0:t.connection.removeEventListener("ready",e)})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||Yi(this.hass).then(e=>{const t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null),this._areaIds=e.filter(e=>e.area_id).map(e=>String(e.area_id))}).then(()=>Xi(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0,this._loadCodeLengths()}).then(()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t}).then(e=>{this.readyForArmModes=e.modes}).catch(e=>{this.backendConnection=!1})}_loadCodeLengths(){var e,t;const i=++this._codeLengthsRequest;if(!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.auto_submit)||!this.backendConnection||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ct)return this._codeLengths={arm:[],disarm:[]},void(this._codeLengthsStatus="idle");var a;this._codeLengthsStatus="loading",(a=this.hass,a.callWS({type:"alarmo/users"})).then(e=>{if(i!==this._codeLengthsRequest)return;const t=this.area_id?[String(this.area_id)]:this._areaIds;this._codeLengths=((e,t)=>{const i=e.filter(e=>{var i;return e.enabled&&e.code_format===Ct&&e.code_length>0&&(!(null===(i=e.area_limit)||void 0===i?void 0:i.length)||t.every(t=>e.area_limit.map(String).includes(t)))}),a=e=>[...new Set(e.map(e=>e.code_length))].sort((e,t)=>e-t);return{arm:a(i.filter(e=>e.can_arm)),disarm:a(i.filter(e=>e.can_disarm))}})(Object.values(e),t),this._codeLengthsStatus="ready",this._input!==this._processedInput&&this._autoSubmit()}).catch(()=>{i===this._codeLengthsRequest&&(this._codeLengths={arm:[],disarm:[]},this._codeLengthsStatus="failed")})}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Tt.Arm:this._clearCode();break;case Tt.Disarm:this._autoQueue.cancel();break;case Tt.Trigger:break;case Tt.InvalidCodeProvided:case Tt.NoCodeProvided:if(Bt(e.data.context_id))break;this._showCodeError(),this.subscribedEntities=[];break;case Tt.FailedToArm:this.warning="blocking_sensors",this._last_command=e.data.command,this._last_code=this._input,this._clearCode();break;case Tt.CommandNotAllowed:this._clearCode();break;case Tt.TriggerTimeExpired:break;case Tt.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==St.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return Xe``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?Xe`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:Xe`
      <ha-card>
        ${i.state===St.Disarmed?Xe`
              <ha-dropdown
                placement="bottom-end"
                id="cornerMenu"
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <span class="title">
                  ${qi("arm_options.heading",this.hass.language)}
                </span>
                <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"skip_delay")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.skip_delay?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${qi("arm_options.skip_delay",this.hass.language)}
                </ha-dropdown-item>
                <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"force")}>
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
              ${((e,t)=>Wi(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
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

        ${!Ki(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?Xe``:Xe`
              <ha-input
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!Ki(i)}
                @input=${this._handleCodeInput}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct?"numeric":"text"}
              ></ha-input>
            `}
        ${this._renderAutoSubmitStatus()}
        ${!Ki(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ct||this._config.use_code_dialog||this._config.hide_keypad?Xe``:Xe`
          <div id="keypad" class="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${pa.map(e=>""===e?Xe`
              <alarmo-button-plus
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
                class="placeholder"
              ></alarmo-button-plus>
            `:Xe`
              <alarmo-button-plus
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!Ki(i)||("clear"===e?!this._input.length:this._isRateLimited())}
                class="${"clear"!==e?"numberKey":"clear"}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e?Xe`<ha-icon icon="mdi:close" style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"></ha-icon>`:Xe` <span>${e}</span>`}
              </alarmo-button-plus>
            `)}
          </div>
        `}
      </ha-card>
    `:Xe`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return Xe``;const e=this.hass.states[this._config.entity],t=this._config.show_ready_indicator;return Xe`
      <alarmo-actions-bar-plus
        @button-clicked=${e=>this._handleActionClick(e,e.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${t?this.readyForArmModes:void 0}
        style="--alarm-state-color: ${Ji(e,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar-plus>
    `}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return Xe``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==St.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?Xe`
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
              ${Object.entries(t.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Xe`
                  <div class="badge">
                    <alarmo-sensor-badge-plus .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge-plus>
                  </div>
                `))}
            </div>
          ${"blocking_sensors"==this.warning&&t.attributes.open_sensors?Xe`
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
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?Xe`
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
              ${t.attributes.bypassed_sensors.map(e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Xe`
                  <div class="badge">
                    <alarmo-sensor-badge-plus .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge-plus>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:Xe``}_renderAutoSubmitStatus(){var e;return this.hass&&(null===(e=this._config)||void 0===e?void 0:e.auto_submit)&&this._autoSubmitApplies()?"failed"===this._codeLengthsStatus?Xe`
        <div class="auto-submit-status">
          <span>${qi("errors.auto_submit_unavailable",this.hass.language)}</span>
          <button type="button" @click=${()=>this._loadCodeLengths()}>
            ${this.hass.localize("ui.common.retry")||"Retry"}
          </button>
        </div>
      `:this._rateLimitWait>0?Xe`
        <div class="auto-submit-status">
          <span>
            ${qi("errors.auto_submit_rate_limited",this.hass.language,"{seconds}",String(this._rateLimitWait))}
          </span>
        </div>
      `:Xe``:Xe``}_handlePadClick(e){const t=e.currentTarget.value;("clear"===t||this._consumeDigits(1))&&(this._clearCodeError(),"clear"===t&&(this._autoQueue.cancel(),this._processedInput=""),this._input="clear"===t?"":this._input+t,this._autoSubmit())}_handleCodeInput(e){const t=e.target,i=this._input;let a=t.value;const s=Wt(i,a),o=a.length-s;if(o>0){const e=this._consumeDigits(o);if(e<o&&(a=a.slice(0,s+e),t.value=a,a===i))return}this._clearCodeError(),this._input=a,this._setCodeClearTimer(),this._autoSubmit()}_autoSubmitApplies(){var e,t;if(!this.isConnected||!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.auto_submit))return!1;if((null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ct)return!1;const i=this.hass.states[this._config.entity];return!!i&&i.state!==St.Disarmed&&Ki(i)}_isRateLimited(){return this._rateLimitWait>0&&this._autoSubmitApplies()}_consumeDigits(e){if(!this._autoSubmitApplies())return e;const t=this._rateLimiter.consume(e);return t<e&&this._startRateLimitTimer(),t}_startRateLimitTimer(){const e=()=>{this._rateLimitWait=Math.ceil(this._rateLimiter.waitTime()/1e3),this._rateLimitWait||this._stopRateLimitTimer()};e(),this._rateLimitWait&&!this._rateLimitTimer&&(this._rateLimitTimer=window.setInterval(e,1e3))}_stopRateLimitTimer(){this._rateLimitTimer&&clearInterval(this._rateLimitTimer),this._rateLimitTimer=0,this._rateLimitWait=0}_autoSubmit(){if(!this._autoSubmitApplies())return void(this._processedInput=this._input);if("ready"!==this._codeLengthsStatus)return;const e=this._codeLengths.disarm,t=Ft(this._processedInput,this._input,e,this._config.auto_submit_anywhere);for(const e of t)if(!this._autoQueue.add(e,this._config.entity))return;this._input=this._input.slice(-Math.max(20,...e)),this._processedInput=this._input}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&Ki(a)){const i=await new Promise(i=>{var a;const s=e.target,o={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,auto_submit:this._config.auto_submit&&(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_format)===Ct&&"ready"===this._codeLengthsStatus?{lengths:t==Et.Disarm?this._codeLengths.disarm:this._codeLengths.arm,anywhere:this._config.auto_submit_anywhere,limiter:this._rateLimiter}:void 0,cancel:()=>{i(null)},confirm:e=>{i(e)}};ea(s,"show-dialog",{dialogTag:"alarmo-code-dialog-plus",dialogImport:()=>Promise.resolve().then(function(){return ha}),dialogParams:o})});i!=Tt.Arm&&i!=Tt.Disarm||(this.warning="",this.armOptions=Object.assign({},Nt))}else t==Et.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:jt[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},Nt)}_showCodeError(e=qi("errors.invalid_pin",this.hass.language)){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");i&&(i.classList.remove("error"),i.classList.add("error"),i.hint=e)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.hint="",this._input="",this._processedInput="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._processedInput="",this._autoQueue.cancel(),this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e,t){e.stopImmediatePropagation(),e.target.blur(),"skip_delay"==t?this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay}):"force"==t&&(this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force}))}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let e=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:jt[e],code:this._last_code,force:!0}),this._last_command=void 0,this._last_code=void 0}static get styles(){return P`
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
    `}},t([At({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([xt()],e.AlarmoCard.prototype,"_config",void 0),t([xt()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([xt()],e.AlarmoCard.prototype,"_input",void 0),t([xt()],e.AlarmoCard.prototype,"warning",void 0),t([xt()],e.AlarmoCard.prototype,"area_id",void 0),t([xt()],e.AlarmoCard.prototype,"armOptions",void 0),t([xt()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([xt()],e.AlarmoCard.prototype,"backendConnection",void 0),t([xt()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),t([xt()],e.AlarmoCard.prototype,"_codeLengthsStatus",void 0),t([xt()],e.AlarmoCard.prototype,"_rateLimitWait",void 0),e.AlarmoCard=t([$t("alarmo-card-plus")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card-plus",name:"Alarmo Card Plus",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD-PLUS  \n%c  Version: ${"v1.6.9-plus.9".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
