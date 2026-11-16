(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},Ll={},Gs={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),Fd=Symbol.for("react.portal"),_d=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Na=Symbol.iterator;function Hd(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qs=Object.assign,Zs={};function zn(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Xs}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Js(){}Js.prototype=zn.prototype;function Ri(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Xs}var Pi=Ri.prototype=new Js;Pi.constructor=Ri;qs(Pi,zn.prototype);Pi.isPureReactComponent=!0;var Ta=Array.isArray,eu=Object.prototype.hasOwnProperty,Ni={current:null},tu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)eu.call(t,r)&&!tu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:vr,type:e,key:o,ref:i,props:l,_owner:Ni.current}}function Vd(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ti(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function Qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var La=/\/+/g;function Zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qd(""+e.key):t.toString(36)}function Qr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case vr:case Fd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Zl(i,0):r,Ta(l)?(n="",e!=null&&(n=e.replace(La,"$&/")+"/"),Qr(l,t,n,"",function(c){return c})):l!=null&&(Ti(l)&&(l=Vd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(La,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ta(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Zl(o,s);i+=Qr(o,t,n,u,l)}else if(u=Hd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Zl(o,s++),i+=Qr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Rr(e,t,n){if(e==null)return e;var r=[],l=0;return Qr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Yr={transition:null},Kd={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Yr,ReactCurrentOwner:Ni};function ru(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Rr,forEach:function(e,t,n){Rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rr(e,function(){t++}),t},toArray:function(e){return Rr(e,function(t){return t})||[]},only:function(e){if(!Ti(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=zn;O.Fragment=_d;O.Profiler=$d;O.PureComponent=Ri;O.StrictMode=Od;O.Suspense=Bd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kd;O.act=ru;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qs({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ni.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)eu.call(t,u)&&!tu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:vr,type:e.type,key:l,ref:o,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Md,_context:e},e.Consumer=e};O.createElement=nu;O.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ad,render:e}};O.isValidElement=Ti;O.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Yd}};O.memo=function(e,t){return{$$typeof:Wd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Yr.transition;Yr.transition={};try{e()}finally{Yr.transition=t}};O.unstable_act=ru;O.useCallback=function(e,t){return xe.current.useCallback(e,t)};O.useContext=function(e){return xe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};O.useEffect=function(e,t){return xe.current.useEffect(e,t)};O.useId=function(){return xe.current.useId()};O.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return xe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};O.useRef=function(e){return xe.current.useRef(e)};O.useState=function(e){return xe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return xe.current.useTransition()};O.version="18.3.1";Gs.exports=O;var x=Gs.exports;const lu=Id(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=x,Xd=Symbol.for("react.element"),qd=Symbol.for("react.fragment"),Zd=Object.prototype.hasOwnProperty,Jd=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ep={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Zd.call(t,r)&&!ep.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Xd,type:e,key:o,ref:i,props:l,_owner:Jd.current}}Ll.Fragment=qd;Ll.jsx=ou;Ll.jsxs=ou;Ks.exports=Ll;var a=Ks.exports,No={},iu={exports:{}},Pe={},au={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var _=P.length;P.push(I);e:for(;0<_;){var V=_-1>>>1,J=P[V];if(0<l(J,I))P[V]=I,P[_]=J,_=V;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],_=P.pop();if(_!==I){P[0]=_;e:for(var V=0,J=P.length,$=J>>>1;V<$;){var B=2*(V+1)-1,Zt=P[B],Ft=B+1,zr=P[Ft];if(0>l(Zt,_))Ft<J&&0>l(zr,Zt)?(P[V]=zr,P[Ft]=_,V=Ft):(P[V]=Zt,P[B]=_,V=B);else if(Ft<J&&0>l(zr,_))P[V]=zr,P[Ft]=_,V=Ft;else break e}}return I}function l(P,I){var _=P.sortIndex-I.sortIndex;return _!==0?_:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],h=1,f=null,g=3,k=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=P)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function j(P){if(v=!1,m(P),!y)if(n(u)!==null)y=!0,Xt(b);else{var I=n(c);I!==null&&qt(j,I.startTime-P)}}function b(P,I){y=!1,v&&(v=!1,p(L),L=-1),k=!0;var _=g;try{for(m(I),f=n(u);f!==null&&(!(f.expirationTime>I)||P&&!ce());){var V=f.callback;if(typeof V=="function"){f.callback=null,g=f.priorityLevel;var J=V(f.expirationTime<=I);I=e.unstable_now(),typeof J=="function"?f.callback=J:f===n(u)&&r(u),m(I)}else r(u);f=n(u)}if(f!==null)var $=!0;else{var B=n(c);B!==null&&qt(j,B.startTime-I),$=!1}return $}finally{f=null,g=_,k=!1}}var E=!1,R=null,L=-1,D=5,F=-1;function ce(){return!(e.unstable_now()-F<D)}function q(){if(R!==null){var P=e.unstable_now();F=P;var I=!0;try{I=R(!0,P)}finally{I?Ke():(E=!1,R=null)}}else E=!1}var Ke;if(typeof d=="function")Ke=function(){d(q)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,Ce=It.port2;It.port1.onmessage=q,Ke=function(){Ce.postMessage(null)}}else Ke=function(){C(q,0)};function Xt(P){R=P,E||(E=!0,Ke())}function qt(P,I){L=C(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Xt(b))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var _=g;g=I;try{return P()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var _=g;g=P;try{return I()}finally{g=_}},e.unstable_scheduleCallback=function(P,I,_){var V=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?V+_:V):_=V,P){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=_+J,P={id:h++,callback:I,priorityLevel:P,startTime:_,expirationTime:J,sortIndex:-1},_>V?(P.sortIndex=_,t(c,P),n(u)===null&&P===n(c)&&(v?(p(L),L=-1):v=!0,qt(j,_-V))):(P.sortIndex=J,t(u,P),y||k||(y=!0,Xt(b))),P},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(P){var I=g;return function(){var _=g;g=I;try{return P.apply(this,arguments)}finally{g=_}}}})(su);au.exports=su;var tp=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=x,Re=tp;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,tr={};function Kt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(tr[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Fa={};function lp(e){return To.call(Fa,e)?!0:To.call(Ia,e)?!1:rp.test(e)?Fa[e]=!0:(Ia[e]=!0,!1)}function op(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ip(e,t,n,r){if(t===null||typeof t>"u"||op(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Li=/[\-:]([a-z])/g;function Ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Li,Ii);ue[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Li,Ii);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Li,Ii);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fi(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ip(t,n,l,r)&&(n=null),r||l===null?lp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),tn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),_i=Symbol.for("react.strict_mode"),Lo=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),du=Symbol.for("react.context"),Oi=Symbol.for("react.forward_ref"),Io=Symbol.for("react.suspense"),Fo=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),_a=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Jl;function Wn(e){if(Jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jl=t&&t[1]||""}return`
`+Jl+e}var eo=!1;function to(e,t){if(!e||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wn(e):""}function ap(e){switch(e.tag){case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 2:case 15:return e=to(e.type,!1),e;case 11:return e=to(e.type.render,!1),e;case 1:return e=to(e.type,!0),e;default:return""}}function _o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case tn:return"Portal";case Lo:return"Profiler";case _i:return"StrictMode";case Io:return"Suspense";case Fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case du:return(e.displayName||"Context")+".Consumer";case cu:return(e._context.displayName||"Context")+".Provider";case Oi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $i:return t=e.displayName||null,t!==null?t:_o(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return _o(e(t))}catch{}}return null}function sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _o(t);case 8:return t===_i?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function up(e){var t=fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=up(e))}function hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mu(e,t){t=t.checked,t!=null&&Fi(e,"checked",t,!1)}function $o(e,t){mu(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Un(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function gu(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cp=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){cp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var dp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(e,t){if(t){if(dp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,mn=null,gn=null;function Aa(e){if(e=Sr(e)){if(typeof Ho!="function")throw Error(z(280));var t=e.stateNode;t&&(t=$l(t),Ho(e.stateNode,e.type,t))}}function ku(e){mn?gn?gn.push(e):gn=[e]:mn=e}function Su(){if(mn){var e=mn,t=gn;if(gn=mn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function ju(e,t){return e(t)}function Cu(){}var no=!1;function Eu(e,t,n){if(no)return e(t,n);no=!0;try{return ju(e,t,n)}finally{no=!1,(mn!==null||gn!==null)&&(Cu(),Su())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Vo=!1;if(at)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Vo=!1}function pp(e,t,n,r,l,o,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Yn=!1,al=null,sl=!1,Qo=null,fp={onError:function(e){Yn=!0,al=e}};function hp(e,t,n,r,l,o,i,s,u){Yn=!1,al=null,pp.apply(fp,arguments)}function mp(e,t,n,r,l,o,i,s,u){if(hp.apply(this,arguments),Yn){if(Yn){var c=al;Yn=!1,al=null}else throw Error(z(198));sl||(sl=!0,Qo=c)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ba(e){if(Gt(e)!==e)throw Error(z(188))}function gp(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ba(l),e;if(o===r)return Ba(l),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function zu(e){return e=gp(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ru(e);if(t!==null)return t;e=e.sibling}return null}var Pu=Re.unstable_scheduleCallback,Wa=Re.unstable_cancelCallback,xp=Re.unstable_shouldYield,yp=Re.unstable_requestPaint,ee=Re.unstable_now,vp=Re.unstable_getCurrentPriorityLevel,Di=Re.unstable_ImmediatePriority,Nu=Re.unstable_UserBlockingPriority,ul=Re.unstable_NormalPriority,wp=Re.unstable_LowPriority,Tu=Re.unstable_IdlePriority,Il=null,Ze=null;function kp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Cp,Sp=Math.log,jp=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(Sp(e)/jp|0)|0}var Lr=64,Ir=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Hn(s):(o&=i,o!==0&&(r=Hn(o)))}else i=n&~l,i!==0?r=Hn(i):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function Ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ue(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=Ep(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function ro(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function zp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Ai(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,Bi,_u,Ou,$u,Ko=!1,Fr=[],wt=null,kt=null,St=null,lr=new Map,or=new Map,gt=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function _n(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Sr(t),t!==null&&Bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Pp(e,t,n,r,l){switch(t){case"focusin":return wt=_n(wt,e,t,n,r,l),!0;case"dragenter":return kt=_n(kt,e,t,n,r,l),!0;case"mouseover":return St=_n(St,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return lr.set(o,_n(lr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,or.set(o,_n(or.get(o)||null,e,t,n,r,l)),!0}return!1}function Mu(e){var t=Mt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,$u(e.priority,function(){_u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uo=r,n.target.dispatchEvent(r),Uo=null}else return t=Sr(n),t!==null&&Bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ha(e,t,n){Kr(e)&&n.delete(t)}function Np(){Ko=!1,wt!==null&&Kr(wt)&&(wt=null),kt!==null&&Kr(kt)&&(kt=null),St!==null&&Kr(St)&&(St=null),lr.forEach(Ha),or.forEach(Ha)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Np)))}function ir(e){function t(l){return On(l,e)}if(0<Fr.length){On(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&On(wt,e),kt!==null&&On(kt,e),St!==null&&On(St,e),lr.forEach(t),or.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Mu(n),n.blockedOn===null&&gt.shift()}var xn=pt.ReactCurrentBatchConfig,dl=!0;function Tp(e,t,n,r){var l=A,o=xn.transition;xn.transition=null;try{A=1,Wi(e,t,n,r)}finally{A=l,xn.transition=o}}function Lp(e,t,n,r){var l=A,o=xn.transition;xn.transition=null;try{A=4,Wi(e,t,n,r)}finally{A=l,xn.transition=o}}function Wi(e,t,n,r){if(dl){var l=Go(e,t,n,r);if(l===null)ho(e,t,r,pl,n),Ua(e,r);else if(Pp(l,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<Rp.indexOf(e)){for(;l!==null;){var o=Sr(l);if(o!==null&&Fu(o),o=Go(e,t,n,r),o===null&&ho(e,t,r,pl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ho(e,t,r,null,n)}}var pl=null;function Go(e,t,n,r){if(pl=null,e=Mi(r),e=Mt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case Di:return 1;case Nu:return 4;case ul:case wp:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var yt=null,Ui=null,Gr=null;function Au(){if(Gr)return Gr;var e,t=Ui,n=t.length,r,l="value"in yt?yt.value:yt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Gr=l.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Va(){return!1}function Ne(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:Va,this.isPropagationStopped=Va,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Ne(Rn),kr=X({},Rn,{view:0,detail:0}),Ip=Ne(kr),lo,oo,$n,Fl=X({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(lo=e.screenX-$n.screenX,oo=e.screenY-$n.screenY):oo=lo=0,$n=e),lo)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),Qa=Ne(Fl),Fp=X({},Fl,{dataTransfer:0}),_p=Ne(Fp),Op=X({},kr,{relatedTarget:0}),io=Ne(Op),$p=X({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=Ne($p),Dp=X({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ap=Ne(Dp),Bp=X({},Rn,{data:0}),Ya=Ne(Bp),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hp[e])?!!t[e]:!1}function Vi(){return Vp}var Qp=X({},kr,{key:function(e){if(e.key){var t=Wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=Ne(Qp),Kp=X({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ka=Ne(Kp),Gp=X({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),Xp=Ne(Gp),qp=X({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=Ne(qp),Jp=X({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ef=Ne(Jp),tf=[9,13,27,32],Qi=at&&"CompositionEvent"in window,Kn=null;at&&"documentMode"in document&&(Kn=document.documentMode);var nf=at&&"TextEvent"in window&&!Kn,Bu=at&&(!Qi||Kn&&8<Kn&&11>=Kn),Ga=" ",Xa=!1;function Wu(e,t){switch(e){case"keyup":return tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function rf(e,t){switch(e){case"compositionend":return Uu(t);case"keypress":return t.which!==32?null:(Xa=!0,Ga);case"textInput":return e=t.data,e===Ga&&Xa?null:e;default:return null}}function lf(e,t){if(rn)return e==="compositionend"||!Qi&&Wu(e,t)?(e=Au(),Gr=Ui=yt=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bu&&t.locale!=="ko"?null:t.data;default:return null}}var of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!of[e.type]:t==="textarea"}function Hu(e,t,n,r){ku(r),t=fl(t,"onChange"),0<t.length&&(n=new Hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,ar=null;function af(e){tc(e,0)}function _l(e){var t=an(e);if(hu(t))return e}function sf(e,t){if(e==="change")return t}var Vu=!1;if(at){var ao;if(at){var so="oninput"in document;if(!so){var Za=document.createElement("div");Za.setAttribute("oninput","return;"),so=typeof Za.oninput=="function"}ao=so}else ao=!1;Vu=ao&&(!document.documentMode||9<document.documentMode)}function Ja(){Gn&&(Gn.detachEvent("onpropertychange",Qu),ar=Gn=null)}function Qu(e){if(e.propertyName==="value"&&_l(ar)){var t=[];Hu(t,ar,e,Mi(e)),Eu(af,t)}}function uf(e,t,n){e==="focusin"?(Ja(),Gn=t,ar=n,Gn.attachEvent("onpropertychange",Qu)):e==="focusout"&&Ja()}function cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(ar)}function df(e,t){if(e==="click")return _l(t)}function pf(e,t){if(e==="input"||e==="change")return _l(t)}function ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:ff;function sr(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!To.call(t,l)||!Qe(e[l],t[l]))return!1}return!0}function es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,t){var n=es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=es(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=Ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yu(n.ownerDocument.documentElement,n)){if(r!==null&&Yi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ts(n,o);var i=ts(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mf=at&&"documentMode"in document&&11>=document.documentMode,ln=null,Xo=null,Xn=null,qo=!1;function ns(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qo||ln==null||ln!==il(r)||(r=ln,"selectionStart"in r&&Yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&sr(Xn,r)||(Xn=r,r=fl(Xo,"onSelect"),0<r.length&&(t=new Hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ln)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var on={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},uo={},Gu={};at&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Ol(e){if(uo[e])return uo[e];if(!on[e])return e;var t=on[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gu)return uo[e]=t[n];return e}var Xu=Ol("animationend"),qu=Ol("animationiteration"),Zu=Ol("animationstart"),Ju=Ol("transitionend"),ec=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){ec.set(e,t),Kt(t,[e])}for(var co=0;co<rs.length;co++){var po=rs[co],gf=po.toLowerCase(),xf=po[0].toUpperCase()+po.slice(1);Nt(gf,"on"+xf)}Nt(Xu,"onAnimationEnd");Nt(qu,"onAnimationIteration");Nt(Zu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(Ju,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mp(r,t,void 0,e),e.currentTarget=null}function tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;ls(l,s,c),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;ls(l,s,c),o=u}}}if(sl)throw e=Qo,sl=!1,Qo=null,e}function U(e,t){var n=t[ni];n===void 0&&(n=t[ni]=new Set);var r=e+"__bubble";n.has(r)||(nc(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),nc(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[$r]){e[$r]=!0,uu.forEach(function(n){n!=="selectionchange"&&(yf.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$r]||(t[$r]=!0,fo("selectionchange",!1,t))}}function nc(e,t,n,r){switch(Du(t)){case 1:var l=Tp;break;case 4:l=Lp;break;default:l=Wi}n=l.bind(null,t,n,e),l=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ho(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Mt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Eu(function(){var c=o,h=Mi(n),f=[];e:{var g=ec.get(e);if(g!==void 0){var k=Hi,y=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":k=Yp;break;case"focusin":y="focus",k=io;break;case"focusout":y="blur",k=io;break;case"beforeblur":case"afterblur":k=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Xp;break;case Xu:case qu:case Zu:k=Mp;break;case Ju:k=Zp;break;case"scroll":k=Ip;break;case"wheel":k=ef;break;case"copy":case"cut":case"paste":k=Ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ka}var v=(t&4)!==0,C=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,m;d!==null;){m=d;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,p!==null&&(j=rr(d,p),j!=null&&v.push(cr(d,j,m)))),C)break;d=d.return}0<v.length&&(g=new k(g,y,null,n,h),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Uo&&(y=n.relatedTarget||n.fromElement)&&(Mt(y)||y[st]))break e;if((k||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?Mt(y):null,y!==null&&(C=Gt(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(v=Qa,j="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ka,j="onPointerLeave",p="onPointerEnter",d="pointer"),C=k==null?g:an(k),m=y==null?g:an(y),g=new v(j,d+"leave",k,n,h),g.target=C,g.relatedTarget=m,j=null,Mt(h)===c&&(v=new v(p,d+"enter",y,n,h),v.target=m,v.relatedTarget=C,j=v),C=j,k&&y)t:{for(v=k,p=y,d=0,m=v;m;m=Jt(m))d++;for(m=0,j=p;j;j=Jt(j))m++;for(;0<d-m;)v=Jt(v),d--;for(;0<m-d;)p=Jt(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Jt(v),p=Jt(p)}v=null}else v=null;k!==null&&os(f,g,k,v,!1),y!==null&&C!==null&&os(f,C,y,v,!0)}}e:{if(g=c?an(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var b=sf;else if(qa(g))if(Vu)b=pf;else{b=cf;var E=uf}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=df);if(b&&(b=b(e,c))){Hu(f,b,n,h);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Mo(g,"number",g.value)}switch(E=c?an(c):window,e){case"focusin":(qa(E)||E.contentEditable==="true")&&(ln=E,Xo=c,Xn=null);break;case"focusout":Xn=Xo=ln=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,ns(f,n,h);break;case"selectionchange":if(mf)break;case"keydown":case"keyup":ns(f,n,h)}var R;if(Qi)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else rn?Wu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Bu&&n.locale!=="ko"&&(rn||L!=="onCompositionStart"?L==="onCompositionEnd"&&rn&&(R=Au()):(yt=h,Ui="value"in yt?yt.value:yt.textContent,rn=!0)),E=fl(c,L),0<E.length&&(L=new Ya(L,e,null,n,h),f.push({event:L,listeners:E}),R?L.data=R:(R=Uu(n),R!==null&&(L.data=R)))),(R=nf?rf(e,n):lf(e,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(h=new Ya("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=R))}tc(f,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=rr(e,n),o!=null&&r.unshift(cr(e,o,l)),o=rr(e,t),o!=null&&r.push(cr(e,o,l))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function os(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=rr(n,o),u!=null&&i.unshift(cr(n,u,s))):l||(u=rr(n,o),u!=null&&i.push(cr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var vf=/\r\n?/g,wf=/\u0000|\uFFFD/g;function is(e){return(typeof e=="string"?e:""+e).replace(vf,`
`).replace(wf,"")}function Mr(e,t,n){if(t=is(t),is(e)!==t&&n)throw Error(z(425))}function hl(){}var Zo=null,Jo=null;function ei(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ti=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,as=typeof Promise=="function"?Promise:void 0,Sf=typeof queueMicrotask=="function"?queueMicrotask:typeof as<"u"?function(e){return as.resolve(null).then(e).catch(jf)}:ti;function jf(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ir(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Pn,dr="__reactProps$"+Pn,st="__reactContainer$"+Pn,ni="__reactEvents$"+Pn,Cf="__reactListeners$"+Pn,Ef="__reactHandles$"+Pn;function Mt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ss(e);e!==null;){if(n=e[qe])return n;e=ss(e)}return t}e=n,n=e.parentNode}return null}function Sr(e){return e=e[qe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function $l(e){return e[dr]||null}var ri=[],sn=-1;function Tt(e){return{current:e}}function H(e){0>sn||(e.current=ri[sn],ri[sn]=null,sn--)}function W(e,t){sn++,ri[sn]=e.current,e.current=t}var Pt={},he=Tt(Pt),ke=Tt(!1),Ut=Pt;function kn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Se(e){return e=e.childContextTypes,e!=null}function ml(){H(ke),H(he)}function us(e,t,n){if(he.current!==Pt)throw Error(z(168));W(he,t),W(ke,n)}function rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(z(108,sp(e)||"Unknown",l));return X({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ut=he.current,W(he,e),W(ke,ke.current),!0}function cs(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=rc(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(he),W(he,e)):H(ke),W(ke,n)}var rt=null,Ml=!1,go=!1;function lc(e){rt===null?rt=[e]:rt.push(e)}function bf(e){Ml=!0,lc(e)}function Lt(){if(!go&&rt!==null){go=!0;var e=0,t=A;try{var n=rt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Ml=!1}catch(l){throw rt!==null&&(rt=rt.slice(e+1)),Pu(Di,Lt),l}finally{A=t,go=!1}}return null}var un=[],cn=0,xl=null,yl=0,Te=[],Le=0,Ht=null,lt=1,ot="";function _t(e,t){un[cn++]=yl,un[cn++]=xl,xl=e,yl=t}function oc(e,t,n){Te[Le++]=lt,Te[Le++]=ot,Te[Le++]=Ht,Ht=e;var r=lt;e=ot;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var o=32-Ue(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,lt=1<<32-Ue(t)+l|n<<l|r,ot=o+e}else lt=1<<o|n<<l|r,ot=e}function Ki(e){e.return!==null&&(_t(e,1),oc(e,1,0))}function Gi(e){for(;e===xl;)xl=un[--cn],un[cn]=null,yl=un[--cn],un[cn]=null;for(;e===Ht;)Ht=Te[--Le],Te[Le]=null,ot=Te[--Le],Te[Le]=null,lt=Te[--Le],Te[Le]=null}var ze=null,be=null,Q=!1,We=null;function ic(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ds(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,be=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:lt,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,be=null,!0):!1;default:return!1}}function li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oi(e){if(Q){var t=be;if(t){var n=t;if(!ds(e,t)){if(li(e))throw Error(z(418));t=jt(n.nextSibling);var r=ze;t&&ds(e,t)?ic(r,n):(e.flags=e.flags&-4097|2,Q=!1,ze=e)}}else{if(li(e))throw Error(z(418));e.flags=e.flags&-4097|2,Q=!1,ze=e}}}function ps(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Dr(e){if(e!==ze)return!1;if(!Q)return ps(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ei(e.type,e.memoizedProps)),t&&(t=be)){if(li(e))throw ac(),Error(z(418));for(;t;)ic(e,t),t=jt(t.nextSibling)}if(ps(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=ze?jt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=be;e;)e=jt(e.nextSibling)}function Sn(){be=ze=null,Q=!1}function Xi(e){We===null?We=[e]:We.push(e)}var zf=pt.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fs(e){var t=e._init;return t(e._payload)}function sc(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=zt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,j){return d===null||d.tag!==6?(d=jo(m,p.mode,j),d.return=p,d):(d=l(d,m),d.return=p,d)}function u(p,d,m,j){var b=m.type;return b===nn?h(p,d,m.props.children,j,m.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ht&&fs(b)===d.type)?(j=l(d,m.props),j.ref=Mn(p,d,m),j.return=p,j):(j=rl(m.type,m.key,m.props,null,p.mode,j),j.ref=Mn(p,d,m),j.return=p,j)}function c(p,d,m,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Co(m,p.mode,j),d.return=p,d):(d=l(d,m.children||[]),d.return=p,d)}function h(p,d,m,j,b){return d===null||d.tag!==7?(d=Wt(m,p.mode,j,b),d.return=p,d):(d=l(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=jo(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return m=rl(d.type,d.key,d.props,null,p.mode,m),m.ref=Mn(p,null,d),m.return=p,m;case tn:return d=Co(d,p.mode,m),d.return=p,d;case ht:var j=d._init;return f(p,j(d._payload),m)}if(Un(d)||In(d))return d=Wt(d,p.mode,m,null),d.return=p,d;Ar(p,d)}return null}function g(p,d,m,j){var b=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(p,d,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pr:return m.key===b?u(p,d,m,j):null;case tn:return m.key===b?c(p,d,m,j):null;case ht:return b=m._init,g(p,d,b(m._payload),j)}if(Un(m)||In(m))return b!==null?null:h(p,d,m,j,null);Ar(p,m)}return null}function k(p,d,m,j,b){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(m)||null,s(d,p,""+j,b);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Pr:return p=p.get(j.key===null?m:j.key)||null,u(d,p,j,b);case tn:return p=p.get(j.key===null?m:j.key)||null,c(d,p,j,b);case ht:var E=j._init;return k(p,d,m,E(j._payload),b)}if(Un(j)||In(j))return p=p.get(m)||null,h(d,p,j,b,null);Ar(d,j)}return null}function y(p,d,m,j){for(var b=null,E=null,R=d,L=d=0,D=null;R!==null&&L<m.length;L++){R.index>L?(D=R,R=null):D=R.sibling;var F=g(p,R,m[L],j);if(F===null){R===null&&(R=D);break}e&&R&&F.alternate===null&&t(p,R),d=o(F,d,L),E===null?b=F:E.sibling=F,E=F,R=D}if(L===m.length)return n(p,R),Q&&_t(p,L),b;if(R===null){for(;L<m.length;L++)R=f(p,m[L],j),R!==null&&(d=o(R,d,L),E===null?b=R:E.sibling=R,E=R);return Q&&_t(p,L),b}for(R=r(p,R);L<m.length;L++)D=k(R,p,L,m[L],j),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?L:D.key),d=o(D,d,L),E===null?b=D:E.sibling=D,E=D);return e&&R.forEach(function(ce){return t(p,ce)}),Q&&_t(p,L),b}function v(p,d,m,j){var b=In(m);if(typeof b!="function")throw Error(z(150));if(m=b.call(m),m==null)throw Error(z(151));for(var E=b=null,R=d,L=d=0,D=null,F=m.next();R!==null&&!F.done;L++,F=m.next()){R.index>L?(D=R,R=null):D=R.sibling;var ce=g(p,R,F.value,j);if(ce===null){R===null&&(R=D);break}e&&R&&ce.alternate===null&&t(p,R),d=o(ce,d,L),E===null?b=ce:E.sibling=ce,E=ce,R=D}if(F.done)return n(p,R),Q&&_t(p,L),b;if(R===null){for(;!F.done;L++,F=m.next())F=f(p,F.value,j),F!==null&&(d=o(F,d,L),E===null?b=F:E.sibling=F,E=F);return Q&&_t(p,L),b}for(R=r(p,R);!F.done;L++,F=m.next())F=k(R,p,L,F.value,j),F!==null&&(e&&F.alternate!==null&&R.delete(F.key===null?L:F.key),d=o(F,d,L),E===null?b=F:E.sibling=F,E=F);return e&&R.forEach(function(q){return t(p,q)}),Q&&_t(p,L),b}function C(p,d,m,j){if(typeof m=="object"&&m!==null&&m.type===nn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Pr:e:{for(var b=m.key,E=d;E!==null;){if(E.key===b){if(b=m.type,b===nn){if(E.tag===7){n(p,E.sibling),d=l(E,m.props.children),d.return=p,p=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ht&&fs(b)===E.type){n(p,E.sibling),d=l(E,m.props),d.ref=Mn(p,E,m),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}m.type===nn?(d=Wt(m.props.children,p.mode,j,m.key),d.return=p,p=d):(j=rl(m.type,m.key,m.props,null,p.mode,j),j.ref=Mn(p,d,m),j.return=p,p=j)}return i(p);case tn:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=l(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Co(m,p.mode,j),d.return=p,p=d}return i(p);case ht:return E=m._init,C(p,d,E(m._payload),j)}if(Un(m))return y(p,d,m,j);if(In(m))return v(p,d,m,j);Ar(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,m),d.return=p,p=d):(n(p,d),d=jo(m,p.mode,j),d.return=p,p=d),i(p)):n(p,d)}return C}var jn=sc(!0),uc=sc(!1),vl=Tt(null),wl=null,dn=null,qi=null;function Zi(){qi=dn=wl=null}function Ji(e){var t=vl.current;H(vl),e._currentValue=t}function ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yn(e,t){wl=e,qi=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(qi!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(wl===null)throw Error(z(308));dn=e,wl.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var Dt=null;function ea(e){Dt===null?Dt=[e]:Dt.push(e)}function cc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ea(t)):(n.next=l.next,l.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ut(e,n)}return l=r.interleaved,l===null?(t.next=t,ea(r)):(t.next=l.next,l.next=t),r.interleaved=t,ut(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ai(e,n)}}function hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var l=e.updateQueue;mt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=l.baseState;i=0,h=c=u=null,s=o;do{var g=s.lane,k=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,k=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(k,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(k,f,g):y,g==null)break e;f=X({},f,g);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=k,u=f):h=h.next=k,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(u=f),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Qt|=i,e.lanes=i,e.memoizedState=f}}function ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(z(191,l));l.call(r)}}}var jr={},Je=Tt(jr),pr=Tt(jr),fr=Tt(jr);function At(e){if(e===jr)throw Error(z(174));return e}function na(e,t){switch(W(fr,t),W(pr,e),W(Je,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ao(t,e)}H(Je),W(Je,t)}function Cn(){H(Je),H(pr),H(fr)}function pc(e){At(fr.current);var t=At(Je.current),n=Ao(t,e.type);t!==n&&(W(pr,e),W(Je,n))}function ra(e){pr.current===e&&(H(Je),H(pr))}var Y=Tt(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function la(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var Zr=pt.ReactCurrentDispatcher,yo=pt.ReactCurrentBatchConfig,Vt=0,K=null,ne=null,le=null,jl=!1,qn=!1,hr=0,Rf=0;function de(){throw Error(z(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,l,o){if(Vt=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Lf:If,e=n(r,l),qn){o=0;do{if(qn=!1,hr=0,25<=o)throw Error(z(301));o+=1,le=ne=null,t.updateQueue=null,Zr.current=Ff,e=n(r,l)}while(qn)}if(Zr.current=Cl,t=ne!==null&&ne.next!==null,Vt=0,le=ne=K=null,jl=!1,t)throw Error(z(300));return e}function aa(){var e=hr!==0;return hr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function Oe(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(z(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function mr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,c=o;do{var h=c.lane;if((Vt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=f,i=r):u=u.next=f,K.lanes|=h,Qt|=h}c=c.next}while(c!==null&&c!==o);u===null?i=r:u.next=s,Qe(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,K.lanes|=o,Qt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Qe(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fc(){}function hc(e,t){var n=K,r=Oe(),l=t(),o=!Qe(r.memoizedState,l);if(o&&(r.memoizedState=l,we=!0),r=r.queue,sa(xc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,gr(9,gc.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(z(349));Vt&30||mc(n,t,l)}return l}function mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&vc(e)}function xc(e,t,n){return n(function(){yc(t)&&vc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function vc(e){var t=ut(e,1);t!==null&&He(t,e,1,-1)}function gs(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,K,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wc(){return Oe().memoizedState}function Jr(e,t,n,r){var l=Xe();K.flags|=e,l.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function Dl(e,t,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(ne!==null){var i=ne.memoizedState;if(o=i.destroy,r!==null&&oa(r,i.deps)){l.memoizedState=gr(t,n,o,r);return}}K.flags|=e,l.memoizedState=gr(1|t,n,o,r)}function xs(e,t){return Jr(8390656,8,e,t)}function sa(e,t){return Dl(2048,8,e,t)}function kc(e,t){return Dl(4,2,e,t)}function Sc(e,t){return Dl(4,4,e,t)}function jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4,4,jc.bind(null,t,e),n)}function ua(){}function Ec(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return Vt&21?(Qe(n,t)||(n=Lu(),K.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Pf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=yo.transition;yo.transition={};try{e(!1),t()}finally{A=n,yo.transition=r}}function Rc(){return Oe().memoizedState}function Nf(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pc(e))Nc(t,n);else if(n=cc(e,t,n,r),n!==null){var l=ge();He(n,e,r,l),Tc(n,t,r)}}function Tf(e,t,n){var r=bt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Nc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Qe(s,i)){var u=t.interleaved;u===null?(l.next=l,ea(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=cc(e,t,l,r),n!==null&&(l=ge(),He(n,e,r,l),Tc(n,t,r))}}function Pc(e){var t=e.alternate;return e===K||t!==null&&t===K}function Nc(e,t){qn=jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ai(e,n)}}var Cl={readContext:_e,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Lf={readContext:_e,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:gs,useDebugValue:ua,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=gs(!1),t=e[0];return e=Pf.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=Xe();if(Q){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),oe===null)throw Error(z(349));Vt&30||mc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,xs(xc.bind(null,r,o,e),[e]),r.flags|=2048,gr(9,gc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=oe.identifierPrefix;if(Q){var n=ot,r=lt;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},If={readContext:_e,useCallback:Ec,useContext:_e,useEffect:sa,useImperativeHandle:Cc,useInsertionEffect:kc,useLayoutEffect:Sc,useMemo:bc,useReducer:vo,useRef:wc,useState:function(){return vo(mr)},useDebugValue:ua,useDeferredValue:function(e){var t=Oe();return zc(t,ne.memoizedState,e)},useTransition:function(){var e=vo(mr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:fc,useSyncExternalStore:hc,useId:Rc,unstable_isNewReconciler:!1},Ff={readContext:_e,useCallback:Ec,useContext:_e,useEffect:sa,useImperativeHandle:Cc,useInsertionEffect:kc,useLayoutEffect:Sc,useMemo:bc,useReducer:wo,useRef:wc,useState:function(){return wo(mr)},useDebugValue:ua,useDeferredValue:function(e){var t=Oe();return ne===null?t.memoizedState=e:zc(t,ne.memoizedState,e)},useTransition:function(){var e=wo(mr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:fc,useSyncExternalStore:hc,useId:Rc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ai(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=bt(e),o=it(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ct(e,o,l),t!==null&&(He(t,e,l,r),qr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=bt(e),o=it(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ct(e,o,l),t!==null&&(He(t,e,l,r),qr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=bt(e),l=it(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ct(e,l,r),t!==null&&(He(t,e,r,n),qr(t,e,r))}};function ys(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(l,o):!0}function Lc(e,t,n){var r=!1,l=Pt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=Se(t)?Ut:he.current,r=t.contextTypes,o=(r=r!=null)?kn(e,l):Pt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function vs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function si(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ta(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=Se(t)?Ut:he.current,l.context=kn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ai(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Al.enqueueReplaceState(l,l.state,null),kl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=ap(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ui(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bl||(bl=!0,vi=r),ui(e,t)},n}function Fc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ui(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ui(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ws(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _f;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Gf.bind(null,e,t,n),t.then(e,e))}function ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ss(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Ct(n,t,1))),n.lanes|=1),e)}var Of=pt.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?uc(t,null,n,r):jn(t,e.child,n,r)}function js(e,t,n,r,l){n=n.render;var o=t.ref;return yn(t,l),r=ia(e,t,n,r,o,l),n=aa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(Q&&n&&Ki(t),t.flags|=1,me(e,t,r,l),t.child)}function Cs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!xa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_c(e,t,o,r,l)):(e=rl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return ct(e,t,l)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function _c(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ct(e,t,l)}return ci(e,t,n,r,l)}function Oc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(fn,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(fn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(fn,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(fn,Ee),Ee|=r;return me(e,t,l,n),t.child}function $c(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ci(e,t,n,r,l){var o=Se(n)?Ut:he.current;return o=kn(t,o),yn(t,l),n=ia(e,t,n,r,o,l),r=aa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(Q&&r&&Ki(t),t.flags|=1,me(e,t,n,l),t.child)}function Es(e,t,n,r,l){if(Se(n)){var o=!0;gl(t)}else o=!1;if(yn(t,l),t.stateNode===null)el(e,t),Lc(t,n,r),si(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=Se(n)?Ut:he.current,c=kn(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==c)&&vs(t,i,r,c),mt=!1;var g=t.memoizedState;i.state=g,kl(t,r,i,l),u=t.memoizedState,s!==r||g!==u||ke.current||mt?(typeof h=="function"&&(ai(t,n,h,r),u=t.memoizedState),(s=mt||ys(t,n,s,r,g,u,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,dc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ae(t.type,s),i.props=c,f=t.pendingProps,g=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=Se(n)?Ut:he.current,u=kn(t,u));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||g!==u)&&vs(t,i,r,u),mt=!1,g=t.memoizedState,i.state=g,kl(t,r,i,l);var y=t.memoizedState;s!==f||g!==y||ke.current||mt?(typeof k=="function"&&(ai(t,n,k,r),y=t.memoizedState),(c=mt||ys(t,n,c,r,g,y,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return di(e,t,n,r,o,l)}function di(e,t,n,r,l,o){$c(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&cs(t,n,!1),ct(e,t,o);r=t.stateNode,Of.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=jn(t,e.child,null,o),t.child=jn(t,null,s,o)):me(e,t,s,o),t.memoizedState=r.state,l&&cs(t,n,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&us(e,t.context,!1),na(e,t.containerInfo)}function bs(e,t,n,r,l){return Sn(),Xi(l),t.flags|=256,me(e,t,n,r),t.child}var pi={dehydrated:null,treeContext:null,retryLane:0};function fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dc(e,t,n){var r=t.pendingProps,l=Y.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(Y,l&1),e===null)return oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ul(i,r,0,null),e=Wt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fi(n),t.memoizedState=pi,e):ca(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return $f(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=zt(s,o):(o=Wt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?fi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=pi,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ca(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Xi(r),jn(t,e.child,null,n),e=ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ko(Error(z(422))),Br(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),o=Wt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jn(t,e.child,null,i),t.child.memoizedState=fi(i),t.memoizedState=pi,o);if(!(t.mode&1))return Br(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(z(419)),r=ko(o,r,void 0),Br(e,t,i,r)}if(s=(i&e.childLanes)!==0,we||s){if(r=oe,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,ut(e,l),He(r,e,l,-1))}return ga(),r=ko(Error(z(421))),Br(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Xf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,be=jt(l.nextSibling),ze=t,Q=!0,We=null,e!==null&&(Te[Le++]=lt,Te[Le++]=ot,Te[Le++]=Ht,lt=e.id,ot=e.overflow,Ht=t),t=ca(t,r.children),t.flags|=4096,t)}function zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ii(e.return,t,n)}function So(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Ac(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zs(e,n,t);else if(e.tag===19)zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),So(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}So(t,!0,n,null,o);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mf(e,t,n){switch(t.tag){case 3:Mc(t),Sn();break;case 5:pc(t);break;case 1:Se(t.type)&&gl(t);break;case 4:na(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;W(vl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Dc(e,t,n):(W(Y,Y.current&1),e=ct(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ac(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Oc(e,t,n)}return ct(e,t,n)}var Bc,hi,Wc,Uc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hi=function(){};Wc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,At(Je.current);var o=null;switch(n){case"input":l=Oo(e,l),r=Oo(e,r),o=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":l=Do(e,l),r=Do(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}Bo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Df(e,t,n){var r=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Se(t.type)&&ml(),pe(t),null;case 3:return r=t.stateNode,Cn(),H(ke),H(he),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Si(We),We=null))),hi(e,t),pe(t),null;case 5:ra(t);var l=At(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return pe(t),null}if(e=At(Je.current),Dr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[dr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Vn.length;l++)U(Vn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Oa(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Ma(r,o),U("invalid",r)}Bo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,s,e),l=["children",""+s]):tr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":Nr(r),$a(r,o,!0);break;case"textarea":Nr(r),Da(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[qe]=t,e[dr]=r,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Wo(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vn.length;l++)U(Vn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Oa(e,r),l=Oo(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ma(e,r),l=Do(e,r),U("invalid",e);break;default:l=r}Bo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?wu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nr(e,u):typeof u=="number"&&nr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(tr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&U("scroll",e):u!=null&&Fi(e,o,u,i))}switch(n){case"input":Nr(e),$a(e,r,!1);break;case"textarea":Nr(e),Da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=At(fr.current),At(Je.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return pe(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&be!==null&&t.mode&1&&!(t.flags&128))ac(),Sn(),t.flags|=98560,o=!1;else if(o=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[qe]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else We!==null&&(Si(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):ga())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Cn(),hi(e,t),e===null&&ur(t.stateNode.containerInfo),pe(t),null;case 10:return Ji(t.type._context),pe(t),null;case 17:return Se(t.type)&&ml(),pe(t),null;case 19:if(H(Y),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Dn(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Sl(e),i!==null){for(t.flags|=128,Dn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&ee()>bn&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Q)return pe(t),null}else 2*ee()-o.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Af(e,t){switch(Gi(t),t.tag){case 1:return Se(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(),H(ke),H(he),la(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ra(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return Cn(),null;case 10:return Ji(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var Wr=!1,fe=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,T=null;function pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function mi(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Rs=!1;function Wf(e,t){if(Zo=dl,e=Ku(),Yi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var k;f!==n||l!==0&&f.nodeType!==3||(s=i+l),f!==o||r!==0&&f.nodeType!==3||(u=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(k=f.firstChild)!==null;)g=f,f=k;for(;;){if(f===e)break t;if(g===n&&++c===l&&(s=i),g===o&&++h===r&&(u=i),(k=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jo={focusedElem:e,selectionRange:n},dl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ae(t.type,v),C);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(j){Z(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=Rs,Rs=!1,y}function Zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&mi(t,n,o)}l=l.next}while(l!==r)}}function Bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[dr],delete t[ni],delete t[Cf],delete t[Ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for(xi(e,t,n),e=e.sibling;e!==null;)xi(e,t,n),e=e.sibling}function yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}var ie=null,Be=!1;function ft(e,t,n){for(n=n.child;n!==null;)Qc(e,t,n),n=n.sibling}function Qc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:fe||pn(n,t);case 6:var r=ie,l=Be;ie=null,ft(e,t,n),ie=r,Be=l,ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),ir(e)):mo(ie,n.stateNode));break;case 4:r=ie,l=Be,ie=n.stateNode.containerInfo,Be=!0,ft(e,t,n),ie=r,Be=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&mi(n,t,i),l=l.next}while(l!==r)}ft(e,t,n);break;case 1:if(!fe&&(pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ft(e,t,n),fe=r):ft(e,t,n);break;default:ft(e,t,n)}}function Ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bf),t.forEach(function(r){var l=qf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Be=!1;break e;case 3:ie=s.stateNode.containerInfo,Be=!0;break e;case 4:ie=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ie===null)throw Error(z(160));Qc(o,i,l),ie=null,Be=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){Z(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yc(t,e),t=t.sibling}function Yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ge(e),r&4){try{Zn(3,e,e.return),Bl(3,e)}catch(v){Z(e,e.return,v)}try{Zn(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:De(t,e),Ge(e),r&512&&n!==null&&pn(n,n.return);break;case 5:if(De(t,e),Ge(e),r&512&&n!==null&&pn(n,n.return),e.flags&32){var l=e.stateNode;try{nr(l,"")}catch(v){Z(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&mu(l,o),Wo(s,i);var c=Wo(s,o);for(i=0;i<u.length;i+=2){var h=u[i],f=u[i+1];h==="style"?wu(l,f):h==="dangerouslySetInnerHTML"?yu(l,f):h==="children"?nr(l,f):Fi(l,h,f,c)}switch(s){case"input":$o(l,o);break;case"textarea":gu(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?hn(l,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?hn(l,!!o.multiple,o.defaultValue,!0):hn(l,!!o.multiple,o.multiple?[]:"",!1))}l[dr]=o}catch(v){Z(e,e.return,v)}}break;case 6:if(De(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(z(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(v){Z(e,e.return,v)}}break;case 3:if(De(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:De(t,e),Ge(e);break;case 13:De(t,e),Ge(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(fa=ee())),r&4&&Ns(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||h,De(t,e),fe=c):De(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(f=T=h;T!==null;){switch(g=T,k=g.child,g.tag){case 0:case 11:case 14:case 15:Zn(4,g,g.return);break;case 1:pn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:pn(g,g.return);break;case 22:if(g.memoizedState!==null){Ls(f);continue}}k!==null?(k.return=g,T=k):Ls(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{l=f.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,u=f.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=vu("display",i))}catch(v){Z(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Z(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:De(t,e),Ge(e),r&4&&Ns(e);break;case 21:break;default:De(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(nr(l,""),r.flags&=-33);var o=Ps(e);yi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ps(e);xi(e,s,i);break;default:throw Error(z(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e,t,n){T=e,Kc(e)}function Kc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Wr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||fe;s=Wr;var c=fe;if(Wr=i,(fe=u)&&!c)for(T=l;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?Is(l):u!==null?(u.return=i,T=u):Is(l);for(;o!==null;)T=o,Kc(o),o=o.sibling;T=l,Wr=s,fe=c}Ts(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Ts(e)}}function Ts(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ms(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ms(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ir(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}fe||t.flags&512&&gi(t)}catch(g){Z(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Ls(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Is(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bl(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Z(t,l,u)}}var o=t.return;try{gi(t)}catch(u){Z(t,o,u)}break;case 5:var i=t.return;try{gi(t)}catch(u){Z(t,i,u)}}}catch(u){Z(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Hf=Math.ceil,El=pt.ReactCurrentDispatcher,da=pt.ReactCurrentOwner,Fe=pt.ReactCurrentBatchConfig,M=0,oe=null,te=null,se=0,Ee=0,fn=Tt(0),re=0,xr=null,Qt=0,Wl=0,pa=0,Jn=null,ve=null,fa=0,bn=1/0,nt=null,bl=!1,vi=null,Et=null,Ur=!1,vt=null,zl=0,er=0,wi=null,tl=-1,nl=0;function ge(){return M&6?ee():tl!==-1?tl:tl=ee()}function bt(e){return e.mode&1?M&2&&se!==0?se&-se:zf.transition!==null?(nl===0&&(nl=Lu()),nl):(e=A,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function He(e,t,n,r){if(50<er)throw er=0,wi=null,Error(z(185));wr(e,n,r),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(Wl|=n),re===4&&xt(e,se)),je(e,r),n===1&&M===0&&!(t.mode&1)&&(bn=ee()+500,Ml&&Lt()))}function je(e,t){var n=e.callbackNode;bp(e,t);var r=cl(e,e===oe?se:0);if(r===0)n!==null&&Wa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wa(n),t===1)e.tag===0?bf(Fs.bind(null,e)):lc(Fs.bind(null,e)),Sf(function(){!(M&6)&&Lt()}),n=null;else{switch(Iu(r)){case 1:n=Di;break;case 4:n=Nu;break;case 16:n=ul;break;case 536870912:n=Tu;break;default:n=ul}n=nd(n,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gc(e,t){if(tl=-1,nl=0,M&6)throw Error(z(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=cl(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rl(e,r);else{t=r;var l=M;M|=2;var o=qc();(oe!==e||se!==t)&&(nt=null,bn=ee()+500,Bt(e,t));do try{Yf();break}catch(s){Xc(e,s)}while(!0);Zi(),El.current=o,M=l,te!==null?t=0:(oe=null,se=0,t=re)}if(t!==0){if(t===2&&(l=Yo(e),l!==0&&(r=l,t=ki(e,l))),t===1)throw n=xr,Bt(e,0),xt(e,r),je(e,ee()),n;if(t===6)xt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Vf(l)&&(t=Rl(e,r),t===2&&(o=Yo(e),o!==0&&(r=o,t=ki(e,o))),t===1))throw n=xr,Bt(e,0),xt(e,r),je(e,ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Ot(e,ve,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=fa+500-ee(),10<t)){if(cl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ti(Ot.bind(null,e,ve,nt),t);break}Ot(e,ve,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ue(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hf(r/1960))-r,10<r){e.timeoutHandle=ti(Ot.bind(null,e,ve,nt),r);break}Ot(e,ve,nt);break;case 5:Ot(e,ve,nt);break;default:throw Error(z(329))}}}return je(e,ee()),e.callbackNode===n?Gc.bind(null,e):null}function ki(e,t){var n=Jn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Rl(e,t),e!==2&&(t=ve,ve=n,t!==null&&Si(t)),e}function Si(e){ve===null?ve=e:ve.push.apply(ve,e)}function Vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Qe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~pa,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Fs(e){if(M&6)throw Error(z(327));vn();var t=cl(e,0);if(!(t&1))return je(e,ee()),null;var n=Rl(e,t);if(e.tag!==0&&n===2){var r=Yo(e);r!==0&&(t=r,n=ki(e,r))}if(n===1)throw n=xr,Bt(e,0),xt(e,t),je(e,ee()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,ve,nt),je(e,ee()),null}function ha(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(bn=ee()+500,Ml&&Lt())}}function Yt(e){vt!==null&&vt.tag===0&&!(M&6)&&vn();var t=M;M|=1;var n=Fe.transition,r=A;try{if(Fe.transition=null,A=1,e)return e()}finally{A=r,Fe.transition=n,M=t,!(M&6)&&Lt()}}function ma(){Ee=fn.current,H(fn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kf(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Cn(),H(ke),H(he),la();break;case 5:ra(r);break;case 4:Cn();break;case 13:H(Y);break;case 19:H(Y);break;case 10:Ji(r.type._context);break;case 22:case 23:ma()}n=n.return}if(oe=e,te=e=zt(e.current,null),se=Ee=t,re=0,xr=null,pa=Wl=Qt=0,ve=Jn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Dt=null}return e}function Xc(e,t){do{var n=te;try{if(Zi(),Zr.current=Cl,jl){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}jl=!1}if(Vt=0,le=ne=K=null,qn=!1,hr=0,da.current=null,n===null||n.return===null){re=1,xr=t,te=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=ks(i);if(k!==null){k.flags&=-257,Ss(k,i,s,o,t),k.mode&1&&ws(o,c,t),t=k,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){ws(o,c,t),ga();break e}u=Error(z(426))}}else if(Q&&s.mode&1){var C=ks(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ss(C,i,s,o,t),Xi(En(u,s));break e}}o=u=En(u,s),re!==4&&(re=2),Jn===null?Jn=[o]:Jn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ic(o,u,t);hs(o,p);break e;case 1:s=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Et===null||!Et.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=Fc(o,s,t);hs(o,j);break e}}o=o.return}while(o!==null)}Jc(n)}catch(b){t=b,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function qc(){var e=El.current;return El.current=Cl,e===null?Cl:e}function ga(){(re===0||re===3||re===2)&&(re=4),oe===null||!(Qt&268435455)&&!(Wl&268435455)||xt(oe,se)}function Rl(e,t){var n=M;M|=2;var r=qc();(oe!==e||se!==t)&&(nt=null,Bt(e,t));do try{Qf();break}catch(l){Xc(e,l)}while(!0);if(Zi(),M=n,El.current=r,te!==null)throw Error(z(261));return oe=null,se=0,re}function Qf(){for(;te!==null;)Zc(te)}function Yf(){for(;te!==null&&!xp();)Zc(te)}function Zc(e){var t=td(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Jc(e):te=t,da.current=null}function Jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Af(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Df(n,t,Ee),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Ot(e,t,n){var r=A,l=Fe.transition;try{Fe.transition=null,A=1,Kf(e,t,n,r)}finally{Fe.transition=l,A=r}return null}function Kf(e,t,n,r){do vn();while(vt!==null);if(M&6)throw Error(z(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zp(e,o),e===oe&&(te=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ur||(Ur=!0,nd(ul,function(){return vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var i=A;A=1;var s=M;M|=4,da.current=null,Wf(e,n),Yc(n,e),hf(Jo),dl=!!Zo,Jo=Zo=null,e.current=n,Uf(n),yp(),M=s,A=i,Fe.transition=o}else e.current=n;if(Ur&&(Ur=!1,vt=e,zl=l),o=e.pendingLanes,o===0&&(Et=null),kp(n.stateNode),je(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(bl)throw bl=!1,e=vi,vi=null,e;return zl&1&&e.tag!==0&&vn(),o=e.pendingLanes,o&1?e===wi?er++:(er=0,wi=e):er=0,Lt(),null}function vn(){if(vt!==null){var e=Iu(zl),t=Fe.transition,n=A;try{if(Fe.transition=null,A=16>e?16:e,vt===null)var r=!1;else{if(e=vt,vt=null,zl=0,M&6)throw Error(z(331));var l=M;for(M|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(T=c;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Zn(8,h,o)}var f=h.child;if(f!==null)f.return=h,T=f;else for(;T!==null;){h=T;var g=h.sibling,k=h.return;if(Hc(h),h===c){T=null;break}if(g!==null){g.return=k,T=g;break}T=k}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bl(9,s)}}catch(b){Z(s,s.return,b)}if(s===i){T=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,T=j;break e}T=s.return}}if(M=l,Lt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Il,e)}catch{}r=!0}return r}finally{A=n,Fe.transition=t}}return!1}function _s(e,t,n){t=En(n,t),t=Ic(e,t,1),e=Ct(e,t,1),t=ge(),e!==null&&(wr(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)_s(e,e,n);else for(;t!==null;){if(t.tag===3){_s(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=En(n,e),e=Fc(t,e,1),t=Ct(t,e,1),e=ge(),t!==null&&(wr(t,1,e),je(t,e));break}}t=t.return}}function Gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(re===4||re===3&&(se&130023424)===se&&500>ee()-fa?Bt(e,0):pa|=n),je(e,t)}function ed(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=ge();e=ut(e,t),e!==null&&(wr(e,t,n),je(e,n))}function Xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ed(e,n)}function qf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),ed(e,n)}var td;td=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Mf(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&oc(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;el(e,t),e=t.pendingProps;var l=kn(t,he.current);yn(t,n),l=ia(null,t,r,e,l,n);var o=aa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(o=!0,gl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ta(t),l.updater=Al,t.stateNode=l,l._reactInternals=t,si(t,r,e,n),t=di(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Ki(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(el(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Jf(r),e=Ae(r,e),l){case 0:t=ci(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=js(null,t,r,e,n);break e;case 14:t=Cs(null,t,r,Ae(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Es(e,t,r,l,n);case 3:e:{if(Mc(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,l=o.element,dc(e,t),kl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=En(Error(z(423)),t),t=bs(e,t,r,n,l);break e}else if(r!==l){l=En(Error(z(424)),t),t=bs(e,t,r,n,l);break e}else for(be=jt(t.stateNode.containerInfo.firstChild),ze=t,Q=!0,We=null,n=uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===l){t=ct(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return pc(t),e===null&&oi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ei(r,l)?i=null:o!==null&&ei(r,o)&&(t.flags|=32),$c(e,t),me(e,t,i,n),t.child;case 6:return e===null&&oi(t),null;case 13:return Dc(e,t,n);case 4:return na(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),js(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,W(vl,r._currentValue),r._currentValue=i,o!==null)if(Qe(o.value,i)){if(o.children===l.children&&!ke.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=it(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ii(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(z(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ii(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,yn(t,n),l=_e(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=Ae(r,t.pendingProps),l=Ae(r.type,l),Cs(e,t,r,l,n);case 15:return _c(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),el(e,t),t.tag=1,Se(r)?(e=!0,gl(t)):e=!1,yn(t,n),Lc(t,r,l),si(t,r,l,n),di(null,t,r,!0,e,n);case 19:return Ac(e,t,n);case 22:return Oc(e,t,n)}throw Error(z(156,t.tag))};function nd(e,t){return Pu(e,t)}function Zf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Zf(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jf(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oi)return 11;if(e===$i)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")xa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nn:return Wt(n.children,l,o,t);case _i:i=8,l|=8;break;case Lo:return e=Ie(12,n,t,l|2),e.elementType=Lo,e.lanes=o,e;case Io:return e=Ie(13,n,t,l),e.elementType=Io,e.lanes=o,e;case Fo:return e=Ie(19,n,t,l),e.elementType=Fo,e.lanes=o,e;case pu:return Ul(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cu:i=10;break e;case du:i=9;break e;case Oi:i=11;break e;case $i:i=14;break e;case ht:i=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Wt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=pu,e.lanes=n,e.stateNode={isHidden:!1},e}function jo(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eh(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ro(0),this.expirationTimes=ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ro(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,l,o,i,s,u){return e=new eh(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ta(o),e}function th(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rd(e){if(!e)return Pt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Se(n))return rc(e,n,t)}return t}function ld(e,t,n,r,l,o,i,s,u){return e=ya(n,r,!0,e,l,o,i,s,u),e.context=rd(null),n=e.current,r=ge(),l=bt(n),o=it(r,l),o.callback=t??null,Ct(n,o,l),e.current.lanes=l,wr(e,l,r),je(e,r),e}function Hl(e,t,n,r){var l=t.current,o=ge(),i=bt(l);return n=rd(n),t.context===null?t.context=n:t.pendingContext=n,t=it(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ct(l,t,i),e!==null&&(He(e,l,i,o),qr(e,l,i)),i}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Os(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){Os(e,t),(e=e.alternate)&&Os(e,t)}function nh(){return null}var od=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Vl.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Hl(e,t,null,null)};Vl.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){Hl(null,e,null,null)}),t[st]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Mu(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $s(){}function rh(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Pl(i);o.call(c)}}var i=ld(t,r,e,0,null,!1,!1,"",$s);return e._reactRootContainer=i,e[st]=i.current,ur(e.nodeType===8?e.parentNode:e),Yt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Pl(u);s.call(c)}}var u=ya(e,0,!1,null,null,!1,!1,"",$s);return e._reactRootContainer=u,e[st]=u.current,ur(e.nodeType===8?e.parentNode:e),Yt(function(){Hl(t,u,n,r)}),u}function Yl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=Pl(i);s.call(u)}}Hl(t,i,e,l)}else i=rh(n,t,e,l,r);return Pl(i)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(Ai(t,n|1),je(t,ee()),!(M&6)&&(bn=ee()+500,Lt()))}break;case 13:Yt(function(){var r=ut(e,1);if(r!==null){var l=ge();He(r,e,1,l)}}),va(e,1)}};Bi=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ge();He(t,e,134217728,n)}va(e,134217728)}};_u=function(e){if(e.tag===13){var t=bt(e),n=ut(e,t);if(n!==null){var r=ge();He(n,e,t,r)}va(e,t)}};Ou=function(){return A};$u=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Ho=function(e,t,n){switch(t){case"input":if($o(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=$l(r);if(!l)throw Error(z(90));hu(r),$o(r,l)}}}break;case"textarea":gu(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};ju=ha;Cu=Yt;var lh={usingClientEntryPoint:!1,Events:[Sr,an,$l,ku,Su,ha]},An={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oh={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Il=Hr.inject(oh),Ze=Hr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lh;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(z(200));return th(e,t,null,n)};Pe.createRoot=function(e,t){if(!ka(e))throw Error(z(299));var n=!1,r="",l=od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,l),e[st]=t.current,ur(e.nodeType===8?e.parentNode:e),new wa(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Yt(e)};Pe.hydrate=function(e,t,n){if(!Ql(t))throw Error(z(200));return Yl(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!ka(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=od;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ld(t,null,e,1,n??null,l,!1,o,i),e[st]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vl(t)};Pe.render=function(e,t,n){if(!Ql(t))throw Error(z(200));return Yl(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(z(40));return e._reactRootContainer?(Yt(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Pe.unstable_batchedUpdates=ha;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Yl(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(e){console.error(e)}}id(),iu.exports=Pe;var ih=iu.exports,Ms=ih;No.createRoot=Ms.createRoot,No.hydrateRoot=Ms.hydrateRoot;/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sa=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,ad=/^[\\/]{2}/;function ah(e,t){return t+e.replace(/\\/g,"/")}var Ds="popstate";function As(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function sh(e={}){function t(r,l){var c;let o=(c=l.state)==null?void 0:c.masked,{pathname:i,search:s,hash:u}=o||r.location;return ji("",{pathname:i,search:s,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default",o?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,l){return typeof l=="string"?l:yr(l)}return ch(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ye(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uh(){return Math.random().toString(36).substring(2,10)}function Bs(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ji(e,t,n=null,r,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Nn(t):t,state:n,key:t&&t.key||r||uh(),mask:l}}function yr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Nn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ch(e,t,n,r={}){let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s="POP",u=null,c=h();c==null&&(c=0,i.replaceState({...i.state,idx:c},""));function h(){return(i.state||{idx:null}).idx}function f(){s="POP";let C=h(),p=C==null?null:C-c;c=C,u&&u({action:s,location:v.location,delta:p})}function g(C,p){s="PUSH";let d=As(C)?C:ji(v.location,C,p);c=h()+1;let m=Bs(d,c),j=v.createHref(d.mask||d);try{i.pushState(m,"",j)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;l.location.assign(j)}o&&u&&u({action:s,location:v.location,delta:1})}function k(C,p){s="REPLACE";let d=As(C)?C:ji(v.location,C,p);c=h();let m=Bs(d,c),j=v.createHref(d.mask||d);i.replaceState(m,"",j),o&&u&&u({action:s,location:v.location,delta:0})}function y(C){return dh(l,C)}let v={get action(){return s},get location(){return e(l,i)},listen(C){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Ds,f),u=C,()=>{l.removeEventListener(Ds,f),u=null}},createHref(C){return t(l,C)},createURL:y,encodeLocation(C){let p=y(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:k,go(C){return i.go(C)}};return v}function dh(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),G(r,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:yr(t);return l=l.replace(/ $/,"%20"),!n&&ad.test(l)&&(l=r+l),new URL(l,r)}function sd(e,t,n="/"){return ph(e,t,n,!1)}function ph(e,t,n,r,l){let o=typeof t=="string"?Nn(t):t,i=dt(o.pathname||"/",n);if(i==null)return null;let s=fh(e),u=null,c=Ch(i);for(let h=0;u==null&&h<s.length;++h)u=jh(s[h],c,r);return u}function fh(e){let t=ud(e);return hh(t),t}function ud(e,t=[],n=[],r="",l=!1){let o=(i,s,u=l,c)=>{let h={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&u)return;G(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let f=Ve([r,h.relativePath]),g=n.concat(h);i.children&&i.children.length>0&&(G(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),ud(i.children,t,g,f,u)),!(i.path==null&&!i.index)&&t.push({path:f,score:kh(f,i.index),routesMeta:g.map((k,y)=>{let[v,C]=pd(k.relativePath,k.caseSensitive,y===g.length-1);return{...k,matcher:v,compiledParams:C}})})};return e.forEach((i,s)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))o(i,s);else for(let c of cd(i.path))o(i,s,!0,c)}),t}function cd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=cd(r.join("/")),s=[];return s.push(...i.map(u=>u===""?o:[o,u].join("/"))),l&&s.push(...i),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function hh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var mh=/^:[\w-]+$/,gh=3,xh=2,yh=1,vh=10,wh=-2,Ws=e=>e==="*";function kh(e,t){let n=e.split("/"),r=n.length;return n.some(Ws)&&(r+=wh),t&&(r+=xh),n.filter(l=>!Ws(l)).reduce((l,o)=>l+(mh.test(o)?gh:o===""?yh:vh),r)}function Sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function jh(e,t,n=!1){let{routesMeta:r}=e,l={},o="/",i=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",f={path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g=u.matcher&&u.compiledParams?dd(f,h,u.matcher,u.compiledParams):Nl(f,h),k=u.route;if(!g&&c&&n&&!r[r.length-1].route.index&&(g=Nl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!g)return null;Object.assign(l,g.params),i.push({params:l,pathname:Ve([o,g.pathname]),pathnameBase:zh(Ve([o,g.pathnameBase])),route:k}),g.pathnameBase!=="/"&&(o=Ve([o,g.pathnameBase]))}return i}function Nl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pd(e.path,e.caseSensitive,e.end);return dd(e,t,n,r)}function dd(e,t,n,r){let l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:f},g)=>{if(h==="*"){let y=s[g]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const k=s[g];return f&&!k?c[h]=void 0:c[h]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:i,pattern:e}}function pd(e,t=!1,n=!0){Ye(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,u,c,h)=>{if(r.push({paramName:s,isOptional:u!=null}),u){let f=h.charAt(c+i.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Ch(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ye(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function dt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Eh(e,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Nn(e):e,o;return n?(n=hd(n),n.startsWith("/")?o=Us(n.substring(1),"/"):o=Us(n,t)):o=t,{pathname:o,search:Rh(r),hash:Ph(l)}}function Us(e,t){let n=Tl(t).split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Eo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fd(e){let t=bh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ja(e,t,n,r=!1){let l;typeof e=="string"?l=Nn(e):(l={...e},G(!l.pathname||!l.pathname.includes("?"),Eo("?","pathname","search",l)),G(!l.pathname||!l.pathname.includes("#"),Eo("#","pathname","hash",l)),G(!l.search||!l.search.includes("#"),Eo("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(i==null)s=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;l.pathname=g.join("/")}s=f>=0?t[f]:"/"}let u=Eh(l,s),c=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}var hd=e=>e.replace(/[\\/]{2,}/g,"/"),Ve=e=>hd(e.join("/")),Tl=e=>e.replace(/\/+$/,""),zh=e=>Tl(e).replace(/^\/*/,"/"),Rh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ph=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nh=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Th(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Lh(e){let t=e.map(n=>n.route.path).filter(Boolean);return Ve(t)||"/"}var md=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gd(e,t){let n=e;if(typeof n!="string"||!Sa.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,l=!1;if(md)try{let o=new URL(window.location.href),i=ad.test(n)?new URL(ah(n,o.protocol)):new URL(n),s=dt(i.pathname,t);i.origin===o.origin&&s!=null?n=s+i.search+i.hash:l=!0}catch{Ye(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xd=["POST","PUT","PATCH","DELETE"];new Set(xd);var Ih=["GET",...xd];new Set(Ih);var Fh=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function _h(e){try{return Fh.includes(new URL(e).protocol)}catch{return!1}}var Tn=x.createContext(null);Tn.displayName="DataRouter";var Kl=x.createContext(null);Kl.displayName="DataRouterState";var yd=x.createContext(!1);function Oh(){return x.useContext(yd)}var vd=x.createContext({isTransitioning:!1});vd.displayName="ViewTransition";var $h=x.createContext(new Map);$h.displayName="Fetchers";var Mh=x.createContext(null);Mh.displayName="Await";var $e=x.createContext(null);$e.displayName="Navigation";var Cr=x.createContext(null);Cr.displayName="Location";var et=x.createContext({outlet:null,matches:[],isDataRoute:!1});et.displayName="Route";var Ca=x.createContext(null);Ca.displayName="RouteError";var wd="REACT_ROUTER_ERROR",Dh="REDIRECT",Ah="ROUTE_ERROR_RESPONSE";function Bh(e){if(e.startsWith(`${wd}:${Dh}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Wh(e){if(e.startsWith(`${wd}:${Ah}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Nh(t.status,t.statusText,t.data)}catch{}}function Uh(e,{relative:t}={}){G(Er(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext($e),{hash:l,pathname:o,search:i}=br(e,{relative:t}),s=o;return n!=="/"&&(s=o==="/"?n:Ve([n,o])),r.createHref({pathname:s,search:i,hash:l})}function Er(){return x.useContext(Cr)!=null}function Me(){return G(Er(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Cr).location}var kd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sd(e){x.useContext($e).static||x.useLayoutEffect(e)}function tt(){let{isDataRoute:e}=x.useContext(et);return e?rm():Hh()}function Hh(){G(Er(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Tn),{basename:t,navigator:n}=x.useContext($e),{matches:r}=x.useContext(et),{pathname:l}=Me(),o=JSON.stringify(fd(r)),i=x.useRef(!1);return Sd(()=>{i.current=!0}),x.useCallback((u,c={})=>{if(Ye(i.current,kd),!i.current)return;if(typeof u=="number"){n.go(u);return}let h=ja(u,JSON.parse(o),l,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ve([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,o,l,e])}x.createContext(null);function Vh(){let{matches:e}=x.useContext(et),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function br(e,{relative:t}={}){let{matches:n}=x.useContext(et),{pathname:r}=Me(),l=JSON.stringify(fd(n));return x.useMemo(()=>ja(e,JSON.parse(l),r,t==="path"),[e,l,r,t])}function Qh(e,t){return jd(e,t)}function jd(e,t,n){var C;G(Er(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=x.useContext($e),{matches:l}=x.useContext(et),o=l[l.length-1],i=o?o.params:{},s=o?o.pathname:"/",u=o?o.pathnameBase:"/",c=o&&o.route;{let p=c&&c.path||"";Ed(s,!c||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let h=Me(),f;if(t){let p=typeof t=="string"?Nn(t):t;G(u==="/"||((C=p.pathname)==null?void 0:C.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${p.pathname}" was given in the \`location\` prop.`),f=p}else f=h;let g=f.pathname||"/",k=g;if(u!=="/"){let p=u.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(p.length).join("/")}let y=n&&n.state.matches.length?n.state.matches.map(p=>Object.assign(p,{route:n.manifest[p.route.id]||p.route})):sd(e,{pathname:k});Ye(c||y!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Ye(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=qh(y&&y.map(p=>Object.assign({},p,{params:Object.assign({},i,p.params),pathname:Ve([u,r.encodeLocation?r.encodeLocation(p.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:Ve([u,r.encodeLocation?r.encodeLocation(p.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathnameBase])})),l,n);return t&&v?x.createElement(Cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},v):v}function Yh(){let e=nm(),t=Th(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:o},"ErrorBoundary")," or"," ",x.createElement("code",{style:o},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,i)}var Kh=x.createElement(Yh,null),Cd=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Wh(e.digest);n&&(e=n)}let t=e!==void 0?x.createElement(et.Provider,{value:this.props.routeContext},x.createElement(Ca.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(Gh,{error:e},t):t}};Cd.contextType=yd;var bo=new WeakMap;function Gh({children:e,error:t}){let{basename:n}=x.useContext($e);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Bh(t.digest);if(r){let l=bo.get(t);if(l)throw l;let o=gd(r.location,n),i=o.absoluteURL||o.to;if(_h(i))throw new Error("Invalid redirect location");if(md&&!bo.get(t))if(o.isExternal||r.reloadDocument)window.location.href=i;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:r.replace}));throw bo.set(t,s),s}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return e}function Xh({routeContext:e,match:t,children:n}){let r=x.useContext(Tn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(et.Provider,{value:e},n)}function qh(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=r==null?void 0:r.errors;if(o!=null){let h=l.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);G(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let i=!1,s=-1;if(n&&r){i=r.renderFallback;for(let h=0;h<l.length;h++){let f=l[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(s=h),f.route.id){let{loaderData:g,errors:k}=r,y=f.route.loader&&!g.hasOwnProperty(f.route.id)&&(!k||k[f.route.id]===void 0);if(f.route.lazy||y){n.isStatic&&(i=!0),s>=0?l=l.slice(0,s+1):l=[l[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(h,f)=>{var g,k;u(h,{location:r.location,params:((k=(g=r.matches)==null?void 0:g[0])==null?void 0:k.params)??{},pattern:Lh(r.matches),errorInfo:f})}:void 0;return l.reduceRight((h,f,g)=>{let k,y=!1,v=null,C=null;r&&(k=o&&f.route.id?o[f.route.id]:void 0,v=f.route.errorElement||Kh,i&&(s<0&&g===0?(Ed("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,C=null):s===g&&(y=!0,C=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let m;return k?m=v:y?m=C:f.route.Component?m=x.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,x.createElement(Xh,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:r!=null},children:m})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?x.createElement(Cd,{location:r.location,revalidation:r.revalidation,component:v,error:k,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:c}):d()},null)}function Ea(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zh(e){let t=x.useContext(Tn);return G(t,Ea(e)),t}function Jh(e){let t=x.useContext(Kl);return G(t,Ea(e)),t}function em(e){let t=x.useContext(et);return G(t,Ea(e)),t}function ba(e){let t=em(e),n=t.matches[t.matches.length-1];return G(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function tm(){return ba("useRouteId")}function nm(){var r;let e=x.useContext(Ca),t=Jh("useRouteError"),n=ba("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function rm(){let{router:e}=Zh("useNavigate"),t=ba("useNavigate"),n=x.useRef(!1);return Sd(()=>{n.current=!0}),x.useCallback(async(l,o={})=>{Ye(n.current,kd),n.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:t,...o}))},[e,t])}var Hs={};function Ed(e,t,n){!t&&!Hs[e]&&(Hs[e]=!0,Ye(!1,n))}x.memo(lm);function lm({routes:e,manifest:t,future:n,state:r,isStatic:l,onError:o}){return jd(e,void 0,{manifest:t,state:r,isStatic:l,onError:o})}function $t(e){G(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function om({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:o=!1,useTransitions:i}){G(!Er(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:l,static:o,useTransitions:i,future:{}}),[s,l,o,i]);typeof n=="string"&&(n=Nn(n));let{pathname:c="/",search:h="",hash:f="",state:g=null,key:k="default",mask:y}=n,v=x.useMemo(()=>{let C=dt(c,s);return C==null?null:{location:{pathname:C,search:h,hash:f,state:g,key:k,mask:y},navigationType:r}},[s,c,h,f,g,k,r,y]);return Ye(v!=null,`<Router basename="${s}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:x.createElement($e.Provider,{value:u},x.createElement(Cr.Provider,{children:t,value:v}))}function im({children:e,location:t}){return Qh(Ci(e),t)}function Ci(e,t=[]){let n=[];return x.Children.forEach(e,(r,l)=>{if(!x.isValidElement(r))return;let o=[...t,l];if(r.type===x.Fragment){n.push.apply(n,Ci(r.props.children,o));return}G(r.type===$t,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),G(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Ci(r.props.children,o)),n.push(i)}),n}var ll="get",ol="application/x-www-form-urlencoded";function Gl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function am(e){return Gl(e)&&e.tagName.toLowerCase()==="button"}function sm(e){return Gl(e)&&e.tagName.toLowerCase()==="form"}function um(e){return Gl(e)&&e.tagName.toLowerCase()==="input"}function cm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dm(e,t){return e.button===0&&(!t||t==="_self")&&!cm(e)}function Ei(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(l=>[n,l]):[[n,r]])},[]))}function pm(e,t){let n=Ei(e);return t&&t.forEach((r,l)=>{n.has(l)||t.getAll(l).forEach(o=>{n.append(l,o)})}),n}var Vr=null;function fm(){if(Vr===null)try{new FormData(document.createElement("form"),0),Vr=!1}catch{Vr=!0}return Vr}var hm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zo(e){return e!=null&&!hm.has(e)?(Ye(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ol}"`),null):e}function mm(e,t){let n,r,l,o,i;if(sm(e)){let s=e.getAttribute("action");r=s?dt(s,t):null,n=e.getAttribute("method")||ll,l=zo(e.getAttribute("enctype"))||ol,o=new FormData(e)}else if(am(e)||um(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(r=u?dt(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||ll,l=zo(e.getAttribute("formenctype"))||zo(s.getAttribute("enctype"))||ol,o=new FormData(s,e),!fm()){let{name:c,type:h,value:f}=e;if(h==="image"){let g=c?`${c}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else c&&o.append(c,f)}}else{if(Gl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ll,r=null,l=ol,i=e}return o&&l==="text/plain"&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function za(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bd(e,t,n,r){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&dt(l.pathname,t)==="/"?l.pathname=`${Tl(t)}/_root.${r}`:l.pathname=`${Tl(l.pathname)}.${r}`,l}async function gm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xm(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ym(e,t,n){let r=await Promise.all(e.map(async l=>{let o=t.routes[l.route.id];if(o){let i=await gm(o,n);return i.links?i.links():[]}return[]}));return Sm(r.flat(1).filter(xm).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Vs(e,t,n,r,l,o){let i=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,s=(u,c)=>{var h;return n[c].pathname!==u.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return o==="assets"?t.filter((u,c)=>i(u,c)||s(u,c)):o==="data"?t.filter((u,c)=>{var f;let h=r.routes[u.route.id];if(!h||!h.hasLoader)return!1;if(i(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function vm(e,t,{includeHydrateFallback:n}={}){return wm(e.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let o=[l.module];return l.clientActionModule&&(o=o.concat(l.clientActionModule)),l.clientLoaderModule&&(o=o.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(o=o.concat(l.hydrateFallbackModule)),l.imports&&(o=o.concat(l.imports)),o}).flat(1))}function wm(e){return[...new Set(e)]}function km(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sm(e,t){let n=new Set;return new Set(t),e.reduce((r,l)=>{let o=JSON.stringify(km(l));return n.has(o)||(n.add(o),r.push({key:o,link:l})),r},[])}function Ra(){let e=x.useContext(Tn);return za(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function jm(){let e=x.useContext(Kl);return za(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Pa=x.createContext(void 0);Pa.displayName="FrameworkContext";function Xl(){let e=x.useContext(Pa);return za(e,"You must render this element inside a <HydratedRouter> element"),e}function Cm(e,t){let n=x.useContext(Pa),[r,l]=x.useState(!1),[o,i]=x.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:h,onTouchStart:f}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let v=p=>{p.forEach(d=>{i(d.isIntersecting)})},C=new IntersectionObserver(v,{threshold:.5});return g.current&&C.observe(g.current),()=>{C.disconnect()}}},[e]),x.useEffect(()=>{if(r){let v=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(v)}}},[r]);let k=()=>{l(!0)},y=()=>{l(!1),i(!1)};return n?e!=="intent"?[o,g,{}]:[o,g,{onFocus:Bn(s,k),onBlur:Bn(u,y),onMouseEnter:Bn(c,k),onMouseLeave:Bn(h,y),onTouchStart:Bn(f,k)}]:[!1,g,{}]}function Bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Em({page:e,...t}){let n=Oh(),{nonce:r}=Xl(),{router:l}=Ra(),o=x.useMemo(()=>sd(l.routes,e,l.basename),[l.routes,e,l.basename]);return o?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(zm,{page:e,matches:o,...t}):x.createElement(Rm,{page:e,matches:o,...t})):null}function bm(e){let{manifest:t,routeModules:n}=Xl(),[r,l]=x.useState([]);return x.useEffect(()=>{let o=!1;return ym(e,t,n).then(i=>{o||l(i)}),()=>{o=!0}},[e,t,n]),r}function zm({page:e,matches:t,...n}){let r=Me(),{future:l}=Xl(),{basename:o}=Ra(),i=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let s=bd(e,o,l.v8_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?u=!0:c.push(h.route.id);return u&&c.length>0&&s.searchParams.set("_routes",c.join(",")),[s.pathname+s.search]},[o,l.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,i.map(s=>x.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...n})))}function Rm({page:e,matches:t,...n}){let r=Me(),{future:l,manifest:o,routeModules:i}=Xl(),{basename:s}=Ra(),{loaderData:u,matches:c}=jm(),h=x.useMemo(()=>Vs(e,t,c,o,r,"data"),[e,t,c,o,r]),f=x.useMemo(()=>Vs(e,t,c,o,r,"assets"),[e,t,c,o,r]),g=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,C=!1;if(t.forEach(d=>{var j;let m=o.routes[d.route.id];!m||!m.hasLoader||(!h.some(b=>b.route.id===d.route.id)&&d.route.id in u&&((j=i[d.route.id])!=null&&j.shouldRevalidate)||m.hasClientLoader?C=!0:v.add(d.route.id))}),v.size===0)return[];let p=bd(e,s,l.v8_trailingSlashAwareDataRequests,"data");return C&&v.size>0&&p.searchParams.set("_routes",t.filter(d=>v.has(d.route.id)).map(d=>d.route.id).join(",")),[p.pathname+p.search]},[s,l.v8_trailingSlashAwareDataRequests,u,r,o,h,t,e,i]),k=x.useMemo(()=>vm(f,o),[f,o]),y=bm(f);return x.createElement(x.Fragment,null,g.map(v=>x.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),k.map(v=>x.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),y.map(({key:v,link:C})=>x.createElement("link",{key:v,nonce:n.nonce,...C,crossOrigin:C.crossOrigin??n.crossOrigin})))}function Pm(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nm&&(window.__reactRouterVersion="7.18.2")}catch{}function Tm({basename:e,children:t,useTransitions:n,window:r}){let l=x.useRef();l.current==null&&(l.current=sh({window:r,v5Compat:!0}));let o=l.current,[i,s]=x.useState({action:o.action,location:o.location}),u=x.useCallback(c=>{n===!1?s(c):x.startTransition(()=>s(c))},[n]);return x.useLayoutEffect(()=>o.listen(u),[o,u]),x.createElement(om,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o,useTransitions:n})}var ae=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:o,replace:i,mask:s,state:u,target:c,to:h,preventScrollReset:f,viewTransition:g,defaultShouldRevalidate:k,...y},v){let{basename:C,navigator:p,useTransitions:d}=x.useContext($e),m=typeof h=="string"&&Sa.test(h),j=gd(h,C);h=j.to;let b=Uh(h,{relative:l}),E=Me(),R=null;if(s){let Ce=ja(s,[],E.mask?E.mask.pathname:"/",!0);C!=="/"&&(Ce.pathname=Ce.pathname==="/"?C:Ve([C,Ce.pathname])),R=p.createHref(Ce)}let[L,D,F]=Cm(r,y),ce=_m(h,{replace:i,mask:s,state:u,target:c,preventScrollReset:f,relative:l,viewTransition:g,defaultShouldRevalidate:k,useTransitions:d});function q(Ce){t&&t(Ce),Ce.defaultPrevented||ce(Ce)}let Ke=!(j.isExternal||o),It=x.createElement("a",{...y,...F,href:(Ke?R:void 0)||j.absoluteURL||b,onClick:Ke?q:t,ref:Pm(v,D),target:c,"data-discover":!m&&n==="render"?"true":void 0});return L&&!m?x.createElement(x.Fragment,null,It,x.createElement(Em,{page:b})):It});ae.displayName="Link";var Lm=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:o,to:i,viewTransition:s,children:u,...c},h){let f=br(i,{relative:c.relative}),g=Me(),k=x.useContext(Kl),{navigator:y,basename:v}=x.useContext($e),C=k!=null&&Bm(f)&&s===!0,p=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,d=g.pathname,m=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(d=d.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase()),m&&v&&(m=dt(m,v)||m);const j=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let b=d===p||!l&&d.startsWith(p)&&d.charAt(j)==="/",E=m!=null&&(m===p||!l&&m.startsWith(p)&&m.charAt(p.length)==="/"),R={isActive:b,isPending:E,isTransitioning:C},L=b?t:void 0,D;typeof r=="function"?D=r(R):D=[r,b?"active":null,E?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let F=typeof o=="function"?o(R):o;return x.createElement(ae,{...c,"aria-current":L,className:D,ref:h,style:F,to:i,viewTransition:s},typeof u=="function"?u(R):u)});Lm.displayName="NavLink";var Im=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:o,method:i=ll,action:s,onSubmit:u,relative:c,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:g,...k},y)=>{let{useTransitions:v}=x.useContext($e),C=Dm(),p=Am(s,{relative:c}),d=i.toLowerCase()==="get"?"get":"post",m=typeof s=="string"&&Sa.test(s),j=b=>{if(u&&u(b),b.defaultPrevented)return;b.preventDefault();let E=b.nativeEvent.submitter,R=(E==null?void 0:E.getAttribute("formmethod"))||i,L=()=>C(E||b.currentTarget,{fetcherKey:t,method:R,navigate:n,replace:l,state:o,relative:c,preventScrollReset:h,viewTransition:f,defaultShouldRevalidate:g});v&&n!==!1?x.startTransition(()=>L()):L()};return x.createElement("form",{ref:y,method:d,action:p,onSubmit:r?u:j,...k,"data-discover":!m&&e==="render"?"true":void 0})});Im.displayName="Form";function Fm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zd(e){let t=x.useContext(Tn);return G(t,Fm(e)),t}function _m(e,{target:t,replace:n,mask:r,state:l,preventScrollReset:o,relative:i,viewTransition:s,defaultShouldRevalidate:u,useTransitions:c}={}){let h=tt(),f=Me(),g=br(e,{relative:i});return x.useCallback(k=>{if(dm(k,t)){k.preventDefault();let y=n!==void 0?n:yr(f)===yr(g),v=()=>h(e,{replace:y,mask:r,state:l,preventScrollReset:o,relative:i,viewTransition:s,defaultShouldRevalidate:u});c?x.startTransition(()=>v()):v()}},[f,h,g,n,r,l,t,e,o,i,s,u,c])}function Om(e){Ye(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=x.useRef(Ei(e)),n=x.useRef(!1),r=Me(),l=x.useMemo(()=>pm(r.search,n.current?null:t.current),[r.search]),o=tt(),i=x.useCallback((s,u)=>{const c=Ei(typeof s=="function"?s(new URLSearchParams(l)):s);n.current=!0,o("?"+c,u)},[o,l]);return[l,i]}var $m=0,Mm=()=>`__${String(++$m)}__`;function Dm(){let{router:e}=zd("useSubmit"),{basename:t}=x.useContext($e),n=tm(),r=e.fetch,l=e.navigate;return x.useCallback(async(o,i={})=>{let{action:s,method:u,encType:c,formData:h,body:f}=mm(o,t);if(i.navigate===!1){let g=i.fetcherKey||Mm();await r(g,n,i.action||s,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:h,body:f,formMethod:i.method||u,formEncType:i.encType||c,flushSync:i.flushSync})}else await l(i.action||s,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:h,body:f,formMethod:i.method||u,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,l,t,n])}function Am(e,{relative:t}={}){let{basename:n}=x.useContext($e),r=x.useContext(et);G(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),o={...br(e||".",{relative:t})},i=Me();if(e==null){o.search=i.search;let s=new URLSearchParams(o.search),u=s.getAll("index");if(u.some(h=>h==="")){s.delete("index"),u.filter(f=>f).forEach(f=>s.append("index",f));let h=s.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Ve([n,o.pathname])),yr(o)}function Bm(e,{relative:t}={}){let n=x.useContext(vd);G(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zd("useViewTransitionState"),l=br(e,{relative:t});if(!n.isTransitioning)return!1;let o=dt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=dt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Nl(l.pathname,i)!=null||Nl(l.pathname,o)!=null}const w={ink:"#0A0A0A",bone:"#F2F0EA",ash:"#8C8C86",stamp:"#B8302E",line:"#2A2A28"},S={display:"'Archivo Black', sans-serif",body:"'Inter', sans-serif",mono:"'IBM Plex Mono', monospace"},Rd=x.createContext();function Wm({children:e}){const[t,n]=x.useState([]),[r,l]=x.useState(!1),o=tt();x.useEffect(()=>{const C=localStorage.getItem("cartItems");C&&n(JSON.parse(C))},[]),x.useEffect(()=>{localStorage.setItem("cartItems",JSON.stringify(t))},[t]);const i=(C,p,d,m=1)=>{n(j=>{const b=j.findIndex(E=>E.id===C.id&&E.selectedSize===p&&E.selectedColor===d);if(b!==-1){const E=[...j];return E[b].quantity+=m,E}else return[...j,{...C,selectedSize:p,selectedColor:d,quantity:m}]}),l(!0)},s=C=>{n(p=>p.filter((d,m)=>m!==C))},u=(C,p)=>{p<1||n(d=>{const m=[...d];return m[C].quantity=p,m})},c=()=>{n([])},h=t.reduce((C,p)=>C+p.quantity,0),f=t.reduce((C,p)=>C+(p.priceValue||0)*p.quantity,0),v={cartItems:t,cartCount:h,cartTotal:f,isCartOpen:r,addToCart:i,removeFromCart:s,updateQuantity:u,clearCart:c,goTo:C=>{o(C),l(!1)},toggleCart:()=>{l(!r)},closeCart:()=>{l(!1)}};return a.jsx(Rd.Provider,{value:v,children:e})}function Ln(){const e=x.useContext(Rd);if(!e)throw new Error("useCart must be used within a CartProvider");return e}const Pd=x.createContext();function Um({children:e}){const[t]=x.useState([{id:"001",name:"Archive Tee — 01",price:"₦25,000",priceValue:25e3,category:"Tee",badge:"NEW",description:"Premium heavyweight cotton tee with archival graphics.",sizes:["S","M","L","XL"],images:[{id:1,url:"/images/Drop1.jpg",color:"#1a1a1a",label:"Front View"},{id:2,url:"/images/Drop2.jpg",color:"#2a2a2a",label:"Back View"}],details:["100% Heavyweight Cotton","Oversized Fit","Screen Printed Graphics","Made in Portugal"]},{id:"002",name:"Archive Cargo",price:"₦48,000",priceValue:48e3,category:"TrackSuit",badge:"HOT",description:"Tactical cargo pants with adjustable straps.",sizes:["30","32","34","36"],images:[{id:1,url:"/images/Drop2i.jpg",color:"#2a2a2a",label:"Front View"},{id:2,url:"/images/Drop2ii (1).jpg",color:"#2a2a",label:"Back View"},{id:3,url:"/images/Drop2ii (2).jpg",color:"#2a2a2a",label:"Side View"}],details:["Cotton-Nylon Blend","Relaxed Fit","8 Pocket Design"]},{id:"003",name:"Field Jacket 01",price:"₦72,000",priceValue:72e3,category:"Sweatjort",badge:"LIMITED",description:"Weather-resistant field jacket with quilted lining.",sizes:["S","M","L","XL"],images:[{id:1,url:"/images/jort1.jpg",color:"#3a3a3a",label:"side View"},{id:2,url:"/images/jort2.jpg",color:"#3a3a3a",label:"side View"},{id:3,url:"/images/jort3.jpg",color:"#3a3a3a",label:"Front View"}],details:["Water-Resistant Shell","Quilted Lining","Multiple Pockets"]},{id:"004",name:"Archive Cap",price:"₦18,000",priceValue:18e3,category:"TrackSuit",badge:"NEW",description:"Embroidered cap with adjustable strap.",sizes:["One Size"],colors:["#000000","#2a2a2a"],images:[{id:1,url:"/images/track1.jpg",color:"#4a4a4a",label:"Front View"},{id:2,url:"/images/track2.jpg",color:"#4a4a4a",label:"Back View"},{id:3,url:"/images/track3.jpg",color:"#4a4a4a",label:"Side View"}],details:["100% Cotton","Embroidered Logo","Adjustable Strap"]}]),n=r=>t.find(l=>l.id===r);return a.jsx(Pd.Provider,{value:{products:t,getProductById:n},children:e})}function ql(){const e=x.useContext(Pd);if(!e)throw new Error("useProducts must be used within a ProductProvider");return e}function Hm(){const[e,t]=x.useState(!1),[n,r]=x.useState(!1),[l,o]=x.useState(!1),[i,s]=x.useState(""),[u,c]=x.useState([]),[h,f]=x.useState(!1),g=Me(),k=tt(),{cartCount:y,toggleCart:v}=Ln(),{products:C}=ql();x.useEffect(()=>{const E=()=>t(window.scrollY>40);return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[]),x.useEffect(()=>{r(!1),o(!1),s(""),f(!1)},[g.pathname]),x.useEffect(()=>{if(i.trim().length>0){const E=C.filter(R=>R.name.toLowerCase().includes(i.toLowerCase())||R.category.toLowerCase().includes(i.toLowerCase())||R.id.includes(i)).slice(0,5);c(E),f(!0)}else c([]),f(!1)},[i,C]);const p=e||n||l,d={fontFamily:S.mono,fontSize:"11px",color:w.bone,letterSpacing:"0.08em",cursor:"pointer",transition:"opacity 0.2s ease",textDecoration:"none"},m={cursor:"pointer",transition:"opacity 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center"},j=E=>{E.preventDefault(),i.trim()&&(k(`/shop?search=${encodeURIComponent(i)}`),o(!1),s(""),f(!1))},b=E=>{k(`/product/${E}`),o(!1),s(""),f(!1)};return a.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,background:p?w.ink:"transparent",borderBottom:p?`1px solid ${w.line}`:"1px solid transparent",transition:"background 250ms ease, border-color 250ms ease"},children:[a.jsxs("div",{className:"nav-desktop",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 40px",gap:"20px"},children:[a.jsx(ae,{to:"/",style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flex:"0 0 auto",cursor:"pointer"},children:a.jsx("img",{src:"/images/logo.png",alt:"508 Archives",style:{height:"40px",width:"auto",objectFit:"contain"}})}),a.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center",flex:1,justifyContent:"center"},children:[a.jsx(ae,{to:"/shop",style:d,children:"SHOP"}),a.jsx(ae,{to:"/collections",style:d,children:"COLLECTIONS"}),a.jsx(ae,{to:"/lookbook",style:d,children:"LOOKBOOK"})]}),a.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",flex:"0 0 auto",justifyContent:"flex-end"},children:[a.jsx("span",{style:m,onClick:()=>o(!l),title:"Search",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:w.bone,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),a.jsx(ae,{to:"/account",style:m,title:"Account",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:w.bone,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),a.jsxs("span",{style:{...m,position:"relative"},onClick:v,title:`Bag (${y} items)`,children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:w.bone,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),a.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),a.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),y>0&&a.jsx("span",{style:{position:"absolute",top:"-6px",right:"-8px",background:w.bone,color:w.ink,fontSize:"9px",fontFamily:S.mono,width:"16px",height:"16px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:y})]})]})]}),l&&!window.innerWidth<=720&&a.jsxs("form",{onSubmit:j,style:{padding:"12px 40px",background:w.ink,borderTop:`1px solid ${w.line}`,display:"flex",alignItems:"center",gap:"12px",position:"relative"},children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:w.ash,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),a.jsx("input",{type:"text",placeholder:"Search products...",value:i,onChange:E=>s(E.target.value),autoFocus:!0,style:{flex:1,background:"transparent",border:"none",color:w.bone,fontFamily:S.body,fontSize:"14px",outline:"none"}}),a.jsx("button",{type:"button",onClick:()=>o(!1),style:{background:"none",border:"none",color:w.ash,cursor:"pointer",fontSize:"18px"},children:"×"}),h&&u.length>0&&a.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:w.ink,borderBottom:`1px solid ${w.line}`,zIndex:60},children:u.map(E=>a.jsxs("button",{onClick:()=>b(E.id),style:{width:"100%",padding:"12px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"transparent",border:"none",cursor:"pointer",color:w.bone,borderBottom:`1px solid ${w.line}`},children:[a.jsx("span",{style:{fontFamily:S.body,fontSize:"13px"},children:E.name}),a.jsx("span",{style:{fontFamily:S.mono,fontSize:"11px",color:w.ash},children:E.price})]},E.id))})]}),a.jsxs("div",{className:"nav-mobile",style:{display:"none",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",position:"relative"},children:[a.jsx(ae,{to:"/",style:{display:"flex",alignItems:"center",justifyContent:"flex-start"},children:a.jsx("img",{src:"/images/logo.png",alt:"508 Archives",style:{height:"40px",width:"auto",objectFit:"contain"}})}),a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx("span",{style:m,onClick:()=>o(!l),children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:w.bone,strokeWidth:"1.5",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),a.jsxs("span",{style:{...m,position:"relative"},onClick:v,children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:w.bone,strokeWidth:"1.5",children:[a.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),a.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),a.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),y>0&&a.jsx("span",{style:{position:"absolute",top:"-6px",right:"-8px",background:w.bone,color:w.ink,fontSize:"8px",fontFamily:S.mono,width:"14px",height:"14px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},children:y})]}),a.jsx("span",{onClick:()=>r(!n),style:{fontFamily:S.mono,fontSize:"20px",color:w.bone,cursor:"pointer",width:"24px",zIndex:2},children:n?"×":"☰"})]})]}),l&&a.jsxs("div",{className:"nav-mobile",style:{display:"none",position:"fixed",top:0,left:0,right:0,bottom:0,background:w.ink,zIndex:100,flexDirection:"column",padding:"20px"},children:[a.jsxs("form",{onSubmit:j,style:{display:"flex",alignItems:"center",gap:"12px",borderBottom:`1px solid ${w.line}`,paddingBottom:"16px"},children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:w.ash,strokeWidth:"1.5",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),a.jsx("input",{type:"text",placeholder:"Search products...",value:i,onChange:E=>s(E.target.value),autoFocus:!0,style:{flex:1,background:"transparent",border:"none",color:w.bone,fontFamily:S.body,fontSize:"16px",outline:"none"}}),a.jsx("button",{type:"button",onClick:()=>{o(!1),s(""),f(!1)},style:{background:"none",border:"none",color:w.ash,cursor:"pointer",fontSize:"24px"},children:"×"})]}),h&&u.length>0&&a.jsx("div",{style:{marginTop:"20px",overflowY:"auto"},children:u.map(E=>a.jsxs("button",{onClick:()=>b(E.id),style:{width:"100%",padding:"16px 0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"transparent",border:"none",cursor:"pointer",color:w.bone,borderBottom:`1px solid ${w.line}`},children:[a.jsxs("div",{children:[a.jsx("span",{style:{fontFamily:S.body,fontSize:"14px",display:"block",marginBottom:"4px"},children:E.name}),a.jsx("span",{style:{fontFamily:S.mono,fontSize:"10px",color:w.ash},children:E.category})]}),a.jsx("span",{style:{fontFamily:S.mono,fontSize:"12px",color:w.ash},children:E.price})]},E.id))}),h&&u.length===0&&i.trim()&&a.jsxs("p",{style:{fontFamily:S.body,fontSize:"14px",color:w.ash,textAlign:"center",marginTop:"40px"},children:['No products found for "',i,'"']})]}),n&&!l&&a.jsxs("div",{className:"nav-mobile",style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px 20px 32px",background:w.ink,borderTop:`1px solid ${w.line}`},children:[a.jsx(ae,{to:"/shop",style:d,children:"SHOP"}),a.jsx(ae,{to:"/collections",style:d,children:"COLLECTIONS"}),a.jsx(ae,{to:"/lookbook",style:d,children:"LOOKBOOK"}),a.jsx(ae,{to:"/account",style:d,children:"ACCOUNT"})]}),a.jsx("style",{children:`
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `})]})}function Vm({children:e,onClick:t}){return a.jsx("button",{onClick:t,style:{fontFamily:S.mono,fontSize:"12px",letterSpacing:"0.04em",background:"transparent",color:w.ash,border:"none",borderBottom:`1px solid ${w.ash}`,padding:"4px 0",cursor:"pointer"},children:e})}function Qm({videoSrc:e,posterSrc:t}){const n=x.useRef(null),[r,l]=x.useState(!0),o=tt(),{toggleCart:i,cartCount:s}=Ln();x.useEffect(()=>{if(n.current){const c=n.current.play();c!==void 0&&c.catch(()=>{})}},[]);const u=()=>{n.current&&(n.current.muted=!n.current.muted,l(n.current.muted))};return a.jsxs("div",{style:{position:"relative",height:"100vh",width:"100%",overflow:"hidden",background:w.ink},children:[e?a.jsxs("video",{ref:n,autoPlay:!0,muted:r,loop:!0,playsInline:!0,poster:t,preload:"auto",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0},children:[a.jsx("source",{src:e,type:"video/mp4"}),"Your browser does not support the video tag."]}):a.jsx("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%",background:"repeating-linear-gradient(135deg, #141412 0px, #141412 2px, #0A0A0A 2px, #0A0A0A 40px)",zIndex:0}}),a.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.75) 100%)",zIndex:1,pointerEvents:"none"}}),a.jsxs("div",{style:{position:"relative",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px",gap:"24px",zIndex:2},children:[a.jsx("h1",{style:{fontFamily:S.display,fontSize:"clamp(40px, 8vw, 96px)",color:w.bone,margin:0,lineHeight:.95,letterSpacing:"-0.02em",textShadow:"0 2px 20px rgba(0,0,0,0.5)"},children:"508ARCHIVES"}),a.jsx("p",{style:{fontFamily:S.body,fontSize:"14px",color:w.ash,margin:0,maxWidth:"380px",letterSpacing:"0.02em",textShadow:"0 1px 10px rgba(0,0,0,0.5)"}}),a.jsx("div",{style:{marginTop:"12px",display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:a.jsx("button",{onClick:()=>o("shop"),style:{background:w.bone,color:w.ink,border:"none",padding:"16px 32px",fontFamily:S.mono,fontSize:"12px",letterSpacing:"0.15em",cursor:"pointer",fontWeight:"bold",transition:"all 0.3s ease",textTransform:"uppercase"},onMouseEnter:c=>{c.currentTarget.style.background=w.stamp,c.currentTarget.style.transform="scale(1.05)"},onMouseLeave:c=>{c.currentTarget.style.background=w.bone,c.currentTarget.style.transform="scale(1)"},children:"Shop Collection"})})]}),e&&a.jsx("button",{onClick:u,style:{position:"absolute",bottom:"24px",right:"24px",width:"40px",height:"40px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.9)",border:"none",color:"#000000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,transition:"all 0.2s ease",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.2)",backdropFilter:"blur(4px)"},onMouseEnter:c=>{c.currentTarget.style.background="rgba(255, 255, 255, 1)",c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"},onMouseLeave:c=>{c.currentTarget.style.background="rgba(255, 255, 255, 0.9)",c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"},"aria-label":r?"Play music":"Pause music",title:r?"Play music":"Pause music",children:r?a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9 18V5l12-2v13"}),a.jsx("circle",{cx:"6",cy:"18",r:"3"}),a.jsx("circle",{cx:"18",cy:"16",r:"3"}),a.jsx("line",{x1:"3",y1:"3",x2:"21",y2:"21"})]}):a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9 18V5l12-2v13"}),a.jsx("circle",{cx:"6",cy:"18",r:"3"}),a.jsx("circle",{cx:"18",cy:"16",r:"3"})]})})]})}function Ym(){const e=["NOT FOR EVERYONE","BUILT FOR THE FEW","WE DON'T FOLLOW","WE CREATE IT","NOT JUST WORN","ARCHIVED","MOVE DIFFERENT"];return a.jsxs("div",{style:{background:w.ink,padding:"40px 0",borderTop:`1px solid ${w.line}`,borderBottom:`1px solid ${w.line}`,overflow:"hidden",position:"relative"},children:[a.jsx("div",{style:{display:"flex",whiteSpace:"nowrap",animation:"marquee 15s linear infinite",width:"max-content"},children:[...e,...e,...e,...e].map((t,n)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px",padding:"0 20px",flexShrink:0},children:[a.jsx("span",{style:{fontFamily:S.display,fontSize:"clamp(24px, 3vw, 36px)",color:n%2===0?w.bone:"transparent",WebkitTextStroke:n%2===0?"none":`1px ${w.bone}`,letterSpacing:"-0.01em",fontWeight:"700",textTransform:"uppercase",whiteSpace:"nowrap"},children:t}),a.jsx("span",{style:{width:"6px",height:"6px",background:w.stamp,borderRadius:"50%",flexShrink:0}})]},n))}),a.jsx("style",{children:`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `})]})}function Km({product:e,onClose:t}){var k;const n=tt(),[r,l]=x.useState(0),[o,i]=x.useState(!1),s=((k=e==null?void 0:e.images)==null?void 0:k.length)>0?e.images:[{color:"#151515"}];x.useEffect(()=>{const y=()=>{i(window.innerWidth<=767)};return y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}},[]),x.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";const y=v=>{v.key==="Escape"&&t()};return window.addEventListener("keydown",y),()=>{document.body.style.overflow="",window.removeEventListener("keydown",y)}},[e,t]);const u=x.useRef(null),c=x.useRef(null),h=y=>{u.current=y.targetTouches[0].clientX},f=y=>{c.current=y.targetTouches[0].clientX},g=()=>{if(!u.current||!c.current)return;const y=u.current-c.current;Math.abs(y)<50||(y>0?l(v=>v===s.length-1?0:v+1):l(v=>v===0?s.length-1:v-1),u.current=null,c.current=null)};return e?a.jsxs("div",{className:"quick-view-backdrop",onClick:t,style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.82)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",display:"flex",alignItems:o?"flex-end":"center",justifyContent:"center",padding:o?0:"20px"},children:[a.jsxs("div",{className:"quick-view-panel",onClick:y=>y.stopPropagation(),style:{width:o?"100%":"min(1050px, 100%)",maxHeight:o?"94vh":"92vh",background:"#0b0b0b",position:"relative",overflow:"hidden",border:o?"none":"1px solid rgba(255,255,255,0.12)",borderRadius:o?"20px 20px 0 0":"0",display:o?"flex":"grid",flexDirection:o?"column":void 0,gridTemplateColumns:o?void 0:"1.05fr 0.95fr",boxShadow:"0 30px 100px rgba(0,0,0,0.75)",animation:o?"quickViewMobileOpen 0.35s ease":"quickViewDesktopOpen 0.3s ease"},children:[o&&a.jsx("div",{style:{position:"absolute",top:"9px",left:"50%",transform:"translateX(-50%)",width:"42px",height:"4px",borderRadius:"10px",background:"rgba(255,255,255,0.4)",zIndex:20}}),a.jsx("button",{onClick:t,"aria-label":"Close quick view",style:{position:"absolute",top:o?"18px":"16px",right:"16px",zIndex:30,width:"38px",height:"38px",borderRadius:"50%",border:"1px solid rgba(255,255,255,0.25)",background:"rgba(0,0,0,0.55)",color:"#fff",cursor:"pointer",fontSize:"20px",lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"},children:"×"}),a.jsxs("div",{className:"quick-view-image",onTouchStart:h,onTouchMove:f,onTouchEnd:g,style:{position:"relative",background:"#111",height:o?"48vh":"100%",minHeight:o?"320px":"620px",overflow:"hidden",flexShrink:0},children:[s.map((y,v)=>a.jsx("div",{style:{position:"absolute",inset:0,background:(y==null?void 0:y.color)||"#151515",display:"flex",alignItems:"center",justifyContent:"center",opacity:r===v?1:0,transition:"opacity 0.45s ease"},children:y!=null&&y.url?a.jsx("img",{src:y.url,alt:`${e.name} - ${y.label||`Image ${v+1}`}`,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},loading:"lazy"}):a.jsx("span",{style:{fontFamily:S.display,fontSize:o?"clamp(55px, 17vw, 90px)":"clamp(60px, 9vw, 110px)",fontWeight:700,color:"rgba(255,255,255,0.06)",letterSpacing:"-0.05em"},children:e.id})},v)),a.jsxs("div",{style:{position:"absolute",bottom:"16px",left:"16px",zIndex:5,fontFamily:S.mono,fontSize:"8px",color:"rgba(255,255,255,0.7)",letterSpacing:"0.15em"},children:[String(r+1).padStart(2,"0")," / ",String(s.length).padStart(2,"0")]}),!o&&s.length>1&&a.jsx("div",{style:{position:"absolute",right:"16px",bottom:"16px",display:"flex",gap:"5px",zIndex:5},children:s.map((y,v)=>a.jsx("button",{onClick:()=>l(v),style:{width:"38px",height:"48px",border:r===v?"1px solid #fff":"1px solid rgba(255,255,255,0.25)",background:y!=null&&y.url?`url(${y.url}) center/cover`:(y==null?void 0:y.color)||"#181818",cursor:"pointer",padding:0,overflow:"hidden"},children:!(y!=null&&y.url)&&a.jsx("span",{style:{fontSize:"8px",color:"rgba(255,255,255,0.3)"},children:v+1})},v))}),o&&s.length>1&&a.jsx("div",{style:{position:"absolute",left:"50%",bottom:"16px",transform:"translateX(-50%)",display:"flex",gap:"4px",zIndex:5},children:s.map((y,v)=>a.jsx("button",{onClick:()=>l(v),style:{width:"22px",height:"2px",padding:0,border:"none",background:r===v?"#fff":"rgba(255,255,255,0.3)",cursor:"pointer"}},v))})]}),a.jsxs("div",{className:"quick-view-details",style:{padding:o?"25px 18px 28px":"clamp(30px, 5vw, 55px)",overflowY:"auto",display:"flex",flexDirection:"column",justifyContent:"center",minWidth:0},children:[a.jsx("div",{style:{fontFamily:S.mono,fontSize:"8px",color:w.ash,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:"14px"},children:e.category}),a.jsx("h2",{style:{fontFamily:S.display,fontSize:o?"clamp(27px, 8vw, 38px)":"clamp(30px, 4vw, 48px)",lineHeight:.95,letterSpacing:"-0.04em",color:w.bone,textTransform:"uppercase",margin:"0 0 15px",fontWeight:700},children:e.name}),a.jsx("div",{style:{fontFamily:S.mono,fontSize:"13px",color:w.bone,marginBottom:"22px"},children:e.price}),a.jsx("div",{style:{width:"100%",height:"1px",background:"rgba(255,255,255,0.1)",marginBottom:"22px"}}),a.jsx("p",{style:{fontFamily:S.body,fontSize:o?"12px":"13px",lineHeight:1.7,color:w.ash,margin:"0 0 25px"},children:"Discover this piece from the 508ARCHIVES collection. Explore the full product page for complete details, sizing and availability."}),a.jsx("button",{onClick:()=>{t(),n(`/product/${e.id}`)},style:{width:"100%",minHeight:"50px",padding:"15px 18px",background:"#fff",color:"#000",border:"1px solid #fff",fontFamily:S.mono,fontSize:"8px",fontWeight:700,letterSpacing:"0.16em",cursor:"pointer",textTransform:"uppercase",transition:"all 0.3s ease"},children:"VIEW FULL PRODUCT →"})]})]}),a.jsx("style",{children:`
          @keyframes quickViewDesktopOpen {
            from { opacity: 0; transform: translateY(15px) scale(0.985); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes quickViewMobileOpen {
            from { opacity: 0; transform: translateY(100%); }
            to { opacity: 1; transform: translateY(0); }
          }
        `})]}):null}function Gm({product:e,index:t,onQuickView:n}){var k;const r=tt(),[l,o]=x.useState(!1),[i,s]=x.useState(!1),[u,c]=x.useState(0),h=x.useRef(null),f=((k=e.images)==null?void 0:k.length)>0?e.images:[{color:"#111"}];x.useEffect(()=>{const y=setTimeout(()=>{s(!0)},t*100);return()=>clearTimeout(y)},[t]),x.useEffect(()=>{if(!l||f.length<=1){clearInterval(h.current);return}return h.current=setInterval(()=>{c(y=>(y+1)%f.length)},1e3),()=>{clearInterval(h.current)}},[l,f.length]);const g=()=>{o(!1),clearInterval(h.current),setTimeout(()=>{c(0)},200)};return a.jsxs("article",{onMouseEnter:()=>o(!0),onMouseLeave:g,style:{minWidth:0,cursor:"pointer",opacity:i?1:0,transform:i?"translateY(0)":"translateY(25px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:[a.jsxs("div",{onClick:()=>r(`/product/${e.id}`),style:{position:"relative",width:"100%",aspectRatio:"3 / 4",background:"#111",overflow:"hidden"},children:[f.map((y,v)=>a.jsx("div",{style:{position:"absolute",inset:0,background:(y==null?void 0:y.color)||"#111",display:"flex",alignItems:"center",justifyContent:"center",opacity:u===v?1:0,transform:u===v&&l?"scale(1.025)":"scale(1)",transition:"opacity 0.55s ease, transform 1s cubic-bezier(0.2,0.7,0.2,1)"},children:y!=null&&y.url?a.jsx("img",{src:y.url,alt:`${e.name} - ${y.label||`Image ${v+1}`}`,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},loading:"lazy"}):a.jsx("span",{style:{fontFamily:S.display,fontSize:"clamp(30px, 5vw, 55px)",color:"rgba(255,255,255,0.07)",fontWeight:700,letterSpacing:"-0.04em"},children:e.id})},v)),e.badge&&a.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:5,background:"#fff",color:"#000",padding:"6px 9px",fontFamily:S.mono,fontSize:"7px",letterSpacing:"0.13em",fontWeight:700,textTransform:"uppercase"},children:e.badge}),f.length>1&&l&&a.jsx("div",{style:{position:"absolute",top:"13px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"3px",zIndex:6},children:f.map((y,v)=>a.jsx("span",{style:{width:"16px",height:"1px",background:u===v?"#fff":"rgba(255,255,255,0.3)",transition:"background 0.25s ease"}},v))}),a.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none",background:"linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.7) 100%)",opacity:l?1:0,transition:"opacity 0.4s ease"}}),a.jsx("button",{onClick:y=>{y.stopPropagation(),n(e)},style:{position:"absolute",zIndex:10,left:"12px",right:"12px",bottom:"12px",background:"#fff",color:"#000",border:"none",minHeight:"44px",padding:"12px 10px",fontFamily:S.mono,fontSize:"8px",letterSpacing:"0.15em",fontWeight:700,cursor:"pointer",textTransform:"uppercase",opacity:l?1:0,transform:l?"translateY(0)":"translateY(12px)",transition:"all 0.3s ease"},children:"QUICK VIEW →"})]}),a.jsx("div",{style:{paddingTop:"13px",paddingBottom:"8px"},children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px"},children:[a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("p",{style:{fontFamily:S.body,fontSize:"12px",color:w.bone,margin:"0 0 5px",fontWeight:500,letterSpacing:"0.01em",textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.name}),a.jsx("p",{style:{fontFamily:S.mono,fontSize:"7px",color:w.ash,margin:0,letterSpacing:"0.13em",textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.category})]}),a.jsx("p",{style:{fontFamily:S.mono,fontSize:"10px",color:w.bone,margin:0,whiteSpace:"nowrap"},children:e.price})]})})]})}function Xm(){const e=tt(),{products:t}=ql(),[n,r]=x.useState(!1),[l,o]=x.useState(null);x.useEffect(()=>{const s=()=>{r(window.innerWidth<=767)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const i=t.slice(0,4);return a.jsxs(a.Fragment,{children:[a.jsxs("section",{style:{width:"100%",background:"linear-gradient(180deg, #080808 0%, #111 100%)",padding:n?"65px 14px 75px":"clamp(80px, 10vw, 130px) clamp(18px, 5vw, 60px)",boxSizing:"border-box",overflow:"hidden"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:n?"column":"row",justifyContent:"space-between",alignItems:n?"flex-start":"flex-end",gap:"20px",marginBottom:n?"30px":"55px"},children:[a.jsx("div",{children:a.jsx("h2",{style:{fontFamily:S.display,fontSize:n?"clamp(31px, 10vw, 45px)":"clamp(38px, 6vw, 64px)",lineHeight:.95,letterSpacing:"-0.045em",fontWeight:700,color:"#fff",margin:0},children:"NEW ARRIVALS"})}),a.jsx("button",{onClick:()=>e("/shop"),style:{background:"transparent",border:"1px solid rgba(255,255,255,0.28)",color:"#fff",padding:n?"11px 16px":"12px 20px",fontFamily:S.mono,fontSize:"8px",letterSpacing:"0.15em",cursor:"pointer",textTransform:"uppercase",transition:"all 0.3s ease"},children:"VIEW ALL"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:n?"repeat(2, minmax(0, 1fr))":"repeat(4, minmax(0, 1fr))",columnGap:n?"9px":"clamp(18px, 2.5vw, 30px)",rowGap:n?"30px":"45px",width:"100%"},children:i.map((s,u)=>a.jsx(Gm,{product:s,index:u,onQuickView:o},s.id))})]}),l&&a.jsx(Km,{product:l,onClose:()=>o(null)})]})}const qm=[{id:"01",name:"Collection 01 — The Archive",year:"2026",image:"/images/collection1.jpg"},{id:"02",name:"Collection 02 — Field Notes",year:"2026",image:"/images/collection2.jpg"}];function Zm({collection:e,reverse:t}){return a.jsxs("article",{className:`collection-block ${t?"collection-reverse":""}`,children:[a.jsx("div",{className:"collection-image-wrapper",children:e.image?a.jsx("img",{src:e.image,alt:e.name,className:"collection-image",loading:"lazy"}):a.jsx("div",{className:"collection-image-placeholder",children:"IMAGE"})}),a.jsx("div",{className:"collection-copy",children:a.jsxs("div",{className:"collection-copy-inner",children:[a.jsx("h3",{className:"collection-title",children:e.name}),a.jsx("div",{className:"collection-button",children:a.jsx(Vm,{children:"Explore collection →"})})]})})]})}function Nd({collections:e=qm}){return a.jsxs("section",{className:"collections-section",style:{background:w.ink},children:[a.jsx("header",{className:"collections-header",children:a.jsx("div",{className:"collections-heading",children:a.jsx("h2",{children:"Collections"})})}),a.jsx("div",{className:"collections-list",children:e.map((t,n)=>a.jsx(Zm,{collection:t,reverse:n%2===1},t.id))}),a.jsx("style",{children:`

        /* =================================================
           SECTION
        ================================================= */

        .collections-section {
          width: 100%;
          overflow: hidden;
        }


        /* =================================================
           HEADER
        ================================================= */

        .collections-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          gap: 40px;

          padding:
            80px
            40px
            42px;
        }


        .collections-heading {
          display: flex;
          align-items: baseline;

          gap: 18px;
        }


        .collections-heading h2 {
          margin: 0;

          font-family: ${S.display};

          font-size: clamp(
            30px,
            3.5vw,
            44px
          );

          font-weight: 400;

          line-height: 1;

          letter-spacing: -0.025em;

          color: ${w.bone};
        }


        .collections-intro {
          margin: 0;

          max-width: 280px;

          font-family: ${S.body};

          font-size: 12px;

          line-height: 1.6;

          letter-spacing: 0.02em;

          color: ${w.ash};

          text-align: right;
        }


        /* =================================================
           COLLECTION BLOCK
        ================================================= */

        .collection-block {
          width: 100%;

          display: flex;

          border-top:
            1px solid ${w.line};

          border-bottom:
            1px solid ${w.line};

          min-height: 520px;
        }


        /* =================================================
           ALTERNATING DESKTOP LAYOUT
        ================================================= */

        .collection-block.collection-reverse {
          flex-direction: row-reverse;
        }


        /* =================================================
           IMAGE
        ================================================= */

        .collection-image-wrapper {
          position: relative;

          flex: 1;

          min-width: 0;

          aspect-ratio: 16 / 10;

          overflow: hidden;

          background: #141210;
        }


        .collection-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.8s
            cubic-bezier(
              0.2,
              0.7,
              0.2,
              1
            );

          filter: saturate(0.88);
        }


        /* =================================================
           IMAGE HOVER
        ================================================= */

        .collection-block:hover
        .collection-image {
          transform: scale(1.035);

          filter: saturate(1);
        }


        /* =================================================
           IMAGE PLACEHOLDER
        ================================================= */

        .collection-image-placeholder {
          width: 100%;
          height: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          font-family: ${S.mono};

          font-size: 11px;

          letter-spacing: 0.08em;

          color: ${w.line};
        }


        /* =================================================
           COPY
        ================================================= */

        .collection-copy {
          flex: 1;

          min-width: 0;

          display: flex;

          align-items: center;

          background: ${w.ink};

          padding:
            50px;
        }


        .collection-copy-inner {
          width: 100%;

          max-width: 460px;
        }


        /* =================================================
           META
        ================================================= */

        .collection-meta {
          margin: 0 0 18px;

          font-family: ${S.mono};

          font-size: 10px;

          line-height: 1.5;

          letter-spacing: 0.1em;

          text-transform: uppercase;

          color: ${w.ash};
        }


        /* =================================================
           TITLE
        ================================================= */

        .collection-title {
          margin: 0;

          font-family: ${S.display};

          font-size: clamp(
            28px,
            3.2vw,
            42px
          );

          font-weight: 400;

          line-height: 1.05;

          letter-spacing: -0.025em;

          color: ${w.bone};
        }


        /* =================================================
           DIVIDER
        ================================================= */

        .collection-divider {
          width: 45px;

          height: 1px;

          margin:
            28px
            0
            22px;

          background:
            ${w.line};
        }


        /* =================================================
           DESCRIPTION
        ================================================= */

        .collection-description {
          max-width: 340px;

          margin: 0;

          font-family: ${S.body};

          font-size: 12px;

          line-height: 1.7;

          letter-spacing: 0.015em;

          color: ${w.ash};
        }


        /* =================================================
           BUTTON
        ================================================= */

        .collection-button {
          margin-top: 30px;
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {

          .collections-header {
            padding:
              65px
              24px
              35px;
          }


          .collection-copy {
            padding:
              35px;
          }


          .collection-title {
            font-size:
              clamp(
                26px,
                4vw,
                36px
              );
          }


          .collection-description {
            font-size: 11px;
          }

        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 720px) {

          /* ---------------------------------------------
             HEADER
          ---------------------------------------------- */

          .collections-header {
            display: block;

            padding:
              65px
              18px
              30px;
          }


          .collections-heading {
            display: flex;

            flex-direction: column;

            align-items: flex-start;

            gap: 12px;
          }


          .collections-heading h2 {
            font-size: 36px;
          }


          .collections-intro {
            max-width: 320px;

            margin-top: 18px;

            text-align: left;

            font-size: 11px;

            line-height: 1.6;
          }


          /* ---------------------------------------------
             COLLECTION
          ---------------------------------------------- */

          .collection-block,
          .collection-block.collection-reverse {

            display: flex;

            flex-direction: column;

            min-height: auto;
          }


          /* ---------------------------------------------
             IMAGE
          ---------------------------------------------- */

          .collection-image-wrapper {

            width: 100%;

            aspect-ratio: 4 / 5;

            flex: none;
          }


          .collection-image {

            object-position: center center;
          }


          /* ---------------------------------------------
             COPY
          ---------------------------------------------- */

          .collection-copy {

            width: 100%;

            flex: none;

            padding:
              28px
              18px
              34px;

            display: block;
          }


          .collection-copy-inner {

            max-width: none;

            width: 100%;
          }


          /* ---------------------------------------------
             META
          ---------------------------------------------- */

          .collection-meta {

            margin-bottom: 14px;

            font-size: 9px;

            letter-spacing: 0.09em;
          }


          /* ---------------------------------------------
             TITLE
          ---------------------------------------------- */

          .collection-title {

            font-size: 32px;

            line-height: 1.05;

            max-width: 340px;
          }


          /* ---------------------------------------------
             DIVIDER
          ---------------------------------------------- */

          .collection-divider {

            margin:
              22px
              0
              18px;
          }


          /* ---------------------------------------------
             DESCRIPTION
          ---------------------------------------------- */

          .collection-description {

            max-width: 340px;

            font-size: 12px;

            line-height: 1.65;
          }


          /* ---------------------------------------------
             BUTTON
          ---------------------------------------------- */

          .collection-button {

            width: 100%;

            margin-top: 26px;
          }


          .collection-button > * {

            width: 100%;
          }

        }


        /* =================================================
           SMALL PHONES
        ================================================= */

        @media (max-width: 390px) {

          .collections-header {

            padding:
              55px
              14px
              26px;
          }


          .collections-heading h2 {

            font-size: 32px;
          }


          .collections-intro {

            font-size: 10px;

            max-width: 290px;
          }


          .collection-image-wrapper {

            aspect-ratio: 4 / 5;
          }


          .collection-copy {

            padding:
              24px
              14px
              30px;
          }


          .collection-title {

            font-size: 29px;
          }


          .collection-description {

            font-size: 11px;
          }

        }


        /* =================================================
           TOUCH DEVICES
        ================================================= */

        @media (hover: none) {

          .collection-block:hover
          .collection-image {

            transform: none;

            filter: saturate(0.88);
          }

        }

      `})]})}const en=[{id:"LB-001",type:"image",src:"/images/look1.jpg",color:"#1a1a1a"},{id:"LB-002",type:"video",src:"/videos/look2.mp4",poster:"/images/poster2.jpg",color:"#2a2a2a"},{id:"LB-003",type:"image",src:"/images/look3.jpg",color:"#3a3a3a"},{id:"LB-004",type:"video",src:"/videos/look4.mp4",poster:"/images/poster2.jpg",color:"#5a5a5a"}];function Qs({frame:e,active:t,onClick:n,muted:r=!0,controls:l=!1,autoPlay:o=!0}){const i=x.useRef(null);return x.useEffect(()=>{const s=i.current;s&&(t&&o?s.play().catch(()=>{}):s.pause())},[t,o]),e.type==="video"&&e.src?a.jsx("video",{ref:i,src:e.src,poster:e.poster||void 0,muted:r,loop:!0,playsInline:!0,controls:l,onClick:n,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",cursor:n?"pointer":"default"}}):e.type==="image"&&e.src?a.jsx("img",{src:e.src,alt:"",onClick:n,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",cursor:n?"pointer":"default"}}):a.jsx("div",{onClick:n,style:{width:"100%",height:"100%",background:e.color||"#222",cursor:n?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:S.mono,fontSize:"12px",color:"rgba(255,255,255,0.3)"},children:e.type==="video"?"VIDEO":"IMAGE"})}function Td(){const[e,t]=x.useState(0),[n,r]=x.useState(!1),l=()=>t(s=>(s+1)%en.length),o=()=>t(s=>(s-1+en.length)%en.length);x.useEffect(()=>{if(!n)return;const s=u=>{u.key==="ArrowRight"&&l(),u.key==="ArrowLeft"&&o(),u.key==="Escape"&&r(!1)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[n]);const i=en[e];return a.jsxs("div",{style:{background:"#0a0a0a",minHeight:"100vh",padding:"100px 0",borderTop:`1px solid ${w.line}`,position:"relative"},children:[a.jsx("div",{style:{padding:"0 24px 40px",maxWidth:"1400px",margin:"0 auto"},children:a.jsx("h2",{style:{fontFamily:S.display,fontSize:"clamp(36px, 6vw, 64px)",color:w.bone,margin:0,letterSpacing:"-0.03em",lineHeight:"1",fontWeight:"700"},children:"LOOKBOOK"})}),a.jsx("div",{style:{padding:"0 24px",maxWidth:"1400px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"4px"},children:en.map((s,u)=>a.jsxs("div",{style:{position:"relative",aspectRatio:"4/5",overflow:"hidden",background:"#111"},children:[a.jsx(Qs,{frame:s,active:!1,autoPlay:!1,onClick:()=>{t(u),r(!0)}}),a.jsx("span",{style:{position:"absolute",top:"12px",left:"12px",fontFamily:S.mono,fontSize:"10px",color:"rgba(255,255,255,0.6)",letterSpacing:"0.15em",pointerEvents:"none"},children:String(u+1).padStart(2,"0")}),s.type==="video"&&a.jsx("span",{style:{position:"absolute",top:"12px",right:"12px",width:"20px",height:"20px",borderRadius:"50%",background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:a.jsx("span",{style:{width:0,height:0,borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"6px solid #fff",marginLeft:"2px"}})})]},s.id))}),n&&a.jsxs("div",{onClick:()=>r(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.95)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},children:[a.jsx("div",{onClick:s=>s.stopPropagation(),style:{position:"relative",width:"min(90vw, 900px)",aspectRatio:"4/5",maxHeight:"85vh"},children:a.jsx(Qs,{frame:i,active:!0,controls:i.type==="video",muted:!1,autoPlay:!0})}),a.jsx("button",{onClick:s=>{s.stopPropagation(),o()},"aria-label":"Previous",style:{position:"fixed",left:"24px",top:"50%",transform:"translateY(-50%)",width:"48px",height:"48px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"#fff",cursor:"pointer",fontSize:"18px"},children:"←"}),a.jsx("button",{onClick:s=>{s.stopPropagation(),l()},"aria-label":"Next",style:{position:"fixed",right:"24px",top:"50%",transform:"translateY(-50%)",width:"48px",height:"48px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"#fff",cursor:"pointer",fontSize:"18px"},children:"→"}),a.jsx("button",{onClick:()=>r(!1),"aria-label":"Close",style:{position:"fixed",top:"24px",right:"24px",width:"40px",height:"40px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"#fff",cursor:"pointer",fontSize:"16px"},children:"✕"}),a.jsxs("div",{style:{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",fontFamily:S.mono,fontSize:"10px",color:"rgba(255,255,255,0.6)",letterSpacing:"0.2em"},children:[String(e+1).padStart(2,"0")," / ",String(en.length).padStart(2,"0")]})]})]})}const N={bg:"#0a0a0a",ink:"#f5f3ef",subtle:"#8a8a8a",line:"rgba(245,243,239,0.12)",matte:"#161513",matteHover:"#1e1c19"};function Jm(){var _,V,J;const{id:e}=Vh(),t=tt(),{getProductById:n,products:r}=ql(),{addToCart:l}=Ln(),o=n(e),[i,s]=x.useState(""),[u,c]=x.useState(""),[h,f]=x.useState(0),[g,k]=x.useState(1),[y,v]=x.useState("details"),[C,p]=x.useState(!1),[d,m]=x.useState(!1),[j,b]=x.useState(!1),E=x.useRef(null);if(x.useEffect(()=>{var $,B;window.scrollTo({top:0,behavior:"instant"}),o&&(s((($=o.sizes)==null?void 0:$[0])||""),c(((B=o.colors)==null?void 0:B[0])||""),f(0),k(1),p(!1))},[e,o]),!o)return a.jsxs("div",{style:{minHeight:"100vh",background:N.bg,color:N.ink,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"40px 20px"},children:[a.jsx("p",{style:{fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.25em",color:N.subtle,marginBottom:"18px"},children:"404"}),a.jsx("h1",{style:{fontFamily:S.display,fontSize:"clamp(32px, 6vw, 64px)",margin:"0 0 20px",letterSpacing:"-0.03em"},children:"PRODUCT NOT FOUND"}),a.jsx("button",{onClick:()=>t("/shop"),style:{background:N.ink,color:N.bg,border:"none",padding:"15px 28px",fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.15em",fontWeight:"700",cursor:"pointer"},children:"BACK TO SHOP"})]});const R=o.images&&o.images.length>0?o.images:[{color:N.matte}],L=o.sizes||[],D=o.colors||[],F=o.details||[],ce=r.filter($=>$.category===o.category&&$.id!==o.id).slice(0,4),q=R[h]||R[0],Ke=()=>f($=>$===0?R.length-1:$-1),It=()=>f($=>$===R.length-1?0:$+1),Ce=$=>{E.current=$.touches[0].clientX},Xt=$=>{if(E.current===null||R.length<=1)return;const B=$.changedTouches[0].clientX-E.current,Zt=40;B>Zt?Ke():B<-Zt&&It(),E.current=null},qt=()=>{l(o,i,u,g),p(!0),setTimeout(()=>{p(!1)},2500)},P=()=>{k($=>Math.max(1,$-1))},I=()=>{k($=>$+1)};return a.jsxs("div",{className:"product-page",children:[a.jsxs("div",{className:"product-wrapper",children:[a.jsxs("div",{className:"breadcrumb",children:[a.jsx(ae,{to:"/",children:"HOME"}),a.jsx("span",{children:"/"}),a.jsx(ae,{to:"/shop",children:"SHOP"}),a.jsx("span",{children:"/"}),a.jsx("span",{className:"breadcrumb-current",children:(_=o.name)==null?void 0:_.toUpperCase()})]}),a.jsxs("main",{className:"product-layout",children:[a.jsxs("section",{className:"gallery",children:[a.jsxs("div",{className:"gallery-body",children:[R.length>1&&a.jsx("div",{className:"thumbnail-rail",children:R.map(($,B)=>a.jsx("button",{className:`thumbnail ${h===B?"thumbnail-active":""}`,onClick:()=>f(B),style:{background:N.matte},"aria-label":`View image ${B+1}`,children:$.url?a.jsx("img",{src:$.url,alt:"",draggable:"false"}):a.jsx("span",{children:B+1})},B))}),a.jsxs("div",{className:"main-image",onTouchStart:Ce,onTouchEnd:Xt,style:{background:q!=null&&q.url?N.matte:(q==null?void 0:q.color)||N.matte},children:[q!=null&&q.url?a.jsx("img",{className:"main-image-img",src:q.url,alt:o.name,draggable:"false"}):a.jsx("div",{className:"image-placeholder",children:a.jsx("span",{children:(V=o.name)==null?void 0:V.charAt(0)})}),o.badge&&a.jsx("div",{className:"product-badge",children:o.badge}),a.jsx("button",{className:"zoom-trigger",onClick:()=>b(!0),"aria-label":"Zoom image",children:a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("circle",{cx:"11",cy:"11",r:"7",stroke:"currentColor",strokeWidth:"2"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),R.length>1&&a.jsxs("div",{className:"image-counter",children:[String(h+1).padStart(2,"0")," ","/"," ",String(R.length).padStart(2,"0")]})]})]}),R.length>1&&a.jsx("div",{className:"thumbnail-row",children:R.map(($,B)=>a.jsx("button",{className:`thumbnail ${h===B?"thumbnail-active":""}`,onClick:()=>f(B),style:{background:N.matte},"aria-label":`View image ${B+1}`,children:$.url?a.jsx("img",{src:$.url,alt:"",draggable:"false"}):a.jsx("span",{children:B+1})},B))}),a.jsxs("button",{className:"mobile-info-trigger",onClick:()=>m(!d),children:[a.jsx("span",{children:"PRODUCT INFORMATION"}),a.jsx("span",{className:d?"rotate-icon":"",children:"+"})]}),d&&a.jsx("div",{className:"mobile-product-information",children:a.jsx(Ys,{product:o,sizes:L,colors:D,selectedSize:i,setSelectedSize:s,selectedColor:u,setSelectedColor:c,quantity:g,decreaseQuantity:P,increaseQuantity:I,handleAddToCart:qt,added:C})})]}),a.jsx("aside",{className:"product-information-desktop",children:a.jsx("div",{className:"sticky-information",children:a.jsx(Ys,{product:o,sizes:L,colors:D,selectedSize:i,setSelectedSize:s,selectedColor:u,setSelectedColor:c,quantity:g,decreaseQuantity:P,increaseQuantity:I,handleAddToCart:qt,added:C})})})]}),a.jsxs("section",{className:"details-section",children:[a.jsx("div",{className:"details-heading",children:a.jsx("span",{children:"THE DETAILS"})}),a.jsxs("div",{className:"details-content",children:[a.jsxs("div",{className:"details-tabs",children:[a.jsx("button",{className:y==="details"?"active":"",onClick:()=>v("details"),children:"DETAILS"}),a.jsx("button",{className:y==="shipping"?"active":"",onClick:()=>v("shipping"),children:"SHIPPING"}),a.jsx("button",{className:y==="care"?"active":"",onClick:()=>v("care"),children:"CARE"})]}),a.jsxs("div",{className:"details-panel",children:[y==="details"&&a.jsxs(a.Fragment,{children:[o.description&&a.jsx("p",{className:"description",children:o.description}),F.length>0&&a.jsx("ul",{className:"detail-list",children:F.map(($,B)=>a.jsxs("li",{children:[a.jsx("span",{children:"—"}),$]},B))}),F.length===0&&!o.description&&a.jsx("p",{className:"description",children:"Designed as part of the 508 Archives collection."})]}),y==="shipping"&&a.jsxs("div",{className:"shipping-content",children:[a.jsx("p",{children:"Orders are processed within 2–3 business days."}),a.jsx("p",{children:"Free worldwide shipping on orders over ₦100,000."}),a.jsx("p",{children:"Delivery times vary depending on destination."})]}),y==="care"&&a.jsxs("div",{className:"shipping-content",children:[a.jsx("p",{children:"Follow the care instructions provided with your garment."}),a.jsx("p",{children:"We recommend washing garments according to their individual care labels."})]})]})]})]}),ce.length>0&&a.jsxs("section",{className:"related-section",children:[a.jsxs("div",{className:"related-header",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow",children:"FROM THE ARCHIVE"}),a.jsx("h2",{children:"YOU MAY ALSO LIKE"})]}),a.jsx(ae,{to:"/shop",children:"VIEW ALL →"})]}),a.jsx("div",{className:"related-grid",children:ce.map($=>a.jsx(eg,{product:$,onClick:()=>t(`/product/${$.id}`)},$.id))})]})]}),j&&a.jsxs("div",{className:"zoom-overlay",onClick:()=>b(!1),onTouchStart:Ce,onTouchEnd:Xt,children:[a.jsx("button",{className:"zoom-close",onClick:()=>b(!1),"aria-label":"Close zoom",children:"✕"}),q!=null&&q.url?a.jsx("img",{className:"zoom-image",src:q.url,alt:o.name,draggable:"false"}):a.jsx("div",{className:"image-placeholder",children:a.jsx("span",{children:(J=o.name)==null?void 0:J.charAt(0)})}),R.length>1&&a.jsxs("div",{className:"zoom-counter",children:[String(h+1).padStart(2,"0")," /"," ",String(R.length).padStart(2,"0")]})]}),a.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }

        .product-page {
          min-height: 100vh;
          background: ${N.bg};
          color: ${N.ink};
          padding-top: 80px;
        }

        .product-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* ==========================================
           BREADCRUMB
        ========================================== */

        .breadcrumb {
          height: 60px;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid ${N.line};

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: 0.16em;
          color: ${N.subtle};
        }

        .breadcrumb a {
          color: ${N.subtle};
          text-decoration: none;
          transition: color .25s ease;
        }

        .breadcrumb a:hover {
          color: ${N.ink};
        }

        .breadcrumb-current {
          color: ${N.ink};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 250px;
        }

        /* ==========================================
           MAIN LAYOUT
        ========================================== */

        .product-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(360px, .7fr);
          gap: 80px;
          padding: 48px 40px;
        }

        /* ==========================================
           GALLERY
           — images are CONTAINED (object-fit: contain)
             on a soft dark matte, so nothing gets
             cropped, stretched, or looks "wide"/distorted
        ========================================== */

        .gallery {
          min-width: 0;
        }

        .gallery-body {
          display: flex;
          gap: 14px;
        }

        .thumbnail-rail {
          display: flex;
          flex-direction: column;
          gap: 10px;

          width: 76px;
          flex: 0 0 auto;
        }

        .main-image {
          flex: 1;
          min-width: 0;

          width: 100%;
          aspect-ratio: 4 / 5;
          max-height: 760px;

          position: relative;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          touch-action: pan-y;
        }

        .main-image-img {
          width: 100%;
          height: 100%;
          display: block;

          /* KEY FIX: contain, not cover — the full garment is
             always visible, centered, at correct proportions */
          object-fit: contain;
          object-position: center;

          padding: 22px;

          user-select: none;
          transition: transform .6s cubic-bezier(.2,.6,.2,1);
        }

        .main-image:hover .main-image-img {
          transform: scale(1.02);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder span {
          font-family: ${S.display};
          font-size: clamp(80px, 12vw, 180px);
          font-weight: 800;
          color: rgba(245,243,239,.06);
        }

        .product-badge {
          position: absolute;
          top: 20px;
          left: 20px;

          background: ${N.ink};
          color: ${N.bg};

          padding: 7px 12px;

          font-family: ${S.mono};
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        /* Zoom/magnify trigger — replaces arrow nav */

        .zoom-trigger {
          position: absolute;
          top: 20px;
          right: 20px;

          width: 38px;
          height: 38px;

          border-radius: 50%;

          border: 1px solid ${N.line};
          background: rgba(10,10,10,.55);
          backdrop-filter: blur(8px);

          color: ${N.ink};

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          opacity: 0;
          transition: all .25s ease;
        }

        .main-image:hover .zoom-trigger {
          opacity: 1;
        }

        .zoom-trigger:hover {
          background: ${N.ink};
          color: ${N.bg};
        }

        .image-counter {
          position: absolute;
          right: 20px;
          bottom: 20px;

          padding: 8px 11px;

          background: rgba(10,10,10,.6);
          backdrop-filter: blur(8px);
          border: 1px solid ${N.line};

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: .1em;
          color: ${N.ink};
        }

        /* ==========================================
           ZOOM OVERLAY
        ========================================== */

        .zoom-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;

          background: rgba(5,5,5,.97);

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 40px;

          touch-action: pan-y;
        }

        .zoom-image {
          max-width: 100%;
          max-height: 100%;

          object-fit: contain;

          user-select: none;
        }

        .zoom-close {
          position: fixed;
          top: 24px;
          right: 24px;

          width: 40px;
          height: 40px;

          border-radius: 50%;

          border: 1px solid ${N.line};
          background: rgba(245,243,239,.08);

          color: ${N.ink};

          font-size: 16px;

          cursor: pointer;
        }

        .zoom-counter {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);

          font-family: ${S.mono};
          font-size: 10px;
          letter-spacing: .2em;
          color: ${N.subtle};
        }

        /* ==========================================
           THUMBNAILS
           (rail on desktop, row on mobile — same
           contained image treatment as main image)
        ========================================== */

        .thumbnail-row {
          display: none;
        }

        .thumbnail {
          width: 76px;
          height: 96px;

          flex: 0 0 auto;

          border: 1px solid ${N.line};

          padding: 6px;

          color: rgba(245,243,239,.35);

          cursor: pointer;

          overflow: hidden;

          position: relative;

          transition: border-color .25s ease, background .25s ease;
        }

        .thumbnail:hover {
          border-color: rgba(245,243,239,.4);
          background: ${N.matteHover};
        }

        .thumbnail-active {
          border: 1.5px solid ${N.ink};
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .thumbnail span {
          font-family: ${S.mono};
          font-size: 11px;
        }

        /* ==========================================
           PRODUCT INFORMATION
        ========================================== */

        .product-information-desktop {
          min-width: 0;
        }

        .sticky-information {
          position: sticky;
          top: 110px;
        }

        .product-info {
          display: flex;
          flex-direction: column;
        }

        .product-category {
          margin: 0 0 14px;

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: .2em;
          color: ${N.subtle};
          text-transform: uppercase;
        }

        .product-title {
          margin: 0 0 16px;

          font-family: ${S.display};
          font-size: clamp(32px, 3.4vw, 52px);
          line-height: 1;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .product-price {
          margin: 0;

          font-family: ${S.mono};
          font-size: 16px;
          letter-spacing: .04em;
          color: ${N.ink};
        }

        .product-divider {
          width: 100%;
          height: 1px;
          background: ${N.line};
          margin: 28px 0;
        }

        .product-description {
          margin: 0;

          font-family: ${S.body};
          font-size: 13px;
          line-height: 1.9;
          color: #aaa;
          max-width: 480px;
        }

        /* ==========================================
           OPTIONS
        ========================================== */

        .option-block {
          margin-top: 28px;
        }

        .option-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-bottom: 12px;
        }

        .option-label {
          margin: 0;

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: ${N.ink};
        }

        .selected-option {
          color: ${N.subtle};
          font-family: ${S.mono};
          font-size: 9px;
        }

        .size-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .size-button {
          min-width: 50px;
          height: 44px;

          padding: 0 14px;

          background: transparent;
          border: 1px solid rgba(245,243,239,.22);

          color: ${N.ink};

          font-family: ${S.mono};
          font-size: 10px;
          letter-spacing: .08em;

          cursor: pointer;

          transition: all .25s ease;
        }

        .size-button:hover {
          border-color: ${N.ink};
        }

        .size-button.selected {
          background: ${N.ink};
          border-color: ${N.ink};
          color: ${N.bg};
        }

        /* ==========================================
           COLORS
        ========================================== */

        .color-grid {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .color-button {
          width: 28px;
          height: 28px;

          border-radius: 50%;

          cursor: pointer;

          position: relative;

          border: 1px solid rgba(245,243,239,.18);

          transition: transform .25s ease;
        }

        .color-button:hover {
          transform: scale(1.08);
        }

        .color-button.selected {
          outline: 1px solid ${N.ink};
          outline-offset: 3px;
        }

        /* ==========================================
           QUANTITY
        ========================================== */

        .purchase-row {
          display: flex;
          gap: 10px;
          margin-top: 30px;
        }

        .quantity-control {
          width: 120px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border: 1px solid rgba(245,243,239,.2);
        }

        .quantity-control button {
          width: 38px;
          height: 100%;

          border: none;
          background: transparent;

          color: ${N.ink};

          cursor: pointer;

          font-size: 16px;
        }

        .quantity-control button:hover {
          background: ${N.matte};
        }

        .quantity-value {
          font-family: ${S.mono};
          font-size: 11px;
        }

        .add-button {
          flex: 1;

          min-height: 52px;

          border: 1px solid ${N.ink};
          background: ${N.ink};
          color: ${N.bg};

          font-family: ${S.mono};
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;

          cursor: pointer;

          transition: all .3s ease;
        }

        .add-button:hover {
          background: transparent;
          color: ${N.ink};
        }

        .add-button.added {
          background: ${N.matte};
          color: ${N.ink};
          border-color: rgba(245,243,239,.2);
        }

        /* ==========================================
           MOBILE INFO
        ========================================== */

        .mobile-info-trigger,
        .mobile-product-information {
          display: none;
        }

        /* ==========================================
           DETAILS
        ========================================== */

        .details-section {
          margin-top: 20px;

          padding: 70px 40px;

          border-top: 1px solid ${N.line};
          border-bottom: 1px solid ${N.line};

          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 80px;
        }

        .details-heading span {
          font-family: ${S.mono};
          font-size: 10px;
          letter-spacing: .2em;
          color: ${N.subtle};
        }

        .details-content {
          max-width: 700px;
        }

        .details-tabs {
          display: flex;
          gap: 30px;

          border-bottom: 1px solid ${N.line};
        }

        .details-tabs button {
          position: relative;

          background: transparent;
          border: none;

          padding: 0 0 14px;

          color: ${N.subtle};

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: .15em;

          cursor: pointer;
        }

        .details-tabs button.active {
          color: ${N.ink};
        }

        .details-tabs button.active::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -1px;

          width: 100%;
          height: 1px;

          background: ${N.ink};
        }

        .details-panel {
          padding-top: 25px;
        }

        .description,
        .shipping-content p {
          margin: 0 0 18px;

          color: #aaa;

          font-family: ${S.body};
          font-size: 13px;
          line-height: 1.9;
        }

        .detail-list {
          list-style: none;
          padding: 0;
          margin: 25px 0 0;
        }

        .detail-list li {
          display: flex;
          gap: 12px;

          margin-bottom: 13px;

          color: #aaa;

          font-family: ${S.body};
          font-size: 13px;
          line-height: 1.7;
        }

        .detail-list li span {
          color: ${N.ink};
        }

        /* ==========================================
           RELATED
        ========================================== */

        .related-section {
          padding: 90px 40px;
        }

        .related-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          margin-bottom: 35px;
        }

        .eyebrow {
          display: block;

          margin-bottom: 12px;

          color: ${N.subtle};

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: .2em;
        }

        .related-header h2 {
          margin: 0;

          font-family: ${S.display};
          font-size: clamp(28px, 3.4vw, 42px);
          line-height: 1;
          letter-spacing: -.03em;
        }

        .related-header a {
          color: ${N.ink};

          font-family: ${S.mono};
          font-size: 9px;
          letter-spacing: .14em;

          text-decoration: none;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .related-card {
          cursor: pointer;
        }

        .related-image {
          aspect-ratio: 3 / 4;

          position: relative;
          overflow: hidden;

          background: ${N.matte};

          margin-bottom: 14px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          display: block;

          /* contained, same as PDP — related cards never
             show stretched/cropped-wide product photos */
          object-fit: contain;
          padding: 16px;

          transition: transform .5s cubic-bezier(.2,.6,.2,1);
        }

        .related-card:hover .related-image img {
          transform: scale(1.03);
        }

        .related-placeholder {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: ${S.display};
          font-size: 46px;

          color: rgba(245,243,239,.08);
        }

        .related-name {
          margin: 0 0 6px;

          color: ${N.ink};

          font-family: ${S.body};
          font-size: 13px;
        }

        .related-price {
          margin: 0;

          color: ${N.subtle};

          font-family: ${S.mono};
          font-size: 10px;
        }

        /* ==========================================
           RESPONSIVE — TABLET
        ========================================== */

        @media (max-width: 1100px) {

          .product-layout {
            grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr);
            gap: 40px;
            padding: 30px;
          }

          .details-section {
            padding: 60px 30px;
            gap: 40px;
          }

          .related-section {
            padding: 70px 30px;
          }

          .related-grid {
            grid-template-columns: repeat(3, 1fr);
          }

        }

        /* ==========================================
           RESPONSIVE — MOBILE
        ========================================== */

        @media (max-width: 768px) {

          .product-page {
            padding-top: 64px;
          }

          .breadcrumb {
            height: 50px;
            padding: 0 16px;

            gap: 8px;

            font-size: 8px;
          }

          .breadcrumb-current {
            max-width: 150px;
          }

          .product-layout {
            display: block;
            padding: 0;
          }

          .gallery {
            width: 100%;
          }

          .gallery-body {
            display: block;
          }

          .thumbnail-rail {
            display: none;
          }

          .main-image {
            aspect-ratio: 4 / 5;
            max-height: none;
          }

          .main-image-img {
            padding: 14px;
          }

          .product-badge {
            top: 14px;
            left: 14px;

            padding: 6px 9px;

            font-size: 7px;
          }

          .zoom-trigger {
            opacity: 1;

            top: 14px;
            right: 14px;

            width: 34px;
            height: 34px;
          }

          .image-counter {
            right: 14px;
            bottom: 14px;
          }

          .zoom-overlay {
            padding: 20px;
          }

          .thumbnail-row {
            display: flex;
            gap: 10px;

            padding: 0 16px;
            margin-top: 10px;

            overflow-x: auto;
            scrollbar-width: none;
          }

          .thumbnail-row::-webkit-scrollbar {
            display: none;
          }

          .thumbnail {
            width: 64px;
            height: 80px;
          }

          .product-information-desktop {
            display: none;
          }

          .mobile-info-trigger {
            width: 100%;

            margin-top: 22px;
            padding: 19px 16px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            background: transparent;

            border-top: 1px solid ${N.line};
            border-bottom: 1px solid ${N.line};

            color: ${N.ink};

            font-family: ${S.mono};
            font-size: 9px;
            letter-spacing: .16em;

            cursor: pointer;
          }

          .mobile-info-trigger span:last-child {
            font-size: 18px;
            transition: transform .25s ease;
          }

          .rotate-icon {
            transform: rotate(45deg);
          }

          .mobile-product-information {
            display: block;
            padding: 30px 16px 40px;
          }

          .product-title {
            font-size: clamp(30px, 9vw, 44px);
          }

          .product-description {
            font-size: 13px;
          }

          .product-divider {
            margin: 24px 0;
          }

          .option-block {
            margin-top: 24px;
          }

          .purchase-row {
            position: sticky;
            bottom: 0;

            z-index: 20;

            margin-left: -16px;
            margin-right: -16px;

            padding: 12px 16px;

            background: rgba(10,10,10,.9);
            backdrop-filter: blur(14px);

            border-top: 1px solid ${N.line};
          }

          .quantity-control {
            width: 100px;
          }

          .add-button {
            min-height: 48px;
          }

          .details-section {
            display: block;

            padding: 50px 16px;
            margin-top: 0;
          }

          .details-heading {
            margin-bottom: 28px;
          }

          .details-tabs {
            gap: 22px;
            overflow-x: auto;
          }

          .details-panel {
            padding-top: 22px;
          }

          .related-section {
            padding: 55px 16px;
          }

          .related-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .related-header h2 {
            font-size: 30px;
          }

          .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 10px;
          }

          .related-name {
            font-size: 12px;
          }

        }

        /* ==========================================
           SMALL PHONES
        ========================================== */

        @media (max-width: 420px) {

          .product-page {
            padding-top: 58px;
          }

          .purchase-row {
            gap: 7px;
          }

          .quantity-control {
            width: 88px;
          }

          .quantity-control button {
            width: 28px;
          }

          .add-button {
            font-size: 9px;
            letter-spacing: .1em;
          }

          .related-grid {
            gap: 16px 8px;
          }

          .related-header h2 {
            font-size: 26px;
          }

        }

      `})]})}function Ys({product:e,sizes:t,colors:n,selectedSize:r,setSelectedSize:l,selectedColor:o,setSelectedColor:i,quantity:s,decreaseQuantity:u,increaseQuantity:c,handleAddToCart:h,added:f}){return a.jsxs("div",{className:"product-info",children:[a.jsx("p",{className:"product-category",children:e.category||"THE ARCHIVE"}),a.jsx("h1",{className:"product-title",children:e.name}),a.jsx("p",{className:"product-price",children:e.price}),a.jsx("div",{className:"product-divider"}),e.description&&a.jsx("p",{className:"product-description",children:e.description}),t.length>0&&a.jsxs("div",{className:"option-block",children:[a.jsxs("div",{className:"option-label-row",children:[a.jsx("p",{className:"option-label",children:"SIZE"}),r&&a.jsx("span",{className:"selected-option",children:r})]}),a.jsx("div",{className:"size-grid",children:t.map(g=>a.jsx("button",{className:`size-button ${r===g?"selected":""}`,onClick:()=>l(g),children:g},g))})]}),n.length>0&&a.jsxs("div",{className:"option-block",children:[a.jsxs("div",{className:"option-label-row",children:[a.jsx("p",{className:"option-label",children:"COLOR"}),o&&a.jsx("span",{className:"selected-option",children:o})]}),a.jsx("div",{className:"color-grid",children:n.map(g=>a.jsx("button",{className:`color-button ${o===g?"selected":""}`,onClick:()=>i(g),style:{background:g},"aria-label":`Select ${g}`},g))})]}),a.jsxs("div",{className:"purchase-row",children:[a.jsxs("div",{className:"quantity-control",children:[a.jsx("button",{onClick:u,"aria-label":"Decrease quantity",children:"−"}),a.jsx("span",{className:"quantity-value",children:String(s).padStart(2,"0")}),a.jsx("button",{onClick:c,"aria-label":"Increase quantity",children:"+"})]}),a.jsx("button",{className:`add-button ${f?"added":""}`,onClick:h,children:f?"ADDED TO CART ✓":`ADD TO CART — ${e.price}`})]})]})}function eg({product:e,onClick:t}){var i;const[n,r]=x.useState(!1),l=e.images&&e.images.length?e.images:[{color:"#161513"}],o=l[n&&l.length>1?1:0];return a.jsxs("div",{className:"related-card",onClick:t,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[a.jsx("div",{className:"related-image",style:{background:o!=null&&o.url?"#161513":(o==null?void 0:o.color)||"#161513"},children:o!=null&&o.url?a.jsx("img",{src:o.url,alt:e.name,draggable:"false"}):a.jsx("div",{className:"related-placeholder",children:(i=e.name)==null?void 0:i.charAt(0)})}),a.jsx("p",{className:"related-name",children:e.name}),a.jsx("p",{className:"related-price",children:e.price})]})}function bi(e){return e?typeof e=="string"?e:e.url||e.src||e.image||e.path||e.imageUrl||null:null}function zi(e){return!e||typeof e!="object"?"#151515":e.color||"#151515"}function tg(){const e=tt(),[t]=Om(),{products:n=[]}=ql(),{addToCart:r}=Ln(),[l,o]=x.useState("All"),[i,s]=x.useState("featured"),[u,c]=x.useState(""),[h,f]=x.useState(null),g=x.useMemo(()=>["All",...new Set(n.map(v=>v.category).filter(Boolean))],[n]);x.useEffect(()=>{const v=t.get("search");v&&c(v)},[t]),x.useEffect(()=>(h?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[h]),x.useEffect(()=>{const v=C=>{C.key==="Escape"&&f(null)};return window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}},[]);const k=x.useMemo(()=>{let v=[...n];if(u.trim()){const C=u.toLowerCase();v=v.filter(p=>{var d,m;return((d=p.name)==null?void 0:d.toLowerCase().includes(C))||((m=p.category)==null?void 0:m.toLowerCase().includes(C))})}switch(l!=="All"&&(v=v.filter(C=>C.category===l)),i){case"price-low":v.sort((C,p)=>Number(C.priceValue||0)-Number(p.priceValue||0));break;case"price-high":v.sort((C,p)=>Number(p.priceValue||0)-Number(C.priceValue||0));break;case"newest":v.sort((C,p)=>Number(p.id||0)-Number(C.id||0));break}return v},[n,u,l,i]),y=v=>{e(`/product/${v.id}`)};return a.jsxs("main",{style:{background:"#0a0a0a",minHeight:"100vh",color:"#fff"},children:[a.jsx("section",{style:{padding:"clamp(100px, 12vw, 150px) clamp(18px, 4vw, 60px) 55px",maxWidth:"1500px",margin:"0 auto"},children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"30px",flexWrap:"wrap"},children:[a.jsx("div",{children:a.jsx("h1",{style:{margin:0,fontFamily:S.display,fontSize:"clamp(48px, 9vw, 110px)",lineHeight:"0.88",letterSpacing:"-0.055em",fontWeight:700,color:"#fff"},children:"SHOP ALL"})}),a.jsx("div",{style:{maxWidth:"330px"}})]})}),a.jsx("section",{style:{position:"sticky",top:"60px",zIndex:30,background:"rgba(10,10,10,0.94)",backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)",borderTop:`1px solid ${w.line}`,borderBottom:`1px solid ${w.line}`},children:a.jsx("div",{style:{maxWidth:"1500px",margin:"0 auto",padding:"0 clamp(18px, 4vw, 60px)"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px",minHeight:"64px"},children:[a.jsx("div",{className:"shop-category-scroll",style:{display:"flex",alignItems:"center",gap:"clamp(18px, 3vw, 34px)",overflowX:"auto",flex:1,scrollbarWidth:"none",msOverflowStyle:"none"},children:g.map(v=>{const C=l===v;return a.jsxs("button",{onClick:()=>o(v),style:{position:"relative",flexShrink:0,border:"none",background:"transparent",color:C?"#fff":w.ash,padding:"23px 0",fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.14em",textTransform:"uppercase",cursor:"pointer",transition:"color 0.25s ease"},children:[v,C&&a.jsx("span",{style:{position:"absolute",left:0,right:0,bottom:0,height:"2px",background:"#fff"}})]},v)})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"18px",flexShrink:0},children:[a.jsxs("span",{style:{fontFamily:S.mono,fontSize:"9px",color:w.ash,letterSpacing:"0.1em",display:"none"},className:"desktop-product-count",children:[k.length," PIECES"]}),a.jsxs("select",{value:i,onChange:v=>s(v.target.value),style:{background:"transparent",color:"#fff",border:"none",outline:"none",fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",appearance:"none",padding:"8px 0"},children:[a.jsx("option",{value:"featured",style:{background:"#111",color:"#fff"},children:"FEATURED"}),a.jsx("option",{value:"newest",style:{background:"#111",color:"#fff"},children:"NEWEST"}),a.jsx("option",{value:"price-low",style:{background:"#111",color:"#fff"},children:"PRICE LOW"}),a.jsx("option",{value:"price-high",style:{background:"#111",color:"#fff"},children:"PRICE HIGH"})]})]})]})})}),u&&a.jsx("div",{style:{maxWidth:"1500px",margin:"0 auto",padding:"25px clamp(18px, 4vw, 60px) 0"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px"},children:[a.jsxs("p",{style:{margin:0,fontFamily:S.mono,fontSize:"10px",color:w.ash,letterSpacing:"0.12em",textTransform:"uppercase"},children:['SEARCH RESULTS FOR "',u,'"']}),a.jsx("button",{onClick:()=>c(""),style:{background:"transparent",border:"none",color:"#fff",fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.1em",cursor:"pointer"},children:"CLEAR ×"})]})}),a.jsx("section",{style:{maxWidth:"1500px",margin:"0 auto",padding:"clamp(30px, 5vw, 65px) clamp(14px, 3vw, 60px) 100px"},children:k.length>0?a.jsx("div",{className:"archive-product-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",columnGap:"clamp(12px, 2vw, 28px)",rowGap:"clamp(45px, 5vw, 75px)"},children:k.map((v,C)=>a.jsx(ng,{product:v,index:C,onViewDetails:y,onQuickView:f},v.id))}):a.jsx(lg,{searchQuery:u,selectedCategory:l,onReset:()=>{c(""),o("All")}})}),h&&a.jsx(rg,{product:h,onClose:()=>f(null),onViewDetails:y,onAddToCart:r}),a.jsx("style",{children:`
        .shop-category-scroll::-webkit-scrollbar {
          display: none;
        }

        .archive-product-grid {
          animation: archiveShopFade 0.7s ease both;
        }

        @keyframes archiveShopFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1000px) {
          .archive-product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .archive-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 10px !important;
            row-gap: 42px !important;
          }

          .desktop-product-count {
            display: none !important;
          }
        }

        @media (max-width: 500px) {
          .archive-product-grid {
            column-gap: 8px !important;
          }
        }
      `})]})}function ng({product:e,index:t,onViewDetails:n,onQuickView:r}){var g;const[l,o]=x.useState(!1),[i,s]=x.useState(0),u=Array.isArray(e.images)&&e.images.length>0?e.images:[];x.useEffect(()=>{if(!l||u.length<=1){s(0);return}const k=setInterval(()=>{s(y=>(y+1)%u.length)},850);return()=>clearInterval(k)},[l,u.length]);const c=u[i],h=bi(c),f=zi(c);return a.jsxs("article",{style:{minWidth:0,opacity:0,animation:`productReveal 0.65s ease ${t*.07}s forwards`},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[a.jsxs("div",{style:{position:"relative",aspectRatio:"3 / 4",overflow:"hidden",background:f,cursor:"pointer"},onClick:()=>n(e),children:[h?a.jsx("img",{src:h,alt:e.name||"Product",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:l?"scale(1.035)":"scale(1)",transition:"transform 0.8s cubic-bezier(.2,.65,.25,1)"}}):a.jsx("div",{style:{width:"100%",height:"100%",background:f,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("span",{style:{fontFamily:S.display,fontSize:"clamp(30px, 5vw, 70px)",fontWeight:700,color:"rgba(255,255,255,0.07)",letterSpacing:"-0.04em"},children:((g=e.name)==null?void 0:g.charAt(0))||"A"})}),a.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.5) 100%)",opacity:l?1:0,transition:"opacity 0.4s ease",pointerEvents:"none"}}),e.badge&&a.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",padding:"6px 9px",background:"#fff",color:"#000",fontFamily:S.mono,fontSize:"8px",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:700},children:e.badge}),u.length>1&&l&&a.jsx("div",{style:{position:"absolute",left:"12px",right:"12px",bottom:"54px",display:"flex",gap:"3px"},children:u.map((k,y)=>a.jsx("span",{style:{flex:1,height:"2px",background:y===i?"#fff":"rgba(255,255,255,0.35)",transition:"background 0.25s ease"}},y))}),a.jsx("button",{type:"button",onClick:k=>{k.stopPropagation(),r(e)},style:{position:"absolute",left:"10px",right:"10px",bottom:"10px",height:"42px",border:"none",background:"#fff",color:"#000",fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:700,cursor:"pointer",opacity:l?1:0,transform:l?"translateY(0)":"translateY(15px)",transition:"opacity .3s ease, transform .3s ease",zIndex:3},children:"Quick View"})]}),a.jsx("div",{style:{paddingTop:"13px"},children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"10px"},children:[a.jsxs("div",{style:{minWidth:0,flex:1},children:[a.jsx("h3",{style:{margin:0,fontFamily:S.body,fontSize:"13px",fontWeight:500,color:"#fff",lineHeight:1.35,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.name}),a.jsx("p",{style:{margin:"5px 0 0",fontFamily:S.mono,fontSize:"8px",color:w.ash,letterSpacing:"0.13em",textTransform:"uppercase"},children:e.category||"COLLECTION"})]}),a.jsx("p",{style:{margin:0,flexShrink:0,fontFamily:S.mono,fontSize:"11px",color:"#fff",fontWeight:700},children:e.price})]})}),a.jsx("style",{children:`
        @keyframes productReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (hover: none) {
          article button {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `})]})}function rg({product:e,onClose:t,onViewDetails:n,onAddToCart:r}){var p;const l=Array.isArray(e.images)&&e.images.length?e.images:[],o=Array.isArray(e.sizes)&&e.sizes.length?e.sizes:["S","M","L","XL"],i=Array.isArray(e.colors)&&e.colors.length?e.colors:[],[s,u]=x.useState(o[0]),[c,h]=x.useState(i[0]),[f,g]=x.useState(0),k=l[f],y=bi(k),v=zi(k),C=()=>{r(e,s,c,1),t()};return a.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.82)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",animation:"quickViewFade .25s ease"},onClick:t,children:[a.jsxs("div",{className:"quick-view-panel",onClick:d=>d.stopPropagation(),style:{width:"100%",maxWidth:"1100px",maxHeight:"92vh",overflow:"hidden",background:"#111",border:`1px solid ${w.line}`,display:"grid",gridTemplateColumns:"1.05fr 0.95fr",position:"relative",animation:"quickViewUp .35s ease"},children:[a.jsx("button",{type:"button",onClick:t,"aria-label":"Close quick view",style:{position:"absolute",right:"16px",top:"16px",width:"40px",height:"40px",borderRadius:"50%",border:"1px solid rgba(255,255,255,0.25)",background:"rgba(0,0,0,0.5)",color:"#fff",fontSize:"22px",lineHeight:1,cursor:"pointer",zIndex:10},children:"×"}),a.jsxs("div",{style:{position:"relative",background:v,minHeight:"600px"},children:[y?a.jsx("img",{src:y,alt:e.name||"Product",style:{width:"100%",height:"100%",minHeight:"600px",objectFit:"cover",display:"block"}}):a.jsx("div",{style:{width:"100%",height:"100%",minHeight:"600px",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("span",{style:{fontFamily:S.display,fontSize:"100px",fontWeight:700,color:"rgba(255,255,255,0.08)"},children:((p=e.name)==null?void 0:p.charAt(0))||"A"})}),l.length>1&&a.jsx("div",{style:{position:"absolute",left:"18px",right:"18px",bottom:"18px",display:"flex",gap:"7px",overflowX:"auto"},children:l.map((d,m)=>{const j=bi(d),b=zi(d);return a.jsx("button",{type:"button",onClick:()=>g(m),style:{flexShrink:0,width:"55px",height:"70px",padding:0,overflow:"hidden",border:f===m?"2px solid #fff":"1px solid rgba(255,255,255,0.4)",background:b,cursor:"pointer"},children:j&&a.jsx("img",{src:j,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})},m)})})]}),a.jsxs("div",{className:"quick-view-content",style:{padding:"clamp(28px, 5vw, 55px)",overflowY:"auto",display:"flex",flexDirection:"column"},children:[a.jsx("p",{style:{margin:"0 0 15px",fontFamily:S.mono,fontSize:"9px",color:w.ash,letterSpacing:"0.2em",textTransform:"uppercase"},children:e.category||"COLLECTION"}),a.jsx("h2",{style:{margin:"0 0 15px",fontFamily:S.display,fontSize:"clamp(30px, 4vw, 54px)",lineHeight:.95,letterSpacing:"-0.04em",color:"#fff"},children:e.name}),a.jsx("p",{style:{margin:"0 0 35px",fontFamily:S.mono,fontSize:"15px",color:"#fff",fontWeight:700},children:e.price}),a.jsx("div",{style:{height:"1px",background:w.line,marginBottom:"28px"}}),o.length>0&&a.jsxs("div",{style:{marginBottom:"28px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[a.jsx("p",{style:{margin:0,fontFamily:S.mono,fontSize:"9px",color:"#fff",letterSpacing:"0.15em"},children:"SIZE"}),a.jsx("span",{style:{fontFamily:S.mono,fontSize:"8px",color:w.ash},children:"SELECT SIZE"})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"7px"},children:o.map(d=>{const m=s===d;return a.jsx("button",{type:"button",onClick:()=>u(d),style:{minWidth:"50px",padding:"12px 15px",background:m?"#fff":"transparent",color:m?"#000":"#fff",border:m?"1px solid #fff":"1px solid rgba(255,255,255,0.25)",fontFamily:S.mono,fontSize:"9px",cursor:"pointer",transition:"all .2s ease"},children:d},d)})})]}),i.length>0&&a.jsxs("div",{style:{marginBottom:"32px"},children:[a.jsx("p",{style:{margin:"0 0 12px",fontFamily:S.mono,fontSize:"9px",color:"#fff",letterSpacing:"0.15em"},children:"COLOR"}),a.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:i.map((d,m)=>{const j=c===d;return a.jsx("button",{type:"button",onClick:()=>h(d),title:d,style:{width:"28px",height:"28px",borderRadius:"50%",border:j?"2px solid #fff":"1px solid rgba(255,255,255,0.3)",outline:j?"2px solid #111":"none",outlineOffset:"2px",background:d,cursor:"pointer"}},`${d}-${m}`)})})]}),e.description&&a.jsx("p",{style:{margin:"0 0 30px",fontFamily:S.body,fontSize:"13px",color:w.ash,lineHeight:1.7},children:e.description}),a.jsxs("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsx("button",{type:"button",onClick:C,style:{width:"100%",padding:"16px",border:"1px solid #fff",background:"#fff",color:"#000",fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:700,cursor:"pointer"},children:"Add to Cart"}),a.jsx("button",{type:"button",onClick:()=>{t(),n(e)},style:{width:"100%",padding:"16px",border:"1px solid rgba(255,255,255,0.3)",background:"transparent",color:"#fff",fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",cursor:"pointer"},children:"View Full Details →"})]})]})]}),a.jsx("style",{children:`
        @keyframes quickViewFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes quickViewUp {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 800px) {
          .quick-view-panel {
            grid-template-columns: 1fr !important;
            max-height: 94vh !important;
            overflow-y: auto !important;
          }

          .quick-view-panel > div:first-of-type {
            min-height: 55vh !important;
          }

          .quick-view-panel > div:first-of-type img {
            min-height: 55vh !important;
          }

          .quick-view-content {
            padding: 25px !important;
          }
        }

        @media (max-width: 500px) {
          .quick-view-panel {
            width: 100% !important;
            max-height: 96vh !important;
          }

          .quick-view-panel > div:first-of-type {
            min-height: 52vh !important;
          }

          .quick-view-panel > div:first-of-type img {
            min-height: 52vh !important;
          }
        }
      `})]})}function lg({searchQuery:e,selectedCategory:t,onReset:n}){return a.jsx("div",{style:{minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",borderTop:`1px solid ${w.line}`,borderBottom:`1px solid ${w.line}`},children:a.jsxs("div",{children:[a.jsx("p",{style:{margin:"0 0 12px",fontFamily:S.mono,fontSize:"9px",color:w.ash,letterSpacing:"0.2em",textTransform:"uppercase"},children:"Nothing here"}),a.jsx("h2",{style:{margin:"0 0 18px",fontFamily:S.display,fontSize:"clamp(32px, 6vw, 55px)",color:"#fff",letterSpacing:"-0.04em"},children:"NO PRODUCTS FOUND"}),a.jsx("p",{style:{margin:"0 0 25px",fontFamily:S.body,fontSize:"13px",color:w.ash},children:e?`No results for "${e}".`:`There are no products in ${t}.`}),a.jsx("button",{type:"button",onClick:n,style:{padding:"13px 22px",border:"1px solid rgba(255,255,255,0.3)",background:"transparent",color:"#fff",fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.15em",cursor:"pointer",textTransform:"uppercase"},children:"View All Products"})]})})}function og(){const{cartItems:e,removeFromCart:t,updateQuantity:n,cartTotal:r,cartCount:l,navigate:o}=Ln();return e.length===0?a.jsxs("div",{style:{background:w.ink,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 20px",textAlign:"center"},children:[a.jsx("h1",{style:{fontFamily:S.display,fontSize:"clamp(32px, 6vw, 48px)",color:w.bone,margin:"0 0 16px"},children:"YOUR BAG IS EMPTY"}),a.jsx("p",{style:{fontFamily:S.body,fontSize:"14px",color:w.ash,margin:"0 0 32px"},children:"Looks like you haven't added anything to your bag yet."}),a.jsx("button",{onClick:()=>o("shop"),style:{background:w.bone,color:w.ink,border:"none",padding:"16px 32px",fontFamily:S.mono,fontSize:"12px",letterSpacing:"0.15em",cursor:"pointer",fontWeight:"bold"},children:"CONTINUE SHOPPING"})]}):a.jsxs("div",{style:{background:w.ink,minHeight:"100vh",padding:"100px 40px 40px"},children:[a.jsxs("h1",{style:{fontFamily:S.display,fontSize:"clamp(32px, 5vw, 48px)",color:w.bone,margin:"0 0 40px"},children:["SHOPPING BAG (",l,")"]}),a.jsxs("div",{style:{display:"flex",gap:"40px",flexWrap:"wrap"},children:[a.jsx("div",{style:{flex:2,minWidth:"300px"},children:e.map((i,s)=>a.jsxs("div",{style:{display:"flex",gap:"20px",padding:"24px",border:`1px solid ${w.line}`,marginBottom:"16px"},children:[a.jsx("div",{style:{width:"120px",height:"150px",background:"#1a1a1a",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:S.display,fontSize:"32px",color:"rgba(255,255,255,0.1)",flexShrink:0},children:i.id}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[a.jsx("h3",{style:{fontFamily:S.body,fontSize:"16px",color:w.bone,margin:0},children:i.name}),a.jsx("button",{onClick:()=>t(s),style:{background:"none",border:"none",color:w.ash,cursor:"pointer",fontSize:"20px"},children:"×"})]}),a.jsxs("p",{style:{fontFamily:S.mono,fontSize:"11px",color:w.ash,margin:"0 0 12px"},children:["Size: ",i.selectedSize]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("button",{onClick:()=>n(s,i.quantity-1),style:{width:"32px",height:"32px",background:"transparent",border:`1px solid ${w.line}`,color:w.bone,cursor:"pointer"},children:"-"}),a.jsx("span",{style:{fontFamily:S.mono,color:w.bone,width:"20px",textAlign:"center"},children:i.quantity}),a.jsx("button",{onClick:()=>n(s,i.quantity+1),style:{width:"32px",height:"32px",background:"transparent",border:`1px solid ${w.line}`,color:w.bone,cursor:"pointer"},children:"+"})]}),a.jsx("p",{style:{fontFamily:S.mono,fontSize:"14px",color:w.bone,margin:0,fontWeight:"bold"},children:i.price})]})]})]},s))}),a.jsx("div",{style:{flex:1,minWidth:"280px"},children:a.jsxs("div",{style:{padding:"24px",border:`1px solid ${w.line}`,position:"sticky",top:"100px"},children:[a.jsx("h2",{style:{fontFamily:S.display,fontSize:"20px",color:w.bone,margin:"0 0 24px"},children:"ORDER SUMMARY"}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px"},children:[a.jsx("span",{style:{fontFamily:S.mono,fontSize:"12px",color:w.ash},children:"Subtotal"}),a.jsxs("span",{style:{fontFamily:S.mono,fontSize:"12px",color:w.bone},children:["₦",r.toLocaleString()]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px"},children:[a.jsx("span",{style:{fontFamily:S.mono,fontSize:"12px",color:w.ash},children:"Shipping"}),a.jsx("span",{style:{fontFamily:S.mono,fontSize:"12px",color:w.bone},children:"FREE"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:"16px",borderTop:`1px solid ${w.line}`,marginBottom:"24px"},children:[a.jsx("span",{style:{fontFamily:S.mono,fontSize:"14px",color:w.bone,fontWeight:"bold"},children:"Total"}),a.jsxs("span",{style:{fontFamily:S.mono,fontSize:"14px",color:w.bone,fontWeight:"bold"},children:["₦",r.toLocaleString()]})]}),a.jsx("button",{style:{width:"100%",background:w.bone,color:w.ink,border:"none",padding:"16px",fontFamily:S.mono,fontSize:"12px",letterSpacing:"0.15em",cursor:"pointer",fontWeight:"bold",marginBottom:"12px"},children:"CHECKOUT"}),a.jsx("button",{onClick:()=>o("shop"),style:{width:"100%",background:"transparent",color:w.bone,border:`1px solid ${w.line}`,padding:"16px",fontFamily:S.mono,fontSize:"12px",letterSpacing:"0.15em",cursor:"pointer"},children:"CONTINUE SHOPPING"})]})})]})]})}function ig(){const{isCartOpen:e,closeCart:t,cartItems:n,removeFromCart:r,cartTotal:l,cartCount:o,navigate:i,updateQuantity:s}=Ln();if(!e)return null;const u=c=>{if(c.images&&c.images.length>0){const h=c.images[0];if(h.url)return h.url}return c.image?c.image:null};return a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:t,style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.62)",backdropFilter:"blur(3px)",zIndex:999}}),a.jsxs("aside",{style:{position:"fixed",top:0,right:0,bottom:0,width:"min(470px, 100vw)",display:"flex",flexDirection:"column",background:w.ink,color:w.bone,zIndex:1e3,borderLeft:`1px solid ${w.line}`},children:[a.jsxs("header",{style:{height:"78px",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 26px",borderBottom:`1px solid ${w.line}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"7px"},children:[a.jsx("span",{style:{fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.13em"},children:"SHOPPING BAG"}),a.jsxs("span",{style:{fontFamily:S.mono,fontSize:"9px",color:w.ash},children:["(",o,")"]})]}),a.jsxs("button",{onClick:t,"aria-label":"Close shopping bag",style:{position:"relative",width:"34px",height:"34px",padding:0,border:0,background:"transparent",cursor:"pointer"},children:[a.jsx("span",{style:{position:"absolute",left:"8px",top:"16px",width:"18px",height:"1px",background:w.bone,transform:"rotate(45deg)"}}),a.jsx("span",{style:{position:"absolute",left:"8px",top:"16px",width:"18px",height:"1px",background:w.bone,transform:"rotate(-45deg)"}})]})]}),a.jsx("div",{style:{flex:1,overflowY:"auto",overscrollBehavior:"contain"},children:n.length===0?a.jsxs("div",{style:{minHeight:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"40px"},children:[a.jsx("div",{style:{width:"58px",height:"58px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"25px",border:`1px solid ${w.line}`,borderRadius:"50%",fontFamily:S.display,fontSize:"17px",color:w.ash},children:"508"}),a.jsx("h2",{style:{margin:"0 0 10px",fontFamily:S.display,fontSize:"28px",fontWeight:400,letterSpacing:"-0.025em"},children:"Your bag is empty."}),a.jsx("p",{style:{maxWidth:"250px",margin:"0 0 30px",fontFamily:S.body,fontSize:"12px",lineHeight:1.6,color:w.ash},children:"Discover the latest pieces from the archive."}),a.jsxs("button",{onClick:()=>{t(),i("shop")},style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:"300px",height:"52px",padding:"0 18px",border:`1px solid ${w.line}`,background:"transparent",color:w.bone,cursor:"pointer",fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.11em"},children:[a.jsx("span",{children:"SHOP THE COLLECTION"}),a.jsx("b",{style:{fontSize:"17px",fontWeight:400},children:"→"})]})]}):a.jsxs("div",{style:{padding:"0 26px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"9px",padding:"18px 0",borderBottom:`1px solid ${w.line}`},children:[a.jsx("span",{style:{width:"5px",height:"5px",flexShrink:0,borderRadius:"50%",background:w.stamp}}),a.jsx("p",{style:{margin:0,fontFamily:S.mono,fontSize:"8px",lineHeight:1.5,letterSpacing:"0.06em",color:w.ash},children:"Complimentary shipping available on selected orders."})]}),n.map((c,h)=>{var g,k;const f=u(c);return a.jsxs("article",{style:{display:"flex",gap:"16px",padding:"20px 0",borderBottom:`1px solid ${w.line}`},children:[a.jsx("div",{style:{width:"92px",height:"116px",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:((k=(g=c.images)==null?void 0:g[0])==null?void 0:k.color)||"#151513",border:`1px solid ${w.line}`},children:f?a.jsx("img",{src:f,alt:c.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):a.jsx("span",{style:{fontFamily:S.display,fontSize:"20px",color:"rgba(255,255,255,0.12)"},children:c.id||"508"})}),a.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{margin:"0 0 7px",fontFamily:S.body,fontSize:"12px",fontWeight:400,lineHeight:1.4},children:c.name}),c.selectedSize&&a.jsxs("p",{style:{margin:"0 0 8px",fontFamily:S.mono,fontSize:"8px",letterSpacing:"0.07em",color:w.ash},children:["SIZE — ",c.selectedSize]}),a.jsx("p",{style:{margin:0,fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.04em"},children:c.price})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px",marginTop:"15px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1px solid ${w.line}`},children:[a.jsx("button",{onClick:()=>s(h,c.quantity-1),style:{width:"27px",height:"27px",padding:0,border:0,background:"transparent",color:w.bone,fontFamily:S.mono,cursor:"pointer"},children:"−"}),a.jsx("span",{style:{minWidth:"24px",textAlign:"center",fontFamily:S.mono,fontSize:"9px"},children:c.quantity}),a.jsx("button",{onClick:()=>s(h,c.quantity+1),style:{width:"27px",height:"27px",padding:0,border:0,background:"transparent",color:w.bone,fontFamily:S.mono,cursor:"pointer"},children:"+"})]}),a.jsx("button",{onClick:()=>r(h),style:{padding:0,border:0,background:"transparent",fontFamily:S.mono,fontSize:"7px",letterSpacing:"0.1em",color:w.ash,cursor:"pointer"},children:"REMOVE"})]})]})]},`${c.id}-${h}`)})]})}),n.length>0&&a.jsxs("footer",{style:{flexShrink:0,padding:"20px 26px 24px",background:w.ink,borderTop:`1px solid ${w.line}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"7px"},children:[a.jsx("span",{style:{fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.12em",color:w.ash},children:"SUBTOTAL"}),a.jsxs("strong",{style:{fontFamily:S.mono,fontSize:"13px",fontWeight:500},children:["₦",l.toLocaleString()]})]}),a.jsx("p",{style:{margin:"0 0 18px",fontFamily:S.mono,fontSize:"7px",color:w.ash},children:"Shipping and taxes calculated at checkout."}),a.jsxs("button",{onClick:()=>{t(),i("cart")},style:{width:"100%",height:"54px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 18px",border:`1px solid ${w.bone}`,background:w.bone,color:w.ink,fontFamily:S.mono,fontSize:"9px",letterSpacing:"0.13em",cursor:"pointer"},children:[a.jsx("span",{children:"CHECKOUT"}),a.jsx("span",{style:{fontSize:"17px"},children:"→"})]}),a.jsx("button",{onClick:()=>{t(),i("cart")},style:{width:"100%",height:"38px",marginTop:"7px",border:0,background:"transparent",color:w.ash,fontFamily:S.mono,fontSize:"7px",letterSpacing:"0.13em",cursor:"pointer"},children:"VIEW FULL BAG"})]})]})]})}function ag(){return a.jsxs("footer",{style:{background:"#0A0A0A",borderTop:`1px solid ${w.line}`,color:w.bone},children:[a.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"60px 40px 32px"},children:[a.jsxs("div",{className:"footer-grid",style:{display:"grid",gridTemplateColumns:"1.2fr 0.8fr 0.8fr 0.8fr",gap:"40px",paddingBottom:"48px"},children:[a.jsxs("div",{children:[a.jsx(ae,{to:"/",style:{display:"inline-block",marginBottom:"16px"},children:a.jsx("img",{src:"/images/logo.png",alt:"508 Archives",style:{height:"28px",width:"auto",objectFit:"contain"}})}),a.jsx("p",{style:{fontFamily:S.body,fontSize:"13px",lineHeight:"1.6",color:w.ash,margin:"0 0 20px",maxWidth:"200px"},children:"Not just worn. Archived."}),a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(Po,{label:"Instagram",children:a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor",stroke:"none"})]})}),a.jsx(Po,{label:"Twitter",children:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M18 3h3l-6.5 7.4L22 21h-5.9l-4.6-6-5.3 6H3l6.9-7.9L2.5 3h6l4.2 5.5L18 3z"})})}),a.jsx(Po,{label:"TikTok",children:a.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:a.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})})]})]}),a.jsx(Ro,{heading:"Shop",links:[{to:"/shop",label:"All Products"},{to:"/collections",label:"Collections"},{to:"/lookbook",label:"Lookbook"}]}),a.jsx(Ro,{heading:"Help",links:[{to:"/shipping",label:"Shipping"},{to:"/returns",label:"Returns"},{to:"/contact",label:"Contact"}]}),a.jsx(Ro,{heading:"Company",links:[{to:"/about",label:"About"},{to:"/faq",label:"FAQ"},{to:"/privacy",label:"Privacy"}]})]}),a.jsxs("div",{style:{borderTop:`1px solid ${w.line}`,paddingTop:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[a.jsx("p",{style:{fontFamily:S.mono,fontSize:"9px",color:w.ash,margin:0,letterSpacing:"0.1em"},children:"© 2026 508 ARCHIVES"}),a.jsx("div",{style:{display:"flex",gap:"20px"},children:a.jsx(Ld,{to:"/terms",children:"Terms"})})]})]}),a.jsx("style",{children:`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `})]})}function Ro({heading:e,links:t}){return a.jsxs("div",{children:[a.jsx("h4",{style:{fontFamily:S.mono,fontSize:"9px",color:w.ash,letterSpacing:"0.18em",margin:"0 0 14px",textTransform:"uppercase"},children:e}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:t.map(n=>a.jsx(Ld,{to:n.to,children:n.label},n.to))})]})}function Po({label:e,children:t}){return a.jsx("a",{href:"#","aria-label":e,onClick:n=>n.preventDefault(),style:{color:w.ash,display:"flex",transition:"color 0.3s ease, transform 0.3s ease"},onMouseEnter:n=>{n.currentTarget.style.color=w.bone,n.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:n=>{n.currentTarget.style.color=w.ash,n.currentTarget.style.transform="translateY(0)"},children:t})}function Ld({to:e,children:t}){return a.jsx(ae,{to:e,style:{fontFamily:S.body,fontSize:"12px",color:w.ash,textDecoration:"none",transition:"color 0.3s ease",width:"fit-content"},onMouseEnter:n=>n.currentTarget.style.color=w.bone,onMouseLeave:n=>n.currentTarget.style.color=w.ash,children:t})}function sg(){const[e,t]=x.useState(""),[n,r]=x.useState(!1),l=o=>{o.preventDefault(),e.trim()&&r(!0)};return n?a.jsxs("div",{style:{padding:"80px 20px",textAlign:"center",borderTop:`1px solid ${w.line}`,background:w.ink},children:[a.jsx("p",{style:{fontFamily:S.display,fontSize:"clamp(24px, 4vw, 32px)",color:w.bone,margin:"0 0 8px"},children:"You're in."}),a.jsx("p",{style:{fontFamily:S.body,fontSize:"13px",color:w.ash,margin:0},children:"Welcome to the archive."})]}):a.jsxs("div",{style:{padding:"100px 20px",textAlign:"center",borderTop:`1px solid ${w.line}`,background:w.ink},children:[a.jsx("h2",{style:{fontFamily:S.display,fontSize:"clamp(32px, 5vw, 48px)",color:w.bone,margin:"0 0 12px",letterSpacing:"-0.03em",fontWeight:"700"},children:"Join the archive."}),a.jsx("p",{style:{fontFamily:S.body,fontSize:"13px",color:w.ash,margin:"0 0 32px",maxWidth:"360px",marginLeft:"auto",marginRight:"auto",lineHeight:"1.6"},children:"New drops, restocks, and stories — sent sparingly."}),a.jsxs("form",{onSubmit:l,style:{display:"flex",gap:"8px",maxWidth:"420px",margin:"0 auto"},children:[a.jsx("input",{type:"email",value:e,onChange:o=>t(o.target.value),placeholder:"Email address",required:!0,style:{flex:1,minWidth:0,height:"48px",padding:"0 16px",background:"transparent",border:`1px solid ${w.line}`,color:w.bone,fontFamily:S.body,fontSize:"13px",outline:"none",transition:"border-color 0.3s ease"},onFocus:o=>{o.currentTarget.style.borderColor=w.bone},onBlur:o=>{o.currentTarget.style.borderColor=w.line}}),a.jsx("button",{type:"submit",style:{height:"48px",padding:"0 24px",background:w.bone,color:w.ink,border:"none",fontFamily:S.mono,fontSize:"10px",letterSpacing:"0.15em",fontWeight:"bold",cursor:"pointer",textTransform:"uppercase",whiteSpace:"nowrap",transition:"opacity 0.3s ease"},onMouseEnter:o=>{o.currentTarget.style.opacity="0.85"},onMouseLeave:o=>{o.currentTarget.style.opacity="1"},children:"Subscribe"})]})]})}function ug(){return a.jsxs(a.Fragment,{children:[a.jsx(Qm,{videoSrc:"/videos/hero.mp4"}),a.jsx(Ym,{}),a.jsx(Xm,{}),a.jsx(Nd,{}),a.jsx(Td,{}),a.jsx(sg,{})]})}function cg(){const e=Me();return lu.useEffect(()=>{window.scrollTo(0,0)},[e.pathname]),a.jsxs("div",{style:{background:w.ink,minHeight:"100vh"},children:[a.jsx(Hm,{}),a.jsxs(im,{children:[a.jsx($t,{path:"/",element:a.jsx(ug,{})}),a.jsx($t,{path:"/shop",element:a.jsx(tg,{})}),a.jsx($t,{path:"/product/:id",element:a.jsx(Jm,{})}),a.jsx($t,{path:"/cart",element:a.jsx(og,{})}),a.jsx($t,{path:"/collections",element:a.jsx(Nd,{})}),a.jsx($t,{path:"/lookbook",element:a.jsx(Td,{})})]}),a.jsx(ig,{}),a.jsx(ag,{})]})}No.createRoot(document.getElementById("root")).render(a.jsx(lu.StrictMode,{children:a.jsx(Tm,{children:a.jsx(Um,{children:a.jsx(Wm,{children:a.jsx(cg,{})})})})}));
