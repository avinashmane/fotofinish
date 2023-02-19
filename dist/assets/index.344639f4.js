const Hm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Hm();function Pc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wm=Pc(qm);function Cd(t){return!!t||t===""}function mo(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?Gm(s):mo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(qe(t))return t;if(Se(t))return t}}const Km=/;(?![^(]*\))/g,zm=/:(.+)/;function Gm(t){const e={};return t.split(Km).forEach(n=>{if(n){const s=n.split(zm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ye(t){let e="";if(qe(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=Ye(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Oe=t=>qe(t)?t:t==null?"":J(t)||Se(t)&&(t.toString===xd||!te(t.toString))?JSON.stringify(t,Ad,2):String(t),Ad=(t,e)=>e&&e.__v_isRef?Ad(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:kd(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!J(e)&&!Nd(e)?String(e):e,we={},Ss=[],Pt=()=>{},Qm=()=>!1,Ym=/^on[^a-z]/,yo=t=>Ym.test(t),Lc=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jm=Object.prototype.hasOwnProperty,oe=(t,e)=>Jm.call(t,e),J=Array.isArray,Cs=t=>vo(t)==="[object Map]",kd=t=>vo(t)==="[object Set]",te=t=>typeof t=="function",qe=t=>typeof t=="string",Uc=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Rd=t=>Se(t)&&te(t.then)&&te(t.catch),xd=Object.prototype.toString,vo=t=>xd.call(t),Xm=t=>vo(t).slice(8,-1),Nd=t=>vo(t)==="[object Object]",Fc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oi=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zm=/-(\w)/g,Qt=_o(t=>t.replace(Zm,(e,n)=>n?n.toUpperCase():"")),ey=/\B([A-Z])/g,Gs=_o(t=>t.replace(ey,"-$1").toLowerCase()),wo=_o(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=_o(t=>t?`on${wo(t)}`:""),Rr=(t,e)=>!Object.is(t,e),ca=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ji=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Od=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let du;const ty=()=>du||(du=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Vt;class Dd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ny(t){return new Dd(t)}function sy(t,e=Vt){e&&e.active&&e.effects.push(t)}const $c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pd=t=>(t.w&kn)>0,Ld=t=>(t.n&kn)>0,ry=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kn},iy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Pd(r)&&!Ld(r)?r.delete(t):e[n++]=r,r.w&=~kn,r.n&=~kn}e.length=n}},Ua=new WeakMap;let hr=0,kn=1;const Fa=30;let Ot;const Yn=Symbol(""),$a=Symbol("");class Vc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sy(this,s)}run(){if(!this.active)return this.fn();let e=Ot,n=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,In=!0,kn=1<<++hr,hr<=Fa?ry(this):fu(this),this.fn()}finally{hr<=Fa&&iy(this),kn=1<<--hr,Ot=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(fu(this),this.onStop&&this.onStop(),this.active=!1)}}function fu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let In=!0;const Md=[];function Qs(){Md.push(In),In=!1}function Ys(){const t=Md.pop();In=t===void 0?!0:t}function Et(t,e,n){if(In&&Ot){let s=Ua.get(t);s||Ua.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$c()),Ud(r)}}function Ud(t,e){let n=!1;hr<=Fa?Ld(t)||(t.n|=kn,n=!Pd(t)):n=!t.has(Ot),n&&(t.add(Ot),Ot.deps.push(t))}function sn(t,e,n,s,r,i){const o=Ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?Fc(n)&&a.push(o.get("length")):(a.push(o.get(Yn)),Cs(t)&&a.push(o.get($a)));break;case"delete":J(t)||(a.push(o.get(Yn)),Cs(t)&&a.push(o.get($a)));break;case"set":Cs(t)&&a.push(o.get(Yn));break}if(a.length===1)a[0]&&Va(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Va($c(c))}}function Va(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&pu(s);for(const s of n)s.computed||pu(s)}function pu(t,e){(t!==Ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const oy=Pc("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Uc)),ay=Bc(),cy=Bc(!1,!0),ly=Bc(!0),gu=uy();function uy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let i=0,o=this.length;i<o;i++)Et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qs();const s=fe(this)[e].apply(this,n);return Ys(),s}}),t}function Bc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Cy:Hd:e?jd:Bd).get(s))return s;const o=J(s);if(!t&&o&&oe(gu,r))return Reflect.get(gu,r,i);const a=Reflect.get(s,r,i);return(Uc(r)?Fd.has(r):oy(r))||(t||Et(s,"get",r),e)?a:rt(a)?o&&Fc(r)?a:a.value:Se(a)?t?qd(a):ln(a):a}}const hy=$d(),dy=$d(!0);function $d(t=!1){return function(n,s,r,i){let o=n[s];if(Ms(o)&&rt(o)&&!rt(r))return!1;if(!t&&(!Hi(r)&&!Ms(r)&&(o=fe(o),r=fe(r)),!J(n)&&rt(o)&&!rt(r)))return o.value=r,!0;const a=J(n)&&Fc(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===fe(i)&&(a?Rr(r,o)&&sn(n,"set",s,r):sn(n,"add",s,r)),c}}function fy(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&sn(t,"delete",e,void 0),s}function py(t,e){const n=Reflect.has(t,e);return(!Uc(e)||!Fd.has(e))&&Et(t,"has",e),n}function gy(t){return Et(t,"iterate",J(t)?"length":Yn),Reflect.ownKeys(t)}const Vd={get:ay,set:hy,deleteProperty:fy,has:py,ownKeys:gy},my={get:ly,set(t,e){return!0},deleteProperty(t,e){return!0}},yy=Ze({},Vd,{get:cy,set:dy}),jc=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,s=!1){t=t.__v_raw;const r=fe(t),i=fe(e);n||(e!==i&&Et(r,"get",e),Et(r,"get",i));const{has:o}=Eo(r),a=s?jc:n?Wc:xr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,s=fe(n),r=fe(t);return e||(t!==r&&Et(s,"has",t),Et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ei(t,e=!1){return t=t.__v_raw,!e&&Et(fe(t),"iterate",Yn),Reflect.get(t,"size",t)}function mu(t){t=fe(t);const e=fe(this);return Eo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function yu(t,e){e=fe(e);const n=fe(this),{has:s,get:r}=Eo(n);let i=s.call(n,t);i||(t=fe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Rr(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function vu(t){const e=fe(this),{has:n,get:s}=Eo(e);let r=n.call(e,t);r||(t=fe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&sn(e,"delete",t,void 0),i}function _u(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function bi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=fe(o),c=e?jc:t?Wc:xr;return!t&&Et(a,"iterate",Yn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ii(t,e,n){return function(...s){const r=this.__v_raw,i=fe(r),o=Cs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?jc:e?Wc:xr;return!e&&Et(i,"iterate",c?$a:Yn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:this}}function vy(){const t={get(i){return _i(this,i)},get size(){return Ei(this)},has:wi,add:mu,set:yu,delete:vu,clear:_u,forEach:bi(!1,!1)},e={get(i){return _i(this,i,!1,!0)},get size(){return Ei(this)},has:wi,add:mu,set:yu,delete:vu,clear:_u,forEach:bi(!1,!0)},n={get(i){return _i(this,i,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:bi(!0,!1)},s={get(i){return _i(this,i,!0,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ii(i,!1,!1),n[i]=Ii(i,!0,!1),e[i]=Ii(i,!1,!0),s[i]=Ii(i,!0,!0)}),[t,n,e,s]}const[_y,wy,Ey,by]=vy();function Hc(t,e){const n=e?t?by:Ey:t?wy:_y;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const Iy={get:Hc(!1,!1)},Ty={get:Hc(!1,!0)},Sy={get:Hc(!0,!1)},Bd=new WeakMap,jd=new WeakMap,Hd=new WeakMap,Cy=new WeakMap;function Ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Ay(Xm(t))}function ln(t){return Ms(t)?t:qc(t,!1,Vd,Iy,Bd)}function Ry(t){return qc(t,!1,yy,Ty,jd)}function qd(t){return qc(t,!0,my,Sy,Hd)}function qc(t,e,n,s,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ky(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function As(t){return Ms(t)?As(t.__v_raw):!!(t&&t.__v_isReactive)}function Ms(t){return!!(t&&t.__v_isReadonly)}function Hi(t){return!!(t&&t.__v_isShallow)}function Wd(t){return As(t)||Ms(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Kd(t){return ji(t,"__v_skip",!0),t}const xr=t=>Se(t)?ln(t):t,Wc=t=>Se(t)?qd(t):t;function zd(t){In&&Ot&&(t=fe(t),Ud(t.dep||(t.dep=$c())))}function Gd(t,e){t=fe(t),t.dep&&Va(t.dep)}function rt(t){return!!(t&&t.__v_isRef===!0)}function Jn(t){return Qd(t,!1)}function xy(t){return Qd(t,!0)}function Qd(t,e){return rt(t)?t:new Ny(t,e)}class Ny{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:xr(e)}get value(){return zd(this),this._value}set value(e){const n=this.__v_isShallow||Hi(e)||Ms(e);e=n?e:fe(e),Rr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xr(e),Gd(this))}}function H(t){return rt(t)?t.value:t}const Oy={get:(t,e,n)=>H(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return rt(r)&&!rt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yd(t){return As(t)?t:new Proxy(t,Oy)}var Jd;class Dy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Jd]=!1,this._dirty=!0,this.effect=new Vc(e,()=>{this._dirty||(this._dirty=!0,Gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=fe(this);return zd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Jd="__v_isReadonly";function Py(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=Pt):(s=t.get,r=t.set),new Dy(s,r,i||!r,n)}function Tn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){bo(i,e,n)}return r}function Tt(t,e,n,s){if(te(t)){const i=Tn(t,e,n,s);return i&&Rd(i)&&i.catch(o=>{bo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Tt(t[i],e,n,s));return r}function bo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Tn(c,null,10,[t,o,a]);return}}Ly(t,n,r,s)}function Ly(t,e,n,s=!0){console.error(t)}let Nr=!1,Ba=!1;const st=[];let jt=0;const ks=[];let Xt=null,jn=0;const Xd=Promise.resolve();let Kc=null;function Zd(t){const e=Kc||Xd;return t?e.then(this?t.bind(this):t):e}function My(t){let e=jt+1,n=st.length;for(;e<n;){const s=e+n>>>1;Or(st[s])<t?e=s+1:n=s}return e}function zc(t){(!st.length||!st.includes(t,Nr&&t.allowRecurse?jt+1:jt))&&(t.id==null?st.push(t):st.splice(My(t.id),0,t),ef())}function ef(){!Nr&&!Ba&&(Ba=!0,Kc=Xd.then(nf))}function Uy(t){const e=st.indexOf(t);e>jt&&st.splice(e,1)}function Fy(t){J(t)?ks.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?jn+1:jn))&&ks.push(t),ef()}function wu(t,e=Nr?jt+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function tf(t){if(ks.length){const e=[...new Set(ks)];if(ks.length=0,Xt){Xt.push(...e);return}for(Xt=e,Xt.sort((n,s)=>Or(n)-Or(s)),jn=0;jn<Xt.length;jn++)Xt[jn]();Xt=null,jn=0}}const Or=t=>t.id==null?1/0:t.id,$y=(t,e)=>{const n=Or(t)-Or(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nf(t){Ba=!1,Nr=!0,st.sort($y);const e=Pt;try{for(jt=0;jt<st.length;jt++){const n=st[jt];n&&n.active!==!1&&Tn(n,null,14)}}finally{jt=0,st.length=0,tf(),Nr=!1,Kc=null,(st.length||ks.length)&&nf()}}function Vy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(r=n.map(g=>g.trim())),h&&(r=n.map(Od))}let a,c=s[a=aa(e)]||s[a=aa(Qt(e))];!c&&i&&(c=s[a=aa(Gs(e))]),c&&Tt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tt(l,t,6,r)}}function sf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=sf(l,e,!0);u&&(a=!0,Ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Se(t)&&s.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):Ze(o,i),Se(t)&&s.set(t,o),o)}function Io(t,e){return!t||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Gs(e))||oe(t,e))}let it=null,To=null;function qi(t){const e=it;return it=t,To=t&&t.type.__scopeId||null,e}function rf(t){To=t}function of(){To=null}function Je(t,e=it,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Nu(-1);const i=qi(e);let o;try{o=t(...r)}finally{qi(i),s._d&&Nu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:b}=t;let R,A;const P=qi(t);try{if(n.shapeFlag&4){const Q=r||s;R=Bt(u.call(Q,Q,h,i,g,d,y)),A=c}else{const Q=e;R=Bt(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),A=e.props?c:By(c)}}catch(Q){wr.length=0,bo(Q,t,1),R=Z(St)}let G=R;if(A&&b!==!1){const Q=Object.keys(A),{shapeFlag:ue}=G;Q.length&&ue&7&&(o&&Q.some(Lc)&&(A=jy(A,o)),G=Rn(G,A))}return n.dirs&&(G=Rn(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),R=G,qi(P),R}const By=t=>{let e;for(const n in t)(n==="class"||n==="style"||yo(n))&&((e||(e={}))[n]=t[n]);return e},jy=(t,e)=>{const n={};for(const s in t)(!Lc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Hy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Eu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Io(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Eu(s,o,l):!0:!!o;return!1}function Eu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Io(n,i))return!0}return!1}function qy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wy=t=>t.__isSuspense;function Ky(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):Fy(t)}function Di(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function Kt(t,e,n=!1){const s=He||it;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}function zy(t,e){return Gc(t,null,e)}const bu={};function Rs(t,e,n){return Gc(t,e,n)}function Gc(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){const a=He;let c,l=!1,u=!1;if(rt(t)?(c=()=>t.value,l=Hi(t)):As(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(A=>As(A)||Hi(A)),c=()=>t.map(A=>{if(rt(A))return A.value;if(As(A))return Wn(A);if(te(A))return Tn(A,a,2)})):te(t)?e?c=()=>Tn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Tt(t,a,3,[d])}:c=Pt,e&&s){const A=c;c=()=>Wn(A())}let h,d=A=>{h=R.onStop=()=>{Tn(A,a,4)}};if(Pr)return d=Pt,e?n&&Tt(e,a,3,[c(),u?[]:void 0,d]):c(),Pt;let g=u?[]:bu;const y=()=>{if(!!R.active)if(e){const A=R.run();(s||l||(u?A.some((P,G)=>Rr(P,g[G])):Rr(A,g)))&&(h&&h(),Tt(e,a,3,[A,g===bu?void 0:g,d]),g=A)}else R.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>pt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>zc(y));const R=new Vc(c,b);return e?n?y():g=R.run():r==="post"?pt(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Mc(a.scope.effects,R)}}function Gy(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?af(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=He;Us(this);const a=Gc(r,i.bind(s),n);return o?Us(o):Xn(),a}function af(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Wn(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))Wn(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)Wn(t[n],e);else if(kd(t)||Cs(t))t.forEach(n=>{Wn(n,e)});else if(Nd(t))for(const n in t)Wn(t[n],e);return t}function Qy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qc(()=>{t.isMounted=!0}),ff(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Yy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=Dv(),s=Qy();let r;return()=>{const i=e.default&&uf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==St){o=b;break}}const a=fe(t),{mode:c}=a;if(s.isLeaving)return ua(o);const l=Iu(o);if(!l)return ua(o);const u=ja(l,a,s,n);Ha(l,u);const h=n.subTree,d=h&&Iu(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const b=y();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(d&&d.type!==St&&(!Hn(l,d)||g)){const b=ja(d,a,s,n);if(Ha(d,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},ua(o);c==="in-out"&&l.type!==St&&(b.delayLeave=(R,A,P)=>{const G=lf(s,d);G[String(d.key)]=d,R._leaveCb=()=>{A(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},cf=Yy;function lf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ja(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:b,onAppear:R,onAfterAppear:A,onAppearCancelled:P}=e,G=String(t.key),Q=lf(n,t),ue=(ee,ge)=>{ee&&Tt(ee,s,9,ge)},Ce=(ee,ge)=>{const pe=ge[1];ue(ee,ge),J(ee)?ee.every(Fe=>Fe.length<=1)&&pe():ee.length<=1&&pe()},xe={mode:i,persisted:o,beforeEnter(ee){let ge=a;if(!n.isMounted)if(r)ge=b||a;else return;ee._leaveCb&&ee._leaveCb(!0);const pe=Q[G];pe&&Hn(t,pe)&&pe.el._leaveCb&&pe.el._leaveCb(),ue(ge,[ee])},enter(ee){let ge=c,pe=l,Fe=u;if(!n.isMounted)if(r)ge=R||c,pe=A||l,Fe=P||u;else return;let L=!1;const Te=ee._enterCb=ze=>{L||(L=!0,ze?ue(Fe,[ee]):ue(pe,[ee]),xe.delayedLeave&&xe.delayedLeave(),ee._enterCb=void 0)};ge?Ce(ge,[ee,Te]):Te()},leave(ee,ge){const pe=String(t.key);if(ee._enterCb&&ee._enterCb(!0),n.isUnmounting)return ge();ue(h,[ee]);let Fe=!1;const L=ee._leaveCb=Te=>{Fe||(Fe=!0,ge(),Te?ue(y,[ee]):ue(g,[ee]),ee._leaveCb=void 0,Q[pe]===t&&delete Q[pe])};Q[pe]=t,d?Ce(d,[ee,L]):L()},clone(ee){return ja(ee,e,n,s)}};return xe}function ua(t){if(So(t))return t=Rn(t),t.children=null,t}function Iu(t){return So(t)?t.children?t.children[0]:void 0:t}function Ha(t,e){t.shapeFlag&6&&t.component?Ha(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$e?(o.patchFlag&128&&r++,s=s.concat(uf(o.children,e,a))):(e||o.type!==St)&&s.push(a!=null?Rn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function hf(t){return te(t)?{setup:t,name:t.name}:t}const vr=t=>!!t.type.__asyncLoader,So=t=>t.type.__isKeepAlive;function Jy(t,e){df(t,"a",e)}function Xy(t,e){df(t,"da",e)}function df(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Co(e,s,n),n){let r=n.parent;for(;r&&r.parent;)So(r.parent.vnode)&&Zy(s,e,n,r),r=r.parent}}function Zy(t,e,n,s){const r=Co(e,t,s,!0);pf(()=>{Mc(s[e],r)},n)}function Co(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qs(),Us(n);const a=Tt(e,n,t,o);return Xn(),Ys(),a});return s?r.unshift(i):r.push(i),i}}const un=t=>(e,n=He)=>(!Pr||t==="sp")&&Co(t,(...s)=>e(...s),n),ev=un("bm"),Qc=un("m"),tv=un("bu"),nv=un("u"),ff=un("bum"),pf=un("um"),sv=un("sp"),rv=un("rtg"),iv=un("rtc");function ov(t,e=He){Co("ec",t,e)}function qa(t,e){const n=it;if(n===null)return t;const s=ko(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];te(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Mn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Qs(),Tt(c,n,8,[t.el,a,t,e]),Ys())}}const gf="components",av="directives";function mf(t,e){return vf(gf,t,!0,e)||t}const cv=Symbol();function yf(t){return vf(av,t)}function vf(t,e,n=!0,s=!1){const r=it||He;if(r){const i=r.type;if(t===gf){const a=Fv(i,!1);if(a&&(a===e||a===Qt(e)||a===wo(Qt(e))))return i}const o=Tu(r[t]||i[t],e)||Tu(r.appContext[t],e);return!o&&s?i:o}}function Tu(t,e){return t&&(t[e]||t[Qt(e)]||t[wo(Qt(e))])}function _r(t,e,n,s){let r;const i=n&&n[s];if(J(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function _f(t,e,n={},s,r){if(it.isCE||it.parent&&vr(it.parent)&&it.parent.isCE)return Z("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),F();const o=i&&wf(i(n)),a=Wt($e,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function wf(t){return t.some(e=>zi(e)?!(e.type===St||e.type===$e&&!wf(e.children)):!0)?t:null}const Wa=t=>t?Nf(t)?ko(t)||t.proxy:Wa(t.parent):null,Wi=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wa(t.parent),$root:t=>Wa(t.root),$emit:t=>t.emit,$options:t=>Yc(t),$forceUpdate:t=>t.f||(t.f=()=>zc(t.update)),$nextTick:t=>t.n||(t.n=Zd.bind(t.proxy)),$watch:t=>Gy.bind(t)}),lv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==we&&oe(s,e))return o[e]=1,s[e];if(r!==we&&oe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==we&&oe(n,e))return o[e]=4,n[e];Ka&&(o[e]=0)}}const u=Wi[e];let h,d;if(u)return e==="$attrs"&&Et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==we&&oe(r,e)?(r[e]=n,!0):s!==we&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&oe(t,o)||e!==we&&oe(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(Wi,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ka=!0;function uv(t){const e=Yc(t),n=t.proxy,s=t.ctx;Ka=!1,e.beforeCreate&&Su(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:b,deactivated:R,beforeDestroy:A,beforeUnmount:P,destroyed:G,unmounted:Q,render:ue,renderTracked:Ce,renderTriggered:xe,errorCaptured:ee,serverPrefetch:ge,expose:pe,inheritAttrs:Fe,components:L,directives:Te,filters:ze}=e;if(l&&hv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const ve=o[be];te(ve)&&(s[be]=ve.bind(n))}if(r){const be=r.call(n,n);Se(be)&&(t.data=ln(be))}if(Ka=!0,i)for(const be in i){const ve=i[be],kt=te(ve)?ve.bind(n,n):te(ve.get)?ve.get.bind(n,n):Pt,Ln=!te(ve)&&te(ve.set)?ve.set.bind(n):Pt,Rt=Ve({get:kt,set:Ln});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:ft=>Rt.value=ft})}if(a)for(const be in a)Ef(a[be],s,n,be);if(c){const be=te(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ve=>{Di(ve,be[ve])})}u&&Su(u,t,"c");function ke(be,ve){J(ve)?ve.forEach(kt=>be(kt.bind(n))):ve&&be(ve.bind(n))}if(ke(ev,h),ke(Qc,d),ke(tv,g),ke(nv,y),ke(Jy,b),ke(Xy,R),ke(ov,ee),ke(iv,Ce),ke(rv,xe),ke(ff,P),ke(pf,Q),ke(sv,ge),J(pe))if(pe.length){const be=t.exposed||(t.exposed={});pe.forEach(ve=>{Object.defineProperty(be,ve,{get:()=>n[ve],set:kt=>n[ve]=kt})})}else t.exposed||(t.exposed={});ue&&t.render===Pt&&(t.render=ue),Fe!=null&&(t.inheritAttrs=Fe),L&&(t.components=L),Te&&(t.directives=Te)}function hv(t,e,n=Pt,s=!1){J(t)&&(t=za(t));for(const r in t){const i=t[r];let o;Se(i)?"default"in i?o=Kt(i.from||r,i.default,!0):o=Kt(i.from||r):o=Kt(i),rt(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Su(t,e,n){Tt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ef(t,e,n,s){const r=s.includes(".")?af(n,s):()=>n[s];if(qe(t)){const i=e[t];te(i)&&Rs(r,i)}else if(te(t))Rs(r,t.bind(n));else if(Se(t))if(J(t))t.forEach(i=>Ef(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Rs(r,i,t)}}function Yc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ki(c,l,o,!0)),Ki(c,e,o)),Se(e)&&i.set(e,c),c}function Ki(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ki(t,i,n,!0),r&&r.forEach(o=>Ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=dv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dv={data:Cu,props:Vn,emits:Vn,methods:Vn,computed:Vn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Vn,directives:Vn,watch:pv,provide:Cu,inject:fv};function Cu(t,e){return e?t?function(){return Ze(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function fv(t,e){return Vn(za(t),za(e))}function za(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?Ze(Ze(Object.create(null),t),e):e}function pv(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function gv(t,e,n,s=!1){const r={},i={};ji(i,Ao,1),t.propsDefaults=Object.create(null),bf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ry(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function mv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=fe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Io(t.emitsOptions,d))continue;const g=e[d];if(c)if(oe(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=Qt(d);r[y]=Ga(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{bf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Gs(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ga(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h)&&!0)&&(delete i[h],l=!0)}l&&sn(t,"set","$attrs")}function bf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Oi(c))continue;const l=e[c];let u;r&&oe(r,u=Qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Io(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=fe(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ga(r,c,h,l[h],t,!oe(l,h))}}return o}function Ga(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Us(r),s=l[n]=c.call(null,e),Xn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Gs(n))&&(s=!0))}return s}function If(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[d,g]=If(h,e,!0);Ze(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Se(t)&&s.set(t,Ss),Ss;if(J(i))for(let u=0;u<i.length;u++){const h=Qt(i[u]);Au(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Qt(u);if(Au(h)){const d=i[u],g=o[h]=J(d)||te(d)?{type:d}:d;if(g){const y=xu(Boolean,g.type),b=xu(String,g.type);g[0]=y>-1,g[1]=b<0||y<b,(y>-1||oe(g,"default"))&&a.push(h)}}}const l=[o,a];return Se(t)&&s.set(t,l),l}function Au(t){return t[0]!=="$"}function ku(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ru(t,e){return ku(t)===ku(e)}function xu(t,e){return J(e)?e.findIndex(n=>Ru(n,t)):te(e)&&Ru(e,t)?0:-1}const Tf=t=>t[0]==="_"||t==="$stable",Jc=t=>J(t)?t.map(Bt):[Bt(t)],yv=(t,e,n)=>{if(e._n)return e;const s=Je((...r)=>Jc(e(...r)),n);return s._c=!1,s},Sf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Tf(r))continue;const i=t[r];if(te(i))e[r]=yv(r,i,s);else if(i!=null){const o=Jc(i);e[r]=()=>o}}},Cf=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},vv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),ji(e,"_",n)):Sf(e,t.slots={})}else t.slots={},e&&Cf(t,e);ji(t.slots,Ao,1)},_v=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ze(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Sf(e,r)),o=e}else e&&(Cf(t,e),o={default:1});if(i)for(const a in r)!Tf(a)&&!(a in o)&&delete r[a]};function Af(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wv=0;function Ev(t,e){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Se(r)&&(r=null);const i=Af(),o=new Set;let a=!1;const c=i.app={_uid:wv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Vv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Z(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ko(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Qa(t,e,n,s,r=!1){if(J(t)){t.forEach((d,g)=>Qa(d,e&&(J(e)?e[g]:e),n,s,r));return}if(vr(s)&&!r)return;const i=s.shapeFlag&4?ko(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):rt(l)&&(l.value=null)),te(c))Tn(c,a,12,[o,u]);else{const d=qe(c),g=rt(c);if(d||g){const y=()=>{if(t.f){const b=d?oe(h,c)?h[c]:u[c]:c.value;r?J(b)&&Mc(b,i):J(b)?b.includes(i)||b.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,pt(y,n)):y()}}}const pt=Ky;function bv(t){return Iv(t)}function Iv(t,e){const n=ty();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Pt,insertStaticContent:y}=t,b=(f,p,m,v=null,w=null,S=null,O=!1,T=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Hn(f,p)&&(v=x(f),ft(f,w,S,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:B,shapeFlag:M}=p;switch(E){case Xc:R(f,p,m,v);break;case St:A(f,p,m,v);break;case ha:f==null&&P(p,m,v,O);break;case $e:L(f,p,m,v,w,S,O,T,k);break;default:M&1?ue(f,p,m,v,w,S,O,T,k):M&6?Te(f,p,m,v,w,S,O,T,k):(M&64||M&128)&&E.process(f,p,m,v,w,S,O,T,k,ce)}B!=null&&w&&Qa(B,f&&f.ref,S,p||f,!p)},R=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},A=(f,p,m,v)=>{f==null?s(p.el=c(p.children||""),m,v):p.el=f.el},P=(f,p,m,v)=>{[f.el,f.anchor]=y(f.children,p,m,v,f.el,f.anchor)},G=({el:f,anchor:p},m,v)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,v),f=w;s(p,m,v)},Q=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ue=(f,p,m,v,w,S,O,T,k)=>{O=O||p.type==="svg",f==null?Ce(p,m,v,w,S,O,T,k):ge(f,p,w,S,O,T,k)},Ce=(f,p,m,v,w,S,O,T)=>{let k,E;const{type:B,props:M,shapeFlag:j,transition:X,dirs:ie}=f;if(k=f.el=o(f.type,S,M&&M.is,M),j&8?u(k,f.children):j&16&&ee(f.children,k,null,v,w,S&&B!=="foreignObject",O,T),ie&&Mn(f,null,v,"created"),M){for(const _e in M)_e!=="value"&&!Oi(_e)&&i(k,_e,null,M[_e],S,f.children,v,w,D);"value"in M&&i(k,"value",null,M.value),(E=M.onVnodeBeforeMount)&&$t(E,v,f)}xe(k,f,f.scopeId,O,v),ie&&Mn(f,null,v,"beforeMount");const Ie=(!w||w&&!w.pendingBranch)&&X&&!X.persisted;Ie&&X.beforeEnter(k),s(k,p,m),((E=M&&M.onVnodeMounted)||Ie||ie)&&pt(()=>{E&&$t(E,v,f),Ie&&X.enter(k),ie&&Mn(f,null,v,"mounted")},w)},xe=(f,p,m,v,w)=>{if(m&&g(f,m),v)for(let S=0;S<v.length;S++)g(f,v[S]);if(w){let S=w.subTree;if(p===S){const O=w.vnode;xe(f,O,O.scopeId,O.slotScopeIds,w.parent)}}},ee=(f,p,m,v,w,S,O,T,k=0)=>{for(let E=k;E<f.length;E++){const B=f[E]=T?vn(f[E]):Bt(f[E]);b(null,B,p,m,v,w,S,O,T)}},ge=(f,p,m,v,w,S,O)=>{const T=p.el=f.el;let{patchFlag:k,dynamicChildren:E,dirs:B}=p;k|=f.patchFlag&16;const M=f.props||we,j=p.props||we;let X;m&&Un(m,!1),(X=j.onVnodeBeforeUpdate)&&$t(X,m,p,f),B&&Mn(p,f,m,"beforeUpdate"),m&&Un(m,!0);const ie=w&&p.type!=="foreignObject";if(E?pe(f.dynamicChildren,E,T,m,v,ie,S):O||ve(f,p,T,null,m,v,ie,S,!1),k>0){if(k&16)Fe(T,p,M,j,m,v,w);else if(k&2&&M.class!==j.class&&i(T,"class",null,j.class,w),k&4&&i(T,"style",M.style,j.style,w),k&8){const Ie=p.dynamicProps;for(let _e=0;_e<Ie.length;_e++){const Pe=Ie[_e],xt=M[Pe],ys=j[Pe];(ys!==xt||Pe==="value")&&i(T,Pe,xt,ys,w,f.children,m,v,D)}}k&1&&f.children!==p.children&&u(T,p.children)}else!O&&E==null&&Fe(T,p,M,j,m,v,w);((X=j.onVnodeUpdated)||B)&&pt(()=>{X&&$t(X,m,p,f),B&&Mn(p,f,m,"updated")},v)},pe=(f,p,m,v,w,S,O)=>{for(let T=0;T<p.length;T++){const k=f[T],E=p[T],B=k.el&&(k.type===$e||!Hn(k,E)||k.shapeFlag&70)?h(k.el):m;b(k,E,B,null,v,w,S,O,!0)}},Fe=(f,p,m,v,w,S,O)=>{if(m!==v){if(m!==we)for(const T in m)!Oi(T)&&!(T in v)&&i(f,T,m[T],null,O,p.children,w,S,D);for(const T in v){if(Oi(T))continue;const k=v[T],E=m[T];k!==E&&T!=="value"&&i(f,T,E,k,O,p.children,w,S,D)}"value"in v&&i(f,"value",m.value,v.value)}},L=(f,p,m,v,w,S,O,T,k)=>{const E=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:X}=p;X&&(T=T?T.concat(X):X),f==null?(s(E,m,v),s(B,m,v),ee(p.children,m,B,w,S,O,T,k)):M>0&&M&64&&j&&f.dynamicChildren?(pe(f.dynamicChildren,j,m,w,S,O,T),(p.key!=null||w&&p===w.subTree)&&kf(f,p,!0)):ve(f,p,m,B,w,S,O,T,k)},Te=(f,p,m,v,w,S,O,T,k)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?w.ctx.activate(p,m,v,O,k):ze(p,m,v,w,S,O,k):dn(f,p,k)},ze=(f,p,m,v,w,S,O)=>{const T=f.component=Ov(f,v,w);if(So(f)&&(T.ctx.renderer=ce),Pv(T),T.asyncDep){if(w&&w.registerDep(T,ke),!f.el){const k=T.subTree=Z(St);A(null,k,p,m)}return}ke(T,f,p,m,w,S,O)},dn=(f,p,m)=>{const v=p.component=f.component;if(Hy(f,p,m))if(v.asyncDep&&!v.asyncResolved){be(v,p,m);return}else v.next=p,Uy(v.update),v.update();else p.el=f.el,v.vnode=p},ke=(f,p,m,v,w,S,O)=>{const T=()=>{if(f.isMounted){let{next:B,bu:M,u:j,parent:X,vnode:ie}=f,Ie=B,_e;Un(f,!1),B?(B.el=ie.el,be(f,B,O)):B=ie,M&&ca(M),(_e=B.props&&B.props.onVnodeBeforeUpdate)&&$t(_e,X,B,ie),Un(f,!0);const Pe=la(f),xt=f.subTree;f.subTree=Pe,b(xt,Pe,h(xt.el),x(xt),f,w,S),B.el=Pe.el,Ie===null&&qy(f,Pe.el),j&&pt(j,w),(_e=B.props&&B.props.onVnodeUpdated)&&pt(()=>$t(_e,X,B,ie),w)}else{let B;const{el:M,props:j}=p,{bm:X,m:ie,parent:Ie}=f,_e=vr(p);if(Un(f,!1),X&&ca(X),!_e&&(B=j&&j.onVnodeBeforeMount)&&$t(B,Ie,p),Un(f,!0),M&&ne){const Pe=()=>{f.subTree=la(f),ne(M,f.subTree,f,w,null)};_e?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=la(f);b(null,Pe,m,v,f,w,S),p.el=Pe.el}if(ie&&pt(ie,w),!_e&&(B=j&&j.onVnodeMounted)){const Pe=p;pt(()=>$t(B,Ie,Pe),w)}(p.shapeFlag&256||Ie&&vr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&f.a&&pt(f.a,w),f.isMounted=!0,p=m=v=null}},k=f.effect=new Vc(T,()=>zc(E),f.scope),E=f.update=()=>k.run();E.id=f.uid,Un(f,!0),E()},be=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,mv(f,p.props,v,m),_v(f,p.children,m),Qs(),wu(),Ys()},ve=(f,p,m,v,w,S,O,T,k=!1)=>{const E=f&&f.children,B=f?f.shapeFlag:0,M=p.children,{patchFlag:j,shapeFlag:X}=p;if(j>0){if(j&128){Ln(E,M,m,v,w,S,O,T,k);return}else if(j&256){kt(E,M,m,v,w,S,O,T,k);return}}X&8?(B&16&&D(E,w,S),M!==E&&u(m,M)):B&16?X&16?Ln(E,M,m,v,w,S,O,T,k):D(E,w,S,!0):(B&8&&u(m,""),X&16&&ee(M,m,v,w,S,O,T,k))},kt=(f,p,m,v,w,S,O,T,k)=>{f=f||Ss,p=p||Ss;const E=f.length,B=p.length,M=Math.min(E,B);let j;for(j=0;j<M;j++){const X=p[j]=k?vn(p[j]):Bt(p[j]);b(f[j],X,m,null,w,S,O,T,k)}E>B?D(f,w,S,!0,!1,M):ee(p,m,v,w,S,O,T,k,M)},Ln=(f,p,m,v,w,S,O,T,k)=>{let E=0;const B=p.length;let M=f.length-1,j=B-1;for(;E<=M&&E<=j;){const X=f[E],ie=p[E]=k?vn(p[E]):Bt(p[E]);if(Hn(X,ie))b(X,ie,m,null,w,S,O,T,k);else break;E++}for(;E<=M&&E<=j;){const X=f[M],ie=p[j]=k?vn(p[j]):Bt(p[j]);if(Hn(X,ie))b(X,ie,m,null,w,S,O,T,k);else break;M--,j--}if(E>M){if(E<=j){const X=j+1,ie=X<B?p[X].el:v;for(;E<=j;)b(null,p[E]=k?vn(p[E]):Bt(p[E]),m,ie,w,S,O,T,k),E++}}else if(E>j)for(;E<=M;)ft(f[E],w,S,!0),E++;else{const X=E,ie=E,Ie=new Map;for(E=ie;E<=j;E++){const _t=p[E]=k?vn(p[E]):Bt(p[E]);_t.key!=null&&Ie.set(_t.key,E)}let _e,Pe=0;const xt=j-ie+1;let ys=!1,lu=0;const or=new Array(xt);for(E=0;E<xt;E++)or[E]=0;for(E=X;E<=M;E++){const _t=f[E];if(Pe>=xt){ft(_t,w,S,!0);continue}let Ft;if(_t.key!=null)Ft=Ie.get(_t.key);else for(_e=ie;_e<=j;_e++)if(or[_e-ie]===0&&Hn(_t,p[_e])){Ft=_e;break}Ft===void 0?ft(_t,w,S,!0):(or[Ft-ie]=E+1,Ft>=lu?lu=Ft:ys=!0,b(_t,p[Ft],m,null,w,S,O,T,k),Pe++)}const uu=ys?Tv(or):Ss;for(_e=uu.length-1,E=xt-1;E>=0;E--){const _t=ie+E,Ft=p[_t],hu=_t+1<B?p[_t+1].el:v;or[E]===0?b(null,Ft,m,hu,w,S,O,T,k):ys&&(_e<0||E!==uu[_e]?Rt(Ft,m,hu,2):_e--)}}},Rt=(f,p,m,v,w=null)=>{const{el:S,type:O,transition:T,children:k,shapeFlag:E}=f;if(E&6){Rt(f.component.subTree,p,m,v);return}if(E&128){f.suspense.move(p,m,v);return}if(E&64){O.move(f,p,m,ce);return}if(O===$e){s(S,p,m);for(let M=0;M<k.length;M++)Rt(k[M],p,m,v);s(f.anchor,p,m);return}if(O===ha){G(f,p,m);return}if(v!==2&&E&1&&T)if(v===0)T.beforeEnter(S),s(S,p,m),pt(()=>T.enter(S),w);else{const{leave:M,delayLeave:j,afterLeave:X}=T,ie=()=>s(S,p,m),Ie=()=>{M(S,()=>{ie(),X&&X()})};j?j(S,ie,Ie):Ie()}else s(S,p,m)},ft=(f,p,m,v=!1,w=!1)=>{const{type:S,props:O,ref:T,children:k,dynamicChildren:E,shapeFlag:B,patchFlag:M,dirs:j}=f;if(T!=null&&Qa(T,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const X=B&1&&j,ie=!vr(f);let Ie;if(ie&&(Ie=O&&O.onVnodeBeforeUnmount)&&$t(Ie,p,f),B&6)_(f.component,m,v);else{if(B&128){f.suspense.unmount(m,v);return}X&&Mn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,w,ce,v):E&&(S!==$e||M>0&&M&64)?D(E,p,m,!1,!0):(S===$e&&M&384||!w&&B&16)&&D(k,p,m),v&&ms(f)}(ie&&(Ie=O&&O.onVnodeUnmounted)||X)&&pt(()=>{Ie&&$t(Ie,p,f),X&&Mn(f,null,p,"unmounted")},m)},ms=f=>{const{type:p,el:m,anchor:v,transition:w}=f;if(p===$e){vi(m,v);return}if(p===ha){Q(f);return}const S=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:T}=w,k=()=>O(m,S);T?T(f.el,S,k):k()}else S()},vi=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},_=(f,p,m)=>{const{bum:v,scope:w,update:S,subTree:O,um:T}=f;v&&ca(v),w.stop(),S&&(S.active=!1,ft(O,f,p,m)),T&&pt(T,p),pt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},D=(f,p,m,v=!1,w=!1,S=0)=>{for(let O=S;O<f.length;O++)ft(f[O],p,m,v,w)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,m)=>{f==null?p._vnode&&ft(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,m),wu(),tf(),p._vnode=f},ce={p:b,um:ft,m:Rt,r:ms,mt:ze,mc:ee,pc:ve,pbc:pe,n:x,o:t};let Re,ne;return e&&([Re,ne]=e(ce)),{render:V,hydrate:Re,createApp:Ev(V,Re)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kf(t,e,n=!1){const s=t.children,r=e.children;if(J(s)&&J(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vn(r[i]),a.el=o.el),n||kf(o,a))}}function Tv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Sv=t=>t.__isTeleport,$e=Symbol(void 0),Xc=Symbol(void 0),St=Symbol(void 0),ha=Symbol(void 0),wr=[];let Dt=null;function F(t=!1){wr.push(Dt=t?null:[])}function Cv(){wr.pop(),Dt=wr[wr.length-1]||null}let Dr=1;function Nu(t){Dr+=t}function Rf(t){return t.dynamicChildren=Dr>0?Dt||Ss:null,Cv(),Dr>0&&Dt&&Dt.push(t),t}function W(t,e,n,s,r,i){return Rf(C(t,e,n,s,r,i,!0))}function Wt(t,e,n,s,r){return Rf(Z(t,e,n,s,r,!0))}function zi(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}const Ao="__vInternal",xf=({key:t})=>t!=null?t:null,Pi=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||rt(t)||te(t)?{i:it,r:t,k:e,f:!!n}:t:null;function C(t,e=null,n=null,s=0,r=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xf(e),ref:e&&Pi(e),scopeId:To,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Dr>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Z=Av;function Av(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===cv)&&(t=St),zi(t)){const a=Rn(t,e,!0);return n&&Zc(a,n),Dr>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if($v(t)&&(t=t.__vccOpts),e){e=kv(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=Ye(a)),Se(c)&&(Wd(c)&&!J(c)&&(c=Ze({},c)),e.style=mo(c))}const o=qe(t)?1:Wy(t)?128:Sv(t)?64:Se(t)?4:te(t)?2:0;return C(t,e,n,s,r,o,i,!0)}function kv(t){return t?Wd(t)||Ao in t?Ze({},t):t:null}function Rn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Rv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xf(a),ref:e&&e.ref?n&&r?J(r)?r.concat(Pi(e)):[r,Pi(e)]:Pi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ee(t=" ",e=0){return Z(Xc,null,t,e)}function ot(t="",e=!1){return e?(F(),Wt(St,null,t)):Z(St,null,t)}function Bt(t){return t==null||typeof t=="boolean"?Z(St):J(t)?Z($e,null,t.slice()):typeof t=="object"?vn(t):Z(Xc,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function Zc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ao in e)?e._ctx=it:r===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ye([e.class,s.class]));else if(r==="style")e.style=mo([e.style,s.style]);else if(yo(r)){const i=e[r],o=s[r];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){Tt(t,e,7,[n,s])}const xv=Af();let Nv=0;function Ov(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||xv,i={uid:Nv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:If(s,r),emitsOptions:sf(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vy.bind(null,i),t.ce&&t.ce(i),i}let He=null;const Dv=()=>He||it,Us=t=>{He=t,t.scope.on()},Xn=()=>{He&&He.scope.off(),He=null};function Nf(t){return t.vnode.shapeFlag&4}let Pr=!1;function Pv(t,e=!1){Pr=e;const{props:n,children:s}=t.vnode,r=Nf(t);gv(t,n,r,e),vv(t,s);const i=r?Lv(t,e):void 0;return Pr=!1,i}function Lv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kd(new Proxy(t.ctx,lv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Uv(t):null;Us(t),Qs();const i=Tn(s,t,0,[t.props,r]);if(Ys(),Xn(),Rd(i)){if(i.then(Xn,Xn),e)return i.then(o=>{Ou(t,o,e)}).catch(o=>{bo(o,t,0)});t.asyncDep=i}else Ou(t,i,e)}else Of(t,e)}function Ou(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Yd(e)),Of(t,n)}let Du;function Of(t,e,n){const s=t.type;if(!t.render){if(!e&&Du&&!s.render){const r=s.template||Yc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ze(Ze({isCustomElement:i,delimiters:a},o),c);s.render=Du(r,l)}}t.render=s.render||Pt}Us(t),Qs(),uv(t),Ys(),Xn()}function Mv(t){return new Proxy(t.attrs,{get(e,n){return Et(t,"get","$attrs"),e[n]}})}function Uv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Mv(t))},slots:t.slots,emit:t.emit,expose:e}}function ko(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yd(Kd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)}}))}function Fv(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function $v(t){return te(t)&&"__vccOpts"in t}const Ve=(t,e)=>Py(t,e,Pr);function el(t,e,n){const s=arguments.length;return s===2?Se(e)&&!J(e)?zi(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zi(n)&&(n=[n]),Z(t,e,n))}const Vv="3.2.41",Bv="http://www.w3.org/2000/svg",qn=typeof document!="undefined"?document:null,Pu=qn&&qn.createElement("template"),jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?qn.createElementNS(Bv,t):qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Pu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Pu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Hv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qv(t,e,n){const s=t.style,r=qe(n);if(n&&!r){for(const i in n)Ya(s,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&Ya(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Lu=/\s*!important$/;function Ya(t,e,n){if(J(n))n.forEach(s=>Ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Wv(t,e);Lu.test(n)?t.setProperty(Gs(s),n.replace(Lu,""),"important"):t[s]=n}}const Mu=["Webkit","Moz","ms"],da={};function Wv(t,e){const n=da[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return da[e]=s;s=wo(s);for(let r=0;r<Mu.length;r++){const i=Mu[r]+s;if(i in t)return da[e]=i}return e}const Uu="http://www.w3.org/1999/xlink";function Kv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Uu,e.slice(6,e.length)):t.setAttributeNS(Uu,e,n);else{const i=Wm(e);n==null||i&&!Cd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Cd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Gv(t,e,n,s){t.addEventListener(e,n,s)}function Qv(t,e,n,s){t.removeEventListener(e,n,s)}function Yv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Jv(e);if(s){const l=i[e]=e_(s,r);Gv(t,a,l,c)}else o&&(Qv(t,a,o,c),i[e]=void 0)}}const Fu=/(?:Once|Passive|Capture)$/;function Jv(t){let e;if(Fu.test(t)){e={};let s;for(;s=t.match(Fu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gs(t.slice(2)),e]}let fa=0;const Xv=Promise.resolve(),Zv=()=>fa||(Xv.then(()=>fa=0),fa=Date.now());function e_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Tt(t_(s,n.value),e,5,[s])};return n.value=t,n.attached=Zv(),n}function t_(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const $u=/^on[a-z]/,n_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Hv(t,s,r):e==="style"?qv(t,n,s):yo(e)?Lc(e)||Yv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):s_(t,e,s,r))?zv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Kv(t,e,s,r))};function s_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&$u.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$u.test(e)&&qe(n)?!1:e in t}const pn="transition",ar="animation",Ro=(t,{slots:e})=>el(cf,r_(t),e);Ro.displayName="Transition";const Df={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ro.props=Ze({},cf.props,Df);const Fn=(t,e=[])=>{J(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vu=t=>t?J(t)?t.some(e=>e.length>1):t.length>1:!1;function r_(t){const e={};for(const L in t)L in Df||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,y=i_(r),b=y&&y[0],R=y&&y[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:G,onLeave:Q,onLeaveCancelled:ue,onBeforeAppear:Ce=A,onAppear:xe=P,onAppearCancelled:ee=G}=e,ge=(L,Te,ze)=>{$n(L,Te?u:a),$n(L,Te?l:o),ze&&ze()},pe=(L,Te)=>{L._isLeaving=!1,$n(L,h),$n(L,g),$n(L,d),Te&&Te()},Fe=L=>(Te,ze)=>{const dn=L?xe:P,ke=()=>ge(Te,L,ze);Fn(dn,[Te,ke]),Bu(()=>{$n(Te,L?c:i),gn(Te,L?u:a),Vu(dn)||ju(Te,s,b,ke)})};return Ze(e,{onBeforeEnter(L){Fn(A,[L]),gn(L,i),gn(L,o)},onBeforeAppear(L){Fn(Ce,[L]),gn(L,c),gn(L,l)},onEnter:Fe(!1),onAppear:Fe(!0),onLeave(L,Te){L._isLeaving=!0;const ze=()=>pe(L,Te);gn(L,h),c_(),gn(L,d),Bu(()=>{!L._isLeaving||($n(L,h),gn(L,g),Vu(Q)||ju(L,s,R,ze))}),Fn(Q,[L,ze])},onEnterCancelled(L){ge(L,!1),Fn(G,[L])},onAppearCancelled(L){ge(L,!0),Fn(ee,[L])},onLeaveCancelled(L){pe(L),Fn(ue,[L])}})}function i_(t){if(t==null)return null;if(Se(t))return[pa(t.enter),pa(t.leave)];{const e=pa(t);return[e,e]}}function pa(t){return Od(t)}function gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function $n(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Bu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let o_=0;function ju(t,e,n,s){const r=t._endId=++o_,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=a_(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function a_(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),r=s(pn+"Delay"),i=s(pn+"Duration"),o=Hu(r,i),a=s(ar+"Delay"),c=s(ar+"Duration"),l=Hu(a,c);let u=null,h=0,d=0;e===pn?o>0&&(u=pn,h=o,d=i.length):e===ar?l>0&&(u=ar,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?pn:ar:null,d=u?u===pn?i.length:c.length:0);const g=u===pn&&/\b(transform|all)(,|$)/.test(n[pn+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:g}}function Hu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>qu(n)+qu(t[s])))}function qu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function c_(){return document.body.offsetHeight}const l_=["ctrl","shift","alt","meta"],u_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>l_.some(n=>t[`${n}Key`]&&!e.includes(n))},Pf=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=u_[e[r]];if(i&&i(n,e))return}return t(n,...s)},h_={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):cr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),cr(t,!0),s.enter(t)):s.leave(t,()=>{cr(t,!1)}):cr(t,e))},beforeUnmount(t,{value:e}){cr(t,e)}};function cr(t,e){t.style.display=e?t._vod:"none"}const d_=Ze({patchProp:n_},jv);let Wu;function f_(){return Wu||(Wu=bv(d_))}const p_=(...t)=>{const e=f_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=g_(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function g_(t){return qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},m_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):m_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},y_=function(t){const e=Lf(t);return Mf.encodeByteArray(e,!0)},Gi=function(t){return y_(t).replace(/\./g,"")},Uf=function(t){try{return Mf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function __(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function w_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E_(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b_(){return typeof indexedDB=="object"}function I_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function T_(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=()=>T_().__FIREBASE_DEFAULTS__,C_=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},A_=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uf(t[1]);return e&&JSON.parse(e)},tl=()=>{try{return S_()||C_()||A_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ff=t=>{var e,n;return(n=(e=tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k_=t=>{const e=Ff(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},R_=()=>{var t;return(t=tl())===null||t===void 0?void 0:t.config},$f=t=>{var e;return(e=tl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gi(JSON.stringify(n)),Gi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=O_,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?D_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new hn(r,a,s)}}function D_(t,e){return t.replace(P_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const P_=/\{\$([^}]+)}/g;function L_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ku(i)&&Ku(o)){if(!Qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ku(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function fr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function M_(t,e){const n=new U_(t,e);return n.subscribe.bind(n)}class U_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");F_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ga),r.error===void 0&&(r.error=ga),r.complete===void 0&&(r.complete=ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new x_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B_(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:V_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V_(t){return t===Bn?void 0:t}function B_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const H_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},q_=de.INFO,W_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},K_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=W_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=q_,this._logHandler=K_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const z_=(t,e)=>e.some(n=>t instanceof n);let zu,Gu;function G_(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q_(){return Gu||(Gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vf=new WeakMap,Ja=new WeakMap,Bf=new WeakMap,ma=new WeakMap,sl=new WeakMap;function Y_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vf.set(n,t)}).catch(()=>{}),sl.set(e,t),e}function J_(t){if(Ja.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ja.set(t,e)}let Xa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ja.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X_(t){Xa=t(Xa)}function Z_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ya(this),e,...n);return Bf.set(s,e.sort?e.sort():[e]),Sn(s)}:Q_().includes(t)?function(...e){return t.apply(ya(this),e),Sn(Vf.get(this))}:function(...e){return Sn(t.apply(ya(this),e))}}function ew(t){return typeof t=="function"?Z_(t):(t instanceof IDBTransaction&&J_(t),z_(t,G_())?new Proxy(t,Xa):t)}function Sn(t){if(t instanceof IDBRequest)return Y_(t);if(ma.has(t))return ma.get(t);const e=ew(t);return e!==t&&(ma.set(t,e),sl.set(e,t)),e}const ya=t=>sl.get(t);function tw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const nw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],va=new Map;function Qu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=sw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return va.set(e,i),i}X_(t=>({...t,get:(e,n,s)=>Qu(e,n)||t.get(e,n,s),has:(e,n)=>!!Qu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",Yu="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new nl("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",cw="@firebase/analytics",lw="@firebase/app-check-compat",uw="@firebase/app-check",hw="@firebase/auth",dw="@firebase/auth-compat",fw="@firebase/database",pw="@firebase/database-compat",gw="@firebase/functions",mw="@firebase/functions-compat",yw="@firebase/installations",vw="@firebase/installations-compat",_w="@firebase/messaging",ww="@firebase/messaging-compat",Ew="@firebase/performance",bw="@firebase/performance-compat",Iw="@firebase/remote-config",Tw="@firebase/remote-config-compat",Sw="@firebase/storage",Cw="@firebase/storage-compat",Aw="@firebase/firestore",kw="@firebase/firestore-compat",Rw="firebase",xw="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="[DEFAULT]",Nw={[Za]:"fire-core",[ow]:"fire-core-compat",[cw]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[lw]:"fire-app-check-compat",[hw]:"fire-auth",[dw]:"fire-auth-compat",[fw]:"fire-rtdb",[pw]:"fire-rtdb-compat",[gw]:"fire-fn",[mw]:"fire-fn-compat",[yw]:"fire-iid",[vw]:"fire-iid-compat",[_w]:"fire-fcm",[ww]:"fire-fcm-compat",[Ew]:"fire-perf",[bw]:"fire-perf-compat",[Iw]:"fire-rc",[Tw]:"fire-rc-compat",[Sw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Aw]:"fire-fst",[kw]:"fire-fst-compat","fire-js":"fire-js",[Rw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Map,tc=new Map;function Ow(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(tc.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,t);for(const n of Yi.values())Ow(n,t);return!0}function rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new Yr("app","Firebase",Dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=xw;function jf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ec,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Cn.create("bad-app-name",{appName:String(r)});if(n||(n=R_()),!n)throw Cn.create("no-options");const i=Yi.get(r);if(i){if(Qi(n,i.options)&&Qi(s,i.config))return i;throw Cn.create("duplicate-app",{appName:r})}const o=new j_(r);for(const c of tc.values())o.addComponent(c);const a=new Pw(n,s,o);return Yi.set(r,a),a}function Hf(t=ec){const e=Yi.get(t);if(!e&&t===ec)return jf();if(!e)throw Cn.create("no-app",{appName:t});return e}function An(t,e,n){var s;let r=(s=Nw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}Fs(new is(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebase-heartbeat-database",Mw=1,Lr="firebase-heartbeat-store";let _a=null;function qf(){return _a||(_a=tw(Lw,Mw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lr)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function Uw(t){var e;try{return(await qf()).transaction(Lr).objectStore(Lr).get(Wf(t))}catch(n){if(n instanceof hn)os.warn(n.message);else{const s=Cn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});os.warn(s.message)}}}async function Ju(t,e){var n;try{const r=(await qf()).transaction(Lr,"readwrite");return await r.objectStore(Lr).put(e,Wf(t)),r.done}catch(s){if(s instanceof hn)os.warn(s.message);else{const r=Cn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});os.warn(r.message)}}}function Wf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=1024,$w=30*24*60*60*1e3;class Vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=$w}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xu(),{heartbeatsToSend:n,unsentEntries:s}=Bw(this._heartbeatsCache.heartbeats),r=Gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xu(){return new Date().toISOString().substring(0,10)}function Bw(t,e=Fw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Zu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Zu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?I_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zu(t){return Gi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){Fs(new is("platform-logger",e=>new rw(e),"PRIVATE")),Fs(new is("heartbeat",e=>new Vw(e),"PRIVATE")),An(Za,Yu,t),An(Za,Yu,"esm2017"),An("fire-js","")}Hw("");var qw="firebase",Ww="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(qw,Ww,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function il(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Kf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kw=Kf,zf=new Yr("auth","Firebase",Kf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new nl("@firebase/auth");function Li(t,...e){eh.logLevel<=de.ERROR&&eh.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw ol(t,...e)}function zt(t,...e){return ol(t,...e)}function Gf(t,e,n){const s=Object.assign(Object.assign({},Kw()),{[e]:n});return new Yr("auth","Firebase",s).create(e,{appName:t.name})}function zw(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ct(t,"argument-error"),Gf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ol(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zf.create(t,...e)}function K(t,e,...n){if(!t)throw ol(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Li(e),new Error(e)}function rn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function tn(t){rn(t instanceof Function,"Expected a class definition");let e=th.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,th.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e){const n=rl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Qi(i,e!=null?e:{}))return r;Ct(r,"already-initialized")}return n.initialize({options:e})}function Qw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yw(){return nh()==="http:"||nh()==="https:"}function nh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yw()||__()||"connection"in navigator)?navigator.onLine:!0}function Xw(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=v_()||w_()}get(){return Jw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Zr(3e4,6e4);function ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ti(t,e,n,s,r={}){return Yf(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Jr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qf.fetch()(Jf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Zw),e);try{const r=new t0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ti(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ti(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ti(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gf(t,u,l);Ct(t,u)}}catch(r){if(r instanceof hn)throw r;Ct(t,"network-request-failed")}}async function ni(t,e,n,s,r={}){const i=await ti(t,e,n,s,r);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Jf(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?al(t.config,r):`${t.config.apiScheme}://${r}`}class t0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zt(this.auth,"network-request-failed")),e0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=zt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e){return ti(t,"POST","/v1/accounts:delete",e)}async function s0(t,e){return ti(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r0(t,e=!1){const n=Mt(t),s=await n.getIdToken(e),r=cl(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Er(wa(r.auth_time)),issuedAtTime:Er(wa(r.iat)),expirationTime:Er(wa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function cl(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uf(s);return i?JSON.parse(i):(Li("Failed to decode base64 JWT payload"),null)}catch(i){return Li("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function i0(t){const e=cl(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hn&&o0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function o0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t){var e;const n=t.auth,s=await t.getIdToken(),r=await $s(t,s0(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?u0(i.providerUserInfo):[],a=l0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function c0(t){const e=Mt(t);await Ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function u0(t){return t.map(e=>{var{providerId:n}=e,s=il(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e){const n=await Yf(t,{},async()=>{const s=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Jf(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):i0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await h0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Mr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r0(this,e)}reload(){return c0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,n0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:Q,isAnonymous:ue,providerData:Ce,stsTokenManager:xe}=n;K(G&&xe,e,"internal-error");const ee=Mr.fromJSON(this.name,xe);K(typeof G=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),K(typeof Q=="boolean",e,"internal-error"),K(typeof ue=="boolean",e,"internal-error"),mn(g,e.name),mn(y,e.name),mn(b,e.name),mn(R,e.name),mn(A,e.name),mn(P,e.name);const ge=new Zn({uid:G,auth:e,email:d,emailVerified:Q,displayName:h,isAnonymous:ue,photoURL:y,phoneNumber:g,tenantId:b,stsTokenManager:ee,createdAt:A,lastLoginAt:P});return Ce&&Array.isArray(Ce)&&(ge.providerData=Ce.map(pe=>Object.assign({},pe))),R&&(ge._redirectEventId=R),ge}static async _fromIdTokenResponse(e,n,s=!1){const r=new Mr;r.updateFromServerResponse(n);const i=new Zn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ji(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zf.type="NONE";const sh=Zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(tn(sh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||tn(sh);const o=Mi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new xs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ep(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rp(e))return"Blackberry";if(ip(e))return"Webos";if(ll(e))return"Safari";if((e.includes("chrome/")||tp(e))&&!e.includes("edge/"))return"Chrome";if(sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ep(t=lt()){return/firefox\//i.test(t)}function ll(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tp(t=lt()){return/crios\//i.test(t)}function np(t=lt()){return/iemobile/i.test(t)}function sp(t=lt()){return/android/i.test(t)}function rp(t=lt()){return/blackberry/i.test(t)}function ip(t=lt()){return/webos/i.test(t)}function xo(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function d0(t=lt()){var e;return xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f0(){return E_()&&document.documentMode===10}function op(t=lt()){return xo(t)||sp(t)||ip(t)||rp(t)||/windows phone/i.test(t)||np(t)}function p0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t,e=[]){let n;switch(t){case"Browser":n=rh(lt());break;case"Worker":n=`${rh(lt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ih(this),this.idTokenSubscription=new ih(this),this.beforeStateQueue=new g0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ji(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Js(t){return Mt(t)}class ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=M_(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function y0(t,e,n){const s=Js(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=cp(e),{host:o,port:a}=v0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||_0()}function cp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function v0(t){const e=cp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:oh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:oh(o)}}}function oh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function lp(t,e){return ti(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t,e){return ni(t,"POST","/v1/accounts:signInWithPassword",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e){return ni(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}async function b0(t,e){return ni(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends ul{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ur(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ur(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return w0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E0(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return b0(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return ni(t,"POST","/v1/accounts:signInWithIdp",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="http://localhost";class as extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=il(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new as(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ns(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:I0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S0(t){const e=dr(fr(t)).link,n=e?dr(fr(e)).deep_link_id:null,s=dr(fr(t)).deep_link_id;return(s?dr(fr(s)).link:null)||s||n||e||t}class hl{constructor(e){var n,s,r,i,o,a;const c=dr(fr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=T0((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=S0(e);try{return new hl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=hl.parseLink(n);return K(s,"argument-error"),Ur._fromEmailAndCode(e,s.code,s.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends dl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends si{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends si{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends si{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(t,e){return ni(t,"POST","/v1/accounts:signUp",ei(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Zn._fromIdTokenResponse(e,s,r),o=ah(s);return new cs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ah(s);return new cs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ah(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends hn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xi(e,n,s,r)}}function up(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(t,i,e,s):i})}async function A0(t,e,n=!1){const s=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await $s(t,up(r,i,e,t),n);K(o.idToken,r,"internal-error");const a=cl(o.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(t.uid===c,r,"user-mismatch"),cs._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e,n=!1){const s="signIn",r=await up(t,s,e),i=await cs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function k0(t,e){return dp(Js(t),e)}async function R0(t,e){return hp(Mt(t),e)}async function x0(t,e,n){const s=Js(t),r=await C0(s,{returnSecureToken:!0,email:e,password:n}),i=await cs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function N0(t,e,n){return k0(Mt(t),fs.credential(e,n))}function O0(t,e){return D0(Mt(t),null,e)}async function D0(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await $s(t,lp(s,i));await t._updateTokensIfNecessary(o,!0)}function P0(t,e,n,s){return Mt(t).onIdTokenChanged(e,n,s)}function L0(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function M0(t){return Mt(t).signOut()}const Zi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){const t=lt();return ll(t)||xo(t)}const F0=1e3,$0=10;class pp extends fp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=U0()&&p0(),this.fallbackToPolling=op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);f0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pp.type="LOCAL";const V0=pp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp extends fp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gp.type="SESSION";const mp=gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new No(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await B0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=fl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function H0(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){return typeof Gt().WorkerGlobalScope!="undefined"&&typeof Gt().importScripts=="function"}async function q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function K0(){return yp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="firebaseLocalStorageDb",z0=1,eo="firebaseLocalStorage",_p="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oo(t,e){return t.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function G0(){const t=indexedDB.deleteDatabase(vp);return new ri(t).toPromise()}function sc(){const t=indexedDB.open(vp,z0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(eo,{keyPath:_p})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(eo)?e(s):(s.close(),await G0(),e(await sc()))})})}async function ch(t,e,n){const s=Oo(t,!0).put({[_p]:e,value:n});return new ri(s).toPromise()}async function Q0(t,e){const n=Oo(t,!1).get(e),s=await new ri(n).toPromise();return s===void 0?null:s.value}function lh(t,e){const n=Oo(t,!0).delete(e);return new ri(n).toPromise()}const Y0=800,J0=3;class wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>J0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(K0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await q0(),!this.activeServiceWorker)return;this.sender=new j0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await ch(e,Zi,"1"),await lh(e,Zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ch(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Q0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oo(r,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wp.type="LOCAL";const X0=wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=zt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Z0().appendChild(s)})}function tE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Zr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t,e){return e?tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nE(t){return dp(t.auth,new pl(t),t.bypassAuthState)}function sE(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hp(n,new pl(t),t.bypassAuthState)}async function rE(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),A0(n,new pl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nE;case"linkViaPopup":case"linkViaRedirect":return rE;case"reauthViaPopup":case"reauthViaRedirect":return sE;default:Ct(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=new Zr(2e3,1e4);async function oE(t,e,n){const s=Js(t);zw(t,e,dl);const r=Ep(s,n);return new Kn(s,"signInViaPopup",e,r).executeNotNull()}class Kn extends bp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iE.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="pendingRedirect",Ui=new Map;class cE extends bp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ui.get(this.auth._key());if(!e){try{const s=await lE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lE(t,e){const n=dE(e),s=hE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function uE(t,e){Ui.set(t._key(),e)}function hE(t){return tn(t._redirectPersistence)}function dE(t){return Mi(aE,t.config.apiKey,t.name)}async function fE(t,e,n=!1){const s=Js(t),r=Ep(s,e),o=await new cE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=10*60*1e3;class gE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ip(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pE&&this.cachedEventUids.clear(),this.cachedEventUids.has(uh(e))}saveEventToCache(e){this.cachedEventUids.add(uh(e)),this.lastProcessedEventTime=Date.now()}}function uh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ip({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ip(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e={}){return ti(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_E=/^https?/;async function wE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yE(t);for(const n of e)try{if(EE(n))return}catch{}Ct(t,"unauthorized-domain")}function EE(t){const e=nc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!_E.test(n))return!1;if(vE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new Zr(3e4,6e4);function hh(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IE(t){return new Promise((e,n)=>{var s,r,i;function o(){hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hh(),n(zt(t,"network-request-failed"))},timeout:bE.get()})}if(!((r=(s=Gt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const a=tE("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},eE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function TE(t){return Fi=Fi||IE(t),Fi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Zr(5e3,15e3),CE="__/auth/iframe",AE="emulator/auth/iframe",kE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xE(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?al(e,AE):`https://${t.config.authDomain}/${CE}`,s={apiKey:e.apiKey,appName:t.name,v:Xr},r=RE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Jr(s).slice(1)}`}async function NE(t){const e=await TE(t),n=Gt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:xE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Gt().setTimeout(()=>{i(o)},SE.get());function c(){Gt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DE=500,PE=600,LE="_blank",ME="http://localhost";class dh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UE(t,e,n,s=DE,r=PE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},OE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=lt().toLowerCase();n&&(a=tp(l)?LE:n),ep(l)&&(e=e||ME,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(d0(l)&&a!=="_self")return FE(e||"",a),new dh(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new dh(h)}function FE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="__/auth/handler",VE="emulator/auth/handler";function fh(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xr,eventId:r};if(e instanceof dl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",L_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof si){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${BE(t)}?${Jr(a).slice(1)}`}function BE({config:t}){return t.emulator?al(t,VE):`https://${t.authDomain}/${$E}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="webStorageSupport";class jE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mp,this._completeRedirectFn=fE,this._overrideRedirectResult=uE}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=fh(e,n,s,nc(),r);return UE(e,o,fl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),H0(fh(e,n,s,nc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NE(e),s=new gE(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ea,{type:Ea},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ea];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return op()||ll()||xo()}}const HE=jE;var ph="@firebase/auth",gh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KE(t){Fs(new is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ap(t)},u=new m0(a,c,l);return Qw(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fs(new is("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(s=>new qE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(ph,gh,WE(t)),An(ph,gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=5*60,GE=$f("authIdTokenMaxAge")||zE;let mh=null;const QE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GE)return;const r=n==null?void 0:n.token;mh!==r&&(mh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function YE(t=Hf()){const e=rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gw(t,{popupRedirectResolver:HE,persistence:[X0,V0,mp]}),s=$f("authTokenSyncURL");if(s){const i=QE(s);L0(n,i,()=>i(n.currentUser)),P0(n,o=>i(o))}const r=Ff("auth");return r&&y0(n,`http://${r}`),n}KE("Browser");var JE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,gl=gl||{},Y=JE||self;function to(){}function Do(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ii(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XE(t){return Object.prototype.hasOwnProperty.call(t,ba)&&t[ba]||(t[ba]=++ZE)}var ba="closure_uid_"+(1e9*Math.random()>>>0),ZE=0;function eb(t,e,n){return t.call.apply(t.bind,arguments)}function tb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=eb:at=tb,at.apply(null,arguments)}function Si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dn(){this.s=this.s,this.o=this.o}var nb=0;Dn.prototype.s=!1;Dn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nb!=0)&&XE(this)};Dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ml(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function yh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Do(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var sb=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",to,e),Y.removeEventListener("test",to,e)}catch{}return t}();function no(t){return/^[\s\xa0]*$/.test(t)}var vh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ia(t,e){return t<e?-1:t>e?1:0}function Po(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return Po().indexOf(t)!=-1}function yl(t){return yl[" "](t),t}yl[" "]=to;function rb(t){var e=ab;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ib=Ht("Opera"),Vs=Ht("Trident")||Ht("MSIE"),Sp=Ht("Edge"),rc=Sp||Vs,Cp=Ht("Gecko")&&!(Po().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),ob=Po().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function Ap(){var t=Y.document;return t?t.documentMode:void 0}var so;e:{var Ta="",Sa=function(){var t=Po();if(Cp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sp)return/Edge\/([\d\.]+)/.exec(t);if(Vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ob)return/WebKit\/(\S+)/.exec(t);if(ib)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sa&&(Ta=Sa?Sa[1]:""),Vs){var Ca=Ap();if(Ca!=null&&Ca>parseFloat(Ta)){so=String(Ca);break e}}so=Ta}var ab={};function cb(){return rb(function(){let t=0;const e=vh(String(so)).split("."),n=vh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ia(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ia(r[2].length==0,i[2].length==0)||Ia(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ic;if(Y.document&&Vs){var _h=Ap();ic=_h||parseInt(so,10)||void 0}else ic=void 0;var lb=ic;function Fr(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Cp){e:{try{yl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ub[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fr.X.h.call(this)}}et(Fr,ct);var ub={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var oi="closure_listenable_"+(1e6*Math.random()|0),hb=0;function db(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++hb,this.ba=this.ea=!1}function Lo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function kp(t){const e={};for(const n in t)e[n]=t[n];return e}const wh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<wh.length;i++)n=wh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Mo(t){this.src=t,this.g={},this.h=0}Mo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ac(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new db(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function oc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Tp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Lo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ac(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var _l="closure_lm_"+(1e6*Math.random()|0),Aa={};function xp(t,e,n,s,r){if(s&&s.once)return Op(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)xp(t,e[i],n,s,r);return null}return n=bl(n),t&&t[oi]?t.N(e,n,ii(s)?!!s.capture:!!s,r):Np(t,e,n,!1,s,r)}function Np(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ii(r)?!!r.capture:!!r,a=El(t);if(a||(t[_l]=a=new Mo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=fb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)sb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Pp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fb(){function t(n){return e.call(t.src,t.listener,n)}const e=pb;return t}function Op(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Op(t,e[i],n,s,r);return null}return n=bl(n),t&&t[oi]?t.O(e,n,ii(s)?!!s.capture:!!s,r):Np(t,e,n,!0,s,r)}function Dp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dp(t,e[i],n,s,r);else s=ii(s)?!!s.capture:!!s,n=bl(n),t&&t[oi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ac(i,n,s,r),-1<n&&(Lo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=El(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ac(e,n,s,r)),(n=-1<t?e[t]:null)&&wl(n))}function wl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[oi])oc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Pp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=El(e))?(oc(n,t),n.h==0&&(n.src=null,e[_l]=null)):Lo(t)}}}function Pp(t){return t in Aa?Aa[t]:Aa[t]="on"+t}function pb(t,e){if(t.ba)t=!0;else{e=new Fr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wl(t),t=n.call(s,e)}return t}function El(t){return t=t[_l],t instanceof Mo?t:null}var ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function bl(t){return typeof t=="function"?t:(t[ka]||(t[ka]=function(e){return t.handleEvent(e)}),t[ka])}function We(){Dn.call(this),this.i=new Mo(this),this.P=this,this.I=null}et(We,Dn);We.prototype[oi]=!0;We.prototype.removeEventListener=function(t,e,n,s){Dp(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var r=e;e=new ct(s,t),Rp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ci(o,s,!0,e)&&r}if(o=e.g=t,r=Ci(o,s,!0,e)&&r,r=Ci(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ci(o,s,!1,e)&&r}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Lo(n[s]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};We.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ci(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&oc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Il=Y.JSON.stringify;function gb(){var t=Up;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mb{constructor(){this.h=this.g=null}add(e,n){const s=Lp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new yb,t=>t.reset());class yb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vb(t){Y.setTimeout(()=>{throw t},0)}function Mp(t,e){cc||_b(),lc||(cc(),lc=!0),Up.add(t,e)}var cc;function _b(){var t=Y.Promise.resolve(void 0);cc=function(){t.then(wb)}}var lc=!1,Up=new mb;function wb(){for(var t;t=gb();){try{t.h.call(t.g)}catch(n){vb(n)}var e=Lp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lc=!1}function Uo(t,e){We.call(this),this.h=t||1,this.g=e||Y,this.j=at(this.lb,this),this.l=Date.now()}et(Uo,We);U=Uo.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Xe(this,"tick"),this.ca&&(Tl(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Uo.X.M.call(this),Tl(this),delete this.g};function Sl(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function Fp(t){t.g=Sl(()=>{t.g=null,t.i&&(t.i=!1,Fp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Eb extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fp(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(t){Dn.call(this),this.h=t,this.g={}}et($r,Dn);var Eh=[];function $p(t,e,n,s){Array.isArray(n)||(n&&(Eh[0]=n.toString()),n=Eh);for(var r=0;r<n.length;r++){var i=xp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Vp(t){vl(t.g,function(e,n){this.g.hasOwnProperty(n)&&wl(e)},t),t.g={}}$r.prototype.M=function(){$r.X.M.call(this),Vp(this)};$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fo(){this.g=!0}Fo.prototype.Aa=function(){this.g=!1};function bb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Ib(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Is(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sb(t,n)+(s?" "+s:"")})}function Tb(t,e){t.info(function(){return"TIMEOUT: "+e})}Fo.prototype.info=function(){};function Sb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Il(n)}catch{return e}}var ps={},bh=null;function $o(){return bh=bh||new We}ps.Pa="serverreachability";function Bp(t){ct.call(this,ps.Pa,t)}et(Bp,ct);function Vr(t){const e=$o();Xe(e,new Bp(e))}ps.STAT_EVENT="statevent";function jp(t,e){ct.call(this,ps.STAT_EVENT,t),this.stat=e}et(jp,ct);function dt(t){const e=$o();Xe(e,new jp(e,t))}ps.Qa="timingevent";function Hp(t,e){ct.call(this,ps.Qa,t),this.size=e}et(Hp,ct);function ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Vo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},qp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cl(){}Cl.prototype.h=null;function Ih(t){return t.h||(t.h=t.i())}function Wp(){}var ci={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Al(){ct.call(this,"d")}et(Al,ct);function kl(){ct.call(this,"c")}et(kl,ct);var uc;function Bo(){}et(Bo,Cl);Bo.prototype.g=function(){return new XMLHttpRequest};Bo.prototype.i=function(){return{}};uc=new Bo;function li(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new $r(this),this.O=Cb,t=rc?125:void 0,this.T=new Uo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kp}function Kp(){this.i=null,this.g="",this.h=!1}var Cb=45e3,hc={},ro={};U=li.prototype;U.setTimeout=function(t){this.O=t};function dc(t,e,n){t.K=1,t.v=Ho(on(e)),t.s=n,t.P=!0,zp(t,null)}function zp(t,e){t.F=Date.now(),ui(t),t.A=on(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),tg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Kp,t.g=bg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Eb(at(t.La,t,t.g),t.N)),$p(t.S,t.g,"readystatechange",t.ib),e=t.H?kp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Vr(),bb(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&nn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||rc||this.g&&(this.h.h||this.g.fa()||Ah(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Vr(3):Vr(2)),jo(this);var n=this.g.aa();this.Y=n;t:if(Gp(this)){var s=Ah(this.g);t="";var r=s.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){zn(this),br(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ib(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!no(a)){var l=a;break t}}l=null}if(n=l)Is(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fc(this,n);else{this.i=!1,this.o=3,dt(12),zn(this),br(this);break e}}this.P?(Qp(this,u,o),rc&&this.i&&u==3&&($p(this.S,this.T,"tick",this.hb),this.T.start())):(Is(this.j,this.m,o,null),fc(this,o)),u==4&&zn(this),this.i&&!this.I&&(u==4?vg(this.l,this):(this.i=!1,ui(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),zn(this),br(this)}}}catch{}finally{}};function Gp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Qp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Ab(t,n),r==ro){e==4&&(t.o=4,dt(14),s=!1),Is(t.j,t.m,null,"[Incomplete Response]");break}else if(r==hc){t.o=4,dt(15),Is(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Is(t.j,t.m,r,null),fc(t,r);Gp(t)&&r!=ro&&r!=hc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ll(e),e.K=!0,dt(11))):(Is(t.j,t.m,n,"[Invalid Chunked Response]"),zn(t),br(t))}U.hb=function(){if(this.g){var t=nn(this.g),e=this.g.fa();this.C<e.length&&(jo(this),Qp(this,t,e),this.i&&t!=4&&ui(this))}};function Ab(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ro:(n=Number(e.substring(n,s)),isNaN(n)?hc:(s+=1,s+n>e.length?ro:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,zn(this)};function ui(t){t.V=Date.now()+t.O,Yp(t,t.O)}function Yp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ai(at(t.gb,t),e)}function jo(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Tb(this.j,this.A),this.K!=2&&(Vr(),dt(17)),zn(this),this.o=2,br(this)):Yp(this,this.V-t)};function br(t){t.l.G==0||t.I||vg(t.l,t)}function zn(t){jo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tl(t.T),Vp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||pc(n.h,t))){if(!t.J&&pc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ao(n),Ko(n);else break e;Pl(n),dt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ai(at(n.cb,n),6e3));if(1>=rg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gn(n,11)}else if((t.J||n.g==t)&&ao(n),!no(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Rl(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,Ae(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Eg(s,s.H?s.ka:null,s.V),o.J){ig(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(jo(a),ui(a)),s.g=o}else mg(s);0<n.i.length&&zo(n)}else l[0]!="stop"&&l[0]!="close"||Gn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Gn(n,7):Dl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Vr(4)}catch{}}function kb(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Do(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Rb(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Do(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Jp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Do(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Rb(t),s=kb(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof es){this.h=e!==void 0?e:t.h,io(this,t.j),this.s=t.s,this.g=t.g,oo(this,t.m),this.l=t.l,e=t.i;var n=new Br;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Th(this,n),this.o=t.o}else t&&(n=String(t).match(Xp))?(this.h=!!e,io(this,n[1]||"",!0),this.s=pr(n[2]||""),this.g=pr(n[3]||"",!0),oo(this,n[4]),this.l=pr(n[5]||"",!0),Th(this,n[6]||"",!0),this.o=pr(n[7]||"")):(this.h=!!e,this.i=new Br(null,this.h))}es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gr(e,Sh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gr(e,Sh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(gr(n,n.charAt(0)=="/"?Db:Ob,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gr(n,Lb)),t.join("")};function on(t){return new es(t)}function io(t,e,n){t.j=n?pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Th(t,e,n){e instanceof Br?(t.i=e,Mb(t.i,t.h)):(n||(e=gr(e,Pb)),t.i=new Br(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ho(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sh=/[#\/\?@]/g,Ob=/[#\?:]/g,Db=/[#\?]/g,Pb=/[#\?@]/g,Lb=/#/g;function Br(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pn(t){t.g||(t.g=new Map,t.h=0,t.i&&xb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Br.prototype;U.add=function(t,e){Pn(this),this.i=null,t=Xs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zp(t,e){Pn(t),e=Xs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eg(t,e){return Pn(t),e=Xs(t,e),t.g.has(e)}U.forEach=function(t,e){Pn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Pn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Pn(this);let e=[];if(typeof t=="string")eg(this,t)&&(e=e.concat(this.g.get(Xs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Pn(this),this.i=null,t=Xs(this,t),eg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function tg(t,e,n){Zp(t,e),0<n.length&&(t.i=null,t.g.set(Xs(t,e),ml(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Xs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Mb(t,e){e&&!t.j&&(Pn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Zp(this,s),tg(this,r,n))},t)),t.j=e}var Ub=class{constructor(t,e){this.h=t,this.g=e}};function ng(t){this.l=t||Fb,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fb=10;function sg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rg(t){return t.h?1:t.g?t.g.size:0}function pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rl(t,e){t.g?t.g.add(e):t.h=e}function ig(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ng.prototype.cancel=function(){if(this.i=og(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function og(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ml(t.i)}function xl(){}xl.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};xl.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function $b(){this.g=new xl}function Vb(t,e,n){const s=n||"";try{Jp(t,function(r,i){let o=r;ii(r)&&(o=Il(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Bb(t,e){const n=new Fo;if(Y.Image){const s=new Image;s.onload=Si(Ai,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Si(Ai,n,s,"TestLoadImage: error",!1,e),s.onabort=Si(Ai,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Si(Ai,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ai(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function hi(t){this.l=t.ac||null,this.j=t.jb||!1}et(hi,Cl);hi.prototype.g=function(){return new qo(this.l,this.j)};hi.prototype.i=function(t){return function(){return t}}({});function qo(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(qo,We);var Nl=0;U=qo.prototype;U.open=function(t,e){if(this.readyState!=Nl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=Nl};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ag(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ag(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?di(this):jr(this),this.readyState==3&&ag(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,di(this))};U.Ua=function(t){this.g&&(this.response=t,di(this))};U.ga=function(){this.g&&di(this)};function di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jb=Y.JSON.parse;function De(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cg,this.K=this.L=!1}et(De,We);var cg="",Hb=/^https?$/i,qb=["POST","PUT"];U=De.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uc.g(),this.C=this.u?Ih(this.u):Ih(uc),this.g.onreadystatechange=at(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ch(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Y.FormData&&t instanceof Y.FormData,!(0<=Tp(qb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hg(this),0<this.B&&((this.K=Wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.qa,this)):this.A=Sl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ch(this,i)}};function Wb(t){return Vs&&cb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof gl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Ch(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lg(t),Wo(t)}function lg(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),Wo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wo(this,!0)),De.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?ug(this):this.fb())};U.fb=function(){ug(this)};function ug(t){if(t.h&&typeof gl!="undefined"&&(!t.C[1]||nn(t)!=4||t.aa()!=2)){if(t.v&&nn(t)==4)Sl(t.Ha,0,t);else if(Xe(t,"readystatechange"),nn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Xp)[1]||null;if(!r&&Y.self&&Y.self.location){var i=Y.self.location.protocol;r=i.substr(0,i.length-1)}s=!Hb.test(r?r.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lg(t)}}finally{Wo(t)}}}}function Wo(t,e){if(t.g){hg(t);const n=t.g,s=t.C[0]?to:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function hg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function nn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jb(e)}};function Ah(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dg(t){let e="";return vl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ol(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=dg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function lr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fg(t){this.Ca=0,this.i=[],this.j=new Fo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lr("baseRetryDelayMs",5e3,t),this.bb=lr("retryDelaySeedMs",1e4,t),this.$a=lr("forwardChannelMaxRetries",2,t),this.ta=lr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ng(t&&t.concurrentRequestLimit),this.Fa=new $b,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=fg.prototype;U.ma=8;U.G=1;function Dl(t){if(pg(t),t.G==3){var e=t.U++,n=on(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),fi(t,n),e=new li(t,t.j,e,void 0),e.K=2,e.v=Ho(on(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=bg(e.l,null),e.g.da(e.v)),e.F=Date.now(),ui(e)}wg(t)}function Ko(t){t.g&&(Ll(t),t.g.cancel(),t.g=null)}function pg(t){Ko(t),t.u&&(Y.clearTimeout(t.u),t.u=null),ao(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function zo(t){sg(t.h)||t.m||(t.m=!0,Mp(t.Ja,t),t.C=0)}function Kb(t,e){return rg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ai(at(t.Ja,t,e),_g(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new li(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=kp(i),Rp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gg(this,r,e),n=on(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),fi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(dg(i)))+"&"+e:this.o&&Ol(n,this.o,i)),Rl(this.h,r),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),r.Z=!0,dc(r,n,null)):dc(r,n,e),this.G=2}}else this.G==3&&(t?kh(this,t):this.i.length==0||sg(this.h)||kh(this))};function kh(t,e){var n;e?n=e.m:n=t.U++;const s=on(t.F);Ae(s,"SID",t.I),Ae(s,"RID",n),Ae(s,"AID",t.T),fi(t,s),t.o&&t.s&&Ol(s,t.o,t.s),n=new li(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=gg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rl(t.h,n),dc(n,s,e)}function fi(t,e){t.ia&&vl(t.ia,function(n,s){Ae(e,s,n)}),t.l&&Jp({},function(n,s){Ae(e,s,n)})}function gg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?at(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Vb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function mg(t){t.g||t.u||(t.Z=1,Mp(t.Ia,t),t.A=0)}function Pl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ai(at(t.Ia,t),_g(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,yg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ai(at(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),Ko(this),yg(this))};function Ll(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function yg(t){t.g=new li(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=on(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),fi(t,e),t.o&&t.s&&Ol(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ho(on(e)),n.s=null,n.P=!0,zp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ko(this),Pl(this),dt(19))};function ao(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function vg(t,e){var n=null;if(t.g==e){ao(t),Ll(t),t.g=null;var s=2}else if(pc(t.h,e))n=e.D,ig(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=$o(),Xe(s,new Hp(s,n)),zo(t)}else mg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Kb(t,e)||s==2&&Pl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Gn(t,5);break;case 4:Gn(t,10);break;case 3:Gn(t,6);break;default:Gn(t,2)}}}function _g(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Gn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=at(t.kb,t);n||(n=new es("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||io(n,"https"),Ho(n)),Bb(n.toString(),s)}else dt(2);t.G=0,t.l&&t.l.va(e),wg(t),pg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function wg(t){if(t.G=0,t.la=[],t.l){const e=og(t.h);(e.length!=0||t.i.length!=0)&&(yh(t.la,e),yh(t.la,t.i),t.h.i.length=0,ml(t.i),t.i.length=0),t.l.ua()}}function Eg(t,e,n){var s=n instanceof es?on(n):new es(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),oo(s,s.m);else{var r=Y.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new es(null,void 0);s&&io(i,s),e&&(i.g=e),r&&oo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ma),fi(t,s),s}function bg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new hi({jb:!0})):new De(t.ra),e.Ka(t.H),e}function Ig(){}U=Ig.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function co(){if(Vs&&!(10<=Number(lb)))throw Error("Environmental error: no available transport.")}co.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){We.call(this),this.g=new fg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!no(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!no(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}et(bt,We);bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Eg(t,null,t.V),zo(t)};bt.prototype.close=function(){Dl(this.g)};bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Il(t),t=n);e.i.push(new Ub(e.ab++,t)),e.G==3&&zo(e)};bt.prototype.M=function(){this.g.l=null,delete this.j,Dl(this.g),delete this.g,bt.X.M.call(this)};function Tg(t){Al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(Tg,Al);function Sg(){kl.call(this),this.status=1}et(Sg,kl);function Zs(t){this.g=t}et(Zs,Ig);Zs.prototype.xa=function(){Xe(this.g,"a")};Zs.prototype.wa=function(t){Xe(this.g,new Tg(t))};Zs.prototype.va=function(t){Xe(this.g,new Sg)};Zs.prototype.ua=function(){Xe(this.g,"b")};co.prototype.createWebChannel=co.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;Vo.NO_ERROR=0;Vo.TIMEOUT=8;Vo.HTTP_ERROR=6;qp.COMPLETE="complete";Wp.EventType=ci;ci.OPEN="a";ci.CLOSE="b";ci.ERROR="c";ci.MESSAGE="d";We.prototype.listen=We.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Oa;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Sa;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;De.prototype.setWithCredentials=De.prototype.Ka;var zb=function(){return new co},Gb=function(){return $o()},Ra=Vo,Qb=qp,Yb=ps,Rh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Jb=hi,ki=Wp,Xb=De;const xh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new nl("@firebase/firestore");function Nh(){return ls.logLevel}function $(t,...e){if(ls.logLevel<=de.DEBUG){const n=e.map(Ml);ls.debug(`Firestore (${er}): ${t}`,...n)}}function an(t,...e){if(ls.logLevel<=de.ERROR){const n=e.map(Ml);ls.error(`Firestore (${er}): ${t}`,...n)}}function gc(t,...e){if(ls.logLevel<=de.WARN){const n=e.map(Ml);ls.warn(`Firestore (${er}): ${t}`,...n)}}function Ml(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function Ue(t,e){t||se()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class eI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tI{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ts,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ts)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new Cg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new nt(e)}}class nI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new nI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.A=n.token,new rI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=oI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new yt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new yt(0,0))}static max(){return new re(new yt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,s){n===void 0?n=0:n>e.length&&se(),s===void 0?s=e.length-n:s>e.length-n&&se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Hr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Hr{construct(e,n,s){return new Ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const cI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Hr{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return cI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new z(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ne.fromString(e))}static fromName(e){return new q(Ne.fromString(e).popFirst(5))}static empty(){return new q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ne(e.slice()))}}function lI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new yt(n+1,0):new yt(n,s));return new xn(r,q.empty(),e)}function uI(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xn(re.min(),q.empty(),-1)}static max(){return new xn(re.max(),q.empty(),-1)}}function hI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==dI)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function pi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Go(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fl.at=-1;class Ke{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ri(this.root,e,this.comparator,!0)}}class Ri{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ge.RED,this.left=r!=null?r:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dh(this.data.getIterator())}getIteratorFrom(e){return new Dh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Dh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new ns([])}unionWith(e){let n=new Be(gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ns(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const gI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=gI.exec(t);if(Ue(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function js(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kg(t){const e=t.mapValue.fields.__previous_value__;return Ag(e)?kg(e):e}function qr(t){const e=Nn(t.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}function Qo(t){return t==null}function mc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ag(t)?4:yI(t)?9007199254740991:10:se()}function Yt(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qr(t).isEqual(qr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Nn(s.timestampValue),o=Nn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return js(s.bytesValue).isEqual(js(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?mc(i)===mc(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Oh(i)!==Oh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function Kr(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=us(t),s=us(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ph(t.timestampValue,e.timestampValue);case 4:return Ph(qr(t),qr(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(r,i){const o=js(r),a=js(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ye(o[c],a[c]);if(l!==0)return l}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ye(Me(r.latitude),Me(i.latitude));return o!==0?o:ye(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Hs(o[c],a[c]);if(l)return l}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===xi.mapValue&&i===xi.mapValue)return 0;if(r===xi.mapValue)return 1;if(i===xi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ye(a[u],l[u]);if(h!==0)return h;const d=Hs(o[a[u]],c[l[u]]);if(d!==0)return d}return ye(a.length,l.length)}(t.mapValue,e.mapValue);default:throw se()}}function Ph(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Nn(t),s=Nn(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function Os(t){return yc(t)}function yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Nn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?js(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=yc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yc(s.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function vc(t){return!!t&&"integerValue"in t}function $l(t){return!!t&&"arrayValue"in t}function Lh(t){return!!t&&"nullValue"in t}function Mh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Go(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ir(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ir(n)}setAll(e){let n=gt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ir(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];xa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Go(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qt(Ir(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Qe(e,0,re.min(),re.min(),qt.empty(),0)}static newFoundDocument(e,n,s){return new Qe(e,1,n,re.min(),s,0)}static newNoDocument(e,n){return new Qe(e,2,n,re.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,re.min(),qt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Uh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new vI(t,e,n,s,r,i,o)}function Vl(t){const e=he(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Os(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Qo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Os(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Os(s)).join(",")),e.ht=n}return e.ht}function _I(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Os(s.value)}`;var s}).join(", ")}]`),Qo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Os(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Os(n)).join(",")),`Target(${e})`}function Bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!AI(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Yt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$h(t.startAt,e.startAt)&&$h(t.endAt,e.endAt)}function _c(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class mt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new wI(e,n,s):n==="array-contains"?new II(e,s):n==="in"?new TI(e,s):n==="not-in"?new SI(e,s):n==="array-contains-any"?new CI(e,s):new mt(e,n,s)}static lt(e,n,s){return n==="in"?new EI(e,s):new bI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Hs(n,this.value)):n!==null&&us(this.value)===us(n)&&this.ft(Hs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class wI extends mt{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.ft(n)}}class EI extends mt{constructor(e,n){super(e,"in",n),this.keys=Rg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bI extends mt{constructor(e,n){super(e,"not-in",n),this.keys=Rg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Rg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class II extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $l(n)&&Kr(n.arrayValue,this.value)}}class TI extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kr(this.value.arrayValue,n)}}class SI extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kr(this.value.arrayValue,n)}}class CI extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Kr(this.value.arrayValue,s))}}class lo{constructor(e,n){this.position=e,this.inclusive=n}}class Tr{constructor(e,n="asc"){this.field=e,this.dir=n}}function AI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Fh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Hs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $h(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function kI(t,e,n,s,r,i,o,a){return new Yo(t,e,n,s,r,i,o,a)}function xg(t){return new Yo(t)}function Vh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xI(t){for(const e of t.filters)if(e.dt())return e.field;return null}function NI(t){return t.collectionGroup!==null}function zr(t){const e=he(t);if(e._t===null){e._t=[];const n=xI(e),s=RI(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Tr(n)),e._t.push(new Tr(gt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Tr(gt.keyField(),i))}}}return e._t}function cn(t){const e=he(t);if(!e.wt)if(e.limitType==="F")e.wt=Uh(e.path,e.collectionGroup,zr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of zr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Tr(i.field,o))}const s=e.endAt?new lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new lo(e.startAt.position,e.startAt.inclusive):null;e.wt=Uh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function wc(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jo(t,e){return Bl(cn(t),cn(e))&&t.limitType===e.limitType}function Ng(t){return`${Vl(cn(t))}|lt:${t.limitType}`}function Ec(t){return`Query(target=${_I(cn(t))}; limitType=${t.limitType})`}function jl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Fh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,zr(n),s)||n.endAt&&!function(r,i,o){const a=Fh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,zr(n),s))}(t,e)}function OI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Og(t){return(e,n)=>{let s=!1;for(const r of zr(t)){const i=DI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function DI(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Hs(a,c):se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function LI(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this._=void 0}}function MI(t,e,n){return t instanceof bc?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof uo?Dg(t,e):t instanceof ho?Pg(t,e):function(s,r){const i=FI(s,r),o=Bh(i)+Bh(s.yt);return vc(i)&&vc(s.yt)?LI(o):PI(s.It,o)}(t,e)}function UI(t,e,n){return t instanceof uo?Dg(t,e):t instanceof ho?Pg(t,e):n}function FI(t,e){return t instanceof Ic?vc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class bc extends Xo{}class uo extends Xo{constructor(e){super(),this.elements=e}}function Dg(t,e){const n=Lg(e);for(const s of t.elements)n.some(r=>Yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ho extends Xo{constructor(e){super(),this.elements=e}}function Pg(t,e){let n=Lg(e);for(const s of t.elements)n=n.filter(r=>!Yt(r,s));return{arrayValue:{values:n}}}class Ic extends Xo{constructor(e,n){super(),this.It=e,this.yt=n}}function Bh(t){return Me(t.integerValue||t.doubleValue)}function Lg(t){return $l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $I(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof uo&&s instanceof uo||n instanceof ho&&s instanceof ho?Bs(n.elements,s.elements,Yt):n instanceof Ic&&s instanceof Ic?Yt(n.yt,s.yt):n instanceof bc&&s instanceof bc}(t.transform,e.transform)}class ss{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ss}static exists(e){return new ss(void 0,e)}static updateTime(e){return new ss(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $i(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hl{}function Mg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new BI(t.key,ss.none()):new ql(t.key,t.data,ss.none());{const n=t.data,s=qt.empty();let r=new Be(gt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Zo(t.key,s,new ns(r.toArray()),ss.none())}}function VI(t,e,n){t instanceof ql?function(s,r,i){const o=s.value.clone(),a=Hh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zo?function(s,r,i){if(!$i(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Hh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ug(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Sr(t,e,n,s){return t instanceof ql?function(r,i,o,a){if(!$i(r.precondition,i))return o;const c=r.value.clone(),l=qh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Zo?function(r,i,o,a){if(!$i(r.precondition,i))return o;const c=qh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ug(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return $i(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function jh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bs(n,s,(r,i)=>$I(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ql extends Hl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zo extends Hl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ug(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Hh(t,e,n){const s=new Map;Ue(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,UI(o,a,n[r]))}return s}function qh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,MI(i,o,e))}return s}class BI extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ae;function Fg(t){if(t===void 0)return an("GRPC error has no .code"),N.UNKNOWN;switch(t){case Le.OK:return N.OK;case Le.CANCELLED:return N.CANCELLED;case Le.UNKNOWN:return N.UNKNOWN;case Le.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Le.INTERNAL:return N.INTERNAL;case Le.UNAVAILABLE:return N.UNAVAILABLE;case Le.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Le.NOT_FOUND:return N.NOT_FOUND;case Le.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Le.ABORTED:return N.ABORTED;case Le.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Le.DATA_LOSS:return N.DATA_LOSS;default:return se()}}(ae=Le||(Le={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Go(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return pI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new Ke(q.comparator);function On(){return HI}const $g=new Ke(q.comparator);function mr(...t){let e=$g;for(const n of t)e=e.insert(n.key,n);return e}function qI(t){let e=$g;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Qn(){return Cr()}function Vg(){return Cr()}function Cr(){return new tr(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ke(q.comparator);const WI=new Be(q.comparator);function le(...t){let e=WI;for(const n of t)e=e.add(n);return e}const KI=new Be(ye);function Bg(){return KI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ea(re.min(),r,Bg(),On(),le())}}class gi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new gi(s,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class jg{constructor(e,n){this.targetId=e,this.At=n}}class Hg{constructor(e,n,s=ut.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wh{constructor(){this.Rt=0,this.bt=zh(),this.Pt=ut.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=le(),n=le(),s=le();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:se()}}),new gi(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=zh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class zI{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=On(),this.qt=Kh(),this.Kt=new Be(ye)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(_c(i))if(s===0){const o=new q(i.path);this.jt(n,o,Qe.newNoDocument(o,re.min()))}else Ue(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&_c(a.target)){const c=new q(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Qe.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=le();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ea(e,n,this.Kt,this.Ut,s);return this.Ut=On(),this.qt=Kh(),this.Kt=new Be(ye),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Wh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Be(ye),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Wh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Kh(){return new Ke(q.comparator)}function zh(){return new Ke(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class YI{constructor(e,n){this.databaseId=e,this.gt=n}}function JI(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XI(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Gr(t){return Ue(!!t),re.fromTimestamp(function(e){const n=Nn(e);return new yt(n.seconds,n.nanos)}(t))}function ZI(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qg(t){const e=Ne.fromString(t);return Ue(zg(e)),e}function Na(t,e){const n=qg(e);if(n.get(1)!==t.databaseId.projectId)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Wg(n))}function Tc(t,e){return ZI(t.databaseId,e)}function eT(t){const e=qg(t);return e.length===4?Ne.emptyPath():Wg(e)}function Gh(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wg(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Ue(l===void 0||typeof l=="string"),ut.fromBase64String(l||"")):(Ue(l===void 0||l instanceof Uint8Array),ut.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?N.UNKNOWN:Fg(c.code);return new z(l,c.message||"")}(o);n=new Hg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Na(t,s.document.name),i=Gr(s.document.updateTime),o=new qt({mapValue:{fields:s.document.fields}}),a=Qe.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Vi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Na(t,s.document),i=s.readTime?Gr(s.readTime):re.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Na(t,s.document),i=s.removedTargetIds||[];n=new Vi([],i,r,null)}else{if(!("filter"in e))return se();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new jI(r),o=s.targetId;n=new jg(o,i)}}return n}function nT(t,e){return{documents:[Tc(t,e.path)]}}function sT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Tc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Mh(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NAN"}};if(Lh(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Mh(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NOT_NAN"}};if(Lh(h.value))return{unaryFilter:{field:vs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(h.field),op:aT(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:vs(u.field),direction:oT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Qo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rT(t){let e=eT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ue(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Kg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Tr(Ts(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Qo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new lo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new lo(d,h)}(n.endAt)),kI(e,r,o,i,a,"F",c,l)}function iT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kg(t){return t?t.unaryFilter!==void 0?[lT(t)]:t.fieldFilter!==void 0?[cT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Kg(e)).reduce((e,n)=>e.concat(n)):se():[]}function oT(t){return GI[t]}function aT(t){return QI[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Ts(t){return gt.fromServerFormat(t.fieldPath)}function cT(t){return mt.create(Ts(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function lT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ts(t.unaryFilter.field);return mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ts(t.unaryFilter.field);return mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ts(t.unaryFilter.field);return mt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ts(t.unaryFilter.field);return mt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function zg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&VI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Sr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Sr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Mg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,s)=>jh(n,s))&&Bs(this.baseMutations,e.baseMutations,(n,s)=>jh(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,r,i=re.min(),o=re.min(),a=ut.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.re=e}}function fT(t){const e=rT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.Ye=new gT}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(xn.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class gT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Be(Ne.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Be(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new qs(0)}static vn(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(){this.changes=new tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Sr(s.mutation,r,ns.empty(),yt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=mr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=On();const o=Cr(),a=Cr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Zo)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Sr(u.mutation,l,u.mutation.getFieldMask(),yt.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new yT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Cr();let r=new Ke((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ns.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||le()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vg();u.forEach(d=>{if(!i.has(d)){const g=Mg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(Qn());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:qI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=mr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=mr();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Yo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Qe.newInvalidDocument(l)))});let o=mr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Sr(l.mutation,c,ns.empty(),yt.now()),jl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Qe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Gr(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:fT(s.bundledQuery),readTime:Gr(s.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.overlays=new Ke(q.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Qn();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=Qn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Qn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hT(n,s));let i=this.es.get(n);i===void 0&&(i=le(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.ns=new Be(je.ss),this.rs=new Be(je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new je(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new je(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new Ne([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ne([])),s=new je(n,e),r=new je(n,e+1);let i=le();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||ye(e._s,n._s)}static os(e,n){return ye(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Be(je.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Be(ye);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),I.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new je(new q(i),0);let a=new Be(ye);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ue(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return I.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new je(n,0),r=this.gs.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.Es=e,this.docs=new Ke(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=On();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),I.resolve(s)}getAllFromCollection(e,n,s){let r=On();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||hI(uI(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,r){se()}As(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new IT(this)}getSize(e){return I.resolve(this.size)}}class IT extends mT{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.persistence=e,this.Rs=new tr(n=>Vl(n),Bl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wl,this.targetCount=0,this.vs=qs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Fl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new TT(this),this.indexManager=new pT,this.remoteDocumentCache=function(s){return new bT(s)}(s=>this.referenceDelegate.xs(s)),this.It=new dT(n),this.Ns=new _T(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new ET(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new CT(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return I.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class CT extends fI{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.Fs=new Wl,this.$s=null}static Bs(e){return new Kl(e)}get Ls(){if(this.$s)return this.$s;throw se()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,s=>{const r=q.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=le(),r=le();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Vh(n))return I.resolve(null);let s=cn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=wc(n,null,"F"),s=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=le(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,wc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Vh(n)||r.isEqual(re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Nh()<=de.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ec(n)),this.Bi(e,o,n,lI(r,-1)))})}Fi(e,n){let s=new Be(Og(e));return n.forEach((r,i)=>{jl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Nh()<=de.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ec(n)),this.Ni.getDocumentsMatchingQuery(e,n,xn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ke(ye),this.qi=new tr(i=>Vl(i),Bl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function RT(t,e,n,s){return new kT(t,e,n,s)}async function Gg(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=le();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Qg(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function xT(t,e){const n=he(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ut.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,b,R){return y.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=On(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(NT(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(re.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function NT(t,e,n){let s=le(),r=le();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=On();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function OT(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new rs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Sc(t,e,n){const s=he(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!pi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Qh(t,e,n){const s=he(t);let r=re.min(),i=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=he(a),h=u.qi.get(l);return h!==void 0?I.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,cn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:le())).next(a=>(DT(s,OI(e),a),{documents:a,Hi:i})))}function DT(t,e,n){let s=t.Ki.get(e)||re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Yh{constructor(){this.activeTargetIds=Bg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PT{constructor(){this.Lr=new Yh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Yh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw gc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+er,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=MT[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Xb;a.setWithCredentials(!0),a.listenOnce(Qb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ra.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ra.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new z(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(y)>=0?y:N.UNKNOWN}(h.status);o(new z(d,h.message))}else o(new z(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(N.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zb(),o=Gb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Jb({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");$("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new UT({Hr:y=>{h?$("Connection","Not sending because WebChannel is closed:",y):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",y),l.send(y))},Jr:()=>l.close()}),g=(y,b,R)=>{y.listen(b,A=>{try{R(A)}catch(P){setTimeout(()=>{throw P},0)}})};return g(l,ki.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),g(l,ki.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.io())}),g(l,ki.EventType.ERROR,y=>{h||(h=!0,gc("Connection","WebChannel transport errored:",y),d.io(new z(N.UNAVAILABLE,"The operation could not be completed")))}),g(l,ki.EventType.MESSAGE,y=>{var b;if(!h){const R=y.data[0];Ue(!!R);const A=R,P=A.error||((b=A[0])===null||b===void 0?void 0:b.error);if(P){$("Connection","WebChannel received error:",P);const G=P.status;let Q=function(Ce){const xe=Le[Ce];if(xe!==void 0)return Fg(xe)}(G),ue=P.message;Q===void 0&&(Q=N.INTERNAL,ue="Unknown error status: "+G+" with message "+P.message),h=!0,d.io(new z(Q,ue)),l.close()}else $("Connection","WebChannel received:",R),d.ro(R)}}),g(o,Yb.STAT_EVENT,y=>{y.stat===Rh.PROXY?$("Connection","Detected buffering proxy"):y.stat===Rh.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Oa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){return new YI(t,!0)}class Jg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Jg(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new z(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VT extends $T{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=tT(this.It,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?Gr(i.readTime):re.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Gh(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=_c(a)?{documents:nT(r,a)}:{query:sT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=XI(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=JI(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=iT(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Gh(this.It),n.removeTarget=e,this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=r,this.su=!1}iu(){if(this.su)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(N.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.So._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(N.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class jT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(an(n),this.uu=!1):$("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(o=>{s.enqueueAndForget(async()=>{yi(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=he(a);c.wu.add(4),await mi(c),c.yu.set("Unknown"),c.wu.delete(4),await ta(c)}(this))})}),this.yu=new jT(s,r)}}async function ta(t){if(yi(t))for(const e of t.mu)await e(!0)}async function mi(t){for(const e of t.mu)await e(!1)}function Xg(t,e){const n=he(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Yl(n)?Ql(n):nr(n).Oo()&&Gl(n,e))}function Zg(t,e){const n=he(t),s=nr(n);n._u.delete(e),s.Oo()&&em(n,e),n._u.size===0&&(s.Oo()?s.$o():yi(n)&&n.yu.set("Unknown"))}function Gl(t,e){t.pu.Mt(e.targetId),nr(t).Ho(e)}function em(t,e){t.pu.Mt(e),nr(t).Jo(e)}function Ql(t){t.pu=new zI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),nr(t).start(),t.yu.cu()}function Yl(t){return yi(t)&&!nr(t).ko()&&t._u.size>0}function yi(t){return he(t).wu.size===0}function tm(t){t.pu=void 0}async function qT(t){t._u.forEach((e,n)=>{Gl(t,e)})}async function WT(t,e){tm(t),Yl(t)?(t.yu.lu(e),Ql(t)):t.yu.set("Unknown")}async function KT(t,e,n){if(t.yu.set("Online"),e instanceof Hg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xh(t,s)}else if(e instanceof Vi?t.pu.Gt(e):e instanceof jg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(re.min()))try{const s=await Qg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(ut.EMPTY_BYTE_STRING,c.snapshotVersion)),em(r,a);const l=new rs(c.target,a,1,c.sequenceNumber);Gl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Xh(t,s)}}async function Xh(t,e,n){if(!pi(e))throw e;t.wu.add(1),await mi(t),t.yu.set("Offline"),n||(n=()=>Qg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ta(t)})}async function Zh(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=yi(n);n.wu.add(3),await mi(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ta(n)}async function zT(t,e){const n=he(t);e?(n.wu.delete(2),await ta(n)):e||(n.wu.add(2),await mi(n),n.yu.set("Unknown"))}function nr(t){return t.Iu||(t.Iu=function(e,n,s){const r=he(e);return r.iu(),new VT(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:qT.bind(null,t),Zr:WT.bind(null,t),zo:KT.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Yl(t)?Ql(t):t.yu.set("Unknown")):(await t.Iu.stop(),tm(t))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Jl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nm(t,e){if(an("AsyncQueue",`${e}: ${t}`),pi(t))return new z(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=mr(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.Eu=new Ke(q.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ws{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ws(e,n,Ds.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.Ru=void 0,this.listeners=[]}}class QT{constructor(){this.queries=new tr(e=>Ng(e),Jo),this.onlineState="Unknown",this.bu=new Set}}async function YT(t,e){const n=he(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new GT),r)try{i.Ru=await n.onListen(s)}catch(o){const a=nm(o,`Initialization of query '${Ec(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&Xl(n)}async function JT(t,e){const n=he(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function XT(t,e){const n=he(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Ru=r}}s&&Xl(n)}function ZT(t,e,n){const s=he(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Xl(t){t.bu.forEach(e=>{e.next()})}class eS{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ws(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class tS{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=le(),this.mutatedKeys=le(),this.Gu=Og(e),this.Qu=new Ds(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new ed,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=jl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?y!==b&&(s.track({type:3,doc:g}),R=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),R=!0):d&&!g&&(s.track({type:1,doc:d}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ws(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ed,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=le(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new rm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new sm(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=le();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ws.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class nS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class sS{constructor(e){this.key=e,this.nc=!1}}class rS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new tr(a=>Ng(a),Jo),this.rc=new Map,this.oc=new Set,this.uc=new Ke(q.comparator),this.cc=new Map,this.ac=new Wl,this.hc={},this.lc=new Map,this.fc=qs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function iS(t,e){const n=dS(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await OT(n.localStore,cn(e));n.isPrimaryClient&&Xg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await oS(n,e,s,a==="current",o.resumeToken)}return r}async function oS(t,e,n,s,r){t._c=(h,d,g)=>async function(y,b,R,A){let P=b.view.Wu(R);P.$i&&(P=await Qh(y.localStore,b.query,!1).then(({documents:ue})=>b.view.Wu(ue,P)));const G=A&&A.targetChanges.get(b.targetId),Q=b.view.applyChanges(P,y.isPrimaryClient,G);return nd(y,b.targetId,Q.Xu),Q.snapshot}(t,h,d,g);const i=await Qh(t.localStore,e,!0),o=new tS(e,i.Hi),a=o.Wu(i.documents),c=gi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);nd(t,n,l.Xu);const u=new nS(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function aS(t,e){const n=he(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Jo(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Sc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Zg(n.remoteStore,s.targetId),Cc(n,s.targetId)}).catch(Ul)):(Cc(n,s.targetId),await Sc(n.localStore,s.targetId,!0))}async function im(t,e){const n=he(t);try{const s=await xT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ue(o.nc):r.removedDocuments.size>0&&(Ue(o.nc),o.nc=!1))}),await am(n,s,e)}catch(s){await Ul(s)}}function td(t,e,n){const s=he(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=he(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Xl(a)}(s.eventManager,e),r.length&&s.sc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cS(t,e,n){const s=he(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ke(q.comparator);o=o.insert(i,Qe.newNoDocument(i,re.min()));const a=le().add(i),c=new ea(re.min(),new Map,new Be(ye),o,a);await im(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Zl(s)}else await Sc(s.localStore,e,!1).then(()=>Cc(s,e,n)).catch(Ul)}function Cc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||om(t,s)})}function om(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Zg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Zl(t))}function nd(t,e,n){for(const s of n)s instanceof sm?(t.ac.addReference(s.key,e),lS(t,s)):s instanceof rm?($("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||om(t,s.key)):se()}function lS(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||($("SyncEngine","New document in limbo: "+n),t.oc.add(s),Zl(t))}function Zl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ne.fromString(e)),s=t.fc.next();t.cc.set(s,new sS(n)),t.uc=t.uc.insert(n,s),Xg(t.remoteStore,new rs(cn(xg(n.path)),s,2,Fl.at))}}async function am(t,e,n){const s=he(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=zl.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.zo(r),await async function(a,c){const l=he(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!pi(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Ui=l.Ui.insert(h,y)}}}(s.localStore,i))}async function uS(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Gg(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(N.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await am(n,s.ji)}}function hS(t,e){const n=he(t),s=n.cc.get(e);if(s&&s.nc)return le().add(s.key);{let r=le();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function dS(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cS.bind(null,e),e.sc.zo=XT.bind(null,e.eventManager),e.sc.wc=ZT.bind(null,e.eventManager),e}class fS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Yg(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return RT(this.persistence,new AT,e.initialUser,this.It)}yc(e){return new ST(Kl.Bs,this.It)}gc(e){return new PT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>td(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uS.bind(null,this.syncEngine),await zT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new QT}createDatastore(e){const n=Yg(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new FT(r));var r;return function(i,o,a,c){return new BT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>td(this.syncEngine,a,0),o=Jh.C()?new Jh:new LT,new HT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new rS(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=he(e);$("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await mi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t,e,n){if(!n)throw new z(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mS(t,e,n,s){if(e===!0&&s===!0)throw new z(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sd(t){if(q.isDocumentKey(t))throw new z(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function Ac(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yS(t);throw new z(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map;class id{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new id({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new id(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Zb;switch(n.type){case"gapi":const s=n.client;return new sI(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rd.get(e);n&&($("ComponentProvider","Removing Datastore"),rd.delete(e),n.terminate())}(this),Promise.resolve()}}function vS(t,e,n,s={}){var r;const i=(t=Ac(t,eu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&gc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=N_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new z(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(c)}t._authCredentials=new eI(new Cg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sr(this.firestore,e,this._key)}}class na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class Ps extends na{constructor(e,n,s){super(e,n,xg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sr(this.firestore,null,new q(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function _S(t,e,...n){if(t=Mt(t),gS("collection","path",e),t instanceof eu){const s=Ne.fromString(e,...n);return sd(s),new Ps(t,null,s)}{if(!(t instanceof sr||t instanceof Ps))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return sd(s),new Ps(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):an("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=aI.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=nm(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bS(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Gg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TS(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zh(e.remoteStore,i)),t.onlineComponents=e}async function TS(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await bS(t,new fS)),t.offlineComponents}async function SS(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await IS(t,new pS)),t.onlineComponents}async function CS(t){const e=await SS(t),n=e.eventManager;return n.onListen=iS.bind(null,e.syncEngine),n.onUnlisten=aS.bind(null,e.syncEngine),n}function AS(t,e,n={}){const s=new ts;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new wS({next:h=>{i.enqueueAndForget(()=>JT(r,u)),h.fromCache&&a.source==="server"?c.reject(new z(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new eS(o,l,{includeMetadataChanges:!0,ku:!0});return YT(r,u)}(await CS(t),t.asyncQueue,e,n,s)),s.promise}class kS{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Jg(this,"async_queue_retry"),this.Wc=()=>{const n=Oa();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ts;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!pi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw an("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Jl.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class cm extends eu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new kS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lm(this),this._firestoreClient.terminate()}}function RS(t,e){const n=typeof t=="object"?t:Hf(),s=typeof t=="string"?t:e||"(default)",r=rl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=k_("firestore");i&&vS(r,...i)}return r}function xS(t){return t._firestoreClient||lm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new mI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ES(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fo(ut.fromBase64String(e))}catch(n){throw new z(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fo(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}const OS=new RegExp("[~\\*/\\[\\]]");function DS(t,e,n){if(e.search(OS)>=0)throw od(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new um(...e.split("."))._internalPath}catch{throw od(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function od(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new z(N.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PS extends hm{data(){return super.data()}}function dm(t,e){return typeof e=="string"?DS(t,e):e instanceof um?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const s={};return Go(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new NS(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(qr(e));default:return null}}convertTimestamp(e){const n=Nn(e);return new yt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ne.fromString(e);Ue(zg(s));const r=new Wr(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class US extends hm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(dm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Bi extends US{data(e={}){return super.data(e)}}class FS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ni(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Bi(this._firestore,this._userDataWriter,s.key,s,new Ni(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ni(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ni(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:$S(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $S(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}class VS extends MS{constructor(e){super(),this.firestore=e}convertBytes(e){return new fo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sr(this.firestore,null,n)}}function BS(t){t=Ac(t,na);const e=Ac(t.firestore,cm),n=xS(e),s=new VS(e);return LS(t._query),AS(n,t._query).then(r=>new FS(e,s,t,r))}(function(t,e=!0){(function(n){er=n})(Xr),Fs(new is("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new cm(new tI(n.getProvider("auth-internal")),new iI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),An(xh,"3.7.1",t),An(xh,"3.7.1","esm2017")})();const jS={apiKey:"AIzaSyBvcdt48yeUss8pLK5IhMvsK9FYYbltSVU",authDomain:"run-pix.firebaseapp.com",projectId:"run-pix",storageBucket:"run-pix.appspot.com",messagingSenderId:"1008690560612",appId:"1:1008690560612:web:54f352b58d8983cddfe971",measurementId:"G-BV8G5NRLDP"};jf(jS);const wt=YE(),HS=RS();function qS(){return fm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function fm(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const WS=typeof Proxy=="function",KS="devtools-plugin:setup",zS="plugin:settings:set";let _s,kc;function GS(){var t;return _s!==void 0||(typeof window!="undefined"&&window.performance?(_s=!0,kc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(_s=!0,kc=global.perf_hooks.performance):_s=!1),_s}function QS(){return GS()?kc.now():Date.now()}class YS{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return QS()}},n&&n.on(zS,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function JS(t,e){const n=t,s=fm(),r=qS(),i=WS&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(KS,t,e);else{const o=i?new YS(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var pm="store";function At(t){return t===void 0&&(t=null),Kt(t!==null?t:pm)}function rr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function XS(t){return t!==null&&typeof t=="object"}function ZS(t){return t&&typeof t.then=="function"}function eC(t,e){return function(){return t(e)}}function gm(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function mm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;sa(t,n,[],t._modules.root,!0),tu(t,n,e)}function tu(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=ny(!0);c.run(function(){rr(i,function(l,u){o[u]=eC(l,t),a[u]=Ve(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=ln({data:e}),t._scope=c,t.strict&&iC(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function sa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=nu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=tC(t,o,n);s.forEachMutation(function(u,h){var d=o+h;nC(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;sC(t,d,g,l)}),s.forEachGetter(function(u,h){var d=o+h;rC(t,d,u,l)}),s.forEachChild(function(u,h){sa(t,e,n.concat(h),u,r)})}function tC(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=po(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=po(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return ym(t,e)}},state:{get:function(){return nu(t.state,n)}}}),r}function ym(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function nC(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function sC(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return ZS(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function rC(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function iC(t){Rs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function nu(t,e){return e.reduce(function(n,s){return n[s]},t)}function po(t,e,n){return XS(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var oC="vuex bindings",ad="vuex:mutations",Da="vuex:actions",ws="vuex",aC=0;function cC(t,e){JS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[oC]},function(n){n.addTimelineLayer({id:ad,label:"Vuex Mutations",color:cd}),n.addTimelineLayer({id:Da,label:"Vuex Actions",color:cd}),n.addInspector({id:ws,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ws)if(s.filter){var r=[];Em(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[wm(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ws){var r=s.nodeId;ym(e,r),s.state=hC(fC(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ws){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(ws),n.sendInspectorState(ws),n.addTimelineEvent({layerId:ad,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=aC++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Da,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Da,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var cd=8702998,lC=6710886,uC=16777215,vm={label:"namespaced",textColor:uC,backgroundColor:lC};function _m(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function wm(t,e){return{id:e||"root",label:_m(e),tags:t.namespaced?[vm]:[],children:Object.keys(t._children).map(function(n){return wm(t._children[n],e+n+"/")})}}function Em(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[vm]:[]}),Object.keys(e._children).forEach(function(r){Em(t,e._children[r],n,s+r+"/")})}function hC(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=dC(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?_m(o):o,editable:!1,value:Rc(function(){return i[o]})}})}return r}function dC(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Rc(function(){return t[n]})}else e[n]=Rc(function(){return t[n]})}),e}function fC(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Rc(t){try{return t()}catch(e){return e}}var Ut=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},bm={namespaced:{configurable:!0}};bm.namespaced.get=function(){return!!this._rawModule.namespaced};Ut.prototype.addChild=function(e,n){this._children[e]=n};Ut.prototype.removeChild=function(e){delete this._children[e]};Ut.prototype.getChild=function(e){return this._children[e]};Ut.prototype.hasChild=function(e){return e in this._children};Ut.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ut.prototype.forEachChild=function(e){rr(this._children,e)};Ut.prototype.forEachGetter=function(e){this._rawModule.getters&&rr(this._rawModule.getters,e)};Ut.prototype.forEachAction=function(e){this._rawModule.actions&&rr(this._rawModule.actions,e)};Ut.prototype.forEachMutation=function(e){this._rawModule.mutations&&rr(this._rawModule.mutations,e)};Object.defineProperties(Ut.prototype,bm);var gs=function(e){this.register([],e,!1)};gs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};gs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};gs.prototype.update=function(e){Im([],this.root,e)};gs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Ut(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&rr(n.modules,function(a,c){r.register(e.concat(c),a,s)})};gs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);!r||!r.runtime||n.removeChild(s)};gs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Im(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Im(t.concat(s),e.getChild(s),n.modules[s])}}function pC(t){return new vt(t)}var vt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new gs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,y){return l.call(o,d,g,y)},this.strict=r;var u=this._modules.root.state;sa(this,u,[],this._modules.root),tu(this,u),s.forEach(function(h){return h(n)})},su={state:{configurable:!0}};vt.prototype.install=function(e,n){e.provide(n||pm,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&cC(e,this)};su.state.get=function(){return this._state.data};su.state.set=function(t){};vt.prototype.commit=function(e,n,s){var r=this,i=po(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};vt.prototype.dispatch=function(e,n){var s=this,r=po(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};vt.prototype.subscribe=function(e,n){return gm(e,this._subscribers,n)};vt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return gm(s,this._actionSubscribers,n)};vt.prototype.watch=function(e,n,s){var r=this;return Rs(function(){return e(r.state,r.getters)},n,Object.assign({},s))};vt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};vt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),sa(this,this.state,e,this._modules.get(e),s.preserveState),tu(this,this.state)};vt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=nu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),mm(this)};vt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};vt.prototype.hotUpdate=function(e){this._modules.update(e),mm(this,!0)};vt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(vt.prototype,su);const gC={class:"w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center z-40"},mC={class:"flex container w-[100%]"},yC=C("div",{class:"flex items-center w-[80%]"},[C("div",null,[C("h1",{class:"text-primary text-xl"}," Firebase Auth Example ")])],-1),vC={class:"md:flex items-center w-[20%] sm:hidden justify-center"},_C={key:0},wC={key:1},EC={__name:"Nav",setup(t){const e=At(),n=Ve(()=>e.state.auth.userDetails);return zy(()=>wt.onAuthStateChanged(r=>{r?e.commit("successRequestUser",r):e.commit("failRequestUser","Fail to get user")})),(r,i)=>{const o=mf("router-link");return F(),W("div",gC,[C("div",mC,[yC,C("div",vC,[H(n).isSignIn?(F(),W("div",_C,[Z(o,{to:"/",class:"text-primary mr-2 hover:text-[#FF9000] transition ease-in-out"},{default:Je(()=>[Ee(" Home ")]),_:1}),Z(o,{to:"/profile",class:"text-primary mr-2 hover:text-[#FF9000] transition ease-in-out"},{default:Je(()=>[Ee(" Profile ")]),_:1})])):(F(),W("div",wC,[Z(o,{to:"/login",class:"text-primary mr-2 hover:text-[#FF9000] transition ease-in-out"},{default:Je(()=>[Ee(" Login ")]),_:1}),Z(o,{to:"/register",class:"text-primary mr-2 hover:text-[#FF9000] transition ease-in-out"},{default:Je(()=>[Ee(" Register ")]),_:1})]))])])])}}},bC={class:"grid grid-cols-4 gap-4 mx-auto"},IC={__name:"Footer",setup(t){let e="text|link".split("|");const s=`
RUNPIX @2023|#
Rating link|#
Feedback link|#`.split(`
`).filter(r=>r).map(r=>r.split("|")).map(r=>e.reduce((i,o,a)=>({...i,[o]:r[a]}),{}));return(r,i)=>(F(),W("div",bC,[(F(!0),W($e,null,_r(H(s),o=>(F(),W("div",null,Oe(o.text)+" "+Oe(o.link),1))),256))]))}},TC={class:"mt-20"},SC={__name:"App",setup(t){return(e,n)=>{const s=mf("RouterView");return F(),W($e,null,[Z(EC),C("div",TC,[Z(s),Z(IC)])],64)}}};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window!="undefined";function CC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Pa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Lt(r)?r.map(t):t(r)}return n}const Ar=()=>{},Lt=Array.isArray,AC=/\/$/,kC=t=>t.replace(AC,"");function La(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=OC(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function RC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ks(e.matched[s],n.matched[r])&&Tm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NC(t[n],e[n]))return!1;return!0}function NC(t,e){return Lt(t)?ud(t,e):Lt(e)?ud(e,t):t===e}function ud(t,e){return Lt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function OC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Qr;(function(t){t.pop="pop",t.push="push"})(Qr||(Qr={}));var kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kr||(kr={}));function DC(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kC(t)}const PC=/^[^#]+#/;function LC(t,e){return t.replace(PC,"#")+e}function MC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function UC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=MC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hd(t,e){return(history.state?history.state.position-e:-1)+t}const xc=new Map;function FC(t,e){xc.set(t,e)}function $C(t){const e=xc.get(t);return xc.delete(t),e}let VC=()=>location.protocol+"//"+location.host;function Sm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ld(c,"")}return ld(n,t)+s+r}function BC(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Sm(t,location),y=n.value,b=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}R=b?d.position-b.position:0}else s(g);r.forEach(A=>{A(n.value,y,{delta:R,type:Qr.pop,direction:R?R>0?kr.forward:kr.back:kr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(me({},d.state,{scroll:ra()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function dd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ra():null}}function jC(t){const{history:e,location:n}=window,s={value:Sm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:VC()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,dd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=me({},r.value,e.state,{forward:c,scroll:ra()});i(u.current,u,!0);const h=me({},dd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function HC(t){t=DC(t);const e=jC(t),n=BC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=me({location:"",base:t,go:s,createHref:LC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function qC(t){return typeof t=="string"||t&&typeof t=="object"}function Cm(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Am=Symbol("");var fd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fd||(fd={}));function zs(t,e){return me(new Error,{type:t,[Am]:!0},e)}function Jt(t,e){return t instanceof Error&&Am in t&&(e==null||!!(t.type&e))}const pd="[^/]+?",WC={sensitive:!1,strict:!1,start:!0,end:!0},KC=/[.+*?^${}()[\]/\\]/g;function zC(t,e){const n=me({},WC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(KC,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:b,optional:R,regexp:A}=d;i.push({name:y,repeatable:b,optional:R});const P=A||pd;if(P!==pd){g+=10;try{new RegExp(`(${P})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+Q.message)}}let G=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(G=R&&l.length<2?`(?:/${G})`:"/"+G),R&&(G+="?"),r+=G,g+=20,R&&(g+=-8),b&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:b,optional:R}=g,A=y in l?l[y]:"";if(Lt(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Lt(A)?A.join("/"):A;if(!P)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function GC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function QC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=GC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(gd(s))return 1;if(gd(r))return-1}return r.length-s.length}function gd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const YC={type:0,value:""},JC=/[a-zA-Z0-9_]/;function XC(t){if(!t)return[[]];if(t==="/")return[[YC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:JC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function ZC(t,e,n){const s=zC(XC(t.path),n),r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function eA(t,e){const n=[],s=new Map;e=vd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,y=tA(u);y.aliasOf=d&&d.record;const b=vd(e,u),R=[y];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of G)R.push(me({},y,{components:d?d.record.components:y.components,path:Q,aliasOf:d?d.record:y}))}let A,P;for(const G of R){const{path:Q}=G;if(h&&Q[0]!=="/"){const ue=h.record.path,Ce=ue[ue.length-1]==="/"?"":"/";G.path=h.record.path+(Q&&Ce+Q)}if(A=ZC(G,h,b),d?d.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),g&&u.name&&!yd(A)&&o(u.name)),y.children){const ue=y.children;for(let Ce=0;Ce<ue.length;Ce++)i(ue[Ce],A,d&&d.children[Ce])}d=d||A,c(A)}return P?()=>{o(P)}:Ar}function o(u){if(Cm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&QC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!km(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!yd(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,b;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw zs(1,{location:u});b=d.record.name,g=me(md(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&md(u.params,d.keys.map(P=>P.name))),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(P=>P.re.test(y)),d&&(g=d.parse(y),b=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw zs(1,{location:u,currentLocation:h});b=d.record.name,g=me({},h.params,u.params),y=d.stringify(g)}const R=[];let A=d;for(;A;)R.unshift(A.record),A=A.parent;return{name:b,path:y,params:g,matched:R,meta:sA(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function md(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function tA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function nA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function yd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sA(t){return t.reduce((e,n)=>me(e,n.meta),{})}function vd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function km(t,e){return e.children.some(n=>n===t||km(t,n))}const Rm=/#/g,rA=/&/g,iA=/\//g,oA=/=/g,aA=/\?/g,xm=/\+/g,cA=/%5B/g,lA=/%5D/g,Nm=/%5E/g,uA=/%60/g,Om=/%7B/g,hA=/%7C/g,Dm=/%7D/g,dA=/%20/g;function ru(t){return encodeURI(""+t).replace(hA,"|").replace(cA,"[").replace(lA,"]")}function fA(t){return ru(t).replace(Om,"{").replace(Dm,"}").replace(Nm,"^")}function Nc(t){return ru(t).replace(xm,"%2B").replace(dA,"+").replace(Rm,"%23").replace(rA,"%26").replace(uA,"`").replace(Om,"{").replace(Dm,"}").replace(Nm,"^")}function pA(t){return Nc(t).replace(oA,"%3D")}function gA(t){return ru(t).replace(Rm,"%23").replace(aA,"%3F")}function mA(t){return t==null?"":gA(t).replace(iA,"%2F")}function go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(xm," "),o=i.indexOf("="),a=go(o<0?i:i.slice(0,o)),c=o<0?null:go(i.slice(o+1));if(a in e){let l=e[a];Lt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function _d(t){let e="";for(let n in t){const s=t[n];if(n=pA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(s)?s.map(i=>i&&Nc(i)):[s&&Nc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function vA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Lt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const _A=Symbol(""),wd=Symbol(""),iu=Symbol(""),ou=Symbol(""),Oc=Symbol("");function ur(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function _n(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(zs(4,{from:n,to:e})):h instanceof Error?a(h):qC(h)?a(zs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ma(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(wA(a)){const l=(a.__vccOpts||a)[e];l&&r.push(_n(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=CC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&_n(d,n,s,i,o)()}))}}return r}function wA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ed(t){const e=Kt(iu),n=Kt(ou),s=Ve(()=>e.resolve(H(t.to))),r=Ve(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ks.bind(null,u));if(d>-1)return d;const g=bd(c[l-2]);return l>1&&bd(u)===g&&h[h.length-1].path!==g?h.findIndex(Ks.bind(null,c[l-2])):d}),i=Ve(()=>r.value>-1&&TA(n.params,s.value.params)),o=Ve(()=>r.value>-1&&r.value===n.matched.length-1&&Tm(n.params,s.value.params));function a(c={}){return IA(c)?e[H(t.replace)?"replace":"push"](H(t.to)).catch(Ar):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const EA=hf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ed,setup(t,{slots:e}){const n=ln(Ed(t)),{options:s}=Kt(iu),r=Ve(()=>({[Id(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:el("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),bA=EA;function IA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Lt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t!=null?t:e!=null?e:n,SA=hf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Kt(Oc),r=Ve(()=>t.route||s.value),i=Kt(wd,0),o=Ve(()=>{let l=H(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ve(()=>r.value.matched[o.value]);Di(wd,Ve(()=>o.value+1)),Di(_A,a),Di(Oc,r);const c=Jn();return Rs(()=>[c.value,a.value,t.name],([l,u,h],[d,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Ks(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Td(n.default,{Component:d,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=el(d,me({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Td(n.default,{Component:R,route:l})||R}}});function Td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const CA=SA;function AA(t){const e=eA(t.routes,t),n=t.parseQuery||yA,s=t.stringifyQuery||_d,r=t.history,i=ur(),o=ur(),a=ur(),c=xy(yn);let l=yn;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pa.bind(null,_=>""+_),h=Pa.bind(null,mA),d=Pa.bind(null,go);function g(_,D){let x,V;return Cm(_)?(x=e.getRecordMatcher(_),V=D):V=_,e.addRoute(V,x)}function y(_){const D=e.getRecordMatcher(_);D&&e.removeRoute(D)}function b(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function A(_,D){if(D=me({},D||c.value),typeof _=="string"){const f=La(n,_,D.path),p=e.resolve({path:f.path},D),m=r.createHref(f.fullPath);return me(f,p,{params:d(p.params),hash:go(f.hash),redirectedFrom:void 0,href:m})}let x;if("path"in _)x=me({},_,{path:La(n,_.path,D.path).path});else{const f=me({},_.params);for(const p in f)f[p]==null&&delete f[p];x=me({},_,{params:h(_.params)}),D.params=h(D.params)}const V=e.resolve(x,D),ce=_.hash||"";V.params=u(d(V.params));const Re=RC(s,me({},_,{hash:fA(ce),path:V.path})),ne=r.createHref(Re);return me({fullPath:Re,hash:ce,query:s===_d?vA(_.query):_.query||{}},V,{redirectedFrom:void 0,href:ne})}function P(_){return typeof _=="string"?La(n,_,c.value.path):me({},_)}function G(_,D){if(l!==_)return zs(8,{from:D,to:_})}function Q(_){return xe(_)}function ue(_){return Q(me(P(_),{replace:!0}))}function Ce(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let V=typeof x=="function"?x(_):x;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),me({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function xe(_,D){const x=l=A(_),V=c.value,ce=_.state,Re=_.force,ne=_.replace===!0,f=Ce(x);if(f)return xe(me(P(f),{state:typeof f=="object"?me({},ce,f.state):ce,force:Re,replace:ne}),D||x);const p=x;p.redirectedFrom=D;let m;return!Re&&xC(s,V,x)&&(m=zs(16,{to:p,from:V}),Ln(V,V,!0,!1)),(m?Promise.resolve(m):ge(p,V)).catch(v=>Jt(v)?Jt(v,2)?v:kt(v):be(v,p,V)).then(v=>{if(v){if(Jt(v,2))return xe(me({replace:ne},P(v.to),{state:typeof v.to=="object"?me({},ce,v.to.state):ce,force:Re}),D||p)}else v=Fe(p,V,!0,ne,ce);return pe(p,V,v),v})}function ee(_,D){const x=G(_,D);return x?Promise.reject(x):Promise.resolve()}function ge(_,D){let x;const[V,ce,Re]=kA(_,D);x=Ma(V.reverse(),"beforeRouteLeave",_,D);for(const f of V)f.leaveGuards.forEach(p=>{x.push(_n(p,_,D))});const ne=ee.bind(null,_,D);return x.push(ne),Es(x).then(()=>{x=[];for(const f of i.list())x.push(_n(f,_,D));return x.push(ne),Es(x)}).then(()=>{x=Ma(ce,"beforeRouteUpdate",_,D);for(const f of ce)f.updateGuards.forEach(p=>{x.push(_n(p,_,D))});return x.push(ne),Es(x)}).then(()=>{x=[];for(const f of _.matched)if(f.beforeEnter&&!D.matched.includes(f))if(Lt(f.beforeEnter))for(const p of f.beforeEnter)x.push(_n(p,_,D));else x.push(_n(f.beforeEnter,_,D));return x.push(ne),Es(x)}).then(()=>(_.matched.forEach(f=>f.enterCallbacks={}),x=Ma(Re,"beforeRouteEnter",_,D),x.push(ne),Es(x))).then(()=>{x=[];for(const f of o.list())x.push(_n(f,_,D));return x.push(ne),Es(x)}).catch(f=>Jt(f,8)?f:Promise.reject(f))}function pe(_,D,x){for(const V of a.list())V(_,D,x)}function Fe(_,D,x,V,ce){const Re=G(_,D);if(Re)return Re;const ne=D===yn,f=bs?history.state:{};x&&(V||ne?r.replace(_.fullPath,me({scroll:ne&&f&&f.scroll},ce)):r.push(_.fullPath,ce)),c.value=_,Ln(_,D,x,ne),kt()}let L;function Te(){L||(L=r.listen((_,D,x)=>{if(!vi.listening)return;const V=A(_),ce=Ce(V);if(ce){xe(me(ce,{replace:!0}),V).catch(Ar);return}l=V;const Re=c.value;bs&&FC(hd(Re.fullPath,x.delta),ra()),ge(V,Re).catch(ne=>Jt(ne,12)?ne:Jt(ne,2)?(xe(ne.to,V).then(f=>{Jt(f,20)&&!x.delta&&x.type===Qr.pop&&r.go(-1,!1)}).catch(Ar),Promise.reject()):(x.delta&&r.go(-x.delta,!1),be(ne,V,Re))).then(ne=>{ne=ne||Fe(V,Re,!1),ne&&(x.delta&&!Jt(ne,8)?r.go(-x.delta,!1):x.type===Qr.pop&&Jt(ne,20)&&r.go(-1,!1)),pe(V,Re,ne)}).catch(Ar)}))}let ze=ur(),dn=ur(),ke;function be(_,D,x){kt(_);const V=dn.list();return V.length?V.forEach(ce=>ce(_,D,x)):console.error(_),Promise.reject(_)}function ve(){return ke&&c.value!==yn?Promise.resolve():new Promise((_,D)=>{ze.add([_,D])})}function kt(_){return ke||(ke=!_,Te(),ze.list().forEach(([D,x])=>_?x(_):D()),ze.reset()),_}function Ln(_,D,x,V){const{scrollBehavior:ce}=t;if(!bs||!ce)return Promise.resolve();const Re=!x&&$C(hd(_.fullPath,0))||(V||!x)&&history.state&&history.state.scroll||null;return Zd().then(()=>ce(_,D,Re)).then(ne=>ne&&UC(ne)).catch(ne=>be(ne,_,D))}const Rt=_=>r.go(_);let ft;const ms=new Set,vi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:R,getRoutes:b,resolve:A,options:t,push:Q,replace:ue,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:dn.add,isReady:ve,install(_){const D=this;_.component("RouterLink",bA),_.component("RouterView",CA),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>H(c)}),bs&&!ft&&c.value===yn&&(ft=!0,Q(r.location).catch(ce=>{}));const x={};for(const ce in yn)x[ce]=Ve(()=>c.value[ce]);_.provide(iu,D),_.provide(ou,ln(x)),_.provide(Oc,c);const V=_.unmount;ms.add(_),_.unmount=function(){ms.delete(_),ms.size<1&&(l=yn,L&&L(),L=null,c.value=yn,ft=!1,ke=!1),V()}}};return vi}function Es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function kA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ks(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ks(l,c))||r.push(c))}return[n,s,r]}function RA(){return Kt(ou)}var xA="/assets/logo.03d6d6da.png";var ir=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const NA={class:"test-color"},OA=["textContent"],DA={__name:"TestComponent",props:{msg:String},setup(t){const e=At(),n=e.state.countExample,s=()=>{e.dispatch("incrementAction")};return(r,i)=>(F(),W($e,null,[C("h1",NA,Oe(t.msg),1),C("button",{type:"button",onClick:s},[Ee("count is: "),C("p",{textContent:Oe(H(n).count)},null,8,OA)])],64))}};var Pm=ir(DA,[["__scopeId","data-v-03c96bb0"]]);const PA={class:"container mx-auto"},LA={class:"w-full text-center justify-center flex-col"},MA=C("div",null,[C("h1",null,"Test Page"),C("p",null," This is a test page. ")],-1),UA=C("img",{alt:"Vue logo",src:xA,class:"mx-auto"},null,-1),FA={__name:"TestPage",setup(t){return(e,n)=>(F(),W("div",PA,[C("div",LA,[MA,UA,Z(Pm,{msg:"Hello Vue and Vite"})])]))}},$A={class:"container mx-auto"},VA={class:"w-full text-center"},BA=C("h1",null,"Home Page",-1),jA={key:0},HA={key:1},qA={__name:"HomePage",setup(t){const e=At();e.state.auth.signIn;const n=e.state.auth.userDetails.userData;return(s,r)=>(F(),W("div",$A,[C("div",VA,[BA,H(n).uid?(F(),W("div",jA,[C("div",null,Oe(H(n).displayName),1),C("div",null,"uid:"+Oe(H(n).uid)+", email:"+Oe(H(n).email),1)])):(F(),W("div",HA," Not logged in ")),C("button",{class:"px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",onClick:r[0]||(r[0]=i=>s.$router.push("races"))},"Races")])]))}};var WA="/assets/portfolio-1.ef0ac9cb.jpg",KA="/assets/portfolio-2.cbda949d.jpg";const zA={class:"flex-col text-center bg-white md:w-[75%] rounded-xl shadow-lg mx-auto sm:w-full relative pb-5 mb-8"},GA=C("div",{class:"overflow-hidden w-full h-full"},[C("img",{class:"rounded-tl-xl rounded-tr-xl h-[300px] w-full top-0 left-0",src:WA,alt:"portfolio"})],-1),QA=C("div",{class:"flex justify-center z-30 absolute w-full top-[13rem]"},[C("img",{class:"rounded-full h-[200px] w-[200px] border-8 border-white",src:KA,alt:"profile"})],-1),YA={class:"mt-28"},JA=["textContent"],XA={__name:"ProfileCard",setup(t){const e=At(),n=Ve(()=>e.state.auth.userDetails),s=()=>{e.dispatch("logOutAction"),oa.push("/login")},r=()=>e.dispatch("activeChangePasswordSheetAction");return(i,o)=>(F(),W("div",zA,[GA,QA,C("div",YA,[C("h1",{class:"text-3xl text-left ml-5 mb-7",textContent:Oe(H(n).userData.email)},null,8,JA),C("div",{class:"text-center mr-5 flex justify-end"},[C("button",{class:"bg-[#2B2E4A] rounded-full drop-shadow-lg text-white text-md h-9 w-[85px] hover:bg-[#FF9000] transition ease-in-out mr-5",onClick:s},"LogOut"),C("button",{class:"bg-[#2B2E4A] rounded-full drop-shadow-lg text-white text-md h-9 w-[190px] hover:bg-[#FF9000] transition ease-in-out",onClick:r},"Change Password")])])]))}};var Ls={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const ZA=["value"];function ek(t,e,n,s,r,i){return F(),W("input",{class:Ye(["p-inputtext p-component",{"p-filled":i.filled}]),value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>i.onInput&&i.onInput(...o))},null,42,ZA)}Ls.render=ek;var Nt={innerWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},width(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth(t,e){if(t){let n=t.offsetWidth;if(e){let s=getComputedStyle(t);n+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return n}return 0},getOuterHeight(t,e){if(t){let n=t.offsetHeight;if(e){let s=getComputedStyle(t);n+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return n}return 0},getClientHeight(t,e){if(t){let n=t.clientHeight;if(e){let s=getComputedStyle(t);n+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return n}return 0},getViewport(){let t=window,e=document,n=e.documentElement,s=e.getElementsByTagName("body")[0],r=t.innerWidth||n.clientWidth||s.clientWidth,i=t.innerHeight||n.clientHeight||s.clientHeight;return{width:r,height:i}},getOffset(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index(t){if(t){let e=t.parentNode.childNodes,n=0;for(let s=0;s<e.length;s++){if(e[s]===t)return n;e[s].nodeType===1&&n++}}return-1},addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.split(" ");for(let s=0;s<n.length;s++)t.classList.add(n[s])}else{let n=e.split(" ");for(let s=0;s<n.length;s++)t.className+=" "+n[s]}},addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)},removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1},find(t,e){return t?t.querySelectorAll(e):[]},findSingle(t,e){return t?t.querySelector(e):null},getHeight(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0},getWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0},absolutePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=n.height,r=n.width,i=e.offsetHeight,o=e.offsetWidth,a=e.getBoundingClientRect(),c=this.getWindowScrollTop(),l=this.getWindowScrollLeft(),u=this.getViewport(),h,d;a.top+i+s>u.height?(h=a.top+c-s,t.style.transformOrigin="bottom",h<0&&(h=c)):(h=i+a.top+c,t.style.transformOrigin="top"),a.left+r>u.width?d=Math.max(0,a.left+l+o-r):d=a.left+l,t.style.top=h+"px",t.style.left=d+"px"}},relativePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);const s=e.offsetHeight,r=e.getBoundingClientRect(),i=this.getViewport();let o,a;r.top+s+n.height>i.height?(o=-1*n.height,t.style.transformOrigin="bottom",r.top+o<0&&(o=-1*r.top)):(o=s,t.style.transformOrigin="top"),n.width>i.width?a=r.left*-1:r.left+n.width>i.width?a=(r.left+n.width-i.width)*-1:a=0,t.style.top=o+"px",t.style.left=a+"px"}},getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))},getScrollableParents(t){let e=[];if(t){let n=this.getParents(t);const s=/(auto|scroll)/,r=i=>{let o=window.getComputedStyle(i,null);return s.test(o.getPropertyValue("overflow"))||s.test(o.getPropertyValue("overflowX"))||s.test(o.getPropertyValue("overflowY"))};for(let i of n){let o=i.nodeType===1&&i.dataset.scrollselectors;if(o){let a=o.split(",");for(let c of a){let l=this.findSingle(i,c);l&&r(l)&&e.push(l)}}i.nodeType!==9&&r(i)&&e.push(i)}}return e},getHiddenElementOuterHeight(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementOuterWidth(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementDimensions(t){if(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}return 0},fadeIn(t,e){if(t){t.style.opacity=0;let n=+new Date,s=0,r=function(){s=+t.style.opacity+(new Date().getTime()-n)/e,t.style.opacity=s,n=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}},fadeOut(t,e){if(t){let n=1,s=50,r=e,i=s/r,o=setInterval(()=>{n-=i,n<=0&&(n=0,clearInterval(o)),t.style.opacity=n},s)}},getUserAgent(){return navigator.userAgent},appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e.el&&e.elElement)e.elElement.appendChild(t);else throw new Error("Cannot append "+e+" to "+t)},scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),s=n?parseFloat(n):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),i=r?parseFloat(r):0,o=t.getBoundingClientRect(),c=e.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-s-i,l=t.scrollTop,u=t.clientHeight,h=this.getOuterHeight(e);c<0?t.scrollTop=l+c:c+h>u&&(t.scrollTop=l+c-u+h)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e},getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},isVisible(t){return t&&t.offsetParent!=null},invokeElementMethod(t,e,n){t[e].apply(t,n)},isExist(t){return t!==null&&typeof t!="undefined"&&t.nodeName&&t.parentNode},isClient(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},focus(t,e){t&&document.activeElement!==t&&t.focus(e)},getFocusableElements(t,e=""){let n=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),s=[];for(let r of n)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&s.push(r);return s},getFirstFocusableElement(t,e){const n=this.getFocusableElements(t,e);return n.length>0?n[0]:null},isClickable(t){const e=t.nodeName,n=t.parentElement&&t.parentElement.nodeName;return e=="INPUT"||e=="BUTTON"||e=="A"||n=="INPUT"||n=="BUTTON"||n=="A"||this.hasClass(t,"p-button")||this.hasClass(t.parentElement,"p-button")||this.hasClass(t.parentElement,"p-checkbox")||this.hasClass(t.parentElement,"p-radiobutton")},applyStyle(t,e){if(typeof e=="string")t.style.cssText=e;else for(let n in e)t.style[n]=e[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(t,e){let n=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,e+".csv");else{let s=document.createElement("a");s.download!==void 0?(s.setAttribute("href",URL.createObjectURL(n)),s.setAttribute("download",e+".csv"),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}};let Dc;function tk(t){t.addEventListener("mousedown",Lm)}function nk(t){t.removeEventListener("mousedown",Lm)}function sk(t){let e=document.createElement("span");e.className="p-ink",e.setAttribute("role","presentation"),t.appendChild(e),e.addEventListener("animationend",Mm)}function rk(t){let e=Um(t);e&&(nk(t),e.removeEventListener("animationend",Mm),e.remove())}function Lm(t){let e=t.currentTarget,n=Um(e);if(!n||getComputedStyle(n,null).display==="none")return;if(Nt.removeClass(n,"p-ink-active"),!Nt.getHeight(n)&&!Nt.getWidth(n)){let o=Math.max(Nt.getOuterWidth(e),Nt.getOuterHeight(e));n.style.height=o+"px",n.style.width=o+"px"}let s=Nt.getOffset(e),r=t.pageX-s.left+document.body.scrollTop-Nt.getWidth(n)/2,i=t.pageY-s.top+document.body.scrollLeft-Nt.getHeight(n)/2;n.style.top=i+"px",n.style.left=r+"px",Nt.addClass(n,"p-ink-active"),Dc=setTimeout(()=>{n&&Nt.removeClass(n,"p-ink-active")},401)}function Mm(t){Dc&&clearTimeout(Dc),Nt.removeClass(t.currentTarget,"p-ink-active")}function Um(t){for(let e=0;e<t.children.length;e++)if(typeof t.children[e].className=="string"&&t.children[e].className.indexOf("p-ink")!==-1)return t.children[e];return null}const Fm={mounted(t,e){e.instance.$primevue&&e.instance.$primevue.config&&e.instance.$primevue.config.ripple&&(sk(t),tk(t))},unmounted(t){rk(t)}};var hs={name:"Button",props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:Fm}};const ik=["aria-label","disabled"],ok={class:"p-button-label"};function ak(t,e,n,s,r,i){const o=yf("ripple");return qa((F(),W("button",{class:Ye(i.buttonClass),type:"button","aria-label":i.defaultAriaLabel,disabled:i.disabled},[_f(t.$slots,"default",{},()=>[n.loading&&!n.icon?(F(),W("span",{key:0,class:Ye(i.iconStyleClass)},null,2)):ot("",!0),n.icon?(F(),W("span",{key:1,class:Ye(i.iconStyleClass)},null,2)):ot("",!0),C("span",ok,Oe(n.label||"\xA0"),1),n.badge?(F(),W("span",{key:2,class:Ye(i.badgeStyleClass)},Oe(n.badge),3)):ot("",!0)])],10,ik)),[[o]])}hs.render=ak;var $m={name:"ProgressSpinner",props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle(){return{"animation-duration":this.animationDuration}}}};const ck={class:"p-progress-spinner",role:"alert","aria-busy":"true"},lk=["fill","stroke-width"];function uk(t,e,n,s,r,i){return F(),W("div",ck,[(F(),W("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:mo(i.svgStyle)},[C("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},null,8,lk)],4))])}function hk(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var dk=`
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}
.p-progress-spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
}
.p-progress-spinner-svg {
    -webkit-animation: p-progress-spinner-rotate 2s linear infinite;
            animation: p-progress-spinner-rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
            transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: #d62d20;
    -webkit-animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}
@-webkit-keyframes p-progress-spinner-rotate {
100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
}
}
@keyframes p-progress-spinner-rotate {
100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
}
}
@-webkit-keyframes p-progress-spinner-dash {
0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
}
50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
}
100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
}
}
@keyframes p-progress-spinner-dash {
0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
}
50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
}
100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
}
}
@-webkit-keyframes p-progress-spinner-color {
100%,
    0% {
        stroke: #d62d20;
}
40% {
        stroke: #0057e7;
}
66% {
        stroke: #008744;
}
80%,
    90% {
        stroke: #ffa700;
}
}
@keyframes p-progress-spinner-color {
100%,
    0% {
        stroke: #d62d20;
}
40% {
        stroke: #0057e7;
}
66% {
        stroke: #008744;
}
80%,
    90% {
        stroke: #ffa700;
}
}
`;hk(dk);$m.render=uk;const fk={class:"z-50 bg-gray-500 opacity-25 flex flex-col text-center justify-center w-full h-full absolute top-0 left-0 rounded-xl overflow-hidden"},Vm={__name:"LoadingSpinner",setup(t){return(e,n)=>(F(),W("div",fk,[Z(H($m))]))}};const au=t=>(rf("data-v-5f96da32"),t=t(),of(),t),pk=["onSubmit"],gk=au(()=>C("h1",{class:"text-left text-2xl mb-10 ml-3"},"Change Password",-1)),mk={class:"md:w-[65%] mx-auto my-10 sm:w-full"},yk={class:"p-float-label mb-2"},vk=au(()=>C("label",{for:"OldPasswordInputText"},"Old Password",-1)),_k={key:0,class:"text-red-500 text-xs italic text-left"},wk={class:"md:w-[65%] mx-auto my-10 sm:w-full"},Ek={class:"p-float-label mb-2"},bk=au(()=>C("label",{for:"NewPasswordInputText"},"New Password",-1)),Ik={key:0,class:"text-red-500 text-xs italic text-left"},Tk={class:"text-right mr-5"},Sk={__name:"ChangePasswordCard",setup(t){const e=At(),n=e.state.auth.changePassword,s=n.errorMessage;console.debug(s);const r=Jn(""),i=Jn(""),o=ln({disableChange:!0,oldPasswordError:!1,newPasswordError:!1}),a=()=>{o.oldPasswordError=r.value.length<8},c=()=>{o.newPasswordError=i.value.length<8||i.value===r.value},l=()=>{a(),c(),o.disableChange=o.oldPasswordError||o.newPasswordError},u=()=>{console.debug("changePassword"),e.dispatch("changePasswordAction",{oldPassword:r.value,newPassword:i.value})};return(h,d)=>(F(),W("form",{class:"flex-col text-center bg-white md:w-[75%] rounded-xl shadow-lg mx-auto sm:w-full relative py-7 mb-8",onSubmit:Pf(u,["prevent"]),onChange:l},[H(n).isLoading?(F(),Wt(Vm,{key:0})):ot("",!0),gk,C("div",mk,[C("span",yk,[Z(H(Ls),{id:"OldPasswordInputText",type:"password",modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=g=>r.value=g),class:Ye(["w-full",{"p-invalid":o.oldPasswordError}]),required:""},null,8,["modelValue","class"]),vk]),o.oldPasswordError?(F(),W("p",_k,"Old password at least 8 characters")):ot("",!0)]),C("div",wk,[C("span",Ek,[Z(H(Ls),{id:"NewPasswordInputText",type:"password",modelValue:i.value,"onUpdate:modelValue":d[1]||(d[1]=g=>i.value=g),class:Ye(["w-full",{"p-invalid":o.newPasswordError}]),required:""},null,8,["modelValue","class"]),bk]),o.newPasswordError?(F(),W("p",Ik,"New password can't be equal to old password")):ot("",!0)]),C("div",Tk,[Z(H(hs),{class:Ye(["bg-[#2B2E4A] rounded-full drop-shadow-lg text-white text-md h-9 w-[85px] opacity-40",{ableChange:!o.disableChange}]),disabled:o.disableChange},{default:Je(()=>[Ee("Change")]),_:1},8,["class","disabled"])])],40,pk))}};var Ck=ir(Sk,[["__scopeId","data-v-5f96da32"]]),yr={name:"Message",emits:["close"],props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:null}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||setTimeout(()=>{this.visible=!1},this.life)},methods:{close(t){this.visible=!1,this.$emit("close",t)}},computed:{containerClass(){return"p-message p-component p-message-"+this.severity},iconClass(){return["p-message-icon pi",this.icon?this.icon:{"pi-info-circle":this.severity==="info","pi-check":this.severity==="success","pi-exclamation-triangle":this.severity==="warn","pi-times-circle":this.severity==="error"}]}},directives:{ripple:Fm}};const Ak={class:"p-message-wrapper"},kk={class:"p-message-text"},Rk=C("i",{class:"p-message-close-icon pi pi-times"},null,-1),xk=[Rk];function Nk(t,e,n,s,r,i){const o=yf("ripple");return F(),Wt(Ro,{name:"p-message",appear:""},{default:Je(()=>[qa(C("div",{class:Ye(i.containerClass),role:"alert"},[C("div",Ak,[C("span",{class:Ye(i.iconClass)},null,2),C("div",kk,[_f(t.$slots,"default")]),n.closable?qa((F(),W("button",{key:0,class:"p-message-close p-link",onClick:e[0]||(e[0]=a=>i.close(a)),type:"button"},xk)),[[o]]):ot("",!0)])],2),[[h_,r.visible]])]),_:3})}function Ok(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var Dk=`
.p-message-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-message-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}
.p-message-enter-from {
    opacity: 0;
}
.p-message-enter-active {
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
}
.p-message.p-message-leave-from {
    max-height: 1000px;
}
.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}
.p-message-leave-active {
    overflow: hidden;
    -webkit-transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}
.p-message-leave-active .p-message-close {
    display: none;
}
`;Ok(Dk);yr.render=Nk;const Pk={class:"bottom-10 md:right-10 fixed md:w-[500px] sm:w-[300px] sm:mx-auto"},cu={__name:"Message",props:{error:Boolean,errorMsg:String,warning:Boolean,warningMsg:String,info:Boolean,infoMsg:String,success:Boolean,successMsg:String},setup(t){return(e,n)=>(F(),W("div",Pk,[t.success?(F(),Wt(H(yr),{key:0,severity:"success",life:3e3,sticky:!1},{default:Je(()=>[Ee(Oe(t.successMsg||"Success Message Content"),1)]),_:1})):ot("",!0),t.info?(F(),Wt(H(yr),{key:1,severity:"info",life:3e3,sticky:!1},{default:Je(()=>[Ee(Oe(t.infoMsg||"Info Message Content"),1)]),_:1})):ot("",!0),t.warning?(F(),Wt(H(yr),{key:2,severity:"warn",life:3e3,sticky:!1},{default:Je(()=>[Ee(Oe(t.warningMsg||"Warning Message Content"),1)]),_:1})):ot("",!0),t.error?(F(),Wt(H(yr),{key:3,severity:"error",life:3e3,sticky:!1},{default:Je(()=>[Ee(Oe(t.errorMsg||"Error Message Content"),1)]),_:1})):ot("",!0)]))}};const Lk={class:"flex flex-col items-center"},Mk={class:"container mx-auto"},Uk={__name:"ProfilePage",setup(t){const e=At(),n=Ve(()=>e.state.actionSheet.changePasswordSheet.isShow),s=e.state.auth.changePassword;return(r,i)=>(F(),W("div",Lk,[C("div",Mk,[Z(XA),Z(Ro,null,{default:Je(()=>[H(n)?(F(),Wt(Ck,{key:0})):ot("",!0)]),_:1})]),Z(cu,{success:H(s).isSuccess,successMsg:"Change Password Success",warning:H(s).isError,warningMsg:H(s).errorMessage},null,8,["success","warning","warningMsg"])]))}};var Fk=ir(Uk,[["__scopeId","data-v-7516767f"]]);const $k={__name:"LoginCard",setup(t){const e=At(),n=e.state.auth.signIn,s=()=>{e.dispatch("signInGoogleAction").then(()=>{n.isError?console.debug("error in dispatch"):(e.dispatch("getUserAction"),oa.push("/home"))})};return(r,i)=>(F(),W("button",{class:"bg-[#2B2E4A] rounded-full drop-shadow-lg text-white text-md h-9 w-[185px] opacity-40 ableSignIn",onClick:s}," Login with Google"))}};var Vk=ir($k,[["__scopeId","data-v-f75fcd76"]]);const Bk={class:"flex flex-col items-center"},jk={class:"container mx-auto"},Hk={__name:"LoginPage",setup(t){const n=At().state.auth.signIn;return(s,r)=>(F(),W("div",Bk,[C("div",jk,[Z(Vk)]),Z(cu,{warning:H(n).isError,warningMsg:H(n).errorMessage},null,8,["warning","warningMsg"])]))}};const ia=t=>(rf("data-v-85c89b36"),t=t(),of(),t),qk=["onSubmit"],Wk=ia(()=>C("h1",{class:"text-left text-2xl mb-10 ml-3"},"Register",-1)),Kk={class:"md:w-[65%] mx-auto my-10 sm:w-full"},zk={class:"p-float-label mb-2"},Gk=ia(()=>C("label",{for:"EmailInputText"},"Email",-1)),Qk={key:0,class:"text-red-500 text-xs italic text-left"},Yk={class:"md:w-[65%] mx-auto my-10 sm:w-full"},Jk={class:"p-float-label mb-2"},Xk=ia(()=>C("label",{for:"PasswordInputText"},"Password",-1)),Zk={key:0,class:"text-red-500 text-xs italic text-left"},e1={class:"md:w-[65%] mx-auto my-10 sm:w-full"},t1={class:"p-float-label mb-2"},n1=ia(()=>C("label",{for:"CPasswordInputText"},"Confirm Password",-1)),s1={key:0,class:"text-red-500 text-xs italic text-left"},r1=["disabled"],i1={__name:"RegisterCard",setup(t){const e=At(),n=e.state.auth.register,s=Jn(""),r=Jn(""),i=Jn(""),o=ln({disableRegister:!0,emailError:!1,passwordError:!1,c_passwordError:!1}),a=()=>{e.dispatch("registerAction",{email:r.value,password:s.value}).then(()=>{e.dispatch("getUserAction"),oa.push("/home")})},c=()=>{const d=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;o.emailError=r.value.length<1||!r.value.match(d)},l=()=>{o.passwordError=s.value.length<8},u=()=>{o.c_passwordError=i.value!==s.value},h=()=>{c(),l(),u(),o.disableRegister=o.emailError||o.passwordError||o.c_passwordError};return(d,g)=>(F(),W("form",{class:"flex-col text-center bg-white md:w-[75%] rounded-xl shadow-lg mx-auto sm:w-full p-5 relative",onSubmit:Pf(a,["prevent"]),onChange:h},[H(n).isLoading?(F(),Wt(Vm,{key:0})):ot("",!0),Wk,C("div",Kk,[C("span",zk,[Z(H(Ls),{id:"EmailInputText",type:"email",modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=y=>r.value=y),class:Ye(["w-full",{"p-invalid":o.emailError}]),required:""},null,8,["modelValue","class"]),Gk]),o.emailError?(F(),W("p",Qk,"Email is required")):ot("",!0)]),C("div",Yk,[C("span",Jk,[Z(H(Ls),{id:"PasswordInputText",type:"password",modelValue:s.value,"onUpdate:modelValue":g[1]||(g[1]=y=>s.value=y),class:Ye(["w-full",{"p-invalid":o.passwordError}]),required:""},null,8,["modelValue","class"]),Xk]),o.passwordError?(F(),W("p",Zk,"Password at least 8 characters")):ot("",!0)]),C("div",e1,[C("span",t1,[Z(H(Ls),{id:"CPasswordInputText",type:"password",modelValue:i.value,"onUpdate:modelValue":g[2]||(g[2]=y=>i.value=y),class:Ye(["w-full",{"p-invalid":o.c_passwordError}]),required:""},null,8,["modelValue","class"]),n1]),o.c_passwordError?(F(),W("p",s1,"Confirm password is not equal")):ot("",!0)]),C("button",{class:Ye(["bg-[#2B2E4A] rounded-full drop-shadow-lg text-white text-md h-9 w-[85px] opacity-40",{ableRegister:!o.disableRegister}]),disabled:o.disableRegister},"Register",10,r1)],40,qk))}};var o1=ir(i1,[["__scopeId","data-v-85c89b36"]]);const a1={class:"flex flex-col items-center"},c1={class:"container mx-auto"},l1={__name:"RegisterPage",setup(t){const n=At().state.auth.register;return(s,r)=>(F(),W("div",a1,[C("div",c1,[Z(o1)]),Z(cu,{warning:H(n).isError,warningMsg:H(n).errorMessage},null,8,["warning","warningMsg"])]))}},u1={},h1={class:"container mx-auto flex-col text-center text-primary"},d1=C("h1",null,"404",-1),f1=C("p",null,"Page not found",-1),p1=[d1,f1];function g1(t,e){return F(),W("div",h1,p1)}var m1=ir(u1,[["render",g1]]);const y1={class:"container mx-auto"},v1={class:"w-full text-center justify-center flex-col"},_1=C("h1",null,"Races",-1),w1=["onClick"],E1={__name:"Races",setup(t){const e=At(),n=Ve(()=>e.state.datastore.races);e.dispatch("getRacesAction");let s=i=>JSON.parse(JSON.stringify(i)),r=()=>{e.dispatch("getRacesAction"),console.log(s(e.state.datastore));debugger};return(i,o)=>(F(),W("div",y1,[C("div",v1,[C("div",null,[_1,Ee(" This is a list of races. "),(F(!0),W($e,null,_r(H(n)[0],(a,c)=>(F(),W("th",null,Oe(c),1))),256)),(F(!0),W($e,null,_r(H(n),a=>(F(),W("tr",{key:a.id},[(F(!0),W($e,null,_r(a,(c,l)=>(F(),W("td",null,Oe(c),1))),256)),C("button",{class:"px-4 py-1 text-sm bg-black p-2 rounded",onClick:c=>i.$router.push(`race/${a.id}`)},"Go",8,w1)]))),128)),Z(H(hs),{name:"create",onClick:H(r)},{default:Je(()=>[Ee("Create")]),_:1},8,["onClick"])]),Z(Pm,{msg:"Hello Vue and Vite"})])]))}},b1={id:"container"},I1=C("h1",null,[C("a",{href:"//webrtc.github.io/samples/",title:"WebRTC samples homepage"},"WebRTC samples"),Ee(),C("span",null,"getUserMedia \u21D2 canvas")],-1),T1=C("video",{playsinline:"",autoplay:""},null,-1),S1=C("canvas",null,null,-1),C1=C("p",null,[Ee("Draw a frame from the video onto the canvas element using the "),C("code",null,"drawImage()"),Ee(" method.")],-1),A1=C("p",null,[Ee("The variables "),C("code",null,"canvas"),Ee(", "),C("code",null,"video"),Ee(" and "),C("code",null,"stream"),Ee(" are in global scope, so you can inspect them from the console.")],-1),k1=C("a",{href:"https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/canvas",title:"View source for this page on GitHub",id:"viewSource"},"View source on GitHub",-1),R1={__name:"Webrtc",setup(t){let e=null,n=null;Qc(()=>s());function s(){e=document.querySelector("video"),n=window.canvas=document.querySelector("canvas"),n.width=480,n.height=360,navigator.mediaDevices.getUserMedia(i).then(a).catch(c)}let r=function(){n.width=e.videoWidth,n.height=e.videoHeight,n.getContext("2d").drawImage(e,0,0,n.width,n.height)};const i={audio:!1,video:{facingMode:"environment"}},o=navigator.userAgent;function a(l){window.stream=l,e.srcObject=l}function c(l){console.log("navigator.MediaDevices.getUserMedia error: ",l.message,l.name)}return(l,u)=>(F(),W("div",b1,[I1,T1,Z(H(hs),{onClick:H(r)},{default:Je(()=>[Ee("Take snapshot")]),_:1},8,["onClick"]),S1,Ee(" "+Oe(H(o))+" ",1),C1,A1,k1]))}};let ds=Jn(new Date),x1={enableHighAccuracy:!0,timeout:1e3,maximumAge:0},N1=t=>{ds.value.signal="N/A",console.warn(`ERROR(${t.code}): ${t.message}`)},O1=t=>{const e=t.coords;ds.value={latitude:e.latitude,longitude:e.longitude,accuracy:e.accuracy,timestamp:t.timestamp,signal:"OK"}};function D1(){console.log("got ",JSON.stringify(ds))}let P1=5e3;var L1=setInterval(Bm,P1);function Bm(){navigator.geolocation.getCurrentPosition(O1,N1,x1)}const M1={setup(){return console.log(ds),{loc:ds,getLoc:Bm}}},U1=Object.assign(M1,{__name:"GeoLoc",setup(t){function e(){console.log("stop "),clearInterval(L1)}return(n,s)=>(F(),W("div",null,[Z(H(hs),{name:"click",onClick:D1,onDblclick:e},{default:Je(()=>[Ee("GPS")]),_:1}),Z(H(hs),{name:"click",onClick:e},{default:Je(()=>[Ee("Cancel GPS")]),_:1}),Ee(" LOC: "+Oe(H(ds).signal)+"/"+Oe(new Date(H(ds).timestamp).toTimeString().substring(0,8)),1)]))}}),F1={class:"container mx-auto"},$1={class:"w-full text-center justify-center flex-col"},V1=C("h1",null,"Races",-1),B1={__name:"Race",setup(t){const e=RA(),n=e.params,s=At();s.dispatch("getRacesAction");const r=Ve(()=>s.state.datastore.races),i=Ve(()=>{for(let a of s.state.datastore.races)if(a.id==e.params.raceId)return a});let o=()=>{console.log(r);debugger};return(a,c)=>(F(),W("div",F1,[C("div",$1,[C("div",null,[V1,Ee(" This is a race id "+Oe(H(n).raceId)+" ",1),(F(!0),W($e,null,_r(H(i),(l,u)=>(F(),W("tr",null,[C("td",null,Oe(u),1),C("td",null,Oe(l),1)]))),256))]),Z(R1),Z(U1),Z(H(hs),{name:"create",onClick:H(o)},{default:Je(()=>[Ee("Create")]),_:1},8,["onClick"])])]))}},j1=[{path:"/testpage",name:"TestPage",component:FA},{path:"/races",name:"Races",component:E1},{path:"/race/:raceId",name:"Race",component:B1},{path:"/home",name:"HomePage",component:qA,beforeEnter:(t,e,n)=>{wt.onAuthStateChanged(s=>{s?n():n("/login")})}},{path:"/profile",name:"ProfilePage",component:Fk,beforeEnter:(t,e,n)=>{wt.onAuthStateChanged(s=>{s?n():n("/login")})}},{patch:"/",redirect:"/home"},{path:"/login",name:"LoginPage",component:Hk,beforeEnter:(t,e,n)=>{wt.onAuthStateChanged(s=>{s?n("/home"):n()})}},{path:"/register",name:"RegisterPage",component:l1,beforeEnter:(t,e,n)=>{wt.onAuthStateChanged(s=>{s?n("/home"):n()})}},{path:"/:catchAll(.*)",component:m1}],oa=AA({history:HC("/"),routes:j1}),H1={count:0},q1=t=>{t.count++},W1=t=>{t.commit("incrementMutation")},K1={state:()=>H1,mutations:{incrementMutation:q1},actions:{incrementAction:W1}},z1={signIn:{isLoading:!1,isError:!1,errorMessage:"",data:[]},userDetails:{isSignIn:!1,isLoading:!1,isError:!1,errorMessage:"",userData:[]},register:{isLoading:!1,isError:!1,errorMessage:"",data:[]},changePassword:{isLoading:!1,isError:!1,isSuccess:!1,errorMessage:""}},G1=t=>{t.signIn.isLoading=!0},Q1=(t,e)=>{t.userDetails.isSignIn=!0,t.signIn.isLoading=!1,t.signIn.isError=!1,t.signIn.data=e},Y1=(t,e)=>{t.userDetails.isSignIn=!1,t.signIn.isLoading=!1,t.signIn.isError=!0,t.signIn.errorMessage=e},J1=t=>{t.register.isLoading=!0},X1=(t,e)=>{t.userDetails.isSignIn=!0,t.register.isLoading=!1,t.register.isError=!1,t.register.data=e},Z1=(t,e)=>{t.userDetails.isSignIn=!1,t.register.isLoading=!1,t.register.isError=!0,t.register.errorMessage=e},eR=t=>{t.userDetails.isLoading=!0},tR=(t,e)=>{t.userDetails.isSignIn=!0,t.userDetails.isLoading=!1,t.userDetails.isError=!1,t.userDetails.userData=e},nR=(t,e)=>{t.userDetails.isSignIn=!1,t.userDetails.isLoading=!1,t.userDetails.isError=!0,t.userDetails.errorMessage=e},sR=t=>{t.userDetails.isSignIn=!1,t.userDetails.userData=[]},rR=(t,e)=>{t.userDetails.isSignIn=!0,t.userDetails.isError=!0,t.userDetails.errorMessage=e},iR=t=>{t.changePassword.isLoading=!0},oR=t=>{t.changePassword.isLoading=!1,t.changePassword.isError=!1,t.changePassword.isSuccess=!0},aR=(t,e)=>{t.changePassword.isLoading=!1,t.changePassword.isError=!0,t.changePassword.isSuccess=!1,t.changePassword.errorMessage=e},cR=()=>{try{return wt.currentUser}catch(t){throw t}},lR=t=>R0(wt.currentUser,fs.credential(wt.currentUser.email,t)).then(e=>(console.debug(e),e)).catch(e=>{throw console.debug(e),e}),uR=(t,e)=>N0(wt,t,e).then(n=>n.user).catch(n=>{throw n.code}),hR=()=>{const t=new Zt;return t.addScope("profile"),t.addScope("email"),oE(wt,t).then(e=>(console.debug(`logging in ${e.user.email}`),e.user)).catch(e=>{throw e.code})},dR=(t,e)=>x0(wt,t,e).then(n=>n.user).catch(n=>{throw n.code}),fR=()=>M0(wt).then(()=>!0).catch(t=>{throw t}),pR=t=>{const e=wt.currentUser;return O0(e,t).then(()=>!0).catch(n=>{throw console.debug(n),n})},gR=()=>{const t=_S(HS,"races");return BS(t).then(e=>e.docs.map(s=>{let r=s.data();return r.id=s.id,r})).catch(e=>(console.debug("No such document!",e),{}))},mR=async(t,{email:e,password:n})=>{if(e===""||n==="")return t.commit("failSignIn","Email and password are required");t.commit("beginSignIn");try{const s=await uR(e,n);return console.debug(";"+JSON.stringify(s)),s?t.commit("successSignIn",s):t.commit("failSignIn","Could not complete login!!")}catch(s){return t.commit("failSignIn",s)}},yR=async t=>{t.commit("beginSignIn");try{const e=await hR();return console.debug(";"+JSON.stringify(e)),e?t.commit("successSignIn",e):t.commit("failSignIn","Could not complete login!!")}catch(e){return t.commit("failSignIn",e)}},vR=async(t,{email:e,password:n})=>{if(e===""||n==="")return t.commit("failRegister","Email, password are required");t.commit("beginRegister");try{const s=await dR(e,n);return s?t.commit("successRegister",s):t.commit("failRegister","Could not complete registration!!")}catch(s){return t.commit("failRegister",s)}},_R=async t=>{t.commit("beginRequestUser");try{const e=await cR();e?t.commit("successRequestUser",e):t.commit("failRequestUser","Could not complete request!!")}catch(e){t.commit("failRequestUser",e)}},wR=async t=>{try{const e=await fR();t.commit("successLogOut",e)}catch(e){t.commit("failLogOut",e)}},ER=async(t,{oldPassword:e,newPassword:n})=>{if(e===""||n==="")return t.commit("failChangePassword","Old and new password are required");if(n===e)return t.commit("failChangePassword","New password must be different from old password");t.commit("beginChangePassword");try{await lR(e)?await pR(n)===!0?(t.commit("successChangePassword"),console.debug("Password changed successfully")):(t.commit("failChangePassword","Could not change password"),console.debug("Could not change password")):(t.commit("failChangePassword","Could not complete change password!!"),console.debug("Could not complete change password!!"))}catch(s){return t.commit("failChangePassword",s)}},bR={state:()=>z1,mutations:{beginSignIn:G1,successSignIn:Q1,failSignIn:Y1,beginRequestUser:eR,successRequestUser:tR,failRequestUser:nR,successLogOut:sR,failLogOut:rR,beginRegister:J1,successRegister:X1,failRegister:Z1,beginChangePassword:iR,successChangePassword:oR,failChangePassword:aR},actions:{signInAction:mR,signInGoogleAction:yR,getUserAction:_R,logOutAction:wR,registerAction:vR,changePasswordAction:ER}},IR={races:[]},TR=(t,e)=>{t.races=e},SR=async t=>{try{const e=await gR();e&&t.commit("getRacesMutation",e)}catch(e){console.error("Failed getting errors",e)}},CR={state:()=>IR,mutations:{getRacesMutation:TR},actions:{getRacesAction:SR}},AR={changePasswordSheet:{isShow:!1}},kR=t=>{t.changePasswordSheet.isShow=!t.changePasswordSheet.isShow},RR=t=>{t.commit("activeChangePasswordSheet")},xR={state:AR,mutations:{activeChangePasswordSheet:kR},actions:{activeChangePasswordSheetAction:RR}},NR=pC({modules:{countExample:K1,auth:bR,datastore:CR,actionSheet:xR}}),tt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Sd={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation"}},filterMatchModeOptions:{text:[tt.STARTS_WITH,tt.CONTAINS,tt.NOT_CONTAINS,tt.ENDS_WITH,tt.EQUALS,tt.NOT_EQUALS],numeric:[tt.EQUALS,tt.NOT_EQUALS,tt.LESS_THAN,tt.LESS_THAN_OR_EQUAL_TO,tt.GREATER_THAN,tt.GREATER_THAN_OR_EQUAL_TO],date:[tt.DATE_IS,tt.DATE_IS_NOT,tt.DATE_BEFORE,tt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},OR=Symbol();var DR={install:(t,e)=>{let n=e?{...Sd,...e}:{...Sd};const s={config:ln(n)};t.config.globalProperties.$primevue=s,t.provide(OR,s)}};const jm=p_(SC);jm.use(NR).use(oa).use(DR);jm.mount("#app");
