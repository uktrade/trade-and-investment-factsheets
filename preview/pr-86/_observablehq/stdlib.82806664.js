var T=Object.defineProperty;var o=(t,e)=>T(t,"name",{value:e,configurable:!0});var m,d,D=Object.defineProperty,f=o((t,e)=>D(t,"name",{value:e,configurable:!0}),"o$1");const v=new Map;function b(t,e,r=location){const n=new URL(t,r).href;if(e==null)v.delete(n);else{const{path:a,mimeType:i,lastModified:s,size:y}=e,l=new g(new URL(a,r).href,t.split("/").pop(),i,s,y);return v.set(n,l),l}}o(b,"y"),f(b,"registerFile");function w(t,e=location){if(new.target!==void 0)throw new TypeError("FileAttachment is not a constructor");let r;typeof t=="object"&&t&&"name"in t&&(r=t,t=t.name);const n=v.get(new URL(t,e).href);if(n)return n;if(r)return b(t,r,e);throw new Error(`File not found: ${t}`)}o(w,"d$1"),f(w,"FileAttachment");async function c(t){const e=await fetch(await t.url());if(!e.ok)throw new Error(`Unable to load file: ${t.name}`);return e}o(c,"n"),f(c,"remote_fetch");const O=(m=class{constructor(e,r="application/octet-stream",n,a){Object.defineProperties(this,{name:{value:`${e}`,enumerable:!0},mimeType:{value:`${r}`,enumerable:!0},lastModified:{value:+n,enumerable:!0},size:{value:+a,enumerable:!0}})}async blob(){return(await c(this)).blob()}async arrayBuffer(){return(await c(this)).arrayBuffer()}async text(e){return e===void 0?(await c(this)).text():new TextDecoder(e).decode(await this.arrayBuffer())}async json(){return(await c(this)).json()}async stream(){return(await c(this)).body}async dsv({delimiter:e=",",array:r=!1,typed:n=!1}={}){const[a,i]=await Promise.all([this.text(),import("../_npm/d3-dsv@3.0.1/9cffc2bd.js")]),s=i.dsvFormat(e);return(r?s.parseRows:s.parse)(a,n&&i.autoType)}async csv(e){return this.dsv({...e,delimiter:","})}async tsv(e){return this.dsv({...e,delimiter:"	"})}async image(e){const r=await this.url();return new Promise((n,a)=>{const i=new Image;new URL(r,document.baseURI).origin!==new URL(location).origin&&(i.crossOrigin="anonymous"),Object.assign(i,e),i.onload=()=>n(i),i.onerror=()=>a(new Error(`Unable to load file: ${this.name}`)),i.src=r})}async arrow(){const[e,r]=await Promise.all([import("../_npm/apache-arrow@19.0.1/_esm.js"),c(this)]);return e.tableFromIPC(r)}async arquero(e){let r,n;switch(this.mimeType){case"application/json":r=this.text(),n="fromJSON";break;case"text/tab-separated-values":e?.delimiter===void 0&&(e={...e,delimiter:"	"});case"text/csv":r=this.text(),n="fromCSV";break;default:if(/\.arrow$/i.test(this.name))r=this.arrow(),n="fromArrow";else if(/\.parquet$/i.test(this.name))r=this.parquet(),n="fromArrow";else throw new Error(`unable to determine Arquero loader: ${this.name}`);break}const[a,i]=await Promise.all([import("../_npm/arquero@8.0.1/_esm.js"),r]);return a[n](i,e)}async parquet(){const[e,r,n]=await Promise.all([import("../_npm/apache-arrow@19.0.1/_esm.js"),import("../_npm/parquet-wasm@0.6.1/_esm.js").then(async a=>(await a.default(import.meta.resolve("../_npm/parquet-wasm@0.6.1/esm/parquet_wasm_bg.wasm")),a)),this.arrayBuffer()]);return e.tableFromIPC(r.readParquet(new Uint8Array(n)).intoIPCStream())}async sqlite(){const[{SQLiteDatabaseClient:e},r]=await Promise.all([import("./stdlib/sqlite.js"),this.arrayBuffer()]);return e.open(r)}async zip(){const[{ZipArchive:e},r]=await Promise.all([import("./stdlib/zip.js"),this.arrayBuffer()]);return e.from(r)}async xml(e="application/xml"){return new DOMParser().parseFromString(await this.text(),e)}async html(){return this.xml("text/html")}async xlsx(){const[{Workbook:e},r]=await Promise.all([import("./stdlib/xlsx.js"),this.arrayBuffer()]);return e.load(r)}},o(m,"m"),m);f(O,"AbstractFile");let j=O;const x=(d=class extends j{constructor(e,r,n,a,i){super(r,n,a,i),Object.defineProperty(this,"href",{value:e})}async url(){return this.href}},o(d,"w"),d);f(x,"FileAttachmentImpl");let g=x;Object.defineProperty(g,"name",{value:"FileAttachment"}),w.prototype=g.prototype;var I=Object.defineProperty,S=o((t,e)=>I(t,"name",{value:e,configurable:!0}),"r$3");async function*u(t){let e,r,n=!1;const a=t(i=>(r=i,e?(e(i),e=null):n=!0,i));if(a!=null&&typeof a!="function")throw new Error(typeof a.then=="function"?"async initializers are not supported":"initializer returned something, but not a dispose function");try{for(;;)yield n?(n=!1,r):new Promise(i=>e=i)}finally{a?.()}}o(u,"u"),S(u,"observe");var _=Object.defineProperty,k=o((t,e)=>_(t,"name",{value:e,configurable:!0}),"i$4");function E(){return u(t=>{let e;const r=matchMedia("(prefers-color-scheme: dark)"),n=document.createElement("div");n.style.transitionProperty="color, background-color",n.style.transitionDuration="1ms";const a=k(()=>{const i=getComputedStyle(document.body).getPropertyValue("color-scheme").split(/\s+/);let s;i.includes("light")&&i.includes("dark")?s=r.matches:s=i.includes("dark"),e!==s&&t(e=s)},"changed");return document.body.appendChild(n),a(),n.addEventListener("transitionstart",a),r.addEventListener("change",a),()=>{n.removeEventListener("transitionstart",a),r.removeEventListener("change",a)}})}o(E,"l$1"),k(E,"dark");var N=Object.defineProperty,h=o((t,e)=>N(t,"name",{value:e,configurable:!0}),"e$1");function A(t){return u(e=>{const r=F(t);let n=P(t);const a=h(()=>e(P(t)),"inputted");return t.addEventListener(r,a),n!==void 0&&e(n),()=>t.removeEventListener(r,a)})}o(A,"o"),h(A,"input");function P(t){switch(t.type){case"range":case"number":return t.valueAsNumber;case"date":return t.valueAsDate;case"checkbox":return t.checked;case"file":return t.multiple?t.files:t.files[0];case"select-multiple":return Array.from(t.selectedOptions,e=>e.value);default:return t.value}}o(P,"a"),h(P,"valueof");function F(t){switch(t.type){case"button":case"submit":case"checkbox":return"click";case"file":return"change";default:return"input"}}o(F,"f$2"),h(F,"eventof");var V=Object.defineProperty,G=o((t,e)=>V(t,"name",{value:e,configurable:!0}),"e");async function*z(){for(;;)yield Date.now()}o(z,"i$2"),G(z,"now");var J=Object.defineProperty,Q=o((t,e)=>J(t,"name",{value:e,configurable:!0}),"r$2");async function*L(t){let e;const r=[],n=t(a=>(r.push(a),e&&(e(r.shift()),e=null),a));if(n!=null&&typeof n!="function")throw new Error(typeof n.then=="function"?"async initializers are not supported":"initializer returned something, but not a dispose function");try{for(;;)yield r.length?r.shift():new Promise(a=>e=a)}finally{n?.()}}o(L,"l"),Q(L,"queue");var W=Object.defineProperty,Z=o((t,e)=>W(t,"name",{value:e,configurable:!0}),"i$1");function q(t,e){return u(r=>{let n;const a=new ResizeObserver(([i])=>{const s=i.contentRect.width;s!==n&&r(n=s)});return a.observe(t,e),()=>a.disconnect()})}o(q,"d"),Z(q,"width");var H=Object.freeze({__proto__:null,dark:E,input:A,now:z,observe:u,queue:L,width:q}),K=Object.defineProperty,X=o((t,e)=>K(t,"name",{value:e,configurable:!0}),"r$1");function R(t){let e;return Object.defineProperty(u(r=>{e=r,t!==void 0&&e(t)}),"value",{get:()=>t,set:r=>void e(t=r)})}o(R,"f$1"),X(R,"Mutable");var Y=Object.defineProperty,C=o((t,e)=>Y(t,"name",{value:e,configurable:!0}),"r");function U(t,e){const r=document.createElement("div");r.style.position="relative",t.length!==1&&(r.style.height="100%");let n=0,a=0,i;const s=new ResizeObserver(async([y])=>{const{width:l,height:M}=y.contentRect;if(t.length===1&&l===i)return;i=l;const $=++n,p=l>0?await t(l,M):null;if(!(a>$)){for(a=$;r.lastChild;)r.lastChild.remove();p!=null&&(t.length!==1&&B(p)&&(p.style.position="absolute"),r.append(p))}});return s.observe(r),e?.then(()=>s.disconnect()),r}o(U,"p"),C(U,"resize");function B(t){return typeof t=="object"&&t.nodeType===1}o(B,"v"),C(B,"isElement");export{j as AbstractFile,w as FileAttachment,H as Generators,R as Mutable,b as registerFile,U as resize};
