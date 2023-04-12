(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ao(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function lo(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?mf(r):lo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(xe(t))return t;if(ue(t))return t}}const ff=/;(?![^(]*\))/g,hf=/:([^]+)/,pf=/\/\*.*?\*\//gs;function mf(t){const e={};return t.replace(pf,"").split(ff).forEach(n=>{if(n){const r=n.split(hf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gr(t){let e="";if(xe(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=gr(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yf=ao(gf);function ic(t){return!!t||t===""}function _f(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Fn(t[r],e[r]);return n}function Fn(t,e){if(t===e)return!0;let n=oa(t),r=oa(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=yr(t),r=yr(e),n||r)return t===e;if(n=V(t),r=V(e),n||r)return n&&r?_f(t,e):!1;if(n=ue(t),r=ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fn(t[o],e[o]))return!1}}return String(t)===String(e)}function vf(t,e){return t.findIndex(n=>Fn(n,e))}const gt=t=>xe(t)?t:t==null?"":V(t)||ue(t)&&(t.toString===lc||!q(t.toString))?JSON.stringify(t,oc,2):String(t),oc=(t,e)=>e&&e.__v_isRef?oc(t,e.value):Nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ns(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!V(e)&&!cc(e)?String(e):e,de={},Pn=[],lt=()=>{},bf=()=>!1,wf=/^on[^a-z]/,Ps=t=>wf.test(t),co=t=>t.startsWith("onUpdate:"),Pe=Object.assign,uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},If=Object.prototype.hasOwnProperty,ee=(t,e)=>If.call(t,e),V=Array.isArray,Nn=t=>Fr(t)==="[object Map]",Ns=t=>Fr(t)==="[object Set]",oa=t=>Fr(t)==="[object Date]",q=t=>typeof t=="function",xe=t=>typeof t=="string",yr=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",ac=t=>ue(t)&&q(t.then)&&q(t.catch),lc=Object.prototype.toString,Fr=t=>lc.call(t),xf=t=>Fr(t).slice(8,-1),cc=t=>Fr(t)==="[object Object]",fo=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ts=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ef=/-(\w)/g,Et=Ds(t=>t.replace(Ef,(e,n)=>n?n.toUpperCase():"")),Tf=/\B([A-Z])/g,Jn=Ds(t=>t.replace(Tf,"-$1").toLowerCase()),Ms=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),ai=Ds(t=>t?`on${Ms(t)}`:""),_r=(t,e)=>!Object.is(t,e),ns=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let aa;const Sf=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let qe;class uc{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=qe,!e&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=qe;try{return qe=this,e()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function dc(t){return new uc(t)}function kf(t,e=qe){e&&e.active&&e.effects.push(t)}function Af(){return qe}function Cf(t){qe&&qe.cleanups.push(t)}const ho=t=>{const e=new Set(t);return e.w=0,e.n=0,e},fc=t=>(t.w&tn)>0,hc=t=>(t.n&tn)>0,Rf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=tn},Of=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];fc(s)&&!hc(s)?s.delete(t):e[n++]=s,s.w&=~tn,s.n&=~tn}e.length=n}},Ri=new WeakMap;let rr=0,tn=1;const Oi=30;let ot;const pn=Symbol(""),Pi=Symbol("");class po{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kf(this,r)}run(){if(!this.active)return this.fn();let e=ot,n=Yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ot,ot=this,Yt=!0,tn=1<<++rr,rr<=Oi?Rf(this):la(this),this.fn()}finally{rr<=Oi&&Of(this),tn=1<<--rr,ot=this.parent,Yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yt=!0;const pc=[];function Yn(){pc.push(Yt),Yt=!1}function Qn(){const t=pc.pop();Yt=t===void 0?!0:t}function Ye(t,e,n){if(Yt&&ot){let r=Ri.get(t);r||Ri.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ho()),mc(s)}}function mc(t,e){let n=!1;rr<=Oi?hc(t)||(t.n|=tn,n=!fc(t)):n=!t.has(ot),n&&(t.add(ot),ot.deps.push(t))}function Ot(t,e,n,r,s,i){const o=Ri.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=vr(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?fo(n)&&a.push(o.get("length")):(a.push(o.get(pn)),Nn(t)&&a.push(o.get(Pi)));break;case"delete":V(t)||(a.push(o.get(pn)),Nn(t)&&a.push(o.get(Pi)));break;case"set":Nn(t)&&a.push(o.get(pn));break}if(a.length===1)a[0]&&Ni(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ni(ho(l))}}function Ni(t,e){const n=V(t)?t:[...t];for(const r of n)r.computed&&ca(r);for(const r of n)r.computed||ca(r)}function ca(t,e){(t!==ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pf=ao("__proto__,__v_isRef,__isVue"),gc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yr)),Nf=mo(),Df=mo(!1,!0),Mf=mo(!0),ua=Lf();function Lf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)Ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yn();const r=te(this)[e].apply(this,n);return Qn(),r}}),t}function mo(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Xf:wc:e?bc:vc).get(r))return r;const o=V(r);if(!t&&o&&ee(ua,s))return Reflect.get(ua,s,i);const a=Reflect.get(r,s,i);return(yr(s)?gc.has(s):Pf(s))||(t||Ye(r,"get",s),e)?a:he(a)?o&&fo(s)?a:a.value:ue(a)?t?Ic(a):Xn(a):a}}const Ff=yc(),$f=yc(!0);function yc(t=!1){return function(n,r,s,i){let o=n[r];if($n(o)&&he(o)&&!he(s))return!1;if(!t&&(!hs(s)&&!$n(s)&&(o=te(o),s=te(s)),!V(n)&&he(o)&&!he(s)))return o.value=s,!0;const a=V(n)&&fo(r)?Number(r)<n.length:ee(n,r),l=Reflect.set(n,r,s,i);return n===te(i)&&(a?_r(s,o)&&Ot(n,"set",r,s):Ot(n,"add",r,s)),l}}function Uf(t,e){const n=ee(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ot(t,"delete",e,void 0),r}function Vf(t,e){const n=Reflect.has(t,e);return(!yr(e)||!gc.has(e))&&Ye(t,"has",e),n}function jf(t){return Ye(t,"iterate",V(t)?"length":pn),Reflect.ownKeys(t)}const _c={get:Nf,set:Ff,deleteProperty:Uf,has:Vf,ownKeys:jf},Bf={get:Mf,set(t,e){return!0},deleteProperty(t,e){return!0}},Hf=Pe({},_c,{get:Df,set:$f}),go=t=>t,Ls=t=>Reflect.getPrototypeOf(t);function Kr(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&Ye(s,"get",e),Ye(s,"get",i));const{has:o}=Ls(s),a=r?go:n?vo:br;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wr(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&Ye(r,"has",t),Ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gr(t,e=!1){return t=t.__v_raw,!e&&Ye(te(t),"iterate",pn),Reflect.get(t,"size",t)}function da(t){t=te(t);const e=te(this);return Ls(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function fa(t,e){e=te(e);const n=te(this),{has:r,get:s}=Ls(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?_r(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function ha(t){const e=te(this),{has:n,get:r}=Ls(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ot(e,"delete",t,void 0),i}function pa(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function Jr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),l=e?go:t?vo:br;return!t&&Ye(a,"iterate",pn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Yr(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=Nn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?go:e?vo:br;return!e&&Ye(i,"iterate",l?Pi:pn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ft(t){return function(...e){return t==="delete"?!1:this}}function qf(){const t={get(i){return Kr(this,i)},get size(){return Gr(this)},has:Wr,add:da,set:fa,delete:ha,clear:pa,forEach:Jr(!1,!1)},e={get(i){return Kr(this,i,!1,!0)},get size(){return Gr(this)},has:Wr,add:da,set:fa,delete:ha,clear:pa,forEach:Jr(!1,!0)},n={get(i){return Kr(this,i,!0)},get size(){return Gr(this,!0)},has(i){return Wr.call(this,i,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:Jr(!0,!1)},r={get(i){return Kr(this,i,!0,!0)},get size(){return Gr(this,!0)},has(i){return Wr.call(this,i,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:Jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yr(i,!1,!1),n[i]=Yr(i,!0,!1),e[i]=Yr(i,!1,!0),r[i]=Yr(i,!0,!0)}),[t,n,e,r]}const[zf,Kf,Wf,Gf]=qf();function yo(t,e){const n=e?t?Gf:Wf:t?Kf:zf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const Jf={get:yo(!1,!1)},Yf={get:yo(!1,!0)},Qf={get:yo(!0,!1)},vc=new WeakMap,bc=new WeakMap,wc=new WeakMap,Xf=new WeakMap;function Zf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eh(t){return t.__v_skip||!Object.isExtensible(t)?0:Zf(xf(t))}function Xn(t){return $n(t)?t:_o(t,!1,_c,Jf,vc)}function th(t){return _o(t,!1,Hf,Yf,bc)}function Ic(t){return _o(t,!0,Bf,Qf,wc)}function _o(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=eh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qt(t){return $n(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function hs(t){return!!(t&&t.__v_isShallow)}function xc(t){return Qt(t)||$n(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Un(t){return fs(t,"__v_skip",!0),t}const br=t=>ue(t)?Xn(t):t,vo=t=>ue(t)?Ic(t):t;function Ec(t){Yt&&ot&&(t=te(t),mc(t.dep||(t.dep=ho())))}function Tc(t,e){t=te(t),t.dep&&Ni(t.dep)}function he(t){return!!(t&&t.__v_isRef===!0)}function Ue(t){return Sc(t,!1)}function nh(t){return Sc(t,!0)}function Sc(t,e){return he(t)?t:new rh(t,e)}class rh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:br(e)}get value(){return Ec(this),this._value}set value(e){const n=this.__v_isShallow||hs(e)||$n(e);e=n?e:te(e),_r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:br(e),Tc(this))}}function ne(t){return he(t)?t.value:t}const sh={get:(t,e,n)=>ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kc(t){return Qt(t)?t:new Proxy(t,sh)}function ih(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=ah(t,n);return e}class oh{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ah(t,e,n){const r=t[e];return he(r)?r:new oh(t,e,n)}var Ac;class lh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ac]=!1,this._dirty=!0,this.effect=new po(e,()=>{this._dirty||(this._dirty=!0,Tc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return Ec(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ac="__v_isReadonly";function ch(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=lt):(r=t.get,s=t.set),new lh(r,s,i||!s,n)}function Xt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Fs(i,e,n)}return s}function Ze(t,e,n,r){if(q(t)){const i=Xt(t,e,n,r);return i&&ac(i)&&i.catch(o=>{Fs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ze(t[i],e,n,r));return s}function Fs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Xt(l,null,10,[t,o,a]);return}}uh(t,n,s,r)}function uh(t,e,n,r=!0){console.error(t)}let wr=!1,Di=!1;const Oe=[];let vt=0;const Dn=[];let kt=null,cn=0;const Cc=Promise.resolve();let bo=null;function wo(t){const e=bo||Cc;return t?e.then(this?t.bind(this):t):e}function dh(t){let e=vt+1,n=Oe.length;for(;e<n;){const r=e+n>>>1;Ir(Oe[r])<t?e=r+1:n=r}return e}function Io(t){(!Oe.length||!Oe.includes(t,wr&&t.allowRecurse?vt+1:vt))&&(t.id==null?Oe.push(t):Oe.splice(dh(t.id),0,t),Rc())}function Rc(){!wr&&!Di&&(Di=!0,bo=Cc.then(Pc))}function fh(t){const e=Oe.indexOf(t);e>vt&&Oe.splice(e,1)}function hh(t){V(t)?Dn.push(...t):(!kt||!kt.includes(t,t.allowRecurse?cn+1:cn))&&Dn.push(t),Rc()}function ma(t,e=wr?vt+1:0){for(;e<Oe.length;e++){const n=Oe[e];n&&n.pre&&(Oe.splice(e,1),e--,n())}}function Oc(t){if(Dn.length){const e=[...new Set(Dn)];if(Dn.length=0,kt){kt.push(...e);return}for(kt=e,kt.sort((n,r)=>Ir(n)-Ir(r)),cn=0;cn<kt.length;cn++)kt[cn]();kt=null,cn=0}}const Ir=t=>t.id==null?1/0:t.id,ph=(t,e)=>{const n=Ir(t)-Ir(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pc(t){Di=!1,wr=!0,Oe.sort(ph);const e=lt;try{for(vt=0;vt<Oe.length;vt++){const n=Oe[vt];n&&n.active!==!1&&Xt(n,null,14)}}finally{vt=0,Oe.length=0,Oc(),wr=!1,bo=null,(Oe.length||Dn.length)&&Pc()}}function mh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||de;h&&(s=n.map(m=>xe(m)?m.trim():m)),f&&(s=n.map(vr))}let a,l=r[a=ai(e)]||r[a=ai(Et(e))];!l&&i&&(l=r[a=ai(Jn(e))]),l&&Ze(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ze(c,t,6,s)}}function Nc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=Nc(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ue(t)&&r.set(t,null),null):(V(i)?i.forEach(l=>o[l]=null):Pe(o,i),ue(t)&&r.set(t,o),o)}function $s(t,e){return!t||!Ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Jn(e))||ee(t,e))}let We=null,Dc=null;function ps(t){const e=We;return We=t,Dc=t&&t.type.__scopeId||null,e}function Mc(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sa(-1);const i=ps(e);let o;try{o=t(...s)}finally{ps(i),r._d&&Sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function li(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:w,inheritAttrs:S}=t;let F,R;const U=ps(t);try{if(n.shapeFlag&4){const z=s||r;F=_t(u.call(z,z,f,i,m,h,w)),R=l}else{const z=e;F=_t(z.length>1?z(i,{attrs:l,slots:a,emit:c}):z(i,null)),R=e.props?l:gh(l)}}catch(z){or.length=0,Fs(z,t,1),F=_e(ct)}let P=F;if(R&&S!==!1){const z=Object.keys(R),{shapeFlag:W}=P;z.length&&W&7&&(o&&z.some(co)&&(R=yh(R,o)),P=nn(P,R))}return n.dirs&&(P=nn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,ps(U),F}const gh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ps(n))&&((e||(e={}))[n]=t[n]);return e},yh=(t,e)=>{const n={};for(const r in t)(!co(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _h(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ga(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!$s(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ga(r,o,c):!0:!!o;return!1}function ga(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$s(n,i))return!0}return!1}function vh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bh=t=>t.__isSuspense;function wh(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):hh(t)}function rs(t,e){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[t]=e}}function wt(t,e,n=!1){const r=ke||We;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r.proxy):e}}const Qr={};function sr(t,e,n){return Lc(t,e,n)}function Lc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=ke;let l,c=!1,u=!1;if(he(t)?(l=()=>t.value,c=hs(t)):Qt(t)?(l=()=>t,r=!0):V(t)?(u=!0,c=t.some(P=>Qt(P)||hs(P)),l=()=>t.map(P=>{if(he(P))return P.value;if(Qt(P))return fn(P);if(q(P))return Xt(P,a,2)})):q(t)?e?l=()=>Xt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ze(t,a,3,[h])}:l=lt,e&&r){const P=l;l=()=>fn(P())}let f,h=P=>{f=R.onStop=()=>{Xt(P,a,4)}},m;if(Er)if(h=lt,e?n&&Ze(e,a,3,[l(),u?[]:void 0,h]):l(),s==="sync"){const P=yp();m=P.__watcherHandles||(P.__watcherHandles=[])}else return lt;let w=u?new Array(t.length).fill(Qr):Qr;const S=()=>{if(R.active)if(e){const P=R.run();(r||c||(u?P.some((z,W)=>_r(z,w[W])):_r(P,w)))&&(f&&f(),Ze(e,a,3,[P,w===Qr?void 0:u&&w[0]===Qr?[]:w,h]),w=P)}else R.run()};S.allowRecurse=!!e;let F;s==="sync"?F=S:s==="post"?F=()=>Fe(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),F=()=>Io(S));const R=new po(l,F);e?n?S():w=R.run():s==="post"?Fe(R.run.bind(R),a&&a.suspense):R.run();const U=()=>{R.stop(),a&&a.scope&&uo(a.scope.effects,R)};return m&&m.push(U),U}function Ih(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?Fc(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=ke;jn(this);const a=Lc(s,i.bind(r),n);return o?jn(o):mn(),a}function Fc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function fn(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))fn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)fn(t[n],e);else if(Ns(t)||Nn(t))t.forEach(n=>{fn(n,e)});else if(cc(t))for(const n in t)fn(t[n],e);return t}function xh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xo(()=>{t.isMounted=!0}),Bc(()=>{t.isUnmounting=!0}),t}const Qe=[Function,Array],Eh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},setup(t,{slots:e}){const n=tu(),r=xh();let s;return()=>{const i=e.default&&Uc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==ct){o=S;break}}const a=te(t),{mode:l}=a;if(r.isLeaving)return ci(o);const c=ya(o);if(!c)return ci(o);const u=Mi(c,a,r,n);Li(c,u);const f=n.subTree,h=f&&ya(f);let m=!1;const{getTransitionKey:w}=c.type;if(w){const S=w();s===void 0?s=S:S!==s&&(s=S,m=!0)}if(h&&h.type!==ct&&(!un(c,h)||m)){const S=Mi(h,a,r,n);if(Li(h,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ci(o);l==="in-out"&&c.type!==ct&&(S.delayLeave=(F,R,U)=>{const P=$c(r,h);P[String(h.key)]=h,F._leaveCb=()=>{R(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=U})}return o}}},Th=Eh;function $c(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mi(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:S,onAppear:F,onAfterAppear:R,onAppearCancelled:U}=e,P=String(t.key),z=$c(n,t),W=(O,Y)=>{O&&Ze(O,r,9,Y)},ae=(O,Y)=>{const X=Y[1];W(O,Y),V(O)?O.every(pe=>pe.length<=1)&&X():O.length<=1&&X()},K={mode:i,persisted:o,beforeEnter(O){let Y=a;if(!n.isMounted)if(s)Y=S||a;else return;O._leaveCb&&O._leaveCb(!0);const X=z[P];X&&un(t,X)&&X.el._leaveCb&&X.el._leaveCb(),W(Y,[O])},enter(O){let Y=l,X=c,pe=u;if(!n.isMounted)if(s)Y=F||l,X=R||c,pe=U||u;else return;let Ee=!1;const Be=O._enterCb=De=>{Ee||(Ee=!0,De?W(pe,[O]):W(X,[O]),K.delayedLeave&&K.delayedLeave(),O._enterCb=void 0)};Y?ae(Y,[O,Be]):Be()},leave(O,Y){const X=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Y();W(f,[O]);let pe=!1;const Ee=O._leaveCb=Be=>{pe||(pe=!0,Y(),Be?W(w,[O]):W(m,[O]),O._leaveCb=void 0,z[X]===t&&delete z[X])};z[X]=t,h?ae(h,[O,Ee]):Ee()},clone(O){return Mi(O,e,n,r)}};return K}function ci(t){if(Us(t))return t=nn(t),t.children=null,t}function ya(t){return Us(t)?t.children?t.children[0]:void 0:t}function Li(t,e){t.shapeFlag&6&&t.component?Li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Uc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ze?(o.patchFlag&128&&s++,r=r.concat(Uc(o.children,e,a))):(e||o.type!==ct)&&r.push(a!=null?nn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Vc(t){return q(t)?{setup:t,name:t.name}:t}const ss=t=>!!t.type.__asyncLoader,Us=t=>t.type.__isKeepAlive;function Sh(t,e){jc(t,"a",e)}function kh(t,e){jc(t,"da",e)}function jc(t,e,n=ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Us(s.parent.vnode)&&Ah(r,e,n,s),s=s.parent}}function Ah(t,e,n,r){const s=Vs(e,t,r,!0);Hc(()=>{uo(r[e],s)},n)}function Vs(t,e,n=ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yn(),jn(n);const a=Ze(e,n,t,o);return mn(),Qn(),a});return r?s.unshift(i):s.push(i),i}}const Lt=t=>(e,n=ke)=>(!Er||t==="sp")&&Vs(t,(...r)=>e(...r),n),Ch=Lt("bm"),xo=Lt("m"),Rh=Lt("bu"),Oh=Lt("u"),Bc=Lt("bum"),Hc=Lt("um"),Ph=Lt("sp"),Nh=Lt("rtg"),Dh=Lt("rtc");function Mh(t,e=ke){Vs("ec",t,e)}function Xe(t,e){const n=We;if(n===null)return t;const r=Hs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=de]=e[i];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&fn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function sn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Yn(),Ze(l,n,8,[t.el,a,t,e]),Qn())}}const qc="components";function Lh(t,e){return $h(qc,t,!0,e)||t}const Fh=Symbol();function $h(t,e,n=!0,r=!1){const s=We||ke;if(s){const i=s.type;if(t===qc){const a=pp(i,!1);if(a&&(a===e||a===Et(e)||a===Ms(Et(e))))return i}const o=_a(s[t]||i[t],e)||_a(s.appContext[t],e);return!o&&r?i:o}}function _a(t,e){return t&&(t[e]||t[Et(e)]||t[Ms(Et(e))])}function va(t,e,n,r){let s;const i=n&&n[r];if(V(t)||xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Fi=t=>t?nu(t)?Hs(t)||t.proxy:Fi(t.parent):null,ir=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fi(t.parent),$root:t=>Fi(t.root),$emit:t=>t.emit,$options:t=>Eo(t),$forceUpdate:t=>t.f||(t.f=()=>Io(t.update)),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>Ih.bind(t)}),ui=(t,e)=>t!==de&&!t.__isScriptSetup&&ee(t,e),Uh={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ui(r,e))return o[e]=1,r[e];if(s!==de&&ee(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,i[e];if(n!==de&&ee(n,e))return o[e]=4,n[e];$i&&(o[e]=0)}}const u=ir[e];let f,h;if(u)return e==="$attrs"&&Ye(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==de&&ee(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ee(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ui(s,e)?(s[e]=n,!0):r!==de&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&ee(t,o)||ui(e,o)||(a=i[0])&&ee(a,o)||ee(r,o)||ee(ir,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $i=!0;function Vh(t){const e=Eo(t),n=t.proxy,r=t.ctx;$i=!1,e.beforeCreate&&ba(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:w,activated:S,deactivated:F,beforeDestroy:R,beforeUnmount:U,destroyed:P,unmounted:z,render:W,renderTracked:ae,renderTriggered:K,errorCaptured:O,serverPrefetch:Y,expose:X,inheritAttrs:pe,components:Ee,directives:Be,filters:De}=e;if(c&&jh(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ie=o[le];q(ie)&&(r[le]=ie.bind(n))}if(s){const le=s.call(n,n);ue(le)&&(t.data=Xn(le))}if($i=!0,i)for(const le in i){const ie=i[le],rt=q(ie)?ie.bind(n,n):q(ie.get)?ie.get.bind(n,n):lt,rn=!q(ie)&&q(ie.set)?ie.set.bind(n):lt,st=Ve({get:rt,set:rn});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>st.value,set:Le=>st.value=Le})}if(a)for(const le in a)zc(a[le],r,n,le);if(l){const le=q(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ie=>{rs(ie,le[ie])})}u&&ba(u,t,"c");function ve(le,ie){V(ie)?ie.forEach(rt=>le(rt.bind(n))):ie&&le(ie.bind(n))}if(ve(Ch,f),ve(xo,h),ve(Rh,m),ve(Oh,w),ve(Sh,S),ve(kh,F),ve(Mh,O),ve(Dh,ae),ve(Nh,K),ve(Bc,U),ve(Hc,z),ve(Ph,Y),V(X))if(X.length){const le=t.exposed||(t.exposed={});X.forEach(ie=>{Object.defineProperty(le,ie,{get:()=>n[ie],set:rt=>n[ie]=rt})})}else t.exposed||(t.exposed={});W&&t.render===lt&&(t.render=W),pe!=null&&(t.inheritAttrs=pe),Ee&&(t.components=Ee),Be&&(t.directives=Be)}function jh(t,e,n=lt,r=!1){V(t)&&(t=Ui(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=wt(i.from||s,i.default,!0):o=wt(i.from||s):o=wt(i),he(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ba(t,e,n){Ze(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zc(t,e,n,r){const s=r.includes(".")?Fc(n,r):()=>n[r];if(xe(t)){const i=e[t];q(i)&&sr(s,i)}else if(q(t))sr(s,t.bind(n));else if(ue(t))if(V(t))t.forEach(i=>zc(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&sr(s,i,t)}}function Eo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ms(l,c,o,!0)),ms(l,e,o)),ue(e)&&i.set(e,l),l}function ms(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ms(t,i,n,!0),s&&s.forEach(o=>ms(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Bh[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Bh={data:wa,props:an,emits:an,methods:an,computed:an,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:an,directives:an,watch:qh,provide:wa,inject:Hh};function wa(t,e){return e?t?function(){return Pe(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Hh(t,e){return an(Ui(t),Ui(e))}function Ui(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function qh(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const r in e)n[r]=Me(t[r],e[r]);return n}function zh(t,e,n,r=!1){const s={},i={};fs(i,Bs,1),t.propsDefaults=Object.create(null),Kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:th(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Kh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if($s(t.emitsOptions,h))continue;const m=e[h];if(l)if(ee(i,h))m!==i[h]&&(i[h]=m,c=!0);else{const w=Et(h);s[w]=Vi(l,a,w,m,t,!1)}else m!==i[h]&&(i[h]=m,c=!0)}}}else{Kc(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=Jn(f))===f||!ee(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Vi(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],c=!0)}c&&Ot(t,"set","$attrs")}function Kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ts(l))continue;const c=e[l];let u;s&&ee(s,u=Et(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:$s(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=te(n),c=a||de;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Vi(s,l,f,c[f],t,!ee(c,f))}}return o}function Vi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&q(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(jn(s),r=c[n]=l.call(null,e),mn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Jn(n))&&(r=!0))}return r}function Wc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!q(t)){const u=f=>{l=!0;const[h,m]=Wc(f,e,!0);Pe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ue(t)&&r.set(t,Pn),Pn;if(V(i))for(let u=0;u<i.length;u++){const f=Et(i[u]);Ia(f)&&(o[f]=de)}else if(i)for(const u in i){const f=Et(u);if(Ia(f)){const h=i[u],m=o[f]=V(h)||q(h)?{type:h}:Object.assign({},h);if(m){const w=Ta(Boolean,m.type),S=Ta(String,m.type);m[0]=w>-1,m[1]=S<0||w<S,(w>-1||ee(m,"default"))&&a.push(f)}}}const c=[o,a];return ue(t)&&r.set(t,c),c}function Ia(t){return t[0]!=="$"}function xa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ea(t,e){return xa(t)===xa(e)}function Ta(t,e){return V(e)?e.findIndex(n=>Ea(n,t)):q(e)&&Ea(e,t)?0:-1}const Gc=t=>t[0]==="_"||t==="$stable",To=t=>V(t)?t.map(_t):[_t(t)],Wh=(t,e,n)=>{if(e._n)return e;const r=Mc((...s)=>To(e(...s)),n);return r._c=!1,r},Jc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gc(s))continue;const i=t[s];if(q(i))e[s]=Wh(s,i,r);else if(i!=null){const o=To(i);e[s]=()=>o}}},Yc=(t,e)=>{const n=To(e);t.slots.default=()=>n},Gh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),fs(e,"_",n)):Jc(e,t.slots={})}else t.slots={},e&&Yc(t,e);fs(t.slots,Bs,1)},Jh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Jc(e,s)),o=e}else e&&(Yc(t,e),o={default:1});if(i)for(const a in s)!Gc(a)&&!(a in o)&&delete s[a]};function Qc(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function Qh(t,e){return function(r,s=null){q(r)||(r=Object.assign({},r)),s!=null&&!ue(s)&&(s=null);const i=Qc(),o=new Set;let a=!1;const l=i.app={_uid:Yh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_p,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const h=_e(r,s);return h.appContext=i,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Hs(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function ji(t,e,n,r,s=!1){if(V(t)){t.forEach((h,m)=>ji(h,e&&(V(e)?e[m]:e),n,r,s));return}if(ss(r)&&!s)return;const i=r.shapeFlag&4?Hs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(xe(c)?(u[c]=null,ee(f,c)&&(f[c]=null)):he(c)&&(c.value=null)),q(l))Xt(l,a,12,[o,u]);else{const h=xe(l),m=he(l);if(h||m){const w=()=>{if(t.f){const S=h?ee(f,l)?f[l]:u[l]:l.value;s?V(S)&&uo(S,i):V(S)?S.includes(i)||S.push(i):h?(u[l]=[i],ee(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ee(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Fe(w,n)):w()}}}const Fe=wh;function Xh(t){return Zh(t)}function Zh(t,e){const n=Sf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=lt,insertStaticContent:w}=t,S=(d,p,g,_=null,b=null,E=null,A=!1,x=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!un(d,p)&&(_=k(d),Le(d,b,E,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:M,shapeFlag:N}=p;switch(I){case js:F(d,p,g,_);break;case ct:R(d,p,g,_);break;case is:d==null&&U(p,g,_,A);break;case ze:Ee(d,p,g,_,b,E,A,x,T);break;default:N&1?W(d,p,g,_,b,E,A,x,T):N&6?Be(d,p,g,_,b,E,A,x,T):(N&64||N&128)&&I.process(d,p,g,_,b,E,A,x,T,Z)}M!=null&&b&&ji(M,d&&d.ref,E,p||d,!p)},F=(d,p,g,_)=>{if(d==null)r(p.el=a(p.children),g,_);else{const b=p.el=d.el;p.children!==d.children&&c(b,p.children)}},R=(d,p,g,_)=>{d==null?r(p.el=l(p.children||""),g,_):p.el=d.el},U=(d,p,g,_)=>{[d.el,d.anchor]=w(d.children,p,g,_,d.el,d.anchor)},P=({el:d,anchor:p},g,_)=>{let b;for(;d&&d!==p;)b=h(d),r(d,g,_),d=b;r(p,g,_)},z=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},W=(d,p,g,_,b,E,A,x,T)=>{A=A||p.type==="svg",d==null?ae(p,g,_,b,E,A,x,T):Y(d,p,b,E,A,x,T)},ae=(d,p,g,_,b,E,A,x)=>{let T,I;const{type:M,props:N,shapeFlag:L,transition:B,dirs:J}=d;if(T=d.el=o(d.type,E,N&&N.is,N),L&8?u(T,d.children):L&16&&O(d.children,T,null,_,b,E&&M!=="foreignObject",A,x),J&&sn(d,null,_,"created"),N){for(const oe in N)oe!=="value"&&!ts(oe)&&i(T,oe,null,N[oe],E,d.children,_,b,C);"value"in N&&i(T,"value",null,N.value),(I=N.onVnodeBeforeMount)&&mt(I,_,d)}K(T,d,d.scopeId,A,_),J&&sn(d,null,_,"beforeMount");const ce=(!b||b&&!b.pendingBranch)&&B&&!B.persisted;ce&&B.beforeEnter(T),r(T,p,g),((I=N&&N.onVnodeMounted)||ce||J)&&Fe(()=>{I&&mt(I,_,d),ce&&B.enter(T),J&&sn(d,null,_,"mounted")},b)},K=(d,p,g,_,b)=>{if(g&&m(d,g),_)for(let E=0;E<_.length;E++)m(d,_[E]);if(b){let E=b.subTree;if(p===E){const A=b.vnode;K(d,A,A.scopeId,A.slotScopeIds,b.parent)}}},O=(d,p,g,_,b,E,A,x,T=0)=>{for(let I=T;I<d.length;I++){const M=d[I]=x?Vt(d[I]):_t(d[I]);S(null,M,p,g,_,b,E,A,x)}},Y=(d,p,g,_,b,E,A)=>{const x=p.el=d.el;let{patchFlag:T,dynamicChildren:I,dirs:M}=p;T|=d.patchFlag&16;const N=d.props||de,L=p.props||de;let B;g&&on(g,!1),(B=L.onVnodeBeforeUpdate)&&mt(B,g,p,d),M&&sn(p,d,g,"beforeUpdate"),g&&on(g,!0);const J=b&&p.type!=="foreignObject";if(I?X(d.dynamicChildren,I,x,g,_,J,E):A||ie(d,p,x,null,g,_,J,E,!1),T>0){if(T&16)pe(x,p,N,L,g,_,b);else if(T&2&&N.class!==L.class&&i(x,"class",null,L.class,b),T&4&&i(x,"style",N.style,L.style,b),T&8){const ce=p.dynamicProps;for(let oe=0;oe<ce.length;oe++){const be=ce[oe],it=N[be],Sn=L[be];(Sn!==it||be==="value")&&i(x,be,it,Sn,b,d.children,g,_,C)}}T&1&&d.children!==p.children&&u(x,p.children)}else!A&&I==null&&pe(x,p,N,L,g,_,b);((B=L.onVnodeUpdated)||M)&&Fe(()=>{B&&mt(B,g,p,d),M&&sn(p,d,g,"updated")},_)},X=(d,p,g,_,b,E,A)=>{for(let x=0;x<p.length;x++){const T=d[x],I=p[x],M=T.el&&(T.type===ze||!un(T,I)||T.shapeFlag&70)?f(T.el):g;S(T,I,M,null,_,b,E,A,!0)}},pe=(d,p,g,_,b,E,A)=>{if(g!==_){if(g!==de)for(const x in g)!ts(x)&&!(x in _)&&i(d,x,g[x],null,A,p.children,b,E,C);for(const x in _){if(ts(x))continue;const T=_[x],I=g[x];T!==I&&x!=="value"&&i(d,x,I,T,A,p.children,b,E,C)}"value"in _&&i(d,"value",g.value,_.value)}},Ee=(d,p,g,_,b,E,A,x,T)=>{const I=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:B}=p;B&&(x=x?x.concat(B):B),d==null?(r(I,g,_),r(M,g,_),O(p.children,g,M,b,E,A,x,T)):N>0&&N&64&&L&&d.dynamicChildren?(X(d.dynamicChildren,L,g,b,E,A,x),(p.key!=null||b&&p===b.subTree)&&Xc(d,p,!0)):ie(d,p,g,M,b,E,A,x,T)},Be=(d,p,g,_,b,E,A,x,T)=>{p.slotScopeIds=x,d==null?p.shapeFlag&512?b.ctx.activate(p,g,_,A,T):De(p,g,_,b,E,A,T):Te(d,p,T)},De=(d,p,g,_,b,E,A)=>{const x=d.component=cp(d,_,b);if(Us(d)&&(x.ctx.renderer=Z),up(x),x.asyncDep){if(b&&b.registerDep(x,ve),!d.el){const T=x.subTree=_e(ct);R(null,T,p,g)}return}ve(x,d,p,g,b,E,A)},Te=(d,p,g)=>{const _=p.component=d.component;if(_h(d,p,g))if(_.asyncDep&&!_.asyncResolved){le(_,p,g);return}else _.next=p,fh(_.update),_.update();else p.el=d.el,_.vnode=p},ve=(d,p,g,_,b,E,A)=>{const x=()=>{if(d.isMounted){let{next:M,bu:N,u:L,parent:B,vnode:J}=d,ce=M,oe;on(d,!1),M?(M.el=J.el,le(d,M,A)):M=J,N&&ns(N),(oe=M.props&&M.props.onVnodeBeforeUpdate)&&mt(oe,B,M,J),on(d,!0);const be=li(d),it=d.subTree;d.subTree=be,S(it,be,f(it.el),k(it),d,b,E),M.el=be.el,ce===null&&vh(d,be.el),L&&Fe(L,b),(oe=M.props&&M.props.onVnodeUpdated)&&Fe(()=>mt(oe,B,M,J),b)}else{let M;const{el:N,props:L}=p,{bm:B,m:J,parent:ce}=d,oe=ss(p);if(on(d,!1),B&&ns(B),!oe&&(M=L&&L.onVnodeBeforeMount)&&mt(M,ce,p),on(d,!0),N&&G){const be=()=>{d.subTree=li(d),G(N,d.subTree,d,b,null)};oe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=li(d);S(null,be,g,_,d,b,E),p.el=be.el}if(J&&Fe(J,b),!oe&&(M=L&&L.onVnodeMounted)){const be=p;Fe(()=>mt(M,ce,be),b)}(p.shapeFlag&256||ce&&ss(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Fe(d.a,b),d.isMounted=!0,p=g=_=null}},T=d.effect=new po(x,()=>Io(I),d.scope),I=d.update=()=>T.run();I.id=d.uid,on(d,!0),I()},le=(d,p,g)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,Kh(d,p.props,_,g),Jh(d,p.children,g),Yn(),ma(),Qn()},ie=(d,p,g,_,b,E,A,x,T=!1)=>{const I=d&&d.children,M=d?d.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:B}=p;if(L>0){if(L&128){rn(I,N,g,_,b,E,A,x,T);return}else if(L&256){rt(I,N,g,_,b,E,A,x,T);return}}B&8?(M&16&&C(I,b,E),N!==I&&u(g,N)):M&16?B&16?rn(I,N,g,_,b,E,A,x,T):C(I,b,E,!0):(M&8&&u(g,""),B&16&&O(N,g,_,b,E,A,x,T))},rt=(d,p,g,_,b,E,A,x,T)=>{d=d||Pn,p=p||Pn;const I=d.length,M=p.length,N=Math.min(I,M);let L;for(L=0;L<N;L++){const B=p[L]=T?Vt(p[L]):_t(p[L]);S(d[L],B,g,null,b,E,A,x,T)}I>M?C(d,b,E,!0,!1,N):O(p,g,_,b,E,A,x,T,N)},rn=(d,p,g,_,b,E,A,x,T)=>{let I=0;const M=p.length;let N=d.length-1,L=M-1;for(;I<=N&&I<=L;){const B=d[I],J=p[I]=T?Vt(p[I]):_t(p[I]);if(un(B,J))S(B,J,g,null,b,E,A,x,T);else break;I++}for(;I<=N&&I<=L;){const B=d[N],J=p[L]=T?Vt(p[L]):_t(p[L]);if(un(B,J))S(B,J,g,null,b,E,A,x,T);else break;N--,L--}if(I>N){if(I<=L){const B=L+1,J=B<M?p[B].el:_;for(;I<=L;)S(null,p[I]=T?Vt(p[I]):_t(p[I]),g,J,b,E,A,x,T),I++}}else if(I>L)for(;I<=N;)Le(d[I],b,E,!0),I++;else{const B=I,J=I,ce=new Map;for(I=J;I<=L;I++){const He=p[I]=T?Vt(p[I]):_t(p[I]);He.key!=null&&ce.set(He.key,I)}let oe,be=0;const it=L-J+1;let Sn=!1,ra=0;const tr=new Array(it);for(I=0;I<it;I++)tr[I]=0;for(I=B;I<=N;I++){const He=d[I];if(be>=it){Le(He,b,E,!0);continue}let pt;if(He.key!=null)pt=ce.get(He.key);else for(oe=J;oe<=L;oe++)if(tr[oe-J]===0&&un(He,p[oe])){pt=oe;break}pt===void 0?Le(He,b,E,!0):(tr[pt-J]=I+1,pt>=ra?ra=pt:Sn=!0,S(He,p[pt],g,null,b,E,A,x,T),be++)}const sa=Sn?ep(tr):Pn;for(oe=sa.length-1,I=it-1;I>=0;I--){const He=J+I,pt=p[He],ia=He+1<M?p[He+1].el:_;tr[I]===0?S(null,pt,g,ia,b,E,A,x,T):Sn&&(oe<0||I!==sa[oe]?st(pt,g,ia,2):oe--)}}},st=(d,p,g,_,b=null)=>{const{el:E,type:A,transition:x,children:T,shapeFlag:I}=d;if(I&6){st(d.component.subTree,p,g,_);return}if(I&128){d.suspense.move(p,g,_);return}if(I&64){A.move(d,p,g,Z);return}if(A===ze){r(E,p,g);for(let N=0;N<T.length;N++)st(T[N],p,g,_);r(d.anchor,p,g);return}if(A===is){P(d,p,g);return}if(_!==2&&I&1&&x)if(_===0)x.beforeEnter(E),r(E,p,g),Fe(()=>x.enter(E),b);else{const{leave:N,delayLeave:L,afterLeave:B}=x,J=()=>r(E,p,g),ce=()=>{N(E,()=>{J(),B&&B()})};L?L(E,J,ce):ce()}else r(E,p,g)},Le=(d,p,g,_=!1,b=!1)=>{const{type:E,props:A,ref:x,children:T,dynamicChildren:I,shapeFlag:M,patchFlag:N,dirs:L}=d;if(x!=null&&ji(x,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const B=M&1&&L,J=!ss(d);let ce;if(J&&(ce=A&&A.onVnodeBeforeUnmount)&&mt(ce,p,d),M&6)v(d.component,g,_);else{if(M&128){d.suspense.unmount(g,_);return}B&&sn(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,b,Z,_):I&&(E!==ze||N>0&&N&64)?C(I,p,g,!1,!0):(E===ze&&N&384||!b&&M&16)&&C(T,p,g),_&&Tn(d)}(J&&(ce=A&&A.onVnodeUnmounted)||B)&&Fe(()=>{ce&&mt(ce,p,d),B&&sn(d,null,p,"unmounted")},g)},Tn=d=>{const{type:p,el:g,anchor:_,transition:b}=d;if(p===ze){zr(g,_);return}if(p===is){z(d);return}const E=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:x}=b,T=()=>A(g,E);x?x(d.el,E,T):T()}else E()},zr=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},v=(d,p,g)=>{const{bum:_,scope:b,update:E,subTree:A,um:x}=d;_&&ns(_),b.stop(),E&&(E.active=!1,Le(A,d,p,g)),x&&Fe(x,p),Fe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(d,p,g,_=!1,b=!1,E=0)=>{for(let A=E;A<d.length;A++)Le(d[A],p,g,_,b)},k=d=>d.shapeFlag&6?k(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),D=(d,p,g)=>{d==null?p._vnode&&Le(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),ma(),Oc(),p._vnode=d},Z={p:S,um:Le,m:st,r:Tn,mt:De,mc:O,pc:ie,pbc:X,n:k,o:t};let fe,G;return e&&([fe,G]=e(Z)),{render:D,hydrate:fe,createApp:Qh(D,fe)}}function on({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vt(s[i]),a.el=o.el),n||Xc(o,a)),a.type===js&&(a.el=o.el)}}function ep(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const tp=t=>t.__isTeleport,ze=Symbol(void 0),js=Symbol(void 0),ct=Symbol(void 0),is=Symbol(void 0),or=[];let at=null;function me(t=!1){or.push(at=t?null:[])}function np(){or.pop(),at=or[or.length-1]||null}let xr=1;function Sa(t){xr+=t}function Zc(t){return t.dynamicChildren=xr>0?at||Pn:null,np(),xr>0&&at&&at.push(t),t}function ye(t,e,n,r,s,i){return Zc(y(t,e,n,r,s,i,!0))}function rp(t,e,n,r,s){return Zc(_e(t,e,n,r,s,!0))}function Bi(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Bs="__vInternal",eu=({key:t})=>t??null,os=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||he(t)||q(t)?{i:We,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,r=0,s=null,i=t===ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eu(e),ref:e&&os(e),scopeId:Dc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return a?(So(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),xr>0&&!o&&at&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&at.push(l),l}const _e=sp;function sp(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fh)&&(t=ct),Bi(t)){const a=nn(t,e,!0);return n&&So(a,n),xr>0&&!i&&at&&(a.shapeFlag&6?at[at.indexOf(t)]=a:at.push(a)),a.patchFlag|=-2,a}if(mp(t)&&(t=t.__vccOpts),e){e=ip(e);let{class:a,style:l}=e;a&&!xe(a)&&(e.class=gr(a)),ue(l)&&(xc(l)&&!V(l)&&(l=Pe({},l)),e.style=lo(l))}const o=xe(t)?1:bh(t)?128:tp(t)?64:ue(t)?4:q(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function ip(t){return t?xc(t)||Bs in t?Pe({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?op(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&eu(a),ref:e&&e.ref?n&&s?V(s)?s.concat(os(e)):[s,os(e)]:os(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Vn(t=" ",e=0){return _e(js,null,t,e)}function $r(t,e){const n=_e(is,null,t);return n.staticCount=e,n}function yt(t="",e=!1){return e?(me(),rp(ct,null,t)):_e(ct,null,t)}function _t(t){return t==null||typeof t=="boolean"?_e(ct):V(t)?_e(ze,null,t.slice()):typeof t=="object"?Vt(t):_e(js,null,String(t))}function Vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nn(t)}function So(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),So(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Bs in e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[Vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function op(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gr([e.class,r.class]));else if(s==="style")e.style=lo([e.style,r.style]);else if(Ps(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function mt(t,e,n,r=null){Ze(t,e,7,[n,r])}const ap=Qc();let lp=0;function cp(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ap,i={uid:lp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new uc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Nc(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mh.bind(null,i),t.ce&&t.ce(i),i}let ke=null;const tu=()=>ke||We,jn=t=>{ke=t,t.scope.on()},mn=()=>{ke&&ke.scope.off(),ke=null};function nu(t){return t.vnode.shapeFlag&4}let Er=!1;function up(t,e=!1){Er=e;const{props:n,children:r}=t.vnode,s=nu(t);zh(t,n,s,e),Gh(t,r);const i=s?dp(t,e):void 0;return Er=!1,i}function dp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Un(new Proxy(t.ctx,Uh));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hp(t):null;jn(t),Yn();const i=Xt(r,t,0,[t.props,s]);if(Qn(),mn(),ac(i)){if(i.then(mn,mn),e)return i.then(o=>{ka(t,o,e)}).catch(o=>{Fs(o,t,0)});t.asyncDep=i}else ka(t,i,e)}else ru(t,e)}function ka(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=kc(e)),ru(t,n)}let Aa;function ru(t,e,n){const r=t.type;if(!t.render){if(!e&&Aa&&!r.render){const s=r.template||Eo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Pe(Pe({isCustomElement:i,delimiters:a},o),l);r.render=Aa(s,c)}}t.render=r.render||lt}jn(t),Yn(),Vh(t),Qn(),mn()}function fp(t){return new Proxy(t.attrs,{get(e,n){return Ye(t,"get","$attrs"),e[n]}})}function hp(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=fp(t))},slots:t.slots,emit:t.emit,expose:e}}function Hs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kc(Un(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)},has(e,n){return n in e||n in ir}}))}function pp(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function mp(t){return q(t)&&"__vccOpts"in t}const Ve=(t,e)=>ch(t,e,Er);function su(t,e,n){const r=arguments.length;return r===2?ue(e)&&!V(e)?Bi(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bi(n)&&(n=[n]),_e(t,e,n))}const gp=Symbol(""),yp=()=>wt(gp),_p="3.2.45",vp="http://www.w3.org/2000/svg",dn=typeof document<"u"?document:null,Ca=dn&&dn.createElement("template"),bp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?dn.createElementNS(vp,t):dn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ca.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ca.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ip(t,e,n){const r=t.style,s=xe(n);if(n&&!s){for(const i in n)Hi(r,i,n[i]);if(e&&!xe(e))for(const i in e)n[i]==null&&Hi(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ra=/\s*!important$/;function Hi(t,e,n){if(V(n))n.forEach(r=>Hi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xp(t,e);Ra.test(n)?t.setProperty(Jn(r),n.replace(Ra,""),"important"):t[r]=n}}const Oa=["Webkit","Moz","ms"],di={};function xp(t,e){const n=di[e];if(n)return n;let r=Et(e);if(r!=="filter"&&r in t)return di[e]=r;r=Ms(r);for(let s=0;s<Oa.length;s++){const i=Oa[s]+r;if(i in t)return di[e]=i}return e}const Pa="http://www.w3.org/1999/xlink";function Ep(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pa,e.slice(6,e.length)):t.setAttributeNS(Pa,e,n);else{const i=yf(e);n==null||i&&!ic(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Tp(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ic(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function qt(t,e,n,r){t.addEventListener(e,n,r)}function Sp(t,e,n,r){t.removeEventListener(e,n,r)}function kp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Ap(e);if(r){const c=i[e]=Op(r,s);qt(t,a,c,l)}else o&&(Sp(t,a,o,l),i[e]=void 0)}}const Na=/(?:Once|Passive|Capture)$/;function Ap(t){let e;if(Na.test(t)){e={};let r;for(;r=t.match(Na);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jn(t.slice(2)),e]}let fi=0;const Cp=Promise.resolve(),Rp=()=>fi||(Cp.then(()=>fi=0),fi=Date.now());function Op(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(Pp(r,n.value),e,5,[r])};return n.value=t,n.attached=Rp(),n}function Pp(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Da=/^on[a-z]/,Np=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?wp(t,r,s):e==="style"?Ip(t,n,r):Ps(e)?co(e)||kp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dp(t,e,r,s))?Tp(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ep(t,e,r,s))};function Dp(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Da.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Da.test(e)&&xe(n)?!1:e in t}const Mp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Th.props;const Bn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>ns(e,n):e};function Lp(t){t.target.composing=!0}function Ma(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Bn(s);const i=r||s.props&&s.props.type==="number";qt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vr(a)),t._assign(a)}),n&&qt(t,"change",()=>{t.value=t.value.trim()}),e||(qt(t,"compositionstart",Lp),qt(t,"compositionend",Ma),qt(t,"change",Ma))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Bn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&vr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},La={created(t,{value:e},n){t.checked=Fn(e,n.props.value),t._assign=Bn(n),qt(t,"change",()=>{t._assign(Tr(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Bn(r),e!==n&&(t.checked=Fn(e,r.props.value))}},Fa={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ns(e);qt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vr(Tr(o)):Tr(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Bn(r)},mounted(t,{value:e}){$a(t,e)},beforeUpdate(t,e,n){t._assign=Bn(n)},updated(t,{value:e}){$a(t,e)}};function $a(t,e){const n=t.multiple;if(!(n&&!V(e)&&!Ns(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Tr(i);if(n)V(e)?i.selected=vf(e,o)>-1:i.selected=e.has(o);else if(Fn(Tr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Tr(t){return"_value"in t?t._value:t.value}const Fp=["ctrl","shift","alt","meta"],$p={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fp.some(n=>t[`${n}Key`]&&!e.includes(n))},Up=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$p[e[s]];if(i&&i(n,e))return}return t(n,...r)},Vp=Pe({patchProp:Np},bp);let Ua;function jp(){return Ua||(Ua=Xh(Vp))}const Bp=(...t)=>{const e=jp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hp(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hp(t){return xe(t)?document.querySelector(t):t}const qp="/assets/personajeODM-860404cc.png",qs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},zp={},Kp={class:"w-screen sm:w-auto"},Wp=$r('<div class="bg-inherit py-5 px-6 sm:py-5 sm:px-16 lg:py-16 lg:px-48 text-start text-neutral-800"><h1 class="sm:mb-5 text-[#003368] text-4xl sm:text-6xl md:text-6xl font-bold blue:bg-neutral-700 sm:pl-[30px] md:pl-[30px] lg:pl-[-30px] xl:ml-[10px] tracking-widest"> AHORRA HASTA 60% EN <p>LOGÍSTICA PARA TU</p><p>EMPRESA</p></h1><div class="mx-auto max-w-[900px] sm:ml-5"><ul class="list-none flex flex-col space-y-2 py-5 sm:pt-5 pb-5 text-lg sm:text-3xl text-gray-800"><li>Tarifas preferenciales para empresas</li><li> Envía y recibe paquetes el mismo día <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Cobertura en zonas extendidad <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Servicio ocurre, en más de 50 ciudades <p class="text-gray-500 inline">(Bajío, Norte y Centro del país)</p></li></ul></div><div class="mx-auto sm:w-auto sm:pt-[-100px] lg:pt-5 sm:ml-20 sm:py-20 sm:px-20"><button class="bg-[#003368] h-24 sm:h-20 hover:bg-blue-600 text-white text-xl sm:text-4xl font-extrabold py-2 px-14 sm:py-2 sm:px-18"> TARIFAS PREFERENCIALES </button></div><div class="flex flex-auto mx-auto w-auto sm:w-80 h-auto mr-44 lg:mt-[-675px] opacity-0 2xl:opacity-100 hidden 2xl:block"><img src="'+qp+'"></div></div>',1),Gp=[Wp];function Jp(t,e){return me(),ye("div",Kp,Gp)}const iu=qs(zp,[["render",Jp]]),Yp="/assets/ODMenvios-76bb4f45.png",Qp={name:"Navbar",inject:["isSticky"],computed:{navbarClass(){return this.isSticky?"sticky top-0":""}},setup(){let t=Ue(!1);return{showMenu:t,toggleNav:()=>{t.value=!t.value}}}},Xp={class:"sm:bg-transparent sm:pt-5 sticky top-0 z-10 relative"},Zp={class:"pl-0 px-6 pt-3 sm:py-8 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center sm:order-first"},em={class:"flex items-center justify-between mt-0"},tm=y("button",{type:"button",class:"text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"},[y("svg",{viewBox:"0 0 24 24",class:"w-14 h-14 fill-current"},[y("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),nm={key:0,class:"opacity-30 fixed inset-0 z-40 bg-black backdrop-filter backdrop-opacity-30"},rm={class:"w-auto relative"},sm={class:"hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"},im=y("br",null,null,-1),om=$r('<li class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Cobertura <br> de envíos</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Calcula<br> tu paquete</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Tarifas<br> preferenciales</a></li>',3);function am(t,e,n,r,s,i){const o=Lh("router-link");return me(),ye("div",Xp,[y("nav",Zp,[y("div",em,[y("div",{onClick:e[0]||(e[0]=(...a)=>r.toggleNav&&r.toggleNav(...a)),class:"flex md:hidden ml-auto active:bg-[#D9D9D9]"},[tm,r.showMenu?(me(),ye("div",nm)):yt("",!0)])]),y("div",rm,[y("img",{src:Yp,class:gr(["sm:hidden w-52 h-auto m-5 bg-gray-200",r.showMenu?"flex":"hidden"])},null,2),y("ul",{class:gr([r.showMenu?"flex flex-col justify-start items-center opacity-100":"hidden","flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 spacey- md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"])},[y("li",sm,[_e(o,{to:"/Envios"},{default:Mc(()=>[Vn("Tipos "),im,Vn(" de envíos")]),_:1})]),om],2)])])])}const lm=qs(Qp,[["render",am]]),cm="/assets/SobreODM-8ea1740b.png",Va="/assets/cajaODM-b82f9c47.png",um="/assets/maleta-4df1ca78.png",dm={},fm={class:"bg-gray-300 w-full md:w-full mt-auto mb-0 h-auto"},hm=$r('<h1 class="text-4xl font-black capitalize ml-5 sm:ml-24 pt-10 pb-5"> TIPOS DE ENVÍOS </h1><div class="flex flex-wrap justify-center items-center gap-0 sm:gap-5"><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"> Sobres </h3><p class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"> Hasta 25 hojas </p></div><img class="mr-5 sm:w-40 sm:h-28 w-32 h-24 mt-[-100px] sm:mx-auto ml-48 sm:mt-16 sm:mb-5" src="'+cm+'" alt="Image Description"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"> Paquetes </h3><p class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"> De 0 a 1 kg </p></div><img class="mr-5 sm:w-36 sm:h-36 w-32 h-24 mt-[-100px] sm:mx-auto ml-48 sm:mt-7 sm:mb-0" src="'+Va+'" alt="Image Description"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"> Paquetes </h3><span class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"><p>De 1-10 kg</p><p>De 11-20 kg</p><p>De 21-30 kg</p></span></div><img class="mr-5 sm:w-40 sm:h-40 w-32 h-36 mt-[-150px] sm:mx-auto ml-48 sm:mt-[-5px] sm:mb-0" src="'+Va+'" alt="Image Description"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"> Maletas </h3><span class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"><p>De 1-10 kg</p><p>De 11-20 kg</p><p>De 21-30 kg</p></span></div><img class="mr-5 sm:w-24 sm:h-36 w-32 h-36 mt-[-150px] sm:mx-auto ml-48 sm:mt-0 sm:mb-0" src="'+um+'" alt="Image Description"></div></div><div class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"><p>VOLUMEN MÁXIMO EN TU ENVÍO:</p><p>65 X 50 X 55 = 30cm^3</p></div>',3),pm=[hm];function mm(t,e){return me(),ye("div",fm,pm)}const ou=qs(dm,[["render",mm]]),gm="/assets/Calculadora-ca17f3e3.png",ym={class:"w-full"},_m=y("h1",{class:"text-4xl font-black capitalize ml-5 sm:ml-24 py-14"}," CALCULA EL PESO DE TU PAQUETE ",-1),vm={class:"my-5 mb-0"},bm={class:"flex flex-col justify-center items-center"},wm=y("div",{class:"flex flex-wrap xl:justify-center"},[y("img",{src:gm,class:"h-auto max-w-sm",alt:""})],-1),Im={class:"bg-[#D9D9D9] max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8"},xm=y("h2",{class:"text-3xl md:ml-10 font-semibold text-center mt-5"}," Calculadora de peso volumétrico ",-1),Em={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 pt-5 sm:mx-full"},Tm={class:"flex items-center flex-row sm:flex-row sm:space-x-24"},Sm=y("label",{class:"block text-gray-700 text-base font-bold mr-7 sm:text-2xl",for:"inline-alto"},"Alto:",-1),km=y("span",{class:"flex-none text-gray-700 text-base font-bold ml-2 sm:text-2xl"},"cm",-1),Am={class:"flex items-center flex-row sm:flex-row sm:space-x-24"},Cm=y("label",{class:"block text-gray-700 text-base font-bold mb-0 mr-3 sm:mr-1 sm:text-2xl",for:"inline-ancho"},"Ancho:",-1),Rm=y("span",{class:"flex-none text-gray-700 text-base font-bold ml-2 sm:text-2xl"},"cm",-1),Om={class:"flex items-center flex-row sm:flex-row sm:space-x-24"},Pm=y("label",{class:"block text-gray-700 text-base font-bold mb-2 mr-5 sm:mr-4 sm:text-2xl",for:"inline-largo"},"Largo:",-1),Nm=y("span",{class:"flex-none text-gray-700 text-base font-bold ml-2 sm:text-2xl"},"cm",-1),Dm={class:"my-4"},Mm={class:"flex items-center justify-center"},Lm={class:"block text-black text-4xl font-semibold text-center sm:text-left"},Fm={class:"text-center text-red-500"},$m=y("div",{class:"h-auto w-auto pt-5 pb-5 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"},[y("p",null,"UTILIZA LA FÓRMULA:"),y("p",null,"(Alto(cm) * Ancho(cm) * Largo(cm))/6000")],-1),au={__name:"Calculadora",setup(t){const e=Ue({largo:0,ancho:0,alto:0}),n=Ve({get:()=>{let r=0;return r=e.value.largo*e.value.ancho*e.value.alto/6e3,r.toFixed(2)},set:r=>{e.value.largo=r,e.value.ancho=r,e.value.alto=r}});return(r,s)=>(me(),ye("div",ym,[_m,y("div",vm,[y("div",bm,[wm,y("div",Im,[xm,y("div",Em,[y("div",Tm,[Sm,Xe(y("input",{class:"flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg","onUpdate:modelValue":s[0]||(s[0]=i=>e.value.alto=i),type:"text",name:"inline-alto",placeholder:"Alto"},null,512),[[zt,e.value.alto]]),km]),y("div",Am,[Cm,Xe(y("input",{class:"flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg","onUpdate:modelValue":s[1]||(s[1]=i=>e.value.ancho=i),type:"text",name:"inline-ancho",placeholder:"Ancho"},null,512),[[zt,e.value.ancho]]),Rm]),y("div",Om,[Pm,Xe(y("input",{class:"flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg","onUpdate:modelValue":s[2]||(s[2]=i=>e.value.largo=i),type:"text",name:"inline-largo",placeholder:"Largo"},null,512),[[zt,e.value.largo]]),Nm])]),y("div",Dm,[y("div",Mm,[y("span",Lm,[Vn(" El peso total de tu paquete es: "),y("p",Fm,gt(ne(n))+" Kg",1)])])])])])]),$m]))}},Um="/assets/logoblanco-9affbb48.webp",Vm={name:"Footer"},jm={class:"bg-[#003368]"},Bm=$r('<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"><nav class="flex flex-wrap justify-center -mx-5 -my-2"><div class="px-5 py-2"><a href="https://odm.com.mx/quienes-somos2" class="text-base leading-6 text-white hover:text-neutral-600"> ¿Quiénes somos? </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/preguntas-frecuentes" class="text-base leading-6 text-white hover:text-neutral-600"> Preguntas frecuentes </a></div><div class="px-5 py-2"><a href="http://venta.odm.com.mx/netScripts/request.aspx?APPNAME=Navegante&amp;PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG&amp;_gl=1*z7x1y0*_ga*NjAyODM2MzE2LjE2NzI0MjgyOTU.*_ga_6MKKJY80T1*MTY3OTY3MDk4NC4xMDQuMS4xNjc5NjcyNjE0LjQ5LjAuMA.." class="text-base leading-6 text-white hover:text-neutral-600"> Agencias </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/contactanos" class="text-base leading-6 text-white hover:text-neutral-600"> Contáctanos </a></div></nav><img src="'+Um+'" alt="Logo" class="w-80 h-auto mx-auto"><div class="flex justify-center mt-8 space-x-6"><a href="#" class="text-white hover:text-neutral-600"><span class="sr-only">Facebook</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">Twitter</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">Instagram</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">YouTube</span><svg aria-hidden="true" fill="currentColor" class="bi bi-youtube w-6 h-6" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a></div><p class="mt-8 text-base leading-6 text-center text-white hover:text-neutral-600"><a href="https://odm.com.mx/aviso-privacidad">Aviso de privacidad | Políticas de viaje</a></p><p class="mt-8 text-base leading-6 text-center text-white"> © 2023 Ómnibus de México. Todos los derechos reservados. </p></div>',1),Hm=[Bm];function qm(t,e,n,r,s,i){return me(),ye("section",jm,Hm)}const zm=qs(Vm,[["render",qm]]);/**
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
 */const lu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Km=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Km(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw Error();const h=i<<2|a>>4;if(r.push(h),c!==64){const m=a<<4&240|c>>2;if(r.push(m),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wm=function(t){const e=lu(t);return cu.encodeByteArray(e,!0)},gs=function(t){return Wm(t).replace(/\./g,"")},uu=function(t){try{return cu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function du(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fu(){try{return typeof indexedDB=="object"}catch{return!1}}function hu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Qm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Xm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zm=()=>Xm().__FIREBASE_DEFAULTS__,eg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uu(t[1]);return e&&JSON.parse(e)},ko=()=>{try{return Zm()||eg()||tg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pu=t=>{var e,n;return(n=(e=ko())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ng=t=>{const e=pu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rg=()=>{var t;return(t=ko())===null||t===void 0?void 0:t.config},mu=t=>{var e;return(e=ko())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ig(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gs(JSON.stringify(n)),gs(JSON.stringify(o)),a].join(".")}/**
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
 */const og="FirebaseError";class ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=og,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ag(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ft(s,a,r)}}function ag(t,e){return t.replace(lg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lg=/\{\$([^}]+)}/g;function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ja(i)&&ja(o)){if(!Sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ja(t){return t!==null&&typeof t=="object"}/**
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
 */function Ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ug(t,e){const n=new dg(t,e);return n.subscribe.bind(n)}class dg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hi),s.error===void 0&&(s.error=hi),s.complete===void 0&&(s.complete=hi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hi(){}/**
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
 */const hg=1e3,pg=2,mg=4*60*60*1e3,gg=.5;function Ba(t,e=hg,n=pg){const r=e*Math.pow(n,t),s=Math.round(gg*r*(Math.random()-.5)*2);return Math.min(mg,r+s)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class yg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vg(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_g(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _g(t){return t===ln?void 0:t}function vg(t){return t.instantiationMode==="EAGER"}/**
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
 */class bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const wg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ig=se.INFO,xg={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Eg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zs{constructor(e){this.name=e,this._logLevel=Ig,this._logHandler=Eg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Tg=(t,e)=>e.some(n=>t instanceof n);let Ha,qa;function Sg(){return Ha||(Ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kg(){return qa||(qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gu=new WeakMap,qi=new WeakMap,yu=new WeakMap,pi=new WeakMap,Ao=new WeakMap;function Ag(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gu.set(n,t)}).catch(()=>{}),Ao.set(e,t),e}function Cg(t){if(qi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qi.set(t,e)}let zi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rg(t){zi=t(zi)}function Og(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mi(this),e,...n);return yu.set(r,e.sort?e.sort():[e]),Zt(r)}:kg().includes(t)?function(...e){return t.apply(mi(this),e),Zt(gu.get(this))}:function(...e){return Zt(t.apply(mi(this),e))}}function Pg(t){return typeof t=="function"?Og(t):(t instanceof IDBTransaction&&Cg(t),Tg(t,Sg())?new Proxy(t,zi):t)}function Zt(t){if(t instanceof IDBRequest)return Ag(t);if(pi.has(t))return pi.get(t);const e=Pg(t);return e!==t&&(pi.set(t,e),Ao.set(e,t)),e}const mi=t=>Ao.get(t);function _u(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Zt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ng=["get","getKey","getAll","getAllKeys","count"],Dg=["put","add","delete","clear"],gi=new Map;function za(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gi.get(e))return gi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Dg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ng.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return gi.set(e,i),i}Rg(t=>({...t,get:(e,n,r)=>za(e,n)||t.get(e,n,r),has:(e,n)=>!!za(e,n)||t.has(e,n)}));/**
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
 */class Mg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",Ka="0.9.0";/**
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
 */const yn=new zs("@firebase/app"),Fg="@firebase/app-compat",$g="@firebase/analytics-compat",Ug="@firebase/analytics",Vg="@firebase/app-check-compat",jg="@firebase/app-check",Bg="@firebase/auth",Hg="@firebase/auth-compat",qg="@firebase/database",zg="@firebase/database-compat",Kg="@firebase/functions",Wg="@firebase/functions-compat",Gg="@firebase/installations",Jg="@firebase/installations-compat",Yg="@firebase/messaging",Qg="@firebase/messaging-compat",Xg="@firebase/performance",Zg="@firebase/performance-compat",e0="@firebase/remote-config",t0="@firebase/remote-config-compat",n0="@firebase/storage",r0="@firebase/storage-compat",s0="@firebase/firestore",i0="@firebase/firestore-compat",o0="firebase",a0="9.15.0";/**
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
 */const Wi="[DEFAULT]",l0={[Ki]:"fire-core",[Fg]:"fire-core-compat",[Ug]:"fire-analytics",[$g]:"fire-analytics-compat",[jg]:"fire-app-check",[Vg]:"fire-app-check-compat",[Bg]:"fire-auth",[Hg]:"fire-auth-compat",[qg]:"fire-rtdb",[zg]:"fire-rtdb-compat",[Kg]:"fire-fn",[Wg]:"fire-fn-compat",[Gg]:"fire-iid",[Jg]:"fire-iid-compat",[Yg]:"fire-fcm",[Qg]:"fire-fcm-compat",[Xg]:"fire-perf",[Zg]:"fire-perf-compat",[e0]:"fire-rc",[t0]:"fire-rc-compat",[n0]:"fire-gcs",[r0]:"fire-gcs-compat",[s0]:"fire-fst",[i0]:"fire-fst-compat","fire-js":"fire-js",[o0]:"fire-js-all"};/**
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
 */const ys=new Map,Gi=new Map;function c0(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tt(t){const e=t.name;if(Gi.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,t);for(const n of ys.values())c0(n,t);return!0}function En(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const u0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},en=new xn("app","Firebase",u0);/**
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
 */class d0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=a0;function vu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(n||(n=rg()),!n)throw en.create("no-options");const i=ys.get(s);if(i){if(Sr(n,i.options)&&Sr(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new bg(s);for(const l of Gi.values())o.addComponent(l);const a=new d0(n,r,o);return ys.set(s,a),a}function Co(t=Wi){const e=ys.get(t);if(!e&&t===Wi)return vu();if(!e)throw en.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=l0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}Tt(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const f0="firebase-heartbeat-database",h0=1,kr="firebase-heartbeat-store";let yi=null;function bu(){return yi||(yi=_u(f0,h0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),yi}async function p0(t){try{return(await bu()).transaction(kr).objectStore(kr).get(wu(t))}catch(e){if(e instanceof ft)yn.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Wa(t,e){try{const r=(await bu()).transaction(kr,"readwrite");return await r.objectStore(kr).put(e,wu(t)),r.done}catch(n){if(n instanceof ft)yn.warn(n.message);else{const r=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function wu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const m0=1024,g0=30*24*60*60*1e3;class y0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ga();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=g0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ga(),{heartbeatsToSend:n,unsentEntries:r}=_0(this._heartbeatsCache.heartbeats),s=gs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ga(){return new Date().toISOString().substring(0,10)}function _0(t,e=m0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ja(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ja(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class v0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?hu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await p0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ja(t){return gs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function b0(t){Tt(new ut("platform-logger",e=>new Mg(e),"PRIVATE")),Tt(new ut("heartbeat",e=>new y0(e),"PRIVATE")),et(Ki,Ka,t),et(Ki,Ka,"esm2017"),et("fire-js","")}b0("");/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let Zn="9.15.0";/**
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
 */const Hn=new zs("@firebase/firestore");function _s(t,...e){if(Hn.logLevel<=se.DEBUG){const n=e.map(Oo);Hn.debug(`Firestore (${Zn}): ${t}`,...n)}}function Ro(t,...e){if(Hn.logLevel<=se.ERROR){const n=e.map(Oo);Hn.error(`Firestore (${Zn}): ${t}`,...n)}}function Iu(t,...e){if(Hn.logLevel<=se.WARN){const n=e.map(Oo);Hn.warn(`Firestore (${Zn}): ${t}`,...n)}}function Oo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+t;throw Ro(e),new Error(e)}function Pt(t,e){t||ge()}function Ks(t,e){return t}/**
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
 */const Ya="ok",w0="cancelled",ar="unknown",H="invalid-argument",I0="deadline-exceeded",x0="not-found",E0="permission-denied",Ji="unauthenticated",T0="resource-exhausted",qn="failed-precondition",S0="aborted",k0="out-of-range",xu="unimplemented",A0="internal",C0="unavailable";class $ extends ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Eu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class O0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class P0{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Pt(typeof e.accessToken=="string"),new Eu(e.accessToken,new $e(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class N0{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Pt(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class D0{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new N0(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L0{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Pt(typeof e.token=="string"),new M0(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class F0{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}class Cr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Cr{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(H,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const $0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Cr{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return $0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(H,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(H,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(H,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(H,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class Ce{constructor(e){this.path=e}static fromPath(e){return new Ce(Ie.fromString(e))}static fromName(e){return new Ce(Ie.fromString(e).popFirst(5))}static empty(){return new Ce(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ce(new Ie(e.slice()))}}/**
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
 */function Tu(t,e,n){if(!n)throw new $(H,`Function ${t}() cannot be called with an empty ${e}.`)}function Qa(t){if(!Ce.isDocumentKey(t))throw new $(H,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(Ce.isDocumentKey(t))throw new $(H,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ws(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Po(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(H,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ws(t);throw new $(H,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function U0(t){return t==null}function vs(t){return t===0&&1/t==-1/0}/**
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
 */const V0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Za,Q;function el(t){if(t===void 0)return Ro("RPC_ERROR","HTTP error has no status"),ar;switch(t){case 200:return Ya;case 400:return qn;case 401:return Ji;case 403:return E0;case 404:return x0;case 409:return S0;case 416:return k0;case 429:return T0;case 499:return w0;case 500:return ar;case 501:return xu;case 503:return C0;case 504:return I0;default:return t>=200&&t<300?Ya:t>=400&&t<500?qn:t>=500&&t<600?A0:ar}}/**
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
 */(Q=Za||(Za={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class j0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,r,s,i){const o=this.T(e,n);_s("RestConnection","Sending: ",o,r);const a={};return this.A(a,s,i),this.R(e,o,a,r).then(l=>(_s("RestConnection","Received: ",l),l),l=>{throw Iu("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}P(e,n,r,s,i,o){return this.I(e,n,r,s,i)}A(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=V0[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.V(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new $(el(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new $(el(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function B0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class H0{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=B0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function Su(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function tl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Nt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const q0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(Pt(!!t),typeof t=="string"){let e=0;const n=q0.exec(t);if(Pt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
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
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(H,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(H,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(H,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(H,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function ku(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Au(t){const e=t.mapValue.fields.__previous_value__;return ku(e)?Au(e):e}function Or(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */const Xr={fields:{__type__:{stringValue:"__max__"}}};function vn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ku(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ge()}function bs(t,e){if(t===e)return!0;const n=vn(t);if(n!==vn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Or(t).isEqual(Or(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=_n(r.timestampValue),o=_n(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Rr(r.bytesValue).isEqual(Rr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return we(r.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return we(r.integerValue)===we(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=we(r.doubleValue),o=we(s.doubleValue);return i===o?vs(i)===vs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Su(t.arrayValue.values||[],e.arrayValue.values||[],bs);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(tl(i)!==tl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!bs(i[a],o[a])))return!1;return!0}(t,e);default:return ge()}}function Pr(t,e){return(t.values||[]).find(n=>bs(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=vn(t),r=vn(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=we(s.integerValue||s.doubleValue),a=we(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nl(t.timestampValue,e.timestampValue);case 4:return nl(Or(t),Or(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Rr(s),a=Rr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Se(o[l],a[l]);if(c!==0)return c}return Se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Se(we(s.latitude),we(i.latitude));return o!==0?o:Se(we(s.longitude),we(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ws(o[l],a[l]);if(c)return c}return Se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Xr&&i===Xr)return 0;if(s===Xr)return 1;if(i===Xr)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=Se(a[u],c[u]);if(f!==0)return f;const h=ws(o[a[u]],l[c[u]]);if(h!==0)return h}return Se(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ge()}}function nl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=_n(t),r=_n(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function rl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cu(t){return!!t&&"arrayValue"in t}function sl(t){return!!t&&"nullValue"in t}function il(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _i(t){return!!t&&"mapValue"in t}function lr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ol{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Ru{}class ht extends Ru{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new z0(e,n,r):n==="array-contains"?new G0(e,r):n==="in"?new J0(e,r):n==="not-in"?new Y0(e,r):n==="array-contains-any"?new Q0(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new K0(e,r):new W0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&vn(this.value)===vn(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jr extends Ru{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new jr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class z0 extends ht{constructor(e,n,r){super(e,n,r),this.key=Ce.fromName(r.referenceValue)}matches(e){const n=Ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class K0 extends ht{constructor(e,n){super(e,"in",n),this.keys=Ou("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W0 extends ht{constructor(e,n){super(e,"not-in",n),this.keys=Ou("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ou(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ce.fromName(r.referenceValue))}class G0 extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cu(n)&&Pr(n.arrayValue,this.value)}}class J0 extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pr(this.value.arrayValue,n)}}class Y0 extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pr(this.value.arrayValue,n)}}class Q0 extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pr(this.value.arrayValue,r))}}/**
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
 */class as{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ge(0,0))}static max(){return new Re(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Is{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Is(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Is(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zr(this.root,e,this.comparator,!0)}}class Zr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=s??Ae.EMPTY,this.right=i??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ae(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xs{constructor(e){this.comparator=e,this.data=new Is(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new al(this.data.getIterator())}getIteratorFrom(e){return new al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xs(this.comparator);return n.data=e,n}}class al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nr{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Nr([])}unionWith(e){let n=new xs(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Su(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=lr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(lr(this.value))}}/**
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
 */class jt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,Re.min(),Re.min(),Re.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new jt(e,1,n,Re.min(),r,s,0)}static newNoDocument(e,n){return new jt(e,2,n,Re.min(),Re.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,Re.min(),Re.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class X0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function ll(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X0(t,e,n,r,s,i,o)}/**
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
 */class Pu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function Nu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function No(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Z0(t){return t.collectionGroup!==null}function cl(t){const e=Ks(t);if(e.q===null){e.q=[];const n=No(e),r=Nu(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new as(n)),e.q.push(new as(Ke.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new as(Ke.keyField(),i))}}}return e.q}function ey(t){const e=Ks(t);if(!e.O)if(e.limitType==="F")e.O=ll(e.path,e.collectionGroup,cl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of cl(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new as(i.field,o))}const r=e.endAt?new ol(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ol(e.startAt.position,e.startAt.inclusive):null;e.O=ll(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function Yi(t,e){e.getFirstInequalityField(),No(t);const n=t.filters.concat([e]);return new Pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function ty(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!vs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vs(r)?"-0":r}}(t,e)}/**
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
 */class Js{constructor(){this._=void 0}}class ny extends Js{}class ry extends Js{constructor(e){super(),this.elements=e}}class sy extends Js{constructor(e){super(),this.elements=e}}class iy extends Js{constructor(e,n){super(),this.C=e,this.L=n}}class cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ys{}class Du extends Ys{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mu extends Ys{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class oy extends Ys{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ay extends Ys{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const ly=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uy=(()=>({and:"AND",or:"OR"}))();class dy{constructor(e,n){this.databaseId=e,this.k=n}}function Qi(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fy(t,e){return t.k?e.toBase64():e.toUint8Array()}function hy(t,e){return Qi(t,e.toTimestamp())}function ul(t){return Pt(!!t),Re.fromTimestamp(function(e){const n=_n(e);return new Ge(n.seconds,n.nanos)}(t))}function Do(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xi(t,e){return Do(t.databaseId,e.path)}function py(t,e){const n=function(s){const i=Ie.fromString(s);return Pt(Fu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new $(H,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(H,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ce((Pt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function dl(t,e){return Do(t.databaseId,e)}function my(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fl(t,e,n){return{name:Xi(t,e),fields:n.value.mapValue.fields}}function gy(t,e){let n;if(e instanceof Du)n={update:fl(t,e.key,e.value)};else if(e instanceof oy)n={delete:Xi(t,e.key)};else if(e instanceof Mu)n={update:fl(t,e.key,e.data),updateMask:wy(e.fieldMask)};else{if(!(e instanceof ay))return ge();n={verify:Xi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof ny)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ry)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof sy)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof iy)return{fieldPath:i.field.canonicalString(),increment:o.L};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:hy(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ge()}(t,e.precondition)),n}function yy(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=dl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Lu(jr.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Cn(u.field),direction:_y(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||U0(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _y(t){return ly[t]}function vy(t){return cy[t]}function by(t){return uy[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function Lu(t){return t instanceof ht?function(e){if(e.op==="=="){if(il(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if(sl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(il(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if(sl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:vy(e.op),value:e.value}}}(t):t instanceof jr?function(e){const n=e.getFilters().map(r=>Lu(r));return n.length===1?n[0]:{compositeFilter:{op:by(e.op),filters:n}}}(t):ge()}function wy(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Mo(t){return new dy(t,!0)}/**
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
 */class Iy extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new $(qn,"The client has already been terminated.")}I(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ji&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(ar,s.toString())})}P(e,n,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ji&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(ar,i.toString())})}terminate(){this.Z=!0}}async function xy(t,e){const n=Ks(t),r=my(n.C)+"/documents",s={writes:e.map(i=>gy(n.C,i))};await n.I("Commit",r,s)}async function Ey(t,e){const n=Ks(t),r=yy(n.C,ey(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const l=py(i,o.name),c=ul(o.updateTime),u=o.createTime?ul(o.createTime):Re.min(),f=new bt({mapValue:{fields:o.fields}}),h=jt.newFoundDocument(l,c,u,f);return a&&h.setHasCommittedMutations(),a?h.setHasCommittedMutations():h}(n.C,s.document,void 0))}/**
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
 */const ur=new Map;function $u(t){if(t._terminated)throw new $(qn,"The client has already been terminated.");if(!ur.has(t)){_s("ComponentProvider","Initializing Datastore");const i=function(l){return new j0(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new F0(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=Mo(t._databaseId),a=function(l,c,u,f){return new Iy(l,c,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);ur.set(t,a)}var e,n,r,s;/**
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
*/return ur.get(t)}class hl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(H,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(H,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new $(H,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Qs{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(qn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(qn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new R0;switch(n.type){case"gapi":const r=n.client;return new D0(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(H,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ur.get(e);n&&(_s("ComponentProvider","Removing Datastore"),ur.delete(e),n.terminate())}(this),Promise.resolve()}}function Ty(t,e){const n=typeof t=="object"?t:Co(),r=typeof t=="string"?t:e||"(default)",s=En(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=ng("firestore");i&&Sy(s,...i)}return s}function Sy(t,e,n,r={}){var s;const i=(t=Po(t,Qs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Iu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=$e.MOCK_USER;else{o=ig(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(H,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(l)}t._authCredentials=new O0(new Eu(o,a))}}/**
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
 */class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class er{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new er(this.firestore,e,this._query)}}class Rt extends er{constructor(e,n,r){super(e,n,new Pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new Ce(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function vi(t,e,...n){if(t=je(t),Tu("collection","path",e),t instanceof Qs){const r=Ie.fromString(e,...n);return Xa(r),new Rt(t,null,r)}{if(!(t instanceof tt||t instanceof Rt))throw new $(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Xa(r),new Rt(t.firestore,null,r)}}function ky(t,e,...n){if(t=je(t),arguments.length===1&&(e=H0.N()),Tu("doc","path",e),t instanceof Qs){const r=Ie.fromString(e,...n);return Qa(r),new tt(t,null,new Ce(r))}{if(!(t instanceof tt||t instanceof Rt))throw new $(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Qa(r),new tt(t.firestore,t instanceof Rt?t.converter:null,new Ce(r))}}/**
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
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(Nt.fromBase64String(e))}catch(n){throw new $(H,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(H,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Uu{constructor(e){this._methodName=e}}/**
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
 */class Fo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(H,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(H,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */const Ay=/^__.*__$/;class Cy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mu(e,this.data,this.fieldMask,n,this.fieldTransforms):new Du(e,this.data,n,this.fieldTransforms)}}function Vu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class $o{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(e){return new $o(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.ot(e),s}ut(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.et(),s}ct(e){return this.rt({path:void 0,it:!0})}at(e){return Es(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.at("Document fields must not be empty");if(Vu(this.nt)&&Ay.test(e))throw this.at('Document fields cannot begin and end with "__"')}}class Ry{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||Mo(e)}ft(e,n,r,s=!1){return new $o({nt:e,methodName:n,lt:r,path:Ke.emptyPath(),it:!1,ht:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function ju(t){const e=t._freezeSettings(),n=Mo(t._databaseId);return new Ry(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Oy(t,e,n,r,s,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,s);qu("Data must be an object, but it was:",o,r);const a=Bu(r,o);let l,c;if(i.merge)l=new Nr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const h=Ny(e,f,n);if(!o.contains(h))throw new $(H,`Field '${h}' is specified in your field mask but missing from your input data.`);My(u,h)||u.push(h)}l=new Nr(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Cy(new bt(a),l,c)}function Py(t,e,n,r=!1){return Uo(n,t.ft(r?4:3,e))}function Uo(t,e){if(Hu(t=je(t)))return qu("Unsupported field value:",e,t),Bu(t,e);if(t instanceof Uu)return function(n,r){if(!Vu(r.nt))throw r.at(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.at(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.nt!==4)throw e.at("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Uo(o,r.ct(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ty(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ge.fromDate(n);return{timestampValue:Qi(r.C,s)}}if(n instanceof Ge){const s=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qi(r.C,s)}}if(n instanceof Fo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zn)return{bytesValue:fy(r.C,n._byteString)};if(n instanceof tt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Do(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.at(`Unsupported field value: ${Ws(n)}`)}(t,e)}function Bu(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=Uo(s,e.st(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Fo||t instanceof zn||t instanceof tt||t instanceof Uu)}function qu(t,e,n){if(!Hu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ws(n);throw r==="an object"?e.at(t+" a custom object"):e.at(t+" "+r)}}function Ny(t,e,n){if((e=je(e))instanceof Lo)return e._internalPath;if(typeof e=="string")return zu(t,e);throw Es("Field path arguments must be of type string or ",t,!1,void 0,n)}const Dy=new RegExp("[~\\*/\\[\\]]");function zu(t,e,n){if(e.search(Dy)>=0)throw Es(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lo(...e.split("."))._internalPath}catch{throw Es(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Es(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new $(H,a+t+l)}function My(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ly{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ku(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ku extends Ly{data(){return super.data()}}class Fy{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Wu(t,e){return typeof e=="string"?zu(t,e):e instanceof Lo?e._internalPath:e._delegate._internalPath}/**
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
 */class Vo{}class $y extends Vo{}function bi(t,e,...n){let r=[];e instanceof Vo&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof jo).length,o=s.filter(a=>a instanceof Xs).length;if(i>1||i>0&&o>0)throw new $(H,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xs extends $y{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xs(e,n,r)}_apply(e){const n=this._parse(e);return Gu(e._query,n),new er(e.firestore,e.converter,Yi(e._query,n))}_parse(e){const n=ju(e.firestore);return function(s,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new $(H,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ml(u,c);const h=[];for(const m of u)h.push(pl(a,s,m));f={arrayValue:{values:h}}}else f=pl(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ml(u,c),f=Py(o,i,u,c==="in"||c==="not-in");return ht.create(l,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Uy(t,e,n){const r=e,s=Wu("where",t);return Xs._create(s,r,n)}class jo extends Vo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jo(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Gu(i,a),i=Yi(i,a)}(e._query,n),new er(e.firestore,e.converter,Yi(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function pl(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new $(H,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Z0(e)&&n.indexOf("/")!==-1)throw new $(H,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Ce.isDocumentKey(r))throw new $(H,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rl(t,new Ce(r))}if(n instanceof tt)return rl(t,n._key);throw new $(H,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ws(n)}.`)}function ml(t,e){if(!Array.isArray(t)||t.length===0)throw new $(H,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new $(H,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Gu(t,e){if(e.isInequality()){const r=No(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new $(H,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Nu(t);i!==null&&Vy(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(H,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(H,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Vy(t,e,n){if(!n.isEqual(e))throw new $(H,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function jy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class By extends class{convertValue(e,n="none"){switch(vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){const r={};return Gs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Fo(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Pt(Fu(r));const s=new Ar(r.get(1),r.get(3)),i=new Ce(r.popFirst(5));return s.isEqual(n)||Ro(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function gl(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new $(xu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Po(t,er))._query);const e=$u(t.firestore),n=new By(t.firestore);return Ey(e,t._query).then(r=>{const s=r.map(i=>new Ku(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Fy(t,s)})}function Hy(t,e){const n=ky(t=Po(t,Rt)),r=jy(t.converter,e),s=Oy(ju(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return xy($u(t.firestore),[s.toMutation(n._key,cr.exists(!1))]).then(()=>n)}(function(t){Zn=t})(`${Vr}_lite`),Tt(new ut("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Qs(new P0(t.getProvider("auth-internal")),new L0(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new $(H,'"projectId" not provided in firebase.initializeApp.');return new Ar(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),et("firestore-lite","3.8.0",""),et("firestore-lite","3.8.0","esm2017");var qy=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ju;const Zs=t=>Ju=t,Yu=Symbol();function Zi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var dr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dr||(dr={}));function zy(){const t=dc(!0),e=t.run(()=>Ue({}));let n=[],r=[];const s=Un({install(i){Zs(s),s._a=i,i.provide(Yu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!qy?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Qu=()=>{};function yl(t,e,n,r=Qu){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Af()&&Cf(s),s}function kn(t,...e){t.slice().forEach(n=>{n(...e)})}function eo(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Zi(s)&&Zi(r)&&t.hasOwnProperty(n)&&!he(r)&&!Qt(r)?t[n]=eo(s,r):t[n]=r}return t}const Ky=Symbol();function Wy(t){return!Zi(t)||!t.hasOwnProperty(Ky)}const{assign:Bt}=Object;function Gy(t){return!!(he(t)&&t.effect)}function Jy(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=ih(n.state.value[t]);return Bt(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Un(Ve(()=>{Zs(n);const m=n._s.get(t);return o[h].call(m,m)})),f),{}))}return l=Xu(t,c,e,n,r,!0),l.$reset=function(){const f=s?s():{};this.$patch(h=>{Bt(h,f)})},l}function Xu(t,e,n={},r,s,i){let o;const a=Bt({actions:{}},n),l={deep:!0};let c,u,f=Un([]),h=Un([]),m;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Ue({});let S;function F(K){let O;c=u=!1,typeof K=="function"?(K(r.state.value[t]),O={type:dr.patchFunction,storeId:t,events:m}):(eo(r.state.value[t],K),O={type:dr.patchObject,payload:K,storeId:t,events:m});const Y=S=Symbol();wo().then(()=>{S===Y&&(c=!0)}),u=!0,kn(f,O,r.state.value[t])}const R=Qu;function U(){o.stop(),f=[],h=[],r._s.delete(t)}function P(K,O){return function(){Zs(r);const Y=Array.from(arguments),X=[],pe=[];function Ee(Te){X.push(Te)}function Be(Te){pe.push(Te)}kn(h,{args:Y,name:K,store:W,after:Ee,onError:Be});let De;try{De=O.apply(this&&this.$id===t?this:W,Y)}catch(Te){throw kn(pe,Te),Te}return De instanceof Promise?De.then(Te=>(kn(X,Te),Te)).catch(Te=>(kn(pe,Te),Promise.reject(Te))):(kn(X,De),De)}}const z={_p:r,$id:t,$onAction:yl.bind(null,h),$patch:F,$reset:R,$subscribe(K,O={}){const Y=yl(f,K,O.detached,()=>X()),X=o.run(()=>sr(()=>r.state.value[t],pe=>{(O.flush==="sync"?u:c)&&K({storeId:t,type:dr.direct,events:m},pe)},Bt({},l,O)));return Y},$dispose:U},W=Xn(z);r._s.set(t,W);const ae=r._e.run(()=>(o=dc(),o.run(()=>e())));for(const K in ae){const O=ae[K];if(he(O)&&!Gy(O)||Qt(O))i||(w&&Wy(O)&&(he(O)?O.value=w[K]:eo(O,w[K])),r.state.value[t][K]=O);else if(typeof O=="function"){const Y=P(K,O);ae[K]=Y,a.actions[K]=O}}return Bt(W,ae),Bt(te(W),ae),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:K=>{F(O=>{Bt(O,K)})}}),r._p.forEach(K=>{Bt(W,o.run(()=>K({store:W,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(W.$state,w),c=!0,u=!0,W}function Yy(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=tu();return a=a||c&&wt(Yu,null),a&&Zs(a),a=Ju,a._s.has(r)||(i?Xu(r,e,s,a):Jy(r,s,a)),a._s.get(r)}return o.$id=r,o}var Qy="firebase",Xy="9.15.0";/**
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
 */et(Qy,Xy,"app");const Zu="@firebase/installations",Bo="0.6.0";/**
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
 */const ed=1e4,td=`w:${Bo}`,nd="FIS_v2",Zy="https://firebaseinstallations.googleapis.com/v1",e_=60*60*1e3,t_="installations",n_="Installations";/**
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
 */const r_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},bn=new xn(t_,n_,r_);function rd(t){return t instanceof ft&&t.code.includes("request-failed")}/**
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
 */function sd({projectId:t}){return`${Zy}/projects/${t}/installations`}function id(t){return{token:t.token,requestStatus:2,expiresIn:i_(t.expiresIn),creationTime:Date.now()}}async function od(t,e){const r=(await e.json()).error;return bn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ad({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function s_(t,{refreshToken:e}){const n=ad(t);return n.append("Authorization",o_(e)),n}async function ld(t){const e=await t();return e.status>=500&&e.status<600?t():e}function i_(t){return Number(t.replace("s","000"))}function o_(t){return`${nd} ${t}`}/**
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
 */async function a_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=sd(t),s=ad(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:nd,appId:t.appId,sdkVersion:td},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ld(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:id(c.authToken)}}else throw await od("Create Installation",l)}/**
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
 */function cd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function l_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const c_=/^[cdef][\w-]{21}$/,to="";function u_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=d_(t);return c_.test(n)?n:to}catch{return to}}function d_(t){return l_(t).substr(0,22)}/**
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
 */function ei(t){return`${t.appName}!${t.appId}`}/**
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
 */const ud=new Map;function dd(t,e){const n=ei(t);fd(n,e),f_(n,e)}function fd(t,e){const n=ud.get(t);if(n)for(const r of n)r(e)}function f_(t,e){const n=h_();n&&n.postMessage({key:t,fid:e}),p_()}let hn=null;function h_(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=t=>{fd(t.data.key,t.data.fid)}),hn}function p_(){ud.size===0&&hn&&(hn.close(),hn=null)}/**
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
 */const m_="firebase-installations-database",g_=1,wn="firebase-installations-store";let wi=null;function Ho(){return wi||(wi=_u(m_,g_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wn)}}})),wi}async function Ts(t,e){const n=ei(t),s=(await Ho()).transaction(wn,"readwrite"),i=s.objectStore(wn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&dd(t,e.fid),e}async function hd(t){const e=ei(t),r=(await Ho()).transaction(wn,"readwrite");await r.objectStore(wn).delete(e),await r.done}async function ti(t,e){const n=ei(t),s=(await Ho()).transaction(wn,"readwrite"),i=s.objectStore(wn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&dd(t,a.fid),a}/**
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
 */async function qo(t){let e;const n=await ti(t.appConfig,r=>{const s=y_(r),i=__(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===to?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function y_(t){const e=t||{fid:u_(),registrationStatus:0};return pd(e)}function __(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(bn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=v_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b_(t)}:{installationEntry:e}}async function v_(t,e){try{const n=await a_(t,e);return Ts(t.appConfig,n)}catch(n){throw rd(n)&&n.customData.serverCode===409?await hd(t.appConfig):await Ts(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function b_(t){let e=await _l(t.appConfig);for(;e.registrationStatus===1;)await cd(100),e=await _l(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qo(t);return r||n}return e}function _l(t){return ti(t,e=>{if(!e)throw bn.create("installation-not-found");return pd(e)})}function pd(t){return w_(t)?{fid:t.fid,registrationStatus:0}:t}function w_(t){return t.registrationStatus===1&&t.registrationTime+ed<Date.now()}/**
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
 */async function I_({appConfig:t,heartbeatServiceProvider:e},n){const r=x_(t,n),s=s_(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:td,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ld(()=>fetch(r,a));if(l.ok){const c=await l.json();return id(c)}else throw await od("Generate Auth Token",l)}function x_(t,{fid:e}){return`${sd(t)}/${e}/authTokens:generate`}/**
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
 */async function zo(t,e=!1){let n;const r=await ti(t.appConfig,i=>{if(!md(i))throw bn.create("not-registered");const o=i.authToken;if(!e&&S_(o))return i;if(o.requestStatus===1)return n=E_(t,e),i;{if(!navigator.onLine)throw bn.create("app-offline");const a=A_(i);return n=T_(t,a),a}});return n?await n:r.authToken}async function E_(t,e){let n=await vl(t.appConfig);for(;n.authToken.requestStatus===1;)await cd(100),n=await vl(t.appConfig);const r=n.authToken;return r.requestStatus===0?zo(t,e):r}function vl(t){return ti(t,e=>{if(!md(e))throw bn.create("not-registered");const n=e.authToken;return C_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function T_(t,e){try{const n=await I_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ts(t.appConfig,r),n}catch(n){if(rd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hd(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ts(t.appConfig,r)}throw n}}function md(t){return t!==void 0&&t.registrationStatus===2}function S_(t){return t.requestStatus===2&&!k_(t)}function k_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+e_}function A_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function C_(t){return t.requestStatus===1&&t.requestTime+ed<Date.now()}/**
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
 */async function R_(t){const e=t,{installationEntry:n,registrationPromise:r}=await qo(e);return r?r.catch(console.error):zo(e).catch(console.error),n.fid}/**
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
 */async function O_(t,e=!1){const n=t;return await P_(n),(await zo(n,e)).token}async function P_(t){const{registrationPromise:e}=await qo(t);e&&await e}/**
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
 */function N_(t){if(!t||!t.options)throw Ii("App Configuration");if(!t.name)throw Ii("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ii(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ii(t){return bn.create("missing-app-config-values",{valueName:t})}/**
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
 */const gd="installations",D_="installations-internal",M_=t=>{const e=t.getProvider("app").getImmediate(),n=N_(e),r=En(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},L_=t=>{const e=t.getProvider("app").getImmediate(),n=En(e,gd).getImmediate();return{getId:()=>R_(n),getToken:s=>O_(n,s)}};function F_(){Tt(new ut(gd,M_,"PUBLIC")),Tt(new ut(D_,L_,"PRIVATE"))}F_();et(Zu,Bo);et(Zu,Bo,"esm2017");/**
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
 */const Ss="analytics",$_="firebase_id",U_="origin",V_=60*1e3,j_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Je=new zs("@firebase/analytics");/**
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
 */function _d(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function B_(t,e){const n=document.createElement("script");n.src=`${yd}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function H_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function q_(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await _d(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Je.error(a)}t("config",s,i)}async function z_(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await _d(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Je.error(i)}}function K_(t,e,n,r){async function s(i,o,a){try{i==="event"?await z_(t,e,n,o,a):i==="config"?await q_(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(l){Je.error(l)}}return s}function W_(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=K_(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function G_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yd)&&n.src.includes(t))return n;return null}/**
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
 */const J_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},nt=new xn("analytics","Analytics",J_);/**
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
 */const Y_=30,Q_=1e3;class X_{constructor(e={},n=Q_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vd=new X_;function Z_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ev(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Z_(r)},i=j_.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tv(t,e=vd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw nt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sv;return setTimeout(async()=>{a.abort()},n!==void 0?n:V_),bd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function bd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=vd){var i;const{appId:o,measurementId:a}=t;try{await nv(r,e)}catch(l){if(a)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ev(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!rv(c)){if(s.deleteThrottleMetadata(o),a)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ba(n,s.intervalMillis,Y_):Ba(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),Je.debug(`Calling attemptFetch again in ${u} millis`),bd(t,f,r,s)}}function nv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rv(t){if(!(t instanceof ft)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function ov(){if(fu())try{await hu()}catch(t){return Je.warn(nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Je.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function av(t,e,n,r,s,i,o){var a;const l=tv(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Je.error(m)),e.push(l);const c=ov().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([l,c]);G_(i)||B_(i,u.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[U_]="firebase",h.update=!0,f!=null&&(h[$_]=f),s("config",u.measurementId,h),u.measurementId}/**
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
 */class lv{constructor(e){this.app=e}_delete(){return delete fr[this.app.options.appId],Promise.resolve()}}let fr={},bl=[];const wl={};let xi="dataLayer",cv="gtag",Il,wd,xl=!1;function uv(){const t=[];if(du()&&t.push("This is a browser extension environment."),Qm()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:e});Je.warn(n.message)}}function dv(t,e,n){uv();const r=t.options.appId;if(!r)throw nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(fr[r]!=null)throw nt.create("already-exists",{id:r});if(!xl){H_(xi);const{wrappedGtag:i,gtagCore:o}=W_(fr,bl,wl,xi,cv);wd=i,Il=o,xl=!0}return fr[r]=av(t,bl,wl,e,Il,xi,n),new lv(t)}function fv(t=Co()){t=je(t);const e=En(t,Ss);return e.isInitialized()?e.getImmediate():hv(t)}function hv(t,e={}){const n=En(t,Ss);if(n.isInitialized()){const s=n.getImmediate();if(Sr(e,n.getOptions()))return s;throw nt.create("already-initialized")}return n.initialize({options:e})}function pv(t,e,n,r){t=je(t),iv(wd,fr[t.app.options.appId],e,n,r).catch(s=>Je.error(s))}const El="@firebase/analytics",Tl="0.9.0";function mv(){Tt(new ut(Ss,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return dv(r,s,n)},"PUBLIC")),Tt(new ut("analytics-internal",t,"PRIVATE")),et(El,Tl),et(El,Tl,"esm2017");function t(e){try{const n=e.getProvider(Ss).getImmediate();return{logEvent:(r,s,i)=>pv(n,r,s,i)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}mv();function Ko(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Id(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gv=Id,xd=new xn("auth","Firebase",Id());/**
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
 */const Sl=new zs("@firebase/auth");function ls(t,...e){Sl.logLevel<=se.ERROR&&Sl.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw Wo(t,...e)}function It(t,...e){return Wo(t,...e)}function yv(t,e,n){const r=Object.assign(Object.assign({},gv()),{[e]:n});return new xn("auth","Firebase",r).create(e,{appName:t.name})}function Wo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xd.create(t,...e)}function j(t,e,...n){if(!t)throw Wo(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ls(e),new Error(e)}function Mt(t,e){t||At(e)}/**
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
 */const kl=new Map;function Ct(t){Mt(t instanceof Function,"Expected a class definition");let e=kl.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kl.set(t,e),e)}/**
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
 */function _v(t,e){const n=En(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sr(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function vv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function no(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bv(){return Al()==="http:"||Al()==="https:"}function Al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bv()||du()||"connection"in navigator)?navigator.onLine:!0}function Iv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Br{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Gm()||Jm()}get(){return wv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Go(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ed{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ev=new Br(3e4,6e4);function Tv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ni(t,e,n,r,s={}){return Td(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ur(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ed.fetch()(Sd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Td(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xv),e);try{const s=new kv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw es(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw es(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw es(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yv(t,u,c);Dt(t,u)}}catch(s){if(s instanceof ft)throw s;Dt(t,"network-request-failed")}}async function Sv(t,e,n,r,s={}){const i=await ni(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Go(t.config,s):`${t.config.apiScheme}://${s}`}class kv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),Ev.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Av(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function Cv(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rv(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=Jo(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hr(Ei(s.auth_time)),issuedAtTime:hr(Ei(s.iat)),expirationTime:hr(Ei(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ei(t){return Number(t)*1e3}function Jo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=uu(n);return s?JSON.parse(s):(ls("Failed to decode base64 JWT payload"),null)}catch(s){return ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ov(t){const e=Jo(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ft&&Pv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Pv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Nv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ks(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Dr(t,Cv(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lv(i.providerUserInfo):[],a=Mv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Dv(t){const e=je(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lv(t){return t.map(e=>{var{providerId:n}=e,r=Ko(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Fv(t,e){const n=await Td(t,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Sd(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ed.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mr;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function $t(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rv(this,e)}reload(){return Dv(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,Av(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:z,isAnonymous:W,providerData:ae,stsTokenManager:K}=n;j(P&&K,e,"internal-error");const O=Mr.fromJSON(this.name,K);j(typeof P=="string",e,"internal-error"),$t(f,e.name),$t(h,e.name),j(typeof z=="boolean",e,"internal-error"),j(typeof W=="boolean",e,"internal-error"),$t(m,e.name),$t(w,e.name),$t(S,e.name),$t(F,e.name),$t(R,e.name),$t(U,e.name);const Y=new gn({uid:P,auth:e,email:h,emailVerified:z,displayName:f,isAnonymous:W,photoURL:w,phoneNumber:m,tenantId:S,stsTokenManager:O,createdAt:R,lastLoginAt:U});return ae&&Array.isArray(ae)&&(Y.providerData=ae.map(X=>Object.assign({},X))),F&&(Y._redirectEventId=F),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mr;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ks(i),i}}/**
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
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ad.type="NONE";const Cl=Ad;/**
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
 */function cs(t,e,n){return`firebase:${t}:${e}:${n}`}class Mn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=cs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mn(Ct(Cl),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ct(Cl);const o=cs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=gn._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Mn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Mn(i,e,r))}}/**
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
 */function Rl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nd(e))return"Blackberry";if(Dd(e))return"Webos";if(Yo(e))return"Safari";if((e.includes("chrome/")||Rd(e))&&!e.includes("edge/"))return"Chrome";if(Pd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cd(t=Ne()){return/firefox\//i.test(t)}function Yo(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rd(t=Ne()){return/crios\//i.test(t)}function Od(t=Ne()){return/iemobile/i.test(t)}function Pd(t=Ne()){return/android/i.test(t)}function Nd(t=Ne()){return/blackberry/i.test(t)}function Dd(t=Ne()){return/webos/i.test(t)}function ri(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $v(t=Ne()){var e;return ri(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uv(){return Ym()&&document.documentMode===10}function Md(t=Ne()){return ri(t)||Pd(t)||Dd(t)||Nd(t)||/windows phone/i.test(t)||Od(t)}function Vv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ld(t,e=[]){let n;switch(t){case"Browser":n=Rl(Ne());break;case"Worker":n=`${Rl(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${r}`}/**
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
 */class jv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Bv{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ol(this),this.idTokenSubscription=new Ol(this),this.beforeStateQueue=new jv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Qo(t){return je(t)}class Ol{constructor(e){this.auth=e,this.observer=null,this.addObserver=ug(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Hv(t,e,n){const r=Qo(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Fd(e),{host:o,port:a}=qv(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||zv()}function Fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qv(t){const e=Fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pl(o)}}}function Pl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $d{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function Ln(t,e){return Sv(t,"POST","/v1/accounts:signInWithIdp",Tv(t,e))}/**
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
 */const Kv="http://localhost";class In extends $d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ko(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new In(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ln(e,n)}buildRequest(){const e={requestUri:Kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ur(n)}return e}}/**
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
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hr extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kt extends Hr{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class Gt extends Hr{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Jt extends Hr{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=Nl(r);return new Kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nl(r);return new Kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class As extends ft{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new As(e,n,r,s)}}function Vd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(t,i,e,r):i})}async function Wv(t,e,n=!1){const r=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",r)}/**
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
 */async function Gv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Dr(t,Vd(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=Jo(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Kn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
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
 */async function Jv(t,e,n=!1){const r="signIn",s=await Vd(t,r,e),i=await Kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Yv(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function Qv(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const Cs="__sak";/**
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
 */class jd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Xv(){const t=Ne();return Yo(t)||ri(t)}const Zv=1e3,eb=10;class Bd extends jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xv()&&Vv(),this.fallbackToPolling=Md(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Uv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bd.type="LOCAL";const tb=Bd;/**
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
 */class Hd extends jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hd.type="SESSION";const qd=Hd;/**
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
 */function nb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class si{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new si(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await nb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}si.receivers=[];/**
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
 */function Xo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Xo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function sb(t){xt().location.href=t}/**
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
 */function zd(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function ib(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ob(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ab(){return zd()?self:null}/**
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
 */const Kd="firebaseLocalStorageDb",lb=1,Rs="firebaseLocalStorage",Wd="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ii(t,e){return t.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function cb(){const t=indexedDB.deleteDatabase(Kd);return new qr(t).toPromise()}function ro(){const t=indexedDB.open(Kd,lb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rs,{keyPath:Wd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rs)?e(r):(r.close(),await cb(),e(await ro()))})})}async function Dl(t,e,n){const r=ii(t,!0).put({[Wd]:e,value:n});return new qr(r).toPromise()}async function ub(t,e){const n=ii(t,!1).get(e),r=await new qr(n).toPromise();return r===void 0?null:r.value}function Ml(t,e){const n=ii(t,!0).delete(e);return new qr(n).toPromise()}const db=800,fb=3;class Gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=si._getInstance(ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ib(),!this.activeServiceWorker)return;this.sender=new rb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ob()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await Dl(e,Cs,"1"),await Ml(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ub(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ml(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ii(s,!1).getAll();return new qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gd.type="LOCAL";const hb=Gd;/**
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
 */function pb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pb().appendChild(r)})}function gb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Br(3e4,6e4);/**
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
 */function yb(t,e){return e?Ct(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zo extends $d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _b(t){return Jv(t.auth,new Zo(t),t.bypassAuthState)}function vb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Gv(n,new Zo(t),t.bypassAuthState)}async function bb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Wv(n,new Zo(t),t.bypassAuthState)}/**
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
 */class Jd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _b;case"linkViaPopup":case"linkViaRedirect":return bb;case"reauthViaPopup":case"reauthViaRedirect":return vb;default:Dt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wb=new Br(2e3,1e4);class On extends Jd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wb.get())};e()}}On.currentPopupAction=null;/**
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
 */const Ib="pendingRedirect",us=new Map;class xb extends Jd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await Eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Eb(t,e){const n=kb(e),r=Sb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Tb(t,e){us.set(t._key(),e)}function Sb(t){return Ct(t._redirectPersistence)}function kb(t){return cs(Ib,t.config.apiKey,t.name)}async function Ab(t,e,n=!1){const r=Qo(t),s=yb(r,e),o=await new xb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Cb=10*60*1e3;class Rb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ob(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ll(e))}saveEventToCache(e){this.cachedEventUids.add(Ll(e)),this.lastProcessedEventTime=Date.now()}}function Ll(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ob(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(t);default:return!1}}/**
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
 */async function Pb(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
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
 */const Nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Db=/^https?/;async function Mb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pb(t);for(const n of e)try{if(Lb(n))return}catch{}Dt(t,"unauthorized-domain")}function Lb(t){const e=no(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Db.test(n))return!1;if(Nb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Fb=new Br(3e4,6e4);function Fl(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $b(t){return new Promise((e,n)=>{var r,s,i;function o(){Fl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fl(),n(It(t,"network-request-failed"))},timeout:Fb.get()})}if(!((s=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=gb("iframefcb");return xt()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},mb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ds=null,e})}let ds=null;function Ub(t){return ds=ds||$b(t),ds}/**
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
 */const Vb=new Br(5e3,15e3),jb="__/auth/iframe",Bb="emulator/auth/iframe",Hb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zb(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Go(e,Bb):`https://${t.config.authDomain}/${jb}`,r={apiKey:e.apiKey,appName:t.name,v:Vr},s=qb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ur(r).slice(1)}`}async function Kb(t){const e=await Ub(t),n=xt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:zb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},Vb.get());function l(){xt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Wb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,Jb=600,Yb="_blank",Qb="http://localhost";class $l{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xb(t,e,n,r=Gb,s=Jb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wb),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ne().toLowerCase();n&&(a=Rd(c)?Yb:n),Cd(c)&&(e=e||Qb,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if($v(c)&&a!=="_self")return Zb(e||"",a),new $l(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new $l(f)}function Zb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ew="__/auth/handler",tw="emulator/auth/handler";function Ul(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vr,eventId:s};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Hr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${nw(t)}?${Ur(a).slice(1)}`}function nw({config:t}){return t.emulator?Go(t,tw):`https://${t.authDomain}/${ew}`}/**
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
 */const Ti="webStorageSupport";class rw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qd,this._completeRedirectFn=Ab,this._overrideRedirectResult=Tb}async _openPopup(e,n,r,s){var i;Mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ul(e,n,r,no(),s);return Xb(e,o,Xo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),sb(Ul(e,n,r,no(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Kb(e),r=new Rb(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ti,{type:Ti},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ti];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Md()||Yo()||ri()}}const sw=rw;var Vl="@firebase/auth",jl="0.21.0";/**
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
 */class iw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ow(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aw(t){Tt(new ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ld(t)},u=new Bv(a,l,c);return vv(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tt(new ut("auth-internal",e=>{const n=Qo(e.getProvider("auth").getImmediate());return(r=>new iw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Vl,jl,ow(t)),et(Vl,jl,"esm2017")}/**
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
 */const lw=5*60,cw=mu("authIdTokenMaxAge")||lw;let Bl=null;const uw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cw)return;const s=n==null?void 0:n.token;Bl!==s&&(Bl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dw(t=Co()){const e=En(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_v(t,{popupRedirectResolver:sw,persistence:[hb,tb,qd]}),r=mu("authTokenSyncURL");if(r){const i=uw(r);Qv(n,i,()=>i(n.currentUser)),Yv(n,o=>i(o))}const s=pu("auth");return s&&Hv(n,`http://${s}`),n}aw("Browser");const fw={apiKey:"AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",authDomain:"precios-envios-odm.firebaseapp.com",databaseURL:"https://precios-envios-odm-default-rtdb.firebaseio.com",projectId:"precios-envios-odm",storageBucket:"precios-envios-odm.appspot.com",messagingSenderId:"802208494147",appId:"1:802208494147:web:fee055c13df4aef4045af6",measurementId:"G-LTMJMJLXRQ"},hw=vu(fw);dw();const Si=Ty();fv(hw);const Qd=Yy("database",{state:()=>({documents:[],destinos:[]}),actions:{async getDocuments(t){this.documents=[];const e=bi(vi(Si,t));(await gl(e)).forEach(r=>{this.documents.push(r.data())})},async getDocumentByKey(t,e,n){const r=bi(vi(Si,t),Uy(e,"==",n)),s=await gl(r);console.log(s),s.forEach(i=>{this.destinos=i.data().destinos})},async addUrl(t,e,n,r,s,i){this.loadingDoc=!0;try{const o={nombre:t,telefono:e,empresa:n,ciudad:r,email:s,selectedOption:i},a=bi(vi(Si,"contacts")),l=await Hy(a,o);this.documents.push({id:l.id,...o})}catch(o){console.log(o)}finally{this.loadingDoc=!1}}}}),pw="/assets/Persona-91599647.png",mw={class:"w-full"},gw=y("h1",{class:"text-4xl font-black capitalize ml-5 sm:ml-24 pt-14 pb-5"}," TARIFAS PREFERENCIALES ",-1),yw=y("h2",{class:"text-3xl font-extrabold capitalize sm:ml-32 ml-8"}," Para impulsar tu negocio ",-1),_w={class:"relative flex items-top justify-center mt-0 bg-white dark:bg-white sm:items-center sm:pt-0"},vw={class:"max-w-6xl mx-auto sm:px-6 lg:px-8 pb-10"},bw={class:"mt-0 overflow-hidden"},ww={class:"grid grid-cols-1 md:grid-cols-2"},Iw=["onSubmit"],xw={class:"flex flex-col"},Ew=y("label",{for:"name",class:"hidden"},"Nombre completo",-1),Tw={class:"flex flex-col"},Sw=y("label",{for:"name",class:"hidden"},"Teléfono",-1),kw={class:"flex flex-col"},Aw=y("label",{for:"name",class:"hidden"},"Nombre de tu empresa",-1),Cw={class:"flex flex-col"},Rw=y("label",{for:"name",class:"hidden"},"Ciudad",-1),Ow={class:"flex flex-col"},Pw=y("label",{for:"name",class:"hidden"},"Correo electrónico",-1),Nw={class:"flex flex-col mt-5"},Dw={class:"inline-flex items-center"},Mw=y("span",{class:"ml-2"},"20 a 50 envíos mensuales",-1),Lw={class:"inline-flex items-center"},Fw=y("span",{class:"ml-2"},"Más de 50 envíos mensuales",-1),$w={class:"pt-5 sm:pt-10 sm:flex sm:justify-center"},Uw={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},Vw={class:"relative w-auto my-6 mx-auto max-w-3xl"},jw={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},Bw=y("div",{class:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"},[y("h3",{class:"text-3xl font-semibold"},"¡EXCELENTE!")],-1),Hw=y("div",{class:"relative p-6 flex-auto"},[y("p",{class:"my-4 text-slate-500 text-lg leading-relaxed"},[Vn(" Hemos recibido tu información. "),y("br"),Vn(" En breve nos comunicaremos contigo. ")])],-1),qw={class:"flex items-center justify-end p-6 bg-[#003368]border-t border-solid border-slate-200 rounded-b"},zw={key:1,class:"opacity-30 fixed inset-0 z-40 bg-black"},Kw=$r('<div class="bg-white dark:bg-white sm:rounded-lg sm:pl-32 order-first sm:order-last"><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400"><img src="'+pw+'" class="sm:w-auto h-48 pl-28 sm:h-72 sm:pl-28"></div><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-80"> Av Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700 Ciudad de México, CDMX </div></div><div class="flex items-center mt-4 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-40"> 55-51-41-43-00 </div></div><div class="flex items-center mt-2 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a href="mailto:desarrollowebodm@gmail.com?subject=Nuevo Cliente Potencial" class="ml-4 text-md tracking-wide font-semibold w-40"> desarrollowebodm@gmail.com </a></div></div>',1),Xd={__name:"Formulario",setup(t){const e=Qd(),n=Ue(!1),r=()=>{n.value=!n.value},s=()=>{n.value=!1},i=Ue(""),o=Ue(""),a=Ue(""),l=Ue(""),c=Ue(""),u=Ue(""),f=()=>{if(!i.value||!o.value||!a.value||!l.value||!c.value){alert("Por favor llena todos los campos");return}if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c.value)){alert("Por favor ingresa un correo válido");return}e.addUrl(i.value,o.value,a.value,l.value,c.value,u.value),fetch("http://localhost:5000/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i.value,telefono:o.value,empresa:a.value,ciudad:l.value,email:c.value,selectedOption:u.value})}).then(h=>h.text()).then(h=>{console.log(h),alert(h)}).catch(h=>{console.log(h),alert("An error occurred while sending the email.")}),console.log("FORMULARIO"),i.value="",o.value="",a.value="",l.value="",c.value="",u.value=""};return(h,m)=>(me(),ye("div",mw,[gw,yw,y("div",_w,[y("div",vw,[y("div",bw,[y("div",ww,[y("form",{class:"p-6 flex flex-col justify-center sm:gap-y-1",onSubmit:Up(f,["prevent"])},[y("div",xw,[Ew,Xe(y("input",{type:"text",placeholder:"Nombre completo",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":m[0]||(m[0]=w=>i.value=w)},null,512),[[zt,i.value]])]),y("div",Tw,[Sw,Xe(y("input",{type:"number",placeholder:"Teléfono",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":m[1]||(m[1]=w=>o.value=w)},null,512),[[zt,o.value]])]),y("div",kw,[Aw,Xe(y("input",{type:"text",placeholder:"Nombre de tu empresa",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":m[2]||(m[2]=w=>a.value=w)},null,512),[[zt,a.value]])]),y("div",Cw,[Rw,Xe(y("input",{type:"text",placeholder:"Ciudad",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":m[3]||(m[3]=w=>l.value=w)},null,512),[[zt,l.value]])]),y("div",Ow,[Pw,Xe(y("input",{type:"email",placeholder:"Correo electrónico",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":m[4]||(m[4]=w=>c.value=w)},null,512),[[zt,c.value]])]),y("div",Nw,[y("label",Dw,[Xe(y("input",{type:"radio",class:"form-radio","onUpdate:modelValue":m[5]||(m[5]=w=>u.value=w),value:"20 a 50 envíos mensuales",name:"option"},null,512),[[La,u.value]]),Mw]),y("label",Lw,[Xe(y("input",{type:"radio",class:"form-radio","onUpdate:modelValue":m[6]||(m[6]=w=>u.value=w),value:"más de 50 envíos mensuales",name:"option"},null,512),[[La,u.value]]),Fw])]),y("div",$w,[y("button",{class:"bg-[#003368] py-3 h-32 text-white active:bg-[#D9D9D9] font-bold uppercase text-2xl px-20 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-22 sm:mr-1 mb-1 ease-linear transition-all duration-150 sm:px-14",type:"submit",onClick:m[7]||(m[7]=w=>r())}," SOLICITAR TARIFA PREFERENTE ")]),n.value?(me(),ye("div",Uw,[y("div",Vw,[y("div",jw,[Bw,Hw,y("div",qw,[y("button",{class:"text-white bg-[#003368] border border-solid border-white hover:bg-blue-900 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:m[8]||(m[8]=w=>s())}," OK ")])])])])):yt("",!0),n.value?(me(),ye("div",zw)):yt("",!0)],40,Iw),Kw])])])])]))}},Ww={class:"flex flex-col w-full lg:px-52 md:px-0 sm:lg:px-0 px-0 my-auto"},Gw={class:"flex flex-col w-full sm:w-full px-3 lg:px-52 md:px-0 sm:lg:px-0 my-auto"},Jw=y("h1",{class:"text-4xl font-black capitalize ml-5 sm:ml-24 py-14"}," COBERTURA DE ENVÍOS ",-1),Yw={class:"mx-auto"},Qw={class:"flex flex-wrap justify-center pt-0 pb-10 sm:space-x-40"},Xw={class:"w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0"},Zw=y("option",null,"¿Dónde dejar tus paquetes?",-1),e1=["value"],t1={class:"mt-4 flex items-center"},n1=y("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",class:"text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})],-1),r1=y("h2",{class:"text-4xl font-bold"},"Dirección",-1),s1=y("h3",{class:"text-gray-500 text-2xl"},"De:",-1),i1={key:0,class:"text-3xl text-[#003386]"},o1={class:"w-full md:w-1/2 lg:w-1/3 px-4 mb-0 md:mb-0"},a1=y("option",{value:""},"¿Dónde recoger tus paquetes?",-1),l1=["value"],c1={class:"mt-4 flex items-center"},u1=y("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",class:"text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})],-1),d1=y("h2",{class:"text-4xl font-bold"},"Dirección",-1),f1=y("h3",{class:"text-gray-500 text-2xl"},"A:",-1),h1={key:0,class:"text-3xl text-[#003368]"},p1={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:justify-items-center sm:place-items-center sm:px-80"},m1={key:0,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},g1=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Sobres ",-1),y1=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," Hasta 25 hojas ",-1),_1={class:"mt-0 sm:mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},v1={key:1,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},b1=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Paquetes ",-1),w1=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 0 - 1 Kg. ",-1),I1={class:"mt-0 sm:mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},x1={key:2,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},E1=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Cajas ",-1),T1=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 1 - 10 Kg. ",-1),S1={class:"mt-0 sm:mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},k1={key:3,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},A1=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Cajas ",-1),C1=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 11 - 20 Kg. ",-1),R1={class:"mt-0 sm:mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},O1={key:4,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-6/12 sm:col-span-2"},P1=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Maletas ",-1),N1=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 21 - 30 Kg. ",-1),D1={class:"mt-0 sm:mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},M1=y("div",{class:"h-auto w-full pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0 px-3"},[y("p",null,"***VALOR DE REFERENCIA SUJETO A CAMBIOS***")],-1),L1={class:"flex flex-col w-full lg:px-52 md:px-0 sm:lg:px-0 px-0 my-auto"},F1={class:"flex flex-col w-full lg:px-52 md:px-0 sm:lg:px-0 px-0 my-auto"},Zd={__name:"App",setup(t){const e=Qd();xo(async()=>{await e.getDocuments("envios")});const n=Ue(null),r=Ue(null),s=async()=>{r.value=null,await e.getDocumentByKey("envios","id",n.value.id)},i=new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2});return(o,a)=>(me(),ye(ze,null,[_e(lm),_e(iu),y("div",Ww,[_e(ou)]),y("div",Gw,[Jw,y("div",Yw,[y("div",Qw,[y("div",Xw,[Xe(y("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>he(n)?n.value=l:null),onChange:a[1]||(a[1]=l=>s()),class:"block sm:w-96 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"¿Dónde dejar tus paquetes?"},[Zw,(me(!0),ye(ze,null,va(ne(e).$state.documents,l=>(me(),ye("option",{key:l.id,value:l},gt(l.origen),9,e1))),128))],544),[[Fa,ne(n)]]),y("div",t1,[n1,y("div",null,[r1,s1,ne(n)!=null?(me(),ye("p",i1,gt(ne(n).ubicacion),1)):yt("",!0)])])]),y("div",o1,[Xe(y("select",{"onUpdate:modelValue":a[2]||(a[2]=l=>he(r)?r.value=l:null),class:"block sm:w-96 w-72 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"},[a1,(me(!0),ye(ze,null,va(ne(e).$state.destinos,l=>(me(),ye("option",{key:l.id,value:l},gt(l.nombre),9,l1))),128))],512),[[Fa,ne(r)]]),y("div",c1,[u1,y("div",null,[d1,f1,ne(r)!=null?(me(),ye("p",h1,gt(ne(r).direccion),1)):yt("",!0)])])])])]),y("div",p1,[ne(r)!=null?(me(),ye("div",m1,[g1,y1,y("p",_1,gt(ne(i).format(ne(r).precios.SOB)),1)])):yt("",!0),ne(r)!=null?(me(),ye("div",v1,[b1,w1,y("p",I1,gt(ne(i).format(ne(r).precios.PAQ)),1)])):yt("",!0),ne(r)!=null?(me(),ye("div",x1,[E1,T1,y("p",S1,gt(ne(i).format(ne(r).precios.C1)),1)])):yt("",!0),ne(r)!=null?(me(),ye("div",k1,[A1,C1,y("p",R1,gt(ne(i).format(ne(r).precios.C2)),1)])):yt("",!0),ne(r)!=null?(me(),ye("div",O1,[P1,N1,y("p",D1,gt(ne(i).format(ne(r).precios.C3)),1)])):yt("",!0)]),M1]),y("div",L1,[_e(au)]),y("div",F1,[_e(Xd)]),_e(zm)],64))}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rn=typeof window<"u";function $1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const re=Object.assign;function ki(t,e){const n={};for(const r in e){const s=e[r];n[r]=dt(s)?s.map(t):t(s)}return n}const pr=()=>{},dt=Array.isArray,U1=/\/$/,V1=t=>t.replace(U1,"");function Ai(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=q1(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function j1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function B1(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wn(e.matched[r],n.matched[s])&&ef(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ef(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!H1(t[n],e[n]))return!1;return!0}function H1(t,e){return dt(t)?ql(t,e):dt(e)?ql(e,t):t===e}function ql(t,e){return dt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function q1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Lr;(function(t){t.pop="pop",t.push="push"})(Lr||(Lr={}));var mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mr||(mr={}));function z1(t){if(!t)if(Rn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),V1(t)}const K1=/^[^#]+#/;function W1(t,e){return t.replace(K1,"#")+e}function G1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oi=()=>({left:window.pageXOffset,top:window.pageYOffset});function J1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=G1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zl(t,e){return(history.state?history.state.position-e:-1)+t}const so=new Map;function Y1(t,e){so.set(t,e)}function Q1(t){const e=so.get(t);return so.delete(t),e}let X1=()=>location.protocol+"//"+location.host;function tf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Hl(l,"")}return Hl(n,t)+r+s}function Z1(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=tf(t,location),w=n.value,S=e.value;let F=0;if(h){if(n.value=m,e.value=h,o&&o===w){o=null;return}F=S?h.position-S.position:0}else r(m);s.forEach(R=>{R(n.value,w,{delta:F,type:Lr.pop,direction:F?F>0?mr.forward:mr.back:mr.unknown})})};function l(){o=n.value}function c(h){s.push(h);const m=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(re({},h.state,{scroll:oi()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Kl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oi():null}}function eI(t){const{history:e,location:n}=window,r={value:tf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:X1()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=re({},e.state,Kl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=re({},s.value,e.state,{forward:l,scroll:oi()});i(u.current,u,!0);const f=re({},Kl(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function tI(t){t=z1(t);const e=eI(t),n=Z1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:W1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nI(t){return typeof t=="string"||t&&typeof t=="object"}function nf(t){return typeof t=="string"||typeof t=="symbol"}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rf=Symbol("");var Wl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wl||(Wl={}));function Gn(t,e){return re(new Error,{type:t,[rf]:!0},e)}function St(t,e){return t instanceof Error&&rf in t&&(e==null||!!(t.type&e))}const Gl="[^/]+?",rI={sensitive:!1,strict:!1,start:!0,end:!0},sI=/[.+*?^${}()[\]/\\]/g;function iI(t,e){const n=re({},rI,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(sI,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:S,optional:F,regexp:R}=h;i.push({name:w,repeatable:S,optional:F});const U=R||Gl;if(U!==Gl){m+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${w}" (${U}): `+z.message)}}let P=S?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(P=F&&c.length<2?`(?:/${P})`:"/"+P),F&&(P+="?"),s+=P,m+=20,F&&(m+=-8),S&&(m+=-20),U===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",w=i[h-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:S,optional:F}=m,R=w in c?c[w]:"";if(dt(R)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const U=dt(R)?R.join("/"):R;if(!U)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=U}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function oI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function aI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=oI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jl(r))return 1;if(Jl(s))return-1}return s.length-r.length}function Jl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lI={type:0,value:""},cI=/[a-zA-Z0-9_]/;function uI(t){if(!t)return[[]];if(t==="/")return[[lI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:cI.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function dI(t,e,n){const r=iI(uI(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fI(t,e){const n=[],r=new Map;e=Xl({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const m=!h,w=hI(u);w.aliasOf=h&&h.record;const S=Xl(e,u),F=[w];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of P)F.push(re({},w,{components:h?h.record.components:w.components,path:z,aliasOf:h?h.record:w}))}let R,U;for(const P of F){const{path:z}=P;if(f&&z[0]!=="/"){const W=f.record.path,ae=W[W.length-1]==="/"?"":"/";P.path=f.record.path+(z&&ae+z)}if(R=dI(P,f,S),h?h.alias.push(R):(U=U||R,U!==R&&U.alias.push(R),m&&u.name&&!Ql(R)&&o(u.name)),w.children){const W=w.children;for(let ae=0;ae<W.length;ae++)i(W[ae],R,h&&h.children[ae])}h=h||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return U?()=>{o(U)}:pr}function o(u){if(nf(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&aI(u,n[f])>=0&&(u.record.path!==n[f].record.path||!sf(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ql(u)&&r.set(u.record.name,u)}function c(u,f){let h,m={},w,S;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Gn(1,{location:u});S=h.record.name,m=re(Yl(f.params,h.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Yl(u.params,h.keys.map(U=>U.name))),w=h.stringify(m)}else if("path"in u)w=u.path,h=n.find(U=>U.re.test(w)),h&&(m=h.parse(w),S=h.record.name);else{if(h=f.name?r.get(f.name):n.find(U=>U.re.test(f.path)),!h)throw Gn(1,{location:u,currentLocation:f});S=h.record.name,m=re({},f.params,u.params),w=h.stringify(m)}const F=[];let R=h;for(;R;)F.unshift(R.record),R=R.parent;return{name:S,path:w,params:m,matched:F,meta:mI(F)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function pI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ql(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mI(t){return t.reduce((e,n)=>re(e,n.meta),{})}function Xl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sf(t,e){return e.children.some(n=>n===t||sf(t,n))}const of=/#/g,gI=/&/g,yI=/\//g,_I=/=/g,vI=/\?/g,af=/\+/g,bI=/%5B/g,wI=/%5D/g,lf=/%5E/g,II=/%60/g,cf=/%7B/g,xI=/%7C/g,uf=/%7D/g,EI=/%20/g;function ea(t){return encodeURI(""+t).replace(xI,"|").replace(bI,"[").replace(wI,"]")}function TI(t){return ea(t).replace(cf,"{").replace(uf,"}").replace(lf,"^")}function io(t){return ea(t).replace(af,"%2B").replace(EI,"+").replace(of,"%23").replace(gI,"%26").replace(II,"`").replace(cf,"{").replace(uf,"}").replace(lf,"^")}function SI(t){return io(t).replace(_I,"%3D")}function kI(t){return ea(t).replace(of,"%23").replace(vI,"%3F")}function AI(t){return t==null?"":kI(t).replace(yI,"%2F")}function Os(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function CI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(af," "),o=i.indexOf("="),a=Os(o<0?i:i.slice(0,o)),l=o<0?null:Os(i.slice(o+1));if(a in e){let c=e[a];dt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zl(t){let e="";for(let n in t){const r=t[n];if(n=SI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(r)?r.map(i=>i&&io(i)):[r&&io(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const OI=Symbol(""),ec=Symbol(""),ta=Symbol(""),df=Symbol(""),oo=Symbol("");function nr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ht(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Gn(4,{from:n,to:e})):f instanceof Error?a(f):nI(f)?a(Gn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ci(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(PI(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ht(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$1(c)?c.default:c;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ht(h,n,r,i,o)()}))}}return s}function PI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tc(t){const e=wt(ta),n=wt(df),r=Ve(()=>e.resolve(ne(t.to))),s=Ve(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Wn.bind(null,u));if(h>-1)return h;const m=nc(l[c-2]);return c>1&&nc(u)===m&&f[f.length-1].path!==m?f.findIndex(Wn.bind(null,l[c-2])):h}),i=Ve(()=>s.value>-1&&LI(n.params,r.value.params)),o=Ve(()=>s.value>-1&&s.value===n.matched.length-1&&ef(n.params,r.value.params));function a(l={}){return MI(l)?e[ne(t.replace)?"replace":"push"](ne(t.to)).catch(pr):Promise.resolve()}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const NI=Vc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tc,setup(t,{slots:e}){const n=Xn(tc(t)),{options:r}=wt(ta),s=Ve(()=>({[rc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DI=NI;function MI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function nc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rc=(t,e,n)=>t??e??n,FI=Vc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=wt(oo),s=Ve(()=>t.route||r.value),i=wt(ec,0),o=Ve(()=>{let c=ne(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ve(()=>s.value.matched[o.value]);rs(ec,Ve(()=>o.value+1)),rs(OI,a),rs(oo,s);const l=Ue();return sr(()=>[l.value,a.value,t.name],([c,u,f],[h,m,w])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Wn(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return sc(n.default,{Component:h,route:c});const m=f.props[u],w=m?m===!0?c.params:typeof m=="function"?m(c):m:null,F=su(h,re({},w,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return sc(n.default,{Component:F,route:c})||F}}});function sc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $I=FI;function UI(t){const e=fI(t.routes,t),n=t.parseQuery||CI,r=t.stringifyQuery||Zl,s=t.history,i=nr(),o=nr(),a=nr(),l=nh(Ut);let c=Ut;Rn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ki.bind(null,v=>""+v),f=ki.bind(null,AI),h=ki.bind(null,Os);function m(v,C){let k,D;return nf(v)?(k=e.getRecordMatcher(v),D=C):D=v,e.addRoute(D,k)}function w(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function S(){return e.getRoutes().map(v=>v.record)}function F(v){return!!e.getRecordMatcher(v)}function R(v,C){if(C=re({},C||l.value),typeof v=="string"){const d=Ai(n,v,C.path),p=e.resolve({path:d.path},C),g=s.createHref(d.fullPath);return re(d,p,{params:h(p.params),hash:Os(d.hash),redirectedFrom:void 0,href:g})}let k;if("path"in v)k=re({},v,{path:Ai(n,v.path,C.path).path});else{const d=re({},v.params);for(const p in d)d[p]==null&&delete d[p];k=re({},v,{params:f(v.params)}),C.params=f(C.params)}const D=e.resolve(k,C),Z=v.hash||"";D.params=u(h(D.params));const fe=j1(r,re({},v,{hash:TI(Z),path:D.path})),G=s.createHref(fe);return re({fullPath:fe,hash:Z,query:r===Zl?RI(v.query):v.query||{}},D,{redirectedFrom:void 0,href:G})}function U(v){return typeof v=="string"?Ai(n,v,l.value.path):re({},v)}function P(v,C){if(c!==v)return Gn(8,{from:C,to:v})}function z(v){return K(v)}function W(v){return z(re(U(v),{replace:!0}))}function ae(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:k}=C;let D=typeof k=="function"?k(v):k;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=U(D):{path:D},D.params={}),re({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function K(v,C){const k=c=R(v),D=l.value,Z=v.state,fe=v.force,G=v.replace===!0,d=ae(k);if(d)return K(re(U(d),{state:typeof d=="object"?re({},Z,d.state):Z,force:fe,replace:G}),C||k);const p=k;p.redirectedFrom=C;let g;return!fe&&B1(r,D,k)&&(g=Gn(16,{to:p,from:D}),rn(D,D,!0,!1)),(g?Promise.resolve(g):Y(p,D)).catch(_=>St(_)?St(_,2)?_:rt(_):le(_,p,D)).then(_=>{if(_){if(St(_,2))return K(re({replace:G},U(_.to),{state:typeof _.to=="object"?re({},Z,_.to.state):Z,force:fe}),C||p)}else _=pe(p,D,!0,G,Z);return X(p,D,_),_})}function O(v,C){const k=P(v,C);return k?Promise.reject(k):Promise.resolve()}function Y(v,C){let k;const[D,Z,fe]=VI(v,C);k=Ci(D.reverse(),"beforeRouteLeave",v,C);for(const d of D)d.leaveGuards.forEach(p=>{k.push(Ht(p,v,C))});const G=O.bind(null,v,C);return k.push(G),An(k).then(()=>{k=[];for(const d of i.list())k.push(Ht(d,v,C));return k.push(G),An(k)}).then(()=>{k=Ci(Z,"beforeRouteUpdate",v,C);for(const d of Z)d.updateGuards.forEach(p=>{k.push(Ht(p,v,C))});return k.push(G),An(k)}).then(()=>{k=[];for(const d of v.matched)if(d.beforeEnter&&!C.matched.includes(d))if(dt(d.beforeEnter))for(const p of d.beforeEnter)k.push(Ht(p,v,C));else k.push(Ht(d.beforeEnter,v,C));return k.push(G),An(k)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),k=Ci(fe,"beforeRouteEnter",v,C),k.push(G),An(k))).then(()=>{k=[];for(const d of o.list())k.push(Ht(d,v,C));return k.push(G),An(k)}).catch(d=>St(d,8)?d:Promise.reject(d))}function X(v,C,k){for(const D of a.list())D(v,C,k)}function pe(v,C,k,D,Z){const fe=P(v,C);if(fe)return fe;const G=C===Ut,d=Rn?history.state:{};k&&(D||G?s.replace(v.fullPath,re({scroll:G&&d&&d.scroll},Z)):s.push(v.fullPath,Z)),l.value=v,rn(v,C,k,G),rt()}let Ee;function Be(){Ee||(Ee=s.listen((v,C,k)=>{if(!zr.listening)return;const D=R(v),Z=ae(D);if(Z){K(re(Z,{replace:!0}),D).catch(pr);return}c=D;const fe=l.value;Rn&&Y1(zl(fe.fullPath,k.delta),oi()),Y(D,fe).catch(G=>St(G,12)?G:St(G,2)?(K(G.to,D).then(d=>{St(d,20)&&!k.delta&&k.type===Lr.pop&&s.go(-1,!1)}).catch(pr),Promise.reject()):(k.delta&&s.go(-k.delta,!1),le(G,D,fe))).then(G=>{G=G||pe(D,fe,!1),G&&(k.delta&&!St(G,8)?s.go(-k.delta,!1):k.type===Lr.pop&&St(G,20)&&s.go(-1,!1)),X(D,fe,G)}).catch(pr)}))}let De=nr(),Te=nr(),ve;function le(v,C,k){rt(v);const D=Te.list();return D.length?D.forEach(Z=>Z(v,C,k)):console.error(v),Promise.reject(v)}function ie(){return ve&&l.value!==Ut?Promise.resolve():new Promise((v,C)=>{De.add([v,C])})}function rt(v){return ve||(ve=!v,Be(),De.list().forEach(([C,k])=>v?k(v):C()),De.reset()),v}function rn(v,C,k,D){const{scrollBehavior:Z}=t;if(!Rn||!Z)return Promise.resolve();const fe=!k&&Q1(zl(v.fullPath,0))||(D||!k)&&history.state&&history.state.scroll||null;return wo().then(()=>Z(v,C,fe)).then(G=>G&&J1(G)).catch(G=>le(G,v,C))}const st=v=>s.go(v);let Le;const Tn=new Set,zr={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,hasRoute:F,getRoutes:S,resolve:R,options:t,push:z,replace:W,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:ie,install(v){const C=this;v.component("RouterLink",DI),v.component("RouterView",$I),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(l)}),Rn&&!Le&&l.value===Ut&&(Le=!0,z(s.location).catch(Z=>{}));const k={};for(const Z in Ut)k[Z]=Ve(()=>l.value[Z]);v.provide(ta,C),v.provide(df,Xn(k)),v.provide(oo,l);const D=v.unmount;Tn.add(v),v.unmount=function(){Tn.delete(v),Tn.size<1&&(c=Ut,Ee&&Ee(),Ee=null,l.value=Ut,Le=!1,ve=!1),D()}}};return zr}function An(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function VI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Wn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Wn(c,l))||s.push(l))}return[n,r,s]}const jI=UI({history:tI(),routes:[{path:"/",component:iu},{path:"/envios",component:ou},{path:"/app",component:Zd},{path:"/calculadora",component:au},{path:"/formulario",component:Xd}]}),na=Bp(Zd);na.use(jI);na.use(zy());na.mount("#app");
