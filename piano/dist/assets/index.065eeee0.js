(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function H0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var No={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),W0=Symbol.for("react.portal"),j0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),dh=Symbol.iterator;function ev(n){return n===null||typeof n!="object"?null:(n=dh&&n[dh]||n["@@iterator"],typeof n=="function"?n:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Zp={};function Cs(n,e,t){this.props=n,this.context=e,this.refs=Zp,this.updater=t||Yp}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Cs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Jp(){}Jp.prototype=Cs.prototype;function sf(n,e,t){this.props=n,this.context=e,this.refs=Zp,this.updater=t||Yp}var of=sf.prototype=new Jp;of.constructor=sf;$p(of,Cs.prototype);of.isPureReactComponent=!0;var ph=Array.isArray,Kp=Object.prototype.hasOwnProperty,af={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function em(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kp.call(e,i)&&!Qp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zo,type:n,key:s,ref:o,props:r,_owner:af.current}}function tv(n,e){return{$$typeof:zo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function lf(n){return typeof n=="object"&&n!==null&&n.$$typeof===zo}function nv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var mh=/\/+/g;function Gl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?nv(""+n.key):e.toString(36)}function Pa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case zo:case W0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gl(o,0):i,ph(r)?(t="",n!=null&&(t=n.replace(mh,"$&/")+"/"),Pa(r,e,t,"",function(u){return u})):r!=null&&(lf(r)&&(r=tv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ph(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gl(s,a);o+=Pa(s,e,t,l,r)}else if(l=ev(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gl(s,a++),o+=Pa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(n,e,t){if(n==null)return n;var i=[],r=0;return Pa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function iv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var kt={current:null},Ra={transition:null},rv={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:af};Oe.Children={map:Go,forEach:function(n,e,t){Go(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Go(n,function(){e++}),e},toArray:function(n){return Go(n,function(e){return e})||[]},only:function(n){if(!lf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Oe.Component=Cs;Oe.Fragment=j0;Oe.Profiler=q0;Oe.PureComponent=sf;Oe.StrictMode=X0;Oe.Suspense=J0;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;Oe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=$p({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Kp.call(e,l)&&!Qp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:zo,type:n.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(n){return n={$$typeof:$0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Y0,_context:n},n.Consumer=n};Oe.createElement=em;Oe.createFactory=function(n){var e=em.bind(null,n);return e.type=n,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(n){return{$$typeof:Z0,render:n}};Oe.isValidElement=lf;Oe.lazy=function(n){return{$$typeof:Q0,_payload:{_status:-1,_result:n},_init:iv}};Oe.memo=function(n,e){return{$$typeof:K0,type:n,compare:e===void 0?null:e}};Oe.startTransition=function(n){var e=Ra.transition;Ra.transition={};try{n()}finally{Ra.transition=e}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(n,e){return kt.current.useCallback(n,e)};Oe.useContext=function(n){return kt.current.useContext(n)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(n){return kt.current.useDeferredValue(n)};Oe.useEffect=function(n,e){return kt.current.useEffect(n,e)};Oe.useId=function(){return kt.current.useId()};Oe.useImperativeHandle=function(n,e,t){return kt.current.useImperativeHandle(n,e,t)};Oe.useInsertionEffect=function(n,e){return kt.current.useInsertionEffect(n,e)};Oe.useLayoutEffect=function(n,e){return kt.current.useLayoutEffect(n,e)};Oe.useMemo=function(n,e){return kt.current.useMemo(n,e)};Oe.useReducer=function(n,e,t){return kt.current.useReducer(n,e,t)};Oe.useRef=function(n){return kt.current.useRef(n)};Oe.useState=function(n){return kt.current.useState(n)};Oe.useSyncExternalStore=function(n,e,t){return kt.current.useSyncExternalStore(n,e,t)};Oe.useTransition=function(){return kt.current.useTransition()};Oe.version="18.2.0";(function(n){n.exports=Oe})(No);const sv=H0(No.exports);var Ku={},tm={exports:{}},tn={},nm={exports:{}},im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,R){var z=N.length;N.push(R);e:for(;0<z;){var q=z-1>>>1,Z=N[q];if(0<r(Z,R))N[q]=R,N[z]=Z,z=q;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var R=N[0],z=N.pop();if(z!==R){N[0]=z;e:for(var q=0,Z=N.length,ee=Z>>>1;q<ee;){var he=2*(q+1)-1,we=N[he],H=he+1,Le=N[H];if(0>r(we,z))H<Z&&0>r(Le,we)?(N[q]=Le,N[H]=z,q=H):(N[q]=we,N[he]=z,q=he);else if(H<Z&&0>r(Le,z))N[q]=Le,N[H]=z,q=H;else break e}}return R}function r(N,R){var z=N.sortIndex-R.sortIndex;return z!==0?z:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,x=!1,p=!1,d=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var R=t(u);R!==null;){if(R.callback===null)i(u);else if(R.startTime<=N)i(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=t(u)}}function y(N){if(p=!1,v(N),!x)if(t(l)!==null)x=!0,K(M);else{var R=t(u);R!==null&&Q(y,R.startTime-N)}}function M(N,R){x=!1,p&&(p=!1,g(S),S=-1),m=!0;var z=h;try{for(v(R),f=t(l);f!==null&&(!(f.expirationTime>R)||N&&!G());){var q=f.callback;if(typeof q=="function"){f.callback=null,h=f.priorityLevel;var Z=q(f.expirationTime<=R);R=n.unstable_now(),typeof Z=="function"?f.callback=Z:f===t(l)&&i(l),v(R)}else i(l);f=t(l)}if(f!==null)var ee=!0;else{var he=t(u);he!==null&&Q(y,he.startTime-R),ee=!1}return ee}finally{f=null,h=z,m=!1}}var T=!1,A=null,S=-1,C=5,P=-1;function G(){return!(n.unstable_now()-P<C)}function ue(){if(A!==null){var N=n.unstable_now();P=N;var R=!0;try{R=A(!0,N)}finally{R?B():(T=!1,A=null)}}else T=!1}var B;if(typeof _=="function")B=function(){_(ue)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,X=F.port2;F.port1.onmessage=ue,B=function(){X.postMessage(null)}}else B=function(){d(ue,0)};function K(N){A=N,T||(T=!0,B())}function Q(N,R){S=d(function(){N(n.unstable_now())},R)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,K(M))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var z=h;h=R;try{return N()}finally{h=z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return R()}finally{h=z}},n.unstable_scheduleCallback=function(N,R,z){var q=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?q+z:q):z=q,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,N={id:c++,callback:R,priorityLevel:N,startTime:z,expirationTime:Z,sortIndex:-1},z>q?(N.sortIndex=z,e(u,N),t(l)===null&&N===t(u)&&(p?(g(S),S=-1):p=!0,Q(y,z-q))):(N.sortIndex=Z,e(l,N),x||m||(x=!0,K(M))),N},n.unstable_shouldYield=G,n.unstable_wrapCallback=function(N){var R=h;return function(){var z=h;h=R;try{return N.apply(this,arguments)}finally{h=z}}}})(im);(function(n){n.exports=im})(nm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=No.exports,en=nm.exports;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,fo={};function Sr(n,e){ms(n,e),ms(n+"Capture",e)}function ms(n,e){for(fo[n]=e,n=0;n<e.length;n++)sm.add(e[n])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gh={},vh={};function av(n){return Qu.call(vh,n)?!0:Qu.call(gh,n)?!1:ov.test(n)?vh[n]=!0:(gh[n]=!0,!1)}function lv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function uv(n,e,t,i){if(e===null||typeof e>"u"||lv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){bt[n]=new Ut(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];bt[e]=new Ut(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){bt[n]=new Ut(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){bt[n]=new Ut(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){bt[n]=new Ut(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){bt[n]=new Ut(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){bt[n]=new Ut(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){bt[n]=new Ut(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){bt[n]=new Ut(n,5,!1,n.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(uf,cf);bt[e]=new Ut(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(uf,cf);bt[e]=new Ut(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(uf,cf);bt[e]=new Ut(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){bt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){bt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!0,!0)});function ff(n,e,t,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uv(e,t,r,i)&&(t=null),i||r===null?av(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ui=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),am=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function Ns(n){return n===null||typeof n!="object"?null:(n=_h&&n[_h]||n["@@iterator"],typeof n=="function"?n:null)}var rt=Object.assign,Hl;function Xs(n){if(Hl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+n}var Wl=!1;function jl(n,e){if(!n||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Xs(n):""}function cv(n){switch(n.tag){case 5:return Xs(n.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return n=jl(n.type,!1),n;case 11:return n=jl(n.type.render,!1),n;case 1:return n=jl(n.type,!0),n;default:return""}}function ic(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qr:return"Fragment";case Xr:return"Portal";case ec:return"Profiler";case hf:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case am:return(n.displayName||"Context")+".Consumer";case om:return(n._context.displayName||"Context")+".Provider";case df:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pf:return e=n.displayName||null,e!==null?e:ic(n.type)||"Memo";case xi:e=n._payload,n=n._init;try{return ic(n(e))}catch{}}return null}function fv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function um(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hv(n){var e=um(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wo(n){n._valueTracker||(n._valueTracker=hv(n))}function cm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=um(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ja(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rc(n,e){var t=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function xh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fm(n,e){e=e.checked,e!=null&&ff(n,"checked",e,!1)}function sc(n,e){fm(n,e);var t=Fi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?oc(n,e.type,t):e.hasOwnProperty("defaultValue")&&oc(n,e.type,Fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function yh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function oc(n,e,t){(e!=="number"||ja(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var qs=Array.isArray;function os(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ac(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Sh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(qs(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fi(t)}}function hm(n,e){var t=Fi(e.value),i=Fi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Mh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function dm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?dm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var jo,pm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ho(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(n){dv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),eo[e]=eo[n]})});function mm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||eo.hasOwnProperty(n)&&eo[n]?(""+e).trim():e+"px"}function gm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=mm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var pv=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(n,e){if(e){if(pv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function cc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function mf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hc=null,as=null,ls=null;function wh(n){if(n=ko(n)){if(typeof hc!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Sl(e),hc(n.stateNode,n.type,e))}}function vm(n){as?ls?ls.push(n):ls=[n]:as=n}function _m(){if(as){var n=as,e=ls;if(ls=as=null,wh(n),e)for(n=0;n<e.length;n++)wh(e[n])}}function xm(n,e){return n(e)}function ym(){}var Xl=!1;function Sm(n,e,t){if(Xl)return n(e,t);Xl=!0;try{return xm(n,e,t)}finally{Xl=!1,(as!==null||ls!==null)&&(ym(),_m())}}function po(n,e){var t=n.stateNode;if(t===null)return null;var i=Sl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var dc=!1;if(si)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){dc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{dc=!1}function mv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var to=!1,Xa=null,qa=!1,pc=null,gv={onError:function(n){to=!0,Xa=n}};function vv(n,e,t,i,r,s,o,a,l){to=!1,Xa=null,mv.apply(gv,arguments)}function _v(n,e,t,i,r,s,o,a,l){if(vv.apply(this,arguments),to){if(to){var u=Xa;to=!1,Xa=null}else throw Error(te(198));qa||(qa=!0,pc=u)}}function Mr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Mm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Eh(n){if(Mr(n)!==n)throw Error(te(188))}function xv(n){var e=n.alternate;if(!e){if(e=Mr(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Eh(r),n;if(s===i)return Eh(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function wm(n){return n=xv(n),n!==null?Em(n):null}function Em(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Em(n);if(e!==null)return e;n=n.sibling}return null}var Tm=en.unstable_scheduleCallback,Th=en.unstable_cancelCallback,yv=en.unstable_shouldYield,Sv=en.unstable_requestPaint,lt=en.unstable_now,Mv=en.unstable_getCurrentPriorityLevel,gf=en.unstable_ImmediatePriority,bm=en.unstable_UserBlockingPriority,Ya=en.unstable_NormalPriority,wv=en.unstable_LowPriority,Cm=en.unstable_IdlePriority,vl=null,kn=null;function Ev(n){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(vl,n,void 0,(n.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:Cv,Tv=Math.log,bv=Math.LN2;function Cv(n){return n>>>=0,n===0?32:31-(Tv(n)/bv|0)|0}var Xo=64,qo=4194304;function Ys(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $a(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ys(a):(s&=o,s!==0&&(i=Ys(s)))}else o=t&~r,o!==0?i=Ys(o):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ln(e),r=1<<t,i|=n[t],e&=~r;return i}function Av(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Av(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function mc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Am(){var n=Xo;return Xo<<=1,(Xo&4194240)===0&&(Xo=64),n}function ql(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Fo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ln(e),n[e]=t}function Pv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ln(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function vf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ln(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var qe=0;function Lm(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pm,_f,Rm,Dm,Im,gc=!1,Yo=[],bi=null,Ci=null,Ai=null,mo=new Map,go=new Map,Si=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(n,e){switch(n){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":Ai=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Fs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ko(e),e!==null&&_f(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Dv(n,e,t,i,r){switch(e){case"focusin":return bi=Fs(bi,n,e,t,i,r),!0;case"dragenter":return Ci=Fs(Ci,n,e,t,i,r),!0;case"mouseover":return Ai=Fs(Ai,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,Fs(mo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,Fs(go.get(s)||null,n,e,t,i,r)),!0}return!1}function Nm(n){var e=er(n.target);if(e!==null){var t=Mr(e);if(t!==null){if(e=t.tag,e===13){if(e=Mm(t),e!==null){n.blockedOn=e,Im(n.priority,function(){Rm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Da(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fc=i,t.target.dispatchEvent(i),fc=null}else return e=ko(t),e!==null&&_f(e),n.blockedOn=t,!1;e.shift()}return!0}function Ch(n,e,t){Da(n)&&t.delete(e)}function Iv(){gc=!1,bi!==null&&Da(bi)&&(bi=null),Ci!==null&&Da(Ci)&&(Ci=null),Ai!==null&&Da(Ai)&&(Ai=null),mo.forEach(Ch),go.forEach(Ch)}function Os(n,e){n.blockedOn===e&&(n.blockedOn=null,gc||(gc=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Iv)))}function vo(n){function e(r){return Os(r,n)}if(0<Yo.length){Os(Yo[0],n);for(var t=1;t<Yo.length;t++){var i=Yo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(bi!==null&&Os(bi,n),Ci!==null&&Os(Ci,n),Ai!==null&&Os(Ai,n),mo.forEach(e),go.forEach(e),t=0;t<Si.length;t++)i=Si[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Si.length&&(t=Si[0],t.blockedOn===null);)Nm(t),t.blockedOn===null&&Si.shift()}var us=ui.ReactCurrentBatchConfig,Za=!0;function Nv(n,e,t,i){var r=qe,s=us.transition;us.transition=null;try{qe=1,xf(n,e,t,i)}finally{qe=r,us.transition=s}}function zv(n,e,t,i){var r=qe,s=us.transition;us.transition=null;try{qe=4,xf(n,e,t,i)}finally{qe=r,us.transition=s}}function xf(n,e,t,i){if(Za){var r=vc(n,e,t,i);if(r===null)iu(n,e,i,Ja,t),bh(n,i);else if(Dv(r,n,e,t,i))i.stopPropagation();else if(bh(n,i),e&4&&-1<Rv.indexOf(n)){for(;r!==null;){var s=ko(r);if(s!==null&&Pm(s),s=vc(n,e,t,i),s===null&&iu(n,e,i,Ja,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else iu(n,e,i,null,t)}}var Ja=null;function vc(n,e,t,i){if(Ja=null,n=mf(i),n=er(n),n!==null)if(e=Mr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Mm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ja=n,null}function zm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case gf:return 1;case bm:return 4;case Ya:case wv:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var wi=null,yf=null,Ia=null;function Fm(){if(Ia)return Ia;var n,e=yf,t=e.length,i,r="value"in wi?wi.value:wi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ia=r.slice(n,1<i?1-i:void 0)}function Na(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $o(){return!0}function Ah(){return!1}function nn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:Ah,this.isPropagationStopped=Ah,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=nn(As),Oo=rt({},As,{view:0,detail:0}),Fv=nn(Oo),Yl,$l,ks,_l=rt({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ks&&(ks&&n.type==="mousemove"?(Yl=n.screenX-ks.screenX,$l=n.screenY-ks.screenY):$l=Yl=0,ks=n),Yl)},movementY:function(n){return"movementY"in n?n.movementY:$l}}),Lh=nn(_l),Ov=rt({},_l,{dataTransfer:0}),kv=nn(Ov),Uv=rt({},Oo,{relatedTarget:0}),Zl=nn(Uv),Bv=rt({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=nn(Bv),Gv=rt({},As,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hv=nn(Gv),Wv=rt({},As,{data:0}),Ph=nn(Wv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=qv[n])?!!e[n]:!1}function Mf(){return Yv}var $v=rt({},Oo,{key:function(n){if(n.key){var e=jv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Na(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(n){return n.type==="keypress"?Na(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Na(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zv=nn($v),Jv=rt({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=nn(Jv),Kv=rt({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),Qv=nn(Kv),e_=rt({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),t_=nn(e_),n_=rt({},_l,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),i_=nn(n_),r_=[9,13,27,32],wf=si&&"CompositionEvent"in window,no=null;si&&"documentMode"in document&&(no=document.documentMode);var s_=si&&"TextEvent"in window&&!no,Om=si&&(!wf||no&&8<no&&11>=no),Dh=String.fromCharCode(32),Ih=!1;function km(n,e){switch(n){case"keyup":return r_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yr=!1;function o_(n,e){switch(n){case"compositionend":return Um(e);case"keypress":return e.which!==32?null:(Ih=!0,Dh);case"textInput":return n=e.data,n===Dh&&Ih?null:n;default:return null}}function a_(n,e){if(Yr)return n==="compositionend"||!wf&&km(n,e)?(n=Fm(),Ia=yf=wi=null,Yr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var l_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!l_[n.type]:e==="textarea"}function Bm(n,e,t,i){vm(i),e=Ka(e,"onChange"),0<e.length&&(t=new Sf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var io=null,_o=null;function u_(n){Jm(n,0)}function xl(n){var e=Jr(n);if(cm(e))return n}function c_(n,e){if(n==="change")return e}var Vm=!1;if(si){var Jl;if(si){var Kl="oninput"in document;if(!Kl){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),Kl=typeof zh.oninput=="function"}Jl=Kl}else Jl=!1;Vm=Jl&&(!document.documentMode||9<document.documentMode)}function Fh(){io&&(io.detachEvent("onpropertychange",Gm),_o=io=null)}function Gm(n){if(n.propertyName==="value"&&xl(_o)){var e=[];Bm(e,_o,n,mf(n)),Sm(u_,e)}}function f_(n,e,t){n==="focusin"?(Fh(),io=e,_o=t,io.attachEvent("onpropertychange",Gm)):n==="focusout"&&Fh()}function h_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(_o)}function d_(n,e){if(n==="click")return xl(e)}function p_(n,e){if(n==="input"||n==="change")return xl(e)}function m_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Rn=typeof Object.is=="function"?Object.is:m_;function xo(n,e){if(Rn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Qu.call(e,r)||!Rn(n[r],e[r]))return!1}return!0}function Oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,e){var t=Oh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Oh(t)}}function Hm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Wm(){for(var n=window,e=ja();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ja(n.document)}return e}function Ef(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function g_(n){var e=Wm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hm(t.ownerDocument.documentElement,t)){if(i!==null&&Ef(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=kh(t,s);var o=kh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var v_=si&&"documentMode"in document&&11>=document.documentMode,$r=null,_c=null,ro=null,xc=!1;function Uh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xc||$r==null||$r!==ja(i)||(i=$r,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&xo(ro,i)||(ro=i,i=Ka(_c,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=$r)))}function Zo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Ql={},jm={};si&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function yl(n){if(Ql[n])return Ql[n];if(!Zr[n])return n;var e=Zr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in jm)return Ql[n]=e[t];return n}var Xm=yl("animationend"),qm=yl("animationiteration"),Ym=yl("animationstart"),$m=yl("transitionend"),Zm=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(n,e){Zm.set(n,e),Sr(e,[n])}for(var eu=0;eu<Bh.length;eu++){var tu=Bh[eu],__=tu.toLowerCase(),x_=tu[0].toUpperCase()+tu.slice(1);ki(__,"on"+x_)}ki(Xm,"onAnimationEnd");ki(qm,"onAnimationIteration");ki(Ym,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki($m,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y_=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Vh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,_v(i,e,void 0,n),n.currentTarget=null}function Jm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,u),s=l}}}if(qa)throw n=pc,qa=!1,pc=null,n}function Je(n,e){var t=e[Ec];t===void 0&&(t=e[Ec]=new Set);var i=n+"__bubble";t.has(i)||(Km(e,n,2,!1),t.add(i))}function nu(n,e,t){var i=0;e&&(i|=4),Km(t,n,i,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[Jo]){n[Jo]=!0,sm.forEach(function(t){t!=="selectionchange"&&(y_.has(t)||nu(t,!1,n),nu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,nu("selectionchange",!1,e))}}function Km(n,e,t,i){switch(zm(e)){case 1:var r=Nv;break;case 4:r=zv;break;default:r=xf}t=r.bind(null,e,t,n),r=void 0,!dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function iu(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sm(function(){var u=s,c=mf(t),f=[];e:{var h=Zm.get(n);if(h!==void 0){var m=Sf,x=n;switch(n){case"keypress":if(Na(t)===0)break e;case"keydown":case"keyup":m=Zv;break;case"focusin":x="focus",m=Zl;break;case"focusout":x="blur",m=Zl;break;case"beforeblur":case"afterblur":m=Zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Qv;break;case Xm:case qm:case Ym:m=Vv;break;case $m:m=t_;break;case"scroll":m=Fv;break;case"wheel":m=i_;break;case"copy":case"cut":case"paste":m=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh}var p=(e&4)!==0,d=!p&&n==="scroll",g=p?h!==null?h+"Capture":null:h;p=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,g!==null&&(y=po(_,g),y!=null&&p.push(So(_,y,v)))),d)break;_=_.return}0<p.length&&(h=new m(h,x,null,t,c),f.push({event:h,listeners:p}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==fc&&(x=t.relatedTarget||t.fromElement)&&(er(x)||x[oi]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?er(x):null,x!==null&&(d=Mr(x),x!==d||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(p=Lh,y="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(p=Rh,y="onPointerLeave",g="onPointerEnter",_="pointer"),d=m==null?h:Jr(m),v=x==null?h:Jr(x),h=new p(y,_+"leave",m,t,c),h.target=d,h.relatedTarget=v,y=null,er(c)===u&&(p=new p(g,_+"enter",x,t,c),p.target=v,p.relatedTarget=d,y=p),d=y,m&&x)t:{for(p=m,g=x,_=0,v=p;v;v=Cr(v))_++;for(v=0,y=g;y;y=Cr(y))v++;for(;0<_-v;)p=Cr(p),_--;for(;0<v-_;)g=Cr(g),v--;for(;_--;){if(p===g||g!==null&&p===g.alternate)break t;p=Cr(p),g=Cr(g)}p=null}else p=null;m!==null&&Gh(f,h,m,p,!1),x!==null&&d!==null&&Gh(f,d,x,p,!0)}}e:{if(h=u?Jr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var M=c_;else if(Nh(h))if(Vm)M=p_;else{M=h_;var T=f_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=d_);if(M&&(M=M(n,u))){Bm(f,M,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&oc(h,"number",h.value)}switch(T=u?Jr(u):window,n){case"focusin":(Nh(T)||T.contentEditable==="true")&&($r=T,_c=u,ro=null);break;case"focusout":ro=_c=$r=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Uh(f,t,c);break;case"selectionchange":if(v_)break;case"keydown":case"keyup":Uh(f,t,c)}var A;if(wf)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Yr?km(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Om&&t.locale!=="ko"&&(Yr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Yr&&(A=Fm()):(wi=c,yf="value"in wi?wi.value:wi.textContent,Yr=!0)),T=Ka(u,S),0<T.length&&(S=new Ph(S,n,null,t,c),f.push({event:S,listeners:T}),A?S.data=A:(A=Um(t),A!==null&&(S.data=A)))),(A=s_?o_(n,t):a_(n,t))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new Ph("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}Jm(f,e)})}function So(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ka(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(n,t),s!=null&&i.unshift(So(n,s,r)),s=po(n,e),s!=null&&i.push(So(n,s,r))),n=n.return}return i}function Cr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=po(t,s),l!=null&&o.unshift(So(t,l,a))):r||(l=po(t,s),l!=null&&o.push(So(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var S_=/\r\n?/g,M_=/\u0000|\uFFFD/g;function Hh(n){return(typeof n=="string"?n:""+n).replace(S_,`
`).replace(M_,"")}function Ko(n,e,t){if(e=Hh(e),Hh(n)!==e&&t)throw Error(te(425))}function Qa(){}var yc=null,Sc=null;function Mc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,w_=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,E_=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(n){return Wh.resolve(null).then(n).catch(T_)}:wc;function T_(n){setTimeout(function(){throw n})}function ru(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vo(e)}function Li(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function jh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),On="__reactFiber$"+Ls,Mo="__reactProps$"+Ls,oi="__reactContainer$"+Ls,Ec="__reactEvents$"+Ls,b_="__reactListeners$"+Ls,C_="__reactHandles$"+Ls;function er(n){var e=n[On];if(e)return e;for(var t=n.parentNode;t;){if(e=t[oi]||t[On]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=jh(n);n!==null;){if(t=n[On])return t;n=jh(n)}return e}n=t,t=n.parentNode}return null}function ko(n){return n=n[On]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Jr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Sl(n){return n[Mo]||null}var Tc=[],Kr=-1;function Ui(n){return{current:n}}function Ke(n){0>Kr||(n.current=Tc[Kr],Tc[Kr]=null,Kr--)}function Ze(n,e){Kr++,Tc[Kr]=n.current,n.current=e}var Oi={},It=Ui(Oi),Ht=Ui(!1),cr=Oi;function gs(n,e){var t=n.type.contextTypes;if(!t)return Oi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Wt(n){return n=n.childContextTypes,n!=null}function el(){Ke(Ht),Ke(It)}function Xh(n,e,t){if(It.current!==Oi)throw Error(te(168));Ze(It,e),Ze(Ht,t)}function Qm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,fv(n)||"Unknown",r));return rt({},t,i)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Oi,cr=It.current,Ze(It,n),Ze(Ht,Ht.current),!0}function qh(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=Qm(n,e,cr),i.__reactInternalMemoizedMergedChildContext=n,Ke(Ht),Ke(It),Ze(It,n)):Ke(Ht),Ze(Ht,t)}var Qn=null,Ml=!1,su=!1;function eg(n){Qn===null?Qn=[n]:Qn.push(n)}function A_(n){Ml=!0,eg(n)}function Bi(){if(!su&&Qn!==null){su=!0;var n=0,e=qe;try{var t=Qn;for(qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Qn=null,Ml=!1}catch(r){throw Qn!==null&&(Qn=Qn.slice(n+1)),Tm(gf,Bi),r}finally{qe=e,su=!1}}return null}var Qr=[],es=0,nl=null,il=0,an=[],ln=0,fr=null,ti=1,ni="";function $i(n,e){Qr[es++]=il,Qr[es++]=nl,nl=n,il=e}function tg(n,e,t){an[ln++]=ti,an[ln++]=ni,an[ln++]=fr,fr=n;var i=ti;n=ni;var r=32-Ln(i)-1;i&=~(1<<r),t+=1;var s=32-Ln(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-Ln(e)+r|t<<r|i,ni=s+n}else ti=1<<s|t<<r|i,ni=n}function Tf(n){n.return!==null&&($i(n,1),tg(n,1,0))}function bf(n){for(;n===nl;)nl=Qr[--es],Qr[es]=null,il=Qr[--es],Qr[es]=null;for(;n===fr;)fr=an[--ln],an[ln]=null,ni=an[--ln],an[ln]=null,ti=an[--ln],an[ln]=null}var Kt=null,Jt=null,et=!1,bn=null;function ng(n,e){var t=fn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Yh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Kt=n,Jt=Li(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Kt=n,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=fr!==null?{id:ti,overflow:ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=fn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Kt=n,Jt=null,!0):!1;default:return!1}}function bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cc(n){if(et){var e=Jt;if(e){var t=e;if(!Yh(n,e)){if(bc(n))throw Error(te(418));e=Li(t.nextSibling);var i=Kt;e&&Yh(n,e)?ng(i,t):(n.flags=n.flags&-4097|2,et=!1,Kt=n)}}else{if(bc(n))throw Error(te(418));n.flags=n.flags&-4097|2,et=!1,Kt=n}}}function $h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kt=n}function Qo(n){if(n!==Kt)return!1;if(!et)return $h(n),et=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Mc(n.type,n.memoizedProps)),e&&(e=Jt)){if(bc(n))throw ig(),Error(te(418));for(;e;)ng(n,e),e=Li(e.nextSibling)}if($h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Jt=Li(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Jt=null}}else Jt=Kt?Li(n.stateNode.nextSibling):null;return!0}function ig(){for(var n=Jt;n;)n=Li(n.nextSibling)}function vs(){Jt=Kt=null,et=!1}function Cf(n){bn===null?bn=[n]:bn.push(n)}var L_=ui.ReactCurrentBatchConfig;function En(n,e){if(n&&n.defaultProps){e=rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var rl=Ui(null),sl=null,ts=null,Af=null;function Lf(){Af=ts=sl=null}function Pf(n){var e=rl.current;Ke(rl),n._currentValue=e}function Ac(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function cs(n,e){sl=n,Af=ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Gt=!0),n.firstContext=null)}function gn(n){var e=n._currentValue;if(Af!==n)if(n={context:n,memoizedValue:e,next:null},ts===null){if(sl===null)throw Error(te(308));ts=n,sl.dependencies={lanes:0,firstContext:n}}else ts=ts.next=n;return e}var tr=null;function Rf(n){tr===null?tr=[n]:tr.push(n)}function rg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ai(n,i)}function ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var yi=!1;function Df(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ii(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Ve&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(n,t)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(n,t)}function za(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vf(n,t)}}function Zh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ol(n,e,t,i){var r=n.updateQueue;yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,p=a;switch(h=e,m=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=rt({},f,h);break e;case 2:yi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);dr|=o,n.lanes=o,n.memoizedState=f}}function Jh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var og=new rm.Component().refs;function Lc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wl={isMounted:function(n){return(n=n._reactInternals)?Mr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ot(),r=Di(n),s=ii(i,r);s.payload=e,t!=null&&(s.callback=t),e=Pi(n,s,r),e!==null&&(Pn(e,n,r,i),za(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ot(),r=Di(n),s=ii(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Pi(n,s,r),e!==null&&(Pn(e,n,r,i),za(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ot(),i=Di(n),r=ii(t,i);r.tag=2,e!=null&&(r.callback=e),e=Pi(n,r,i),e!==null&&(Pn(e,n,i,t),za(e,n,i))}};function Kh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(t,i)||!xo(r,s):!0}function ag(n,e,t){var i=!1,r=Oi,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Wt(e)?cr:It.current,i=e.contextTypes,s=(i=i!=null)?gs(n,r):Oi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wl.enqueueReplaceState(e,e.state,null)}function Pc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=og,Df(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Wt(e)?cr:It.current,r.context=gs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wl.enqueueReplaceState(r,r.state,null),ol(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===og&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function ea(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ed(n){var e=n._init;return e(n._payload)}function lg(n){function e(g,_){if(n){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=Ii(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,y){return _===null||_.tag!==6?(_=hu(v,g.mode,y),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,y){var M=v.type;return M===qr?c(g,_,v.props.children,y,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===xi&&ed(M)===_.type)?(y=r(_,v.props),y.ref=Us(g,_,v),y.return=g,y):(y=Va(v.type,v.key,v.props,null,g.mode,y),y.ref=Us(g,_,v),y.return=g,y)}function u(g,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=du(v,g.mode,y),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,y,M){return _===null||_.tag!==7?(_=ar(v,g.mode,y,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function f(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=hu(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:return v=Va(_.type,_.key,_.props,null,g.mode,v),v.ref=Us(g,null,_),v.return=g,v;case Xr:return _=du(_,g.mode,v),_.return=g,_;case xi:var y=_._init;return f(g,y(_._payload),v)}if(qs(_)||Ns(_))return _=ar(_,g.mode,v,null),_.return=g,_;ea(g,_)}return null}function h(g,_,v,y){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(g,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:return v.key===M?l(g,_,v,y):null;case Xr:return v.key===M?u(g,_,v,y):null;case xi:return M=v._init,h(g,_,M(v._payload),y)}if(qs(v)||Ns(v))return M!==null?null:c(g,_,v,y,null);ea(g,v)}return null}function m(g,_,v,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(v)||null,a(_,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ho:return g=g.get(y.key===null?v:y.key)||null,l(_,g,y,M);case Xr:return g=g.get(y.key===null?v:y.key)||null,u(_,g,y,M);case xi:var T=y._init;return m(g,_,v,T(y._payload),M)}if(qs(y)||Ns(y))return g=g.get(v)||null,c(_,g,y,M,null);ea(_,y)}return null}function x(g,_,v,y){for(var M=null,T=null,A=_,S=_=0,C=null;A!==null&&S<v.length;S++){A.index>S?(C=A,A=null):C=A.sibling;var P=h(g,A,v[S],y);if(P===null){A===null&&(A=C);break}n&&A&&P.alternate===null&&e(g,A),_=s(P,_,S),T===null?M=P:T.sibling=P,T=P,A=C}if(S===v.length)return t(g,A),et&&$i(g,S),M;if(A===null){for(;S<v.length;S++)A=f(g,v[S],y),A!==null&&(_=s(A,_,S),T===null?M=A:T.sibling=A,T=A);return et&&$i(g,S),M}for(A=i(g,A);S<v.length;S++)C=m(A,g,S,v[S],y),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?S:C.key),_=s(C,_,S),T===null?M=C:T.sibling=C,T=C);return n&&A.forEach(function(G){return e(g,G)}),et&&$i(g,S),M}function p(g,_,v,y){var M=Ns(v);if(typeof M!="function")throw Error(te(150));if(v=M.call(v),v==null)throw Error(te(151));for(var T=M=null,A=_,S=_=0,C=null,P=v.next();A!==null&&!P.done;S++,P=v.next()){A.index>S?(C=A,A=null):C=A.sibling;var G=h(g,A,P.value,y);if(G===null){A===null&&(A=C);break}n&&A&&G.alternate===null&&e(g,A),_=s(G,_,S),T===null?M=G:T.sibling=G,T=G,A=C}if(P.done)return t(g,A),et&&$i(g,S),M;if(A===null){for(;!P.done;S++,P=v.next())P=f(g,P.value,y),P!==null&&(_=s(P,_,S),T===null?M=P:T.sibling=P,T=P);return et&&$i(g,S),M}for(A=i(g,A);!P.done;S++,P=v.next())P=m(A,g,S,P.value,y),P!==null&&(n&&P.alternate!==null&&A.delete(P.key===null?S:P.key),_=s(P,_,S),T===null?M=P:T.sibling=P,T=P);return n&&A.forEach(function(ue){return e(g,ue)}),et&&$i(g,S),M}function d(g,_,v,y){if(typeof v=="object"&&v!==null&&v.type===qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:e:{for(var M=v.key,T=_;T!==null;){if(T.key===M){if(M=v.type,M===qr){if(T.tag===7){t(g,T.sibling),_=r(T,v.props.children),_.return=g,g=_;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===xi&&ed(M)===T.type){t(g,T.sibling),_=r(T,v.props),_.ref=Us(g,T,v),_.return=g,g=_;break e}t(g,T);break}else e(g,T);T=T.sibling}v.type===qr?(_=ar(v.props.children,g.mode,y,v.key),_.return=g,g=_):(y=Va(v.type,v.key,v.props,null,g.mode,y),y.ref=Us(g,_,v),y.return=g,g=y)}return o(g);case Xr:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=du(v,g.mode,y),_.return=g,g=_}return o(g);case xi:return T=v._init,d(g,_,T(v._payload),y)}if(qs(v))return x(g,_,v,y);if(Ns(v))return p(g,_,v,y);ea(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,v),_.return=g,g=_):(t(g,_),_=hu(v,g.mode,y),_.return=g,g=_),o(g)):t(g,_)}return d}var _s=lg(!0),ug=lg(!1),Uo={},Un=Ui(Uo),wo=Ui(Uo),Eo=Ui(Uo);function nr(n){if(n===Uo)throw Error(te(174));return n}function If(n,e){switch(Ze(Eo,e),Ze(wo,n),Ze(Un,Uo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=lc(e,n)}Ke(Un),Ze(Un,e)}function xs(){Ke(Un),Ke(wo),Ke(Eo)}function cg(n){nr(Eo.current);var e=nr(Un.current),t=lc(e,n.type);e!==t&&(Ze(wo,n),Ze(Un,t))}function Nf(n){wo.current===n&&(Ke(Un),Ke(wo))}var tt=Ui(0);function al(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function zf(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var Fa=ui.ReactCurrentDispatcher,au=ui.ReactCurrentBatchConfig,hr=0,it=null,pt=null,yt=null,ll=!1,so=!1,To=0,P_=0;function At(){throw Error(te(321))}function Ff(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Rn(n[t],e[t]))return!1;return!0}function Of(n,e,t,i,r,s){if(hr=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=n===null||n.memoizedState===null?N_:z_,n=t(i,r),so){s=0;do{if(so=!1,To=0,25<=s)throw Error(te(301));s+=1,yt=pt=null,e.updateQueue=null,Fa.current=F_,n=t(i,r)}while(so)}if(Fa.current=ul,e=pt!==null&&pt.next!==null,hr=0,yt=pt=it=null,ll=!1,e)throw Error(te(300));return n}function kf(){var n=To!==0;return To=0,n}function zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?it.memoizedState=yt=n:yt=yt.next=n,yt}function vn(){if(pt===null){var n=it.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var e=yt===null?it.memoizedState:yt.next;if(e!==null)yt=e,pt=n;else{if(n===null)throw Error(te(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},yt===null?it.memoizedState=yt=n:yt=yt.next=n}return yt}function bo(n,e){return typeof e=="function"?e(n):e}function lu(n){var e=vn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=pt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,it.lanes|=c,dr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Rn(i,e.memoizedState)||(Gt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,it.lanes|=s,dr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function uu(n){var e=vn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Rn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function fg(){}function hg(n,e){var t=it,i=vn(),r=e(),s=!Rn(i.memoizedState,r);if(s&&(i.memoizedState=r,Gt=!0),i=i.queue,Uf(mg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(t.flags|=2048,Co(9,pg.bind(null,t,i,r,e),void 0,null),Mt===null)throw Error(te(349));(hr&30)!==0||dg(t,e,r)}return r}function dg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function pg(n,e,t,i){e.value=t,e.getSnapshot=i,gg(e)&&vg(n)}function mg(n,e,t){return t(function(){gg(e)&&vg(n)})}function gg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Rn(n,t)}catch{return!0}}function vg(n){var e=ai(n,1);e!==null&&Pn(e,n,1,-1)}function td(n){var e=zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},e.queue=n,n=n.dispatch=I_.bind(null,it,n),[e.memoizedState,n]}function Co(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function _g(){return vn().memoizedState}function Oa(n,e,t,i){var r=zn();it.flags|=n,r.memoizedState=Co(1|e,t,void 0,i===void 0?null:i)}function El(n,e,t,i){var r=vn();i=i===void 0?null:i;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,i!==null&&Ff(i,o.deps)){r.memoizedState=Co(e,t,s,i);return}}it.flags|=n,r.memoizedState=Co(1|e,t,s,i)}function nd(n,e){return Oa(8390656,8,n,e)}function Uf(n,e){return El(2048,8,n,e)}function xg(n,e){return El(4,2,n,e)}function yg(n,e){return El(4,4,n,e)}function Sg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Mg(n,e,t){return t=t!=null?t.concat([n]):null,El(4,4,Sg.bind(null,e,n),t)}function Bf(){}function wg(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ff(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Eg(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ff(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Tg(n,e,t){return(hr&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=t):(Rn(t,e)||(t=Am(),it.lanes|=t,dr|=t,n.baseState=!0),e)}function R_(n,e){var t=qe;qe=t!==0&&4>t?t:4,n(!0);var i=au.transition;au.transition={};try{n(!1),e()}finally{qe=t,au.transition=i}}function bg(){return vn().memoizedState}function D_(n,e,t){var i=Di(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Cg(n))Ag(e,t);else if(t=rg(n,e,t,i),t!==null){var r=Ot();Pn(t,n,i,r),Lg(t,e,i)}}function I_(n,e,t){var i=Di(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cg(n))Ag(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=rg(n,e,r,i),t!==null&&(r=Ot(),Pn(t,n,i,r),Lg(t,e,i))}}function Cg(n){var e=n.alternate;return n===it||e!==null&&e===it}function Ag(n,e){so=ll=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Lg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vf(n,t)}}var ul={readContext:gn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},N_={readContext:gn,useCallback:function(n,e){return zn().memoizedState=[n,e===void 0?null:e],n},useContext:gn,useEffect:nd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Oa(4194308,4,Sg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Oa(4194308,4,n,e)},useInsertionEffect:function(n,e){return Oa(4,2,n,e)},useMemo:function(n,e){var t=zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=D_.bind(null,it,n),[i.memoizedState,n]},useRef:function(n){var e=zn();return n={current:n},e.memoizedState=n},useState:td,useDebugValue:Bf,useDeferredValue:function(n){return zn().memoizedState=n},useTransition:function(){var n=td(!1),e=n[0];return n=R_.bind(null,n[1]),zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=it,r=zn();if(et){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Mt===null)throw Error(te(349));(hr&30)!==0||dg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,nd(mg.bind(null,i,s,n),[n]),i.flags|=2048,Co(9,pg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=zn(),e=Mt.identifierPrefix;if(et){var t=ni,i=ti;t=(i&~(1<<32-Ln(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=To++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=P_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},z_={readContext:gn,useCallback:wg,useContext:gn,useEffect:Uf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:Eg,useReducer:lu,useRef:_g,useState:function(){return lu(bo)},useDebugValue:Bf,useDeferredValue:function(n){var e=vn();return Tg(e,pt.memoizedState,n)},useTransition:function(){var n=lu(bo)[0],e=vn().memoizedState;return[n,e]},useMutableSource:fg,useSyncExternalStore:hg,useId:bg,unstable_isNewReconciler:!1},F_={readContext:gn,useCallback:wg,useContext:gn,useEffect:Uf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:Eg,useReducer:uu,useRef:_g,useState:function(){return uu(bo)},useDebugValue:Bf,useDeferredValue:function(n){var e=vn();return pt===null?e.memoizedState=n:Tg(e,pt.memoizedState,n)},useTransition:function(){var n=uu(bo)[0],e=vn().memoizedState;return[n,e]},useMutableSource:fg,useSyncExternalStore:hg,useId:bg,unstable_isNewReconciler:!1};function ys(n,e){try{var t="",i=e;do t+=cv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function cu(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Rc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function Pg(n,e,t){t=ii(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){fl||(fl=!0,Vc=i),Rc(n,e)},t}function Rg(n,e,t){t=ii(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Rc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Rc(n,e),typeof i!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function id(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new O_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=J_.bind(null,n,e,t),e.then(n,n))}function rd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function sd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ii(-1,1),e.tag=2,Pi(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var k_=ui.ReactCurrentOwner,Gt=!1;function Ft(n,e,t,i){e.child=n===null?ug(e,null,t,i):_s(e,n.child,t,i)}function od(n,e,t,i,r){t=t.render;var s=e.ref;return cs(e,r),i=Of(n,e,t,i,s,r),t=kf(),n!==null&&!Gt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(et&&t&&Tf(e),e.flags|=1,Ft(n,e,i,r),e.child)}function ad(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Dg(n,e,s,i,r)):(n=Va(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:xo,t(o,i)&&n.ref===e.ref)return li(n,e,r)}return e.flags|=1,n=Ii(s,i),n.ref=e.ref,n.return=e,e.child=n}function Dg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(xo(s,i)&&n.ref===e.ref)if(Gt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Gt=!0);else return e.lanes=n.lanes,li(n,e,r)}return Dc(n,e,t,i,r)}function Ig(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(is,Zt),Zt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ze(is,Zt),Zt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ze(is,Zt),Zt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ze(is,Zt),Zt|=i;return Ft(n,e,r,t),e.child}function Ng(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Dc(n,e,t,i,r){var s=Wt(t)?cr:It.current;return s=gs(e,s),cs(e,r),t=Of(n,e,t,i,s,r),i=kf(),n!==null&&!Gt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(et&&i&&Tf(e),e.flags|=1,Ft(n,e,t,r),e.child)}function ld(n,e,t,i,r){if(Wt(t)){var s=!0;tl(e)}else s=!1;if(cs(e,r),e.stateNode===null)ka(n,e),ag(e,t,i),Pc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Wt(t)?cr:It.current,u=gs(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qh(e,o,i,u),yi=!1;var h=e.memoizedState;o.state=h,ol(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Ht.current||yi?(typeof c=="function"&&(Lc(e,t,c,i),l=e.memoizedState),(a=yi||Kh(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Wt(t)?cr:It.current,l=gs(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Qh(e,o,i,l),yi=!1,h=e.memoizedState,o.state=h,ol(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||Ht.current||yi?(typeof m=="function"&&(Lc(e,t,m,i),x=e.memoizedState),(u=yi||Kh(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Ic(n,e,t,i,s,r)}function Ic(n,e,t,i,r,s){Ng(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qh(e,t,!1),li(n,e,s);i=e.stateNode,k_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=_s(e,n.child,null,s),e.child=_s(e,null,a,s)):Ft(n,e,a,s),e.memoizedState=i.state,r&&qh(e,t,!0),e.child}function zg(n){var e=n.stateNode;e.pendingContext?Xh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Xh(n,e.context,!1),If(n,e.containerInfo)}function ud(n,e,t,i,r){return vs(),Cf(r),e.flags|=256,Ft(n,e,t,i),e.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fg(n,e,t){var i=e.pendingProps,r=tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ze(tt,r&1),n===null)return Cc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cl(o,i,0,null),n=ar(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=zc(t),e.memoizedState=Nc,n):Vf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return U_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ii(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ii(a,s):(s=ar(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?zc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Nc,i}return s=n.child,n=s.sibling,i=Ii(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vf(n,e){return e=Cl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ta(n,e,t,i){return i!==null&&Cf(i),_s(e,n.child,null,t),n=Vf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function U_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=cu(Error(te(422))),ta(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cl({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&_s(e,n.child,null,o),e.child.memoizedState=zc(o),e.memoizedState=Nc,s);if((e.mode&1)===0)return ta(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=cu(s,i,void 0),ta(n,e,o,i)}if(a=(o&n.childLanes)!==0,Gt||a){if(i=Mt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(n,r),Pn(i,n,r,-1))}return qf(),i=cu(Error(te(421))),ta(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=K_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Jt=Li(r.nextSibling),Kt=e,et=!0,bn=null,n!==null&&(an[ln++]=ti,an[ln++]=ni,an[ln++]=fr,ti=n.id,ni=n.overflow,fr=e),e=Vf(e,i.children),e.flags|=4096,e)}function cd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ac(n.return,e,t)}function fu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Og(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ft(n,e,i.children,t),i=tt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cd(n,t,e);else if(n.tag===19)cd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ze(tt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&al(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),fu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&al(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}fu(e,!0,t,null,s);break;case"together":fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),dr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Ii(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ii(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function B_(n,e,t){switch(e.tag){case 3:zg(e),vs();break;case 5:cg(e);break;case 1:Wt(e.type)&&tl(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(tt,tt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Fg(n,e,t):(Ze(tt,tt.current&1),n=li(n,e,t),n!==null?n.sibling:null);Ze(tt,tt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Og(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(tt,tt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ig(n,e,t)}return li(n,e,t)}var kg,Fc,Ug,Bg;kg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fc=function(){};Ug=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,nr(Un.current);var s=null;switch(t){case"input":r=rc(n,r),i=rc(n,i),s=[];break;case"select":r=rt({},r,{value:void 0}),i=rt({},i,{value:void 0}),s=[];break;case"textarea":r=ac(n,r),i=ac(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Qa)}uc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Je("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Bs(n,e){if(!et)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Lt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function V_(n,e,t){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Wt(e.type)&&el(),Lt(e),null;case 3:return i=e.stateNode,xs(),Ke(Ht),Ke(It),zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,bn!==null&&(Wc(bn),bn=null))),Fc(n,e),Lt(e),null;case 5:Nf(e);var r=nr(Eo.current);if(t=e.type,n!==null&&e.stateNode!=null)Ug(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Lt(e),null}if(n=nr(Un.current),Qo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[On]=e,i[Mo]=s,n=(e.mode&1)!==0,t){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)Je($s[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":xh(i,s),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Je("invalid",i);break;case"textarea":Sh(i,s),Je("invalid",i)}uc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,a,n),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",i)}switch(t){case"input":Wo(i),yh(i,s,!0);break;case"textarea":Wo(i),Mh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[On]=e,n[Mo]=i,kg(n,e,!1,!1),e.stateNode=n;e:{switch(o=cc(t,i),t){case"dialog":Je("cancel",n),Je("close",n),r=i;break;case"iframe":case"object":case"embed":Je("load",n),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)Je($s[r],n);r=i;break;case"source":Je("error",n),r=i;break;case"img":case"image":case"link":Je("error",n),Je("load",n),r=i;break;case"details":Je("toggle",n),r=i;break;case"input":xh(n,i),r=rc(n,i),Je("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=rt({},i,{value:void 0}),Je("invalid",n);break;case"textarea":Sh(n,i),r=ac(n,i),Je("invalid",n);break;default:r=i}uc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ho(n,l):typeof l=="number"&&ho(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Je("scroll",n):l!=null&&ff(n,s,l,o))}switch(t){case"input":Wo(n),yh(n,i,!1);break;case"textarea":Wo(n),Mh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?os(n,!!i.multiple,s,!1):i.defaultValue!=null&&os(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Qa)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(n&&e.stateNode!=null)Bg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=nr(Eo.current),nr(Un.current),Qo(e)){if(i=e.stateNode,t=e.memoizedProps,i[On]=e,(s=i.nodeValue!==t)&&(n=Kt,n!==null))switch(n.tag){case 3:Ko(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[On]=e,e.stateNode=i}return Lt(e),null;case 13:if(Ke(tt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&Jt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ig(),vs(),e.flags|=98560,s=!1;else if(s=Qo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[On]=e}else vs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else bn!==null&&(Wc(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(tt.current&1)!==0?mt===0&&(mt=3):qf())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return xs(),Fc(n,e),n===null&&yo(e.stateNode.containerInfo),Lt(e),null;case 10:return Pf(e.type._context),Lt(e),null;case 17:return Wt(e.type)&&el(),Lt(e),null;case 19:if(Ke(tt),s=e.memoizedState,s===null)return Lt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bs(s,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=al(n),o!==null){for(e.flags|=128,Bs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ze(tt,tt.current&1|2),e.child}n=n.sibling}s.tail!==null&&lt()>Ss&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304)}else{if(!i)if(n=al(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!et)return Lt(e),null}else 2*lt()-s.renderingStartTime>Ss&&t!==1073741824&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,t=tt.current,Ze(tt,i?t&1|2:t&1),e):(Lt(e),null);case 22:case 23:return Xf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Zt&1073741824)!==0&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function G_(n,e){switch(bf(e),e.tag){case 1:return Wt(e.type)&&el(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return xs(),Ke(Ht),Ke(It),zf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(Ke(tt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));vs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ke(tt),null;case 4:return xs(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var na=!1,Rt=!1,H_=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ns(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){at(n,e,i)}else t.current=null}function Oc(n,e,t){try{t()}catch(i){at(n,e,i)}}var fd=!1;function W_(n,e){if(yc=Za,n=Wm(),Ef(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sc={focusedElem:n,selectionRange:t},Za=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,d=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?p:En(e.type,p),d);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){at(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return x=fd,fd=!1,x}function oo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Oc(e,t,s)}r=r.next}while(r!==i)}}function Tl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function kc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Vg(n){var e=n.alternate;e!==null&&(n.alternate=null,Vg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[On],delete e[Mo],delete e[Ec],delete e[b_],delete e[C_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gg(n){return n.tag===5||n.tag===3||n.tag===4}function hd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Gg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qa));else if(i!==4&&(n=n.child,n!==null))for(Uc(n,e,t),n=n.sibling;n!==null;)Uc(n,e,t),n=n.sibling}function Bc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Bc(n,e,t),n=n.sibling;n!==null;)Bc(n,e,t),n=n.sibling}var wt=null,Tn=!1;function fi(n,e,t){for(t=t.child;t!==null;)Hg(n,e,t),t=t.sibling}function Hg(n,e,t){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(vl,t)}catch{}switch(t.tag){case 5:Rt||ns(t,e);case 6:var i=wt,r=Tn;wt=null,fi(n,e,t),wt=i,Tn=r,wt!==null&&(Tn?(n=wt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):wt.removeChild(t.stateNode));break;case 18:wt!==null&&(Tn?(n=wt,t=t.stateNode,n.nodeType===8?ru(n.parentNode,t):n.nodeType===1&&ru(n,t),vo(n)):ru(wt,t.stateNode));break;case 4:i=wt,r=Tn,wt=t.stateNode.containerInfo,Tn=!0,fi(n,e,t),wt=i,Tn=r;break;case 0:case 11:case 14:case 15:if(!Rt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Oc(t,e,o),r=r.next}while(r!==i)}fi(n,e,t);break;case 1:if(!Rt&&(ns(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){at(t,e,a)}fi(n,e,t);break;case 21:fi(n,e,t);break;case 22:t.mode&1?(Rt=(i=Rt)||t.memoizedState!==null,fi(n,e,t),Rt=i):fi(n,e,t);break;default:fi(n,e,t)}}function dd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new H_),e.forEach(function(i){var r=Q_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function xn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Tn=!1;break e;case 3:wt=a.stateNode.containerInfo,Tn=!0;break e;case 4:wt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(wt===null)throw Error(te(160));Hg(s,o,r),wt=null,Tn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){at(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wg(e,n),e=e.sibling}function Wg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(e,n),In(n),i&4){try{oo(3,n,n.return),Tl(3,n)}catch(p){at(n,n.return,p)}try{oo(5,n,n.return)}catch(p){at(n,n.return,p)}}break;case 1:xn(e,n),In(n),i&512&&t!==null&&ns(t,t.return);break;case 5:if(xn(e,n),In(n),i&512&&t!==null&&ns(t,t.return),n.flags&32){var r=n.stateNode;try{ho(r,"")}catch(p){at(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fm(r,s),cc(a,o);var u=cc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?gm(r,f):c==="dangerouslySetInnerHTML"?pm(r,f):c==="children"?ho(r,f):ff(r,c,f,u)}switch(a){case"input":sc(r,s);break;case"textarea":hm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?os(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(p){at(n,n.return,p)}}break;case 6:if(xn(e,n),In(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){at(n,n.return,p)}}break;case 3:if(xn(e,n),In(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(p){at(n,n.return,p)}break;case 4:xn(e,n),In(n);break;case 13:xn(e,n),In(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=lt())),i&4&&dd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rt=(u=Rt)||c,xn(e,n),Rt=u):xn(e,n),In(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(ge=n,c=n.child;c!==null;){for(f=ge=c;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:oo(4,h,h.return);break;case 1:ns(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){at(i,t,p)}}break;case 5:ns(h,h.return);break;case 22:if(h.memoizedState!==null){md(f);continue}}m!==null?(m.return=h,ge=m):md(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mm("display",o))}catch(p){at(n,n.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){at(n,n.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xn(e,n),In(n),i&4&&dd(n);break;case 21:break;default:xn(e,n),In(n)}}function In(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Gg(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=hd(n);Bc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=hd(n);Uc(n,a,o);break;default:throw Error(te(161))}}catch(l){at(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function j_(n,e,t){ge=n,jg(n)}function jg(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=na;var u=Rt;if(na=o,(Rt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?gd(r):l!==null?(l.return=o,ge=l):gd(r);for(;s!==null;)ge=s,jg(s),s=s.sibling;ge=r,na=a,Rt=u}pd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ge=s):pd(n)}}function pd(n){for(;ge!==null;){var e=ge;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Rt||Tl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:En(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Jh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Rt||e.flags&512&&kc(e)}catch(h){at(e,e.return,h)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function md(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function gd(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Tl(4,e)}catch(l){at(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){at(e,r,l)}}var s=e.return;try{kc(e)}catch(l){at(e,s,l)}break;case 5:var o=e.return;try{kc(e)}catch(l){at(e,o,l)}}}catch(l){at(e,e.return,l)}if(e===n){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var X_=Math.ceil,cl=ui.ReactCurrentDispatcher,Gf=ui.ReactCurrentOwner,pn=ui.ReactCurrentBatchConfig,Ve=0,Mt=null,ht=null,Et=0,Zt=0,is=Ui(0),mt=0,Ao=null,dr=0,bl=0,Hf=0,ao=null,Bt=null,Wf=0,Ss=1/0,Jn=null,fl=!1,Vc=null,Ri=null,ia=!1,Ei=null,hl=0,lo=0,Gc=null,Ua=-1,Ba=0;function Ot(){return(Ve&6)!==0?lt():Ua!==-1?Ua:Ua=lt()}function Di(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Et!==0?Et&-Et:L_.transition!==null?(Ba===0&&(Ba=Am()),Ba):(n=qe,n!==0||(n=window.event,n=n===void 0?16:zm(n.type)),n)}function Pn(n,e,t,i){if(50<lo)throw lo=0,Gc=null,Error(te(185));Fo(n,t,i),((Ve&2)===0||n!==Mt)&&(n===Mt&&((Ve&2)===0&&(bl|=t),mt===4&&Mi(n,Et)),jt(n,i),t===1&&Ve===0&&(e.mode&1)===0&&(Ss=lt()+500,Ml&&Bi()))}function jt(n,e){var t=n.callbackNode;Lv(n,e);var i=$a(n,n===Mt?Et:0);if(i===0)t!==null&&Th(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Th(t),e===1)n.tag===0?A_(vd.bind(null,n)):eg(vd.bind(null,n)),E_(function(){(Ve&6)===0&&Bi()}),t=null;else{switch(Lm(i)){case 1:t=gf;break;case 4:t=bm;break;case 16:t=Ya;break;case 536870912:t=Cm;break;default:t=Ya}t=Qg(t,Xg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Xg(n,e){if(Ua=-1,Ba=0,(Ve&6)!==0)throw Error(te(327));var t=n.callbackNode;if(fs()&&n.callbackNode!==t)return null;var i=$a(n,n===Mt?Et:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=dl(n,i);else{e=i;var r=Ve;Ve|=2;var s=Yg();(Mt!==n||Et!==e)&&(Jn=null,Ss=lt()+500,or(n,e));do try{$_();break}catch(a){qg(n,a)}while(1);Lf(),cl.current=s,Ve=r,ht!==null?e=0:(Mt=null,Et=0,e=mt)}if(e!==0){if(e===2&&(r=mc(n),r!==0&&(i=r,e=Hc(n,r))),e===1)throw t=Ao,or(n,0),Mi(n,i),jt(n,lt()),t;if(e===6)Mi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!q_(r)&&(e=dl(n,i),e===2&&(s=mc(n),s!==0&&(i=s,e=Hc(n,s))),e===1))throw t=Ao,or(n,0),Mi(n,i),jt(n,lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Zi(n,Bt,Jn);break;case 3:if(Mi(n,i),(i&130023424)===i&&(e=Wf+500-lt(),10<e)){if($a(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ot(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wc(Zi.bind(null,n,Bt,Jn),e);break}Zi(n,Bt,Jn);break;case 4:if(Mi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Ln(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X_(i/1960))-i,10<i){n.timeoutHandle=wc(Zi.bind(null,n,Bt,Jn),i);break}Zi(n,Bt,Jn);break;case 5:Zi(n,Bt,Jn);break;default:throw Error(te(329))}}}return jt(n,lt()),n.callbackNode===t?Xg.bind(null,n):null}function Hc(n,e){var t=ao;return n.current.memoizedState.isDehydrated&&(or(n,e).flags|=256),n=dl(n,e),n!==2&&(e=Bt,Bt=t,e!==null&&Wc(e)),n}function Wc(n){Bt===null?Bt=n:Bt.push.apply(Bt,n)}function q_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Rn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mi(n,e){for(e&=~Hf,e&=~bl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ln(e),i=1<<t;n[t]=-1,e&=~i}}function vd(n){if((Ve&6)!==0)throw Error(te(327));fs();var e=$a(n,0);if((e&1)===0)return jt(n,lt()),null;var t=dl(n,e);if(n.tag!==0&&t===2){var i=mc(n);i!==0&&(e=i,t=Hc(n,i))}if(t===1)throw t=Ao,or(n,0),Mi(n,e),jt(n,lt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Zi(n,Bt,Jn),jt(n,lt()),null}function jf(n,e){var t=Ve;Ve|=1;try{return n(e)}finally{Ve=t,Ve===0&&(Ss=lt()+500,Ml&&Bi())}}function pr(n){Ei!==null&&Ei.tag===0&&(Ve&6)===0&&fs();var e=Ve;Ve|=1;var t=pn.transition,i=qe;try{if(pn.transition=null,qe=1,n)return n()}finally{qe=i,pn.transition=t,Ve=e,(Ve&6)===0&&Bi()}}function Xf(){Zt=is.current,Ke(is)}function or(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,w_(t)),ht!==null)for(t=ht.return;t!==null;){var i=t;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&el();break;case 3:xs(),Ke(Ht),Ke(It),zf();break;case 5:Nf(i);break;case 4:xs();break;case 13:Ke(tt);break;case 19:Ke(tt);break;case 10:Pf(i.type._context);break;case 22:case 23:Xf()}t=t.return}if(Mt=n,ht=n=Ii(n.current,null),Et=Zt=e,mt=0,Ao=null,Hf=bl=dr=0,Bt=ao=null,tr!==null){for(e=0;e<tr.length;e++)if(t=tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}tr=null}return n}function qg(n,e){do{var t=ht;try{if(Lf(),Fa.current=ul,ll){for(var i=it.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ll=!1}if(hr=0,yt=pt=it=null,so=!1,To=0,Gf.current=null,t===null||t.return===null){mt=1,Ao=e,ht=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=rd(o);if(m!==null){m.flags&=-257,sd(m,o,a,s,e),m.mode&1&&id(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if((e&1)===0){id(s,u,e),qf();break e}l=Error(te(426))}}else if(et&&a.mode&1){var d=rd(o);if(d!==null){(d.flags&65536)===0&&(d.flags|=256),sd(d,o,a,s,e),Cf(ys(l,a));break e}}s=l=ys(l,a),mt!==4&&(mt=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Pg(s,l,e);Zh(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ri===null||!Ri.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Rg(s,a,e);Zh(s,y);break e}}s=s.return}while(s!==null)}Zg(t)}catch(M){e=M,ht===t&&t!==null&&(ht=t=t.return);continue}break}while(1)}function Yg(){var n=cl.current;return cl.current=ul,n===null?ul:n}function qf(){(mt===0||mt===3||mt===2)&&(mt=4),Mt===null||(dr&268435455)===0&&(bl&268435455)===0||Mi(Mt,Et)}function dl(n,e){var t=Ve;Ve|=2;var i=Yg();(Mt!==n||Et!==e)&&(Jn=null,or(n,e));do try{Y_();break}catch(r){qg(n,r)}while(1);if(Lf(),Ve=t,cl.current=i,ht!==null)throw Error(te(261));return Mt=null,Et=0,mt}function Y_(){for(;ht!==null;)$g(ht)}function $_(){for(;ht!==null&&!yv();)$g(ht)}function $g(n){var e=Kg(n.alternate,n,Zt);n.memoizedProps=n.pendingProps,e===null?Zg(n):ht=e,Gf.current=null}function Zg(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=V_(t,e,Zt),t!==null){ht=t;return}}else{if(t=G_(t,e),t!==null){t.flags&=32767,ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ht=null;return}}if(e=e.sibling,e!==null){ht=e;return}ht=e=n}while(e!==null);mt===0&&(mt=5)}function Zi(n,e,t){var i=qe,r=pn.transition;try{pn.transition=null,qe=1,Z_(n,e,t,i)}finally{pn.transition=r,qe=i}return null}function Z_(n,e,t,i){do fs();while(Ei!==null);if((Ve&6)!==0)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Pv(n,s),n===Mt&&(ht=Mt=null,Et=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ia||(ia=!0,Qg(Ya,function(){return fs(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=pn.transition,pn.transition=null;var o=qe;qe=1;var a=Ve;Ve|=4,Gf.current=null,W_(n,t),Wg(t,n),g_(Sc),Za=!!yc,Sc=yc=null,n.current=t,j_(t),Sv(),Ve=a,qe=o,pn.transition=s}else n.current=t;if(ia&&(ia=!1,Ei=n,hl=r),s=n.pendingLanes,s===0&&(Ri=null),Ev(t.stateNode),jt(n,lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(fl)throw fl=!1,n=Vc,Vc=null,n;return(hl&1)!==0&&n.tag!==0&&fs(),s=n.pendingLanes,(s&1)!==0?n===Gc?lo++:(lo=0,Gc=n):lo=0,Bi(),null}function fs(){if(Ei!==null){var n=Lm(hl),e=pn.transition,t=qe;try{if(pn.transition=null,qe=16>n?16:n,Ei===null)var i=!1;else{if(n=Ei,Ei=null,hl=0,(Ve&6)!==0)throw Error(te(331));var r=Ve;for(Ve|=4,ge=n.current;ge!==null;){var s=ge,o=s.child;if((ge.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:oo(8,c,s)}var f=c.child;if(f!==null)f.return=c,ge=f;else for(;ge!==null;){c=ge;var h=c.sibling,m=c.return;if(Vg(c),c===u){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var d=p.sibling;p.sibling=null,p=d}while(p!==null)}}ge=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ge=g;break e}ge=s.return}}var _=n.current;for(ge=_;ge!==null;){o=ge;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,ge=v;else e:for(o=_;ge!==null;){if(a=ge,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(M){at(a,a.return,M)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(Ve=r,Bi(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(vl,n)}catch{}i=!0}return i}finally{qe=t,pn.transition=e}}return!1}function _d(n,e,t){e=ys(t,e),e=Pg(n,e,1),n=Pi(n,e,1),e=Ot(),n!==null&&(Fo(n,1,e),jt(n,e))}function at(n,e,t){if(n.tag===3)_d(n,n,t);else for(;e!==null;){if(e.tag===3){_d(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ri===null||!Ri.has(i))){n=ys(t,n),n=Rg(e,n,1),e=Pi(e,n,1),n=Ot(),e!==null&&(Fo(e,1,n),jt(e,n));break}}e=e.return}}function J_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ot(),n.pingedLanes|=n.suspendedLanes&t,Mt===n&&(Et&t)===t&&(mt===4||mt===3&&(Et&130023424)===Et&&500>lt()-Wf?or(n,0):Hf|=t),jt(n,e)}function Jg(n,e){e===0&&((n.mode&1)===0?e=1:(e=qo,qo<<=1,(qo&130023424)===0&&(qo=4194304)));var t=Ot();n=ai(n,e),n!==null&&(Fo(n,e,t),jt(n,t))}function K_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Jg(n,t)}function Q_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Jg(n,t)}var Kg;Kg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ht.current)Gt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Gt=!1,B_(n,e,t);Gt=(n.flags&131072)!==0}else Gt=!1,et&&(e.flags&1048576)!==0&&tg(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ka(n,e),n=e.pendingProps;var r=gs(e,It.current);cs(e,t),r=Of(null,e,i,n,r,t);var s=kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(i)?(s=!0,tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=wl,e.stateNode=r,r._reactInternals=e,Pc(e,i,n,t),e=Ic(null,e,i,!0,s,t)):(e.tag=0,et&&s&&Tf(e),Ft(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ka(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tx(i),n=En(i,n),r){case 0:e=Dc(null,e,i,n,t);break e;case 1:e=ld(null,e,i,n,t);break e;case 11:e=od(null,e,i,n,t);break e;case 14:e=ad(null,e,i,En(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),Dc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),ld(n,e,i,r,t);case 3:e:{if(zg(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sg(n,e),ol(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(te(423)),e),e=ud(n,e,i,t,r);break e}else if(i!==r){r=ys(Error(te(424)),e),e=ud(n,e,i,t,r);break e}else for(Jt=Li(e.stateNode.containerInfo.firstChild),Kt=e,et=!0,bn=null,t=ug(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vs(),i===r){e=li(n,e,t);break e}Ft(n,e,i,t)}e=e.child}return e;case 5:return cg(e),n===null&&Cc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Mc(i,r)?o=null:s!==null&&Mc(i,s)&&(e.flags|=32),Ng(n,e),Ft(n,e,o,t),e.child;case 6:return n===null&&Cc(e),null;case 13:return Fg(n,e,t);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=_s(e,null,i,t):Ft(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),od(n,e,i,r,t);case 7:return Ft(n,e,e.pendingProps,t),e.child;case 8:return Ft(n,e,e.pendingProps.children,t),e.child;case 12:return Ft(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ze(rl,i._currentValue),i._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===r.children&&!Ht.current){e=li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ii(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ac(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ac(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,t),r=gn(r),i=i(r),e.flags|=1,Ft(n,e,i,t),e.child;case 14:return i=e.type,r=En(i,e.pendingProps),r=En(i.type,r),ad(n,e,i,r,t);case 15:return Dg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),ka(n,e),e.tag=1,Wt(i)?(n=!0,tl(e)):n=!1,cs(e,t),ag(e,i,r),Pc(e,i,r,t),Ic(null,e,i,!0,n,t);case 19:return Og(n,e,t);case 22:return Ig(n,e,t)}throw Error(te(156,e.tag))};function Qg(n,e){return Tm(n,e)}function ex(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(n,e,t,i){return new ex(n,e,t,i)}function Yf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tx(n){if(typeof n=="function")return Yf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===df)return 11;if(n===pf)return 14}return 2}function Ii(n,e){var t=n.alternate;return t===null?(t=fn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Va(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Yf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case qr:return ar(t.children,r,s,e);case hf:o=8,r|=8;break;case ec:return n=fn(12,t,e,r|2),n.elementType=ec,n.lanes=s,n;case tc:return n=fn(13,t,e,r),n.elementType=tc,n.lanes=s,n;case nc:return n=fn(19,t,e,r),n.elementType=nc,n.lanes=s,n;case lm:return Cl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case om:o=10;break e;case am:o=9;break e;case df:o=11;break e;case pf:o=14;break e;case xi:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=fn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ar(n,e,t,i){return n=fn(7,n,i,e),n.lanes=t,n}function Cl(n,e,t,i){return n=fn(22,n,i,e),n.elementType=lm,n.lanes=t,n.stateNode={isHidden:!1},n}function hu(n,e,t){return n=fn(6,n,null,e),n.lanes=t,n}function du(n,e,t){return e=fn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(n,e,t,i,r,s,o,a,l){return n=new nx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),n}function ix(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function e0(n){if(!n)return Oi;n=n._reactInternals;e:{if(Mr(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(Wt(t))return Qm(n,t,e)}return e}function t0(n,e,t,i,r,s,o,a,l){return n=$f(t,i,!0,n,r,s,o,a,l),n.context=e0(null),t=n.current,i=Ot(),r=Di(t),s=ii(i,r),s.callback=e!=null?e:null,Pi(t,s,r),n.current.lanes=r,Fo(n,r,i),jt(n,i),n}function Al(n,e,t,i){var r=e.current,s=Ot(),o=Di(r);return t=e0(t),e.context===null?e.context=t:e.pendingContext=t,e=ii(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Pi(r,e,o),n!==null&&(Pn(n,r,o,s),za(n,r,o)),o}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Zf(n,e){xd(n,e),(n=n.alternate)&&xd(n,e)}function rx(){return null}var n0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jf(n){this._internalRoot=n}Ll.prototype.render=Jf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Al(n,e,null,null)};Ll.prototype.unmount=Jf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;pr(function(){Al(null,n,null,null)}),e[oi]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var e=Dm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Si.length&&e!==0&&e<Si[t].priority;t++);Si.splice(t,0,n),t===0&&Nm(n)}};function Kf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function yd(){}function sx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=pl(o);s.call(u)}}var o=t0(e,i,n,0,null,!1,!1,"",yd);return n._reactRootContainer=o,n[oi]=o.current,yo(n.nodeType===8?n.parentNode:n),pr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=pl(l);a.call(u)}}var l=$f(n,0,!1,null,null,!1,!1,"",yd);return n._reactRootContainer=l,n[oi]=l.current,yo(n.nodeType===8?n.parentNode:n),pr(function(){Al(e,l,t,i)}),l}function Rl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pl(o);a.call(l)}}Al(e,o,n,r)}else o=sx(t,e,n,r,i);return pl(o)}Pm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ys(e.pendingLanes);t!==0&&(vf(e,t|1),jt(e,lt()),(Ve&6)===0&&(Ss=lt()+500,Bi()))}break;case 13:pr(function(){var i=ai(n,1);if(i!==null){var r=Ot();Pn(i,n,1,r)}}),Zf(n,1)}};_f=function(n){if(n.tag===13){var e=ai(n,134217728);if(e!==null){var t=Ot();Pn(e,n,134217728,t)}Zf(n,134217728)}};Rm=function(n){if(n.tag===13){var e=Di(n),t=ai(n,e);if(t!==null){var i=Ot();Pn(t,n,e,i)}Zf(n,e)}};Dm=function(){return qe};Im=function(n,e){var t=qe;try{return qe=n,e()}finally{qe=t}};hc=function(n,e,t){switch(e){case"input":if(sc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sl(i);if(!r)throw Error(te(90));cm(i),sc(i,r)}}}break;case"textarea":hm(n,t);break;case"select":e=t.value,e!=null&&os(n,!!t.multiple,e,!1)}};xm=jf;ym=pr;var ox={usingClientEntryPoint:!1,Events:[ko,Jr,Sl,vm,_m,jf]},Vs={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ax={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wm(n),n===null?null:n.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{vl=ra.inject(ax),kn=ra}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;tn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(e))throw Error(te(200));return ix(n,e,null,t)};tn.createRoot=function(n,e){if(!Kf(n))throw Error(te(299));var t=!1,i="",r=n0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(n,1,!1,null,null,t,!1,i,r),n[oi]=e.current,yo(n.nodeType===8?n.parentNode:n),new Jf(e)};tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=wm(e),n=n===null?null:n.stateNode,n};tn.flushSync=function(n){return pr(n)};tn.hydrate=function(n,e,t){if(!Pl(e))throw Error(te(200));return Rl(null,n,e,!0,t)};tn.hydrateRoot=function(n,e,t){if(!Kf(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=n0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=t0(e,null,n,1,t!=null?t:null,r,!1,s,o),n[oi]=e.current,yo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ll(e)};tn.render=function(n,e,t){if(!Pl(e))throw Error(te(200));return Rl(null,n,e,!1,t)};tn.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(te(40));return n._reactRootContainer?(pr(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};tn.unstable_batchedUpdates=jf;tn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Pl(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Rl(n,e,t,!1,i)};tn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=tn})(tm);var Sd=tm.exports;Ku.createRoot=Sd.createRoot,Ku.hydrateRoot=Sd.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="146",Ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lx=0,Md=1,ux=2,i0=1,cx=2,Zs=3,Ms=0,mn=1,Ti=2,Ni=0,hs=1,wd=2,Ed=3,Td=4,fx=5,Wr=100,hx=101,dx=102,bd=103,Cd=104,px=200,mx=201,gx=202,vx=203,r0=204,s0=205,_x=206,xx=207,yx=208,Sx=209,Mx=210,wx=0,Ex=1,Tx=2,jc=3,bx=4,Cx=5,Ax=6,Lx=7,o0=0,Px=1,Rx=2,ri=0,Dx=1,Ix=2,Nx=3,zx=4,Fx=5,a0=300,ws=301,Es=302,Xc=303,qc=304,Dl=306,Yc=1e3,Cn=1001,$c=1002,Vt=1003,Ad=1004,Ld=1005,un=1006,Ox=1007,Il=1008,mr=1009,kx=1010,Ux=1011,l0=1012,Bx=1013,ir=1014,rr=1015,Lo=1016,Vx=1017,Gx=1018,ds=1020,Hx=1021,Wx=1022,An=1023,jx=1024,Xx=1025,lr=1026,Ts=1027,qx=1028,Yx=1029,$x=1030,Zx=1031,Jx=1033,pu=33776,mu=33777,gu=33778,vu=33779,Pd=35840,Rd=35841,Dd=35842,Id=35843,Kx=36196,Nd=37492,zd=37496,Fd=37808,Od=37809,kd=37810,Ud=37811,Bd=37812,Vd=37813,Gd=37814,Hd=37815,Wd=37816,jd=37817,Xd=37818,qd=37819,Yd=37820,$d=37821,Zd=36492,gr=3e3,ot=3001,Qx=3200,ey=3201,u0=0,ty=1,Kn="srgb",sr="srgb-linear",_u=7680,ny=519,Jd=35044,Kd="300 es",Zc=1035;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,Qd=180/Math.PI;function Ps(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function iy(n,e){return(n%e+e)%e}function yu(n,e,t){return(1-t)*n+t*e}function ep(n){return(n&n-1)===0&&n!==0}function Jc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sa(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],g=r[6],_=r[1],v=r[4],y=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*p+a*_+l*M,s[3]=o*d+a*v+l*T,s[6]=o*g+a*y+l*A,s[1]=u*p+c*_+f*M,s[4]=u*d+c*v+f*T,s[7]=u*g+c*y+f*A,s[2]=h*p+m*_+x*M,s[5]=h*d+m*v+x*T,s[8]=h*g+m*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function c0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Su={[Kn]:{[sr]:ur},[sr]:{[Kn]:Ga}},yn={legacyMode:!0,get workingColorSpace(){return sr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Su[e]&&Su[e][t]!==void 0){const i=Su[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},Sn={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function aa(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=sr){return this.r=e,this.g=t,this.b=i,yn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=sr){if(e=iy(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Mu(o,s,e+1/3),this.g=Mu(o,s,e),this.b=Mu(o,s,e-1/3)}return yn.toWorkingColorSpace(this,r),this}setStyle(e,t=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kn){const i=f0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return yn.fromWorkingColorSpace(aa(this,dt),e),Dt(dt.r*255,0,255)<<16^Dt(dt.g*255,0,255)<<8^Dt(dt.b*255,0,255)<<0}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sr){yn.fromWorkingColorSpace(aa(this,dt),t);const i=dt.r,r=dt.g,s=dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=sr){return yn.fromWorkingColorSpace(aa(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Kn){return yn.fromWorkingColorSpace(aa(this,dt),e),e!==Kn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=i,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(oa);const i=yu(Sn.h,oa.h,t),r=yu(Sn.s,oa.s,t),s=yu(Sn.l,oa.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=f0;let Pr;class h0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Po("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class d0{constructor(e=null){this.isSource=!0,this.uuid=Ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wu(r[o].image)):s.push(wu(r[o]))}else s=wu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?h0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ry=0;class _n extends wr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Cn,r=Cn,s=un,o=Il,a=An,l=mr,u=1,c=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Ps(),this.name="",this.source=new d0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yc:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yc:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=a0;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],x=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(m+1)/2,M=(g+1)/2,T=(c+h)/4,A=(f+p)/4,S=(x+d)/4;return v>y&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=S/s),this.set(i,r,s,t),this}let _=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(d-x)/_,this.y=(f-p)/_,this.z=(h-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vr extends wr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:un,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new d0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class p0 extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sy extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==h||u!==m||c!==x){let d=1-a;const g=l*h+u*m+c*x+f*p,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,g*_);d=Math.sin(d*T)/M,a=Math.sin(a*T)/M}const y=a*_;if(l=l*d+h*y,u=u*d+m*y,c=c*d+x*y,f=f*d+p*y,d===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*m-u*h,e[t+1]=l*x+c*h+u*f-a*m,e[t+2]=u*x+c*m+a*h-l*f,e[t+3]=c*x-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f-h*m*x;break;case"YXZ":this._x=h*c*f+u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f+h*m*x;break;case"ZXY":this._x=h*c*f-u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f-h*m*x;break;case"ZYX":this._x=h*c*f-u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f+h*m*x;break;case"YZX":this._x=h*c*f+u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f-h*m*x;break;case"XZY":this._x=h*c*f-u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new D,tp=new _r;class Bo{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],h=e[l+2];c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),h=e.getZ(l);c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ji.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else i.boundingBox===null&&i.computeBoundingBox(),Tu.copy(i.boundingBox),Tu.applyMatrix4(e.matrixWorld),this.union(Tu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),la.subVectors(this.max,Gs),Rr.subVectors(e.a,Gs),Dr.subVectors(e.b,Gs),Ir.subVectors(e.c,Gs),hi.subVectors(Dr,Rr),di.subVectors(Ir,Dr),Xi.subVectors(Rr,Ir);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Xi.z,Xi.y,hi.z,0,-hi.x,di.z,0,-di.x,Xi.z,0,-Xi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Xi.y,Xi.x,0];return!bu(t,Rr,Dr,Ir,la)||(t=[1,0,0,0,1,0,0,0,1],!bu(t,Rr,Dr,Ir,la))?!1:(ua.crossVectors(hi,di),t=[ua.x,ua.y,ua.z],bu(t,Rr,Dr,Ir,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new D,new D,new D,new D,new D,new D,new D,new D],ji=new D,Tu=new Bo,Rr=new D,Dr=new D,Ir=new D,hi=new D,di=new D,Xi=new D,Gs=new D,la=new D,ua=new D,qi=new D;function bu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qi.fromArray(n,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),u=t.dot(qi),c=i.dot(qi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const oy=new Bo,Hs=new D,Cu=new D;class Nl{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Cu)),this.expandByPoint(Hs.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new D,Au=new D,ca=new D,pi=new D,Lu=new D,fa=new D,Pu=new D;class eh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Au.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Au);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=pi.dot(this.direction),l=-pi.dot(ca),u=pi.lengthSq(),c=Math.abs(1-o*o);let f,h,m,x;if(c>0)if(f=o*l-a,h=o*a-l,x=s*c,f>=0)if(h>=-x)if(h<=x){const p=1/c;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(ca).multiplyScalar(h).add(Au),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){Lu.subVectors(t,e),fa.subVectors(i,e),Pu.crossVectors(Lu,fa);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(pi,fa));if(l<0)return null;const u=a*this.direction.dot(Lu.cross(pi));if(u<0||l+u>o)return null;const c=-a*pi.dot(Pu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,f,h,m,x,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=h,g[3]=m,g[7]=x,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,x=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+x*u,t[5]=h-p*u,t[9]=-a*l,t[2]=p-h*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,x=u*c,p=u*f;t[0]=h+p*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,x=u*c,p=u*f;t[0]=h-p*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=p-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,x=a*c,p=a*f;t[0]=l*c,t[4]=x*u-m,t[8]=h*u+p,t[1]=l*f,t[5]=p*u+h,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,m=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+p,t[5]=o*c,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*c,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ly)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),mi.crossVectors(i,Yt),mi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),mi.crossVectors(i,Yt)),mi.normalize(),ha.crossVectors(Yt,mi),r[0]=mi.x,r[4]=ha.x,r[8]=Yt.x,r[1]=mi.y,r[5]=ha.y,r[9]=Yt.y,r[2]=mi.z,r[6]=ha.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],g=i[14],_=i[3],v=i[7],y=i[11],M=i[15],T=r[0],A=r[4],S=r[8],C=r[12],P=r[1],G=r[5],ue=r[9],B=r[13],F=r[2],X=r[6],K=r[10],Q=r[14],N=r[3],R=r[7],z=r[11],q=r[15];return s[0]=o*T+a*P+l*F+u*N,s[4]=o*A+a*G+l*X+u*R,s[8]=o*S+a*ue+l*K+u*z,s[12]=o*C+a*B+l*Q+u*q,s[1]=c*T+f*P+h*F+m*N,s[5]=c*A+f*G+h*X+m*R,s[9]=c*S+f*ue+h*K+m*z,s[13]=c*C+f*B+h*Q+m*q,s[2]=x*T+p*P+d*F+g*N,s[6]=x*A+p*G+d*X+g*R,s[10]=x*S+p*ue+d*K+g*z,s[14]=x*C+p*B+d*Q+g*q,s[3]=_*T+v*P+y*F+M*N,s[7]=_*A+v*G+y*X+M*R,s[11]=_*S+v*ue+y*K+M*z,s[15]=_*C+v*B+y*Q+M*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],g=e[15];return x*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+p*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+d*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],g=e[15],_=f*d*u-p*h*u+p*l*m-a*d*m-f*l*g+a*h*g,v=x*h*u-c*d*u-x*l*m+o*d*m+c*l*g-o*h*g,y=c*p*u-x*f*u+x*a*m-o*p*m-c*a*g+o*f*g,M=x*f*l-c*p*l-x*a*h+o*p*h+c*a*d-o*f*d,T=t*_+i*v+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*g-i*h*g)*A,e[2]=(a*d*s-p*l*s+p*r*u-i*d*u-a*r*g+i*l*g)*A,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*d*s-x*h*s+x*r*m-t*d*m-c*r*g+t*h*g)*A,e[6]=(x*l*s-o*d*s-x*r*u+t*d*u+o*r*g-t*l*g)*A,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*A,e[8]=y*A,e[9]=(x*f*s-c*p*s-x*i*m+t*p*m+c*i*g-t*f*g)*A,e[10]=(o*p*s-x*a*s+x*i*u-t*p*u-o*i*g+t*a*g)*A,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*A,e[12]=M*A,e[13]=(c*p*r-x*f*r+x*i*h-t*p*h-c*i*d+t*f*d)*A,e[14]=(x*a*r-o*p*r-x*i*l+t*p*l+o*i*d-t*a*d)*A,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,x=s*f,p=o*c,d=o*f,g=a*f,_=l*u,v=l*c,y=l*f,M=i.x,T=i.y,A=i.z;return r[0]=(1-(p+g))*M,r[1]=(m+y)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(h+g))*T,r[6]=(d+_)*T,r[7]=0,r[8]=(x+v)*A,r[9]=(d-_)*A,r[10]=(1-(h+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/s,c=1/o,f=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=c,Mn.elements[5]*=c,Mn.elements[6]*=c,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,h=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Nr=new D,Mn=new ut,ay=new D(0,0,0),ly=new D(1,1,1),mi=new D,ha=new D,Yt=new D,np=new ut,ip=new _r;class Vo{constructor(e=0,t=0,i=0,r=Vo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Vo.DefaultOrder="XYZ";Vo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uy=0;const rp=new D,zr=new _r,qn=new ut,da=new D,Ws=new D,cy=new D,fy=new _r,sp=new D(1,0,0),op=new D(0,1,0),ap=new D(0,0,1),hy={type:"added"},lp={type:"removed"};class Tt extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new D,t=new Vo,i=new _r,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new hn}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DefaultMatrixWorldAutoUpdate,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ws,da,this.up):qn.lookAt(da,Ws,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(qn),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(lp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new D(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;Tt.DefaultMatrixWorldAutoUpdate=!0;const wn=new D,Yn=new D,Ru=new D,$n=new D,Fr=new D,Or=new D,up=new D,Du=new D,Iu=new D,Nu=new D;class ei{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wn.subVectors(r,t),Yn.subVectors(i,t),Ru.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Yn),l=wn.dot(Ru),u=Yn.dot(Yn),c=Yn.dot(Ru),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,$n),l.set(0,0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),Yn.subVectors(e,t),wn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),wn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ei.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Or.subVectors(s,i),Du.subVectors(e,i);const l=Fr.dot(Du),u=Or.dot(Du);if(l<=0&&u<=0)return t.copy(i);Iu.subVectors(e,r);const c=Fr.dot(Iu),f=Or.dot(Iu);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Fr,o);Nu.subVectors(e,s);const m=Fr.dot(Nu),x=Or.dot(Nu);if(x>=0&&m<=x)return t.copy(s);const p=m*u-l*x;if(p<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Or,a);const d=c*x-m*f;if(d<=0&&f-c>=0&&m-x>=0)return up.subVectors(s,r),a=(f-c)/(f-c+(m-x)),t.copy(r).addScaledVector(up,a);const g=1/(d+p+h);return o=p*g,a=h*g,t.copy(i).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dy=0;class Rs extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=hs,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=r0,this.blendDst=s0,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ny,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_u,this.stencilZFail=_u,this.stencilZPass=_u,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Ms&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nh extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new D,pa=new oe;class Bn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Jd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class m0 extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class g0 extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let py=0;const on=new ut,zu=new Tt,kr=new D,$t=new Bo,js=new Bo,xt=new D;class Gn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?g0:m0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new hn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors($t.min,js.min),$t.expandByPoint(xt),xt.addVectors($t.max,js.max),$t.expandByPoint(xt)):($t.expandByPoint(js.min),$t.expandByPoint(js.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)xt.fromBufferAttribute(a,u),l&&(kr.fromBufferAttribute(e,u),xt.add(kr)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new D,c[P]=new D;const f=new D,h=new D,m=new D,x=new oe,p=new oe,d=new oe,g=new D,_=new D;function v(P,G,ue){f.fromArray(r,P*3),h.fromArray(r,G*3),m.fromArray(r,ue*3),x.fromArray(o,P*2),p.fromArray(o,G*2),d.fromArray(o,ue*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const B=1/(p.x*d.y-d.x*p.y);!isFinite(B)||(g.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),_.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(B),u[P].add(g),u[G].add(g),u[ue].add(g),c[P].add(_),c[G].add(_),c[ue].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,G=y.length;P<G;++P){const ue=y[P],B=ue.start,F=ue.count;for(let X=B,K=B+F;X<K;X+=3)v(i[X+0],i[X+1],i[X+2])}const M=new D,T=new D,A=new D,S=new D;function C(P){A.fromArray(s,P*3),S.copy(A);const G=u[P];M.copy(G),M.sub(A.multiplyScalar(A.dot(G))).normalize(),T.crossVectors(S,G);const B=T.dot(c[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=B}for(let P=0,G=y.length;P<G;++P){const ue=y[P],B=ue.start,F=ue.count;for(let X=B,K=B+F;X<K;X+=3)C(i[X+0]),C(i[X+1]),C(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,d),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let g=0;g<c;g++)h[x++]=u[m++]}return new Bn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new ut,Ur=new eh,Fu=new Nl,gi=new D,vi=new D,_i=new D,Ou=new D,ku=new D,Uu=new D,ma=new D,ga=new D,va=new D,_a=new oe,xa=new oe,ya=new oe,Bu=new D,Sa=new D;class dn extends Tt{constructor(e=new Gn,t=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Fu.copy(i.boundingSphere),Fu.applyMatrix4(s),e.ray.intersectsSphere(Fu)===!1)||(cp.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(cp),i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const g=m[p],_=r[g.materialIndex],v=Math.max(g.start,x.start),y=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let M=v,T=y;M<T;M+=3){const A=a.getX(M),S=a.getX(M+1),C=a.getX(M+2);o=Ma(this,_,e,Ur,l,u,c,f,h,A,S,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),d=Math.min(a.count,x.start+x.count);for(let g=p,_=d;g<_;g+=3){const v=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);o=Ma(this,r,e,Ur,l,u,c,f,h,v,y,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const g=m[p],_=r[g.materialIndex],v=Math.max(g.start,x.start),y=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let M=v,T=y;M<T;M+=3){const A=M,S=M+1,C=M+2;o=Ma(this,_,e,Ur,l,u,c,f,h,A,S,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),d=Math.min(l.count,x.start+x.count);for(let g=p,_=d;g<_;g+=3){const v=g,y=g+1,M=g+2;o=Ma(this,r,e,Ur,l,u,c,f,h,v,y,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function my(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Ti,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Sa);return u<t.near||u>t.far?null:{distance:u,point:Sa.clone(),object:n}}function Ma(n,e,t,i,r,s,o,a,l,u,c,f){gi.fromBufferAttribute(r,u),vi.fromBufferAttribute(r,c),_i.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){ma.set(0,0,0),ga.set(0,0,0),va.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const d=h[x],g=s[x];d!==0&&(Ou.fromBufferAttribute(g,u),ku.fromBufferAttribute(g,c),Uu.fromBufferAttribute(g,f),o?(ma.addScaledVector(Ou,d),ga.addScaledVector(ku,d),va.addScaledVector(Uu,d)):(ma.addScaledVector(Ou.sub(gi),d),ga.addScaledVector(ku.sub(vi),d),va.addScaledVector(Uu.sub(_i),d)))}gi.add(ma),vi.add(ga),_i.add(va)}n.isSkinnedMesh&&(n.boneTransform(u,gi),n.boneTransform(c,vi),n.boneTransform(f,_i));const m=my(n,e,t,i,gi,vi,_i,Bu);if(m){a&&(_a.fromBufferAttribute(a,u),xa.fromBufferAttribute(a,c),ya.fromBufferAttribute(a,f),m.uv=ei.getUV(Bu,gi,vi,_i,_a,xa,ya,new oe)),l&&(_a.fromBufferAttribute(l,u),xa.fromBufferAttribute(l,c),ya.fromBufferAttribute(l,f),m.uv2=ei.getUV(Bu,gi,vi,_i,_a,xa,ya,new oe));const x={a:u,b:c,c:f,normal:new D,materialIndex:0};ei.getNormal(gi,vi,_i,x.normal),m.face=x}return m}class Vi extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(f,2));function x(p,d,g,_,v,y,M,T,A,S,C){const P=y/A,G=M/S,ue=y/2,B=M/2,F=T/2,X=A+1,K=S+1;let Q=0,N=0;const R=new D;for(let z=0;z<K;z++){const q=z*G-B;for(let Z=0;Z<X;Z++){const ee=Z*P-ue;R[p]=ee*_,R[d]=q*v,R[g]=F,u.push(R.x,R.y,R.z),R[p]=0,R[d]=0,R[g]=T>0?1:-1,c.push(R.x,R.y,R.z),f.push(Z/A),f.push(1-z/S),Q+=1}}for(let z=0;z<S;z++)for(let q=0;q<A;q++){const Z=h+q+X*z,ee=h+q+X*(z+1),he=h+(q+1)+X*(z+1),we=h+(q+1)+X*z;l.push(Z,ee,we),l.push(ee,he,we),N+=6}a.addGroup(m,N,C),m+=N,h+=Q}}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=bs(n[t]);for(const r in i)e[r]=i[r]}return e}function gy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const vy={clone:bs,merge:zt};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class v0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends v0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=90,Vr=1;class yy extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new cn(Br,Vr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new cn(Br,Vr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new cn(Br,Vr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new cn(Br,Vr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new cn(Br,Vr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const u=new cn(Br,Vr,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new D(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class _0 extends _n{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vi(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ni});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===Il&&(t.minFilter=un),new yy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Vu=new D,My=new D,wy=new hn;class Ji{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vu.subVectors(i,t).cross(My.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wy.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Nl,wa=new D;class ih{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,f-l,p-h,v-d).normalize(),t[1].setComponents(a+r,f+l,p+h,v+d).normalize(),t[2].setComponents(a+s,f+u,p+m,v+g).normalize(),t[3].setComponents(a-s,f-u,p-m,v-g).normalize(),t[4].setComponents(a-o,f-c,p-x,v-_).normalize(),t[5].setComponents(a+o,f+c,p+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wa.x=r.normal.x>0?e.max.x:e.min.x,wa.y=r.normal.y>0?e.max.y:e.min.y,wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function x0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ey(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const h=c.array,m=c.updateRange;n.bindBuffer(f,u),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class rh extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],x=[],p=[],d=[];for(let g=0;g<c;g++){const _=g*h-o;for(let v=0;v<u;v++){const y=v*f-s;x.push(y,-_,0),p.push(0,0,1),d.push(v/a),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,y=_+u*(g+1),M=_+1+u*(g+1),T=_+1+u*g;m.push(v,y,T),m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(d,2))}static fromJSON(e){return new rh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry="vec3 transformed = vec3( position );",Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ny=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,c1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,d1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,v1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,x1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,y1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,F1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,U1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,sS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,mS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_S=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,SS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Ty,alphamap_pars_fragment:by,alphatest_fragment:Cy,alphatest_pars_fragment:Ay,aomap_fragment:Ly,aomap_pars_fragment:Py,begin_vertex:Ry,beginnormal_vertex:Dy,bsdfs:Iy,iridescence_fragment:Ny,bumpmap_pars_fragment:zy,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:Oy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Uy,color_fragment:By,color_pars_fragment:Vy,color_pars_vertex:Gy,color_vertex:Hy,common:Wy,cube_uv_reflection_fragment:jy,defaultnormal_vertex:Xy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:$y,emissivemap_pars_fragment:Zy,encodings_fragment:Jy,encodings_pars_fragment:Ky,envmap_fragment:Qy,envmap_common_pars_fragment:e1,envmap_pars_fragment:t1,envmap_pars_vertex:n1,envmap_physical_pars_fragment:p1,envmap_vertex:i1,fog_vertex:r1,fog_pars_vertex:s1,fog_fragment:o1,fog_pars_fragment:a1,gradientmap_pars_fragment:l1,lightmap_fragment:u1,lightmap_pars_fragment:c1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:h1,lights_pars_begin:d1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:v1,lights_phong_pars_fragment:_1,lights_physical_fragment:x1,lights_physical_pars_fragment:y1,lights_fragment_begin:S1,lights_fragment_maps:M1,lights_fragment_end:w1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:C1,map_fragment:A1,map_pars_fragment:L1,map_particle_fragment:P1,map_particle_pars_fragment:R1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:I1,morphcolor_vertex:N1,morphnormal_vertex:z1,morphtarget_pars_vertex:F1,morphtarget_vertex:O1,normal_fragment_begin:k1,normal_fragment_maps:U1,normal_pars_fragment:B1,normal_pars_vertex:V1,normal_vertex:G1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:q1,output_fragment:Y1,packing:$1,premultiplied_alpha_fragment:Z1,project_vertex:J1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:eS,roughnessmap_pars_fragment:tS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:sS,skinbase_vertex:oS,skinning_pars_vertex:aS,skinning_vertex:lS,skinnormal_vertex:uS,specularmap_fragment:cS,specularmap_pars_fragment:fS,tonemapping_fragment:hS,tonemapping_pars_fragment:dS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:vS,uv_vertex:_S,uv2_pars_fragment:xS,uv2_pars_vertex:yS,uv2_vertex:SS,worldpos_vertex:MS,background_vert:wS,background_frag:ES,backgroundCube_vert:TS,backgroundCube_frag:bS,cube_vert:CS,cube_frag:AS,depth_vert:LS,depth_frag:PS,distanceRGBA_vert:RS,distanceRGBA_frag:DS,equirect_vert:IS,equirect_frag:NS,linedashed_vert:zS,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:kS,meshlambert_vert:US,meshlambert_frag:BS,meshmatcap_vert:VS,meshmatcap_frag:GS,meshnormal_vert:HS,meshnormal_frag:WS,meshphong_vert:jS,meshphong_frag:XS,meshphysical_vert:qS,meshphysical_frag:YS,meshtoon_vert:$S,meshtoon_frag:ZS,points_vert:JS,points_frag:KS,shadow_vert:QS,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},Fn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Fn.physical={uniforms:zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function iM(n,e,t,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function x(d,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=n.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Dl)?(c===void 0&&(c=new dn(new Vi(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:bs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,(f!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new dn(new rh(2,2),new xr({name:"BackgroundMaterial",uniforms:bs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null))}function p(d,g){i.buffers.color.setClear(d.r,d.g,d.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:x}}function rM(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let u=l,c=!1;function f(F,X,K,Q,N){let R=!1;if(o){const z=p(Q,K,X);u!==z&&(u=z,m(u.object)),R=g(F,Q,K,N),R&&_(F,Q,K,N)}else{const z=X.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==z)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=z,R=!0)}N!==null&&t.update(N,34963),(R||c)&&(c=!1,S(F,X,K,Q),N!==null&&n.bindBuffer(34963,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,X,K){const Q=K.wireframe===!0;let N=a[F.id];N===void 0&&(N={},a[F.id]=N);let R=N[X.id];R===void 0&&(R={},N[X.id]=R);let z=R[Q];return z===void 0&&(z=d(h()),R[Q]=z),z}function d(F){const X=[],K=[],Q=[];for(let N=0;N<r;N++)X[N]=0,K[N]=0,Q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:Q,object:F,attributes:{},index:null}}function g(F,X,K,Q){const N=u.attributes,R=X.attributes;let z=0;const q=K.getAttributes();for(const Z in q)if(q[Z].location>=0){const he=N[Z];let we=R[Z];if(we===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(we=F.instanceColor)),he===void 0||he.attribute!==we||we&&he.data!==we.data)return!0;z++}return u.attributesNum!==z||u.index!==Q}function _(F,X,K,Q){const N={},R=X.attributes;let z=0;const q=K.getAttributes();for(const Z in q)if(q[Z].location>=0){let he=R[Z];he===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(he=F.instanceColor));const we={};we.attribute=he,he&&he.data&&(we.data=he.data),N[Z]=we,z++}u.attributes=N,u.attributesNum=z,u.index=Q}function v(){const F=u.newAttributes;for(let X=0,K=F.length;X<K;X++)F[X]=0}function y(F){M(F,0)}function M(F,X){const K=u.newAttributes,Q=u.enabledAttributes,N=u.attributeDivisors;K[F]=1,Q[F]===0&&(n.enableVertexAttribArray(F),Q[F]=1),N[F]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),N[F]=X)}function T(){const F=u.newAttributes,X=u.enabledAttributes;for(let K=0,Q=X.length;K<Q;K++)X[K]!==F[K]&&(n.disableVertexAttribArray(K),X[K]=0)}function A(F,X,K,Q,N,R){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(F,X,K,N,R):n.vertexAttribPointer(F,X,K,Q,N,R)}function S(F,X,K,Q){if(i.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=Q.attributes,R=K.getAttributes(),z=X.defaultAttributeValues;for(const q in R){const Z=R[q];if(Z.location>=0){let ee=N[q];if(ee===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const he=ee.normalized,we=ee.itemSize,H=t.get(ee);if(H===void 0)continue;const Le=H.buffer,Ee=H.type,Ae=H.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ce=ee.data,De=ce.stride,J=ee.offset;if(ce.isInstancedInterleavedBuffer){for(let Y=0;Y<Z.locationSize;Y++)M(Z.location+Y,ce.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Y=0;Y<Z.locationSize;Y++)y(Z.location+Y);n.bindBuffer(34962,Le);for(let Y=0;Y<Z.locationSize;Y++)A(Z.location+Y,we/Z.locationSize,Ee,he,De*Ae,(J+we/Z.locationSize*Y)*Ae)}else{if(ee.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)M(Z.location+ce,ee.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<Z.locationSize;ce++)y(Z.location+ce);n.bindBuffer(34962,Le);for(let ce=0;ce<Z.locationSize;ce++)A(Z.location+ce,we/Z.locationSize,Ee,he,we*Ae,we/Z.locationSize*ce*Ae)}}else if(z!==void 0){const he=z[q];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(Z.location,he);break;case 3:n.vertexAttrib3fv(Z.location,he);break;case 4:n.vertexAttrib4fv(Z.location,he);break;default:n.vertexAttrib1fv(Z.location,he)}}}}T()}function C(){ue();for(const F in a){const X=a[F];for(const K in X){const Q=X[K];for(const N in Q)x(Q[N].object),delete Q[N];delete X[K]}delete a[F]}}function P(F){if(a[F.id]===void 0)return;const X=a[F.id];for(const K in X){const Q=X[K];for(const N in Q)x(Q[N].object),delete Q[N];delete X[K]}delete a[F.id]}function G(F){for(const X in a){const K=a[X];if(K[F.id]===void 0)continue;const Q=K[F.id];for(const N in Q)x(Q[N].object),delete Q[N];delete K[F.id]}}function ue(){B(),c=!0,u!==l&&(u=l,m(u.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ue,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function sM(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function oM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),v=h>0,y=o||e.has("OES_texture_float"),M=v&&y,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function aM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ji,a=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=c(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,g=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?c(null):u();else{const _=s?0:i,v=_*4;let y=g.clippingState||null;l.value=y,y=c(x,h,v,m);for(let M=0;M!==v;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const g=m+p*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(d===null||d.length<g)&&(d=new Float32Array(g));for(let v=0,y=m;v!==p;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function lM(n){let e=new WeakMap;function t(o,a){return a===Xc?o.mapping=ws:a===qc&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xc||a===qc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Sy(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class y0 extends v0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,fp=[.125,.215,.35,.446,.526,.582],Qi=20,Gu=new y0,hp=new Xe;let Hu=null;const Ki=(1+Math.sqrt(5))/2,Hr=1/Ki,dp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ki,Hr),new D(0,Ki,-Hr),new D(Hr,0,Ki),new D(-Hr,0,Ki),new D(Ki,Hr,0),new D(-Ki,Hr,0)];class pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Hu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Lo,format:An,encoding:gr,depthBuffer:!1},r=mp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(s)),this._blurMaterial=cM(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,i,r){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(hp),c.toneMapping=ri,c.autoClear=!1;const m=new nh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new dn(new Vi,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(hp),p=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;Ea(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),p&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ws||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dp[(r-1)%dp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new dn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qi-1),p=s/x,d=isFinite(s)?1+Math.floor(c*p):Qi;d>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Qi}`);const g=[];let _=0;for(let A=0;A<Qi;++A){const S=A/p,C=Math.exp(-S*S/2);g.push(C),A===0?_+=C:A<d&&(_+=2*C)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],M=3*y*(r>v-rs?r-v+rs:0),T=4*(this._cubeSize-y);Ea(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Gu)}}function uM(n){const e=[],t=[],i=[];let r=n;const s=n-rs+1+fp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-rs?l=fp[o-n+rs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,x=6,p=3,d=2,g=1,_=new Float32Array(p*x*m),v=new Float32Array(d*x*m),y=new Float32Array(g*x*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,S=T>2?0:-1,C=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];_.set(C,p*x*T),v.set(h,d*x*T);const P=[T,T,T,T,T,T];y.set(P,g*x*T)}const M=new Gn;M.setAttribute("position",new Bn(_,p)),M.setAttribute("uv",new Bn(v,d)),M.setAttribute("faceIndex",new Bn(y,g)),e.push(M),r>rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mp(n,e,t){const i=new vr(n,e,t);return i.texture.mapping=Dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cM(n,e,t){const i=new Float32Array(Qi),r=new D(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function gp(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function vp(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Xc||l===qc,c=l===ws||l===Es;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new pp(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new pp(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function u(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const _=m.array;p=m.version;for(let v=0,y=_.length;v<y;v+=3){const M=_[v+0],T=_[v+1],A=_[v+2];h.push(M,T,T,A,A,M)}}else{const _=x.array;p=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const M=v+0,T=v+1,A=v+2;h.push(M,T,T,A,A,M)}}const d=new(c0(h)?g0:m0)(h,1);d.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,d)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function pM(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function mM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gM(n,e){return n[0]-e[0]}function vM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _M(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,h){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==d){let K=function(){F.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var x=K;g!==void 0&&g.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),T===!0&&(P=3);let G=c.attributes.position.count*P,ue=1;G>e.maxTextureSize&&(ue=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*ue*4*d),F=new p0(B,G,ue,d);F.type=rr,F.needsUpdate=!0;const X=P*4;for(let Q=0;Q<d;Q++){const N=A[Q],R=S[Q],z=C[Q],q=G*ue*4*Q;for(let Z=0;Z<N.count;Z++){const ee=Z*X;y===!0&&(o.fromBufferAttribute(N,Z),B[q+ee+0]=o.x,B[q+ee+1]=o.y,B[q+ee+2]=o.z,B[q+ee+3]=0),M===!0&&(o.fromBufferAttribute(R,Z),B[q+ee+4]=o.x,B[q+ee+5]=o.y,B[q+ee+6]=o.z,B[q+ee+7]=0),T===!0&&(o.fromBufferAttribute(z,Z),B[q+ee+8]=o.x,B[q+ee+9]=o.y,B[q+ee+10]=o.z,B[q+ee+11]=z.itemSize===4?o.w:1)}}g={count:d,texture:F,size:new oe(G,ue)},s.set(c,g),c.addEventListener("dispose",K)}let _=0;for(let y=0;y<m.length;y++)_+=m[y];const v=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=i[c.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];i[c.id]=d}for(let M=0;M<p;M++){const T=d[M];T[0]=M,T[1]=m[M]}d.sort(vM);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(gM);const g=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const T=a[M],A=T[0],S=T[1];A!==Number.MAX_SAFE_INTEGER&&S?(g&&c.getAttribute("morphTarget"+M)!==g[A]&&c.setAttribute("morphTarget"+M,g[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=S,v+=S):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const y=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function xM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const S0=new _n,M0=new p0,w0=new sy,E0=new _0,_p=[],xp=[],yp=new Float32Array(16),Sp=new Float32Array(9),Mp=new Float32Array(4);function Ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_p[r];if(s===void 0&&(s=new Float32Array(r),_p[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zl(n,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function EM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Mp.set(i),n.uniformMatrix2fv(this.addr,!1,Mp),vt(t,i)}}function TM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Sp.set(i),n.uniformMatrix3fv(this.addr,!1,Sp),vt(t,i)}}function bM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;yp.set(i),n.uniformMatrix4fv(this.addr,!1,yp),vt(t,i)}}function CM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function RM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function zM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||S0,r)}function FM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||w0,r)}function OM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||E0,r)}function kM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||M0,r)}function UM(n){switch(n){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return wM;case 35674:return EM;case 35675:return TM;case 35676:return bM;case 5124:case 35670:return CM;case 35667:case 35671:return AM;case 35668:case 35672:return LM;case 35669:case 35673:return PM;case 5125:return RM;case 36294:return DM;case 36295:return IM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return kM}}function BM(n,e){n.uniform1fv(this.addr,e)}function VM(n,e){const t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function GM(n,e){const t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function HM(n,e){const t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function WM(n,e){const t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jM(n,e){const t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XM(n,e){const t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qM(n,e){n.uniform1iv(this.addr,e)}function YM(n,e){n.uniform2iv(this.addr,e)}function $M(n,e){n.uniform3iv(this.addr,e)}function ZM(n,e){n.uniform4iv(this.addr,e)}function JM(n,e){n.uniform1uiv(this.addr,e)}function KM(n,e){n.uniform2uiv(this.addr,e)}function QM(n,e){n.uniform3uiv(this.addr,e)}function ew(n,e){n.uniform4uiv(this.addr,e)}function tw(n,e,t){const i=this.cache,r=e.length,s=zl(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||S0,s[o])}function nw(n,e,t){const i=this.cache,r=e.length,s=zl(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||w0,s[o])}function iw(n,e,t){const i=this.cache,r=e.length,s=zl(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||E0,s[o])}function rw(n,e,t){const i=this.cache,r=e.length,s=zl(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||M0,s[o])}function sw(n){switch(n){case 5126:return BM;case 35664:return VM;case 35665:return GM;case 35666:return HM;case 35674:return WM;case 35675:return jM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return KM;case 36295:return QM;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class ow{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=UM(t.type)}}class aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=sw(t.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function wp(n,e){n.seq.push(e),n.map[e.id]=e}function uw(n,e,t){const i=n.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){wp(t,u===void 0?new ow(a,n,e):new aw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lw(a),wp(t,f)),t=f}}}class Ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);uw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ep(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let cw=0;function fw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function hw(n){switch(n){case gr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Tp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fw(n.getShaderSource(e),o)}else return r}function dw(n,e){const t=hw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pw(n,e){let t;switch(e){case Dx:t="Linear";break;case Ix:t="Reinhard";break;case Nx:t="OptimizedCineon";break;case zx:t="ACESFilmic";break;case Fx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mw(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function gw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function bp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(_w,xw)}function xw(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kc(t)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(n){return n.replace(yw,Sw)}function Sw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zs&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Es:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ew(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Tw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case o0:e="ENVMAP_BLENDING_MULTIPLY";break;case Px:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function bw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Mw(t),u=ww(t),c=Ew(t),f=Tw(t),h=bw(t),m=t.isWebGL2?"":mw(t),x=gw(s),p=r.createProgram();let d,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(Js).join(`
`),d.length>0&&(d+=`
`),g=[m,x].filter(Js).join(`
`),g.length>0&&(g+=`
`)):(d=[Lp(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),g=[m,Lp(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ne.tonemapping_pars_fragment:"",t.toneMapping!==ri?pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,dw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Kc(o),o=bp(o,t),o=Cp(o,t),a=Kc(a),a=bp(a,t),a=Cp(a,t),o=Ap(o),a=Ap(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+d+o,y=_+g+a,M=Ep(r,35633,v),T=Ep(r,35632,y);if(r.attachShader(p,M),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(T).trim();let ue=!0,B=!0;if(r.getProgramParameter(p,35714)===!1){ue=!1;const F=Tp(r,M,"vertex"),X=Tp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+F+`
`+X)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||G==="")&&(B=!1);B&&(this.diagnostics={runnable:ue,programLog:C,vertexShader:{log:P,prefix:d},fragmentShader:{log:G,prefix:g}})}r.deleteShader(M),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Ha(r,p)),A};let S;return this.getAttributes=function(){return S===void 0&&(S=vw(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}let Aw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pw(e),t.set(e,i)),i}}class Pw{constructor(e){this.id=Aw++,this.code=e,this.usedTimes=0}}function Rw(n,e,t,i,r,s,o){const a=new th,l=new Lw,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,C,P,G,ue){const B=G.fog,F=ue.geometry,X=S.isMeshStandardMaterial?G.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),Q=!!K&&K.mapping===Dl?K.image.height:null,N=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const R=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,z=R!==void 0?R.length:0;let q=0;F.morphAttributes.position!==void 0&&(q=1),F.morphAttributes.normal!==void 0&&(q=2),F.morphAttributes.color!==void 0&&(q=3);let Z,ee,he,we;if(N){const De=Fn[N];Z=De.vertexShader,ee=De.fragmentShader}else Z=S.vertexShader,ee=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const H=n.getRenderTarget(),Le=S.alphaTest>0,Ee=S.clearcoat>0,Ae=S.iridescence>0;return{isWebGL2:c,shaderID:N,shaderName:S.type,vertexShader:Z,fragmentShader:ee,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:ue.isInstancedMesh===!0,instancingColor:ue.isInstancedMesh===!0&&ue.instanceColor!==null,supportsVertexTextures:h,outputEncoding:H===null?n.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:gr,map:!!S.map,matcap:!!S.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===ty,tangentSpaceNormalMap:S.normalMapType===u0,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===ot,clearcoat:Ee,clearcoatMap:Ee&&!!S.clearcoatMap,clearcoatRoughnessMap:Ee&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!S.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!S.iridescenceMap,iridescenceThicknessMap:Ae&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===hs,alphaMap:!!S.alphaMap,alphaTest:Le,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!F.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:ri,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ti,flipSided:S.side===mn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)C.push(P),C.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(C,S),_(C,S),C.push(n.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),S.push(a.mask)}function v(S){const C=x[S.type];let P;if(C){const G=Fn[C];P=vy.clone(G.uniforms)}else P=S.uniforms;return P}function y(S,C){let P;for(let G=0,ue=u.length;G<ue;G++){const B=u[G];if(B.cacheKey===C){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Cw(n,C,S,s),u.push(P)),P}function M(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:A}}function Dw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Iw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,p,d){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},n[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=p,g.group=d),e++,g}function a(f,h,m,x,p,d){const g=o(f,h,m,x,p,d);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(f,h,m,x,p,d){const g=o(f,h,m,x,p,d);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(f,h){t.length>1&&t.sort(f||Iw),i.length>1&&i.sort(h||Pp),r.length>1&&r.sort(h||Pp)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Nw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rp,n.set(i,[o])):r>=s.length?(o=new Rp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Fw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ow=0;function kw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uw(n,e){const t=new zw,i=Fw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(c,f){let h=0,m=0,x=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let p=0,d=0,g=0,_=0,v=0,y=0,M=0,T=0,A=0,S=0;c.sort(kw);const C=f!==!0?Math.PI:1;for(let G=0,ue=c.length;G<ue;G++){const B=c[G],F=B.color,X=B.intensity,K=B.distance,Q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=F.r*X*C,m+=F.g*X*C,x+=F.b*X*C;else if(B.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(B.sh.coefficients[N],X);else if(B.isDirectionalLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const R=B.shadow,z=i.get(B);z.shadowBias=R.bias,z.shadowNormalBias=R.normalBias,z.shadowRadius=R.radius,z.shadowMapSize=R.mapSize,r.directionalShadow[p]=z,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=B.shadow.matrix,y++}r.directional[p]=N,p++}else if(B.isSpotLight){const N=t.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(F).multiplyScalar(X*C),N.distance=K,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,r.spot[g]=N;const R=B.shadow;if(B.map&&(r.spotLightMap[A]=B.map,A++,R.updateMatrices(B),B.castShadow&&S++),r.spotLightMatrix[g]=R.matrix,B.castShadow){const z=i.get(B);z.shadowBias=R.bias,z.shadowNormalBias=R.normalBias,z.shadowRadius=R.radius,z.shadowMapSize=R.mapSize,r.spotShadow[g]=z,r.spotShadowMap[g]=Q,T++}g++}else if(B.isRectAreaLight){const N=t.get(B);N.color.copy(F).multiplyScalar(X),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),r.rectArea[_]=N,_++}else if(B.isPointLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity*C),N.distance=B.distance,N.decay=B.decay,B.castShadow){const R=B.shadow,z=i.get(B);z.shadowBias=R.bias,z.shadowNormalBias=R.normalBias,z.shadowRadius=R.radius,z.shadowMapSize=R.mapSize,z.shadowCameraNear=R.camera.near,z.shadowCameraFar=R.camera.far,r.pointShadow[d]=z,r.pointShadowMap[d]=Q,r.pointShadowMatrix[d]=B.shadow.matrix,M++}r.point[d]=N,d++}else if(B.isHemisphereLight){const N=t.get(B);N.skyColor.copy(B.color).multiplyScalar(X*C),N.groundColor.copy(B.groundColor).multiplyScalar(X*C),r.hemi[v]=N,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==p||P.pointLength!==d||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==A)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=_,r.point.length=d,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+A-S,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=S,P.directionalLength=p,P.pointLength=d,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=A,r.version=Ow++)}function u(c,f){let h=0,m=0,x=0,p=0,d=0;const g=f.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(y.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const M=r.hemi[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),d++}}}return{setup:l,setupView:u,state:r}}function Dp(n,e){const t=new Uw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Bw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Dp(n,e),t.set(s,[l])):o>=a.length?(l=new Dp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vw extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jw(n,e,t){let i=new ih;const r=new oe,s=new oe,o=new St,a=new Vw({depthPacking:ey}),l=new Gw,u={},c=t.maxTextureSize,f={0:mn,1:Ms,2:Ti},h=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Hw,fragmentShader:Ww}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Gn;x.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new dn(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0,this.render=function(y,M,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const A=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Ni),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let G=0,ue=y.length;G<ue;G++){const B=y[G],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const X=F.getFrameExtents();if(r.multiply(X),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,F.mapSize.y=s.y)),F.map===null){const Q=this.type!==Zs?{minFilter:Vt,magFilter:Vt}:{};F.map=new vr(r.x,r.y,Q),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const K=F.getViewportCount();for(let Q=0;Q<K;Q++){const N=F.getViewport(Q);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),P.viewport(o),F.updateMatrices(B,Q),i=F.getFrustum(),v(M,T,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Zs&&g(F,T),F.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(A,S,C)};function g(y,M){const T=e.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new vr(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(M,null,T,h,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(M,null,T,m,p,null)}function _(y,M,T,A,S,C){let P=null;const G=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(G!==void 0?P=G:P=T.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const ue=P.uuid,B=M.uuid;let F=u[ue];F===void 0&&(F={},u[ue]=F);let X=F[B];X===void 0&&(X=P.clone(),F[B]=X),P=X}return P.visible=M.visible,P.wireframe=M.wireframe,C===Zs?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=A,P.farDistance=S),P}function v(y,M,T,A,S){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Zs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const G=e.update(y),ue=y.material;if(Array.isArray(ue)){const B=G.groups;for(let F=0,X=B.length;F<X;F++){const K=B[F],Q=ue[K.materialIndex];if(Q&&Q.visible){const N=_(y,Q,A,T.near,T.far,S);n.renderBufferDirect(T,null,G,N,y,K)}}}else if(ue.visible){const B=_(y,ue,A,T.near,T.far,S);n.renderBufferDirect(T,null,G,B,y,null)}}const P=y.children;for(let G=0,ue=P.length;G<ue;G++)v(P[G],M,T,A,S)}}function Xw(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const j=new St;let ie=null;const me=new St(0,0,0,0);return{setMask:function(Se){ie!==Se&&!I&&(n.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){I=Se},setClear:function(Se,He,_t,Ct,Gi){Gi===!0&&(Se*=Ct,He*=Ct,_t*=Ct),j.set(Se,He,_t,Ct),me.equals(j)===!1&&(n.clearColor(Se,He,_t,Ct),me.copy(j))},reset:function(){I=!1,ie=null,me.set(-1,0,0,0)}}}function s(){let I=!1,j=null,ie=null,me=null;return{setTest:function(Se){Se?Le(2929):Ee(2929)},setMask:function(Se){j!==Se&&!I&&(n.depthMask(Se),j=Se)},setFunc:function(Se){if(ie!==Se){switch(Se){case wx:n.depthFunc(512);break;case Ex:n.depthFunc(519);break;case Tx:n.depthFunc(513);break;case jc:n.depthFunc(515);break;case bx:n.depthFunc(514);break;case Cx:n.depthFunc(518);break;case Ax:n.depthFunc(516);break;case Lx:n.depthFunc(517);break;default:n.depthFunc(515)}ie=Se}},setLocked:function(Se){I=Se},setClear:function(Se){me!==Se&&(n.clearDepth(Se),me=Se)},reset:function(){I=!1,j=null,ie=null,me=null}}}function o(){let I=!1,j=null,ie=null,me=null,Se=null,He=null,_t=null,Ct=null,Gi=null;return{setTest:function(Qe){I||(Qe?Le(2960):Ee(2960))},setMask:function(Qe){j!==Qe&&!I&&(n.stencilMask(Qe),j=Qe)},setFunc:function(Qe,Wn,rn){(ie!==Qe||me!==Wn||Se!==rn)&&(n.stencilFunc(Qe,Wn,rn),ie=Qe,me=Wn,Se=rn)},setOp:function(Qe,Wn,rn){(He!==Qe||_t!==Wn||Ct!==rn)&&(n.stencilOp(Qe,Wn,rn),He=Qe,_t=Wn,Ct=rn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Gi!==Qe&&(n.clearStencil(Qe),Gi=Qe)},reset:function(){I=!1,j=null,ie=null,me=null,Se=null,He=null,_t=null,Ct=null,Gi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,g=!1,_=null,v=null,y=null,M=null,T=null,A=null,S=null,C=!1,P=null,G=null,ue=null,B=null,F=null;const X=n.getParameter(35661);let K=!1,Q=0;const N=n.getParameter(7938);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),K=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),K=Q>=2);let R=null,z={};const q=n.getParameter(3088),Z=n.getParameter(2978),ee=new St().fromArray(q),he=new St().fromArray(Z);function we(I,j,ie){const me=new Uint8Array(4),Se=n.createTexture();n.bindTexture(I,Se),n.texParameteri(I,10241,9728),n.texParameteri(I,10240,9728);for(let He=0;He<ie;He++)n.texImage2D(j+He,0,6408,1,1,0,6408,5121,me);return Se}const H={};H[3553]=we(3553,3553,1),H[34067]=we(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(2929),l.setFunc(jc),ae(!1),Pe(Md),Le(2884),se(Ni);function Le(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ee(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ae(I,j){return m[I]!==j?(n.bindFramebuffer(I,j),m[I]=j,i&&(I===36009&&(m[36160]=j),I===36160&&(m[36009]=j)),!0):!1}function ce(I,j){let ie=p,me=!1;if(I)if(ie=x.get(j),ie===void 0&&(ie=[],x.set(j,ie)),I.isWebGLMultipleRenderTargets){const Se=I.texture;if(ie.length!==Se.length||ie[0]!==36064){for(let He=0,_t=Se.length;He<_t;He++)ie[He]=36064+He;ie.length=Se.length,me=!0}}else ie[0]!==36064&&(ie[0]=36064,me=!0);else ie[0]!==1029&&(ie[0]=1029,me=!0);me&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function De(I){return d!==I?(n.useProgram(I),d=I,!0):!1}const J={[Wr]:32774,[hx]:32778,[dx]:32779};if(i)J[bd]=32775,J[Cd]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(J[bd]=I.MIN_EXT,J[Cd]=I.MAX_EXT)}const Y={[px]:0,[mx]:1,[gx]:768,[r0]:770,[Mx]:776,[yx]:774,[_x]:772,[vx]:769,[s0]:771,[Sx]:775,[xx]:773};function se(I,j,ie,me,Se,He,_t,Ct){if(I===Ni){g===!0&&(Ee(3042),g=!1);return}if(g===!1&&(Le(3042),g=!0),I!==fx){if(I!==_||Ct!==C){if((v!==Wr||T!==Wr)&&(n.blendEquation(32774),v=Wr,T=Wr),Ct)switch(I){case hs:n.blendFuncSeparate(1,771,1,771);break;case wd:n.blendFunc(1,1);break;case Ed:n.blendFuncSeparate(0,769,0,1);break;case Td:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:n.blendFuncSeparate(770,771,1,771);break;case wd:n.blendFunc(770,1);break;case Ed:n.blendFuncSeparate(0,769,0,1);break;case Td:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,A=null,S=null,_=I,C=Ct}return}Se=Se||j,He=He||ie,_t=_t||me,(j!==v||Se!==T)&&(n.blendEquationSeparate(J[j],J[Se]),v=j,T=Se),(ie!==y||me!==M||He!==A||_t!==S)&&(n.blendFuncSeparate(Y[ie],Y[me],Y[He],Y[_t]),y=ie,M=me,A=He,S=_t),_=I,C=null}function _e(I,j){I.side===Ti?Ee(2884):Le(2884);let ie=I.side===mn;j&&(ie=!ie),ae(ie),I.blending===hs&&I.transparent===!1?se(Ni):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const me=I.stencilWrite;u.setTest(me),me&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Le(32926):Ee(32926)}function ae(I){P!==I&&(I?n.frontFace(2304):n.frontFace(2305),P=I)}function Pe(I){I!==lx?(Le(2884),I!==G&&(I===Md?n.cullFace(1029):I===ux?n.cullFace(1028):n.cullFace(1032))):Ee(2884),G=I}function be(I){I!==ue&&(K&&n.lineWidth(I),ue=I)}function Me(I,j,ie){I?(Le(32823),(B!==j||F!==ie)&&(n.polygonOffset(j,ie),B=j,F=ie)):Ee(32823)}function Ye(I){I?Le(3089):Ee(3089)}function Ge(I){I===void 0&&(I=33984+X-1),R!==I&&(n.activeTexture(I),R=I)}function b(I,j,ie){ie===void 0&&(R===null?ie=33984+X-1:ie=R);let me=z[ie];me===void 0&&(me={type:void 0,texture:void 0},z[ie]=me),(me.type!==I||me.texture!==j)&&(R!==ie&&(n.activeTexture(ie),R=ie),n.bindTexture(I,j||H[I]),me.type=I,me.texture=j)}function w(){const I=z[R];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){ee.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function xe(I){he.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function ke(I,j){let ie=f.get(j);ie===void 0&&(ie=new WeakMap,f.set(j,ie));let me=ie.get(I);me===void 0&&(me=n.getUniformBlockIndex(j,I.name),ie.set(I,me))}function Ue(I,j){const me=f.get(j).get(I);c.get(I)!==me&&(n.uniformBlockBinding(j,me,I.__bindingPointIndex),c.set(I,me))}function $e(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},R=null,z={},m={},x=new WeakMap,p=[],d=null,g=!1,_=null,v=null,y=null,M=null,T=null,A=null,S=null,C=!1,P=null,G=null,ue=null,B=null,F=null,ee.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Le,disable:Ee,bindFramebuffer:Ae,drawBuffers:ce,useProgram:De,setBlending:se,setMaterial:_e,setFlipSided:ae,setCullFace:Pe,setLineWidth:be,setPolygonOffset:Me,setScissorTest:Ye,activeTexture:Ge,bindTexture:b,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:ne,texImage2D:ve,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:Ue,texStorage2D:O,texStorage3D:de,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:L,scissor:ye,viewport:xe,reset:$e}}function qw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return g?new OffscreenCanvas(b,w):Po("canvas")}function v(b,w,V,ne){let re=1;if((b.width>ne||b.height>ne)&&(re=ne/Math.max(b.width,b.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const fe=w?Jc:Math.floor,Ce=fe(re*b.width),L=fe(re*b.height);p===void 0&&(p=_(Ce,L));const O=V?_(Ce,L):p;return O.width=Ce,O.height=L,O.getContext("2d").drawImage(b,0,0,Ce,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ce+"x"+L+")."),O}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return ep(b.width)&&ep(b.height)}function M(b){return a?!1:b.wrapS!==Cn||b.wrapT!==Cn||b.minFilter!==Vt&&b.minFilter!==un}function T(b,w){return b.generateMipmaps&&w&&b.minFilter!==Vt&&b.minFilter!==un}function A(b){n.generateMipmap(b)}function S(b,w,V,ne,re=!1){if(a===!1)return w;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=w;return w===6403&&(V===5126&&(fe=33326),V===5131&&(fe=33325),V===5121&&(fe=33321)),w===33319&&(V===5126&&(fe=33328),V===5131&&(fe=33327),V===5121&&(fe=33323)),w===6408&&(V===5126&&(fe=34836),V===5131&&(fe=34842),V===5121&&(fe=ne===ot&&re===!1?35907:32856),V===32819&&(fe=32854),V===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function C(b,w,V){return T(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==Vt&&b.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){return b===Vt||b===Ad||b===Ld?9728:9729}function G(b){const w=b.target;w.removeEventListener("dispose",G),B(w),w.isVideoTexture&&x.delete(w)}function ue(b){const w=b.target;w.removeEventListener("dispose",ue),X(w)}function B(b){const w=i.get(b);if(w.__webglInit===void 0)return;const V=b.source,ne=d.get(V);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(b),Object.keys(ne).length===0&&d.delete(V)}i.remove(b)}function F(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const V=b.source,ne=d.get(V);delete ne[w.__cacheKey],o.memory.textures--}function X(b){const w=b.texture,V=i.get(b),ne=i.get(w);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(V.__webglFramebuffer[re]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let re=0;re<V.__webglColorRenderbuffer.length;re++)V.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,fe=w.length;re<fe;re++){const Ce=i.get(w[re]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(b)}let K=0;function Q(){K=0}function N(){const b=K;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),K+=1,b}function R(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function z(b,w){const V=i.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(V,b,w);return}}t.bindTexture(3553,V.__webglTexture,33984+w)}function q(b,w){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ee(V,b,w);return}t.bindTexture(35866,V.__webglTexture,33984+w)}function Z(b,w){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ee(V,b,w);return}t.bindTexture(32879,V.__webglTexture,33984+w)}function ee(b,w){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ae(V,b,w);return}t.bindTexture(34067,V.__webglTexture,33984+w)}const he={[Yc]:10497,[Cn]:33071,[$c]:33648},we={[Vt]:9728,[Ad]:9984,[Ld]:9986,[un]:9729,[Ox]:9985,[Il]:9987};function H(b,w,V){if(V?(n.texParameteri(b,10242,he[w.wrapS]),n.texParameteri(b,10243,he[w.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,he[w.wrapR]),n.texParameteri(b,10240,we[w.magFilter]),n.texParameteri(b,10241,we[w.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(w.wrapS!==Cn||w.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,P(w.magFilter)),n.texParameteri(b,10241,P(w.minFilter)),w.minFilter!==Vt&&w.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Lo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Le(b,w){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",G));const ne=w.source;let re=d.get(ne);re===void 0&&(re={},d.set(ne,re));const fe=R(w);if(fe!==b.__cacheKey){re[fe]===void 0&&(re[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[fe].usedTimes++;const Ce=re[b.__cacheKey];Ce!==void 0&&(re[b.__cacheKey].usedTimes--,Ce.usedTimes===0&&F(w)),b.__cacheKey=fe,b.__webglTexture=re[fe].texture}return V}function Ee(b,w,V){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=Le(b,w),fe=w.source;t.bindTexture(ne,b.__webglTexture,33984+V);const Ce=i.get(fe);if(fe.version!==Ce.__version||re===!0){t.activeTexture(33984+V),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const L=M(w)&&y(w.image)===!1;let O=v(w.image,L,!1,c);O=Ge(w,O);const de=y(O)||a,ve=s.convert(w.format,w.encoding);let pe=s.convert(w.type),ye=S(w.internalFormat,ve,pe,w.encoding,w.isVideoTexture);H(ne,w,de);let xe;const ke=w.mipmaps,Ue=a&&w.isVideoTexture!==!0,$e=Ce.__version===void 0||re===!0,I=C(w,O,de);if(w.isDepthTexture)ye=6402,a?w.type===rr?ye=36012:w.type===ir?ye=33190:w.type===ds?ye=35056:ye=33189:w.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===lr&&ye===6402&&w.type!==l0&&w.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ir,pe=s.convert(w.type)),w.format===Ts&&ye===6402&&(ye=34041,w.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ds,pe=s.convert(w.type))),$e&&(Ue?t.texStorage2D(3553,1,ye,O.width,O.height):t.texImage2D(3553,0,ye,O.width,O.height,0,ve,pe,null));else if(w.isDataTexture)if(ke.length>0&&de){Ue&&$e&&t.texStorage2D(3553,I,ye,ke[0].width,ke[0].height);for(let j=0,ie=ke.length;j<ie;j++)xe=ke[j],Ue?t.texSubImage2D(3553,j,0,0,xe.width,xe.height,ve,pe,xe.data):t.texImage2D(3553,j,ye,xe.width,xe.height,0,ve,pe,xe.data);w.generateMipmaps=!1}else Ue?($e&&t.texStorage2D(3553,I,ye,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,ve,pe,O.data)):t.texImage2D(3553,0,ye,O.width,O.height,0,ve,pe,O.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&$e&&t.texStorage3D(35866,I,ye,ke[0].width,ke[0].height,O.depth);for(let j=0,ie=ke.length;j<ie;j++)xe=ke[j],w.format!==An?ve!==null?Ue?t.compressedTexSubImage3D(35866,j,0,0,0,xe.width,xe.height,O.depth,ve,xe.data,0,0):t.compressedTexImage3D(35866,j,ye,xe.width,xe.height,O.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,j,0,0,0,xe.width,xe.height,O.depth,ve,pe,xe.data):t.texImage3D(35866,j,ye,xe.width,xe.height,O.depth,0,ve,pe,xe.data)}else{Ue&&$e&&t.texStorage2D(3553,I,ye,ke[0].width,ke[0].height);for(let j=0,ie=ke.length;j<ie;j++)xe=ke[j],w.format!==An?ve!==null?Ue?t.compressedTexSubImage2D(3553,j,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(3553,j,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,j,0,0,xe.width,xe.height,ve,pe,xe.data):t.texImage2D(3553,j,ye,xe.width,xe.height,0,ve,pe,xe.data)}else if(w.isDataArrayTexture)Ue?($e&&t.texStorage3D(35866,I,ye,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ve,pe,O.data)):t.texImage3D(35866,0,ye,O.width,O.height,O.depth,0,ve,pe,O.data);else if(w.isData3DTexture)Ue?($e&&t.texStorage3D(32879,I,ye,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ve,pe,O.data)):t.texImage3D(32879,0,ye,O.width,O.height,O.depth,0,ve,pe,O.data);else if(w.isFramebufferTexture){if($e)if(Ue)t.texStorage2D(3553,I,ye,O.width,O.height);else{let j=O.width,ie=O.height;for(let me=0;me<I;me++)t.texImage2D(3553,me,ye,j,ie,0,ve,pe,null),j>>=1,ie>>=1}}else if(ke.length>0&&de){Ue&&$e&&t.texStorage2D(3553,I,ye,ke[0].width,ke[0].height);for(let j=0,ie=ke.length;j<ie;j++)xe=ke[j],Ue?t.texSubImage2D(3553,j,0,0,ve,pe,xe):t.texImage2D(3553,j,ye,ve,pe,xe);w.generateMipmaps=!1}else Ue?($e&&t.texStorage2D(3553,I,ye,O.width,O.height),t.texSubImage2D(3553,0,0,0,ve,pe,O)):t.texImage2D(3553,0,ye,ve,pe,O);T(w,de)&&A(ne),Ce.__version=fe.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Ae(b,w,V){if(w.image.length!==6)return;const ne=Le(b,w),re=w.source;t.bindTexture(34067,b.__webglTexture,33984+V);const fe=i.get(re);if(re.version!==fe.__version||ne===!0){t.activeTexture(33984+V),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const Ce=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,O=[];for(let j=0;j<6;j++)!Ce&&!L?O[j]=v(w.image[j],!1,!0,u):O[j]=L?w.image[j].image:w.image[j],O[j]=Ge(w,O[j]);const de=O[0],ve=y(de)||a,pe=s.convert(w.format,w.encoding),ye=s.convert(w.type),xe=S(w.internalFormat,pe,ye,w.encoding),ke=a&&w.isVideoTexture!==!0,Ue=fe.__version===void 0||ne===!0;let $e=C(w,de,ve);H(34067,w,ve);let I;if(Ce){ke&&Ue&&t.texStorage2D(34067,$e,xe,de.width,de.height);for(let j=0;j<6;j++){I=O[j].mipmaps;for(let ie=0;ie<I.length;ie++){const me=I[ie];w.format!==An?pe!==null?ke?t.compressedTexSubImage2D(34069+j,ie,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(34069+j,ie,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+j,ie,0,0,me.width,me.height,pe,ye,me.data):t.texImage2D(34069+j,ie,xe,me.width,me.height,0,pe,ye,me.data)}}}else{I=w.mipmaps,ke&&Ue&&(I.length>0&&$e++,t.texStorage2D(34067,$e,xe,O[0].width,O[0].height));for(let j=0;j<6;j++)if(L){ke?t.texSubImage2D(34069+j,0,0,0,O[j].width,O[j].height,pe,ye,O[j].data):t.texImage2D(34069+j,0,xe,O[j].width,O[j].height,0,pe,ye,O[j].data);for(let ie=0;ie<I.length;ie++){const Se=I[ie].image[j].image;ke?t.texSubImage2D(34069+j,ie+1,0,0,Se.width,Se.height,pe,ye,Se.data):t.texImage2D(34069+j,ie+1,xe,Se.width,Se.height,0,pe,ye,Se.data)}}else{ke?t.texSubImage2D(34069+j,0,0,0,pe,ye,O[j]):t.texImage2D(34069+j,0,xe,pe,ye,O[j]);for(let ie=0;ie<I.length;ie++){const me=I[ie];ke?t.texSubImage2D(34069+j,ie+1,0,0,pe,ye,me.image[j]):t.texImage2D(34069+j,ie+1,xe,pe,ye,me.image[j])}}}T(w,ve)&&A(34067),fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ce(b,w,V,ne,re){const fe=s.convert(V.format,V.encoding),Ce=s.convert(V.type),L=S(V.internalFormat,fe,Ce,V.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,L,w.width,w.height,w.depth,0,fe,Ce,null):t.texImage2D(re,0,L,w.width,w.height,0,fe,Ce,null)),t.bindFramebuffer(36160,b),Me(w)?h.framebufferTexture2DMultisampleEXT(36160,ne,re,i.get(V).__webglTexture,0,be(w)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,ne,re,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(b,w,V){if(n.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(V||Me(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===rr?ne=36012:re.type===ir&&(ne=33190));const fe=be(w);Me(w)?h.renderbufferStorageMultisampleEXT(36161,fe,ne,w.width,w.height):n.renderbufferStorageMultisample(36161,fe,ne,w.width,w.height)}else n.renderbufferStorage(36161,ne,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const ne=be(w);V&&Me(w)===!1?n.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Me(w)?h.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const fe=ne[re],Ce=s.convert(fe.format,fe.encoding),L=s.convert(fe.type),O=S(fe.internalFormat,Ce,L,fe.encoding),de=be(w);V&&Me(w)===!1?n.renderbufferStorageMultisample(36161,de,O,w.width,w.height):Me(w)?h.renderbufferStorageMultisampleEXT(36161,de,O,w.width,w.height):n.renderbufferStorage(36161,O,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function J(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,re=be(w);if(w.depthTexture.format===lr)Me(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):n.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===Ts)Me(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):n.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Y(b){const w=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");J(w.__webglFramebuffer,b)}else if(V){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),De(w.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),De(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function se(b,w,V){const ne=i.get(b);w!==void 0&&ce(ne.__webglFramebuffer,b,b.texture,36064,3553),V!==void 0&&Y(b)}function _e(b){const w=b.texture,V=i.get(b),ne=i.get(w);b.addEventListener("dispose",ue),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,fe=b.isWebGLMultipleRenderTargets===!0,Ce=y(b)||a;if(re){V.__webglFramebuffer=[];for(let L=0;L<6;L++)V.__webglFramebuffer[L]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),fe)if(r.drawBuffers){const L=b.texture;for(let O=0,de=L.length;O<de;O++){const ve=i.get(L[O]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Me(b)===!1){const L=fe?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let O=0;O<L.length;O++){const de=L[O];V.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[O]);const ve=s.convert(de.format,de.encoding),pe=s.convert(de.type),ye=S(de.internalFormat,ve,pe,de.encoding,b.isXRRenderTarget===!0),xe=be(b);n.renderbufferStorageMultisample(36161,xe,ye,b.width,b.height),n.framebufferRenderbuffer(36160,36064+O,36161,V.__webglColorRenderbuffer[O])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),De(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),H(34067,w,Ce);for(let L=0;L<6;L++)ce(V.__webglFramebuffer[L],b,w,36064,34069+L);T(w,Ce)&&A(34067),t.unbindTexture()}else if(fe){const L=b.texture;for(let O=0,de=L.length;O<de;O++){const ve=L[O],pe=i.get(ve);t.bindTexture(3553,pe.__webglTexture),H(3553,ve,Ce),ce(V.__webglFramebuffer,b,ve,36064+O,3553),T(ve,Ce)&&A(3553)}t.unbindTexture()}else{let L=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?L=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ne.__webglTexture),H(L,w,Ce),ce(V.__webglFramebuffer,b,w,36064,L),T(w,Ce)&&A(L),t.unbindTexture()}b.depthBuffer&&Y(b)}function ae(b){const w=y(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,re=V.length;ne<re;ne++){const fe=V[ne];if(T(fe,w)){const Ce=b.isWebGLCubeRenderTarget?34067:3553,L=i.get(fe).__webglTexture;t.bindTexture(Ce,L),A(Ce),t.unbindTexture()}}}function Pe(b){if(a&&b.samples>0&&Me(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,ne=b.height;let re=16384;const fe=[],Ce=b.stencilBuffer?33306:36096,L=i.get(b),O=b.isWebGLMultipleRenderTargets===!0;if(O)for(let de=0;de<w.length;de++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let de=0;de<w.length;de++){fe.push(36064+de),b.depthBuffer&&fe.push(Ce);const ve=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ve===!1&&(b.depthBuffer&&(re|=256),b.stencilBuffer&&(re|=1024)),O&&n.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[de]),ve===!0&&(n.invalidateFramebuffer(36008,[Ce]),n.invalidateFramebuffer(36009,[Ce])),O){const pe=i.get(w[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,pe,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,re,9728),m&&n.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let de=0;de<w.length;de++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,L.__webglColorRenderbuffer[de]);const ve=i.get(w[de]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,ve,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function be(b){return Math.min(f,b.samples)}function Me(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(b){const w=o.render.frame;x.get(b)!==w&&(x.set(b,w),b.update())}function Ge(b,w){const V=b.encoding,ne=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Zc||V!==gr&&(V===ot?a===!1?e.has("EXT_sRGB")===!0&&ne===An?(b.format=Zc,b.minFilter=un,b.generateMipmaps=!1):w=h0.sRGBToLinear(w):(ne!==An||re!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=N,this.resetTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=se,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Me}function Yw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===mr)return 5121;if(s===Vx)return 32819;if(s===Gx)return 32820;if(s===kx)return 5120;if(s===Ux)return 5122;if(s===l0)return 5123;if(s===Bx)return 5124;if(s===ir)return 5125;if(s===rr)return 5126;if(s===Lo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hx)return 6406;if(s===An)return 6408;if(s===jx)return 6409;if(s===Xx)return 6410;if(s===lr)return 6402;if(s===Ts)return 34041;if(s===qx)return 6403;if(s===Wx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Zc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yx)return 36244;if(s===$x)return 33319;if(s===Zx)return 33320;if(s===Jx)return 36249;if(s===pu||s===mu||s===gu||s===vu)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pd||s===Rd||s===Dd||s===Id)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Id)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nd||s===zd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Nd)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Od||s===kd||s===Ud||s===Bd||s===Vd||s===Gd||s===Hd||s===Wd||s===jd||s===Xd||s===qd||s===Yd||s===$d)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Fd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zd)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ds?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class $w extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ta extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zw={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const _=new Ta;_.matrixAutoUpdate=!1,_.visible=!1,u.joints[p.jointName]=_,u.add(_)}const g=u.joints[p.jointName];d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class Jw extends _n{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:lr,c!==lr&&c!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===lr&&(i=ir),i===void 0&&c===Ts&&(i=ds),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1}}class Kw extends wr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,h=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const g=[],_=[],v=new cn;v.layers.enable(1),v.viewport=new St;const y=new cn;y.layers.enable(2),y.viewport=new St;const M=[v,y],T=new $w;T.layers.enable(1),T.layers.enable(2);let A=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let z=g[R];return z===void 0&&(z=new ju,g[R]=z),z.getTargetRaySpace()},this.getControllerGrip=function(R){let z=g[R];return z===void 0&&(z=new ju,g[R]=z),z.getGripSpace()},this.getHand=function(R){let z=g[R];return z===void 0&&(z=new ju,g[R]=z),z.getHandSpace()};function C(R){const z=_.indexOf(R.inputSource);if(z===-1)return;const q=g[z];q!==void 0&&q.dispatchEvent({type:R.type,data:R.inputSource})}function P(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",G);for(let R=0;R<g.length;R++){const z=_[R];z!==null&&(_[R]=null,g[R].disconnect(z))}A=null,S=null,e.setRenderTarget(p),h=null,f=null,c=null,r=null,d=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",P),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:h}),d=new vr(h.framebufferWidth,h.framebufferHeight,{format:An,type:mr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let z=null,q=null,Z=null;x.depth&&(Z=x.stencil?35056:33190,z=x.stencil?Ts:lr,q=x.stencil?ds:ir);const ee={colorFormat:32856,depthFormat:Z,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(ee),r.updateRenderState({layers:[f]}),d=new vr(f.textureWidth,f.textureHeight,{format:An,type:mr,depthTexture:new Jw(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const he=e.properties.get(d);he.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),N.setContext(r),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G(R){for(let z=0;z<R.removed.length;z++){const q=R.removed[z],Z=_.indexOf(q);Z>=0&&(_[Z]=null,g[Z].dispatchEvent({type:"disconnected",data:q}))}for(let z=0;z<R.added.length;z++){const q=R.added[z];let Z=_.indexOf(q);if(Z===-1){for(let he=0;he<g.length;he++)if(he>=_.length){_.push(q),Z=he;break}else if(_[he]===null){_[he]=q,Z=he;break}if(Z===-1)break}const ee=g[Z];ee&&ee.dispatchEvent({type:"connected",data:q})}}const ue=new D,B=new D;function F(R,z,q){ue.setFromMatrixPosition(z.matrixWorld),B.setFromMatrixPosition(q.matrixWorld);const Z=ue.distanceTo(B),ee=z.projectionMatrix.elements,he=q.projectionMatrix.elements,we=ee[14]/(ee[10]-1),H=ee[14]/(ee[10]+1),Le=(ee[9]+1)/ee[5],Ee=(ee[9]-1)/ee[5],Ae=(ee[8]-1)/ee[0],ce=(he[8]+1)/he[0],De=we*Ae,J=we*ce,Y=Z/(-Ae+ce),se=Y*-Ae;z.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(se),R.translateZ(Y),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const _e=we+Y,ae=H+Y,Pe=De-se,be=J+(Z-se),Me=Le*H/ae*_e,Ye=Ee*H/ae*_e;R.projectionMatrix.makePerspective(Pe,be,Me,Ye,_e,ae)}function X(R,z){z===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(z.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;T.near=y.near=v.near=R.near,T.far=y.far=v.far=R.far,(A!==T.near||S!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,S=T.far);const z=R.parent,q=T.cameras;X(T,z);for(let ee=0;ee<q.length;ee++)X(q[ee],z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),R.matrix.copy(T.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);const Z=R.children;for(let ee=0,he=Z.length;ee<he;ee++)Z[ee].updateMatrixWorld(!0);q.length===2?F(T,v,y):T.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(R){f!==null&&(f.fixedFoveation=R),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=R)};let K=null;function Q(R,z){if(u=z.getViewerPose(l||o),m=z,u!==null){const q=u.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Z=!1;q.length!==T.cameras.length&&(T.cameras.length=0,Z=!0);for(let ee=0;ee<q.length;ee++){const he=q[ee];let we=null;if(h!==null)we=h.getViewport(he);else{const Le=c.getViewSubImage(f,he);we=Le.viewport,ee===0&&(e.setRenderTargetTextures(d,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(d))}let H=M[ee];H===void 0&&(H=new cn,H.layers.enable(ee),H.viewport=new St,M[ee]=H),H.matrix.fromArray(he.transform.matrix),H.projectionMatrix.fromArray(he.projectionMatrix),H.viewport.set(we.x,we.y,we.width,we.height),ee===0&&T.matrix.copy(H.matrix),Z===!0&&T.cameras.push(H)}}for(let q=0;q<g.length;q++){const Z=_[q],ee=g[q];Z!==null&&ee!==void 0&&ee.update(Z,z,l||o)}K&&K(R,z),m=null}const N=new x0;N.setAnimationLoop(Q),this.setAnimationLoop=function(R){K=R},this.dispose=function(){}}}function Qw(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,g,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),c(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===mn&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===mn&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let _;d.map?_=d.map:d.specularMap?_=d.specularMap:d.displacementMap?_=d.displacementMap:d.normalMap?_=d.normalMap:d.bumpMap?_=d.bumpMap:d.roughnessMap?_=d.roughnessMap:d.metalnessMap?_=d.metalnessMap:d.alphaMap?_=d.alphaMap:d.emissiveMap?_=d.emissiveMap:d.clearcoatMap?_=d.clearcoatMap:d.clearcoatNormalMap?_=d.clearcoatNormalMap:d.clearcoatRoughnessMap?_=d.clearcoatRoughnessMap:d.iridescenceMap?_=d.iridescenceMap:d.iridescenceThicknessMap?_=d.iridescenceThicknessMap:d.specularIntensityMap?_=d.specularIntensityMap:d.specularColorMap?_=d.specularColorMap:d.transmissionMap?_=d.transmissionMap:d.thicknessMap?_=d.thicknessMap:d.sheenColorMap?_=d.sheenColorMap:d.sheenRoughnessMap&&(_=d.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=_*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===mn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function eE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",d));const M=v.program;i.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function c(_){const v=f();_.__bindingPointIndex=v;const y=n.createBuffer(),M=_.__size,T=_.usage;return n.bindBuffer(35345,y),n.bufferData(35345,M,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let T=0,A=y.length;T<A;T++){const S=y[T];if(m(S,T,M)===!0){const C=S.value,P=S.__offset;typeof C=="number"?(S.__data[0]=C,n.bufferSubData(35345,P,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):C.toArray(S.__data),n.bufferSubData(35345,P,S.__data))}}n.bindBuffer(35345,null)}function m(_,v,y){const M=_.value;if(y[v]===void 0)return typeof M=="number"?y[v]=M:y[v]=M.clone(),!0;if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const T=y[v];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function x(_){const v=_.uniforms;let y=0;const M=16;let T=0;for(let A=0,S=v.length;A<S;A++){const C=v[A],P=p(C);if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,A>0){T=y%M;const G=M-T;T!==0&&G-P.boundary<0&&(y+=M-T,C.__offset=y)}y+=P.storage}return T=y%M,T>0&&(y+=M-T),_.__size=y,_.__cache={},this}function p(_){const v=_.value,y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function d(_){const v=_.target;v.removeEventListener("dispose",d);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function tE(){const n=Po("canvas");return n.style.display="block",n}function T0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:tE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gr,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,g=0,_=0,v=null,y=-1,M=null;const T=new St,A=new St;let S=null,C=e.width,P=e.height,G=1,ue=null,B=null;const F=new St(0,0,C,P),X=new St(0,0,C,P);let K=!1;const Q=new ih;let N=!1,R=!1,z=null;const q=new ut,Z=new oe,ee=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return v===null?G:1}let H=t;function Le(E,U){for(let W=0;W<E.length;W++){const k=E[W],$=e.getContext(k,U);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qf}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",ke,!1),H===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),H=Le(U,E),H===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Ae,ce,De,J,Y,se,_e,ae,Pe,be,Me,Ye,Ge,b,w,V,ne,re,fe,Ce,L,O,de;function ve(){Ee=new hM(H),Ae=new oM(H,Ee,n),Ee.init(Ae),L=new Yw(H,Ee,Ae),ce=new Xw(H,Ee,Ae),De=new mM,J=new Dw,Y=new qw(H,Ee,ce,J,Ae,L,De),se=new lM(p),_e=new fM(p),ae=new Ey(H,Ae),O=new rM(H,Ee,ae,Ae),Pe=new dM(H,ae,De,O),be=new xM(H,Pe,ae,De),re=new _M(H,Ae,Y),w=new aM(J),Me=new Rw(p,se,_e,Ee,Ae,O,w),Ye=new Qw(p,J),Ge=new Nw,b=new Bw(Ee,Ae),ne=new iM(p,se,_e,ce,be,c,o),V=new jw(p,be,Ae),de=new eE(H,De,Ae,ce),fe=new sM(H,Ee,De,Ae),Ce=new pM(H,Ee,De,Ae),De.programs=Me.programs,p.capabilities=Ae,p.extensions=Ee,p.properties=J,p.renderLists=Ge,p.shadowMap=V,p.state=ce,p.info=De}ve();const pe=new Kw(p,H);this.xr=pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,U,W){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=U,e.width=Math.floor(E*G),e.height=Math.floor(U*G),W!==!1&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(C*G,P*G).floor()},this.setDrawingBufferSize=function(E,U,W){C=E,P=U,G=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,U,W,k){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,U,W,k),ce.viewport(T.copy(F).multiplyScalar(G).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,U,W,k){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,U,W,k),ce.scissor(A.copy(X).multiplyScalar(G).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){ce.setScissorTest(K=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,U=!0,W=!0){let k=0;E&&(k|=16384),U&&(k|=256),W&&(k|=1024),H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Ge.dispose(),b.dispose(),J.dispose(),se.dispose(),_e.dispose(),be.dispose(),O.dispose(),de.dispose(),Me.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",me),pe.removeEventListener("sessionend",Se),z&&(z.dispose(),z=null),He.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=De.autoReset,U=V.enabled,W=V.autoUpdate,k=V.needsUpdate,$=V.type;ve(),De.autoReset=E,V.enabled=U,V.autoUpdate=W,V.needsUpdate=k,V.type=$}function ke(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const U=E.target;U.removeEventListener("dispose",Ue),$e(U)}function $e(E){I(E),J.remove(E)}function I(E){const U=J.get(E).programs;U!==void 0&&(U.forEach(function(W){Me.releaseProgram(W)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,k,$,Te){U===null&&(U=he);const Re=$.isMesh&&$.matrixWorld.determinant()<0,ze=U0(E,U,W,k,$);ce.setMaterial(k,Re);let Ie=W.index;const We=W.attributes.position;if(Ie===null){if(We===void 0||We.count===0)return}else if(Ie.count===0)return;let Fe=1;k.wireframe===!0&&(Ie=Pe.getWireframeAttribute(W),Fe=2),O.setup($,k,ze,W,Ie);let Be,st=fe;Ie!==null&&(Be=ae.get(Ie),st=Ce,st.setIndex(Be));const Hi=Ie!==null?Ie.count:We.count,Er=W.drawRange.start*Fe,Tr=W.drawRange.count*Fe,Dn=Te!==null?Te.start*Fe:0,je=Te!==null?Te.count*Fe:1/0,br=Math.max(Er,Dn),ct=Math.min(Hi,Er+Tr,Dn+je)-1,sn=Math.max(0,ct-br+1);if(sn!==0){if($.isMesh)k.wireframe===!0?(ce.setLineWidth(k.wireframeLinewidth*we()),st.setMode(1)):st.setMode(4);else if($.isLine){let ci=k.linewidth;ci===void 0&&(ci=1),ce.setLineWidth(ci*we()),$.isLineSegments?st.setMode(1):$.isLineLoop?st.setMode(2):st.setMode(3)}else $.isPoints?st.setMode(0):$.isSprite&&st.setMode(4);if($.isInstancedMesh)st.renderInstances(br,sn,$.count);else if(W.isInstancedBufferGeometry){const ci=Math.min(W.instanceCount,W._maxInstanceCount);st.renderInstances(br,sn,ci)}else st.render(br,sn)}},this.compile=function(E,U){function W(k,$,Te){k.transparent===!0&&k.side===Ti?(k.side=mn,k.needsUpdate=!0,rn(k,$,Te),k.side=Ms,k.needsUpdate=!0,rn(k,$,Te),k.side=Ti):rn(k,$,Te)}h=b.get(E),h.init(),x.push(h),E.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(k){const $=k.material;if($)if(Array.isArray($))for(let Te=0;Te<$.length;Te++){const Re=$[Te];W(Re,E,k)}else W($,E,k)}),x.pop(),h=null};let j=null;function ie(E){j&&j(E)}function me(){He.stop()}function Se(){He.start()}const He=new x0;He.setAnimationLoop(ie),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(E){j=E,pe.setAnimationLoop(E),E===null?He.stop():He.start()},pe.addEventListener("sessionstart",me),pe.addEventListener("sessionend",Se),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,U,v),h=b.get(E,x.length),h.init(),x.push(h),q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(q),R=this.localClippingEnabled,N=w.init(this.clippingPlanes,R,U),f=Ge.get(E,m.length),f.init(),m.push(f),_t(E,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ue,B),N===!0&&w.beginShadows();const W=h.state.shadowsArray;if(V.render(W,E,U),N===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,E),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const k=U.cameras;for(let $=0,Te=k.length;$<Te;$++){const Re=k[$];Ct(f,E,Re,Re.viewport)}}else Ct(f,E,U);v!==null&&(Y.updateMultisampleRenderTarget(v),Y.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(p,E,U),O.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function _t(E,U,W,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){k&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Re=be.update(E),ze=E.material;ze.visible&&f.push(E,Re,ze,W,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==De.render.frame&&(E.skeleton.update(),E.skeleton.frame=De.render.frame),!E.frustumCulled||Q.intersectsObject(E))){k&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Re=be.update(E),ze=E.material;if(Array.isArray(ze)){const Ie=Re.groups;for(let We=0,Fe=Ie.length;We<Fe;We++){const Be=Ie[We],st=ze[Be.materialIndex];st&&st.visible&&f.push(E,Re,st,W,ee.z,Be)}}else ze.visible&&f.push(E,Re,ze,W,ee.z,null)}}const Te=E.children;for(let Re=0,ze=Te.length;Re<ze;Re++)_t(Te[Re],U,W,k)}function Ct(E,U,W,k){const $=E.opaque,Te=E.transmissive,Re=E.transparent;h.setupLightsView(W),Te.length>0&&Gi($,U,W),k&&ce.viewport(T.copy(k)),$.length>0&&Qe($,U,W),Te.length>0&&Qe(Te,U,W),Re.length>0&&Qe(Re,U,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Gi(E,U,W){const k=Ae.isWebGL2;z===null&&(z=new vr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Lo:mr,minFilter:Il,samples:k&&s===!0?4:0})),p.getDrawingBufferSize(Z),k?z.setSize(Z.x,Z.y):z.setSize(Jc(Z.x),Jc(Z.y));const $=p.getRenderTarget();p.setRenderTarget(z),p.clear();const Te=p.toneMapping;p.toneMapping=ri,Qe(E,U,W),p.toneMapping=Te,Y.updateMultisampleRenderTarget(z),Y.updateRenderTargetMipmap(z),p.setRenderTarget($)}function Qe(E,U,W){const k=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Te=E.length;$<Te;$++){const Re=E[$],ze=Re.object,Ie=Re.geometry,We=k===null?Re.material:k,Fe=Re.group;ze.layers.test(W.layers)&&Wn(ze,U,W,Ie,We,Fe)}}function Wn(E,U,W,k,$,Te){E.onBeforeRender(p,U,W,k,$,Te),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(p,U,W,k,E,Te),$.transparent===!0&&$.side===Ti?($.side=mn,$.needsUpdate=!0,p.renderBufferDirect(W,U,k,$,E,Te),$.side=Ms,$.needsUpdate=!0,p.renderBufferDirect(W,U,k,$,E,Te),$.side=Ti):p.renderBufferDirect(W,U,k,$,E,Te),E.onAfterRender(p,U,W,k,$,Te)}function rn(E,U,W){U.isScene!==!0&&(U=he);const k=J.get(E),$=h.state.lights,Te=h.state.shadowsArray,Re=$.state.version,ze=Me.getParameters(E,$.state,Te,U,W),Ie=Me.getProgramCacheKey(ze);let We=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?_e:se).get(E.envMap||k.environment),We===void 0&&(E.addEventListener("dispose",Ue),We=new Map,k.programs=We);let Fe=We.get(Ie);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===Re)return fh(E,ze),Fe}else ze.uniforms=Me.getUniforms(E),E.onBuild(W,ze,p),E.onBeforeCompile(ze,p),Fe=Me.acquireProgram(ze,Ie),We.set(Ie,Fe),k.uniforms=ze.uniforms;const Be=k.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=w.uniform),fh(E,ze),k.needsLights=V0(E),k.lightsStateVersion=Re,k.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix);const st=Fe.getUniforms(),Hi=Ha.seqWithValue(st.seq,Be);return k.currentProgram=Fe,k.uniformsList=Hi,Fe}function fh(E,U){const W=J.get(E);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function U0(E,U,W,k,$){U.isScene!==!0&&(U=he),Y.resetTextureUnits();const Te=U.fog,Re=k.isMeshStandardMaterial?U.environment:null,ze=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:gr,Ie=(k.isMeshStandardMaterial?_e:se).get(k.envMap||Re),We=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!k.normalMap&&!!W.attributes.tangent,Be=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,Hi=!!W.morphAttributes.color,Er=k.toneMapped?p.toneMapping:ri,Tr=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Dn=Tr!==void 0?Tr.length:0,je=J.get(k),br=h.state.lights;if(N===!0&&(R===!0||E!==M)){const Xt=E===M&&k.id===y;w.setState(k,E,Xt)}let ct=!1;k.version===je.__version?(je.needsLights&&je.lightsStateVersion!==br.state.version||je.outputEncoding!==ze||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ie||k.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==w.numPlanes||je.numIntersection!==w.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==Fe||je.morphTargets!==Be||je.morphNormals!==st||je.morphColors!==Hi||je.toneMapping!==Er||Ae.isWebGL2===!0&&je.morphTargetsCount!==Dn)&&(ct=!0):(ct=!0,je.__version=k.version);let sn=je.currentProgram;ct===!0&&(sn=rn(k,U,$));let ci=!1,Is=!1,Ul=!1;const Nt=sn.getUniforms(),Wi=je.uniforms;if(ce.useProgram(sn.program)&&(ci=!0,Is=!0,Ul=!0),k.id!==y&&(y=k.id,Is=!0),ci||M!==E){if(Nt.setValue(H,"projectionMatrix",E.projectionMatrix),Ae.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,Is=!0,Ul=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Xt=Nt.map.cameraPosition;Xt!==void 0&&Xt.setValue(H,ee.setFromMatrixPosition(E.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||$.isSkinnedMesh)&&Nt.setValue(H,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){Nt.setOptional(H,$,"bindMatrix"),Nt.setOptional(H,$,"bindMatrixInverse");const Xt=$.skeleton;Xt&&(Ae.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Nt.setValue(H,"boneTexture",Xt.boneTexture,Y),Nt.setValue(H,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bl=W.morphAttributes;if((Bl.position!==void 0||Bl.normal!==void 0||Bl.color!==void 0&&Ae.isWebGL2===!0)&&re.update($,W,k,sn),(Is||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,Nt.setValue(H,"receiveShadow",$.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wi.envMap.value=Ie,Wi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Is&&(Nt.setValue(H,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&B0(Wi,Ul),Te&&k.fog===!0&&Ye.refreshFogUniforms(Wi,Te),Ye.refreshMaterialUniforms(Wi,k,G,P,z),Ha.upload(H,je.uniformsList,Wi,Y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ha.upload(H,je.uniformsList,Wi,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Nt.setValue(H,"center",$.center),Nt.setValue(H,"modelViewMatrix",$.modelViewMatrix),Nt.setValue(H,"normalMatrix",$.normalMatrix),Nt.setValue(H,"modelMatrix",$.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Xt=k.uniformsGroups;for(let Vl=0,G0=Xt.length;Vl<G0;Vl++)if(Ae.isWebGL2){const hh=Xt[Vl];de.update(hh,sn),de.bind(hh,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function B0(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function V0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,U,W){J.get(E.texture).__webglTexture=U,J.get(E.depthTexture).__webglTexture=W;const k=J.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=W===void 0,k.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const W=J.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){v=E,g=U,_=W;let k=!0,$=null,Te=!1,Re=!1;if(E){const Ie=J.get(E);Ie.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),k=!1):Ie.__webglFramebuffer===void 0?Y.setupRenderTarget(E):Ie.__hasExternalTextures&&Y.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Fe=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Fe[U],Te=!0):Ae.isWebGL2&&E.samples>0&&Y.useMultisampledRTT(E)===!1?$=J.get(E).__webglMultisampledFramebuffer:$=Fe,T.copy(E.viewport),A.copy(E.scissor),S=E.scissorTest}else T.copy(F).multiplyScalar(G).floor(),A.copy(X).multiplyScalar(G).floor(),S=K;if(ce.bindFramebuffer(36160,$)&&Ae.drawBuffers&&k&&ce.drawBuffers(E,$),ce.viewport(T),ce.scissor(A),ce.setScissorTest(S),Te){const Ie=J.get(E.texture);H.framebufferTexture2D(36160,36064,34069+U,Ie.__webglTexture,W)}else if(Re){const Ie=J.get(E.texture),We=U||0;H.framebufferTextureLayer(36160,36064,Ie.__webglTexture,W||0,We)}y=-1},this.readRenderTargetPixels=function(E,U,W,k,$,Te,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){ce.bindFramebuffer(36160,ze);try{const Ie=E.texture,We=Ie.format,Fe=Ie.type;if(We!==An&&L.convert(We)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Lo&&(Ee.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Fe!==mr&&L.convert(Fe)!==H.getParameter(35738)&&!(Fe===rr&&(Ae.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&W>=0&&W<=E.height-$&&H.readPixels(U,W,k,$,L.convert(We),L.convert(Fe),Te)}finally{const Ie=v!==null?J.get(v).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(E,U,W=0){const k=Math.pow(2,-W),$=Math.floor(U.image.width*k),Te=Math.floor(U.image.height*k);Y.setTexture2D(U,0),H.copyTexSubImage2D(3553,W,0,0,E.x,E.y,$,Te),ce.unbindTexture()},this.copyTextureToTexture=function(E,U,W,k=0){const $=U.image.width,Te=U.image.height,Re=L.convert(W.format),ze=L.convert(W.type);Y.setTexture2D(W,0),H.pixelStorei(37440,W.flipY),H.pixelStorei(37441,W.premultiplyAlpha),H.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?H.texSubImage2D(3553,k,E.x,E.y,$,Te,Re,ze,U.image.data):U.isCompressedTexture?H.compressedTexSubImage2D(3553,k,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Re,U.mipmaps[0].data):H.texSubImage2D(3553,k,E.x,E.y,Re,ze,U.image),k===0&&W.generateMipmaps&&H.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,U,W,k,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,Ie=L.convert(k.format),We=L.convert(k.type);let Fe;if(k.isData3DTexture)Y.setTexture3D(k,0),Fe=32879;else if(k.isDataArrayTexture)Y.setTexture2DArray(k,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment);const Be=H.getParameter(3314),st=H.getParameter(32878),Hi=H.getParameter(3316),Er=H.getParameter(3315),Tr=H.getParameter(32877),Dn=W.isCompressedTexture?W.mipmaps[0]:W.image;H.pixelStorei(3314,Dn.width),H.pixelStorei(32878,Dn.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Fe,$,U.x,U.y,U.z,Te,Re,ze,Ie,We,Dn.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Fe,$,U.x,U.y,U.z,Te,Re,ze,Ie,Dn.data)):H.texSubImage3D(Fe,$,U.x,U.y,U.z,Te,Re,ze,Ie,We,Dn),H.pixelStorei(3314,Be),H.pixelStorei(32878,st),H.pixelStorei(3316,Hi),H.pixelStorei(3315,Er),H.pixelStorei(32877,Tr),$===0&&k.generateMipmaps&&H.generateMipmap(Fe),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,ce.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nE extends T0{}nE.prototype.isWebGL1Renderer=!0;class iE extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class b0 extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ip=new D,Np=new D,zp=new ut,Xu=new eh,ba=new Nl;class rE extends Tt{constructor(e=new Gn,t=new b0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ip.fromBufferAttribute(t,r-1),Np.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ip.distanceTo(Np);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;zp.copy(r).invert(),Xu.copy(e.ray).applyMatrix4(zp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new D,c=new D,f=new D,h=new D,m=this.isLineSegments?2:1,x=i.index,d=i.attributes.position;if(x!==null){const g=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let v=g,y=_-1;v<y;v+=m){const M=x.getX(v),T=x.getX(v+1);if(u.fromBufferAttribute(d,M),c.fromBufferAttribute(d,T),Xu.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=g,y=_-1;v<y;v+=m){if(u.fromBufferAttribute(d,v),c.fromBufferAttribute(d,v+1),Xu.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Fp=new D,Op=new D;class sE extends rE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Fp.fromBufferAttribute(t,r),Op.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fp.distanceTo(Op);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,m=(o-c)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],o=[],a=new D,l=new ut;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Dt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Dt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class oh extends Hn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new oe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=u-this.aY;l=h*c-m*f+this.aX,u=h*f+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oE extends oh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ah(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,m*=c,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ca=new D,qu=new ah,Yu=new ah,$u=new ah;class aE extends Hn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Ca.subVectors(r[0],r[1]).add(r[0]),u=Ca);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(c),m);p<1e-4&&(p=1),x<1e-4&&(x=p),d<1e-4&&(d=p),qu.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,x,p,d),Yu.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,x,p,d),$u.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,x,p,d)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Yu.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),$u.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(qu.calc(l),Yu.calc(l),$u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function lE(n,e){const t=1-n;return t*t*e}function uE(n,e){return 2*(1-n)*n*e}function cE(n,e){return n*n*e}function uo(n,e,t,i){return lE(n,e)+uE(n,t)+cE(n,i)}function fE(n,e){const t=1-n;return t*t*t*e}function hE(n,e){const t=1-n;return 3*t*t*n*e}function dE(n,e){return 3*(1-n)*n*n*e}function pE(n,e){return n*n*n*e}function co(n,e,t,i,r){return fE(n,e)+hE(n,t)+dE(n,i)+pE(n,r)}class C0 extends Hn{constructor(e=new oe,t=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new oe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(co(e,r.x,s.x,o.x,a.x),co(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mE extends Hn{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(co(e,r.x,s.x,o.x,a.x),co(e,r.y,s.y,o.y,a.y),co(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lh extends Hn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new oe;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gE extends Hn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A0 extends Hn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(uo(e,r.x,s.x,o.x),uo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vE extends Hn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(uo(e,r.x,s.x,o.x),uo(e,r.y,s.y,o.y),uo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L0 extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(kp(a,l.x,u.x,c.x,f.x),kp(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new oe().fromArray(r))}return this}}var P0=Object.freeze({__proto__:null,ArcCurve:oE,CatmullRomCurve3:aE,CubicBezierCurve:C0,CubicBezierCurve3:mE,EllipseCurve:oh,LineCurve:lh,LineCurve3:gE,QuadraticBezierCurve:A0,QuadraticBezierCurve3:vE,SplineCurve:L0});class _E extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new lh(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new P0[r.type]().fromJSON(r))}return this}}class Qc extends _E{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new lh(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new A0(this.currentPoint.clone(),new oe(e,t),new oe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new C0(this.currentPoint.clone(),new oe(e,t),new oe(i,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new L0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new oh(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wa extends Qc{constructor(e){super(e),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Qc().fromJSON(r))}return this}}const xE={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=R0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,m;if(i&&(s=EE(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let x=t;x<r;x+=t)f=n[x],h=n[x+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return Ro(s,o,t,a,l,m,0),o}};function R0(n,e,t,i,r){let s,o;if(r===zE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Up(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Up(s,n[s],n[s+1],o);return o&&Fl(o,o.next)&&(Io(o),o=o.next),o}function yr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fl(t,t.next)||nt(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ro(n,e,t,i,r,s,o){if(!n)return;!o&&s&&LE(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?SE(n,i,r,s):yE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),Io(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=ME(yr(n),e,t),Ro(n,e,t,i,r,s,2)):o===2&&wE(n,e,t,i,r,s):Ro(yr(n),e,t,i,r,s,1);break}}}function yE(n){const e=n.prev,t=n,i=n.next;if(nt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let x=i.next;for(;x!==e;){if(x.x>=c&&x.x<=h&&x.y>=f&&x.y<=m&&ss(r,a,s,l,o,u,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function SE(n,e,t,i){const r=n.prev,s=n,o=n.next;if(nt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,m=a<l?a<u?a:u:l<u?l:u,x=c<f?c<h?c:h:f<h?f:h,p=a>l?a>u?a:u:l>u?l:u,d=c>f?c>h?c:h:f>h?f:h,g=ef(m,x,e,t,i),_=ef(p,d,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=g&&y&&y.z<=_;){if(v.x>=m&&v.x<=p&&v.y>=x&&v.y<=d&&v!==r&&v!==o&&ss(a,c,l,f,u,h,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=m&&y.x<=p&&y.y>=x&&y.y<=d&&y!==r&&y!==o&&ss(a,c,l,f,u,h,y.x,y.y)&&nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=p&&v.y>=x&&v.y<=d&&v!==r&&v!==o&&ss(a,c,l,f,u,h,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=p&&y.y>=x&&y.y<=d&&y!==r&&y!==o&&ss(a,c,l,f,u,h,y.x,y.y)&&nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ME(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Fl(r,s)&&D0(r,i,i.next,s)&&Do(r,s)&&Do(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Io(i),Io(i.next),i=n=s),i=i.next}while(i!==n);return yr(i)}function wE(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DE(o,a)){let l=I0(o,a);o=yr(o,o.next),l=yr(l,l.next),Ro(o,e,t,i,r,s,0),Ro(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function EE(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=R0(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(RE(u));for(r.sort(TE),s=0;s<r.length;s++)t=bE(r[s],t);return t}function TE(n,e){return n.x-e.x}function bE(n,e){const t=CE(n,e);if(!t)return e;const i=I0(t,n);return yr(i,i.next),yr(t,t.next)}function CE(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ss(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Do(t,n)&&(f<c||f===c&&(t.x>r.x||t.x===r.x&&AE(r,t)))&&(r=t,c=f)),t=t.next;while(t!==a);return r}function AE(n,e){return nt(n.prev,n,e.prev)<0&&nt(e.next,n,n.next)<0}function LE(n,e,t,i){let r=n;do r.z===0&&(r.z=ef(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,PE(r)}function PE(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function ef(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function RE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ss(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function DE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!IE(n,e)&&(Do(n,e)&&Do(e,n)&&NE(n,e)&&(nt(n.prev,n,e.prev)||nt(n,e.prev,e))||Fl(n,e)&&nt(n.prev,n,n.next)>0&&nt(e.prev,e,e.next)>0)}function nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fl(n,e){return n.x===e.x&&n.y===e.y}function D0(n,e,t,i){const r=La(nt(n,e,t)),s=La(nt(n,e,i)),o=La(nt(t,i,n)),a=La(nt(t,i,e));return!!(r!==s&&o!==a||r===0&&Aa(n,t,e)||s===0&&Aa(n,i,e)||o===0&&Aa(t,n,i)||a===0&&Aa(t,e,i))}function Aa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function La(n){return n>0?1:n<0?-1:0}function IE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&D0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Do(n,e){return nt(n.prev,n,n.next)<0?nt(n,e,n.next)>=0&&nt(n,n.prev,e)>=0:nt(n,e,n.prev)<0||nt(n,n.next,e)<0}function NE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function I0(n,e){const t=new tf(n.i,n.x,n.y),i=new tf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Up(n,e,t,i){const r=new tf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Io(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class ps{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ps.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Bp(e),Vp(i,e);let o=e.length;t.forEach(Bp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Vp(i,t[l]);const a=xE.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Bp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class uh extends Gn{constructor(e=new Wa([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Qt(r,3)),this.setAttribute("uv",new Qt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:FE;let v,y=!1,M,T,A,S;g&&(v=g.getSpacedPoints(c),y=!0,h=!1,M=g.computeFrenetFrames(c,!1),T=new D,A=new D,S=new D),h||(d=0,m=0,x=0,p=0);const C=a.extractPoints(u);let P=C.shape;const G=C.holes;if(!ps.isClockWise(P)){P=P.reverse();for(let J=0,Y=G.length;J<Y;J++){const se=G[J];ps.isClockWise(se)&&(G[J]=se.reverse())}}const B=ps.triangulateShape(P,G),F=P;for(let J=0,Y=G.length;J<Y;J++){const se=G[J];P=P.concat(se)}function X(J,Y,se){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(se).add(J)}const K=P.length,Q=B.length;function N(J,Y,se){let _e,ae,Pe;const be=J.x-Y.x,Me=J.y-Y.y,Ye=se.x-J.x,Ge=se.y-J.y,b=be*be+Me*Me,w=be*Ge-Me*Ye;if(Math.abs(w)>Number.EPSILON){const V=Math.sqrt(b),ne=Math.sqrt(Ye*Ye+Ge*Ge),re=Y.x-Me/V,fe=Y.y+be/V,Ce=se.x-Ge/ne,L=se.y+Ye/ne,O=((Ce-re)*Ge-(L-fe)*Ye)/(be*Ge-Me*Ye);_e=re+be*O-J.x,ae=fe+Me*O-J.y;const de=_e*_e+ae*ae;if(de<=2)return new oe(_e,ae);Pe=Math.sqrt(de/2)}else{let V=!1;be>Number.EPSILON?Ye>Number.EPSILON&&(V=!0):be<-Number.EPSILON?Ye<-Number.EPSILON&&(V=!0):Math.sign(Me)===Math.sign(Ge)&&(V=!0),V?(_e=-Me,ae=be,Pe=Math.sqrt(b)):(_e=be,ae=Me,Pe=Math.sqrt(b/2))}return new oe(_e/Pe,ae/Pe)}const R=[];for(let J=0,Y=F.length,se=Y-1,_e=J+1;J<Y;J++,se++,_e++)se===Y&&(se=0),_e===Y&&(_e=0),R[J]=N(F[J],F[se],F[_e]);const z=[];let q,Z=R.concat();for(let J=0,Y=G.length;J<Y;J++){const se=G[J];q=[];for(let _e=0,ae=se.length,Pe=ae-1,be=_e+1;_e<ae;_e++,Pe++,be++)Pe===ae&&(Pe=0),be===ae&&(be=0),q[_e]=N(se[_e],se[Pe],se[be]);z.push(q),Z=Z.concat(q)}for(let J=0;J<d;J++){const Y=J/d,se=m*Math.cos(Y*Math.PI/2),_e=x*Math.sin(Y*Math.PI/2)+p;for(let ae=0,Pe=F.length;ae<Pe;ae++){const be=X(F[ae],R[ae],_e);Le(be.x,be.y,-se)}for(let ae=0,Pe=G.length;ae<Pe;ae++){const be=G[ae];q=z[ae];for(let Me=0,Ye=be.length;Me<Ye;Me++){const Ge=X(be[Me],q[Me],_e);Le(Ge.x,Ge.y,-se)}}}const ee=x+p;for(let J=0;J<K;J++){const Y=h?X(P[J],Z[J],ee):P[J];y?(A.copy(M.normals[0]).multiplyScalar(Y.x),T.copy(M.binormals[0]).multiplyScalar(Y.y),S.copy(v[0]).add(A).add(T),Le(S.x,S.y,S.z)):Le(Y.x,Y.y,0)}for(let J=1;J<=c;J++)for(let Y=0;Y<K;Y++){const se=h?X(P[Y],Z[Y],ee):P[Y];y?(A.copy(M.normals[J]).multiplyScalar(se.x),T.copy(M.binormals[J]).multiplyScalar(se.y),S.copy(v[J]).add(A).add(T),Le(S.x,S.y,S.z)):Le(se.x,se.y,f/c*J)}for(let J=d-1;J>=0;J--){const Y=J/d,se=m*Math.cos(Y*Math.PI/2),_e=x*Math.sin(Y*Math.PI/2)+p;for(let ae=0,Pe=F.length;ae<Pe;ae++){const be=X(F[ae],R[ae],_e);Le(be.x,be.y,f+se)}for(let ae=0,Pe=G.length;ae<Pe;ae++){const be=G[ae];q=z[ae];for(let Me=0,Ye=be.length;Me<Ye;Me++){const Ge=X(be[Me],q[Me],_e);y?Le(Ge.x,Ge.y+v[c-1].y,v[c-1].x+se):Le(Ge.x,Ge.y,f+se)}}}he(),we();function he(){const J=r.length/3;if(h){let Y=0,se=K*Y;for(let _e=0;_e<Q;_e++){const ae=B[_e];Ee(ae[2]+se,ae[1]+se,ae[0]+se)}Y=c+d*2,se=K*Y;for(let _e=0;_e<Q;_e++){const ae=B[_e];Ee(ae[0]+se,ae[1]+se,ae[2]+se)}}else{for(let Y=0;Y<Q;Y++){const se=B[Y];Ee(se[2],se[1],se[0])}for(let Y=0;Y<Q;Y++){const se=B[Y];Ee(se[0]+K*c,se[1]+K*c,se[2]+K*c)}}i.addGroup(J,r.length/3-J,0)}function we(){const J=r.length/3;let Y=0;H(F,Y),Y+=F.length;for(let se=0,_e=G.length;se<_e;se++){const ae=G[se];H(ae,Y),Y+=ae.length}i.addGroup(J,r.length/3-J,1)}function H(J,Y){let se=J.length;for(;--se>=0;){const _e=se;let ae=se-1;ae<0&&(ae=J.length-1);for(let Pe=0,be=c+d*2;Pe<be;Pe++){const Me=K*Pe,Ye=K*(Pe+1),Ge=Y+_e+Me,b=Y+ae+Me,w=Y+ae+Ye,V=Y+_e+Ye;Ae(Ge,b,w,V)}}}function Le(J,Y,se){l.push(J),l.push(Y),l.push(se)}function Ee(J,Y,se){ce(J),ce(Y),ce(se);const _e=r.length/3,ae=_.generateTopUV(i,r,_e-3,_e-2,_e-1);De(ae[0]),De(ae[1]),De(ae[2])}function Ae(J,Y,se,_e){ce(J),ce(Y),ce(_e),ce(Y),ce(se),ce(_e);const ae=r.length/3,Pe=_.generateSideWallUV(i,r,ae-6,ae-3,ae-2,ae-1);De(Pe[0]),De(Pe[1]),De(Pe[3]),De(Pe[1]),De(Pe[2]),De(Pe[3])}function ce(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function De(J){s.push(J.x),s.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return OE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new P0[r.type]().fromJSON(r)),new uh(i,e.options)}}const FE={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new oe(s,o),new oe(a,l),new oe(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],m=e[r*3+1],x=e[r*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new oe(o,1-l),new oe(u,1-f),new oe(h,1-x),new oe(p,1-g)]:[new oe(a,1-l),new oe(c,1-f),new oe(m,1-x),new oe(d,1-g)]}};function OE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ch extends Rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ml={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class kE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],x=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const UE=new kE;class Ol{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zn={};class BE extends Error{constructor(e,t){super(e),this.response=t}}class VE extends Ol{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ml.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:i,onError:r});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Zn[e],f=u.body.getReader(),h=u.headers.get("Content-Length"),m=h?parseInt(h):0,x=m!==0;let p=0;const d=new ReadableStream({start(g){_();function _(){f.read().then(({done:v,value:y})=>{if(v)g.close();else{p+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:x,loaded:p,total:m});for(let T=0,A=c.length;T<A;T++){const S=c[T];S.onProgress&&S.onProgress(M)}g.enqueue(y),_()}})}}});return new Response(d)}else throw new BE(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return u.arrayBuffer().then(x=>m.decode(x))}}}).then(u=>{ml.add(e,u);const c=Zn[e];delete Zn[e];for(let f=0,h=c.length;f<h;f++){const m=c[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{const c=Zn[e];if(c===void 0)throw this.manager.itemError(e),u;delete Zn[e];for(let f=0,h=c.length;f<h;f++){const m=c[f];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GE extends Ol{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ml.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Po("img");function l(){c(),ml.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class HE extends Ol{constructor(e){super(e)}load(e,t,i,r){const s=new _n,o=new GE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class N0 extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zu=new ut,Gp=new D,Hp=new D;class WE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hp),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jE extends WE{constructor(){super(new y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XE extends N0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.shadow=new jE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qE extends N0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class YE{constructor(e,t,i=0,r=1/0){this.ray=new eh(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return nf(e,this,i,t),i.sort(Wp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nf(e[r],this,i,t);return i.sort(Wp),i}}function Wp(n,e){return n.distance-e.distance}function nf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)nf(r[s],e,t,!0)}}class jp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $E extends sE{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Gn;r.setAttribute("position",new Qt(t,3)),r.setAttribute("color",new Qt(i,3));const s=new b0({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Xe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZE{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Qc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const _=[];for(let v=0,y=g.length;v<y;v++){const M=g[v],T=new Wa;T.curves=M.curves,_.push(T)}return _}function i(g,_){const v=_.length;let y=!1;for(let M=v-1,T=0;T<v;M=T++){let A=_[M],S=_[T],C=S.x-A.x,P=S.y-A.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(A=_[T],C=-C,S=_[M],P=-P),g.y<A.y||g.y>S.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const G=P*(g.x-A.x)-C*(g.y-A.y);if(G===0)return!0;if(G<0)continue;y=!y}}else{if(g.y!==A.y)continue;if(S.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=S.x)return!0}}return y}const r=ps.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Wa,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const f=[],h=[];let m=[],x=0,p;h[x]=void 0,m[x]=[];for(let g=0,_=s.length;g<_;g++)a=s[g],p=a.getPoints(),o=r(p),o=e?!o:o,o?(!c&&h[x]&&x++,h[x]={s:new Wa,p},h[x].s.curves=a.curves,c&&x++,m[x]=[]):m[x].push({h:a,p:p[0]});if(!h[0])return t(s);if(h.length>1){let g=!1,_=0;for(let v=0,y=h.length;v<y;v++)f[v]=[];for(let v=0,y=h.length;v<y;v++){const M=m[v];for(let T=0;T<M.length;T++){const A=M[T];let S=!0;for(let C=0;C<h.length;C++)i(A.p,h[C].p)&&(v!==C&&_++,S?(S=!1,f[C].push(A)):g=!0);S&&f[v].push(A)}}_>0&&g===!1&&(m=f)}let d;for(let g=0,_=h.length;g<_;g++){l=h[g].s,u.push(l),d=m[g];for(let v=0,y=d.length;v<y;v++)l.holes.push(d[v].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);var zi={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-zi.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?zi.Bounce.In(n*2)*.5:zi.Bounce.Out(n*2-1)*.5+.5}}},Ks;typeof self>"u"&&typeof process<"u"&&process.hrtime?Ks=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Ks=self.performance.now.bind(self.performance):Date.now!==void 0?Ks=Date.now:Ks=function(){return new Date().getTime()};var jr=Ks,JE=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=jr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Qs={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Qs.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Qs.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Qs.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Qs.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},z0=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),F0=new JE,gl=function(){function n(e,t){t===void 0&&(t=F0),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=zi.Linear.None,this._interpolationFunction=Qs.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=z0.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?jr()+parseFloat(e):e:jr(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,u=!a&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(u){var c=i[s];if(c.length===0)continue;c=c.map(this._handleRelativeValue.bind(this,o)),i[s]=[o].concat(c)}if((l==="object"||a)&&o&&!u){t[s]=a?[]:{};for(var f in o)t[s][f]=o[f];r[s]=a?[]:{},this._setupProperties(o,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),u?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=jr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=jr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=jr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),u=Array.isArray(a),c=!l&&u;c?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}();z0.nextId;var Vn=F0;Vn.getAll.bind(Vn);Vn.removeAll.bind(Vn);Vn.add.bind(Vn);Vn.remove.bind(Vn);var KE=Vn.update.bind(Vn);const Xp={type:"change"},Ju={type:"start"},qp={type:"end"};class QE extends wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ge),this._domElementKeyEvents=L},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xp),i.update(),s=r.NONE},this.update=function(){const L=new D,O=new _r().setFromUnitVectors(e.up,new D(0,1,0)),de=O.clone().invert(),ve=new D,pe=new _r,ye=2*Math.PI;return function(){const ke=i.object.position;L.copy(ke).sub(i.target),L.applyQuaternion(O),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&C(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ue=i.minAzimuthAngle,$e=i.maxAzimuthAngle;return isFinite(Ue)&&isFinite($e)&&(Ue<-Math.PI?Ue+=ye:Ue>Math.PI&&(Ue-=ye),$e<-Math.PI?$e+=ye:$e>Math.PI&&($e-=ye),Ue<=$e?a.theta=Math.max(Ue,Math.min($e,a.theta)):a.theta=a.theta>(Ue+$e)/2?Math.max(Ue,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),L.setFromSpherical(a),L.applyQuaternion(de),ke.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||ve.distanceToSquared(i.object.position)>o||8*(1-pe.dot(i.object.quaternion))>o?(i.dispatchEvent(Xp),ve.copy(i.object.position),pe.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",V),i.domElement.removeEventListener("pointerdown",se),i.domElement.removeEventListener("pointercancel",Pe),i.domElement.removeEventListener("wheel",Ye),i.domElement.removeEventListener("pointermove",_e),i.domElement.removeEventListener("pointerup",ae),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Ge)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new jp,l=new jp;let u=1;const c=new D;let f=!1;const h=new oe,m=new oe,x=new oe,p=new oe,d=new oe,g=new oe,_=new oe,v=new oe,y=new oe,M=[],T={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function C(L){l.theta-=L}function P(L){l.phi-=L}const G=function(){const L=new D;return function(de,ve){L.setFromMatrixColumn(ve,0),L.multiplyScalar(-de),c.add(L)}}(),ue=function(){const L=new D;return function(de,ve){i.screenSpacePanning===!0?L.setFromMatrixColumn(ve,1):(L.setFromMatrixColumn(ve,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(de),c.add(L)}}(),B=function(){const L=new D;return function(de,ve){const pe=i.domElement;if(i.object.isPerspectiveCamera){const ye=i.object.position;L.copy(ye).sub(i.target);let xe=L.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),G(2*de*xe/pe.clientHeight,i.object.matrix),ue(2*ve*xe/pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(de*(i.object.right-i.object.left)/i.object.zoom/pe.clientWidth,i.object.matrix),ue(ve*(i.object.top-i.object.bottom)/i.object.zoom/pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(L){i.object.isPerspectiveCamera?u/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(L){i.object.isPerspectiveCamera?u*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){h.set(L.clientX,L.clientY)}function Q(L){_.set(L.clientX,L.clientY)}function N(L){p.set(L.clientX,L.clientY)}function R(L){m.set(L.clientX,L.clientY),x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;C(2*Math.PI*x.x/O.clientHeight),P(2*Math.PI*x.y/O.clientHeight),h.copy(m),i.update()}function z(L){v.set(L.clientX,L.clientY),y.subVectors(v,_),y.y>0?F(S()):y.y<0&&X(S()),_.copy(v),i.update()}function q(L){d.set(L.clientX,L.clientY),g.subVectors(d,p).multiplyScalar(i.panSpeed),B(g.x,g.y),p.copy(d),i.update()}function Z(L){L.deltaY<0?X(S()):L.deltaY>0&&F(S()),i.update()}function ee(L){let O=!1;switch(L.code){case i.keys.UP:B(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:B(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:B(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:B(-i.keyPanSpeed,0),O=!0;break}O&&(L.preventDefault(),i.update())}function he(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);h.set(L,O)}}function we(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);p.set(L,O)}}function H(){const L=M[0].pageX-M[1].pageX,O=M[0].pageY-M[1].pageY,de=Math.sqrt(L*L+O*O);_.set(0,de)}function Le(){i.enableZoom&&H(),i.enablePan&&we()}function Ee(){i.enableZoom&&H(),i.enableRotate&&he()}function Ae(L){if(M.length==1)m.set(L.pageX,L.pageY);else{const de=Ce(L),ve=.5*(L.pageX+de.x),pe=.5*(L.pageY+de.y);m.set(ve,pe)}x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;C(2*Math.PI*x.x/O.clientHeight),P(2*Math.PI*x.y/O.clientHeight),h.copy(m)}function ce(L){if(M.length===1)d.set(L.pageX,L.pageY);else{const O=Ce(L),de=.5*(L.pageX+O.x),ve=.5*(L.pageY+O.y);d.set(de,ve)}g.subVectors(d,p).multiplyScalar(i.panSpeed),B(g.x,g.y),p.copy(d)}function De(L){const O=Ce(L),de=L.pageX-O.x,ve=L.pageY-O.y,pe=Math.sqrt(de*de+ve*ve);v.set(0,pe),y.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),F(y.y),_.copy(v)}function J(L){i.enableZoom&&De(L),i.enablePan&&ce(L)}function Y(L){i.enableZoom&&De(L),i.enableRotate&&Ae(L)}function se(L){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",_e),i.domElement.addEventListener("pointerup",ae)),ne(L),L.pointerType==="touch"?b(L):be(L))}function _e(L){i.enabled!==!1&&(L.pointerType==="touch"?w(L):Me(L))}function ae(L){re(L),M.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",_e),i.domElement.removeEventListener("pointerup",ae)),i.dispatchEvent(qp),s=r.NONE}function Pe(L){re(L)}function be(L){let O;switch(L.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ar.DOLLY:if(i.enableZoom===!1)return;Q(L),s=r.DOLLY;break;case Ar.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;N(L),s=r.PAN}else{if(i.enableRotate===!1)return;K(L),s=r.ROTATE}break;case Ar.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;K(L),s=r.ROTATE}else{if(i.enablePan===!1)return;N(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ju)}function Me(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;R(L);break;case r.DOLLY:if(i.enableZoom===!1)return;z(L);break;case r.PAN:if(i.enablePan===!1)return;q(L);break}}function Ye(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Ju),Z(L),i.dispatchEvent(qp))}function Ge(L){i.enabled===!1||i.enablePan===!1||ee(L)}function b(L){switch(fe(L),M.length){case 1:switch(i.touches.ONE){case Lr.ROTATE:if(i.enableRotate===!1)return;he(),s=r.TOUCH_ROTATE;break;case Lr.PAN:if(i.enablePan===!1)return;we(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Lr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),s=r.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ju)}function w(L){switch(fe(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Y(L),i.update();break;default:s=r.NONE}}function V(L){i.enabled!==!1&&L.preventDefault()}function ne(L){M.push(L)}function re(L){delete T[L.pointerId];for(let O=0;O<M.length;O++)if(M[O].pointerId==L.pointerId){M.splice(O,1);return}}function fe(L){let O=T[L.pointerId];O===void 0&&(O=new oe,T[L.pointerId]=O),O.set(L.pageX,L.pageY)}function Ce(L){const O=L.pointerId===M[0].pointerId?M[1]:M[0];return T[O.pointerId]}i.domElement.addEventListener("contextmenu",V),i.domElement.addEventListener("pointerdown",se),i.domElement.addEventListener("pointercancel",Pe),i.domElement.addEventListener("wheel",Ye,{passive:!1}),this.update()}}class e2 extends uh{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class t2 extends Ol{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new VE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new n2(e)}}class n2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=i2(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function i2(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const f=r2(c,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function r2(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new ZE;let a,l,u,c,f,h,m,x;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,g=p.length;d<g;)switch(p[d++]){case"m":a=p[d++]*e+t,l=p[d++]*e+i,o.moveTo(a,l);break;case"l":a=p[d++]*e+t,l=p[d++]*e+i,o.lineTo(a,l);break;case"q":u=p[d++]*e+t,c=p[d++]*e+i,f=p[d++]*e+t,h=p[d++]*e+i,o.quadraticCurveTo(f,h,u,c);break;case"b":u=p[d++]*e+t,c=p[d++]*e+i,f=p[d++]*e+t,h=p[d++]*e+i,m=p[d++]*e+t,x=p[d++]*e+i,o.bezierCurveTo(f,h,m,x,u,c);break}}return{offsetX:s.ha*e,path:o}}class Nn{constructor(e,t,i,r){this.scene=e,this.note=t,this.position=i,this.audio=r}create(){const e=new Vi(1,.5,4),t=new ch({color:16777215}),i=new dn(e,t);i.position.set(this.position[0],this.position[1],this.position[2]),i.onPlay=()=>this._onPlay(i),i.onReset=()=>this.audio.currentTime=0,this.scene.add(i),new t2().load("node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json",s=>{const o=new e2(this.note,{height:.15,size:.5,font:s}),a=new nh({color:0}),l=new dn(o,a);l.position.set(this.position[0]-.25,this.position[1]+.6,this.position[2]-2.3),l.rotation.x=-1,this.scene.add(l)})}_onPlay(e){this.audio.play();const t=new gl({y:this.position[1],xRoration:0}).to({y:this.position[1]-.12,xRoration:.09},50).onUpdate(r=>{e.position.y=r.y,e.rotation.x=r.xRoration}).easing(zi.Cubic.Out),i=new gl({y:this.position[1]-.12,xRoration:.09}).to({y:this.position[1],xRoration:0},50).onUpdate(r=>{e.position.y=r.y,e.rotation.x=r.xRoration}).easing(zi.Cubic.In);t.chain(i),e.scale.y=-.8,t.start(),i.onComplete(()=>e.scale.y=1)}}class Yi{constructor(e,t,i,r){this.scene=e,this.note=t,this.position=i,this.audio=r}create(){const e=new Vi(.5,.3,2.6),t=new ch({color:0}),i=new dn(e,t);i.onPlay=()=>this._onPlay(i),i.onReset=()=>this.audio.currentTime=0,i.position.set(this.position[0],this.position[1],this.position[2]),this.scene.add(i)}_onPlay(e){this.audio.play();const t=new gl({y:this.position[1],xRoration:0}).to({y:this.position[1]-.1,xRoration:.08},50).onUpdate(r=>{e.position.y=r.y,e.rotation.x=r.xRoration}).easing(zi.Cubic.Out),i=new gl({y:this.position[1]-.1,xRoration:.08}).to({y:this.position[1],xRoration:0},50).onUpdate(r=>{e.position.y=r.y,e.rotation.x=r.xRoration}).easing(zi.Cubic.In);t.chain(i),t.start()}}class s2{constructor(e){this.scene=e}create(){this._createFramePart({w:1,h:1,d:6},{x:-5.95,y:0,z:-.8}),this._createFramePart({w:1,h:1,d:6},{x:5.95,y:0,z:-.8}),this._createFramePart({w:11,h:1,d:1.8},{x:0,y:0,z:-2.9}),this._createFramePart({w:11,h:.25,d:6},{x:0,y:-.375,z:-.8})}_createFramePart(e,t){const i=new HE().load("../../assets/wood.jpeg"),r=new Vi(e.w,e.h,e.d),s=new ch({map:i}),o=new dn(r,s);o.position.set(t.x,t.y,t.z),this.scene.add(o)}}class o2{constructor(e,t){this.scene=e,this.camera=t}init(){new s2(this.scene).create(),[new Nn(this.scene,"C",[-4.95,0,0],new Audio("../../assets/c.mp3")),new Yi(this.scene,"C\u266F/D\u266D",[-4.4,.35,-.65],new Audio("../../assets/c_sharp.mp3")),new Nn(this.scene,"D",[-3.85,0,0],new Audio("../../assets/d.mp3")),new Yi(this.scene,"D\u266F/E\u266D",[-3.3,.35,-.65],new Audio("../../assets/d_sharp.mp3")),new Nn(this.scene,"E",[-2.75,0,0],new Audio("../../assets/e.mp3")),new Nn(this.scene,"F",[-1.65,0,0],new Audio("../../assets/f.mp3")),new Yi(this.scene,"F\u266F/G\u266D",[-1.1,.35,-.65],new Audio("../../assets/f_sharp.mp3")),new Nn(this.scene,"G",[-.55,0,0],new Audio("../../assets/g.mp3")),new Yi(this.scene,"G\u266F/A\u266D",[0,.35,-.65],new Audio("../../assets/g_sharp.mp3")),new Nn(this.scene,"A",[.55,0,0],new Audio("../../assets/a.mp3")),new Yi(this.scene,"A\u266F/B\u266D",[1.1,.35,-.65],new Audio("../../assets/a_sharp.mp3")),new Nn(this.scene,"B",[1.65,0,0],new Audio("../../assets/b.mp3")),new Nn(this.scene,"C",[2.75,0,0],new Audio("../../assets/c2.mp3")),new Yi(this.scene,"C\u266F/D\u266D",[3.3,.35,-.65],new Audio("../../assets/c2_sharp.mp3")),new Nn(this.scene,"D",[3.85,0,0],new Audio("../../assets/d2.mp3")),new Yi(this.scene,"D\u266F/E\u266D",[4.4,.35,-.65],new Audio("../../assets/d2_sharp.mp3")),new Nn(this.scene,"E",[4.95,0,0],new Audio("../../assets/e2.mp3"))].forEach(s=>s.create());const i=new oe,r=new YE;window.addEventListener("click",s=>{var a,l,u,c,f,h,m,x;i.x=s.clientX/window.innerWidth*2-1,i.y=-(s.clientY/window.innerHeight)*2+1,r.setFromCamera(i,this.camera);const o=r.intersectObjects(this.scene.children);(o==null?void 0:o.length)&&((l=(a=o[0])==null?void 0:a.object)==null?void 0:l.onReset)&&((c=(u=o[0])==null?void 0:u.object)==null?void 0:c.onReset)&&((h=(f=o[0])==null?void 0:f.object)==null||h.onReset(),(x=(m=o[0])==null?void 0:m.object)==null||x.onPlay())})}}var O0={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2=No.exports,l2=Symbol.for("react.element"),u2=Symbol.for("react.fragment"),c2=Object.prototype.hasOwnProperty,f2=a2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h2={key:!0,ref:!0,__self:!0,__source:!0};function k0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)c2.call(e,i)&&!h2.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l2,type:n,key:s,ref:o,props:r,_owner:f2.current}}kl.Fragment=u2;kl.jsx=k0;kl.jsxs=k0;(function(n){n.exports=kl})(O0);const rf=O0.exports.jsx;function d2(){return No.exports.useEffect(()=>{const n=new iE,e=new cn(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,8,8);const t=new T0({canvas:document.getElementById("canvas"),antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(65280,.1),document.body.appendChild(t.domElement);const i=new QE(e,t.domElement);i.maxDistance=30,i.minDistance=5,new $E(3),new o2(n,e).init();const s=new qE(16777215,.6);n.add(s);const o=new XE(16777215,.7);o.position.set(0,10,10),n.add(o);const a=l=>{i.update(),KE(l),t.render(n,e),window.requestAnimationFrame(a)};a()},[]),rf("canvas",{id:"canvas"})}Ku.createRoot(document.getElementById("root")).render(rf(sv.StrictMode,{children:rf(d2,{})}));
