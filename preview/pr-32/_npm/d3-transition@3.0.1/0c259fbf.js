/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-transition@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{namespace as t,matcher as n,selector as e,selectorAll as r,selection as i,style as o}from"../d3-selection@3.0.0/a4e530fb.js";import{dispatch as u}from"../d3-dispatch@3.0.1/b5f7cdc6.js";import{timer as a,timeout as s,now as l}from"../d3-timer@3.0.1/f31b5398.js";import{interpolateNumber as f,interpolateRgb as c,interpolateString as h,interpolateTransformSvg as _,interpolateTransformCss as p}from"../d3-interpolate@3.0.1/034b7bcb.js";import{color as v}from"../d3-color@3.1.0/2c0cdfa2.js";import{easeCubicInOut as d}from"../d3-ease@3.0.1/6f15f633.js";var m=u("start","end","cancel","interrupt"),y=[],w=0,g=1,x=2,A=3,b=4,E=5,C=6;function N(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(t){e.state=g,e.timer.restart(u,e.delay,e.time),e.delay<=t&&u(t-e.delay)}function u(o){var a,c,h,_;if(e.state!==g)return f();for(a in i)if((_=i[a]).name===e.name){if(_.state===A)return s(u);_.state===b?(_.state=C,_.timer.stop(),_.on.call("interrupt",t,t.__data__,_.index,_.group),delete i[a]):+a<n&&(_.state=C,_.timer.stop(),_.on.call("cancel",t,t.__data__,_.index,_.group),delete i[a])}if(s((function(){e.state===A&&(e.state=b,e.timer.restart(l,e.delay,e.time),l(o))})),e.state=x,e.on.call("start",t,t.__data__,e.index,e.group),e.state===x){for(e.state=A,r=new Array(h=e.tween.length),a=0,c=-1;a<h;++a)(_=e.tween[a].value.call(t,t.__data__,e.index,e.group))&&(r[++c]=_);r.length=c+1}}function l(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(f),e.state=E,1),o=-1,u=r.length;++o<u;)r[o].call(t,i);e.state===E&&(e.on.call("end",t,t.__data__,e.index,e.group),f())}function f(){for(var r in e.state=C,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=a(o,0,e.time)}(t,e,{name:n,index:r,group:i,on:m,tween:y,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:w})}function S(t,n){var e=P(t,n);if(e.state>w)throw new Error("too late; already scheduled");return e}function T(t,n){var e=P(t,n);if(e.state>A)throw new Error("too late; already running");return e}function P(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function z(t,n){var e,r,i,o=t.__transition,u=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>x&&e.state<E,e.state=C,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}}function k(t,n){var e,r;return function(){var i=T(this,t),o=i.tween;if(o!==e)for(var u=0,a=(r=e=o).length;u<a;++u)if(r[u].name===n){(r=r.slice()).splice(u,1);break}i.tween=r}}function M(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=T(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=a;break}s===l&&i.push(a)}o.tween=i}}function O(t,n,e){var r=t._id;return t.each((function(){var t=T(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return P(t,r).value[n]}}function V(t,n){var e;return("number"==typeof n?f:n instanceof v?c:(e=v(n))?(n=e,c):h)(t,n)}function $(t){return function(){this.removeAttribute(t)}}function j(t){return function(){this.removeAttributeNS(t.space,t.local)}}function q(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttribute(t);return u===o?null:u===r?i:i=n(r=u,e)}}function B(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttributeNS(t.space,t.local);return u===o?null:u===r?i:i=n(r=u,e)}}function D(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttribute(t))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttribute(t)}}function F(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttributeNS(t.space,t.local))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttributeNS(t.space,t.local)}}function G(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}function H(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i}function I(t,n){return function(){S(this,t).delay=+n.apply(this,arguments)}}function J(t,n){return n=+n,function(){S(this,t).delay=n}}function K(t,n){return function(){T(this,t).duration=+n.apply(this,arguments)}}function L(t,n){return n=+n,function(){T(this,t).duration=n}}var Q=i.prototype.constructor;function R(t){return function(){this.style.removeProperty(t)}}var U=0;function W(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function X(t){return i().transition(t)}function Y(){return++U}var Z=i.prototype;W.prototype=X.prototype={constructor:W,select:function(t){var n=this._name,r=this._id;"function"!=typeof t&&(t=e(t));for(var i=this._groups,o=i.length,u=new Array(o),a=0;a<o;++a)for(var s,l,f=i[a],c=f.length,h=u[a]=new Array(c),_=0;_<c;++_)(s=f[_])&&(l=t.call(s,s.__data__,_,f))&&("__data__"in s&&(l.__data__=s.__data__),h[_]=l,N(h[_],n,r,_,h,P(s,r)));return new W(u,this._parents,n,r)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=r(t));for(var i=this._groups,o=i.length,u=[],a=[],s=0;s<o;++s)for(var l,f=i[s],c=f.length,h=0;h<c;++h)if(l=f[h]){for(var _,p=t.call(l,l.__data__,h,f),v=P(l,e),d=0,m=p.length;d<m;++d)(_=p[d])&&N(_,n,e,d,p,v);u.push(p),a.push(l)}return new W(u,a,n,e)},selectChild:Z.selectChild,selectChildren:Z.selectChildren,filter:function(t){"function"!=typeof t&&(t=n(t));for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var u,a=e[o],s=a.length,l=i[o]=[],f=0;f<s;++f)(u=a[f])&&t.call(u,u.__data__,f,a)&&l.push(u);return new W(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,l=n[a],f=e[a],c=l.length,h=u[a]=new Array(c),_=0;_<c;++_)(s=l[_]||f[_])&&(h[_]=s);for(;a<r;++a)u[a]=n[a];return new W(u,this._parents,this._name,this._id)},selection:function(){return new Q(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Y(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)if(u=a[l]){var f=P(u,n);N(u,t,e,l,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new W(r,this._parents,t,e)},call:Z.call,nodes:Z.nodes,node:Z.node,size:Z.size,empty:Z.empty,each:Z.each,on:function(t,n){var e=this._id;return arguments.length<2?P(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?S:T;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}(e,t,n))},attr:function(n,e){var r=t(n),i="transform"===r?_:V;return this.attrTween(n,"function"==typeof e?(r.local?F:D)(r,i,O(this,"attr."+n,e)):null==e?(r.local?j:$)(r):(r.local?B:q)(r,i,e))},attrTween:function(n,e){var r="attr."+n;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var i=t(n);return this.tween(r,(i.local?G:H)(i,e))},style:function(t,n,e){var r="transform"==(t+="")?p:V;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var u=o(this,t),a=(this.style.removeProperty(t),o(this,t));return u===a?null:u===e&&a===r?i:i=n(e=u,r=a)}}(t,r)).on("end.style."+t,R(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,u;return function(){var a=o(this,t),s=e(this),l=s+"";return null==s&&(this.style.removeProperty(t),l=s=o(this,t)),a===l?null:a===r&&l===i?u:(i=l,u=n(r=a,s))}}(t,r,O(this,"style."+t,n))).each(function(t,n){var e,r,i,o,u="style."+n,a="end."+u;return function(){var s=T(this,t),l=s.on,f=null==s.value[u]?o||(o=R(n)):void 0;l===e&&i===f||(r=(e=l).copy()).on(a,i=f),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,u=e+"";return function(){var a=o(this,t);return a===u?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(O(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=P(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?k:M)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?I:J)(n,t)):P(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?K:L)(n,t)):P(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){T(this,t).ease=n}}(n,t)):P(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;T(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,u){var a={value:u},s={value:function(){0==--i&&o()}};e.each((function(){var e=T(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(a),n._.interrupt.push(a),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:Z[Symbol.iterator]};var tt={time:null,delay:0,duration:250,ease:d};function nt(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}i.prototype.interrupt=function(t){return this.each((function(){z(this,t)}))},i.prototype.transition=function(t){var n,e;t instanceof W?(n=t._id,t=t._name):(n=Y(),(e=tt).time=l(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,f=0;f<s;++f)(u=a[f])&&N(u,t,n,f,a,e||nt(u,n));return new W(r,this._parents,t,n)};var et=[null];function rt(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>g&&e.name===n)return new W([[t]],et,n,+r);return null}export{rt as active,z as interrupt,X as transition};export default null;