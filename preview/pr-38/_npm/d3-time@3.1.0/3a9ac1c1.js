/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-time@3.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{bisector as e,tickStep as t}from"../d3-array@3.2.4/37839b6a.js";const n=new Date,s=new Date;function r(e,t,a,o){function l(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return l.floor=t=>(e(t=new Date(+t)),t),l.ceil=n=>(e(n=new Date(n-1)),t(n,1),e(n),n),l.round=e=>{const t=l(e),n=l.ceil(e);return e-t<n-e?t:n},l.offset=(e,n)=>(t(e=new Date(+e),null==n?1:Math.floor(n)),e),l.range=(n,s,r)=>{const a=[];if(n=l.ceil(n),r=null==r?1:Math.floor(r),!(n<s&&r>0))return a;let o;do{a.push(o=new Date(+n)),t(n,r),e(n)}while(o<n&&n<s);return a},l.filter=n=>r((t=>{if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)}),((e,s)=>{if(e>=e)if(s<0)for(;++s<=0;)for(;t(e,-1),!n(e););else for(;--s>=0;)for(;t(e,1),!n(e););})),a&&(l.count=(t,r)=>(n.setTime(+t),s.setTime(+r),e(n),e(s),Math.floor(a(n,s))),l.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?l.filter(o?t=>o(t)%e==0:t=>l.count(0,t)%e==0):l:null)),l}const a=r((()=>{}),((e,t)=>{e.setTime(+e+t)}),((e,t)=>t-e));a.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?r((t=>{t.setTime(Math.floor(t/e)*e)}),((t,n)=>{t.setTime(+t+n*e)}),((t,n)=>(n-t)/e)):a:null);const o=a.range,l=1e3,g=6e4,u=36e5,i=864e5,T=6048e5,c=2592e6,f=31536e6,C=r((e=>{e.setTime(e-e.getMilliseconds())}),((e,t)=>{e.setTime(+e+t*l)}),((e,t)=>(t-e)/l),(e=>e.getUTCSeconds())),U=C.range,M=r((e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*l)}),((e,t)=>{e.setTime(+e+t*g)}),((e,t)=>(t-e)/g),(e=>e.getMinutes())),h=M.range,m=r((e=>{e.setUTCSeconds(0,0)}),((e,t)=>{e.setTime(+e+t*g)}),((e,t)=>(t-e)/g),(e=>e.getUTCMinutes())),D=m.range,F=r((e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*l-e.getMinutes()*g)}),((e,t)=>{e.setTime(+e+t*u)}),((e,t)=>(t-e)/u),(e=>e.getHours())),Y=F.range,d=r((e=>{e.setUTCMinutes(0,0,0)}),((e,t)=>{e.setTime(+e+t*u)}),((e,t)=>(t-e)/u),(e=>e.getUTCHours())),H=d.range,y=r((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*g)/i),(e=>e.getDate()-1)),w=y.range,v=r((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/i),(e=>e.getUTCDate()-1)),S=v.range,p=r((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/i),(e=>Math.floor(e/i))),k=p.range;function z(e){return r((t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),((e,t)=>{e.setDate(e.getDate()+7*t)}),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*g)/T))}const O=z(0),W=z(1),x=z(2),b=z(3),j=z(4),q=z(5),A=z(6),B=O.range,E=W.range,G=x.range,I=b.range,J=j.range,K=q.range,L=A.range;function N(e){return r((t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+7*t)}),((e,t)=>(t-e)/T))}const P=N(0),Q=N(1),R=N(2),V=N(3),X=N(4),Z=N(5),$=N(6),_=P.range,ee=Q.range,te=R.range,ne=V.range,se=X.range,re=Z.range,ae=$.range,oe=r((e=>{e.setDate(1),e.setHours(0,0,0,0)}),((e,t)=>{e.setMonth(e.getMonth()+t)}),((e,t)=>t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())),(e=>e.getMonth())),le=oe.range,ge=r((e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)}),((e,t)=>t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())),(e=>e.getUTCMonth())),ue=ge.range,ie=r((e=>{e.setMonth(0,1),e.setHours(0,0,0,0)}),((e,t)=>{e.setFullYear(e.getFullYear()+t)}),((e,t)=>t.getFullYear()-e.getFullYear()),(e=>e.getFullYear()));ie.every=e=>isFinite(e=Math.floor(e))&&e>0?r((t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,n)=>{t.setFullYear(t.getFullYear()+n*e)})):null;const Te=ie.range,ce=r((e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)}),((e,t)=>t.getUTCFullYear()-e.getUTCFullYear()),(e=>e.getUTCFullYear()));ce.every=e=>isFinite(e=Math.floor(e))&&e>0?r((t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null;const fe=ce.range;function Ce(n,s,r,o,U,M){const h=[[C,1,l],[C,5,5e3],[C,15,15e3],[C,30,3e4],[M,1,g],[M,5,3e5],[M,15,9e5],[M,30,18e5],[U,1,u],[U,3,108e5],[U,6,216e5],[U,12,432e5],[o,1,i],[o,2,1728e5],[r,1,T],[s,1,c],[s,3,7776e6],[n,1,f]];function m(s,r,o){const l=Math.abs(r-s)/o,g=e((([,,e])=>e)).right(h,l);if(g===h.length)return n.every(t(s/f,r/f,o));if(0===g)return a.every(Math.max(t(s,r,o),1));const[u,i]=h[l/h[g-1][2]<h[g][2]/l?g-1:g];return u.every(i)}return[function(e,t,n){const s=t<e;s&&([e,t]=[t,e]);const r=n&&"function"==typeof n.range?n:m(e,t,n),a=r?r.range(e,+t+1):[];return s?a.reverse():a},m]}const[Ue,Me]=Ce(ce,ge,P,p,d,m),[he,me]=Ce(ie,oe,O,y,F,M);export{y as timeDay,w as timeDays,q as timeFriday,K as timeFridays,F as timeHour,Y as timeHours,r as timeInterval,a as timeMillisecond,o as timeMilliseconds,M as timeMinute,h as timeMinutes,W as timeMonday,E as timeMondays,oe as timeMonth,le as timeMonths,A as timeSaturday,L as timeSaturdays,C as timeSecond,U as timeSeconds,O as timeSunday,B as timeSundays,j as timeThursday,J as timeThursdays,me as timeTickInterval,he as timeTicks,x as timeTuesday,G as timeTuesdays,b as timeWednesday,I as timeWednesdays,O as timeWeek,B as timeWeeks,ie as timeYear,Te as timeYears,p as unixDay,k as unixDays,v as utcDay,S as utcDays,Z as utcFriday,re as utcFridays,d as utcHour,H as utcHours,a as utcMillisecond,o as utcMilliseconds,m as utcMinute,D as utcMinutes,Q as utcMonday,ee as utcMondays,ge as utcMonth,ue as utcMonths,$ as utcSaturday,ae as utcSaturdays,C as utcSecond,U as utcSeconds,P as utcSunday,_ as utcSundays,X as utcThursday,se as utcThursdays,Me as utcTickInterval,Ue as utcTicks,R as utcTuesday,te as utcTuesdays,V as utcWednesday,ne as utcWednesdays,P as utcWeek,_ as utcWeeks,ce as utcYear,fe as utcYears};export default null;
