/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/d3-shape@3.2.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{Path as t}from"../d3-path@3.1.0/4bb53638.js";function n(t){return function(){return t}}const i=Math.abs,e=Math.atan2,s=Math.cos,o=Math.max,h=Math.min,_=Math.sin,r=Math.sqrt,a=1e-12,l=Math.PI,c=l/2,u=2*l;function f(t){return t>=1?c:t<=-1?-c:Math.asin(t)}function y(n){let i=3;return n.digits=function(t){if(!arguments.length)return i;if(null==t)i=null;else{const n=Math.floor(t);if(!(n>=0))throw new RangeError(`invalid digits: ${t}`);i=n}return n},()=>new t(i)}function x(t){return t.innerRadius}function p(t){return t.outerRadius}function v(t){return t.startAngle}function d(t){return t.endAngle}function T(t){return t&&t.padAngle}function g(t,n,i,e,s,h,_){var a=t-i,l=n-e,c=(_?h:-h)/r(a*a+l*l),u=c*l,f=-c*a,y=t+u,x=n+f,p=i+u,v=e+f,d=(y+p)/2,T=(x+v)/2,g=p-y,m=v-x,b=g*g+m*m,w=s-h,k=y*v-p*x,N=(m<0?-1:1)*r(o(0,w*w*b-k*k)),S=(k*m-g*N)/b,E=(-k*g-m*N)/b,A=(k*m+g*N)/b,M=(-k*g+m*N)/b,P=S-d,C=E-T,O=A-d,R=M-T;return P*P+C*C>O*O+R*R&&(S=A,E=M),{cx:S,cy:E,x01:-u,y01:-f,x11:S*(s/w-1),y11:E*(s/w-1)}}function m(){var t=x,o=p,m=n(0),b=null,w=v,k=d,N=T,S=null,E=y(A);function A(){var n,y,x=+t.apply(this,arguments),p=+o.apply(this,arguments),v=w.apply(this,arguments)-c,d=k.apply(this,arguments)-c,T=i(d-v),A=d>v;if(S||(S=n=E()),p<x&&(y=p,p=x,x=y),p>a)if(T>u-a)S.moveTo(p*s(v),p*_(v)),S.arc(0,0,p,v,d,!A),x>a&&(S.moveTo(x*s(d),x*_(d)),S.arc(0,0,x,d,v,A));else{var M,P,C=v,O=d,R=v,z=d,X=T,Y=T,B=N.apply(this,arguments)/2,q=B>a&&(b?+b.apply(this,arguments):r(x*x+p*p)),D=h(i(p-x)/2,+m.apply(this,arguments)),I=D,j=D;if(q>a){var L=f(q/x*_(B)),W=f(q/p*_(B));(X-=2*L)>a?(R+=L*=A?1:-1,z-=L):(X=0,R=z=(v+d)/2),(Y-=2*W)>a?(C+=W*=A?1:-1,O-=W):(Y=0,C=O=(v+d)/2)}var V=p*s(C),$=p*_(C),F=x*s(z),G=x*_(z);if(D>a){var H,J=p*s(O),K=p*_(O),Q=x*s(R),U=x*_(R);if(T<l)if(H=function(t,n,i,e,s,o,h,_){var r=i-t,l=e-n,c=h-s,u=_-o,f=u*r-c*l;if(!(f*f<a))return[t+(f=(c*(n-o)-u*(t-s))/f)*r,n+f*l]}(V,$,Q,U,J,K,F,G)){var Z=V-H[0],tt=$-H[1],nt=J-H[0],it=K-H[1],et=1/_(function(t){return t>1?0:t<-1?l:Math.acos(t)}((Z*nt+tt*it)/(r(Z*Z+tt*tt)*r(nt*nt+it*it)))/2),st=r(H[0]*H[0]+H[1]*H[1]);I=h(D,(x-st)/(et-1)),j=h(D,(p-st)/(et+1))}else I=j=0}Y>a?j>a?(M=g(Q,U,V,$,p,j,A),P=g(J,K,F,G,p,j,A),S.moveTo(M.cx+M.x01,M.cy+M.y01),j<D?S.arc(M.cx,M.cy,j,e(M.y01,M.x01),e(P.y01,P.x01),!A):(S.arc(M.cx,M.cy,j,e(M.y01,M.x01),e(M.y11,M.x11),!A),S.arc(0,0,p,e(M.cy+M.y11,M.cx+M.x11),e(P.cy+P.y11,P.cx+P.x11),!A),S.arc(P.cx,P.cy,j,e(P.y11,P.x11),e(P.y01,P.x01),!A))):(S.moveTo(V,$),S.arc(0,0,p,C,O,!A)):S.moveTo(V,$),x>a&&X>a?I>a?(M=g(F,G,J,K,x,-I,A),P=g(V,$,Q,U,x,-I,A),S.lineTo(M.cx+M.x01,M.cy+M.y01),I<D?S.arc(M.cx,M.cy,I,e(M.y01,M.x01),e(P.y01,P.x01),!A):(S.arc(M.cx,M.cy,I,e(M.y01,M.x01),e(M.y11,M.x11),!A),S.arc(0,0,x,e(M.cy+M.y11,M.cx+M.x11),e(P.cy+P.y11,P.cx+P.x11),A),S.arc(P.cx,P.cy,I,e(P.y11,P.x11),e(P.y01,P.x01),!A))):S.arc(0,0,x,z,R,A):S.lineTo(F,G)}else S.moveTo(0,0);if(S.closePath(),n)return S=null,n+""||null}return A.centroid=function(){var n=(+t.apply(this,arguments)+ +o.apply(this,arguments))/2,i=(+w.apply(this,arguments)+ +k.apply(this,arguments))/2-l/2;return[s(i)*n,_(i)*n]},A.innerRadius=function(i){return arguments.length?(t="function"==typeof i?i:n(+i),A):t},A.outerRadius=function(t){return arguments.length?(o="function"==typeof t?t:n(+t),A):o},A.cornerRadius=function(t){return arguments.length?(m="function"==typeof t?t:n(+t),A):m},A.padRadius=function(t){return arguments.length?(b=null==t?null:"function"==typeof t?t:n(+t),A):b},A.startAngle=function(t){return arguments.length?(w="function"==typeof t?t:n(+t),A):w},A.endAngle=function(t){return arguments.length?(k="function"==typeof t?t:n(+t),A):k},A.padAngle=function(t){return arguments.length?(N="function"==typeof t?t:n(+t),A):N},A.context=function(t){return arguments.length?(S=null==t?null:t,A):S},A}var b=Array.prototype.slice;function w(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function k(t){this._context=t}function N(t){return new k(t)}function S(t){return t[0]}function E(t){return t[1]}function A(t,i){var e=n(!0),s=null,o=N,h=null,_=y(r);function r(n){var r,a,l,c=(n=w(n)).length,u=!1;for(null==s&&(h=o(l=_())),r=0;r<=c;++r)!(r<c&&e(a=n[r],r,n))===u&&((u=!u)?h.lineStart():h.lineEnd()),u&&h.point(+t(a,r,n),+i(a,r,n));if(l)return h=null,l+""||null}return t="function"==typeof t?t:void 0===t?S:n(t),i="function"==typeof i?i:void 0===i?E:n(i),r.x=function(i){return arguments.length?(t="function"==typeof i?i:n(+i),r):t},r.y=function(t){return arguments.length?(i="function"==typeof t?t:n(+t),r):i},r.defined=function(t){return arguments.length?(e="function"==typeof t?t:n(!!t),r):e},r.curve=function(t){return arguments.length?(o=t,null!=s&&(h=o(s)),r):o},r.context=function(t){return arguments.length?(null==t?s=h=null:h=o(s=t),r):s},r}function M(t,i,e){var s=null,o=n(!0),h=null,_=N,r=null,a=y(l);function l(n){var l,c,u,f,y,x=(n=w(n)).length,p=!1,v=new Array(x),d=new Array(x);for(null==h&&(r=_(y=a())),l=0;l<=x;++l){if(!(l<x&&o(f=n[l],l,n))===p)if(p=!p)c=l,r.areaStart(),r.lineStart();else{for(r.lineEnd(),r.lineStart(),u=l-1;u>=c;--u)r.point(v[u],d[u]);r.lineEnd(),r.areaEnd()}p&&(v[l]=+t(f,l,n),d[l]=+i(f,l,n),r.point(s?+s(f,l,n):v[l],e?+e(f,l,n):d[l]))}if(y)return r=null,y+""||null}function c(){return A().defined(o).curve(_).context(h)}return t="function"==typeof t?t:void 0===t?S:n(+t),i="function"==typeof i?i:n(void 0===i?0:+i),e="function"==typeof e?e:void 0===e?E:n(+e),l.x=function(i){return arguments.length?(t="function"==typeof i?i:n(+i),s=null,l):t},l.x0=function(i){return arguments.length?(t="function"==typeof i?i:n(+i),l):t},l.x1=function(t){return arguments.length?(s=null==t?null:"function"==typeof t?t:n(+t),l):s},l.y=function(t){return arguments.length?(i="function"==typeof t?t:n(+t),e=null,l):i},l.y0=function(t){return arguments.length?(i="function"==typeof t?t:n(+t),l):i},l.y1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:n(+t),l):e},l.lineX0=l.lineY0=function(){return c().x(t).y(i)},l.lineY1=function(){return c().x(t).y(e)},l.lineX1=function(){return c().x(s).y(i)},l.defined=function(t){return arguments.length?(o="function"==typeof t?t:n(!!t),l):o},l.curve=function(t){return arguments.length?(_=t,null!=h&&(r=_(h)),l):_},l.context=function(t){return arguments.length?(null==t?h=r=null:r=_(h=t),l):h},l}function P(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function C(t){return t}function O(){var t=C,i=P,e=null,s=n(0),o=n(u),h=n(0);function _(n){var _,r,a,l,c,f=(n=w(n)).length,y=0,x=new Array(f),p=new Array(f),v=+s.apply(this,arguments),d=Math.min(u,Math.max(-u,o.apply(this,arguments)-v)),T=Math.min(Math.abs(d)/f,h.apply(this,arguments)),g=T*(d<0?-1:1);for(_=0;_<f;++_)(c=p[x[_]=_]=+t(n[_],_,n))>0&&(y+=c);for(null!=i?x.sort((function(t,n){return i(p[t],p[n])})):null!=e&&x.sort((function(t,i){return e(n[t],n[i])})),_=0,a=y?(d-f*g)/y:0;_<f;++_,v=l)r=x[_],l=v+((c=p[r])>0?c*a:0)+g,p[r]={data:n[r],index:_,value:c,startAngle:v,endAngle:l,padAngle:T};return p}return _.value=function(i){return arguments.length?(t="function"==typeof i?i:n(+i),_):t},_.sortValues=function(t){return arguments.length?(i=t,e=null,_):i},_.sort=function(t){return arguments.length?(e=t,i=null,_):e},_.startAngle=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),_):s},_.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:n(+t),_):o},_.padAngle=function(t){return arguments.length?(h="function"==typeof t?t:n(+t),_):h},_}k.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var R=X(N);function z(t){this._curve=t}function X(t){function n(n){return new z(t(n))}return n._curve=t,n}function Y(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(X(t)):n()._curve},t}function B(){return Y(A().curve(R))}function q(){var t=M().curve(R),n=t.curve,i=t.lineX0,e=t.lineX1,s=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Y(i())},delete t.lineX0,t.lineEndAngle=function(){return Y(e())},delete t.lineX1,t.lineInnerRadius=function(){return Y(s())},delete t.lineY0,t.lineOuterRadius=function(){return Y(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(X(t)):n()._curve},t}function D(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}z.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};class I{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n)}this._x0=t,this._y0=n}}class j{constructor(t){this._context=t}lineStart(){this._point=0}lineEnd(){}point(t,n){if(t=+t,n=+n,0===this._point)this._point=1;else{const i=D(this._x0,this._y0),e=D(this._x0,this._y0=(this._y0+n)/2),s=D(t,this._y0),o=D(t,n);this._context.moveTo(...i),this._context.bezierCurveTo(...e,...s,...o)}this._x0=t,this._y0=n}}function L(t){return new I(t,!0)}function W(t){return new I(t,!1)}function V(t){return new j(t)}function $(t){return t.source}function F(t){return t.target}function G(t){let i=$,e=F,s=S,o=E,h=null,_=null,r=y(a);function a(){let n;const a=b.call(arguments),l=i.apply(this,a),c=e.apply(this,a);if(null==h&&(_=t(n=r())),_.lineStart(),a[0]=l,_.point(+s.apply(this,a),+o.apply(this,a)),a[0]=c,_.point(+s.apply(this,a),+o.apply(this,a)),_.lineEnd(),n)return _=null,n+""||null}return a.source=function(t){return arguments.length?(i=t,a):i},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),a):s},a.y=function(t){return arguments.length?(o="function"==typeof t?t:n(+t),a):o},a.context=function(n){return arguments.length?(null==n?h=_=null:_=t(h=n),a):h},a}function H(){return G(L)}function J(){return G(W)}function K(){const t=G(V);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}const Q=r(3);var U={draw(t,n){const i=.59436*r(n+h(n/28,.75)),e=i/2,s=e*Q;t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-s,-e),t.lineTo(s,e),t.moveTo(-s,e),t.lineTo(s,-e)}},Z={draw(t,n){const i=r(n/l);t.moveTo(i,0),t.arc(0,0,i,0,u)}},tt={draw(t,n){const i=r(n/5)/2;t.moveTo(-3*i,-i),t.lineTo(-i,-i),t.lineTo(-i,-3*i),t.lineTo(i,-3*i),t.lineTo(i,-i),t.lineTo(3*i,-i),t.lineTo(3*i,i),t.lineTo(i,i),t.lineTo(i,3*i),t.lineTo(-i,3*i),t.lineTo(-i,i),t.lineTo(-3*i,i),t.closePath()}};const nt=r(1/3),it=2*nt;var et={draw(t,n){const i=r(n/it),e=i*nt;t.moveTo(0,-i),t.lineTo(e,0),t.lineTo(0,i),t.lineTo(-e,0),t.closePath()}},st={draw(t,n){const i=.62625*r(n);t.moveTo(0,-i),t.lineTo(i,0),t.lineTo(0,i),t.lineTo(-i,0),t.closePath()}},ot={draw(t,n){const i=.87559*r(n-h(n/7,2));t.moveTo(-i,0),t.lineTo(i,0),t.moveTo(0,i),t.lineTo(0,-i)}},ht={draw(t,n){const i=r(n),e=-i/2;t.rect(e,e,i,i)}},_t={draw(t,n){const i=.4431*r(n);t.moveTo(i,i),t.lineTo(i,-i),t.lineTo(-i,-i),t.lineTo(-i,i),t.closePath()}};const rt=_(l/10)/_(7*l/10),at=_(u/10)*rt,lt=-s(u/10)*rt;var ct={draw(t,n){const i=r(.8908130915292852*n),e=at*i,o=lt*i;t.moveTo(0,-i),t.lineTo(e,o);for(let n=1;n<5;++n){const h=u*n/5,r=s(h),a=_(h);t.lineTo(a*i,-r*i),t.lineTo(r*e-a*o,a*e+r*o)}t.closePath()}};const ut=r(3);var ft={draw(t,n){const i=-r(n/(3*ut));t.moveTo(0,2*i),t.lineTo(-ut*i,-i),t.lineTo(ut*i,-i),t.closePath()}};const yt=r(3);var xt={draw(t,n){const i=.6824*r(n),e=i/2,s=i*yt/2;t.moveTo(0,-i),t.lineTo(s,e),t.lineTo(-s,e),t.closePath()}};const pt=-.5,vt=r(3)/2,dt=1/r(12),Tt=3*(dt/2+1);var gt={draw(t,n){const i=r(n/Tt),e=i/2,s=i*dt,o=e,h=i*dt+i,_=-o,a=h;t.moveTo(e,s),t.lineTo(o,h),t.lineTo(_,a),t.lineTo(pt*e-vt*s,vt*e+pt*s),t.lineTo(pt*o-vt*h,vt*o+pt*h),t.lineTo(pt*_-vt*a,vt*_+pt*a),t.lineTo(pt*e+vt*s,pt*s-vt*e),t.lineTo(pt*o+vt*h,pt*h-vt*o),t.lineTo(pt*_+vt*a,pt*a-vt*_),t.closePath()}},mt={draw(t,n){const i=.6189*r(n-h(n/6,1.7));t.moveTo(-i,-i),t.lineTo(i,i),t.moveTo(-i,i),t.lineTo(i,-i)}};const bt=[Z,tt,et,ht,ct,ft,gt],wt=[Z,ot,mt,xt,U,_t,st];function kt(t,i){let e=null,s=y(o);function o(){let n;if(e||(e=n=s()),t.apply(this,arguments).draw(e,+i.apply(this,arguments)),n)return e=null,n+""||null}return t="function"==typeof t?t:n(t||Z),i="function"==typeof i?i:n(void 0===i?64:+i),o.type=function(i){return arguments.length?(t="function"==typeof i?i:n(i),o):t},o.size=function(t){return arguments.length?(i="function"==typeof t?t:n(+t),o):i},o.context=function(t){return arguments.length?(e=null==t?null:t,o):e},o}function Nt(){}function St(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function Et(t){this._context=t}function At(t){return new Et(t)}function Mt(t){this._context=t}function Pt(t){return new Mt(t)}function Ct(t){this._context=t}function Ot(t){return new Ct(t)}function Rt(t,n){this._basis=new Et(t),this._beta=n}Et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:St(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:St(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Mt.prototype={areaStart:Nt,areaEnd:Nt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:St(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Ct.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var i=(this._x0+4*this._x1+t)/6,e=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(i,e):this._context.moveTo(i,e);break;case 3:this._point=4;default:St(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Rt.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,i=t.length-1;if(i>0)for(var e,s=t[0],o=n[0],h=t[i]-s,_=n[i]-o,r=-1;++r<=i;)e=r/i,this._basis.point(this._beta*t[r]+(1-this._beta)*(s+e*h),this._beta*n[r]+(1-this._beta)*(o+e*_));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var zt=function t(n){function i(t){return 1===n?new Et(t):new Rt(t,n)}return i.beta=function(n){return t(+n)},i}(.85);function Xt(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function Yt(t,n){this._context=t,this._k=(1-n)/6}Yt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Xt(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Xt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Bt=function t(n){function i(t){return new Yt(t,n)}return i.tension=function(n){return t(+n)},i}(0);function qt(t,n){this._context=t,this._k=(1-n)/6}qt.prototype={areaStart:Nt,areaEnd:Nt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Xt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Dt=function t(n){function i(t){return new qt(t,n)}return i.tension=function(n){return t(+n)},i}(0);function It(t,n){this._context=t,this._k=(1-n)/6}It.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Xt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var jt=function t(n){function i(t){return new It(t,n)}return i.tension=function(n){return t(+n)},i}(0);function Lt(t,n,i){var e=t._x1,s=t._y1,o=t._x2,h=t._y2;if(t._l01_a>a){var _=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,r=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*_-t._x0*t._l12_2a+t._x2*t._l01_2a)/r,s=(s*_-t._y0*t._l12_2a+t._y2*t._l01_2a)/r}if(t._l23_a>a){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,c=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*l+t._x1*t._l23_2a-n*t._l12_2a)/c,h=(h*l+t._y1*t._l23_2a-i*t._l12_2a)/c}t._context.bezierCurveTo(e,s,o,h,t._x2,t._y2)}function Wt(t,n){this._context=t,this._alpha=n}Wt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Lt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Vt=function t(n){function i(t){return n?new Wt(t,n):new Yt(t,0)}return i.alpha=function(n){return t(+n)},i}(.5);function $t(t,n){this._context=t,this._alpha=n}$t.prototype={areaStart:Nt,areaEnd:Nt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Lt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Ft=function t(n){function i(t){return n?new $t(t,n):new qt(t,0)}return i.alpha=function(n){return t(+n)},i}(.5);function Gt(t,n){this._context=t,this._alpha=n}Gt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Lt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Ht=function t(n){function i(t){return n?new Gt(t,n):new It(t,0)}return i.alpha=function(n){return t(+n)},i}(.5);function Jt(t){this._context=t}function Kt(t){return new Jt(t)}function Qt(t){return t<0?-1:1}function Ut(t,n,i){var e=t._x1-t._x0,s=n-t._x1,o=(t._y1-t._y0)/(e||s<0&&-0),h=(i-t._y1)/(s||e<0&&-0),_=(o*s+h*e)/(e+s);return(Qt(o)+Qt(h))*Math.min(Math.abs(o),Math.abs(h),.5*Math.abs(_))||0}function Zt(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function tn(t,n,i){var e=t._x0,s=t._y0,o=t._x1,h=t._y1,_=(o-e)/3;t._context.bezierCurveTo(e+_,s+_*n,o-_,h-_*i,o,h)}function nn(t){this._context=t}function en(t){this._context=new sn(t)}function sn(t){this._context=t}function on(t){return new nn(t)}function hn(t){return new en(t)}function _n(t){this._context=t}function rn(t){var n,i,e=t.length-1,s=new Array(e),o=new Array(e),h=new Array(e);for(s[0]=0,o[0]=2,h[0]=t[0]+2*t[1],n=1;n<e-1;++n)s[n]=1,o[n]=4,h[n]=4*t[n]+2*t[n+1];for(s[e-1]=2,o[e-1]=7,h[e-1]=8*t[e-1]+t[e],n=1;n<e;++n)i=s[n]/o[n-1],o[n]-=i,h[n]-=i*h[n-1];for(s[e-1]=h[e-1]/o[e-1],n=e-2;n>=0;--n)s[n]=(h[n]-s[n+1])/o[n];for(o[e-1]=(t[e]+s[e-1])/2,n=0;n<e-1;++n)o[n]=2*t[n+1]-s[n+1];return[s,o]}function an(t){return new _n(t)}function ln(t,n){this._context=t,this._t=n}function cn(t){return new ln(t,.5)}function un(t){return new ln(t,0)}function fn(t){return new ln(t,1)}function yn(t,n){if((s=t.length)>1)for(var i,e,s,o=1,h=t[n[0]],_=h.length;o<s;++o)for(e=h,h=t[n[o]],i=0;i<_;++i)h[i][1]+=h[i][0]=isNaN(e[i][1])?e[i][0]:e[i][1]}function xn(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n;return i}function pn(t,n){return t[n]}function vn(t){const n=[];return n.key=t,n}function dn(){var t=n([]),i=xn,e=yn,s=pn;function o(n){var o,h,_=Array.from(t.apply(this,arguments),vn),r=_.length,a=-1;for(const t of n)for(o=0,++a;o<r;++o)(_[o][a]=[0,+s(t,_[o].key,a,n)]).data=t;for(o=0,h=w(i(_));o<r;++o)_[h[o]].index=o;return e(_,h),_}return o.keys=function(i){return arguments.length?(t="function"==typeof i?i:n(Array.from(i)),o):t},o.value=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),o):s},o.order=function(t){return arguments.length?(i=null==t?xn:"function"==typeof t?t:n(Array.from(t)),o):i},o.offset=function(t){return arguments.length?(e=null==t?yn:t,o):e},o}function Tn(t,n){if((e=t.length)>0){for(var i,e,s,o=0,h=t[0].length;o<h;++o){for(s=i=0;i<e;++i)s+=t[i][o][1]||0;if(s)for(i=0;i<e;++i)t[i][o][1]/=s}yn(t,n)}}function gn(t,n){if((_=t.length)>0)for(var i,e,s,o,h,_,r=0,a=t[n[0]].length;r<a;++r)for(o=h=0,i=0;i<_;++i)(s=(e=t[n[i]][r])[1]-e[0])>0?(e[0]=o,e[1]=o+=s):s<0?(e[1]=h,e[0]=h+=s):(e[0]=0,e[1]=s)}function mn(t,n){if((i=t.length)>0){for(var i,e=0,s=t[n[0]],o=s.length;e<o;++e){for(var h=0,_=0;h<i;++h)_+=t[h][e][1]||0;s[e][1]+=s[e][0]=-_/2}yn(t,n)}}function bn(t,n){if((s=t.length)>0&&(e=(i=t[n[0]]).length)>0){for(var i,e,s,o=0,h=1;h<e;++h){for(var _=0,r=0,a=0;_<s;++_){for(var l=t[n[_]],c=l[h][1]||0,u=(c-(l[h-1][1]||0))/2,f=0;f<_;++f){var y=t[n[f]];u+=(y[h][1]||0)-(y[h-1][1]||0)}r+=c,a+=u*c}i[h-1][1]+=i[h-1][0]=o,r&&(o-=a/r)}i[h-1][1]+=i[h-1][0]=o,yn(t,n)}}function wn(t){var n=t.map(kn);return xn(t).sort((function(t,i){return n[t]-n[i]}))}function kn(t){for(var n,i=-1,e=0,s=t.length,o=-1/0;++i<s;)(n=+t[i][1])>o&&(o=n,e=i);return e}function Nn(t){var n=t.map(Sn);return xn(t).sort((function(t,i){return n[t]-n[i]}))}function Sn(t){for(var n,i=0,e=-1,s=t.length;++e<s;)(n=+t[e][1])&&(i+=n);return i}function En(t){return Nn(t).reverse()}function An(t){var n,i,e=t.length,s=t.map(Sn),o=wn(t),h=0,_=0,r=[],a=[];for(n=0;n<e;++n)i=o[n],h<_?(h+=s[i],r.push(i)):(_+=s[i],a.push(i));return a.reverse().concat(r)}function Mn(t){return xn(t).reverse()}Jt.prototype={areaStart:Nt,areaEnd:Nt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},nn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:tn(this,this._t0,Zt(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,tn(this,Zt(this,i=Ut(this,t,n)),i);break;default:tn(this,this._t0,i=Ut(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}},(en.prototype=Object.create(nn.prototype)).point=function(t,n){nn.prototype.point.call(this,n,t)},sn.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,s,o){this._context.bezierCurveTo(n,t,e,i,o,s)}},_n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===i)this._context.lineTo(t[1],n[1]);else for(var e=rn(t),s=rn(n),o=0,h=1;h<i;++o,++h)this._context.bezierCurveTo(e[0][o],s[0][o],e[1][o],s[1][o],t[h],n[h]);(this._line||0!==this._line&&1===i)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},ln.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,n)}}this._x=t,this._y=n}};export{m as arc,M as area,q as areaRadial,At as curveBasis,Pt as curveBasisClosed,Ot as curveBasisOpen,L as curveBumpX,W as curveBumpY,zt as curveBundle,Bt as curveCardinal,Dt as curveCardinalClosed,jt as curveCardinalOpen,Vt as curveCatmullRom,Ft as curveCatmullRomClosed,Ht as curveCatmullRomOpen,N as curveLinear,Kt as curveLinearClosed,on as curveMonotoneX,hn as curveMonotoneY,an as curveNatural,cn as curveStep,fn as curveStepAfter,un as curveStepBefore,A as line,B as lineRadial,G as link,H as linkHorizontal,K as linkRadial,J as linkVertical,O as pie,D as pointRadial,q as radialArea,B as radialLine,dn as stack,gn as stackOffsetDiverging,Tn as stackOffsetExpand,yn as stackOffsetNone,mn as stackOffsetSilhouette,bn as stackOffsetWiggle,wn as stackOrderAppearance,Nn as stackOrderAscending,En as stackOrderDescending,An as stackOrderInsideOut,xn as stackOrderNone,Mn as stackOrderReverse,kt as symbol,U as symbolAsterisk,Z as symbolCircle,tt as symbolCross,et as symbolDiamond,st as symbolDiamond2,ot as symbolPlus,ht as symbolSquare,_t as symbolSquare2,ct as symbolStar,mt as symbolTimes,ft as symbolTriangle,xt as symbolTriangle2,gt as symbolWye,mt as symbolX,bt as symbols,bt as symbolsFill,wt as symbolsStroke};export default null;
