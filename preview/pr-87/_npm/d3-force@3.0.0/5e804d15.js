/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/d3-force@3.0.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{quadtree as n}from"../d3-quadtree@3.0.1/0dfd751c.js";import{dispatch as t}from"../d3-dispatch@3.0.1/9ba9c7f3.js";import{timer as r}from"../d3-timer@3.0.1/b58a267d.js";function e(n,t){var r,e=1;function i(){var i,o,u=r.length,f=0,a=0;for(i=0;i<u;++i)f+=(o=r[i]).x,a+=o.y;for(f=(f/u-n)*e,a=(a/u-t)*e,i=0;i<u;++i)(o=r[i]).x-=f,o.y-=a}return null==n&&(n=0),null==t&&(t=0),i.initialize=function(n){r=n},i.x=function(t){return arguments.length?(n=+t,i):n},i.y=function(n){return arguments.length?(t=+n,i):t},i.strength=function(n){return arguments.length?(e=+n,i):e},i}function i(n){return function(){return n}}function o(n){return 1e-6*(n()-.5)}function u(n){return n.x+n.vx}function f(n){return n.y+n.vy}function a(t){var r,e,a,c=1,l=1;function h(){for(var t,i,h,y,x,g,s,d=r.length,p=0;p<l;++p)for(i=n(r,u,f).visitAfter(v),t=0;t<d;++t)h=r[t],g=e[h.index],s=g*g,y=h.x+h.vx,x=h.y+h.vy,i.visit(M);function M(n,t,r,e,i){var u=n.data,f=n.r,l=g+f;if(!u)return t>y+l||e<y-l||r>x+l||i<x-l;if(u.index>h.index){var v=y-u.x-u.vx,d=x-u.y-u.vy,p=v*v+d*d;p<l*l&&(0===v&&(p+=(v=o(a))*v),0===d&&(p+=(d=o(a))*d),p=(l-(p=Math.sqrt(p)))/p*c,h.vx+=(v*=p)*(l=(f*=f)/(s+f)),h.vy+=(d*=p)*l,u.vx-=v*(l=1-l),u.vy-=d*l)}}}function v(n){if(n.data)return n.r=e[n.data.index];for(var t=n.r=0;t<4;++t)n[t]&&n[t].r>n.r&&(n.r=n[t].r)}function y(){if(r){var n,i,o=r.length;for(e=new Array(o),n=0;n<o;++n)i=r[n],e[i.index]=+t(i,n,r)}}return"function"!=typeof t&&(t=i(null==t?1:+t)),h.initialize=function(n,t){r=n,a=t,y()},h.iterations=function(n){return arguments.length?(l=+n,h):l},h.strength=function(n){return arguments.length?(c=+n,h):c},h.radius=function(n){return arguments.length?(t="function"==typeof n?n:i(+n),y(),h):t},h}function c(n){return n.index}function l(n,t){var r=n.get(t);if(!r)throw new Error("node not found: "+t);return r}function h(n){var t,r,e,u,f,a,h=c,v=function(n){return 1/Math.min(u[n.source.index],u[n.target.index])},y=i(30),x=1;function g(e){for(var i=0,u=n.length;i<x;++i)for(var c,l,h,v,y,g,s,d=0;d<u;++d)l=(c=n[d]).source,v=(h=c.target).x+h.vx-l.x-l.vx||o(a),y=h.y+h.vy-l.y-l.vy||o(a),v*=g=((g=Math.sqrt(v*v+y*y))-r[d])/g*e*t[d],y*=g,h.vx-=v*(s=f[d]),h.vy-=y*s,l.vx+=v*(s=1-s),l.vy+=y*s}function s(){if(e){var i,o,a=e.length,c=n.length,v=new Map(e.map(((n,t)=>[h(n,t,e),n])));for(i=0,u=new Array(a);i<c;++i)(o=n[i]).index=i,"object"!=typeof o.source&&(o.source=l(v,o.source)),"object"!=typeof o.target&&(o.target=l(v,o.target)),u[o.source.index]=(u[o.source.index]||0)+1,u[o.target.index]=(u[o.target.index]||0)+1;for(i=0,f=new Array(c);i<c;++i)o=n[i],f[i]=u[o.source.index]/(u[o.source.index]+u[o.target.index]);t=new Array(c),d(),r=new Array(c),p()}}function d(){if(e)for(var r=0,i=n.length;r<i;++r)t[r]=+v(n[r],r,n)}function p(){if(e)for(var t=0,i=n.length;t<i;++t)r[t]=+y(n[t],t,n)}return null==n&&(n=[]),g.initialize=function(n,t){e=n,a=t,s()},g.links=function(t){return arguments.length?(n=t,s(),g):n},g.id=function(n){return arguments.length?(h=n,g):h},g.iterations=function(n){return arguments.length?(x=+n,g):x},g.strength=function(n){return arguments.length?(v="function"==typeof n?n:i(+n),d(),g):v},g.distance=function(n){return arguments.length?(y="function"==typeof n?n:i(+n),p(),g):y},g}const v=4294967296;function y(n){return n.x}function x(n){return n.y}var g=Math.PI*(3-Math.sqrt(5));function s(n){var e,i=1,o=.001,u=1-Math.pow(o,1/300),f=0,a=.6,c=new Map,l=r(x),h=t("tick","end"),y=function(){let n=1;return()=>(n=(1664525*n+1013904223)%v)/v}();function x(){s(),h.call("tick",e),i<o&&(l.stop(),h.call("end",e))}function s(t){var r,o,l=n.length;void 0===t&&(t=1);for(var h=0;h<t;++h)for(i+=(f-i)*u,c.forEach((function(n){n(i)})),r=0;r<l;++r)null==(o=n[r]).fx?o.x+=o.vx*=a:(o.x=o.fx,o.vx=0),null==o.fy?o.y+=o.vy*=a:(o.y=o.fy,o.vy=0);return e}function d(){for(var t,r=0,e=n.length;r<e;++r){if((t=n[r]).index=r,null!=t.fx&&(t.x=t.fx),null!=t.fy&&(t.y=t.fy),isNaN(t.x)||isNaN(t.y)){var i=10*Math.sqrt(.5+r),o=r*g;t.x=i*Math.cos(o),t.y=i*Math.sin(o)}(isNaN(t.vx)||isNaN(t.vy))&&(t.vx=t.vy=0)}}function p(t){return t.initialize&&t.initialize(n,y),t}return null==n&&(n=[]),d(),e={tick:s,restart:function(){return l.restart(x),e},stop:function(){return l.stop(),e},nodes:function(t){return arguments.length?(n=t,d(),c.forEach(p),e):n},alpha:function(n){return arguments.length?(i=+n,e):i},alphaMin:function(n){return arguments.length?(o=+n,e):o},alphaDecay:function(n){return arguments.length?(u=+n,e):+u},alphaTarget:function(n){return arguments.length?(f=+n,e):f},velocityDecay:function(n){return arguments.length?(a=1-n,e):1-a},randomSource:function(n){return arguments.length?(y=n,c.forEach(p),e):y},force:function(n,t){return arguments.length>1?(null==t?c.delete(n):c.set(n,p(t)),e):c.get(n)},find:function(t,r,e){var i,o,u,f,a,c=0,l=n.length;for(null==e?e=1/0:e*=e,c=0;c<l;++c)(u=(i=t-(f=n[c]).x)*i+(o=r-f.y)*o)<e&&(a=f,e=u);return a},on:function(n,t){return arguments.length>1?(h.on(n,t),e):h.on(n)}}}function d(){var t,r,e,u,f,a=i(-30),c=1,l=1/0,h=.81;function v(e){var i,o=t.length,f=n(t,y,x).visitAfter(s);for(u=e,i=0;i<o;++i)r=t[i],f.visit(d)}function g(){if(t){var n,r,e=t.length;for(f=new Array(e),n=0;n<e;++n)r=t[n],f[r.index]=+a(r,n,t)}}function s(n){var t,r,e,i,o,u=0,a=0;if(n.length){for(e=i=o=0;o<4;++o)(t=n[o])&&(r=Math.abs(t.value))&&(u+=t.value,a+=r,e+=r*t.x,i+=r*t.y);n.x=e/a,n.y=i/a}else{(t=n).x=t.data.x,t.y=t.data.y;do{u+=f[t.data.index]}while(t=t.next)}n.value=u}function d(n,t,i,a){if(!n.value)return!0;var v=n.x-r.x,y=n.y-r.y,x=a-t,g=v*v+y*y;if(x*x/h<g)return g<l&&(0===v&&(g+=(v=o(e))*v),0===y&&(g+=(y=o(e))*y),g<c&&(g=Math.sqrt(c*g)),r.vx+=v*n.value*u/g,r.vy+=y*n.value*u/g),!0;if(!(n.length||g>=l)){(n.data!==r||n.next)&&(0===v&&(g+=(v=o(e))*v),0===y&&(g+=(y=o(e))*y),g<c&&(g=Math.sqrt(c*g)));do{n.data!==r&&(x=f[n.data.index]*u/g,r.vx+=v*x,r.vy+=y*x)}while(n=n.next)}}return v.initialize=function(n,r){t=n,e=r,g()},v.strength=function(n){return arguments.length?(a="function"==typeof n?n:i(+n),g(),v):a},v.distanceMin=function(n){return arguments.length?(c=n*n,v):Math.sqrt(c)},v.distanceMax=function(n){return arguments.length?(l=n*n,v):Math.sqrt(l)},v.theta=function(n){return arguments.length?(h=n*n,v):Math.sqrt(h)},v}function p(n,t,r){var e,o,u,f=i(.1);function a(n){for(var i=0,f=e.length;i<f;++i){var a=e[i],c=a.x-t||1e-6,l=a.y-r||1e-6,h=Math.sqrt(c*c+l*l),v=(u[i]-h)*o[i]*n/h;a.vx+=c*v,a.vy+=l*v}}function c(){if(e){var t,r=e.length;for(o=new Array(r),u=new Array(r),t=0;t<r;++t)u[t]=+n(e[t],t,e),o[t]=isNaN(u[t])?0:+f(e[t],t,e)}}return"function"!=typeof n&&(n=i(+n)),null==t&&(t=0),null==r&&(r=0),a.initialize=function(n){e=n,c()},a.strength=function(n){return arguments.length?(f="function"==typeof n?n:i(+n),c(),a):f},a.radius=function(t){return arguments.length?(n="function"==typeof t?t:i(+t),c(),a):n},a.x=function(n){return arguments.length?(t=+n,a):t},a.y=function(n){return arguments.length?(r=+n,a):r},a}function M(n){var t,r,e,o=i(.1);function u(n){for(var i,o=0,u=t.length;o<u;++o)(i=t[o]).vx+=(e[o]-i.x)*r[o]*n}function f(){if(t){var i,u=t.length;for(r=new Array(u),e=new Array(u),i=0;i<u;++i)r[i]=isNaN(e[i]=+n(t[i],i,t))?0:+o(t[i],i,t)}}return"function"!=typeof n&&(n=i(null==n?0:+n)),u.initialize=function(n){t=n,f()},u.strength=function(n){return arguments.length?(o="function"==typeof n?n:i(+n),f(),u):o},u.x=function(t){return arguments.length?(n="function"==typeof t?t:i(+t),f(),u):n},u}function w(n){var t,r,e,o=i(.1);function u(n){for(var i,o=0,u=t.length;o<u;++o)(i=t[o]).vy+=(e[o]-i.y)*r[o]*n}function f(){if(t){var i,u=t.length;for(r=new Array(u),e=new Array(u),i=0;i<u;++i)r[i]=isNaN(e[i]=+n(t[i],i,t))?0:+o(t[i],i,t)}}return"function"!=typeof n&&(n=i(null==n?0:+n)),u.initialize=function(n){t=n,f()},u.strength=function(n){return arguments.length?(o="function"==typeof n?n:i(+n),f(),u):o},u.y=function(t){return arguments.length?(n="function"==typeof t?t:i(+t),f(),u):n},u}export{e as forceCenter,a as forceCollide,h as forceLink,d as forceManyBody,p as forceRadial,s as forceSimulation,M as forceX,w as forceY};export default null;
