(function(){var c,b=0,d,a,g=false;
d=$("[data-delayed-load-analytics]");
a=d.length;
if(a){$(document).on("onloadDelayedTracking",function(j,i){b++;
e(i);
if(b===a){h()
}});
var f=0;
d.each(function(i,k){var j=parseInt(k.getAttribute("data-delayed-load-analytics"));
f=Math.max(f,isNaN(j)?0:j)
});
if(f){setTimeout(function(){h()
},f)
}}function h(){if(!g){g=true;
var i=document.createEvent("CustomEvent");
i.initCustomEvent("sap_load_analytics_ready",true,true,{});
window.AnalyticsDataLayer=c;
document.dispatchEvent(i)
}}function e(i){if(!c){c=i
}else{Array.prototype.push.apply(c.advertising,i.advertising)
}}})();