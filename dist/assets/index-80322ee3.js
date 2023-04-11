(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Wa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Ga(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ke(s)?Lg(s):Ga(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ke(t))return t;if(de(t))return t}}const Dg=/;(?![^(]*\))/g,Ng=/:([^]+)/,Mg=/\/\*.*?\*\//gs;function Lg(t){const e={};return t.replace(Mg,"").split(Dg).forEach(n=>{if(n){const s=n.split(Ng);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Xs(t){let e="";if(ke(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Xs(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$g=Wa(Fg);function Ch(t){return!!t||t===""}function Ug(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=cs(t[s],e[s]);return n}function cs(t,e){if(t===e)return!0;let n=gc(t),s=gc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ys(t),s=Ys(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?Ug(t,e):!1;if(n=de(t),s=de(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!cs(t[o],e[o]))return!1}}return String(t)===String(e)}function jg(t,e){return t.findIndex(n=>cs(n,e))}const Ot=t=>ke(t)?t:t==null?"":V(t)||de(t)&&(t.toString===Ph||!K(t.toString))?JSON.stringify(t,Rh,2):String(t),Rh=(t,e)=>e&&e.__v_isRef?Rh(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ui(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!V(e)&&!Dh(e)?String(e):e,pe={},ss=[],Tt=()=>{},Vg=()=>!1,Bg=/^on[^a-z]/,$i=t=>Bg.test(t),Xa=t=>t.startsWith("onUpdate:"),Be=Object.assign,Ya=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hg=Object.prototype.hasOwnProperty,se=(t,e)=>Hg.call(t,e),V=Array.isArray,rs=t=>br(t)==="[object Map]",Ui=t=>br(t)==="[object Set]",gc=t=>br(t)==="[object Date]",K=t=>typeof t=="function",ke=t=>typeof t=="string",Ys=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",Oh=t=>de(t)&&K(t.then)&&K(t.catch),Ph=Object.prototype.toString,br=t=>Ph.call(t),qg=t=>br(t).slice(8,-1),Dh=t=>br(t)==="[object Object]",Ja=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yr=Wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ji=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zg=/-(\w)/g,Vt=ji(t=>t.replace(zg,(e,n)=>n?n.toUpperCase():"")),Kg=/\B([A-Z])/g,ws=ji(t=>t.replace(Kg,"-$1").toLowerCase()),Vi=ji(t=>t.charAt(0).toUpperCase()+t.slice(1)),ko=ji(t=>t?`on${Vi(t)}`:""),Js=(t,e)=>!Object.is(t,e),Jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ai=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mc;const Wg=()=>mc||(mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let st;class Nh{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}run(e){if(this.active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Mh(t){return new Nh(t)}function Gg(t,e=st){e&&e.active&&e.effects.push(t)}function Xg(){return st}function Yg(t){st&&st.cleanups.push(t)}const Qa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lh=t=>(t.w&bn)>0,Fh=t=>(t.n&bn)>0,Jg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},Qg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Lh(r)&&!Fh(r)?r.delete(t):e[n++]=r,r.w&=~bn,r.n&=~bn}e.length=n}},ia=new WeakMap;let Ds=0,bn=1;const oa=30;let It;const Fn=Symbol(""),aa=Symbol("");class Za{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gg(this,s)}run(){if(!this.active)return this.fn();let e=It,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,mn=!0,bn=1<<++Ds,Ds<=oa?Jg(this):yc(this),this.fn()}finally{Ds<=oa&&Qg(this),bn=1<<--Ds,It=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(yc(this),this.onStop&&this.onStop(),this.active=!1)}}function yc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const $h=[];function bs(){$h.push(mn),mn=!1}function Is(){const t=$h.pop();mn=t===void 0?!0:t}function ct(t,e,n){if(mn&&It){let s=ia.get(t);s||ia.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Qa()),Uh(r)}}function Uh(t,e){let n=!1;Ds<=oa?Fh(t)||(t.n|=bn,n=!Lh(t)):n=!t.has(It),n&&(t.add(It),It.deps.push(t))}function Xt(t,e,n,s,r,i){const o=ia.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=Qs(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Ja(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),rs(t)&&a.push(o.get(aa)));break;case"delete":V(t)||(a.push(o.get(Fn)),rs(t)&&a.push(o.get(aa)));break;case"set":rs(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&la(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);la(Qa(l))}}function la(t,e){const n=V(t)?t:[...t];for(const s of n)s.computed&&vc(s);for(const s of n)s.computed||vc(s)}function vc(t,e){(t!==It||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Zg=Wa("__proto__,__v_isRef,__isVue"),jh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ys)),em=el(),tm=el(!1,!0),nm=el(!0),_c=sm();function sm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bs();const s=re(this)[e].apply(this,n);return Is(),s}}),t}function el(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?_m:zh:e?qh:Hh).get(s))return s;const o=V(s);if(!t&&o&&se(_c,r))return Reflect.get(_c,r,i);const a=Reflect.get(s,r,i);return(Ys(r)?jh.has(r):Zg(r))||(t||ct(s,"get",r),e)?a:ye(a)?o&&Ja(r)?a:a.value:de(a)?t?Kh(a):Es(a):a}}const rm=Vh(),im=Vh(!0);function Vh(t=!1){return function(n,s,r,i){let o=n[s];if(us(o)&&ye(o)&&!ye(r))return!1;if(!t&&(!li(r)&&!us(r)&&(o=re(o),r=re(r)),!V(n)&&ye(o)&&!ye(r)))return o.value=r,!0;const a=V(n)&&Ja(s)?Number(s)<n.length:se(n,s),l=Reflect.set(n,s,r,i);return n===re(i)&&(a?Js(r,o)&&Xt(n,"set",s,r):Xt(n,"add",s,r)),l}}function om(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Xt(t,"delete",e,void 0),s}function am(t,e){const n=Reflect.has(t,e);return(!Ys(e)||!jh.has(e))&&ct(t,"has",e),n}function lm(t){return ct(t,"iterate",V(t)?"length":Fn),Reflect.ownKeys(t)}const Bh={get:em,set:rm,deleteProperty:om,has:am,ownKeys:lm},cm={get:nm,set(t,e){return!0},deleteProperty(t,e){return!0}},um=Be({},Bh,{get:tm,set:im}),tl=t=>t,Bi=t=>Reflect.getPrototypeOf(t);function $r(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&ct(r,"get",e),ct(r,"get",i));const{has:o}=Bi(r),a=s?tl:n?rl:Zs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ur(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&ct(s,"has",t),ct(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function jr(t,e=!1){return t=t.__v_raw,!e&&ct(re(t),"iterate",Fn),Reflect.get(t,"size",t)}function wc(t){t=re(t);const e=re(this);return Bi(e).has.call(e,t)||(e.add(t),Xt(e,"add",t,t)),this}function bc(t,e){e=re(e);const n=re(this),{has:s,get:r}=Bi(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Js(e,o)&&Xt(n,"set",t,e):Xt(n,"add",t,e),this}function Ic(t){const e=re(this),{has:n,get:s}=Bi(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Xt(e,"delete",t,void 0),i}function Ec(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Xt(t,"clear",void 0,void 0),n}function Vr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),l=e?tl:t?rl:Zs;return!t&&ct(a,"iterate",Fn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Br(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=rs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?tl:e?rl:Zs;return!e&&ct(i,"iterate",l?aa:Fn),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function hm(){const t={get(i){return $r(this,i)},get size(){return jr(this)},has:Ur,add:wc,set:bc,delete:Ic,clear:Ec,forEach:Vr(!1,!1)},e={get(i){return $r(this,i,!1,!0)},get size(){return jr(this)},has:Ur,add:wc,set:bc,delete:Ic,clear:Ec,forEach:Vr(!1,!0)},n={get(i){return $r(this,i,!0)},get size(){return jr(this,!0)},has(i){return Ur.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Vr(!0,!1)},s={get(i){return $r(this,i,!0,!0)},get size(){return jr(this,!0)},has(i){return Ur.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Br(i,!1,!1),n[i]=Br(i,!0,!1),e[i]=Br(i,!1,!0),s[i]=Br(i,!0,!0)}),[t,n,e,s]}const[fm,dm,pm,gm]=hm();function nl(t,e){const n=e?t?gm:pm:t?dm:fm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const mm={get:nl(!1,!1)},ym={get:nl(!1,!0)},vm={get:nl(!0,!1)},Hh=new WeakMap,qh=new WeakMap,zh=new WeakMap,_m=new WeakMap;function wm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(t){return t.__v_skip||!Object.isExtensible(t)?0:wm(qg(t))}function Es(t){return us(t)?t:sl(t,!1,Bh,mm,Hh)}function Im(t){return sl(t,!1,um,ym,qh)}function Kh(t){return sl(t,!0,cm,vm,zh)}function sl(t,e,n,s,r){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=bm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function yn(t){return us(t)?yn(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function li(t){return!!(t&&t.__v_isShallow)}function Wh(t){return yn(t)||us(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function hs(t){return ai(t,"__v_skip",!0),t}const Zs=t=>de(t)?Es(t):t,rl=t=>de(t)?Kh(t):t;function Gh(t){mn&&It&&(t=re(t),Uh(t.dep||(t.dep=Qa())))}function Xh(t,e){t=re(t),t.dep&&la(t.dep)}function ye(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return Yh(t,!1)}function Em(t){return Yh(t,!0)}function Yh(t,e){return ye(t)?t:new Tm(t,e)}class Tm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Zs(e)}get value(){return Gh(this),this._value}set value(e){const n=this.__v_isShallow||li(e)||us(e);e=n?e:re(e),Js(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zs(e),Xh(this))}}function oe(t){return ye(t)?t.value:t}const xm={get:(t,e,n)=>oe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ye(r)&&!ye(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Jh(t){return yn(t)?t:new Proxy(t,xm)}function Am(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=km(t,n);return e}class Sm{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function km(t,e,n){const s=t[e];return ye(s)?s:new Sm(t,e,n)}var Qh;class Cm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qh]=!1,this._dirty=!0,this.effect=new Za(e,()=>{this._dirty||(this._dirty=!0,Xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return Gh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qh="__v_isReadonly";function Rm(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=Tt):(s=t.get,r=t.set),new Cm(s,r,i||!r,n)}function vn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Hi(i,e,n)}return r}function ft(t,e,n,s){if(K(t)){const i=vn(t,e,n,s);return i&&Oh(i)&&i.catch(o=>{Hi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ft(t[i],e,n,s));return r}function Hi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){vn(l,null,10,[t,o,a]);return}}Om(t,n,r,s)}function Om(t,e,n,s=!0){console.error(t)}let er=!1,ca=!1;const Ue=[];let Dt=0;const is=[];let Ht=null,Rn=0;const Zh=Promise.resolve();let il=null;function ol(t){const e=il||Zh;return t?e.then(this?t.bind(this):t):e}function Pm(t){let e=Dt+1,n=Ue.length;for(;e<n;){const s=e+n>>>1;tr(Ue[s])<t?e=s+1:n=s}return e}function al(t){(!Ue.length||!Ue.includes(t,er&&t.allowRecurse?Dt+1:Dt))&&(t.id==null?Ue.push(t):Ue.splice(Pm(t.id),0,t),ef())}function ef(){!er&&!ca&&(ca=!0,il=Zh.then(nf))}function Dm(t){const e=Ue.indexOf(t);e>Dt&&Ue.splice(e,1)}function Nm(t){V(t)?is.push(...t):(!Ht||!Ht.includes(t,t.allowRecurse?Rn+1:Rn))&&is.push(t),ef()}function Tc(t,e=er?Dt+1:0){for(;e<Ue.length;e++){const n=Ue[e];n&&n.pre&&(Ue.splice(e,1),e--,n())}}function tf(t){if(is.length){const e=[...new Set(is)];if(is.length=0,Ht){Ht.push(...e);return}for(Ht=e,Ht.sort((n,s)=>tr(n)-tr(s)),Rn=0;Rn<Ht.length;Rn++)Ht[Rn]();Ht=null,Rn=0}}const tr=t=>t.id==null?1/0:t.id,Mm=(t,e)=>{const n=tr(t)-tr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nf(t){ca=!1,er=!0,Ue.sort(Mm);const e=Tt;try{for(Dt=0;Dt<Ue.length;Dt++){const n=Ue[Dt];n&&n.active!==!1&&vn(n,null,14)}}finally{Dt=0,Ue.length=0,tf(),er=!1,il=null,(Ue.length||is.length)&&nf()}}function Lm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||pe;p&&(r=n.map(g=>ke(g)?g.trim():g)),f&&(r=n.map(Qs))}let a,l=s[a=ko(e)]||s[a=ko(Vt(e))];!l&&i&&(l=s[a=ko(ws(e))]),l&&ft(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,r)}}function sf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=sf(c,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(de(t)&&s.set(t,null),null):(V(i)?i.forEach(l=>o[l]=null):Be(o,i),de(t)&&s.set(t,o),o)}function qi(t,e){return!t||!$i(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,ws(e))||se(t,e))}let ot=null,rf=null;function ci(t){const e=ot;return ot=t,rf=t&&t.type.__scopeId||null,e}function Fm(t,e=ot,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Mc(-1);const i=ci(e);let o;try{o=t(...r)}finally{ci(i),s._d&&Mc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Co(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:w,inheritAttrs:x}=t;let $,R;const j=ci(t);try{if(n.shapeFlag&4){const W=r||s;$=Pt(u.call(W,W,f,i,g,p,w)),R=l}else{const W=e;$=Pt(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),R=e.props?l:$m(l)}}catch(W){$s.length=0,Hi(W,t,1),$=be(xt)}let P=$;if(R&&x!==!1){const W=Object.keys(R),{shapeFlag:X}=P;W.length&&X&7&&(o&&W.some(Xa)&&(R=Um(R,o)),P=In(P,R))}return n.dirs&&(P=In(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),$=P,ci(j),$}const $m=t=>{let e;for(const n in t)(n==="class"||n==="style"||$i(n))&&((e||(e={}))[n]=t[n]);return e},Um=(t,e)=>{const n={};for(const s in t)(!Xa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jm(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?xc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!qi(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xc(s,o,c):!0:!!o;return!1}function xc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!qi(n,i))return!0}return!1}function Vm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bm=t=>t.__isSuspense;function Hm(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Nm(t)}function Qr(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function Lt(t,e,n=!1){const s=Pe||ot;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}const Hr={};function Ls(t,e,n){return of(t,e,n)}function of(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=Pe;let l,c=!1,u=!1;if(ye(t)?(l=()=>t.value,c=li(t)):yn(t)?(l=()=>t,s=!0):V(t)?(u=!0,c=t.some(P=>yn(P)||li(P)),l=()=>t.map(P=>{if(ye(P))return P.value;if(yn(P))return Dn(P);if(K(P))return vn(P,a,2)})):K(t)?e?l=()=>vn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),ft(t,a,3,[p])}:l=Tt,e&&s){const P=l;l=()=>Dn(P())}let f,p=P=>{f=R.onStop=()=>{vn(P,a,4)}},g;if(sr)if(p=Tt,e?n&&ft(e,a,3,[l(),u?[]:void 0,p]):l(),r==="sync"){const P=U0();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Tt;let w=u?new Array(t.length).fill(Hr):Hr;const x=()=>{if(R.active)if(e){const P=R.run();(s||c||(u?P.some((W,X)=>Js(W,w[X])):Js(P,w)))&&(f&&f(),ft(e,a,3,[P,w===Hr?void 0:u&&w[0]===Hr?[]:w,p]),w=P)}else R.run()};x.allowRecurse=!!e;let $;r==="sync"?$=x:r==="post"?$=()=>Ge(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),$=()=>al(x));const R=new Za(l,$);e?n?x():w=R.run():r==="post"?Ge(R.run.bind(R),a&&a.suspense):R.run();const j=()=>{R.stop(),a&&a.scope&&Ya(a.scope.effects,R)};return g&&g.push(j),j}function qm(t,e,n){const s=this.proxy,r=ke(t)?t.includes(".")?af(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=Pe;fs(this);const a=of(r,i.bind(s),n);return o?fs(o):$n(),a}function af(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Dn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))Dn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Dn(t[n],e);else if(Ui(t)||rs(t))t.forEach(n=>{Dn(n,e)});else if(Dh(t))for(const n in t)Dn(t[n],e);return t}function zm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ll(()=>{t.isMounted=!0}),ff(()=>{t.isUnmounting=!0}),t}const ut=[Function,Array],Km={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},setup(t,{slots:e}){const n=xf(),s=zm();let r;return()=>{const i=e.default&&cf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const x of i)if(x.type!==xt){o=x;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return Ro(o);const c=Ac(o);if(!c)return Ro(o);const u=ua(c,a,s,n);ha(c,u);const f=n.subTree,p=f&&Ac(f);let g=!1;const{getTransitionKey:w}=c.type;if(w){const x=w();r===void 0?r=x:x!==r&&(r=x,g=!0)}if(p&&p.type!==xt&&(!On(c,p)||g)){const x=ua(p,a,s,n);if(ha(p,x),l==="out-in")return s.isLeaving=!0,x.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ro(o);l==="in-out"&&c.type!==xt&&(x.delayLeave=($,R,j)=>{const P=lf(s,p);P[String(p.key)]=p,$._leaveCb=()=>{R(),$._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=j})}return o}}},Wm=Km;function lf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ua(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:x,onAppear:$,onAfterAppear:R,onAppearCancelled:j}=e,P=String(t.key),W=lf(n,t),X=(O,Q)=>{O&&ft(O,s,9,Q)},ue=(O,Q)=>{const te=Q[1];X(O,Q),V(O)?O.every(ve=>ve.length<=1)&&te():O.length<=1&&te()},G={mode:i,persisted:o,beforeEnter(O){let Q=a;if(!n.isMounted)if(r)Q=x||a;else return;O._leaveCb&&O._leaveCb(!0);const te=W[P];te&&On(t,te)&&te.el._leaveCb&&te.el._leaveCb(),X(Q,[O])},enter(O){let Q=l,te=c,ve=u;if(!n.isMounted)if(r)Q=$||l,te=R||c,ve=j||u;else return;let Ce=!1;const tt=O._enterCb=qe=>{Ce||(Ce=!0,qe?X(ve,[O]):X(te,[O]),G.delayedLeave&&G.delayedLeave(),O._enterCb=void 0)};Q?ue(Q,[O,tt]):tt()},leave(O,Q){const te=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Q();X(f,[O]);let ve=!1;const Ce=O._leaveCb=tt=>{ve||(ve=!0,Q(),tt?X(w,[O]):X(g,[O]),O._leaveCb=void 0,W[te]===t&&delete W[te])};W[te]=t,p?ue(p,[O,Ce]):Ce()},clone(O){return ua(O,e,n,s)}};return G}function Ro(t){if(zi(t))return t=In(t),t.children=null,t}function Ac(t){return zi(t)?t.children?t.children[0]:void 0:t}function ha(t,e){t.shapeFlag&6&&t.component?ha(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===rt?(o.patchFlag&128&&r++,s=s.concat(cf(o.children,e,a))):(e||o.type!==xt)&&s.push(a!=null?In(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function uf(t){return K(t)?{setup:t,name:t.name}:t}const Zr=t=>!!t.type.__asyncLoader,zi=t=>t.type.__isKeepAlive;function Gm(t,e){hf(t,"a",e)}function Xm(t,e){hf(t,"da",e)}function hf(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ki(e,s,n),n){let r=n.parent;for(;r&&r.parent;)zi(r.parent.vnode)&&Ym(s,e,n,r),r=r.parent}}function Ym(t,e,n,s){const r=Ki(e,t,s,!0);df(()=>{Ya(s[e],r)},n)}function Ki(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bs(),fs(n);const a=ft(e,n,t,o);return $n(),Is(),a});return s?r.unshift(i):r.push(i),i}}const tn=t=>(e,n=Pe)=>(!sr||t==="sp")&&Ki(t,(...s)=>e(...s),n),Jm=tn("bm"),ll=tn("m"),Qm=tn("bu"),Zm=tn("u"),ff=tn("bum"),df=tn("um"),e0=tn("sp"),t0=tn("rtg"),n0=tn("rtc");function s0(t,e=Pe){Ki("ec",t,e)}function ht(t,e){const n=ot;if(n===null)return t;const s=Xi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=pe]=e[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Dn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function An(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(bs(),ft(l,n,8,[t.el,a,t,e]),Is())}}const pf="components";function r0(t,e){return o0(pf,t,!0,e)||t}const i0=Symbol();function o0(t,e,n=!0,s=!1){const r=ot||Pe;if(r){const i=r.type;if(t===pf){const a=L0(i,!1);if(a&&(a===e||a===Vt(e)||a===Vi(Vt(e))))return i}const o=Sc(r[t]||i[t],e)||Sc(r.appContext[t],e);return!o&&s?i:o}}function Sc(t,e){return t&&(t[e]||t[Vt(e)]||t[Vi(Vt(e))])}function kc(t,e,n,s){let r;const i=n&&n[s];if(V(t)||ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const fa=t=>t?Af(t)?Xi(t)||t.proxy:fa(t.parent):null,Fs=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fa(t.parent),$root:t=>fa(t.root),$emit:t=>t.emit,$options:t=>cl(t),$forceUpdate:t=>t.f||(t.f=()=>al(t.update)),$nextTick:t=>t.n||(t.n=ol.bind(t.proxy)),$watch:t=>qm.bind(t)}),Oo=(t,e)=>t!==pe&&!t.__isScriptSetup&&se(t,e),a0={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Oo(s,e))return o[e]=1,s[e];if(r!==pe&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];da&&(o[e]=0)}}const u=Fs[e];let f,p;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,se(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Oo(r,e)?(r[e]=n,!0):s!==pe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&se(t,o)||Oo(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Fs,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let da=!0;function l0(t){const e=cl(t),n=t.proxy,s=t.ctx;da=!1,e.beforeCreate&&Cc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:w,activated:x,deactivated:$,beforeDestroy:R,beforeUnmount:j,destroyed:P,unmounted:W,render:X,renderTracked:ue,renderTriggered:G,errorCaptured:O,serverPrefetch:Q,expose:te,inheritAttrs:ve,components:Ce,directives:tt,filters:qe}=e;if(c&&c0(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const le=o[he];K(le)&&(s[he]=le.bind(n))}if(r){const he=r.call(n,n);de(he)&&(t.data=Es(he))}if(da=!0,i)for(const he in i){const le=i[he],_t=K(le)?le.bind(n,n):K(le.get)?le.get.bind(n,n):Tt,xn=!K(le)&&K(le.set)?le.set.bind(n):Tt,wt=Qe({get:_t,set:xn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>wt.value,set:We=>wt.value=We})}if(a)for(const he in a)gf(a[he],s,n,he);if(l){const he=K(l)?l.call(n):l;Reflect.ownKeys(he).forEach(le=>{Qr(le,he[le])})}u&&Cc(u,t,"c");function Ee(he,le){V(le)?le.forEach(_t=>he(_t.bind(n))):le&&he(le.bind(n))}if(Ee(Jm,f),Ee(ll,p),Ee(Qm,g),Ee(Zm,w),Ee(Gm,x),Ee(Xm,$),Ee(s0,O),Ee(n0,ue),Ee(t0,G),Ee(ff,j),Ee(df,W),Ee(e0,Q),V(te))if(te.length){const he=t.exposed||(t.exposed={});te.forEach(le=>{Object.defineProperty(he,le,{get:()=>n[le],set:_t=>n[le]=_t})})}else t.exposed||(t.exposed={});X&&t.render===Tt&&(t.render=X),ve!=null&&(t.inheritAttrs=ve),Ce&&(t.components=Ce),tt&&(t.directives=tt)}function c0(t,e,n=Tt,s=!1){V(t)&&(t=pa(t));for(const r in t){const i=t[r];let o;de(i)?"default"in i?o=Lt(i.from||r,i.default,!0):o=Lt(i.from||r):o=Lt(i),ye(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Cc(t,e,n){ft(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gf(t,e,n,s){const r=s.includes(".")?af(n,s):()=>n[s];if(ke(t)){const i=e[t];K(i)&&Ls(r,i)}else if(K(t))Ls(r,t.bind(n));else if(de(t))if(V(t))t.forEach(i=>gf(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Ls(r,i,t)}}function cl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>ui(l,c,o,!0)),ui(l,e,o)),de(e)&&i.set(e,l),l}function ui(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ui(t,i,n,!0),r&&r.forEach(o=>ui(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=u0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const u0={data:Rc,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:kn,directives:kn,watch:f0,provide:Rc,inject:h0};function Rc(t,e){return e?t?function(){return Be(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function h0(t,e){return kn(pa(t),pa(e))}function pa(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?Be(Be(Object.create(null),t),e):e}function f0(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function d0(t,e,n,s=!1){const r={},i={};ai(i,Gi,1),t.propsDefaults=Object.create(null),mf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Im(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function p0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(qi(t.emitsOptions,p))continue;const g=e[p];if(l)if(se(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const w=Vt(p);r[w]=ga(l,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{mf(t,e,r,i)&&(c=!0);let u;for(const f in a)(!e||!se(e,f)&&((u=ws(f))===f||!se(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ga(l,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!se(e,f))&&(delete i[f],c=!0)}c&&Xt(t,"set","$attrs")}function mf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yr(l))continue;const c=e[l];let u;r&&se(r,u=Vt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:qi(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=re(n),c=a||pe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ga(r,l,f,c[f],t,!se(c,f))}}return o}function ga(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(fs(r),s=c[n]=l.call(null,e),$n())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ws(n))&&(s=!0))}return s}function yf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!K(t)){const u=f=>{l=!0;const[p,g]=yf(f,e,!0);Be(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return de(t)&&s.set(t,ss),ss;if(V(i))for(let u=0;u<i.length;u++){const f=Vt(i[u]);Oc(f)&&(o[f]=pe)}else if(i)for(const u in i){const f=Vt(u);if(Oc(f)){const p=i[u],g=o[f]=V(p)||K(p)?{type:p}:Object.assign({},p);if(g){const w=Nc(Boolean,g.type),x=Nc(String,g.type);g[0]=w>-1,g[1]=x<0||w<x,(w>-1||se(g,"default"))&&a.push(f)}}}const c=[o,a];return de(t)&&s.set(t,c),c}function Oc(t){return t[0]!=="$"}function Pc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Dc(t,e){return Pc(t)===Pc(e)}function Nc(t,e){return V(e)?e.findIndex(n=>Dc(n,t)):K(e)&&Dc(e,t)?0:-1}const vf=t=>t[0]==="_"||t==="$stable",ul=t=>V(t)?t.map(Pt):[Pt(t)],g0=(t,e,n)=>{if(e._n)return e;const s=Fm((...r)=>ul(e(...r)),n);return s._c=!1,s},_f=(t,e,n)=>{const s=t._ctx;for(const r in t){if(vf(r))continue;const i=t[r];if(K(i))e[r]=g0(r,i,s);else if(i!=null){const o=ul(i);e[r]=()=>o}}},wf=(t,e)=>{const n=ul(e);t.slots.default=()=>n},m0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ai(e,"_",n)):_f(e,t.slots={})}else t.slots={},e&&wf(t,e);ai(t.slots,Gi,1)},y0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Be(r,e),!n&&a===1&&delete r._):(i=!e.$stable,_f(e,r)),o=e}else e&&(wf(t,e),o={default:1});if(i)for(const a in r)!vf(a)&&!(a in o)&&delete r[a]};function bf(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function _0(t,e){return function(s,r=null){K(s)||(s=Object.assign({},s)),r!=null&&!de(r)&&(r=null);const i=bf(),o=new Set;let a=!1;const l=i.app={_uid:v0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:j0,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=be(s,r);return p.appContext=i,u&&e?e(p,c):t(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Xi(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function ma(t,e,n,s,r=!1){if(V(t)){t.forEach((p,g)=>ma(p,e&&(V(e)?e[g]:e),n,s,r));return}if(Zr(s)&&!r)return;const i=s.shapeFlag&4?Xi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,se(f,c)&&(f[c]=null)):ye(c)&&(c.value=null)),K(l))vn(l,a,12,[o,u]);else{const p=ke(l),g=ye(l);if(p||g){const w=()=>{if(t.f){const x=p?se(f,l)?f[l]:u[l]:l.value;r?V(x)&&Ya(x,i):V(x)?x.includes(i)||x.push(i):p?(u[l]=[i],se(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,se(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Ge(w,n)):w()}}}const Ge=Hm;function w0(t){return b0(t)}function b0(t,e){const n=Wg();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=Tt,insertStaticContent:w}=t,x=(h,d,m,v=null,b=null,T=null,k=!1,E=null,A=!!d.dynamicChildren)=>{if(h===d)return;h&&!On(h,d)&&(v=S(h),We(h,b,T,!0),h=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:I,ref:L,shapeFlag:D}=d;switch(I){case Wi:$(h,d,m,v);break;case xt:R(h,d,m,v);break;case ei:h==null&&j(d,m,v,k);break;case rt:Ce(h,d,m,v,b,T,k,E,A);break;default:D&1?X(h,d,m,v,b,T,k,E,A):D&6?tt(h,d,m,v,b,T,k,E,A):(D&64||D&128)&&I.process(h,d,m,v,b,T,k,E,A,ne)}L!=null&&b&&ma(L,h&&h.ref,T,d||h,!d)},$=(h,d,m,v)=>{if(h==null)s(d.el=a(d.children),m,v);else{const b=d.el=h.el;d.children!==h.children&&c(b,d.children)}},R=(h,d,m,v)=>{h==null?s(d.el=l(d.children||""),m,v):d.el=h.el},j=(h,d,m,v)=>{[h.el,h.anchor]=w(h.children,d,m,v,h.el,h.anchor)},P=({el:h,anchor:d},m,v)=>{let b;for(;h&&h!==d;)b=p(h),s(h,m,v),h=b;s(d,m,v)},W=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},X=(h,d,m,v,b,T,k,E,A)=>{k=k||d.type==="svg",h==null?ue(d,m,v,b,T,k,E,A):Q(h,d,b,T,k,E,A)},ue=(h,d,m,v,b,T,k,E)=>{let A,I;const{type:L,props:D,shapeFlag:F,transition:q,dirs:J}=h;if(A=h.el=o(h.type,T,D&&D.is,D),F&8?u(A,h.children):F&16&&O(h.children,A,null,v,b,T&&L!=="foreignObject",k,E),J&&An(h,null,v,"created"),D){for(const ce in D)ce!=="value"&&!Yr(ce)&&i(A,ce,null,D[ce],T,h.children,v,b,C);"value"in D&&i(A,"value",null,D.value),(I=D.onVnodeBeforeMount)&&Rt(I,v,h)}G(A,h,h.scopeId,k,v),J&&An(h,null,v,"beforeMount");const fe=(!b||b&&!b.pendingBranch)&&q&&!q.persisted;fe&&q.beforeEnter(A),s(A,d,m),((I=D&&D.onVnodeMounted)||fe||J)&&Ge(()=>{I&&Rt(I,v,h),fe&&q.enter(A),J&&An(h,null,v,"mounted")},b)},G=(h,d,m,v,b)=>{if(m&&g(h,m),v)for(let T=0;T<v.length;T++)g(h,v[T]);if(b){let T=b.subTree;if(d===T){const k=b.vnode;G(h,k,k.scopeId,k.slotScopeIds,b.parent)}}},O=(h,d,m,v,b,T,k,E,A=0)=>{for(let I=A;I<h.length;I++){const L=h[I]=E?on(h[I]):Pt(h[I]);x(null,L,d,m,v,b,T,k,E)}},Q=(h,d,m,v,b,T,k)=>{const E=d.el=h.el;let{patchFlag:A,dynamicChildren:I,dirs:L}=d;A|=h.patchFlag&16;const D=h.props||pe,F=d.props||pe;let q;m&&Sn(m,!1),(q=F.onVnodeBeforeUpdate)&&Rt(q,m,d,h),L&&An(d,h,m,"beforeUpdate"),m&&Sn(m,!0);const J=b&&d.type!=="foreignObject";if(I?te(h.dynamicChildren,I,E,m,v,J,T):k||le(h,d,E,null,m,v,J,T,!1),A>0){if(A&16)ve(E,d,D,F,m,v,b);else if(A&2&&D.class!==F.class&&i(E,"class",null,F.class,b),A&4&&i(E,"style",D.style,F.style,b),A&8){const fe=d.dynamicProps;for(let ce=0;ce<fe.length;ce++){const Te=fe[ce],bt=D[Te],Yn=F[Te];(Yn!==bt||Te==="value")&&i(E,Te,bt,Yn,b,h.children,m,v,C)}}A&1&&h.children!==d.children&&u(E,d.children)}else!k&&I==null&&ve(E,d,D,F,m,v,b);((q=F.onVnodeUpdated)||L)&&Ge(()=>{q&&Rt(q,m,d,h),L&&An(d,h,m,"updated")},v)},te=(h,d,m,v,b,T,k)=>{for(let E=0;E<d.length;E++){const A=h[E],I=d[E],L=A.el&&(A.type===rt||!On(A,I)||A.shapeFlag&70)?f(A.el):m;x(A,I,L,null,v,b,T,k,!0)}},ve=(h,d,m,v,b,T,k)=>{if(m!==v){if(m!==pe)for(const E in m)!Yr(E)&&!(E in v)&&i(h,E,m[E],null,k,d.children,b,T,C);for(const E in v){if(Yr(E))continue;const A=v[E],I=m[E];A!==I&&E!=="value"&&i(h,E,I,A,k,d.children,b,T,C)}"value"in v&&i(h,"value",m.value,v.value)}},Ce=(h,d,m,v,b,T,k,E,A)=>{const I=d.el=h?h.el:a(""),L=d.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:q}=d;q&&(E=E?E.concat(q):q),h==null?(s(I,m,v),s(L,m,v),O(d.children,m,L,b,T,k,E,A)):D>0&&D&64&&F&&h.dynamicChildren?(te(h.dynamicChildren,F,m,b,T,k,E),(d.key!=null||b&&d===b.subTree)&&If(h,d,!0)):le(h,d,m,L,b,T,k,E,A)},tt=(h,d,m,v,b,T,k,E,A)=>{d.slotScopeIds=E,h==null?d.shapeFlag&512?b.ctx.activate(d,m,v,k,A):qe(d,m,v,b,T,k,A):Re(h,d,A)},qe=(h,d,m,v,b,T,k)=>{const E=h.component=O0(h,v,b);if(zi(h)&&(E.ctx.renderer=ne),P0(E),E.asyncDep){if(b&&b.registerDep(E,Ee),!h.el){const A=E.subTree=be(xt);R(null,A,d,m)}return}Ee(E,h,d,m,b,T,k)},Re=(h,d,m)=>{const v=d.component=h.component;if(jm(h,d,m))if(v.asyncDep&&!v.asyncResolved){he(v,d,m);return}else v.next=d,Dm(v.update),v.update();else d.el=h.el,v.vnode=d},Ee=(h,d,m,v,b,T,k)=>{const E=()=>{if(h.isMounted){let{next:L,bu:D,u:F,parent:q,vnode:J}=h,fe=L,ce;Sn(h,!1),L?(L.el=J.el,he(h,L,k)):L=J,D&&Jr(D),(ce=L.props&&L.props.onVnodeBeforeUpdate)&&Rt(ce,q,L,J),Sn(h,!0);const Te=Co(h),bt=h.subTree;h.subTree=Te,x(bt,Te,f(bt.el),S(bt),h,b,T),L.el=Te.el,fe===null&&Vm(h,Te.el),F&&Ge(F,b),(ce=L.props&&L.props.onVnodeUpdated)&&Ge(()=>Rt(ce,q,L,J),b)}else{let L;const{el:D,props:F}=d,{bm:q,m:J,parent:fe}=h,ce=Zr(d);if(Sn(h,!1),q&&Jr(q),!ce&&(L=F&&F.onVnodeBeforeMount)&&Rt(L,fe,d),Sn(h,!0),D&&Y){const Te=()=>{h.subTree=Co(h),Y(D,h.subTree,h,b,null)};ce?d.type.__asyncLoader().then(()=>!h.isUnmounted&&Te()):Te()}else{const Te=h.subTree=Co(h);x(null,Te,m,v,h,b,T),d.el=Te.el}if(J&&Ge(J,b),!ce&&(L=F&&F.onVnodeMounted)){const Te=d;Ge(()=>Rt(L,fe,Te),b)}(d.shapeFlag&256||fe&&Zr(fe.vnode)&&fe.vnode.shapeFlag&256)&&h.a&&Ge(h.a,b),h.isMounted=!0,d=m=v=null}},A=h.effect=new Za(E,()=>al(I),h.scope),I=h.update=()=>A.run();I.id=h.uid,Sn(h,!0),I()},he=(h,d,m)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,p0(h,d.props,v,m),y0(h,d.children,m),bs(),Tc(),Is()},le=(h,d,m,v,b,T,k,E,A=!1)=>{const I=h&&h.children,L=h?h.shapeFlag:0,D=d.children,{patchFlag:F,shapeFlag:q}=d;if(F>0){if(F&128){xn(I,D,m,v,b,T,k,E,A);return}else if(F&256){_t(I,D,m,v,b,T,k,E,A);return}}q&8?(L&16&&C(I,b,T),D!==I&&u(m,D)):L&16?q&16?xn(I,D,m,v,b,T,k,E,A):C(I,b,T,!0):(L&8&&u(m,""),q&16&&O(D,m,v,b,T,k,E,A))},_t=(h,d,m,v,b,T,k,E,A)=>{h=h||ss,d=d||ss;const I=h.length,L=d.length,D=Math.min(I,L);let F;for(F=0;F<D;F++){const q=d[F]=A?on(d[F]):Pt(d[F]);x(h[F],q,m,null,b,T,k,E,A)}I>L?C(h,b,T,!0,!1,D):O(d,m,v,b,T,k,E,A,D)},xn=(h,d,m,v,b,T,k,E,A)=>{let I=0;const L=d.length;let D=h.length-1,F=L-1;for(;I<=D&&I<=F;){const q=h[I],J=d[I]=A?on(d[I]):Pt(d[I]);if(On(q,J))x(q,J,m,null,b,T,k,E,A);else break;I++}for(;I<=D&&I<=F;){const q=h[D],J=d[F]=A?on(d[F]):Pt(d[F]);if(On(q,J))x(q,J,m,null,b,T,k,E,A);else break;D--,F--}if(I>D){if(I<=F){const q=F+1,J=q<L?d[q].el:v;for(;I<=F;)x(null,d[I]=A?on(d[I]):Pt(d[I]),m,J,b,T,k,E,A),I++}}else if(I>F)for(;I<=D;)We(h[I],b,T,!0),I++;else{const q=I,J=I,fe=new Map;for(I=J;I<=F;I++){const nt=d[I]=A?on(d[I]):Pt(d[I]);nt.key!=null&&fe.set(nt.key,I)}let ce,Te=0;const bt=F-J+1;let Yn=!1,fc=0;const Rs=new Array(bt);for(I=0;I<bt;I++)Rs[I]=0;for(I=q;I<=D;I++){const nt=h[I];if(Te>=bt){We(nt,b,T,!0);continue}let Ct;if(nt.key!=null)Ct=fe.get(nt.key);else for(ce=J;ce<=F;ce++)if(Rs[ce-J]===0&&On(nt,d[ce])){Ct=ce;break}Ct===void 0?We(nt,b,T,!0):(Rs[Ct-J]=I+1,Ct>=fc?fc=Ct:Yn=!0,x(nt,d[Ct],m,null,b,T,k,E,A),Te++)}const dc=Yn?I0(Rs):ss;for(ce=dc.length-1,I=bt-1;I>=0;I--){const nt=J+I,Ct=d[nt],pc=nt+1<L?d[nt+1].el:v;Rs[I]===0?x(null,Ct,m,pc,b,T,k,E,A):Yn&&(ce<0||I!==dc[ce]?wt(Ct,m,pc,2):ce--)}}},wt=(h,d,m,v,b=null)=>{const{el:T,type:k,transition:E,children:A,shapeFlag:I}=h;if(I&6){wt(h.component.subTree,d,m,v);return}if(I&128){h.suspense.move(d,m,v);return}if(I&64){k.move(h,d,m,ne);return}if(k===rt){s(T,d,m);for(let D=0;D<A.length;D++)wt(A[D],d,m,v);s(h.anchor,d,m);return}if(k===ei){P(h,d,m);return}if(v!==2&&I&1&&E)if(v===0)E.beforeEnter(T),s(T,d,m),Ge(()=>E.enter(T),b);else{const{leave:D,delayLeave:F,afterLeave:q}=E,J=()=>s(T,d,m),fe=()=>{D(T,()=>{J(),q&&q()})};F?F(T,J,fe):fe()}else s(T,d,m)},We=(h,d,m,v=!1,b=!1)=>{const{type:T,props:k,ref:E,children:A,dynamicChildren:I,shapeFlag:L,patchFlag:D,dirs:F}=h;if(E!=null&&ma(E,null,m,h,!0),L&256){d.ctx.deactivate(h);return}const q=L&1&&F,J=!Zr(h);let fe;if(J&&(fe=k&&k.onVnodeBeforeUnmount)&&Rt(fe,d,h),L&6)_(h.component,m,v);else{if(L&128){h.suspense.unmount(m,v);return}q&&An(h,null,d,"beforeUnmount"),L&64?h.type.remove(h,d,m,b,ne,v):I&&(T!==rt||D>0&&D&64)?C(I,d,m,!1,!0):(T===rt&&D&384||!b&&L&16)&&C(A,d,m),v&&Xn(h)}(J&&(fe=k&&k.onVnodeUnmounted)||q)&&Ge(()=>{fe&&Rt(fe,d,h),q&&An(h,null,d,"unmounted")},m)},Xn=h=>{const{type:d,el:m,anchor:v,transition:b}=h;if(d===rt){Fr(m,v);return}if(d===ei){W(h);return}const T=()=>{r(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:k,delayLeave:E}=b,A=()=>k(m,T);E?E(h.el,T,A):A()}else T()},Fr=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},_=(h,d,m)=>{const{bum:v,scope:b,update:T,subTree:k,um:E}=h;v&&Jr(v),b.stop(),T&&(T.active=!1,We(k,h,d,m)),E&&Ge(E,d),Ge(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},C=(h,d,m,v=!1,b=!1,T=0)=>{for(let k=T;k<h.length;k++)We(h[k],d,m,v,b)},S=h=>h.shapeFlag&6?S(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),M=(h,d,m)=>{h==null?d._vnode&&We(d._vnode,null,null,!0):x(d._vnode||null,h,d,null,null,null,m),Tc(),tf(),d._vnode=h},ne={p:x,um:We,m:wt,r:Xn,mt:qe,mc:O,pc:le,pbc:te,n:S,o:t};let me,Y;return e&&([me,Y]=e(ne)),{render:M,hydrate:me,createApp:_0(M,me)}}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function If(t,e,n=!1){const s=t.children,r=e.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=on(r[i]),a.el=o.el),n||If(o,a)),a.type===Wi&&(a.el=o.el)}}function I0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const E0=t=>t.__isTeleport,rt=Symbol(void 0),Wi=Symbol(void 0),xt=Symbol(void 0),ei=Symbol(void 0),$s=[];let Et=null;function we(t=!1){$s.push(Et=t?null:[])}function T0(){$s.pop(),Et=$s[$s.length-1]||null}let nr=1;function Mc(t){nr+=t}function Ef(t){return t.dynamicChildren=nr>0?Et||ss:null,T0(),nr>0&&Et&&Et.push(t),t}function xe(t,e,n,s,r,i){return Ef(y(t,e,n,s,r,i,!0))}function x0(t,e,n,s,r){return Ef(be(t,e,n,s,r,!0))}function ya(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const Gi="__vInternal",Tf=({key:t})=>t??null,ti=({ref:t,ref_key:e,ref_for:n})=>t!=null?ke(t)||ye(t)||K(t)?{i:ot,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,r=null,i=t===rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tf(e),ref:e&&ti(e),scopeId:rf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ot};return a?(hl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),nr>0&&!o&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const be=A0;function A0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===i0)&&(t=xt),ya(t)){const a=In(t,e,!0);return n&&hl(a,n),nr>0&&!i&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag|=-2,a}if(F0(t)&&(t=t.__vccOpts),e){e=S0(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=Xs(a)),de(l)&&(Wh(l)&&!V(l)&&(l=Be({},l)),e.style=Ga(l))}const o=ke(t)?1:Bm(t)?128:E0(t)?64:de(t)?4:K(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function S0(t){return t?Wh(t)||Gi in t?Be({},t):t:null}function In(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?k0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tf(a),ref:e&&e.ref?n&&r?V(r)?r.concat(ti(e)):[r,ti(e)]:ti(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function hi(t=" ",e=0){return be(Wi,null,t,e)}function Ir(t,e){const n=be(ei,null,t);return n.staticCount=e,n}function qt(t="",e=!1){return e?(we(),x0(xt,null,t)):be(xt,null,t)}function Pt(t){return t==null||typeof t=="boolean"?be(xt):V(t)?be(rt,null,t.slice()):typeof t=="object"?on(t):be(Wi,null,String(t))}function on(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function hl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Gi in e)?e._ctx=ot:r===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[hi(e)]):n=8);t.children=e,t.shapeFlag|=n}function k0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Xs([e.class,s.class]));else if(r==="style")e.style=Ga([e.style,s.style]);else if($i(r)){const i=e[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Rt(t,e,n,s=null){ft(t,e,7,[n,s])}const C0=bf();let R0=0;function O0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||C0,i={uid:R0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yf(s,r),emitsOptions:sf(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lm.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const xf=()=>Pe||ot,fs=t=>{Pe=t,t.scope.on()},$n=()=>{Pe&&Pe.scope.off(),Pe=null};function Af(t){return t.vnode.shapeFlag&4}let sr=!1;function P0(t,e=!1){sr=e;const{props:n,children:s}=t.vnode,r=Af(t);d0(t,n,r,e),m0(t,s);const i=r?D0(t,e):void 0;return sr=!1,i}function D0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hs(new Proxy(t.ctx,a0));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?M0(t):null;fs(t),bs();const i=vn(s,t,0,[t.props,r]);if(Is(),$n(),Oh(i)){if(i.then($n,$n),e)return i.then(o=>{Lc(t,o,e)}).catch(o=>{Hi(o,t,0)});t.asyncDep=i}else Lc(t,i,e)}else Sf(t,e)}function Lc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Jh(e)),Sf(t,n)}let Fc;function Sf(t,e,n){const s=t.type;if(!t.render){if(!e&&Fc&&!s.render){const r=s.template||cl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Be(Be({isCustomElement:i,delimiters:a},o),l);s.render=Fc(r,c)}}t.render=s.render||Tt}fs(t),bs(),l0(t),Is(),$n()}function N0(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function M0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=N0(t))},slots:t.slots,emit:t.emit,expose:e}}function Xi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Jh(hs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}}))}function L0(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function F0(t){return K(t)&&"__vccOpts"in t}const Qe=(t,e)=>Rm(t,e,sr);function kf(t,e,n){const s=arguments.length;return s===2?de(e)&&!V(e)?ya(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ya(n)&&(n=[n]),be(t,e,n))}const $0=Symbol(""),U0=()=>Lt($0),j0="3.2.45",V0="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,$c=Pn&&Pn.createElement("template"),B0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Pn.createElementNS(V0,t):Pn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{$c.innerHTML=s?`<svg>${t}</svg>`:t;const a=$c.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function H0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function q0(t,e,n){const s=t.style,r=ke(n);if(n&&!r){for(const i in n)va(s,i,n[i]);if(e&&!ke(e))for(const i in e)n[i]==null&&va(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Uc=/\s*!important$/;function va(t,e,n){if(V(n))n.forEach(s=>va(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=z0(t,e);Uc.test(n)?t.setProperty(ws(s),n.replace(Uc,""),"important"):t[s]=n}}const jc=["Webkit","Moz","ms"],Po={};function z0(t,e){const n=Po[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return Po[e]=s;s=Vi(s);for(let r=0;r<jc.length;r++){const i=jc[r]+s;if(i in t)return Po[e]=i}return e}const Vc="http://www.w3.org/1999/xlink";function K0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vc,e.slice(6,e.length)):t.setAttributeNS(Vc,e,n);else{const i=$g(e);n==null||i&&!Ch(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function W0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ch(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function G0(t,e,n,s){t.removeEventListener(e,n,s)}function X0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Y0(e);if(s){const c=i[e]=Z0(s,r);un(t,a,c,l)}else o&&(G0(t,a,o,l),i[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function Y0(t){let e;if(Bc.test(t)){e={};let s;for(;s=t.match(Bc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ws(t.slice(2)),e]}let Do=0;const J0=Promise.resolve(),Q0=()=>Do||(J0.then(()=>Do=0),Do=Date.now());function Z0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(ey(s,n.value),e,5,[s])};return n.value=t,n.attached=Q0(),n}function ey(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hc=/^on[a-z]/,ty=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?H0(t,s,r):e==="style"?q0(t,n,s):$i(e)?Xa(e)||X0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ny(t,e,s,r))?W0(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),K0(t,e,s,r))};function ny(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hc.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hc.test(e)&&ke(n)?!1:e in t}const sy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wm.props;const ds=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Jr(e,n):e};function ry(t){t.target.composing=!0}function qc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ds(r);const i=s||r.props&&r.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qs(a)),t._assign(a)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",ry),un(t,"compositionend",qc),un(t,"change",qc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ds(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Qs(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zc={created(t,{value:e},n){t.checked=cs(e,n.props.value),t._assign=ds(n),un(t,"change",()=>{t._assign(rr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=ds(s),e!==n&&(t.checked=cs(e,s.props.value))}},Kc={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ui(e);un(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qs(rr(o)):rr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=ds(s)},mounted(t,{value:e}){Wc(t,e)},beforeUpdate(t,e,n){t._assign=ds(n)},updated(t,{value:e}){Wc(t,e)}};function Wc(t,e){const n=t.multiple;if(!(n&&!V(e)&&!Ui(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=rr(i);if(n)V(e)?i.selected=jg(e,o)>-1:i.selected=e.has(o);else if(cs(rr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function rr(t){return"_value"in t?t._value:t.value}const iy=["ctrl","shift","alt","meta"],oy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iy.some(n=>t[`${n}Key`]&&!e.includes(n))},ay=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=oy[e[r]];if(i&&i(n,e))return}return t(n,...s)},ly=Be({patchProp:ty},B0);let Gc;function cy(){return Gc||(Gc=w0(ly))}const uy=(...t)=>{const e=cy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=hy(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hy(t){return ke(t)?document.querySelector(t):t}const fy="/assets/personajeODM-860404cc.png",Yi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},dy={},py={class:"w-screen sm:w-auto"},gy=Ir('<div class="bg-inherit py-5 px-6 sm:py-5 sm:px-16 lg:py-16 lg:px-48 text-start text-neutral-800"><h1 class="sm:mb-5 text-[#003368] text-4xl sm:text-6xl md:text-6xl font-bold blue:bg-neutral-700 sm:pl-[30px] md:pl-[30px] lg:pl-[-30px] xl:ml-[10px] tracking-widest"> AHORRA HASTA 60% EN <p>LOGÍSTICA PARA TU</p><p>EMPRESA</p></h1><div class="mx-auto max-w-[900px] sm:ml-5"><ul class="flex flex-col space-y-2 py-5 sm:pt-5 pb-10 text-lg sm:text-3xl text-gray-800"><li>Tarifas preferenciales para empresas</li><li> Envía y recibe paquetes el mismo día <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Cobertura en zonas extendidad <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Servicio ocurre, en más de 50 ciudades <p class="text-gray-500 inline">(Bajío, Norte y Centro del país)</p></li></ul></div><div class="mx-auto sm:max-w-auto sm:pt-[-100px] lg:pt-5 sm:ml-20 sm:py-20 sm:px-20"><button class="bg-[#003368] sm:w-auto h-24 sm:h-24º hover:bg-blue-600 text-white text-xl sm:text-4xl font-extrabold py-2 px-14 sm:py-2 sm:px-28"> TARIFAS PREFERENCIALES </button></div><div class="flex flex-auto mx-auto w-auto sm:w-80 h-auto mr-44 lg:mt-[-675px] opacity-0 2xl:opacity-100 hidden 2xl:block"><img src="'+fy+'"></div></div>',1),my=[gy];function yy(t,e){return we(),xe("div",py,my)}const vy=Yi(dy,[["render",yy]]),_y="/assets/ODMenvios-76bb4f45.png",wy={name:"Navbar",inject:["isSticky"],computed:{navbarClass(){return this.isSticky?"sticky top-0":""}},setup(){let t=Je(!1);return{showMenu:t,toggleNav:()=>{t.value=!t.value}}}},by={class:"sm:bg-transparent sm:pt-5 sticky top-0"},Iy={class:"px-6 pt-5 sm:py-8 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center"},Ey={class:"flex items-center justify-between"},Ty=y("button",{type:"button",class:"text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"},[y("svg",{viewBox:"0 0 24 24",class:"w-20 h-18 fill-current"},[y("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),xy=[Ty],Ay=Ir('<li class="pl-1 border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Tipos <br> de envíos</a></li><li class="border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Cobertura <br> de envíos</a></li><li class="border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Calcula<br> tu paquete</a></li><li class="border-b border-white hover:text-blue-600 font-extrabold text-2xl text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Tarifas<br> preferenciales</a></li>',4),Sy=[Ay];function ky(t,e,n,s,r,i){return we(),xe("div",by,[y("nav",Iy,[y("div",Ey,[y("div",{onClick:e[0]||(e[0]=(...o)=>s.toggleNav&&s.toggleNav(...o)),class:"flex md:hidden"},xy)]),y("img",{src:_y,class:Xs(["sm:hidden w-44 h-auto m-5",s.showMenu?"flex":"hidden"])},null,2),y("ul",{class:Xs([s.showMenu?"flex":"hidden","flex-col mt-0 mr-20 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368]"])},Sy,2)])])}const Cy=Yi(wy,[["render",ky]]),Ry="/assets/SobreODM-8ea1740b.png",Xc="/assets/cajaODM-b82f9c47.png",Oy="/assets/maleta-4df1ca78.png",Py={},Dy={class:"bg-gray-300 w-full md:w-full mt-auto mb-0 h-auto"},Ny=Ir('<h1 class="text-4xl font-black capitalize ml-5 sm:ml-24 py-14"> TIPOS DE ENVÍOS </h1><div class="flex flex-wrap justify-center items-center gap-0 sm:gap-5"><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"> Sobres </h3><p class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"> Hasta 25 hojas </p></div><img class="sm:w-40 sm:h-28 w-32 h-24 mt-[-100px] sm:mx-auto ml-48 sm:mt-16 sm:mb-5" src="'+Ry+'" alt="Image Description"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"> Paquetes </h3><p class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"> De 0 a 1 kg </p></div><img class="sm:w-36 sm:h-36 w-32 h-24 mt-[-100px] sm:mx-auto ml-48 sm:mt-7 sm:mb-0" src="'+Xc+'" alt="Image Description"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"> Paquetes </h3><span class="text-2xl sm:mt-0 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"><p>De 1-10 kg</p><p>De 11-20 kg</p><p>De 21-30 kg</p></span></div><img class="sm:w-40 sm:h-40 w-32 h-32 mt-[-130px] sm:mx-auto ml-48 sm:mt-[-5px] sm:mb-0" src="'+Xc+'" alt="Image Description"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"> Maletas </h3><span class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"><p>De 1-10 kg</p><p>De 11-20 kg</p><p>De 21-30 kg</p></span></div><img class="sm:w-24 sm:h-36 w-32 h-40 mt-[-150px] sm:mx-auto ml-48 sm:mt-0 sm:mb-0" src="'+Oy+'" alt="Image Description"></div></div><div class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"><p>VOLUMEN MÁXIMO EN TU ENVÍO:</p><p>65 X 50 X 55 = 30cm^3</p></div>',3),My=[Ny];function Ly(t,e){return we(),xe("div",Dy,My)}const Fy=Yi(Py,[["render",Ly]]),$y="/assets/Calculadora-ca17f3e3.png",Uy={class:"w-full"},jy=y("h1",{class:"text-4xl font-black capitalize ml-5 sm:ml-24 py-14"}," CALCULA EL PESO DE TU PAQUETE ",-1),Vy={class:"my-5 mb-0"},By={class:"flex flex-col justify-center items-center"},Hy=y("div",{class:"flex flex-wrap xl:justify-center"},[y("img",{src:$y,class:"h-auto max-w-sm",alt:""})],-1),qy={class:"bg-[#D9D9D9] max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8"},zy=y("h2",{class:"text-3xl md:ml-10 font-semibold text-center mt-5"}," Calculadora de peso volumétrico ",-1),Ky={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 pt-5 sm:mx-full"},Wy={class:"flex items-center flex-row sm:flex-row sm:space-x-24"},Gy=y("label",{class:"block text-gray-700 text-xl font-bold mr-2",for:"inline-alto"},"Alto:",-1),Xy=y("span",{class:"flex-none text-gray-700 text-xl font-bold ml-2"},"cm",-1),Yy={class:"flex items-center flex-row sm:flex-row sm:space-x-24"},Jy=y("label",{class:"block text-gray-700 text-xl font-bold mb-0 -mr-3",for:"inline-ancho"},"Ancho:",-1),Qy=y("span",{class:"flex-none text-gray-700 text-xl font-bold ml-2"},"cm",-1),Zy={class:"flex items-center flex-row sm:flex-row sm:space-x-24"},ev=y("label",{class:"block text-gray-700 text-xl font-bold mb-2",for:"inline-largo"},"Largo:",-1),tv=y("span",{class:"flex-none text-gray-700 text-xl font-bold ml-2"},"cm",-1),nv={class:"my-4"},sv={class:"flex items-center justify-center"},rv={class:"block text-black text-4xl font-semibold text-center sm:text-left"},iv={class:"text-center text-red-500"},ov=y("div",{class:"xl:h-auto xl:w-auto pt-5 pb-5 mt-0 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl xl:pl-0 xl:pr-0"},[y("p",null,"UTILIZA LA FÓRMULA:"),y("p",null,"(Alto(cm) * Ancho(cm) * Largo(cm))/6000")],-1),av={__name:"Calculadora",setup(t){const e=Je({largo:0,ancho:0,alto:0}),n=Qe({get:()=>{let s=0;return s=e.value.largo*e.value.ancho*e.value.alto/6e3,s.toFixed(2)},set:s=>{e.value.largo=s,e.value.ancho=s,e.value.alto=s}});return(s,r)=>(we(),xe("div",Uy,[jy,y("div",Vy,[y("div",By,[Hy,y("div",qy,[zy,y("div",Ky,[y("div",Wy,[Gy,ht(y("input",{class:"flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":r[0]||(r[0]=i=>e.value.alto=i),type:"text",name:"inline-alto",placeholder:"Alto"},null,512),[[hn,e.value.alto]]),Xy]),y("div",Yy,[Jy,ht(y("input",{class:"flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":r[1]||(r[1]=i=>e.value.ancho=i),type:"text",name:"inline-ancho",placeholder:"Ancho"},null,512),[[hn,e.value.ancho]]),Qy]),y("div",Zy,[ev,ht(y("input",{class:"flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":r[2]||(r[2]=i=>e.value.largo=i),type:"text",name:"inline-largo",placeholder:"Largo"},null,512),[[hn,e.value.largo]]),tv])]),y("div",nv,[y("div",sv,[y("span",rv,[hi(" El peso total de tu paquete es: "),y("p",iv,Ot(oe(n))+" Kg",1)])])])])])]),ov]))}},lv="/assets/logoblanco-9affbb48.webp",cv={name:"Footer"},uv={class:"bg-[#003368]"},hv=Ir('<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"><nav class="flex flex-wrap justify-center -mx-5 -my-2"><div class="px-5 py-2"><a href="https://odm.com.mx/quienes-somos2" class="text-base leading-6 text-white hover:text-neutral-600"> ¿Quiénes somos? </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/preguntas-frecuentes" class="text-base leading-6 text-white hover:text-neutral-600"> Preguntas frecuentes </a></div><div class="px-5 py-2"><a href="http://venta.odm.com.mx/netScripts/request.aspx?APPNAME=Navegante&amp;PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG&amp;_gl=1*z7x1y0*_ga*NjAyODM2MzE2LjE2NzI0MjgyOTU.*_ga_6MKKJY80T1*MTY3OTY3MDk4NC4xMDQuMS4xNjc5NjcyNjE0LjQ5LjAuMA.." class="text-base leading-6 text-white hover:text-neutral-600"> Agencias </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/contactanos" class="text-base leading-6 text-white hover:text-neutral-600"> Contáctanos </a></div></nav><img src="'+lv+'" alt="Logo" class="w-80 h-auto mx-auto"><div class="flex justify-center mt-8 space-x-6"><a href="#" class="text-white hover:text-neutral-600"><span class="sr-only">Facebook</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">Twitter</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">Instagram</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">YouTube</span><svg aria-hidden="true" fill="currentColor" class="bi bi-youtube w-6 h-6" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a></div><p class="mt-8 text-base leading-6 text-center text-white hover:text-neutral-600"><a href="https://odm.com.mx/aviso-privacidad">Aviso de privacidad | Políticas de viaje</a></p><p class="mt-8 text-base leading-6 text-center text-white"> © 2023 Ómnibus de México. Todos los derechos reservados. </p></div>',1),fv=[hv];function dv(t,e,n,s,r,i){return we(),xe("section",uv,fv)}const pv=Yi(cv,[["render",dv]]);/**
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
 */const Cf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},gv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const w=c<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mv=function(t){const e=Cf(t);return Rf.encodeByteArray(e,!0)},fi=function(t){return mv(t).replace(/\./g,"")},Of=function(t){try{return Rf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Pf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _v(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Df(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function wv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Iv=()=>bv().__FIREBASE_DEFAULTS__,Ev=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Of(t[1]);return e&&JSON.parse(e)},fl=()=>{try{return Iv()||Ev()||Tv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mf=t=>{var e,n;return(n=(e=fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xv=t=>{const e=Mf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Av=()=>{var t;return(t=fl())===null||t===void 0?void 0:t.config},Lf=t=>{var e;return(e=fl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Sv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function kv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fi(JSON.stringify(n)),fi(JSON.stringify(o)),a].join(".")}/**
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
 */const Cv="FirebaseError";class vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cv,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Rv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new vt(r,a,s)}}function Rv(t,e){return t.replace(Ov,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ov=/\{\$([^}]+)}/g;function Pv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ir(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Yc(i)&&Yc(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Yc(t){return t!==null&&typeof t=="object"}/**
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
 */function Er(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Dv(t,e){const n=new Nv(t,e);return n.subscribe.bind(n)}class Nv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Mv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=No),r.error===void 0&&(r.error=No),r.complete===void 0&&(r.complete=No);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function No(){}/**
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
 */const Lv=1e3,Fv=2,$v=4*60*60*1e3,Uv=.5;function Jc(t,e=Lv,n=Fv){const s=e*Math.pow(n,t),r=Math.round(Uv*s*(Math.random()-.5)*2);return Math.min($v,s+r)}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class jv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Sv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bv(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vv(t){return t===Cn?void 0:t}function Bv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const qv={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},zv=ie.INFO,Kv={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Wv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Kv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tr{constructor(e){this.name=e,this._logLevel=zv,this._logHandler=Wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Gv=(t,e)=>e.some(n=>t instanceof n);let Qc,Zc;function Xv(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return Zc||(Zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ff=new WeakMap,_a=new WeakMap,$f=new WeakMap,Mo=new WeakMap,dl=new WeakMap;function Jv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ff.set(n,t)}).catch(()=>{}),dl.set(e,t),e}function Qv(t){if(_a.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_a.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _a.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zv(t){wa=t(wa)}function e_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lo(this),e,...n);return $f.set(s,e.sort?e.sort():[e]),_n(s)}:Yv().includes(t)?function(...e){return t.apply(Lo(this),e),_n(Ff.get(this))}:function(...e){return _n(t.apply(Lo(this),e))}}function t_(t){return typeof t=="function"?e_(t):(t instanceof IDBTransaction&&Qv(t),Gv(t,Xv())?new Proxy(t,wa):t)}function _n(t){if(t instanceof IDBRequest)return Jv(t);if(Mo.has(t))return Mo.get(t);const e=t_(t);return e!==t&&(Mo.set(t,e),dl.set(e,t)),e}const Lo=t=>dl.get(t);function Uf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const n_=["get","getKey","getAll","getAllKeys","count"],s_=["put","add","delete","clear"],Fo=new Map;function eu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fo.get(e))return Fo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=s_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||n_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Fo.set(e,i),i}Zv(t=>({...t,get:(e,n,s)=>eu(e,n)||t.get(e,n,s),has:(e,n)=>!!eu(e,n)||t.has(e,n)}));/**
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
 */class r_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function i_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ba="@firebase/app",tu="0.9.0";/**
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
 */const Vn=new Tr("@firebase/app"),o_="@firebase/app-compat",a_="@firebase/analytics-compat",l_="@firebase/analytics",c_="@firebase/app-check-compat",u_="@firebase/app-check",h_="@firebase/auth",f_="@firebase/auth-compat",d_="@firebase/database",p_="@firebase/database-compat",g_="@firebase/functions",m_="@firebase/functions-compat",y_="@firebase/installations",v_="@firebase/installations-compat",__="@firebase/messaging",w_="@firebase/messaging-compat",b_="@firebase/performance",I_="@firebase/performance-compat",E_="@firebase/remote-config",T_="@firebase/remote-config-compat",x_="@firebase/storage",A_="@firebase/storage-compat",S_="@firebase/firestore",k_="@firebase/firestore-compat",C_="firebase",R_="9.15.0";/**
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
 */const Ia="[DEFAULT]",O_={[ba]:"fire-core",[o_]:"fire-core-compat",[l_]:"fire-analytics",[a_]:"fire-analytics-compat",[u_]:"fire-app-check",[c_]:"fire-app-check-compat",[h_]:"fire-auth",[f_]:"fire-auth-compat",[d_]:"fire-rtdb",[p_]:"fire-rtdb-compat",[g_]:"fire-fn",[m_]:"fire-fn-compat",[y_]:"fire-iid",[v_]:"fire-iid-compat",[__]:"fire-fcm",[w_]:"fire-fcm-compat",[b_]:"fire-perf",[I_]:"fire-perf-compat",[E_]:"fire-rc",[T_]:"fire-rc-compat",[x_]:"fire-gcs",[A_]:"fire-gcs-compat",[S_]:"fire-fst",[k_]:"fire-fst-compat","fire-js":"fire-js",[C_]:"fire-js-all"};/**
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
 */const di=new Map,Ea=new Map;function P_(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(Ea.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Ea.set(e,t);for(const n of di.values())P_(n,t);return!0}function Gn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const D_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Wn("app","Firebase",D_);/**
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
 */class N_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=R_;function jf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw wn.create("bad-app-name",{appName:String(r)});if(n||(n=Av()),!n)throw wn.create("no-options");const i=di.get(r);if(i){if(ir(n,i.options)&&ir(s,i.config))return i;throw wn.create("duplicate-app",{appName:r})}const o=new Hv(r);for(const l of Ea.values())o.addComponent(l);const a=new N_(n,s,o);return di.set(r,a),a}function pl(t=Ia){const e=di.get(t);if(!e&&t===Ia)return jf();if(!e)throw wn.create("no-app",{appName:t});return e}function Ze(t,e,n){var s;let r=(s=O_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}At(new mt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const M_="firebase-heartbeat-database",L_=1,or="firebase-heartbeat-store";let $o=null;function Vf(){return $o||($o=Uf(M_,L_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(or)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),$o}async function F_(t){try{return(await Vf()).transaction(or).objectStore(or).get(Bf(t))}catch(e){if(e instanceof vt)Vn.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function nu(t,e){try{const s=(await Vf()).transaction(or,"readwrite");return await s.objectStore(or).put(e,Bf(t)),s.done}catch(n){if(n instanceof vt)Vn.warn(n.message);else{const s=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(s.message)}}}function Bf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $_=1024,U_=30*24*60*60*1e3;class j_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=su();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=U_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=su(),{heartbeatsToSend:n,unsentEntries:s}=V_(this._heartbeatsCache.heartbeats),r=fi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function su(){return new Date().toISOString().substring(0,10)}function V_(t,e=$_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ru(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ru(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class B_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Df()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ru(t){return fi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function H_(t){At(new mt("platform-logger",e=>new r_(e),"PRIVATE")),At(new mt("heartbeat",e=>new j_(e),"PRIVATE")),Ze(ba,tu,t),Ze(ba,tu,"esm2017"),Ze("fire-js","")}H_("");/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let xs="9.15.0";/**
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
 */const ps=new Tr("@firebase/firestore");function pi(t,...e){if(ps.logLevel<=ie.DEBUG){const n=e.map(ml);ps.debug(`Firestore (${xs}): ${t}`,...n)}}function gl(t,...e){if(ps.logLevel<=ie.ERROR){const n=e.map(ml);ps.error(`Firestore (${xs}): ${t}`,...n)}}function Hf(t,...e){if(ps.logLevel<=ie.WARN){const n=e.map(ml);ps.warn(`Firestore (${xs}): ${t}`,...n)}}function ml(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw gl(e),new Error(e)}function Yt(t,e){t||_e()}function Ji(t,e){return t}/**
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
 */const iu="ok",q_="cancelled",Us="unknown",z="invalid-argument",z_="deadline-exceeded",K_="not-found",W_="permission-denied",Ta="unauthenticated",G_="resource-exhausted",gs="failed-precondition",X_="aborted",Y_="out-of-range",qf="unimplemented",J_="internal",Q_="unavailable";let U=class extends vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */let zf=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Z_=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}},ew=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},tw=class{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Yt(typeof e.accessToken=="string"),new zf(e.accessToken,new Xe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}},nw=class{constructor(e,n,s,r){this.t=e,this.i=n,this.o=s,this.u=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Yt(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}},sw=class{constructor(e,n,s,r){this.t=e,this.i=n,this.o=s,this.u=r}getToken(){return Promise.resolve(new nw(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},rw=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},iw=class{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Yt(typeof e.token=="string"),new rw(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}};/**
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
 */let ow=class{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}},gi=class{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}};class ar{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(),s===void 0?s=e.length-n:s>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ar{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(z,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ar{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return aw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(z,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(z,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(z,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class Me{constructor(e){this.path=e}static fromPath(e){return new Me(Se.fromString(e))}static fromName(e){return new Me(Se.fromString(e).popFirst(5))}static empty(){return new Me(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Me(new Se(e.slice()))}}/**
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
 */function Kf(t,e,n){if(!n)throw new U(z,`Function ${t}() cannot be called with an empty ${e}.`)}function ou(t){if(!Me.isDocumentKey(t))throw new U(z,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function au(t){if(Me.isDocumentKey(t))throw new U(z,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function yl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qi(t);throw new U(z,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function lw(t){return t==null}function mi(t){return t===0&&1/t==-1/0}/**
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
 */const cw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var lu,Z;function cu(t){if(t===void 0)return gl("RPC_ERROR","HTTP error has no status"),Us;switch(t){case 200:return iu;case 400:return gs;case 401:return Ta;case 403:return W_;case 404:return K_;case 409:return X_;case 416:return Y_;case 429:return G_;case 499:return q_;case 500:return Us;case 501:return qf;case 503:return Q_;case 504:return z_;default:return t>=200&&t<300?iu:t>=400&&t<500?gs:t>=500&&t<600?J_:Us}}/**
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
 */(Z=lu||(lu={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";class uw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,s,r,i){const o=this.T(e,n);pi("RestConnection","Sending: ",o,s);const a={};return this.A(a,r,i),this.R(e,o,a,s).then(l=>(pi("RestConnection","Received: ",l),l),l=>{throw Hf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}P(e,n,s,r,i,o){return this.I(e,n,s,r,i)}A(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+xs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}T(e,n){const s=cw[e];return`${this.p}/v1/${n}:${s}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,s,r){var i;const o=JSON.stringify(r);let a;try{a=await this.V(n,{method:"POST",headers:s,body:o})}catch(l){const c=l;throw new U(cu(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new U(cu(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function hw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class fw{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=hw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Oe(t,e){return t<e?-1:t>e?1:0}function Wf(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */function uu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Jt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const dw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(Yt(!!t),typeof t=="string"){let e=0;const n=dw.exec(t);if(Yt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function lr(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
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
 */let dt=class{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(z,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(z,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(z,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new dt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
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
 */function Gf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xf(t){const e=t.mapValue.fields.__previous_value__;return Gf(e)?Xf(e):e}function cr(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */const qr={fields:{__type__:{stringValue:"__max__"}}};function Hn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gf(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:_e()}function yi(t,e){if(t===e)return!0;const n=Hn(t);if(n!==Hn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cr(t).isEqual(cr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Bn(s.timestampValue),o=Bn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return lr(s.bytesValue).isEqual(lr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ae(s.geoPointValue.latitude)===Ae(r.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ae(s.integerValue)===Ae(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ae(s.doubleValue),o=Ae(r.doubleValue);return i===o?mi(i)===mi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Wf(t.arrayValue.values||[],e.arrayValue.values||[],yi);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(uu(i)!==uu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yi(i[a],o[a])))return!1;return!0}(t,e);default:return _e()}}function ur(t,e){return(t.values||[]).find(n=>yi(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=Hn(t),s=Hn(e);if(n!==s)return Oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ae(r.integerValue||r.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hu(t.timestampValue,e.timestampValue);case 4:return hu(cr(t),cr(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=lr(r),a=lr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Oe(o[l],a[l]);if(c!==0)return c}return Oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Oe(Ae(r.latitude),Ae(i.latitude));return o!==0?o:Oe(Ae(r.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=vi(o[l],a[l]);if(c)return c}return Oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===qr&&i===qr)return 0;if(r===qr)return 1;if(i===qr)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=Oe(a[u],c[u]);if(f!==0)return f;const p=vi(o[a[u]],l[c[u]]);if(p!==0)return p}return Oe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw _e()}}function hu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Bn(t),s=Bn(e),r=Oe(n.seconds,s.seconds);return r!==0?r:Oe(n.nanos,s.nanos)}function fu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yf(t){return!!t&&"arrayValue"in t}function du(t){return!!t&&"nullValue"in t}function pu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=js(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}class gu{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Jf{}class kt extends Jf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new pw(e,n,s):n==="array-contains"?new yw(e,s):n==="in"?new vw(e,s):n==="not-in"?new _w(e,s):n==="array-contains-any"?new ww(e,s):new kt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new gw(e,s):new mw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&Hn(this.value)===Hn(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xr extends Jf{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new xr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class pw extends kt{constructor(e,n,s){super(e,n,s),this.key=Me.fromName(s.referenceValue)}matches(e){const n=Me.comparator(e.key,this.key);return this.matchesComparison(n)}}class gw extends kt{constructor(e,n){super(e,"in",n),this.keys=Qf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mw extends kt{constructor(e,n){super(e,"not-in",n),this.keys=Qf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Me.fromName(s.referenceValue))}class yw extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yf(n)&&ur(n.arrayValue,this.value)}}class vw extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ur(this.value.arrayValue,n)}}class _w extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ur(this.value.arrayValue,n)}}class ww extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ur(this.value.arrayValue,s))}}/**
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
 */class ni{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class $e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new $e(e)}static min(){return new $e(new dt(0,0))}static max(){return new $e(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _i{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new _i(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new _i(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}}class zr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=r??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ne(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wi{constructor(e){this.comparator=e,this.data=new _i(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(e){return new mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wi(this.comparator);return n.data=e,n}}class mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hr{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new hr([])}unionWith(e){let n=new wi(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new hr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wf(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=js(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Uo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Zi(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Nt(js(this.value))}}/**
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
 */class an{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new an(e,0,$e.min(),$e.min(),$e.min(),Nt.empty(),0)}static newFoundDocument(e,n,s,r){return new an(e,1,n,$e.min(),s,r,0)}static newNoDocument(e,n){return new an(e,2,n,$e.min(),$e.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new an(e,3,n,$e.min(),$e.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function yu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new bw(t,e,n,s,r,i,o)}/**
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
 */class Zf{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function ed(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Iw(t){return t.collectionGroup!==null}function vu(t){const e=Ji(t);if(e.q===null){e.q=[];const n=vl(e),s=ed(e);if(n!==null&&s===null)n.isKeyField()||e.q.push(new ni(n)),e.q.push(new ni(it.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new ni(it.keyField(),i))}}}return e.q}function Ew(t){const e=Ji(t);if(!e.O)if(e.limitType==="F")e.O=yu(e.path,e.collectionGroup,vu(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of vu(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ni(i.field,o))}const s=e.endAt?new gu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new gu(e.startAt.position,e.startAt.inclusive):null;e.O=yu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.O}function xa(t,e){e.getFirstInequalityField(),vl(t);const n=t.filters.concat([e]);return new Zf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function Tw(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,s){if(n.k){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mi(s)?"-0":s}}(t,e)}/**
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
 */class eo{constructor(){this._=void 0}}class xw extends eo{}class Aw extends eo{constructor(e){super(),this.elements=e}}class Sw extends eo{constructor(e){super(),this.elements=e}}class kw extends eo{constructor(e,n){super(),this.C=e,this.L=n}}class Vs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vs}static exists(e){return new Vs(void 0,e)}static updateTime(e){return new Vs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class to{}class td extends to{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nd extends to{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Cw extends to{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rw extends to{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const Ow=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Pw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Dw=(()=>({and:"AND",or:"OR"}))();class Nw{constructor(e,n){this.databaseId=e,this.k=n}}function Aa(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mw(t,e){return t.k?e.toBase64():e.toUint8Array()}function Lw(t,e){return Aa(t,e.toTimestamp())}function _u(t){return Yt(!!t),$e.fromTimestamp(function(e){const n=Bn(e);return new dt(n.seconds,n.nanos)}(t))}function _l(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Sa(t,e){return _l(t.databaseId,e.path)}function Fw(t,e){const n=function(r){const i=Se.fromString(r);return Yt(rd(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new U(z,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(z,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Me((Yt((s=n).length>4&&s.get(4)==="documents"),s.popFirst(5)));var s}function wu(t,e){return _l(t.databaseId,e)}function $w(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bu(t,e,n){return{name:Sa(t,e),fields:n.value.mapValue.fields}}function Uw(t,e){let n;if(e instanceof td)n={update:bu(t,e.key,e.value)};else if(e instanceof Cw)n={delete:Sa(t,e.key)};else if(e instanceof nd)n={update:bu(t,e.key,e.data),updateMask:qw(e.fieldMask)};else{if(!(e instanceof Rw))return _e();n={verify:Sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof xw)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Aw)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Sw)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof kw)return{fieldPath:i.field.canonicalString(),increment:o.L};throw _e()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Lw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_e()}(t,e.precondition)),n}function jw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return sd(xr.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Zn(u.field),direction:Vw(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||lw(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Vw(t){return Ow[t]}function Bw(t){return Pw[t]}function Hw(t){return Dw[t]}function Zn(t){return{fieldPath:t.canonicalString()}}function sd(t){return t instanceof kt?function(e){if(e.op==="=="){if(pu(e.value))return{unaryFilter:{field:Zn(e.field),op:"IS_NAN"}};if(du(e.value))return{unaryFilter:{field:Zn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(pu(e.value))return{unaryFilter:{field:Zn(e.field),op:"IS_NOT_NAN"}};if(du(e.value))return{unaryFilter:{field:Zn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(e.field),op:Bw(e.op),value:e.value}}}(t):t instanceof xr?function(e){const n=e.getFilters().map(s=>sd(s));return n.length===1?n[0]:{compositeFilter:{op:Hw(e.op),filters:n}}}(t):_e()}function qw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function wl(t){return new Nw(t,!0)}/**
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
 */class zw extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.C=r,this.Z=!1}tt(){if(this.Z)throw new U(gs,"The client has already been terminated.")}I(e,n,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.I(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===Ta&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(Us,r.toString())})}P(e,n,s,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ta&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(Us,i.toString())})}terminate(){this.Z=!0}}async function Kw(t,e){const n=Ji(t),s=$w(n.C)+"/documents",r={writes:e.map(i=>Uw(n.C,i))};await n.I("Commit",s,r)}async function Ww(t,e){const n=Ji(t),s=jw(n.C,Ew(e));return(await n.P("RunQuery",s.parent,{structuredQuery:s.structuredQuery})).filter(r=>!!r.document).map(r=>function(i,o,a){const l=Fw(i,o.name),c=_u(o.updateTime),u=o.createTime?_u(o.createTime):$e.min(),f=new Nt({mapValue:{fields:o.fields}}),p=an.newFoundDocument(l,c,u,f);return a&&p.setHasCommittedMutations(),a?p.setHasCommittedMutations():p}(n.C,r.document,void 0))}/**
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
 */const Bs=new Map;function id(t){if(t._terminated)throw new U(gs,"The client has already been terminated.");if(!Bs.has(t)){pi("ComponentProvider","Initializing Datastore");const i=function(l){return new uw(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",s=t._persistenceKey,r=t._freezeSettings(),new ow(e,n,s,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams))),o=wl(t._databaseId),a=function(l,c,u,f){return new zw(l,c,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);Bs.set(t,a)}var e,n,s,r;/**
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
*/return Bs.get(t)}class Iu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(s,r,i,o){if(r===!0&&o===!0)throw new U(z,`${s} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class no{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(gs,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(gs,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Z_;switch(n.type){case"gapi":const s=n.client;return new sw(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bs.get(e);n&&(pi("ComponentProvider","Removing Datastore"),Bs.delete(e),n.terminate())}(this),Promise.resolve()}}function Gw(t,e){const n=typeof t=="object"?t:pl(),s=typeof t=="string"?t:e||"(default)",r=Gn(n,"firestore/lite").getImmediate({identifier:s});if(!r._initialized){const i=xv("firestore");i&&Xw(r,...i)}return r}function Xw(t,e,n,s={}){var r;const i=(t=yl(t,no))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Hf("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Xe.MOCK_USER;else{o=kv(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(z,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(l)}t._authCredentials=new ew(new zf(o,a))}}/**
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
 */class pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class As{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class Gt extends As{constructor(e,n,s){super(e,n,new Zf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new Me(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function jo(t,e,...n){if(t=et(t),Kf("collection","path",e),t instanceof no){const s=Se.fromString(e,...n);return au(s),new Gt(t,null,s)}{if(!(t instanceof pt||t instanceof Gt))throw new U(z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return au(s),new Gt(t.firestore,null,s)}}function Yw(t,e,...n){if(t=et(t),arguments.length===1&&(e=fw.N()),Kf("doc","path",e),t instanceof no){const s=Se.fromString(e,...n);return ou(s),new pt(t,null,new Me(s))}{if(!(t instanceof pt||t instanceof Gt))throw new U(z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return ou(s),new pt(t.firestore,t instanceof Gt?t.converter:null,new Me(s))}}/**
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
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(Jt.fromBase64String(e))}catch(n){throw new U(z,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class od{constructor(e){this._methodName=e}}/**
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
 */class Il{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(z,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */const Jw=/^__.*__$/;class Qw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new nd(e,this.data,this.fieldMask,n,this.fieldTransforms):new td(e,this.data,n,this.fieldTransforms)}}function ad(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class El{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.C=s,this.ignoreUndefinedProperties=r,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(e){return new El(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.rt({path:s,it:!1});return r.ot(e),r}ut(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.rt({path:s,it:!1});return r.et(),r}ct(e){return this.rt({path:void 0,it:!0})}at(e){return bi(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.at("Document fields must not be empty");if(ad(this.nt)&&Jw.test(e))throw this.at('Document fields cannot begin and end with "__"')}}class Zw{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=s||wl(e)}ft(e,n,s,r=!1){return new El({nt:e,methodName:n,lt:s,path:it.emptyPath(),it:!1,ht:r},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function ld(t){const e=t._freezeSettings(),n=wl(t._databaseId);return new Zw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eb(t,e,n,s,r,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,r);hd("Data must be an object, but it was:",o,s);const a=cd(s,o);let l,c;if(i.merge)l=new hr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=nb(e,f,n);if(!o.contains(p))throw new U(z,`Field '${p}' is specified in your field mask but missing from your input data.`);rb(u,p)||u.push(p)}l=new hr(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Qw(new Nt(a),l,c)}function tb(t,e,n,s=!1){return Tl(n,t.ft(s?4:3,e))}function Tl(t,e){if(ud(t=et(t)))return hd("Unsupported field value:",e,t),cd(t,e);if(t instanceof od)return function(n,s){if(!ad(s.nt))throw s.at(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.at(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.nt!==4)throw e.at("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Tl(o,s.ct(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Tw(s.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=dt.fromDate(n);return{timestampValue:Aa(s.C,r)}}if(n instanceof dt){const r=new dt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Aa(s.C,r)}}if(n instanceof Il)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ms)return{bytesValue:Mw(s.C,n._byteString)};if(n instanceof pt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:_l(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.at(`Unsupported field value: ${Qi(n)}`)}(t,e)}function cd(t,e){const n={};return function(s){for(const r in s)if(Object.prototype.hasOwnProperty.call(s,r))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,(s,r)=>{const i=Tl(r,e.st(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ud(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof Il||t instanceof ms||t instanceof pt||t instanceof od)}function hd(t,e,n){if(!ud(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qi(n);throw s==="an object"?e.at(t+" a custom object"):e.at(t+" "+s)}}function nb(t,e,n){if((e=et(e))instanceof bl)return e._internalPath;if(typeof e=="string")return fd(t,e);throw bi("Field path arguments must be of type string or ",t,!1,void 0,n)}const sb=new RegExp("[~\\*/\\[\\]]");function fd(t,e,n){if(e.search(sb)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new U(z,a+t+l)}function rb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ib{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dd extends ib{data(){return super.data()}}class ob{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function pd(t,e){return typeof e=="string"?fd(t,e):e instanceof bl?e._internalPath:e._delegate._internalPath}/**
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
 */class xl{}class ab extends xl{}function Vo(t,e,...n){let s=[];e instanceof xl&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Al).length,o=r.filter(a=>a instanceof so).length;if(i>1||i>0&&o>0)throw new U(z,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class so extends ab{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new so(e,n,s)}_apply(e){const n=this._parse(e);return gd(e._query,n),new As(e.firestore,e.converter,xa(e._query,n))}_parse(e){const n=ld(e.firestore);return function(r,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(z,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Tu(u,c);const p=[];for(const g of u)p.push(Eu(a,r,g));f={arrayValue:{values:p}}}else f=Eu(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Tu(u,c),f=tb(o,i,u,c==="in"||c==="not-in");return kt.create(l,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function lb(t,e,n){const s=e,r=pd("where",t);return so._create(r,s,n)}class Al extends xl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Al(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:xr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)gd(i,a),i=xa(i,a)}(e._query,n),new As(e.firestore,e.converter,xa(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Eu(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new U(z,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iw(e)&&n.indexOf("/")!==-1)throw new U(z,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Se.fromString(n));if(!Me.isDocumentKey(s))throw new U(z,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return fu(t,new Me(s))}if(n instanceof pt)return fu(t,n._key);throw new U(z,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qi(n)}.`)}function Tu(t,e){if(!Array.isArray(t)||t.length===0)throw new U(z,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(z,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function gd(t,e){if(e.isInequality()){const s=vl(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new U(z,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=ed(t);i!==null&&cb(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(z,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(z,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cb(t,e,n){if(!n.isEqual(e))throw new U(z,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function ub(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class hb extends class{convertValue(e,n="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){const s={};return Zi(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Il(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(cr(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);Yt(rd(s));const r=new gi(s.get(1),s.get(3)),i=new Me(s.popFirst(5));return r.isEqual(n)||gl(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function xu(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new U(qf,"limitToLast() queries require specifying at least one orderBy() clause")})((t=yl(t,As))._query);const e=id(t.firestore),n=new hb(t.firestore);return Ww(e,t._query).then(s=>{const r=s.map(i=>new dd(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&r.reverse(),new ob(t,r)})}function fb(t,e){const n=Yw(t=yl(t,Gt)),s=ub(t.converter,e),r=eb(ld(t.firestore),"addDoc",n._key,s,n.converter!==null,{});return Kw(id(t.firestore),[r.toMutation(n._key,Vs.exists(!1))]).then(()=>n)}(function(t){xs=t})(`${Ts}_lite`),At(new mt("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),r=new no(new tw(t.getProvider("auth-internal")),new iw(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(z,'"projectId" not provided in firebase.initializeApp.');return new gi(i.options.projectId,o)}(s,e),s);return n&&r._setSettings(n),r},"PUBLIC").setMultipleInstances(!0)),Ze("firestore-lite","3.8.0",""),Ze("firestore-lite","3.8.0","esm2017");var db=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let md;const ro=t=>md=t,yd=Symbol();function ka(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function pb(){const t=Mh(!0),e=t.run(()=>Je({}));let n=[],s=[];const r=hs({install(i){ro(r),r._a=i,i.provide(yd,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!db?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const vd=()=>{};function Au(t,e,n,s=vd){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Xg()&&Yg(r),r}function Jn(t,...e){t.slice().forEach(n=>{n(...e)})}function Ca(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];ka(r)&&ka(s)&&t.hasOwnProperty(n)&&!ye(s)&&!yn(s)?t[n]=Ca(r,s):t[n]=s}return t}const gb=Symbol();function mb(t){return!ka(t)||!t.hasOwnProperty(gb)}const{assign:ln}=Object;function yb(t){return!!(ye(t)&&t.effect)}function vb(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Am(n.state.value[t]);return ln(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=hs(Qe(()=>{ro(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return l=_d(t,c,e,n,s,!0),l.$reset=function(){const f=r?r():{};this.$patch(p=>{ln(p,f)})},l}function _d(t,e,n={},s,r,i){let o;const a=ln({actions:{}},n),l={deep:!0};let c,u,f=hs([]),p=hs([]),g;const w=s.state.value[t];!i&&!w&&(s.state.value[t]={}),Je({});let x;function $(G){let O;c=u=!1,typeof G=="function"?(G(s.state.value[t]),O={type:Hs.patchFunction,storeId:t,events:g}):(Ca(s.state.value[t],G),O={type:Hs.patchObject,payload:G,storeId:t,events:g});const Q=x=Symbol();ol().then(()=>{x===Q&&(c=!0)}),u=!0,Jn(f,O,s.state.value[t])}const R=vd;function j(){o.stop(),f=[],p=[],s._s.delete(t)}function P(G,O){return function(){ro(s);const Q=Array.from(arguments),te=[],ve=[];function Ce(Re){te.push(Re)}function tt(Re){ve.push(Re)}Jn(p,{args:Q,name:G,store:X,after:Ce,onError:tt});let qe;try{qe=O.apply(this&&this.$id===t?this:X,Q)}catch(Re){throw Jn(ve,Re),Re}return qe instanceof Promise?qe.then(Re=>(Jn(te,Re),Re)).catch(Re=>(Jn(ve,Re),Promise.reject(Re))):(Jn(te,qe),qe)}}const W={_p:s,$id:t,$onAction:Au.bind(null,p),$patch:$,$reset:R,$subscribe(G,O={}){const Q=Au(f,G,O.detached,()=>te()),te=o.run(()=>Ls(()=>s.state.value[t],ve=>{(O.flush==="sync"?u:c)&&G({storeId:t,type:Hs.direct,events:g},ve)},ln({},l,O)));return Q},$dispose:j},X=Es(W);s._s.set(t,X);const ue=s._e.run(()=>(o=Mh(),o.run(()=>e())));for(const G in ue){const O=ue[G];if(ye(O)&&!yb(O)||yn(O))i||(w&&mb(O)&&(ye(O)?O.value=w[G]:Ca(O,w[G])),s.state.value[t][G]=O);else if(typeof O=="function"){const Q=P(G,O);ue[G]=Q,a.actions[G]=O}}return ln(X,ue),ln(re(X),ue),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:G=>{$(O=>{ln(O,G)})}}),s._p.forEach(G=>{ln(X,o.run(()=>G({store:X,app:s._a,pinia:s,options:a})))}),w&&i&&n.hydrate&&n.hydrate(X.$state,w),c=!0,u=!0,X}function _b(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=xf();return a=a||c&&Lt(yd,null),a&&ro(a),a=md,a._s.has(s)||(i?_d(s,e,r,a):vb(s,r,a)),a._s.get(s)}return o.$id=s,o}var wb="firebase",bb="9.15.0";/**
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
 */Ze(wb,bb,"app");const wd="@firebase/installations",Sl="0.6.0";/**
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
 */const bd=1e4,Id=`w:${Sl}`,Ed="FIS_v2",Ib="https://firebaseinstallations.googleapis.com/v1",Eb=60*60*1e3,Tb="installations",xb="Installations";/**
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
 */const Ab={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},qn=new Wn(Tb,xb,Ab);function Td(t){return t instanceof vt&&t.code.includes("request-failed")}/**
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
 */function xd({projectId:t}){return`${Ib}/projects/${t}/installations`}function Ad(t){return{token:t.token,requestStatus:2,expiresIn:kb(t.expiresIn),creationTime:Date.now()}}async function Sd(t,e){const s=(await e.json()).error;return qn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function kd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Sb(t,{refreshToken:e}){const n=kd(t);return n.append("Authorization",Cb(e)),n}async function Cd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function kb(t){return Number(t.replace("s","000"))}function Cb(t){return`${Ed} ${t}`}/**
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
 */async function Rb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=xd(t),r=kd(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:Ed,appId:t.appId,sdkVersion:Id},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Cd(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Ad(c.authToken)}}else throw await Sd("Create Installation",l)}/**
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
 */function Rd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ob(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Pb=/^[cdef][\w-]{21}$/,Ra="";function Db(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Nb(t);return Pb.test(n)?n:Ra}catch{return Ra}}function Nb(t){return Ob(t).substr(0,22)}/**
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
 */function io(t){return`${t.appName}!${t.appId}`}/**
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
 */const Od=new Map;function Pd(t,e){const n=io(t);Dd(n,e),Mb(n,e)}function Dd(t,e){const n=Od.get(t);if(n)for(const s of n)s(e)}function Mb(t,e){const n=Lb();n&&n.postMessage({key:t,fid:e}),Fb()}let Nn=null;function Lb(){return!Nn&&"BroadcastChannel"in self&&(Nn=new BroadcastChannel("[Firebase] FID Change"),Nn.onmessage=t=>{Dd(t.data.key,t.data.fid)}),Nn}function Fb(){Od.size===0&&Nn&&(Nn.close(),Nn=null)}/**
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
 */const $b="firebase-installations-database",Ub=1,zn="firebase-installations-store";let Bo=null;function kl(){return Bo||(Bo=Uf($b,Ub,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zn)}}})),Bo}async function Ii(t,e){const n=io(t),r=(await kl()).transaction(zn,"readwrite"),i=r.objectStore(zn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Pd(t,e.fid),e}async function Nd(t){const e=io(t),s=(await kl()).transaction(zn,"readwrite");await s.objectStore(zn).delete(e),await s.done}async function oo(t,e){const n=io(t),r=(await kl()).transaction(zn,"readwrite"),i=r.objectStore(zn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Pd(t,a.fid),a}/**
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
 */async function Cl(t){let e;const n=await oo(t.appConfig,s=>{const r=jb(s),i=Vb(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ra?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jb(t){const e=t||{fid:Db(),registrationStatus:0};return Md(e)}function Vb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(qn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Bb(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Hb(t)}:{installationEntry:e}}async function Bb(t,e){try{const n=await Rb(t,e);return Ii(t.appConfig,n)}catch(n){throw Td(n)&&n.customData.serverCode===409?await Nd(t.appConfig):await Ii(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Hb(t){let e=await Su(t.appConfig);for(;e.registrationStatus===1;)await Rd(100),e=await Su(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Cl(t);return s||n}return e}function Su(t){return oo(t,e=>{if(!e)throw qn.create("installation-not-found");return Md(e)})}function Md(t){return qb(t)?{fid:t.fid,registrationStatus:0}:t}function qb(t){return t.registrationStatus===1&&t.registrationTime+bd<Date.now()}/**
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
 */async function zb({appConfig:t,heartbeatServiceProvider:e},n){const s=Kb(t,n),r=Sb(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:Id,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Cd(()=>fetch(s,a));if(l.ok){const c=await l.json();return Ad(c)}else throw await Sd("Generate Auth Token",l)}function Kb(t,{fid:e}){return`${xd(t)}/${e}/authTokens:generate`}/**
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
 */async function Rl(t,e=!1){let n;const s=await oo(t.appConfig,i=>{if(!Ld(i))throw qn.create("not-registered");const o=i.authToken;if(!e&&Xb(o))return i;if(o.requestStatus===1)return n=Wb(t,e),i;{if(!navigator.onLine)throw qn.create("app-offline");const a=Jb(i);return n=Gb(t,a),a}});return n?await n:s.authToken}async function Wb(t,e){let n=await ku(t.appConfig);for(;n.authToken.requestStatus===1;)await Rd(100),n=await ku(t.appConfig);const s=n.authToken;return s.requestStatus===0?Rl(t,e):s}function ku(t){return oo(t,e=>{if(!Ld(e))throw qn.create("not-registered");const n=e.authToken;return Qb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Gb(t,e){try{const n=await zb(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ii(t.appConfig,s),n}catch(n){if(Td(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nd(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ii(t.appConfig,s)}throw n}}function Ld(t){return t!==void 0&&t.registrationStatus===2}function Xb(t){return t.requestStatus===2&&!Yb(t)}function Yb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Eb}function Jb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Qb(t){return t.requestStatus===1&&t.requestTime+bd<Date.now()}/**
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
 */async function Zb(t){const e=t,{installationEntry:n,registrationPromise:s}=await Cl(e);return s?s.catch(console.error):Rl(e).catch(console.error),n.fid}/**
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
 */async function e1(t,e=!1){const n=t;return await t1(n),(await Rl(n,e)).token}async function t1(t){const{registrationPromise:e}=await Cl(t);e&&await e}/**
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
 */function n1(t){if(!t||!t.options)throw Ho("App Configuration");if(!t.name)throw Ho("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ho(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ho(t){return qn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Fd="installations",s1="installations-internal",r1=t=>{const e=t.getProvider("app").getImmediate(),n=n1(e),s=Gn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},i1=t=>{const e=t.getProvider("app").getImmediate(),n=Gn(e,Fd).getImmediate();return{getId:()=>Zb(n),getToken:r=>e1(n,r)}};function o1(){At(new mt(Fd,r1,"PUBLIC")),At(new mt(s1,i1,"PRIVATE"))}o1();Ze(wd,Sl);Ze(wd,Sl,"esm2017");/**
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
 */const Ei="analytics",a1="firebase_id",l1="origin",c1=60*1e3,u1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$d="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new Tr("@firebase/analytics");/**
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
 */function Ud(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function h1(t,e){const n=document.createElement("script");n.src=`${$d}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function f1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function d1(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const l=(await Ud(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){lt.error(a)}t("config",r,i)}async function p1(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Ud(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){lt.error(i)}}function g1(t,e,n,s){async function r(i,o,a){try{i==="event"?await p1(t,e,n,o,a):i==="config"?await d1(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(l){lt.error(l)}}return r}function m1(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=g1(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function y1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($d)&&n.src.includes(t))return n;return null}/**
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
 */const v1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},gt=new Wn("analytics","Analytics",v1);/**
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
 */const _1=30,w1=1e3;class b1{constructor(e={},n=w1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jd=new b1;function I1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function E1(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:I1(s)},i=u1.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function T1(t,e=jd,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw gt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new S1;return setTimeout(async()=>{a.abort()},n!==void 0?n:c1),Vd({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Vd(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=jd){var i;const{appId:o,measurementId:a}=t;try{await x1(s,e)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await E1(t);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!A1(c)){if(r.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?Jc(n,r.intervalMillis,_1):Jc(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,f),lt.debug(`Calling attemptFetch again in ${u} millis`),Vd(t,f,s,r)}}function x1(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function A1(t){if(!(t instanceof vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class S1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function k1(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function C1(){if(Df())try{await Nf()}catch(t){return lt.warn(gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function R1(t,e,n,s,r,i,o){var a;const l=T1(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>lt.error(g)),e.push(l);const c=C1().then(g=>{if(g)return s.getId()}),[u,f]=await Promise.all([l,c]);y1(i)||h1(i,u.measurementId),r("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[l1]="firebase",p.update=!0,f!=null&&(p[a1]=f),r("config",u.measurementId,p),u.measurementId}/**
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
 */class O1{constructor(e){this.app=e}_delete(){return delete qs[this.app.options.appId],Promise.resolve()}}let qs={},Cu=[];const Ru={};let qo="dataLayer",P1="gtag",Ou,Bd,Pu=!1;function D1(){const t=[];if(Pf()&&t.push("This is a browser extension environment."),wv()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function N1(t,e,n){D1();const s=t.options.appId;if(!s)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(qs[s]!=null)throw gt.create("already-exists",{id:s});if(!Pu){f1(qo);const{wrappedGtag:i,gtagCore:o}=m1(qs,Cu,Ru,qo,P1);Bd=i,Ou=o,Pu=!0}return qs[s]=R1(t,Cu,Ru,e,Ou,qo,n),new O1(t)}function M1(t=pl()){t=et(t);const e=Gn(t,Ei);return e.isInitialized()?e.getImmediate():L1(t)}function L1(t,e={}){const n=Gn(t,Ei);if(n.isInitialized()){const r=n.getImmediate();if(ir(e,n.getOptions()))return r;throw gt.create("already-initialized")}return n.initialize({options:e})}function F1(t,e,n,s){t=et(t),k1(Bd,qs[t.app.options.appId],e,n,s).catch(r=>lt.error(r))}const Du="@firebase/analytics",Nu="0.9.0";function $1(){At(new mt(Ei,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return N1(s,r,n)},"PUBLIC")),At(new mt("analytics-internal",t,"PRIVATE")),Ze(Du,Nu),Ze(Du,Nu,"esm2017");function t(e){try{const n=e.getProvider(Ei).getImmediate();return{logEvent:(s,r,i)=>F1(n,s,r,i)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}$1();function Ol(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Hd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U1=Hd,qd=new Wn("auth","Firebase",Hd());/**
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
 */const Mu=new Tr("@firebase/auth");function si(t,...e){Mu.logLevel<=ie.ERROR&&Mu.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw Pl(t,...e)}function Ft(t,...e){return Pl(t,...e)}function j1(t,e,n){const s=Object.assign(Object.assign({},U1()),{[e]:n});return new Wn("auth","Firebase",s).create(e,{appName:t.name})}function Pl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return qd.create(t,...e)}function B(t,e,...n){if(!t)throw Pl(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw si(e),new Error(e)}function Zt(t,e){t||zt(e)}/**
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
 */const Lu=new Map;function Kt(t){Zt(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
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
 */function V1(t,e){const n=Gn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ir(i,e??{}))return r;Qt(r,"already-initialized")}return n.initialize({options:e})}function B1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Oa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H1(){return Fu()==="http:"||Fu()==="https:"}function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function q1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H1()||Pf()||"connection"in navigator)?navigator.onLine:!0}function z1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ar{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=yv()||vv()}get(){return q1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dl(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const K1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const W1=new Ar(3e4,6e4);function G1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ao(t,e,n,s,r={}){return Kd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Er(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zd.fetch()(Wd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Kd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},K1),e);try{const r=new Y1(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Kr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw j1(t,u,c);Qt(t,u)}}catch(r){if(r instanceof vt)throw r;Qt(t,"network-request-failed")}}async function X1(t,e,n,s,r={}){const i=await ao(t,e,n,s,r);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Dl(t.config,r):`${t.config.apiScheme}://${r}`}class Y1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ft(this.auth,"network-request-failed")),W1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ft(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function J1(t,e){return ao(t,"POST","/v1/accounts:delete",e)}async function Q1(t,e){return ao(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z1(t,e=!1){const n=et(t),s=await n.getIdToken(e),r=Nl(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:zs(zo(r.auth_time)),issuedAtTime:zs(zo(r.iat)),expirationTime:zs(zo(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zo(t){return Number(t)*1e3}function Nl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const r=Of(n);return r?JSON.parse(r):(si("Failed to decode base64 JWT payload"),null)}catch(r){return si("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function eI(t){const e=Nl(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vt&&tI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function tI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ti(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fr(t,Q1(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?iI(i.providerUserInfo):[],a=rI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Gd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function sI(t){const e=et(t);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function iI(t){return t.map(e=>{var{providerId:n}=e,s=Ol(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function oI(t,e){const n=await Kd(t,{},async()=>{const s=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Wd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await oI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new dr;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function sn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Z1(this,e)}reload(){return sI(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ti(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,J1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,$=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,j=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:W,isAnonymous:X,providerData:ue,stsTokenManager:G}=n;B(P&&G,e,"internal-error");const O=dr.fromJSON(this.name,G);B(typeof P=="string",e,"internal-error"),sn(f,e.name),sn(p,e.name),B(typeof W=="boolean",e,"internal-error"),B(typeof X=="boolean",e,"internal-error"),sn(g,e.name),sn(w,e.name),sn(x,e.name),sn($,e.name),sn(R,e.name),sn(j,e.name);const Q=new Un({uid:P,auth:e,email:p,emailVerified:W,displayName:f,isAnonymous:X,photoURL:w,phoneNumber:g,tenantId:x,stsTokenManager:O,createdAt:R,lastLoginAt:j});return ue&&Array.isArray(ue)&&(Q.providerData=ue.map(te=>Object.assign({},te))),$&&(Q._redirectEventId=$),Q}static async _fromIdTokenResponse(e,n,s=!1){const r=new dr;r.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ti(i),i}}/**
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
 */class Xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xd.type="NONE";const $u=Xd;/**
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
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ri(this.userKey,r.apiKey,i),this.fullPersistenceKey=ri("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new os(Kt($u),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Kt($u);const o=ri(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Un._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new os(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new os(i,e,s))}}/**
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
 */function Uu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ep(e))return"Blackberry";if(tp(e))return"Webos";if(Ml(e))return"Safari";if((e.includes("chrome/")||Jd(e))&&!e.includes("edge/"))return"Chrome";if(Zd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yd(t=He()){return/firefox\//i.test(t)}function Ml(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jd(t=He()){return/crios\//i.test(t)}function Qd(t=He()){return/iemobile/i.test(t)}function Zd(t=He()){return/android/i.test(t)}function ep(t=He()){return/blackberry/i.test(t)}function tp(t=He()){return/webos/i.test(t)}function lo(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aI(t=He()){var e;return lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lI(){return _v()&&document.documentMode===10}function np(t=He()){return lo(t)||Zd(t)||tp(t)||ep(t)||/windows phone/i.test(t)||Qd(t)}function cI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sp(t,e=[]){let n;switch(t){case"Browser":n=Uu(He());break;case"Worker":n=`${Uu(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${s}`}/**
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
 */class uI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class hI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ju(this),this.idTokenSubscription=new ju(this),this.beforeStateQueue=new uI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=z1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ll(t){return et(t)}class ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dv(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function fI(t,e,n){const s=Ll(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=rp(e),{host:o,port:a}=dI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||pI()}function rp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dI(t){const e=rp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Vu(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Vu(o)}}}function Vu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function as(t,e){return X1(t,"POST","/v1/accounts:signInWithIdp",G1(t,e))}/**
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
 */const gI="http://localhost";class Kn extends ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ol(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Kn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,as(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
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
 */class op{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sr extends op{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends Sr{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class pn extends Sr{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class gn extends Sr{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Un._fromIdTokenResponse(e,s,r),o=Bu(s);return new ys({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Bu(s);return new ys({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Bu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xi extends vt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,xi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new xi(e,n,s,r)}}function ap(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xi._fromErrorAndOperation(t,i,e,s):i})}async function mI(t,e,n=!1){const s=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",s)}/**
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
 */async function yI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await fr(t,ap(s,r,e,t),n);B(i.idToken,s,"internal-error");const o=Nl(i.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),ys._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(s,"user-mismatch"),i}}/**
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
 */async function vI(t,e,n=!1){const s="signIn",r=await ap(t,s,e),i=await ys._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function _I(t,e,n,s){return et(t).onIdTokenChanged(e,n,s)}function wI(t,e,n){return et(t).beforeAuthStateChanged(e,n)}const Ai="__sak";/**
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
 */class lp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bI(){const t=He();return Ml(t)||lo(t)}const II=1e3,EI=10;class cp extends lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bI()&&cI(),this.fallbackToPolling=np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);lI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,EI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cp.type="LOCAL";const TI=cp;/**
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
 */class up extends lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}up.type="SESSION";const hp=up;/**
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
 */function xI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new co(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await xI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
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
 */function Fl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Fl("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function SI(t){$t().location.href=t}/**
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
 */function fp(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function kI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RI(){return fp()?self:null}/**
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
 */const dp="firebaseLocalStorageDb",OI=1,Si="firebaseLocalStorage",pp="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uo(t,e){return t.transaction([Si],e?"readwrite":"readonly").objectStore(Si)}function PI(){const t=indexedDB.deleteDatabase(dp);return new kr(t).toPromise()}function Pa(){const t=indexedDB.open(dp,OI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Si,{keyPath:pp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Si)?e(s):(s.close(),await PI(),e(await Pa()))})})}async function Hu(t,e,n){const s=uo(t,!0).put({[pp]:e,value:n});return new kr(s).toPromise()}async function DI(t,e){const n=uo(t,!1).get(e),s=await new kr(n).toPromise();return s===void 0?null:s.value}function qu(t,e){const n=uo(t,!0).delete(e);return new kr(n).toPromise()}const NI=800,MI=3;class gp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>MI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(RI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kI(),!this.activeServiceWorker)return;this.sender=new AI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pa();return await Hu(e,Ai,"1"),await qu(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>DI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=uo(r,!1).getAll();return new kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gp.type="LOCAL";const LI=gp;/**
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
 */function FI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $I(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ft("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",FI().appendChild(s)})}function UI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ar(3e4,6e4);/**
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
 */function jI(t,e){return e?Kt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $l extends ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VI(t){return vI(t.auth,new $l(t),t.bypassAuthState)}function BI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),yI(n,new $l(t),t.bypassAuthState)}async function HI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),mI(n,new $l(t),t.bypassAuthState)}/**
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
 */class mp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VI;case"linkViaPopup":case"linkViaRedirect":return HI;case"reauthViaPopup":case"reauthViaRedirect":return BI;default:Qt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qI=new Ar(2e3,1e4);class ts extends mp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qI.get())};e()}}ts.currentPopupAction=null;/**
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
 */const zI="pendingRedirect",ii=new Map;class KI extends mp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const s=await WI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WI(t,e){const n=YI(e),s=XI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function GI(t,e){ii.set(t._key(),e)}function XI(t){return Kt(t._redirectPersistence)}function YI(t){return ri(zI,t.config.apiKey,t.name)}async function JI(t,e,n=!1){const s=Ll(t),r=jI(s,e),o=await new KI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const QI=10*60*1e3;class ZI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!yp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zu(e))}saveEventToCache(e){this.cachedEventUids.add(zu(e)),this.lastProcessedEventTime=Date.now()}}function zu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yp(t);default:return!1}}/**
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
 */async function tE(t,e={}){return ao(t,"GET","/v1/projects",e)}/**
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
 */const nE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sE=/^https?/;async function rE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tE(t);for(const n of e)try{if(iE(n))return}catch{}Qt(t,"unauthorized-domain")}function iE(t){const e=Oa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sE.test(n))return!1;if(nE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const oE=new Ar(3e4,6e4);function Ku(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aE(t){return new Promise((e,n)=>{var s,r,i;function o(){Ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ku(),n(Ft(t,"network-request-failed"))},timeout:oE.get()})}if(!((r=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=UI("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},$I(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oi=null,e})}let oi=null;function lE(t){return oi=oi||aE(t),oi}/**
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
 */const cE=new Ar(5e3,15e3),uE="__/auth/iframe",hE="emulator/auth/iframe",fE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pE(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dl(e,hE):`https://${t.config.authDomain}/${uE}`,s={apiKey:e.apiKey,appName:t.name,v:Ts},r=dE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Er(s).slice(1)}`}async function gE(t){const e=await lE(t),n=$t().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:pE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},cE.get());function l(){$t().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const mE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yE=500,vE=600,_E="_blank",wE="http://localhost";class Wu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bE(t,e,n,s=yE,r=vE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mE),{width:s.toString(),height:r.toString(),top:i,left:o}),c=He().toLowerCase();n&&(a=Jd(c)?_E:n),Yd(c)&&(e=e||wE,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(aI(c)&&a!=="_self")return IE(e||"",a),new Wu(null);const f=window.open(e||"",a,u);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Wu(f)}function IE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const EE="__/auth/handler",TE="emulator/auth/handler";function Gu(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ts,eventId:r};if(e instanceof op){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Sr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${xE(t)}?${Er(a).slice(1)}`}function xE({config:t}){return t.emulator?Dl(t,TE):`https://${t.authDomain}/${EE}`}/**
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
 */const Ko="webStorageSupport";class AE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hp,this._completeRedirectFn=JI,this._overrideRedirectResult=GI}async _openPopup(e,n,s,r){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Gu(e,n,s,Oa(),r);return bE(e,o,Fl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),SI(Gu(e,n,s,Oa(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Zt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gE(e),s=new ZI(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ko,{type:Ko},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ko];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return np()||Ml()||lo()}}const SE=AE;var Xu="@firebase/auth",Yu="0.21.0";/**
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
 */class kE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RE(t){At(new mt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sp(t)},u=new hI(a,l,c);return B1(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),At(new mt("auth-internal",e=>{const n=Ll(e.getProvider("auth").getImmediate());return(s=>new kE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Xu,Yu,CE(t)),Ze(Xu,Yu,"esm2017")}/**
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
 */const OE=5*60,PE=Lf("authIdTokenMaxAge")||OE;let Ju=null;const DE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>PE)return;const r=n==null?void 0:n.token;Ju!==r&&(Ju=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function NE(t=pl()){const e=Gn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=V1(t,{popupRedirectResolver:SE,persistence:[LI,TI,hp]}),s=Lf("authTokenSyncURL");if(s){const i=DE(s);wI(n,i,()=>i(n.currentUser)),_I(n,o=>i(o))}const r=Mf("auth");return r&&fI(n,`http://${r}`),n}RE("Browser");const ME={apiKey:"AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",authDomain:"precios-envios-odm.firebaseapp.com",databaseURL:"https://precios-envios-odm-default-rtdb.firebaseio.com",projectId:"precios-envios-odm",storageBucket:"precios-envios-odm.appspot.com",messagingSenderId:"802208494147",appId:"1:802208494147:web:fee055c13df4aef4045af6",measurementId:"G-LTMJMJLXRQ"},LE=jf(ME);NE();const Wo=Gw();M1(LE);const vp=_b("database",{state:()=>({documents:[],destinos:[]}),actions:{async getDocuments(t){this.documents=[];const e=Vo(jo(Wo,t));(await xu(e)).forEach(s=>{this.documents.push(s.data())})},async getDocumentByKey(t,e,n){const s=Vo(jo(Wo,t),lb(e,"==",n)),r=await xu(s);console.log(r),r.forEach(i=>{this.destinos=i.data().destinos})},async addUrl(t,e,n,s,r,i){this.loadingDoc=!0;try{const o={nombre:t,telefono:e,empresa:n,ciudad:s,email:r,selectedOption:i},a=Vo(jo(Wo,"contacts")),l=await fb(a,o);this.documents.push({id:l.id,...o})}catch(o){console.log(o)}finally{this.loadingDoc=!1}}}}),FE="/assets/Persona-91599647.png";var $E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Ul=Ul||{},H=$E||self;function ki(){}function ho(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Cr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UE(t){return Object.prototype.hasOwnProperty.call(t,Go)&&t[Go]||(t[Go]=++jE)}var Go="closure_uid_"+(1e9*Math.random()>>>0),jE=0;function VE(t,e,n){return t.call.apply(t.bind,arguments)}function BE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=VE:je=BE,je.apply(null,arguments)}function Wr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function En(){this.s=this.s,this.o=this.o}var HE=0;En.prototype.s=!1;En.prototype.na=function(){!this.s&&(this.s=!0,this.M(),HE!=0)&&UE(this)};En.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _p=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Qu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ho(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var qE=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",ki,e),H.removeEventListener("test",ki,e)}catch{}return t}();function Ci(t){return/^[\s\xa0]*$/.test(t)}var Zu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xo(t,e){return t<e?-1:t>e?1:0}function fo(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function Mt(t){return fo().indexOf(t)!=-1}function Vl(t){return Vl[" "](t),t}Vl[" "]=ki;function zE(t){var e=GE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var KE=Mt("Opera"),pr=Mt("Trident")||Mt("MSIE"),wp=Mt("Edge"),Da=wp||pr,bp=Mt("Gecko")&&!(fo().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge"))&&!(Mt("Trident")||Mt("MSIE"))&&!Mt("Edge"),WE=fo().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge");function Ip(){var t=H.document;return t?t.documentMode:void 0}var Na;e:{var Yo="",Jo=function(){var t=fo();if(bp)return/rv:([^\);]+)(\)|;)/.exec(t);if(wp)return/Edge\/([\d\.]+)/.exec(t);if(pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WE)return/WebKit\/(\S+)/.exec(t);if(KE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jo&&(Yo=Jo?Jo[1]:""),pr){var Qo=Ip();if(Qo!=null&&Qo>parseFloat(Yo)){Na=String(Qo);break e}}Na=Yo}var GE={};function XE(){return zE(function(){let t=0;const e=Zu(String(Na)).split("."),n=Zu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Xo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Xo(r[2].length==0,i[2].length==0)||Xo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}H.document&&pr&&Ip();function gr(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bp){e:{try{Vl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gr.X.h.call(this)}}Fe(gr,Ve);var YE={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rr="closure_listenable_"+(1e6*Math.random()|0),JE=0;function QE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++JE,this.ba=this.ea=!1}function po(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ep(t){const e={};for(const n in t)e[n]=t[n];return e}const eh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<eh.length;i++)n=eh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function go(t){this.src=t,this.g={},this.h=0}go.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=La(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new QE(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ma(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=_p(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(po(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function La(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Hl="closure_lm_"+(1e6*Math.random()|0),Zo={};function xp(t,e,n,s,r){if(s&&s.once)return Sp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)xp(t,e[i],n,s,r);return null}return n=Kl(n),t&&t[Rr]?t.N(e,n,Cr(s)?!!s.capture:!!s,r):Ap(t,e,n,!1,s,r)}function Ap(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Cr(r)?!!r.capture:!!r,a=zl(t);if(a||(t[Hl]=a=new go(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ZE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)qE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Cp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZE(){function t(n){return e.call(t.src,t.listener,n)}const e=eT;return t}function Sp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sp(t,e[i],n,s,r);return null}return n=Kl(n),t&&t[Rr]?t.O(e,n,Cr(s)?!!s.capture:!!s,r):Ap(t,e,n,!0,s,r)}function kp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)kp(t,e[i],n,s,r);else s=Cr(s)?!!s.capture:!!s,n=Kl(n),t&&t[Rr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=La(i,n,s,r),-1<n&&(po(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=La(e,n,s,r)),(n=-1<t?e[t]:null)&&ql(n))}function ql(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Rr])Ma(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Cp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zl(e))?(Ma(n,t),n.h==0&&(n.src=null,e[Hl]=null)):po(t)}}}function Cp(t){return t in Zo?Zo[t]:Zo[t]="on"+t}function eT(t,e){if(t.ba)t=!0;else{e=new gr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ql(t),t=n.call(s,e)}return t}function zl(t){return t=t[Hl],t instanceof go?t:null}var ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kl(t){return typeof t=="function"?t:(t[ea]||(t[ea]=function(e){return t.handleEvent(e)}),t[ea])}function De(){En.call(this),this.i=new go(this),this.P=this,this.I=null}Fe(De,En);De.prototype[Rr]=!0;De.prototype.removeEventListener=function(t,e,n,s){kp(this,t,e,n,s)};function Le(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var r=e;e=new Ve(s,t),Tp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Gr(o,s,!0,e)&&r}if(o=e.g=t,r=Gr(o,s,!0,e)&&r,r=Gr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Gr(o,s,!1,e)&&r}De.prototype.M=function(){if(De.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)po(n[s]);delete t.g[e],t.h--}}this.I=null};De.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};De.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ma(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Wl=H.JSON.stringify;function tT(){var t=Pp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nT{constructor(){this.h=this.g=null}add(e,n){const s=Rp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Rp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new sT,t=>t.reset());class sT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rT(t){H.setTimeout(()=>{throw t},0)}function Op(t,e){Fa||iT(),$a||(Fa(),$a=!0),Pp.add(t,e)}var Fa;function iT(){var t=H.Promise.resolve(void 0);Fa=function(){t.then(oT)}}var $a=!1,Pp=new nT;function oT(){for(var t;t=tT();){try{t.h.call(t.g)}catch(n){rT(n)}var e=Rp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$a=!1}function mo(t,e){De.call(this),this.h=t||1,this.g=e||H,this.j=je(this.lb,this),this.l=Date.now()}Fe(mo,De);N=mo.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Le(this,"tick"),this.ca&&(Gl(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){mo.X.M.call(this),Gl(this),delete this.g};function Xl(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Dp(t){t.g=Xl(()=>{t.g=null,t.i&&(t.i=!1,Dp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aT extends En{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dp(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(t){En.call(this),this.h=t,this.g={}}Fe(mr,En);var th=[];function Np(t,e,n,s){Array.isArray(n)||(n&&(th[0]=n.toString()),n=th);for(var r=0;r<n.length;r++){var i=xp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Mp(t){Bl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ql(e)},t),t.g={}}mr.prototype.M=function(){mr.X.M.call(this),Mp(this)};mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yo(){this.g=!0}yo.prototype.Aa=function(){this.g=!1};function lT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function cT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ns(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hT(t,n)+(s?" "+s:"")})}function uT(t,e){t.info(function(){return"TIMEOUT: "+e})}yo.prototype.info=function(){};function hT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Wl(n)}catch{return e}}var Ss={},nh=null;function Yl(){return nh=nh||new De}Ss.Pa="serverreachability";function Lp(t){Ve.call(this,Ss.Pa,t)}Fe(Lp,Ve);function yr(t){const e=Yl();Le(e,new Lp(e))}Ss.STAT_EVENT="statevent";function Fp(t,e){Ve.call(this,Ss.STAT_EVENT,t),this.stat=e}Fe(Fp,Ve);function Ke(t){const e=Yl();Le(e,new Fp(e,t))}Ss.Qa="timingevent";function $p(t,e){Ve.call(this,Ss.Qa,t),this.size=e}Fe($p,Ve);function Or(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Jl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ql(){}Ql.prototype.h=null;function sh(t){return t.h||(t.h=t.i())}function dT(){}var Pr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zl(){Ve.call(this,"d")}Fe(Zl,Ve);function ec(){Ve.call(this,"c")}Fe(ec,Ve);var Ua;function vo(){}Fe(vo,Ql);vo.prototype.g=function(){return new XMLHttpRequest};vo.prototype.i=function(){return{}};Ua=new vo;function Dr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new mr(this),this.O=pT,t=Da?125:void 0,this.T=new mo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Up}function Up(){this.i=null,this.g="",this.h=!1}var pT=45e3,ja={},Ri={};N=Dr.prototype;N.setTimeout=function(t){this.O=t};function Va(t,e,n){t.K=1,t.v=wo(en(e)),t.s=n,t.P=!0,jp(t,null)}function jp(t,e){t.F=Date.now(),Nr(t),t.A=en(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Gp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Up,t.g=gg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aT(je(t.La,t,t.g),t.N)),Np(t.S,t.g,"readystatechange",t.ib),e=t.H?Ep(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yr(),lT(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Wt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||Da||this.g&&(this.h.h||this.g.fa()||ah(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?yr(3):yr(2)),_o(this);var n=this.g.aa();this.Y=n;t:if(Vp(this)){var s=ah(this.g);t="";var r=s.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),Ks(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var c=a;break t}}c=null}if(n=c)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ba(this,n);else{this.i=!1,this.o=3,Ke(12),Mn(this),Ks(this);break e}}this.P?(Bp(this,u,o),Da&&this.i&&u==3&&(Np(this.S,this.T,"tick",this.hb),this.T.start())):(ns(this.j,this.m,o,null),Ba(this,o)),u==4&&Mn(this),this.i&&!this.I&&(u==4?hg(this.l,this):(this.i=!1,Nr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),Mn(this),Ks(this)}}}catch{}finally{}};function Vp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Bp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=gT(t,n),r==Ri){e==4&&(t.o=4,Ke(14),s=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ja){t.o=4,Ke(15),ns(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ns(t.j,t.m,r,null),Ba(t,r);Vp(t)&&r!=Ri&&r!=ja&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ac(e),e.K=!0,Ke(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),Ks(t))}N.hb=function(){if(this.g){var t=Wt(this.g),e=this.g.fa();this.C<e.length&&(_o(this),Bp(this,t,e),this.i&&t!=4&&Nr(this))}};function gT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ri:(n=Number(e.substring(n,s)),isNaN(n)?ja:(s+=1,s+n>e.length?Ri:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,Mn(this)};function Nr(t){t.V=Date.now()+t.O,Hp(t,t.O)}function Hp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Or(je(t.gb,t),e)}function _o(t){t.B&&(H.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(uT(this.j,this.A),this.K!=2&&(yr(),Ke(17)),Mn(this),this.o=2,Ks(this)):Hp(this,this.V-t)};function Ks(t){t.l.G==0||t.I||hg(t.l,t)}function Mn(t){_o(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gl(t.T),Mp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ba(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ha(n.h,t))){if(!t.J&&Ha(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Di(n),To(n);else break e;oc(n),Ke(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Or(je(n.cb,n),6e3));if(1>=Jp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ln(n,11)}else if((t.J||n.g==t)&&Di(n),!Ci(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(tc(i,i.h),i.h=null))}if(s.D){const x=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.za=x,ge(s.F,s.D,x))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=pg(s,s.H?s.ka:null,s.V),o.J){Qp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(_o(a),Nr(a)),s.g=o}else cg(s);0<n.i.length&&xo(n)}else c[0]!="stop"&&c[0]!="close"||Ln(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ln(n,7):ic(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}yr(4)}catch{}}function mT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ho(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function yT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ho(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function qp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ho(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yT(t),s=mT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=e!==void 0?e:t.h,Oi(this,t.j),this.s=t.s,this.g=t.g,Pi(this,t.m),this.l=t.l,e=t.i;var n=new vr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),rh(this,n),this.o=t.o}else t&&(n=String(t).match(zp))?(this.h=!!e,Oi(this,n[1]||"",!0),this.s=Ns(n[2]||""),this.g=Ns(n[3]||"",!0),Pi(this,n[4]),this.l=Ns(n[5]||"",!0),rh(this,n[6]||"",!0),this.o=Ns(n[7]||"")):(this.h=!!e,this.i=new vr(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,ih,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ms(e,ih,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ms(n,n.charAt(0)=="/"?bT:wT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,ET)),t.join("")};function en(t){return new jn(t)}function Oi(t,e,n){t.j=n?Ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rh(t,e,n){e instanceof vr?(t.i=e,TT(t.i,t.h)):(n||(e=Ms(e,IT)),t.i=new vr(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function wo(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_T),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _T(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ih=/[#\/\?@]/g,wT=/[#\?:]/g,bT=/[#\?]/g,IT=/[#\?@]/g,ET=/#/g;function vr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Map,t.h=0,t.i&&vT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=vr.prototype;N.add=function(t,e){Tn(this),this.i=null,t=ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kp(t,e){Tn(t),e=ks(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wp(t,e){return Tn(t),e=ks(t,e),t.g.has(e)}N.forEach=function(t,e){Tn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){Tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){Tn(this);let e=[];if(typeof t=="string")Wp(this,t)&&(e=e.concat(this.g.get(ks(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Tn(this),this.i=null,t=ks(this,t),Wp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Gp(t,e,n){Kp(t,e),0<n.length&&(t.i=null,t.g.set(ks(t,e),jl(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TT(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Kp(this,s),Gp(this,r,n))},t)),t.j=e}var xT=class{constructor(t,e){this.h=t,this.g=e}};function Xp(t){this.l=t||AT,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ga&&H.g.Ga()&&H.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AT=10;function Yp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jp(t){return t.h?1:t.g?t.g.size:0}function Ha(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tc(t,e){t.g?t.g.add(e):t.h=e}function Qp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xp.prototype.cancel=function(){if(this.i=Zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jl(t.i)}function nc(){}nc.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};nc.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function ST(){this.g=new nc}function kT(t,e,n){const s=n||"";try{qp(t,function(r,i){let o=r;Cr(r)&&(o=Wl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function CT(t,e){const n=new yo;if(H.Image){const s=new Image;s.onload=Wr(Xr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Wr(Xr,n,s,"TestLoadImage: error",!1,e),s.onabort=Wr(Xr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Wr(Xr,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Xr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function bo(t){this.l=t.ac||null,this.j=t.jb||!1}Fe(bo,Ql);bo.prototype.g=function(){return new Io(this.l,this.j)};bo.prototype.i=function(t){return function(){return t}}({});function Io(t,e){De.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(Io,De);var sc=0;N=Io.prototype;N.open=function(t,e){if(this.readyState!=sc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_r(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=sc};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function eg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mr(this):_r(this),this.readyState==3&&eg(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Mr(this))};N.Ua=function(t){this.g&&(this.response=t,Mr(this))};N.ga=function(){this.g&&Mr(this)};function Mr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_r(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _r(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RT=H.JSON.parse;function Ie(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tg,this.K=this.L=!1}Fe(Ie,De);var tg="",OT=/^https?$/i,PT=["POST","PUT"];N=Ie.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ua.g(),this.C=this.u?sh(this.u):sh(Ua),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){oh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=H.FormData&&t instanceof H.FormData,!(0<=_p(PT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rg(this),0<this.B&&((this.K=DT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=Xl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){oh(this,i)}};function DT(t){return pr&&XE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof Ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function oh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ng(t),Eo(t)}function ng(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Eo(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eo(this,!0)),Ie.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?sg(this):this.fb())};N.fb=function(){sg(this)};function sg(t){if(t.h&&typeof Ul<"u"&&(!t.C[1]||Wt(t)!=4||t.aa()!=2)){if(t.v&&Wt(t)==4)Xl(t.Ha,0,t);else if(Le(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(zp)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!OT.test(r?r.toLowerCase():"")}n=s}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<Wt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ng(t)}}finally{Eo(t)}}}}function Eo(t,e){if(t.g){rg(t);const n=t.g,s=t.C[0]?ki:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=s}catch{}}}function rg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Wt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RT(e)}};function ah(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case tg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ig(t){let e="";return Bl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function rc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ig(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function og(t){this.Ca=0,this.i=[],this.j=new yo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Os("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Os("baseRetryDelayMs",5e3,t),this.bb=Os("retryDelaySeedMs",1e4,t),this.$a=Os("forwardChannelMaxRetries",2,t),this.ta=Os("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Xp(t&&t.concurrentRequestLimit),this.Fa=new ST,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=og.prototype;N.ma=8;N.G=1;function ic(t){if(ag(t),t.G==3){var e=t.U++,n=en(t.F);ge(n,"SID",t.I),ge(n,"RID",e),ge(n,"TYPE","terminate"),Lr(t,n),e=new Dr(t,t.j,e,void 0),e.K=2,e.v=wo(en(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=gg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Nr(e)}dg(t)}function To(t){t.g&&(ac(t),t.g.cancel(),t.g=null)}function ag(t){To(t),t.u&&(H.clearTimeout(t.u),t.u=null),Di(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function xo(t){Yp(t.h)||t.m||(t.m=!0,Op(t.Ja,t),t.C=0)}function NT(t,e){return Jp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Or(je(t.Ja,t,e),fg(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Dr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ep(i),Tp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lg(this,r,e),n=en(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Lr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ig(i)))+"&"+e:this.o&&rc(n,this.o,i)),tc(this.h,r),this.Ya&&ge(n,"TYPE","init"),this.O?(ge(n,"$req",e),ge(n,"SID","null"),r.Z=!0,Va(r,n,null)):Va(r,n,e),this.G=2}}else this.G==3&&(t?lh(this,t):this.i.length==0||Yp(this.h)||lh(this))};function lh(t,e){var n;e?n=e.m:n=t.U++;const s=en(t.F);ge(s,"SID",t.I),ge(s,"RID",n),ge(s,"AID",t.T),Lr(t,s),t.o&&t.s&&rc(s,t.o,t.s),n=new Dr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),tc(t.h,n),Va(n,s,e)}function Lr(t,e){t.ia&&Bl(t.ia,function(n,s){ge(e,s,n)}),t.l&&qp({},function(n,s){ge(e,s,n)})}function lg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?je(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{kT(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function cg(t){t.g||t.u||(t.Z=1,Op(t.Ia,t),t.A=0)}function oc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Or(je(t.Ia,t),fg(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,ug(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Or(je(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),To(this),ug(this))};function ac(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function ug(t){t.g=new Dr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=en(t.sa);ge(e,"RID","rpc"),ge(e,"SID",t.I),ge(e,"CI",t.L?"0":"1"),ge(e,"AID",t.T),ge(e,"TYPE","xmlhttp"),Lr(t,e),t.o&&t.s&&rc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=wo(en(e)),n.s=null,n.P=!0,jp(n,t)}N.cb=function(){this.v!=null&&(this.v=null,To(this),oc(this),Ke(19))};function Di(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function hg(t,e){var n=null;if(t.g==e){Di(t),ac(t),t.g=null;var s=2}else if(Ha(t.h,e))n=e.D,Qp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Yl(),Le(s,new $p(s,n)),xo(t)}else cg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&NT(t,e)||s==2&&oc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function fg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ln(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=je(t.kb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Oi(n,"https"),wo(n)),CT(n.toString(),s)}else Ke(2);t.G=0,t.l&&t.l.va(e),dg(t),ag(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function dg(t){if(t.G=0,t.la=[],t.l){const e=Zp(t.h);(e.length!=0||t.i.length!=0)&&(Qu(t.la,e),Qu(t.la,t.i),t.h.i.length=0,jl(t.i),t.i.length=0),t.l.ua()}}function pg(t,e,n){var s=n instanceof jn?en(n):new jn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Pi(s,s.m);else{var r=H.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new jn(null,void 0);s&&Oi(i,s),e&&(i.g=e),r&&Pi(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ge(s,n,e),ge(s,"VER",t.ma),Lr(t,s),s}function gg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ie(new bo({jb:!0})):new Ie(t.ra),e.Ka(t.H),e}function mg(){}N=mg.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function yt(t,e){De.call(this),this.g=new og(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ci(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}Fe(yt,De);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=pg(t,null,t.V),xo(t)};yt.prototype.close=function(){ic(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wl(t),t=n);e.i.push(new xT(e.ab++,t)),e.G==3&&xo(e)};yt.prototype.M=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,yt.X.M.call(this)};function yg(t){Zl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(yg,Zl);function vg(){ec.call(this),this.status=1}Fe(vg,ec);function Cs(t){this.g=t}Fe(Cs,mg);Cs.prototype.xa=function(){Le(this.g,"a")};Cs.prototype.wa=function(t){Le(this.g,new yg(t))};Cs.prototype.va=function(t){Le(this.g,new vg)};Cs.prototype.ua=function(){Le(this.g,"b")};yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Jl.NO_ERROR=0;Jl.TIMEOUT=8;Jl.HTTP_ERROR=6;fT.COMPLETE="complete";dT.EventType=Pr;Pr.OPEN="a";Pr.CLOSE="b";Pr.ERROR="c";Pr.MESSAGE="d";De.prototype.listen=De.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;const ch="@firebase/firestore";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Ao="9.15.0";/**
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
 */const Ni=new Tr("@firebase/firestore");function at(t,...e){if(Ni.logLevel<=ie.DEBUG){const n=e.map(_g);Ni.debug(`Firestore (${Ao}): ${t}`,...n)}}function lc(t,...e){if(Ni.logLevel<=ie.ERROR){const n=e.map(_g);Ni.error(`Firestore (${Ao}): ${t}`,...n)}}function _g(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function wg(t="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+t;throw lc(e),new Error(e)}function Mi(t,e){t||wg()}/**
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
 */const Ut={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jt extends vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ls{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class MT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class FT{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ls,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ls)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Mi(typeof s.accessToken=="string"),new MT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mi(e===null||typeof e=="string"),new Ye(e)}}class $T{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Mi(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class UT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new $T(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,at("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Mi(typeof n.token=="string"),this.A=n.token,new jT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function BT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class HT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=BT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function bg(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qT{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var uh,ee;(ee=uh||(uh={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";function ta(){return typeof document<"u"?document:null}class zT{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&at("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class cc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new cc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new jt(Ut.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function KT(t,e){if(lc("AsyncQueue",`${e}: ${t}`),bg(t))return new jt(Ut.UNAVAILABLE,`${e}: ${t}`);throw t}function WT(t,e,n,s){if(e===!0&&s===!0)throw new jt(Ut.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */const hh=new Map;class fh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new jt(Ut.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new jt(Ut.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,WT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class GT{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jt(Ut.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new jt(Ut.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new LT;switch(n.type){case"gapi":const s=n.client;return new UT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new jt(Ut.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hh.get(e);n&&(at("ComponentProvider","Removing Datastore"),hh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class XT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ye.UNAUTHENTICATED,this.clientId=HT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{at("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(at("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jt(Ut.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=KT(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}class YT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new zT(this,"async_queue_retry"),this.Wc=()=>{const n=ta();n&&at("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ta();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ta();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ls;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!bg(e))throw e;at("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw lc("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=cc.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&wg()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class JT extends GT{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new YT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QT(this),this._firestoreClient.terminate()}}function QT(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new qT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new XT(t._authCredentials,t._appCheckCredentials,t._queue,s)}(function(t,e=!0){(function(n){Ao=n})(Ts),At(new mt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new JT(new FT(n.getProvider("auth-internal")),new VT(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new jt(Ut.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ze(ch,"3.8.0",t),Ze(ch,"3.8.0","esm2017")})();const ZT={class:"w-full"},ex=y("h1",{class:"text-4xl font-black capitalize ml-5 sm:ml-24 pt-14 pb-5"}," TARIFAS PREFERENCIALES ",-1),tx=y("h2",{class:"text-3xl font-extrabold capitalize sm:ml-32 ml-8"}," Para impulsar tu negocio ",-1),nx={class:"relative flex items-top justify-center mt-0 bg-white dark:bg-white sm:items-center sm:pt-0"},sx={class:"max-w-6xl mx-auto sm:px-6 lg:px-8 pb-10"},rx={class:"mt-0 overflow-hidden"},ix={class:"grid grid-cols-1 md:grid-cols-2"},ox=["onSubmit"],ax={class:"flex flex-col"},lx=y("label",{for:"name",class:"hidden"},"Nombre completo",-1),cx={class:"flex flex-col"},ux=y("label",{for:"name",class:"hidden"},"Teléfono",-1),hx={class:"flex flex-col"},fx=y("label",{for:"name",class:"hidden"},"Nombre de tu empresa",-1),dx={class:"flex flex-col"},px=y("label",{for:"name",class:"hidden"},"Ciudad",-1),gx={class:"flex flex-col"},mx=y("label",{for:"name",class:"hidden"},"Correo electrónico",-1),yx={class:"flex flex-col mt-5"},vx={class:"inline-flex items-center"},_x=y("span",{class:"ml-2"},"20 a 50 envíos mensuales",-1),wx={class:"inline-flex items-center"},bx=y("span",{class:"ml-2"},"Más de 50 envíos mensuales",-1),Ix={class:"pt-5 sm:pt-10 sm:flex sm:justify-center"},Ex={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},Tx={class:"relative w-auto my-6 mx-auto max-w-3xl"},xx={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},Ax=y("div",{class:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"},[y("h3",{class:"text-3xl font-semibold"},"¡EXCELENTE!")],-1),Sx=y("div",{class:"relative p-6 flex-auto"},[y("p",{class:"my-4 text-slate-500 text-lg leading-relaxed"},[hi(" Hemos recibido tu información. "),y("br"),hi(" En breve nos comunicaremos contigo. ")])],-1),kx={class:"flex items-center justify-end p-6 bg-[#003368]border-t border-solid border-slate-200 rounded-b"},Cx={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"},Rx=Ir('<div class="bg-white dark:bg-white sm:rounded-lg sm:pl-32 order-first sm:order-last"><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400"><img src="'+FE+'" class="sm:w-auto h-48 pl-28 sm:h-72 sm:pl-28"></div><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-80"> Av Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700 Ciudad de México, CDMX </div></div><div class="flex items-center mt-4 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-40"> 55-51-41-43-00 </div></div><div class="flex items-center mt-2 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a href="mailto:desarrollowebodm@gmail.com?subject=Nuevo Cliente Potencial" class="ml-4 text-md tracking-wide font-semibold w-40"> desarrollowebodm@gmail.com </a></div></div>',1),Ox={__name:"Formulario",setup(t){const e=vp(),n=Je(!1),s=()=>{n.value=!n.value},r=()=>{n.value=!1},i=Je(""),o=Je(""),a=Je(""),l=Je(""),c=Je(""),u=Je(""),f=()=>{if(!i.value||!o.value||!a.value||!l.value||!c.value){alert("Por favor llena todos los campos");return}if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c.value)){alert("Por favor ingresa un correo válido");return}e.addUrl(i.value,o.value,a.value,l.value,c.value,u.value),console.log("FORMULARIO"),i.value="",o.value="",a.value="",l.value="",c.value="",u.value=""};return(p,g)=>(we(),xe("div",ZT,[ex,tx,y("div",nx,[y("div",sx,[y("div",rx,[y("div",ix,[y("form",{class:"p-6 flex flex-col justify-center sm:gap-y-1",onSubmit:ay(f,["prevent"])},[y("div",ax,[lx,ht(y("input",{type:"text",placeholder:"Nombre completo",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":g[0]||(g[0]=w=>i.value=w)},null,512),[[hn,i.value]])]),y("div",cx,[ux,ht(y("input",{type:"number",placeholder:"Teléfono",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":g[1]||(g[1]=w=>o.value=w)},null,512),[[hn,o.value]])]),y("div",hx,[fx,ht(y("input",{type:"text",placeholder:"Nombre de tu empresa",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":g[2]||(g[2]=w=>a.value=w)},null,512),[[hn,a.value]])]),y("div",dx,[px,ht(y("input",{type:"text",placeholder:"Ciudad",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":g[3]||(g[3]=w=>l.value=w)},null,512),[[hn,l.value]])]),y("div",gx,[mx,ht(y("input",{type:"email",placeholder:"Correo electrónico",class:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none","onUpdate:modelValue":g[4]||(g[4]=w=>c.value=w)},null,512),[[hn,c.value]])]),y("div",yx,[y("label",vx,[ht(y("input",{type:"radio",class:"form-radio","onUpdate:modelValue":g[5]||(g[5]=w=>u.value=w),value:"20 a 50 envíos mensuales",name:"option"},null,512),[[zc,u.value]]),_x]),y("label",wx,[ht(y("input",{type:"radio",class:"form-radio","onUpdate:modelValue":g[6]||(g[6]=w=>u.value=w),value:"más de 50 envíos mensuales",name:"option"},null,512),[[zc,u.value]]),bx])]),y("div",Ix,[y("button",{class:"bg-[#003368] py-3 h-32 text-white active:bg-[#D9D9D9] font-bold uppercase text-2xl px-20 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-10 sm:mr-1 mb-1 ease-linear transition-all duration-150 sm:px-14",type:"submit",onClick:g[7]||(g[7]=w=>s())}," SOLICITAR TARIFA PREFERENTE ")]),n.value?(we(),xe("div",Ex,[y("div",Tx,[y("div",xx,[Ax,Sx,y("div",kx,[y("button",{class:"text-white bg-[#003368] border border-solid border-white hover:bg-blue-900 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:g[8]||(g[8]=w=>r())}," OK ")])])])])):qt("",!0),n.value?(we(),xe("div",Cx)):qt("",!0)],40,ox),Rx])])])])]))}},Px={class:"flex flex-col sm:w-full px-3 lg:px-52 md:px-0 sm:lg:px-0"},Dx=y("h1",{class:"text-4xl font-black capitalize ml-5 sm:ml-24 py-14"}," COBERTURA DE ENVÍOS ",-1),Nx={class:"mx-auto"},Mx={class:"flex flex-wrap justify-center pt-0 pb-10 sm:space-x-40"},Lx={class:"w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0"},Fx=y("option",null,"¿Dónde dejar tus paquetes?",-1),$x=["value"],Ux={class:"mt-4 flex items-center"},jx=y("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",class:"text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})],-1),Vx=y("h2",{class:"text-4xl font-bold"},"Dirección",-1),Bx=y("h3",{class:"text-gray-500 text-2xl"},"De:",-1),Hx={key:0,class:"text-3xl text-[#003386]"},qx={class:"w-full md:w-1/2 lg:w-1/3 px-4 mb-0 md:mb-0"},zx=y("option",{value:""},"¿Dónde recoger tus paquetes?",-1),Kx=["value"],Wx={class:"mt-4 flex items-center"},Gx=y("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",class:"text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})],-1),Xx=y("h2",{class:"text-4xl font-bold"},"Dirección",-1),Yx=y("h3",{class:"text-gray-500 text-2xl"},"A:",-1),Jx={key:0,class:"text-3xl text-[#003368]"},Qx={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:justify-items-center sm:place-items-center sm:px-80"},Zx={key:0,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},eA=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Sobres ",-1),tA=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," Hasta 25 hojas ",-1),nA={class:"mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},sA={key:1,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},rA=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Paquetes ",-1),iA=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 0 - 1 Kg. ",-1),oA={class:"mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},aA={key:2,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},lA=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Cajas ",-1),cA=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 1 - 10 Kg. ",-1),uA={class:"mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},hA={key:3,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-full"},fA=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Cajas ",-1),dA=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 11 - 20 Kg. ",-1),pA={class:"mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},gA={key:4,class:"bg-gray-800 p-4 shadow rounded-lg sm:w-6/12 sm:col-span-2"},mA=y("h2",{class:"font-extrabold text-4xl text-center sm:pt-2 text-white"}," Maletas ",-1),yA=y("h2",{class:"font-extrabold text-3xl text-center sm:pt-5 text-gray-300"}," De 21 - 30 Kg. ",-1),vA={class:"mt-4 text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"},_A=y("div",{class:"h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"},[y("p",null,"***VALOR DE REFERENCIA SUJETO A CAMBIOS***")],-1),wA={__name:"App",setup(t){const e=vp();ll(async()=>{await e.getDocuments("envios")});const n=Je(null),s=Je(null),r=async()=>{s.value=null,await e.getDocumentByKey("envios","id",n.value.id)},i=new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2});return(o,a)=>{const l=r0("router-view");return we(),xe(rt,null,[be(Cy),be(vy),y("div",Px,[be(Fy),Dx,y("div",Nx,[y("div",Mx,[y("div",Lx,[ht(y("select",{"onUpdate:modelValue":a[0]||(a[0]=c=>ye(n)?n.value=c:null),onChange:a[1]||(a[1]=c=>r()),class:"block sm:w-96 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"¿Dónde dejar tus paquetes?"},[Fx,(we(!0),xe(rt,null,kc(oe(e).$state.documents,c=>(we(),xe("option",{key:c.id,value:c},Ot(c.origen),9,$x))),128))],544),[[Kc,oe(n)]]),y("div",Ux,[jx,y("div",null,[Vx,Bx,oe(n)!=null?(we(),xe("p",Hx,Ot(oe(n).ubicacion),1)):qt("",!0)])])]),y("div",qx,[ht(y("select",{"onUpdate:modelValue":a[2]||(a[2]=c=>ye(s)?s.value=c:null),class:"block sm:w-96 w-72 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"},[zx,(we(!0),xe(rt,null,kc(oe(e).$state.destinos,c=>(we(),xe("option",{key:c.id,value:c},Ot(c.nombre),9,Kx))),128))],512),[[Kc,oe(s)]]),y("div",Wx,[Gx,y("div",null,[Xx,Yx,oe(s)!=null?(we(),xe("p",Jx,Ot(oe(s).direccion),1)):qt("",!0)])])])])]),y("div",Qx,[oe(s)!=null?(we(),xe("div",Zx,[eA,tA,y("p",nA,Ot(oe(i).format(oe(s).precios.SOB)),1)])):qt("",!0),oe(s)!=null?(we(),xe("div",sA,[rA,iA,y("p",oA,Ot(oe(i).format(oe(s).precios.PAQ)),1)])):qt("",!0),oe(s)!=null?(we(),xe("div",aA,[lA,cA,y("p",uA,Ot(oe(i).format(oe(s).precios.C1)),1)])):qt("",!0),oe(s)!=null?(we(),xe("div",hA,[fA,dA,y("p",pA,Ot(oe(i).format(oe(s).precios.C2)),1)])):qt("",!0),oe(s)!=null?(we(),xe("div",gA,[mA,yA,y("p",vA,Ot(oe(i).format(oe(s).precios.C3)),1)])):qt("",!0)]),_A,be(av),be(Ox)]),be(pv),be(l)],64)}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof window<"u";function bA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function na(t,e){const n={};for(const s in e){const r=e[s];n[s]=St(r)?r.map(t):t(r)}return n}const Ws=()=>{},St=Array.isArray,IA=/\/$/,EA=t=>t.replace(IA,"");function sa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=SA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function TA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&vs(e.matched[s],n.matched[r])&&Ig(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ig(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AA(t[n],e[n]))return!1;return!0}function AA(t,e){return St(t)?ph(t,e):St(e)?ph(e,t):t===e}function ph(t,e){return St(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function SA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var wr;(function(t){t.pop="pop",t.push="push"})(wr||(wr={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function kA(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EA(t)}const CA=/^[^#]+#/;function RA(t,e){return t.replace(CA,"#")+e}function OA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const So=()=>({left:window.pageXOffset,top:window.pageYOffset});function PA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=OA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gh(t,e){return(history.state?history.state.position-e:-1)+t}const qa=new Map;function DA(t,e){qa.set(t,e)}function NA(t){const e=qa.get(t);return qa.delete(t),e}let MA=()=>location.protocol+"//"+location.host;function Eg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),dh(l,"")}return dh(n,t)+s+r}function LA(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=Eg(t,location),w=n.value,x=e.value;let $=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}$=x?p.position-x.position:0}else s(g);r.forEach(R=>{R(n.value,w,{delta:$,type:wr.pop,direction:$?$>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){o=n.value}function c(p){r.push(p);const g=()=>{const w=r.indexOf(p);w>-1&&r.splice(w,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ae({},p.state,{scroll:So()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function mh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?So():null}}function FA(t){const{history:e,location:n}=window,s={value:Eg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:MA()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),r.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=ae({},e.state,mh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ae({},r.value,e.state,{forward:l,scroll:So()});i(u.current,u,!0);const f=ae({},mh(s.value,l,null),{position:u.position+1},c);i(l,f,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function $A(t){t=kA(t);const e=FA(t),n=LA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:RA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function UA(t){return typeof t=="string"||t&&typeof t=="object"}function Tg(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xg=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function _s(t,e){return ae(new Error,{type:t,[xg]:!0},e)}function Bt(t,e){return t instanceof Error&&xg in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",jA={sensitive:!1,strict:!1,start:!0,end:!0},VA=/[.+*?^${}()[\]/\\]/g;function BA(t,e){const n=ae({},jA,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(VA,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:x,optional:$,regexp:R}=p;i.push({name:w,repeatable:x,optional:$});const j=R||vh;if(j!==vh){g+=10;try{new RegExp(`(${j})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${w}" (${j}): `+W.message)}}let P=x?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;f||(P=$&&c.length<2?`(?:/${P})`:"/"+P),$&&(P+="?"),r+=P,g+=20,$&&(g+=-8),x&&(g+=-20),j===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",w=i[p-1];f[w.name]=g&&w.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:x,optional:$}=g,R=w in c?c[w]:"";if(St(R)&&!x)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const j=St(R)?R.join("/"):R;if(!j)if($)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=j}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function HA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=HA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(_h(s))return 1;if(_h(r))return-1}return r.length-s.length}function _h(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zA={type:0,value:""},KA=/[a-zA-Z0-9_]/;function WA(t){if(!t)return[[]];if(t==="/")return[[zA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:KA.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function GA(t,e,n){const s=BA(WA(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function XA(t,e){const n=[],s=new Map;e=Ih({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,p){const g=!p,w=YA(u);w.aliasOf=p&&p.record;const x=Ih(e,u),$=[w];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of P)$.push(ae({},w,{components:p?p.record.components:w.components,path:W,aliasOf:p?p.record:w}))}let R,j;for(const P of $){const{path:W}=P;if(f&&W[0]!=="/"){const X=f.record.path,ue=X[X.length-1]==="/"?"":"/";P.path=f.record.path+(W&&ue+W)}if(R=GA(P,f,x),p?p.alias.push(R):(j=j||R,j!==R&&j.alias.push(R),g&&u.name&&!bh(R)&&o(u.name)),w.children){const X=w.children;for(let ue=0;ue<X.length;ue++)i(X[ue],R,p&&p.children[ue])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return j?()=>{o(j)}:Ws}function o(u){if(Tg(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&qA(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Ag(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!bh(u)&&s.set(u.record.name,u)}function c(u,f){let p,g={},w,x;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw _s(1,{location:u});x=p.record.name,g=ae(wh(f.params,p.keys.filter(j=>!j.optional).map(j=>j.name)),u.params&&wh(u.params,p.keys.map(j=>j.name))),w=p.stringify(g)}else if("path"in u)w=u.path,p=n.find(j=>j.re.test(w)),p&&(g=p.parse(w),x=p.record.name);else{if(p=f.name?s.get(f.name):n.find(j=>j.re.test(f.path)),!p)throw _s(1,{location:u,currentLocation:f});x=p.record.name,g=ae({},f.params,u.params),w=p.stringify(g)}const $=[];let R=p;for(;R;)$.unshift(R.record),R=R.parent;return{name:x,path:w,params:g,matched:$,meta:QA($)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function wh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function YA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:JA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function JA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function bh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QA(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Ih(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ag(t,e){return e.children.some(n=>n===t||Ag(t,n))}const Sg=/#/g,ZA=/&/g,eS=/\//g,tS=/=/g,nS=/\?/g,kg=/\+/g,sS=/%5B/g,rS=/%5D/g,Cg=/%5E/g,iS=/%60/g,Rg=/%7B/g,oS=/%7C/g,Og=/%7D/g,aS=/%20/g;function uc(t){return encodeURI(""+t).replace(oS,"|").replace(sS,"[").replace(rS,"]")}function lS(t){return uc(t).replace(Rg,"{").replace(Og,"}").replace(Cg,"^")}function za(t){return uc(t).replace(kg,"%2B").replace(aS,"+").replace(Sg,"%23").replace(ZA,"%26").replace(iS,"`").replace(Rg,"{").replace(Og,"}").replace(Cg,"^")}function cS(t){return za(t).replace(tS,"%3D")}function uS(t){return uc(t).replace(Sg,"%23").replace(nS,"%3F")}function hS(t){return t==null?"":uS(t).replace(eS,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(kg," "),o=i.indexOf("="),a=Fi(o<0?i:i.slice(0,o)),l=o<0?null:Fi(i.slice(o+1));if(a in e){let c=e[a];St(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Eh(t){let e="";for(let n in t){const s=t[n];if(n=cS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(s)?s.map(i=>i&&za(i)):[s&&za(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=St(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const pS=Symbol(""),Th=Symbol(""),hc=Symbol(""),Pg=Symbol(""),Ka=Symbol("");function Ps(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(_s(4,{from:n,to:e})):f instanceof Error?a(f):UA(f)?a(_s(2,{from:e,to:f})):(i&&s.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ra(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gS(a)){const c=(a.__vccOpts||a)[e];c&&r.push(cn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=bA(c)?c.default:c;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&cn(p,n,s,i,o)()}))}}return r}function gS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xh(t){const e=Lt(hc),n=Lt(Pg),s=Qe(()=>e.resolve(oe(t.to))),r=Qe(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(vs.bind(null,u));if(p>-1)return p;const g=Ah(l[c-2]);return c>1&&Ah(u)===g&&f[f.length-1].path!==g?f.findIndex(vs.bind(null,l[c-2])):p}),i=Qe(()=>r.value>-1&&_S(n.params,s.value.params)),o=Qe(()=>r.value>-1&&r.value===n.matched.length-1&&Ig(n.params,s.value.params));function a(l={}){return vS(l)?e[oe(t.replace)?"replace":"push"](oe(t.to)).catch(Ws):Promise.resolve()}return{route:s,href:Qe(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const mS=uf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xh,setup(t,{slots:e}){const n=Es(xh(t)),{options:s}=Lt(hc),r=Qe(()=>({[Sh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),yS=mS;function vS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _S(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!St(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sh=(t,e,n)=>t??e??n,wS=uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Lt(Ka),r=Qe(()=>t.route||s.value),i=Lt(Th,0),o=Qe(()=>{let c=oe(i);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Qe(()=>r.value.matched[o.value]);Qr(Th,Qe(()=>o.value+1)),Qr(pS,a),Qr(Ka,r);const l=Je();return Ls(()=>[l.value,a.value,t.name],([c,u,f],[p,g,w])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!vs(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return kh(n.default,{Component:p,route:c});const g=f.props[u],w=g?g===!0?c.params:typeof g=="function"?g(c):g:null,$=kf(p,ae({},w,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return kh(n.default,{Component:$,route:c})||$}}});function kh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bS=wS;function IS(t){const e=XA(t.routes,t),n=t.parseQuery||fS,s=t.stringifyQuery||Eh,r=t.history,i=Ps(),o=Ps(),a=Ps(),l=Em(rn);let c=rn;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=na.bind(null,_=>""+_),f=na.bind(null,hS),p=na.bind(null,Fi);function g(_,C){let S,M;return Tg(_)?(S=e.getRecordMatcher(_),M=C):M=_,e.addRoute(M,S)}function w(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function x(){return e.getRoutes().map(_=>_.record)}function $(_){return!!e.getRecordMatcher(_)}function R(_,C){if(C=ae({},C||l.value),typeof _=="string"){const h=sa(n,_,C.path),d=e.resolve({path:h.path},C),m=r.createHref(h.fullPath);return ae(h,d,{params:p(d.params),hash:Fi(h.hash),redirectedFrom:void 0,href:m})}let S;if("path"in _)S=ae({},_,{path:sa(n,_.path,C.path).path});else{const h=ae({},_.params);for(const d in h)h[d]==null&&delete h[d];S=ae({},_,{params:f(_.params)}),C.params=f(C.params)}const M=e.resolve(S,C),ne=_.hash||"";M.params=u(p(M.params));const me=TA(s,ae({},_,{hash:lS(ne),path:M.path})),Y=r.createHref(me);return ae({fullPath:me,hash:ne,query:s===Eh?dS(_.query):_.query||{}},M,{redirectedFrom:void 0,href:Y})}function j(_){return typeof _=="string"?sa(n,_,l.value.path):ae({},_)}function P(_,C){if(c!==_)return _s(8,{from:C,to:_})}function W(_){return G(_)}function X(_){return W(ae(j(_),{replace:!0}))}function ue(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:S}=C;let M=typeof S=="function"?S(_):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=j(M):{path:M},M.params={}),ae({query:_.query,hash:_.hash,params:"path"in M?{}:_.params},M)}}function G(_,C){const S=c=R(_),M=l.value,ne=_.state,me=_.force,Y=_.replace===!0,h=ue(S);if(h)return G(ae(j(h),{state:typeof h=="object"?ae({},ne,h.state):ne,force:me,replace:Y}),C||S);const d=S;d.redirectedFrom=C;let m;return!me&&xA(s,M,S)&&(m=_s(16,{to:d,from:M}),xn(M,M,!0,!1)),(m?Promise.resolve(m):Q(d,M)).catch(v=>Bt(v)?Bt(v,2)?v:_t(v):he(v,d,M)).then(v=>{if(v){if(Bt(v,2))return G(ae({replace:Y},j(v.to),{state:typeof v.to=="object"?ae({},ne,v.to.state):ne,force:me}),C||d)}else v=ve(d,M,!0,Y,ne);return te(d,M,v),v})}function O(_,C){const S=P(_,C);return S?Promise.reject(S):Promise.resolve()}function Q(_,C){let S;const[M,ne,me]=ES(_,C);S=ra(M.reverse(),"beforeRouteLeave",_,C);for(const h of M)h.leaveGuards.forEach(d=>{S.push(cn(d,_,C))});const Y=O.bind(null,_,C);return S.push(Y),Qn(S).then(()=>{S=[];for(const h of i.list())S.push(cn(h,_,C));return S.push(Y),Qn(S)}).then(()=>{S=ra(ne,"beforeRouteUpdate",_,C);for(const h of ne)h.updateGuards.forEach(d=>{S.push(cn(d,_,C))});return S.push(Y),Qn(S)}).then(()=>{S=[];for(const h of _.matched)if(h.beforeEnter&&!C.matched.includes(h))if(St(h.beforeEnter))for(const d of h.beforeEnter)S.push(cn(d,_,C));else S.push(cn(h.beforeEnter,_,C));return S.push(Y),Qn(S)}).then(()=>(_.matched.forEach(h=>h.enterCallbacks={}),S=ra(me,"beforeRouteEnter",_,C),S.push(Y),Qn(S))).then(()=>{S=[];for(const h of o.list())S.push(cn(h,_,C));return S.push(Y),Qn(S)}).catch(h=>Bt(h,8)?h:Promise.reject(h))}function te(_,C,S){for(const M of a.list())M(_,C,S)}function ve(_,C,S,M,ne){const me=P(_,C);if(me)return me;const Y=C===rn,h=es?history.state:{};S&&(M||Y?r.replace(_.fullPath,ae({scroll:Y&&h&&h.scroll},ne)):r.push(_.fullPath,ne)),l.value=_,xn(_,C,S,Y),_t()}let Ce;function tt(){Ce||(Ce=r.listen((_,C,S)=>{if(!Fr.listening)return;const M=R(_),ne=ue(M);if(ne){G(ae(ne,{replace:!0}),M).catch(Ws);return}c=M;const me=l.value;es&&DA(gh(me.fullPath,S.delta),So()),Q(M,me).catch(Y=>Bt(Y,12)?Y:Bt(Y,2)?(G(Y.to,M).then(h=>{Bt(h,20)&&!S.delta&&S.type===wr.pop&&r.go(-1,!1)}).catch(Ws),Promise.reject()):(S.delta&&r.go(-S.delta,!1),he(Y,M,me))).then(Y=>{Y=Y||ve(M,me,!1),Y&&(S.delta&&!Bt(Y,8)?r.go(-S.delta,!1):S.type===wr.pop&&Bt(Y,20)&&r.go(-1,!1)),te(M,me,Y)}).catch(Ws)}))}let qe=Ps(),Re=Ps(),Ee;function he(_,C,S){_t(_);const M=Re.list();return M.length?M.forEach(ne=>ne(_,C,S)):console.error(_),Promise.reject(_)}function le(){return Ee&&l.value!==rn?Promise.resolve():new Promise((_,C)=>{qe.add([_,C])})}function _t(_){return Ee||(Ee=!_,tt(),qe.list().forEach(([C,S])=>_?S(_):C()),qe.reset()),_}function xn(_,C,S,M){const{scrollBehavior:ne}=t;if(!es||!ne)return Promise.resolve();const me=!S&&NA(gh(_.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return ol().then(()=>ne(_,C,me)).then(Y=>Y&&PA(Y)).catch(Y=>he(Y,_,C))}const wt=_=>r.go(_);let We;const Xn=new Set,Fr={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,hasRoute:$,getRoutes:x,resolve:R,options:t,push:W,replace:X,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Re.add,isReady:le,install(_){const C=this;_.component("RouterLink",yS),_.component("RouterView",bS),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(l)}),es&&!We&&l.value===rn&&(We=!0,W(r.location).catch(ne=>{}));const S={};for(const ne in rn)S[ne]=Qe(()=>l.value[ne]);_.provide(hc,C),_.provide(Pg,Es(S)),_.provide(Ka,l);const M=_.unmount;Xn.add(_),_.unmount=function(){Xn.delete(_),Xn.size<1&&(c=rn,Ce&&Ce(),Ce=null,l.value=rn,We=!1,Ee=!1),M()}}};return Fr}function Qn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ES(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>vs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vs(c,l))||r.push(l))}return[n,s,r]}const TS=[{path:"/formulario",name:"Formulario"}],xS=IS({routes:TS,history:$A()});uy(wA).use(xS).use(pb()).mount("#app");
