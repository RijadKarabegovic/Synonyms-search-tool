(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function lv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hh={exports:{}},Zo={},fh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function uv(){if(qp)return Re;qp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=k&&O[k]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,B={};function z(O,H,fe){this.props=O,this.context=H,this.refs=B,this.updater=fe||U}z.prototype.isReactComponent={},z.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ne(){}ne.prototype=z.prototype;function K(O,H,fe){this.props=O,this.context=H,this.refs=B,this.updater=fe||U}var Y=K.prototype=new ne;Y.constructor=K,W(Y,z.prototype),Y.isPureReactComponent=!0;var te=Array.isArray,Ee=Object.prototype.hasOwnProperty,ye={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function T(O,H,fe){var Se,Ce={},xe=null,Fe=null;if(H!=null)for(Se in H.ref!==void 0&&(Fe=H.ref),H.key!==void 0&&(xe=""+H.key),H)Ee.call(H,Se)&&!A.hasOwnProperty(Se)&&(Ce[Se]=H[Se]);var Ue=arguments.length-2;if(Ue===1)Ce.children=fe;else if(1<Ue){for(var $e=Array(Ue),Et=0;Et<Ue;Et++)$e[Et]=arguments[Et+2];Ce.children=$e}if(O&&O.defaultProps)for(Se in Ue=O.defaultProps,Ue)Ce[Se]===void 0&&(Ce[Se]=Ue[Se]);return{$$typeof:i,type:O,key:xe,ref:Fe,props:Ce,_owner:ye.current}}function C(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return H[fe]})}var D=/\/+/g;function S(O,H){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):H.toString(36)}function Je(O,H,fe,Se,Ce){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(xe){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=O,Ce=Ce(Fe),O=Se===""?"."+S(Fe,0):Se,te(Ce)?(fe="",O!=null&&(fe=O.replace(D,"$&/")+"/"),Je(Ce,H,fe,"",function(Et){return Et})):Ce!=null&&(x(Ce)&&(Ce=C(Ce,fe+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(D,"$&/")+"/")+O)),H.push(Ce)),1;if(Fe=0,Se=Se===""?".":Se+":",te(O))for(var Ue=0;Ue<O.length;Ue++){xe=O[Ue];var $e=Se+S(xe,Ue);Fe+=Je(xe,H,fe,$e,Ce)}else if($e=R(O),typeof $e=="function")for(O=$e.call(O),Ue=0;!(xe=O.next()).done;)xe=xe.value,$e=Se+S(xe,Ue++),Fe+=Je(xe,H,fe,$e,Ce);else if(xe==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ht(O,H,fe){if(O==null)return O;var Se=[],Ce=0;return Je(O,Se,"","",function(xe){return H.call(fe,xe,Ce++)}),Se}function ft(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var Le={current:null},Z={transition:null},de={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ye};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:ht,forEach:function(O,H,fe){ht(O,function(){H.apply(this,arguments)},fe)},count:function(O){var H=0;return ht(O,function(){H++}),H},toArray:function(O){return ht(O,function(H){return H})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=z,Re.Fragment=n,Re.Profiler=a,Re.PureComponent=K,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=oe,Re.cloneElement=function(O,H,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=W({},O.props),Ce=O.key,xe=O.ref,Fe=O._owner;if(H!=null){if(H.ref!==void 0&&(xe=H.ref,Fe=ye.current),H.key!==void 0&&(Ce=""+H.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for($e in H)Ee.call(H,$e)&&!A.hasOwnProperty($e)&&(Se[$e]=H[$e]===void 0&&Ue!==void 0?Ue[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Ue=Array($e);for(var Et=0;Et<$e;Et++)Ue[Et]=arguments[Et+2];Se.children=Ue}return{$$typeof:i,type:O.type,key:Ce,ref:xe,props:Se,_owner:Fe}},Re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},Re.createElement=T,Re.createFactory=function(O){var H=T.bind(null,O);return H.type=O,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=x,Re.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:ft}},Re.memo=function(O,H){return{$$typeof:v,type:O,compare:H===void 0?null:H}},Re.startTransition=function(O){var H=Z.transition;Z.transition={};try{O()}finally{Z.transition=H}},Re.unstable_act=oe,Re.useCallback=function(O,H){return Le.current.useCallback(O,H)},Re.useContext=function(O){return Le.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Le.current.useDeferredValue(O)},Re.useEffect=function(O,H){return Le.current.useEffect(O,H)},Re.useId=function(){return Le.current.useId()},Re.useImperativeHandle=function(O,H,fe){return Le.current.useImperativeHandle(O,H,fe)},Re.useInsertionEffect=function(O,H){return Le.current.useInsertionEffect(O,H)},Re.useLayoutEffect=function(O,H){return Le.current.useLayoutEffect(O,H)},Re.useMemo=function(O,H){return Le.current.useMemo(O,H)},Re.useReducer=function(O,H,fe){return Le.current.useReducer(O,H,fe)},Re.useRef=function(O){return Le.current.useRef(O)},Re.useState=function(O){return Le.current.useState(O)},Re.useSyncExternalStore=function(O,H,fe){return Le.current.useSyncExternalStore(O,H,fe)},Re.useTransition=function(){return Le.current.useTransition()},Re.version="18.3.1",Re}var Qp;function ef(){return Qp||(Qp=1,fh.exports=uv()),fh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function cv(){if(Kp)return Zo;Kp=1;var i=ef(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(m,y,v){var w,k={},R=null,U=null;v!==void 0&&(R=""+v),y.key!==void 0&&(R=""+y.key),y.ref!==void 0&&(U=y.ref);for(w in y)s.call(y,w)&&!c.hasOwnProperty(w)&&(k[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)k[w]===void 0&&(k[w]=y[w]);return{$$typeof:e,type:m,key:R,ref:U,props:k,_owner:a.current}}return Zo.Fragment=n,Zo.jsx=f,Zo.jsxs=f,Zo}var Gp;function hv(){return Gp||(Gp=1,hh.exports=cv()),hh.exports}var ie=hv(),Ie=ef();const qe=lv(Ie);var $l={},dh={exports:{}},Zt={},ph={exports:{}},mh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function fv(){return Xp||(Xp=1,(function(i){function e(Z,de){var oe=Z.length;Z.push(de);e:for(;0<oe;){var O=oe-1>>>1,H=Z[O];if(0<a(H,de))Z[O]=de,Z[oe]=H,oe=O;else break e}}function n(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],oe=Z.pop();if(oe!==de){Z[0]=oe;e:for(var O=0,H=Z.length,fe=H>>>1;O<fe;){var Se=2*(O+1)-1,Ce=Z[Se],xe=Se+1,Fe=Z[xe];if(0>a(Ce,oe))xe<H&&0>a(Fe,Ce)?(Z[O]=Fe,Z[xe]=oe,O=xe):(Z[O]=Ce,Z[Se]=oe,O=Se);else if(xe<H&&0>a(Fe,oe))Z[O]=Fe,Z[xe]=oe,O=xe;else break e}}return de}function a(Z,de){var oe=Z.sortIndex-de.sortIndex;return oe!==0?oe:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var y=[],v=[],w=1,k=null,R=3,U=!1,W=!1,B=!1,z=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(Z){for(var de=n(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=Z)s(v),de.sortIndex=de.expirationTime,e(y,de);else break;de=n(v)}}function te(Z){if(B=!1,Y(Z),!W)if(n(y)!==null)W=!0,ft(Ee);else{var de=n(v);de!==null&&Le(te,de.startTime-Z)}}function Ee(Z,de){W=!1,B&&(B=!1,ne(T),T=-1),U=!0;var oe=R;try{for(Y(de),k=n(y);k!==null&&(!(k.expirationTime>de)||Z&&!V());){var O=k.callback;if(typeof O=="function"){k.callback=null,R=k.priorityLevel;var H=O(k.expirationTime<=de);de=i.unstable_now(),typeof H=="function"?k.callback=H:k===n(y)&&s(y),Y(de)}else s(y);k=n(y)}if(k!==null)var fe=!0;else{var Se=n(v);Se!==null&&Le(te,Se.startTime-de),fe=!1}return fe}finally{k=null,R=oe,U=!1}}var ye=!1,A=null,T=-1,C=5,x=-1;function V(){return!(i.unstable_now()-x<C)}function D(){if(A!==null){var Z=i.unstable_now();x=Z;var de=!0;try{de=A(!0,Z)}finally{de?S():(ye=!1,A=null)}}else ye=!1}var S;if(typeof K=="function")S=function(){K(D)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,ht=Je.port2;Je.port1.onmessage=D,S=function(){ht.postMessage(null)}}else S=function(){z(D,0)};function ft(Z){A=Z,ye||(ye=!0,S())}function Le(Z,de){T=z(function(){Z(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){W||U||(W=!0,ft(Ee))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return n(y)},i.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var de=3;break;default:de=R}var oe=R;R=de;try{return Z()}finally{R=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var oe=R;R=Z;try{return de()}finally{R=oe}},i.unstable_scheduleCallback=function(Z,de,oe){var O=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=oe+H,Z={id:w++,callback:de,priorityLevel:Z,startTime:oe,expirationTime:H,sortIndex:-1},oe>O?(Z.sortIndex=oe,e(v,Z),n(y)===null&&Z===n(v)&&(B?(ne(T),T=-1):B=!0,Le(te,oe-O))):(Z.sortIndex=H,e(y,Z),W||U||(W=!0,ft(Ee))),Z},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(Z){var de=R;return function(){var oe=R;R=de;try{return Z.apply(this,arguments)}finally{R=oe}}}})(mh)),mh}var Yp;function dv(){return Yp||(Yp=1,ph.exports=fv()),ph.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function pv(){if(Jp)return Zt;Jp=1;var i=ef(),e=dv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){f(t,r),f(t+"Capture",r)}function f(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},k={};function R(t){return y.call(k,t)?!0:y.call(w,t)?!1:v.test(t)?k[t]=!0:(w[t]=!0,!1)}function U(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function W(t,r,o,u){if(r===null||typeof r>"u"||U(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function B(t,r,o,u,h,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];z[r]=new B(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function K(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ne,K);z[r]=new B(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ne,K);z[r]=new B(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ne,K);z[r]=new B(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function Y(t,r,o,u){var h=z.hasOwnProperty(r)?z[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(W(r,o,h,u)&&(o=null),u||h===null?R(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),ye=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,O;function H(t){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var fe=!1;function Se(t,r){if(!t||fe)return"";fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var u=F}Reflect.construct(t,[],r)}else{try{r.call()}catch(F){u=F}t.call(r.prototype)}else{try{throw Error()}catch(F){u=F}t()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var h=F.stack.split(`
`),p=u.stack.split(`
`),_=h.length-1,I=p.length-1;1<=_&&0<=I&&h[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(h[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||h[_]!==p[I]){var P=`
`+h[_].replace(" at new "," at ");return t.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",t.displayName)),P}while(1<=_&&0<=I);break}}}finally{fe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?H(t):""}function Ce(t){switch(t.tag){case 5:return H(t.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return t=Se(t.type,!1),t;case 11:return t=Se(t.type.render,!1),t;case 1:return t=Se(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case ye:return"Portal";case C:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Je:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case x:return(t._context.displayName||"Context")+".Provider";case D:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ht:return r=t.displayName||null,r!==null?r:xe(t.type)||"Memo";case ft:r=t._payload,t=t._init;try{return xe(t(r))}catch{}}return null}function Fe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Et(t){var r=$e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){u=""+_,p.call(this,_)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function rr(t){t._valueTracker||(t._valueTracker=Et(t))}function Xi(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=$e(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Ar(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fi(t,r){var o=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Yi(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Ue(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function io(t,r){r=r.checked,r!=null&&Y(t,"checked",r,!1)}function so(t,r){io(t,r);var o=Ue(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ji(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ji(t,r.type,Ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ka(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ji(t,r,o){(r!=="number"||Ar(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ir=Array.isArray;function sr(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Ue(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function oo(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zi(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(ir(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Ue(o)}}function es(t,r){var o=Ue(r.value),u=Ue(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function ao(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function dt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?dt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var or,lo=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=or.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Cr(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pi=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(t){pi.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),di[r]=di[t]})});function uo(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||di.hasOwnProperty(t)&&di[t]?(""+r).trim():r+"px"}function co(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=uo(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var ho=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(t,r){if(r){if(ho[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function po(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function ts(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,hn=null,Un=null;function rs(t){if(t=Fo(t)){if(typeof ns!="function")throw Error(n(280));var r=t.stateNode;r&&(r=il(r),ns(t.stateNode,t.type,r))}}function jn(t){hn?Un?Un.push(t):Un=[t]:hn=t}function mo(){if(hn){var t=hn,r=Un;if(Un=hn=null,rs(t),r)for(t=0;t<r.length;t++)rs(r[t])}}function gi(t,r){return t(r)}function go(){}var ar=!1;function yo(t,r,o){if(ar)return t(r,o);ar=!0;try{return gi(t,r,o)}finally{ar=!1,(hn!==null||Un!==null)&&(go(),mo())}}function it(t,r){var o=t.stateNode;if(o===null)return null;var u=il(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var is=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){is=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{is=!1}function yi(t,r,o,u,h,p,_,I,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch(G){this.onError(G)}}var _i=!1,ss=null,In=!1,_o=null,Uu={onError:function(t){_i=!0,ss=t}};function os(t,r,o,u,h,p,_,I,P){_i=!1,ss=null,yi.apply(Uu,arguments)}function Pa(t,r,o,u,h,p,_,I,P){if(os.apply(this,arguments),_i){if(_i){var F=ss;_i=!1,ss=null}else throw Error(n(198));In||(In=!0,_o=F)}}function Sn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function vi(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function An(t){if(Sn(t)!==t)throw Error(n(188))}function xa(t){var r=t.alternate;if(!r){if(r=Sn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return An(h),t;if(p===u)return An(h),r;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=p;else{for(var _=!1,I=h.child;I;){if(I===o){_=!0,o=h,u=p;break}if(I===u){_=!0,u=h,o=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===o){_=!0,o=p,u=h;break}if(I===u){_=!0,u=p,o=h;break}I=I.sibling}if(!_)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function vo(t){return t=xa(t),t!==null?as(t):null}function as(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=as(t);if(r!==null)return r;t=t.sibling}return null}var ls=e.unstable_scheduleCallback,Eo=e.unstable_cancelCallback,Na=e.unstable_shouldYield,ju=e.unstable_requestPaint,He=e.unstable_now,Va=e.unstable_getCurrentPriorityLevel,Ei=e.unstable_ImmediatePriority,Rr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,wo=e.unstable_LowPriority,Da=e.unstable_IdlePriority,wi=null,nn=null;function Oa(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(wi,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Ma,To=Math.log,La=Math.LN2;function Ma(t){return t>>>=0,t===0?32:31-(To(t)/La|0)|0}var us=64,cs=4194304;function kr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ti(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,p=t.pingedLanes,_=o&268435455;if(_!==0){var I=_&~h;I!==0?u=kr(I):(p&=_,p!==0&&(u=kr(p)))}else _=o&~h,_!==0?u=kr(_):p!==0&&(u=kr(p));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-zt(r),h=1<<o,u|=t[o],r&=~h;return u}function zu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lr(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,p=t.pendingLanes;0<p;){var _=31-zt(p),I=1<<_,P=h[_];P===-1?((I&o)===0||(I&u)!==0)&&(h[_]=zu(I,r)):P<=r&&(t.expiredLanes|=I),p&=~I}}function rn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ii(){var t=us;return us<<=1,(us&4194240)===0&&(us=64),t}function Pr(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function xr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-zt(r),t[r]=o}function Be(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-zt(o),p=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~p}}function Nr(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-zt(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Pe=0;function Vr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ba,hs,Fa,Ua,ja,Io=!1,zn=[],Ct=null,Cn=null,Rn=null,Dr=new Map,dn=new Map,Bn=[],Bu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function za(t,r){switch(t){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Dr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function qt(t,r,o,u,h,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},r!==null&&(r=Fo(r),r!==null&&hs(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function $u(t,r,o,u,h){switch(r){case"focusin":return Ct=qt(Ct,t,r,o,u,h),!0;case"dragenter":return Cn=qt(Cn,t,r,o,u,h),!0;case"mouseover":return Rn=qt(Rn,t,r,o,u,h),!0;case"pointerover":var p=h.pointerId;return Dr.set(p,qt(Dr.get(p)||null,t,r,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,dn.set(p,qt(dn.get(p)||null,t,r,o,u,h)),!0}return!1}function Ba(t){var r=ki(t.target);if(r!==null){var o=Sn(r);if(o!==null){if(r=o.tag,r===13){if(r=vi(o),r!==null){t.blockedOn=r,ja(t.priority,function(){Fa(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ur(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=fs(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);mi=u,o.target.dispatchEvent(u),mi=null}else return r=Fo(o),r!==null&&hs(r),t.blockedOn=o,!1;r.shift()}return!0}function Si(t,r,o){ur(t)&&o.delete(r)}function $a(){Io=!1,Ct!==null&&ur(Ct)&&(Ct=null),Cn!==null&&ur(Cn)&&(Cn=null),Rn!==null&&ur(Rn)&&(Rn=null),Dr.forEach(Si),dn.forEach(Si)}function kn(t,r){t.blockedOn===r&&(t.blockedOn=null,Io||(Io=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$a)))}function Pn(t){function r(h){return kn(h,t)}if(0<zn.length){kn(zn[0],t);for(var o=1;o<zn.length;o++){var u=zn[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Ct!==null&&kn(Ct,t),Cn!==null&&kn(Cn,t),Rn!==null&&kn(Rn,t),Dr.forEach(r),dn.forEach(r),o=0;o<Bn.length;o++)u=Bn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Bn.length&&(o=Bn[0],o.blockedOn===null);)Ba(o),o.blockedOn===null&&Bn.shift()}var cr=te.ReactCurrentBatchConfig,Or=!0;function Xe(t,r,o,u){var h=Pe,p=cr.transition;cr.transition=null;try{Pe=1,So(t,r,o,u)}finally{Pe=h,cr.transition=p}}function Hu(t,r,o,u){var h=Pe,p=cr.transition;cr.transition=null;try{Pe=4,So(t,r,o,u)}finally{Pe=h,cr.transition=p}}function So(t,r,o,u){if(Or){var h=fs(t,r,o,u);if(h===null)tc(t,r,u,Ai,o),za(t,u);else if($u(h,t,r,o,u))u.stopPropagation();else if(za(t,u),r&4&&-1<Bu.indexOf(t)){for(;h!==null;){var p=Fo(h);if(p!==null&&ba(p),p=fs(t,r,o,u),p===null&&tc(t,r,u,Ai,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else tc(t,r,u,null,o)}}var Ai=null;function fs(t,r,o,u){if(Ai=null,t=ts(u),t=ki(t),t!==null)if(r=Sn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=vi(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ai=t,null}function Ao(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Va()){case Ei:return 1;case Rr:return 4;case fn:case wo:return 16;case Da:return 536870912;default:return 16}default:return 16}}var sn=null,ds=null,Qt=null;function Co(){if(Qt)return Qt;var t,r=ds,o=r.length,u,h="value"in sn?sn.value:sn.textContent,p=h.length;for(t=0;t<o&&r[t]===h[t];t++);var _=o-t;for(u=1;u<=_&&r[o-u]===h[p-u];u++);return Qt=h.slice(t,1<u?1-u:void 0)}function ps(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function $n(){return!0}function Ro(){return!1}function Rt(t){function r(o,u,h,p,_){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?$n:Ro,this.isPropagationStopped=Ro,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=Rt(xn),Hn=oe({},xn,{view:0,detail:0}),Wu=Rt(Hn),gs,hr,Lr,Ci=oe({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lr&&(Lr&&t.type==="mousemove"?(gs=t.screenX-Lr.screenX,hr=t.screenY-Lr.screenY):hr=gs=0,Lr=t),gs)},movementY:function(t){return"movementY"in t?t.movementY:hr}}),ys=Rt(Ci),ko=oe({},Ci,{dataTransfer:0}),Ha=Rt(ko),_s=oe({},Hn,{relatedTarget:0}),vs=Rt(_s),Wa=oe({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),fr=Rt(Wa),qa=oe({},xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qa=Rt(qa),Ka=oe({},xn,{data:0}),Po=Rt(Ka),Es={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ga={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xa(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Ga[t])?!!r[t]:!1}function Wn(){return Xa}var l=oe({},Hn,{key:function(t){if(t.key){var r=Es[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ps(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bt[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(t){return t.type==="keypress"?ps(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ps(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d=Rt(l),g=oe({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(g),L=oe({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),j=Rt(L),ee=oe({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Rt(ee),mt=oe({},Ci,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Rt(mt),wt=[9,13,27,32],at=m&&"CompositionEvent"in window,pn=null;m&&"documentMode"in document&&(pn=document.documentMode);var on=m&&"TextEvent"in window&&!pn,Ri=m&&(!at||pn&&8<pn&&11>=pn),ws=" ",jf=!1;function zf(t,r){switch(t){case"keyup":return wt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function s_(t,r){switch(t){case"compositionend":return Bf(r);case"keypress":return r.which!==32?null:(jf=!0,ws);case"textInput":return t=r.data,t===ws&&jf?null:t;default:return null}}function o_(t,r){if(Ts)return t==="compositionend"||!at&&zf(t,r)?(t=Co(),Qt=ds=sn=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ri&&r.locale!=="ko"?null:r.data;default:return null}}var a_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!a_[t.type]:r==="textarea"}function Hf(t,r,o,u){jn(u),r=tl(r,"onChange"),0<r.length&&(o=new ms("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var xo=null,No=null;function l_(t){ld(t,0)}function Ya(t){var r=Rs(t);if(Xi(r))return t}function u_(t,r){if(t==="change")return r}var Wf=!1;if(m){var qu;if(m){var Qu="oninput"in document;if(!Qu){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Qu=typeof qf.oninput=="function"}qu=Qu}else qu=!1;Wf=qu&&(!document.documentMode||9<document.documentMode)}function Qf(){xo&&(xo.detachEvent("onpropertychange",Kf),No=xo=null)}function Kf(t){if(t.propertyName==="value"&&Ya(No)){var r=[];Hf(r,No,t,ts(t)),yo(l_,r)}}function c_(t,r,o){t==="focusin"?(Qf(),xo=r,No=o,xo.attachEvent("onpropertychange",Kf)):t==="focusout"&&Qf()}function h_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ya(No)}function f_(t,r){if(t==="click")return Ya(r)}function d_(t,r){if(t==="input"||t==="change")return Ya(r)}function p_(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Nn=typeof Object.is=="function"?Object.is:p_;function Vo(t,r){if(Nn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(r,h)||!Nn(t[h],r[h]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,r){var o=Gf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gf(o)}}function Yf(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Yf(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Jf(){for(var t=window,r=Ar();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ar(t.document)}return r}function Ku(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function m_(t){var r=Jf(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Yf(o.ownerDocument.documentElement,o)){if(u!==null&&Ku(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!t.extend&&p>u&&(h=u,u=p,p=h),h=Xf(o,p);var _=Xf(o,u);h&&_&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==_.node||t.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g_=m&&"documentMode"in document&&11>=document.documentMode,Is=null,Gu=null,Do=null,Xu=!1;function Zf(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xu||Is==null||Is!==Ar(u)||(u=Is,"selectionStart"in u&&Ku(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Do&&Vo(Do,u)||(Do=u,u=tl(Gu,"onSelect"),0<u.length&&(r=new ms("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=Is)))}function Ja(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Ss={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},Yu={},ed={};m&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Za(t){if(Yu[t])return Yu[t];if(!Ss[t])return t;var r=Ss[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in ed)return Yu[t]=r[o];return t}var td=Za("animationend"),nd=Za("animationiteration"),rd=Za("animationstart"),id=Za("transitionend"),sd=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,r){sd.set(t,r),c(r,[t])}for(var Ju=0;Ju<od.length;Ju++){var Zu=od[Ju],y_=Zu.toLowerCase(),__=Zu[0].toUpperCase()+Zu.slice(1);Mr(y_,"on"+__)}Mr(td,"onAnimationEnd"),Mr(nd,"onAnimationIteration"),Mr(rd,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(id,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function ad(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,Pa(u,r,void 0,t),t.currentTarget=null}function ld(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var _=u.length-1;0<=_;_--){var I=u[_],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==p&&h.isPropagationStopped())break e;ad(h,I,F),p=P}else for(_=0;_<u.length;_++){if(I=u[_],P=I.instance,F=I.currentTarget,I=I.listener,P!==p&&h.isPropagationStopped())break e;ad(h,I,F),p=P}}}if(In)throw t=_o,In=!1,_o=null,t}function Qe(t,r){var o=r[ac];o===void 0&&(o=r[ac]=new Set);var u=t+"__bubble";o.has(u)||(ud(r,t,2,!1),o.add(u))}function ec(t,r,o){var u=0;r&&(u|=4),ud(o,t,u,r)}var el="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[el]){t[el]=!0,s.forEach(function(o){o!=="selectionchange"&&(v_.has(o)||ec(o,!1,t),ec(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[el]||(r[el]=!0,ec("selectionchange",!1,r))}}function ud(t,r,o,u){switch(Ao(r)){case 1:var h=Xe;break;case 4:h=Hu;break;default:h=So}o=h.bind(null,r,o,t),h=void 0,!is||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function tc(t,r,o,u,h){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(_===4)for(_=u.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===h||P.nodeType===8&&P.parentNode===h))return;_=_.return}for(;I!==null;){if(_=ki(I),_===null)return;if(P=_.tag,P===5||P===6){u=p=_;continue e}I=I.parentNode}}u=u.return}yo(function(){var F=p,G=ts(o),X=[];e:{var Q=sd.get(t);if(Q!==void 0){var re=ms,le=t;switch(t){case"keypress":if(ps(o)===0)break e;case"keydown":case"keyup":re=d;break;case"focusin":le="focus",re=vs;break;case"focusout":le="blur",re=vs;break;case"beforeblur":case"afterblur":re=vs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ha;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=j;break;case td:case nd:case rd:re=fr;break;case id:re=ze;break;case"scroll":re=Wu;break;case"wheel":re=Ne;break;case"copy":case"cut":case"paste":re=Qa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var ue=(r&4)!==0,st=!ue&&t==="scroll",M=ue?Q!==null?Q+"Capture":null:Q;ue=[];for(var N=F,b;N!==null;){b=N;var J=b.stateNode;if(b.tag===5&&J!==null&&(b=J,M!==null&&(J=it(N,M),J!=null&&ue.push(Mo(N,J,b)))),st)break;N=N.return}0<ue.length&&(Q=new re(Q,le,null,o,G),X.push({event:Q,listeners:ue}))}}if((r&7)===0){e:{if(Q=t==="mouseover"||t==="pointerover",re=t==="mouseout"||t==="pointerout",Q&&o!==mi&&(le=o.relatedTarget||o.fromElement)&&(ki(le)||le[dr]))break e;if((re||Q)&&(Q=G.window===G?G:(Q=G.ownerDocument)?Q.defaultView||Q.parentWindow:window,re?(le=o.relatedTarget||o.toElement,re=F,le=le?ki(le):null,le!==null&&(st=Sn(le),le!==st||le.tag!==5&&le.tag!==6)&&(le=null)):(re=null,le=F),re!==le)){if(ue=ys,J="onMouseLeave",M="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(ue=E,J="onPointerLeave",M="onPointerEnter",N="pointer"),st=re==null?Q:Rs(re),b=le==null?Q:Rs(le),Q=new ue(J,N+"leave",re,o,G),Q.target=st,Q.relatedTarget=b,J=null,ki(G)===F&&(ue=new ue(M,N+"enter",le,o,G),ue.target=b,ue.relatedTarget=st,J=ue),st=J,re&&le)t:{for(ue=re,M=le,N=0,b=ue;b;b=As(b))N++;for(b=0,J=M;J;J=As(J))b++;for(;0<N-b;)ue=As(ue),N--;for(;0<b-N;)M=As(M),b--;for(;N--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=As(ue),M=As(M)}ue=null}else ue=null;re!==null&&cd(X,Q,re,ue,!1),le!==null&&st!==null&&cd(X,st,le,ue,!0)}}e:{if(Q=F?Rs(F):window,re=Q.nodeName&&Q.nodeName.toLowerCase(),re==="select"||re==="input"&&Q.type==="file")var ce=u_;else if($f(Q))if(Wf)ce=d_;else{ce=h_;var pe=c_}else(re=Q.nodeName)&&re.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(ce=f_);if(ce&&(ce=ce(t,F))){Hf(X,ce,o,G);break e}pe&&pe(t,Q,F),t==="focusout"&&(pe=Q._wrapperState)&&pe.controlled&&Q.type==="number"&&Ji(Q,"number",Q.value)}switch(pe=F?Rs(F):window,t){case"focusin":($f(pe)||pe.contentEditable==="true")&&(Is=pe,Gu=F,Do=null);break;case"focusout":Do=Gu=Is=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Zf(X,o,G);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":Zf(X,o,G)}var me;if(at)e:{switch(t){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ts?zf(t,o)&&(ve="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(Ri&&o.locale!=="ko"&&(Ts||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ts&&(me=Co()):(sn=G,ds="value"in sn?sn.value:sn.textContent,Ts=!0)),pe=tl(F,ve),0<pe.length&&(ve=new Po(ve,t,null,o,G),X.push({event:ve,listeners:pe}),me?ve.data=me:(me=Bf(o),me!==null&&(ve.data=me)))),(me=on?s_(t,o):o_(t,o))&&(F=tl(F,"onBeforeInput"),0<F.length&&(G=new Po("onBeforeInput","beforeinput",null,o,G),X.push({event:G,listeners:F}),G.data=me))}ld(X,r)})}function Mo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function tl(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=it(t,o),p!=null&&u.unshift(Mo(t,p,h)),p=it(t,r),p!=null&&u.push(Mo(t,p,h))),t=t.return}return u}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cd(t,r,o,u,h){for(var p=r._reactName,_=[];o!==null&&o!==u;){var I=o,P=I.alternate,F=I.stateNode;if(P!==null&&P===u)break;I.tag===5&&F!==null&&(I=F,h?(P=it(o,p),P!=null&&_.unshift(Mo(o,P,I))):h||(P=it(o,p),P!=null&&_.push(Mo(o,P,I)))),o=o.return}_.length!==0&&t.push({event:r,listeners:_})}var E_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function hd(t){return(typeof t=="string"?t:""+t).replace(E_,`
`).replace(w_,"")}function nl(t,r,o){if(r=hd(r),hd(t)!==r&&o)throw Error(n(425))}function rl(){}var nc=null,rc=null;function ic(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(t){return fd.resolve(null).then(t).catch(S_)}:sc;function S_(t){setTimeout(function(){throw t})}function oc(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),Pn(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Pn(r)}function br(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function dd(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Cs,bo="__reactProps$"+Cs,dr="__reactContainer$"+Cs,ac="__reactEvents$"+Cs,A_="__reactListeners$"+Cs,C_="__reactHandles$"+Cs;function ki(t){var r=t[qn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[dr]||o[qn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=dd(t);t!==null;){if(o=t[qn])return o;t=dd(t)}return r}t=o,o=t.parentNode}return null}function Fo(t){return t=t[qn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function il(t){return t[bo]||null}var lc=[],ks=-1;function Fr(t){return{current:t}}function Ke(t){0>ks||(t.current=lc[ks],lc[ks]=null,ks--)}function We(t,r){ks++,lc[ks]=t.current,t.current=r}var Ur={},Ot=Fr(Ur),Kt=Fr(!1),Pi=Ur;function Ps(t,r){var o=t.type.contextTypes;if(!o)return Ur;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=r[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function Gt(t){return t=t.childContextTypes,t!=null}function sl(){Ke(Kt),Ke(Ot)}function pd(t,r,o){if(Ot.current!==Ur)throw Error(n(168));We(Ot,r),We(Kt,o)}function md(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,Fe(t)||"Unknown",h));return oe({},o,u)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Pi=Ot.current,We(Ot,t),We(Kt,Kt.current),!0}function gd(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=md(t,r,Pi),u.__reactInternalMemoizedMergedChildContext=t,Ke(Kt),Ke(Ot),We(Ot,t)):Ke(Kt),We(Kt,o)}var pr=null,al=!1,uc=!1;function yd(t){pr===null?pr=[t]:pr.push(t)}function R_(t){al=!0,yd(t)}function jr(){if(!uc&&pr!==null){uc=!0;var t=0,r=Pe;try{var o=pr;for(Pe=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}pr=null,al=!1}catch(h){throw pr!==null&&(pr=pr.slice(t+1)),ls(Ei,jr),h}finally{Pe=r,uc=!1}}return null}var xs=[],Ns=0,ll=null,ul=0,mn=[],gn=0,xi=null,mr=1,gr="";function Ni(t,r){xs[Ns++]=ul,xs[Ns++]=ll,ll=t,ul=r}function _d(t,r,o){mn[gn++]=mr,mn[gn++]=gr,mn[gn++]=xi,xi=t;var u=mr;t=gr;var h=32-zt(u)-1;u&=~(1<<h),o+=1;var p=32-zt(r)+h;if(30<p){var _=h-h%5;p=(u&(1<<_)-1).toString(32),u>>=_,h-=_,mr=1<<32-zt(r)+h|o<<h|u,gr=p+t}else mr=1<<p|o<<h|u,gr=t}function cc(t){t.return!==null&&(Ni(t,1),_d(t,1,0))}function hc(t){for(;t===ll;)ll=xs[--Ns],xs[Ns]=null,ul=xs[--Ns],xs[Ns]=null;for(;t===xi;)xi=mn[--gn],mn[gn]=null,gr=mn[--gn],mn[gn]=null,mr=mn[--gn],mn[gn]=null}var an=null,ln=null,Ye=!1,Vn=null;function vd(t,r){var o=En(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Ed(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,an=t,ln=br(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,an=t,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=xi!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=En(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,an=t,ln=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dc(t){if(Ye){var r=ln;if(r){var o=r;if(!Ed(t,r)){if(fc(t))throw Error(n(418));r=br(o.nextSibling);var u=an;r&&Ed(t,r)?vd(u,o):(t.flags=t.flags&-4097|2,Ye=!1,an=t)}}else{if(fc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ye=!1,an=t}}}function wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function cl(t){if(t!==an)return!1;if(!Ye)return wd(t),Ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ic(t.type,t.memoizedProps)),r&&(r=ln)){if(fc(t))throw Td(),Error(n(418));for(;r;)vd(t,r),r=br(r.nextSibling)}if(wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){ln=br(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}ln=null}}else ln=an?br(t.stateNode.nextSibling):null;return!0}function Td(){for(var t=ln;t;)t=br(t.nextSibling)}function Vs(){ln=an=null,Ye=!1}function pc(t){Vn===null?Vn=[t]:Vn.push(t)}var k_=te.ReactCurrentBatchConfig;function Uo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=h.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function hl(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Id(t){var r=t._init;return r(t._payload)}function Sd(t){function r(M,N){if(t){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function o(M,N){if(!t)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function u(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function h(M,N){return M=Kr(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,t?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return t&&M.alternate===null&&(M.flags|=2),M}function I(M,N,b,J){return N===null||N.tag!==6?(N=sh(b,M.mode,J),N.return=M,N):(N=h(N,b),N.return=M,N)}function P(M,N,b,J){var ce=b.type;return ce===A?G(M,N,b.props.children,J,b.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ft&&Id(ce)===N.type)?(J=h(N,b.props),J.ref=Uo(M,N,b),J.return=M,J):(J=Ll(b.type,b.key,b.props,null,M.mode,J),J.ref=Uo(M,N,b),J.return=M,J)}function F(M,N,b,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=oh(b,M.mode,J),N.return=M,N):(N=h(N,b.children||[]),N.return=M,N)}function G(M,N,b,J,ce){return N===null||N.tag!==7?(N=Ui(b,M.mode,J,ce),N.return=M,N):(N=h(N,b),N.return=M,N)}function X(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=sh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ee:return b=Ll(N.type,N.key,N.props,null,M.mode,b),b.ref=Uo(M,null,N),b.return=M,b;case ye:return N=oh(N,M.mode,b),N.return=M,N;case ft:var J=N._init;return X(M,J(N._payload),b)}if(ir(N)||de(N))return N=Ui(N,M.mode,b,null),N.return=M,N;hl(M,N)}return null}function Q(M,N,b,J){var ce=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ce!==null?null:I(M,N,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ee:return b.key===ce?P(M,N,b,J):null;case ye:return b.key===ce?F(M,N,b,J):null;case ft:return ce=b._init,Q(M,N,ce(b._payload),J)}if(ir(b)||de(b))return ce!==null?null:G(M,N,b,J,null);hl(M,b)}return null}function re(M,N,b,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(b)||null,I(N,M,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ee:return M=M.get(J.key===null?b:J.key)||null,P(N,M,J,ce);case ye:return M=M.get(J.key===null?b:J.key)||null,F(N,M,J,ce);case ft:var pe=J._init;return re(M,N,b,pe(J._payload),ce)}if(ir(J)||de(J))return M=M.get(b)||null,G(N,M,J,ce,null);hl(N,J)}return null}function le(M,N,b,J){for(var ce=null,pe=null,me=N,ve=N=0,St=null;me!==null&&ve<b.length;ve++){me.index>ve?(St=me,me=null):St=me.sibling;var Me=Q(M,me,b[ve],J);if(Me===null){me===null&&(me=St);break}t&&me&&Me.alternate===null&&r(M,me),N=p(Me,N,ve),pe===null?ce=Me:pe.sibling=Me,pe=Me,me=St}if(ve===b.length)return o(M,me),Ye&&Ni(M,ve),ce;if(me===null){for(;ve<b.length;ve++)me=X(M,b[ve],J),me!==null&&(N=p(me,N,ve),pe===null?ce=me:pe.sibling=me,pe=me);return Ye&&Ni(M,ve),ce}for(me=u(M,me);ve<b.length;ve++)St=re(me,M,ve,b[ve],J),St!==null&&(t&&St.alternate!==null&&me.delete(St.key===null?ve:St.key),N=p(St,N,ve),pe===null?ce=St:pe.sibling=St,pe=St);return t&&me.forEach(function(Gr){return r(M,Gr)}),Ye&&Ni(M,ve),ce}function ue(M,N,b,J){var ce=de(b);if(typeof ce!="function")throw Error(n(150));if(b=ce.call(b),b==null)throw Error(n(151));for(var pe=ce=null,me=N,ve=N=0,St=null,Me=b.next();me!==null&&!Me.done;ve++,Me=b.next()){me.index>ve?(St=me,me=null):St=me.sibling;var Gr=Q(M,me,Me.value,J);if(Gr===null){me===null&&(me=St);break}t&&me&&Gr.alternate===null&&r(M,me),N=p(Gr,N,ve),pe===null?ce=Gr:pe.sibling=Gr,pe=Gr,me=St}if(Me.done)return o(M,me),Ye&&Ni(M,ve),ce;if(me===null){for(;!Me.done;ve++,Me=b.next())Me=X(M,Me.value,J),Me!==null&&(N=p(Me,N,ve),pe===null?ce=Me:pe.sibling=Me,pe=Me);return Ye&&Ni(M,ve),ce}for(me=u(M,me);!Me.done;ve++,Me=b.next())Me=re(me,M,ve,Me.value,J),Me!==null&&(t&&Me.alternate!==null&&me.delete(Me.key===null?ve:Me.key),N=p(Me,N,ve),pe===null?ce=Me:pe.sibling=Me,pe=Me);return t&&me.forEach(function(av){return r(M,av)}),Ye&&Ni(M,ve),ce}function st(M,N,b,J){if(typeof b=="object"&&b!==null&&b.type===A&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ee:e:{for(var ce=b.key,pe=N;pe!==null;){if(pe.key===ce){if(ce=b.type,ce===A){if(pe.tag===7){o(M,pe.sibling),N=h(pe,b.props.children),N.return=M,M=N;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ft&&Id(ce)===pe.type){o(M,pe.sibling),N=h(pe,b.props),N.ref=Uo(M,pe,b),N.return=M,M=N;break e}o(M,pe);break}else r(M,pe);pe=pe.sibling}b.type===A?(N=Ui(b.props.children,M.mode,J,b.key),N.return=M,M=N):(J=Ll(b.type,b.key,b.props,null,M.mode,J),J.ref=Uo(M,N,b),J.return=M,M=J)}return _(M);case ye:e:{for(pe=b.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){o(M,N.sibling),N=h(N,b.children||[]),N.return=M,M=N;break e}else{o(M,N);break}else r(M,N);N=N.sibling}N=oh(b,M.mode,J),N.return=M,M=N}return _(M);case ft:return pe=b._init,st(M,N,pe(b._payload),J)}if(ir(b))return le(M,N,b,J);if(de(b))return ue(M,N,b,J);hl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(o(M,N.sibling),N=h(N,b),N.return=M,M=N):(o(M,N),N=sh(b,M.mode,J),N.return=M,M=N),_(M)):o(M,N)}return st}var Ds=Sd(!0),Ad=Sd(!1),fl=Fr(null),dl=null,Os=null,mc=null;function gc(){mc=Os=dl=null}function yc(t){var r=fl.current;Ke(fl),t._currentValue=r}function _c(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Ls(t,r){dl=t,mc=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Xt=!0),t.firstContext=null)}function yn(t){var r=t._currentValue;if(mc!==t)if(t={context:t,memoizedValue:r,next:null},Os===null){if(dl===null)throw Error(n(308));Os=t,dl.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return r}var Vi=null;function vc(t){Vi===null?Vi=[t]:Vi.push(t)}function Cd(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,vc(r)):(o.next=h.next,h.next=o),r.interleaved=o,yr(t,u)}function yr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var zr=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _r(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Oe&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,yr(t,o)}return h=u.interleaved,h===null?(r.next=r,vc(u)):(r.next=h.next,h.next=r),u.interleaved=r,yr(t,o)}function pl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Nr(t,o)}}function kd(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=_:p=p.next=_,o=o.next}while(o!==null);p===null?h=p=r:p=p.next=r}else h=p=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function ml(t,r,o,u){var h=t.updateQueue;zr=!1;var p=h.firstBaseUpdate,_=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var P=I,F=P.next;P.next=null,_===null?p=F:_.next=F,_=P;var G=t.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==_&&(I===null?G.firstBaseUpdate=F:I.next=F,G.lastBaseUpdate=P))}if(p!==null){var X=h.baseState;_=0,G=F=P=null,I=p;do{var Q=I.lane,re=I.eventTime;if((u&Q)===Q){G!==null&&(G=G.next={eventTime:re,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var le=t,ue=I;switch(Q=r,re=o,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(re,X,Q);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,Q=typeof le=="function"?le.call(re,X,Q):le,Q==null)break e;X=oe({},X,Q);break e;case 2:zr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,Q=h.effects,Q===null?h.effects=[I]:Q.push(I))}else re={eventTime:re,lane:Q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(F=G=re,P=X):G=G.next=re,_|=Q;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;Q=I,I=Q.next,Q.next=null,h.lastBaseUpdate=Q,h.shared.pending=null}}while(!0);if(G===null&&(P=X),h.baseState=P,h.firstBaseUpdate=F,h.lastBaseUpdate=G,r=h.shared.interleaved,r!==null){h=r;do _|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Li|=_,t.lanes=_,t.memoizedState=X}}function Pd(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var jo={},Qn=Fr(jo),zo=Fr(jo),Bo=Fr(jo);function Di(t){if(t===jo)throw Error(n(174));return t}function wc(t,r){switch(We(Bo,r),We(zo,t),We(Qn,jo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:pt(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=pt(r,t)}Ke(Qn),We(Qn,r)}function Ms(){Ke(Qn),Ke(zo),Ke(Bo)}function xd(t){Di(Bo.current);var r=Di(Qn.current),o=pt(r,t.type);r!==o&&(We(zo,t),We(Qn,o))}function Tc(t){zo.current===t&&(Ke(Qn),Ke(zo))}var Ze=Fr(0);function gl(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ic=[];function Sc(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var yl=te.ReactCurrentDispatcher,Ac=te.ReactCurrentBatchConfig,Oi=0,et=null,gt=null,Tt=null,_l=!1,$o=!1,Ho=0,P_=0;function Lt(){throw Error(n(321))}function Cc(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Nn(t[o],r[o]))return!1;return!0}function Rc(t,r,o,u,h,p){if(Oi=p,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,yl.current=t===null||t.memoizedState===null?D_:O_,t=o(u,h),$o){p=0;do{if($o=!1,Ho=0,25<=p)throw Error(n(301));p+=1,Tt=gt=null,r.updateQueue=null,yl.current=L_,t=o(u,h)}while($o)}if(yl.current=wl,r=gt!==null&&gt.next!==null,Oi=0,Tt=gt=et=null,_l=!1,r)throw Error(n(300));return t}function kc(){var t=Ho!==0;return Ho=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function _n(){if(gt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var r=Tt===null?et.memoizedState:Tt.next;if(r!==null)Tt=r,gt=t;else{if(t===null)throw Error(n(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?et.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function Wo(t,r){return typeof r=="function"?r(t):r}function Pc(t){var r=_n(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=gt,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var _=h.next;h.next=p.next,p.next=_}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var I=_=null,P=null,F=p;do{var G=F.lane;if((Oi&G)===G)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:t(u,F.action);else{var X={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=X,_=u):P=P.next=X,et.lanes|=G,Li|=G}F=F.next}while(F!==null&&F!==p);P===null?_=u:P.next=I,Nn(u,r.memoizedState)||(Xt=!0),r.memoizedState=u,r.baseState=_,r.baseQueue=P,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do p=h.lane,et.lanes|=p,Li|=p,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function xc(t){var r=_n(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,p=r.memoizedState;if(h!==null){o.pending=null;var _=h=h.next;do p=t(p,_.action),_=_.next;while(_!==h);Nn(p,r.memoizedState)||(Xt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Nd(){}function Vd(t,r){var o=et,u=_n(),h=r(),p=!Nn(u.memoizedState,h);if(p&&(u.memoizedState=h,Xt=!0),u=u.queue,Nc(Ld.bind(null,o,u,t),[t]),u.getSnapshot!==r||p||Tt!==null&&Tt.memoizedState.tag&1){if(o.flags|=2048,qo(9,Od.bind(null,o,u,h,r),void 0,null),It===null)throw Error(n(349));(Oi&30)!==0||Dd(o,r,h)}return h}function Dd(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Od(t,r,o,u){r.value=o,r.getSnapshot=u,Md(r)&&bd(t)}function Ld(t,r,o){return o(function(){Md(r)&&bd(t)})}function Md(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Nn(t,o)}catch{return!0}}function bd(t){var r=yr(t,1);r!==null&&Mn(r,t,1,-1)}function Fd(t){var r=Kn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},r.queue=t,t=t.dispatch=V_.bind(null,et,t),[r.memoizedState,t]}function qo(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Ud(){return _n().memoizedState}function vl(t,r,o,u){var h=Kn();et.flags|=t,h.memoizedState=qo(1|r,o,void 0,u===void 0?null:u)}function El(t,r,o,u){var h=_n();u=u===void 0?null:u;var p=void 0;if(gt!==null){var _=gt.memoizedState;if(p=_.destroy,u!==null&&Cc(u,_.deps)){h.memoizedState=qo(r,o,p,u);return}}et.flags|=t,h.memoizedState=qo(1|r,o,p,u)}function jd(t,r){return vl(8390656,8,t,r)}function Nc(t,r){return El(2048,8,t,r)}function zd(t,r){return El(4,2,t,r)}function Bd(t,r){return El(4,4,t,r)}function $d(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Hd(t,r,o){return o=o!=null?o.concat([t]):null,El(4,4,$d.bind(null,r,t),o)}function Vc(){}function Wd(t,r){var o=_n();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Cc(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function qd(t,r){var o=_n();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Cc(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Qd(t,r,o){return(Oi&21)===0?(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=o):(Nn(o,r)||(o=Ii(),et.lanes|=o,Li|=o,t.baseState=!0),r)}function x_(t,r){var o=Pe;Pe=o!==0&&4>o?o:4,t(!0);var u=Ac.transition;Ac.transition={};try{t(!1),r()}finally{Pe=o,Ac.transition=u}}function Kd(){return _n().memoizedState}function N_(t,r,o){var u=qr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Gd(t))Xd(r,o);else if(o=Cd(t,r,o,u),o!==null){var h=Ht();Mn(o,t,u,h),Yd(o,r,u)}}function V_(t,r,o){var u=qr(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gd(t))Xd(r,h);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,o);if(h.hasEagerState=!0,h.eagerState=I,Nn(I,_)){var P=r.interleaved;P===null?(h.next=h,vc(r)):(h.next=P.next,P.next=h),r.interleaved=h;return}}catch{}finally{}o=Cd(t,r,h,u),o!==null&&(h=Ht(),Mn(o,t,u,h),Yd(o,r,u))}}function Gd(t){var r=t.alternate;return t===et||r!==null&&r===et}function Xd(t,r){$o=_l=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Yd(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Nr(t,o)}}var wl={readContext:yn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},D_={readContext:yn,useCallback:function(t,r){return Kn().memoizedState=[t,r===void 0?null:r],t},useContext:yn,useEffect:jd,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,vl(4194308,4,$d.bind(null,r,t),o)},useLayoutEffect:function(t,r){return vl(4194308,4,t,r)},useInsertionEffect:function(t,r){return vl(4,2,t,r)},useMemo:function(t,r){var o=Kn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=Kn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=N_.bind(null,et,t),[u.memoizedState,t]},useRef:function(t){var r=Kn();return t={current:t},r.memoizedState=t},useState:Fd,useDebugValue:Vc,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Fd(!1),r=t[0];return t=x_.bind(null,t[1]),Kn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=et,h=Kn();if(Ye){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),It===null)throw Error(n(349));(Oi&30)!==0||Dd(u,r,o)}h.memoizedState=o;var p={value:o,getSnapshot:r};return h.queue=p,jd(Ld.bind(null,u,p,t),[t]),u.flags|=2048,qo(9,Od.bind(null,u,p,o,r),void 0,null),o},useId:function(){var t=Kn(),r=It.identifierPrefix;if(Ye){var o=gr,u=mr;o=(u&~(1<<32-zt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ho++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=P_++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},O_={readContext:yn,useCallback:Wd,useContext:yn,useEffect:Nc,useImperativeHandle:Hd,useInsertionEffect:zd,useLayoutEffect:Bd,useMemo:qd,useReducer:Pc,useRef:Ud,useState:function(){return Pc(Wo)},useDebugValue:Vc,useDeferredValue:function(t){var r=_n();return Qd(r,gt.memoizedState,t)},useTransition:function(){var t=Pc(Wo)[0],r=_n().memoizedState;return[t,r]},useMutableSource:Nd,useSyncExternalStore:Vd,useId:Kd,unstable_isNewReconciler:!1},L_={readContext:yn,useCallback:Wd,useContext:yn,useEffect:Nc,useImperativeHandle:Hd,useInsertionEffect:zd,useLayoutEffect:Bd,useMemo:qd,useReducer:xc,useRef:Ud,useState:function(){return xc(Wo)},useDebugValue:Vc,useDeferredValue:function(t){var r=_n();return gt===null?r.memoizedState=t:Qd(r,gt.memoizedState,t)},useTransition:function(){var t=xc(Wo)[0],r=_n().memoizedState;return[t,r]},useMutableSource:Nd,useSyncExternalStore:Vd,useId:Kd,unstable_isNewReconciler:!1};function Dn(t,r){if(t&&t.defaultProps){r=oe({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Dc(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:oe({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Sn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=Ht(),h=qr(t),p=_r(u,h);p.payload=r,o!=null&&(p.callback=o),r=Br(t,p,h),r!==null&&(Mn(r,t,h,u),pl(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=Ht(),h=qr(t),p=_r(u,h);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Br(t,p,h),r!==null&&(Mn(r,t,h,u),pl(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Ht(),u=qr(t),h=_r(o,u);h.tag=2,r!=null&&(h.callback=r),r=Br(t,h,u),r!==null&&(Mn(r,t,u,o),pl(r,t,u))}};function Jd(t,r,o,u,h,p,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,_):r.prototype&&r.prototype.isPureReactComponent?!Vo(o,u)||!Vo(h,p):!0}function Zd(t,r,o){var u=!1,h=Ur,p=r.contextType;return typeof p=="object"&&p!==null?p=yn(p):(h=Gt(r)?Pi:Ot.current,u=r.contextTypes,p=(u=u!=null)?Ps(t,h):Ur),r=new r(o,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tl,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=p),r}function ep(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&Tl.enqueueReplaceState(r,r.state,null)}function Oc(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Ec(t);var p=r.contextType;typeof p=="object"&&p!==null?h.context=yn(p):(p=Gt(r)?Pi:Ot.current,h.context=Ps(t,p)),h.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Dc(t,r,p,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Tl.enqueueReplaceState(h,h.state,null),ml(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,r){try{var o="",u=r;do o+=Ce(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:h,digest:null}}function Lc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Mc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var M_=typeof WeakMap=="function"?WeakMap:Map;function tp(t,r,o){o=_r(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Pl||(Pl=!0,Yc=u),Mc(t,r)},o}function np(t,r,o){o=_r(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Mc(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Mc(t,r),typeof u!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function rp(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new M_;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=X_.bind(null,t,r,o),r.then(t,t))}function ip(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function sp(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=_r(-1,1),r.tag=2,Br(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var b_=te.ReactCurrentOwner,Xt=!1;function $t(t,r,o,u){r.child=t===null?Ad(r,null,o,u):Ds(r,t.child,o,u)}function op(t,r,o,u,h){o=o.render;var p=r.ref;return Ls(r,h),u=Rc(t,r,o,u,p,h),o=kc(),t!==null&&!Xt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,vr(t,r,h)):(Ye&&o&&cc(r),r.flags|=1,$t(t,r,u,h),r.child)}function ap(t,r,o,u,h){if(t===null){var p=o.type;return typeof p=="function"&&!ih(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,lp(t,r,p,u,h)):(t=Ll(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,(t.lanes&h)===0){var _=p.memoizedProps;if(o=o.compare,o=o!==null?o:Vo,o(_,u)&&t.ref===r.ref)return vr(t,r,h)}return r.flags|=1,t=Kr(p,u),t.ref=r.ref,t.return=r,r.child=t}function lp(t,r,o,u,h){if(t!==null){var p=t.memoizedProps;if(Vo(p,u)&&t.ref===r.ref)if(Xt=!1,r.pendingProps=u=p,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Xt=!0);else return r.lanes=t.lanes,vr(t,r,h)}return bc(t,r,o,u,h)}function up(t,r,o){var u=r.pendingProps,h=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Us,un),un|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,We(Us,un),un|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,We(Us,un),un|=u}else p!==null?(u=p.baseLanes|o,r.memoizedState=null):u=o,We(Us,un),un|=u;return $t(t,r,h,o),r.child}function cp(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function bc(t,r,o,u,h){var p=Gt(o)?Pi:Ot.current;return p=Ps(r,p),Ls(r,h),o=Rc(t,r,o,u,p,h),u=kc(),t!==null&&!Xt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,vr(t,r,h)):(Ye&&u&&cc(r),r.flags|=1,$t(t,r,o,h),r.child)}function hp(t,r,o,u,h){if(Gt(o)){var p=!0;ol(r)}else p=!1;if(Ls(r,h),r.stateNode===null)Sl(t,r),Zd(r,o,u),Oc(r,o,u,h),u=!0;else if(t===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var P=_.context,F=o.contextType;typeof F=="object"&&F!==null?F=yn(F):(F=Gt(o)?Pi:Ot.current,F=Ps(r,F));var G=o.getDerivedStateFromProps,X=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==u||P!==F)&&ep(r,_,u,F),zr=!1;var Q=r.memoizedState;_.state=Q,ml(r,u,_,h),P=r.memoizedState,I!==u||Q!==P||Kt.current||zr?(typeof G=="function"&&(Dc(r,o,G,u),P=r.memoizedState),(I=zr||Jd(r,o,I,u,Q,P,F))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=P),_.props=u,_.state=P,_.context=F,u=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{_=r.stateNode,Rd(t,r),I=r.memoizedProps,F=r.type===r.elementType?I:Dn(r.type,I),_.props=F,X=r.pendingProps,Q=_.context,P=o.contextType,typeof P=="object"&&P!==null?P=yn(P):(P=Gt(o)?Pi:Ot.current,P=Ps(r,P));var re=o.getDerivedStateFromProps;(G=typeof re=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==X||Q!==P)&&ep(r,_,u,P),zr=!1,Q=r.memoizedState,_.state=Q,ml(r,u,_,h);var le=r.memoizedState;I!==X||Q!==le||Kt.current||zr?(typeof re=="function"&&(Dc(r,o,re,u),le=r.memoizedState),(F=zr||Jd(r,o,F,u,Q,le,P)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,le,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,le,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===t.memoizedProps&&Q===t.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&Q===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=le),_.props=u,_.state=le,_.context=P,u=F):(typeof _.componentDidUpdate!="function"||I===t.memoizedProps&&Q===t.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&Q===t.memoizedState||(r.flags|=1024),u=!1)}return Fc(t,r,o,u,p,h)}function Fc(t,r,o,u,h,p){cp(t,r);var _=(r.flags&128)!==0;if(!u&&!_)return h&&gd(r,o,!1),vr(t,r,p);u=r.stateNode,b_.current=r;var I=_&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&_?(r.child=Ds(r,t.child,null,p),r.child=Ds(r,null,I,p)):$t(t,r,I,p),r.memoizedState=u.state,h&&gd(r,o,!0),r.child}function fp(t){var r=t.stateNode;r.pendingContext?pd(t,r.pendingContext,r.pendingContext!==r.context):r.context&&pd(t,r.context,!1),wc(t,r.containerInfo)}function dp(t,r,o,u,h){return Vs(),pc(h),r.flags|=256,$t(t,r,o,u),r.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function pp(t,r,o){var u=r.pendingProps,h=Ze.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=t!==null&&t.memoizedState===null?!1:(h&2)!==0),I?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),We(Ze,h&1),t===null)return dc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=u.children,t=u.fallback,p?(u=r.mode,p=r.child,_={mode:"hidden",children:_},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Ml(_,u,0,null),t=Ui(t,u,o,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=jc(o),r.memoizedState=Uc,t):zc(r,_));if(h=t.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return F_(t,r,_,u,I,h,o);if(p){p=u.fallback,_=r.mode,h=t.child,I=h.sibling;var P={mode:"hidden",children:u.children};return(_&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=P,r.deletions=null):(u=Kr(h,P),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?p=Kr(I,p):(p=Ui(p,_,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,_=t.child.memoizedState,_=_===null?jc(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=t.childLanes&~o,r.memoizedState=Uc,u}return p=t.child,t=p.sibling,u=Kr(p,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function zc(t,r){return r=Ml({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Il(t,r,o,u){return u!==null&&pc(u),Ds(r,t.child,null,o),t=zc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function F_(t,r,o,u,h,p,_){if(o)return r.flags&256?(r.flags&=-257,u=Lc(Error(n(422))),Il(t,r,_,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=u.fallback,h=r.mode,u=Ml({mode:"visible",children:u.children},h,0,null),p=Ui(p,h,_,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,(r.mode&1)!==0&&Ds(r,t.child,null,_),r.child.memoizedState=jc(_),r.memoizedState=Uc,p);if((r.mode&1)===0)return Il(t,r,_,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,p=Error(n(419)),u=Lc(p,u,void 0),Il(t,r,_,u)}if(I=(_&t.childLanes)!==0,Xt||I){if(u=It,u!==null){switch(_&-_){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|_))!==0?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,yr(t,h),Mn(u,t,h,-1))}return rh(),u=Lc(Error(n(421))),Il(t,r,_,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=Y_.bind(null,t),h._reactRetry=r,null):(t=p.treeContext,ln=br(h.nextSibling),an=r,Ye=!0,Vn=null,t!==null&&(mn[gn++]=mr,mn[gn++]=gr,mn[gn++]=xi,mr=t.id,gr=t.overflow,xi=r),r=zc(r,u.children),r.flags|=4096,r)}function mp(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),_c(t.return,r,o)}function Bc(t,r,o,u,h){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function gp(t,r,o){var u=r.pendingProps,h=u.revealOrder,p=u.tail;if($t(t,r,u.children,o),u=Ze.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,o,r);else if(t.tag===19)mp(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(We(Ze,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&gl(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Bc(r,!1,h,o,p);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&gl(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Bc(r,!0,o,null,p);break;case"together":Bc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Sl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function vr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Li|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Kr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Kr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function U_(t,r,o){switch(r.tag){case 3:fp(r),Vs();break;case 5:xd(r);break;case 1:Gt(r.type)&&ol(r);break;case 4:wc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;We(fl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(We(Ze,Ze.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?pp(t,r,o):(We(Ze,Ze.current&1),t=vr(t,r,o),t!==null?t.sibling:null);We(Ze,Ze.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return gp(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),We(Ze,Ze.current),u)break;return null;case 22:case 23:return r.lanes=0,up(t,r,o)}return vr(t,r,o)}var yp,$c,_p,vp;yp=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$c=function(){},_p=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Di(Qn.current);var p=null;switch(o){case"input":h=fi(t,h),u=fi(t,u),p=[];break;case"select":h=oe({},h,{value:void 0}),u=oe({},u,{value:void 0}),p=[];break;case"textarea":h=oo(t,h),u=oo(t,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=rl)}fo(o,u);var _;o=null;for(F in h)if(!u.hasOwnProperty(F)&&h.hasOwnProperty(F)&&h[F]!=null)if(F==="style"){var I=h[F];for(_ in I)I.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in u){var P=u[F];if(I=h!=null?h[F]:void 0,u.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in P)P.hasOwnProperty(_)&&I[_]!==P[_]&&(o||(o={}),o[_]=P[_])}else o||(p||(p=[]),p.push(F,o)),o=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Qe("scroll",t),p||I===P||(p=[])):(p=p||[]).push(F,P))}o&&(p=p||[]).push("style",o);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},vp=function(t,r,o,u){o!==u&&(r.flags|=4)};function Qo(t,r){if(!Ye)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Mt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function j_(t,r,o){var u=r.pendingProps;switch(hc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(r),null;case 1:return Gt(r.type)&&sl(),Mt(r),null;case 3:return u=r.stateNode,Ms(),Ke(Kt),Ke(Ot),Sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(cl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(eh(Vn),Vn=null))),$c(t,r),Mt(r),null;case 5:Tc(r);var h=Di(Bo.current);if(o=r.type,t!==null&&r.stateNode!=null)_p(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Mt(r),null}if(t=Di(Qn.current),cl(r)){u=r.stateNode,o=r.type;var p=r.memoizedProps;switch(u[qn]=r,u[bo]=p,t=(r.mode&1)!==0,o){case"dialog":Qe("cancel",u),Qe("close",u);break;case"iframe":case"object":case"embed":Qe("load",u);break;case"video":case"audio":for(h=0;h<Oo.length;h++)Qe(Oo[h],u);break;case"source":Qe("error",u);break;case"img":case"image":case"link":Qe("error",u),Qe("load",u);break;case"details":Qe("toggle",u);break;case"input":Yi(u,p),Qe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Qe("invalid",u);break;case"textarea":Zi(u,p),Qe("invalid",u)}fo(o,p),h=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?u.textContent!==I&&(p.suppressHydrationWarning!==!0&&nl(u.textContent,I,t),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&nl(u.textContent,I,t),h=["children",""+I]):a.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&Qe("scroll",u)}switch(o){case"input":rr(u),ka(u,p,!0);break;case"textarea":rr(u),ao(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=rl)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{_=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=_.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=_.createElement(o,{is:u.is}):(t=_.createElement(o),o==="select"&&(_=t,u.multiple?_.multiple=!0:u.size&&(_.size=u.size))):t=_.createElementNS(t,o),t[qn]=r,t[bo]=u,yp(t,r,!1,!1),r.stateNode=t;e:{switch(_=po(o,u),o){case"dialog":Qe("cancel",t),Qe("close",t),h=u;break;case"iframe":case"object":case"embed":Qe("load",t),h=u;break;case"video":case"audio":for(h=0;h<Oo.length;h++)Qe(Oo[h],t);h=u;break;case"source":Qe("error",t),h=u;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),h=u;break;case"details":Qe("toggle",t),h=u;break;case"input":Yi(t,u),h=fi(t,u),Qe("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=oe({},u,{value:void 0}),Qe("invalid",t);break;case"textarea":Zi(t,u),h=oo(t,u),Qe("invalid",t);break;default:h=u}fo(o,h),I=h;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?co(t,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&lo(t,P)):p==="children"?typeof P=="string"?(o!=="textarea"||P!=="")&&Cr(t,P):typeof P=="number"&&Cr(t,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Qe("scroll",t):P!=null&&Y(t,p,P,_))}switch(o){case"input":rr(t),ka(t,u,!1);break;case"textarea":rr(t),ao(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Ue(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?sr(t,!!u.multiple,p,!1):u.defaultValue!=null&&sr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=rl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mt(r),null;case 6:if(t&&r.stateNode!=null)vp(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Di(Bo.current),Di(Qn.current),cl(r)){if(u=r.stateNode,o=r.memoizedProps,u[qn]=r,(p=u.nodeValue!==o)&&(t=an,t!==null))switch(t.tag){case 3:nl(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(u.nodeValue,o,(t.mode&1)!==0)}p&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[qn]=r,r.stateNode=u}return Mt(r),null;case 13:if(Ke(Ze),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Td(),Vs(),r.flags|=98560,p=!1;else if(p=cl(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[qn]=r}else Vs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mt(r),p=!1}else Vn!==null&&(eh(Vn),Vn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Ze.current&1)!==0?yt===0&&(yt=3):rh())),r.updateQueue!==null&&(r.flags|=4),Mt(r),null);case 4:return Ms(),$c(t,r),t===null&&Lo(r.stateNode.containerInfo),Mt(r),null;case 10:return yc(r.type._context),Mt(r),null;case 17:return Gt(r.type)&&sl(),Mt(r),null;case 19:if(Ke(Ze),p=r.memoizedState,p===null)return Mt(r),null;if(u=(r.flags&128)!==0,_=p.rendering,_===null)if(u)Qo(p,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(_=gl(t),_!==null){for(r.flags|=128,Qo(p,!1),u=_.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)p=o,t=u,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,t=_.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return We(Ze,Ze.current&1|2),r.child}t=t.sibling}p.tail!==null&&He()>js&&(r.flags|=128,u=!0,Qo(p,!1),r.lanes=4194304)}else{if(!u)if(t=gl(_),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Qo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ye)return Mt(r),null}else 2*He()-p.renderingStartTime>js&&o!==1073741824&&(r.flags|=128,u=!0,Qo(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(o=p.last,o!==null?o.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=He(),r.sibling=null,o=Ze.current,We(Ze,u?o&1|2:o&1),r):(Mt(r),null);case 22:case 23:return nh(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(un&1073741824)!==0&&(Mt(r),r.subtreeFlags&6&&(r.flags|=8192)):Mt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function z_(t,r){switch(hc(r),r.tag){case 1:return Gt(r.type)&&sl(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ms(),Ke(Kt),Ke(Ot),Sc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Tc(r),null;case 13:if(Ke(Ze),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Vs()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ke(Ze),null;case 4:return Ms(),null;case 10:return yc(r.type._context),null;case 22:case 23:return nh(),null;case 24:return null;default:return null}}var Al=!1,bt=!1,B_=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Fs(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rt(t,r,u)}else o.current=null}function Hc(t,r,o){try{o()}catch(u){rt(t,r,u)}}var Ep=!1;function $_(t,r){if(nc=Or,t=Jf(),Ku(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var _=0,I=-1,P=-1,F=0,G=0,X=t,Q=null;t:for(;;){for(var re;X!==o||h!==0&&X.nodeType!==3||(I=_+h),X!==p||u!==0&&X.nodeType!==3||(P=_+u),X.nodeType===3&&(_+=X.nodeValue.length),(re=X.firstChild)!==null;)Q=X,X=re;for(;;){if(X===t)break t;if(Q===o&&++F===h&&(I=_),Q===p&&++G===u&&(P=_),(re=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=re}o=I===-1||P===-1?null:{start:I,end:P}}else o=null}o=o||{start:0,end:0}}else o=null;for(rc={focusedElem:t,selectionRange:o},Or=!1,ae=r;ae!==null;)if(r=ae,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ae=t;else for(;ae!==null;){r=ae;try{var le=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,st=le.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?ue:Dn(r.type,ue),st);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(J){rt(r,r.return,J)}if(t=r.sibling,t!==null){t.return=r.return,ae=t;break}ae=r.return}return le=Ep,Ep=!1,le}function Ko(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var p=h.destroy;h.destroy=void 0,p!==void 0&&Hc(r,o,p)}h=h.next}while(h!==u)}}function Cl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Wc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function wp(t){var r=t.alternate;r!==null&&(t.alternate=null,wp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[qn],delete r[bo],delete r[ac],delete r[A_],delete r[C_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=rl));else if(u!==4&&(t=t.child,t!==null))for(qc(t,r,o),t=t.sibling;t!==null;)qc(t,r,o),t=t.sibling}function Qc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Qc(t,r,o),t=t.sibling;t!==null;)Qc(t,r,o),t=t.sibling}var kt=null,On=!1;function $r(t,r,o){for(o=o.child;o!==null;)Sp(t,r,o),o=o.sibling}function Sp(t,r,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(wi,o)}catch{}switch(o.tag){case 5:bt||Fs(o,r);case 6:var u=kt,h=On;kt=null,$r(t,r,o),kt=u,On=h,kt!==null&&(On?(t=kt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):kt.removeChild(o.stateNode));break;case 18:kt!==null&&(On?(t=kt,o=o.stateNode,t.nodeType===8?oc(t.parentNode,o):t.nodeType===1&&oc(t,o),Pn(t)):oc(kt,o.stateNode));break;case 4:u=kt,h=On,kt=o.stateNode.containerInfo,On=!0,$r(t,r,o),kt=u,On=h;break;case 0:case 11:case 14:case 15:if(!bt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Hc(o,r,_),h=h.next}while(h!==u)}$r(t,r,o);break;case 1:if(!bt&&(Fs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){rt(o,r,I)}$r(t,r,o);break;case 21:$r(t,r,o);break;case 22:o.mode&1?(bt=(u=bt)||o.memoizedState!==null,$r(t,r,o),bt=u):$r(t,r,o);break;default:$r(t,r,o)}}function Ap(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new B_),r.forEach(function(u){var h=J_.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Ln(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=t,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:kt=I.stateNode,On=!1;break e;case 3:kt=I.stateNode.containerInfo,On=!0;break e;case 4:kt=I.stateNode.containerInfo,On=!0;break e}I=I.return}if(kt===null)throw Error(n(160));Sp(p,_,h),kt=null,On=!1;var P=h.alternate;P!==null&&(P.return=null),h.return=null}catch(F){rt(h,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Cp(r,t),r=r.sibling}function Cp(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(r,t),Gn(t),u&4){try{Ko(3,t,t.return),Cl(3,t)}catch(ue){rt(t,t.return,ue)}try{Ko(5,t,t.return)}catch(ue){rt(t,t.return,ue)}}break;case 1:Ln(r,t),Gn(t),u&512&&o!==null&&Fs(o,o.return);break;case 5:if(Ln(r,t),Gn(t),u&512&&o!==null&&Fs(o,o.return),t.flags&32){var h=t.stateNode;try{Cr(h,"")}catch(ue){rt(t,t.return,ue)}}if(u&4&&(h=t.stateNode,h!=null)){var p=t.memoizedProps,_=o!==null?o.memoizedProps:p,I=t.type,P=t.updateQueue;if(t.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&io(h,p),po(I,_);var F=po(I,p);for(_=0;_<P.length;_+=2){var G=P[_],X=P[_+1];G==="style"?co(h,X):G==="dangerouslySetInnerHTML"?lo(h,X):G==="children"?Cr(h,X):Y(h,G,X,F)}switch(I){case"input":so(h,p);break;case"textarea":es(h,p);break;case"select":var Q=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?sr(h,!!p.multiple,re,!1):Q!==!!p.multiple&&(p.defaultValue!=null?sr(h,!!p.multiple,p.defaultValue,!0):sr(h,!!p.multiple,p.multiple?[]:"",!1))}h[bo]=p}catch(ue){rt(t,t.return,ue)}}break;case 6:if(Ln(r,t),Gn(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,p=t.memoizedProps;try{h.nodeValue=p}catch(ue){rt(t,t.return,ue)}}break;case 3:if(Ln(r,t),Gn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(ue){rt(t,t.return,ue)}break;case 4:Ln(r,t),Gn(t);break;case 13:Ln(r,t),Gn(t),h=t.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(Xc=He())),u&4&&Ap(t);break;case 22:if(G=o!==null&&o.memoizedState!==null,t.mode&1?(bt=(F=bt)||G,Ln(r,t),bt=F):Ln(r,t),Gn(t),u&8192){if(F=t.memoizedState!==null,(t.stateNode.isHidden=F)&&!G&&(t.mode&1)!==0)for(ae=t,G=t.child;G!==null;){for(X=ae=G;ae!==null;){switch(Q=ae,re=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ko(4,Q,Q.return);break;case 1:Fs(Q,Q.return);var le=Q.stateNode;if(typeof le.componentWillUnmount=="function"){u=Q,o=Q.return;try{r=u,le.props=r.memoizedProps,le.state=r.memoizedState,le.componentWillUnmount()}catch(ue){rt(u,o,ue)}}break;case 5:Fs(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Pp(X);continue}}re!==null?(re.return=Q,ae=re):Pp(X)}G=G.sibling}e:for(G=null,X=t;;){if(X.tag===5){if(G===null){G=X;try{h=X.stateNode,F?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=X.stateNode,P=X.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=uo("display",_))}catch(ue){rt(t,t.return,ue)}}}else if(X.tag===6){if(G===null)try{X.stateNode.nodeValue=F?"":X.memoizedProps}catch(ue){rt(t,t.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===t)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===t)break e;for(;X.sibling===null;){if(X.return===null||X.return===t)break e;G===X&&(G=null),X=X.return}G===X&&(G=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Ln(r,t),Gn(t),u&4&&Ap(t);break;case 21:break;default:Ln(r,t),Gn(t)}}function Gn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Cr(h,""),u.flags&=-33);var p=Ip(t);Qc(t,p,h);break;case 3:case 4:var _=u.stateNode.containerInfo,I=Ip(t);qc(t,I,_);break;default:throw Error(n(161))}}catch(P){rt(t,t.return,P)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function H_(t,r,o){ae=t,Rp(t)}function Rp(t,r,o){for(var u=(t.mode&1)!==0;ae!==null;){var h=ae,p=h.child;if(h.tag===22&&u){var _=h.memoizedState!==null||Al;if(!_){var I=h.alternate,P=I!==null&&I.memoizedState!==null||bt;I=Al;var F=bt;if(Al=_,(bt=P)&&!F)for(ae=h;ae!==null;)_=ae,P=_.child,_.tag===22&&_.memoizedState!==null?xp(h):P!==null?(P.return=_,ae=P):xp(h);for(;p!==null;)ae=p,Rp(p),p=p.sibling;ae=h,Al=I,bt=F}kp(t)}else(h.subtreeFlags&8772)!==0&&p!==null?(p.return=h,ae=p):kp(t)}}function kp(t){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bt||Cl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!bt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Dn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Pd(r,p,u);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Pd(r,_,o)}break;case 5:var I=r.stateNode;if(o===null&&r.flags&4){o=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&o.focus();break;case"img":P.src&&(o.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var X=G.dehydrated;X!==null&&Pn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}bt||r.flags&512&&Wc(r)}catch(Q){rt(r,r.return,Q)}}if(r===t){ae=null;break}if(o=r.sibling,o!==null){o.return=r.return,ae=o;break}ae=r.return}}function Pp(t){for(;ae!==null;){var r=ae;if(r===t){ae=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ae=o;break}ae=r.return}}function xp(t){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Cl(4,r)}catch(P){rt(r,o,P)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(P){rt(r,h,P)}}var p=r.return;try{Wc(r)}catch(P){rt(r,p,P)}break;case 5:var _=r.return;try{Wc(r)}catch(P){rt(r,_,P)}}}catch(P){rt(r,r.return,P)}if(r===t){ae=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ae=I;break}ae=r.return}}var W_=Math.ceil,Rl=te.ReactCurrentDispatcher,Kc=te.ReactCurrentOwner,vn=te.ReactCurrentBatchConfig,Oe=0,It=null,lt=null,Pt=0,un=0,Us=Fr(0),yt=0,Go=null,Li=0,kl=0,Gc=0,Xo=null,Yt=null,Xc=0,js=1/0,Er=null,Pl=!1,Yc=null,Hr=null,xl=!1,Wr=null,Nl=0,Yo=0,Jc=null,Vl=-1,Dl=0;function Ht(){return(Oe&6)!==0?He():Vl!==-1?Vl:Vl=He()}function qr(t){return(t.mode&1)===0?1:(Oe&2)!==0&&Pt!==0?Pt&-Pt:k_.transition!==null?(Dl===0&&(Dl=Ii()),Dl):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:Ao(t.type)),t)}function Mn(t,r,o,u){if(50<Yo)throw Yo=0,Jc=null,Error(n(185));xr(t,o,u),((Oe&2)===0||t!==It)&&(t===It&&((Oe&2)===0&&(kl|=o),yt===4&&Qr(t,Pt)),Jt(t,u),o===1&&Oe===0&&(r.mode&1)===0&&(js=He()+500,al&&jr()))}function Jt(t,r){var o=t.callbackNode;lr(t,r);var u=Ti(t,t===It?Pt:0);if(u===0)o!==null&&Eo(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&Eo(o),r===1)t.tag===0?R_(Vp.bind(null,t)):yd(Vp.bind(null,t)),I_(function(){(Oe&6)===0&&jr()}),o=null;else{switch(Vr(u)){case 1:o=Ei;break;case 4:o=Rr;break;case 16:o=fn;break;case 536870912:o=Da;break;default:o=fn}o=jp(o,Np.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Np(t,r){if(Vl=-1,Dl=0,(Oe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(zs()&&t.callbackNode!==o)return null;var u=Ti(t,t===It?Pt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=Ol(t,u);else{r=u;var h=Oe;Oe|=2;var p=Op();(It!==t||Pt!==r)&&(Er=null,js=He()+500,bi(t,r));do try{K_();break}catch(I){Dp(t,I)}while(!0);gc(),Rl.current=p,Oe=h,lt!==null?r=0:(It=null,Pt=0,r=yt)}if(r!==0){if(r===2&&(h=rn(t),h!==0&&(u=h,r=Zc(t,h))),r===1)throw o=Go,bi(t,0),Qr(t,u),Jt(t,He()),o;if(r===6)Qr(t,u);else{if(h=t.current.alternate,(u&30)===0&&!q_(h)&&(r=Ol(t,u),r===2&&(p=rn(t),p!==0&&(u=p,r=Zc(t,p))),r===1))throw o=Go,bi(t,0),Qr(t,u),Jt(t,He()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Fi(t,Yt,Er);break;case 3:if(Qr(t,u),(u&130023424)===u&&(r=Xc+500-He(),10<r)){if(Ti(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){Ht(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=sc(Fi.bind(null,t,Yt,Er),r);break}Fi(t,Yt,Er);break;case 4:if(Qr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var _=31-zt(u);p=1<<_,_=r[_],_>h&&(h=_),u&=~p}if(u=h,u=He()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*W_(u/1960))-u,10<u){t.timeoutHandle=sc(Fi.bind(null,t,Yt,Er),u);break}Fi(t,Yt,Er);break;case 5:Fi(t,Yt,Er);break;default:throw Error(n(329))}}}return Jt(t,He()),t.callbackNode===o?Np.bind(null,t):null}function Zc(t,r){var o=Xo;return t.current.memoizedState.isDehydrated&&(bi(t,r).flags|=256),t=Ol(t,r),t!==2&&(r=Yt,Yt=o,r!==null&&eh(r)),t}function eh(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function q_(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!Nn(p(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(t,r){for(r&=~Gc,r&=~kl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-zt(r),u=1<<o;t[o]=-1,r&=~u}}function Vp(t){if((Oe&6)!==0)throw Error(n(327));zs();var r=Ti(t,0);if((r&1)===0)return Jt(t,He()),null;var o=Ol(t,r);if(t.tag!==0&&o===2){var u=rn(t);u!==0&&(r=u,o=Zc(t,u))}if(o===1)throw o=Go,bi(t,0),Qr(t,r),Jt(t,He()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Fi(t,Yt,Er),Jt(t,He()),null}function th(t,r){var o=Oe;Oe|=1;try{return t(r)}finally{Oe=o,Oe===0&&(js=He()+500,al&&jr())}}function Mi(t){Wr!==null&&Wr.tag===0&&(Oe&6)===0&&zs();var r=Oe;Oe|=1;var o=vn.transition,u=Pe;try{if(vn.transition=null,Pe=1,t)return t()}finally{Pe=u,vn.transition=o,Oe=r,(Oe&6)===0&&jr()}}function nh(){un=Us.current,Ke(Us)}function bi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,T_(o)),lt!==null)for(o=lt.return;o!==null;){var u=o;switch(hc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&sl();break;case 3:Ms(),Ke(Kt),Ke(Ot),Sc();break;case 5:Tc(u);break;case 4:Ms();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:yc(u.type._context);break;case 22:case 23:nh()}o=o.return}if(It=t,lt=t=Kr(t.current,null),Pt=un=r,yt=0,Go=null,Gc=kl=Li=0,Yt=Xo=null,Vi!==null){for(r=0;r<Vi.length;r++)if(o=Vi[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var _=p.next;p.next=h,u.next=_}o.pending=u}Vi=null}return t}function Dp(t,r){do{var o=lt;try{if(gc(),yl.current=wl,_l){for(var u=et.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}_l=!1}if(Oi=0,Tt=gt=et=null,$o=!1,Ho=0,Kc.current=null,o===null||o.return===null){yt=1,Go=r,lt=null;break}e:{var p=t,_=o.return,I=o,P=r;if(r=Pt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,G=I,X=G.tag;if((G.mode&1)===0&&(X===0||X===11||X===15)){var Q=G.alternate;Q?(G.updateQueue=Q.updateQueue,G.memoizedState=Q.memoizedState,G.lanes=Q.lanes):(G.updateQueue=null,G.memoizedState=null)}var re=ip(_);if(re!==null){re.flags&=-257,sp(re,_,I,p,r),re.mode&1&&rp(p,F,r),r=re,P=F;var le=r.updateQueue;if(le===null){var ue=new Set;ue.add(P),r.updateQueue=ue}else le.add(P);break e}else{if((r&1)===0){rp(p,F,r),rh();break e}P=Error(n(426))}}else if(Ye&&I.mode&1){var st=ip(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),sp(st,_,I,p,r),pc(bs(P,I));break e}}p=P=bs(P,I),yt!==4&&(yt=2),Xo===null?Xo=[p]:Xo.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=tp(p,P,r);kd(p,M);break e;case 1:I=P;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Hr===null||!Hr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=np(p,I,r);kd(p,J);break e}}p=p.return}while(p!==null)}Mp(o)}catch(ce){r=ce,lt===o&&o!==null&&(lt=o=o.return);continue}break}while(!0)}function Op(){var t=Rl.current;return Rl.current=wl,t===null?wl:t}function rh(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||(Li&268435455)===0&&(kl&268435455)===0||Qr(It,Pt)}function Ol(t,r){var o=Oe;Oe|=2;var u=Op();(It!==t||Pt!==r)&&(Er=null,bi(t,r));do try{Q_();break}catch(h){Dp(t,h)}while(!0);if(gc(),Oe=o,Rl.current=u,lt!==null)throw Error(n(261));return It=null,Pt=0,yt}function Q_(){for(;lt!==null;)Lp(lt)}function K_(){for(;lt!==null&&!Na();)Lp(lt)}function Lp(t){var r=Up(t.alternate,t,un);t.memoizedProps=t.pendingProps,r===null?Mp(t):lt=r,Kc.current=null}function Mp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=j_(o,r,un),o!==null){lt=o;return}}else{if(o=z_(o,r),o!==null){o.flags&=32767,lt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=t}while(r!==null);yt===0&&(yt=5)}function Fi(t,r,o){var u=Pe,h=vn.transition;try{vn.transition=null,Pe=1,G_(t,r,o,u)}finally{vn.transition=h,Pe=u}return null}function G_(t,r,o,u){do zs();while(Wr!==null);if((Oe&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Be(t,p),t===It&&(lt=It=null,Pt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xl||(xl=!0,jp(fn,function(){return zs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var _=Pe;Pe=1;var I=Oe;Oe|=4,Kc.current=null,$_(t,o),Cp(o,t),m_(rc),Or=!!nc,rc=nc=null,t.current=o,H_(o),ju(),Oe=I,Pe=_,vn.transition=p}else t.current=o;if(xl&&(xl=!1,Wr=t,Nl=h),p=t.pendingLanes,p===0&&(Hr=null),Oa(o.stateNode),Jt(t,He()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Pl)throw Pl=!1,t=Yc,Yc=null,t;return(Nl&1)!==0&&t.tag!==0&&zs(),p=t.pendingLanes,(p&1)!==0?t===Jc?Yo++:(Yo=0,Jc=t):Yo=0,jr(),null}function zs(){if(Wr!==null){var t=Vr(Nl),r=vn.transition,o=Pe;try{if(vn.transition=null,Pe=16>t?16:t,Wr===null)var u=!1;else{if(t=Wr,Wr=null,Nl=0,(Oe&6)!==0)throw Error(n(331));var h=Oe;for(Oe|=4,ae=t.current;ae!==null;){var p=ae,_=p.child;if((ae.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(ae=F;ae!==null;){var G=ae;switch(G.tag){case 0:case 11:case 15:Ko(8,G,p)}var X=G.child;if(X!==null)X.return=G,ae=X;else for(;ae!==null;){G=ae;var Q=G.sibling,re=G.return;if(wp(G),G===F){ae=null;break}if(Q!==null){Q.return=re,ae=Q;break}ae=re}}}var le=p.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var st=ue.sibling;ue.sibling=null,ue=st}while(ue!==null)}}ae=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ae=_;else e:for(;ae!==null;){if(p=ae,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ko(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ae=M;break e}ae=p.return}}var N=t.current;for(ae=N;ae!==null;){_=ae;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ae=b;else e:for(_=N;ae!==null;){if(I=ae,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Cl(9,I)}}catch(ce){rt(I,I.return,ce)}if(I===_){ae=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,ae=J;break e}ae=I.return}}if(Oe=h,jr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(wi,t)}catch{}u=!0}return u}finally{Pe=o,vn.transition=r}}return!1}function bp(t,r,o){r=bs(o,r),r=tp(t,r,1),t=Br(t,r,1),r=Ht(),t!==null&&(xr(t,1,r),Jt(t,r))}function rt(t,r,o){if(t.tag===3)bp(t,t,o);else for(;r!==null;){if(r.tag===3){bp(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hr===null||!Hr.has(u))){t=bs(o,t),t=np(r,t,1),r=Br(r,t,1),t=Ht(),r!==null&&(xr(r,1,t),Jt(r,t));break}}r=r.return}}function X_(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=Ht(),t.pingedLanes|=t.suspendedLanes&o,It===t&&(Pt&o)===o&&(yt===4||yt===3&&(Pt&130023424)===Pt&&500>He()-Xc?bi(t,0):Gc|=o),Jt(t,r)}function Fp(t,r){r===0&&((t.mode&1)===0?r=1:(r=cs,cs<<=1,(cs&130023424)===0&&(cs=4194304)));var o=Ht();t=yr(t,r),t!==null&&(xr(t,r,o),Jt(t,o))}function Y_(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Fp(t,o)}function J_(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),Fp(t,o)}var Up;Up=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||Kt.current)Xt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return Xt=!1,U_(t,r,o);Xt=(t.flags&131072)!==0}else Xt=!1,Ye&&(r.flags&1048576)!==0&&_d(r,ul,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Sl(t,r),t=r.pendingProps;var h=Ps(r,Ot.current);Ls(r,o),h=Rc(null,r,u,t,h,o);var p=kc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(u)?(p=!0,ol(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Ec(r),h.updater=Tl,r.stateNode=h,h._reactInternals=r,Oc(r,u,t,o),r=Fc(null,r,u,!0,p,o)):(r.tag=0,Ye&&p&&cc(r),$t(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Sl(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=ev(u),t=Dn(u,t),h){case 0:r=bc(null,r,u,t,o);break e;case 1:r=hp(null,r,u,t,o);break e;case 11:r=op(null,r,u,t,o);break e;case 14:r=ap(null,r,u,Dn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Dn(u,h),bc(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Dn(u,h),hp(t,r,u,h,o);case 3:e:{if(fp(r),t===null)throw Error(n(387));u=r.pendingProps,p=r.memoizedState,h=p.element,Rd(t,r),ml(r,u,null,o);var _=r.memoizedState;if(u=_.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=bs(Error(n(423)),r),r=dp(t,r,u,o,h);break e}else if(u!==h){h=bs(Error(n(424)),r),r=dp(t,r,u,o,h);break e}else for(ln=br(r.stateNode.containerInfo.firstChild),an=r,Ye=!0,Vn=null,o=Ad(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Vs(),u===h){r=vr(t,r,o);break e}$t(t,r,u,o)}r=r.child}return r;case 5:return xd(r),t===null&&dc(r),u=r.type,h=r.pendingProps,p=t!==null?t.memoizedProps:null,_=h.children,ic(u,h)?_=null:p!==null&&ic(u,p)&&(r.flags|=32),cp(t,r),$t(t,r,_,o),r.child;case 6:return t===null&&dc(r),null;case 13:return pp(t,r,o);case 4:return wc(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=Ds(r,null,u,o):$t(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Dn(u,h),op(t,r,u,h,o);case 7:return $t(t,r,r.pendingProps,o),r.child;case 8:return $t(t,r,r.pendingProps.children,o),r.child;case 12:return $t(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,p=r.memoizedProps,_=h.value,We(fl,u._currentValue),u._currentValue=_,p!==null)if(Nn(p.value,_)){if(p.children===h.children&&!Kt.current){r=vr(t,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var P=I.firstContext;P!==null;){if(P.context===u){if(p.tag===1){P=_r(-1,o&-o),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?P.next=P:(P.next=G.next,G.next=P),F.pending=P}}p.lanes|=o,P=p.alternate,P!==null&&(P.lanes|=o),_c(p.return,o,r),I.lanes|=o;break}P=P.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(n(341));_.lanes|=o,I=_.alternate,I!==null&&(I.lanes|=o),_c(_,o,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}$t(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ls(r,o),h=yn(h),u=u(h),r.flags|=1,$t(t,r,u,o),r.child;case 14:return u=r.type,h=Dn(u,r.pendingProps),h=Dn(u.type,h),ap(t,r,u,h,o);case 15:return lp(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Dn(u,h),Sl(t,r),r.tag=1,Gt(u)?(t=!0,ol(r)):t=!1,Ls(r,o),Zd(r,u,h),Oc(r,u,h,o),Fc(null,r,u,!0,t,o);case 19:return gp(t,r,o);case 22:return up(t,r,o)}throw Error(n(156,r.tag))};function jp(t,r){return ls(t,r)}function Z_(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,r,o,u){return new Z_(t,r,o,u)}function ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ev(t){if(typeof t=="function")return ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===D)return 11;if(t===ht)return 14}return 2}function Kr(t,r){var o=t.alternate;return o===null?(o=En(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ll(t,r,o,u,h,p){var _=2;if(u=t,typeof t=="function")ih(t)&&(_=1);else if(typeof t=="string")_=5;else e:switch(t){case A:return Ui(o.children,h,p,r);case T:_=8,h|=8;break;case C:return t=En(12,o,r,h|2),t.elementType=C,t.lanes=p,t;case S:return t=En(13,o,r,h),t.elementType=S,t.lanes=p,t;case Je:return t=En(19,o,r,h),t.elementType=Je,t.lanes=p,t;case Le:return Ml(o,h,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:_=10;break e;case V:_=9;break e;case D:_=11;break e;case ht:_=14;break e;case ft:_=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=En(_,o,r,h),r.elementType=t,r.type=u,r.lanes=p,r}function Ui(t,r,o,u){return t=En(7,t,u,r),t.lanes=o,t}function Ml(t,r,o,u){return t=En(22,t,u,r),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function sh(t,r,o){return t=En(6,t,null,r),t.lanes=o,t}function oh(t,r,o){return r=En(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function tv(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pr(0),this.expirationTimes=Pr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ah(t,r,o,u,h,p,_,I,P){return t=new tv(t,r,o,I,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=En(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(p),t}function nv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function zp(t){if(!t)return Ur;t=t._reactInternals;e:{if(Sn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Gt(o))return md(t,o,r)}return r}function Bp(t,r,o,u,h,p,_,I,P){return t=ah(o,u,!0,t,h,p,_,I,P),t.context=zp(null),o=t.current,u=Ht(),h=qr(o),p=_r(u,h),p.callback=r??null,Br(o,p,h),t.current.lanes=h,xr(t,h,u),Jt(t,u),t}function bl(t,r,o,u){var h=r.current,p=Ht(),_=qr(h);return o=zp(o),r.context===null?r.context=o:r.pendingContext=o,r=_r(p,_),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=Br(h,r,_),t!==null&&(Mn(t,h,_,p),pl(t,h,_)),_}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $p(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function lh(t,r){$p(t,r),(t=t.alternate)&&$p(t,r)}function rv(){return null}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function uh(t){this._internalRoot=t}Ul.prototype.render=uh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));bl(t,r,null,null)},Ul.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Mi(function(){bl(null,t,null,null)}),r[dr]=null}};function Ul(t){this._internalRoot=t}Ul.prototype.unstable_scheduleHydration=function(t){if(t){var r=Ua();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Bn.length&&r!==0&&r<Bn[o].priority;o++);Bn.splice(o,0,t),o===0&&Ba(t)}};function ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function iv(t,r,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var F=Fl(_);p.call(F)}}var _=Bp(r,u,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=_,t[dr]=_.current,Lo(t.nodeType===8?t.parentNode:t),Mi(),_}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var F=Fl(P);I.call(F)}}var P=ah(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=P,t[dr]=P.current,Lo(t.nodeType===8?t.parentNode:t),Mi(function(){bl(r,P,o,u)}),P}function zl(t,r,o,u,h){var p=o._reactRootContainer;if(p){var _=p;if(typeof h=="function"){var I=h;h=function(){var P=Fl(_);I.call(P)}}bl(r,_,t,h)}else _=iv(o,r,t,h,u);return Fl(_)}ba=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=kr(r.pendingLanes);o!==0&&(Nr(r,o|1),Jt(r,He()),(Oe&6)===0&&(js=He()+500,jr()))}break;case 13:Mi(function(){var u=yr(t,1);if(u!==null){var h=Ht();Mn(u,t,1,h)}}),lh(t,1)}},hs=function(t){if(t.tag===13){var r=yr(t,134217728);if(r!==null){var o=Ht();Mn(r,t,134217728,o)}lh(t,134217728)}},Fa=function(t){if(t.tag===13){var r=qr(t),o=yr(t,r);if(o!==null){var u=Ht();Mn(o,t,r,u)}lh(t,r)}},Ua=function(){return Pe},ja=function(t,r){var o=Pe;try{return Pe=t,r()}finally{Pe=o}},ns=function(t,r,o){switch(r){case"input":if(so(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=il(u);if(!h)throw Error(n(90));Xi(u),so(u,h)}}}break;case"textarea":es(t,o);break;case"select":r=o.value,r!=null&&sr(t,!!o.multiple,r,!1)}},gi=th,go=Mi;var sv={usingClientEntryPoint:!1,Events:[Fo,Rs,il,jn,mo,th]},Jo={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ov={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vo(t),t===null?null:t.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{wi=Bl.inject(ov),nn=Bl}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv,Zt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ch(r))throw Error(n(200));return nv(t,r,null,o)},Zt.createRoot=function(t,r){if(!ch(t))throw Error(n(299));var o=!1,u="",h=Hp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=ah(t,1,!1,null,null,o,!1,u,h),t[dr]=r.current,Lo(t.nodeType===8?t.parentNode:t),new uh(r)},Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=vo(r),t=t===null?null:t.stateNode,t},Zt.flushSync=function(t){return Mi(t)},Zt.hydrate=function(t,r,o){if(!jl(r))throw Error(n(200));return zl(null,t,r,!0,o)},Zt.hydrateRoot=function(t,r,o){if(!ch(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",_=Hp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=Bp(r,null,t,1,o??null,h,!1,p,_),t[dr]=r.current,Lo(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new Ul(r)},Zt.render=function(t,r,o){if(!jl(r))throw Error(n(200));return zl(null,t,r,!1,o)},Zt.unmountComponentAtNode=function(t){if(!jl(t))throw Error(n(40));return t._reactRootContainer?(Mi(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1},Zt.unstable_batchedUpdates=th,Zt.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!jl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return zl(t,r,o,!1,u)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Zp;function mv(){if(Zp)return dh.exports;Zp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dh.exports=pv(),dh.exports}var em;function gv(){if(em)return $l;em=1;var i=mv();return $l.createRoot=i.createRoot,$l.hydrateRoot=i.hydrateRoot,$l}var yv=gv();function fg(i){var e,n,s="";if(typeof i=="string"||typeof i=="number")s+=i;else if(typeof i=="object")if(Array.isArray(i)){var a=i.length;for(e=0;e<a;e++)i[e]&&(n=fg(i[e]))&&(s&&(s+=" "),s+=n)}else for(n in i)i[n]&&(s&&(s+=" "),s+=n);return s}function Bi(){for(var i,e,n=0,s="",a=arguments.length;n<a;n++)(i=arguments[n])&&(e=fg(i))&&(s&&(s+=" "),s+=e);return s}var wa=i=>typeof i=="number"&&!isNaN(i),Hi=i=>typeof i=="string",wr=i=>typeof i=="function",_v=i=>Hi(i)||wa(i),Ch=i=>Hi(i)||wr(i)?i:null,vv=(i,e)=>i===!1||wa(i)&&i>0?i:e,Rh=i=>Ie.isValidElement(i)||Hi(i)||wr(i)||wa(i);function Ev(i,e,n=300){let{scrollHeight:s,style:a}=i;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)})})}function wv({enter:i,exit:e,appendPosition:n=!1,collapse:s=!0,collapseDuration:a=300}){return function({children:c,position:f,preventExitTransition:m,done:y,nodeRef:v,isIn:w,playToast:k}){let R=n?`${i}--${f}`:i,U=n?`${e}--${f}`:e,W=Ie.useRef(0);return Ie.useLayoutEffect(()=>{let B=v.current,z=R.split(" "),ne=K=>{K.target===v.current&&(k(),B.removeEventListener("animationend",ne),B.removeEventListener("animationcancel",ne),W.current===0&&K.type!=="animationcancel"&&B.classList.remove(...z))};B.classList.add(...z),B.addEventListener("animationend",ne),B.addEventListener("animationcancel",ne)},[]),Ie.useEffect(()=>{let B=v.current,z=()=>{B.removeEventListener("animationend",z),s?Ev(B,y,a):y()};w||(m?z():(W.current=1,B.className+=` ${U}`,B.addEventListener("animationend",z)))},[w]),qe.createElement(qe.Fragment,null,c)}}function tm(i,e){return{content:dg(i.content,i.props),containerId:i.props.containerId,id:i.props.toastId,theme:i.props.theme,type:i.props.type,data:i.props.data||{},isLoading:i.props.isLoading,icon:i.props.icon,reason:i.removalReason,status:e}}function dg(i,e,n=!1){return Ie.isValidElement(i)&&!Hi(i.type)?Ie.cloneElement(i,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):wr(i)?i({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):i}function Tv({closeToast:i,theme:e,ariaLabel:n="close"}){return qe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:s=>{s.stopPropagation(),i(!0)},"aria-label":n},qe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},qe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Iv({delay:i,isRunning:e,closeToast:n,type:s="default",hide:a,className:c,controlledProgress:f,progress:m,rtl:y,isIn:v,theme:w}){let k=a||f&&m===0,R={animationDuration:`${i}ms`,animationPlayState:e?"running":"paused"};f&&(R.transform=`scaleX(${m})`);let U=Bi("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${w}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":y}),W=wr(c)?c({rtl:y,type:s,defaultClassName:U}):Bi(U,c),B={[f&&m>=1?"onTransitionEnd":"onAnimationEnd"]:f&&m<1?null:()=>{v&&n()}};return qe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":k},qe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${w} Toastify__progress-bar--${s}`}),qe.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer","aria-valuenow":f?Math.round(m*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:W,style:R,...B}))}var Sv=1,pg=()=>`${Sv++}`;function Av(i,e,n){let s=1,a=0,c=[],f=[],m=e,y=new Map,v=new Set,w=K=>(v.add(K),()=>v.delete(K)),k=()=>{f=Array.from(y.values()),v.forEach(K=>K())},R=({containerId:K,toastId:Y,updateId:te})=>{let Ee=K?K!==i:i!==1,ye=y.has(Y)&&te==null;return Ee||ye},U=(K,Y)=>{y.forEach(te=>{var Ee;(Y==null||Y===te.props.toastId)&&((Ee=te.toggle)==null||Ee.call(te,K))})},W=K=>{var Y,te;K.isActive&&((te=(Y=K.props)==null?void 0:Y.onClose)==null||te.call(Y,K.removalReason),K.isActive=!1,n(tm(K,"removed")))},B=K=>{if(K==null)y.forEach(W);else{let Y=y.get(K);Y&&W(Y)}k()},z=()=>{a-=c.length,c=[]},ne=K=>{var Y,te;let{toastId:Ee,updateId:ye}=K.props,A=ye==null;K.staleId&&y.delete(K.staleId),K.isActive=!0,y.set(Ee,K),k(),n(tm(K,A?"added":"updated")),A&&((te=(Y=K.props).onOpen)==null||te.call(Y))};return{id:i,props:m,observe:w,toggle:U,removeToast:B,toasts:y,clearQueue:z,buildToast:(K,Y)=>{if(R(Y))return;let{toastId:te,updateId:Ee,data:ye,staleId:A,delay:T}=Y,C=Ee==null;C&&a++;let x={...m,style:m.toastStyle,key:s++,...Object.fromEntries(Object.entries(Y).filter(([D,S])=>S!=null)),toastId:te,updateId:Ee,data:ye,isIn:!1,className:Ch(Y.className||m.toastClassName),progressClassName:Ch(Y.progressClassName||m.progressClassName),autoClose:Y.isLoading?!1:vv(Y.autoClose,m.autoClose),closeToast(D){let S=y.get(te);S&&(S.removalReason=D,B(te))},deleteToast(){if(y.get(te)!=null){if(y.delete(te),a--,a<0&&(a=0),c.length>0){ne(c.shift());return}k()}}};x.closeButton=m.closeButton,Y.closeButton===!1||Rh(Y.closeButton)?x.closeButton=Y.closeButton:Y.closeButton===!0&&(x.closeButton=Rh(m.closeButton)?m.closeButton:!0);let V={content:K,props:x,staleId:A};m.limit&&m.limit>0&&a>m.limit&&C?c.push(V):wa(T)?setTimeout(()=>{ne(V)},T):ne(V)},setProps(K){m=K},setToggle:(K,Y)=>{let te=y.get(K);te&&(te.toggle=Y)},isToastActive:K=>{var Y;return(Y=y.get(K))==null?void 0:Y.isActive},getSnapshot:()=>f}}var Wt=new Map,ha=[],kh=new Set,Cv=i=>kh.forEach(e=>e(i)),mg=()=>Wt.size>0;function Rv(){ha.forEach(i=>yg(i.content,i.options)),ha=[]}var kv=(i,{containerId:e})=>{var n;return(n=Wt.get(e||1))==null?void 0:n.toasts.get(i)};function gg(i,e){var n;if(e)return!!((n=Wt.get(e))!=null&&n.isToastActive(i));let s=!1;return Wt.forEach(a=>{a.isToastActive(i)&&(s=!0)}),s}function Pv(i){if(!mg()){ha=ha.filter(e=>i!=null&&e.options.toastId!==i);return}if(i==null||_v(i))Wt.forEach(e=>{e.removeToast(i)});else if(i&&("containerId"in i||"id"in i)){let e=Wt.get(i.containerId);e?e.removeToast(i.id):Wt.forEach(n=>{n.removeToast(i.id)})}}var xv=(i={})=>{Wt.forEach(e=>{e.props.limit&&(!i.containerId||e.id===i.containerId)&&e.clearQueue()})};function yg(i,e){Rh(i)&&(mg()||ha.push({content:i,options:e}),Wt.forEach(n=>{n.buildToast(i,e)}))}function Nv(i){var e;(e=Wt.get(i.containerId||1))==null||e.setToggle(i.id,i.fn)}function _g(i,e){Wt.forEach(n=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===n.id)&&n.toggle(i,e==null?void 0:e.id)})}function Vv(i){let e=i.containerId||1;return{subscribe(n){let s=Av(e,i,Cv);Wt.set(e,s);let a=s.observe(n);return Rv(),()=>{a(),Wt.delete(e)}},setProps(n){var s;(s=Wt.get(e))==null||s.setProps(n)},getSnapshot(){var n;return(n=Wt.get(e))==null?void 0:n.getSnapshot()}}}function Dv(i){return kh.add(i),()=>{kh.delete(i)}}function Ov(i){return i&&(Hi(i.toastId)||wa(i.toastId))?i.toastId:pg()}function Ta(i,e){return yg(i,e),e.toastId}function wu(i,e){return{...e,type:e&&e.type||i,toastId:Ov(e)}}function Tu(i){return(e,n)=>Ta(e,wu(i,n))}function be(i,e){return Ta(i,wu("default",e))}be.loading=(i,e)=>Ta(i,wu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function Lv(i,{pending:e,error:n,success:s},a){let c;e&&(c=Hi(e)?be.loading(e,a):be.loading(e.render,{...a,...e}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},m=(v,w,k)=>{if(w==null){be.dismiss(c);return}let R={type:v,...f,...a,data:k},U=Hi(w)?{render:w}:w;return c?be.update(c,{...R,...U}):be(U.render,{...R,...U}),k},y=wr(i)?i():i;return y.then(v=>m("success",s,v)).catch(v=>m("error",n,v)),y}be.promise=Lv;be.success=Tu("success");be.info=Tu("info");be.error=Tu("error");be.warning=Tu("warning");be.warn=be.warning;be.dark=(i,e)=>Ta(i,wu("default",{theme:"dark",...e}));function Mv(i){Pv(i)}be.dismiss=Mv;be.clearWaitingQueue=xv;be.isActive=gg;be.update=(i,e={})=>{let n=kv(i,e);if(n){let{props:s,content:a}=n,c={delay:100,...s,...e,toastId:e.toastId||i,updateId:pg()};c.toastId!==i&&(c.staleId=i);let f=c.render||a;delete c.render,Ta(f,c)}};be.done=i=>{be.update(i,{progress:1})};be.onChange=Dv;be.play=i=>_g(!0,i);be.pause=i=>_g(!1,i);function bv(i){var e;let{subscribe:n,getSnapshot:s,setProps:a}=Ie.useRef(Vv(i)).current;a(i);let c=(e=Ie.useSyncExternalStore(n,s,s))==null?void 0:e.slice();function f(m){if(!c)return[];let y=new Map;return i.newestOnTop&&c.reverse(),c.forEach(v=>{let{position:w}=v.props;y.has(w)||y.set(w,[]),y.get(w).push(v)}),Array.from(y,v=>m(v[0],v[1]))}return{getToastToRender:f,isToastActive:gg,count:c==null?void 0:c.length}}function Fv(i){let[e,n]=Ie.useState(!1),[s,a]=Ie.useState(!1),c=Ie.useRef(null),f=Ie.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:m,pauseOnHover:y,closeToast:v,onClick:w,closeOnClick:k}=i;Nv({id:i.toastId,containerId:i.containerId,fn:n}),Ie.useEffect(()=>{if(i.pauseOnFocusLoss)return R(),()=>{U()}},[i.pauseOnFocusLoss]);function R(){document.hasFocus()||ne(),window.addEventListener("focus",z),window.addEventListener("blur",ne)}function U(){window.removeEventListener("focus",z),window.removeEventListener("blur",ne)}function W(A){if(i.draggable===!0||i.draggable===A.pointerType){K();let T=c.current;f.canCloseOnClick=!0,f.canDrag=!0,T.style.transition="none",i.draggableDirection==="x"?(f.start=A.clientX,f.removalDistance=T.offsetWidth*(i.draggablePercent/100)):(f.start=A.clientY,f.removalDistance=T.offsetHeight*(i.draggablePercent===80?i.draggablePercent*1.5:i.draggablePercent)/100)}}function B(A){let{top:T,bottom:C,left:x,right:V}=c.current.getBoundingClientRect();A.pointerType==="mouse"&&i.pauseOnHover&&A.clientX>=x&&A.clientX<=V&&A.clientY>=T&&A.clientY<=C?ne():z()}function z(){n(!0)}function ne(){n(!1)}function K(){f.didMove=!1,document.addEventListener("pointermove",te),document.addEventListener("pointerup",Ee)}function Y(){document.removeEventListener("pointermove",te),document.removeEventListener("pointerup",Ee)}function te(A){let T=c.current;if(f.canDrag&&T){f.didMove=!0,e&&ne(),i.draggableDirection==="x"?f.delta=A.clientX-f.start:f.delta=A.clientY-f.start,f.start!==A.clientX&&(f.canCloseOnClick=!1);let C=i.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;T.style.transform=`translate3d(${C},0)`,T.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function Ee(){Y();let A=c.current;if(f.canDrag&&f.didMove&&A){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){a(!0),i.closeToast(!0),i.collapseAll();return}A.style.transition="transform 0.2s, opacity 0.2s",A.style.removeProperty("transform"),A.style.removeProperty("opacity")}}let ye={onPointerDown:W,onPointerUp:B};return m&&y&&(ye.onMouseEnter=ne,i.stacked||(ye.onMouseLeave=z)),k&&(ye.onClick=A=>{w&&w(A),f.canCloseOnClick&&v(!0)}),{playToast:z,pauseToast:ne,isRunning:e,preventExitTransition:s,toastRef:c,eventHandlers:ye}}var vg=typeof window<"u"?Ie.useLayoutEffect:Ie.useEffect,Iu=({theme:i,type:e,isLoading:n,...s})=>qe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:i==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...s});function Uv(i){return qe.createElement(Iu,{...i},qe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function jv(i){return qe.createElement(Iu,{...i},qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function zv(i){return qe.createElement(Iu,{...i},qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Bv(i){return qe.createElement(Iu,{...i},qe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function $v(){return qe.createElement("div",{className:"Toastify__spinner"})}var Ph={info:jv,warning:Uv,success:zv,error:Bv,spinner:$v},Hv=i=>i in Ph;function Wv({theme:i,type:e,isLoading:n,icon:s}){let a=null,c={theme:i,type:e};return s===!1||(wr(s)?a=s({...c,isLoading:n}):Ie.isValidElement(s)?a=Ie.cloneElement(s,c):n?a=Ph.spinner():Hv(e)&&(a=Ph[e](c))),a}var qv=i=>{let{isRunning:e,preventExitTransition:n,toastRef:s,eventHandlers:a,playToast:c}=Fv(i),{closeButton:f,children:m,autoClose:y,onClick:v,type:w,hideProgressBar:k,closeToast:R,transition:U,position:W,className:B,style:z,progressClassName:ne,updateId:K,role:Y,progress:te,rtl:Ee,toastId:ye,deleteToast:A,isIn:T,isLoading:C,closeOnClick:x,theme:V,ariaLabel:D}=i,S=Bi("Toastify__toast",`Toastify__toast-theme--${V}`,`Toastify__toast--${w}`,{"Toastify__toast--rtl":Ee},{"Toastify__toast--close-on-click":x}),Je=wr(B)?B({rtl:Ee,position:W,type:w,defaultClassName:S}):Bi(S,B),ht=Wv(i),ft=!!te||!y,Le={closeToast:R,type:w,theme:V},Z=null;return f===!1||(wr(f)?Z=f(Le):Ie.isValidElement(f)?Z=Ie.cloneElement(f,Le):Z=Tv(Le)),qe.createElement(U,{isIn:T,done:A,position:W,preventExitTransition:n,nodeRef:s,playToast:c},qe.createElement("div",{id:ye,tabIndex:0,onClick:v,"data-in":T,className:Je,...a,style:z,ref:s,...T&&{role:Y,"aria-label":D}},ht!=null&&qe.createElement("div",{className:Bi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!C})},ht),dg(m,i,!e),Z,!i.customProgressBar&&qe.createElement(Iv,{...K&&!ft?{key:`p-${K}`}:{},rtl:Ee,theme:V,delay:y,isRunning:e,isIn:T,closeToast:R,hide:k,type:w,className:ne,controlledProgress:ft,progress:te||0})))},Qv=(i,e=!1)=>({enter:`Toastify--animate Toastify__${i}-enter`,exit:`Toastify--animate Toastify__${i}-exit`,appendPosition:e}),Kv=wv(Qv("bounce",!0)),Gv={position:"top-right",transition:Kv,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:i=>i.altKey&&i.code==="KeyT"};function Xv(i){let e={...Gv,...i},n=i.stacked,[s,a]=Ie.useState(!0),c=Ie.useRef(null),{getToastToRender:f,isToastActive:m,count:y}=bv(e),{className:v,style:w,rtl:k,containerId:R,hotKeys:U}=e;function W(z){let ne=Bi("Toastify__toast-container",`Toastify__toast-container--${z}`,{"Toastify__toast-container--rtl":k});return wr(v)?v({position:z,rtl:k,defaultClassName:ne}):Bi(ne,Ch(v))}function B(){n&&(a(!0),be.play())}return vg(()=>{var z;if(n){let ne=c.current.querySelectorAll('[data-in="true"]'),K=12,Y=(z=e.position)==null?void 0:z.includes("top"),te=0,Ee=0;Array.from(ne).reverse().forEach((ye,A)=>{let T=ye;T.classList.add("Toastify__toast--stacked"),A>0&&(T.dataset.collapsed=`${s}`),T.dataset.pos||(T.dataset.pos=Y?"top":"bot");let C=te*(s?.2:1)+(s?0:K*A),x=Math.max(.5,1-(s?Ee:0));T.style.setProperty("--y",`${Y?C:C*-1}px`),T.style.setProperty("--g",`${K}`),T.style.setProperty("--s",`${x}`),te+=T.offsetHeight,Ee+=.025})}},[s,y,n]),Ie.useEffect(()=>{function z(ne){var K;let Y=c.current;U(ne)&&((K=Y==null?void 0:Y.querySelector('[tabIndex="0"]'))==null||K.focus(),a(!1),be.pause()),ne.key==="Escape"&&(document.activeElement===Y||Y!=null&&Y.contains(document.activeElement))&&(a(!0),be.play())}return document.addEventListener("keydown",z),()=>{document.removeEventListener("keydown",z)}},[U]),qe.createElement("section",{ref:c,className:"Toastify",id:R,onMouseEnter:()=>{n&&(a(!1),be.pause())},onMouseLeave:B,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},f((z,ne)=>{let K=ne.length?{...w}:{...w,pointerEvents:"none"};return qe.createElement("div",{tabIndex:-1,className:W(z),"data-stacked":n,style:K,key:`c-${z}`},ne.map(({content:Y,props:te})=>qe.createElement(qv,{...te,stacked:n,collapseAll:B,isIn:m(te.toastId,te.containerId),key:`t-${te.key}`},Y)))}))}var Yv=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,nm=new Map,Jv=(i,e)=>{vg(()=>{if(typeof document>"u")return;let n=document,s=nm.get(n);if(s){e&&s.setAttribute("nonce",e);return}let a=n.createElement("style");a.textContent=i,e&&a.setAttribute("nonce",e),n.head.appendChild(a),nm.set(n,a)},[e])};function Zv(i){return Jv(Yv,i.nonce),qe.createElement(Xv,{...i})}const e0=()=>{};var rm={};/**
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
 */const Eg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},t0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],f=i[n++],m=i[n++],y=((a&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[n++],f=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|f&63)}}return e.join("")},wg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],f=a+1<i.length,m=f?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,w=c>>2,k=(c&3)<<4|m>>4;let R=(m&15)<<2|v>>6,U=v&63;y||(U=64,f||(R=64)),s.push(n[w],n[k],n[R],n[U])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Eg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):t0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],m=a<i.length?n[i.charAt(a)]:0;++a;const v=a<i.length?n[i.charAt(a)]:64;++a;const k=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||m==null||v==null||k==null)throw new n0;const R=c<<2|m>>4;if(s.push(R),v!==64){const U=m<<4&240|v>>2;if(s.push(U),k!==64){const W=v<<6&192|k;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class n0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r0=function(i){const e=Eg(i);return wg.encodeByteArray(e,!0)},iu=function(i){return r0(i).replace(/\./g,"")},i0=function(i){try{return wg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o0=()=>s0().__FIREBASE_DEFAULTS__,a0=()=>{if(typeof process>"u"||typeof rm>"u")return;const i=rm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},l0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&i0(i[1]);return e&&JSON.parse(e)},tf=()=>{try{return e0()||o0()||a0()||l0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},u0=i=>{var e,n;return(n=(e=tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},c0=i=>{const e=u0(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Tg=()=>{var i;return(i=tf())===null||i===void 0?void 0:i.config};/**
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
 */class h0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function f0(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function d0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[iu(JSON.stringify(n)),iu(JSON.stringify(f)),""].join(".")}const sa={};function p0(){const i={prod:[],emulator:[]};for(const e of Object.keys(sa))sa[e]?i.emulator.push(e):i.prod.push(e);return i}function m0(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let im=!1;function g0(i,e){if(typeof window>"u"||typeof document>"u"||!nf(window.location.host)||sa[i]===e||sa[i]||im)return;sa[i]=e;function n(R){return`__firebase__banner__${R}`}const s="__firebase__banner",c=p0().prod.length>0;function f(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function y(R,U){R.setAttribute("width","24"),R.setAttribute("id",U),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function v(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{im=!0,f()},R}function w(R,U){R.setAttribute("id",U),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function k(){const R=m0(s),U=n("text"),W=document.getElementById(U)||document.createElement("span"),B=n("learnmore"),z=document.getElementById(B)||document.createElement("a"),ne=n("preprendIcon"),K=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const Y=R.element;m(Y),w(z,B);const te=v();y(K,ne),Y.append(K,W,z,te),document.body.appendChild(Y)}c?(W.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
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
 */function y0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _0(){var i;const e=(i=tf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function v0(){return!_0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E0(){try{return typeof indexedDB=="object"}catch{return!1}}function w0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const T0="FirebaseError";class Zs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=T0,Object.setPrototypeOf(this,Zs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ig.prototype.create)}}class Ig{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],f=c?I0(c,s):"Error",m=`${this.serviceName}: ${f} (${a}).`;return new Zs(a,m,s)}}function I0(i,e){return i.replace(S0,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const S0=/\{\$([^}]+)}/g;function su(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],f=e[a];if(sm(c)&&sm(f)){if(!su(c,f))return!1}else if(c!==f)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function sm(i){return i!==null&&typeof i=="object"}/**
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
 */function ti(i){return i&&i._delegate?i._delegate:i}class fa{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ji="[DEFAULT]";/**
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
 */class A0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new h0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R0(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&f.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const f=this.instances.get(a);return f&&e(f,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C0(i){return i===ji?void 0:i}function R0(i){return i.instantiationMode==="EAGER"}/**
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
 */class k0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(De||(De={}));const P0={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},x0=De.INFO,N0={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},V0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=N0[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sg{constructor(e){this.name=e,this._logLevel=x0,this._logHandler=V0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const D0=(i,e)=>e.some(n=>i instanceof n);let om,am;function O0(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L0(){return am||(am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,xh=new WeakMap,Cg=new WeakMap,gh=new WeakMap,rf=new WeakMap;function M0(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",f)},c=()=>{n(Yr(i.result)),a()},f=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&Ag.set(n,i)}).catch(()=>{}),rf.set(e,i),e}function b0(i){if(xh.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",f),i.removeEventListener("abort",f)},c=()=>{n(),a()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",f),i.addEventListener("abort",f)});xh.set(i,e)}let Nh={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return xh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Cg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function F0(i){Nh=i(Nh)}function U0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(yh(this),e,...n);return Cg.set(s,e.sort?e.sort():[e]),Yr(s)}:L0().includes(i)?function(...e){return i.apply(yh(this),e),Yr(Ag.get(this))}:function(...e){return Yr(i.apply(yh(this),e))}}function j0(i){return typeof i=="function"?U0(i):(i instanceof IDBTransaction&&b0(i),D0(i,O0())?new Proxy(i,Nh):i)}function Yr(i){if(i instanceof IDBRequest)return M0(i);if(gh.has(i))return gh.get(i);const e=j0(i);return e!==i&&(gh.set(i,e),rf.set(e,i)),e}const yh=i=>rf.get(i);function z0(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const f=indexedDB.open(i,e),m=Yr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(Yr(f.result),y.oldVersion,y.newVersion,Yr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const B0=["get","getKey","getAll","getAllKeys","count"],$0=["put","add","delete","clear"],_h=new Map;function lm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=$0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||B0.includes(n)))return;const c=async function(f,...m){const y=this.transaction(f,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[n](...m),a&&y.done]))[0]};return _h.set(e,c),c}F0(i=>({...i,get:(e,n,s)=>lm(e,n)||i.get(e,n,s),has:(e,n)=>!!lm(e,n)||i.has(e,n)}));/**
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
 */class H0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(W0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function W0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",um="0.13.2";/**
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
 */const Tr=new Sg("@firebase/app"),q0="@firebase/app-compat",Q0="@firebase/analytics-compat",K0="@firebase/analytics",G0="@firebase/app-check-compat",X0="@firebase/app-check",Y0="@firebase/auth",J0="@firebase/auth-compat",Z0="@firebase/database",eE="@firebase/data-connect",tE="@firebase/database-compat",nE="@firebase/functions",rE="@firebase/functions-compat",iE="@firebase/installations",sE="@firebase/installations-compat",oE="@firebase/messaging",aE="@firebase/messaging-compat",lE="@firebase/performance",uE="@firebase/performance-compat",cE="@firebase/remote-config",hE="@firebase/remote-config-compat",fE="@firebase/storage",dE="@firebase/storage-compat",pE="@firebase/firestore",mE="@firebase/ai",gE="@firebase/firestore-compat",yE="firebase",_E="11.10.0";/**
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
 */const Dh="[DEFAULT]",vE={[Vh]:"fire-core",[q0]:"fire-core-compat",[K0]:"fire-analytics",[Q0]:"fire-analytics-compat",[X0]:"fire-app-check",[G0]:"fire-app-check-compat",[Y0]:"fire-auth",[J0]:"fire-auth-compat",[Z0]:"fire-rtdb",[eE]:"fire-data-connect",[tE]:"fire-rtdb-compat",[nE]:"fire-fn",[rE]:"fire-fn-compat",[iE]:"fire-iid",[sE]:"fire-iid-compat",[oE]:"fire-fcm",[aE]:"fire-fcm-compat",[lE]:"fire-perf",[uE]:"fire-perf-compat",[cE]:"fire-rc",[hE]:"fire-rc-compat",[fE]:"fire-gcs",[dE]:"fire-gcs-compat",[pE]:"fire-fst",[gE]:"fire-fst-compat",[mE]:"fire-vertex","fire-js":"fire-js",[yE]:"fire-js-all"};/**
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
 */const ou=new Map,EE=new Map,Oh=new Map;function cm(i,e){try{i.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function au(i){const e=i.name;if(Oh.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,i);for(const n of ou.values())cm(n,i);for(const n of EE.values())cm(n,i);return!0}function wE(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function TE(i){return i==null?!1:i.settings!==void 0}/**
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
 */const IE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new Ig("app","Firebase",IE);/**
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
 */class SE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const AE=_E;function Rg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dh,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw Jr.create("bad-app-name",{appName:String(a)});if(n||(n=Tg()),!n)throw Jr.create("no-options");const c=ou.get(a);if(c){if(su(n,c.options)&&su(s,c.config))return c;throw Jr.create("duplicate-app",{appName:a})}const f=new k0(a);for(const y of Oh.values())f.addComponent(y);const m=new SE(n,s,f);return ou.set(a,m),m}function CE(i=Dh){const e=ou.get(i);if(!e&&i===Dh&&Tg())return Rg();if(!e)throw Jr.create("no-app",{appName:i});return e}function qs(i,e,n){var s;let a=(s=vE[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),f=e.match(/\s|\//);if(c||f){const m=[`Unable to register library "${a}" with version "${e}":`];c&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}au(new fa(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const RE="firebase-heartbeat-database",kE=1,da="firebase-heartbeat-store";let vh=null;function kg(){return vh||(vh=z0(RE,kE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(da)}catch(n){console.warn(n)}}}}).catch(i=>{throw Jr.create("idb-open",{originalErrorMessage:i.message})})),vh}async function PE(i){try{const n=(await kg()).transaction(da),s=await n.objectStore(da).get(Pg(i));return await n.done,s}catch(e){if(e instanceof Zs)Tr.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function hm(i,e){try{const s=(await kg()).transaction(da,"readwrite");await s.objectStore(da).put(e,Pg(i)),await s.done}catch(n){if(n instanceof Zs)Tr.warn(n.message);else{const s=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(s.message)}}}function Pg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const xE=1024,NE=30;class VE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=fm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>NE){const f=LE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fm(),{heartbeatsToSend:s,unsentEntries:a}=DE(this._heartbeatsCache.heartbeats),c=iu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Tr.warn(n),""}}}function fm(){return new Date().toISOString().substring(0,10)}function DE(i,e=xE){const n=[];let s=i.slice();for(const a of i){const c=n.find(f=>f.agent===a.agent);if(c){if(c.dates.push(a.date),dm(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),dm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class OE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return E0()?w0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function dm(i){return iu(JSON.stringify({version:2,heartbeats:i})).length}function LE(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function ME(i){au(new fa("platform-logger",e=>new H0(e),"PRIVATE")),au(new fa("heartbeat",e=>new VE(e),"PRIVATE")),qs(Vh,um,i),qs(Vh,um,"esm2017"),qs("fire-js","")}ME("");var bE="firebase",FE="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs(bE,FE,"app");var pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,xg;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,T){function C(){}C.prototype=T.prototype,A.D=T.prototype,A.prototype=new C,A.prototype.constructor=A,A.C=function(x,V,D){for(var S=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)S[Je-2]=arguments[Je];return T.prototype[V].apply(x,S)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(A,T,C){C||(C=0);var x=Array(16);if(typeof T=="string")for(var V=0;16>V;++V)x[V]=T.charCodeAt(C++)|T.charCodeAt(C++)<<8|T.charCodeAt(C++)<<16|T.charCodeAt(C++)<<24;else for(V=0;16>V;++V)x[V]=T[C++]|T[C++]<<8|T[C++]<<16|T[C++]<<24;T=A.g[0],C=A.g[1],V=A.g[2];var D=A.g[3],S=T+(D^C&(V^D))+x[0]+3614090360&4294967295;T=C+(S<<7&4294967295|S>>>25),S=D+(V^T&(C^V))+x[1]+3905402710&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(C^D&(T^C))+x[2]+606105819&4294967295,V=D+(S<<17&4294967295|S>>>15),S=C+(T^V&(D^T))+x[3]+3250441966&4294967295,C=V+(S<<22&4294967295|S>>>10),S=T+(D^C&(V^D))+x[4]+4118548399&4294967295,T=C+(S<<7&4294967295|S>>>25),S=D+(V^T&(C^V))+x[5]+1200080426&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(C^D&(T^C))+x[6]+2821735955&4294967295,V=D+(S<<17&4294967295|S>>>15),S=C+(T^V&(D^T))+x[7]+4249261313&4294967295,C=V+(S<<22&4294967295|S>>>10),S=T+(D^C&(V^D))+x[8]+1770035416&4294967295,T=C+(S<<7&4294967295|S>>>25),S=D+(V^T&(C^V))+x[9]+2336552879&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(C^D&(T^C))+x[10]+4294925233&4294967295,V=D+(S<<17&4294967295|S>>>15),S=C+(T^V&(D^T))+x[11]+2304563134&4294967295,C=V+(S<<22&4294967295|S>>>10),S=T+(D^C&(V^D))+x[12]+1804603682&4294967295,T=C+(S<<7&4294967295|S>>>25),S=D+(V^T&(C^V))+x[13]+4254626195&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(C^D&(T^C))+x[14]+2792965006&4294967295,V=D+(S<<17&4294967295|S>>>15),S=C+(T^V&(D^T))+x[15]+1236535329&4294967295,C=V+(S<<22&4294967295|S>>>10),S=T+(V^D&(C^V))+x[1]+4129170786&4294967295,T=C+(S<<5&4294967295|S>>>27),S=D+(C^V&(T^C))+x[6]+3225465664&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^C&(D^T))+x[11]+643717713&4294967295,V=D+(S<<14&4294967295|S>>>18),S=C+(D^T&(V^D))+x[0]+3921069994&4294967295,C=V+(S<<20&4294967295|S>>>12),S=T+(V^D&(C^V))+x[5]+3593408605&4294967295,T=C+(S<<5&4294967295|S>>>27),S=D+(C^V&(T^C))+x[10]+38016083&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^C&(D^T))+x[15]+3634488961&4294967295,V=D+(S<<14&4294967295|S>>>18),S=C+(D^T&(V^D))+x[4]+3889429448&4294967295,C=V+(S<<20&4294967295|S>>>12),S=T+(V^D&(C^V))+x[9]+568446438&4294967295,T=C+(S<<5&4294967295|S>>>27),S=D+(C^V&(T^C))+x[14]+3275163606&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^C&(D^T))+x[3]+4107603335&4294967295,V=D+(S<<14&4294967295|S>>>18),S=C+(D^T&(V^D))+x[8]+1163531501&4294967295,C=V+(S<<20&4294967295|S>>>12),S=T+(V^D&(C^V))+x[13]+2850285829&4294967295,T=C+(S<<5&4294967295|S>>>27),S=D+(C^V&(T^C))+x[2]+4243563512&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^C&(D^T))+x[7]+1735328473&4294967295,V=D+(S<<14&4294967295|S>>>18),S=C+(D^T&(V^D))+x[12]+2368359562&4294967295,C=V+(S<<20&4294967295|S>>>12),S=T+(C^V^D)+x[5]+4294588738&4294967295,T=C+(S<<4&4294967295|S>>>28),S=D+(T^C^V)+x[8]+2272392833&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^C)+x[11]+1839030562&4294967295,V=D+(S<<16&4294967295|S>>>16),S=C+(V^D^T)+x[14]+4259657740&4294967295,C=V+(S<<23&4294967295|S>>>9),S=T+(C^V^D)+x[1]+2763975236&4294967295,T=C+(S<<4&4294967295|S>>>28),S=D+(T^C^V)+x[4]+1272893353&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^C)+x[7]+4139469664&4294967295,V=D+(S<<16&4294967295|S>>>16),S=C+(V^D^T)+x[10]+3200236656&4294967295,C=V+(S<<23&4294967295|S>>>9),S=T+(C^V^D)+x[13]+681279174&4294967295,T=C+(S<<4&4294967295|S>>>28),S=D+(T^C^V)+x[0]+3936430074&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^C)+x[3]+3572445317&4294967295,V=D+(S<<16&4294967295|S>>>16),S=C+(V^D^T)+x[6]+76029189&4294967295,C=V+(S<<23&4294967295|S>>>9),S=T+(C^V^D)+x[9]+3654602809&4294967295,T=C+(S<<4&4294967295|S>>>28),S=D+(T^C^V)+x[12]+3873151461&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^C)+x[15]+530742520&4294967295,V=D+(S<<16&4294967295|S>>>16),S=C+(V^D^T)+x[2]+3299628645&4294967295,C=V+(S<<23&4294967295|S>>>9),S=T+(V^(C|~D))+x[0]+4096336452&4294967295,T=C+(S<<6&4294967295|S>>>26),S=D+(C^(T|~V))+x[7]+1126891415&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~C))+x[14]+2878612391&4294967295,V=D+(S<<15&4294967295|S>>>17),S=C+(D^(V|~T))+x[5]+4237533241&4294967295,C=V+(S<<21&4294967295|S>>>11),S=T+(V^(C|~D))+x[12]+1700485571&4294967295,T=C+(S<<6&4294967295|S>>>26),S=D+(C^(T|~V))+x[3]+2399980690&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~C))+x[10]+4293915773&4294967295,V=D+(S<<15&4294967295|S>>>17),S=C+(D^(V|~T))+x[1]+2240044497&4294967295,C=V+(S<<21&4294967295|S>>>11),S=T+(V^(C|~D))+x[8]+1873313359&4294967295,T=C+(S<<6&4294967295|S>>>26),S=D+(C^(T|~V))+x[15]+4264355552&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~C))+x[6]+2734768916&4294967295,V=D+(S<<15&4294967295|S>>>17),S=C+(D^(V|~T))+x[13]+1309151649&4294967295,C=V+(S<<21&4294967295|S>>>11),S=T+(V^(C|~D))+x[4]+4149444226&4294967295,T=C+(S<<6&4294967295|S>>>26),S=D+(C^(T|~V))+x[11]+3174756917&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~C))+x[2]+718787259&4294967295,V=D+(S<<15&4294967295|S>>>17),S=C+(D^(V|~T))+x[9]+3951481745&4294967295,A.g[0]=A.g[0]+T&4294967295,A.g[1]=A.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,A.g[2]=A.g[2]+V&4294967295,A.g[3]=A.g[3]+D&4294967295}s.prototype.u=function(A,T){T===void 0&&(T=A.length);for(var C=T-this.blockSize,x=this.B,V=this.h,D=0;D<T;){if(V==0)for(;D<=C;)a(this,A,D),D+=this.blockSize;if(typeof A=="string"){for(;D<T;)if(x[V++]=A.charCodeAt(D++),V==this.blockSize){a(this,x),V=0;break}}else for(;D<T;)if(x[V++]=A[D++],V==this.blockSize){a(this,x),V=0;break}}this.h=V,this.o+=T},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var T=1;T<A.length-8;++T)A[T]=0;var C=8*this.o;for(T=A.length-8;T<A.length;++T)A[T]=C&255,C/=256;for(this.u(A),A=Array(16),T=C=0;4>T;++T)for(var x=0;32>x;x+=8)A[C++]=this.g[T]>>>x&255;return A};function c(A,T){var C=m;return Object.prototype.hasOwnProperty.call(C,A)?C[A]:C[A]=T(A)}function f(A,T){this.h=T;for(var C=[],x=!0,V=A.length-1;0<=V;V--){var D=A[V]|0;x&&D==T||(C[V]=D,x=!1)}this.g=C}var m={};function y(A){return-128<=A&&128>A?c(A,function(T){return new f([T|0],0>T?-1:0)}):new f([A|0],0>A?-1:0)}function v(A){if(isNaN(A)||!isFinite(A))return k;if(0>A)return z(v(-A));for(var T=[],C=1,x=0;A>=C;x++)T[x]=A/C|0,C*=4294967296;return new f(T,0)}function w(A,T){if(A.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A.charAt(0)=="-")return z(w(A.substring(1),T));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=v(Math.pow(T,8)),x=k,V=0;V<A.length;V+=8){var D=Math.min(8,A.length-V),S=parseInt(A.substring(V,V+D),T);8>D?(D=v(Math.pow(T,D)),x=x.j(D).add(v(S))):(x=x.j(C),x=x.add(v(S)))}return x}var k=y(0),R=y(1),U=y(16777216);i=f.prototype,i.m=function(){if(B(this))return-z(this).m();for(var A=0,T=1,C=0;C<this.g.length;C++){var x=this.i(C);A+=(0<=x?x:4294967296+x)*T,T*=4294967296}return A},i.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(W(this))return"0";if(B(this))return"-"+z(this).toString(A);for(var T=v(Math.pow(A,6)),C=this,x="";;){var V=te(C,T).g;C=ne(C,V.j(T));var D=((0<C.g.length?C.g[0]:C.h)>>>0).toString(A);if(C=V,W(C))return D+x;for(;6>D.length;)D="0"+D;x=D+x}},i.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function W(A){if(A.h!=0)return!1;for(var T=0;T<A.g.length;T++)if(A.g[T]!=0)return!1;return!0}function B(A){return A.h==-1}i.l=function(A){return A=ne(this,A),B(A)?-1:W(A)?0:1};function z(A){for(var T=A.g.length,C=[],x=0;x<T;x++)C[x]=~A.g[x];return new f(C,~A.h).add(R)}i.abs=function(){return B(this)?z(this):this},i.add=function(A){for(var T=Math.max(this.g.length,A.g.length),C=[],x=0,V=0;V<=T;V++){var D=x+(this.i(V)&65535)+(A.i(V)&65535),S=(D>>>16)+(this.i(V)>>>16)+(A.i(V)>>>16);x=S>>>16,D&=65535,S&=65535,C[V]=S<<16|D}return new f(C,C[C.length-1]&-2147483648?-1:0)};function ne(A,T){return A.add(z(T))}i.j=function(A){if(W(this)||W(A))return k;if(B(this))return B(A)?z(this).j(z(A)):z(z(this).j(A));if(B(A))return z(this.j(z(A)));if(0>this.l(U)&&0>A.l(U))return v(this.m()*A.m());for(var T=this.g.length+A.g.length,C=[],x=0;x<2*T;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<A.g.length;V++){var D=this.i(x)>>>16,S=this.i(x)&65535,Je=A.i(V)>>>16,ht=A.i(V)&65535;C[2*x+2*V]+=S*ht,K(C,2*x+2*V),C[2*x+2*V+1]+=D*ht,K(C,2*x+2*V+1),C[2*x+2*V+1]+=S*Je,K(C,2*x+2*V+1),C[2*x+2*V+2]+=D*Je,K(C,2*x+2*V+2)}for(x=0;x<T;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=T;x<2*T;x++)C[x]=0;return new f(C,0)};function K(A,T){for(;(A[T]&65535)!=A[T];)A[T+1]+=A[T]>>>16,A[T]&=65535,T++}function Y(A,T){this.g=A,this.h=T}function te(A,T){if(W(T))throw Error("division by zero");if(W(A))return new Y(k,k);if(B(A))return T=te(z(A),T),new Y(z(T.g),z(T.h));if(B(T))return T=te(A,z(T)),new Y(z(T.g),T.h);if(30<A.g.length){if(B(A)||B(T))throw Error("slowDivide_ only works with positive integers.");for(var C=R,x=T;0>=x.l(A);)C=Ee(C),x=Ee(x);var V=ye(C,1),D=ye(x,1);for(x=ye(x,2),C=ye(C,2);!W(x);){var S=D.add(x);0>=S.l(A)&&(V=V.add(C),D=S),x=ye(x,1),C=ye(C,1)}return T=ne(A,V.j(T)),new Y(V,T)}for(V=k;0<=A.l(T);){for(C=Math.max(1,Math.floor(A.m()/T.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),D=v(C),S=D.j(T);B(S)||0<S.l(A);)C-=x,D=v(C),S=D.j(T);W(D)&&(D=R),V=V.add(D),A=ne(A,S)}return new Y(V,A)}i.A=function(A){return te(this,A).h},i.and=function(A){for(var T=Math.max(this.g.length,A.g.length),C=[],x=0;x<T;x++)C[x]=this.i(x)&A.i(x);return new f(C,this.h&A.h)},i.or=function(A){for(var T=Math.max(this.g.length,A.g.length),C=[],x=0;x<T;x++)C[x]=this.i(x)|A.i(x);return new f(C,this.h|A.h)},i.xor=function(A){for(var T=Math.max(this.g.length,A.g.length),C=[],x=0;x<T;x++)C[x]=this.i(x)^A.i(x);return new f(C,this.h^A.h)};function Ee(A){for(var T=A.g.length+1,C=[],x=0;x<T;x++)C[x]=A.i(x)<<1|A.i(x-1)>>>31;return new f(C,A.h)}function ye(A,T){var C=T>>5;T%=32;for(var x=A.g.length-C,V=[],D=0;D<x;D++)V[D]=0<T?A.i(D+C)>>>T|A.i(D+C+1)<<32-T:A.i(D+C);return new f(V,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,xg=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=v,f.fromString=w,Zr=f}).apply(typeof pm<"u"?pm:typeof self<"u"?self:typeof window<"u"?window:{});var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ng,ta,Vg,Yl,Lh,Dg,Og,Lg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hl=="object"&&Hl];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function a(l,d){if(d)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],d=d(E),d!=E&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function c(l,d){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var j=g++;return{value:d(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(l){return l||function(){return c(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function v(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function w(l,d,g){return l.call.apply(l.bind,arguments)}function k(l,d,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function R(l,d,g){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:k,R.apply(null,arguments)}function U(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function W(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,j){for(var ee=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ee[ze-2]=arguments[ze];return d.prototype[L].apply(E,ee)}}function B(l){const d=l.length;if(0<d){const g=Array(d);for(let E=0;E<d;E++)g[E]=l[E];return g}return[]}function z(l,d){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,j=E.length||0;l.length=L+j;for(let ee=0;ee<j;ee++)l[L+ee]=E[ee]}else l.push(E)}}class ne{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function K(l){return/^[\s\xa0]*$/.test(l)}function Y(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function te(l){return te[" "](l),l}te[" "]=function(){};var Ee=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ye(l,d,g){for(const E in l)d.call(g,l[E],E,l)}function A(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function T(l){const d={};for(const g in l)d[g]=l[g];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,d){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let j=0;j<C.length;j++)g=C[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function V(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function D(l){m.setTimeout(()=>{throw l},0)}function S(){var l=de;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Je{constructor(){this.h=this.g=null}add(d,g){const E=ht.get();E.set(d,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ht=new ne(()=>new ft,l=>l.reset());class ft{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Z=!1,de=new Je,oe=()=>{const l=m.Promise.resolve(void 0);Le=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){D(g)}var d=ht;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}Z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,d),m.removeEventListener("test",g,d)}catch{}return l})();function Ce(l,d){if(fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(Ee){e:{try{te(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ce.aa.h.call(this)}}W(Ce,fe);var xe={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(l,d,g,E,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!E,this.ha=L,this.key=++Ue,this.da=this.fa=!1}function Et(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function rr(l){this.src=l,this.g={},this.h=0}rr.prototype.add=function(l,d,g,E,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var ee=Ar(l,d,E,L);return-1<ee?(d=l[ee],g||(d.fa=!1)):(d=new $e(d,this.src,j,!!E,L),d.fa=g,l.push(d)),d};function Xi(l,d){var g=d.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,d,void 0),j;(j=0<=L)&&Array.prototype.splice.call(E,L,1),j&&(Et(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ar(l,d,g,E){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==d&&j.capture==!!g&&j.ha==E)return L}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),Yi={};function io(l,d,g,E,L){if(Array.isArray(d)){for(var j=0;j<d.length;j++)io(l,d[j],g,E,L);return null}return g=ao(g),l&&l[Fe]?l.K(d,g,v(E)?!!E.capture:!1,L):so(l,d,g,!1,E,L)}function so(l,d,g,E,L,j){if(!d)throw Error("Invalid event type");var ee=v(L)?!!L.capture:!!L,ze=Zi(l);if(ze||(l[fi]=ze=new rr(l)),g=ze.add(d,g,E,ee,j),g.proxy)return g;if(E=ka(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Se||(L=ee),L===void 0&&(L=!1),l.addEventListener(d.toString(),E,L);else if(l.attachEvent)l.attachEvent(sr(d.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ka(){function l(g){return d.call(l.src,l.listener,g)}const d=oo;return l}function Ji(l,d,g,E,L){if(Array.isArray(d))for(var j=0;j<d.length;j++)Ji(l,d[j],g,E,L);else E=v(E)?!!E.capture:!!E,g=ao(g),l&&l[Fe]?(l=l.i,d=String(d).toString(),d in l.g&&(j=l.g[d],g=Ar(j,g,E,L),-1<g&&(Et(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[d],l.h--)))):l&&(l=Zi(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Ar(d,g,E,L)),(g=-1<l?d[l]:null)&&ir(g))}function ir(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Fe])Xi(d.i,l);else{var g=l.type,E=l.proxy;d.removeEventListener?d.removeEventListener(g,E,l.capture):d.detachEvent?d.detachEvent(sr(g),E):d.addListener&&d.removeListener&&d.removeListener(E),(g=Zi(d))?(Xi(g,l),g.h==0&&(g.src=null,d[fi]=null)):Et(l)}}}function sr(l){return l in Yi?Yi[l]:Yi[l]="on"+l}function oo(l,d){if(l.da)l=!0;else{d=new Ce(d,this);var g=l.listener,E=l.ha||l.src;l.fa&&ir(l),l=g.call(E,d)}return l}function Zi(l){return l=l[fi],l instanceof rr?l:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function ao(l){return typeof l=="function"?l:(l[es]||(l[es]=function(d){return l.handleEvent(d)}),l[es])}function dt(){H.call(this),this.i=new rr(this),this.M=this,this.F=null}W(dt,H),dt.prototype[Fe]=!0,dt.prototype.removeEventListener=function(l,d,g,E){Ji(this,l,d,g,E)};function pt(l,d){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=d.type||d,typeof d=="string")d=new fe(d,l);else if(d instanceof fe)d.target=d.target||l;else{var L=d;d=new fe(E,l),x(d,L)}if(L=!0,g)for(var j=g.length-1;0<=j;j--){var ee=d.g=g[j];L=or(ee,E,!0,d)&&L}if(ee=d.g=l,L=or(ee,E,!0,d)&&L,L=or(ee,E,!1,d)&&L,g)for(j=0;j<g.length;j++)ee=d.g=g[j],L=or(ee,E,!1,d)&&L}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],E=0;E<g.length;E++)Et(g[E]);delete l.g[d],l.h--}}this.F=null},dt.prototype.K=function(l,d,g,E){return this.i.add(String(l),d,!1,g,E)},dt.prototype.L=function(l,d,g,E){return this.i.add(String(l),d,!0,g,E)};function or(l,d,g,E){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,j=0;j<d.length;++j){var ee=d[j];if(ee&&!ee.da&&ee.capture==g){var ze=ee.listener,mt=ee.ha||ee.src;ee.fa&&Xi(l.i,ee),L=ze.call(mt,E)!==!1&&L}}return L&&!E.defaultPrevented}function lo(l,d,g){if(typeof l=="function")g&&(l=R(l,g));else if(l&&typeof l.handleEvent=="function")l=R(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:m.setTimeout(l,d||0)}function Cr(l){l.g=lo(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class di extends H{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(l){H.call(this),this.h=l,this.g={}}W(pi,H);var uo=[];function co(l){ye(l.g,function(d,g){this.g.hasOwnProperty(g)&&ir(d)},l),l.g={}}pi.prototype.N=function(){pi.aa.N.call(this),co(this)},pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ho=m.JSON.stringify,fo=m.JSON.parse,po=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function mi(){}mi.prototype.h=null;function ts(l){return l.h||(l.h=l.i())}function ns(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){fe.call(this,"d")}W(Un,fe);function rs(){fe.call(this,"c")}W(rs,fe);var jn={},mo=null;function gi(){return mo=mo||new dt}jn.La="serverreachability";function go(l){fe.call(this,jn.La,l)}W(go,fe);function ar(l){const d=gi();pt(d,new go(d))}jn.STAT_EVENT="statevent";function yo(l,d){fe.call(this,jn.STAT_EVENT,l),this.stat=d}W(yo,fe);function it(l){const d=gi();pt(d,new yo(d,l))}jn.Ma="timingevent";function is(l,d){fe.call(this,jn.Ma,l),this.size=d}W(is,fe);function Tn(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},d)}function yi(){this.g=!0}yi.prototype.xa=function(){this.g=!1};function _i(l,d,g,E,L,j){l.info(function(){if(l.g)if(j)for(var ee="",ze=j.split("&"),mt=0;mt<ze.length;mt++){var Ne=ze[mt].split("=");if(1<Ne.length){var wt=Ne[0];Ne=Ne[1];var at=wt.split("_");ee=2<=at.length&&at[1]=="type"?ee+(wt+"="+Ne+"&"):ee+(wt+"=redacted&")}}else ee=null;else ee=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+d+`
`+g+`
`+ee})}function ss(l,d,g,E,L,j,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+d+`
`+g+`
`+j+" "+ee})}function In(l,d,g,E){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Uu(l,g)+(E?" "+E:"")})}function _o(l,d){l.info(function(){return"TIMEOUT: "+d})}yi.prototype.info=function(){};function Uu(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ee=1;ee<L.length;ee++)L[ee]=""}}}}return ho(g)}catch{return d}}var os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function vi(){}W(vi,mi),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},Sn=new vi;function An(l,d,g,E){this.j=l,this.i=d,this.l=g,this.R=E||1,this.U=new pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var vo={},as={};function ls(l,d,g){l.L=1,l.v=Nr(rn(d)),l.m=g,l.P=!0,Eo(l,null)}function Eo(l,d){l.F=Date.now(),He(l),l.A=rn(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Dr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new xa,l.g=Ka(l.j,g?d:null,!l.m),0<l.O&&(l.M=new di(R(l.Y,l,l.g),l.O)),d=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(uo[0]=L.toString()),L=uo);for(var j=0;j<L.length;j++){var ee=io(g,L[j],E||d.handleEvent,!1,d.h||d);if(!ee)break;d.g[ee.key]=ee}d=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ar(),_i(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const d=this.M;d&&Qt(l)==3?d.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const at=Qt(this.g);var d=this.g.Ba();const pn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Co(this.g)))){this.J||at!=4||d==7||(d==8||0>=pn?ar(3):ar(2)),Ei(this);var g=this.g.Z();this.X=g;t:if(Na(this)){var E=Co(this.g);l="";var L=E.length,j=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Rr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(E[d],{stream:!(j&&d==L-1)});E.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=g==200,ss(this.i,this.u,this.A,this.l,this.R,at,g),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,mt=this.g;if((ze=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ze)){var Ne=ze;break t}}Ne=null}if(g=Ne)In(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wo(this,g);else{this.o=!1,this.s=3,it(12),fn(this),Rr(this);break e}}if(this.P){g=!0;let on;for(;!this.J&&this.C<ee.length;)if(on=ju(this,ee),on==as){at==4&&(this.s=4,it(14),g=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(on==vo){this.s=4,it(15),In(this.i,this.l,ee,"[Invalid Chunk]"),g=!1;break}else In(this.i,this.l,on,null),wo(this,on);if(Na(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||ee.length!=0||this.h.h||(this.s=1,it(16),g=!1),this.o=this.o&&g,!g)In(this.i,this.l,ee,"[Invalid Chunked Response]"),fn(this),Rr(this);else if(0<ee.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ko(wt),wt.M=!0,it(11))}}else In(this.i,this.l,ee,null),wo(this,ee);at==4&&fn(this),this.o&&!this.J&&(at==4?vs(this.j,this):(this.o=!1,He(this)))}else ps(this.g),g==400&&0<ee.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),fn(this),Rr(this)}}}catch{}finally{}};function Na(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ju(l,d){var g=l.C,E=d.indexOf(`
`,g);return E==-1?as:(g=Number(d.substring(g,E)),isNaN(g)?vo:(E+=1,E+g>d.length?as:(d=d.slice(E,E+g),l.C=E+g,d)))}An.prototype.cancel=function(){this.J=!0,fn(this)};function He(l){l.S=Date.now()+l.I,Va(l,l.I)}function Va(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(R(l.ba,l),d)}function Ei(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(_o(this.i,this.A),this.L!=2&&(ar(),it(17)),fn(this),this.s=2,Rr(this)):Va(this,this.S-l)};function Rr(l){l.j.G==0||l.J||vs(l.j,l)}function fn(l){Ei(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,co(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function wo(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||zt(g.h,l))){if(!l.K&&zt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)_s(g),xn(g);else break e;ys(g),it(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Tn(R(g.Za,g),6e3));if(1>=Oa(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else fr(g,11)}else if((l.K||g.g==l)&&_s(g),!K(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let Ne=L[d];if(g.T=Ne[0],Ne=Ne[1],g.G==2)if(Ne[0]=="c"){g.K=Ne[1],g.ia=Ne[2];const wt=Ne[3];wt!=null&&(g.la=wt,g.j.info("VER="+g.la));const at=Ne[4];at!=null&&(g.Aa=at,g.j.info("SVER="+g.Aa));const pn=Ne[5];pn!=null&&typeof pn=="number"&&0<pn&&(E=1.5*pn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const on=l.g;if(on){const Ri=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var j=E.h;j.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(To(j,j.h),j.h=null))}if(E.D){const ws=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;ws&&(E.ya=ws,Be(E.I,E.D,ws))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var ee=l;if(E.qa=Qa(E,E.J?E.ia:null,E.W),ee.K){La(E.h,ee);var ze=ee,mt=E.L;mt&&(ze.I=mt),ze.B&&(Ei(ze),He(ze)),E.g=ee}else Ci(E);0<g.i.length&&Hn(g)}else Ne[0]!="stop"&&Ne[0]!="close"||fr(g,7);else g.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?fr(g,7):Rt(g):Ne[0]!="noop"&&g.l&&g.l.ta(Ne),g.v=0)}}ar(4)}catch{}}var Da=class{constructor(l,d){this.g=l,this.map=d}};function wi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Oa(l){return l.h?1:l.g?l.g.size:0}function zt(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function To(l,d){l.g?l.g.add(d):l.h=d}function La(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}wi.prototype.cancel=function(){if(this.i=Ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ma(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return B(l.i)}function us(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var d=[],g=l.length,E=0;E<g;E++)d.push(l[E]);return d}d=[],g=0;for(E in l)d[g++]=l[E];return d}function cs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const E in l)d[g++]=E;return d}}}function kr(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=cs(l),E=us(l),L=E.length,j=0;j<L;j++)d.call(void 0,E[j],g&&g[j],l)}var Ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zu(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var j=l[g].substring(0,E);L=l[g].substring(E+1)}else j=l[g];d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function lr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof lr){this.h=l.h,Ii(this,l.j),this.o=l.o,this.g=l.g,Pr(this,l.s),this.l=l.l;var d=l.i,g=new zn;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),xr(this,g),this.m=l.m}else l&&(d=String(l).match(Ti))?(this.h=!1,Ii(this,d[1]||"",!0),this.o=Pe(d[2]||""),this.g=Pe(d[3]||"",!0),Pr(this,d[4]),this.l=Pe(d[5]||"",!0),xr(this,d[6]||"",!0),this.m=Pe(d[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}lr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Vr(d,hs,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Vr(d,hs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Vr(g,g.charAt(0)=="/"?Ua:Fa,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Vr(g,Io)),l.join("")};function rn(l){return new lr(l)}function Ii(l,d,g){l.j=g?Pe(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Pr(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function xr(l,d,g){d instanceof zn?(l.i=d,Bn(l.i,l.h)):(g||(d=Vr(d,ja)),l.i=new zn(d,l.h))}function Be(l,d,g){l.i.set(d,g)}function Nr(l){return Be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Vr(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,ba),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ba(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hs=/[#\/\?@]/g,Fa=/[#\?:]/g,Ua=/[#\?]/g,ja=/[#\?@]/g,Io=/#/g;function zn(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Ct(l){l.g||(l.g=new Map,l.h=0,l.i&&zu(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}i=zn.prototype,i.add=function(l,d){Ct(this),this.i=null,l=dn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function Cn(l,d){Ct(l),d=dn(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Rn(l,d){return Ct(l),d=dn(l,d),l.g.has(d)}i.forEach=function(l,d){Ct(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(d,L,E,this)},this)},this)},i.na=function(){Ct(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let E=0;E<d.length;E++){const L=l[E];for(let j=0;j<L.length;j++)g.push(d[E])}return g},i.V=function(l){Ct(this);let d=[];if(typeof l=="string")Rn(this,l)&&(d=d.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},i.set=function(l,d){return Ct(this),this.i=null,l=dn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},i.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Dr(l,d,g){Cn(l,d),0<g.length&&(l.i=null,l.g.set(dn(l,d),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var E=d[g];const j=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var L=j;ee[E]!==""&&(L+="="+encodeURIComponent(String(ee[E]))),l.push(L)}}return this.i=l.join("&")};function dn(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Bn(l,d){d&&!l.j&&(Ct(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(Cn(this,E),Dr(this,L,g))},l)),l.j=d}function Bu(l,d){const g=new yi;if(m.Image){const E=new Image;E.onload=U(qt,g,"TestLoadImage: loaded",!0,d,E),E.onerror=U(qt,g,"TestLoadImage: error",!1,d,E),E.onabort=U(qt,g,"TestLoadImage: abort",!1,d,E),E.ontimeout=U(qt,g,"TestLoadImage: timeout",!1,d,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else d(!1)}function za(l,d){const g=new yi,E=new AbortController,L=setTimeout(()=>{E.abort(),qt(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?qt(g,"TestPingServer: ok",!0,d):qt(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),qt(g,"TestPingServer: error",!1,d)})}function qt(l,d,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function $u(){this.g=new po}function Ba(l,d,g){const E=g||"";try{kr(l,function(L,j){let ee=L;v(L)&&(ee=ho(L)),d.push(E+j+"="+encodeURIComponent(ee))})}catch(L){throw d.push(E+"type="+encodeURIComponent("_badmap")),L}}function ur(l){this.l=l.Ub||null,this.j=l.eb||!1}W(ur,mi),ur.prototype.g=function(){return new Si(this.l,this.j)},ur.prototype.i=(function(l){return function(){return l}})({});function Si(l,d){dt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Si,dt),i=Si.prototype,i.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||m).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$a(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function $a(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?kn(this):Pn(this),this.readyState==3&&$a(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,kn(this))},i.Qa=function(l){this.g&&(this.response=l,kn(this))},i.ga=function(){this.g&&kn(this)};function kn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,d){this.u.append(l,d)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function cr(l){let d="";return ye(l,function(g,E){d+=E,d+=":",d+=g,d+=`\r
`}),d}function Or(l,d,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=cr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Be(l,d,g))}function Xe(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Xe,dt);var Hu=/^https?$/i,So=["POST","PUT"];i=Xe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,d,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?ts(this.o):ts(Sn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(j){Ai(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(So,d,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of g)this.g.setRequestHeader(j,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ds(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Ai(this,j)}};function Ai(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,fs(l),sn(l)}function fs(l){l.A||(l.A=!0,pt(l,"complete"),pt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pt(this,"complete"),pt(this,"abort"),sn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Xe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ao(this):this.bb())},i.bb=function(){Ao(this)};function Ao(l){if(l.h&&typeof f<"u"&&(!l.v[1]||Qt(l)!=4||l.Z()!=2)){if(l.u&&Qt(l)==4)lo(l.Ea,0,l);else if(pt(l,"readystatechange"),Qt(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var E;if(E=ee===0){var L=String(l.D).match(Ti)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Hu.test(L?L.toLowerCase():"")}g=E}if(g)pt(l,"complete"),pt(l,"success");else{l.m=6;try{var j=2<Qt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",fs(l)}}finally{sn(l)}}}}function sn(l,d){if(l.g){ds(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pt(l,"ready");try{g.onreadystatechange=E}catch{}}}function ds(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),fo(d)}};function Co(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ps(l){const d={};l=(l.g&&2<=Qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(K(l[E]))continue;var g=V(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=d[L]||[];d[L]=j,j.push(g)}A(d,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Ro(l){this.Aa=0,this.i=[],this.j=new yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,l),this.cb=$n("retryDelaySeedMs",1e4,l),this.Wa=$n("forwardChannelMaxRetries",2,l),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(l&&l.concurrentRequestLimit),this.Da=new $u,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ro.prototype,i.la=8,i.G=1,i.connect=function(l,d,g,E){it(0),this.W=l,this.H=d||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Qa(this,null,this.W),Hn(this)};function Rt(l){if(ms(l),l.G==3){var d=l.U++,g=rn(l.I);if(Be(g,"SID",l.K),Be(g,"RID",d),Be(g,"TYPE","terminate"),hr(l,g),d=new An(l,l.j,d),d.L=2,d.v=Nr(rn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=d.v,g=!0),g||(d.g=Ka(d.j,null),d.g.ea(d.v)),d.F=Date.now(),He(d)}qa(l)}function xn(l){l.g&&(ko(l),l.g.cancel(),l.g=null)}function ms(l){xn(l),l.u&&(m.clearTimeout(l.u),l.u=null),_s(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Hn(l){if(!nn(l.h)&&!l.s){l.s=!0;var d=l.Ga;Le||oe(),Z||(Le(),Z=!0),de.add(d,l),l.B=0}}function Wu(l,d){return Oa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(R(l.Ga,l,d),Wa(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new An(this,this.j,l);let j=this.o;if(this.S&&(j?(j=T(j),x(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Lr(this,L,d),g=rn(this.I),Be(g,"RID",l),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),hr(this,g),j&&(this.O?d="headers="+encodeURIComponent(String(cr(j)))+"&"+d:this.m&&Or(g,this.m,j)),To(this.h,L),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",d),Be(g,"SID","null"),L.T=!0,ls(L,g,null)):ls(L,g,d),this.G=2}}else this.G==3&&(l?gs(this,l):this.i.length==0||nn(this.h)||gs(this))};function gs(l,d){var g;d?g=d.l:g=l.U++;const E=rn(l.I);Be(E,"SID",l.K),Be(E,"RID",g),Be(E,"AID",l.T),hr(l,E),l.m&&l.o&&Or(E,l.m,l.o),g=new An(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Lr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),To(l.h,g),ls(g,E,d)}function hr(l,d){l.H&&ye(l.H,function(g,E){Be(d,E,g)}),l.l&&kr({},function(g,E){Be(d,E,g)})}function Lr(l,d,g){g=Math.min(l.i.length,g);var E=l.l?R(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const ee=["count="+g];j==-1?0<g?(j=L[0].g,ee.push("ofs="+j)):j=0:ee.push("ofs="+j);let ze=!0;for(let mt=0;mt<g;mt++){let Ne=L[mt].g;const wt=L[mt].map;if(Ne-=j,0>Ne)j=Math.max(0,L[mt].g-100),ze=!1;else try{Ba(wt,ee,"req"+Ne+"_")}catch{E&&E(wt)}}if(ze){E=ee.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,E}function Ci(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Le||oe(),Z||(Le(),Z=!0),de.add(d,l),l.v=0}}function ys(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(R(l.Fa,l),Wa(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(R(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),xn(this),Ha(this))};function ko(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Ha(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=rn(l.qa);Be(d,"RID","rpc"),Be(d,"SID",l.K),Be(d,"AID",l.T),Be(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Be(d,"TO",l.ja),Be(d,"TYPE","xmlhttp"),hr(l,d),l.m&&l.o&&Or(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Nr(rn(d)),g.m=null,g.P=!0,Eo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,xn(this),ys(this),it(19))};function _s(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function vs(l,d){var g=null;if(l.g==d){_s(l),ko(l),l.g=null;var E=2}else if(zt(l.h,d))g=d.D,La(l.h,d),E=1;else return;if(l.G!=0){if(d.o)if(E==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;E=gi(),pt(E,new is(E,g)),Hn(l)}else Ci(l);else if(L=d.s,L==3||L==0&&0<d.X||!(E==1&&Wu(l,d)||E==2&&ys(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:fr(l,5);break;case 4:fr(l,10);break;case 3:fr(l,6);break;default:fr(l,2)}}}function Wa(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function fr(l,d){if(l.j.info("Error code "+d),d==2){var g=R(l.fb,l),E=l.Xa;const L=!E;E=new lr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ii(E,"https"),Nr(E),L?Bu(E.toString(),g):za(E.toString(),g)}else it(2);l.G=0,l.l&&l.l.sa(d),qa(l),ms(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function qa(l){if(l.G=0,l.ka=[],l.l){const d=Ma(l.h);(d.length!=0||l.i.length!=0)&&(z(l.ka,d),z(l.ka,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.ra()}}function Qa(l,d,g){var E=g instanceof lr?rn(g):new lr(g);if(E.g!="")d&&(E.g=d+"."+E.g),Pr(E,E.s);else{var L=m.location;E=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var j=new lr(null);E&&Ii(j,E),d&&(j.g=d),L&&Pr(j,L),g&&(j.l=g),E=j}return g=l.D,d=l.ya,g&&d&&Be(E,g,d),Be(E,"VER",l.la),hr(l,E),E}function Ka(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Xe(new ur({eb:g})):new Xe(l.pa),d.Ha(l.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Po(){}i=Po.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Es(){}Es.prototype.g=function(l,d){return new Bt(l,d)};function Bt(l,d){dt.call(this),this.g=new Ro(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!K(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!K(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Wn(this)}W(Bt,dt),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Rt(this.g)},Bt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=ho(l),l=g);d.i.push(new Da(d.Ya++,l)),d.G==3&&Hn(d)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,Bt.aa.N.call(this)};function Ga(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}W(Ga,Un);function Xa(){rs.call(this),this.status=1}W(Xa,rs);function Wn(l){this.g=l}W(Wn,Po),Wn.prototype.ua=function(){pt(this.g,"a")},Wn.prototype.ta=function(l){pt(this.g,new Ga(l))},Wn.prototype.sa=function(l){pt(this.g,new Xa)},Wn.prototype.ra=function(){pt(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Lg=function(){return new Es},Og=function(){return gi()},Dg=jn,Lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,Yl=os,Pa.COMPLETE="complete",Vg=Pa,ns.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,ta=ns,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Ng=Xe}).apply(typeof Hl<"u"?Hl:typeof self<"u"?self:typeof window<"u"?window:{});const mm="@firebase/firestore",gm="4.8.0";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let eo="11.10.0";/**
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
 */const Wi=new Sg("@firebase/firestore");function Bs(){return Wi.logLevel}function se(i,...e){if(Wi.logLevel<=De.DEBUG){const n=e.map(sf);Wi.debug(`Firestore (${eo}): ${i}`,...n)}}function Ir(i,...e){if(Wi.logLevel<=De.ERROR){const n=e.map(sf);Wi.error(`Firestore (${eo}): ${i}`,...n)}}function ni(i,...e){if(Wi.logLevel<=De.WARN){const n=e.map(sf);Wi.warn(`Firestore (${eo}): ${i}`,...n)}}function sf(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
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
 */function _e(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Mg(i,s,n)}function Mg(i,e,n){let s=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ir(s),new Error(s)}function je(i,e,n,s){let a="Unexpected state";typeof n=="string"?a=n:s=n,i||Mg(e,a,s)}function Te(i,e){return i}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Zs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ei{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ut.UNAUTHENTICATED)))}shutdown(){}}class jE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class zE{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0,42304);let s=this.i;const a=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let c=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new ei,e.enqueueRetryable((()=>a(this.currentUser)))};const f=()=>{const y=c;e.enqueueRetryable((async()=>{await y.promise,await a(this.currentUser)}))},m=y=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new ei)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new bg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class BE{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $E{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new BE(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ym{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HE{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,TE(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){je(this.o===void 0,3512);const s=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,se("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const a=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>a(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ym(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ym(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function Fg(){return new TextEncoder}/**
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
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=WE(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%62))}return s}}function Ae(i,e){return i<e?-1:i>e?1:0}function Mh(i,e){let n=0;for(;n<i.length&&n<e.length;){const s=i.codePointAt(n),a=e.codePointAt(n);if(s!==a){if(s<128&&a<128)return Ae(s,a);{const c=Fg(),f=qE(c.encode(_m(i,n)),c.encode(_m(e,n)));return f!==0?f:Ae(s,a)}}n+=s>65535?2:1}return Ae(i.length,e.length)}function _m(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function qE(i,e){for(let n=0;n<i.length&&n<e.length;++n)if(i[n]!==e[n])return Ae(i[n],e[n]);return Ae(i.length,e.length)}function Ks(i,e,n){return i.length===e.length&&i.every(((s,a)=>n(s,e[a])))}/**
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
 */const vm="__name__";class Xn{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_e(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=Xn.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return Ae(e.length,n.length)}static compareSegments(e,n){const s=Xn.isNumericId(e),a=Xn.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?Xn.extractNumericId(e).compare(Xn.extractNumericId(n)):Mh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class tt extends Xn{construct(e,n,s){return new tt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((a=>a.length>0)))}return new tt(n)}static emptyPath(){return new tt([])}}const QE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Xn{construct(e,n,s){return new Nt(e,n,s)}static isValidIdentifier(e){return QE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vm}static keyField(){return new Nt([vm])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new he(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new he(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(f=!f,a++):m!=="."||f?(s+=m,a++):(c(),a++)}if(c(),f)throw new he(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(tt.fromString(e))}static fromName(e){return new ge(tt.fromString(e).popFirst(5))}static empty(){return new ge(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new tt(e.slice()))}}/**
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
 */function KE(i,e,n){if(!n)throw new he(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function GE(i,e,n,s){if(e===!0&&s===!0)throw new he(q.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Em(i){if(!ge.isDocumentKey(i))throw new he(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ug(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function af(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function lu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=af(i);throw new he(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(i,e){const n={typeString:i};return e&&(n.value=e),n}function Ia(i,e){if(!Ug(i))throw new he(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const a=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const f=i[s];if(a&&typeof f!==a){n=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new he(q.INVALID_ARGUMENT,n);return!0}/**
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
 */const wm=-62135596800,Tm=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Tm);return new Ge(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wm)throw new he(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tm}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ia(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:ct("string",Ge._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ge(0,0))}static max(){return new we(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pa=-1;function XE(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=we.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new ri(a,ge.empty(),e)}function YE(i){return new ri(i.readTime,i.key,pa)}class ri{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ri(we.min(),ge.empty(),pa)}static max(){return new ri(we.max(),ge.empty(),pa)}}function JE(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(i.documentKey,e.documentKey),n!==0?n:Ae(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function to(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==ZE)throw i;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,a)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,s)=>{n(e)}))}static reject(e){return new $(((n,s)=>{s(e)}))}static waitFor(e){return new $(((n,s)=>{let a=0,c=0,f=!1;e.forEach((m=>{++a,m.next((()=>{++c,f&&c===a&&n()}),(y=>s(y)))})),f=!0,c===a&&n()}))}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next((a=>a?$.resolve(a):s()));return n}static forEach(e,n){const s=[];return e.forEach(((a,c)=>{s.push(n.call(this,a,c))})),this.waitFor(s)}static mapArray(e,n){return new $(((s,a)=>{const c=e.length,f=new Array(c);let m=0;for(let y=0;y<c;y++){const v=y;n(e[v]).next((w=>{f[v]=w,++m,m===c&&s(f)}),(w=>a(w)))}}))}static doWhile(e,n){return new $(((s,a)=>{const c=()=>{e()===!0?n().next((()=>{c()}),a):s()};c()}))}}function t1(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function no(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Su{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Su.ue=-1;/**
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
 */const lf=-1;function Au(i){return i==null}function uu(i){return i===0&&1/i==-1/0}function n1(i){return typeof i=="number"&&Number.isInteger(i)&&!uu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const jg="";function r1(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=Im(e)),e=i1(i.get(n),e);return Im(e)}function i1(i,e){let n=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":n+="";break;case jg:n+="";break;default:n+=c}}return n}function Im(i){return i+jg+""}/**
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
 */function Sm(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function ui(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function zg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class nt{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wl(this.root,e,this.comparator,!0)}}class Wl{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??xt.RED,this.left=a??xt.EMPTY,this.right=c??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,c){return new xt(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return xt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,s,a,c){return this}insert(e,n,s){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Am(this.data.getIterator())}getIteratorFrom(e){return new Am(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class Am{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new cn([])}unionWith(e){let n=new vt(Nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Bg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Bg("Invalid base64 string: "+c):c}})(e);return new Dt(n)}static fromUint8Array(e){const n=(function(a){let c="";for(let f=0;f<a.length;++f)c+=String.fromCharCode(a[f]);return c})(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const s1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ii(i){if(je(!!i,39018),typeof i=="string"){let e=0;const n=s1.exec(i);if(je(!!n,46558,{timestamp:i}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function si(i){return typeof i=="string"?Dt.fromBase64String(i):Dt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="server_timestamp",Hg="__type__",Wg="__previous_value__",qg="__local_write_time__";function uf(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hg])===null||n===void 0?void 0:n.stringValue)===$g}function Cu(i){const e=i.mapValue.fields[Wg];return uf(e)?Cu(e):e}function ma(i){const e=ii(i.mapValue.fields[qg].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class o1{constructor(e,n,s,a,c,f,m,y,v,w){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w}}const cu="(default)";class ga{constructor(e,n){this.projectId=e,this.database=n||cu}static empty(){return new ga("","")}get isDefaultDatabase(){return this.database===cu}isEqual(e){return e instanceof ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="__type__",a1="__max__",ql={mapValue:{}},Kg="__vector__",hu="value";function oi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?uf(i)?4:u1(i)?9007199254740991:l1(i)?10:11:_e(28295,{value:i})}function tr(i,e){if(i===e)return!0;const n=oi(i);if(n!==oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ma(i).isEqual(ma(e));case 3:return(function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const f=ii(a.timestampValue),m=ii(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,c){return si(a.bytesValue).isEqual(si(c.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,c){return ot(a.geoPointValue.latitude)===ot(c.geoPointValue.latitude)&&ot(a.geoPointValue.longitude)===ot(c.geoPointValue.longitude)})(i,e);case 2:return(function(a,c){if("integerValue"in a&&"integerValue"in c)return ot(a.integerValue)===ot(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const f=ot(a.doubleValue),m=ot(c.doubleValue);return f===m?uu(f)===uu(m):isNaN(f)&&isNaN(m)}return!1})(i,e);case 9:return Ks(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return(function(a,c){const f=a.mapValue.fields||{},m=c.mapValue.fields||{};if(Sm(f)!==Sm(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!tr(f[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function ya(i,e){return(i.values||[]).find((n=>tr(n,e)))!==void 0}function Gs(i,e){if(i===e)return 0;const n=oi(i),s=oi(e);if(n!==s)return Ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(i.booleanValue,e.booleanValue);case 2:return(function(c,f){const m=ot(c.integerValue||c.doubleValue),y=ot(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Cm(i.timestampValue,e.timestampValue);case 4:return Cm(ma(i),ma(e));case 5:return Mh(i.stringValue,e.stringValue);case 6:return(function(c,f){const m=si(c),y=si(f);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(c,f){const m=c.split("/"),y=f.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Ae(m[v],y[v]);if(w!==0)return w}return Ae(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(c,f){const m=Ae(ot(c.latitude),ot(f.latitude));return m!==0?m:Ae(ot(c.longitude),ot(f.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Rm(i.arrayValue,e.arrayValue);case 10:return(function(c,f){var m,y,v,w;const k=c.fields||{},R=f.fields||{},U=(m=k[hu])===null||m===void 0?void 0:m.arrayValue,W=(y=R[hu])===null||y===void 0?void 0:y.arrayValue,B=Ae(((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0,((w=W==null?void 0:W.values)===null||w===void 0?void 0:w.length)||0);return B!==0?B:Rm(U,W)})(i.mapValue,e.mapValue);case 11:return(function(c,f){if(c===ql.mapValue&&f===ql.mapValue)return 0;if(c===ql.mapValue)return 1;if(f===ql.mapValue)return-1;const m=c.fields||{},y=Object.keys(m),v=f.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let k=0;k<y.length&&k<w.length;++k){const R=Mh(y[k],w[k]);if(R!==0)return R;const U=Gs(m[y[k]],v[w[k]]);if(U!==0)return U}return Ae(y.length,w.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{le:n})}}function Cm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ae(i,e);const n=ii(i),s=ii(e),a=Ae(n.seconds,s.seconds);return a!==0?a:Ae(n.nanos,s.nanos)}function Rm(i,e){const n=i.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const c=Gs(n[a],s[a]);if(c)return c}return Ae(n.length,s.length)}function Xs(i){return bh(i)}function bh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(n){const s=ii(n);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(n){return si(n).toBase64()})(i.bytesValue):"referenceValue"in i?(function(n){return ge.fromName(n).toString()})(i.referenceValue):"geoPointValue"in i?(function(n){return`geo(${n.latitude},${n.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(n){let s="[",a=!0;for(const c of n.values||[])a?a=!1:s+=",",s+=bh(c);return s+"]"})(i.arrayValue):"mapValue"in i?(function(n){const s=Object.keys(n.fields||{}).sort();let a="{",c=!0;for(const f of s)c?c=!1:a+=",",a+=`${f}:${bh(n.fields[f])}`;return a+"}"})(i.mapValue):_e(61005,{value:i})}function Jl(i){switch(oi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cu(i);return e?16+Jl(e):16;case 5:return 2*i.stringValue.length;case 6:return si(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,c)=>a+Jl(c)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return ui(s.fields,((c,f)=>{a+=c.length+Jl(f)})),a})(i.mapValue);default:throw _e(13486,{value:i})}}function Fh(i){return!!i&&"integerValue"in i}function cf(i){return!!i&&"arrayValue"in i}function km(i){return!!i&&"nullValue"in i}function Pm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Zl(i){return!!i&&"mapValue"in i}function l1(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qg])===null||n===void 0?void 0:n.stringValue)===Kg}function oa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ui(i.mapValue.fields,((n,s)=>e.mapValue.fields[n]=oa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(i.arrayValue.values[n]);return e}return Object.assign({},i)}function u1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===a1}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=Nt.emptyPath(),s={},a=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,a),s={},a=[],n=m.popLast()}f?s[m.lastSegment()]=oa(f):a.push(m.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,a)}delete(e){const n=this.field(e.popLast());Zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];Zl(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){ui(n,((a,c)=>e[a]=c));for(const a of s)delete e[a]}clone(){return new tn(oa(this.value))}}function Gg(i){const e=[];return ui(i.fields,((n,s)=>{const a=new Nt([n]);if(Zl(s)){const c=Gg(s.mapValue).fields;if(c.length===0)e.push(a);else for(const f of c)e.push(a.child(f))}else e.push(a)})),new cn(e)}/**
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
 */class jt{constructor(e,n,s,a,c,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(e){return new jt(e,0,we.min(),we.min(),we.min(),tn.empty(),0)}static newFoundDocument(e,n,s,a){return new jt(e,1,n,we.min(),s,a,0)}static newNoDocument(e,n){return new jt(e,2,n,we.min(),we.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,we.min(),we.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fu{constructor(e,n){this.position=e,this.inclusive=n}}function xm(i,e,n){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],f=i.position[a];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=Gs(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!tr(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class du{constructor(e,n="asc"){this.field=e,this.dir=n}}function c1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Xg{}class _t extends Xg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new f1(e,n,s):n==="array-contains"?new m1(e,s):n==="in"?new g1(e,s):n==="not-in"?new y1(e,s):n==="array-contains-any"?new _1(e,s):new _t(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new d1(e,s):new p1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gs(n,this.value)):n!==null&&oi(this.value)===oi(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends Xg{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new nr(e,n)}matches(e){return Yg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Yg(i){return i.op==="and"}function Jg(i){return h1(i)&&Yg(i)}function h1(i){for(const e of i.filters)if(e instanceof nr)return!1;return!0}function Uh(i){if(i instanceof _t)return i.field.canonicalString()+i.op.toString()+Xs(i.value);if(Jg(i))return i.filters.map((e=>Uh(e))).join(",");{const e=i.filters.map((n=>Uh(n))).join(",");return`${i.op}(${e})`}}function Zg(i,e){return i instanceof _t?(function(s,a){return a instanceof _t&&s.op===a.op&&s.field.isEqual(a.field)&&tr(s.value,a.value)})(i,e):i instanceof nr?(function(s,a){return a instanceof nr&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((c,f,m)=>c&&Zg(f,a.filters[m])),!0):!1})(i,e):void _e(19439)}function ey(i){return i instanceof _t?(function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`})(i):i instanceof nr?(function(n){return n.op.toString()+" {"+n.getFilters().map(ey).join(" ,")+"}"})(i):"Filter"}class f1 extends _t{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class d1 extends _t{constructor(e,n){super(e,"in",n),this.keys=ty("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class p1 extends _t{constructor(e,n){super(e,"not-in",n),this.keys=ty("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function ty(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class m1 extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&ya(n.arrayValue,this.value)}}class g1 extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ya(this.value.arrayValue,n)}}class y1 extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ya(this.value.arrayValue,n)}}class _1 extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>ya(this.value.arrayValue,s)))}}/**
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
 */class v1{constructor(e,n=null,s=[],a=[],c=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=f,this.endAt=m,this.Pe=null}}function Vm(i,e=null,n=[],s=[],a=null,c=null,f=null){return new v1(i,e,n,s,a,c,f)}function hf(i){const e=Te(i);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Uh(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),Au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Xs(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Xs(s))).join(",")),e.Pe=n}return e.Pe}function ff(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!c1(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!Zg(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Nm(i.startAt,e.startAt)&&Nm(i.endAt,e.endAt)}function jh(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ru{constructor(e,n=null,s=[],a=[],c=null,f="F",m=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function E1(i,e,n,s,a,c,f,m){return new Ru(i,e,n,s,a,c,f,m)}function df(i){return new Ru(i)}function Dm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function w1(i){return i.collectionGroup!==null}function aa(i){const e=Te(i);if(e.Te===null){e.Te=[];const n=new Set;for(const c of e.explicitOrderBy)e.Te.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new vt(Nt.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Te.push(new du(c,s))})),n.has(Nt.keyField().canonicalString())||e.Te.push(new du(Nt.keyField(),s))}return e.Te}function Yn(i){const e=Te(i);return e.Ie||(e.Ie=T1(e,aa(i))),e.Ie}function T1(i,e){if(i.limitType==="F")return Vm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const c=a.dir==="desc"?"asc":"desc";return new du(a.field,c)}));const n=i.endAt?new fu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new fu(i.startAt.position,i.startAt.inclusive):null;return Vm(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function zh(i,e,n){return new Ru(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function ku(i,e){return ff(Yn(i),Yn(e))&&i.limitType===e.limitType}function ny(i){return`${hf(Yn(i))}|lt:${i.limitType}`}function $s(i){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((a=>ey(a))).join(", ")}]`),Au(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((a=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(a))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((a=>Xs(a))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((a=>Xs(a))).join(",")),`Target(${s})`})(Yn(i))}; limitType=${i.limitType})`}function Pu(i,e){return e.isFoundDocument()&&(function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(i,e)&&(function(s,a){for(const c of aa(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(f,m,y){const v=xm(f,m,y);return f.inclusive?v<=0:v<0})(s.startAt,aa(s),a)||s.endAt&&!(function(f,m,y){const v=xm(f,m,y);return f.inclusive?v>=0:v>0})(s.endAt,aa(s),a))})(i,e)}function I1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ry(i){return(e,n)=>{let s=!1;for(const a of aa(i)){const c=S1(a,e,n);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function S1(i,e,n){const s=i.field.isKeyField()?ge.comparator(e.key,n.key):(function(c,f,m){const y=f.data.field(c),v=m.data.field(c);return y!==null&&v!==null?Gs(y,v):_e(42886)})(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,((n,s)=>{for(const[a,c]of s)e(a,c)}))}isEmpty(){return zg(this.inner)}size(){return this.innerSize}}/**
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
 */const A1=new nt(ge.comparator);function Sr(){return A1}const iy=new nt(ge.comparator);function na(...i){let e=iy;for(const n of i)e=e.insert(n.key,n);return e}function sy(i){let e=iy;return i.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function zi(){return la()}function oy(){return la()}function la(){return new Ki((i=>i.toString()),((i,e)=>i.isEqual(e)))}const C1=new nt(ge.comparator),R1=new vt(ge.comparator);function ke(...i){let e=R1;for(const n of i)e=e.add(n);return e}const k1=new vt(Ae);function P1(){return k1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uu(e)?"-0":e}}function ay(i){return{integerValue:""+i}}function x1(i,e){return n1(e)?ay(e):pf(i,e)}/**
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
 */class xu{constructor(){this._=void 0}}function N1(i,e,n){return i instanceof pu?(function(a,c){const f={fields:{[Hg]:{stringValue:$g},[qg]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&uf(c)&&(c=Cu(c)),c&&(f.fields[Wg]=c),{mapValue:f}})(n,e):i instanceof _a?uy(i,e):i instanceof va?cy(i,e):(function(a,c){const f=ly(a,c),m=Om(f)+Om(a.Ee);return Fh(f)&&Fh(a.Ee)?ay(m):pf(a.serializer,m)})(i,e)}function V1(i,e,n){return i instanceof _a?uy(i,e):i instanceof va?cy(i,e):n}function ly(i,e){return i instanceof mu?(function(s){return Fh(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class pu extends xu{}class _a extends xu{constructor(e){super(),this.elements=e}}function uy(i,e){const n=hy(e);for(const s of i.elements)n.some((a=>tr(a,s)))||n.push(s);return{arrayValue:{values:n}}}class va extends xu{constructor(e){super(),this.elements=e}}function cy(i,e){let n=hy(e);for(const s of i.elements)n=n.filter((a=>!tr(a,s)));return{arrayValue:{values:n}}}class mu extends xu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Om(i){return ot(i.integerValue||i.doubleValue)}function hy(i){return cf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function D1(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof _a&&a instanceof _a||s instanceof va&&a instanceof va?Ks(s.elements,a.elements,tr):s instanceof mu&&a instanceof mu?tr(s.Ee,a.Ee):s instanceof pu&&a instanceof pu})(i.transform,e.transform)}class O1{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Nu{}function fy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new mf(i.key,bn.none()):new Sa(i.key,i.data,bn.none());{const n=i.data,s=tn.empty();let a=new vt(Nt.comparator);for(let c of e.fields)if(!a.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),a=a.add(c)}return new ci(i.key,s,new cn(a.toArray()),bn.none())}}function L1(i,e,n){i instanceof Sa?(function(a,c,f){const m=a.value.clone(),y=Mm(a.fieldTransforms,c,f.transformResults);m.setAll(y),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(i,e,n):i instanceof ci?(function(a,c,f){if(!eu(a.precondition,c))return void c.convertToUnknownDocument(f.version);const m=Mm(a.fieldTransforms,c,f.transformResults),y=c.data;y.setAll(dy(a)),y.setAll(m),c.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(i,e,n):(function(a,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function ua(i,e,n,s){return i instanceof Sa?(function(c,f,m,y){if(!eu(c.precondition,f))return m;const v=c.value.clone(),w=bm(c.fieldTransforms,y,f);return v.setAll(w),f.convertToFoundDocument(f.version,v).setHasLocalMutations(),null})(i,e,n,s):i instanceof ci?(function(c,f,m,y){if(!eu(c.precondition,f))return m;const v=bm(c.fieldTransforms,y,f),w=f.data;return w.setAll(dy(c)),w.setAll(v),f.convertToFoundDocument(f.version,w).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((k=>k.field)))})(i,e,n,s):(function(c,f,m){return eu(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(i,e,n)}function M1(i,e){let n=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=ly(s.transform,a||null);c!=null&&(n===null&&(n=tn.empty()),n.set(s.field,c))}return n||null}function Lm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ks(s,a,((c,f)=>D1(c,f)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Sa extends Nu{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ci extends Nu{constructor(e,n,s,a,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function dy(i){const e=new Map;return i.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}})),e}function Mm(i,e,n){const s=new Map;je(i.length===n.length,32656,{Ae:n.length,Re:i.length});for(let a=0;a<n.length;a++){const c=i[a],f=c.transform,m=e.data.field(c.field);s.set(c.field,V1(f,m,n[a]))}return s}function bm(i,e,n){const s=new Map;for(const a of i){const c=a.transform,f=n.data.field(a.field);s.set(a.field,N1(c,f,e))}return s}class mf extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b1 extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class F1{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&L1(c,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ua(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ua(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=oy();return this.mutations.forEach((a=>{const c=e.get(a.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=n.has(a.key)?null:m;const y=fy(f,m);y!==null&&s.set(a.key,y),f.isValidDocument()||f.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ke())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,((n,s)=>Lm(n,s)))&&Ks(this.baseMutations,e.baseMutations,((n,s)=>Lm(n,s)))}}class gf{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){je(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=(function(){return C1})();const c=e.mutations;for(let f=0;f<c.length;f++)a=a.insert(c[f].key,s[f].version);return new gf(e,n,s,a)}}/**
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
 */class U1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class j1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ut,Ve;function z1(i){switch(i){case q.OK:return _e(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function py(i){if(i===void 0)return Ir("GRPC error has no .code"),q.UNKNOWN;switch(i){case ut.OK:return q.OK;case ut.CANCELLED:return q.CANCELLED;case ut.UNKNOWN:return q.UNKNOWN;case ut.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ut.INTERNAL:return q.INTERNAL;case ut.UNAVAILABLE:return q.UNAVAILABLE;case ut.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ut.NOT_FOUND:return q.NOT_FOUND;case ut.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ut.ABORTED:return q.ABORTED;case ut.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ut.DATA_LOSS:return q.DATA_LOSS;default:return _e(39323,{code:i})}}(Ve=ut||(ut={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const B1=new Zr([4294967295,4294967295],0);function Fm(i){const e=Fg().encode(i),n=new xg;return n.update(e),new Uint8Array(n.digest())}function Um(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Zr([n,s],0),new Zr([a,c],0)]}class yf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(s<0)throw new ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Zr.fromNumber(this.fe)}pe(e,n,s){let a=e.add(n.multiply(Zr.fromNumber(s)));return a.compare(B1)===1&&(a=new Zr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Fm(e),[s,a]=Um(n);for(let c=0;c<this.hashCount;c++){const f=this.pe(s,a,c);if(!this.ye(f))return!1}return!0}static create(e,n,s){const a=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),f=new yf(c,a,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.fe===0)return;const n=Fm(e),[s,a]=Um(n);for(let c=0;c<this.hashCount;c++){const f=this.pe(s,a,c);this.we(f)}}we(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vu{constructor(e,n,s,a,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const a=new Map;return a.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Vu(we.min(),a,new nt(Ae),Sr(),ke())}}class Aa{constructor(e,n,s,a,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Aa(s,n,ke(),ke(),ke())}}/**
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
 */class tu{constructor(e,n,s,a){this.Se=e,this.removedTargetIds=n,this.key=s,this.be=a}}class my{constructor(e,n){this.targetId=e,this.De=n}}class gy{constructor(e,n,s=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=a}}class jm{constructor(){this.ve=0,this.Ce=zm(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),n=ke(),s=ke();return this.Ce.forEach(((a,c)=>{switch(c){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:s=s.add(a);break;default:_e(38017,{changeType:c})}})),new Aa(this.Fe,this.Me,e,n,s)}ke(){this.xe=!1,this.Ce=zm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class $1{constructor(e){this.We=e,this.Ge=new Map,this.ze=Sr(),this.je=Ql(),this.Je=Ql(),this.He=new nt(Ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const s=this.tt(n);switch(e.state){case 0:this.nt(n)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((s,a)=>{this.nt(a)&&n(a)}))}it(e){const n=e.targetId,s=e.De.count,a=this.st(n);if(a){const c=a.target;if(jh(c))if(s===0){const f=new ge(c.path);this.Xe(n,f,jt.newNoDocument(f,we.min()))}else je(s===1,20013,{expectedCount:s});else{const f=this.ot(n);if(f!==s){const m=this._t(e),y=m?this.ut(m,e,f):1;if(y!==0){this.rt(n);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,v)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:c=0}=n;let f,m;try{f=si(s).toUint8Array()}catch(y){if(y instanceof Bg)return ni("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new yf(f,a,c)}catch(y){return ni(y instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.fe===0?null:m}ut(e,n,s){return n.De.count===s-this.ht(e,n.targetId)?0:2}ht(e,n){const s=this.We.getRemoteKeysForTarget(n);let a=0;return s.forEach((c=>{const f=this.We.lt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.Xe(n,c,null),a++)})),a}Pt(e){const n=new Map;this.Ge.forEach(((c,f)=>{const m=this.st(f);if(m){if(c.current&&jh(m.target)){const y=new ge(m.target.path);this.Tt(y).has(f)||this.It(f,y)||this.Xe(f,y,jt.newNoDocument(y,e))}c.Ne&&(n.set(f,c.Le()),c.ke())}}));let s=ke();this.Je.forEach(((c,f)=>{let m=!0;f.forEachWhile((y=>{const v=this.st(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(c))})),this.ze.forEach(((c,f)=>f.setReadTime(e)));const a=new Vu(e,n,this.He,this.ze,s);return this.ze=Sr(),this.je=Ql(),this.Je=Ql(),this.He=new nt(Ae),a}Ze(e,n){if(!this.nt(e))return;const s=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,n)?a.qe(n,1):a.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new jm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new vt(Ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new vt(Ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new jm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ql(){return new nt(ge.comparator)}function zm(){return new nt(ge.comparator)}const H1={asc:"ASCENDING",desc:"DESCENDING"},W1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},q1={and:"AND",or:"OR"};class Q1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(i,e){return i.useProto3Json||Au(e)?e:{value:e}}function gu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function K1(i,e){return gu(i,e.toTimestamp())}function Jn(i){return je(!!i,49232),we.fromTimestamp((function(n){const s=ii(n);return new Ge(s.seconds,s.nanos)})(i))}function _f(i,e){return $h(i,e).canonicalString()}function $h(i,e){const n=(function(a){return new tt(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?n:n.child(e)}function _y(i){const e=tt.fromString(i);return je(Iy(e),10190,{key:e.toString()}),e}function Hh(i,e){return _f(i.databaseId,e.path)}function Eh(i,e){const n=_y(e);if(n.get(1)!==i.databaseId.projectId)throw new he(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new he(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new ge(Ey(n))}function vy(i,e){return _f(i.databaseId,e)}function G1(i){const e=_y(i);return e.length===4?tt.emptyPath():Ey(e)}function Wh(i){return new tt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Ey(i){return je(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Bm(i,e,n){return{name:Hh(i,e),fields:n.value.mapValue.fields}}function X1(i,e){let n;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],c=(function(v,w){return v.useProto3Json?(je(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(v){const w=v.code===void 0?q.UNKNOWN:py(v.code);return new he(w,v.message||"")})(f);n=new gy(s,a,c,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Eh(i,s.document.name),c=Jn(s.document.updateTime),f=s.document.createTime?Jn(s.document.createTime):we.min(),m=new tn({mapValue:{fields:s.document.fields}}),y=jt.newFoundDocument(a,c,f,m),v=s.targetIds||[],w=s.removedTargetIds||[];n=new tu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Eh(i,s.document),c=s.readTime?Jn(s.readTime):we.min(),f=jt.newNoDocument(a,c),m=s.removedTargetIds||[];n=new tu([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Eh(i,s.document),c=s.removedTargetIds||[];n=new tu([],c,a,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:c}=s,f=new j1(a,c),m=s.targetId;n=new my(m,f)}}return n}function Y1(i,e){let n;if(e instanceof Sa)n={update:Bm(i,e.key,e.value)};else if(e instanceof mf)n={delete:Hh(i,e.key)};else if(e instanceof ci)n={update:Bm(i,e.key,e.data),updateMask:ow(e.fieldMask)};else{if(!(e instanceof b1))return _e(16599,{Rt:e.type});n={verify:Hh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,f){const m=f.transform;if(m instanceof pu)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof _a)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof va)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof mu)return{fieldPath:f.field.canonicalString(),increment:m.Ee};throw _e(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(a,c){return c.updateTime!==void 0?{updateTime:K1(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:_e(27497)})(i,e.precondition)),n}function J1(i,e){return i&&i.length>0?(je(e!==void 0,14353),i.map((n=>(function(a,c){let f=a.updateTime?Jn(a.updateTime):Jn(c);return f.isEqual(we.min())&&(f=Jn(c)),new O1(f,a.transformResults||[])})(n,e)))):[]}function Z1(i,e){return{documents:[vy(i,e.path)]}}function ew(i,e){const n={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=vy(i,a);const c=(function(v){if(v.length!==0)return Ty(nr.create(v,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const f=(function(v){if(v.length!==0)return v.map((w=>(function(R){return{field:Hs(R.field),direction:rw(R.dir)}})(w)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Bh(i,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:n,parent:a}}function tw(i){let e=G1(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){je(s===1,65062);const w=n.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let c=[];n.where&&(c=(function(k){const R=wy(k);return R instanceof nr&&Jg(R)?R.getFilters():[R]})(n.where));let f=[];n.orderBy&&(f=(function(k){return k.map((R=>(function(W){return new du(Ws(W.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(R)))})(n.orderBy));let m=null;n.limit&&(m=(function(k){let R;return R=typeof k=="object"?k.value:k,Au(R)?null:R})(n.limit));let y=null;n.startAt&&(y=(function(k){const R=!!k.before,U=k.values||[];return new fu(U,R)})(n.startAt));let v=null;return n.endAt&&(v=(function(k){const R=!k.before,U=k.values||[];return new fu(U,R)})(n.endAt)),E1(e,a,f,c,m,"F",y,v)}function nw(i,e){const n=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:a})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wy(i){return i.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ws(n.unaryFilter.field);return _t.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ws(n.unaryFilter.field);return _t.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Ws(n.unaryFilter.field);return _t.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ws(n.unaryFilter.field);return _t.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(n){return _t.create(Ws(n.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(n){return nr.create(n.compositeFilter.filters.map((s=>wy(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(n.compositeFilter.op))})(i):_e(30097,{filter:i})}function rw(i){return H1[i]}function iw(i){return W1[i]}function sw(i){return q1[i]}function Hs(i){return{fieldPath:i.canonicalString()}}function Ws(i){return Nt.fromServerFormat(i.fieldPath)}function Ty(i){return i instanceof _t?(function(n){if(n.op==="=="){if(Pm(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NAN"}};if(km(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pm(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NAN"}};if(km(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(n.field),op:iw(n.op),value:n.value}}})(i):i instanceof nr?(function(n){const s=n.getFilters().map((a=>Ty(a)));return s.length===1?s[0]:{compositeFilter:{op:sw(n.op),filters:s}}})(i):_e(54877,{filter:i})}function ow(i){const e=[];return i.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Iy(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Xr{constructor(e,n,s,a,c=we.min(),f=we.min(),m=Dt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aw{constructor(e){this.gt=e}}function lw(i){const e=tw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
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
 */class uw{constructor(){this.Dn=new cw}addToCollectionParentIndex(e,n){return this.Dn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ri.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class cw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new vt(tt.comparator),c=!a.has(s);return this.index[n]=a.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new vt(tt.comparator)).toArray()}}/**
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
 */const $m={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sy=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Sy,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class Ys{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ys(0)}static ur(){return new Ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="LruGarbageCollector",hw=1048576;function Wm([i,e],[n,s]){const a=Ae(i,n);return a===0?Ae(e,s):a}class fw{constructor(e){this.Tr=e,this.buffer=new vt(Wm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Wm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dw{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Hm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){no(n)?se(Hm,"Ignoring IndexedDB error during garbage collection: ",n):await to(n)}await this.Rr(3e5)}))}}class pw{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Su.ue);const s=new fw(n);return this.Vr.forEachTarget(e,(a=>s.Er(a.sequenceNumber))).next((()=>this.Vr.gr(e,(a=>s.Er(a))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve($m)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$m):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,a,c,f,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),a=this.params.maximumSequenceNumbersToCollect):a=k,f=Date.now(),this.nthSequenceNumber(e,a)))).next((k=>(s=k,m=Date.now(),this.removeTargets(e,s,n)))).next((k=>(c=k,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((k=>(v=Date.now(),Bs()<=De.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-w}ms
	Determined least recently used ${a} in `+(m-f)+`ms
	Removed ${c} targets in `+(y-m)+`ms
	Removed ${k} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:k}))))}}function mw(i,e){return new pw(i,e)}/**
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
 */class gw{constructor(){this.changes=new Ki((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _w{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,n)))).next((a=>(s!==null&&ua(s.mutation,a,cn.empty(),Ge.now()),a)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=ke()){const a=zi();return this.populateOverlays(e,a,n).next((()=>this.computeViews(e,n,a,s).next((c=>{let f=na();return c.forEach(((m,y)=>{f=f.insert(m,y.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=zi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,ke())))}populateOverlays(e,n,s){const a=[];return s.forEach((c=>{n.has(c)||a.push(c)})),this.documentOverlayCache.getOverlays(e,a).next((c=>{c.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,a){let c=Sr();const f=la(),m=(function(){return la()})();return n.forEach(((y,v)=>{const w=s.get(v.key);a.has(v.key)&&(w===void 0||w.mutation instanceof ci)?c=c.insert(v.key,v):w!==void 0?(f.set(v.key,w.mutation.getFieldMask()),ua(w.mutation,v,w.mutation.getFieldMask(),Ge.now())):f.set(v.key,cn.empty())})),this.recalculateAndSaveOverlays(e,c).next((y=>(y.forEach(((v,w)=>f.set(v,w))),n.forEach(((v,w)=>{var k;return m.set(v,new yw(w,(k=f.get(v))!==null&&k!==void 0?k:null))})),m)))}recalculateAndSaveOverlays(e,n){const s=la();let a=new nt(((f,m)=>f-m)),c=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((y=>{const v=n.get(y);if(v===null)return;let w=s.get(y)||cn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const k=(a.get(m.batchId)||ke()).add(y);a=a.insert(m.batchId,k)}))})).next((()=>{const f=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,k=oy();w.forEach((R=>{if(!c.has(R)){const U=fy(n.get(R),s.get(R));U!==null&&k.set(R,U),c=c.add(R)}})),f.push(this.documentOverlayCache.saveOverlays(e,v,k))}return $.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,a){return(function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):w1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next((c=>{const f=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-c.size):$.resolve(zi());let m=pa,y=c;return f.next((v=>$.forEach(v,((w,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),c.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((R=>{y=y.insert(w,R)}))))).next((()=>this.populateOverlays(e,v,c))).next((()=>this.computeViews(e,y,v,ke()))).next((w=>({batchId:m,changes:sy(w)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next((s=>{let a=na();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const c=n.collectionGroup;let f=na();return this.indexManager.getCollectionParents(e,c).next((m=>$.forEach(m,(y=>{const v=(function(k,R){return new Ru(R,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(n,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next((w=>{w.forEach(((k,R)=>{f=f.insert(k,R)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,a)))).next((f=>{c.forEach(((y,v)=>{const w=v.getKey();f.get(w)===null&&(f=f.insert(w,jt.newInvalidDocument(w)))}));let m=na();return f.forEach(((y,v)=>{const w=c.get(y);w!==void 0&&ua(w.mutation,v,cn.empty(),Ge.now()),Pu(n,v)&&(m=m.insert(y,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return $.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(a){return{id:a.id,version:a.version,createTime:Jn(a.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(a){return{name:a.name,query:lw(a.bundledQuery),readTime:Jn(a.readTime)}})(n)),$.resolve()}}/**
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
 */class Ew{constructor(){this.overlays=new nt(ge.comparator),this.kr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zi();return $.forEach(n,(a=>this.getOverlay(e,a).next((c=>{c!==null&&s.set(a,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((a,c)=>{this.wt(e,n,c)})),$.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach((c=>this.overlays=this.overlays.remove(c))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const a=zi(),c=n.length+1,f=new ge(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!n.isPrefixOf(v.path))break;v.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return $.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let c=new nt(((v,w)=>v-w));const f=this.overlays.getIterator();for(;f.hasNext();){const v=f.getNext().value;if(v.getKey().getCollectionGroup()===n&&v.largestBatchId>s){let w=c.get(v.largestBatchId);w===null&&(w=zi(),c=c.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=zi(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=a)););return $.resolve(m)}wt(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const f=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new U1(n,s));let c=this.kr.get(n);c===void 0&&(c=ke(),this.kr.set(n,c)),this.kr.set(n,c.add(s.key))}}/**
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
 */class ww{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class vf{constructor(){this.qr=new vt(At.Qr),this.$r=new vt(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new At(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new At(e,n))}Gr(e,n){e.forEach((s=>this.removeReference(s,n)))}zr(e){const n=new ge(new tt([])),s=new At(n,e),a=new At(n,e+1),c=[];return this.$r.forEachInRange([s,a],(f=>{this.Wr(f),c.push(f.key)})),c}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ge(new tt([])),s=new At(n,e),a=new At(n,e+1);let c=ke();return this.$r.forEachInRange([s,a],(f=>{c=c.add(f.key)})),c}containsKey(e){const n=new At(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ge.comparator(e.key,n.key)||Ae(e.Hr,n.Hr)}static Ur(e,n){return Ae(e.Hr,n.Hr)||ge.comparator(e.key,n.key)}}/**
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
 */class Tw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new vt(At.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const c=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new F1(c,n,s,a);this.mutationQueue.push(f);for(const m of a)this.Yr=this.Yr.add(new At(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(f)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.Xr(s),c=a<0?0:a;return $.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?lf:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new At(n,0),a=new At(n,Number.POSITIVE_INFINITY),c=[];return this.Yr.forEachInRange([s,a],(f=>{const m=this.Zr(f.Hr);c.push(m)})),$.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new vt(Ae);return n.forEach((a=>{const c=new At(a,0),f=new At(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([c,f],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const f=new At(new ge(c),0);let m=new vt(Ae);return this.Yr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.Hr)),!0)}),f),$.resolve(this.ei(m))}ei(e){const n=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&n.push(a)})),n}removeMutationBatch(e,n){je(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(n.mutations,(a=>{const c=new At(a.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,n){const s=new At(n,0),a=this.Yr.firstAfterOrEqual(s);return $.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Iw{constructor(e){this.ni=e,this.docs=(function(){return new nt(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),c=a?a.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let s=Sr();return n.forEach((a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():jt.newInvalidDocument(a))})),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let c=Sr();const f=n.path,m=new ge(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!f.isPrefixOf(v.path))break;v.path.length>f.length+1||JE(YE(w),s)<=0||(a.has(w.key)||Pu(n,w))&&(c=c.insert(w.key,w.mutableCopy()))}return $.resolve(c)}getAllFromCollectionGroup(e,n,s,a){_e(9500)}ri(e,n){return $.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new Sw(this)}getSize(e){return $.resolve(this.size)}}class Sw extends gw{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?n.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)})),$.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class Aw{constructor(e){this.persistence=e,this.ii=new Ki((n=>hf(n)),ff),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new vf,this.targetCount=0,this._i=Ys.ar()}forEachTarget(e,n){return this.ii.forEach(((s,a)=>n(a))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),$.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.hr(n),$.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let a=0;const c=[];return this.ii.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ii.delete(f),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),$.waitFor(c).next((()=>a))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const a=this.persistence.referenceDelegate,c=[];return a&&n.forEach((f=>{c.push(a.markPotentiallyOrphaned(e,f))})),$.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.oi.containsKey(n))}}/**
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
 */class Ay{constructor(e,n){this.ai={},this.overlays={},this.ui=new Su(0),this.ci=!1,this.ci=!0,this.li=new ww,this.referenceDelegate=e(this),this.hi=new Aw(this),this.indexManager=new uw,this.remoteDocumentCache=(function(a){return new Iw(a)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new aw(n),this.Ti=new vw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ew,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new Tw(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){se("MemoryPersistence","Starting transaction:",e);const a=new Cw(this.ui.next());return this.referenceDelegate.Ii(),s(a).next((c=>this.referenceDelegate.di(a).next((()=>c)))).toPromise().then((c=>(a.raiseOnCommittedEvent(),c)))}Ei(e,n){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,n))))}}class Cw extends e1{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Ai=new vf,this.Ri=null}static Vi(e){return new Ef(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((a=>this.mi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((a=>{a.forEach((c=>this.mi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const a=ge.fromPath(s);return this.fi(e,a).next((c=>{c||n.removeEntry(a,we.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return $.or([()=>$.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class yu{constructor(e,n){this.persistence=e,this.gi=new Ki((s=>r1(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=mw(this,n)}static Vi(e,n){return new yu(e,n)}Ii(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((a=>s+a))))}yr(e){let n=0;return this.gr(e,(s=>{n++})).next((()=>n))}gr(e,n){return $.forEach(this.gi,((s,a)=>this.Sr(e,s,a).next((c=>c?$.resolve():n(a)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.ri(e,(f=>this.Sr(e,f,n).next((m=>{m||(s++,c.removeEntry(f,we.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Jl(e.data.value)),n}Sr(e,n,s){return $.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.gi.get(n);return $.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wf{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=a}static Es(e,n){let s=ke(),a=ke();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new wf(e,n.fromCache,s,a)}}/**
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
 */class Rw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return v0()?8:t1(y0())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,a){const c={result:null};return this.ps(e,n).next((f=>{c.result=f})).next((()=>{if(!c.result)return this.ys(e,n,a,s).next((f=>{c.result=f}))})).next((()=>{if(c.result)return;const f=new Rw;return this.ws(e,n,f).next((m=>{if(c.result=m,this.Rs)return this.Ss(e,n,f,m.size)}))})).next((()=>c.result))}Ss(e,n,s,a){return s.documentReadCount<this.Vs?(Bs()<=De.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",$s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Bs()<=De.DEBUG&&se("QueryEngine","Query:",$s(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(Bs()<=De.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",$s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):$.resolve())}ps(e,n){if(Dm(n))return $.resolve(null);let s=Yn(n);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(n.limit!==null&&a===1&&(n=zh(n,null,"F"),s=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const f=ke(...c);return this.gs.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.bs(n,m);return this.Ds(n,v,f,y.readTime)?this.ps(e,zh(n,null,"F")):this.vs(e,v,n,y)}))))})))))}ys(e,n,s,a){return Dm(n)||a.isEqual(we.min())?$.resolve(null):this.gs.getDocuments(e,s).next((c=>{const f=this.bs(n,c);return this.Ds(n,f,s,a)?$.resolve(null):(Bs()<=De.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),$s(n)),this.vs(e,f,n,XE(a,pa)).next((m=>m)))}))}bs(e,n){let s=new vt(ry(e));return n.forEach(((a,c)=>{Pu(e,c)&&(s=s.add(c))})),s}Ds(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}ws(e,n,s){return Bs()<=De.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",$s(n)),this.gs.getDocumentsMatchingQuery(e,n,ri.min(),s)}vs(e,n,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next((c=>(n.forEach((f=>{c=c.insert(f.key,f)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="LocalStore",Pw=3e8;class xw{constructor(e,n,s,a){this.persistence=e,this.Cs=n,this.serializer=a,this.Fs=new nt(Ae),this.Ms=new Ki((c=>hf(c)),ff),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _w(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function Nw(i,e,n,s){return new xw(i,e,n,s)}async function Cy(i,e){const n=Te(i);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next((c=>(a=c,n.Ns(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const f=[],m=[];let y=ke();for(const v of a){f.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of c){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return n.localDocuments.getDocuments(s,y).next((v=>({Bs:v,removedBatchIds:f,addedBatchIds:m})))}))}))}function Vw(i,e){const n=Te(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),c=n.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,w){const k=v.batch,R=k.keys();let U=$.resolve();return R.forEach((W=>{U=U.next((()=>w.getEntry(y,W))).next((B=>{const z=v.docVersions.get(W);je(z!==null,48541),B.version.compareTo(z)<0&&(k.applyToRemoteDocument(B,v),B.isValidDocument()&&(B.setReadTime(v.commitVersion),w.addEntry(B)))}))})),U.next((()=>m.mutationQueue.removeMutationBatch(y,k)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=ke();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>n.localDocuments.getDocuments(s,a)))}))}function Ry(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function Dw(i,e){const n=Te(i),s=e.snapshotVersion;let a=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const f=n.Os.newChangeBuffer({trackRemovals:!0});a=n.Fs;const m=[];e.targetChanges.forEach(((w,k)=>{const R=a.get(k);if(!R)return;m.push(n.hi.removeMatchingKeys(c,w.removedDocuments,k).next((()=>n.hi.addMatchingKeys(c,w.addedDocuments,k))));let U=R.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(k)!==null?U=U.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),a=a.insert(k,U),(function(B,z,ne){return B.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Pw?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(R,U,w)&&m.push(n.hi.updateTargetData(c,U))}));let y=Sr(),v=ke();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(c,w))})),m.push(Ow(c,f,e.documentUpdates).next((w=>{y=w.Ls,v=w.ks}))),!s.isEqual(we.min())){const w=n.hi.getLastRemoteSnapshotVersion(c).next((k=>n.hi.setTargetsMetadata(c,c.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>f.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,y,v))).next((()=>y))})).then((c=>(n.Fs=a,c)))}function Ow(i,e,n){let s=ke(),a=ke();return n.forEach((c=>s=s.add(c))),e.getEntries(i,s).next((c=>{let f=Sr();return n.forEach(((m,y)=>{const v=c.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(we.min())?(e.removeEntry(m,y.readTime),f=f.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),f=f.insert(m,y)):se(Tf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Ls:f,ks:a}}))}function Lw(i,e){const n=Te(i);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=lf),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Mw(i,e){const n=Te(i);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return n.hi.getTargetData(s,e).next((c=>c?(a=c,$.resolve(a)):n.hi.allocateTargetId(s).next((f=>(a=new Xr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=n.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(e,s.targetId)),s}))}async function qh(i,e,n){const s=Te(i),a=s.Fs.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(f=>s.persistence.referenceDelegate.removeTarget(f,a)))}catch(f){if(!no(f))throw f;se(Tf,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function qm(i,e,n){const s=Te(i);let a=we.min(),c=ke();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,v,w){const k=Te(y),R=k.Ms.get(w);return R!==void 0?$.resolve(k.Fs.get(R)):k.hi.getTargetData(v,w)})(s,f,Yn(e)).next((m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(f,m.targetId).next((y=>{c=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,e,n?a:we.min(),n?c:ke()))).next((m=>(bw(s,I1(e),m),{documents:m,qs:c})))))}function bw(i,e,n){let s=i.xs.get(e)||we.min();n.forEach(((a,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),i.xs.set(e,s)}class Qm{constructor(){this.activeTargetIds=P1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fw{constructor(){this.Fo=new Qm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Qm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Uw{xo(e){}shutdown(){}}/**
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
 */const Km="ConnectivityMonitor";class Gm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(Km,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(Km,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kl=null;function Qh(){return Kl===null?Kl=(function(){return 268435456+Math.round(2147483648*Math.random())})():Kl++,"0x"+Kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="RestConnection",jw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===cu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,n,s,a,c){const f=Qh(),m=this.Go(e,n.toUriEncodedString());se(wh,`Sending RPC '${e}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,a,c);const{host:v}=new URL(m),w=nf(v);return this.jo(e,m,y,s,w).then((k=>(se(wh,`Received RPC '${e}' ${f}: `,k),k)),(k=>{throw ni(wh,`RPC '${e}' ${f} failed with error: `,k,"url: ",m,"request:",s),k}))}Jo(e,n,s,a,c,f){return this.Wo(e,n,s,a,c)}zo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+eo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((a,c)=>e[c]=a)),s&&s.headers.forEach(((a,c)=>e[c]=a))}Go(e,n){const s=jw[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
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
 */class Bw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ft="WebChannelConnection";class $w extends zw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,a,c){const f=Qh();return new Promise(((m,y)=>{const v=new Ng;v.setWithCredentials(!0),v.listenOnce(Vg.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Yl.NO_ERROR:const k=v.getResponseJson();se(Ft,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(k)),m(k);break;case Yl.TIMEOUT:se(Ft,`RPC '${e}' ${f} timed out`),y(new he(q.DEADLINE_EXCEEDED,"Request time out"));break;case Yl.HTTP_ERROR:const R=v.getStatus();if(se(Ft,`RPC '${e}' ${f} failed with status:`,R,"response text:",v.getResponseText()),R>0){let U=v.getResponseJson();Array.isArray(U)&&(U=U[0]);const W=U==null?void 0:U.error;if(W&&W.status&&W.message){const B=(function(ne){const K=ne.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(K)>=0?K:q.UNKNOWN})(W.status);y(new he(B,W.message))}else y(new he(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new he(q.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:f,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{se(Ft,`RPC '${e}' ${f} completed.`)}}));const w=JSON.stringify(a);se(Ft,`RPC '${e}' ${f} sending request:`,a),v.send(n,"POST",w,s,15)}))}P_(e,n,s){const a=Qh(),c=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=Lg(),m=Og(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const w=c.join("");se(Ft,`Creating RPC '${e}' stream ${a}: ${w}`,y);const k=f.createWebChannel(w,y);this.T_(k);let R=!1,U=!1;const W=new Bw({Ho:z=>{U?se(Ft,`Not sending because RPC '${e}' stream ${a} is closed:`,z):(R||(se(Ft,`Opening RPC '${e}' stream ${a} transport.`),k.open(),R=!0),se(Ft,`RPC '${e}' stream ${a} sending:`,z),k.send(z))},Yo:()=>k.close()}),B=(z,ne,K)=>{z.listen(ne,(Y=>{try{K(Y)}catch(te){setTimeout((()=>{throw te}),0)}}))};return B(k,ta.EventType.OPEN,(()=>{U||(se(Ft,`RPC '${e}' stream ${a} transport opened.`),W.s_())})),B(k,ta.EventType.CLOSE,(()=>{U||(U=!0,se(Ft,`RPC '${e}' stream ${a} transport closed`),W.__(),this.I_(k))})),B(k,ta.EventType.ERROR,(z=>{U||(U=!0,ni(Ft,`RPC '${e}' stream ${a} transport errored. Name:`,z.name,"Message:",z.message),W.__(new he(q.UNAVAILABLE,"The operation could not be completed")))})),B(k,ta.EventType.MESSAGE,(z=>{var ne;if(!U){const K=z.data[0];je(!!K,16349);const Y=K,te=(Y==null?void 0:Y.error)||((ne=Y[0])===null||ne===void 0?void 0:ne.error);if(te){se(Ft,`RPC '${e}' stream ${a} received error:`,te);const Ee=te.status;let ye=(function(C){const x=ut[C];if(x!==void 0)return py(x)})(Ee),A=te.message;ye===void 0&&(ye=q.INTERNAL,A="Unknown error status: "+Ee+" with message "+te.message),U=!0,W.__(new he(ye,A)),k.close()}else se(Ft,`RPC '${e}' stream ${a} received:`,K),W.a_(K)}})),B(m,Dg.STAT_EVENT,(z=>{z.stat===Lh.PROXY?se(Ft,`RPC '${e}' stream ${a} detected buffering proxy`):z.stat===Lh.NOPROXY&&se(Ft,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{W.o_()}),0),W}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(i){return new Q1(i,!0)}/**
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
 */class ky{constructor(e,n,s=1e3,a=1.5,c=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=a,this.A_=c,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,n-s);a>0&&se("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Xm="PersistentStream";class Py{constructor(e,n,s,a,c,f,m,y){this.Fi=e,this.w_=s,this.S_=a,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ky(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.b_===n&&this.W_(s,a)}),(s=>{e((()=>{const a=new he(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)}))}))}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((a=>{s((()=>this.G_(a)))})),this.stream.onMessage((a=>{s((()=>++this.C_==1?this.j_(a):this.onNext(a)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(Xm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(se(Xm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hw extends Py{constructor(e,n,s,a,c,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,a,f),this.serializer=c}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=X1(this.serializer,e),s=(function(c){if(!("targetChange"in c))return we.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?we.min():f.readTime?Jn(f.readTime):we.min()})(e);return this.listener.J_(n,s)}H_(e){const n={};n.database=Wh(this.serializer),n.addTarget=(function(c,f){let m;const y=f.target;if(m=jh(y)?{documents:Z1(c,y)}:{query:ew(c,y).Vt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=yy(c,f.resumeToken);const v=Bh(c,f.expectedCount);v!==null&&(m.expectedCount=v)}else if(f.snapshotVersion.compareTo(we.min())>0){m.readTime=gu(c,f.snapshotVersion.toTimestamp());const v=Bh(c,f.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=nw(this.serializer,e);s&&(n.labels=s),this.k_(n)}Y_(e){const n={};n.database=Wh(this.serializer),n.removeTarget=e,this.k_(n)}}class Ww extends Py{constructor(e,n,s,a,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,f),this.serializer=c}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=J1(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=Wh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Y1(this.serializer,s)))};this.k_(n)}}/**
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
 */class qw{}class Qw extends qw{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new he(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Wo(e,$h(n,s),a,c,f))).catch((c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(q.UNKNOWN,c.toString())}))}Jo(e,n,s,a,c){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Jo(e,$h(n,s),a,f,m,c))).catch((f=>{throw f.name==="FirebaseError"?(f.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new he(q.UNKNOWN,f.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Kw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ir(n),this._a=!1):se("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const qi="RemoteStore";class Gw{constructor(e,n,s,a,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=c,this.Ea.xo((f=>{s.enqueueAndForget((async()=>{Gi(this)&&(se(qi,"Restarting streams for network reachability change."),await(async function(y){const v=Te(y);v.Ia.add(4),await Ca(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Ou(v)})(this))}))})),this.Aa=new Kw(s,a)}}async function Ou(i){if(Gi(i))for(const e of i.da)await e(!0)}async function Ca(i){for(const e of i.da)await e(!1)}function xy(i,e){const n=Te(i);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Cf(n)?Af(n):ro(n).x_()&&Sf(n,e))}function If(i,e){const n=Te(i),s=ro(n);n.Ta.delete(e),s.x_()&&Ny(n,e),n.Ta.size===0&&(s.x_()?s.B_():Gi(n)&&n.Aa.set("Unknown"))}function Sf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ro(i).H_(e)}function Ny(i,e){i.Ra.$e(e),ro(i).Y_(e)}function Af(i){i.Ra=new $1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),ro(i).start(),i.Aa.aa()}function Cf(i){return Gi(i)&&!ro(i).M_()&&i.Ta.size>0}function Gi(i){return Te(i).Ia.size===0}function Vy(i){i.Ra=void 0}async function Xw(i){i.Aa.set("Online")}async function Yw(i){i.Ta.forEach(((e,n)=>{Sf(i,e)}))}async function Jw(i,e){Vy(i),Cf(i)?(i.Aa.la(e),Af(i)):i.Aa.set("Unknown")}async function Zw(i,e,n){if(i.Aa.set("Online"),e instanceof gy&&e.state===2&&e.cause)try{await(async function(a,c){const f=c.cause;for(const m of c.targetIds)a.Ta.has(m)&&(await a.remoteSyncer.rejectListen(m,f),a.Ta.delete(m),a.Ra.removeTarget(m))})(i,e)}catch(s){se(qi,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _u(i,s)}else if(e instanceof tu?i.Ra.Ye(e):e instanceof my?i.Ra.it(e):i.Ra.et(e),!n.isEqual(we.min()))try{const s=await Ry(i.localStore);n.compareTo(s)>=0&&await(function(c,f){const m=c.Ra.Pt(f);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=c.Ta.get(v);w&&c.Ta.set(v,w.withResumeToken(y.resumeToken,f))}})),m.targetMismatches.forEach(((y,v)=>{const w=c.Ta.get(y);if(!w)return;c.Ta.set(y,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),Ny(c,y);const k=new Xr(w.target,y,v,w.sequenceNumber);Sf(c,k)})),c.remoteSyncer.applyRemoteEvent(m)})(i,n)}catch(s){se(qi,"Failed to raise snapshot:",s),await _u(i,s)}}async function _u(i,e,n){if(!no(e))throw e;i.Ia.add(1),await Ca(i),i.Aa.set("Offline"),n||(n=()=>Ry(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{se(qi,"Retrying IndexedDB access"),await n(),i.Ia.delete(1),await Ou(i)}))}function Dy(i,e){return e().catch((n=>_u(i,n,e)))}async function Lu(i){const e=Te(i),n=ai(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:lf;for(;eT(e);)try{const a=await Lw(e.localStore,s);if(a===null){e.Pa.length===0&&n.B_();break}s=a.batchId,tT(e,a)}catch(a){await _u(e,a)}Oy(e)&&Ly(e)}function eT(i){return Gi(i)&&i.Pa.length<10}function tT(i,e){i.Pa.push(e);const n=ai(i);n.x_()&&n.Z_&&n.X_(e.mutations)}function Oy(i){return Gi(i)&&!ai(i).M_()&&i.Pa.length>0}function Ly(i){ai(i).start()}async function nT(i){ai(i).na()}async function rT(i){const e=ai(i);for(const n of i.Pa)e.X_(n.mutations)}async function iT(i,e,n){const s=i.Pa.shift(),a=gf.from(s,e,n);await Dy(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await Lu(i)}async function sT(i,e){e&&ai(i).Z_&&await(async function(s,a){if((function(f){return z1(f)&&f!==q.ABORTED})(a.code)){const c=s.Pa.shift();ai(s).N_(),await Dy(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a))),await Lu(s)}})(i,e),Oy(i)&&Ly(i)}async function Ym(i,e){const n=Te(i);n.asyncQueue.verifyOperationInProgress(),se(qi,"RemoteStore received new credentials");const s=Gi(n);n.Ia.add(3),await Ca(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ou(n)}async function oT(i,e){const n=Te(i);e?(n.Ia.delete(2),await Ou(n)):e||(n.Ia.add(2),await Ca(n),n.Aa.set("Unknown"))}function ro(i){return i.Va||(i.Va=(function(n,s,a){const c=Te(n);return c.ia(),new Hw(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(i.datastore,i.asyncQueue,{Zo:Xw.bind(null,i),e_:Yw.bind(null,i),n_:Jw.bind(null,i),J_:Zw.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),Cf(i)?Af(i):i.Aa.set("Unknown")):(await i.Va.stop(),Vy(i))}))),i.Va}function ai(i){return i.ma||(i.ma=(function(n,s,a){const c=Te(n);return c.ia(),new Ww(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:nT.bind(null,i),n_:sT.bind(null,i),ea:rT.bind(null,i),ta:iT.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await Lu(i)):(await i.ma.stop(),i.Pa.length>0&&(se(qi,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
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
 */class Rf{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const f=Date.now()+s,m=new Rf(e,n,f,a,c);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(i,e){if(Ir("AsyncQueue",`${e}: ${i}`),no(i))return new he(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Qs{static emptySet(e){return new Qs(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=na(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(!a.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Qs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Jm{constructor(){this.fa=new nt(ge.comparator)}track(e){const n=e.doc.key,s=this.fa.get(n);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(n,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(n):e.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Js{constructor(e,n,s,a,c,f,m,y,v){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,n,s,a,c){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new Js(e,n,Qs.emptySet(n),f,s,a,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==s[a].type||!n[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class aT{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class lT{constructor(){this.queries=Zm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const a=Te(n),c=a.queries;a.queries=Zm(),c.forEach(((f,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new he(q.ABORTED,"Firestore shutting down"))}}function Zm(){return new Ki((i=>ny(i)),ku)}async function uT(i,e){const n=Te(i);let s=3;const a=e.query;let c=n.queries.get(a);c?!c.Sa()&&e.ba()&&(s=2):(c=new aT,s=e.ba()?0:1);try{switch(s){case 0:c.ya=await n.onListen(a,!0);break;case 1:c.ya=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(f){const m=kf(f,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(m)}n.queries.set(a,c),c.wa.push(e),e.va(n.onlineState),c.ya&&e.Ca(c.ya)&&Pf(n)}async function cT(i,e){const n=Te(i),s=e.query;let a=3;const c=n.queries.get(s);if(c){const f=c.wa.indexOf(e);f>=0&&(c.wa.splice(f,1),c.wa.length===0?a=e.ba()?0:1:!c.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function hT(i,e){const n=Te(i);let s=!1;for(const a of e){const c=a.query,f=n.queries.get(c);if(f){for(const m of f.wa)m.Ca(a)&&(s=!0);f.ya=a}}s&&Pf(n)}function fT(i,e,n){const s=Te(i),a=s.queries.get(e);if(a)for(const c of a.wa)c.onError(n);s.queries.delete(e)}function Pf(i){i.Da.forEach((e=>{e.next()}))}var Kh,eg;(eg=Kh||(Kh={})).Fa="default",eg.Cache="cache";class dT{constructor(e,n,s){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Js(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Kh.Cache}}/**
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
 */class My{constructor(e){this.key=e}}class by{constructor(e){this.key=e}}class pT{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=ry(e),this.eu=new Qs(this.Xa)}get tu(){return this.Ha}nu(e,n){const s=n?n.ru:new Jm,a=n?n.eu:this.eu;let c=n?n.mutatedKeys:this.mutatedKeys,f=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((w,k)=>{const R=a.get(w),U=Pu(this.query,k)?k:null,W=!!R&&this.mutatedKeys.has(R.key),B=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let z=!1;R&&U?R.data.isEqual(U.data)?W!==B&&(s.track({type:3,doc:U}),z=!0):this.iu(R,U)||(s.track({type:2,doc:U}),z=!0,(y&&this.Xa(U,y)>0||v&&this.Xa(U,v)<0)&&(m=!0)):!R&&U?(s.track({type:0,doc:U}),z=!0):R&&!U&&(s.track({type:1,doc:R}),z=!0,(y||v)&&(m=!0)),z&&(U?(f=f.add(U),c=B?c.add(w):c.delete(w)):(f=f.delete(w),c=c.delete(w)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const w=this.query.limitType==="F"?f.last():f.first();f=f.delete(w.key),c=c.delete(w.key),s.track({type:1,doc:w})}return{eu:f,ru:s,Ds:m,mutatedKeys:c}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,a){const c=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const f=e.ru.pa();f.sort(((w,k)=>(function(U,W){const B=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:z})}};return B(U)-B(W)})(w.type,k.type)||this.Xa(w.doc,k.doc))),this.su(s),a=a!=null&&a;const m=n&&!a?this.ou():[],y=this.Za.size===0&&this.current&&!a?1:0,v=y!==this.Ya;return this.Ya=y,f.length!==0||v?{snapshot:new Js(this.query,e.eu,c,f,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Jm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const n=[];return e.forEach((s=>{this.Za.has(s)||n.push(new by(s))})),this.Za.forEach((s=>{e.has(s)||n.push(new My(s))})),n}uu(e){this.Ha=e.qs,this.Za=ke();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Js.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const xf="SyncEngine";class mT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class gT{constructor(e){this.key=e,this.lu=!1}}class yT{constructor(e,n,s,a,c,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new Ki((m=>ny(m)),ku),this.Tu=new Map,this.Iu=new Set,this.du=new nt(ge.comparator),this.Eu=new Map,this.Au=new vf,this.Ru={},this.Vu=new Map,this.mu=Ys.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function _T(i,e,n=!0){const s=$y(i);let a;const c=s.Pu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),a=c.view.cu()):a=await Fy(s,e,n,!0),a}async function vT(i,e){const n=$y(i);await Fy(n,e,!0,!1)}async function Fy(i,e,n,s){const a=await Mw(i.localStore,Yn(e)),c=a.targetId,f=i.sharedClientState.addLocalQueryTarget(c,n);let m;return s&&(m=await ET(i,e,c,f==="current",a.resumeToken)),i.isPrimaryClient&&n&&xy(i.remoteStore,a),m}async function ET(i,e,n,s,a){i.gu=(k,R,U)=>(async function(B,z,ne,K){let Y=z.view.nu(ne);Y.Ds&&(Y=await qm(B.localStore,z.query,!1).then((({documents:A})=>z.view.nu(A,Y))));const te=K&&K.targetChanges.get(z.targetId),Ee=K&&K.targetMismatches.get(z.targetId)!=null,ye=z.view.applyChanges(Y,B.isPrimaryClient,te,Ee);return ng(B,z.targetId,ye._u),ye.snapshot})(i,k,R,U);const c=await qm(i.localStore,e,!0),f=new pT(e,c.qs),m=f.nu(c.documents),y=Aa.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",a),v=f.applyChanges(m,i.isPrimaryClient,y);ng(i,n,v._u);const w=new mT(e,n,f);return i.Pu.set(e,w),i.Tu.has(n)?i.Tu.get(n).push(e):i.Tu.set(n,[e]),v.snapshot}async function wT(i,e,n){const s=Te(i),a=s.Pu.get(e),c=s.Tu.get(a.targetId);if(c.length>1)return s.Tu.set(a.targetId,c.filter((f=>!ku(f,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await qh(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),n&&If(s.remoteStore,a.targetId),Gh(s,a.targetId)})).catch(to)):(Gh(s,a.targetId),await qh(s.localStore,a.targetId,!0))}async function TT(i,e){const n=Te(i),s=n.Pu.get(e),a=n.Tu.get(s.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),If(n.remoteStore,s.targetId))}async function IT(i,e,n){const s=xT(i);try{const a=await(function(f,m){const y=Te(f),v=Ge.now(),w=m.reduce(((U,W)=>U.add(W.key)),ke());let k,R;return y.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let W=Sr(),B=ke();return y.Os.getEntries(U,w).next((z=>{W=z,W.forEach(((ne,K)=>{K.isValidDocument()||(B=B.add(ne))}))})).next((()=>y.localDocuments.getOverlayedDocuments(U,W))).next((z=>{k=z;const ne=[];for(const K of m){const Y=M1(K,k.get(K.key).overlayedDocument);Y!=null&&ne.push(new ci(K.key,Y,Gg(Y.value.mapValue),bn.exists(!0)))}return y.mutationQueue.addMutationBatch(U,v,ne,m)})).next((z=>{R=z;const ne=z.applyToLocalDocumentSet(k,B);return y.documentOverlayCache.saveOverlays(U,z.batchId,ne)}))})).then((()=>({batchId:R.batchId,changes:sy(k)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(f,m,y){let v=f.Ru[f.currentUser.toKey()];v||(v=new nt(Ae)),v=v.insert(m,y),f.Ru[f.currentUser.toKey()]=v})(s,a.batchId,n),await Ra(s,a.changes),await Lu(s.remoteStore)}catch(a){const c=kf(a,"Failed to persist write");n.reject(c)}}async function Uy(i,e){const n=Te(i);try{const s=await Dw(n.localStore,e);e.targetChanges.forEach(((a,c)=>{const f=n.Eu.get(c);f&&(je(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?f.lu=!0:a.modifiedDocuments.size>0?je(f.lu,14607):a.removedDocuments.size>0&&(je(f.lu,42227),f.lu=!1))})),await Ra(n,s,e)}catch(s){await to(s)}}function tg(i,e,n){const s=Te(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.Pu.forEach(((c,f)=>{const m=f.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(f,m){const y=Te(f);y.onlineState=m;let v=!1;y.queries.forEach(((w,k)=>{for(const R of k.wa)R.va(m)&&(v=!0)})),v&&Pf(y)})(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ST(i,e,n){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",n);const a=s.Eu.get(e),c=a&&a.key;if(c){let f=new nt(ge.comparator);f=f.insert(c,jt.newNoDocument(c,we.min()));const m=ke().add(c),y=new Vu(we.min(),new Map,new nt(Ae),f,m);await Uy(s,y),s.du=s.du.remove(c),s.Eu.delete(e),Nf(s)}else await qh(s.localStore,e,!1).then((()=>Gh(s,e,n))).catch(to)}async function AT(i,e){const n=Te(i),s=e.batch.batchId;try{const a=await Vw(n.localStore,e);zy(n,s,null),jy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ra(n,a)}catch(a){await to(a)}}async function CT(i,e,n){const s=Te(i);try{const a=await(function(f,m){const y=Te(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next((k=>(je(k!==null,37113),w=k.keys(),y.mutationQueue.removeMutationBatch(v,k)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);zy(s,e,n),jy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ra(s,a)}catch(a){await to(a)}}function jy(i,e){(i.Vu.get(e)||[]).forEach((n=>{n.resolve()})),i.Vu.delete(e)}function zy(i,e,n){const s=Te(i);let a=s.Ru[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(n?c.reject(n):c.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function Gh(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),n&&i.hu.pu(s,n);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||By(i,s)}))}function By(i,e){i.Iu.delete(e.path.canonicalString());const n=i.du.get(e);n!==null&&(If(i.remoteStore,n),i.du=i.du.remove(e),i.Eu.delete(n),Nf(i))}function ng(i,e,n){for(const s of n)s instanceof My?(i.Au.addReference(s.key,e),RT(i,s)):s instanceof by?(se(xf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||By(i,s.key)):_e(19791,{yu:s})}function RT(i,e){const n=e.key,s=n.path.canonicalString();i.du.get(n)||i.Iu.has(s)||(se(xf,"New document in limbo: "+n),i.Iu.add(s),Nf(i))}function Nf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const n=new ge(tt.fromString(e)),s=i.mu.next();i.Eu.set(s,new gT(n)),i.du=i.du.insert(n,s),xy(i.remoteStore,new Xr(Yn(df(n.path)),s,"TargetPurposeLimboResolution",Su.ue))}}async function Ra(i,e,n){const s=Te(i),a=[],c=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{f.push(s.gu(y,e,n).then((v=>{var w;if((v||n)&&s.isPrimaryClient){const k=v?!v.fromCache:(w=n==null?void 0:n.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,k?"current":"not-current")}if(v){a.push(v);const k=wf.Es(y.targetId,v);c.push(k)}})))})),await Promise.all(f),s.hu.J_(a),await(async function(y,v){const w=Te(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>$.forEach(v,(R=>$.forEach(R.Is,(U=>w.persistence.referenceDelegate.addReference(k,R.targetId,U))).next((()=>$.forEach(R.ds,(U=>w.persistence.referenceDelegate.removeReference(k,R.targetId,U)))))))))}catch(k){if(!no(k))throw k;se(Tf,"Failed to update sequence numbers: "+k)}for(const k of v){const R=k.targetId;if(!k.fromCache){const U=w.Fs.get(R),W=U.snapshotVersion,B=U.withLastLimboFreeSnapshotVersion(W);w.Fs=w.Fs.insert(R,B)}}})(s.localStore,c))}async function kT(i,e){const n=Te(i);if(!n.currentUser.isEqual(e)){se(xf,"User change. New user:",e.toKey());const s=await Cy(n.localStore,e);n.currentUser=e,(function(c,f){c.Vu.forEach((m=>{m.forEach((y=>{y.reject(new he(q.CANCELLED,f))}))})),c.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ra(n,s.Bs)}}function PT(i,e){const n=Te(i),s=n.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let a=ke();const c=n.Tu.get(e);if(!c)return a;for(const f of c){const m=n.Pu.get(f);a=a.unionWith(m.view.tu)}return a}}function $y(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ST.bind(null,e),e.hu.J_=hT.bind(null,e.eventManager),e.hu.pu=fT.bind(null,e.eventManager),e}function xT(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CT.bind(null,e),e}class vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return Nw(this.persistence,new kw,e.initialUser,this.serializer)}Du(e){return new Ay(Ef.Vi,this.serializer)}bu(e){return new Fw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vu.provider={build:()=>new vu};class NT extends vu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){je(this.persistence.referenceDelegate instanceof yu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new dw(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Ay((s=>yu.Vi(s,n)),this.serializer)}}class Xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kT.bind(null,this.syncEngine),await oT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lT})()}createDatastore(e){const n=Du(e.databaseInfo.databaseId),s=(function(c){return new $w(c)})(e.databaseInfo);return(function(c,f,m,y){return new Qw(c,f,m,y)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,a,c,f,m){return new Gw(s,a,c,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>tg(this.syncEngine,n,0)),(function(){return Gm.C()?new Gm:new Uw})())}createSyncEngine(e,n){return(function(a,c,f,m,y,v,w){const k=new yT(a,c,f,m,y,v);return w&&(k.fu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(a){const c=Te(a);se(qi,"RemoteStore shutting down."),c.Ia.add(5),await Ca(c),c.Ea.shutdown(),c.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xh.provider={build:()=>new Xh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const li="FirestoreClient";class DT{constructor(e,n,s,a,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=Ut.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async f=>{se(li,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(se(li,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=kf(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ih(i,e){i.asyncQueue.verifyOperationInProgress(),se(li,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await Cy(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>{ni("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((a=>{ni("Terminating Firestore due to IndexedDb database deletion failed",a)}))})),i._offlineComponents=e}async function rg(i,e){i.asyncQueue.verifyOperationInProgress();const n=await OT(i);se(li,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener((s=>Ym(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>Ym(e.remoteStore,a))),i._onlineComponents=e}async function OT(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){se(li,"Using user provided OfflineComponentProvider");try{await Ih(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(n))throw n;ni("Error using user provided cache. Falling back to memory cache: "+n),await Ih(i,new vu)}}else se(li,"Using default OfflineComponentProvider"),await Ih(i,new NT(void 0));return i._offlineComponents}async function Hy(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(se(li,"Using user provided OnlineComponentProvider"),await rg(i,i._uninitializedComponentsProvider._online)):(se(li,"Using default OnlineComponentProvider"),await rg(i,new Xh))),i._onlineComponents}function LT(i){return Hy(i).then((e=>e.syncEngine))}async function MT(i){const e=await Hy(i),n=e.eventManager;return n.onListen=_T.bind(null,e.syncEngine),n.onUnlisten=wT.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vT.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TT.bind(null,e.syncEngine),n}function bT(i,e,n={}){const s=new ei;return i.asyncQueue.enqueueAndForget((async()=>(function(c,f,m,y,v){const w=new VT({next:R=>{w.Ou(),f.enqueueAndForget((()=>cT(c,k)));const U=R.docs.has(m);!U&&R.fromCache?v.reject(new he(q.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&R.fromCache&&y&&y.source==="server"?v.reject(new he(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(R)},error:R=>v.reject(R)}),k=new dT(df(m.path),w,{includeMetadataChanges:!0,ka:!0});return uT(c,k)})(await MT(i),i.asyncQueue,e,n,s))),s.promise}/**
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
 */function Wy(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firestore.googleapis.com",sg=!0;class og{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qy,this.ssl=sg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:sg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hw)throw new he(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new he(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new he(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new he(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vf{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new UE;switch(s.type){case"firstParty":return new $E(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ig.get(n);s&&(se("ComponentProvider","Removing Datastore"),ig.delete(n),s.terminate())})(this),Promise.resolve()}}function FT(i,e,n,s={}){var a;i=lu(i,Vf);const c=nf(e),f=i._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${n}`;c&&(f0(`https://${y}`),g0("Firestore",!0)),f.host!==qy&&f.host!==y&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},f),{host:y,ssl:c,emulatorOptions:s});if(!su(v,m)&&(i._setSettings(v),s.mockUserToken)){let w,k;if(typeof s.mockUserToken=="string")w=s.mockUserToken,k=Ut.MOCK_USER;else{w=d0(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new he(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Ut(R)}i._authCredentials=new jE(new bg(w,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Df(this.firestore,e,this._query)}}class Vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}toJSON(){return{type:Vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ia(n,Vt._jsonSchema))return new Vt(e,s||null,new ge(tt.fromString(n.referencePath)))}}Vt._jsonSchemaVersion="firestore/documentReference/1.0",Vt._jsonSchema={type:ct("string",Vt._jsonSchemaVersion),referencePath:ct("string")};class Ea extends Df{constructor(e,n,s){super(e,n,df(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new ge(e))}withConverter(e){return new Ea(this.firestore,e,this._path)}}function UT(i,e,...n){if(i=ti(i),arguments.length===1&&(e=of.newId()),KE("doc","path",e),i instanceof Vf){const s=tt.fromString(e,...n);return Em(s),new Vt(i,null,new ge(s))}{if(!(i instanceof Vt||i instanceof Ea))throw new he(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(tt.fromString(e,...n));return Em(s),new Vt(i.firestore,i instanceof Ea?i.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="AsyncQueue";class lg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ky(this,"async_queue_retry"),this.oc=()=>{const s=Th();s&&se(ag,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new ei;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!no(e))throw e;se(ag,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Ir("INTERNAL UNHANDLED ERROR: ",ug(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const a=Rf.createAndSchedule(this,e,n,s,(c=>this.lc(c)));return this.ec.push(a),a}ac(){this.tc&&_e(47125,{hc:ug(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function ug(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Of extends Vf{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new lg,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lg(e),this._firestoreClient=void 0,await e}}}function jT(i,e){const n=typeof i=="object"?i:CE(),s=typeof i=="string"?i:cu,a=wE(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=c0("firestore");c&&FT(a,...c)}return a}function Lf(i){if(i._terminated)throw new he(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||zT(i),i._firestoreClient}function zT(i){var e,n,s;const a=i._freezeSettings(),c=(function(m,y,v,w){return new o1(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Wy(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new DT(i._authCredentials,i._appCheckCredentials,i._queue,c,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Dt.fromBase64String(e))}catch(n){throw new he(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ia(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:ct("string",wn._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this._methodName=e}}/**
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
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(Ia(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:ct("string",Zn._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class er{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ia(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new er(e.vectorValues);throw new he(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:ct("string",er._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const BT=/^__.*__$/;class $T{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(e,this.data,n,this.fieldTransforms)}}class Qy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ci(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ky(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:i})}}class bf{constructor(e,n,s,a,c,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Ac(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Eu(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ky(this.Ec)&&BT.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class HT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Du(e)}Dc(e,n,s,a=!1){return new bf({Ec:e,methodName:n,bc:s,path:Nt.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function WT(i){const e=i._freezeSettings(),n=Du(i._databaseId);return new HT(i._databaseId,!!e.ignoreUndefinedProperties,n)}function qT(i,e,n,s,a,c={}){const f=i.Dc(c.merge||c.mergeFields?2:0,e,n,a);Ff("Data must be an object, but it was:",f,s);const m=Gy(s,f);let y,v;if(c.merge)y=new cn(f.fieldMask),v=f.fieldTransforms;else if(c.mergeFields){const w=[];for(const k of c.mergeFields){const R=Yh(e,k,n);if(!f.contains(R))throw new he(q.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Yy(w,R)||w.push(R)}y=new cn(w),v=f.fieldTransforms.filter((k=>y.covers(k.field)))}else y=null,v=f.fieldTransforms;return new $T(new tn(m),y,v)}class bu extends Mf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}function QT(i,e,n,s){const a=i.Dc(1,e,n);Ff("Data must be an object, but it was:",a,s);const c=[],f=tn.empty();ui(s,((y,v)=>{const w=Uf(e,y,n);v=ti(v);const k=a.gc(w);if(v instanceof bu)c.push(w);else{const R=Fu(v,k);R!=null&&(c.push(w),f.set(w,R))}}));const m=new cn(c);return new Qy(f,m,a.fieldTransforms)}function KT(i,e,n,s,a,c){const f=i.Dc(1,e,n),m=[Yh(e,s,n)],y=[a];if(c.length%2!=0)throw new he(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<c.length;R+=2)m.push(Yh(e,c[R])),y.push(c[R+1]);const v=[],w=tn.empty();for(let R=m.length-1;R>=0;--R)if(!Yy(v,m[R])){const U=m[R];let W=y[R];W=ti(W);const B=f.gc(U);if(W instanceof bu)v.push(U);else{const z=Fu(W,B);z!=null&&(v.push(U),w.set(U,z))}}const k=new cn(v);return new Qy(w,k,f.fieldTransforms)}function Fu(i,e){if(Xy(i=ti(i)))return Ff("Unsupported field value:",e,i),Gy(i,e);if(i instanceof Mf)return(function(s,a){if(!Ky(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,a){const c=[];let f=0;for(const m of s){let y=Fu(m,a.yc(f));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),f++}return{arrayValue:{values:c}}})(i,e)}return(function(s,a){if((s=ti(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return x1(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Ge.fromDate(s);return{timestampValue:gu(a.serializer,c)}}if(s instanceof Ge){const c=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gu(a.serializer,c)}}if(s instanceof Zn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:yy(a.serializer,s._byteString)};if(s instanceof Vt){const c=a.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw a.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:_f(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof er)return(function(f,m){return{mapValue:{fields:{[Qg]:{stringValue:Kg},[hu]:{arrayValue:{values:f.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return pf(m.serializer,v)}))}}}}}})(s,a);throw a.wc(`Unsupported field value: ${af(s)}`)})(i,e)}function Gy(i,e){const n={};return zg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(i,((s,a)=>{const c=Fu(a,e.Vc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function Xy(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ge||i instanceof Zn||i instanceof wn||i instanceof Vt||i instanceof Mf||i instanceof er)}function Ff(i,e,n){if(!Xy(n)||!Ug(n)){const s=af(n);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Yh(i,e,n){if((e=ti(e))instanceof Mu)return e._internalPath;if(typeof e=="string")return Uf(i,e);throw Eu("Field path arguments must be of type string or ",i,!1,void 0,n)}const GT=new RegExp("[~\\*/\\[\\]]");function Uf(i,e,n){if(e.search(GT)>=0)throw Eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new Mu(...e.split("."))._internalPath}catch{throw Eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Eu(i,e,n,s,a){const c=s&&!s.isEmpty(),f=a!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(c||f)&&(y+=" (found",c&&(y+=` in field ${s}`),f&&(y+=` in document ${a}`),y+=")"),new he(q.INVALID_ARGUMENT,m+i+y)}function Yy(i,e){return i.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,s,a,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XT extends Jy{data(){return super.data()}}function Zy(i,e){return typeof e=="string"?Uf(i,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}class YT{convertValue(e,n="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ui(e,((a,c)=>{s[a]=this.convertValue(c,n)})),s}convertVectorValue(e){var n,s,a;const c=(a=(s=(n=e.fields)===null||n===void 0?void 0:n[hu].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map((f=>ot(f.doubleValue)));return new er(c)}convertGeoPoint(e){return new Zn(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ma(e));default:return null}}convertTimestamp(e){const n=ii(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=tt.fromString(e);je(Iy(s),9688,{name:e});const a=new ga(s.get(1),s.get(3)),c=new ge(s.popFirst(5));return a.isEqual(n)||Ir(`Document ${c} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(i,e,n){let s;return s=i?n&&(n.merge||n.mergeFields)?i.toFirestore(e,n):i.toFirestore(e):e,s}class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $i extends Jy{constructor(e,n,s,a,c,f){super(e,n,s,a,f),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Zy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$i._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$i._jsonSchemaVersion="firestore/documentSnapshot/1.0",$i._jsonSchema={type:ct("string",$i._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class nu extends $i{data(e={}){return super.data(e)}}class ca{constructor(e,n,s,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new ia(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new nu(this._firestore,this._userDataWriter,s.key,s,new ia(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let f=0;return a._snapshot.docChanges.map((m=>{const y=new nu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new ia(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const y=new nu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new ia(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,w=-1;return m.type!==0&&(v=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),w=f.indexOf(m.doc.key)),{type:ZT(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ca._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],a=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZT(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(i){i=lu(i,Vt);const e=lu(i.firestore,Of);return bT(Lf(e),i._key).then((n=>nI(e,i,n)))}ca._jsonSchemaVersion="firestore/querySnapshot/1.0",ca._jsonSchema={type:ct("string",ca._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class eI extends YT{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function tI(i,e){return(function(s,a){const c=new ei;return s.asyncQueue.enqueueAndForget((async()=>IT(await LT(s),a,c))),c.promise})(Lf(i),e)}function nI(i,e,n){const s=n.docs.get(e._key),a=new eI(i);return new $i(i,a,e._key,s,new ia(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=WT(e)}set(e,n,s){this._verifyNotCommitted();const a=Sh(e,this._firestore),c=JT(a.converter,n,s),f=qT(this._dataReader,"WriteBatch.set",a._key,c,a.converter!==null,s);return this._mutations.push(f.toMutation(a._key,bn.none())),this}update(e,n,s,...a){this._verifyNotCommitted();const c=Sh(e,this._firestore);let f;return f=typeof(n=ti(n))=="string"||n instanceof Mu?KT(this._dataReader,"WriteBatch.update",c._key,n,s,a):QT(this._dataReader,"WriteBatch.update",c._key,n),this._mutations.push(f.toMutation(c._key,bn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Sh(e,this._firestore);return this._mutations=this._mutations.concat(new mf(n._key,bn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new he(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sh(i,e){if((i=ti(i)).firestore!==e)throw new he(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(i){return Lf(i=lu(i,Of)),new rI(i,(e=>tI(i,e)))}(function(e,n=!0){(function(a){eo=a})(AE),au(new fa("firestore",((s,{instanceIdentifier:a,options:c})=>{const f=s.getProvider("app").getImmediate(),m=new Of(new zE(s.getProvider("auth-internal")),new HE(f,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new he(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ga(v.options.projectId,w)})(f,a),f);return c=Object.assign({useFetchStreams:n},c),m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),qs(mm,gm,e),qs(mm,gm,"esm2017")})();const t_={apiKey:"AIzaSyBnsZvXmN5OZZME1IMhVTTmVnpoD8M1Lr4",authDomain:"sstool-fde3b.firebaseapp.com",databaseURL:"https://sstool-fde3b-default-rtdb.europe-west1.firebasedatabase.app",projectId:"sstool-fde3b",storageBucket:"sstool-fde3b.appspot.com",messagingSenderId:"239680562483",appId:"1:239680562483:web:393f31510ed9feb6408a46"},sI=Rg(t_),n_=jT(sI);function oI(){return Object.values(t_).every(i=>typeof i=="string"&&i.length>0)}function aI({onFocusSearch:i,onClear:e,enabled:n=!0}){Ie.useEffect(()=>{if(!n)return;const s=a=>{const c=a.target,f=(c==null?void 0:c.tagName)==="INPUT"||(c==null?void 0:c.tagName)==="TEXTAREA"||(c==null?void 0:c.isContentEditable);a.key==="/"&&!f&&(a.preventDefault(),i==null||i()),a.key==="Escape"&&(e==null||e())};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[n,e,i])}const cg="synonyms-recent-searches",lI=8;function uI(){const[i,e]=Ie.useState(()=>{try{const a=localStorage.getItem(cg);return a?JSON.parse(a):[]}catch{return[]}});Ie.useEffect(()=>{localStorage.setItem(cg,JSON.stringify(i))},[i]);const n=Ie.useCallback(a=>{const c=a.trim().toLowerCase();c&&e(f=>[c,...f.filter(y=>y!==c)].slice(0,lI))},[]),s=Ie.useCallback(()=>{e([])},[]);return{recent:i,addRecent:n,clearRecent:s}}class Fn extends Error{constructor(e){super(e),this.code=e,this.name="SynonymError"}}const cI={community:"Community",dictionary:"Dictionary",online:"Online (Datamuse)"};function hi(i){return i.trim().toLowerCase()}function hI(i){return[...new Set(i.split(/,\s*/).map(hi).filter(Boolean))]}function Qi(i){return[...new Set(i.map(hi).filter(Boolean))]}function fI(i,e,n){return Qi([...i,...e]).filter(a=>a!==n)}const dI="https://api.datamuse.com/words",pI=20;async function mI(i){const e=hi(i);if(!e)return[];const n=new URLSearchParams({rel_syn:e,max:String(pI)}),s=await fetch(`${dI}?${n.toString()}`);if(!s.ok)throw new Error("Datamuse request failed");const a=await s.json();return Qi(a.map(c=>c.word).filter(c=>c!==e))}let ea=null,Gl=null;async function gI(){return ea||(Gl||(Gl=fetch("/data/synonyms.json").then(i=>{if(!i.ok)throw new Error("Failed to load static dictionary");return i.json()}).then(i=>(ea=i,i)).catch(()=>(Gl=null,ea={},ea))),Gl)}function yI(i,e){const n=new Set;for(const[s,a]of Object.entries(i))a.includes(e)&&(n.add(s),a.forEach(c=>{c!==e&&n.add(c)}));return[...n]}async function _I(i){const e=hi(i);if(!e)return[];const n=await gI(),s=n[e];return s!=null&&s.length?Qi(s.filter(a=>a!==e)):Qi(yI(n,e))}const vI="words",Jh=new Map;function ru(i,e){return UT(i,vI,e)}async function Zh(i,e){const n=await e_(ru(i,e));if(!n.exists())return null;const s=n.data();return Qi(Array.isArray(s.synonyms)?s.synonyms:[])}async function EI(i,e=n_){const n=hi(i);if(!n)throw new Fn("EMPTY_WORD");const s=Jh.get(n);if(s)return s;const a=await Zh(e,n);if(a===null)throw new Fn("NOT_FOUND");return Jh.set(n,a),a}async function wI(i,e,n=n_){const s=hi(i),a=hI(e).filter(v=>v!==s);if(!s)throw new Fn("EMPTY_WORD");if(a.length===0)throw new Fn("EMPTY_SYNONYMS");if(await Zh(n,s)!==null)throw new Fn("WORD_EXISTS");const f=new Set(a);for(const v of a){const w=await Zh(n,v);w&&w.forEach(k=>f.add(k))}f.delete(s);const m=[s,...f],y=iI(n);for(const v of m){const w=m.filter(R=>R!==v),k=await e_(ru(n,v));if(k.exists()){const R=Qi(Array.isArray(k.data().synonyms)?k.data().synonyms:[]);y.update(ru(n,v),{synonyms:fI(R,w,v)})}else y.set(ru(n,v),{word:v,synonyms:w})}await y.commit(),Jh.clear()}function Xl(i){switch(i){case"EMPTY_WORD":return"Please enter a word.";case"EMPTY_SYNONYMS":return"Please enter at least one synonym.";case"WORD_EXISTS":return"This word already exists in the dictionary.";case"NOT_FOUND":return"Word not found.";case"NETWORK":return"Network error. Check your connection and try again.";default:return"Something went wrong. Please try again."}}const hg=new Map;function TI(i,e){var a;const n=new Map;for(const c of Object.keys(e))for(const f of e[c])n.has(f)||n.set(f,new Set),(a=n.get(f))==null||a.add(c);const s=[...n.entries()].map(([c,f])=>({word:c,sources:[...f]})).sort((c,f)=>c.word.localeCompare(f.word));return{word:i,synonyms:s,bySource:e,totalCount:s.length}}async function II(i){try{return await EI(i)}catch(e){if(e instanceof Fn&&e.code==="NOT_FOUND")return[];throw e}}async function SI(i){const e=hi(i);if(!e)throw new Fn("EMPTY_WORD");const n=hg.get(e);if(n)return n;const[s,a,c]=await Promise.allSettled([II(e),_I(e),mI(e)]);if(s.status==="rejected")throw s.reason;const f=Qi(s.value),m=a.status==="fulfilled"?a.value:[],y=c.status==="fulfilled"?c.value:[],v=new Set(f),w=m.filter(z=>!v.has(z)),k=new Set([...f,...w]),R=y.filter(z=>!k.has(z)),U={community:f,dictionary:w,online:R};if(U.community.length+U.dictionary.length+U.online.length===0)throw new Fn("NOT_FOUND");const B=TI(e,U);return hg.set(e,B),B}function AI(){const[i,e]=Ie.useState(null),[n,s]=Ie.useState(!1),a=Ie.useCallback(async m=>{s(!0);try{const y=await SI(m);return e(y),y}catch(y){throw e(null),y instanceof Fn?be.error(Xl(y.code)):be.error(Xl("UNKNOWN")),y}finally{s(!1)}},[]),c=Ie.useCallback(async(m,y)=>{s(!0);try{await wI(m,y),be.success("Word and synonyms added successfully.")}catch(v){throw v instanceof Fn?be.error(Xl(v.code)):be.error(Xl("UNKNOWN")),v}finally{s(!1)}},[]),f=Ie.useCallback(()=>{e(null)},[]);return{results:i,isLoading:n,search:a,addWord:c,clearResults:f,setResults:e}}function CI({word:i,synonymInput:e,error:n,isLoading:s,onWordChange:a,onSynonymInputChange:c,onSubmit:f}){const m=y=>{y.preventDefault(),f()};return ie.jsxs("section",{"aria-labelledby":"add-heading",className:"panel-section",children:[ie.jsx("h1",{id:"add-heading",className:"panel-title",children:"Add Word & Synonyms"}),ie.jsx("p",{className:"panel-subtitle",children:"Expand the dictionary by linking a new word to its synonyms."}),ie.jsxs("form",{onSubmit:m,className:"form-stack",children:[ie.jsx("label",{htmlFor:"add-word",className:"field-label",children:"Word"}),ie.jsx("input",{id:"add-word",type:"text",className:"field-input",value:i,onChange:y=>a(y.target.value),placeholder:"e.g. joyful",autoComplete:"off"}),ie.jsx("label",{htmlFor:"add-synonyms",className:"field-label",children:"Synonym(s)"}),ie.jsx("input",{id:"add-synonyms",type:"text",className:"field-input",value:e,onChange:y=>c(y.target.value),placeholder:"e.g. happy, cheerful",autoComplete:"off","aria-describedby":"add-synonyms-hint"}),ie.jsx("p",{id:"add-synonyms-hint",className:"field-hint",children:"Separate multiple synonyms with commas (e.g. “large, huge”)."}),n&&ie.jsx("p",{className:"error-banner",role:"alert",children:n}),ie.jsx("button",{type:"submit",className:"btn-primary",disabled:s,children:s?"Saving…":"Add to dictionary"})]})]})}function RI({mode:i,onChange:e}){return ie.jsxs("div",{className:"mode-toggle",role:"tablist","aria-label":"Application mode",children:[ie.jsx("button",{type:"button",role:"tab","aria-selected":i==="search",className:i==="search"?"mode-tab active":"mode-tab",onClick:()=>e("search"),children:"Search"}),ie.jsx("button",{type:"button",role:"tab","aria-selected":i==="add",className:i==="add"?"mode-tab active":"mode-tab",onClick:()=>e("add"),children:"Add"})]})}async function r_(i){await navigator.clipboard.writeText(i)}function kI({source:i}){return ie.jsx("span",{className:`source-badge source-badge-${i}`,children:cI[i]})}function Ah({title:i,source:e,synonyms:n,onSelect:s}){return n.length===0?null:ie.jsxs("section",{className:"source-section","aria-label":i,children:[ie.jsxs("div",{className:"source-section-header",children:[ie.jsx("h3",{className:"source-section-title",children:i}),ie.jsx(kI,{source:e})]}),ie.jsx("ul",{className:"synonym-grid",role:"list",children:n.map(a=>ie.jsx("li",{children:ie.jsxs("button",{type:"button",className:"synonym-chip",onClick:()=>s(a.word),title:`Search for ${a.word}`,children:[ie.jsx("span",{children:a.word}),ie.jsx("span",{className:"copy-icon","aria-hidden":"true",onClick:c=>{c.stopPropagation(),r_(a.word)},children:"⧉"})]})},`${e}-${a.word}`))})]})}function PI({results:i,onSelect:e}){const{word:n,synonyms:s,bySource:a,totalCount:c}=i;if(c===0)return ie.jsx("p",{className:"text-muted text-sm",role:"status",children:"No synonyms found across community, dictionary, or online sources."});const f=s.filter(w=>w.sources.includes("community")),m=s.filter(w=>w.sources.includes("dictionary")&&!w.sources.includes("community")),y=s.filter(w=>w.sources.includes("online")),v=s.map(w=>w.word);return ie.jsxs("div",{className:"w-full",children:[ie.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[ie.jsxs("div",{children:[ie.jsxs("h2",{className:"text-lg font-semibold text-primary",children:["Synonyms for “",n,"”"]}),ie.jsxs("p",{className:"text-muted text-sm mt-1",children:[c," result",c===1?"":"s"," from"," ",[a.community.length>0?"community":null,a.dictionary.length>0?"dictionary":null,a.online.length>0?"online":null].filter(Boolean).join(", ")]})]}),ie.jsx("button",{type:"button",className:"btn-secondary text-sm",onClick:()=>r_(v.join(", ")),children:"Copy all"})]}),ie.jsx(Ah,{title:"Your community dictionary",source:"community",synonyms:f,onSelect:e}),ie.jsx(Ah,{title:"Static WordNet dictionary",source:"dictionary",synonyms:m,onSelect:e}),ie.jsx(Ah,{title:"Online suggestions",source:"online",synonyms:y,onSelect:e})]})}function xI({word:i,onWordChange:e,onSearch:n,isLoading:s,results:a,searchedWord:c,onSelectSynonym:f,recentSearches:m,onRecentSelect:y,onClearRecent:v,inputRef:w}){const k=R=>{R.preventDefault(),n()};return ie.jsxs("section",{"aria-labelledby":"search-heading",className:"panel-section",children:[ie.jsx("h1",{id:"search-heading",className:"panel-title",children:"Synonyms Search Tool"}),ie.jsxs("p",{className:"panel-subtitle",children:["Combines your Firestore dictionary, a static WordNet dataset (~12k words), and live Datamuse suggestions. Press ",ie.jsx("kbd",{className:"kbd",children:"/"})," ","to focus search."]}),ie.jsxs("form",{onSubmit:k,className:"form-stack",children:[ie.jsx("label",{htmlFor:"search-word",className:"field-label",children:"Word"}),ie.jsx("input",{ref:w,id:"search-word",type:"text",className:"field-input",value:i,onChange:R=>e(R.target.value),placeholder:"e.g. happy",autoComplete:"off","aria-describedby":"search-hint"}),ie.jsx("p",{id:"search-hint",className:"field-hint",children:"Enter a word and press Enter or click Search."}),ie.jsx("button",{type:"submit",className:"btn-primary",disabled:s,children:s?"Searching…":"Search synonyms"})]}),m.length>0&&ie.jsxs("div",{className:"recent-block",children:[ie.jsxs("div",{className:"recent-header",children:[ie.jsx("span",{className:"text-sm font-medium text-primary",children:"Recent"}),ie.jsx("button",{type:"button",className:"link-button text-sm",onClick:v,children:"Clear"})]}),ie.jsx("div",{className:"recent-list",children:m.map(R=>ie.jsx("button",{type:"button",className:"recent-chip",onClick:()=>y(R),children:R},R))})]}),c&&a&&ie.jsx("div",{className:"results-block","aria-live":"polite",children:ie.jsx(PI,{results:a,onSelect:f})})]})}function NI(){const[i,e]=Ie.useState(()=>{const s=localStorage.getItem("theme");return s==="light"||s==="dark"?s:"dark"}),n=()=>{const s=i==="dark"?"light":"dark";e(s),document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s)};return ie.jsx("button",{type:"button",onClick:n,className:"btn-secondary text-sm","aria-label":`Switch to ${i==="dark"?"light":"dark"} theme`,children:i==="dark"?"Light mode":"Dark mode"})}function VI(){const e=localStorage.getItem("theme")==="light"?"light":"dark";document.documentElement.setAttribute("data-theme",e)}function DI(){const[i,e]=Ie.useState("search"),[n,s]=Ie.useState(""),[a,c]=Ie.useState(""),[f,m]=Ie.useState(""),[y,v]=Ie.useState(""),w=Ie.useRef(null),{results:k,isLoading:R,search:U,addWord:W,clearResults:B}=AI(),{recent:z,addRecent:ne,clearRecent:K}=uI(),Y=()=>{s(""),c(""),v(""),B(),m("")},te=A=>{e(A),Y()},Ee=async A=>{const T=hi(A??n);if(!T){m(""),B();return}s(T);try{await U(T),m(T),ne(T)}catch{m("")}},ye=async()=>{v("");try{await W(n,a),s(""),c("")}catch(A){A instanceof Fn&&A.code==="WORD_EXISTS"&&v("This word already exists in the dictionary.")}};return aI({onFocusSearch:()=>{var A;i==="search"&&((A=w.current)==null||A.focus())},onClear:Y}),oI()?ie.jsxs(ie.Fragment,{children:[ie.jsx(Zv,{position:"top-right",autoClose:3e3,theme:"colored"}),ie.jsxs("main",{className:"app-shell",children:[ie.jsxs("header",{className:"app-header",children:[ie.jsx(RI,{mode:i,onChange:te}),ie.jsx(NI,{})]}),ie.jsx("div",{className:"panel-card",children:i==="search"?ie.jsx(xI,{word:n,onWordChange:s,onSearch:()=>void Ee(),isLoading:R,results:k,searchedWord:f,onSelectSynonym:A=>void Ee(A),recentSearches:z,onRecentSelect:A=>void Ee(A),onClearRecent:K,inputRef:w}):ie.jsx(CI,{word:n,synonymInput:a,error:y,isLoading:R,onWordChange:s,onSynonymInputChange:c,onSubmit:()=>void ye()})})]})]}):ie.jsx("main",{className:"app-shell",children:ie.jsxs("div",{className:"panel-card",children:[ie.jsx("h1",{className:"panel-title",children:"Configuration required"}),ie.jsxs("p",{className:"panel-subtitle",children:["Copy ",ie.jsx("code",{children:".env.example"})," to ",ie.jsx("code",{children:".env"})," and add your Firebase credentials before using the app."]})]})})}VI();const i_=document.getElementById("root");if(!i_)throw new Error("Root element not found");yv.createRoot(i_).render(ie.jsx(Ie.StrictMode,{children:ie.jsx(DI,{})}));
