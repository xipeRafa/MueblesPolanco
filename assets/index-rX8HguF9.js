(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kT={exports:{}},vh={},CT={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu=Symbol.for("react.element"),S1=Symbol.for("react.portal"),R1=Symbol.for("react.fragment"),A1=Symbol.for("react.strict_mode"),P1=Symbol.for("react.profiler"),k1=Symbol.for("react.provider"),C1=Symbol.for("react.context"),b1=Symbol.for("react.forward_ref"),x1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),D1=Symbol.for("react.lazy"),sw=Symbol.iterator;function O1(t){return t===null||typeof t!="object"?null:(t=sw&&t[sw]||t["@@iterator"],typeof t=="function"?t:null)}var bT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xT=Object.assign,NT={};function ya(t,e,n){this.props=t,this.context=e,this.refs=NT,this.updater=n||bT}ya.prototype.isReactComponent={};ya.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ya.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function DT(){}DT.prototype=ya.prototype;function Rg(t,e,n){this.props=t,this.context=e,this.refs=NT,this.updater=n||bT}var Ag=Rg.prototype=new DT;Ag.constructor=Rg;xT(Ag,ya.prototype);Ag.isPureReactComponent=!0;var ow=Array.isArray,OT=Object.prototype.hasOwnProperty,Pg={current:null},VT={key:!0,ref:!0,__self:!0,__source:!0};function LT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)OT.call(e,r)&&!VT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xu,type:t,key:s,ref:o,props:i,_owner:Pg.current}}function V1(t,e){return{$$typeof:xu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kg(t){return typeof t=="object"&&t!==null&&t.$$typeof===xu}function L1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var aw=/\/+/g;function Wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L1(""+t.key):e.toString(36)}function Xc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xu:case S1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wf(o,0):r,ow(i)?(n="",t!=null&&(n=t.replace(aw,"$&/")+"/"),Xc(i,e,n,"",function(c){return c})):i!=null&&(kg(i)&&(i=V1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(aw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ow(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wf(s,a);o+=Xc(s,e,n,l,i)}else if(l=O1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wf(s,a++),o+=Xc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ic(t,e,n){if(t==null)return t;var r=[],i=0;return Xc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function M1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},Zc={transition:null},F1={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Zc,ReactCurrentOwner:Pg};function MT(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Ic,forEach:function(t,e,n){Ic(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ic(t,function(){e++}),e},toArray:function(t){return Ic(t,function(e){return e})||[]},only:function(t){if(!kg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=ya;se.Fragment=R1;se.Profiler=P1;se.PureComponent=Rg;se.StrictMode=A1;se.Suspense=x1;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1;se.act=MT;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)OT.call(e,l)&&!VT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:xu,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:C1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:k1,_context:t},t.Consumer=t};se.createElement=LT;se.createFactory=function(t){var e=LT.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:b1,render:t}};se.isValidElement=kg;se.lazy=function(t){return{$$typeof:D1,_payload:{_status:-1,_result:t},_init:M1}};se.memo=function(t,e){return{$$typeof:N1,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Zc.transition;Zc.transition={};try{t()}finally{Zc.transition=e}};se.unstable_act=MT;se.useCallback=function(t,e){return zt.current.useCallback(t,e)};se.useContext=function(t){return zt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};se.useEffect=function(t,e){return zt.current.useEffect(t,e)};se.useId=function(){return zt.current.useId()};se.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return zt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};se.useRef=function(t){return zt.current.useRef(t)};se.useState=function(t){return zt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return zt.current.useTransition()};se.version="18.3.1";CT.exports=se;var O=CT.exports;const oi=bu(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=O,j1=Symbol.for("react.element"),B1=Symbol.for("react.fragment"),$1=Object.prototype.hasOwnProperty,z1=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q1={key:!0,ref:!0,__self:!0,__source:!0};function FT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$1.call(e,r)&&!q1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:j1,type:t,key:s,ref:o,props:i,_owner:z1.current}}vh.Fragment=B1;vh.jsx=FT;vh.jsxs=FT;kT.exports=vh;var k=kT.exports,Bp={},UT={exports:{}},mn={},jT={exports:{}},BT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Z){var te=q.length;q.push(Z);e:for(;0<te;){var pe=te-1>>>1,le=q[pe];if(0<i(le,Z))q[pe]=Z,q[te]=le,te=pe;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Z=q[0],te=q.pop();if(te!==Z){q[0]=te;e:for(var pe=0,le=q.length,de=le>>>1;pe<de;){var ot=2*(pe+1)-1,Nt=q[ot],rn=ot+1,Gt=q[rn];if(0>i(Nt,te))rn<le&&0>i(Gt,Nt)?(q[pe]=Gt,q[rn]=te,pe=rn):(q[pe]=Nt,q[ot]=te,pe=ot);else if(rn<le&&0>i(Gt,te))q[pe]=Gt,q[rn]=te,pe=rn;else break e}}return Z}function i(q,Z){var te=q.sortIndex-Z.sortIndex;return te!==0?te:q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,_=!1,S=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(q){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=q)r(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function b(q){if(P=!1,E(q),!S)if(n(l)!==null)S=!0,Wt(F);else{var Z=n(c);Z!==null&&Et(b,Z.startTime-q)}}function F(q,Z){S=!1,P&&(P=!1,I(y),y=-1),_=!0;var te=m;try{for(E(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||q&&!C());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,m=f.priorityLevel;var le=pe(f.expirationTime<=Z);Z=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&r(l),E(Z)}else r(l);f=n(l)}if(f!==null)var de=!0;else{var ot=n(c);ot!==null&&Et(b,ot.startTime-Z),de=!1}return de}finally{f=null,m=te,_=!1}}var U=!1,w=null,y=-1,T=5,R=-1;function C(){return!(t.unstable_now()-R<T)}function N(){if(w!==null){var q=t.unstable_now();R=q;var Z=!0;try{Z=w(!0,q)}finally{Z?A():(U=!1,w=null)}}else U=!1}var A;if(typeof v=="function")A=function(){v(N)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,kn=ft.port2;ft.port1.onmessage=N,A=function(){kn.postMessage(null)}}else A=function(){x(N,0)};function Wt(q){w=q,U||(U=!0,A())}function Et(q,Z){y=x(function(){q(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,Wt(F))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var te=m;m=Z;try{return q()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=m;m=q;try{return Z()}finally{m=te}},t.unstable_scheduleCallback=function(q,Z,te){var pe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?pe+te:pe):te=pe,q){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=te+le,q={id:d++,callback:Z,priorityLevel:q,startTime:te,expirationTime:le,sortIndex:-1},te>pe?(q.sortIndex=te,e(c,q),n(l)===null&&q===n(c)&&(P?(I(y),y=-1):P=!0,Et(b,te-pe))):(q.sortIndex=le,e(l,q),S||_||(S=!0,Wt(F))),q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(q){var Z=m;return function(){var te=m;m=Z;try{return q.apply(this,arguments)}finally{m=te}}}})(BT);jT.exports=BT;var W1=jT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=O,fn=W1;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $T=new Set,Wl={};function Bs(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(Wl[t]=e,t=0;t<e.length;t++)$T.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$p=Object.prototype.hasOwnProperty,K1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lw={},uw={};function H1(t){return $p.call(uw,t)?!0:$p.call(lw,t)?!1:K1.test(t)?uw[t]=!0:(lw[t]=!0,!1)}function Q1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y1(t,e,n,r){if(e===null||typeof e>"u"||Q1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cg=/[\-:]([a-z])/g;function bg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cg,bg);wt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cg,bg);wt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cg,bg);wt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xg(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y1(e,n,i,r)&&(n=null),r||i===null?H1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tc=Symbol.for("react.element"),yo=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Ng=Symbol.for("react.strict_mode"),zp=Symbol.for("react.profiler"),zT=Symbol.for("react.provider"),qT=Symbol.for("react.context"),Dg=Symbol.for("react.forward_ref"),qp=Symbol.for("react.suspense"),Wp=Symbol.for("react.suspense_list"),Og=Symbol.for("react.memo"),Jr=Symbol.for("react.lazy"),WT=Symbol.for("react.offscreen"),cw=Symbol.iterator;function Xa(t){return t===null||typeof t!="object"?null:(t=cw&&t[cw]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Gf;function ml(t){if(Gf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gf=e&&e[1]||""}return`
`+Gf+t}var Kf=!1;function Hf(t,e){if(!t||Kf)return"";Kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ml(t):""}function J1(t){switch(t.tag){case 5:return ml(t.type);case 16:return ml("Lazy");case 13:return ml("Suspense");case 19:return ml("SuspenseList");case 0:case 2:case 15:return t=Hf(t.type,!1),t;case 11:return t=Hf(t.type.render,!1),t;case 1:return t=Hf(t.type,!0),t;default:return""}}function Gp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case yo:return"Portal";case zp:return"Profiler";case Ng:return"StrictMode";case qp:return"Suspense";case Wp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qT:return(t.displayName||"Context")+".Consumer";case zT:return(t._context.displayName||"Context")+".Provider";case Dg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Og:return e=t.displayName||null,e!==null?e:Gp(t.type)||"Memo";case Jr:e=t._payload,t=t._init;try{return Gp(t(e))}catch{}}return null}function X1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gp(e);case 8:return e===Ng?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function GT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z1(t){var e=GT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sc(t){t._valueTracker||(t._valueTracker=Z1(t))}function KT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=GT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Id(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function HT(t,e){e=e.checked,e!=null&&xg(t,"checked",e,!1)}function Hp(t,e){HT(t,e);var n=Ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qp(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qp(t,e,n){(e!=="number"||Id(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gl=Array.isArray;function No(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(gl(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function QT(t,e){var n=Ei(e.value),r=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function YT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?YT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Rc,JT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Rc=Rc||document.createElement("div"),Rc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eb=["Webkit","ms","Moz","O"];Object.keys(Al).forEach(function(t){eb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Al[e]=Al[t]})});function XT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Al.hasOwnProperty(t)&&Al[t]?(""+e).trim():e+"px"}function ZT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=XT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tb=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xp(t,e){if(e){if(tb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Zp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var em=null;function Vg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tm=null,Do=null,Oo=null;function mw(t){if(t=Ou(t)){if(typeof tm!="function")throw Error($(280));var e=t.stateNode;e&&(e=Sh(e),tm(t.stateNode,t.type,e))}}function e0(t){Do?Oo?Oo.push(t):Oo=[t]:Do=t}function t0(){if(Do){var t=Do,e=Oo;if(Oo=Do=null,mw(t),e)for(t=0;t<e.length;t++)mw(e[t])}}function n0(t,e){return t(e)}function r0(){}var Qf=!1;function i0(t,e,n){if(Qf)return t(e,n);Qf=!0;try{return n0(t,e,n)}finally{Qf=!1,(Do!==null||Oo!==null)&&(r0(),t0())}}function Kl(t,e){var n=t.stateNode;if(n===null)return null;var r=Sh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var nm=!1;if(Rr)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){nm=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{nm=!1}function nb(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Pl=!1,Td=null,Sd=!1,rm=null,rb={onError:function(t){Pl=!0,Td=t}};function ib(t,e,n,r,i,s,o,a,l){Pl=!1,Td=null,nb.apply(rb,arguments)}function sb(t,e,n,r,i,s,o,a,l){if(ib.apply(this,arguments),Pl){if(Pl){var c=Td;Pl=!1,Td=null}else throw Error($(198));Sd||(Sd=!0,rm=c)}}function $s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gw(t){if($s(t)!==t)throw Error($(188))}function ob(t){var e=t.alternate;if(!e){if(e=$s(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gw(i),t;if(s===r)return gw(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function o0(t){return t=ob(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=fn.unstable_scheduleCallback,_w=fn.unstable_cancelCallback,ab=fn.unstable_shouldYield,lb=fn.unstable_requestPaint,Qe=fn.unstable_now,ub=fn.unstable_getCurrentPriorityLevel,Lg=fn.unstable_ImmediatePriority,u0=fn.unstable_UserBlockingPriority,Rd=fn.unstable_NormalPriority,cb=fn.unstable_LowPriority,c0=fn.unstable_IdlePriority,wh=null,Zn=null;function db(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(wh,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:pb,hb=Math.log,fb=Math.LN2;function pb(t){return t>>>=0,t===0?32:31-(hb(t)/fb|0)|0}var Ac=64,Pc=4194304;function _l(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ad(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_l(a):(s&=o,s!==0&&(r=_l(s)))}else o=n&~i,o!==0?r=_l(o):s!==0&&(r=_l(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ln(e),i=1<<n,r|=t[n],e&=~i;return r}function mb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=mb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function im(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d0(){var t=Ac;return Ac<<=1,!(Ac&4194240)&&(Ac=64),t}function Yf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function _b(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function h0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f0,Fg,p0,m0,g0,sm=!1,kc=[],di=null,hi=null,fi=null,Hl=new Map,Ql=new Map,ti=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yw(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":Hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(e.pointerId)}}function el(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ou(e),e!==null&&Fg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vb(t,e,n,r,i){switch(e){case"focusin":return di=el(di,t,e,n,r,i),!0;case"dragenter":return hi=el(hi,t,e,n,r,i),!0;case"mouseover":return fi=el(fi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hl.set(s,el(Hl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ql.set(s,el(Ql.get(s)||null,t,e,n,r,i)),!0}return!1}function _0(t){var e=cs(t.target);if(e!==null){var n=$s(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ed(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=om(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);em=r,n.target.dispatchEvent(r),em=null}else return e=Ou(n),e!==null&&Fg(e),t.blockedOn=n,!1;e.shift()}return!0}function vw(t,e,n){ed(t)&&n.delete(e)}function wb(){sm=!1,di!==null&&ed(di)&&(di=null),hi!==null&&ed(hi)&&(hi=null),fi!==null&&ed(fi)&&(fi=null),Hl.forEach(vw),Ql.forEach(vw)}function tl(t,e){t.blockedOn===e&&(t.blockedOn=null,sm||(sm=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,wb)))}function Yl(t){function e(i){return tl(i,t)}if(0<kc.length){tl(kc[0],t);for(var n=1;n<kc.length;n++){var r=kc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&tl(di,t),hi!==null&&tl(hi,t),fi!==null&&tl(fi,t),Hl.forEach(e),Ql.forEach(e),n=0;n<ti.length;n++)r=ti[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ti.length&&(n=ti[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&ti.shift()}var Vo=Vr.ReactCurrentBatchConfig,Pd=!0;function Eb(t,e,n,r){var i=ye,s=Vo.transition;Vo.transition=null;try{ye=1,Ug(t,e,n,r)}finally{ye=i,Vo.transition=s}}function Ib(t,e,n,r){var i=ye,s=Vo.transition;Vo.transition=null;try{ye=4,Ug(t,e,n,r)}finally{ye=i,Vo.transition=s}}function Ug(t,e,n,r){if(Pd){var i=om(t,e,n,r);if(i===null)op(t,e,r,kd,n),yw(t,r);else if(vb(i,t,e,n,r))r.stopPropagation();else if(yw(t,r),e&4&&-1<yb.indexOf(t)){for(;i!==null;){var s=Ou(i);if(s!==null&&f0(s),s=om(t,e,n,r),s===null&&op(t,e,r,kd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else op(t,e,r,null,n)}}var kd=null;function om(t,e,n,r){if(kd=null,t=Vg(r),t=cs(t),t!==null)if(e=$s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kd=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ub()){case Lg:return 1;case u0:return 4;case Rd:case cb:return 16;case c0:return 536870912;default:return 16}default:return 16}}var ai=null,jg=null,td=null;function v0(){if(td)return td;var t,e=jg,n=e.length,r,i="value"in ai?ai.value:ai.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return td=i.slice(t,1<r?1-r:void 0)}function nd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cc(){return!0}function ww(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cc:ww,this.isPropagationStopped=ww,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cc)},persist:function(){},isPersistent:Cc}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bg=gn(va),Du=Me({},va,{view:0,detail:0}),Tb=gn(Du),Jf,Xf,nl,Eh=Me({},Du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$g,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nl&&(nl&&t.type==="mousemove"?(Jf=t.screenX-nl.screenX,Xf=t.screenY-nl.screenY):Xf=Jf=0,nl=t),Jf)},movementY:function(t){return"movementY"in t?t.movementY:Xf}}),Ew=gn(Eh),Sb=Me({},Eh,{dataTransfer:0}),Rb=gn(Sb),Ab=Me({},Du,{relatedTarget:0}),Zf=gn(Ab),Pb=Me({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),kb=gn(Pb),Cb=Me({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bb=gn(Cb),xb=Me({},va,{data:0}),Iw=gn(xb),Nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Db={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ob[t])?!!e[t]:!1}function $g(){return Vb}var Lb=Me({},Du,{key:function(t){if(t.key){var e=Nb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Db[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$g,charCode:function(t){return t.type==="keypress"?nd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mb=gn(Lb),Fb=Me({},Eh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tw=gn(Fb),Ub=Me({},Du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$g}),jb=gn(Ub),Bb=Me({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),$b=gn(Bb),zb=Me({},Eh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qb=gn(zb),Wb=[9,13,27,32],zg=Rr&&"CompositionEvent"in window,kl=null;Rr&&"documentMode"in document&&(kl=document.documentMode);var Gb=Rr&&"TextEvent"in window&&!kl,w0=Rr&&(!zg||kl&&8<kl&&11>=kl),Sw=" ",Rw=!1;function E0(t,e){switch(t){case"keyup":return Wb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wo=!1;function Kb(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:(Rw=!0,Sw);case"textInput":return t=e.data,t===Sw&&Rw?null:t;default:return null}}function Hb(t,e){if(wo)return t==="compositionend"||!zg&&E0(t,e)?(t=v0(),td=jg=ai=null,wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qb[t.type]:e==="textarea"}function T0(t,e,n,r){e0(r),e=Cd(e,"onChange"),0<e.length&&(n=new Bg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Cl=null,Jl=null;function Yb(t){O0(t,0)}function Ih(t){var e=To(t);if(KT(e))return t}function Jb(t,e){if(t==="change")return e}var S0=!1;if(Rr){var ep;if(Rr){var tp="oninput"in document;if(!tp){var Pw=document.createElement("div");Pw.setAttribute("oninput","return;"),tp=typeof Pw.oninput=="function"}ep=tp}else ep=!1;S0=ep&&(!document.documentMode||9<document.documentMode)}function kw(){Cl&&(Cl.detachEvent("onpropertychange",R0),Jl=Cl=null)}function R0(t){if(t.propertyName==="value"&&Ih(Jl)){var e=[];T0(e,Jl,t,Vg(t)),i0(Yb,e)}}function Xb(t,e,n){t==="focusin"?(kw(),Cl=e,Jl=n,Cl.attachEvent("onpropertychange",R0)):t==="focusout"&&kw()}function Zb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ih(Jl)}function ex(t,e){if(t==="click")return Ih(e)}function tx(t,e){if(t==="input"||t==="change")return Ih(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:nx;function Xl(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$p.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function Cw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bw(t,e){var n=Cw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cw(n)}}function A0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P0(){for(var t=window,e=Id();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Id(t.document)}return e}function qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rx(t){var e=P0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(r!==null&&qg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bw(n,s);var o=bw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=Rr&&"documentMode"in document&&11>=document.documentMode,Eo=null,am=null,bl=null,lm=!1;function xw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lm||Eo==null||Eo!==Id(r)||(r=Eo,"selectionStart"in r&&qg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bl&&Xl(bl,r)||(bl=r,r=Cd(am,"onSelect"),0<r.length&&(e=new Bg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Eo)))}function bc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Io={animationend:bc("Animation","AnimationEnd"),animationiteration:bc("Animation","AnimationIteration"),animationstart:bc("Animation","AnimationStart"),transitionend:bc("Transition","TransitionEnd")},np={},k0={};Rr&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function Th(t){if(np[t])return np[t];if(!Io[t])return t;var e=Io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return np[t]=e[n];return t}var C0=Th("animationend"),b0=Th("animationiteration"),x0=Th("animationstart"),N0=Th("transitionend"),D0=new Map,Nw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(t,e){D0.set(t,e),Bs(e,[t])}for(var rp=0;rp<Nw.length;rp++){var ip=Nw[rp],sx=ip.toLowerCase(),ox=ip[0].toUpperCase()+ip.slice(1);Oi(sx,"on"+ox)}Oi(C0,"onAnimationEnd");Oi(b0,"onAnimationIteration");Oi(x0,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(N0,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(yl));function Dw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sb(r,e,void 0,t),t.currentTarget=null}function O0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dw(i,a,c),s=l}}}if(Sd)throw t=rm,Sd=!1,rm=null,t}function Re(t,e){var n=e[fm];n===void 0&&(n=e[fm]=new Set);var r=t+"__bubble";n.has(r)||(V0(e,t,2,!1),n.add(r))}function sp(t,e,n){var r=0;e&&(r|=4),V0(n,t,r,e)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Zl(t){if(!t[xc]){t[xc]=!0,$T.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||sp(n,!1,t),sp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xc]||(e[xc]=!0,sp("selectionchange",!1,e))}}function V0(t,e,n,r){switch(y0(e)){case 1:var i=Eb;break;case 4:i=Ib;break;default:i=Ug}n=i.bind(null,e,n,t),i=void 0,!nm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function op(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i0(function(){var c=s,d=Vg(n),f=[];e:{var m=D0.get(t);if(m!==void 0){var _=Bg,S=t;switch(t){case"keypress":if(nd(n)===0)break e;case"keydown":case"keyup":_=Mb;break;case"focusin":S="focus",_=Zf;break;case"focusout":S="blur",_=Zf;break;case"beforeblur":case"afterblur":_=Zf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ew;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Rb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=jb;break;case C0:case b0:case x0:_=kb;break;case N0:_=$b;break;case"scroll":_=Tb;break;case"wheel":_=qb;break;case"copy":case"cut":case"paste":_=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Tw}var P=(e&4)!==0,x=!P&&t==="scroll",I=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,E;v!==null;){E=v;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,I!==null&&(b=Kl(v,I),b!=null&&P.push(eu(v,b,E)))),x)break;v=v.return}0<P.length&&(m=new _(m,S,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==em&&(S=n.relatedTarget||n.fromElement)&&(cs(S)||S[Ar]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?cs(S):null,S!==null&&(x=$s(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(P=Ew,b="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Tw,b="onPointerLeave",I="onPointerEnter",v="pointer"),x=_==null?m:To(_),E=S==null?m:To(S),m=new P(b,v+"leave",_,n,d),m.target=x,m.relatedTarget=E,b=null,cs(d)===c&&(P=new P(I,v+"enter",S,n,d),P.target=E,P.relatedTarget=x,b=P),x=b,_&&S)t:{for(P=_,I=S,v=0,E=P;E;E=no(E))v++;for(E=0,b=I;b;b=no(b))E++;for(;0<v-E;)P=no(P),v--;for(;0<E-v;)I=no(I),E--;for(;v--;){if(P===I||I!==null&&P===I.alternate)break t;P=no(P),I=no(I)}P=null}else P=null;_!==null&&Ow(f,m,_,P,!1),S!==null&&x!==null&&Ow(f,x,S,P,!0)}}e:{if(m=c?To(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var F=Jb;else if(Aw(m))if(S0)F=tx;else{F=Zb;var U=Xb}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=ex);if(F&&(F=F(t,c))){T0(f,F,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Qp(m,"number",m.value)}switch(U=c?To(c):window,t){case"focusin":(Aw(U)||U.contentEditable==="true")&&(Eo=U,am=c,bl=null);break;case"focusout":bl=am=Eo=null;break;case"mousedown":lm=!0;break;case"contextmenu":case"mouseup":case"dragend":lm=!1,xw(f,n,d);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":xw(f,n,d)}var w;if(zg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else wo?E0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(w0&&n.locale!=="ko"&&(wo||y!=="onCompositionStart"?y==="onCompositionEnd"&&wo&&(w=v0()):(ai=d,jg="value"in ai?ai.value:ai.textContent,wo=!0)),U=Cd(c,y),0<U.length&&(y=new Iw(y,t,null,n,d),f.push({event:y,listeners:U}),w?y.data=w:(w=I0(n),w!==null&&(y.data=w)))),(w=Gb?Kb(t,n):Hb(t,n))&&(c=Cd(c,"onBeforeInput"),0<c.length&&(d=new Iw("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}O0(f,e)})}function eu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Kl(t,n),s!=null&&r.unshift(eu(t,s,i)),s=Kl(t,e),s!=null&&r.push(eu(t,s,i))),t=t.return}return r}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ow(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Kl(n,s),l!=null&&o.unshift(eu(n,l,a))):i||(l=Kl(n,s),l!=null&&o.push(eu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function Vw(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ux,"")}function Nc(t,e,n){if(e=Vw(e),Vw(t)!==e&&n)throw Error($(425))}function bd(){}var um=null,cm=null;function dm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hm=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Lw=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Lw<"u"?function(t){return Lw.resolve(null).then(t).catch(hx)}:hm;function hx(t){setTimeout(function(){throw t})}function ap(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yl(e)}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wa=Math.random().toString(36).slice(2),qn="__reactFiber$"+wa,tu="__reactProps$"+wa,Ar="__reactContainer$"+wa,fm="__reactEvents$"+wa,fx="__reactListeners$"+wa,px="__reactHandles$"+wa;function cs(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mw(t);t!==null;){if(n=t[qn])return n;t=Mw(t)}return e}t=n,n=t.parentNode}return null}function Ou(t){return t=t[qn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Sh(t){return t[tu]||null}var pm=[],So=-1;function Vi(t){return{current:t}}function Pe(t){0>So||(t.current=pm[So],pm[So]=null,So--)}function Ie(t,e){So++,pm[So]=t.current,t.current=e}var Ii={},bt=Vi(Ii),en=Vi(!1),Ts=Ii;function Go(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function xd(){Pe(en),Pe(bt)}function Fw(t,e,n){if(bt.current!==Ii)throw Error($(168));Ie(bt,e),Ie(en,n)}function L0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,X1(t)||"Unknown",i));return Me({},n,r)}function Nd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,Ts=bt.current,Ie(bt,t),Ie(en,en.current),!0}function Uw(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=L0(t,e,Ts),r.__reactInternalMemoizedMergedChildContext=t,Pe(en),Pe(bt),Ie(bt,t)):Pe(en),Ie(en,n)}var pr=null,Rh=!1,lp=!1;function M0(t){pr===null?pr=[t]:pr.push(t)}function mx(t){Rh=!0,M0(t)}function Li(){if(!lp&&pr!==null){lp=!0;var t=0,e=ye;try{var n=pr;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pr=null,Rh=!1}catch(i){throw pr!==null&&(pr=pr.slice(t+1)),l0(Lg,Li),i}finally{ye=e,lp=!1}}return null}var Ro=[],Ao=0,Dd=null,Od=0,_n=[],yn=0,Ss=null,mr=1,gr="";function Xi(t,e){Ro[Ao++]=Od,Ro[Ao++]=Dd,Dd=t,Od=e}function F0(t,e,n){_n[yn++]=mr,_n[yn++]=gr,_n[yn++]=Ss,Ss=t;var r=mr;t=gr;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var s=32-Ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mr=1<<32-Ln(e)+i|n<<i|r,gr=s+t}else mr=1<<s|n<<i|r,gr=t}function Wg(t){t.return!==null&&(Xi(t,1),F0(t,1,0))}function Gg(t){for(;t===Dd;)Dd=Ro[--Ao],Ro[Ao]=null,Od=Ro[--Ao],Ro[Ao]=null;for(;t===Ss;)Ss=_n[--yn],_n[yn]=null,gr=_n[--yn],_n[yn]=null,mr=_n[--yn],_n[yn]=null}var dn=null,un=null,be=!1,On=null;function U0(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ss!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function mm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gm(t){if(be){var e=un;if(e){var n=e;if(!jw(t,e)){if(mm(t))throw Error($(418));e=pi(n.nextSibling);var r=dn;e&&jw(t,e)?U0(r,n):(t.flags=t.flags&-4097|2,be=!1,dn=t)}}else{if(mm(t))throw Error($(418));t.flags=t.flags&-4097|2,be=!1,dn=t}}}function Bw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Dc(t){if(t!==dn)return!1;if(!be)return Bw(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dm(t.type,t.memoizedProps)),e&&(e=un)){if(mm(t))throw j0(),Error($(418));for(;e;)U0(t,e),e=pi(e.nextSibling)}if(Bw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?pi(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=un;t;)t=pi(t.nextSibling)}function Ko(){un=dn=null,be=!1}function Kg(t){On===null?On=[t]:On.push(t)}var gx=Vr.ReactCurrentBatchConfig;function rl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Oc(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $w(t){var e=t._init;return e(t._payload)}function B0(t){function e(I,v){if(t){var E=I.deletions;E===null?(I.deletions=[v],I.flags|=16):E.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=yi(I,v),I.index=0,I.sibling=null,I}function s(I,v,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<v?(I.flags|=2,v):E):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,v,E,b){return v===null||v.tag!==6?(v=mp(E,I.mode,b),v.return=I,v):(v=i(v,E),v.return=I,v)}function l(I,v,E,b){var F=E.type;return F===vo?d(I,v,E.props.children,b,E.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jr&&$w(F)===v.type)?(b=i(v,E.props),b.ref=rl(I,v,E),b.return=I,b):(b=ud(E.type,E.key,E.props,null,I.mode,b),b.ref=rl(I,v,E),b.return=I,b)}function c(I,v,E,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=gp(E,I.mode,b),v.return=I,v):(v=i(v,E.children||[]),v.return=I,v)}function d(I,v,E,b,F){return v===null||v.tag!==7?(v=_s(E,I.mode,b,F),v.return=I,v):(v=i(v,E),v.return=I,v)}function f(I,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mp(""+v,I.mode,E),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tc:return E=ud(v.type,v.key,v.props,null,I.mode,E),E.ref=rl(I,null,v),E.return=I,E;case yo:return v=gp(v,I.mode,E),v.return=I,v;case Jr:var b=v._init;return f(I,b(v._payload),E)}if(gl(v)||Xa(v))return v=_s(v,I.mode,E,null),v.return=I,v;Oc(I,v)}return null}function m(I,v,E,b){var F=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return F!==null?null:a(I,v,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tc:return E.key===F?l(I,v,E,b):null;case yo:return E.key===F?c(I,v,E,b):null;case Jr:return F=E._init,m(I,v,F(E._payload),b)}if(gl(E)||Xa(E))return F!==null?null:d(I,v,E,b,null);Oc(I,E)}return null}function _(I,v,E,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(E)||null,a(v,I,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Tc:return I=I.get(b.key===null?E:b.key)||null,l(v,I,b,F);case yo:return I=I.get(b.key===null?E:b.key)||null,c(v,I,b,F);case Jr:var U=b._init;return _(I,v,E,U(b._payload),F)}if(gl(b)||Xa(b))return I=I.get(E)||null,d(v,I,b,F,null);Oc(v,b)}return null}function S(I,v,E,b){for(var F=null,U=null,w=v,y=v=0,T=null;w!==null&&y<E.length;y++){w.index>y?(T=w,w=null):T=w.sibling;var R=m(I,w,E[y],b);if(R===null){w===null&&(w=T);break}t&&w&&R.alternate===null&&e(I,w),v=s(R,v,y),U===null?F=R:U.sibling=R,U=R,w=T}if(y===E.length)return n(I,w),be&&Xi(I,y),F;if(w===null){for(;y<E.length;y++)w=f(I,E[y],b),w!==null&&(v=s(w,v,y),U===null?F=w:U.sibling=w,U=w);return be&&Xi(I,y),F}for(w=r(I,w);y<E.length;y++)T=_(w,I,y,E[y],b),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),v=s(T,v,y),U===null?F=T:U.sibling=T,U=T);return t&&w.forEach(function(C){return e(I,C)}),be&&Xi(I,y),F}function P(I,v,E,b){var F=Xa(E);if(typeof F!="function")throw Error($(150));if(E=F.call(E),E==null)throw Error($(151));for(var U=F=null,w=v,y=v=0,T=null,R=E.next();w!==null&&!R.done;y++,R=E.next()){w.index>y?(T=w,w=null):T=w.sibling;var C=m(I,w,R.value,b);if(C===null){w===null&&(w=T);break}t&&w&&C.alternate===null&&e(I,w),v=s(C,v,y),U===null?F=C:U.sibling=C,U=C,w=T}if(R.done)return n(I,w),be&&Xi(I,y),F;if(w===null){for(;!R.done;y++,R=E.next())R=f(I,R.value,b),R!==null&&(v=s(R,v,y),U===null?F=R:U.sibling=R,U=R);return be&&Xi(I,y),F}for(w=r(I,w);!R.done;y++,R=E.next())R=_(w,I,y,R.value,b),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?y:R.key),v=s(R,v,y),U===null?F=R:U.sibling=R,U=R);return t&&w.forEach(function(N){return e(I,N)}),be&&Xi(I,y),F}function x(I,v,E,b){if(typeof E=="object"&&E!==null&&E.type===vo&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Tc:e:{for(var F=E.key,U=v;U!==null;){if(U.key===F){if(F=E.type,F===vo){if(U.tag===7){n(I,U.sibling),v=i(U,E.props.children),v.return=I,I=v;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jr&&$w(F)===U.type){n(I,U.sibling),v=i(U,E.props),v.ref=rl(I,U,E),v.return=I,I=v;break e}n(I,U);break}else e(I,U);U=U.sibling}E.type===vo?(v=_s(E.props.children,I.mode,b,E.key),v.return=I,I=v):(b=ud(E.type,E.key,E.props,null,I.mode,b),b.ref=rl(I,v,E),b.return=I,I=b)}return o(I);case yo:e:{for(U=E.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(I,v.sibling),v=i(v,E.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=gp(E,I.mode,b),v.return=I,I=v}return o(I);case Jr:return U=E._init,x(I,v,U(E._payload),b)}if(gl(E))return S(I,v,E,b);if(Xa(E))return P(I,v,E,b);Oc(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,E),v.return=I,I=v):(n(I,v),v=mp(E,I.mode,b),v.return=I,I=v),o(I)):n(I,v)}return x}var Ho=B0(!0),$0=B0(!1),Vd=Vi(null),Ld=null,Po=null,Hg=null;function Qg(){Hg=Po=Ld=null}function Yg(t){var e=Vd.current;Pe(Vd),t._currentValue=e}function _m(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e){Ld=t,Hg=Po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Hg!==t)if(t={context:t,memoizedValue:e,next:null},Po===null){if(Ld===null)throw Error($(308));Po=t,Ld.dependencies={lanes:0,firstContext:t}}else Po=Po.next=t;return e}var ds=null;function Jg(t){ds===null?ds=[t]:ds.push(t)}function z0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pr(t,r)}function Pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xr=!1;function Xg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pr(t,n)}return i=r.interleaved,i===null?(e.next=e,Jg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pr(t,n)}function rd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mg(t,n)}}function zw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Md(t,e,n,r){var i=t.updateQueue;Xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(m=e,_=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){f=S.call(_,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(_,f,m):S,m==null)break e;f=Me({},f,m);break e;case 2:Xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=f}}function qw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Vu={},er=Vi(Vu),nu=Vi(Vu),ru=Vi(Vu);function hs(t){if(t===Vu)throw Error($(174));return t}function Zg(t,e){switch(Ie(ru,e),Ie(nu,t),Ie(er,Vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jp(e,t)}Pe(er),Ie(er,e)}function Qo(){Pe(er),Pe(nu),Pe(ru)}function W0(t){hs(ru.current);var e=hs(er.current),n=Jp(e,t.type);e!==n&&(Ie(nu,t),Ie(er,n))}function e_(t){nu.current===t&&(Pe(er),Pe(nu))}var Oe=Vi(0);function Fd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var up=[];function t_(){for(var t=0;t<up.length;t++)up[t]._workInProgressVersionPrimary=null;up.length=0}var id=Vr.ReactCurrentDispatcher,cp=Vr.ReactCurrentBatchConfig,Rs=0,Ve=null,nt=null,lt=null,Ud=!1,xl=!1,iu=0,_x=0;function St(){throw Error($(321))}function n_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function r_(t,e,n,r,i,s){if(Rs=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,id.current=t===null||t.memoizedState===null?Ex:Ix,t=n(r,i),xl){s=0;do{if(xl=!1,iu=0,25<=s)throw Error($(301));s+=1,lt=nt=null,e.updateQueue=null,id.current=Tx,t=n(r,i)}while(xl)}if(id.current=jd,e=nt!==null&&nt.next!==null,Rs=0,lt=nt=Ve=null,Ud=!1,e)throw Error($(300));return t}function i_(){var t=iu!==0;return iu=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Ve.memoizedState=lt=t:lt=lt.next=t,lt}function Rn(){if(nt===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=lt===null?Ve.memoizedState:lt.next;if(e!==null)lt=e,nt=t;else{if(t===null)throw Error($(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},lt===null?Ve.memoizedState=lt=t:lt=lt.next=t}return lt}function su(t,e){return typeof e=="function"?e(t):e}function dp(t){var e=Rn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Rs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ve.lanes|=d,As|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Fn(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,As|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hp(t){var e=Rn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function G0(){}function K0(t,e){var n=Ve,r=Rn(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,s_(Y0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,ou(9,Q0.bind(null,n,r,i,e),void 0,null),ct===null)throw Error($(349));Rs&30||H0(n,e,i)}return i}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q0(t,e,n,r){e.value=n,e.getSnapshot=r,J0(e)&&X0(t)}function Y0(t,e,n){return n(function(){J0(e)&&X0(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function X0(t){var e=Pr(t,1);e!==null&&Mn(e,t,1,-1)}function Ww(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:su,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,Ve,t),[e.memoizedState,t]}function ou(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z0(){return Rn().memoizedState}function sd(t,e,n,r){var i=zn();Ve.flags|=t,i.memoizedState=ou(1|e,n,void 0,r===void 0?null:r)}function Ah(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&n_(r,o.deps)){i.memoizedState=ou(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=ou(1|e,n,s,r)}function Gw(t,e){return sd(8390656,8,t,e)}function s_(t,e){return Ah(2048,8,t,e)}function eS(t,e){return Ah(4,2,t,e)}function tS(t,e){return Ah(4,4,t,e)}function nS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rS(t,e,n){return n=n!=null?n.concat([t]):null,Ah(4,4,nS.bind(null,e,t),n)}function o_(){}function iS(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&n_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sS(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&n_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oS(t,e,n){return Rs&21?(Fn(n,e)||(n=d0(),Ve.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function yx(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=cp.transition;cp.transition={};try{t(!1),e()}finally{ye=n,cp.transition=r}}function aS(){return Rn().memoizedState}function vx(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lS(t))uS(e,n);else if(n=z0(t,e,n,r),n!==null){var i=Ut();Mn(n,t,r,i),cS(n,e,r)}}function wx(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lS(t))uS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(i.next=i,Jg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=z0(t,e,i,r),n!==null&&(i=Ut(),Mn(n,t,r,i),cS(n,e,r))}}function lS(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function uS(t,e){xl=Ud=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mg(t,n)}}var jd={readContext:Sn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},Ex={readContext:Sn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:Gw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sd(4194308,4,nS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sd(4194308,4,t,e)},useInsertionEffect:function(t,e){return sd(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vx.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Ww,useDebugValue:o_,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Ww(!1),e=t[0];return t=yx.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=zn();if(be){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),ct===null)throw Error($(349));Rs&30||H0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gw(Y0.bind(null,r,s,t),[t]),r.flags|=2048,ou(9,Q0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=ct.identifierPrefix;if(be){var n=gr,r=mr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=iu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ix={readContext:Sn,useCallback:iS,useContext:Sn,useEffect:s_,useImperativeHandle:rS,useInsertionEffect:eS,useLayoutEffect:tS,useMemo:sS,useReducer:dp,useRef:Z0,useState:function(){return dp(su)},useDebugValue:o_,useDeferredValue:function(t){var e=Rn();return oS(e,nt.memoizedState,t)},useTransition:function(){var t=dp(su)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:K0,useId:aS,unstable_isNewReconciler:!1},Tx={readContext:Sn,useCallback:iS,useContext:Sn,useEffect:s_,useImperativeHandle:rS,useInsertionEffect:eS,useLayoutEffect:tS,useMemo:sS,useReducer:hp,useRef:Z0,useState:function(){return hp(su)},useDebugValue:o_,useDeferredValue:function(t){var e=Rn();return nt===null?e.memoizedState=t:oS(e,nt.memoizedState,t)},useTransition:function(){var t=hp(su)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:K0,useId:aS,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ym(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ph={isMounted:function(t){return(t=t._reactInternals)?$s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=_i(t),s=Er(r,i);s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Mn(e,t,i,r),rd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=_i(t),s=Er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(Mn(e,t,i,r),rd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=_i(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,r),e!==null&&(Mn(e,t,r,n),rd(e,t,r))}};function Kw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xl(n,r)||!Xl(i,s):!0}function dS(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(i=tn(e)?Ts:bt.current,r=e.contextTypes,s=(r=r!=null)?Go(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ph,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ph.enqueueReplaceState(e,e.state,null)}function vm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Sn(s):(s=tn(e)?Ts:bt.current,i.context=Go(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ym(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ph.enqueueReplaceState(i,i.state,null),Md(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yo(t,e){try{var n="",r=e;do n+=J1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sx=typeof WeakMap=="function"?WeakMap:Map;function hS(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$d||($d=!0,bm=r),wm(t,e)},n}function fS(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wm(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Fx.bind(null,t,e,n),e.then(t,t))}function Yw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,mi(n,e,1))),n.lanes|=1),t)}var Rx=Vr.ReactCurrentOwner,Yt=!1;function Vt(t,e,n,r){e.child=t===null?$0(e,null,n,r):Ho(e,t.child,n,r)}function Xw(t,e,n,r,i){n=n.render;var s=e.ref;return Lo(e,i),r=r_(t,e,n,r,s,i),n=i_(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(be&&n&&Wg(e),e.flags|=1,Vt(t,e,r,i),e.child)}function Zw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!p_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pS(t,e,s,r,i)):(t=ud(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=yi(s,r),t.ref=e.ref,t.return=e,e.child=t}function pS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xl(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,kr(t,e,i)}return Em(t,e,n,r,i)}function mS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Co,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Co,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Co,on),on|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Co,on),on|=r;return Vt(t,e,i,n),e.child}function gS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Em(t,e,n,r,i){var s=tn(n)?Ts:bt.current;return s=Go(e,s),Lo(e,i),n=r_(t,e,n,r,s,i),r=i_(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(be&&r&&Wg(e),e.flags|=1,Vt(t,e,n,i),e.child)}function eE(t,e,n,r,i){if(tn(n)){var s=!0;Nd(e)}else s=!1;if(Lo(e,i),e.stateNode===null)od(t,e),dS(e,n,r),vm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=tn(n)?Ts:bt.current,c=Go(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Hw(e,o,r,c),Xr=!1;var m=e.memoizedState;o.state=m,Md(e,r,o,i),l=e.memoizedState,a!==r||m!==l||en.current||Xr?(typeof d=="function"&&(ym(e,n,d,r),l=e.memoizedState),(a=Xr||Kw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=tn(n)?Ts:bt.current,l=Go(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Hw(e,o,r,l),Xr=!1,m=e.memoizedState,o.state=m,Md(e,r,o,i);var S=e.memoizedState;a!==f||m!==S||en.current||Xr?(typeof _=="function"&&(ym(e,n,_,r),S=e.memoizedState),(c=Xr||Kw(e,n,c,r,m,S,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Im(t,e,n,r,s,i)}function Im(t,e,n,r,i,s){gS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uw(e,n,!1),kr(t,e,s);r=e.stateNode,Rx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ho(e,t.child,null,s),e.child=Ho(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=r.state,i&&Uw(e,n,!0),e.child}function _S(t){var e=t.stateNode;e.pendingContext?Fw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fw(t,e.context,!1),Zg(t,e.containerInfo)}function tE(t,e,n,r,i){return Ko(),Kg(i),e.flags|=256,Vt(t,e,n,r),e.child}var Tm={dehydrated:null,treeContext:null,retryLane:0};function Sm(t){return{baseLanes:t,cachePool:null,transitions:null}}function yS(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Oe,i&1),t===null)return gm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bh(o,r,0,null),t=_s(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sm(n),e.memoizedState=Tm,t):a_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ax(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yi(a,s):(s=_s(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tm,r}return s=t.child,t=s.sibling,r=yi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function a_(t,e){return e=bh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vc(t,e,n,r){return r!==null&&Kg(r),Ho(e,t.child,null,n),t=a_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fp(Error($(422))),Vc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bh({mode:"visible",children:r.children},i,0,null),s=_s(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ho(e,t.child,null,o),e.child.memoizedState=Sm(o),e.memoizedState=Tm,s);if(!(e.mode&1))return Vc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=fp(s,r,void 0),Vc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pr(t,i),Mn(r,t,i,-1))}return f_(),r=fp(Error($(421))),Vc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,un=pi(i.nextSibling),dn=e,be=!0,On=null,t!==null&&(_n[yn++]=mr,_n[yn++]=gr,_n[yn++]=Ss,mr=t.id,gr=t.overflow,Ss=e),e=a_(e,r.children),e.flags|=4096,e)}function nE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_m(t.return,e,n)}function pp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Vt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nE(t,n,e);else if(t.tag===19)nE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pp(e,!0,n,null,s);break;case"together":pp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function od(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Px(t,e,n){switch(e.tag){case 3:_S(e),Ko();break;case 5:W0(e);break;case 1:tn(e.type)&&Nd(e);break;case 4:Zg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Vd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?yS(t,e,n):(Ie(Oe,Oe.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,mS(t,e,n)}return kr(t,e,n)}var wS,Rm,ES,IS;wS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rm=function(){};ES=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hs(er.current);var s=null;switch(n){case"input":i=Kp(t,i),r=Kp(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Yp(t,i),r=Yp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bd)}Xp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};IS=function(t,e,n,r){n!==r&&(e.flags|=4)};function il(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kx(t,e,n){var r=e.pendingProps;switch(Gg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return tn(e.type)&&xd(),Rt(e),null;case 3:return r=e.stateNode,Qo(),Pe(en),Pe(bt),t_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Dm(On),On=null))),Rm(t,e),Rt(e),null;case 5:e_(e);var i=hs(ru.current);if(n=e.type,t!==null&&e.stateNode!=null)ES(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Rt(e),null}if(t=hs(er.current),Dc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qn]=e,r[tu]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<yl.length;i++)Re(yl[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":dw(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":fw(r,s),Re("invalid",r)}Xp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nc(r.textContent,a,t),i=["children",""+a]):Wl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Sc(r),hw(r,s,!0);break;case"textarea":Sc(r),pw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=YT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[tu]=r,wS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zp(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<yl.length;i++)Re(yl[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":dw(t,r),i=Kp(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Re("invalid",t);break;case"textarea":fw(t,r),i=Yp(t,r),Re("invalid",t);break;default:i=r}Xp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ZT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&JT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gl(t,l):typeof l=="number"&&Gl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Re("scroll",t):l!=null&&xg(t,s,l,o))}switch(n){case"input":Sc(t),hw(t,r,!1);break;case"textarea":Sc(t),pw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?No(t,!!r.multiple,s,!1):r.defaultValue!=null&&No(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)IS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=hs(ru.current),hs(er.current),Dc(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return Rt(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&un!==null&&e.mode&1&&!(e.flags&128))j0(),Ko(),e.flags|=98560,s=!1;else if(s=Dc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[qn]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else On!==null&&(Dm(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?rt===0&&(rt=3):f_())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return Qo(),Rm(t,e),t===null&&Zl(e.stateNode.containerInfo),Rt(e),null;case 10:return Yg(e.type._context),Rt(e),null;case 17:return tn(e.type)&&xd(),Rt(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return Rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)il(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fd(t),o!==null){for(e.flags|=128,il(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>Jo&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),il(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return Rt(e),null}else 2*Qe()-s.renderingStartTime>Jo&&n!==1073741824&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=Oe.current,Ie(Oe,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return h_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Cx(t,e){switch(Gg(e),e.tag){case 1:return tn(e.type)&&xd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),Pe(en),Pe(bt),t_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return e_(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return Qo(),null;case 10:return Yg(e.type._context),null;case 22:case 23:return h_(),null;case 24:return null;default:return null}}var Lc=!1,Pt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,Q=null;function ko(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Am(t,e,n){try{n()}catch(r){ze(t,e,r)}}var rE=!1;function xx(t,e){if(um=Pd,t=P0(),qg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cm={focusedElem:t,selectionRange:n},Pd=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,x=S.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:Nn(e.type,P),x);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){ze(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return S=rE,rE=!1,S}function Nl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Am(e,n,s)}i=i.next}while(i!==r)}}function kh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TS(t){var e=t.alternate;e!==null&&(t.alternate=null,TS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[tu],delete e[fm],delete e[fx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SS(t){return t.tag===5||t.tag===3||t.tag===4}function iE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function km(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bd));else if(r!==4&&(t=t.child,t!==null))for(km(t,e,n),t=t.sibling;t!==null;)km(t,e,n),t=t.sibling}function Cm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cm(t,e,n),t=t.sibling;t!==null;)Cm(t,e,n),t=t.sibling}var mt=null,Dn=!1;function Kr(t,e,n){for(n=n.child;n!==null;)RS(t,e,n),n=n.sibling}function RS(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(wh,n)}catch{}switch(n.tag){case 5:Pt||ko(n,e);case 6:var r=mt,i=Dn;mt=null,Kr(t,e,n),mt=r,Dn=i,mt!==null&&(Dn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(Dn?(t=mt,n=n.stateNode,t.nodeType===8?ap(t.parentNode,n):t.nodeType===1&&ap(t,n),Yl(t)):ap(mt,n.stateNode));break;case 4:r=mt,i=Dn,mt=n.stateNode.containerInfo,Dn=!0,Kr(t,e,n),mt=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Am(n,e,o),i=i.next}while(i!==r)}Kr(t,e,n);break;case 1:if(!Pt&&(ko(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}Kr(t,e,n);break;case 21:Kr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Kr(t,e,n),Pt=r):Kr(t,e,n);break;default:Kr(t,e,n)}}function sE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(r){var i=jx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,Dn=!1;break e;case 3:mt=a.stateNode.containerInfo,Dn=!0;break e;case 4:mt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(mt===null)throw Error($(160));RS(s,o,i),mt=null,Dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ze(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)AS(e,t),e=e.sibling}function AS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),$n(t),r&4){try{Nl(3,t,t.return),kh(3,t)}catch(P){ze(t,t.return,P)}try{Nl(5,t,t.return)}catch(P){ze(t,t.return,P)}}break;case 1:xn(e,t),$n(t),r&512&&n!==null&&ko(n,n.return);break;case 5:if(xn(e,t),$n(t),r&512&&n!==null&&ko(n,n.return),t.flags&32){var i=t.stateNode;try{Gl(i,"")}catch(P){ze(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HT(i,s),Zp(a,o);var c=Zp(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ZT(i,f):d==="dangerouslySetInnerHTML"?JT(i,f):d==="children"?Gl(i,f):xg(i,d,f,c)}switch(a){case"input":Hp(i,s);break;case"textarea":QT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?No(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?No(i,!!s.multiple,s.defaultValue,!0):No(i,!!s.multiple,s.multiple?[]:"",!1))}i[tu]=s}catch(P){ze(t,t.return,P)}}break;case 6:if(xn(e,t),$n(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){ze(t,t.return,P)}}break;case 3:if(xn(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yl(e.containerInfo)}catch(P){ze(t,t.return,P)}break;case 4:xn(e,t),$n(t);break;case 13:xn(e,t),$n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(c_=Qe())),r&4&&sE(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(c=Pt)||d,xn(e,t),Pt=c):xn(e,t),$n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,_=m.child,m.tag){case 0:case 11:case 14:case 15:Nl(4,m,m.return);break;case 1:ko(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){ze(r,n,P)}}break;case 5:ko(m,m.return);break;case 22:if(m.memoizedState!==null){aE(f);continue}}_!==null?(_.return=m,Q=_):aE(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=XT("display",o))}catch(P){ze(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){ze(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xn(e,t),$n(t),r&4&&sE(t);break;case 21:break;default:xn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SS(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gl(i,""),r.flags&=-33);var s=iE(t);Cm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iE(t);km(t,a,o);break;default:throw Error($(161))}}catch(l){ze(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nx(t,e,n){Q=t,PS(t)}function PS(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=Lc;var c=Pt;if(Lc=o,(Pt=l)&&!c)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?lE(i):l!==null?(l.return=o,Q=l):lE(i);for(;s!==null;)Q=s,PS(s),s=s.sibling;Q=i,Lc=a,Pt=c}oE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):oE(t)}}function oE(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||kh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Pt||e.flags&512&&Pm(e)}catch(m){ze(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function aE(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function lE(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kh(4,e)}catch(l){ze(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ze(e,i,l)}}var s=e.return;try{Pm(e)}catch(l){ze(e,s,l)}break;case 5:var o=e.return;try{Pm(e)}catch(l){ze(e,o,l)}}}catch(l){ze(e,e.return,l)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Dx=Math.ceil,Bd=Vr.ReactCurrentDispatcher,l_=Vr.ReactCurrentOwner,In=Vr.ReactCurrentBatchConfig,ce=0,ct=null,tt=null,yt=0,on=0,Co=Vi(0),rt=0,au=null,As=0,Ch=0,u_=0,Dl=null,Qt=null,c_=0,Jo=1/0,fr=null,$d=!1,bm=null,gi=null,Mc=!1,li=null,zd=0,Ol=0,xm=null,ad=-1,ld=0;function Ut(){return ce&6?Qe():ad!==-1?ad:ad=Qe()}function _i(t){return t.mode&1?ce&2&&yt!==0?yt&-yt:gx.transition!==null?(ld===0&&(ld=d0()),ld):(t=ye,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function Mn(t,e,n,r){if(50<Ol)throw Ol=0,xm=null,Error($(185));Nu(t,n,r),(!(ce&2)||t!==ct)&&(t===ct&&(!(ce&2)&&(Ch|=n),rt===4&&ni(t,yt)),nn(t,r),n===1&&ce===0&&!(e.mode&1)&&(Jo=Qe()+500,Rh&&Li()))}function nn(t,e){var n=t.callbackNode;gb(t,e);var r=Ad(t,t===ct?yt:0);if(r===0)n!==null&&_w(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_w(n),e===1)t.tag===0?mx(uE.bind(null,t)):M0(uE.bind(null,t)),dx(function(){!(ce&6)&&Li()}),n=null;else{switch(h0(r)){case 1:n=Lg;break;case 4:n=u0;break;case 16:n=Rd;break;case 536870912:n=c0;break;default:n=Rd}n=VS(n,kS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kS(t,e){if(ad=-1,ld=0,ce&6)throw Error($(327));var n=t.callbackNode;if(Mo()&&t.callbackNode!==n)return null;var r=Ad(t,t===ct?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qd(t,r);else{e=r;var i=ce;ce|=2;var s=bS();(ct!==t||yt!==e)&&(fr=null,Jo=Qe()+500,gs(t,e));do try{Lx();break}catch(a){CS(t,a)}while(!0);Qg(),Bd.current=s,ce=i,tt!==null?e=0:(ct=null,yt=0,e=rt)}if(e!==0){if(e===2&&(i=im(t),i!==0&&(r=i,e=Nm(t,i))),e===1)throw n=au,gs(t,0),ni(t,r),nn(t,Qe()),n;if(e===6)ni(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ox(i)&&(e=qd(t,r),e===2&&(s=im(t),s!==0&&(r=s,e=Nm(t,s))),e===1))throw n=au,gs(t,0),ni(t,r),nn(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Zi(t,Qt,fr);break;case 3:if(ni(t,r),(r&130023424)===r&&(e=c_+500-Qe(),10<e)){if(Ad(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hm(Zi.bind(null,t,Qt,fr),e);break}Zi(t,Qt,fr);break;case 4:if(ni(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dx(r/1960))-r,10<r){t.timeoutHandle=hm(Zi.bind(null,t,Qt,fr),r);break}Zi(t,Qt,fr);break;case 5:Zi(t,Qt,fr);break;default:throw Error($(329))}}}return nn(t,Qe()),t.callbackNode===n?kS.bind(null,t):null}function Nm(t,e){var n=Dl;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=qd(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Dm(e)),t}function Dm(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Ox(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ni(t,e){for(e&=~u_,e&=~Ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),r=1<<n;t[n]=-1,e&=~r}}function uE(t){if(ce&6)throw Error($(327));Mo();var e=Ad(t,0);if(!(e&1))return nn(t,Qe()),null;var n=qd(t,e);if(t.tag!==0&&n===2){var r=im(t);r!==0&&(e=r,n=Nm(t,r))}if(n===1)throw n=au,gs(t,0),ni(t,e),nn(t,Qe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zi(t,Qt,fr),nn(t,Qe()),null}function d_(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Jo=Qe()+500,Rh&&Li())}}function Ps(t){li!==null&&li.tag===0&&!(ce&6)&&Mo();var e=ce;ce|=1;var n=In.transition,r=ye;try{if(In.transition=null,ye=1,t)return t()}finally{ye=r,In.transition=n,ce=e,!(ce&6)&&Li()}}function h_(){on=Co.current,Pe(Co)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(Gg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xd();break;case 3:Qo(),Pe(en),Pe(bt),t_();break;case 5:e_(r);break;case 4:Qo();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Yg(r.type._context);break;case 22:case 23:h_()}n=n.return}if(ct=t,tt=t=yi(t.current,null),yt=on=e,rt=0,au=null,u_=Ch=As=0,Qt=Dl=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ds=null}return t}function CS(t,e){do{var n=tt;try{if(Qg(),id.current=jd,Ud){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ud=!1}if(Rs=0,lt=nt=Ve=null,xl=!1,iu=0,l_.current=null,n===null||n.return===null){rt=1,au=e,tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Yw(o);if(_!==null){_.flags&=-257,Jw(_,o,a,s,e),_.mode&1&&Qw(s,c,e),e=_,l=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(l),e.updateQueue=P}else S.add(l);break e}else{if(!(e&1)){Qw(s,c,e),f_();break e}l=Error($(426))}}else if(be&&a.mode&1){var x=Yw(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Jw(x,o,a,s,e),Kg(Yo(l,a));break e}}s=l=Yo(l,a),rt!==4&&(rt=2),Dl===null?Dl=[s]:Dl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=hS(s,l,e);zw(s,I);break e;case 1:a=l;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(gi===null||!gi.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=fS(s,a,e);zw(s,b);break e}}s=s.return}while(s!==null)}NS(n)}catch(F){e=F,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function bS(){var t=Bd.current;return Bd.current=jd,t===null?jd:t}function f_(){(rt===0||rt===3||rt===2)&&(rt=4),ct===null||!(As&268435455)&&!(Ch&268435455)||ni(ct,yt)}function qd(t,e){var n=ce;ce|=2;var r=bS();(ct!==t||yt!==e)&&(fr=null,gs(t,e));do try{Vx();break}catch(i){CS(t,i)}while(!0);if(Qg(),ce=n,Bd.current=r,tt!==null)throw Error($(261));return ct=null,yt=0,rt}function Vx(){for(;tt!==null;)xS(tt)}function Lx(){for(;tt!==null&&!ab();)xS(tt)}function xS(t){var e=OS(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?NS(t):tt=e,l_.current=null}function NS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,tt=null;return}}else if(n=kx(n,e,on),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);rt===0&&(rt=5)}function Zi(t,e,n){var r=ye,i=In.transition;try{In.transition=null,ye=1,Mx(t,e,n,r)}finally{In.transition=i,ye=r}return null}function Mx(t,e,n,r){do Mo();while(li!==null);if(ce&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_b(t,s),t===ct&&(tt=ct=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mc||(Mc=!0,VS(Rd,function(){return Mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=ye;ye=1;var a=ce;ce|=4,l_.current=null,xx(t,n),AS(n,t),rx(cm),Pd=!!um,cm=um=null,t.current=n,Nx(n),lb(),ce=a,ye=o,In.transition=s}else t.current=n;if(Mc&&(Mc=!1,li=t,zd=i),s=t.pendingLanes,s===0&&(gi=null),db(n.stateNode),nn(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($d)throw $d=!1,t=bm,bm=null,t;return zd&1&&t.tag!==0&&Mo(),s=t.pendingLanes,s&1?t===xm?Ol++:(Ol=0,xm=t):Ol=0,Li(),null}function Mo(){if(li!==null){var t=h0(zd),e=In.transition,n=ye;try{if(In.transition=null,ye=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,zd=0,ce&6)throw Error($(331));var i=ce;for(ce|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Nl(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,_=d.return;if(TS(d),d===c){Q=null;break}if(m!==null){m.return=_,Q=m;break}Q=_}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Nl(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Q=I;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Q=E;else e:for(o=v;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kh(9,a)}}catch(F){ze(a,a.return,F)}if(a===o){Q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,Q=b;break e}Q=a.return}}if(ce=i,Li(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(wh,t)}catch{}r=!0}return r}finally{ye=n,In.transition=e}}return!1}function cE(t,e,n){e=Yo(n,e),e=hS(t,e,1),t=mi(t,e,1),e=Ut(),t!==null&&(Nu(t,1,e),nn(t,e))}function ze(t,e,n){if(t.tag===3)cE(t,t,n);else for(;e!==null;){if(e.tag===3){cE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=Yo(n,t),t=fS(e,t,1),e=mi(e,t,1),t=Ut(),e!==null&&(Nu(e,1,t),nn(e,t));break}}e=e.return}}function Fx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(yt&n)===n&&(rt===4||rt===3&&(yt&130023424)===yt&&500>Qe()-c_?gs(t,0):u_|=n),nn(t,e)}function DS(t,e){e===0&&(t.mode&1?(e=Pc,Pc<<=1,!(Pc&130023424)&&(Pc=4194304)):e=1);var n=Ut();t=Pr(t,e),t!==null&&(Nu(t,e,n),nn(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DS(t,n)}function jx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),DS(t,n)}var OS;OS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,Px(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,be&&e.flags&1048576&&F0(e,Od,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;od(t,e),t=e.pendingProps;var i=Go(e,bt.current);Lo(e,n),i=r_(null,e,r,t,i,n);var s=i_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(s=!0,Nd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xg(e),i.updater=Ph,e.stateNode=i,i._reactInternals=e,vm(e,r,t,n),e=Im(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Wg(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(od(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$x(r),t=Nn(r,t),i){case 0:e=Em(null,e,r,t,n);break e;case 1:e=eE(null,e,r,t,n);break e;case 11:e=Xw(null,e,r,t,n);break e;case 14:e=Zw(null,e,r,Nn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Em(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),eE(t,e,r,i,n);case 3:e:{if(_S(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q0(t,e),Md(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yo(Error($(423)),e),e=tE(t,e,r,n,i);break e}else if(r!==i){i=Yo(Error($(424)),e),e=tE(t,e,r,n,i);break e}else for(un=pi(e.stateNode.containerInfo.firstChild),dn=e,be=!0,On=null,n=$0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),r===i){e=kr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return W0(e),t===null&&gm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dm(r,i)?o=null:s!==null&&dm(r,s)&&(e.flags|=32),gS(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&gm(e),null;case 13:return yS(t,e,n);case 4:return Zg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ho(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Xw(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Vd,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!en.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Er(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_m(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_m(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Lo(e,n),i=Sn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),Zw(t,e,r,i,n);case 15:return pS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),od(t,e),e.tag=1,tn(r)?(t=!0,Nd(e)):t=!1,Lo(e,n),dS(e,r,i),vm(e,r,i,n),Im(null,e,r,!0,t,n);case 19:return vS(t,e,n);case 22:return mS(t,e,n)}throw Error($(156,e.tag))};function VS(t,e){return l0(t,e)}function Bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new Bx(t,e,n,r)}function p_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $x(t){if(typeof t=="function")return p_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dg)return 11;if(t===Og)return 14}return 2}function yi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ud(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")p_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vo:return _s(n.children,i,s,e);case Ng:o=8,i|=8;break;case zp:return t=vn(12,n,e,i|2),t.elementType=zp,t.lanes=s,t;case qp:return t=vn(13,n,e,i),t.elementType=qp,t.lanes=s,t;case Wp:return t=vn(19,n,e,i),t.elementType=Wp,t.lanes=s,t;case WT:return bh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zT:o=10;break e;case qT:o=9;break e;case Dg:o=11;break e;case Og:o=14;break e;case Jr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _s(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function bh(t,e,n,r){return t=vn(22,t,r,e),t.elementType=WT,t.lanes=n,t.stateNode={isHidden:!1},t}function mp(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function gp(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yf(0),this.expirationTimes=Yf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function m_(t,e,n,r,i,s,o,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xg(s),t}function qx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LS(t){if(!t)return Ii;t=t._reactInternals;e:{if($s(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(tn(n))return L0(t,n,e)}return e}function MS(t,e,n,r,i,s,o,a,l){return t=m_(n,r,!0,t,i,s,o,a,l),t.context=LS(null),n=t.current,r=Ut(),i=_i(n),s=Er(r,i),s.callback=e??null,mi(n,s,i),t.current.lanes=i,Nu(t,i,r),nn(t,r),t}function xh(t,e,n,r){var i=e.current,s=Ut(),o=_i(i);return n=LS(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mi(i,e,o),t!==null&&(Mn(t,i,o,s),rd(t,i,o)),o}function Wd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function g_(t,e){dE(t,e),(t=t.alternate)&&dE(t,e)}function Wx(){return null}var FS=typeof reportError=="function"?reportError:function(t){console.error(t)};function __(t){this._internalRoot=t}Nh.prototype.render=__.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));xh(t,e,null,null)};Nh.prototype.unmount=__.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){xh(null,t,null,null)}),e[Ar]=null}};function Nh(t){this._internalRoot=t}Nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ti.length&&e!==0&&e<ti[n].priority;n++);ti.splice(n,0,t),n===0&&_0(t)}};function y_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hE(){}function Gx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wd(o);s.call(c)}}var o=MS(e,r,t,0,null,!1,!1,"",hE);return t._reactRootContainer=o,t[Ar]=o.current,Zl(t.nodeType===8?t.parentNode:t),Ps(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Wd(l);a.call(c)}}var l=m_(t,0,!1,null,null,!1,!1,"",hE);return t._reactRootContainer=l,t[Ar]=l.current,Zl(t.nodeType===8?t.parentNode:t),Ps(function(){xh(e,l,n,r)}),l}function Oh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wd(o);a.call(l)}}xh(e,o,t,i)}else o=Gx(n,e,t,i,r);return Wd(o)}f0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_l(e.pendingLanes);n!==0&&(Mg(e,n|1),nn(e,Qe()),!(ce&6)&&(Jo=Qe()+500,Li()))}break;case 13:Ps(function(){var r=Pr(t,1);if(r!==null){var i=Ut();Mn(r,t,1,i)}}),g_(t,1)}};Fg=function(t){if(t.tag===13){var e=Pr(t,134217728);if(e!==null){var n=Ut();Mn(e,t,134217728,n)}g_(t,134217728)}};p0=function(t){if(t.tag===13){var e=_i(t),n=Pr(t,e);if(n!==null){var r=Ut();Mn(n,t,e,r)}g_(t,e)}};m0=function(){return ye};g0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};tm=function(t,e,n){switch(e){case"input":if(Hp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sh(r);if(!i)throw Error($(90));KT(r),Hp(r,i)}}}break;case"textarea":QT(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};n0=d_;r0=Ps;var Kx={usingClientEntryPoint:!1,Events:[Ou,To,Sh,e0,t0,d_]},sl={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{wh=Fc.inject(Hx),Zn=Fc}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y_(e))throw Error($(200));return qx(t,e,null,n)};mn.createRoot=function(t,e){if(!y_(t))throw Error($(299));var n=!1,r="",i=FS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=m_(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,Zl(t.nodeType===8?t.parentNode:t),new __(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Ps(t)};mn.hydrate=function(t,e,n){if(!Dh(e))throw Error($(200));return Oh(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!y_(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=FS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=MS(e,null,t,1,n??null,i,!1,s,o),t[Ar]=e.current,Zl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nh(e)};mn.render=function(t,e,n){if(!Dh(e))throw Error($(200));return Oh(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Dh(t))throw Error($(40));return t._reactRootContainer?(Ps(function(){Oh(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};mn.unstable_batchedUpdates=d_;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dh(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Oh(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function US(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(US)}catch(t){console.error(t)}}US(),UT.exports=mn;var jS=UT.exports;const bo=bu(jS);var fE=jS;Bp.createRoot=fE.createRoot,Bp.hydrateRoot=fE.hydrateRoot;var BS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(BS);var Qx=BS.exports;const me=bu(Qx);function Om(){return Om=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Om.apply(null,arguments)}function $S(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function pE(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function Yx(t){var e=Jx(t,"string");return typeof e=="symbol"?e:String(e)}function Jx(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Xx(t,e,n){var r=O.useRef(t!==void 0),i=O.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,O.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),m=1;m<d;m++)f[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function Zx(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[pE(r)],a=s[r],l=$S(s,[pE(r),r].map(Yx)),c=e[r],d=Xx(a,o,t[c]),f=d[0],m=d[1];return Om({},l,(i={},i[r]=f,i[c]=m,i))},t)}function Vm(t,e){return Vm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Vm(t,e)}function eN(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Vm(t,e)}const tN=["xxl","xl","lg","md","sm","xs"],nN="xs",Vh=O.createContext({prefixes:{},breakpoints:tN,minBreakpoint:nN});function Fe(t,e){const{prefixes:n}=O.useContext(Vh);return t||n[e]||e}function zS(){const{breakpoints:t}=O.useContext(Vh);return t}function qS(){const{minBreakpoint:t}=O.useContext(Vh);return t}function rN(){const{dir:t}=O.useContext(Vh);return t==="rtl"}function Lh(t){return t&&t.ownerDocument||document}function iN(t){var e=Lh(t);return e&&e.defaultView||window}function sN(t,e){return iN(t).getComputedStyle(t,e)}var oN=/([A-Z])/g;function aN(t){return t.replace(oN,"-$1").toLowerCase()}var lN=/^ms-/;function Uc(t){return aN(t).replace(lN,"-ms-")}var uN=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function cN(t){return!!(t&&uN.test(t))}function ys(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Uc(e))||sN(t).getPropertyValue(Uc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Uc(i)):cN(i)?r+=i+"("+s+") ":n+=Uc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var WS={exports:{}},dN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hN=dN,fN=hN;function GS(){}function KS(){}KS.resetWarningCache=GS;var pN=function(){function t(r,i,s,o,a,l){if(l!==fN){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:KS,resetWarningCache:GS};return n.PropTypes=n,n};WS.exports=pN();var mN=WS.exports;const Ir=bu(mN),mE={disabled:!1},HS=oi.createContext(null);var gN=function(e){return e.scrollTop},vl="unmounted",es="exited",Zr="entering",is="entered",Lm="exiting",Lr=function(t){eN(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=es,s.appearStatus=Zr):l=is:r.unmountOnExit||r.mountOnEnter?l=vl:l=es,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===vl?{status:es}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Zr&&o!==is&&(s=Zr):(o===Zr||o===is)&&(s=Lm)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Zr){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:bo.findDOMNode(this);o&&gN(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===es&&this.setState({status:vl})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[bo.findDOMNode(this),a],c=l[0],d=l[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!o||mE.disabled){this.safeSetState({status:is},function(){s.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:Zr},function(){s.props.onEntering(c,d),s.onTransitionEnd(m,function(){s.safeSetState({status:is},function(){s.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:bo.findDOMNode(this);if(!s||mE.disabled){this.safeSetState({status:es},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Lm},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:es},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:bo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===vl)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=$S(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return oi.createElement(HS.Provider,{value:null},typeof o=="function"?o(i,a):oi.cloneElement(oi.Children.only(o),a))},e}(oi.Component);Lr.contextType=HS;Lr.propTypes={};function ro(){}Lr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ro,onEntering:ro,onEntered:ro,onExit:ro,onExiting:ro,onExited:ro};Lr.UNMOUNTED=vl;Lr.EXITED=es;Lr.ENTERING=Zr;Lr.ENTERED=is;Lr.EXITING=Lm;function _N(t){return t.code==="Escape"||t.keyCode===27}function yN(){const t=O.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}function QS(t){if(!t||typeof t=="function")return null;const{major:e}=yN();return e>=19?t.props.ref:t.ref}const Ea=!!(typeof window<"u"&&window.document&&window.document.createElement);var Mm=!1,Fm=!1;try{var _p={get passive(){return Mm=!0},get once(){return Fm=Mm=!0}};Ea&&(window.addEventListener("test",_p,_p),window.removeEventListener("test",_p,!0))}catch{}function YS(t,e,n,r){if(r&&typeof r!="boolean"&&!Fm){var i=r.once,s=r.capture,o=n;!Fm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Mm?r:s)}t.addEventListener(e,n,r)}function Um(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Gd(t,e,n,r){return YS(t,e,n,r),function(){Um(t,e,n,r)}}function vN(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function wN(t){var e=ys(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function EN(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||vN(t,"transitionend",!0)},e+n),s=Gd(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function JS(t,e,n,r){n==null&&(n=wN(t)||0);var i=EN(t,n,r),s=Gd(t,"transitionend",e);return function(){i(),s()}}function gE(t,e){const n=ys(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function IN(t,e){const n=gE(t,"transitionDuration"),r=gE(t,"transitionDelay"),i=JS(t,s=>{s.target===t&&(i(),e(s))},n+r)}function TN(t){t.offsetHeight}const _E=t=>!t||typeof t=="function"?t:e=>{t.current=e};function SN(t,e){const n=_E(t),r=_E(e);return i=>{n&&n(i),r&&r(i)}}function XS(t,e){return O.useMemo(()=>SN(t,e),[t,e])}function RN(t){return t&&"setState"in t?bo.findDOMNode(t):t??null}const AN=oi.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},d)=>{const f=O.useRef(null),m=XS(f,l),_=U=>{m(RN(U))},S=U=>w=>{U&&f.current&&U(f.current,w)},P=O.useCallback(S(t),[t]),x=O.useCallback(S(e),[e]),I=O.useCallback(S(n),[n]),v=O.useCallback(S(r),[r]),E=O.useCallback(S(i),[i]),b=O.useCallback(S(s),[s]),F=O.useCallback(S(o),[o]);return k.jsx(Lr,{ref:d,...c,onEnter:P,onEntered:I,onEntering:x,onExit:v,onExited:b,onExiting:E,addEndListener:F,nodeRef:f,children:typeof a=="function"?(U,w)=>a(U,{...w,ref:_}):oi.cloneElement(a,{ref:_})})});function PN(t){const e=O.useRef(t);return O.useEffect(()=>{e.current=t},[t]),e}function Kd(t){const e=PN(t);return O.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const ZS=t=>O.forwardRef((e,n)=>k.jsx("div",{...e,ref:n,className:me(e.className,t)})),eR=ZS("h4");eR.displayName="DivStyledAsH4";const tR=O.forwardRef(({className:t,bsPrefix:e,as:n=eR,...r},i)=>(e=Fe(e,"alert-heading"),k.jsx(n,{ref:i,className:me(t,e),...r})));tR.displayName="AlertHeading";function kN(t){const e=O.useRef(t);return O.useEffect(()=>{e.current=t},[t]),e}function ri(t){const e=kN(t);return O.useCallback(function(...n){return e.current&&e.current(...n)},[e])}function CN(){const t=O.useRef(!0),e=O.useRef(()=>t.current);return O.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function bN(t){const e=O.useRef(null);return O.useEffect(()=>{e.current=t}),e.current}const xN=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",NN=typeof document<"u",yE=NN||xN?O.useLayoutEffect:O.useEffect,DN=["as","disabled"];function ON(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function VN(t){return!t||t.trim()==="#"}function v_({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const d=m=>{if((e||t==="a"&&VN(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},f=m=>{m.key===" "&&(m.preventDefault(),d(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:f},c]}const LN=O.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=ON(t,DN);const[s,{tagName:o}]=v_(Object.assign({tagName:n,disabled:r},i));return k.jsx(o,Object.assign({},i,s,{ref:e}))});LN.displayName="Button";const MN=["onKeyDown"];function FN(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function UN(t){return!t||t.trim()==="#"}const nR=O.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=FN(t,MN);const[i]=v_(Object.assign({tagName:"a"},r)),s=ri(o=>{i.onKeyDown(o),n==null||n(o)});return UN(r.href)||r.role==="button"?k.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):k.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});nR.displayName="Anchor";const rR=O.forwardRef(({className:t,bsPrefix:e,as:n=nR,...r},i)=>(e=Fe(e,"alert-link"),k.jsx(n,{ref:i,className:me(t,e),...r})));rR.displayName="AlertLink";const jN={[Zr]:"show",[is]:"show"},lu=O.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=O.useCallback((l,c)=>{TN(l),r==null||r(l,c)},[r]);return k.jsx(AN,{ref:s,addEndListener:IN,...o,onEnter:a,childRef:QS(e),children:(l,c)=>O.cloneElement(e,{...c,className:me("fade",t,e.props.className,jN[l],n[l])})})});lu.displayName="Fade";const BN={"aria-label":Ir.string,onClick:Ir.func,variant:Ir.oneOf(["white"])},Mh=O.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>k.jsx("button",{ref:i,type:"button",className:me("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Mh.displayName="CloseButton";Mh.propTypes=BN;const iR=O.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:c,dismissible:d,transition:f=lu,...m}=Zx(t,{show:"onClose"}),_=Fe(n,"alert"),S=Kd(I=>{c&&c(!1,I)}),P=f===!0?lu:f,x=k.jsxs("div",{role:"alert",...P?void 0:m,ref:e,className:me(o,_,l&&`${_}-${l}`,d&&`${_}-dismissible`),children:[d&&k.jsx(Mh,{onClick:S,"aria-label":i,variant:s}),a]});return P?k.jsx(P,{unmountOnExit:!0,...m,ref:void 0,in:r,children:x}):r?x:null});iR.displayName="Alert";const sR=Object.assign(iR,{Link:rR,Heading:tR}),ks=O.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const c=Fe(e,"btn"),[d,{tagName:f}]=v_({tagName:t,disabled:s,...a}),m=f;return k.jsx(m,{...d,...a,ref:l,disabled:s,className:me(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,a.href&&s&&"disabled")})});ks.displayName="Button";function $N(t){const e=O.useRef(t);return e.current=t,e}function zN(t){const e=$N(t);O.useEffect(()=>()=>e.current(),[])}function qN(t,e){return O.Children.toArray(t).some(n=>O.isValidElement(n)&&n.type===e)}function WN({as:t,bsPrefix:e,className:n,...r}){e=Fe(e,"col");const i=zS(),s=qS(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let d,f,m;typeof c=="object"&&c!=null?{span:d,offset:f,order:m}=c:d=c;const _=l!==s?`-${l}`:"";d&&o.push(d===!0?`${e}${_}`:`${e}${_}-${d}`),m!=null&&a.push(`order${_}-${m}`),f!=null&&a.push(`offset${_}-${f}`)}),[{...r,className:me(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const ei=O.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=WN(t);return k.jsx(i,{...r,ref:e,className:me(n,!o.length&&s)})});ei.displayName="Col";var GN=Function.prototype.bind.call(Function.prototype.call,[].slice);function io(t,e){return GN(t.querySelectorAll(e))}function vE(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const KN="data-rr-ui-";function HN(t){return`${KN}${t}`}const oR=O.createContext(Ea?window:void 0);oR.Provider;function w_(){return O.useContext(oR)}const QN={type:Ir.string,tooltip:Ir.bool,as:Ir.elementType},Fh=O.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>k.jsx(t,{...i,ref:s,className:me(e,`${n}-${r?"tooltip":"feedback"}`)}));Fh.displayName="Feedback";Fh.propTypes=QN;const Cr=O.createContext({}),E_=O.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=O.useContext(Cr);return e=Fe(e,"form-check-input"),k.jsx(o,{...a,ref:l,type:r,id:t||c,className:me(n,e,i&&"is-valid",s&&"is-invalid")})});E_.displayName="FormCheckInput";const Hd=O.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=O.useContext(Cr);return t=Fe(t,"form-check-label"),k.jsx("label",{...r,ref:i,htmlFor:n||s,className:me(e,t)})});Hd.displayName="FormCheckLabel";const aR=O.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:d,className:f,style:m,title:_="",type:S="checkbox",label:P,children:x,as:I="input",...v},E)=>{e=Fe(e,"form-check"),n=Fe(n,"form-switch");const{controlId:b}=O.useContext(Cr),F=O.useMemo(()=>({controlId:t||b}),[b,t]),U=!x&&P!=null&&P!==!1||qN(x,Hd),w=k.jsx(E_,{...v,type:S==="switch"?"checkbox":S,ref:E,isValid:o,isInvalid:a,disabled:s,as:I});return k.jsx(Cr.Provider,{value:F,children:k.jsx("div",{style:m,className:me(f,U&&e,r&&`${e}-inline`,i&&`${e}-reverse`,S==="switch"&&n),children:x||k.jsxs(k.Fragment,{children:[w,U&&k.jsx(Hd,{title:_,children:P}),c&&k.jsx(Fh,{type:d,tooltip:l,children:c})]})})})});aR.displayName="FormCheck";const Qd=Object.assign(aR,{Input:E_,Label:Hd}),lR=O.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:d="input",...f},m)=>{const{controlId:_}=O.useContext(Cr);return t=Fe(t,"form-control"),k.jsx(d,{...f,type:e,size:r,ref:m,readOnly:c,id:i||_,className:me(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});lR.displayName="FormControl";const YN=Object.assign(lR,{Feedback:Fh}),uR=O.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Fe(e,"form-floating"),k.jsx(n,{ref:i,className:me(t,e),...r})));uR.displayName="FormFloating";const I_=O.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=O.useMemo(()=>({controlId:t}),[t]);return k.jsx(Cr.Provider,{value:i,children:k.jsx(e,{...n,ref:r})})});I_.displayName="FormGroup";const cR=O.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=O.useContext(Cr);e=Fe(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=me(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?k.jsx(ei,{ref:a,as:"label",className:d,htmlFor:s,...o}):k.jsx(t,{ref:a,className:d,htmlFor:s,...o})});cR.displayName="FormLabel";const dR=O.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=O.useContext(Cr);return t=Fe(t,"form-range"),k.jsx("input",{...r,type:"range",ref:i,className:me(e,t),id:n||s})});dR.displayName="FormRange";const hR=O.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=O.useContext(Cr);return t=Fe(t,"form-select"),k.jsx("select",{...a,size:n,ref:l,className:me(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});hR.displayName="FormSelect";const fR=O.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=Fe(t,"form-text"),k.jsx(n,{...i,ref:s,className:me(e,t,r&&"text-muted")})));fR.displayName="FormText";const pR=O.forwardRef((t,e)=>k.jsx(Qd,{...t,ref:e,type:"switch"}));pR.displayName="Switch";const JN=Object.assign(pR,{Input:Qd.Input,Label:Qd.Label}),mR=O.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=Fe(t,"form-floating"),k.jsxs(I_,{ref:o,className:me(e,t),controlId:r,...s,children:[n,k.jsx("label",{htmlFor:r,children:i})]})));mR.displayName="FloatingLabel";const XN={_ref:Ir.any,validated:Ir.bool,as:Ir.elementType},T_=O.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>k.jsx(n,{...r,ref:i,className:me(t,e&&"was-validated")}));T_.displayName="Form";T_.propTypes=XN;const ge=Object.assign(T_,{Group:I_,Control:YN,Floating:uR,Check:Qd,Switch:JN,Label:cR,Text:fR,Range:dR,Select:hR,FloatingLabel:mR}),wE=t=>!t||typeof t=="function"?t:e=>{t.current=e};function ZN(t,e){const n=wE(t),r=wE(e);return i=>{n&&n(i),r&&r(i)}}function S_(t,e){return O.useMemo(()=>ZN(t,e),[t,e])}var jc;function EE(t){if((!jc&&jc!==0||t)&&Ea){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),jc=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return jc}function eD(){return O.useState(null)}function yp(t){t===void 0&&(t=Lh());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function tD(t){const e=O.useRef(t);return e.current=t,e}function nD(t){const e=tD(t);O.useEffect(()=>()=>e.current(),[])}function rD(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const IE=HN("modal-open");class R_{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return rD(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(ys(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(IE,""),ys(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(IE),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const vp=(t,e)=>Ea?t==null?(e||Lh()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function iD(t,e){const n=w_(),[r,i]=O.useState(()=>vp(t,n==null?void 0:n.document));if(!r){const s=vp(t);s&&i(s)}return O.useEffect(()=>{},[e,r]),O.useEffect(()=>{const s=vp(t);s!==r&&i(s)},[t,r]),r}function sD({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=O.useRef(null),o=O.useRef(e),a=ri(n);O.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=S_(s,t.ref),c=O.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}const oD=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function aD(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function lD(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=aD(t,oD);const d=O.useRef(null),f=S_(d,QS(l)),m=b=>F=>{b&&d.current&&b(d.current,F)},_=O.useCallback(m(e),[e]),S=O.useCallback(m(n),[n]),P=O.useCallback(m(r),[r]),x=O.useCallback(m(i),[i]),I=O.useCallback(m(s),[s]),v=O.useCallback(m(o),[o]),E=O.useCallback(m(a),[a]);return Object.assign({},c,{nodeRef:d},e&&{onEnter:_},n&&{onEntering:S},r&&{onEntered:P},i&&{onExit:x},s&&{onExiting:I},o&&{onExited:v},a&&{addEndListener:E},{children:typeof l=="function"?(b,F)=>l(b,Object.assign({},F,{ref:f})):O.cloneElement(l,{ref:f})})}const uD=["component"];function cD(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}const dD=O.forwardRef((t,e)=>{let{component:n}=t,r=cD(t,uD);const i=lD(r);return k.jsx(n,Object.assign({ref:e},i))});function hD({in:t,onTransition:e}){const n=O.useRef(null),r=O.useRef(!0),i=ri(e);return yE(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),yE(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function fD({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=O.useState(!e);e&&s&&o(!1);const a=hD({in:!!e,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(d,f=>{throw c.in||o(!0),f})}}),l=S_(a,t.ref);return s&&!e?null:O.cloneElement(t,{ref:l})}function TE(t,e,n){return t?k.jsx(dD,Object.assign({},n,{component:t})):e?k.jsx(fD,Object.assign({},n,{transition:e})):k.jsx(sD,Object.assign({},n))}const pD=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function mD(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}let wp;function gD(t){return wp||(wp=new R_({ownerDocument:t==null?void 0:t.document})),wp}function _D(t){const e=w_(),n=t||gD(e),r=O.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:O.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:O.useCallback(i=>{r.current.backdrop=i},[])})}const gR=O.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:m,backdropTransition:_,runBackdropTransition:S,autoFocus:P=!0,enforceFocus:x=!0,restoreFocus:I=!0,restoreFocusOptions:v,renderDialog:E,renderBackdrop:b=ve=>k.jsx("div",Object.assign({},ve)),manager:F,container:U,onShow:w,onHide:y=()=>{},onExit:T,onExited:R,onExiting:C,onEnter:N,onEntering:A,onEntered:ft}=t,kn=mD(t,pD);const Wt=w_(),Et=iD(U),q=_D(F),Z=CN(),te=bN(n),[pe,le]=O.useState(!n),de=O.useRef(null);O.useImperativeHandle(e,()=>q,[q]),Ea&&!te&&n&&(de.current=yp(Wt==null?void 0:Wt.document)),n&&pe&&le(!1);const ot=ri(()=>{if(q.add(),Cn.current=Gd(document,"keydown",La),zi.current=Gd(document,"focus",()=>setTimeout(rn),!0),w&&w(),P){var ve,qi;const Wi=yp((ve=(qi=q.dialog)==null?void 0:qi.ownerDocument)!=null?ve:Wt==null?void 0:Wt.document);q.dialog&&Wi&&!vE(q.dialog,Wi)&&(de.current=Wi,q.dialog.focus())}}),Nt=ri(()=>{if(q.remove(),Cn.current==null||Cn.current(),zi.current==null||zi.current(),I){var ve;(ve=de.current)==null||ve.focus==null||ve.focus(v),de.current=null}});O.useEffect(()=>{!n||!Et||ot()},[n,Et,ot]),O.useEffect(()=>{pe&&Nt()},[pe,Nt]),nD(()=>{Nt()});const rn=ri(()=>{if(!x||!Z()||!q.isTopModal())return;const ve=yp(Wt==null?void 0:Wt.document);q.dialog&&ve&&!vE(q.dialog,ve)&&q.dialog.focus()}),Gt=ri(ve=>{ve.target===ve.currentTarget&&(c==null||c(ve),a===!0&&y())}),La=ri(ve=>{l&&_N(ve)&&q.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||y())}),zi=O.useRef(),Cn=O.useRef(),lr=(...ve)=>{le(!0),R==null||R(...ve)};if(!Et)return null;const jn=Object.assign({role:r,ref:q.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},kn,{style:s,className:i,tabIndex:-1});let ur=E?E(jn):k.jsx("div",Object.assign({},jn,{children:O.cloneElement(o,{role:"document"})}));ur=TE(f,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:C,onExited:lr,onEnter:N,onEntering:A,onEntered:ft,children:ur});let Bn=null;return a&&(Bn=b({ref:q.setBackdropRef,onClick:Gt}),Bn=TE(_,S,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bn})),k.jsx(k.Fragment,{children:bo.createPortal(k.jsxs(k.Fragment,{children:[Bn,ur]}),Et)})});gR.displayName="Modal";const yD=Object.assign(gR,{Manager:R_});function vD(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function wD(t,e){t.classList?t.classList.add(e):vD(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function SE(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ED(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=SE(t.className,e):t.setAttribute("class",SE(t.className&&t.className.baseVal||"",e))}const so={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class ID extends R_{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,ys(n,{[e]:`${parseFloat(ys(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],ys(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(wD(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";io(n,so.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),io(n,so.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),io(n,so.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();ED(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";io(n,so.FIXED_CONTENT).forEach(s=>this.restore(r,s)),io(n,so.STICKY_CONTENT).forEach(s=>this.restore(i,s)),io(n,so.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Ep;function TD(t){return Ep||(Ep=new ID(t)),Ep}const _R=O.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Fe(e,"modal-body"),k.jsx(n,{ref:i,className:me(t,e),...r})));_R.displayName="ModalBody";const yR=O.createContext({onHide(){}}),A_=O.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},c)=>{t=Fe(t,"modal");const d=`${t}-dialog`,f=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return k.jsx("div",{...l,ref:c,className:me(d,e,i&&`${t}-${i}`,r&&`${d}-centered`,a&&`${d}-scrollable`,s&&f),children:k.jsx("div",{className:me(`${t}-content`,n),children:o})})});A_.displayName="ModalDialog";const vR=O.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Fe(e,"modal-footer"),k.jsx(n,{ref:i,className:me(t,e),...r})));vR.displayName="ModalFooter";const SD=O.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=O.useContext(yR),l=Kd(()=>{a==null||a.onHide(),r==null||r()});return k.jsxs("div",{ref:o,...s,children:[i,n&&k.jsx(Mh,{"aria-label":t,variant:e,onClick:l})]})}),wR=O.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Fe(t,"modal-header"),k.jsx(SD,{ref:s,...i,className:me(e,t),closeLabel:n,closeButton:r})));wR.displayName="ModalHeader";const RD=ZS("h4"),ER=O.forwardRef(({className:t,bsPrefix:e,as:n=RD,...r},i)=>(e=Fe(e,"modal-title"),k.jsx(n,{ref:i,className:me(t,e),...r})));ER.displayName="ModalTitle";function AD(t){return k.jsx(lu,{...t,timeout:null})}function PD(t){return k.jsx(lu,{...t,timeout:null})}const IR=O.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=A_,"data-bs-theme":a,"aria-labelledby":l,"aria-describedby":c,"aria-label":d,show:f=!1,animation:m=!0,backdrop:_=!0,keyboard:S=!0,onEscapeKeyDown:P,onShow:x,onHide:I,container:v,autoFocus:E=!0,enforceFocus:b=!0,restoreFocus:F=!0,restoreFocusOptions:U,onEntered:w,onExit:y,onExiting:T,onEnter:R,onEntering:C,onExited:N,backdropClassName:A,manager:ft,...kn},Wt)=>{const[Et,q]=O.useState({}),[Z,te]=O.useState(!1),pe=O.useRef(!1),le=O.useRef(!1),de=O.useRef(null),[ot,Nt]=eD(),rn=XS(Wt,Nt),Gt=Kd(I),La=rN();t=Fe(t,"modal");const zi=O.useMemo(()=>({onHide:Gt}),[Gt]);function Cn(){return ft||TD({isRTL:La})}function lr(ee){if(!Ea)return;const Be=Cn().getScrollbarWidth()>0,Gi=ee.scrollHeight>Lh(ee).documentElement.clientHeight;q({paddingRight:Be&&!Gi?EE():void 0,paddingLeft:!Be&&Gi?EE():void 0})}const jn=Kd(()=>{ot&&lr(ot.dialog)});zN(()=>{Um(window,"resize",jn),de.current==null||de.current()});const ur=()=>{pe.current=!0},Bn=ee=>{pe.current&&ot&&ee.target===ot.dialog&&(le.current=!0),pe.current=!1},ve=()=>{te(!0),de.current=JS(ot.dialog,()=>{te(!1)})},qi=ee=>{ee.target===ee.currentTarget&&ve()},Wi=ee=>{if(_==="static"){qi(ee);return}if(le.current||ee.target!==ee.currentTarget){le.current=!1;return}I==null||I()},Pf=ee=>{S?P==null||P(ee):(ee.preventDefault(),_==="static"&&ve())},ic=(ee,Be)=>{ee&&lr(ee),R==null||R(ee,Be)},Ma=ee=>{de.current==null||de.current(),y==null||y(ee)},sc=(ee,Be)=>{C==null||C(ee,Be),YS(window,"resize",jn)},kf=ee=>{ee&&(ee.style.display=""),N==null||N(ee),Um(window,"resize",jn)},Fa=O.useCallback(ee=>k.jsx("div",{...ee,className:me(`${t}-backdrop`,A,!m&&"show")}),[m,A,t]),Js={...n,...Et};Js.display="block";const oc=ee=>k.jsx("div",{role:"dialog",...ee,style:Js,className:me(e,t,Z&&`${t}-static`,!m&&"show"),onClick:_?Wi:void 0,onMouseUp:Bn,"data-bs-theme":a,"aria-label":d,"aria-labelledby":l,"aria-describedby":c,children:k.jsx(o,{...kn,onMouseDown:ur,className:r,contentClassName:i,children:s})});return k.jsx(yR.Provider,{value:zi,children:k.jsx(yD,{show:f,ref:rn,backdrop:_,container:v,keyboard:!0,autoFocus:E,enforceFocus:b,restoreFocus:F,restoreFocusOptions:U,onEscapeKeyDown:Pf,onShow:x,onHide:I,onEnter:ic,onEntering:sc,onEntered:w,onExit:Ma,onExiting:T,onExited:kf,manager:Cn(),transition:m?AD:void 0,backdropTransition:m?PD:void 0,renderBackdrop:Fa,renderDialog:oc})})});IR.displayName="Modal";const ln=Object.assign(IR,{Body:_R,Header:wR,Title:ER,Footer:vR,Dialog:A_,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),ts=O.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=Fe(t,"row"),o=zS(),a=qS(),l=`${s}-cols`,c=[];return o.forEach(d=>{const f=r[d];delete r[d];let m;f!=null&&typeof f=="object"?{cols:m}=f:m=f;const _=d!==a?`-${d}`:"";m!=null&&c.push(`${l}${_}-${m}`)}),k.jsx(n,{ref:i,...r,className:me(e,s,...c)})});ts.displayName="Row";var TR={exports:{}};(()=>{var t={d:(s,o)=>{for(var a in o)t.o(o,a)&&!t.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},e={};function n(s,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}t.r(e),t.d(e,{default:()=>i});var r=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(l,c,d,f,m,_){return d>f&&(l=Math.round(l*f/d),d=f),l>c&&(d=Math.round(d*c/l),l=c),m&&d<m&&(l=Math.round(l*m/d),d=m),_&&l<_&&(d=Math.round(d*_/l),l=_),{height:l,width:d}}},{key:"resizeAndRotateImage",value:function(l,c,d,f,m){var _=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",S=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,P=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,x=S/100,I=document.createElement("canvas"),v=l.width,E=l.height,b=this.changeHeightWidth(E,d,v,c,f,m);!P||P!==90&&P!==270?(I.width=b.width,I.height=b.height):(I.width=b.height,I.height=b.width),v=b.width,E=b.height;var F=I.getContext("2d");return F.fillStyle="rgba(0, 0, 0, 0)",F.fillRect(0,0,v,E),F.imageSmoothingEnabled&&F.imageSmoothingQuality&&(F.imageSmoothingQuality="high"),P&&(F.rotate(P*Math.PI/180),P===90?F.translate(0,-I.width):P===180?F.translate(-I.width,-I.height):P===270?F.translate(-I.height,0):P!==0&&P!==360||F.translate(0,0)),F.drawImage(l,0,0,v,E),I.toDataURL("image/".concat(_),x)}},{key:"b64toByteArrays",value:function(l,c){for(var d=atob(l.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),f=[],m=0;m<d.length;m+=512){for(var _=d.slice(m,m+512),S=new Array(_.length),P=0;P<_.length;P++)S[P]=_.charCodeAt(P);var x=new Uint8Array(S);f.push(x)}return f}},{key:"b64toBlob",value:function(l,c){var d=this.b64toByteArrays(l,c);return new Blob(d,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(l,c,d){var f=this.b64toByteArrays(l,d);return new File(f,c,{type:d,lastModified:new Date})}},{key:"createResizedImage",value:function(l,c,d,f,m,_,S){var P=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",x=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,I=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,v=new FileReader;if(!l)throw Error("File Not Found!");if(l.type&&!l.type.includes("image"))throw Error("File Is NOT Image!");v.readAsDataURL(l),v.onload=function(){var E=new Image;E.src=v.result,E.onload=function(){var b=s.resizeAndRotateImage(E,c,d,x,I,f,m,_),F="image/".concat(f);switch(P){case"blob":var U=s.b64toBlob(b,F);S(U);break;case"base64":S(b);break;case"file":var w=l.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(f.toString()),y=s.b64toFile(b,w,F);S(y);break;default:S(b)}}},v.onerror=function(E){throw Error(E)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,l,c,d,f,m,_,S){return r.createResizedImage(s,o,a,l,c,d,f,m,_,S)}};TR.exports=e})();var kD=TR.exports;const CD=bu(kD);var RE={};/**
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
 */const SR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},RR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new xD;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ND=function(t){const e=SR(t);return RR.encodeByteArray(e,!0)},Yd=function(t){return ND(t).replace(/\./g,"")},AR=function(t){try{return RR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Jd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DD(n)||(t[n]=Jd(t[n],e[n]));return t}function DD(t){return t!=="__proto__"}/**
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
 */function PR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OD=()=>PR().__FIREBASE_DEFAULTS__,VD=()=>{if(typeof process>"u"||typeof RE>"u")return;const t=RE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AR(t[1]);return e&&JSON.parse(e)},Uh=()=>{try{return OD()||VD()||LD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kR=t=>{var e,n;return(n=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CR=t=>{const e=kR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bR=()=>{var t;return(t=Uh())===null||t===void 0?void 0:t.config},xR=t=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class MD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function NR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yd(JSON.stringify(n)),Yd(JSON.stringify(o)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function P_(){var t;const e=(t=Uh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UD(){return typeof window<"u"||DR()}function DR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function jD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VR(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LR(){return!P_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uu(){try{return typeof indexedDB=="object"}catch{return!1}}function BD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const $D="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$D,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function zD(t,e){return t.replace(qD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qD=/\{\$([^}]+)}/g;/**
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
 */function AE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function WD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(PE(s)&&PE(o)){if(!Xo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function PE(t){return t!==null&&typeof t=="object"}/**
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
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MR(t,e){const n=new GD(t,e);return n.subscribe.bind(n)}class GD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ip),i.error===void 0&&(i.error=Ip),i.complete===void 0&&(i.complete=Ip);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ip(){}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class HD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YD(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QD(t){return t===ns?void 0:t}function YD(t){return t.instantiationMode==="EAGER"}/**
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
 */class FR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const C_=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const UR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},JD=ie.INFO,XD={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},ZD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jh{constructor(e){this.name=e,this._logLevel=JD,this._logHandler=ZD,this._userLogHandler=null,C_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function eO(t){C_.forEach(e=>{e.setLogLevel(t)})}function tO(t,e){for(const n of C_){let r=null;e&&e.level&&(r=UR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const nO=(t,e)=>e.some(n=>t instanceof n);let kE,CE;function rO(){return kE||(kE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iO(){return CE||(CE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jR=new WeakMap,jm=new WeakMap,BR=new WeakMap,Tp=new WeakMap,b_=new WeakMap;function sO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jR.set(n,t)}).catch(()=>{}),b_.set(e,t),e}function oO(t){if(jm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jm.set(t,e)}let Bm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aO(t){Bm=t(Bm)}function lO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sp(this),e,...n);return BR.set(r,e.sort?e.sort():[e]),vi(r)}:iO().includes(t)?function(...e){return t.apply(Sp(this),e),vi(jR.get(this))}:function(...e){return vi(t.apply(Sp(this),e))}}function uO(t){return typeof t=="function"?lO(t):(t instanceof IDBTransaction&&oO(t),nO(t,rO())?new Proxy(t,Bm):t)}function vi(t){if(t instanceof IDBRequest)return sO(t);if(Tp.has(t))return Tp.get(t);const e=uO(t);return e!==t&&(Tp.set(t,e),b_.set(e,t)),e}const Sp=t=>b_.get(t);function cO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vi(o.result),l.oldVersion,l.newVersion,vi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dO=["get","getKey","getAll","getAllKeys","count"],hO=["put","add","delete","clear"],Rp=new Map;function bE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rp.get(e))return Rp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Rp.set(e,s),s}aO(t=>({...t,get:(e,n,r)=>bE(e,n)||t.get(e,n,r),has:(e,n)=>!!bE(e,n)||t.has(e,n)}));/**
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
 */class fO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xd="@firebase/app",$m="0.10.13";/**
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
 */const br=new jh("@firebase/app"),mO="@firebase/app-compat",gO="@firebase/analytics-compat",_O="@firebase/analytics",yO="@firebase/app-check-compat",vO="@firebase/app-check",wO="@firebase/auth",EO="@firebase/auth-compat",IO="@firebase/database",TO="@firebase/data-connect",SO="@firebase/database-compat",RO="@firebase/functions",AO="@firebase/functions-compat",PO="@firebase/installations",kO="@firebase/installations-compat",CO="@firebase/messaging",bO="@firebase/messaging-compat",xO="@firebase/performance",NO="@firebase/performance-compat",DO="@firebase/remote-config",OO="@firebase/remote-config-compat",VO="@firebase/storage",LO="@firebase/storage-compat",MO="@firebase/firestore",FO="@firebase/vertexai-preview",UO="@firebase/firestore-compat",jO="firebase",BO="10.14.1";/**
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
 */const Ti="[DEFAULT]",$O={[Xd]:"fire-core",[mO]:"fire-core-compat",[_O]:"fire-analytics",[gO]:"fire-analytics-compat",[vO]:"fire-app-check",[yO]:"fire-app-check-compat",[wO]:"fire-auth",[EO]:"fire-auth-compat",[IO]:"fire-rtdb",[TO]:"fire-data-connect",[SO]:"fire-rtdb-compat",[RO]:"fire-fn",[AO]:"fire-fn-compat",[PO]:"fire-iid",[kO]:"fire-iid-compat",[CO]:"fire-fcm",[bO]:"fire-fcm-compat",[xO]:"fire-perf",[NO]:"fire-perf-compat",[DO]:"fire-rc",[OO]:"fire-rc-compat",[VO]:"fire-gcs",[LO]:"fire-gcs-compat",[MO]:"fire-fst",[UO]:"fire-fst-compat",[FO]:"fire-vertex","fire-js":"fire-js",[jO]:"fire-js-all"};/**
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
 */const Si=new Map,Zo=new Map,ea=new Map;function cu(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $R(t,e){t.container.addOrOverwriteComponent(e)}function xr(t){const e=t.name;if(ea.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,t);for(const n of Si.values())cu(n,t);for(const n of Zo.values())cu(n,t);return!0}function Ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zO(t,e,n=Ti){Ta(t,e).clearInstance(n)}function zR(t){return t.options!==void 0}function qe(t){return t.settings!==void 0}function qO(){ea.clear()}/**
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
 */const WO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new zs("app","Firebase",WO);/**
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
 */let qR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO extends qR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,hn(Xd,$m,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){N_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tn.create("server-app-deleted")}}/**
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
 */const Mr=BO;function x_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ti,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=bR()),!n)throw Tn.create("no-options");const s=Si.get(i);if(s){if(Xo(n,s.options)&&Xo(r,s.config))return s;throw Tn.create("duplicate-app",{appName:i})}const o=new FR(i);for(const l of ea.values())o.addComponent(l);const a=new qR(n,r,o);return Si.set(i,a),a}function KO(t,e){if(UD()&&!DR())throw Tn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;zR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Zo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new FR(s);for(const c of ea.values())a.addComponent(c);const l=new GO(n,e,s,a);return Zo.set(s,l),l}function Bh(t=Ti){const e=Si.get(t);if(!e&&t===Ti&&bR())return x_();if(!e)throw Tn.create("no-app",{appName:t});return e}function HO(){return Array.from(Si.values())}async function N_(t){let e=!1;const n=t.name;Si.has(n)?(e=!0,Si.delete(n)):Zo.has(n)&&t.decRefCount()<=0&&(Zo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function hn(t,e,n){var r;let i=(r=$O[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}xr(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function WR(t,e){if(t!==null&&typeof t!="function")throw Tn.create("invalid-log-argument");tO(t,e)}function GR(t){eO(t)}/**
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
 */const QO="firebase-heartbeat-database",YO=1,du="firebase-heartbeat-store";let Ap=null;function KR(){return Ap||(Ap=cO(QO,YO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(du)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ap}async function JO(t){try{const n=(await KR()).transaction(du),r=await n.objectStore(du).get(HR(t));return await n.done,r}catch(e){if(e instanceof Ct)br.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function xE(t,e){try{const r=(await KR()).transaction(du,"readwrite");await r.objectStore(du).put(e,HR(t)),await r.done}catch(n){if(n instanceof Ct)br.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function HR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XO=1024,ZO=30*24*60*60*1e3;class eV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=NE();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ZO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=NE(),{heartbeatsToSend:r,unsentEntries:i}=tV(this._heartbeatsCache.heartbeats),s=Yd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return br.warn(n),""}}}function NE(){return new Date().toISOString().substring(0,10)}function tV(t,e=XO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),DE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),DE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uu()?BD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function DE(t){return Yd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rV(t){xr(new An("platform-logger",e=>new fO(e),"PRIVATE")),xr(new An("heartbeat",e=>new eV(e),"PRIVATE")),hn(Xd,$m,t),hn(Xd,$m,"esm2017"),hn("fire-js","")}rV("");const iV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ct,SDK_VERSION:Mr,_DEFAULT_ENTRY_NAME:Ti,_addComponent:cu,_addOrOverwriteComponent:$R,_apps:Si,_clearComponents:qO,_components:ea,_getProvider:Ta,_isFirebaseApp:zR,_isFirebaseServerApp:qe,_registerComponent:xr,_removeServiceInstance:zO,_serverApps:Zo,deleteApp:N_,getApp:Bh,getApps:HO,initializeApp:x_,initializeServerApp:KO,onLog:WR,registerVersion:hn,setLogLevel:GR},Symbol.toStringTag,{value:"Module"}));var OE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,QR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.D=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(R,C,N){for(var A=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)A[ft-2]=arguments[ft];return y.prototype[C].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,T){T||(T=0);var R=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)R[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;16>C;++C)R[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],C=w.g[2];var N=w.g[3],A=y+(N^T&(C^N))+R[0]+3614090360&4294967295;y=T+(A<<7&4294967295|A>>>25),A=N+(C^y&(T^C))+R[1]+3905402710&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(T^N&(y^T))+R[2]+606105819&4294967295,C=N+(A<<17&4294967295|A>>>15),A=T+(y^C&(N^y))+R[3]+3250441966&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(N^T&(C^N))+R[4]+4118548399&4294967295,y=T+(A<<7&4294967295|A>>>25),A=N+(C^y&(T^C))+R[5]+1200080426&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(T^N&(y^T))+R[6]+2821735955&4294967295,C=N+(A<<17&4294967295|A>>>15),A=T+(y^C&(N^y))+R[7]+4249261313&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(N^T&(C^N))+R[8]+1770035416&4294967295,y=T+(A<<7&4294967295|A>>>25),A=N+(C^y&(T^C))+R[9]+2336552879&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(T^N&(y^T))+R[10]+4294925233&4294967295,C=N+(A<<17&4294967295|A>>>15),A=T+(y^C&(N^y))+R[11]+2304563134&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(N^T&(C^N))+R[12]+1804603682&4294967295,y=T+(A<<7&4294967295|A>>>25),A=N+(C^y&(T^C))+R[13]+4254626195&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(T^N&(y^T))+R[14]+2792965006&4294967295,C=N+(A<<17&4294967295|A>>>15),A=T+(y^C&(N^y))+R[15]+1236535329&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(C^N&(T^C))+R[1]+4129170786&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^C&(y^T))+R[6]+3225465664&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(N^y))+R[11]+643717713&4294967295,C=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(C^N))+R[0]+3921069994&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(C^N&(T^C))+R[5]+3593408605&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^C&(y^T))+R[10]+38016083&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(N^y))+R[15]+3634488961&4294967295,C=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(C^N))+R[4]+3889429448&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(C^N&(T^C))+R[9]+568446438&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^C&(y^T))+R[14]+3275163606&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(N^y))+R[3]+4107603335&4294967295,C=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(C^N))+R[8]+1163531501&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(C^N&(T^C))+R[13]+2850285829&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^C&(y^T))+R[2]+4243563512&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(N^y))+R[7]+1735328473&4294967295,C=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(C^N))+R[12]+2368359562&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(T^C^N)+R[5]+4294588738&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^C)+R[8]+2272392833&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^T)+R[11]+1839030562&4294967295,C=N+(A<<16&4294967295|A>>>16),A=T+(C^N^y)+R[14]+4259657740&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(T^C^N)+R[1]+2763975236&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^C)+R[4]+1272893353&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^T)+R[7]+4139469664&4294967295,C=N+(A<<16&4294967295|A>>>16),A=T+(C^N^y)+R[10]+3200236656&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(T^C^N)+R[13]+681279174&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^C)+R[0]+3936430074&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^T)+R[3]+3572445317&4294967295,C=N+(A<<16&4294967295|A>>>16),A=T+(C^N^y)+R[6]+76029189&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(T^C^N)+R[9]+3654602809&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^C)+R[12]+3873151461&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^T)+R[15]+530742520&4294967295,C=N+(A<<16&4294967295|A>>>16),A=T+(C^N^y)+R[2]+3299628645&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(C^(T|~N))+R[0]+4096336452&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~C))+R[7]+1126891415&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~T))+R[14]+2878612391&4294967295,C=N+(A<<15&4294967295|A>>>17),A=T+(N^(C|~y))+R[5]+4237533241&4294967295,T=C+(A<<21&4294967295|A>>>11),A=y+(C^(T|~N))+R[12]+1700485571&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~C))+R[3]+2399980690&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~T))+R[10]+4293915773&4294967295,C=N+(A<<15&4294967295|A>>>17),A=T+(N^(C|~y))+R[1]+2240044497&4294967295,T=C+(A<<21&4294967295|A>>>11),A=y+(C^(T|~N))+R[8]+1873313359&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~C))+R[15]+4264355552&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~T))+R[6]+2734768916&4294967295,C=N+(A<<15&4294967295|A>>>17),A=T+(N^(C|~y))+R[13]+1309151649&4294967295,T=C+(A<<21&4294967295|A>>>11),A=y+(C^(T|~N))+R[4]+4149444226&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~C))+R[11]+3174756917&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~T))+R[2]+718787259&4294967295,C=N+(A<<15&4294967295|A>>>17),A=T+(N^(C|~y))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var T=y-this.blockSize,R=this.B,C=this.h,N=0;N<y;){if(C==0)for(;N<=T;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<y;)if(R[C++]=w.charCodeAt(N++),C==this.blockSize){i(this,R),C=0;break}}else for(;N<y;)if(R[C++]=w[N++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var T=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=T&255,T/=256;for(this.u(w),w=Array(16),y=T=0;4>y;++y)for(var R=0;32>R;R+=8)w[T++]=this.g[y]>>>R&255;return w};function s(w,y){var T=a;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;for(var T=[],R=!0,C=w.length-1;0<=C;C--){var N=w[C]|0;R&&N==y||(T[C]=N,R=!1)}this.g=T}var a={};function l(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return x(c(-w));for(var y=[],T=1,R=0;w>=T;R++)y[R]=w/T|0,T*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),R=f,C=0;C<w.length;C+=8){var N=Math.min(8,w.length-C),A=parseInt(w.substring(C,C+N),y);8>N?(N=c(Math.pow(y,N)),R=R.j(N).add(c(A))):(R=R.j(T),R=R.add(c(A)))}return R}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();for(var w=0,y=1,T=0;T<this.g.length;T++){var R=this.i(T);w+=(0<=R?R:4294967296+R)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(P(this))return"-"+x(this).toString(w);for(var y=c(Math.pow(w,6)),T=this,R="";;){var C=b(T,y).g;T=I(T,C.j(y));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=C,S(T))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=I(this,w),P(w)?-1:S(w)?0:1};function x(w){for(var y=w.g.length,T=[],R=0;R<y;R++)T[R]=~w.g[R];return new o(T,~w.h).add(m)}t.abs=function(){return P(this)?x(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],R=0,C=0;C<=y;C++){var N=R+(this.i(C)&65535)+(w.i(C)&65535),A=(N>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);R=A>>>16,N&=65535,A&=65535,T[C]=A<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(w,y){return w.add(x(y))}t.j=function(w){if(S(this)||S(w))return f;if(P(this))return P(w)?x(this).j(x(w)):x(x(this).j(w));if(P(w))return x(this.j(x(w)));if(0>this.l(_)&&0>w.l(_))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,T=[],R=0;R<2*y;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<w.g.length;C++){var N=this.i(R)>>>16,A=this.i(R)&65535,ft=w.i(C)>>>16,kn=w.i(C)&65535;T[2*R+2*C]+=A*kn,v(T,2*R+2*C),T[2*R+2*C+1]+=N*kn,v(T,2*R+2*C+1),T[2*R+2*C+1]+=A*ft,v(T,2*R+2*C+1),T[2*R+2*C+2]+=N*ft,v(T,2*R+2*C+2)}for(R=0;R<y;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=y;R<2*y;R++)T[R]=0;return new o(T,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function E(w,y){this.g=w,this.h=y}function b(w,y){if(S(y))throw Error("division by zero");if(S(w))return new E(f,f);if(P(w))return y=b(x(w),y),new E(x(y.g),x(y.h));if(P(y))return y=b(w,x(y)),new E(x(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=y;0>=R.l(w);)T=F(T),R=F(R);var C=U(T,1),N=U(R,1);for(R=U(R,2),T=U(T,2);!S(R);){var A=N.add(R);0>=A.l(w)&&(C=C.add(T),N=A),R=U(R,1),T=U(T,1)}return y=I(w,C.j(y)),new E(C,y)}for(C=f;0<=w.l(y);){for(T=Math.max(1,Math.floor(w.m()/y.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(T),A=N.j(y);P(A)||0<A.l(w);)T-=R,N=c(T),A=N.j(y);S(N)&&(N=m),C=C.add(N),w=I(w,A)}return new E(C,w)}t.A=function(w){return b(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)&w.i(R);return new o(T,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)|w.i(R);return new o(T,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)^w.i(R);return new o(T,this.h^w.h)};function F(w){for(var y=w.g.length+1,T=[],R=0;R<y;R++)T[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(T,w.h)}function U(w,y){var T=y>>5;y%=32;for(var R=w.g.length-T,C=[],N=0;N<R;N++)C[N]=0<y?w.i(N+T)>>>y|w.i(N+T+1)<<32-y:w.i(N+T);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,QR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,vs=o}).apply(typeof OE<"u"?OE:typeof self<"u"?self:typeof window<"u"?window:{});var Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YR,El,JR,cd,zm,XR,ZR,eA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bc=="object"&&Bc];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var g=0;g<u.length-1;g++){var D=u[g];if(!(D in p))break e;p=p[D]}u=u[u.length-1],g=p[u],h=h(g),h!=g&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,g=!1,D={next:function(){if(!g&&p<u.length){var M=p++;return{value:h(M,u[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),u.apply(h,D)}}return function(){return u.apply(h,arguments)}}function m(u,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),u.apply(this,g)}}function S(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(g,D,M){for(var W=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)W[Ee-2]=arguments[Ee];return h.prototype[D].apply(g,W)}}function P(u){const h=u.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=u[g];return p}return[]}function x(u,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const D=u.length||0,M=g.length||0;u.length=D+M;for(let W=0;W<M;W++)u[D+W]=g[W]}else u.push(g)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var F=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function U(u,h,p){for(const g in u)h.call(p,u[g],g,u)}function w(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function y(u){const h={};for(const p in u)h[p]=u[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,h){let p,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(p in g)u[p]=g[p];for(let M=0;M<T.length;M++)p=T[M],Object.prototype.hasOwnProperty.call(g,p)&&(u[p]=g[p])}}function C(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function N(u){a.setTimeout(()=>{throw u},0)}function A(){var u=Z;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class ft{constructor(){this.h=this.g=null}add(h,p){const g=kn.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var kn=new I(()=>new Wt,u=>u.reset());class Wt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Et,q=!1,Z=new ft,te=()=>{const u=a.Promise.resolve(void 0);Et=()=>{u.then(pe)}};var pe=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(p){N(p)}var h=kn;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}q=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function Nt(u,h){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,g=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(F){e:{try{b(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:rn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Nt.aa.h.call(this)}}S(Nt,de);var rn={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),La=0;function zi(u,h,p,g,D){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=D,this.key=++La,this.da=this.fa=!1}function Cn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function lr(u){this.src=u,this.g={},this.h=0}lr.prototype.add=function(u,h,p,g,D){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var W=ur(u,h,g,D);return-1<W?(h=u[W],p||(h.fa=!1)):(h=new zi(h,this.src,M,!!g,D),h.fa=p,u.push(h)),h};function jn(u,h){var p=h.type;if(p in u.g){var g=u.g[p],D=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=D)&&Array.prototype.splice.call(g,D,1),M&&(Cn(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function ur(u,h,p,g){for(var D=0;D<u.length;++D){var M=u[D];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==g)return D}return-1}var Bn="closure_lm_"+(1e6*Math.random()|0),ve={};function qi(u,h,p,g,D){if(Array.isArray(h)){for(var M=0;M<h.length;M++)qi(u,h[M],p,g,D);return null}return p=oc(p),u&&u[Gt]?u.K(h,p,c(g)?!!g.capture:!!g,D):Wi(u,h,p,!1,g,D)}function Wi(u,h,p,g,D,M){if(!h)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,Ee=Fa(u);if(Ee||(u[Bn]=Ee=new lr(u)),p=Ee.add(h,p,g,W,M),p.proxy)return p;if(g=Pf(),p.proxy=g,g.src=u,g.listener=p,u.addEventListener)ot||(D=W),D===void 0&&(D=!1),u.addEventListener(h.toString(),g,D);else if(u.attachEvent)u.attachEvent(sc(h.toString()),g);else if(u.addListener&&u.removeListener)u.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Pf(){function u(p){return h.call(u.src,u.listener,p)}const h=kf;return u}function ic(u,h,p,g,D){if(Array.isArray(h))for(var M=0;M<h.length;M++)ic(u,h[M],p,g,D);else g=c(g)?!!g.capture:!!g,p=oc(p),u&&u[Gt]?(u=u.i,h=String(h).toString(),h in u.g&&(M=u.g[h],p=ur(M,p,g,D),-1<p&&(Cn(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[h],u.h--)))):u&&(u=Fa(u))&&(h=u.g[h.toString()],u=-1,h&&(u=ur(h,p,g,D)),(p=-1<u?h[u]:null)&&Ma(p))}function Ma(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[Gt])jn(h.i,u);else{var p=u.type,g=u.proxy;h.removeEventListener?h.removeEventListener(p,g,u.capture):h.detachEvent?h.detachEvent(sc(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Fa(h))?(jn(p,u),p.h==0&&(p.src=null,h[Bn]=null)):Cn(u)}}}function sc(u){return u in ve?ve[u]:ve[u]="on"+u}function kf(u,h){if(u.da)u=!0;else{h=new Nt(h,this);var p=u.listener,g=u.ha||u.src;u.fa&&Ma(u),u=p.call(g,h)}return u}function Fa(u){return u=u[Bn],u instanceof lr?u:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(u){return typeof u=="function"?u:(u[Js]||(u[Js]=function(h){return u.handleEvent(h)}),u[Js])}function ee(){le.call(this),this.i=new lr(this),this.M=this,this.F=null}S(ee,le),ee.prototype[Gt]=!0,ee.prototype.removeEventListener=function(u,h,p,g){ic(this,u,h,p,g)};function Be(u,h){var p,g=u.F;if(g)for(p=[];g;g=g.F)p.push(g);if(u=u.M,g=h.type||h,typeof h=="string")h=new de(h,u);else if(h instanceof de)h.target=h.target||u;else{var D=h;h=new de(g,u),R(h,D)}if(D=!0,p)for(var M=p.length-1;0<=M;M--){var W=h.g=p[M];D=Gi(W,g,!0,h)&&D}if(W=h.g=u,D=Gi(W,g,!0,h)&&D,D=Gi(W,g,!1,h)&&D,p)for(M=0;M<p.length;M++)W=h.g=p[M],D=Gi(W,g,!1,h)&&D}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],g=0;g<p.length;g++)Cn(p[g]);delete u.g[h],u.h--}}this.F=null},ee.prototype.K=function(u,h,p,g){return this.i.add(String(u),h,!1,p,g)},ee.prototype.L=function(u,h,p,g){return this.i.add(String(u),h,!0,p,g)};function Gi(u,h,p,g){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,M=0;M<h.length;++M){var W=h[M];if(W&&!W.da&&W.capture==p){var Ee=W.listener,pt=W.ha||W.src;W.fa&&jn(u.i,W),D=Ee.call(pt,g)!==!1&&D}}return D&&!g.defaultPrevented}function cv(u,h,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function dv(u){u.g=cv(()=>{u.g=null,u.i&&(u.i=!1,dv(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class XC extends le{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ua(u){le.call(this),this.h=u,this.g={}}S(Ua,le);var hv=[];function fv(u){U(u.g,function(h,p){this.g.hasOwnProperty(p)&&Ma(h)},u),u.g={}}Ua.prototype.N=function(){Ua.aa.N.call(this),fv(this)},Ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cf=a.JSON.stringify,ZC=a.JSON.parse,e1=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function bf(){}bf.prototype.h=null;function pv(u){return u.h||(u.h=u.i())}function mv(){}var ja={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xf(){de.call(this,"d")}S(xf,de);function Nf(){de.call(this,"c")}S(Nf,de);var Ki={},gv=null;function ac(){return gv=gv||new ee}Ki.La="serverreachability";function _v(u){de.call(this,Ki.La,u)}S(_v,de);function Ba(u){const h=ac();Be(h,new _v(h))}Ki.STAT_EVENT="statevent";function yv(u,h){de.call(this,Ki.STAT_EVENT,u),this.stat=h}S(yv,de);function Dt(u){const h=ac();Be(h,new yv(h,u))}Ki.Ma="timingevent";function vv(u,h){de.call(this,Ki.Ma,u),this.size=h}S(vv,de);function $a(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function za(){this.g=!0}za.prototype.xa=function(){this.g=!1};function t1(u,h,p,g,D,M){u.info(function(){if(u.g)if(M)for(var W="",Ee=M.split("&"),pt=0;pt<Ee.length;pt++){var he=Ee[pt].split("=");if(1<he.length){var It=he[0];he=he[1];var Tt=It.split("_");W=2<=Tt.length&&Tt[1]=="type"?W+(It+"="+he+"&"):W+(It+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+p+`
`+W})}function n1(u,h,p,g,D,M,W){u.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+p+`
`+M+" "+W})}function Xs(u,h,p,g){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+i1(u,p)+(g?" "+g:"")})}function r1(u,h){u.info(function(){return"TIMEOUT: "+h})}za.prototype.info=function(){};function i1(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var g=p[u];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Cf(p)}catch{return h}}var lc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Df;function uc(){}S(uc,bf),uc.prototype.g=function(){return new XMLHttpRequest},uc.prototype.i=function(){return{}},Df=new uc;function qr(u,h,p,g){this.j=u,this.i=h,this.l=p,this.R=g||1,this.U=new Ua(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ev}function Ev(){this.i=null,this.g="",this.h=!1}var Iv={},Of={};function Vf(u,h,p){u.L=1,u.v=fc(cr(h)),u.m=p,u.P=!0,Tv(u,null)}function Tv(u,h){u.F=Date.now(),cc(u),u.A=cr(u.v);var p=u.A,g=u.R;Array.isArray(g)||(g=[String(g)]),Mv(p.i,"t",g),u.C=0,p=u.j.J,u.h=new Ev,u.g=tw(u.j,p?h:null,!u.m),0<u.O&&(u.M=new XC(m(u.Y,u,u.g),u.O)),h=u.U,p=u.g,g=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(hv[0]=D.toString()),D=hv);for(var M=0;M<D.length;M++){var W=qi(p,D[M],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),Ba(),t1(u.i,u.u,u.A,u.l,u.R,u.m)}qr.prototype.ca=function(u){u=u.target;const h=this.M;h&&dr(u)==3?h.j():this.Y(u)},qr.prototype.Y=function(u){try{if(u==this.g)e:{const Tt=dr(this.g);var h=this.g.Ba();const to=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||qv(this.g)))){this.J||Tt!=4||h==7||(h==8||0>=to?Ba(3):Ba(2)),Lf(this);var p=this.g.Z();this.X=p;t:if(Sv(this)){var g=qv(this.g);u="";var D=g.length,M=dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),qa(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,u+=this.h.i.decode(g[h],{stream:!(M&&h==D-1)});g.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,n1(this.i,this.u,this.A,this.l,this.R,Tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,pt=this.g;if((Ee=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Ee)){var he=Ee;break t}}he=null}if(p=he)Xs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mf(this,p);else{this.o=!1,this.s=3,Dt(12),Hi(this),qa(this);break e}}if(this.P){p=!0;let bn;for(;!this.J&&this.C<W.length;)if(bn=s1(this,W),bn==Of){Tt==4&&(this.s=4,Dt(14),p=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==Iv){this.s=4,Dt(15),Xs(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else Xs(this.i,this.l,bn,null),Mf(this,bn);if(Sv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||W.length!=0||this.h.h||(this.s=1,Dt(16),p=!1),this.o=this.o&&p,!p)Xs(this.i,this.l,W,"[Invalid Chunked Response]"),Hi(this),qa(this);else if(0<W.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),zf(It),It.M=!0,Dt(11))}}else Xs(this.i,this.l,W,null),Mf(this,W);Tt==4&&Hi(this),this.o&&!this.J&&(Tt==4?Jv(this.j,this):(this.o=!1,cc(this)))}else I1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Hi(this),qa(this)}}}catch{}finally{}};function Sv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function s1(u,h){var p=u.C,g=h.indexOf(`
`,p);return g==-1?Of:(p=Number(h.substring(p,g)),isNaN(p)?Iv:(g+=1,g+p>h.length?Of:(h=h.slice(g,g+p),u.C=g+p,h)))}qr.prototype.cancel=function(){this.J=!0,Hi(this)};function cc(u){u.S=Date.now()+u.I,Rv(u,u.I)}function Rv(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=$a(m(u.ba,u),h)}function Lf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}qr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(r1(this.i,this.A),this.L!=2&&(Ba(),Dt(17)),Hi(this),this.s=2,qa(this)):Rv(this,this.S-u)};function qa(u){u.j.G==0||u.J||Jv(u.j,u)}function Hi(u){Lf(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,fv(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Mf(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Ff(p.h,u))){if(!u.K&&Ff(p.h,u)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)vc(p),_c(p);else break e;$f(p),Dt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=$a(m(p.Za,p),6e3));if(1>=kv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yi(p,11)}else if((u.K||p.g==u)&&vc(p),!v(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let he=D[h];if(p.T=he[0],he=he[1],p.G==2)if(he[0]=="c"){p.K=he[1],p.ia=he[2];const It=he[3];It!=null&&(p.la=It,p.j.info("VER="+p.la));const Tt=he[4];Tt!=null&&(p.Aa=Tt,p.j.info("SVER="+p.Aa));const to=he[5];to!=null&&typeof to=="number"&&0<to&&(g=1.5*to,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const bn=u.g;if(bn){const Ec=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ec){var M=g.h;M.g||Ec.indexOf("spdy")==-1&&Ec.indexOf("quic")==-1&&Ec.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Uf(M,M.h),M.h=null))}if(g.D){const qf=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;qf&&(g.ya=qf,Se(g.I,g.D,qf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var W=u;if(g.qa=ew(g,g.J?g.ia:null,g.W),W.K){Cv(g.h,W);var Ee=W,pt=g.L;pt&&(Ee.I=pt),Ee.B&&(Lf(Ee),cc(Ee)),g.g=W}else Qv(g);0<p.i.length&&yc(p)}else he[0]!="stop"&&he[0]!="close"||Yi(p,7);else p.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Yi(p,7):Bf(p):he[0]!="noop"&&p.l&&p.l.ta(he),p.v=0)}}Ba(4)}catch{}}var o1=class{constructor(u,h){this.g=u,this.map=h}};function Av(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function kv(u){return u.h?1:u.g?u.g.size:0}function Ff(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Uf(u,h){u.g?u.g.add(h):u.h=h}function Cv(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}Av.prototype.cancel=function(){if(this.i=bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function bv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return P(u.i)}function a1(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,g=0;g<p;g++)h.push(u[g]);return h}h=[],p=0;for(g in u)h[p++]=u[g];return h}function l1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const g in u)h[p++]=g;return h}}}function xv(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=l1(u),g=a1(u),D=g.length,M=0;M<D;M++)h.call(void 0,g[M],p&&p[M],u)}var Nv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u1(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var g=u[p].indexOf("="),D=null;if(0<=g){var M=u[p].substring(0,g);D=u[p].substring(g+1)}else M=u[p];h(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Qi){this.h=u.h,dc(this,u.j),this.o=u.o,this.g=u.g,hc(this,u.s),this.l=u.l;var h=u.i,p=new Ka;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Dv(this,p),this.m=u.m}else u&&(h=String(u).match(Nv))?(this.h=!1,dc(this,h[1]||"",!0),this.o=Wa(h[2]||""),this.g=Wa(h[3]||"",!0),hc(this,h[4]),this.l=Wa(h[5]||"",!0),Dv(this,h[6]||"",!0),this.m=Wa(h[7]||"")):(this.h=!1,this.i=new Ka(null,this.h))}Qi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(Ga(h,Ov,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Ga(h,Ov,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Ga(p,p.charAt(0)=="/"?h1:d1,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Ga(p,p1)),u.join("")};function cr(u){return new Qi(u)}function dc(u,h,p){u.j=p?Wa(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function hc(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function Dv(u,h,p){h instanceof Ka?(u.i=h,m1(u.i,u.h)):(p||(h=Ga(h,f1)),u.i=new Ka(h,u.h))}function Se(u,h,p){u.i.set(h,p)}function fc(u){return Se(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Wa(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ga(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,c1),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function c1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ov=/[#\/\?@]/g,d1=/[#\?:]/g,h1=/[#\?]/g,f1=/[#\?@]/g,p1=/#/g;function Ka(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Wr(u){u.g||(u.g=new Map,u.h=0,u.i&&u1(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ka.prototype,t.add=function(u,h){Wr(this),this.i=null,u=Zs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function Vv(u,h){Wr(u),h=Zs(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function Lv(u,h){return Wr(u),h=Zs(u,h),u.g.has(h)}t.forEach=function(u,h){Wr(this),this.g.forEach(function(p,g){p.forEach(function(D){u.call(h,D,g,this)},this)},this)},t.na=function(){Wr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const D=u[g];for(let M=0;M<D.length;M++)p.push(h[g])}return p},t.V=function(u){Wr(this);let h=[];if(typeof u=="string")Lv(this,u)&&(h=h.concat(this.g.get(Zs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return Wr(this),this.i=null,u=Zs(this,u),Lv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function Mv(u,h,p){Vv(u,h),0<p.length&&(u.i=null,u.g.set(Zs(u,h),P(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const M=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var D=M;W[g]!==""&&(D+="="+encodeURIComponent(String(W[g]))),u.push(D)}}return this.i=u.join("&")};function Zs(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function m1(u,h){h&&!u.j&&(Wr(u),u.i=null,u.g.forEach(function(p,g){var D=g.toLowerCase();g!=D&&(Vv(this,g),Mv(this,D,p))},u)),u.j=h}function g1(u,h){const p=new za;if(a.Image){const g=new Image;g.onload=_(Gr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Gr,p,"TestLoadImage: error",!1,h,g),g.onabort=_(Gr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Gr,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=u}else h(!1)}function _1(u,h){const p=new za,g=new AbortController,D=setTimeout(()=>{g.abort(),Gr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:g.signal}).then(M=>{clearTimeout(D),M.ok?Gr(p,"TestPingServer: ok",!0,h):Gr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Gr(p,"TestPingServer: error",!1,h)})}function Gr(u,h,p,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(p)}catch{}}function y1(){this.g=new e1}function v1(u,h,p){const g=p||"";try{xv(u,function(D,M){let W=D;c(D)&&(W=Cf(D)),h.push(g+M+"="+encodeURIComponent(W))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function pc(u){this.l=u.Ub||null,this.j=u.eb||!1}S(pc,bf),pc.prototype.g=function(){return new mc(this.l,this.j)},pc.prototype.i=function(u){return function(){return u}}({});function mc(u,h){ee.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(mc,ee),t=mc.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,Qa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ha(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Ha(this):Qa(this),this.readyState==3&&Fv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ha(this))},t.Qa=function(u){this.g&&(this.response=u,Ha(this))},t.ga=function(){this.g&&Ha(this)};function Ha(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Qa(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function Qa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Uv(u){let h="";return U(u,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function jf(u,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Uv(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Se(u,h,p))}function $e(u){ee.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S($e,ee);var w1=/^https?$/i,E1=["POST","PUT"];t=$e.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Df.g(),this.v=this.o?pv(this.o):pv(Df),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(M){jv(this,M);return}if(u=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)p.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())p.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(E1,h,void 0))||g||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of p)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zv(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){jv(this,M)}};function jv(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,Bv(u),gc(u)}function Bv(u){u.A||(u.A=!0,Be(u,"complete"),Be(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Be(this,"complete"),Be(this,"abort"),gc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gc(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$v(this):this.bb())},t.bb=function(){$v(this)};function $v(u){if(u.h&&typeof o<"u"&&(!u.v[1]||dr(u)!=4||u.Z()!=2)){if(u.u&&dr(u)==4)cv(u.Ea,0,u);else if(Be(u,"readystatechange"),dr(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=W===0){var D=String(u.D).match(Nv)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),g=!w1.test(D?D.toLowerCase():"")}p=g}if(p)Be(u,"complete"),Be(u,"success");else{u.m=6;try{var M=2<dr(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",Bv(u)}}finally{gc(u)}}}}function gc(u,h){if(u.g){zv(u);const p=u.g,g=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||Be(u,"ready");try{p.onreadystatechange=g}catch{}}}function zv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function dr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),ZC(h)}};function qv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function I1(u){const h={};u=(u.g&&2<=dr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<u.length;g++){if(v(u[g]))continue;var p=C(u[g]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[D]||[];h[D]=M,M.push(p)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ya(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function Wv(u){this.Aa=0,this.i=[],this.j=new za,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ya("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ya("baseRetryDelayMs",5e3,u),this.cb=Ya("retryDelaySeedMs",1e4,u),this.Wa=Ya("forwardChannelMaxRetries",2,u),this.wa=Ya("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Av(u&&u.concurrentRequestLimit),this.Da=new y1,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wv.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,g){Dt(0),this.W=u,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=ew(this,null,this.W),yc(this)};function Bf(u){if(Gv(u),u.G==3){var h=u.U++,p=cr(u.I);if(Se(p,"SID",u.K),Se(p,"RID",h),Se(p,"TYPE","terminate"),Ja(u,p),h=new qr(u,u.j,h),h.L=2,h.v=fc(cr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=tw(h.j,null),h.g.ea(h.v)),h.F=Date.now(),cc(h)}Zv(u)}function _c(u){u.g&&(zf(u),u.g.cancel(),u.g=null)}function Gv(u){_c(u),u.u&&(a.clearTimeout(u.u),u.u=null),vc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function yc(u){if(!Pv(u.h)&&!u.s){u.s=!0;var h=u.Ga;Et||te(),q||(Et(),q=!0),Z.add(h,u),u.B=0}}function T1(u,h){return kv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=$a(m(u.Ga,u,h),Xv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new qr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=y(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hv(this,D,h),p=cr(this.I),Se(p,"RID",u),Se(p,"CVER",22),this.D&&Se(p,"X-HTTP-Session-Id",this.D),Ja(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(Uv(M)))+"&"+h:this.m&&jf(p,this.m,M)),Uf(this.h,D),this.Ua&&Se(p,"TYPE","init"),this.P?(Se(p,"$req",h),Se(p,"SID","null"),D.T=!0,Vf(D,p,null)):Vf(D,p,h),this.G=2}}else this.G==3&&(u?Kv(this,u):this.i.length==0||Pv(this.h)||Kv(this))};function Kv(u,h){var p;h?p=h.l:p=u.U++;const g=cr(u.I);Se(g,"SID",u.K),Se(g,"RID",p),Se(g,"AID",u.T),Ja(u,g),u.m&&u.o&&jf(g,u.m,u.o),p=new qr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=Hv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Uf(u.h,p),Vf(p,g,h)}function Ja(u,h){u.H&&U(u.H,function(p,g){Se(h,g,p)}),u.l&&xv({},function(p,g){Se(h,g,p)})}function Hv(u,h,p){p=Math.min(u.i.length,p);var g=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let M=-1;for(;;){const W=["count="+p];M==-1?0<p?(M=D[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Ee=!0;for(let pt=0;pt<p;pt++){let he=D[pt].g;const It=D[pt].map;if(he-=M,0>he)M=Math.max(0,D[pt].g-100),Ee=!1;else try{v1(It,W,"req"+he+"_")}catch{g&&g(It)}}if(Ee){g=W.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,g}function Qv(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;Et||te(),q||(Et(),q=!0),Z.add(h,u),u.v=0}}function $f(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=$a(m(u.Fa,u),Xv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Yv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=$a(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),_c(this),Yv(this))};function zf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Yv(u){u.g=new qr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=cr(u.qa);Se(h,"RID","rpc"),Se(h,"SID",u.K),Se(h,"AID",u.T),Se(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Se(h,"TO",u.ja),Se(h,"TYPE","xmlhttp"),Ja(u,h),u.m&&u.o&&jf(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=fc(cr(h)),p.m=null,p.P=!0,Tv(p,u)}t.Za=function(){this.C!=null&&(this.C=null,_c(this),$f(this),Dt(19))};function vc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Jv(u,h){var p=null;if(u.g==h){vc(u),zf(u),u.g=null;var g=2}else if(Ff(u.h,h))p=h.D,Cv(u.h,h),g=1;else return;if(u.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=u.B;g=ac(),Be(g,new vv(g,p)),yc(u)}else Qv(u);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&T1(u,h)||g==2&&$f(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),D){case 1:Yi(u,5);break;case 4:Yi(u,10);break;case 3:Yi(u,6);break;default:Yi(u,2)}}}function Xv(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function Yi(u,h){if(u.j.info("Error code "+h),h==2){var p=m(u.fb,u),g=u.Xa;const D=!g;g=new Qi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||dc(g,"https"),fc(g),D?g1(g.toString(),p):_1(g.toString(),p)}else Dt(2);u.G=0,u.l&&u.l.sa(h),Zv(u),Gv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Zv(u){if(u.G=0,u.ka=[],u.l){const h=bv(u.h);(h.length!=0||u.i.length!=0)&&(x(u.ka,h),x(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function ew(u,h,p){var g=p instanceof Qi?cr(p):new Qi(p);if(g.g!="")h&&(g.g=h+"."+g.g),hc(g,g.s);else{var D=a.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var M=new Qi(null);g&&dc(M,g),h&&(M.g=h),D&&hc(M,D),p&&(M.l=p),g=M}return p=u.D,h=u.ya,p&&h&&Se(g,p,h),Se(g,"VER",u.la),Ja(u,g),g}function tw(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new $e(new pc({eb:p})):new $e(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nw(){}t=nw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wc(){}wc.prototype.g=function(u,h){return new sn(u,h)};function sn(u,h){ee.call(this),this.g=new Wv(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!v(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new eo(this)}S(sn,ee),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Bf(this.g)},sn.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Cf(u),u=p);h.i.push(new o1(h.Ya++,u)),h.G==3&&yc(h)},sn.prototype.N=function(){this.g.l=null,delete this.j,Bf(this.g),delete this.g,sn.aa.N.call(this)};function rw(u){xf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}S(rw,xf);function iw(){Nf.call(this),this.status=1}S(iw,Nf);function eo(u){this.g=u}S(eo,nw),eo.prototype.ua=function(){Be(this.g,"a")},eo.prototype.ta=function(u){Be(this.g,new rw(u))},eo.prototype.sa=function(u){Be(this.g,new iw)},eo.prototype.ra=function(){Be(this.g,"b")},wc.prototype.createWebChannel=wc.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,eA=function(){return new wc},ZR=function(){return ac()},XR=Ki,zm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lc.NO_ERROR=0,lc.TIMEOUT=8,lc.HTTP_ERROR=6,cd=lc,wv.COMPLETE="complete",JR=wv,mv.EventType=ja,ja.OPEN="a",ja.CLOSE="b",ja.ERROR="c",ja.MESSAGE="d",ee.prototype.listen=ee.prototype.K,El=mv,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,YR=$e}).apply(typeof Bc<"u"?Bc:typeof self<"u"?self:typeof window<"u"?window:{});const VE="@firebase/firestore";/**
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
 */let ut=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Sa="10.14.0";/**
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
 */const Ri=new jh("@firebase/firestore");function fo(){return Ri.logLevel}function sV(t){Ri.setLogLevel(t)}function B(t,...e){if(Ri.logLevel<=ie.DEBUG){const n=e.map(D_);Ri.debug(`Firestore (${Sa}): ${t}`,...n)}}function Ye(t,...e){if(Ri.logLevel<=ie.ERROR){const n=e.map(D_);Ri.error(`Firestore (${Sa}): ${t}`,...n)}}function ir(t,...e){if(Ri.logLevel<=ie.WARN){const n=e.map(D_);Ri.warn(`Firestore (${Sa}): ${t}`,...n)}}function D_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Sa}) INTERNAL ASSERTION FAILED: `+t;throw Ye(e),new Error(e)}function J(t,e){t||H()}function oV(t,e){t||H()}function K(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class lV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uV{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){J(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new tA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new ut(e)}}class cV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){J(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new hV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function ta(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function rA(t){return t+"\0"}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new De(0,0))}static max(){return new X(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hu{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends hu{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const mV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends hu{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return mV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(oe.fromString(e))}static fromName(e){return new G(oe.fromString(e).popFirst(5))}static empty(){return new G(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new oe(e.slice()))}}/**
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
 */class Zd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function qm(t){return t.fields.find(e=>e.kind===2)}function rs(t){return t.fields.filter(e=>e.kind!==2)}Zd.UNKNOWN_ID=-1;class dd{constructor(e,n){this.fieldPath=e,this.kind=n}}class fu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new fu(0,pn.min())}}function iA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new pn(i,G.empty(),e)}function sA(t){return new pn(t.readTime,t.key,-1)}class pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pn(X.min(),G.empty(),-1)}static max(){return new pn(X.max(),G.empty(),-1)}}function O_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const oA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==oA)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class $h{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Vl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=V_(r.target.error);this.V.reject(new Vl(e,i))}}static open(e,n,r,i){try{return new $h(n,e.transaction(i,r))}catch(s){throw new Vl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new _V(n)}}class tr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,tr.S(Ue())===12.2&&Ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),ss(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!uu())return!1;if(tr.v())return!0;const e=Ue(),n=tr.S(e),r=0<n&&n<10,i=lA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Vl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vl(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=$h.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),V.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class gV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ss(this.B.delete())}}class Vl extends j{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fi(t){return t.name==="IndexedDbTransactionError"}class _V{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ss(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),ss(this.store.add(e))}get(e){return ss(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),ss(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),ss(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new V((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new V((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new V((r,i)=>{n.onerror=s=>{const o=V_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new V((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new gV(a),c=n(a.primaryKey,a.value,l);if(c instanceof V){const d=c.catch(f=>(l.done(),V.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>V.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ss(t){return new V((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=V_(r.target.error);n(i)}})}let LE=!1;function V_(t){const e=tr.S(Ue());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return LE||(LE=!0,setTimeout(()=>{throw r},0)),r}}return t}class yV{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Fi(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Mi(n)}await this.X(6e4)})}}class vV{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return V.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=sA(s);O_(o,r)>0&&(r=o)}),new pn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jt.oe=-1;function Lu(t){return t==null}function pu(t){return t===0&&1/t==-1/0}function uA(t){return typeof t=="number"&&Number.isInteger(t)&&!pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function jt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ME(e)),e=wV(t.get(n),e);return ME(e)}function wV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ME(t){return t+""}function Yn(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),oe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new oe(r)}/**
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
 */const FE=["userId","batchId"];/**
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
 */function hd(t,e){return[t,jt(e)]}function cA(t,e,n){return[t,jt(e),n]}const EV={},IV=["prefixPath","collectionGroup","readTime","documentId"],TV=["prefixPath","collectionGroup","documentId"],SV=["collectionGroup","readTime","prefixPath","documentId"],RV=["canonicalId","targetId"],AV=["targetId","path"],PV=["path","targetId"],kV=["collectionId","parent"],CV=["indexId","uid"],bV=["uid","sequenceNumber"],xV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],NV=["indexId","uid","orderedDocumentKey"],DV=["userId","collectionPath","documentId"],OV=["userId","collectionPath","largestBatchId"],VV=["userId","collectionGroup","largestBatchId"],dA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],LV=[...dA,"documentOverlays"],hA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fA=hA,L_=[...fA,"indexConfiguration","indexState","indexEntries"],MV=L_,FV=[...L_,"globals"];/**
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
 */class Wm extends aA{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function st(t,e){const n=K(t);return tr.F(n._e,e)}/**
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
 */function UE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}}class $c{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jE(this.data.getIterator())}getIteratorFrom(e){return new jE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class jE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function oo(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new we(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ta(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function UV(){return typeof atob<"u"}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mA("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const jV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(J(!!t),typeof t=="string"){let e=0;const n=jV.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function M_(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?M_(e):e}function mu(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class BV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ui={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},fd={nullValue:"NULL_VALUE"};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:gA(t)?9007199254740991:qh(t)?10:11:H()}function sr(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mu(t).isEqual(mu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nr(i.timestampValue),a=Nr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),a=Ce(s.doubleValue);return o===a?pu(o)===pu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ta(t.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(UE(o)!==UE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!sr(o[l],a[l])))return!1;return!0}(t,e);default:return H()}}function gu(t,e){return(t.values||[]).find(n=>sr(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ce(s.integerValue||s.doubleValue),l=Ce(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return BE(t.timestampValue,e.timestampValue);case 4:return BE(mu(t),mu(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ai(s),l=Ai(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=ne(a[c],l[c]);if(d!==0)return d}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Ce(s.latitude),Ce(o.latitude));return a!==0?a:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $E(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,d;const f=s.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=ne(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:$E(_,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ui.mapValue&&o===ui.mapValue)return 0;if(s===ui.mapValue)return 1;if(o===ui.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=ne(l[f],d[f]);if(m!==0)return m;const _=ki(a[l[f]],c[d[f]]);if(_!==0)return _}return ne(l.length,d.length)}(t.mapValue,e.mapValue);default:throw H()}}function BE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Nr(t),r=Nr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function $E(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ki(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function na(t){return Gm(t)}function Gm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gm(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function bs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Km(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function zE(t){return!!t&&"nullValue"in t}function qE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pd(t){return!!t&&"mapValue"in t}function qh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ll(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ll(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ll(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const _A={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function $V(t){return"nullValue"in t?fd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?bs(Pi.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?qh(t)?_A:{mapValue:{}}:H()}function zV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?bs(Pi.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?_A:"mapValue"in t?qh(t)?{mapValue:{}}:ui:H()}function WE(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function GE(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(n)}setAll(e){let n=xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ll(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Ll(this.value))}}function yA(t){const e=[];return qs(t.fields,(n,r)=>{const i=new xe([n]);if(pd(r)){const s=yA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
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
 */class Ae{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ae(e,0,X.min(),X.min(),X.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new Ae(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Ae(e,2,n,X.min(),X.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Ae(e,3,n,X.min(),X.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ci{constructor(e,n){this.position=e,this.inclusive=n}}function KE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function HE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yu{constructor(e,n="asc"){this.field=e,this.dir=n}}function qV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vA{}class ae extends vA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WV(e,n,r):n==="array-contains"?new HV(e,r):n==="in"?new RA(e,r):n==="not-in"?new QV(e,r):n==="array-contains-any"?new YV(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GV(e,r):new KV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends vA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _e(e,n)}matches(e){return ra(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ra(t){return t.op==="and"}function Hm(t){return t.op==="or"}function F_(t){return wA(t)&&ra(t)}function wA(t){for(const e of t.filters)if(e instanceof _e)return!1;return!0}function Qm(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+na(t.value);if(F_(t))return t.filters.map(e=>Qm(e)).join(",");{const e=t.filters.map(n=>Qm(n)).join(",");return`${t.op}(${e})`}}function EA(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&sr(r.value,i.value)}(t,e):t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&EA(o,i.filters[a]),!0):!1}(t,e):void H()}function IA(t,e){const n=t.filters.concat(e);return _e.create(n,t.op)}function TA(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${na(n.value)}`}(t):t instanceof _e?function(n){return n.op.toString()+" {"+n.getFilters().map(TA).join(" ,")+"}"}(t):"Filter"}class WV extends ae{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class GV extends ae{constructor(e,n){super(e,"in",n),this.keys=SA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KV extends ae{constructor(e,n){super(e,"not-in",n),this.keys=SA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class HV extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&gu(n.arrayValue,this.value)}}class RA extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gu(this.value.arrayValue,n)}}class QV extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(gu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gu(this.value.arrayValue,n)}}class YV extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gu(this.value.arrayValue,r))}}/**
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
 */class JV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ym(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JV(t,e,n,r,i,s,o)}function xs(t){const e=K(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>na(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>na(r)).join(",")),e.ue=n}return e.ue}function Mu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!EA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!HE(t.startAt,e.startAt)&&HE(t.endAt,e.endAt)}function eh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function th(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function QE(t,e,n){let r=fd,i=!0;for(const s of th(t,e)){let o=fd,a=!0;switch(s.op){case"<":case"<=":o=$V(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=fd}WE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];WE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function YE(t,e,n){let r=ui,i=!0;for(const s of th(t,e)){let o=ui,a=!0;switch(s.op){case">=":case">":o=zV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ui}GE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];GE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Fr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AA(t,e,n,r,i,s,o,a){return new Fr(t,e,n,r,i,s,o,a)}function Ra(t){return new Fr(t)}function JE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U_(t){return t.collectionGroup!==null}function Fo(t){const e=K(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new we(xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yu(s,r))}),n.has(xe.keyField().canonicalString())||e.ce.push(new yu(xe.keyField(),r))}return e.ce}function Bt(t){const e=K(t);return e.le||(e.le=XV(e,Fo(t))),e.le}function XV(t,e){if(t.limitType==="F")return Ym(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yu(i.field,s)});const n=t.endAt?new Ci(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ci(t.startAt.position,t.startAt.inclusive):null;return Ym(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jm(t,e){const n=t.filters.concat([e]);return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nh(t,e,n){return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return Mu(Bt(t),Bt(e))&&t.limitType===e.limitType}function PA(t){return`${xs(Bt(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>TA(i)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>na(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>na(i)).join(",")),`Target(${r})`}(Bt(t))}; limitType=${t.limitType})`}function Uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=KE(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Fo(r),i)||r.endAt&&!function(o,a,l){const c=KE(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Fo(r),i))}(t,e)}function kA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CA(t){return(e,n)=>{let r=!1;for(const i of Fo(t)){const s=ZV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZV(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ki(l,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pA(this.inner)}size(){return this.innerSize}}/**
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
 */const eL=new Te(G.comparator);function Zt(){return eL}const bA=new Te(G.comparator);function Il(...t){let e=bA;for(const n of t)e=e.insert(n.key,n);return e}function xA(t){let e=bA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jn(){return Ml()}function NA(){return Ml()}function Ml(){return new Ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const tL=new Te(G.comparator),nL=new we(G.comparator);function re(...t){let e=nL;for(const n of t)e=e.add(n);return e}const rL=new we(ne);function j_(){return rL}/**
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
 */function B_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pu(e)?"-0":e}}function DA(t){return{integerValue:""+t}}function OA(t,e){return uA(e)?DA(e):B_(t,e)}/**
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
 */class Wh{constructor(){this._=void 0}}function iL(t,e,n){return t instanceof ia?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zh(s)&&(s=M_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ns?LA(t,e):t instanceof Ds?MA(t,e):function(i,s){const o=VA(i,s),a=XE(o)+XE(i.Pe);return Km(o)&&Km(i.Pe)?DA(a):B_(i.serializer,a)}(t,e)}function sL(t,e,n){return t instanceof Ns?LA(t,e):t instanceof Ds?MA(t,e):n}function VA(t,e){return t instanceof sa?function(r){return Km(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ia extends Wh{}class Ns extends Wh{constructor(e){super(),this.elements=e}}function LA(t,e){const n=FA(e);for(const r of t.elements)n.some(i=>sr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends Wh{constructor(e){super(),this.elements=e}}function MA(t,e){let n=FA(e);for(const r of t.elements)n=n.filter(i=>!sr(i,r));return{arrayValue:{values:n}}}class sa extends Wh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function XE(t){return Ce(t.integerValue||t.doubleValue)}function FA(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ju{constructor(e,n){this.field=e,this.transform=n}}function oL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof Ds&&i instanceof Ds?ta(r.elements,i.elements,sr):r instanceof sa&&i instanceof sa?sr(r.Pe,i.Pe):r instanceof ia&&i instanceof ia}(t.transform,e.transform)}class aL{constructor(e,n){this.version=e,this.transformResults=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function md(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gh{}function UA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pa(t.key,Ne.none()):new Aa(t.key,t.data,Ne.none());{const n=t.data,r=_t.empty();let i=new we(xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Xt(i.toArray()),Ne.none())}}function lL(t,e,n){t instanceof Aa?function(i,s,o){const a=i.value.clone(),l=eI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,o){if(!md(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=eI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fl(t,e,n,r){return t instanceof Aa?function(s,o,a,l){if(!md(s.precondition,o))return a;const c=s.value.clone(),d=tI(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,o,a,l){if(!md(s.precondition,o))return a;const c=tI(s.fieldTransforms,l,o),d=o.data;return d.setAll(jA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return md(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VA(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function ZE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ta(r,i,(s,o)=>oL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends Gh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Gh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eI(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sL(o,a,n[i]))}return r}function tI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iL(s,o,e))}return r}class Pa extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $_ extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class z_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=UA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ta(this.mutations,e.mutations,(n,r)=>ZE(n,r))&&ta(this.baseMutations,e.baseMutations,(n,r)=>ZE(n,r))}}class q_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=function(){return tL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new q_(e,n,r,i)}}/**
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
 */class W_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,ue;function BA(t){switch(t){default:return H();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function $A(t){if(t===void 0)return Ye("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ze.OK:return L.OK;case Ze.CANCELLED:return L.CANCELLED;case Ze.UNKNOWN:return L.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return L.INTERNAL;case Ze.UNAVAILABLE:return L.UNAVAILABLE;case Ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ze.NOT_FOUND:return L.NOT_FOUND;case Ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ze.ABORTED:return L.ABORTED;case Ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ze.DATA_LOSS:return L.DATA_LOSS;default:return H()}}(ue=Ze||(Ze={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(){return new TextEncoder}/**
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
 */const dL=new vs([4294967295,4294967295],0);function nI(t){const e=zA().encode(t),n=new QR;return n.update(e),new Uint8Array(n.digest())}function rI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vs([n,r],0),new vs([i,s],0)]}class G_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Tl(`Invalid padding: ${n}`);if(r<0)throw new Tl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Tl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Tl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(vs.fromNumber(r)));return i.compare(dL)===1&&(i=new vs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=nI(e),[r,i]=rI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new G_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=nI(e),[r,i]=rI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$u.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bu(X.min(),i,new Te(ne),Zt(),re())}}class $u{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $u(r,n,re(),re(),re())}}/**
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
 */class gd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qA{constructor(e,n){this.targetId=e,this.me=n}}class WA{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class iI{constructor(){this.fe=0,this.ge=oI(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new $u(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=oI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zt(),this.qe=sI(),this.Qe=new Te(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(eh(s))if(r===0){const o=new G(s.path);this.Ue(n,o,Ae.newNoDocument(o,X.min()))}else J(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ai(r).toUint8Array()}catch(l){if(l instanceof mA)return ir("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new G_(o,i,s)}catch(l){return ir(l instanceof Tl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&eh(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ae.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bu(e,n,this.Qe,this.ke,r);return this.ke=Zt(),this.qe=sI(),this.Qe=new Te(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new iI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new we(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new iI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sI(){return new Te(G.comparator)}function oI(){return new Te(G.comparator)}const fL={asc:"ASCENDING",desc:"DESCENDING"},pL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mL={and:"AND",or:"OR"};class gL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xm(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _L(t,e){return oa(t,e.toTimestamp())}function Je(t){return J(!!t),X.fromTimestamp(function(n){const r=Nr(n);return new De(r.seconds,r.nanos)}(t))}function K_(t,e){return Zm(t,e).canonicalString()}function Zm(t,e){const n=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KA(t){const e=oe.fromString(t);return J(rP(e)),e}function vu(t,e){return K_(t.databaseId,e.path)}function nr(t,e){const n=KA(e);if(n.get(1)!==t.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(YA(n))}function HA(t,e){return K_(t.databaseId,e)}function QA(t){const e=KA(t);return e.length===4?oe.emptyPath():YA(e)}function eg(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YA(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function aI(t,e,n){return{name:vu(t,e),fields:n.value.mapValue.fields}}function JA(t,e,n){const r=nr(t,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):X.min(),o=new _t({mapValue:{fields:e.fields}}),a=Ae.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function yL(t,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;const s=nr(r,i.found.name),o=Je(i.found.updateTime),a=i.found.createTime?Je(i.found.createTime):X.min(),l=new _t({mapValue:{fields:i.found.fields}});return Ae.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);const s=nr(r,i.missing),o=Je(i.readTime);return Ae.newNoDocument(s,o)}(t,e):H()}function vL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(J(d===void 0||typeof d=="string"),We.fromBase64String(d||"")):(J(d===void 0||d instanceof Buffer||d instanceof Uint8Array),We.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:$A(c.code);return new j(d,c.message||"")}(o);n=new WA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nr(t,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):X.min(),a=new _t({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new gd(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nr(t,r.document),s=r.readTime?Je(r.readTime):X.min(),o=Ae.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nr(t,r.document),s=r.removedTargetIds||[];n=new gd([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cL(i,s),a=r.targetId;n=new qA(a,o)}}return n}function wu(t,e){let n;if(e instanceof Aa)n={update:aI(t,e.key,e.value)};else if(e instanceof Pa)n={delete:vu(t,e.key)};else if(e instanceof Ur)n={update:aI(t,e.key,e.data),updateMask:RL(e.fieldMask)};else{if(!(e instanceof $_))return H();n={verify:vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_L(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function tg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ne.updateTime(Je(s.updateTime)):s.exists!==void 0?Ne.exists(s.exists):Ne.none()}(e.currentDocument):Ne.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)J(a.setToServerValue==="REQUEST_TIME"),l=new ia;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Ns(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new Ds(d)}else"increment"in a?l=new sa(o,a.increment):H();const c=xe.fromServerFormat(a.fieldPath);return new ju(c,l)}(t,i)):[];if(e.update){e.update.name;const i=nr(t,e.update.name),s=new _t({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Xt(c.map(d=>xe.fromServerFormat(d)))}(e.updateMask);return new Ur(i,s,o,n,r)}return new Aa(i,s,n,r)}if(e.delete){const i=nr(t,e.delete);return new Pa(i,n)}if(e.verify){const i=nr(t,e.verify);return new $_(i,n)}return H()}function wL(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Je(i.updateTime):Je(s);return o.isEqual(X.min())&&(o=Je(s)),new aL(o,i.transformResults||[])}(n,e))):[]}function XA(t,e){return{documents:[HA(t,e.path)]}}function ZA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HA(t,i);const s=function(c){if(c.length!==0)return nP(_e.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:mo(m.field),direction:IL(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function eP(t){let e=QA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=tP(f);return m instanceof _e&&F_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new yu(go(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Lu(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new Ci(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Ci(_,m)}(n.endAt)),AA(e,i,o,s,a,"F",l,c)}function EL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=go(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=go(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=go(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=go(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(go(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _e.create(n.compositeFilter.filters.map(r=>tP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function IL(t){return fL[t]}function TL(t){return pL[t]}function SL(t){return mL[t]}function mo(t){return{fieldPath:t.canonicalString()}}function go(t){return xe.fromServerFormat(t.fieldPath)}function nP(t){return t instanceof ae?function(n){if(n.op==="=="){if(qE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NAN"}};if(zE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NAN"}};if(zE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(n.field),op:TL(n.op),value:n.value}}}(t):t instanceof _e?function(n){const r=n.getFilters().map(i=>nP(i));return r.length===1?r[0]:{compositeFilter:{op:SL(n.op),filters:r}}}(t):H()}function RL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,i,s=X.min(),o=X.min(),a=We.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iP{constructor(e){this.ct=e}}function AL(t,e){let n;if(e.document)n=JA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=Vs(e.noDocument.readTime);n=Ae.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=G.fromSegments(e.unknownDocument.path),i=Vs(e.unknownDocument.version);n=Ae.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new De(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),n}function lI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:vu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:oa(s,o.version.toTimestamp()),createTime:oa(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Os(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:Os(e.version)}}return r}function rh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Os(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Vs(t){const e=new De(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function os(t,e){const n=(e.baseMutations||[]).map(s=>tg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>tg(t.ct,s)),i=De.fromMillis(e.localWriteTimeMs);return new z_(e.batchId,i,n,r)}function Sl(t){const e=Vs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Vs(t.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return J(s.documents.length===1),Bt(Ra(QA(s.documents[0])))}(t.query):function(s){return Bt(eP(s))}(t.query),new _r(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,We.fromBase64String(t.resumeToken))}function sP(t,e){const n=Os(e.snapshotVersion),r=Os(e.lastLimboFreeSnapshotVersion);let i;i=eh(e.target)?XA(t.ct,e.target):ZA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function H_(t){const e=eP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nh(e,e.limit,"L"):e}function Pp(t,e){return new W_(e.largestBatchId,tg(t.ct,e.overlayMutation))}function uI(t,e){const n=e.path.lastSegment();return[t,jt(e.path.popLast()),n]}function cI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Os(r.readTime),documentKey:jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class PL{getBundleMetadata(e,n){return dI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Vs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return dI(e).put(function(i){return{bundleId:i.id,createTime:Os(Je(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return hI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:H_(s.bundledQuery),readTime:Vs(s.readTime)}}(r)})}saveNamedQuery(e,n){return hI(e).put(function(i){return{name:i.name,readTime:Os(Je(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function dI(t){return st(t,"bundles")}function hI(t){return st(t,"namedQueries")}/**
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
 */class Kh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Kh(e,r)}getOverlay(e,n){return ol(e).get(uI(this.userId,n)).next(r=>r?Pp(this.serializer,r):null)}getOverlays(e,n){const r=Jn();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new W_(n,o);i.push(this.ht(e,a))}),V.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ol(e).j("collectionPathOverlayIndex",a))}),V.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Jn(),s=jt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ol(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Pp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Jn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ol(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=Pp(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ol(e).put(function(i,s,o){const[a,l,c]=uI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:wu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ol(t){return st(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{Pt(e){return st(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?We.fromUint8Array(r):We.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class as{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Ce(e.integerValue));else if("doubleValue"in e){const r=Ce(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),pu(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Nr(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Ai(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?gA(e)?this.dt(n,Number.MAX_SAFE_INTEGER):qh(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Ce(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),G.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}as.vt=new as;function CL(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function fI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=CL(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class bL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=fI(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=fI(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class xL{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class NL{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class al{constructor(){this.jt=new bL,this.Ht=new xL(this.jt),this.Jt=new NL(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class ls{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ls(this.indexId,this.documentKey,this.arrayValue,r)}}function Hr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=pI(t.arrayValue,e.arrayValue),n!==0?n:(n=pI(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function pI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class mI{constructor(e){this.Xt=new we((n,r)=>xe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(J(e.collectionGroup===this.collectionId),this.nn)return!1;const n=qm(e);if(n!==void 0&&!this.sn(n))return!1;const r=rs(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new we(xe.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new dd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new dd(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new dd(r.field,r.dir==="asc"?0:1)));return new Zd(Zd.UNKNOWN_ID,this.collectionId,n,fu.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function oP(t){var e,n;if(J(t instanceof ae||t instanceof _e),t instanceof ae){if(t instanceof RA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return _e.create(i,"or")}return t}const r=t.filters.map(i=>oP(i));return _e.create(r,t.op)}function DL(t){if(t.getFilters().length===0)return[];const e=ig(oP(t));return J(aP(e)),ng(e)||rg(e)?[e]:e.getFilters()}function ng(t){return t instanceof ae}function rg(t){return t instanceof _e&&F_(t)}function aP(t){return ng(t)||rg(t)||function(n){if(n instanceof _e&&Hm(n)){for(const r of n.getFilters())if(!ng(r)&&!rg(r))return!1;return!0}return!1}(t)}function ig(t){if(J(t instanceof ae||t instanceof _e),t instanceof ae)return t;if(t.filters.length===1)return ig(t.filters[0]);const e=t.filters.map(r=>ig(r));let n=_e.create(e,t.op);return n=ih(n),aP(n)?n:(J(n instanceof _e),J(ra(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>Q_(r,i)))}function Q_(t,e){let n;return J(t instanceof ae||t instanceof _e),J(e instanceof ae||e instanceof _e),n=t instanceof ae?e instanceof ae?function(i,s){return _e.create([i,s],"and")}(t,e):gI(t,e):e instanceof ae?gI(e,t):function(i,s){if(J(i.filters.length>0&&s.filters.length>0),ra(i)&&ra(s))return IA(i,s.getFilters());const o=Hm(i)?i:s,a=Hm(i)?s:i,l=o.filters.map(c=>Q_(c,a));return _e.create(l,"or")}(t,e),ih(n)}function gI(t,e){if(ra(e))return IA(e,t.getFilters());{const n=e.filters.map(r=>Q_(t,r));return _e.create(n,"or")}}function ih(t){if(J(t instanceof ae||t instanceof _e),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return ih(e[0]);if(wA(t))return t;const n=e.map(i=>ih(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof _e&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:_e.create(r,t.op)}/**
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
 */class OL{constructor(){this.un=new Y_}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(pn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Y_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(oe.comparator)).toArray()}}/**
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
 */const zc=new Uint8Array(0);class VL{constructor(e,n){this.databaseId=n,this.cn=new Y_,this.ln=new Ui(r=>xs(r),(r,i)=>Mu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:jt(i)};return _I(e).put(s)}return V.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[rA(n),""],!1,!0);return _I(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Yn(o.parent))}return r})}addFieldIndex(e,n){const r=ll(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=lo(e);return s.next(a=>{o.put(cI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ll(e),i=lo(e),s=ao(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ll(e),r=ao(e),i=lo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return V.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new mI(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ao(e);let i=!0;const s=new Map;return V.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=re();const a=[];return V.forEach(s,(l,c)=>{B("IndexedDbIndexManager",`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`}(l)} to execute ${xs(n)}`);const d=function(E,b){const F=qm(b);if(F===void 0)return null;for(const U of th(E,F.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(c,l),f=function(E,b){const F=new Map;for(const U of rs(b))for(const w of th(E,U.fieldPath))switch(w.op){case"==":case"in":F.set(U.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return F.set(U.fieldPath.canonicalString(),w.value),Array.from(F.values())}return null}(c,l),m=function(E,b){const F=[];let U=!0;for(const w of rs(b)){const y=w.kind===0?QE(E,w.fieldPath,E.startAt):YE(E,w.fieldPath,E.startAt);F.push(y.value),U&&(U=y.inclusive)}return new Ci(F,U)}(c,l),_=function(E,b){const F=[];let U=!0;for(const w of rs(b)){const y=w.kind===0?YE(E,w.fieldPath,E.endAt):QE(E,w.fieldPath,E.endAt);F.push(y.value),U&&(U=y.inclusive)}return new Ci(F,U)}(c,l),S=this.In(l,c,m),P=this.In(l,c,_),x=this.Tn(l,c,f),I=this.En(l.indexId,d,S,m.inclusive,P,_.inclusive,x);return V.forEach(I,v=>r.G(v,n.limit).next(E=>{E.forEach(b=>{const F=G.fromSegments(b.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return V.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=DL(_e.create(e.filters,"and")).map(r=>Ym(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const m=n?this.dn(n[f/c]):zc,_=this.An(e,m,r[f%c],i),S=this.Rn(e,m,s[f%c],o),P=a.map(x=>this.An(e,m,x,!0));d.push(...this.createRange(_,S,P))}return d}An(e,n,r,i){const s=new ls(e,G.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new ls(e,G.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new mI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return V.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new we(xe.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new al;for(const i of rs(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);as.vt.It(s,o)}return r.zt()}dn(e){const n=new al;return as.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new al;return as.vt.It(bs(this.databaseId,n),r.Yt(function(s){const o=rs(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new al);let s=0;for(const o of rs(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&_u(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);as.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new al;l.seed(a.zt()),as.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ll(e),i=lo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return V.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new fu(f.sequenceNumber,new pn(Vs(f.readTime),new G(Yn(f.documentKey)),f.largestBatchId)):fu.empty(),_=d.fields.map(([S,P])=>new dd(xe.fromServerFormat(S),P));return new Zd(d.indexId,d.collectionGroup,_,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ll(e),s=lo(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>V.forEach(a,l=>s.put(cI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return V.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),V.forEach(a,l=>this.wn(e,i,l).next(c=>{const d=this.Sn(s,l);return c.isEqual(d)?V.resolve():this.bn(e,s,l,c,d)}))))})}Dn(e,n,r,i){return ao(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return ao(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=ao(e);let s=new we(Hr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new ls(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new we(Hr);const i=this.Vn(n,e);if(i==null)return r;const s=qm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(_u(o))for(const a of o.arrayValue.values||[])r=r.add(new ls(n.indexId,e.key,this.dn(a),i))}else r=r.add(new ls(n.indexId,e.key,zc,i));return r}bn(e,n,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,m){const _=l.getIterator(),S=c.getIterator();let P=oo(_),x=oo(S);for(;P||x;){let I=!1,v=!1;if(P&&x){const E=d(P,x);E<0?v=!0:E>0&&(I=!0)}else P!=null?v=!0:I=!0;I?(f(x),x=oo(S)):v?(m(P),P=oo(_)):(P=oo(_),x=oo(S))}}(i,s,Hr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),V.waitFor(o)}yn(e){let n=1;return lo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Hr(o,a)).filter((o,a,l)=>!a||Hr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Hr(o,e),l=Hr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,zc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,zc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return Hr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(yI)}getMinOffset(e,n){return V.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||H())).next(yI)}}function _I(t){return st(t,"collectionParents")}function ao(t){return st(t,"indexEntries")}function ll(t){return st(t,"indexConfiguration")}function lo(t){return st(t,"indexState")}function yI(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;O_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new pn(e.readTime,e.documentKey,n)}/**
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
 */const vI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function lP(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{J(a===1)}));const c=[];for(const d of n.mutations){const f=cA(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return V.waitFor(s).next(()=>c)}function sh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class Hh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Hh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Qr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=_o(e),o=Qr(e);return o.add({}).next(a=>{J(typeof a=="number");const l=new z_(a,n,r,i),c=function(_,S,P){const x=P.baseMutations.map(v=>wu(_.ct,v)),I=P.mutations.map(v=>wu(_.ct,v));return{userId:S,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:x,mutations:I}}(this.serializer,this.userId,l),d=[];let f=new we((m,_)=>ne(m.canonicalString(),_.canonicalString()));for(const m of i){const _=cA(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(_,EV))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),V.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Qr(e).get(n).next(r=>r?(J(r.userId===this.userId),os(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?V.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Qr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(J(a.batchId>=r),s=os(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Qr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Qr(e).U("userMutationsIndex",n).next(r=>r.map(i=>os(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=hd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return _o(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,m=Yn(d);if(c===this.userId&&n.path.isEqual(m))return Qr(e).get(f).next(_=>{if(!_)throw H();J(_.userId===this.userId),s.push(os(this.serializer,_))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(ne);const i=[];return n.forEach(s=>{const o=hd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=_o(e).J({range:a},(c,d,f)=>{const[m,_,S]=c,P=Yn(_);m===this.userId&&s.path.isEqual(P)?r=r.add(S):f.done()});i.push(l)}),V.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=hd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new we(ne);return _o(e).J({range:o},(l,c,d)=>{const[f,m,_]=l,S=Yn(m);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(_)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Qr(e).get(s).next(o=>{if(o===null)throw H();J(o.userId===this.userId),r.push(os(this.serializer,o))}))}),V.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return lP(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),V.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return _o(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Yn(s[1]);i.push(l)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return uP(e,this.userId,n)}Nn(e){return cP(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function uP(t,e,n){const r=hd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _o(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Qr(t){return st(t,"mutations")}function _o(t){return st(t,"documentMutations")}function cP(t){return st(t,"mutationQueues")}/**
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
 */class Ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ls(0)}static kn(){return new Ls(-1)}}/**
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
 */class LL{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Ls(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>X.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>uo(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return uo(e).J((o,a)=>{const l=Sl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>V.waitFor(s)).next(()=>i)}forEachTarget(e,n){return uo(e).J((r,i)=>{const s=Sl(i);n(s)})}qn(e){return wI(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}Qn(e,n){return wI(e).put("targetGlobalKey",n)}Kn(e,n){return uo(e).put(sP(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=xs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return uo(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Sl(a);Mu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ii(e);return n.forEach(o=>{const a=jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(i)}removeMatchingKeys(e,n,r){const i=ii(e);return V.forEach(n,s=>{const o=jt(s.path);return V.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ii(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ii(e);let s=re();return i.J({range:r,H:!0},(o,a,l)=>{const c=Yn(o[1]),d=new G(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=jt(n.path),i=IDBKeyRange.bound([r],[rA(r)],!1,!0);let s=0;return ii(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return uo(e).get(n).next(r=>r?Sl(r):null)}}function uo(t){return st(t,"targets")}function wI(t){return st(t,"targetGlobal")}function ii(t){return st(t,"targetDocuments")}/**
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
 */function EI([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class ML{constructor(e){this.Un=e,this.buffer=new we(EI),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();EI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fi(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mi(n)}await this.Hn(3e5)})}}class UL{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Jt.oe);const r=new ML(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(vI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vI):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),fo()<=ie.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function jL(t,e){return new UL(t,e)}/**
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
 */class BL{constructor(e,n){this.db=e,this.garbageCollector=jL(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return qc(e,r)}removeReference(e,n,r){return qc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return qc(e,n)}nr(e,n){return function(i,s){let o=!1;return cP(i).Y(a=>uP(i,a,s).next(l=>(l&&(o=!0),V.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),ii(e).delete(function(f){return[0,jt(f.path)]}(o))))});i.push(l)}}).next(()=>V.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return qc(e,n)}tr(e,n){const r=ii(e);let i,s=Jt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Jt.oe&&n(new G(Yn(i)),s),s=c,i=l):s=Jt.oe}).next(()=>{s!==Jt.oe&&n(new G(Yn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function qc(t,e){return ii(t).put(function(r,i){return{targetId:0,path:jt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class dP{constructor(){this.changes=new Ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $L{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ji(e).put(r)}removeEntry(e,n,r){return Ji(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],rh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Ae.newInvalidDocument(n);return Ji(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ul(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Ae.newInvalidDocument(n)};return Ji(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ul(n))},(i,s)=>{r={document:this.ir(n,s),size:sh(s)}}).next(()=>r)}getEntries(e,n){let r=Zt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Zt(),i=new Te(G.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,sh(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return V.resolve();let i=new we(SI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ul(i.first()),ul(i.last())),o=i.getIterator();let a=o.getNext();return Ji(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&SI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ul(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),rh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ji(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Zt();for(const f of c){const m=this.ir(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Uu(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Zt();const o=TI(n,r),a=TI(n,pn.max());return Ji(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new zL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return II(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}rr(e,n){return II(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=AL(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ae.newInvalidDocument(e)}}function hP(t){return new $L(t)}class zL extends dP{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Ui(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new we((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=lI(this.cr.serializer,o);i=i.add(s.path.popLast());const c=sh(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=lI(this.cr.serializer,o.convertToNoDocument(X.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),V.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function II(t){return st(t,"remoteDocumentGlobal")}function Ji(t){return st(t,"remoteDocumentsV14")}function ul(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function TI(t,e){const n=e.documentKey.path.toArray();return[t,rh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function SI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class qL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fl(r.mutation,i,Xt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Il();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Zt();const o=Ml(),a=function(){return Ml()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ur)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Fl(d.mutation,c,d.mutation.getFieldMask(),De.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new qL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ml();let i=new Te((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Xt.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=NA();d.forEach(m=>{if(!s.has(m)){const _=UA(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):U_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Jn());let a=-1,l=s;return o.next(c=>V.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,re())).next(d=>({batchId:a,changes:xA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Il();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,l=>{const c=function(f,m){return new Fr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ae.newInvalidDocument(d)))});let a=Il();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Fl(d.mutation,c,Xt.empty(),De.now()),Uu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class WL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:H_(i.bundledQuery),readTime:Je(i.readTime)}}(n)),V.resolve()}}/**
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
 */class GL{constructor(){this.overlays=new Te(G.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Jn(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Jn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Jn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new W_(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class J_{constructor(){this.Tr=new we(at.Er),this.dr=new we(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new at(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new oe([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new oe([])),r=new at(n,e),i=new at(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class HL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new we(at.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new z_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(ne);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new at(new G(s),0);let a=new we(ne);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new at(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QL{constructor(e){this.Mr=e,this.docs=function(){return new Te(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(n))}getEntries(e,n){let r=Zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ae.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zt();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||O_(sA(d),r)<=0||(i.has(d.key)||Uu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YL(this)}getSize(e){return V.resolve(this.size)}}class YL extends dP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class JL{constructor(e){this.persistence=e,this.Nr=new Ui(n=>xs(n),Mu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new J_,this.targetCount=0,this.kr=Ls.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class pP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Jt(0),this.Kr=!1,this.Kr=!0,this.$r=new KL,this.referenceDelegate=e(this),this.Ur=new JL(this),this.indexManager=new OL,this.remoteDocumentCache=function(i){return new QL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new iP(n),this.Gr=new WL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new HL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new XL(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class XL extends aA{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.Jr=new J_,this.Yr=null}static Zr(e){return new Qh(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class ZL{constructor(e){this.serializer=e}O(e,n,r,i){const s=new $h("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",FE,{unique:!0}),l.createObjectStore("documentMutations")}(e),RI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),RI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",FE,{unique:!0});const f=c.store("mutations"),m=d.map(_=>f.put(_));return V.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:DV});c.createIndex("collectionPathOverlayIndex",OV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",VV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:IV});c.createIndex("documentKeyIndex",TV),c.createIndex("collectionGroupIndex",SV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:CV}).createIndex("sequenceNumberIndex",bV,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:xV}).createIndex("documentKeyIndex",NV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=sh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>V.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>V.forEach(a,l=>{J(l.userId===s.userId);const c=os(this.serializer,l);return lP(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new oe(o),c=function(f){return[0,jt(f)]}(l);s.push(n.get(c).next(d=>d?V.resolve():(f=>n.put({targetId:0,path:jt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>V.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:kV});const r=n.store("collectionParents"),i=new Y_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:jt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new oe(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=Yn(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Sl(i),o=sP(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new G(oe.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>V.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=hP(this.serializer),s=new pP(Qh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:re();os(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),V.forEach(a,(l,c)=>{const d=new ut(c),f=Kh.lt(this.serializer,d),m=s.getIndexManager(d),_=Hh.lt(d,this.serializer,m,s.referenceDelegate);return new fP(i,_,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Wm(n,Jt.oe),l).next()})})}}function RI(t){t.createObjectStore("targetDocuments",{keyPath:AV}).createIndex("documentTargetsIndex",PV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",RV,{unique:!0}),t.createObjectStore("targetGlobal")}const kp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class X_{constructor(e,n,r,i,s,o,a,l,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!X_.D())throw new j(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new BL(this,i),this.Ai=n+"main",this.serializer=new iP(l),this.Ri=new tr(this.Ai,this.hi,new ZL(this.serializer)),this.$r=new kL,this.Ur=new LL(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hP(this.serializer),this.Gr=new PL,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(L.FAILED_PRECONDITION,kp);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Jt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Wc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Fi(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return cl(e).get("owner").next(n=>V.resolve(this.vi(n)))}Ci(e){return Wc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return V.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?V.resolve(!0):cl(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new j(L.FAILED_PRECONDITION,kp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Wc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Wm(e,Jt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Wc(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Hh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VL(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Kh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){B("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?FV:l===16?MV:l===15?L_:l===14?fA:l===13?hA:l===12?LV:l===11?dA:void H()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Wm(a,this.Qr?this.Qr.next():Jt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(L.FAILED_PRECONDITION,oA);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return cl(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new j(L.FAILED_PRECONDITION,kp)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return cl(e).put("owner",n)}static D(){return tr.D()}bi(e){const n=cl(e);return n.get("owner").next(r=>this.vi(r)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):V.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ye(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;LR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ye("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ye("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function cl(t){return st(t,"owner")}function Wc(t){return st(t,"clientMetadata")}function Z_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class ey{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ey(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LR()?8:lA(Ue())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(fo()<=ie.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",po(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(fo()<=ie.DEBUG&&B("QueryEngine","Query:",po(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fo()<=ie.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",po(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bt(n))):V.resolve())}Yi(e,n){if(JE(n))return V.resolve(null);let r=Bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nh(n,null,"F"),r=Bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,nh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return JE(n)||i.isEqual(X.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(fo()<=ie.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(n)),this.rs(e,o,n,iA(i,-1)).next(a=>a))})}ts(e,n){let r=new we(CA(e));return n.forEach((i,s)=>{Uu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return fo()<=ie.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",po(n)),this.Ji.getDocumentsMatchingQuery(e,n,pn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(ne),this._s=new Ui(s=>xs(s),Mu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function gP(t,e,n,r){return new tM(t,e,n,r)}async function _P(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function nM(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,m=f.keys();let _=V.resolve();return m.forEach(S=>{_=_.next(()=>d.getEntry(l,S)).next(P=>{const x=c.docVersions.get(S);J(x!==null),P.version.compareTo(x)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yP(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function rM(t,e){const n=K(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(We.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(f,_),function(P,x,I){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,d)&&a.push(n.Ur.updateTargetData(s,_))});let l=Zt(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(vP(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function vP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function iM(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aa(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function la(t,e,n){const r=K(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function oh(t,e,n){const r=K(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=K(l),m=f._s.get(d);return m!==void 0?V.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,Bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(a=>(IP(r,kA(e),a),{documents:a,Ts:s})))}function wP(t,e){const n=K(t),r=K(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function EP(t,e){const n=K(t),r=n.us.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,iA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(IP(n,e,i),i))}function IP(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function sM(t,e,n,r){const i=K(t);let s=re(),o=Zt();for(const c of n){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),l=await aa(i,function(d){return Bt(Ra(oe.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>vP(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ur.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function oM(t,e,n=re()){const r=await aa(t,Bt(H_(e.bundledQuery))),i=K(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(We.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function AI(t,e){return`firestore_clients_${t}_${e}`}function PI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Cp(t,e){return`firestore_targets_${t}_${e}`}class ah{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new ah(e,n,i.state,s):(Ye("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ul{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new Ul(e,r.state,i):(Ye("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=j_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=uA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new lh(e,s):(Ye("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ty{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ty(n.clientId,n.onlineState):(Ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sg{constructor(){this.activeTargetIds=j_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bp{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Te(ne),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=AI(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new sg),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(AI(this.persistenceKey,r));if(i){const s=lh.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Cp(this.persistenceKey,e));if(i){const s=Ul.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Cp(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void Ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Jt.oe;if(s!=null)try{const a=JSON.parse(s);J(typeof a=="number"),o=a}catch(a){Ye("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Jt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new ah(this.currentUser,e,n,r),s=PI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=PI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=Cp(this.persistenceKey,e),s=new Ul(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return lh.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return ah.Rs(new ut(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Ul.Rs(i,n)}Ls(e){return ty.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=j_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class TP{constructor(){this.so=new sg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aM{_o(e){}shutdown(){}}/**
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
 */class kI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc=null;function xp(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
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
 */const lM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const At="WebChannelConnection";class cM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=xp(),l=this.xo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(d=>(B("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ir("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=lM[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=xp();return new Promise((o,a)=>{const l=new YR;l.setWithCredentials(!0),l.listenOnce(JR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cd.NO_ERROR:const d=l.getResponseJson();B(At,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case cd.TIMEOUT:B(At,`RPC '${e}' ${s} timed out`),a(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case cd.HTTP_ERROR:const f=l.getStatus();if(B(At,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(x){const I=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(_.status);a(new j(S,_.message))}else a(new j(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(L.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{B(At,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(At,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=xp(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eA(),a=ZR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");B(At,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,_=!1;const S=new uM({Io:x=>{_?B(At,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(B(At,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(At,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},To:()=>f.close()}),P=(x,I,v)=>{x.listen(I,E=>{try{v(E)}catch(b){setTimeout(()=>{throw b},0)}})};return P(f,El.EventType.OPEN,()=>{_||(B(At,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(f,El.EventType.CLOSE,()=>{_||(_=!0,B(At,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(f,El.EventType.ERROR,x=>{_||(_=!0,ir(At,`RPC '${e}' stream ${i} transport errored:`,x),S.So(new j(L.UNAVAILABLE,"The operation could not be completed")))}),P(f,El.EventType.MESSAGE,x=>{var I;if(!_){const v=x.data[0];J(!!v);const E=v,b=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(b){B(At,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let U=function(T){const R=Ze[T];if(R!==void 0)return $A(R)}(F),w=b.message;U===void 0&&(U=L.INTERNAL,w="Unknown error status: "+F+" with message "+b.message),_=!0,S.So(new j(U,w)),f.close()}else B(At,`RPC '${e}' stream ${i} received:`,v),S.bo(v)}}),P(a,XR.STAT_EVENT,x=>{x.stat===zm.PROXY?B(At,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===zm.NOPROXY&&B(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
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
 */function SP(){return typeof window<"u"?window:null}function _d(){return typeof document<"u"?document:null}/**
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
 */function zu(t){return new gL(t,!0)}/**
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
 */class ny{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class RP{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ny(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Ye(n.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new j(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dM extends RP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=vL(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Je(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=eg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=eh(l)?{documents:XA(s,l)}:{query:ZA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GA(s,o.resumeToken);const c=Xm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=oa(s,o.snapshotVersion.toTimestamp());const c=Xm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=EL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=eg(this.serializer),n.removeTarget=e,this.a_(n)}}class hM extends RP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=wL(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=eg(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wu(this.serializer,r))};this.a_(n)}}/**
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
 */class fM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Zm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Zm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ye(n),this.D_=!1):B("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class mM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ji(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=K(l);c.L_.add(4),await ka(c),c.q_.set("Unknown"),c.L_.delete(4),await qu(c)}(this))})}),this.q_=new pM(r,i)}}async function qu(t){if(ji(t))for(const e of t.B_)await e(!0)}async function ka(t){for(const e of t.B_)await e(!1)}function Yh(t,e){const n=K(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sy(n)?iy(n):ba(n).r_()&&ry(n,e))}function ua(t,e){const n=K(t),r=ba(n);n.N_.delete(e),r.r_()&&AP(n,e),n.N_.size===0&&(r.r_()?r.o_():ji(n)&&n.q_.set("Unknown"))}function ry(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ba(t).A_(e)}function AP(t,e){t.Q_.xe(e),ba(t).R_(e)}function iy(t){t.Q_=new hL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ba(t).start(),t.q_.v_()}function sy(t){return ji(t)&&!ba(t).n_()&&t.N_.size>0}function ji(t){return K(t).L_.size===0}function PP(t){t.Q_=void 0}async function gM(t){t.q_.set("Online")}async function _M(t){t.N_.forEach((e,n)=>{ry(t,e)})}async function yM(t,e){PP(t),sy(t)?(t.q_.M_(e),iy(t)):t.q_.set("Unknown")}async function vM(t,e,n){if(t.q_.set("Online"),e instanceof WA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uh(t,r)}else if(e instanceof gd?t.Q_.Ke(e):e instanceof qA?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await yP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(We.EMPTY_BYTE_STRING,d.snapshotVersion)),AP(s,l);const f=new _r(d.target,l,c,d.sequenceNumber);ry(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await uh(t,r)}}async function uh(t,e,n){if(!Fi(e))throw e;t.L_.add(1),await ka(t),t.q_.set("Offline"),n||(n=()=>yP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qu(t)})}function kP(t,e){return e().catch(n=>uh(t,n,e))}async function Ca(t){const e=K(t),n=bi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wM(e);)try{const i=await iM(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,EM(e,i)}catch(i){await uh(e,i)}CP(e)&&bP(e)}function wM(t){return ji(t)&&t.O_.length<10}function EM(t,e){t.O_.push(e);const n=bi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function CP(t){return ji(t)&&!bi(t).n_()&&t.O_.length>0}function bP(t){bi(t).start()}async function IM(t){bi(t).p_()}async function TM(t){const e=bi(t);for(const n of t.O_)e.m_(n.mutations)}async function SM(t,e,n){const r=t.O_.shift(),i=q_.from(r,e,n);await kP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ca(t)}async function RM(t,e){e&&bi(t).V_&&await async function(r,i){if(function(o){return BA(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();bi(r).s_(),await kP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ca(r)}}(t,e),CP(t)&&bP(t)}async function CI(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.L_.add(3),await ka(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qu(n)}async function og(t,e){const n=K(t);e?(n.L_.delete(2),await qu(n)):e||(n.L_.add(2),await ka(n),n.q_.set("Unknown"))}function ba(t){return t.K_||(t.K_=function(n,r,i){const s=K(n);return s.w_(),new dM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:gM.bind(null,t),Ro:_M.bind(null,t),mo:yM.bind(null,t),d_:vM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sy(t)?iy(t):t.q_.set("Unknown")):(await t.K_.stop(),PP(t))})),t.K_}function bi(t){return t.U_||(t.U_=function(n,r,i){const s=K(n);return s.w_(),new hM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IM.bind(null,t),mo:RM.bind(null,t),f_:TM.bind(null,t),g_:SM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ca(t)):(await t.U_.stop(),t.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class oy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new oy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(t,e){if(Ye("AsyncQueue",`${e}: ${t}`),Fi(t))return new j(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Il(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class bI{constructor(){this.W_=new Te(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ca{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ca(e,n,Uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class AM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PM{constructor(){this.queries=xI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=K(n),s=i.queries;i.queries=xI(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new j(L.ABORTED,"Firestore shutting down"))}}function xI(){return new Ui(t=>PA(t),Fu)}async function ay(t,e){const n=K(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new AM,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=xa(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&uy(n)}async function ly(t,e){const n=K(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kM(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&uy(n)}function CM(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function uy(t){t.Y_.forEach(e=>{e.next()})}var ag,NI;(NI=ag||(ag={})).ea="default",NI.Cache="cache";class cy{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ca(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ca.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ag.Cache}}/**
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
 */class bM{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
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
 */class DI{constructor(e){this.serializer=e}Es(e){return nr(this.serializer,e)}ds(e){return e.metadata.exists?JA(this.serializer,e.document,!1):Ae.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Je(e)}}class xM{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=xP(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=oe.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new DI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||re()).add(s);n.set(o,a)}}return n}async complete(){const e=await sM(this.localStore,new DI(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await oM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function xP(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class NP{constructor(e){this.key=e}}class DP{constructor(e){this.key=e}}class OP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=CA(e),this.Ra=new Uo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new bI,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),_=Uu(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),x=!0):this.ga(m,_)||(r.track({type:2,doc:_}),x=!0,(l&&this.Aa(_,l)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(l||c)&&(a=!0)),x&&(_?(o=o.add(_),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,S){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return P(_)-P(S)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new ca(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new DP(r))}),this.da.forEach(r=>{e.has(r)||n.push(new NP(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ca.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class NM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DM{constructor(e){this.key=e,this.va=!1}}class OM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ui(a=>PA(a),Fu),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(G.comparator),this.Na=new Map,this.La=new J_,this.Ba={},this.ka=new Map,this.qa=Ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function VM(t,e,n=!0){const r=Jh(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await VP(r,e,n,!0),i}async function LM(t,e){const n=Jh(t);await VP(n,e,!0,!1)}async function VP(t,e,n,r){const i=await aa(t.localStore,Bt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await dy(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Yh(t.remoteStore,i),a}async function dy(t,e,n,r,i){t.Ka=(f,m,_)=>async function(P,x,I,v){let E=x.view.ma(I);E.ns&&(E=await oh(P.localStore,x.query,!1).then(({documents:w})=>x.view.ma(w,E)));const b=v&&v.targetChanges.get(x.targetId),F=v&&v.targetMismatches.get(x.targetId)!=null,U=x.view.applyChanges(E,P.isPrimaryClient,b,F);return lg(P,x.targetId,U.wa),U.snapshot}(t,f,m,_);const s=await oh(t.localStore,e,!0),o=new OP(e,s.Ts),a=o.ma(s.documents),l=$u.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);lg(t,n,c.wa);const d=new NM(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function MM(t,e,n){const r=K(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Fu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await la(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ua(r.remoteStore,i.targetId),da(r,i.targetId)}).catch(Mi)):(da(r,i.targetId),await la(r.localStore,i.targetId,!0))}async function FM(t,e){const n=K(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ua(n.remoteStore,r.targetId))}async function UM(t,e,n){const r=my(t);try{const i=await function(o,a){const l=K(o),c=De.now(),d=a.reduce((_,S)=>_.add(S.key),re());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Zt(),P=re();return l.cs.getEntries(_,d).next(x=>{S=x,S.forEach((I,v)=>{v.isValidDocument()||(P=P.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(x=>{f=x;const I=[];for(const v of a){const E=uL(v,f.get(v.key).overlayedDocument);E!=null&&I.push(new Ur(v.key,E,yA(E.value.mapValue),Ne.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,I,a)}).next(x=>{m=x;const I=x.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(_,x.batchId,I)})}).then(()=>({batchId:m.batchId,changes:xA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Te(ne)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await jr(r,i.changes),await Ca(r.remoteStore)}catch(i){const s=xa(i,"Failed to persist write");n.reject(s)}}async function LP(t,e){const n=K(t);try{const r=await rM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?J(o.va):i.removedDocuments.size>0&&(J(o.va),o.va=!1))}),await jr(n,r,e)}catch(r){await Mi(r)}}function OI(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&uy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jM(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(G.comparator);o=o.insert(s,Ae.newNoDocument(s,X.min()));const a=re().add(s),l=new Bu(X.min(),new Map,new Te(ne),o,a);await LP(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),py(r)}else await la(r.localStore,e,!1).then(()=>da(r,e,n)).catch(Mi)}async function BM(t,e){const n=K(t),r=e.batch.batchId;try{const i=await nM(n.localStore,e);fy(n,r,null),hy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jr(n,i)}catch(i){await Mi(i)}}async function $M(t,e,n){const r=K(t);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(J(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);fy(r,e,n),hy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jr(r,i)}catch(i){await Mi(i)}}async function zM(t,e){const n=K(t);ji(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=K(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=xa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function hy(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function fy(t,e,n){const r=K(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function da(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||MP(t,r)})}function MP(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ua(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),py(t))}function lg(t,e,n){for(const r of n)r instanceof NP?(t.La.addReference(r.key,e),qM(t,r)):r instanceof DP?(B("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||MP(t,r.key)):H()}function qM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(B("SyncEngine","New document in limbo: "+n),t.xa.add(r),py(t))}function py(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(oe.fromString(e)),r=t.qa.next();t.Na.set(r,new DM(n)),t.Oa=t.Oa.insert(n,r),Yh(t.remoteStore,new _r(Bt(Ra(n.path)),r,"TargetPurposeLimboResolution",Jt.oe))}}async function jr(t,e,n){const r=K(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=ey.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const d=K(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,m=>V.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>V.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Fi(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.os.get(m),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function WM(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await _P(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new j(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jr(n,r.hs)}}function GM(t,e){const n=K(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function KM(t,e){const n=K(t),r=await oh(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&lg(n,e.targetId,i.wa),i}async function HM(t,e){const n=K(t);return EP(n.localStore,e).then(r=>jr(n,r))}async function QM(t,e,n,r){const i=K(t),s=await function(a,l){const c=K(a),d=K(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):V.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ca(i.remoteStore):n==="acknowledged"||n==="rejected"?(fy(i,e,r||null),hy(i,e),function(a,l){K(K(a).mutationQueue).On(l)}(i.localStore,e)):H(),await jr(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function YM(t,e){const n=K(t);if(Jh(n),my(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await VI(n,r.toArray());n.Qa=!0,await og(n.remoteStore,!0);for(const s of i)Yh(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(da(n,o),la(n.localStore,o,!0))),ua(n.remoteStore,o)}),await i,await VI(n,r),function(o){const a=K(o);a.Na.forEach((l,c)=>{ua(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Te(G.comparator)}(n),n.Qa=!1,await og(n.remoteStore,!1)}}async function VI(t,e,n){const r=K(t),i=[],s=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await aa(r.localStore,Bt(l[0]));for(const c of l){const d=r.Fa.get(c),f=await KM(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await wP(r.localStore,o);a=await aa(r.localStore,c),await dy(r,FP(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function FP(t){return AA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function JM(t){return function(n){return K(K(n).persistence).Qi()}(K(t).localStore)}async function XM(t,e,n,r){const i=K(t);if(i.Qa)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await EP(i.localStore,kA(s[0])),a=Bu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",We.EMPTY_BYTE_STRING);await jr(i,o,a);break}case"rejected":await la(i.localStore,e,!0),da(i,e,r);break;default:H()}}async function ZM(t,e,n){const r=Jh(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await wP(r.localStore,i),o=await aa(r.localStore,s);await dy(r,FP(s),o.targetId,!1,o.resumeToken),Yh(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await la(r.localStore,i,!1).then(()=>{ua(r.remoteStore,i),da(r,i)}).catch(Mi)}}function Jh(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jM.bind(null,e),e.Ca.d_=kM.bind(null,e.eventManager),e.Ca.$a=CM.bind(null,e.eventManager),e}function my(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$M.bind(null,e),e}function eF(t,e,n){const r=K(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(_,S){const P=K(_),x=Je(S.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",I=>P.Gr.getBundleMetadata(I,S.id)).then(I=>!!I&&I.createTime.compareTo(x)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(xP(l));const c=new xM(l,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await jr(s,f.Ia,void 0),await function(_,S){const P=K(_);return P.persistence.runTransaction("Save bundle","readwrite",x=>P.Gr.saveBundleMetadata(x,S))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(l){return ir("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return gP(this.persistence,new mP,e.initialUser,this.serializer)}Ga(e){return new pP(Qh.Zr,this.serializer)}Wa(e){return new TP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eu.provider={build:()=>new Eu};class UP extends Eu{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await my(this.Ja.syncEngine),await Ca(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return gP(this.persistence,new mP,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new FL(r,e.asyncQueue,n)}Ha(e,n){const r=new vV(n,this.persistence);return new yV(e.asyncQueue,r)}Ga(e){const n=Z_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new X_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,SP(),_d(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new TP}}class tF extends UP{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof bp&&(this.sharedClientState.syncEngine={no:QM.bind(null,n),ro:XM.bind(null,n),io:ZM.bind(null,n),Qi:JM.bind(null,n),eo:HM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await YM(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=SP();if(!bp.D(n))throw new j(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Z_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new bp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Iu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>OI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WM.bind(null,this.syncEngine),await og(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PM}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=function(s){return new cM(s)}(e.databaseInfo);return function(s,o,a,l){return new fM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new mM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>OI(this.syncEngine,n,0),function(){return kI.D()?new kI:new aM}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new OM(i,s,o,a,l,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=K(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ka(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Iu.provider={build:()=>new Iu};function LI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Xh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nF{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new vt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new bM(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class rF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=K(i),a={documents:s.map(f=>vu(o.serializer,f))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,oe.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=yL(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());J(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new $_(i,this.precondition(i)))}),await async function(r,i){const s=K(r),o={writes:i.map(a=>wu(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw H();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new j(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Ne.exists(!1):Ne.updateTime(n):Ne.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new j(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(n)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class iF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new ny(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new rF(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Lu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!BA(n)}return!1}}/**
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
 */class sF{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=nA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Np(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _P(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function MI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gy(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>CI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>CI(e.remoteStore,i)),t._onlineComponents=e}async function gy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Np(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ir("Error using user provided cache. Falling back to memory cache: "+n),await Np(t,new Eu)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Np(t,new Eu);return t._offlineComponents}async function Zh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await MI(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await MI(t,new Iu))),t._onlineComponents}function jP(t){return gy(t).then(e=>e.persistence)}function _y(t){return gy(t).then(e=>e.localStore)}function BP(t){return Zh(t).then(e=>e.remoteStore)}function yy(t){return Zh(t).then(e=>e.syncEngine)}function oF(t){return Zh(t).then(e=>e.datastore)}async function ha(t){const e=await Zh(t),n=e.eventManager;return n.onListen=VM.bind(null,e.syncEngine),n.onUnlisten=MM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=LM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FM.bind(null,e.syncEngine),n}function aF(t){return t.asyncQueue.enqueue(async()=>{const e=await jP(t),n=await BP(t);return e.setNetworkEnabled(!0),function(i){const s=K(i);return s.L_.delete(0),qu(s)}(n)})}function lF(t){return t.asyncQueue.enqueue(async()=>{const e=await jP(t),n=await BP(t);return e.setNetworkEnabled(!1),async function(i){const s=K(i);s.L_.add(0),await ka(s),s.q_.set("Offline")}(n)})}function uF(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=K(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=xa(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await _y(t),e,n)),n.promise}function $P(t,e,n={}){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Xh({next:m=>{d.Za(),o.enqueueAndForget(()=>ly(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new cy(Ra(a.path),d,{includeMetadataChanges:!0,_a:!0});return ay(s,f)}(await ha(t),t.asyncQueue,e,n,r)),r.promise}function cF(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await oh(i,s,!0),l=new OP(s,a.Ts),c=l.ma(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=xa(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await _y(t),e,n)),n.promise}function zP(t,e,n={}){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Xh({next:m=>{d.Za(),o.enqueueAndForget(()=>ly(s,f)),m.fromCache&&l.source==="server"?c.reject(new j(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new cy(a,d,{includeMetadataChanges:!0,_a:!0});return ay(s,f)}(await ha(t),t.asyncQueue,e,n,r)),r.promise}function dF(t,e){const n=new Xh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).Y_.add(s),s.next()}(await ha(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){K(i).Y_.delete(s)}(await ha(t),n))}}function hF(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?zA().encode(o):o,function(d,f){return new nF(d,f)}(function(d,f){if(d instanceof Uint8Array)return LI(d,f);if(d instanceof ArrayBuffer)return LI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,zu(e));t.asyncQueue.enqueueAndForget(async()=>{eF(await yy(t),i,r)})}function fF(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=K(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await _y(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const FI=new Map;/**
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
 */function vy(t,e,n){if(!n)throw new j(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WP(t,e,n,r){if(e===!0&&r===!0)throw new j(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function UI(t){if(!G.isDocumentKey(t))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jI(t){if(G.isDocumentKey(t))throw new j(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ef(t);throw new j(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function GP(t,e){if(e<=0)throw new j(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class BI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new BI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new BI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aV;switch(r.type){case"firstParty":return new dV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=FI.get(n);r&&(B("ComponentProvider","Removing Datastore"),FI.delete(n),r.terminate())}(this),Promise.resolve()}}function KP(t,e,n,r={}){var i;const s=(t=fe(t,Wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ut.MOCK_USER;else{a=NR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(c)}t._authCredentials=new lV(new tA(a,l))}}/**
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
 */let $t=class HP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new HP(this.firestore,e,this._query)}},Le=class QP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new QP(this.firestore,e,this._key)}},wi=class YP extends $t{constructor(e,n,r){super(e,n,Ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new G(e))}withConverter(e){return new YP(this.firestore,e,this._path)}};function ch(t,e,...n){if(t=Y(t),vy("collection","path",e),t instanceof Wu){const r=oe.fromString(e,...n);return jI(r),new wi(t,null,r)}{if(!(t instanceof Le||t instanceof wi))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return jI(r),new wi(t.firestore,null,r)}}function pF(t,e){if(t=fe(t,Wu),vy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new $t(t,null,function(r){return new Fr(oe.emptyPath(),r)}(e))}function fa(t,e,...n){if(t=Y(t),arguments.length===1&&(e=nA.newId()),vy("doc","path",e),t instanceof Wu){const r=oe.fromString(e,...n);return UI(r),new Le(t,null,new G(r))}{if(!(t instanceof Le||t instanceof wi))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return UI(r),new Le(t.firestore,t instanceof wi?t.converter:null,new G(r))}}function JP(t,e){return t=Y(t),e=Y(e),(t instanceof Le||t instanceof wi)&&(e instanceof Le||e instanceof wi)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function XP(t,e){return t=Y(t),e=Y(e),t instanceof $t&&e instanceof $t&&t.firestore===e.firestore&&Fu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class $I{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ny(this,"async_queue_retry"),this.Vu=()=>{const r=_d();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ye("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=oy.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ug(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class mF{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const gF=-1;let Xe=class extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $I,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $I(e),this._firestoreClient=void 0,await e}}};function _F(t,e){const n=typeof t=="object"?t:Bh(),r=typeof t=="string"?t:"(default)",i=Ta(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CR("firestore");s&&KP(i,...s)}return i}function xt(t){if(t._terminated)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZP(t),t._firestoreClient}function ZP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new BV(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,qP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sF(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}function yF(t,e){ir("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return ek(t,Iu.provider,{build:r=>new UP(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function vF(t){ir("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();ek(t,Iu.provider,{build:n=>new tF(n,e.cacheSizeBytes)})}function ek(t,e,n){if((t=fe(t,Xe))._firestoreClient||t._terminated)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new j(L.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},ZP(t)}function wF(t){if(t._initialized&&!t._terminated)throw new j(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!tr.D())return Promise.resolve();const i=r+"main";await tr.delete(i)}(Z_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function EF(t){return function(n){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>zM(await yy(n),r)),r.promise}(xt(t=fe(t,Xe)))}function IF(t){return aF(xt(t=fe(t,Xe)))}function TF(t){return lF(xt(t=fe(t,Xe)))}function SF(t,e){const n=xt(t=fe(t,Xe)),r=new mF;return hF(n,t._databaseId,e,r),r}function RF(t,e){return fF(xt(t=fe(t,Xe)),e).then(n=>n?new $t(t,null,n.query):null)}/**
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
 */class or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new or(We.fromBase64String(e))}catch(n){throw new j(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new or(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let xi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ws=class{constructor(e){this._methodName=e}};/**
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
 */class tf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const AF=/^__.*__$/;class PF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class tk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return dh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nk(this.Cu)&&AF.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}Qu(e,n,r,i=!1){return new nf({Cu:e,methodName:n,qu:r,path:xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gs(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new kF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rf(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Py("Data must be an object, but it was:",o,r);const a=sk(r,o);let l,c;if(s.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=cg(e,f,n);if(!o.contains(m))throw new j(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ak(d,m)||d.push(m)}l=new Xt(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new PF(new _t(a),l,c)}class Gu extends Ws{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}function rk(t,e,n){return new nf({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ey extends Ws{_toFieldTransform(e){return new ju(e.path,new ia)}isEqual(e){return e instanceof Ey}}class Iy extends Ws{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=rk(this,e,!0),r=this.Ku.map(s=>Ks(s,n)),i=new Ns(r);return new ju(e.path,i)}isEqual(e){return e instanceof Iy&&Xo(this.Ku,e.Ku)}}class Ty extends Ws{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=rk(this,e,!0),r=this.Ku.map(s=>Ks(s,n)),i=new Ds(r);return new ju(e.path,i)}isEqual(e){return e instanceof Ty&&Xo(this.Ku,e.Ku)}}class Sy extends Ws{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new sa(e.serializer,OA(e.serializer,this.$u));return new ju(e.path,n)}isEqual(e){return e instanceof Sy&&this.$u===e.$u}}function Ry(t,e,n,r){const i=t.Qu(1,e,n);Py("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();qs(r,(l,c)=>{const d=ky(e,l,n);c=Y(c);const f=i.Nu(d);if(c instanceof Gu)s.push(d);else{const m=Ks(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Xt(s);return new tk(o,a,i.fieldTransforms)}function Ay(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[cg(e,r,n)],l=[i];if(s.length%2!=0)throw new j(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(cg(e,s[m])),l.push(s[m+1]);const c=[],d=_t.empty();for(let m=a.length-1;m>=0;--m)if(!ak(c,a[m])){const _=a[m];let S=l[m];S=Y(S);const P=o.Nu(_);if(S instanceof Gu)c.push(_);else{const x=Ks(S,P);x!=null&&(c.push(_),d.set(_,x))}}const f=new Xt(c);return new tk(d,f,o.fieldTransforms)}function ik(t,e,n,r=!1){return Ks(n,t.Qu(r?4:3,e))}function Ks(t,e){if(ok(t=Y(t)))return Py("Unsupported field value:",e,t),sk(t,e);if(t instanceof Ws)return function(r,i){if(!nk(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ks(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:oa(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(i.serializer,s)}}if(r instanceof tf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof or)return{bytesValue:GA(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:K_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return B_(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ef(r)}`)}(t,e)}function sk(t,e){const n={};return pA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,i)=>{const s=Ks(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ok(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof tf||t instanceof or||t instanceof Le||t instanceof Ws||t instanceof wy)}function Py(t,e,n){if(!ok(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ef(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function cg(t,e,n){if((e=Y(e))instanceof xi)return e._internalPath;if(typeof e=="string")return ky(t,e);throw dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const CF=new RegExp("[~\\*/\\[\\]]");function ky(t,e,n){if(e.search(CF)>=0)throw dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xi(...e.split("."))._internalPath}catch{throw dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(L.INVALID_ARGUMENT,a+t+l)}function ak(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Tu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bF extends Tu{data(){return super.data()}}function sf(t,e){return typeof e=="string"?ky(t,e):e instanceof xi?e._internalPath:e._delegate._internalPath}/**
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
 */function lk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cy{}class Ku extends Cy{}function hr(t,e,...n){let r=[];e instanceof Cy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof by).length,a=s.filter(l=>l instanceof of).length;if(o>1||o>0&&a>0)throw new j(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class of extends Ku{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new of(e,n,r)}_apply(e){const n=this._parse(e);return ck(e._query,n),new $t(e.firestore,e.converter,Jm(e._query,n))}_parse(e){const n=Gs(e.firestore);return function(s,o,a,l,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){qI(f,d);const _=[];for(const S of f)_.push(zI(l,s,S));m={arrayValue:{values:_}}}else m=zI(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||qI(f,d),m=ik(a,o,f,d==="in"||d==="not-in");return ae.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function dg(t,e,n){const r=e,i=sf("where",t);return of._create(i,r,n)}class by extends Cy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new by(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_e.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ck(o,l),o=Jm(o,l)}(e._query,n),new $t(e.firestore,e.converter,Jm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xy extends Ku{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yu(s,o)}(e._query,this._field,this._direction);return new $t(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function xF(t,e="asc"){const n=e,r=sf("orderBy",t);return xy._create(r,n)}class af extends Ku{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new af(e,n,r)}_apply(e){return new $t(e.firestore,e.converter,nh(e._query,this._limit,this._limitType))}}function NF(t){return GP("limit",t),af._create("limit",t,"F")}function DF(t){return GP("limitToLast",t),af._create("limitToLast",t,"L")}class lf extends Ku{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new lf(e,n,r)}_apply(e){const n=uk(e,this.type,this._docOrFields,this._inclusive);return new $t(e.firestore,e.converter,function(i,s){return new Fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function OF(...t){return lf._create("startAt",t,!0)}function VF(...t){return lf._create("startAfter",t,!1)}class uf extends Ku{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new uf(e,n,r)}_apply(e){const n=uk(e,this.type,this._docOrFields,this._inclusive);return new $t(e.firestore,e.converter,function(i,s){return new Fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function LF(...t){return uf._create("endBefore",t,!1)}function MF(...t){return uf._create("endAt",t,!0)}function uk(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof Tu)return function(s,o,a,l,c){if(!l)throw new j(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Fo(s))if(f.field.isKeyField())d.push(bs(o,l.key));else{const m=l.data.field(f.field);if(zh(m))throw new j(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=f.field.canonicalString();throw new j(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ci(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Gs(t.firestore);return function(o,a,l,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new j(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let S=0;S<d.length;S++){const P=d[S];if(m[S].field.isKeyField()){if(typeof P!="string")throw new j(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!U_(o)&&P.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const x=o.path.child(oe.fromString(P));if(!G.isDocumentKey(x))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const I=new G(x);_.push(bs(a,I))}else{const x=ik(l,c,P);_.push(x)}}return new Ci(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function zI(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new j(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!U_(e)&&n.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!G.isDocumentKey(r))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bs(t,new G(r))}if(n instanceof Le)return bs(t,n._key);throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ef(n)}.`)}function qI(t,e){if(!Array.isArray(t)||t.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ck(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ny{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new wy(s)}convertGeoPoint(e){return new tf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=M_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mu(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);J(rP(r));const i=new Pi(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Ye(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function cf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class FF extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}/**
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
 */class fs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Dr=class extends Tu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},jl=class extends Dr{data(e={}){return super.data(e)}},Ni=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new jl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new jl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:UF(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function UF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function dk(t,e){return t instanceof Dr&&e instanceof Dr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ni&&e instanceof Ni&&t._firestore===e._firestore&&XP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function jF(t){t=fe(t,Le);const e=fe(t.firestore,Xe);return $P(xt(e),t._key).then(n=>Dy(e,t,n))}class Hs extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function BF(t){t=fe(t,Le);const e=fe(t.firestore,Xe),n=xt(e),r=new Hs(e);return uF(n,t._key).then(i=>new Dr(e,r,t._key,i,new fs(i!==null&&i.hasLocalMutations,!0),t.converter))}function $F(t){t=fe(t,Le);const e=fe(t.firestore,Xe);return $P(xt(e),t._key,{source:"server"}).then(n=>Dy(e,t,n))}function hk(t){t=fe(t,$t);const e=fe(t.firestore,Xe),n=xt(e),r=new Hs(e);return lk(t._query),zP(n,t._query).then(i=>new Ni(e,r,t,i))}function zF(t){t=fe(t,$t);const e=fe(t.firestore,Xe),n=xt(e),r=new Hs(e);return cF(n,t._query).then(i=>new Ni(e,r,t,i))}function qF(t){t=fe(t,$t);const e=fe(t.firestore,Xe),n=xt(e),r=new Hs(e);return zP(n,t._query,{source:"server"}).then(i=>new Ni(e,r,t,i))}function WI(t,e,n){t=fe(t,Le);const r=fe(t.firestore,Xe),i=cf(t.converter,e,n);return Hu(r,[rf(Gs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ne.none())])}function hg(t,e,n,...r){t=fe(t,Le);const i=fe(t.firestore,Xe),s=Gs(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof xi?Ay(s,"updateDoc",t._key,e,n,r):Ry(s,"updateDoc",t._key,e),Hu(i,[o.toMutation(t._key,Ne.exists(!0))])}function fk(t){return Hu(fe(t.firestore,Xe),[new Pa(t._key,Ne.none())])}function pk(t,e){const n=fe(t.firestore,Xe),r=fa(t),i=cf(t.converter,e);return Hu(n,[rf(Gs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function mk(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ug(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ug(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Le)c=fe(t.firestore,Xe),d=Ra(t._key.path),l={next:f=>{e[o]&&e[o](Dy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=fe(t,$t);c=fe(f.firestore,Xe),d=f._query;const m=new Hs(c);l={next:_=>{e[o]&&e[o](new Ni(c,m,f,_))},error:e[o+1],complete:e[o+2]},lk(t._query)}return function(m,_,S,P){const x=new Xh(P),I=new cy(_,x,S);return m.asyncQueue.enqueueAndForget(async()=>ay(await ha(m),I)),()=>{x.Za(),m.asyncQueue.enqueueAndForget(async()=>ly(await ha(m),I))}}(xt(c),d,a,l)}function WF(t,e){return dF(xt(t=fe(t,Xe)),ug(e)?e:{next:e})}function Hu(t,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>UM(await yy(r),i,s)),s.promise}(xt(t),e)}function Dy(t,e,n){const r=n.docs.get(e._key),i=new Hs(t);return new Dr(t,i,e._key,r,new fs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const GF={maxAttempts:5};/**
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
 */let KF=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Gs(e)}set(e,n,r){this._verifyNotCommitted();const i=si(e,this._firestore),s=cf(i.converter,n,r),o=rf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ne.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=si(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof xi?Ay(this._dataReader,"WriteBatch.update",s._key,n,r,i):Ry(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ne.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=si(e,this._firestore);return this._mutations=this._mutations.concat(new Pa(n._key,Ne.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function si(t,e){if((t=Y(t)).firestore!==e)throw new j(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let HF=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Gs(n)}get(n){const r=si(n,this._firestore),i=new FF(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return H();const o=s[0];if(o.isFoundDocument())return new Tu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Tu(this._firestore,i,r._key,null,r.converter);throw H()})}set(n,r,i){const s=si(n,this._firestore),o=cf(s.converter,r,i),a=rf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=si(n,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof xi?Ay(this._dataReader,"Transaction.update",o._key,r,i,s):Ry(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=si(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=si(e,this._firestore),r=new Hs(this._firestore);return super.get(e).then(i=>new Dr(this._firestore,r,n._key,i._document,new fs(!1,!1),n.converter))}};function QF(t,e,n){t=fe(t,Xe);const r=Object.assign(Object.assign({},GF),n);return function(s){if(s.maxAttempts<1)throw new j(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new vt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await oF(s);new iF(s.asyncQueue,c,a,o,l).au()}),l.promise}(xt(t),i=>e(new HF(t,i)),r)}/**
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
 */function YF(){return new Gu("deleteField")}function JF(){return new Ey("serverTimestamp")}function XF(...t){return new Iy("arrayUnion",t)}function ZF(...t){return new Ty("arrayRemove",t)}function e2(t){return new Sy("increment",t)}(function(e,n=!0){(function(i){Sa=i})(Mr),xr(new An("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Xe(new uV(r.getProvider("auth-internal")),new fV(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),hn(VE,"4.7.3",e),hn(VE,"4.7.3","esm2017")})();/**
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
 */class t2{constructor(e,n){this._delegate=e,this.firebase=n,cu(e,new An("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),N_(this._delegate)))}_getService(e,n=Ti){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ti){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){cu(this._delegate,e)}_addOrOverwriteComponent(e){$R(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const n2={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},GI=new zs("app-compat","Firebase",n2);/**
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
 */function r2(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:hn,setLogLevel:GR,onLog:WR,apps:null,SDK_VERSION:Mr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:iV}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ti,!AE(e,c))throw GI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=x_(c,d);if(AE(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(xr(c)&&c.type==="PUBLIC"){const m=(_=i())=>{if(typeof _[f]!="function")throw GI.create("invalid-app-argument",{appName:d});return _[f]()};c.serviceProps!==void 0&&Jd(m,c.serviceProps),n[f]=m,t.prototype[f]=function(..._){return this._getService.bind(this,d).apply(this,c.multipleInstances?_:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function gk(){const t=r2(t2);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:gk,extendNamespace:e,createSubscribe:MR,ErrorFactory:zs,deepExtend:Jd});function e(n){Jd(t,n)}return t}const i2=gk();/**
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
 */const KI=new jh("@firebase/app-compat"),s2="@firebase/app-compat",o2="0.2.43";/**
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
 */function a2(t){hn(s2,o2,t)}/**
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
 */try{const t=PR();if(t.firebase!==void 0){KI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&KI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Qs=i2;a2();var l2="firebase",u2="10.14.1";/**
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
 */Qs.registerVersion(l2,u2,"app-compat");function Oy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const dl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},co={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function c2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function _k(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d2=c2,h2=_k,yk=new zs("auth","Firebase",_k());/**
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
 */const hh=new jh("@firebase/auth");function f2(t,...e){hh.logLevel<=ie.WARN&&hh.warn(`Auth (${Mr}): ${t}`,...e)}function yd(t,...e){hh.logLevel<=ie.ERROR&&hh.error(`Auth (${Mr}): ${t}`,...e)}/**
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
 */function ht(t,...e){throw Ly(t,...e)}function it(t,...e){return Ly(t,...e)}function Vy(t,e,n){const r=Object.assign(Object.assign({},h2()),{[e]:n});return new zs("auth","Firebase",r).create(e,{appName:t.name})}function dt(t){return Vy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Na(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),Vy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ly(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yk.create(t,...e)}function z(t,e,...n){if(!t)throw Ly(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yd(e),new Error(e)}function Un(t,e){t||Xn(e)}/**
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
 */function Su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function My(){return HI()==="http:"||HI()==="https:"}function HI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function p2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(My()||OR()||"connection"in navigator)?navigator.onLine:!0}function m2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=FD()||k_()}get(){return p2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fy(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _2=new Qu(3e4,6e4);function Ke(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function He(t,e,n,r,i={}){return wk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ia(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return jD()||(c.referrerPolicy="no-referrer"),vk.fetch()(Ek(t,t.config.apiHost,n,a),c)})}async function wk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g2),e);try{const i=new v2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Rl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vy(t,d,c);ht(t,d)}}catch(i){if(i instanceof Ct)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function Br(t,e,n,r,i={}){const s=await He(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ek(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fy(t.config,i):`${t.config.apiScheme}://${i}`}function y2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class v2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),_2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function QI(t){return t!==void 0&&t.getResponse!==void 0}function YI(t){return t!==void 0&&t.enterprise!==void 0}class w2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return y2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function E2(t){return(await He(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function I2(t,e){return He(t,"GET","/v2/recaptchaConfig",Ke(t,e))}/**
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
 */async function T2(t,e){return He(t,"POST","/v1/accounts:delete",e)}async function S2(t,e){return He(t,"POST","/v1/accounts:update",e)}async function Ik(t,e){return He(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R2(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=df(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bl(Dp(i.auth_time)),issuedAtTime:Bl(Dp(i.iat)),expirationTime:Bl(Dp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dp(t){return Number(t)*1e3}function df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yd("JWT malformed, contained fewer than 3 sections"),null;try{const i=AR(n);return i?JSON.parse(i):(yd("Failed to decode base64 JWT payload"),null)}catch(i){return yd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function JI(t){const e=df(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&A2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class P2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bl(this.lastLoginAt),this.creationTime=Bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Or(t,Ik(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tk(s.providerUserInfo):[],a=C2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function k2(t){const e=Y(t);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tk(t){return t.map(e=>{var{providerId:n}=e,r=Oy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function b2(t,e){const n=await wk(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ek(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function x2(t,e){return He(t,"POST","/v2/accounts:revokeToken",Ke(t,e))}/**
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
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=JI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await b2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Yr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Oy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Or(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R2(this,e)}reload(){return k2(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(dt(this.auth));const e=await this.getIdToken();return await Or(this,T2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:b,isAnonymous:F,providerData:U,stsTokenManager:w}=n;z(E&&w,e,"internal-error");const y=jo.fromJSON(this.name,w);z(typeof E=="string",e,"internal-error"),Yr(f,e.name),Yr(m,e.name),z(typeof b=="boolean",e,"internal-error"),z(typeof F=="boolean",e,"internal-error"),Yr(_,e.name),Yr(S,e.name),Yr(P,e.name),Yr(x,e.name),Yr(I,e.name),Yr(v,e.name);const T=new yr({uid:E,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:F,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:I,lastLoginAt:v});return U&&Array.isArray(U)&&(T.providerData=U.map(R=>Object.assign({},R))),x&&(T._redirectEventId=x),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new jo;i.updateFromServerResponse(n);const s=new yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tk(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new jo;a.updateFromIdToken(r);const l=new yr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const XI=new Map;function cn(t){Un(t instanceof Function,"Expected a class definition");let e=XI.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,XI.set(t,e),e)}/**
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
 */class Sk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sk.type="NONE";const pa=Sk;/**
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
 */function ws(t,e,n){return`firebase:${t}:${e}:${n}`}class Bo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ws(this.userKey,i.apiKey,s),this.fullPersistenceKey=ws("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bo(cn(pa),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||cn(pa);const o=ws(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=yr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bo(s,e,r))}}/**
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
 */function ZI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ck(e))return"Blackberry";if(bk(e))return"Webos";if(Ak(e))return"Safari";if((e.includes("chrome/")||Pk(e))&&!e.includes("edge/"))return"Chrome";if(Yu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rk(t=Ue()){return/firefox\//i.test(t)}function Ak(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pk(t=Ue()){return/crios\//i.test(t)}function kk(t=Ue()){return/iemobile/i.test(t)}function Yu(t=Ue()){return/android/i.test(t)}function Ck(t=Ue()){return/blackberry/i.test(t)}function bk(t=Ue()){return/webos/i.test(t)}function Ju(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N2(t=Ue()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function D2(t=Ue()){var e;return Ju(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O2(){return VR()&&document.documentMode===10}function xk(t=Ue()){return Ju(t)||Yu(t)||bk(t)||Ck(t)||/windows phone/i.test(t)||kk(t)}/**
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
 */function Nk(t,e=[]){let n;switch(t){case"Browser":n=ZI(Ue());break;case"Worker":n=`${ZI(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
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
 */class V2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e={}){return He(t,"GET","/v2/passwordPolicy",Ke(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=6;class F2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:M2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class U2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eT(this),this.idTokenSubscription=new eT(this),this.beforeStateQueue=new V2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ik(this,{idToken:e}),r=await yr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(dt(this));const n=e?Y(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L2(this),n=new F2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await x2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&f2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ge(t){return Y(t)}class eT{constructor(e){this.auth=e,this.observer=null,this.addObserver=MR(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j2(t){Xu=t}function Uy(t){return Xu.loadJS(t)}function B2(){return Xu.recaptchaV2Script}function $2(){return Xu.recaptchaEnterpriseScript}function z2(){return Xu.gapiScript}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const q2="recaptcha-enterprise",W2="NO_RECAPTCHA";class G2{constructor(e){this.type=q2,this.auth=Ge(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{I2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new w2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;YI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(W2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&YI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$2();l.length!==0&&(l+=a),Uy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function tT(t,e,n,r=!1){const i=new G2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Au(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await tT(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tT(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function K2(t,e){const n=Ta(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xo(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function H2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ok(t,e,n){const r=Ge(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Vk(e),{host:o,port:a}=Q2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Y2()}function Vk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Q2(t){const e=Vk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:nT(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:nT(o)}}}function nT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Y2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function Lk(t,e){return He(t,"POST","/v1/accounts:resetPassword",Ke(t,e))}async function J2(t,e){return He(t,"POST","/v1/accounts:update",e)}async function X2(t,e){return He(t,"POST","/v1/accounts:signUp",e)}async function Z2(t,e){return He(t,"POST","/v1/accounts:update",Ke(t,e))}/**
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
 */async function eU(t,e){return Br(t,"POST","/v1/accounts:signInWithPassword",Ke(t,e))}async function hf(t,e){return He(t,"POST","/v1/accounts:sendOobCode",Ke(t,e))}async function tU(t,e){return hf(t,e)}async function nU(t,e){return hf(t,e)}async function rU(t,e){return hf(t,e)}async function iU(t,e){return hf(t,e)}/**
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
 */async function sU(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",Ke(t,e))}async function oU(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",Ke(t,e))}/**
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
 */class Pu extends Da{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Au(e,n,"signInWithPassword",eU);case"emailLink":return sU(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Au(e,r,"signUpPassword",X2);case"emailLink":return oU(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tr(t,e){return Br(t,"POST","/v1/accounts:signInWithIdp",Ke(t,e))}/**
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
 */const aU="http://localhost";class ar extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Oy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ar(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:aU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
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
 */async function lU(t,e){return He(t,"POST","/v1/accounts:sendVerificationCode",Ke(t,e))}async function uU(t,e){return Br(t,"POST","/v1/accounts:signInWithPhoneNumber",Ke(t,e))}async function cU(t,e){const n=await Br(t,"POST","/v1/accounts:signInWithPhoneNumber",Ke(t,e));if(n.temporaryProof)throw Rl(t,"account-exists-with-different-credential",n);return n}const dU={USER_NOT_FOUND:"user-not-found"};async function hU(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Br(t,"POST","/v1/accounts:signInWithPhoneNumber",Ke(t,n),dU)}/**
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
 */class Es extends Da{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Es({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Es({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return uU(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return cU(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return hU(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Es({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function fU(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pU(t){const e=xo(wl(t)).link,n=e?xo(wl(e)).deep_link_id:null,r=xo(wl(t)).deep_link_id;return(r?xo(wl(r)).link:null)||r||n||e||t}class ff{constructor(e){var n,r,i,s,o,a;const l=xo(wl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=fU((i=l.mode)!==null&&i!==void 0?i:null);z(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pU(e);try{return new ff(n)}catch{return null}}}/**
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
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return Pu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return z(r,"argument-error"),Pu._fromEmailAndCode(e,r.code,r.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oa extends $r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $o extends Oa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),ar._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),ar._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $o.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $o.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new $o(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Wn extends Oa{constructor(){super("facebook.com")}static credential(e){return ar._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ar._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Oa{constructor(){super("github.com")}static credential(e){return ar._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */const mU="http://localhost";class ma extends Da{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ma(r,s)}static _create(e,n){return new ma(e,n)}buildRequest(){return{requestUri:mU,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const gU="saml.";class fh extends $r{constructor(e){z(e.startsWith(gU),"argument-error"),super(e)}static credentialFromResult(e){return fh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return fh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ma.fromJSON(e);return z(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ma._create(r,n)}catch{return null}}}/**
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
 */class Hn extends Oa{constructor(){super("twitter.com")}static credential(e,n){return ar._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */async function Mk(t,e){return Br(t,"POST","/v1/accounts:signUp",Ke(t,e))}/**
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
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yr._fromIdTokenResponse(e,r,i),o=rT(r);return new Pn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rT(r);return new Pn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function _U(t){var e;if(qe(t.app))return Promise.reject(dt(t));const n=Ge(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Mk(n,{returnSecureToken:!0}),i=await Pn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ph extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ph.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ph(e,n,r,i)}}function Fk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ph._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Uk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function yU(t,e){const n=Y(t);await pf(!0,n,e);const{providerUserInfo:r}=await S2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Uk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function jy(t,e,n=!1){const r=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",r)}async function pf(t,e,n){await Ru(e);const r=Uk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
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
 */async function jk(t,e,n=!1){const{auth:r}=t;if(qe(r.app))return Promise.reject(dt(r));const i="reauthenticate";try{const s=await Or(t,Fk(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=df(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Pn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function Bk(t,e,n=!1){if(qe(t.app))return Promise.reject(dt(t));const r="signIn",i=await Fk(t,r,e),s=await Pn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mf(t,e){return Bk(Ge(t),e)}async function $k(t,e){const n=Y(t);return await pf(!1,n,e.providerId),jy(n,e)}async function zk(t,e){return jk(Y(t),e)}/**
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
 */async function vU(t,e){return Br(t,"POST","/v1/accounts:signInWithCustomToken",Ke(t,e))}/**
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
 */async function wU(t,e){if(qe(t.app))return Promise.reject(dt(t));const n=Ge(t),r=await vU(n,{token:e,returnSecureToken:!0}),i=await Pn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Zu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?By._fromServerResponse(e,n):"totpInfo"in n?$y._fromServerResponse(e,n):ht(e,"internal-error")}}class By extends Zu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new By(n)}}class $y extends Zu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new $y(n)}}/**
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
 */function gf(t,e,n){var r;z(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function zy(t){const e=Ge(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function EU(t,e,n){const r=Ge(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&gf(r,i,n),await Au(r,i,"getOobCode",nU)}async function IU(t,e,n){await Lk(Y(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zy(t),r})}async function TU(t,e){await Z2(Y(t),{oobCode:e})}async function qk(t,e){const n=Y(t),r=await Lk(n,{oobCode:e}),i=r.requestType;switch(z(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,n,"internal-error");default:z(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Zu._fromServerResponse(Ge(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function SU(t,e){const{data:n}=await qk(Y(t),e);return n.email}async function Wk(t,e,n){if(qe(t.app))return Promise.reject(dt(t));const r=Ge(t),o=await Au(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Mk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zy(t),l}),a=await Pn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Gk(t,e,n){return qe(t.app)?Promise.reject(dt(t)):mf(Y(t),Bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zy(t),r})}/**
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
 */async function RU(t,e,n){const r=Ge(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&gf(r,o,a)}s(i,n),await Au(r,i,"getOobCode",rU)}function AU(t,e){const n=ff.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function PU(t,e,n){if(qe(t.app))return Promise.reject(dt(t));const r=Y(t),i=Bi.credentialWithLink(e,n||Su());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mf(r,i)}/**
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
 */async function kU(t,e){return He(t,"POST","/v1/accounts:createAuthUri",Ke(t,e))}/**
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
 */async function CU(t,e){const n=My()?Su():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await kU(Y(t),r);return i||[]}async function bU(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&gf(n.auth,i,e);const{email:s}=await tU(n.auth,i);s!==t.email&&await t.reload()}async function xU(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&gf(r.auth,s,n);const{email:o}=await iU(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function NU(t,e){return He(t,"POST","/v1/accounts:update",e)}/**
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
 */async function DU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Or(r,NU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function OU(t,e){const n=Y(t);return qe(n.auth.app)?Promise.reject(dt(n.auth)):Kk(n,e,null)}function VU(t,e){return Kk(Y(t),null,e)}async function Kk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Or(t,J2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function LU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=df(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new zo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new MU(s,i);case"github.com":return new FU(s,i);case"google.com":return new UU(s,i);case"twitter.com":return new jU(s,i,t.screenName||null);case"custom":case"anonymous":return new zo(s,null);default:return new zo(s,r,i)}}class zo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Hk extends zo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class MU extends zo{constructor(e,n){super(e,"facebook.com",n)}}class FU extends Hk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class UU extends zo{constructor(e,n){super(e,"google.com",n)}}class jU extends Hk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function BU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:LU(n)}function $U(t,e,n,r){return Y(t).onIdTokenChanged(e,n,r)}function zU(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function qU(t){return Y(t).signOut()}/**
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
 */class ps{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ps("enroll",e,n)}static _fromMfaPendingCredential(e){return new ps("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ps._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ps._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class qy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ge(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Zu._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=ps._fromMfaPendingCredential(i.mfaPendingCredential);return new qy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Pn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return z(n.user,r,"internal-error"),Pn._forOperation(n.user,n.operationType,c);default:ht(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function WU(t,e){var n;const r=Y(t),i=e;return z(e.customData.operationType,r,"argument-error"),z((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),qy._fromError(r,i)}/**
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
 */function GU(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:start",Ke(t,e))}function KU(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ke(t,e))}function HU(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ke(t,e))}class Wy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Zu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wy(e)}async getSession(){return ps._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Or(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Or(this.user,HU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Op=new WeakMap;function QU(t){const e=Y(t);return Op.has(e)||Op.set(e,Wy._fromUser(e)),Op.get(e)}const mh="__sak";/**
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
 */class Qk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YU=1e3,JU=10;class Yk extends Qk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);O2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yk.type="LOCAL";const _f=Yk;/**
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
 */class Jk extends Qk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jk.type="SESSION";const Di=Jk;/**
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
 */function XU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await XU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yf.receivers=[];/**
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
 */function ec(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ec("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function et(){return window}function ej(t){et().location.href=t}/**
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
 */function Gy(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function tj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rj(){return Gy()?self:null}/**
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
 */const Xk="firebaseLocalStorageDb",ij=1,gh="firebaseLocalStorage",Zk="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vf(t,e){return t.transaction([gh],e?"readwrite":"readonly").objectStore(gh)}function sj(){const t=indexedDB.deleteDatabase(Xk);return new tc(t).toPromise()}function pg(){const t=indexedDB.open(Xk,ij);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gh,{keyPath:Zk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gh)?e(r):(r.close(),await sj(),e(await pg()))})})}async function iT(t,e,n){const r=vf(t,!0).put({[Zk]:e,value:n});return new tc(r).toPromise()}async function oj(t,e){const n=vf(t,!1).get(e),r=await new tc(n).toPromise();return r===void 0?null:r.value}function sT(t,e){const n=vf(t,!0).delete(e);return new tc(n).toPromise()}const aj=800,lj=3;class eC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yf._getInstance(rj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tj(),!this.activeServiceWorker)return;this.sender=new ZU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pg();return await iT(e,mh,"1"),await sT(e,mh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>iT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oj(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vf(i,!1).getAll();return new tc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eC.type="LOCAL";const ga=eC;/**
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
 */function uj(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:start",Ke(t,e))}function cj(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:finalize",Ke(t,e))}/**
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
 */const dj=500,hj=6e4,Kc=1e12;class fj{constructor(e){this.auth=e,this.counter=Kc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new pj(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Kc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Kc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Kc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class pj{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=mj(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},hj)},dj))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mj(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Vp=Dk("rcb"),gj=new Qu(3e4,6e4);class _j{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=et().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return z(yj(n),e,"argument-error"),this.shouldResolveImmediately(n)&&QI(et().grecaptcha)?Promise.resolve(et().grecaptcha):new Promise((r,i)=>{const s=et().setTimeout(()=>{i(it(e,"network-request-failed"))},gj.get());et()[Vp]=()=>{et().clearTimeout(s),delete et()[Vp];const a=et().grecaptcha;if(!a||!QI(a)){i(it(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${B2()}?${Ia({onload:Vp,render:"explicit",hl:n})}`;Uy(o).catch(()=>{clearTimeout(s),i(it(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=et().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yj(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class vj{async load(e){return new fj(e)}clearedOneInstance(){}}/**
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
 */const tC="recaptcha",wj={theme:"light",type:"image"};let Ej=class{constructor(e,n,r=Object.assign({},wj)){this.parameters=r,this.type=tC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vj:new _j,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=et()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(My()&&!Gy(),this.auth,"internal-error"),await Ij(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await E2(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Ij(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ky{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Es._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Tj(t,e,n){if(qe(t.app))return Promise.reject(dt(t));const r=Ge(t),i=await wf(r,e,Y(n));return new Ky(i,s=>mf(r,s))}async function Sj(t,e,n){const r=Y(t);await pf(!1,r,"phone");const i=await wf(r.auth,e,Y(n));return new Ky(i,s=>$k(r,s))}async function Rj(t,e,n){const r=Y(t);if(qe(r.auth.app))return Promise.reject(dt(r.auth));const i=await wf(r.auth,e,Y(n));return new Ky(i,s=>zk(r,s))}async function wf(t,e,n){var r;const i=await n.verify();try{z(typeof i=="string",t,"argument-error"),z(n.type===tC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",t,"internal-error"),(await GU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,t,"missing-multi-factor-info"),(await uj(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await lU(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Aj(t,e){const n=Y(t);if(qe(n.auth.app))return Promise.reject(dt(n.auth));await jy(n,e)}/**
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
 */let Ms=class vd{constructor(e){this.providerId=vd.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,n){return wf(this.auth,e,Y(n))}static credential(e,n){return Es._fromVerification(e,n)}static credentialFromResult(e){const n=e;return vd.credentialFromTaggedObject(n)}static credentialFromError(e){return vd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Es._fromTokenResponse(n,r):null}};Ms.PROVIDER_ID="phone";Ms.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ys(t,e){return e?cn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hy extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pj(t){return Bk(t.auth,new Hy(t),t.bypassAuthState)}function kj(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),jk(n,new Hy(t),t.bypassAuthState)}async function Cj(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),jy(n,new Hy(t),t.bypassAuthState)}/**
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
 */class nC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pj;case"linkViaPopup":case"linkViaRedirect":return Cj;case"reauthViaPopup":case"reauthViaRedirect":return kj;default:ht(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bj=new Qu(2e3,1e4);async function xj(t,e,n){if(qe(t.app))return Promise.reject(it(t,"operation-not-supported-in-this-environment"));const r=Ge(t);Na(t,e,$r);const i=Ys(r,n);return new vr(r,"signInViaPopup",e,i).executeNotNull()}async function Nj(t,e,n){const r=Y(t);if(qe(r.auth.app))return Promise.reject(it(r.auth,"operation-not-supported-in-this-environment"));Na(r.auth,e,$r);const i=Ys(r.auth,n);return new vr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Dj(t,e,n){const r=Y(t);Na(r.auth,e,$r);const i=Ys(r.auth,n);return new vr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class vr extends nC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bj.get())};e()}}vr.currentPopupAction=null;/**
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
 */const Oj="pendingRedirect",$l=new Map;class Vj extends nC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await Lj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lj(t,e){const n=iC(e),r=rC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qy(t,e){return rC(t)._set(iC(e),"true")}function Mj(){$l.clear()}function Yy(t,e){$l.set(t._key(),e)}function rC(t){return cn(t._redirectPersistence)}function iC(t){return ws(Oj,t.config.apiKey,t.name)}/**
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
 */function Fj(t,e,n){return Uj(t,e,n)}async function Uj(t,e,n){if(qe(t.app))return Promise.reject(dt(t));const r=Ge(t);Na(t,e,$r),await r._initializationPromise;const i=Ys(r,n);return await Qy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function jj(t,e,n){return Bj(t,e,n)}async function Bj(t,e,n){const r=Y(t);if(Na(r.auth,e,$r),qe(r.auth.app))return Promise.reject(dt(r.auth));await r.auth._initializationPromise;const i=Ys(r.auth,n);await Qy(i,r.auth);const s=await sC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function $j(t,e,n){return zj(t,e,n)}async function zj(t,e,n){const r=Y(t);Na(r.auth,e,$r),await r.auth._initializationPromise;const i=Ys(r.auth,n);await pf(!1,r,e.providerId),await Qy(i,r.auth);const s=await sC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function qj(t,e){return await Ge(t)._initializationPromise,Ef(t,e,!1)}async function Ef(t,e,n=!1){if(qe(t.app))return Promise.reject(dt(t));const r=Ge(t),i=Ys(r,e),o=await new Vj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function sC(t){const e=ec(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Wj=10*60*1e3;class oC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wj&&this.cachedEventUids.clear(),this.cachedEventUids.has(oT(e))}saveEventToCache(e){this.cachedEventUids.add(oT(e)),this.lastProcessedEventTime=Date.now()}}function oT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aC(t);default:return!1}}/**
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
 */async function lC(t,e={}){return He(t,"GET","/v1/projects",e)}/**
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
 */const Kj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hj=/^https?/;async function Qj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lC(t);for(const n of e)try{if(Yj(n))return}catch{}ht(t,"unauthorized-domain")}function Yj(t){const e=Su(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hj.test(n))return!1;if(Kj.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Jj=new Qu(3e4,6e4);function aT(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xj(t){return new Promise((e,n)=>{var r,i,s;function o(){aT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{aT(),n(it(t,"network-request-failed"))},timeout:Jj.get()})}if(!((i=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=et().gapi)===null||s===void 0)&&s.load)o();else{const a=Dk("iframefcb");return et()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},Uy(`${z2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wd=null,e})}let wd=null;function Zj(t){return wd=wd||Xj(t),wd}/**
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
 */const eB=new Qu(5e3,15e3),tB="__/auth/iframe",nB="emulator/auth/iframe",rB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sB(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fy(e,nB):`https://${t.config.authDomain}/${tB}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},i=iB.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ia(r).slice(1)}`}async function oB(t){const e=await Zj(t),n=et().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:sB(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=et().setTimeout(()=>{s(o)},eB.get());function l(){et().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lB=500,uB=600,cB="_blank",dB="http://localhost";class lT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hB(t,e,n,r=lB,i=uB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aB),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ue().toLowerCase();n&&(a=Pk(c)?cB:n),Rk(c)&&(e=e||dB,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(D2(c)&&a!=="_self")return fB(e||"",a),new lT(null);const f=window.open(e||"",a,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new lT(f)}function fB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pB="__/auth/handler",mB="emulator/auth/handler",gB=encodeURIComponent("fac");async function mg(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:i};if(e instanceof $r){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Oa){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${gB}=${encodeURIComponent(l)}`:"";return`${_B(t)}?${Ia(a).slice(1)}${c}`}function _B({config:t}){return t.emulator?Fy(t,mB):`https://${t.authDomain}/${pB}`}/**
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
 */const Lp="webStorageSupport";class yB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=Ef,this._overrideRedirectResult=Yy}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mg(e,n,r,Su(),i);return hB(e,o,ec())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mg(e,n,r,Su(),i);return ej(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oB(e),r=new oC(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lp,{type:Lp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lp];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xk()||Ak()||Ju()}}const uC=yB;class vB{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Xn("unexpected MultiFactorSessionType")}}}class Jy extends vB{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Jy(e)}_finalizeEnroll(e,n,r){return KU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return cj(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class cC{constructor(){}static assertion(e){return Jy._fromCredential(e)}}cC.FACTOR_ID="phone";var uT="@firebase/auth",cT="1.7.9";/**
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
 */class wB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EB(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IB(t){xr(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nk(t)},c=new U2(r,i,s,l);return H2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new An("auth-internal",e=>{const n=Ge(e.getProvider("auth").getImmediate());return(r=>new wB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(uT,cT,EB(t)),hn(uT,cT,"esm2017")}/**
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
 */const TB=5*60,SB=xR("authIdTokenMaxAge")||TB;let dT=null;const RB=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SB)return;const i=n==null?void 0:n.token;dT!==i&&(dT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function AB(t=Bh()){const e=Ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=K2(t,{popupRedirectResolver:uC,persistence:[ga,_f,Di]}),r=xR("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RB(s.toString());zU(n,o,()=>o(n.currentUser)),$U(n,a=>o(a))}}const i=kR("auth");return i&&Ok(n,`http://${i}`),n}function PB(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}j2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PB().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IB("Browser");/**
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
 */function Fs(){return window}/**
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
 */const kB=2e3;async function CB(t,e,n){var r;const{BuildInfo:i}=Fs();Un(e.sessionId,"AuthEvent did not contain a session ID");const s=await OB(e.sessionId),o={};return Ju()?o.ibi=i.packageName:Yu()?o.apn=i.packageName:ht(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,mg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function bB(t){const{BuildInfo:e}=Fs(),n={};Ju()?n.iosBundleId=e.packageName:Yu()?n.androidPackageName=e.packageName:ht(t,"operation-not-supported-in-this-environment"),await lC(t,n)}function xB(t){const{cordova:e}=Fs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,N2()?"_blank":"_system","location=yes"),n(i)})})}async function NB(t,e,n){const{cordova:r}=Fs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(it(t,"redirect-cancelled-by-user"))},kB))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Yu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function DB(t){var e,n,r,i,s,o,a,l,c,d;const f=Fs();z(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function OB(t){const e=VB(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function VB(t){if(Un(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const LB=20;class MB extends oC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FB(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:BB(),postBody:null,tenantId:t.tenantId,error:it(t,"no-auth-event")}}function UB(t,e){return gg()._set(_g(t),e)}async function hT(t){const e=await gg()._get(_g(t));return e&&await gg()._remove(_g(t)),e}function jB(t,e){var n,r;const i=zB(e);if(i.includes("/__/auth/callback")){const s=Ed(i),o=s.firebaseError?$B(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?it(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function BB(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<LB;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function gg(){return cn(_f)}function _g(t){return ws("authEvent",t.config.apiKey,t.name)}function $B(t){try{return JSON.parse(t)}catch{return null}}function zB(t){const e=Ed(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ed(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ed(i).link||i||r||n||t}function Ed(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return xo(n.join("?"))}/**
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
 */const qB=500;class WB{constructor(){this._redirectPersistence=Di,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ef,this._overrideRedirectResult=Yy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new MB(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){DB(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Mj(),await this._originValidation(e);const o=FB(e,r,i);await UB(e,o);const a=await CB(e,o,n),l=await xB(a);return NB(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bB(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Fs(),o=setTimeout(async()=>{await hT(e),n.onEvent(fT())},qB),a=async d=>{clearTimeout(o);const f=await hT(e);let m=null;f&&(d!=null&&d.url)&&(m=jB(f,d.url)),n.onEvent(m||fT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Fs().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const GB=WB;function fT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:it("no-auth-event")}}/**
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
 */function KB(t,e){Ge(t)._logFramework(e)}var HB="@firebase/auth-compat",QB="0.5.14";/**
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
 */const YB=1e3;function zl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function JB(){return zl()==="http:"||zl()==="https:"}function dC(t=Ue()){return!!((zl()==="file:"||zl()==="ionic:"||zl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function XB(){return k_()||P_()}function ZB(){return VR()&&(document==null?void 0:document.documentMode)===11}function e4(t=Ue()){return/Edge\/\d+/.test(t)}function t4(t=Ue()){return ZB()||e4(t)}function hC(){try{const t=self.localStorage,e=ec();if(t)return t.setItem(e,"1"),t.removeItem(e),t4()?uu():!0}catch{return Xy()&&uu()}return!1}function Xy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Mp(){return(JB()||OR()||dC())&&!XB()&&hC()&&!Xy()}function fC(){return dC()&&typeof document<"u"}async function n4(){return fC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},YB);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function r4(){return typeof window<"u"?window:null}/**
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
 */const an={LOCAL:"local",NONE:"none",SESSION:"session"},hl=z,pC="persistence";function i4(t,e){if(hl(Object.values(an).includes(e),t,"invalid-persistence-type"),k_()){hl(e!==an.SESSION,t,"unsupported-persistence-type");return}if(P_()){hl(e===an.NONE,t,"unsupported-persistence-type");return}if(Xy()){hl(e===an.NONE||e===an.LOCAL&&uu(),t,"unsupported-persistence-type");return}hl(e===an.NONE||hC(),t,"unsupported-persistence-type")}async function yg(t){await t._initializationPromise;const e=mC(),n=ws(pC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function s4(t,e){const n=mC();if(!n)return[];const r=ws(pC,t,e);switch(n.getItem(r)){case an.NONE:return[pa];case an.LOCAL:return[ga,Di];case an.SESSION:return[Di];default:return[]}}function mC(){var t;try{return((t=r4())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const o4=z;class ci{constructor(){this.browserResolver=cn(uC),this.cordovaResolver=cn(GB),this.underlyingResolver=null,this._redirectPersistence=Di,this._completeRedirectFn=Ef,this._overrideRedirectResult=Yy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return fC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return o4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await n4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function gC(t){return t.unwrap()}function a4(t){return t.wrapped()}/**
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
 */function l4(t){return _C(t)}function u4(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new c4(t,WU(t,e))}else if(r){const i=_C(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function _C(t){const{_tokenResponse:e}=t instanceof Ct?t.customData:t;if(!e)return null;if(!(t instanceof Ct)&&"temporaryProof"in e&&"phoneNumber"in e)return Ms.credentialFromResult(t);const n=e.providerId;if(!n||n===dl.PASSWORD)return null;let r;switch(n){case dl.GOOGLE:r=Gn;break;case dl.FACEBOOK:r=Wn;break;case dl.GITHUB:r=Kn;break;case dl.TWITTER:r=Hn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ma._create(n,a):ar._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new $o(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Ct?r.credentialFromError(t):r.credentialFromResult(t)}function Ht(t,e){return e.catch(n=>{throw n instanceof Ct&&u4(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:l4(n),additionalUserInfo:BU(n),user:wr.getOrCreate(i)}})}async function vg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ht(t,n.confirm(r))}}class c4{constructor(e,n){this.resolver=n,this.auth=a4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ht(gC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class wr{constructor(e){this._delegate=e,this.multiFactor=QU(e)}static getOrCreate(e){return wr.USER_MAP.has(e)||wr.USER_MAP.set(e,new wr(e)),wr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ht(this.auth,$k(this._delegate,e))}async linkWithPhoneNumber(e,n){return vg(this.auth,Sj(this._delegate,e,n))}async linkWithPopup(e){return Ht(this.auth,Dj(this._delegate,e,ci))}async linkWithRedirect(e){return await yg(Ge(this.auth)),$j(this._delegate,e,ci)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ht(this.auth,zk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return vg(this.auth,Rj(this._delegate,e,n))}reauthenticateWithPopup(e){return Ht(this.auth,Nj(this._delegate,e,ci))}async reauthenticateWithRedirect(e){return await yg(Ge(this.auth)),jj(this._delegate,e,ci)}sendEmailVerification(e){return bU(this._delegate,e)}async unlink(e){return await yU(this._delegate,e),this}updateEmail(e){return OU(this._delegate,e)}updatePassword(e){return VU(this._delegate,e)}updatePhoneNumber(e){return Aj(this._delegate,e)}updateProfile(e){return DU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return xU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}wr.USER_MAP=new WeakMap;/**
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
 */const fl=z;class wg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;fl(r,"invalid-api-key",{appName:e.name}),fl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ci:void 0;this._delegate=n.initialize({options:{persistence:d4(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(d2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Ok(this._delegate,e,n)}applyActionCode(e){return TU(this._delegate,e)}checkActionCode(e){return qk(this._delegate,e)}confirmPasswordReset(e,n){return IU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ht(this._delegate,Wk(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return CU(this._delegate,e)}isSignInWithEmailLink(e){return AU(this._delegate,e)}async getRedirectResult(){fl(Mp(),this._delegate,"operation-not-supported-in-this-environment");const e=await qj(this._delegate,ci);return e?Ht(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){KB(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=pT(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=pT(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return RU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return EU(this._delegate,e,n||void 0)}async setPersistence(e){i4(this._delegate,e);let n;switch(e){case an.SESSION:n=Di;break;case an.LOCAL:n=await cn(ga)._isAvailable()?ga:_f;break;case an.NONE:n=pa;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ht(this._delegate,_U(this._delegate))}signInWithCredential(e){return Ht(this._delegate,mf(this._delegate,e))}signInWithCustomToken(e){return Ht(this._delegate,wU(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ht(this._delegate,Gk(this._delegate,e,n))}signInWithEmailLink(e,n){return Ht(this._delegate,PU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return vg(this._delegate,Tj(this._delegate,e,n))}async signInWithPopup(e){return fl(Mp(),this._delegate,"operation-not-supported-in-this-environment"),Ht(this._delegate,xj(this._delegate,e,ci))}async signInWithRedirect(e){return fl(Mp(),this._delegate,"operation-not-supported-in-this-environment"),await yg(this._delegate),Fj(this._delegate,e,ci)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return SU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wg.Persistence=an;function pT(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&wr.getOrCreate(o)),error:e,complete:n}}function d4(t,e){const n=s4(t,e);if(typeof self<"u"&&!n.includes(ga)&&n.push(ga),typeof window<"u")for(const r of[_f,Di])n.includes(r)||n.push(r);return n.includes(pa)||n.push(pa),n}/**
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
 */class Zy{constructor(){this.providerId="phone",this._delegate=new Ms(gC(Qs.auth()))}static credential(e,n){return Ms.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Zy.PHONE_SIGN_IN_METHOD=Ms.PHONE_SIGN_IN_METHOD;Zy.PROVIDER_ID=Ms.PROVIDER_ID;/**
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
 */const h4=z;class f4{constructor(e,n,r=Qs.app()){var i;h4((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Ej(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const p4="auth-compat";function m4(t){t.INTERNAL.registerComponent(new An(p4,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:co.EMAIL_SIGNIN,PASSWORD_RESET:co.PASSWORD_RESET,RECOVER_EMAIL:co.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:co.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:co.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:co.VERIFY_EMAIL}},EmailAuthProvider:Bi,FacebookAuthProvider:Wn,GithubAuthProvider:Kn,GoogleAuthProvider:Gn,OAuthProvider:$o,SAMLAuthProvider:fh,PhoneAuthProvider:Zy,PhoneMultiFactorGenerator:cC,RecaptchaVerifier:f4,TwitterAuthProvider:Hn,Auth:wg,AuthCredential:Da,Error:Ct}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(HB,QB)}m4(Qs);const g4="@firebase/firestore-compat",_4="0.3.38";/**
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
 */function ev(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new j("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function mT(){if(typeof Uint8Array>"u")throw new j("unimplemented","Uint8Arrays are not available in this environment.")}function gT(){if(!UV())throw new j("unimplemented","Blobs are unavailable in Firestore in this environment.")}let yC=class Eg{constructor(e){this._delegate=e}static fromBase64String(e){return gT(),new Eg(or.fromBase64String(e))}static fromUint8Array(e){return mT(),new Eg(or.fromUint8Array(e))}toBase64(){return gT(),this._delegate.toBase64()}toUint8Array(){return mT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Ig(t){return y4(t,["next","error","complete"])}function y4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class v4{enableIndexedDbPersistence(e,n){return yF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return vF(e._delegate)}clearIndexedDbPersistence(e){return wF(e._delegate)}}class vC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Pi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&ir("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){KP(this._delegate,e,n,r)}enableNetwork(){return IF(this._delegate)}disableNetwork(){return TF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,WP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return EF(this._delegate)}onSnapshotsInSync(e){return WF(this._delegate,e)}get app(){if(!this._appCompat)throw new j("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _a(this,ch(this._delegate,e))}catch(n){throw Mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new wn(this,fa(this._delegate,e))}catch(n){throw Mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,pF(this._delegate,e))}catch(n){throw Mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return QF(this._delegate,n=>e(new wC(this,n)))}batch(){return xt(this._delegate),new EC(new KF(this._delegate,e=>Hu(this._delegate,e)))}loadBundle(e){return SF(this._delegate,e)}namedQuery(e){return RF(this._delegate,e).then(n=>n?new Lt(this,n):null)}}class If extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new yC(new or(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return wn.forKey(n,this.firestore,null)}}function w4(t){sV(t)}class wC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new If(e)}get(e){const n=ms(e);return this._delegate.get(n).then(r=>new ku(this._firestore,new Dr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ms(e);return r?(ev("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ms(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ms(e);return this._delegate.delete(n),this}}class EC{constructor(e){this._delegate=e}set(e,n,r){const i=ms(e);return r?(ev("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ms(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ms(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Us{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new jl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Cu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Us.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Us(e,new If(e),n),i.set(n,s)),s}}Us.INSTANCES=new WeakMap;class wn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new If(e)}static forPath(e,n,r){if(e.length%2!==0)throw new j("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new wn(n,new Le(n._delegate,r,new G(e)))}static forKey(e,n,r){return new wn(n,new Le(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _a(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _a(this.firestore,ch(this._delegate,e))}catch(n){throw Mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Le?JP(this._delegate,e):!1}set(e,n){n=ev("DocumentReference.set",n);try{return n?WI(this._delegate,e,n):WI(this._delegate,e)}catch(r){throw Mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?hg(this._delegate,e):hg(this._delegate,e,n,...r)}catch(i){throw Mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return fk(this._delegate)}onSnapshot(...e){const n=IC(e),r=TC(e,i=>new ku(this.firestore,new Dr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return mk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=BF(this._delegate):(e==null?void 0:e.source)==="server"?n=$F(this._delegate):n=jF(this._delegate),n.then(r=>new ku(this.firestore,new Dr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new wn(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mt(t,e,n){return t.message=t.message.replace(e,n),t}function IC(t){for(const e of t)if(typeof e=="object"&&!Ig(e))return e;return{}}function TC(t,e){var n,r;let i;return Ig(t[0])?i=t[0]:Ig(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ku{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new wn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return dk(this._delegate,e._delegate)}}class Cu extends ku{data(e){const n=this._delegate.data(e);return this._delegate._converter||oV(n!==void 0),n}}class Lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new If(e)}where(e,n,r){try{return new Lt(this.firestore,hr(this._delegate,dg(e,n,r)))}catch(i){throw Mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Lt(this.firestore,hr(this._delegate,xF(e,n)))}catch(r){throw Mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,hr(this._delegate,NF(e)))}catch(n){throw Mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,hr(this._delegate,DF(e)))}catch(n){throw Mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,hr(this._delegate,OF(...e)))}catch(n){throw Mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,hr(this._delegate,VF(...e)))}catch(n){throw Mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,hr(this._delegate,LF(...e)))}catch(n){throw Mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,hr(this._delegate,MF(...e)))}catch(n){throw Mt(n,"endAt()","Query.endAt()")}}isEqual(e){return XP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=zF(this._delegate):(e==null?void 0:e.source)==="server"?n=qF(this._delegate):n=hk(this._delegate),n.then(r=>new Tg(this.firestore,new Ni(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=IC(e),r=TC(e,i=>new Tg(this.firestore,new Ni(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return mk(this._delegate,n,r)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class E4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Cu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Tg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Cu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new E4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Cu(this._firestore,r))})}isEqual(e){return dk(this._delegate,e._delegate)}}class _a extends Lt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new wn(this.firestore,e):null}doc(e){try{return e===void 0?new wn(this.firestore,fa(this._delegate)):new wn(this.firestore,fa(this._delegate,e))}catch(n){throw Mt(n,"doc()","CollectionReference.doc()")}}add(e){return pk(this._delegate,e).then(n=>new wn(this.firestore,n))}isEqual(e){return JP(this._delegate,e._delegate)}withConverter(e){return new _a(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ms(t){return fe(t,Le)}/**
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
 */class tv{constructor(...e){this._delegate=new xi(...e)}static documentId(){return new tv(xe.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof xi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class us{constructor(e){this._delegate=e}static serverTimestamp(){const e=JF();return e._methodName="FieldValue.serverTimestamp",new us(e)}static delete(){const e=YF();return e._methodName="FieldValue.delete",new us(e)}static arrayUnion(...e){const n=XF(...e);return n._methodName="FieldValue.arrayUnion",new us(n)}static arrayRemove(...e){const n=ZF(...e);return n._methodName="FieldValue.arrayRemove",new us(n)}static increment(e){const n=e2(e);return n._methodName="FieldValue.increment",new us(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const I4={Firestore:vC,GeoPoint:tf,Timestamp:De,Blob:yC,Transaction:wC,WriteBatch:EC,DocumentReference:wn,DocumentSnapshot:ku,Query:Lt,QueryDocumentSnapshot:Cu,QuerySnapshot:Tg,CollectionReference:_a,FieldPath:tv,FieldValue:us,setLogLevel:w4,CACHE_SIZE_UNLIMITED:gF};function T4(t,e){t.INTERNAL.registerComponent(new An("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},I4)))}/**
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
 */function S4(t){T4(t,(e,n)=>new vC(e,n,new v4)),t.registerVersion(g4,_4)}S4(Qs);/**
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
 */const SC="firebasestorage.googleapis.com",RC="storageBucket",R4=2*60*1e3,A4=10*60*1e3,P4=1e3;/**
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
 */class je extends Ct{constructor(e,n,r=0){super(Fp(e),`Firebase Storage: ${n} (${Fp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Fp(t){return"storage/"+t}function nv(){const t="An unknown error occurred, please check the error payload for server response.";return new je(ke.UNKNOWN,t)}function k4(t){return new je(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function C4(t){return new je(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(ke.UNAUTHENTICATED,t)}function x4(){return new je(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function N4(t){return new je(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function AC(){return new je(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PC(){return new je(ke.CANCELED,"User canceled the upload/download.")}function D4(t){return new je(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function O4(t){return new je(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function V4(){return new je(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+RC+"' property when initializing the app?")}function kC(){return new je(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function L4(){return new je(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function M4(){return new je(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function F4(t){return new je(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qo(t){return new je(ke.INVALID_ARGUMENT,t)}function CC(){return new je(ke.APP_DELETED,"The Firebase app was deleted.")}function bC(t){return new je(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ql(t,e){return new je(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function pl(t){throw new je(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw O4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},P=n===SC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",I=new RegExp(`^https?://${P}/${i}/${x}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:_,indices:S,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<E.length;b++){const F=E[b],U=F.regex.exec(e);if(U){const w=U[F.indices.bucket];let y=U[F.indices.path];y||(y=""),r=new kt(w,y),F.postModify(r);break}}if(r==null)throw D4(e);return r}}class U4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function j4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...x){c||(c=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,t(_,l())},x)}function m(){s&&clearTimeout(s)}function _(x,...I){if(c){m();return}if(x){m(),d.call(null,x,...I);return}if(l()||o){m(),d.call(null,x,...I);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let S=!1;function P(x){S||(S=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function B4(t){t(!1)}/**
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
 */function $4(t){return t!==void 0}function z4(t){return typeof t=="function"}function q4(t){return typeof t=="object"&&!Array.isArray(t)}function Tf(t){return typeof t=="string"||t instanceof String}function _T(t){return rv()&&t instanceof Blob}function rv(){return typeof Blob<"u"}function Sg(t,e,n,r){if(r<e)throw qo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $i(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Is||(Is={}));/**
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
 */function NC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class W4{constructor(e,n,r,i,s,o,a,l,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Hc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Is.NO_ERROR,l=s.getStatus();if(!a||NC(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Is.ABORT;r(!1,new Hc(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Hc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());$4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=nv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?CC():PC();o(l)}else{const l=AC();o(l)}};this.canceled_?n(!1,new Hc(!1,null,!0)):this.backoffId_=j4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&B4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function G4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function K4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Y4(t,e,n,r,i,s,o=!0){const a=xC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return H4(c,e),G4(c,n),K4(c,s),Q4(c,r),new W4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function J4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function X4(...t){const e=J4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rv())return new Blob(t);throw new je(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Z4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function e$(t){if(typeof atob>"u")throw F4("base-64");return atob(t)}/**
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
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Up{constructor(e,n){this.data=e,this.contentType=n||null}}function DC(t,e){switch(t){case En.RAW:return new Up(OC(e));case En.BASE64:case En.BASE64URL:return new Up(VC(t,e));case En.DATA_URL:return new Up(n$(e),r$(e))}throw nv()}function OC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function t$(t){let e;try{e=decodeURIComponent(t)}catch{throw ql(En.DATA_URL,"Malformed data URL.")}return OC(e)}function VC(t,e){switch(t){case En.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ql(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ql(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=e$(e)}catch(i){throw i.message.includes("polyfill")?i:ql(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class LC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ql(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=i$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function n$(t){const e=new LC(t);return e.base64?VC(En.BASE64,e.rest):t$(e.rest)}function r$(t){return new LC(t).contentType}function i$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Qn{constructor(e,n){let r=0,i="";_T(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(_T(this.data_)){const r=this.data_,i=Z4(r,e,n);return i===null?null:new Qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qn(r,!0)}}static getBlob(...e){if(rv()){const n=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(X4.apply(null,n))}else{const n=e.map(o=>Tf(o)?DC(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function iv(t){let e;try{e=JSON.parse(t)}catch{return null}return q4(e)?e:null}/**
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
 */function s$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function MC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function a$(t,e){return e}class Ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||a$}}let Qc=null;function l$(t){return!Tf(t)||t.length<2?t:MC(t)}function nc(){if(Qc)return Qc;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(s,o){return l$(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ot("size");return i.xform=r,t.push(i),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),Qc=t,Qc}function u$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function c$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return u$(r,t),r}function FC(t,e,n){const r=iv(e);return r===null?null:c$(t,r,n)}function d$(t,e,n,r){const i=iv(e);if(i===null||!Tf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=$i(m,n,r),S=xC({alt:"media",token:c});return _+S})[0]}function sv(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const yT="prefixes",vT="items";function h$(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[yT])for(const i of n[yT]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new kt(e,s));r.prefixes.push(o)}if(n[vT])for(const i of n[vT]){const s=t._makeStorageReference(new kt(e,i.name));r.items.push(s)}return r}function f$(t,e,n){const r=iv(n);return r===null?null:h$(t,e,r)}class zr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rr(t){if(!t)throw nv()}function Sf(t,e){function n(r,i){const s=FC(t,i,e);return rr(s!==null),s}return n}function p$(t,e){function n(r,i){const s=f$(t,e,i);return rr(s!==null),s}return n}function m$(t,e){function n(r,i){const s=FC(t,i,e);return rr(s!==null),d$(s,i,t.host,t._protocol)}return n}function Va(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=x4():i=b4():n.getStatus()===402?i=C4(t.bucket):n.getStatus()===403?i=N4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Rf(t){const e=Va(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=k4(t.path)),s.serverResponse=i.serverResponse,s}return n}function UC(t,e,n){const r=e.fullServerUrl(),i=$i(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new zr(i,s,Sf(t,n),o);return a.errorHandler=Rf(e),a}function g$(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=$i(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new zr(a,l,p$(t,e.bucket),c);return d.urlParams=s,d.errorHandler=Va(e),d}function _$(t,e,n){const r=e.fullServerUrl(),i=$i(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new zr(i,s,m$(t,n),o);return a.errorHandler=Rf(e),a}function y$(t,e,n,r){const i=e.fullServerUrl(),s=$i(i,t.host,t._protocol),o="PATCH",a=sv(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new zr(s,o,Sf(t,r),c);return d.headers=l,d.body=a,d.errorHandler=Rf(e),d}function v$(t,e){const n=e.fullServerUrl(),r=$i(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new zr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Rf(e),a}function w$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=w$(null,e)),r}function BC(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let b=0;b<2;b++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=jC(e,r,i),d=sv(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Qn.getBlob(f,r,m);if(_===null)throw kC();const S={name:c.fullPath},P=$i(s,t.host,t._protocol),x="POST",I=t.maxUploadRetryTime,v=new zr(P,x,Sf(t,n),I);return v.urlParams=S,v.headers=o,v.body=_.uploadData(),v.errorHandler=Va(e),v}class _h{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function ov(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{rr(!1)}return rr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function E$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jC(e,r,i),a={name:o.fullPath},l=$i(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=sv(o,n),m=t.maxUploadRetryTime;function _(P){ov(P);let x;try{x=P.getResponseHeader("X-Goog-Upload-URL")}catch{rr(!1)}return rr(Tf(x)),x}const S=new zr(l,c,_,m);return S.urlParams=a,S.headers=d,S.body=f,S.errorHandler=Va(e),S}function I$(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=ov(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{rr(!1)}f||rr(!1);const m=Number(f);return rr(!isNaN(m)),new _h(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new zr(n,o,s,a);return l.headers=i,l.errorHandler=Va(e),l}const wT=256*1024;function T$(t,e,n,r,i,s,o,a){const l=new _h(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw L4();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const f=l.current,m=f+d;let _="";d===0?_="finalize":c===d?_="upload, finalize":_="upload";const S={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(f,m);if(P===null)throw kC();function x(b,F){const U=ov(b,["active","final"]),w=l.current+d,y=r.size();let T;return U==="final"?T=Sf(e,s)(b,F):T=null,new _h(w,y,U==="final",T)}const I="POST",v=e.maxUploadRetryTime,E=new zr(n,I,x,v);return E.headers=S,E.body=P.uploadData(),E.progressCallback=a||null,E.errorHandler=Va(t),E}/**
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
 */const S$={STATE_CHANGED:"state_changed"},Ft={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function jp(t){switch(t){case"running":case"pausing":case"canceling":return Ft.RUNNING;case"paused":return Ft.PAUSED;case"success":return Ft.SUCCESS;case"canceled":return Ft.CANCELED;case"error":return Ft.ERROR;default:return Ft.ERROR}}/**
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
 */class R${constructor(e,n,r){if(z4(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function ho(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class A${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw pl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class P$ extends A${initXhr(){this.xhr_.responseType="text"}}function Vn(){return new P$}/**
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
 */class $C{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=nc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(NC(i.status,[]))if(s)i=AC();else{this.sleepTime=Math.max(this.sleepTime*2,P4),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=E$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=I$(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Vn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=wT*this._chunkMultiplier,n=new _h(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=T$(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){wT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=UC(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=BC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=PC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=jp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new R$(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(jp(this._state)){case Ft.SUCCESS:ho(this._resolve.bind(null,this.snapshot))();break;case Ft.CANCELED:case Ft.ERROR:const n=this._reject;ho(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(jp(this._state)){case Ft.RUNNING:case Ft.PAUSED:e.next&&ho(e.next.bind(e,this.snapshot))();break;case Ft.SUCCESS:e.complete&&ho(e.complete.bind(e))();break;case Ft.CANCELED:case Ft.ERROR:e.error&&ho(e.error.bind(e,this._error))();break;default:e.error&&ho(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class js{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MC(this._location.path)}get storage(){return this._service}get parent(){const e=s$(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bC(e)}}function k$(t,e,n){t._throwIfRoot("uploadBytes");const r=BC(t.storage,t._location,nc(),new Qn(e,!0),n);return t.storage.makeRequestWithTokens(r,Vn).then(i=>({metadata:i,ref:t}))}function C$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new $C(t,new Qn(e),n)}function b$(t){const e={prefixes:[],items:[]};return zC(t,e).then(()=>e)}async function zC(t,e,n){const i=await qC(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await zC(t,e,i.nextPageToken)}function qC(t,e){e!=null&&typeof e.maxResults=="number"&&Sg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=g$(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Vn)}function x$(t){t._throwIfRoot("getMetadata");const e=UC(t.storage,t._location,nc());return t.storage.makeRequestWithTokens(e,Vn)}function N$(t,e){t._throwIfRoot("updateMetadata");const n=y$(t.storage,t._location,e,nc());return t.storage.makeRequestWithTokens(n,Vn)}function D$(t){t._throwIfRoot("getDownloadURL");const e=_$(t.storage,t._location,nc());return t.storage.makeRequestWithTokens(e,Vn).then(n=>{if(n===null)throw M4();return n})}function O$(t){t._throwIfRoot("deleteObject");const e=v$(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Vn)}function WC(t,e){const n=o$(t._location.path,e),r=new kt(t._location.bucket,n);return new js(t.storage,r)}/**
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
 */function V$(t){return/^[A-Za-z]+:\/\//.test(t)}function L$(t,e){return new js(t,e)}function GC(t,e){if(t instanceof av){const n=t;if(n._bucket==null)throw V4();const r=new js(n,n._bucket);return e!=null?GC(r,e):r}else return e!==void 0?WC(t,e):t}function M$(t,e){if(e&&V$(e)){if(t instanceof av)return L$(t,e);throw qo("To use ref(service, url), the first argument must be a Storage instance.")}else return GC(t,e)}function ET(t,e){const n=e==null?void 0:e[RC];return n==null?null:kt.makeFromBucketSpec(n,t)}function F$(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:NR(i,t.app.options.projectId))}class av{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=SC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=R4,this._maxUploadRetryTime=A4,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=ET(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=ET(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new U4(CC());{const o=Y4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const IT="@firebase/storage",TT="0.13.2";/**
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
 */const KC="storage";function U$(t,e,n){return t=Y(t),k$(t,e,n)}function j$(t,e,n){return t=Y(t),C$(t,e,n)}function B$(t){return t=Y(t),x$(t)}function $$(t,e){return t=Y(t),N$(t,e)}function z$(t,e){return t=Y(t),qC(t,e)}function q$(t){return t=Y(t),b$(t)}function HC(t){return t=Y(t),D$(t)}function QC(t){return t=Y(t),O$(t)}function yh(t,e){return t=Y(t),M$(t,e)}function W$(t,e){return WC(t,e)}function G$(t=Bh(),e){t=Y(t);const r=Ta(t,KC).getImmediate({identifier:e}),i=CR("storage");return i&&YC(r,...i),r}function YC(t,e,n,r={}){F$(t,e,n,r)}function K$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new av(n,r,i,e,Mr)}function H$(){xr(new An(KC,K$,"PUBLIC").setMultipleInstances(!0)),hn(IT,TT,""),hn(IT,TT,"esm2017")}H$();/**
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
 */class Yc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class ST{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Yc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Yc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Yc(o,this,this._ref)):s={next:n.next?o=>n.next(new Yc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class RT{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Sr(e,this._service))}get items(){return this._delegate.items.map(e=>new Sr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=W$(this._delegate,e);return new Sr(n,this.storage)}get root(){return new Sr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Sr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new ST(j$(this._delegate,e,n),this)}putString(e,n=En.RAW,r){this._throwIfRoot("putString");const i=DC(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new ST(new $C(this._delegate,new Qn(i.data,!0),s),this)}listAll(){return q$(this._delegate).then(e=>new RT(e,this.storage))}list(e){return z$(this._delegate,e||void 0).then(n=>new RT(n,this.storage))}getMetadata(){return B$(this._delegate)}updateMetadata(e){return $$(this._delegate,e)}getDownloadURL(){return HC(this._delegate)}delete(){return this._throwIfRoot("delete"),QC(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw bC(e)}}/**
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
 */class JC{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(AT(e))throw qo("ref() expected a child path but got a URL, use refFromURL instead.");return new Sr(yh(this._delegate,e),this)}refFromURL(e){if(!AT(e))throw qo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{kt.makeFromUrl(e,this._delegate.host)}catch{throw qo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Sr(yh(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){YC(this._delegate,e,n,r)}}function AT(t){return/^[A-Za-z]+:\/\//.test(t)}const Q$="@firebase/storage-compat",Y$="0.3.12";/**
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
 */const J$="storage-compat";function X$(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new JC(n,r)}function Z$(t){const e={TaskState:Ft,TaskEvent:S$,StringFormat:En,Storage:JC,Reference:Sr};t.INTERNAL.registerComponent(new An(J$,X$,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Q$,Y$)}Z$(Qs);const lv=Qs.initializeApp({apiKey:"AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",authDomain:"scopic-73416.firebaseapp.com",projectId:"scopic-73416",storageBucket:"scopic-73416.appspot.com",messagingSenderId:"475263107333",appId:"1:475263107333:web:27180a036864e16618376c"}),uv=AB(lv),Jc=_F(lv),PT=G$(lv),Af=O.createContext(),ez=t=>{const[e,n]=O.useState([]),r=hr(ch(Jc,"inventario"),dg("email","==",localStorage.getItem("userEmailLS")),dg("sucursal","==","Hermosillo")),i=ch(Jc,"inventario"),[s,o]=O.useState(!0);O.useEffect(()=>{hk(r).then(d=>{d.size===0&&console.log("No results!");const f=d.docs.map(m=>({id:m.id,...m.data()}));n(f)}).catch(d=>{console.log("Error searching items",d)})},[s]);const a=(d,f)=>{const m=yh(PT,`projectFiles/${d==null?void 0:d.name}`);U$(m,d).then(()=>{HC(m).then(_=>{f.imgName=d.name,f.imgUrl=_,pk(i,f),o(!s)})}).catch(_=>console.log(_))},l=async(d,f)=>{const m=fa(Jc,"inventario",d);try{await fk(m);const _=yh(PT,`projectFiles/${f}`);QC(_).then(()=>{console.log(f,"se elimino de Storage")}).catch(S=>{console.log("ocurrio un error: ",S)})}catch(_){console.error(_)}},c=async(d,f)=>{const m=fa(Jc,"inventario",d);try{await hg(m,f)}catch(_){console.error(_)}};return k.jsx(Af.Provider,{value:{items:e,deleteById:l,UpdateById:c,handleFileAdd:a,postCollection:i,setToggle:o,toggle:s},children:t.children})},tz=({setAuction:t})=>{const{handleFileAdd:e}=O.useContext(Af),[n,r]=O.useState(),i=E=>new Promise(b=>{CD.imageFileResizer(E,600,600,"JPEG",120,0,F=>{b(F)},"base64")}),s=async E=>{const b=E.target.files[0],F=await i(b);fetch(F).then(U=>U.blob()).then(U=>{const w=new File([U],Date.now()+".jpeg",{type:"image/jpeg"});r(w)})},[o,a]=O.useState(!1),[l,c]=O.useState(""),d=O.useRef(),f=O.useRef(),m=O.useRef(),_=O.useRef(),S=O.useRef(),P=()=>a(!0),x=()=>a(!1),I=["image/png","image/jpeg","image/jpg"],v=async E=>{var w;if(E.preventDefault(),c(""),!I.includes((w=_.current)==null?void 0:w.files[0].type))return c("por favor use una imagen valida (png, jpeg, jpg)");let b=new Date,F=b.setHours(b.getHours()),U={email:localStorage.getItem("userEmailLS"),name:d.current.value,category:f.current.value,price:Number(m.current.value),duration:F,description:S.current.value};e(n,U),x()};return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"col d-flex justify-content-center my-3 ",children:k.jsx("div",{onClick:P,className:"btn btn-primary mx-5",children:"CREAR INFORME"})}),k.jsx(ln,{centered:!0,show:o,onHide:x,style:{width:"96%",marginLeft:"1%"},children:k.jsxs("form",{onSubmit:v,style:{backgroundColor:"rgb(222,222,222)"},children:[k.jsxs(ln.Body,{children:[l&&k.jsx(sR,{variant:"danger",children:l}),k.jsx(ts,{children:k.jsx(ei,{className:"border mb-5 btn bg-primary mx-2 p-2 text-center text-white",children:localStorage.getItem("userEmailLS")})}),k.jsx(ts,{children:k.jsxs(ei,{children:[k.jsx(ge.Label,{children:"Imagen"}),k.jsx(ge.Group,{children:k.jsx(ge.Control,{type:"file",label:"Cargar Foto",required:!0,ref:_,onChange:s})})]})}),k.jsx("hr",{}),k.jsx(ts,{children:k.jsx(ei,{children:k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Nombre"}),k.jsx(ge.Control,{type:"text",required:!0,ref:d})]})})}),k.jsx("hr",{}),k.jsx(ts,{children:k.jsxs(ei,{className:"mb-2",children:[k.jsx(ge.Label,{children:"Categoria"}),k.jsxs(ge.Control,{as:"select",multiple:!1,ref:f,children:[k.jsx("option",{value:"Sala",children:"Sala"}),k.jsx("option",{value:"Recamara",children:"Recamara"}),k.jsx("option",{value:"Comedor",children:"Comedor"}),k.jsx("option",{value:"Decoracion",children:"Decoracion"})]})]})}),k.jsx("hr",{}),k.jsx(ts,{children:k.jsx(ei,{children:k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"precio"}),k.jsx(ge.Control,{type:"number",required:!0,ref:m})]})})}),k.jsx("hr",{}),k.jsx(ts,{children:k.jsx(ei,{children:k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Descripcion"}),k.jsx(ge.Control,{type:"text",required:!0,ref:S})]})})})]}),k.jsxs(ln.Footer,{children:[k.jsx(ks,{variant:"secondary",onClick:x,children:"Cancelar"}),k.jsx(ks,{variant:"primary",disabled:!1,type:"submit",children:"Guardar"})]})]})})]})},nz=({item:t})=>{const e=new Intl.DateTimeFormat("es-MX",{dateStyle:"long",timeStyle:"short"}),n=a=>e.format(new Date(a)),{deleteById:r,setToggle:i,toggle:s}=O.useContext(Af);function o(){let c=qrcode(4,"L");return c.addData(`https://xiperafa.github.io/adminPolancoMuebles/${t.id}`),c.make(),k.jsx("div",{dangerouslySetInnerHTML:{__html:c.createImgTag()}})}return k.jsxs("div",{className:"card shadow-sm ",children:[k.jsx("div",{style:{height:"180px",backgroundImage:`url(${t.imgUrl})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),k.jsxs("div",{className:"card-body p-4 ",children:[k.jsxs("p",{children:[" ",n(t.duration),"  "]}),k.jsx("hr",{}),t.id,k.jsx("hr",{}),k.jsxs("p",{children:["Nombre: ",k.jsx("span",{children:t.name})]}),k.jsx("hr",{}),k.jsxs("p",{children:["categoria: ",k.jsx("span",{children:t.category})]}),k.jsx("hr",{}),k.jsxs("p",{children:[" Descripción ",k.jsx("span",{children:t.description})]}),k.jsx("hr",{}),k.jsxs("p",{children:[" Precio: ",k.jsxs("span",{children:[t.price," $ "]})]}),k.jsx("hr",{}),k.jsxs("div",{className:"btnBorrarInforme",children:[k.jsx("button",{className:"btn btn-danger mb-2 mt-2",onClick:()=>{window.confirm(`Quiere Borrar este Documento? ${t.name}`)&&(r(t.id,t.imgName),i(!s))},children:"Borrar"}),k.jsx(o,{})]})]})]})},rc=O.createContext(),rz=t=>{const e=async(o,a,l)=>{try{await Wk(o,a,l),i(o,a,l)}catch(c){console.error("code.error",c.code);const d={"auth/email-already-in-use":()=>alert("El Correo ya esta en Uso"),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/weak-password":()=>alert("La contraseña es muy débil."),"auth/invalid-email":()=>alert("El Correo No es Valido")};(m=>{d[m]()})(c.code)}},[n,r]=O.useState(!0),i=(o,a,l)=>{Gk(o,a,l).then(c=>{const d=c.user;localStorage.setItem("userEmailLS",d.email),r(!n),location.reload()}).catch(c=>{console.log(c.code),console.log(c.message),c.code=="auth/invalid-credential"&&alert("Contraseña o Correo son Incorrrectos")})},s=()=>{qU(uv),localStorage.removeItem("userEmailLS"),r(!n)};return k.jsx(rc.Provider,{value:{register:e,login:i,logout:s,stateLogout:n},children:t.children})},iz=()=>{const{items:t}=O.useContext(Af),{stateLogout:e}=O.useContext(rc);console.log(t);const[n,r]=O.useState(0);let i=20;const[s,o]=O.useState("");return O.useState(!0),k.jsxs("div",{className:"",children:[localStorage.getItem("userEmailLS")!==null&&k.jsx(tz,{}),e?k.jsx("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1",children:t.sort((a,l)=>l.duration-a.duration).slice(n,n+i).map((a,l)=>k.jsx(nz,{item:a},l))}):"",k.jsxs("div",{className:"sliceButtons",children:[k.jsx("button",{className:n===0?"d-none":"button",onClick:()=>{n>0&&(r(n-i),window.scrollTo(0,0))},children:"⇦ Anterior"}),k.jsx("button",{className:n===i||n===0?"d-none":"button",onClick:()=>{r(0),window.scrollTo(0,0)},children:"０"}),k.jsx("button",{className:"button",onClick:()=>{t.length>n+i?(r(n+i),window.scrollTo(0,0)):(o(" No hay mas Productos en esta Lista"),setTimeout(()=>{o("")},2500))},children:"Siguiente ⇨"}),k.jsx("span",{className:"sliceAlert",children:s}),k.jsxs("p",{className:"sliceButtonsP",children:["De: ",n+1," a: ",t.length>n+i?n+i:t.length]}),k.jsxs("p",{className:"sliceButtonsP",children:["Paginas de ",i," Prod. c/u "]})]})]})},sz=()=>{const{login:t}=O.useContext(rc),[e,n]=O.useState(!1),r=O.useRef(),i=O.useRef(),s=()=>n(!0),o=()=>n(!1),a=l=>{l.preventDefault(),localStorage.removeItem("Done"),t(uv,r.current.value,i.current.value),o()};return k.jsxs(k.Fragment,{children:[k.jsx("div",{onClick:s,className:"btn btn-outline-secondary mx-2",children:"Entrar"}),k.jsx(ln,{centered:!0,show:e,onHide:o,children:k.jsxs("form",{onSubmit:a,children:[k.jsx(ln.Header,{children:k.jsx(ln.Title,{children:"Entrar"})}),k.jsxs(ln.Body,{children:[k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Email "}),k.jsx(ge.Control,{type:"email",required:!0,ref:r})]}),k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Password"}),k.jsx(ge.Control,{type:"password",required:!0,ref:i})]})]}),k.jsxs(ln.Footer,{children:[k.jsx(ks,{variant:"secondary",onClick:o,children:" Cancelar "}),k.jsx(ks,{variant:"primary",type:"submit",children:"         Entrar "})]})]})})]})},oz=()=>{const{register:t}=O.useContext(rc),[e,n]=O.useState(!1),[r,i]=O.useState(""),s=O.useRef(),o=O.useRef(),a=O.useRef(),l=()=>n(!0),c=()=>{i(""),n(!1)},d=async f=>{if(f.preventDefault(),i(""),o.current.value!==a.current.value)return i("Claves No son iguales.");if(o.current.value.length<6)return i("Claves es muy corta Use 6 caracteres Minimo");t(uv,s.current.value,o.current.value),c()};return k.jsxs(k.Fragment,{children:[k.jsx("div",{onClick:l,className:"btn btn-outline-secondary mx-2",children:"Registro"}),k.jsx(ln,{centered:!0,show:e,onHide:c,children:k.jsxs("form",{onSubmit:d,children:[k.jsx(ln.Header,{children:k.jsx(ln.Title,{children:"Registro"})}),k.jsxs(ln.Body,{children:[r&&k.jsx(sR,{variant:"danger",children:r}),k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Email"}),k.jsx(ge.Control,{type:"email",required:!0,ref:s})]}),k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Password"}),k.jsx(ge.Control,{type:"password",required:!0,ref:o})]}),k.jsxs(ge.Group,{children:[k.jsx(ge.Label,{children:"Confirmar Password"}),k.jsx(ge.Control,{type:"password",required:!0,ref:a})]})]}),k.jsxs(ln.Footer,{children:[k.jsx(ks,{variant:"secondary",onClick:c,children:" Cancelar "}),k.jsx(ks,{variant:"primary",type:"submit",children:" Registro "})]})]})})]})},az=()=>{const{logout:t,stateLogout:e}=O.useContext(rc);return k.jsxs("nav",{className:"container navbar navbar-light",children:[k.jsx("div",{className:"w-100 d-flex justify-content-center",children:k.jsx("div",{className:"navbar-brand mb-4",children:k.jsx("h3",{style:{fontStyle:"oblique",fontFamily:"serif"},children:"Polanco Muebles"})})}),k.jsx("div",{className:"w-100 d-flex justify-content-center",children:k.jsx("div",{className:"mb-4",children:localStorage.getItem("userEmailLS")!==null?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"btn btn-secondary mx-2 disabled",children:k.jsx("b",{children:"INVENTARIO MUEBLES"})}),k.jsx("div",{onClick:()=>{window.confirm("Quieres Salir?")&&t()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):k.jsxs(k.Fragment,{children:[k.jsx(sz,{}),k.jsx(oz,{})]})})})]})},lz=()=>k.jsx(k.Fragment,{children:k.jsx(rz,{children:k.jsxs(ez,{children:[k.jsx(az,{}),k.jsx(iz,{})]})})});Bp.createRoot(document.getElementById("root")).render(k.jsx(oi.StrictMode,{children:k.jsx(lz,{})}));
