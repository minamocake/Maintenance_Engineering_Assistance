window.SAP=window.SAP||{};
window.SAP.sapdx=window.SAP.sapdx||{};
window.SAP.sapdx.footer=window.SAP.sapdx.footer||{};
window.SAP.sapdx.footer.MobileViewHandler=window.SAP.sapdx.footer.MobileViewHandler||function(){var b=$(".footer-standard__holder > .row");
var a=b.find(".footer-column__heading");
if(window.ResponsiveHelper){ResponsiveHelper.addRange({"..767":{on:function(){if($.isFunction($.fn.slideAccordion)){b.slideAccordion({activeClass:"active",wrapper:".footer-column",opener:".footer-column__heading",slider:".footer-column__slide",animSpeed:400})
}},off:function(){a.unbind("click");
b.find(".footer-column__slide").removeAttr("style")
}}})
}};
if($(".shared_footer-container").length){window.SAP.sapdx.footer.MobileViewHandler()
}else{$(document).ready(window.SAP.sapdx.footer.MobileViewHandler)
}window.SAP=window.SAP||{};
window.SAP.sapdx=window.SAP.sapdx||{};
window.SAP.sapdx.footer=window.SAP.sapdx.footer||{};
window.SAP.sapdx.footer.Utils=window.SAP.sapdx.footer.Utils||function(){var b={defaultConfig:{disableElements:[]}};
return{readConfig:d,addCookie:c,getCookie:a,deleteCookie:f,cleanCookie:e};
function d(h){var g=h.data("footer-widget-config")||b.defaultConfig;
if(!$.isArray(g.disableElements)){try{g=JSON.parse(g.replace(/\'/gmi,'"'))
}catch(i){console.info("Footer Widget Configuration cannot be parsed to object");
g=b.defaultConfig
}}return g
}function c(h,k,i){var j=new Date();
j.setTime(j.getTime()+(i*24*60*60*1000));
var g="expires="+j.toGMTString();
document.cookie=h+"="+escape(k)+"; "+g+"; path=/;"
}function a(h){var j,g,l,k=document.cookie.split(";");
for(j=0;
j<k.length;
j++){g=k[j].substr(0,k[j].indexOf("="));
l=k[j].substr(k[j].indexOf("=")+1);
g=g.replace(/^\s+|\s+$/g,"");
if(g===h){return unescape(l)
}}}function f(g){c(g,"",-1)
}function e(g){if(a(g)){f(g)
}}}();
window.SAP=window.SAP||{};
window.SAP.sapdx=window.SAP.sapdx||{};
window.SAP.sapdx.TextView=window.SAP.sapdx.TextView||function(g){var d=c(g||{});
return{init:h,destroy:f};
function c(j){var k={utils:window.SAP.sapdx.footer.Utils,TEXT_VIEW_COOKIE_NAME:j.COOKIE_NAME||"SAP.TEXTONLY",$container:j.$container,onSelector:j.onSelector||".textView",offSelector:j.offSelector||".fullBrowserView",TEXT_VIEW_CLASS:"textOnlyView"};
k.$elOff=k.$container.find(k.offSelector);
k.$elOn=k.$container.find(k.onSelector);
return k
}function h(){e();
b()
}function f(){d.$elOn.closest(".footer-list__item").remove()
}function e(){d.$container.off(".textView").on("click.textView",d.offSelector,a).on("click.textView",d.onSelector,i)
}function b(){if(d.utils.getCookie(d.TEXT_VIEW_COOKIE_NAME)){i()
}d.$elOn.addClass("visible")
}function i(j){d.utils.addCookie(d.TEXT_VIEW_COOKIE_NAME,"true");
if($(this).attr("href")==="#"&&j){j.preventDefault()
}$("*").addClass(d.TEXT_VIEW_CLASS);
d.$elOff.slideDown()
}function a(){$(d.offSelector).slideUp();
d.utils.cleanCookie(d.TEXT_VIEW_COOKIE_NAME);
$("*").removeClass(d.TEXT_VIEW_CLASS)
}};
window.SAP=window.SAP||{};
window.SAP.sapdx=window.SAP.sapdx||{};
window.SAP.sapdx.footer=window.SAP.sapdx.footer||{};
window.SAP.sapdx.footer.Widget=window.SAP.sapdx.footer.Widget||function(g){var c=q(g||{});
return{init:n};
function q(u){var v={$el:u.$el,textView:window.SAP.sapdx.TextView,footerComponent:window.SAP.sapdx.footer.Component,utils:window.SAP.sapdx.footer.Utils,disable:{SHARE_AND_FOLLOW:o,COOKIE_PREFERENCES:d,TEXT_VIEW:e,CONTACT_US_LINK:l}};
v.$container=v.$el.parent();
return v
}function f(){var v=$("#sapdx-footer");
if(v.length){var x=$(".footer-standard__holder").find("img");
for(var w=0,u=x.length;
w<u;
w++){var y=x[w].getAttribute("data-src");
if(y){x[w].setAttribute("src",y)
}}}}function n(){a();
h();
t();
k();
s();
j();
r();
f()
}function r(){var u=$(".footer-current-context-page-data").data("mailto-share-link");
c.$el.find(".share .social-networks__link").each(function(){var v=$(this);
if(v.data("share-channel")==="mailto"&&u){v.attr("href","mailto:?body="+encodeURIComponent(u)+"?source=social-atw-mailto")
}else{if(u){v.attr("data-share-url",u+v.data("share-url"))
}else{v.removeAttr("data-share-url")
}}})
}function a(){c.containerConfig=c.utils.readConfig(c.$container)
}function h(){c.containerConfig.disableElements.forEach(function(v){var u=c.disable[v];
if($.isFunction(u)){u()
}})
}function t(){var u=c.containerConfig["contactus-url"];
if(!!u){c.$el.find(".footer-contact a.contact-us-footer-link").attr("href",u)
}}function k(){var v=c.containerConfig["phone-number"];
if(!!v){var u=c.$el.find(".footer-contact a.call-phone__link");
u.text(v);
u.attr("href","tel:"+v);
u.attr("data-tel-number","tel:"+v)
}}function o(){c.$el.find(".social-networks").remove()
}function d(){c.$el.find("#teconsent").remove();
c.$el.find(".cookiePreference").closest(".footer-list__item").remove()
}function e(){c.isTextViewDisabled=true
}function l(){c.$el.find(".footer-contact:has(a.contact-us-footer-link)").parent("div").remove()
}function s(){m()
}function m(){b();
if(c.isTextViewDisabled){p()
}else{i()
}}function b(){c.textView=c.textView({$container:c.$el})
}function i(){c.textView.init()
}function p(){c.textView.destroy()
}function j(){c.$el.show()
}};
$(function(){$(".footer-standard").each(function(){var a=$(this);
var b=a.data("sapdx-footer-initialized");
if(!b){window.SAP.sapdx.footer.Widget({$el:a}).init();
a.data("sapdx-footer-initialized",true)
}})
});