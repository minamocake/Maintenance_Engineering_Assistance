if(!window.CQ_Analytics){window.CQ_Analytics={}
}(function($,ns){ns.mboxes=ns.mboxes||[];
var eventPersonalization=document.createEvent("CustomEvent");
eventPersonalization.initEvent("personalizationEnds",true,false);
var atjsIntegrator=function($,ns){var SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/;
var instance={};
if(this.constructor==atjsIntegrator.prototype){throw"This is a singleton!"
}if(atjsIntegrator.instance){return atjsIntegrator.instance
}atjsIntegrator.instance=instance;
var _isDebugMode=window.location.href.indexOf("debug-mbox-calls=1")!=-1;
function _debug(message){if(_isDebugMode){console.log(message)
}}var _contextPath=_detectContextPath();
function _detectContextPath(){try{if(window.CQURLInfo){return CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){return result[1]
}}}}catch(e){}return""
}function _addParameter(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}}function _externalize(url){try{if(url.indexOf("/")===0&&_contextPath&&url.indexOf(_contextPath+"/")!==0){url=_contextPath+url
}}catch(e){}return url
}function _get(url){try{var request=$.ajax({type:"GET",url:_externalize(url),async:false,externalize:false,encodePath:false,hook:false});
if(!request){return null
}return request
}catch(e){return null
}}function _appendAmbitSegment(path){return path.replace(/(\/content\/campaigns\/.*?)\/(.*)/,"$1/master/$2")
}function _pullContent(path,mboxName){var url=document.location.pathname,proxyUrl=url;
var offer=_get(path);
var isOfferValid=(offer&&offer.status&&offer.status==200);
if(!isOfferValid){instance.signalDefaultOffer(mboxName);
return false
}var isContentLibraryPath=path.indexOf("/contentlibrary/")!==-1;
if(url.indexOf(".html")!==-1&&!isContentLibraryPath){proxyUrl=url.substring(0,url.indexOf("."))+".targetoffer.html";
proxyUrl+=path
}else{if(isContentLibraryPath){proxyUrl=path.substring(0,path.lastIndexOf("."))+".tntoffer.html"
}}proxyUrl=_addParameter(proxyUrl,"wcmmode","disabled");
var response=_get(proxyUrl);
var isOk=(response&&response.status&&response.status==200);
var hasBody=(response&&response.responseText&&response.responseText.length>0);
var _mboxId=0;
if(isOk&&hasBody){var target=document.getElementById(mboxName);
var outputWritten=false;
if(target){while(target.firstChild){target.removeChild(target.firstChild)
}var childDivs=target.getElementsByTagName("div");
if(childDivs.length==1){target=childDivs[0]
}var scriptwrapper=document.createElement("div");
scriptwrapper.innerHTML=response.responseText;
target.appendChild(scriptwrapper);
var scripts=target.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){eval(scripts[i].text)
}var outputWritten=true;
var parentElement=target.parentElement;
if(parentElement){var event=document.createEvent("CustomEvent");
event.initEvent("target-dom-loaded",true,false);
event.mboxName=mboxName;
parentElement.dispatchEvent(event)
}}if(!outputWritten){document.write(response.responseText)
}}document.dispatchEvent(eventPersonalization)
}function _callMboxUpdate(){for(var i=0;
i<ns.mboxes.length;
i++){var updateArgs={};
if(Array.isArray(ns.mboxes[i].staticParameters)){ns.mboxes[i].staticParameters.map(function(val,idx){var parts=val.split("=");
if(parts.length===2){updateArgs[parts[0]]=parts[1]
}})
}for(var j=0;
j<CQ_Analytics.mboxes[i].mappings.length;
j++){var profileprefix="";
var param=CQ_Analytics.mboxes[i].mappings[j].param;
var keypath="/"+ns.mboxes[i].mappings[j].ccKey.replace(".","/");
if(ns.mboxes[i].isProfile.indexOf(param)>-1){profileprefix="profile."
}var paramValue=ns.DataProvider.replaceVariables(_getContextVariable(keypath));
updateArgs[profileprefix+param]=typeof paramValue!=="undefined"?paramValue:""
}if(ns.mboxes[i].includeResolvedSegments&&ns.SegmentMgr){var resolvedSegments=ns.SegmentMgr.getResolved();
if(resolvedSegments.length>0){updateArgs["profile._cq_.resolvedSegments"]="|"+ns.SegmentMgr.getResolved().join("|")+("|")
}}(function(mboxName,args){setTimeout(function(){CQ_Analytics.TestTarget.updateMboxContent(mboxName,args)
},(i>0?100:0))
})(ns.mboxes[i].name,updateArgs)
}}function _addMappings(mappingsJsonArray){for(var idx=0;
idx<mappingsJsonArray.length;
idx++){var mapKey=mappingsJsonArray[idx]["ccKey"];
if(!instance.mappings[mapKey]){instance.mappings[mapKey]={}
}}}function _getContextVariable(keypath){var value=undefined,contextValue=undefined;
if(window.ContextHub){contextValue=ContextHub.get(keypath)
}else{contextValue=ns.ClientContext.get(keypath)
}if(contextValue){if(Array.isArray(contextValue)){value=contextValue.join(",")
}else{if(typeof contextValue!=="object"){value=contextValue
}}}return value
}function _getMappedProperties(){var properties=[];
if(window.CQ_Analytics&&window.CQ_Analytics.TestTarget&&window.CQ_Analytics.TestTarget.mappings){for(var mappedProp in window.CQ_Analytics.TestTarget.mappings){properties.push(mappedProp)
}}return properties
}function _isInSimulationMode(){if(typeof CQ!="undefined"){if(CQ.WCM&&CQ.utils&&CQ.utils.WCM){return CQ.WCM.isPreviewMode()||CQ.utils.WCM.isEditMode()
}}return _isEditOrPreview()
}function _isEditOrPreview(){var $COOKIE=(document.cookie||"").split(/;\s*/).reduce(function(re,c){var tmp=c.match(/([^=]+)=(.*)/);
if(tmp){re[tmp[1]]=unescape(tmp[2])
}return re
},{});
return(typeof $COOKIE.wcmmode=="undefined"||$COOKIE.wcmmode=="preview"||$COOKIE.wcmmode=="edit")
}function _forceMboxUpdate(){if(_isInSimulationMode()){_callMboxUpdate()
}}instance.registeredCHListeners={};
instance.usedStoresLoaded=false;
instance.defaults={};
instance.mappings=[];
instance.maxProfileParams=200;
instance.pull=function(path,mboxName,version){if(typeof version==="undefined"){path=_appendAmbitSegment(path)
}_pullContent(path,mboxName)
};
instance.updateMboxContent=function(mboxName,params){_debug("Updating content for mbox "+mboxName);
adobe.target.getOffer({mbox:mboxName,params:params,success:function(response){adobe.target.applyOffer({mbox:mboxName,selector:"#"+mboxName,offer:response})
},error:function(response){console.error(response)
}})
};
instance.registerMboxUpdateCalls=function(){if(typeof window.CQ_Analytics!=="undefined"&&window.CQ_Analytics.TestTarget.mappings){_debug("[Target][init] Registering Mbox update calls");
var mappedProperties=_getMappedProperties();
if(mappedProperties.length>0){instance.registerContextHubListeners()
}else{_callMboxUpdate()
}}};
instance.registerContextHubListeners=function(){if(!window.ContextHub){return
}var mappedProperties=_getMappedProperties();
var listenKeys=[];
for(var mappingIdx=0;
mappingIdx<mappedProperties.length;
mappingIdx++){var mappedProperty=mappedProperties[mappingIdx];
var storeName=mappedProperty.split(".")[0];
var listenKey="/"+mappedProperty.replace(".","/");
var contextHubStore=ContextHub.get(storeName);
if(contextHubStore&&!instance.registeredCHListeners[storeName]){instance.registeredCHListeners[storeName]=true;
listenKeys.push(listenKey);
_debug("[Target][CH] - Listening for updates on "+listenKey+" CH")
}}if(listenKeys.length>0){ContextHub.bind(listenKeys,function successHandler(data){_debug("[Target][CH][registerContextHubListeners] All properties available, triggering update!");
_callMboxUpdate();
instance.usedStoresLoaded=true
},function defaultHandler(data){_debug("[Target][CH][registerContextHubListeners] Not all properties available, triggering update!");
if(!instance.usedStoresLoaded){_callMboxUpdate()
}},500)
}};
instance.addMbox=function(mboxDefinition){var replaced=false,alreadyDefined=false;
if(!CQ_Analytics.mboxes){CQ_Analytics.mboxes=[]
}for(var i=0;
i<CQ_Analytics.mboxes.length;
i++){var mbox=CQ_Analytics.mboxes[i];
if(mbox.id==mboxDefinition.id){CQ_Analytics.mboxes.splice(i,1);
replaced=true;
alreadyDefined=mbox.defined;
break
}}mboxDefinition.defined=alreadyDefined;
ns.mboxes.push(mboxDefinition);
_addMappings(mboxDefinition.mappings);
return replaced
};
instance.triggerUpdate=function(delay){if(typeof delay=="undefined"){delay=500
}if(!instance.reloadRequested){instance.reloadRequested=true;
setTimeout(function(){_forceMboxUpdate();
instance.reloadRequested=false
},delay)
}};
instance.signalDefaultOffer=function(mboxName){if(typeof instance.defaults[mboxName]==="undefined"){if(console){console.log("The default offer path was not found in the internal map for mbox "+mboxName)
}return
}var defaultContentPath=instance.defaults[mboxName];
_pullContent(defaultContentPath,mboxName)
};
return instance
};
ns.TestTarget=atjsIntegrator($,ns)
})($,window.CQ_Analytics);