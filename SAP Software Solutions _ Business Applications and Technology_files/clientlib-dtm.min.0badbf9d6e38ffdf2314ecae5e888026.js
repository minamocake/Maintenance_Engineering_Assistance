window.SAP=window.SAP||{};
window.SAP.DemandBase=window.SAP.DemandBase||{};
window.SAP.DemandBase.CONST=window.SAP.DemandBase.CONST||{DEFAULT_EVENT_LISTENER_TIMEOUT:1000,STORAGE_NAME:"DemandbaseData",GLOBAL_VARIALBLE_NAME:"_demandbaseInfo"};
window.SAP.DemandBase.jQueryUtils=window.SAP.DemandBase.jQueryUtils||(function(){var e={documentReady:a,jsonpRequest:c,registerCallbacks:f,resolveCallback:d,rejectCallback:b,isJQueryAvailable:g};
return e;
function a(h){$(h)
}function g(){return !!window.jQuery
}function c(i,j){var h=j?"async":"";
e.isJQueryAvailable()&&$("head").append('<script src="'+i+'" '+h+"><\/script>")
}function f(h){if(!e.isJQueryAvailable()){return
}h=h||{};
h.deferred=$.Deferred();
if(h.isResolved){e.resolveCallback(h)
}else{if(h.isRejected){e.rejectCallback(h)
}}return h.deferred
}function d(h){if(!h||!e.isJQueryAvailable()){return
}h.isResolved=true;
h.deferred&&h.deferred.resolve(h.store)
}function b(h){if(!h||!e.isJQueryAvailable()){return
}h.isRejected=true;
h.deferred&&h.deferred.reject(h.store)
}})();
window.SAP.DemandBase.JSUtils=window.SAP.DemandBase.JSUtils||(function(){var e={documentReady:a,jsonpRequest:c,registerCallbacks:f,resolveCallback:d,rejectCallback:b,_thenCallback:g};
return e;
function a(h){if(document.attachEvent?document.readyState==="complete":document.readyState!=="loading"){h()
}else{document.addEventListener("DOMContentLoaded",h)
}}function c(h,i){var j=document.createElement("script");
j.src=h;
j.async=!!i;
document.getElementsByTagName("head")[0].appendChild(j)
}function f(h){var i={};
i.then=e._thenCallback(h,i);
return i
}function g(h,i){return function(k,j){if(h&&(k||j)){h.resolveCallback=k;
h.rejectCallback=j;
h.isResolved&&k&&k(h.store);
h.isRejected&&j&&j(h.store)
}return i
}
}function d(h){if(!h){return
}window.setTimeout(function(){if(h.isRejected){return
}h.resolveCallback&&h.resolveCallback(h.store);
h.isResolved=true
},0)
}function b(h){if(!h){return
}window.setTimeout(function(){if(h.isResolved){return
}h.rejectCallback&&h.rejectCallback(h.store);
h.isRejected=true
},0)
}})();
window.SAP.DemandBase.EventUtils=window.SAP.DemandBase.EventUtils||(function(){var a={};
var i={subscribe:c,unsubscribe:k,unsubscribeAll:g,publish:b,publishOnce:e,hasSubscribtions:d,_getCache:j,_setCache:h,_cleanCache:f};
return i;
function j(){return a
}function h(l){a=l
}function f(){a={}
}function c(m,l){if(!m||!l){return
}if(!a[m]){a[m]={queue:[]}
}a[m].queue.push(l)
}function k(n,m){if(a[n]){var l=a[n].queue.indexOf(m);
if(~l){a[n].queue.splice(l,1)
}}}function b(n,m){if(!a[n]||!a[n].queue.length){return
}var l=a[n].queue;
l.forEach(function(o){o(m)
})
}function e(m,l){i.publish(m,l);
i.unsubscribeAll(m)
}function g(l){a[l]=undefined
}function d(l){return !!a[l]
}})();
window.SAP.DemandBase.GlobalVariableService=window.SAP.DemandBase.GlobalVariableService||(function(){var b={getStore:c,setStore:a};
return b;
function c(d){d=d||{};
return window[d.globalVariableName]
}function a(d){d=d||{};
if(d.globalVariableName&&d.store){window[d.globalVariableName]=d.store
}}})();
window.SAP.DemandBase.StorageService=window.SAP.DemandBase.StorageService||(function(){var b={getStore:d,setStore:a,_isStorageAvailable:c};
return b;
function d(f){f=f||{};
var e;
if(b._isStorageAvailable()&&f.storageName){e=sessionStorage.getItem(f.storageName)
}if(e){try{e=JSON.parse(e)
}catch(g){console.error("Parse demandbase obj failed",g)
}}return e
}function a(e){e=e||{};
if(b._isStorageAvailable()&&e.storageName&&e.store){sessionStorage.setItem(e.storageName,JSON.stringify(e.store))
}}function c(){return SAP.sapdx&&SAP.sapdx.StorageUtils&&SAP.sapdx.StorageUtils.isSessionStorageAvailable()
}})();
window.SAP.DemandBase.CallbackStore=window.SAP.DemandBase.CallbackStore||{};
window.SAP.DemandBase.FetchService=window.SAP.DemandBase.FetchService||(function(){var i={fetchStore:c,waitStore:f,_fetchTimeoutHandler:g,_createRequestUrl:k,_createRequestCallback:d,_setTimeout:h,_sendRequest:a,_callback:l};
var j=window.SAP.DemandBase.GlobalVariableService;
var b=window.SAP.DemandBase.StorageService;
var e=window.SAP.DemandBase.EventUtils;
return i;
function f(m){i.fetchStore(m);
i._setTimeout(m)
}function h(m){if(m){m.timeoutId=window.setTimeout(i._fetchTimeoutHandler.bind(window,m),m.timeout)
}}function g(m){if(m&&m.url){e.publish(m.url);
e.unsubscribe(m.url,m.callback)
}}function c(m){m=m||{};
m.url=i._createRequestUrl(m);
if(m.url){if(!e.hasSubscribtions(m.url)){i._sendRequest(m)
}e.subscribe(m.url,m.callback)
}}function a(m){if(m&&m.url&&m.utils){try{m.utils.jsonpRequest(m.url,m.runAsync)
}catch(n){console.error("JSONP request failed.",n)
}}}function l(n,m){n=n||{};
console.info("Callback for demandbase API: key - "+n.key);
if(m){n.store=m;
window.clearTimeout(n.timeoutId);
b.setStore(n);
j.setStore(n);
e.publishOnce(n.url,n.store)
}}function k(n){var p;
var m;
var o;
if(n&&n.key){o=n.query!==undefined?n.query:"";
p=i._createRequestCallback(n);
m="https://api.demandbase.com/api/v2/ip.json?key="+n.key+"&var=dbInfo&callback="+p+"&query="+o
}else{console.error("config key is empty")
}return m
}function d(m){var n;
if(!m||!m.storageName){return
}n=m.storageName.match(/[a-zA-Z]+/gmi).join("");
window.SAP.DemandBase.CallbackStore[n]=i._callback.bind(window,m);
return"window.SAP.DemandBase.CallbackStore."+n
}})();
window.SAP.DemandBase.ConfigurationHelper=window.SAP.DemandBase.ConfigurationHelper||(function(){var f={applyDefaults:g,isValidConfig:a,createDefaultConfig:e,applyDefaultConfig:i,getDemandeBaseKey:b,_getUtils:d};
var j=window.SAP.DemandBase.CONST;
var h=window.SAP.DemandBase.jQueryUtils;
var c=window.SAP.DemandBase.JSUtils;
return f;
function e(){return{key:f.getDemandeBaseKey(),globalVariableName:j.GLOBAL_VARIALBLE_NAME,storageName:j.STORAGE_NAME}
}function b(){var k=window._satellite&&window._satellite.getVar("demandbase")||{};
if(!k.key){console.info("_satellite is not defined or _satellite demandbase key is empty.")
}return k.key
}function g(k){k=k||{};
k.utils=k.utils||f._getUtils();
if(k.timeout!==0&&!k.timeout){k.timeout=j.DEFAULT_EVENT_LISTENER_TIMEOUT
}return k
}function i(l){var k=f.createDefaultConfig();
l=l||{};
l.key=l.key||k.key;
l.globalVariableName=l.globalVariableName||k.globalVariableName;
l.storageName=l.storageName||k.storageName;
return l
}function a(k){var m=false,l=[];
k=k||{};
!k.key&&l.push("key is not defined");
!k.globalVariableName&&l.push("globalVariableName is not defined");
!k.storageName&&l.push("storageName is not defined");
if(l.length){console.error(l.join("; "))
}else{m=true
}return m
}function d(){return h.isJQueryAvailable()?h:c
}})();
window.SAP.DemandBase.AsyncService=window.SAP.DemandBase.AsyncService||(function(){var h={findStore:f,findDefaultStore:g,_init:k,_findLocalStore:d,_setCallback:e};
var j=window.SAP.DemandBase.GlobalVariableService;
var b=window.SAP.DemandBase.StorageService;
var i=window.SAP.DemandBase.FetchService;
var a=window.SAP.DemandBase.ConfigurationHelper;
var c=window.SAP.DemandBase.JSUtils;
c.documentReady(h._init);
return h;
function k(){var l=a.createDefaultConfig();
a.applyDefaults(l);
if(a.isValidConfig(l)){if(h._findLocalStore(l)){b.setStore(l)
}else{i.fetchStore(l)
}}}function f(l){l=l||{};
a.applyDefaults(l);
h._setCallback(l);
if(a.isValidConfig(l)){if(h._findLocalStore(l)){l.callback(l.store)
}else{i.waitStore(l)
}}else{l.callback()
}return l.utils.registerCallbacks(l)
}function e(l){l=l||{};
l.callback=function(m){l.store=m;
if(m){l.utils.resolveCallback(l)
}else{l.utils.rejectCallback(l)
}};
return l
}function g(l){l=l||{};
a.applyDefaultConfig(l);
return h.findStore(l)
}function d(l){l.store=j.getStore(l)||b.getStore(l);
return l.store
}})();
(function(){window.SAP=window.SAP||{};
SAP.DTM=SAP.DTM||{};
SAP.DTM.scripts=SAP.DTM.scripts||[];
SAP.DTM.hasScript=function(a){return $(SAP.DTM.scripts).filter(function(){return this.ids.indexOf(a)>=0
})[0]
};
SAP.DTM.addScript=function(a){SAP.DTM.scripts.push(a);
a.invoke=function(){try{a.nativeScript.call(this,arguments)
}catch(b){this.error=b
}};
a.inline=function(){$("<script>"+a.nativeScript.toString().replace(/function(.*)\n/,"").replace(/}$/,"")+"<\/script>").appendTo($("head"))
}
};
SAP.DTM.getScript=function(b){var a=SAP.DTM.hasScript(b);
if(a){return a
}else{return{ids:[b],invoke:function(){console.error("There is no script '"+b+"'")
},inline:function(){console.error("There is no script '"+b+"'")
}}
}}
})();