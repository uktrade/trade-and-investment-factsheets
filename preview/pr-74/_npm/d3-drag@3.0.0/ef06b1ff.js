/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-drag@3.0.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{dispatch as e}from"../d3-dispatch@3.0.1/b5f7cdc6.js";import{select as t,pointer as n}from"../d3-selection@3.0.0/a4e530fb.js";const r={passive:!1},o={capture:!0,passive:!1};function a(e){e.stopImmediatePropagation()}function i(e){e.preventDefault(),e.stopImmediatePropagation()}function u(e){var n=e.document.documentElement,r=t(e).on("dragstart.drag",i,o);"onselectstart"in n?r.on("selectstart.drag",i,o):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function c(e,n){var r=e.document.documentElement,a=t(e).on("dragstart.drag",null);n&&(a.on("click.drag",i,o),setTimeout((function(){a.on("click.drag",null)}),0)),"onselectstart"in r?a.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var l=e=>()=>e;function s(e,{sourceEvent:t,subject:n,target:r,identifier:o,active:a,x:i,y:u,dx:c,dy:l,dispatch:s}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:u,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:s}})}function f(e){return!e.ctrlKey&&!e.button}function d(){return this.parentNode}function g(e,t){return null==t?{x:e.x,y:e.y}:t}function h(){return navigator.maxTouchPoints||"ontouchstart"in this}function m(){var m,v,p,b,y=f,x=d,_=g,w=h,E={},T=e("start","drag","end"),j=0,k=0;function M(e){e.on("mousedown.drag",P).filter(w).on("touchstart.drag",S).on("touchmove.drag",U,r).on("touchend.drag touchcancel.drag",I).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function P(e,n){if(!b&&y.call(this,e,n)){var r=X(this,x.call(this,e,n),e,n,"mouse");r&&(t(e.view).on("mousemove.drag",z,o).on("mouseup.drag",D,o),u(e.view),a(e),p=!1,m=e.clientX,v=e.clientY,r("start",e))}}function z(e){if(i(e),!p){var t=e.clientX-m,n=e.clientY-v;p=t*t+n*n>k}E.mouse("drag",e)}function D(e){t(e.view).on("mousemove.drag mouseup.drag",null),c(e.view,p),i(e),E.mouse("end",e)}function S(e,t){if(y.call(this,e,t)){var n,r,o=e.changedTouches,i=x.call(this,e,t),u=o.length;for(n=0;n<u;++n)(r=X(this,i,e,t,o[n].identifier,o[n]))&&(a(e),r("start",e,o[n]))}}function U(e){var t,n,r=e.changedTouches,o=r.length;for(t=0;t<o;++t)(n=E[r[t].identifier])&&(i(e),n("drag",e,r[t]))}function I(e){var t,n,r=e.changedTouches,o=r.length;for(b&&clearTimeout(b),b=setTimeout((function(){b=null}),500),t=0;t<o;++t)(n=E[r[t].identifier])&&(a(e),n("end",e,r[t]))}function X(e,t,r,o,a,i){var u,c,l,f=T.copy(),d=n(i||r,t);if(null!=(l=_.call(e,new s("beforestart",{sourceEvent:r,target:M,identifier:a,active:j,x:d[0],y:d[1],dx:0,dy:0,dispatch:f}),o)))return u=l.x-d[0]||0,c=l.y-d[1]||0,function r(i,g,h){var m,v=d;switch(i){case"start":E[a]=r,m=j++;break;case"end":delete E[a],--j;case"drag":d=n(h||g,t),m=j}f.call(i,e,new s(i,{sourceEvent:g,subject:l,target:M,identifier:a,active:m,x:d[0]+u,y:d[1]+c,dx:d[0]-v[0],dy:d[1]-v[1],dispatch:f}),o)}}return M.filter=function(e){return arguments.length?(y="function"==typeof e?e:l(!!e),M):y},M.container=function(e){return arguments.length?(x="function"==typeof e?e:l(e),M):x},M.subject=function(e){return arguments.length?(_="function"==typeof e?e:l(e),M):_},M.touchable=function(e){return arguments.length?(w="function"==typeof e?e:l(!!e),M):w},M.on=function(){var e=T.on.apply(T,arguments);return e===T?M:e},M.clickDistance=function(e){return arguments.length?(k=(e=+e)*e,M):Math.sqrt(k)},M}s.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};export{m as drag,u as dragDisable,c as dragEnable};export default null;
