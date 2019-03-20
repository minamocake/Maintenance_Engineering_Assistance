var analyticsFromSession;
if(sessionStorage.initAnalytics){analyticsFromSession=JSON.parse(sessionStorage.initAnalytics);
delete sessionStorage.initAnalytics
}var analyticsParamsWrapper=$(".analyticsParamsWrapper");
var analyticsParamsFromAttribute=!!analyticsParamsWrapper?analyticsParamsWrapper.data("analytics-params"):{};
var analyticsParams=$.extend({},analyticsParamsFromAttribute,analyticsFromSession);
if(analyticsParamsFromAttribute.events&&analyticsFromSession.events){analyticsParams.events=analyticsParamsFromAttribute.events+","+analyticsFromSession.events
}if(analyticsParams){var initParams=function(a){$.each(analyticsParams||{},function(b,c){a[b]=c
})
};
if(!!window.s){initParams(window.s)
}else{if(!!window.sap){initParams(window.sap)
}else{window.sap={};
initParams(window.sap)
}}};