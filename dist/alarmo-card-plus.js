var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t,i,a,n,o,r){try{var s=e[o](r),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(a,n)}function o(e,t,i){return t=h(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(e,v()?Reflect.construct(t,i||[],h(e).constructor):t.apply(e,i))}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,w(a.key),a)}}function l(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=x(e))||t){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){s=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw o}}}}function d(e,t,i){return(t=w(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(a){var n=Object.getOwnPropertyDescriptor(a,t);return n.get?n.get.call(arguments.length<3?e:i):n.value}},u.apply(null,arguments)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(v=function(){return!!e})()}function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach(function(t){d(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function _(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var e,t,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",n=i.toStringTag||"@@toStringTag";function o(i,a,n,o){var l=a&&a.prototype instanceof s?a:s,c=Object.create(l.prototype);return m(c,"_invoke",function(i,a,n){var o,s,l,c=0,d=n||[],u=!1,h={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,i){return o=t,s=0,l=e,h.n=i,r}};function p(i,a){for(s=i,l=a,t=0;!u&&c&&!n&&t<d.length;t++){var n,o=d[t],p=h.p,v=o[2];i>3?(n=v===a)&&(l=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=e):o[0]<=p&&((n=i<2&&p<o[1])?(s=0,h.v=a,h.n=o[1]):p<v&&(n=i<3||o[0]>a||a>v)&&(o[4]=i,o[5]=a,h.n=v,s=0))}if(n||i>1)return r;throw u=!0,a}return function(n,d,v){if(c>1)throw TypeError("Generator is already running");for(u&&1===d&&p(d,v),s=d,l=v;(t=s<2?e:l)||!u;){o||(s?s<3?(s>1&&(h.n=-1),p(s,l)):h.n=l:h.v=l);try{if(c=2,o){if(s||(n="next"),t=o[n]){if(!(t=t.call(o,l)))throw TypeError("iterator result is not an object");if(!t.done)return t;l=t.value,s<2&&(s=0)}else 1===s&&(t=o.return)&&t.call(o),s<2&&(l=TypeError("The iterator does not provide a '"+n+"' method"),s=1);o=e}else if((t=(u=h.n<0)?l:i.call(a,h))!==r)break}catch(t){o=e,s=1,l=t}finally{c=1}}return{value:t,done:u}}}(i,n,o),!0),c}var r={};function s(){}function l(){}function c(){}t=Object.getPrototypeOf;var d=[][a]?t(t([][a]())):(m(t={},a,function(){return this}),t),u=c.prototype=s.prototype=Object.create(d);function h(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,m(e,n,"GeneratorFunction")),e.prototype=Object.create(u),e}return l.prototype=c,m(u,"constructor",c),m(c,"constructor",l),l.displayName="GeneratorFunction",m(c,n,"GeneratorFunction"),m(u),m(u,n,"Generator"),m(u,a,function(){return this}),m(u,"toString",function(){return"[object Generator]"}),(_=function(){return{w:o,m:h}})()}function m(e,t,i,a){var n=Object.defineProperty;try{n({},"",{})}catch(e){n=0}m=function(e,t,i,a){function o(t,i){m(e,t,function(e){return this._invoke(t,i,e)})}t?n?n(e,t,{value:i,enumerable:!a,configurable:!a,writable:!a}):e[t]=i:(o("next",0),o("throw",1),o("return",2))},m(e,t,i,a)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,o,r,s=[],l=!0,c=!1;try{if(o=(i=i.call(e)).next,0===t);else for(;!(l=(a=o.call(i)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,n=e}finally{try{if(!l&&null!=i.return&&(r=i.return(),Object(r)!==r))return}finally{if(c)throw n}}return s}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t,i,a){var n=u(h(e.prototype),t,i);return 2&a&&"function"==typeof n?function(e){return n.apply(i,e)}:n}function k(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i;if("undefined"!=typeof Symbol&&void 0!==(i=e[Symbol.toPrimitive])){var a=i.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:t+""}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function x(e,t){if(e){if("string"==typeof e)return i(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function C(e){var t="function"==typeof Map?new Map:void 0;return C=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(v())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var n=new(e.bind.apply(e,a));return i&&b(n,i.prototype),n}(e,arguments,h(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),b(i,e)},C(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var S,O,E,j=globalThis,z=j.ShadowRoot&&(void 0===j.ShadyCSS||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),T=new WeakMap,M=function(){return l(function e(t,i,a){if(r(this,e),this._$cssResult$=!0,a!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i},[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(z&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=T.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&T.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),H=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var n=1===e.length?e[0]:i.reduce(function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]},e[0]);return new M(n,e,P)},N=z?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=c(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new M("string"==typeof e?e:e+"",void 0,P)}(i)}(e):e},L=Object.is,I=Object.defineProperty,R=Object.getOwnPropertyDescriptor,U=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,V=Object.getPrototypeOf,B=globalThis,q=B.trustedTypes,F=q?q.emptyScript:"",W=B.reactiveElementPolyfillSupport,Z=function(e,t){return e},G={toAttribute:function(e,t){switch(t){case Boolean:e=e?F:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},K=function(e,t){return!L(e,t)},Q={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:K};null!==(S=Symbol.metadata)&&void 0!==S||(Symbol.metadata=Symbol("metadata")),null!==(O=B.litPropertyMetadata)&&void 0!==O||(B.litPropertyMetadata=new WeakMap);var J,Y=function(e){function t(){var e;return r(this,t),(e=o(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return p(t,e),l(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise(function(e){return t.enableUpdating=e}),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(function(e){return e(t)})}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=c(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(z)e.adoptedStyleSheets=t.map(function(e){return e instanceof CSSStyleSheet?e:e.styleSheet});else{var i,a=c(t);try{for(a.s();!(i=a.n()).done;){var n=i.value,o=document.createElement("style"),r=j.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=n.cssText,e.appendChild(o)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach(function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$ET",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var n,o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:G).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var n,o,r,s=i.getPropertyOptions(a),l="function"==typeof s.converter?{fromAttribute:s.converter}:void 0!==(null===(n=s.converter)||void 0===n?void 0:n.fromAttribute)?s.converter:G;this._$Em=a;var c=l.fromAttribute(t,s.type);this[a]=null!==(o=null!=c?c:null===(r=this._$Ej)||void 0===r?void 0:r.get(a))&&void 0!==o?o:c,this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0;if(void 0!==e){var o,r,s=this.constructor;if(!1===a&&(n=this[e]),null!=i||(i=s.getPropertyOptions(e)),!((null!==(o=i.hasChanged)&&void 0!==o?o:K)(n,t)||i.useDefault&&i.reflect&&n===(null===(r=this._$Ej)||void 0===r?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}},{key:"C",value:function(e,t,i,a){var n,o,r,s=i.useDefault,l=i.reflect,c=i.wrapped;s&&!(null!==(n=this._$Ej)&&void 0!==n?n:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(o=null!=a?a:t)&&void 0!==o?o:this[e]),!0!==c||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===l&&this._$Em!==e&&(null!==(r=this._$Eq)&&void 0!==r?r:this._$Eq=new Set).add(e))}},{key:"_$EP",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise(function(a,o){var r=e.apply(t,i);function s(e){n(r,a,o,s,l,"next",e)}function l(e){n(r,a,o,s,l,"throw",e)}s(void 0)})}}(_().m(function e(){var t,i;return _().w(function(e){for(;;)switch(e.p=e.n){case 0:return this.isUpdatePending=!0,e.p=1,e.n=2,this._$ES;case 2:e.n=4;break;case 3:e.p=3,i=e.v,Promise.reject(i);case 4:if(null==(t=this.scheduleUpdate())){e.n=5;break}return e.n=5,t;case 5:return e.a(2,!this.isUpdatePending)}},e,this,[[1,3]])})),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=c(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=y(t.value,2),n=a[0],o=a[1];this[n]=o}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var r=this.constructor.elementProperties;if(r.size>0){var s,l=c(r);try{for(l.s();!(s=l.n()).done;){var d=y(s.value,2),u=d[0],h=d[1],p=h.wrapped,v=this[u];!0!==p||this._$AL.has(u)||void 0===v||this.C(u,void 0,h,v)}}catch(e){l.e(e)}finally{l.f()}}}var g=!1,f=this._$AL;try{var _;(g=this.shouldUpdate(f))?(this.willUpdate(f),null!==(_=this._$EO)&&void 0!==_&&_.forEach(function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(f)):this._$EM()}catch(f){throw g=!1,this._$EM(),f}g&&this._$AE(f)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EM",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Eq&&(this._$Eq=this._$Eq.forEach(function(e){return t._$ET(e,t[e])})),this._$EM()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&k(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q;if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&I(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,n=null!==(a=R(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},o=n.get,r=n.set;return{get:o,set:function(t){var a=null==o?void 0:o.call(this);null!=r&&r.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:Q}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(Z("elementProperties"))){var e=V(this);e.finalize(),void 0!==e.l&&(this.l=k(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(Z("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){var e,t=this.properties,i=c([].concat(k(U(t)),k(D(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var n=this[Symbol.metadata];if(null!==n){var o=litPropertyMetadata.get(n);if(void 0!==o){var r,s=c(o);try{for(s.s();!(r=s.n()).done;){var l=y(r.value,2),d=l[0],u=l[1];this.elementProperties.set(d,u)}}catch(e){s.e(e)}finally{s.f()}}}this._$Eh=new Map;var h,p=c(this.elementProperties);try{for(p.s();!(h=p.n()).done;){var v=y(h.value,2),g=v[0],f=v[1],_=this._$Eu(g,f);void 0!==_&&this._$Eh.set(_,g)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=c(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var n=i.value;t.unshift(N(n))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(N(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(C(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Z("elementProperties")]=new Map,Y[Z("finalized")]=new Map,null!=W&&W({ReactiveElement:Y}),(null!==(E=B.reactiveElementVersions)&&void 0!==E?E:B.reactiveElementVersions=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var X=globalThis,ee=X.trustedTypes,te=ee?ee.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,ie="$lit$",ae="lit$".concat(Math.random().toFixed(9).slice(2),"$"),ne="?"+ae,oe="<".concat(ne,">"),re=document,se=function(){return re.createComment("")},le=function(e){return null===e||"object"!=A(e)&&"function"!=typeof e},ce=Array.isArray,de="[ \t\n\f\r]",ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,pe=/>/g,ve=RegExp(">|".concat(de,"(?:([^\\s\"'>=/]+)(").concat(de,"*=").concat(de,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ge=/'/g,fe=/"/g,_e=/^(?:script|style|textarea|title)$/i,me=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),ye=new WeakMap,$e=re.createTreeWalker(re,129);function ke(e,t){if(!ce(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==te?te.createHTML(t):t}var we=function(){return l(function e(t,i){var a,n=t.strings,o=t._$litType$;r(this,e),this.parts=[];var s=0,l=0,d=n.length-1,u=this.parts,h=function(e,t){for(var i,a=e.length-1,n=[],o=2===t?"<svg>":3===t?"<math>":"",r=ue,s=0;s<a;s++){for(var l=e[s],c=void 0,d=void 0,u=-1,h=0;h<l.length&&(r.lastIndex=h,null!==(d=r.exec(l)));)h=r.lastIndex,r===ue?"!--"===d[1]?r=he:void 0!==d[1]?r=pe:void 0!==d[2]?(_e.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=ve):void 0!==d[3]&&(r=ve):r===ve?">"===d[0]?(r=null!=i?i:ue,u=-1):void 0===d[1]?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=void 0===d[3]?ve:'"'===d[3]?fe:ge):r===fe||r===ge?r=ve:r===he||r===pe?r=ue:(r=ve,i=void 0);var p=r===ve&&e[s+1].startsWith("/>")?" ":"";o+=r===ue?l+oe:u>=0?(n.push(c),l.slice(0,u)+ie+l.slice(u)+ae+p):l+ae+(-2===u?s:p)}return[ke(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]}(n,o),p=y(h,2),v=p[0],g=p[1];if(this.el=e.createElement(v,i),$e.currentNode=this.el.content,2===o||3===o){var f=this.el.content.firstChild;f.replaceWith.apply(f,k(f.childNodes))}for(;null!==(a=$e.nextNode())&&u.length<d;){if(1===a.nodeType){if(a.hasAttributes()){var _,m=c(a.getAttributeNames());try{for(m.s();!(_=m.n()).done;){var b=_.value;if(b.endsWith(ie)){var $=g[l++],w=a.getAttribute(b).split(ae),A=/([.?@])?(.*)/.exec($);u.push({type:1,index:s,name:A[2],strings:w,ctor:"."===A[1]?Ee:"?"===A[1]?je:"@"===A[1]?ze:Oe}),a.removeAttribute(b)}else b.startsWith(ae)&&(u.push({type:6,index:s}),a.removeAttribute(b))}}catch(e){m.e(e)}finally{m.f()}}if(_e.test(a.tagName)){var x=a.textContent.split(ae),C=x.length-1;if(C>0){a.textContent=ee?ee.emptyScript:"";for(var S=0;S<C;S++)a.append(x[S],se()),$e.nextNode(),u.push({type:2,index:++s});a.append(x[C],se())}}}else if(8===a.nodeType)if(a.data===ne)u.push({type:2,index:s});else for(var O=-1;-1!==(O=a.data.indexOf(ae,O+1));)u.push({type:7,index:s}),O+=ae.length-1;s++}},null,[{key:"createElement",value:function(e,t){var i=re.createElement("template");return i.innerHTML=e,i}}])}();function Ae(e,t){var i,a,n,o,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===me)return t;var c=void 0!==l?null===(i=s._$Co)||void 0===i?void 0:i[l]:s._$Cl,d=le(t)?void 0:t._$litDirective$;return(null===(a=c)||void 0===a?void 0:a.constructor)!==d&&(null!==(n=c)&&void 0!==n&&null!==(o=n._$AO)&&void 0!==o&&o.call(n,!1),void 0===d?c=void 0:(c=new d(e))._$AT(e,s,l),void 0!==l?(null!==(r=s._$Co)&&void 0!==r?r:s._$Co=[])[l]=c:s._$Cl=c),void 0!==c&&(t=Ae(e,c._$AS(e,t.values),c,l)),t}var xe,Ce=function(){return l(function e(t,i){r(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,n=i.parts,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:re).importNode(a,!0);$e.currentNode=o;for(var r=$e.nextNode(),s=0,l=0,c=n[0];void 0!==c;){var d;if(s===c.index){var u=void 0;2===c.type?u=new Se(r,r.nextSibling,this,e):1===c.type?u=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(u=new Pe(r,this,e)),this._$AV.push(u),c=n[++l]}s!==(null===(d=c)||void 0===d?void 0:d.index)&&(r=$e.nextNode(),s++)}return $e.currentNode=re,o}},{key:"p",value:function(e){var t,i=0,a=c(this._$AV);try{for(a.s();!(t=a.n()).done;){var n=t.value;void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Se=function(){function e(t,i,a,n){var o;r(this,e),this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=n,this._$Cv=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=Ae(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),le(e)?e===be||null==e||""===e?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==me&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return ce(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==be&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=we.createElement(ke(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{var o=new Ce(n,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}},{key:"_$AC",value:function(e){var t=ye.get(e.strings);return void 0===t&&ye.set(e.strings,t=new we(e)),t}},{key:"k",value:function(t){ce(this._$AH)||(this._$AH=[],this._$AR());var i,a,n=this._$AH,o=0,r=c(t);try{for(r.s();!(a=r.n()).done;){var s=a.value;o===n.length?n.push(i=new e(this.O(se()),this.O(se()),this,this.options)):i=n[o],i._$AI(s),o++}}catch(e){r.e(e)}finally{r.f()}o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Oe=function(){return l(function e(t,i,a,n,o){r(this,e),this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=be},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,n=this.strings,o=!1;if(void 0===n)e=Ae(this,e,t,0),(o=!le(e)||e!==this._$AH&&e!==me)&&(this._$AH=e);else{var r,s,l=e;for(e=n[0],r=0;r<n.length-1;r++)(s=Ae(this,l[i+r],t,r))===me&&(s=this._$AH[r]),o||(o=!le(s)||s!==this._$AH[r]),s===be?e=be:e!==be&&(e+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}o&&!a&&this.j(e)}},{key:"j",value:function(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),Ee=function(e){function t(){var e;return r(this,t),(e=o(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===be?void 0:e}}])}(Oe),je=function(e){function t(){var e;return r(this,t),(e=o(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}])}(Oe),ze=function(e){function t(e,i,a,n,s){var l;return r(this,t),(l=o(this,t,[e,i,a,n,s])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=Ae(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:be)!==me){var i=this._$AH,a=e===be&&i!==be||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==be&&(i===be||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Oe),Pe=function(){return l(function e(t,i,a){r(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){Ae(this,e)}}])}(),Te=X.litHtmlPolyfillSupport;null!=Te&&Te(we,Se),(null!==(J=X.litHtmlVersions)&&void 0!==J?J:X.litHtmlVersions=[]).push("3.3.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Me=globalThis,He=Me.trustedTypes,Ne=He?He.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,Le="$lit$",Ie="lit$".concat(Math.random().toFixed(9).slice(2),"$"),Re="?"+Ie,Ue="<".concat(Re,">"),De=document,Ve=function(){return De.createComment("")},Be=function(e){return null===e||"object"!=A(e)&&"function"!=typeof e},qe=Array.isArray,Fe="[ \t\n\f\r]",We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Ge=/>/g,Ke=RegExp(">|".concat(Fe,"(?:([^\\s\"'>=/]+)(").concat(Fe,"*=").concat(Fe,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),Qe=/'/g,Je=/"/g,Ye=/^(?:script|style|textarea|title)$/i,Xe=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return{_$litType$:e,strings:t,values:a}}}(1),et=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),it=new WeakMap,at=De.createTreeWalker(De,129);function nt(e,t){if(!qe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ne?Ne.createHTML(t):t}var ot=function(e,t){for(var i,a=e.length-1,n=[],o=2===t?"<svg>":3===t?"<math>":"",r=We,s=0;s<a;s++){for(var l=e[s],c=void 0,d=void 0,u=-1,h=0;h<l.length&&(r.lastIndex=h,null!==(d=r.exec(l)));)h=r.lastIndex,r===We?"!--"===d[1]?r=Ze:void 0!==d[1]?r=Ge:void 0!==d[2]?(Ye.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=Ke):void 0!==d[3]&&(r=Ke):r===Ke?">"===d[0]?(r=null!=i?i:We,u=-1):void 0===d[1]?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=void 0===d[3]?Ke:'"'===d[3]?Je:Qe):r===Je||r===Qe?r=Ke:r===Ze||r===Ge?r=We:(r=Ke,i=void 0);var p=r===Ke&&e[s+1].startsWith("/>")?" ":"";o+=r===We?l+Ue:u>=0?(n.push(c),l.slice(0,u)+Le+l.slice(u)+Ie+p):l+Ie+(-2===u?s:p)}return[nt(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]},rt=function(){return l(function e(t,i){var a,n=t.strings,o=t._$litType$;r(this,e),this.parts=[];var s=0,l=0,d=n.length-1,u=this.parts,h=y(ot(n,o),2),p=h[0],v=h[1];if(this.el=e.createElement(p,i),at.currentNode=this.el.content,2===o||3===o){var g=this.el.content.firstChild;g.replaceWith.apply(g,k(g.childNodes))}for(;null!==(a=at.nextNode())&&u.length<d;){if(1===a.nodeType){if(a.hasAttributes()){var f,_=c(a.getAttributeNames());try{for(_.s();!(f=_.n()).done;){var m=f.value;if(m.endsWith(Le)){var b=v[l++],$=a.getAttribute(m).split(Ie),w=/([.?@])?(.*)/.exec(b);u.push({type:1,index:s,name:w[2],strings:$,ctor:"."===w[1]?ut:"?"===w[1]?ht:"@"===w[1]?pt:dt}),a.removeAttribute(m)}else m.startsWith(Ie)&&(u.push({type:6,index:s}),a.removeAttribute(m))}}catch(e){_.e(e)}finally{_.f()}}if(Ye.test(a.tagName)){var A=a.textContent.split(Ie),x=A.length-1;if(x>0){a.textContent=He?He.emptyScript:"";for(var C=0;C<x;C++)a.append(A[C],Ve()),at.nextNode(),u.push({type:2,index:++s});a.append(A[x],Ve())}}}else if(8===a.nodeType)if(a.data===Re)u.push({type:2,index:s});else for(var S=-1;-1!==(S=a.data.indexOf(Ie,S+1));)u.push({type:7,index:s}),S+=Ie.length-1;s++}},null,[{key:"createElement",value:function(e,t){var i=De.createElement("template");return i.innerHTML=e,i}}])}();function st(e,t){var i,a,n,o,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===et)return t;var c=void 0!==l?null===(i=s._$Co)||void 0===i?void 0:i[l]:s._$Cl,d=Be(t)?void 0:t._$litDirective$;return(null===(a=c)||void 0===a?void 0:a.constructor)!==d&&(null!==(n=c)&&void 0!==n&&null!==(o=n._$AO)&&void 0!==o&&o.call(n,!1),void 0===d?c=void 0:(c=new d(e))._$AT(e,s,l),void 0!==l?(null!==(r=s._$Co)&&void 0!==r?r:s._$Co=[])[l]=c:s._$Cl=c),void 0!==c&&(t=st(e,c._$AS(e,t.values),c,l)),t}var lt=function(){return l(function e(t,i){r(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,n=i.parts,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:De).importNode(a,!0);at.currentNode=o;for(var r=at.nextNode(),s=0,l=0,c=n[0];void 0!==c;){var d;if(s===c.index){var u=void 0;2===c.type?u=new ct(r,r.nextSibling,this,e):1===c.type?u=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(u=new vt(r,this,e)),this._$AV.push(u),c=n[++l]}s!==(null===(d=c)||void 0===d?void 0:d.index)&&(r=at.nextNode(),s++)}return at.currentNode=De,o}},{key:"p",value:function(e){var t,i=0,a=c(this._$AV);try{for(a.s();!(t=a.n()).done;){var n=t.value;void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),ct=function(){function e(t,i,a,n){var o;r(this,e),this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=n,this._$Cv=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=st(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),Be(e)?e===tt||null==e||""===e?(this._$AH!==tt&&this._$AR(),this._$AH=tt):e!==this._$AH&&e!==et&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return qe(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==tt&&Be(this._$AH)?this._$AA.nextSibling.data=e:this.T(De.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=rt.createElement(nt(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{var o=new lt(n,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}},{key:"_$AC",value:function(e){var t=it.get(e.strings);return void 0===t&&it.set(e.strings,t=new rt(e)),t}},{key:"k",value:function(t){qe(this._$AH)||(this._$AH=[],this._$AR());var i,a,n=this._$AH,o=0,r=c(t);try{for(r.s();!(a=r.n()).done;){var s=a.value;o===n.length?n.push(i=new e(this.O(Ve()),this.O(Ve()),this,this.options)):i=n[o],i._$AI(s),o++}}catch(e){r.e(e)}finally{r.f()}o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),dt=function(){return l(function e(t,i,a,n,o){r(this,e),this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=tt},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,n=this.strings,o=!1;if(void 0===n)e=st(this,e,t,0),(o=!Be(e)||e!==this._$AH&&e!==et)&&(this._$AH=e);else{var r,s,l=e;for(e=n[0],r=0;r<n.length-1;r++)(s=st(this,l[i+r],t,r))===et&&(s=this._$AH[r]),o||(o=!Be(s)||s!==this._$AH[r]),s===tt?e=tt:e!==tt&&(e+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}o&&!a&&this.j(e)}},{key:"j",value:function(e){e===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),ut=function(e){function t(){var e;return r(this,t),(e=o(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===tt?void 0:e}}])}(dt),ht=function(e){function t(){var e;return r(this,t),(e=o(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==tt)}}])}(dt),pt=function(e){function t(e,i,a,n,s){var l;return r(this,t),(l=o(this,t,[e,i,a,n,s])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=st(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:tt)!==et){var i=this._$AH,a=e===tt&&i!==tt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==tt&&(i===tt||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(dt),vt=function(){return l(function e(t,i,a){r(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){st(this,e)}}])}(),gt=Me.litHtmlPolyfillSupport;null!=gt&&gt(rt,ct),(null!==(xe=Me.litHtmlVersions)&&void 0!==xe?xe:Me.litHtmlVersions=[]).push("3.3.1");var ft,_t,mt=globalThis,bt=function(e){function t(){var e;return r(this,t),(e=o(this,t,arguments)).renderOptions={host:a(e)},e._$Do=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,a=$(t,"createRenderRoot",this,3)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),$(t,"update",this,3)([e]),this._$Do=function(e,t,i){var a,n=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,o=n._$litPart$;if(void 0===o){var r,s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new ct(t.insertBefore(Ve(),s),s,void 0,null!=i?i:{})}return o._$AI(e),o}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;$(t,"connectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;$(t,"disconnectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return et}}])}(Y);bt._$litElement$=!0,bt.finalized=!0,null===(ft=mt.litElementHydrateSupport)||void 0===ft||ft.call(mt,{LitElement:bt});var yt=mt.litElementPolyfillSupport;null==yt||yt({LitElement:bt}),(null!==(_t=mt.litElementVersions)&&void 0!==_t?_t:mt.litElementVersions=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var $t=function(e){return function(t,i){void 0!==i?i.addInitializer(function(){customElements.define(e,t)}):customElements.define(e,t)}},kt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:K},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,n=i.metadata,o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){var r=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,a,e,!0,i)},init:function(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===a){var s=i.name;return function(i){var a=this[s];t.call(this,i),this.requestUpdate(s,a,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function At(e){return function(t,i){return"object"==A(i)?wt(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function xt(e){return At(f(f({},e),{},{state:!0,attribute:!1}))}const Ct="number";var St;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(St||(St={}));const Ot={[St.ArmedAway]:"hass:shield-lock",[St.ArmedHome]:"hass:shield-home",[St.ArmedNight]:"hass:shield-moon",[St.ArmedVacation]:"hass:shield-airplane",[St.ArmedCustomBypass]:"hass:security",[St.Disarmed]:"hass:shield-off",[St.Arming]:"hass:shield-outline",[St.Pending]:"hass:shield-outline",[St.Triggered]:"hass:bell-ring"};var Et;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(Et||(Et={}));const jt={[Et.ArmAway]:"mdi:lock",[Et.ArmHome]:"mdi:home",[Et.ArmNight]:"mdi:moon-waning-crescent",[Et.ArmVacation]:"mdi:airplane",[Et.ArmCustomBypass]:"mdi:shield",[Et.Disarm]:"mdi:shield-off"},zt={[Et.ArmAway]:St.ArmedAway,[Et.ArmHome]:St.ArmedHome,[Et.ArmNight]:St.ArmedNight,[Et.ArmVacation]:St.ArmedVacation,[Et.ArmCustomBypass]:St.ArmedCustomBypass,[Et.Disarm]:St.Disarmed};var Pt;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Pt||(Pt={}));const Tt=["arming","pending"],Mt={type:"",entity:"",name:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,auto_submit:!1,auto_submit_anywhere:!1,large_keypad:!1};var Ht;!function(e){e.Red="red",e.Pink="pink",e.Purple="purple",e.DeepPurple="deep-purple",e.Indigo="indigo",e.Blue="blue",e.LightBlue="light-blue",e.Cyan="cyan",e.Teal="teal",e.Green="green",e.LightGreen="light-green",e.Lime="lime",e.Yellow="yellow",e.Amber="amber",e.Orange="orange",e.DeepOrange="deep-orange",e.Brown="brown",e.LightGrey="light-grey",e.Grey="grey",e.DarkGrey="dark-grey",e.BlueGrey="blue-grey",e.Black="black",e.White="white"}(Ht||(Ht={}));const Nt=8e15,Lt=9e15,It=(e,t,i)=>t.filter(t=>i?e.length>=t:e.length===t).map(t=>e.slice(-t));class Rt{constructor(e,t,i,a){this.send=e,this.onSaturated=t,this.onError=i,this.canSend=a,this.pending=[],this.tried=new Set}add(e,t){for(const i of e){const e=`${t}\n${i}`;if(!this.tried.has(e)&&!this.pending.some(e=>e.target===t&&e.code===i)){if(this.pending.length>=10)return this.cancel(),this.onSaturated(),!1;this.pending.push({code:i,target:t})}}return this.next(),!0}cancel(){this.pending=[],this.tried.clear()}next(){if(void 0!==this.inFlight||!this.pending.length)return;const e=this.pending.shift();if(!this.canSend(e.target))return void this.cancel();const t=`${e.target}\n${e.code}`;this.tried.add(t);const i=Nt+Math.floor(1e15*Math.random());this.inFlight=i,this.send(e.code,i,e.target).then(()=>{this.inFlight=void 0,this.next()},e=>{this.inFlight=void 0,this.tried.delete(t),this.pending=[],this.onError(e)})}}var Ut={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},Dt={invalid_pin:"Neplatný",blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory"},Vt={editor:Ut,errors:Dt},Bt={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},qt={invalid_pin:"Ungültig",blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst"},Ft={editor:Bt,errors:qt},Wt={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},Zt={invalid_pin:"Ακυρος",blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες"},Gt={editor:Wt,errors:Zt},Kt={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",auto_submit:"Submit the code automatically as soon as it is complete (a wrong code is ignored silently).",auto_submit_anywhere:"Also accept the code when it appears anywhere in what is typed.",large_keypad:"Large keypad: full-width keypad with tall keys.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},Qt={invalid_pin:"Invalid",auto_submit_too_fast:"Typed too fast to check every digit. Type the code again.",auto_submit_failed:"Could not send the code to Alarmo. Check the connection and type the code again.",auto_submit_unavailable:"Auto-submit is unavailable: the code lengths could not be loaded.",blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors"},Jt={editor:Kt,errors:Qt},Yt={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},Xt={invalid_pin:"Inválido",blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores"},ei={editor:Yt,errors:Xt},ti={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",auto_submit:"Valider le code automatiquement dès qu'il est complet (un code erroné est ignoré sans message).",auto_submit_anywhere:"Accepter aussi le code s'il se trouve n'importe où dans la saisie.",large_keypad:"Grand clavier : clavier pleine largeur avec grandes touches.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},ii={invalid_pin:"Invalide",auto_submit_too_fast:"Saisie trop rapide pour vérifier chaque chiffre. Retapez le code.",auto_submit_failed:"Impossible d'envoyer le code à Alarmo. Vérifiez la connexion et retapez le code.",auto_submit_unavailable:"Validation automatique indisponible : les longueurs de code n'ont pas pu être chargées.",blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)"},ai={editor:ti,errors:ii},ni={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},oi={invalid_pin:"Non valido",blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori"},ri={editor:ni,errors:oi},si={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},li={invalid_pin:"Ongeldig",blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren"},ci={editor:si,errors:li},di={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},ui={invalid_pin:"Inválido",blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores"},hi={editor:di,errors:ui},pi={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},vi={invalid_pin:"Неверный",blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками"},gi={editor:pi,errors:vi},fi={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},_i={invalid_pin:"Ogiltig",blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer"},mi={editor:fi,errors:_i},bi={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},yi={invalid_pin:"无效的",blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的"},$i={editor:bi,errors:yi},ki={cs:Object.freeze({__proto__:null,default:Vt,editor:Ut,errors:Dt}),de:Object.freeze({__proto__:null,default:Ft,editor:Bt,errors:qt}),el:Object.freeze({__proto__:null,default:Gt,editor:Wt,errors:Zt}),en:Object.freeze({__proto__:null,default:Jt,editor:Kt,errors:Qt}),es:Object.freeze({__proto__:null,default:ei,editor:Yt,errors:Xt}),fr:Object.freeze({__proto__:null,default:ai,editor:ti,errors:ii}),it:Object.freeze({__proto__:null,default:ri,editor:ni,errors:oi}),nl:Object.freeze({__proto__:null,default:ci,editor:si,errors:li}),"pt-BR":Object.freeze({__proto__:null,default:hi,editor:di,errors:ui}),ru:Object.freeze({__proto__:null,default:gi,editor:pi,errors:vi}),sv:Object.freeze({__proto__:null,default:mi,editor:fi,errors:_i}),"zh-Hans":Object.freeze({__proto__:null,default:$i,editor:bi,errors:yi})};function wi(e,t,i="",a=""){const n=t.replace(/['"]+/g,"");var o;try{o=e.split(".").reduce((e,t)=>e[t],ki[n])}catch(t){o=e.split(".").reduce((e,t)=>e[t],ki.en)}if(void 0===o&&(o=e.split(".").reduce((e,t)=>e[t],ki.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)o=o.replace(i[e],a[e])}return o}function Ai(e){return null!=e}function xi(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Ai(e)}}function Ci(e){return e.substring(0,e.indexOf("."))}const Si=(e,t)=>{let i={hide:!1};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},Oi=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(Et.ArmAway),1&t&&i.push(Et.ArmHome),4&t&&i.push(Et.ArmNight),32&t&&i.push(Et.ArmVacation),16&t&&i.push(Et.ArmCustomBypass),i},Ei=(e,t,i)=>{const a=Ci(e.entity_id),n=e.attributes.device_class,o=e.state;if(Object.values(St).includes(o)&&i){const e=Si(o,i);if(!xi(e.state_label))return e.state_label}let r="";return n&&(r=t(`component.${a}.entity_component.${n}.state.${e.state}`)),r||(r=t(`component.${a}.entity_component._.state.${e.state}`)),r},ji=e=>null!==e.attributes.code_format,zi=(e,t,i=!1)=>{if(!e||!e.state)return"var(--state-unavailable-color)";let a=e.state;if(i){const i=Object.values(Et).map(e=>zt[e]);if(!i.includes(a)){const t=e.attributes.arm_mode;t&&(a=t)}const n=[Et.Disarm,...Oi(e)].filter(e=>!Si(zt[e],t).hide);1==n.length&&(a=zt[n[0]])}if(Object.keys(t.states||{}).includes(a)&&Ai((t.states[a]||{}).color)){const e=t.states[a].color;return Object.values(Ht).includes(e)?`var(--${e}-color)`:e}return a==St.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(St).includes(a)?`var(--state-alarm_control_panel-${a}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},Pi=e=>e.callWS({type:"alarmo/entities"}),Ti=e=>e.callWS({type:"alarmo/config"}),Mi=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const n=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,e.dispatchEvent(n),n};let Hi=class extends bt{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){Pi(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})}),this._alarmoConfig=await Ti(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Mt),e)}render(){var e,t,i;if(!this._config||!this.hass||!this._entities)return Xe``;if(!this._entities.length)return Xe`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const a=this._config.entity?this.hass.states[this._config.entity]:void 0,n=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=Si(zt[this._editAction],this._config);return Xe`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${wi("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div>
          <span>${wi("editor.action_dialog.show_button.title",this.hass.language)}</span>
          <div style="display: flex; flex-direction: row">
            <ha-formfield label="${wi("editor.action_dialog.show_button.options.always",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="never"
                @change=${()=>this._updateStateConfig(zt[this._editAction],{hide:void 0})}
                ?checked=${!Ai(e.hide)||[!1,"never"].includes(e.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${wi("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(zt[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(e.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==Et.Disarm?Xe`
            <ha-formfield label="${wi("editor.action_dialog.show_button.options.armed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="disarmed"
                @change=${()=>this._updateStateConfig(zt[this._editAction],{hide:"disarmed"})}
                ?checked=${"disarmed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>`:Xe`
            <ha-formfield label="${wi("editor.action_dialog.show_button.options.disarmed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="armed"
                @change=${()=>this._updateStateConfig(zt[this._editAction],{hide:"armed"})}
                ?checked=${"armed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>
              `}
          </div>
        </div>

        <div class="grid">
          <ha-input
            label="${wi("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(zt[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-input>

          <ha-icon-picker
            .hass=${this.hass}
            label="${wi("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${e.button_icon||jt[this._editAction]}"
            ?disabled=${e.hide}
            @value-changed=${e=>this._updateStateConfig(zt[this._editAction],{button_icon:e.detail.value})}
            >
          </ha-icon-picker>

          <ha-input
            label="${wi("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${zt[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(zt[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-input>

          <ha-select
            .icon=${Ai(e.color)}
            label="${wi("editor.action_dialog.color",this.hass.language)}"
            .value=${e.color}
            @closed=${e=>{e.stopPropagation()}}
            @selected=${e=>{e.stopPropagation();const t=e.target.value;this._updateStateConfig(zt[this._editAction],{color:t||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${e.color?Xe`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(Ht).includes(e.color)?`var(--${e.color}-color)`:e.color}">
                </span>
              </span>
            `:tt}
            ${Ai(e.color)&&e.color.length&&!Object.values(Ht).includes(e.color)?Xe`
                <ha-list-item .value=${e.color} graphic="icon">
                  ${e.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${e.color}">
                    </span>
                  </span>
                </ha-list-item>
            `:tt}
            ${Object.values(Ht).map(e=>Xe`
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

        ${a?Xe`
              <div class="config-item">
                <span>${wi("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row">
                ${this._renderActionOptions()}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${wi("editor.large_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.large_keypad}
              @change=${e=>this._updateConfig("large_keypad",e.target.checked)}
              ?disabled=${!a||!n}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${wi("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!a||!n||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_arm_required)==(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${wi("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Ai(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${wi("editor.auto_submit",this.hass.language)}>
            <ha-switch
              .checked=${this._config.auto_submit}
              @change=${e=>this._updateConfig("auto_submit",e.target.checked)}
              ?disabled=${!a||!n}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${wi("editor.auto_submit_anywhere",this.hass.language)}>
            <ha-switch
              .checked=${!!this._config.auto_submit&&!!this._config.auto_submit_anywhere}
              @change=${e=>this._updateConfig("auto_submit_anywhere",e.target.checked)}
              ?disabled=${!a||!n}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return tt;const e=this.hass.states[this._config.entity],t=Oi(e);let i=[Et.Disarm,...t].map(e=>({id:e,label:this.hass.localize(`ui.card.alarm_control_panel.${e}`),hidden:["always",!0].includes(Si(zt[e],this._config).hide||!1),order:Si(zt[e],this._config).button_order}));return i.sort((e,t)=>e.hidden&&!t.hidden?1:t.hidden&&!e.hidden?-1:Ai(e.order)||Ai(t.order)?Ai(e.order)&&!Ai(t.order)?-1:!Ai(e.order)&&Ai(t.order)?1:e.order-t.order:0),Xe`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${e=>this._handleActionsMoved(e,i.map(e=>zt[e.id]))}
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
              @click=${a=>{if(this._updateStateConfig(zt[e.id],e.hidden?{hide:void 0}:{hide:"always"}),e.hidden){let e=new CustomEvent("",{detail:{oldIdx:t,nexIdx:i.filter(e=>!e.hidden).length}});this._handleActionsMoved(e,i.map(e=>zt[e.id]))}a.target.blur()}}
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
    `}_handleActionsMoved(e,t){const i=e.detail.oldIndex,a=e.detail.newIndex;let n=t[i];t=t.filter((e,t)=>t!=i),t.splice(a,0,n);let o=Object.assign({},this._config.states);t.forEach((e,t)=>{o=Object.assign(Object.assign({},o),{[e]:Object.assign(Object.assign({},o[e]||{}),{button_order:t+1})})}),this._updateConfig("states",o)}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"auto_submit_anywhere"==e&&t&&(this._config=Object.assign(Object.assign({},this._config),{auto_submit:!0})),"auto_submit"!=e||t||(this._config=Object.assign(Object.assign({},this._config),{auto_submit_anywhere:!1})),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}Mi(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}(e,Object.keys(e).filter(t=>Ai(e[t]||"string"==typeof e[t])));let n=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const o=a(Object.assign(Object.assign({},n[e]),t));n=a(Object.assign(Object.assign({},n),{[e]:o})),this._updateConfig("states",n)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return H`
      /* Options that do not apply to the current configuration are hidden instead of greyed out. */
      ha-formfield:has(> ha-switch[disabled], > ha-slider[disabled]) {
        display: none;
      }
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
    `}};t([At({attribute:!1})],Hi.prototype,"hass",void 0),t([xt()],Hi.prototype,"_config",void 0),t([xt()],Hi.prototype,"_alarmoConfig",void 0),t([xt()],Hi.prototype,"_entities",void 0),t([xt()],Hi.prototype,"_editAction",void 0),Hi=t([$t("alarmo-card-editor-plus")],Hi);var Ni,Li,Ii=Object.freeze({__proto__:null,get AlarmoCardEditor(){return Hi}});class Ri extends bt{constructor(){super(...arguments),this.compact=!1,this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Tt.includes(i)?this.startTimer():Tt.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Tt.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",()=>{this._touchStarted=!0}),this.addEventListener("touchend",()=>{setTimeout(()=>{this._touchStarted=!1},10)}),this.addEventListener("mouseenter",()=>{this._touchStarted||(this._hover=!0)}),this.addEventListener("mouseleave",()=>{this._hover=!1})}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&Tt.includes(e)&&this.timer?Xe` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?Xe` ${Math.max(Math.round(this.getRemaining()),0)} `:Xe` <ha-icon .icon=${Ot[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;Tt.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):Mi(this,"hass-more-info",{entityId:this.entity})}render(){const e=this.hass.states[this.entity],t=this.datetime&&this.duration;if(this.compact)return Xe`
        <div class="compact ${e.state.split("_").shift()} ${t?"timer":""}">
          ${this._stateValue(e.state)}
        </div>
      `;let i=45,a=2*Math.PI*i;return Xe`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${e.state.split("_").shift()} ${t?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${i}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*a).toFixed(2)} ${a.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${i}, 0
              a ${i},${i} 0 1,0 90,0
              a ${i},${i} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${e.state.split("_").shift()} ${t?"timer":""}">
        <div class="value">${this._stateValue(e.state)}</div>
      </div>
    `}static get styles(){return H`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      :host([compact]) {
        width: 24px;
        height: 24px;
      }
      div.compact {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        color: var(--alarm-state-color);
        font-size: 15px;
        font-weight: 500;
        transition: 0.3s linear color;
        --mdc-icon-size: 24px;
      }
      div.compact.arming.timer,
      div.compact.pending.timer {
        animation: none;
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
    `}}t([At()],Ri.prototype,"hass",void 0),t([At()],Ri.prototype,"entity",void 0),t([At({type:Boolean,reflect:!0})],Ri.prototype,"compact",void 0),t([xt()],Ri.prototype,"_hover",void 0),customElements.define("alarmo-state-badge-plus",Ri),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ni||(Ni={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Li||(Li={}));class Ui extends bt{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return Xe``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?Ei(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:Ni.language}),a=e?t.attributes.friendly_name||(n=t.entity_id).substring(n.indexOf(".")+1):this.entity;var n;let o=!!this.state||"on"==t.state;return Xe`
      <div class="badge-container" @click=${()=>Mi(this,"hass-more-info",{entityId:this.entity})}>
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
    `}static get styles(){return H`
      :host {
        max-width: 100%;
      }
      .badge-container {
        display: inline-block;
        max-width: 100%;
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
        max-width: 100%;
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        white-space: var(--ha-label-badge-title-white-space, normal);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}t([At()],Ui.prototype,"hass",void 0),t([At()],Ui.prototype,"entity",void 0),t([At()],Ui.prototype,"state",void 0),customElements.define("alarmo-sensor-badge-plus",Ui);class Di extends bt{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return Xe`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return H`
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
    `}}t([At({type:Boolean})],Di.prototype,"disabled",void 0),t([At({type:Boolean})],Di.prototype,"scaled",void 0),customElements.define("alarmo-button-plus",Di);let Vi=class extends bt{render(){if(!this.hass||!this.config)return tt;const e=this.hass.states[this.config.entity];let t=e.state;const i=Object.values(Et).map(e=>zt[e]);if(!i.includes(t)){const i=e.attributes.arm_mode;i&&(t=i)}return Xe`
      <div class="container">
        ${this._renderOptions(t)}
      </div>
    `}_renderOptions(e){const t=this.hass.states[this.config.entity],i=[Et.Disarm,...Oi(t)].filter(e=>{const i=Si(zt[e],this.config).hide;if("boolean"==typeof i||!Ai(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==t.state;case"disarmed":return"disarmed"!==t.state}}),a=i.map(e=>Si(zt[e],this.config)).some(e=>!Ai(e.button_label)||e.button_label.length);return i.sort((e,t)=>{const i=Si(zt[e],this.config).button_order,a=Si(zt[t],this.config).button_order;return Ai(i)||Ai(a)?Ai(i)&&!Ai(a)?-1:!Ai(i)&&Ai(a)?1:i-a:0}),i.map(i=>{const n=Ai(this.readyForArmModes)&&!this.readyForArmModes.includes(zt[i])&&i!=Et.Disarm,o=Si(zt[i],this.config),r=i==Et.Disarm&&t.state!==St.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${zt[i]}`),s=Ai(o.button_label)?o.button_label:r;return Xe`
        <div
          class="button ${zt[i]==e?"selected":""}"
          role="button"
          tabindex="0"
          aria-label=${s||r}
          @click=${e=>this._handleClick(e,i)}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._handleClick(e,i))}}
        >
          <div class="content ${a?"has-text":""}">
            <ha-icon icon="${xi(o.button_icon)?jt[i]:o.button_icon}"></ha-icon>
            ${zt[i]!=e&&Ai(this.readyForArmModes)?Xe`
              <ha-icon
                icon="${"mdi:circle-medium"}"
                class="badge ${n?"error":"success"}"
              ></ha-icon>
            `:tt}
            <span aria-hidden="true">${s}</span>
          </div>
        </div>
      `})}_handleClick(e,t){Mi(this,"button-clicked",{ev:e,action:t})}static get styles(){return H`
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
      div.button:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: -2px;
        border-radius: 8px;
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
      :host([compact]) div.content span {
        display: none;
      }
      :host([compact]) {
        padding: 0px;
      }
      :host([compact]) div.container {
        padding: 0px;
      }
      :host([compact]) div.container::before {
        border-radius: 12px;
      }
      :host([compact]) div.content,
      :host([compact]) div.content.has-text {
        height: calc(var(--content-scale, 1) * 35px);
        inline-size: 100%;
      }
      :host([compact]) div.content::before {
        border-radius: 12px;
      }
    `}};t([At({attribute:!1})],Vi.prototype,"hass",void 0),t([At({attribute:!1})],Vi.prototype,"config",void 0),t([At({attribute:!1})],Vi.prototype,"readyForArmModes",void 0),Vi=t([$t("alarmo-actions-bar-plus")],Vi);const Bi=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([At({attribute:!1})],i.prototype,"hass",void 0),i},qi=["1","2","3","4","5","6","7","8","9","","0","clear"],Fi=["1","2","3","4","5","6","7","8","9","clear","0","backspace"];return e.AlarmoCard=class extends(Bi(bt)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.readyForArmModes=null,this.backendConnection=null,this.subscribedEntities=[],this._codeClearTimer=0,this._codeLengths=[],this._codeLengthsStatus="idle",this._codeLengthsRequest=0,this._areaIds=[],this._processedInput="",this._autoQueue=new Rt((e,t,i)=>this.hass.callService("alarmo","disarm",{entity_id:i,code:e,context_id:t}),()=>{this._input="",this._processedInput="",this._showCodeError(wi("errors.auto_submit_too_fast",this.hass.language))},()=>{this._showCodeError(wi("errors.auto_submit_failed",this.hass.language))},e=>{var t;return this.isConnected&&!!(null===(t=this._config)||void 0===t?void 0:t.auto_submit)&&this._config.entity===e})}static async getConfigElement(){return await Promise.resolve().then(function(){return Ii}),document.createElement("alarmo-card-editor-plus")}static async getStubConfig(e){let t=Object.keys(e.states).find(e=>"alarm_control_panel"==Ci(e));return await Pi(e).then(e=>{const i=e.sort((e,t)=>Number(e.area_id)-Number(t.area_id));i.length&&(t=i[0].entity_id)}),{type:"custom:alarmo-card-plus",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct&&(ji(t)||this._config.keep_keypad_visible)?this._config.large_keypad?11:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Ci(e.entity))throw new Error("Invalid configuration provided for entity");if(Ai(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>2.5))throw new Error("Invalid configuration provided for button_scale_keypad");if(Ai(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>2.5))throw new Error("Invalid configuration provided for button_scale_actions")})(e);const t=this._config;this._config=Object.assign(Object.assign(Object.assign({},Mt),e),{button_scale_actions:1,button_scale_keypad:1,show_ready_indicator:!1}),t&&this.hass&&(t.entity!==this._config.entity?(this._clearCode(),this.backendConnection=null,this.loadBackendConfig()):t.auto_submit!==this._config.auto_submit&&(this._config.auto_submit||(this._autoQueue.cancel(),this._processedInput=this._input),this._loadCodeLengths()))}disconnectedCallback(){super.disconnectedCallback(),this._clearCode()}hassSubscribe(){const e=()=>this._loadCodeLengths();return this.hass.connection.addEventListener("ready",e),[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:"alarmo_updated"}),this.hass.connection.subscribeMessage(()=>this._loadCodeLengths(),{type:"alarmo_config_updated"}).catch(()=>()=>{}),Promise.resolve(()=>{var t;return null===(t=this.hass)||void 0===t?void 0:t.connection.removeEventListener("ready",e)})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||Pi(this.hass).then(e=>{const t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null),this._areaIds=e.filter(e=>e.area_id).map(e=>String(e.area_id))}).then(()=>Ti(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0,this._loadCodeLengths()}).then(()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t}).then(e=>{this.readyForArmModes=e.modes}).catch(e=>{this.backendConnection=!1})}_loadCodeLengths(){var e;const t=++this._codeLengthsRequest;if(!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.auto_submit)||!this.backendConnection)return this._codeLengths=[],void(this._codeLengthsStatus="idle");var i;this._codeLengthsStatus="loading",(i=this.hass,i.callWS({type:"alarmo/users"})).then(e=>{if(t!==this._codeLengthsRequest)return;const i=this.area_id?[String(this.area_id)]:this._areaIds,a=Object.values(e).filter(e=>{var t;return e.enabled&&e.can_disarm&&e.code_format===Ct&&e.code_length>0&&(!(null===(t=e.area_limit)||void 0===t?void 0:t.length)||i.every(t=>e.area_limit.map(String).includes(t)))});this._codeLengths=[...new Set(a.map(e=>e.code_length))].sort((e,t)=>e-t),this._codeLengthsStatus="ready",this._input!==this._processedInput&&this._autoSubmit()}).catch(()=>{t===this._codeLengthsRequest&&(this._codeLengths=[],this._codeLengthsStatus="failed")})}async _fetchData(e){var t;if(e.data.area_id===this.area_id)switch(e.data.event){case Pt.Arm:this._clearCode();break;case Pt.Disarm:this._autoQueue.cancel();break;case Pt.Trigger:break;case Pt.InvalidCodeProvided:case Pt.NoCodeProvided:if("number"==typeof(t=e.data.context_id)&&t>=Nt&&t<Lt)break;this._showCodeError(),this.subscribedEntities=[];break;case Pt.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case Pt.CommandNotAllowed:this._clearCode();break;case Pt.TriggerTimeExpired:break;case Pt.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==St.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return Xe``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?Xe`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:Xe`
      <ha-card class="${this._config.large_keypad?"large-keypad":"compact"}">
        <div class="header">
          <div class="icon">
            <alarmo-state-badge-plus
              .hass=${this.hass}
              .entity=${this._config.entity}
              ?compact=${!this._config.large_keypad}
              style="--alarm-state-color: ${zi(i,this._config)}"
            >
            </alarmo-state-badge-plus>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>xi(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${Ei(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="actions" class="actions">
          ${this._renderActions()}
        </div>

        ${ji(i)||this._config.keep_keypad_visible?Xe`
              <ha-input
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!ji(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer(),this._autoSubmit()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct?"numeric":"text"}
              ></ha-input>
            `:Xe``}
        ${this._config.auto_submit&&"failed"===this._codeLengthsStatus&&ji(i)?Xe`
              <div class="auto-submit-failed">
                <span>${wi("errors.auto_submit_unavailable",this.hass.language)}</span>
                <button type="button" @click=${()=>this._loadCodeLengths()}>
                  ${this.hass.localize("ui.common.retry")||"Retry"}
                </button>
              </div>
            `:""}
        ${!ji(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ct?Xe``:Xe`
          <div id="keypad" class="keypad" style="max-width: ${this._config.large_keypad?"none":300*this._config.button_scale_keypad+"px"}">
            ${(this._config.large_keypad?Fi:qi).map(e=>""===e?Xe`
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
                ?disabled=${!ji(i)||("clear"===e||"backspace"===e)&&!this._input.length}
                class="${"clear"===e||"backspace"===e?"clear":"numberKey"}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e||"backspace"===e?Xe`<ha-icon
                    icon=${"backspace"===e?"mdi:backspace-outline":"mdi:close"}
                    style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"
                  ></ha-icon>`:Xe` <span>${e}</span>`}
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
        ?compact=${!this._config.large_keypad}
        style="--alarm-state-color: ${zi(e,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar-plus>
    `}_renderWarning(){if(!this.hass||!this._config||!this._config.show_messages)return Xe``;const e=this.hass.states[this._config.entity];return e.attributes.open_sensors&&e.state==St.Triggered||"blocking_sensors"==this.warning&&e.attributes.open_sensors?Xe`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?wi("errors.blocking_sensors",this.hass.language):wi("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(e.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Xe`
                  <div class="badge">
                    <alarmo-sensor-badge-plus .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge-plus>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:Xe``}_handlePadClick(e){const t=e.currentTarget.value;if(this._config.large_keypad){const t=e.currentTarget;t.classList.add("lit"),setTimeout(()=>t.classList.remove("lit"),150)}this._clearCodeError(),"clear"===t&&(this._autoQueue.cancel(),this._processedInput=""),this._input="clear"===t?"":"backspace"===t?this._input.slice(0,-1):this._input+t,this._autoSubmit()}_autoSubmit(){var e;const t=this.hass.states[this._config.entity];if(!(this.isConnected&&this._config.auto_submit&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ct&&t&&t.state!==St.Disarmed&&ji(t)))return void(this._processedInput=this._input);if("ready"!==this._codeLengthsStatus)return;const i=((e,t,i,a)=>{let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;const o=[];for(let e=n+1;e<=t.length;e++)o.push(It(t.slice(0,e),i,a));return o})(this._processedInput,this._input,this._codeLengths,this._config.auto_submit_anywhere);for(const e of i)if(!this._autoQueue.add(e,this._config.entity))return;this._input=this._input.slice(-Math.max(20,...this._codeLengths)),this._processedInput=this._input}_handleActionClick(e,t){e.target.blur(),this._clearCodeError(),t==Et.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:zt[t],code:this._input}),this.warning=""}_showCodeError(e=wi("errors.invalid_pin",this.hass.language)){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");i&&(i.classList.remove("error"),i.classList.add("error"),i.hint=e)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.hint="",this._input="",this._processedInput="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._processedInput="",this._autoQueue.cancel(),this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}static get styles(){return H`
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
      ha-card.compact .header {
        justify-content: flex-start;
        padding: 14px 0px 10px;
        gap: 16px;
        margin: 0px 16px;
      }
      ha-card.compact .header .name {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
      }
      ha-card.compact .header .state {
        font-size: 13px;
        line-height: 18px;
        color: var(--secondary-text-color);
      }
      ha-card.compact {
        padding-bottom: 14px;
      }
      ha-card.compact .actions alarmo-actions-bar-plus {
        padding: 0px 14px;
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
      ha-card.large-keypad #keypad {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 10px;
        padding: 0 16px;
      }
      ha-card.large-keypad #keypad alarmo-button-plus {
        width: auto;
        height: 80px;
        --alarmo-button-font-size: 30px;
        --alarmo-button-border-radius: 8px;
      }
      ha-card.large-keypad #keypad alarmo-button-plus.lit {
        --alarmo-button-background-color: var(--primary-color);
        --alarmo-button-background-opacity: 1;
        --alarmo-button-color: var(--text-primary-color);
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
        min-width: 0;
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
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        min-width: 0;
        margin: 5px 8px;
        /* Sensor names stay on one line; very long names are cut with an ellipsis. */
        --ha-label-badge-title-width: auto;
        --ha-label-badge-title-white-space: nowrap;
      }
      div.messagebox .content .badge alarmo-sensor-badge-plus {
        display: block;
        max-width: 100%;
        min-width: 0;
      }
      div.auto-submit-failed {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0px 16px 8px;
        font-size: 14px;
        color: var(--error-color);
      }
      div.auto-submit-failed button {
        background: none;
        border: none;
        padding: 4px 8px;
        font: inherit;
        font-weight: 500;
        color: var(--primary-color);
        cursor: pointer;
      }
    `}},t([At({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([xt()],e.AlarmoCard.prototype,"_config",void 0),t([xt()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([xt()],e.AlarmoCard.prototype,"_input",void 0),t([xt()],e.AlarmoCard.prototype,"warning",void 0),t([xt()],e.AlarmoCard.prototype,"area_id",void 0),t([xt()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([xt()],e.AlarmoCard.prototype,"backendConnection",void 0),t([xt()],e.AlarmoCard.prototype,"_codeLengthsStatus",void 0),e.AlarmoCard=t([$t("alarmo-card-plus")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card-plus",name:"Alarmo Card Plus",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD-PLUS  \n%c  Version: ${"v1.6.9-plus.6".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
