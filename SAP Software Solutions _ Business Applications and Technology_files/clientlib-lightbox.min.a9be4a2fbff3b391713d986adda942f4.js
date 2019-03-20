namespace("SAP.wcms.sapdx.page.lightBox.launcher");
SAP.wcms.sapdx.page.lightBox.launcher.PdfLightboxLauncher=(function(){var g={headerMessageKey:"Forms.Lightbox.DocumentNotFound.MainTitle.Text",failTitleKey:"Forms.Lightbox.DocumentNotFound.Headline.Text",errorMessageKey:"Forms.Lightbox.DocumentNotFound.Paragraph.Text",buttonTitleKey:"Forms.Lightbox.DocumentNotFound.Submit.Button.Label"};
var c=function(){},d=false;
c.prototype={openLightBox:function(k,l){var m=l?$(l.currentTarget).hasClass("lightbox-footer-link"):false;
if(d&&!m){return false
}d=true;
h();
var j=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.createDomElementOrReturnExists(k);
if(j.hasClass("lightbox-footer-link")){$.magnificPopup.close()
}e(j,l)
}};
function e(j,k){var l=k;
b(j).done(function(m){j=i(j,m);
a(j,false,l)
}).fail(function(){SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.openErrorPopup(g);
$(document).trigger("loadingLightboxInterrupted")
})
}function a(j,k,l){SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncher.processLink(j,k,l)
}function b(j){var k=!!j.data("is-fake-target")?"assetId="+j.attr("assetId"):"link="+j.attr("href").split("#")[0];
return $.get("/bin/sapdx/assetMetadata.pdf.json?"+k+"&path="+$("html").data("page-path"))
}function f(j){var k=$.deparam.querystring();
k.shareId=j;
delete k.source;
return decodeURIComponent($.param.querystring(window.location.pathname,k))
}function i(j,k){j.attr("data-pdf-asset-direct-link",k.direct_link);
j.attr("data-pdf-asset-download-link",k.download_link);
j.attr("data-exclude-download-tracking","true");
j.attr("data-asset-id",k.id);
j.attr("data-analytics-assetid",k.analytics_id);
j.attr("data-asset-title",k.title);
j.attr("data-asset-description",k.description);
j.attr("data-light-box-type",k.lightboxType);
j.attr("data-dgl-asset",k.dglAsset);
!j.attr("href")&&j.attr("href",k.asset_view_link);
j.attr("data-share-link",f(k.id));
return j
}function h(){$(document).one("lightboxClosed",function(){d=false
});
$(document).one("loadingLightboxInterrupted",function(){d=false
})
}return c
})();
namespace("SAP.wcms.sapdx.page.lightBox.launcher");
SAP.wcms.sapdx.page.lightBox.launcher.VideoLightboxLauncher=(function(){var g={headerMessageKey:"Forms.Lightbox.VideoNotFound.MainTitle.Text",failTitleKey:"Forms.Lightbox.VideoNotFound.Headline.Text",errorMessageKey:"Forms.Lightbox.VideoNotFound.Paragraph.Text",buttonTitleKey:"Forms.Lightbox.VideoNotFound.Submit.Button.Label"};
var a=function(){},e=false;
a.prototype={openLightBox:function(l,n){var o=n?$(n.currentTarget).hasClass("lightbox-footer-link"):false;
if(e&&!o){return false
}e=true;
i();
var k=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.createDomElementOrReturnExists(l);
if(k.hasClass("lightbox-footer-link")){$.magnificPopup.close()
}if(c(k)&&b(k)){var m=k.hasClass("lightBoxControlWrapper");
k=m?k:k.find(".lightBoxVideoWrapper");
SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncher.processLink(k,m,n)
}else{j(k,n)
}}};
function c(k){return k.hasClass("lightBoxControlWrapper")||!!k.find(".lightBoxVideoWrapper").length
}function b(k){return k.find(".lightBoxVideoWrapper").data("asset-id")
}function f(k){var l=$.deparam.querystring();
l.shareId=k;
delete l.source;
return decodeURIComponent($.param.querystring(window.location.pathname,l))
}function j(k,m){var l=Handlebars.compile($(".videoElementLightbox").html());
var n=m;
d(k).done(function(p){var o=$(l(p));
k.append(o);
!k.attr("href")&&k.attr("href",p.damLink);
o.attr("data-share-link",f(p.id));
o.data("asset-id",p.id);
SAP.sapdx.video.initVideoComponent(o.find("video"));
SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncher.processLink(o,false,n)
}).fail(function(){SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.openErrorPopup(g);
$(document).trigger("loadingLightboxInterrupted")
})
}function d(k){var l=!!k.data("is-fake-target")?"assetId="+k.attr("assetId"):"link="+h(k);
return $.get("/bin/sapdx/assetMetadata.video.json?"+l+"&path="+$("html").data("page-path"))
}function h(k){return k.attr("href")?k.attr("href"):k.parent().find(".video-js").attr("data-dam-link")
}function i(){$(document).one("lightboxClosed",function(){e=false
});
$(document).one("loadingLightboxInterrupted",function(){e=false
})
}return a
})();
namespace("SAP.wcms.sapdx.page.lightBox.launcher");
SAP.wcms.sapdx.page.lightBox.launcher.HtmlContentLightboxOverlayLauncher=(function(){var a=function(){};
a.prototype={openLightBox:function(d,e){var c=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.createDomElementOrReturnExists(d);
b(c,e)
}};
function b(c,d){var f=d;
SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncher.processLink(c,false,f)
}return a
})();
namespace("SAP.wcms.sapdx.page.lightBox.launcher");
SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncherFactory=(function(){var a=function(){};
a.prototype={pdf:function(){return new SAP.wcms.sapdx.page.lightBox.launcher.PdfLightboxLauncher()
},video:function(){return new SAP.wcms.sapdx.page.lightBox.launcher.VideoLightboxLauncher()
},htmlContentLightboxOverlay:function(){return new SAP.wcms.sapdx.page.lightBox.launcher.HtmlContentLightboxOverlayLauncher()
}};
return a
})();
namespace("SAP.wcms.sapdx.page.lightBox.launcher");
SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncher=(function(){function d(i,j,h){var l=new MobileDetect(window.navigator.userAgent),f=c(i,l),g=b(f),n=f==="video",k=i.data("light-box-container"),p=e(i);
if(!g){return
}if(k==="promoBanner"){i=i.closest(".slide")
}var m={isFromGatedFlow:false,lightBoxType:f,isOpenedByClick:!!h&&h.type==="click"};
if(typeof s!=="undefined"){s.eVar5=SAP.sapdx.gating.analytics.getReferrer(m.isOpenedByClick)
}if(j){g(i,l,m)
}else{if(n&&p===undefined){p=i.find("video").attr("data-dam-link")
}var o=a(i);
m.assetId=o;
SAP.sapdx.gating.assets.links.core.handleAssetLink(p,m,function(){m.isFromGatedFlow=SAP.sapdx.gating.analytics.isInGatingFlowForAsset(o);
g(i,l,m)
})
}}function e(f){return f.attr("href")||f.parent().attr("href")
}function a(g){var f=g.attr("data-analytics-assetid")||g.parent().attr("data-analytics-assetid")||g.find("video").attr("data-analyticsassetid")||"";
return f.split("|")[0]
}function c(f,h){var g=f.attr("data-light-box-type");
var i="-mobile";
if(h.mobile()){g+=(g.indexOf(i)>-1)?"":i;
f.data("light-box-type",g)
}return g
}function b(f){return SAP.wcms.sapdx.page.lightBox.processors[f]
}return{processLink:d}
})();
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils={LightBoxPdfViewerMode:{NORMAL:0,FULLSCREEN:1},LightboxScaleType:{NORMAL:"normal",PAGE_FIT:"page-fit"},LightBoxPdfViewerKey:{ARROW_UP:38,ARROW_DOWN:40,ARROW_LEFT:37,ARROW_RIGHT:39,PAGE_UP:33,PAGE_DOWN:34,HOME_BUTTON:36,END_BUTTON:35},POPUP_CONTENT_CLASS:"popupContent",CSS_UNITS:96/72,DEFAULT_BUFFER_SIZE:10,scrollIntoView:function(c,a,f){var h=c.offsetParent;
if(!h){console.error("offsetParent is not set -- cannot scroll");
return
}var e=!!$(h).parents(".pdfLightbox").length;
var j=($(window).width()<=1000);
var i=this.getParentScrollContainerClass(j||e);
var g=document.getElementsByClassName(i)[0];
var b=c.offsetTop+c.clientTop;
var d=c.offsetLeft+c.clientLeft;
if(b!==0){while(h!==g){if(h.dataset._scaleY){b/=h.dataset._scaleY;
d/=h.dataset._scaleX
}b+=h.offsetTop;
d+=h.offsetLeft;
h=h.offsetParent;
if(!h){return
}}}else{h=g||h
}if(f){if(f.top!==undefined){b+=f.top
}if(f.left!==undefined){d+=f.left;
h.scrollLeft=d
}}if(j&&b!==0){b-=$(".lightboxPopup .popupHeader").outerHeight()
}if(e&&b!==0){if(!j){b-=$(".lightboxPopup .popupHeader .toolbar-container").outerHeight()
}else{b+=$(".lightboxPopup .popupHeader").outerHeight()-$(".lightboxPopup .popupHeader .toolbar-container").outerHeight()
}}h.scrollTop=b
},getParentScrollContainerClass:function(a){if(a){return"mfp-wrap"
}return"popupContent"
},getListOfDynamicComponents:function(){return $("body").data("dynamicComponents").split(",")
},isDynamicComponentsPresentOnPage:function(c){var b=SAP.DTM.pageComponents||[];
var a=false;
c.forEach(function(d){if(b.indexOf(d)>=0){a=true
}});
return a
},processDynamicPageOpen:function(d,a,c){var e=this.getListOfDynamicComponents();
if(this.isDynamicComponentsPresentOnPage(e)){var b=$("<a/>").attr("assetId",d).data("is-fake-target",true);
a(b)
}else{c&&c()
}},openErrorPopup:function(b){var a=Handlebars.compile($(".messageLightbox").html());
Handlebars.registerPartial("content",Handlebars.compile($(".errorMessageContent").html()));
var c=a({headerMessage:CQ.I18n.getI18nMessage(b.headerMessageKey),failTitle:CQ.I18n.getI18nMessage(b.failTitleKey),errorMessage:CQ.I18n.getI18nMessage(b.errorMessageKey),buttonTitle:CQ.I18n.getI18nMessage(b.buttonTitleKey)});
$.magnificPopup.open({items:{src:c,type:"inline"},mainClass:"form-popup",showCloseBtn:false,fixedContentPos:true,modal:true});
$(".form-popup .close-button, .error-close-button").click(function(){$.magnificPopup.close()
})
},createDomElementOrReturnExists:function(b){if($.type(b)==="string"){var a=$("<a/>");
a.attr("href",b);
return a
}return b
},getAssetLinkPropertyName:function(){var a=window.location.hash.match(/pdf-asset=[-a-f0-9]/)?"asset_view_link":"damLink";
return a
},getAssetMetadataServletLink:function(){var a=window.location.hash.match(/pdf-asset=[-a-f0-9]/)?"pdf":"video";
return"/bin/sapdx/assetMetadata."+a+".json?assetId="
},openLightboxByAssetId:function(d,a,c){var b=this;
$.get(b.getAssetMetadataServletLink()+d+"&path="+$("html").data("page-path")).done(function(e){a(e[b.getAssetLinkPropertyName()])
}).error(function(){b.openErrorPopup(c)
})
},getHashForLinkToADP:function(){var a=window.location.hash.replace(/(pdf-asset|video)=[-a-f0-9]+&?/,"");
return a.length>1?a:""
},isVideoAssetFromIntegratedReportsPage:function(){return window.location.hash.match(/video=[-a-f0-9]/)&&window.location.href.match(/\/integrated-reports.*/)?true:false
},createADPLinkForVideoAssetFromIntegratedReportsPage:function(a){return"/assetdetail"+a.match(/\/(\d{4})\/\d{2}\/[\w-]+/)[0]+".html"
},redirectToADP:function(b){var a=this;
$.get(a.getAssetMetadataServletLink()+b+"&path="+$("html").data("page-path")).done(function(c){var e;
var d=c[a.getAssetLinkPropertyName()].match(/\/(investors|corporate|integrated-reports).*/);
if(d&&c[a.getAssetLinkPropertyName()].indexOf("/docs/download")===-1){if(a.isVideoAssetFromIntegratedReportsPage()){e=a.createADPLinkForVideoAssetFromIntegratedReportsPage(c.directDamLink)
}else{e=c[a.getAssetLinkPropertyName()].match(/\/(documents|assetdetail).*/)[0]
}}else{e=c[a.getAssetLinkPropertyName()]
}window.location.assign(e+window.location.search+a.getHashForLinkToADP())
})
},getPageTemplate:function(b,a){return'<div class="pageWrapper"><div class="textLayer"></div><div class="annotationLayer"></div><div class="canvasWrapper" style="width: '+b+"px; height: "+a+'px;"></div></div>'
},removeShareIdRequestParameter:function(){var b=$.deparam.querystring();
if(b.shareId){delete b.shareId;
var a=decodeURIComponent($.param.querystring(window.location.pathname,b)+window.location.hash);
history.replaceState(history.state,document.title,a)
}},getUrlIdFromAssetLink:function(a){var b=a.match(/url_id=(.*?)(?=\&|$)/);
return b?b[1]:undefined
},getUrlIdFromAssetLinkPresentedOnThePageByAssetId:function(b){var a=$('[data-asset-id*="'+b+'"]').filter(".activePdfLink,.activeVideoLink").attr("href");
return a?this.getUrlIdFromAssetLink(a):undefined
},fitToScreenHeight:function(e,b,h,k,f){var d=1000;
var j=(e.width()>d)?100:0;
var i="shortContentLightbox";
var a=$(".mfp-wrap");
var c=k.outerHeight();
var g=e.innerHeight()-b.outerHeight()-h.outerHeight()-j;
if(f){if(g>c){k.css("height",g);
a.addClass(i)
}else{a.removeClass(i);
k.css("height","")
}}else{k.css("height",g)
}},isExitFullScreenIE:false};
namespace("SAP.wcms.sapdx.page.lightBox");
SAP.wcms.sapdx.page.lightBox.LightBoxPdfPage=(function(){var c=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightBoxPdfViewerMode;
var b=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils;
var a=b.CSS_UNITS;
var d=function(e){this.docPage=e.docPage;
this.linkService=e.linkService||new pdfjsWebPDFLinkService.SimpleLinkService();
this.viewport=e.viewport;
this.$canvasWrapper=e.$canvasWrapper;
this.$canvas=e.$canvas;
this.$canvasTextLayer=e.$canvasTextLayer;
this.$canvasAnnotationLayer=e.$canvasAnnotationLayer;
this.rendered=false;
this.renderTask=null;
this.$pageWrapper=e.$pageWrapper;
this.pdfViewer=e.pdfViewer;
this.isMobile=e.isMobile;
this.onBeforeDraw=e.onBeforeDraw
};
d.prototype={get width(){return this.viewport.width
},get height(){return this.viewport.height
},destroy:function(){this.cancelRendering();
if(this.$canvas){this.$canvas.css("width",0);
this.$canvas.css("height",0)
}this.$canvas=null;
this.context=null;
this.$canvasTextLayer=null;
this.textLayer=null;
this.$pageWrapper.find(".textLayer").remove();
this.annotationLayer=null;
this.$canvasAnnotationLayer=null;
this.$pageWrapper.find(".annotationLayer").remove();
this.$canvasWrapper=null;
this.$canvasWrapper=$('<div class="canvasWrapper"/>');
this.$canvasWrapper.width(Math.floor(this.viewport.width));
this.$canvasWrapper.height(Math.floor(this.viewport.height));
this.$pageWrapper.find(".canvasWrapper").remove();
this.$pageWrapper.append(this.$canvasWrapper);
this.$pageWrapper.removeAttr("style");
this.rendered=false;
if(this.docPage){this.docPage.cleanup()
}},render:function(){if(this.rendered){return
}if(this.onBeforeDraw){this.onBeforeDraw()
}this._renderPage();
this.rendered=true
},_renderPage:function(){var e=this;
e.reset();
e._createRenderTask();
if(!this.pdfViewer||this.pdfViewer.presentationMode===c.NORMAL){e._setupText();
e._setupAnnotations()
}e.renderTask.promise.then(function(){f();
g()
},function(h){g(h)
});
function f(){e.$canvasWrapper.addClass("rendered");
e.$canvasWrapper.append(e.$canvas)
}function g(h){e.renderTask=null;
if(h&&h!=="cancelled"){console.error(h)
}}},reset:function(){this.cancelRendering();
this._resetCanvas();
this._resetTextLayer();
this._resetAnnotationLayer();
this._resetCanvasWrapper();
this.rendered=false
},cancelRendering:function(){if(this.renderTask){this.renderTask.cancel();
this.renderTask=null
}if(this.textLayer){this.textLayer.cancel();
this.textLayer=null
}},_resetCanvas:function(){if(this.$canvas){this.$canvas.css("width",0);
this.$canvas.css("height",0)
}this.$canvas=$("<canvas/>");
this.context=this.$canvas[0].getContext("2d");
this._scaleCanvas()
},_scaleCanvas:function(){var f=this._getCanvasRatio();
if(this._isRestrictedScaling()){this.cssTransform();
var g=this.viewport.clone({scale:a});
f*=g.width/this.viewport.width
}if(PDFJS.maxCanvasPixels>0){var e=this.viewport.width*this.viewport.height;
var h=Math.sqrt(PDFJS.maxCanvasPixels/e);
if(f>h){f=h
}}this.$canvas.css("width",Math.floor(this.viewport.width));
this.$canvas.css("height",Math.floor(this.viewport.height));
this.$canvas.attr("height",Math.floor(this.viewport.height*f));
this.$canvas.attr("width",Math.floor(this.viewport.width*f));
this.context._transformMatrix=[f,0,0,f,0,0];
this.context.scale(f,f)
},_isRestrictedScaling:function(){return this.isMobile&&(Math.floor(this.viewport.width)*Math.floor(this.viewport.height))>PDFJS.maxCanvasPixels
},cssTransform:function(){var h=this.viewport.width;
var e=this.viewport.height;
this.$canvas.css("width",h);
this.$canvasWrapper.css("width",h);
this.$pageWrapper.css("width",h);
this.$canvas.css("height",e);
this.$canvasWrapper.css("height",e);
this.$pageWrapper.css("height",e);
var g=0,f=0;
if(this.textLayer){var i=h/this.textLayer.viewport.width;
this.$pageWrapper.find(".textLayer").css("transform","scale("+i+", "+i+") translate("+g+", "+f+")");
this.$pageWrapper.find(".textLayer").css("transformOrigin","0% 0%")
}if(this.annotationLayer){this.annotationLayer.render(this.viewport,"display")
}},_getCanvasRatio:function(){var e=window.devicePixelRatio||1;
var f=this._getBackingStoreRatio();
return e/f
},_getBackingStoreRatio:function(){var e=this.context.webkitBackingStorePixelRatio||this.context.mozBackingStorePixelRatio||this.context.msBackingStorePixelRatio||this.context.oBackingStorePixelRatio||this.context.backingStorePixelRatio;
return e||1
},_resetTextLayer:function(){this.$canvasTextLayer=null;
this.textLayer=null;
this.$canvasTextLayer=$('<div class="textLayer"/>');
this.$pageWrapper.find(".textLayer").remove();
this.$pageWrapper.append(this.$canvasTextLayer)
},_resetAnnotationLayer:function(){this.annotationLayer=null;
this.$canvasAnnotationLayer=$('<div class="annotationLayer"/>');
this.$pageWrapper.find(".annotationLayer").remove();
this.$pageWrapper.append(this.$canvasAnnotationLayer)
},_resetCanvasWrapper:function(){this.$canvasWrapper=null;
this.$canvasWrapper=$('<div class="canvasWrapper"/>');
this.$canvasWrapper.width(Math.floor(this.viewport.width));
this.$canvasWrapper.height(Math.floor(this.viewport.height));
this.$pageWrapper.find(".canvasWrapper").remove();
this.$pageWrapper.append(this.$canvasWrapper);
this.$pageWrapper.removeAttr("style")
},_createRenderTask:function(){if(this.renderTask){this.renderTask.cancel()
}var e=this.docPage.render({canvasContext:this.context,viewport:this.viewport});
this.renderTask=e
},_setupAnnotations:function(){var e=new pdfjsWebAnnotationLayerBuilder.AnnotationLayerBuilder({pageDiv:this.$canvasAnnotationLayer.get(0),pdfPage:this.docPage,linkService:this.linkService});
this.annotationLayer=e.render(this.viewport)
},_setupText:function(){var e=this;
this.docPage.getTextContent().then(function(f){var g=new pdfjsWebTextLayerBuilder.TextLayerBuilder({textLayerDiv:e.$canvasTextLayer.get(0),pageIndex:e.docPage.pageIndex,viewport:e.viewport,findController:e.findController});
g.setTextContent(f);
e.textLayer=g;
g.render()
})
},resize:function(e){this.viewport=e;
this.rendered=false;
this.$canvasWrapper.removeClass("rendered");
this._resetTextLayer();
this._resetAnnotationLayer();
this._resetCanvasWrapper()
},setViewport:function(e){this.viewport=e
},initDomElements:function(e){this.rendered=false;
this.$pageWrapper=e;
this.textLayer=null;
this.$canvasTextLayer=e.find(".textLayer");
this.$canvasAnnotationLayer=e.find(".annotationLayer");
this.$canvasWrapper=e.find(".canvasWrapper")
}};
return d
})();
SAP.wcms.sapdx.page.lightBox.LightBoxPdfToolbarController=(function(){var a=function(c,b,d){this.$toolbar=c;
this.documentsPage=b;
this.md=d
};
a.prototype.initDownloadButton=function(d,b,e){var c=this.$toolbar.find(".icon-download");
c.attr({target:"_blank",href:d,"data-analytics-assetid":e,download:""});
if(this.md.is("AndroidOS")){return
}c.on("click",function(g){g.preventDefault();
var f=new pdfjsWebDownloadManager.DownloadManager();
b.getData().then(function(i){var h=PDFJS.createBlob(i,"application/pdf");
f.download(h,d,pdfjsWebUIUtils.getPDFFileNameFromURL(d))
})
})
};
a.prototype.setUpToolbar=function(){var b=this.$toolbar.find(".icon-email");
b.on("click",function(){var d=$.deparam.querystring();
d.source="social-atw-mailto";
var c=window.location.origin+decodeURIComponent($.param.querystring(window.location.pathname,d))+window.location.hash;
b.attr("href","mailto:?body="+encodeURIComponent(c))
});
this.$toolbar.show()
};
return a
})();
SAP.wcms.sapdx.page.lightBox.videoToolbarController=(function(){var c=function(){var d=this.$toolbar.find(".icon-email");
d.on("click",function(){var f=$.deparam.querystring();
f.source="social-atw-mailto";
var e=window.location.origin+decodeURIComponent($.param.querystring(window.location.pathname,f))+window.location.hash;
d.attr("href","mailto:?body="+encodeURIComponent(e))
})
};
var a=function(d){this.$context=null;
this.assetUrl=d;
this.$toolbar=null
};
var b=function(d){this.$context=d;
this.$toolbar=d.content.find(".toolbar")
};
a.prototype.initContext=b;
a.prototype.initEmailLink=c;
return a
})();
SAP.wcms.sapdx.page.lightBox.LightBoxPdfController=(function(){var ai,g,k,aa,T,a,aj,d,S,V,ap,O,K=[],L,e,j,w,E=5,l,f="shortContentLightbox",P=$(window),m="mobile-lightbox",c="activePdfLink",A=1000,af=56,al,an,n=false,t,x,b,ad,R,q,U,F,ao=3,D;
var p=function(){return g.context&&g.context.search?g.context.search.match(/url_id=(.*?)(?=\&|$)/)[1]:SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.getUrlIdFromAssetLinkPresentedOnThePageByAssetId(a)
};
var y=function(au,at,av){ai=at;
g=au;
k=g.data("pdf-asset-direct-link");
aa=g.data("pdf-asset-download-link");
a=g.data("asset-id");
d=g.data("analytics-assetid");
ad=g.data("dgl-asset");
R=av;
q=p();
D=g.data("light-box-type")
};
var N=function(){if(typeof s!=="undefined"&&d){var at={eVar21:"sap:"+d,events:!R.isFromGatedFlow?"event26,event10":"event26",eVar5:SAP.sapdx.gating.analytics.getReferrer(R.isOpenedByClick)};
if(!!q&&!R.isFromGatedFlow){at.eVar13=q;
SAP.sapdx.analytics.cookies.checkAndSetCookie("url_id",q)
}s.track(at);
s.clearVars();
q=undefined
}};
var i=function(au){var at=au.getViewport(1);
var av=e.width()/at.width;
return au.getViewport(av)
};
var o=function(aB,ax,au){var ay=$('<div class="pageWrapper"/>');
var av=$('<div class="canvasWrapper"/>');
var aA=$('<div class="textLayer"/>');
var at=$('<div class="annotationLayer"/>');
var az=$("<canvas/>");
var aw=i(ax);
av.width(aw.width);
av.height(aw.height);
az.attr("width",aw.width);
az.attr("height",aw.height);
ay.append(av);
ay.append(aA);
ay.append(at);
aB.append(ay);
K.push(new SAP.wcms.sapdx.page.lightBox.LightBoxPdfPage({docPage:ax,viewport:aw,$canvasWrapper:av,$canvas:az,$canvasTextLayer:aA,$canvasAnnotationLayer:at,$pageWrapper:ay,linkService:au}))
};
var G=function(az,av){var au=[];
for(var at=1;
at<=av.numPages;
at++){var ay=av.getPage(at)["catch"](function(aA){if(aA&&aA.message!=="Transport destroyed"){console.error(aA)
}});
au.push(ay)
}var aw=new pdfjsWebPDFLinkService.PDFLinkService();
aw.setDocument(av);
var ax=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfViewer({$wrapper:L,$popupContent:e,$lightboxContainer:e,$scrollContainer:e,pdfAssetId:a,lightboxType:D});
ax.setDocument(av);
ax.setPages(K);
aw.setViewer(ax);
return Promise.all(au).then(function(aA){aA.forEach(function(aB){o(az,aB,aw)
})
})
};
var ac=function(aw){var av=aw.first-1;
var au=aw.last+1;
for(var at=av;
at<=au;
at++){if(at>=0&&at<K.length){K[at].render()
}}};
var J=function(at){if(at&&!n){j.addClass("minified");
j.css("paddingBottom",af);
n=true
}else{if(!at&&n){j.removeClass("minified");
j.css("paddingBottom","");
n=false
}}};
var ah=function(av){if(!ai.is("AndroidOS")){return false
}var aw=window.document;
var ax=aw.documentElement;
var au=ax.requestFullscreen||ax.mozRequestFullScreen||ax.webkitRequestFullScreen||ax.msRequestFullscreen;
var at=aw.exitFullscreen||aw.mozCancelFullScreen||aw.webkitExitFullscreen||aw.msExitFullscreen;
if(!av&&!aw.fullscreenElement&&!aw.mozFullScreenElement&&!aw.webkitFullscreenElement&&!aw.msFullscreenElement){au.call(ax)
}else{at.call(aw)
}};
var Y=function(){var at=L.scrollTop();
if(at>=ap){J(true)
}else{J(false)
}};
var ak=function(at){var au="#pdf-asset="+a+"&page="+at;
if(au!==window.location.hash){window.location.replace(au)
}};
var Z=function(){var at=Math.max(document.documentElement.clientHeight,window.innerHeight);
var au=at/2;
var az=null;
var av=null;
var ay=null;
for(var ax=0;
ax<K.length;
ax++){var aw=K[ax].$canvasWrapper[0].getBoundingClientRect();
if(aw.top>at){break
}if(aw.bottom>0&&aw.top<at){if(az===null){az=ax
}if(av===null&&aw.bottom>au){av=ax
}ay=ax
}}return{first:az,central:av,last:ay}
};
var ab=function(){var at=Z();
ak(at.central+1);
ac(at)
};
var H=function(){var at=$.debounce(100,ab);
L.on("scroll",function(){Y();
at()
})
};
var Q=function(){if(history.replaceState){var at=window.location.pathname+window.location.search;
history.replaceState("",document.title,at)
}else{var au=document.body.scrollTop;
window.location.hash="";
document.body.scrollTop=au
}};
var M=function(){var at=window.location.hash;
if(!at&&SAP&&SAP.locationHash){at="#"+SAP.locationHash
}return at
};
var X=function(){var av=M(),at=av.match(/page=(\d+)/)||(g.attr("href")&&g.attr("href").match(/page=(\d+)/));
if(at){var au=parseInt(at[1],10);
if(au&&au>0&&au<=K.length){return au-1
}}return 0
};
var ag=function(av){var au=K[av].$canvasWrapper.parent();
var at=j.outerHeight();
L.scrollTop(au.position().top-at)
};
var aq=function(){var at=Z().central;
K.forEach(function(av){var au=i(av.docPage);
av.resize(au)
});
ac(Z());
ag(at)
};
var C=function(){S=j.outerHeight();
ap=S+parseInt(O.css("marginTop"))-af
};
var ar=function(){if(al>=A){L.removeClass(f);
return false
}SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.fitToScreenHeight(P,j,w,e,true)
};
var B=function(){setTimeout(function(){window.scrollTo(0,1)
},0)
};
var h=function(av,at,au){av.dotdotdot({wrap:"word",height:Math.round(parseFloat(av.css("line-height"))*at),callback:function(){au&&au()
}})
};
var ae=function(){h(U,E);
h(F,ao)
};
var v=function(){an=P.width();
if(ai.mobile()){B()
}al=an;
C();
aq();
ae();
ar()
};
var u=function(){P.on("resize.pdf-ligthbox orientationchange.pdf-ligthbox",$.debounce(150,v))
};
var z=function(){$(".lightboxPopup .loadingBar").removeClass("hidden")
};
var r=function(){$(".lightboxPopup .loadingBar").addClass("hidden")
};
var am=function(){$(".lightboxPopup .lightboxContainer").removeClass("hidden")
};
var I=function(){$(".lightboxPopup .lightboxContainer").addClass("hidden")
};
y.prototype.openLightbox=function(){if(ad){PDFJS.disableStream=true;
PDFJS.disableRange=true
}N();
ah(false);
O=this.content;
e=this.content.find(".popupContent");
j=this.content.find(".popupHeader");
w=this.content.find(".popupFooter");
F=w.find(".info-container .he");
U=w.find(".info-container .text");
S=j.outerHeight();
l=this.content.find(".toolbar");
x=l.find(".share-wrap");
t=x.find(".share-dropdown a");
L=this.wrap;
al=P.width();
T=$("body");
V=$("."+c);
aj=P.scrollTop();
if(ai.mobile()){j.css("transition","none");
w.css("transition","none");
B();
T.addClass(m)
}else{L.css("top",P.scrollTop())
}if(!t.length){x.hide()
}z();
I();
ae();
W()
};
function W(){b=PDFJS.getDocument(k);
b.then(function(at){var au=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfToolbarController(l,g.attr("href"),ai);
au.setUpToolbar();
au.initDownloadButton(aa,at,d);
G(e,at).then(function(){r();
ar();
am();
C();
H();
u();
var av=X();
if(av!==0){ag(av)
}else{ak(1)
}ac(Z())
})
},function(at){if(at&&at.message!=="Worker was destroyed"){console.error(at)
}})
}y.prototype.closeLightbox=function(){if(ad){PDFJS.disableStream=false;
PDFJS.disableRange=false
}if(b){b.destroy()
}K=[];
ah(true);
n=false;
Q();
L.off("scroll");
L.css("top","");
e.css("height","");
P.off("orientationchange.pdf-ligthbox resize.pdf-ligthbox");
j.css("paddingBottom","");
T.removeClass(m);
P.scrollTop(aj);
V.removeClass(c);
$(document).trigger("lightboxClosed");
$(document).trigger("resumeScrollBehaviour");
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.removeShareIdRequestParameter()
};
return y
})();
SAP.wcms.sapdx.page.lightBox.ShareDropdownItemsController=(function(){var b=function(d){this.resourceLink=d
};
var a=function(){var e=$(".followShareWrap .share a");
var d=[];
e.each(function(g,i){var f=$(i);
if(f.data("title")){var h=f.data("share-channel");
d.push({"share-channel":h,title:f.data("title"),"class":window.getLightboxAwesomeFontName?window.getLightboxAwesomeFontName(h):"",shareClass:f.attr("class")})
}});
return d
};
var c=function(e,d){var f=document.createElement("a");
f.href=e;
if(!f.search){f.search="?"+d
}else{f.search=f.search+"&"+d
}return f.href
};
b.prototype.getLinkObjects=function(){var e=a();
var d=this;
e.forEach(function(f){if(d.resourceLink.match(/^http/)){f.resourceLink=c(d.resourceLink,"source=social-atw-"+f["share-channel"])
}else{f.resourceLink=c(window.location.origin+d.resourceLink,"source=social-atw-"+f["share-channel"])
}});
return e
};
return b
})();
SAP.wcms.sapdx.page.lightBox.processors={video:function(h,C,a){var r=h.parent();
var f="activeVideoLink";
var q=r.find(".videoWrapper");
var t=q.clone(true);
var u=q.find(".video-js");
u.data("isFromGatedFlow",a.isFromGatedFlow);
if(u.data("is-youtube")){SAP.wcms.sapdx.page.lightBox.processors["video-youtube"](q,r,f);
return
}var l=u.data("lightbox-video-setup");
var x;
var g=q.data("asset-id");
var c="#video="+g;
if(l){if(c!==window.location.hash){window.location.replace(c)
}x=videojs(u[0],l,function(){$("html").trigger("playerInitialized",[this.id(),true])
})
}var o=h.parent();
var p=q.data("asset-title");
var w=q.data("asset-description");
var i=r.data("lightbox-footer-headline");
var e=r.data("lightbox-footer-paragraph");
var v=r.data("lightbox-footer-link-name");
var n=r.data("lightbox-footer-link-path");
var d=r.data("lightbox-footer-link-target");
var y=r.data("lightbox-footer-link-tooltip");
var A=r.data("is-lightbox-footer-configured");
var B=Handlebars.compile($(".markupLigtbox").html());
var k=q.data("share-link");
var j=new SAP.wcms.sapdx.page.lightBox.ShareDropdownItemsController(k);
var b=new SAP.wcms.sapdx.page.lightBox.videoToolbarController(k);
var z=j.getLinkObjects();
setUlrIdCookie(r);
var m={assetTitle:p,assetDescription:w,socialItems:z,assetFooterTitle:i,assetFooterDescription:e,assetFooterLinkName:v,assetFooterLinkPath:n,assetFooterLinkTarget:d,assetFooterLinkTooltip:y,isFooterConfigured:A};
$(document).trigger("suspendScrollBehaviour");
$.magnificPopup.open({enableEscapeKey:false,mainClass:"videoLightbox",items:{src:B(m),type:"inline"},callbacks:{open:function(){b.initContext(this);
b.initEmailLink();
var G=$(window);
var D=this.content.find(".popupContent"),F=this.content.find(".popupHeader"),E=this.content.find(".popupFooter");
D.append(q);
q.removeClass("mfp-hide");
$(".videoWrapper").trigger("embeddedVideoPause");
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.fitToScreenHeight(G,F,E,D,false);
x.ready(function(){registerPlayerEvents(this,D,E);
this.play()
});
G.on("resize",function(){SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.fitToScreenHeight(G,F,E,D,false)
})
},close:function(){removeLocationHash();
x.pause();
x.trigger("lightbox-closed");
x.dispose();
r.removeClass(f);
o.append(t);
q.addClass("mfp-hide");
$(document).trigger("lightboxClosed");
$(document).trigger("resumeScrollBehaviour");
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.removeShareIdRequestParameter()
}}})
},"video-youtube":function(k,l,d){var j=k.data("asset-title");
var n=k.data("asset-description");
var r=Handlebars.compile($(".markupLigtbox").html());
var f=k.data("share-link");
var e=l.data("lightbox-footer-headline");
var c=l.data("lightbox-footer-paragraph");
var m=l.data("lightbox-footer-link-name");
var i=l.data("lightbox-footer-link-path");
var b=l.data("lightbox-footer-link-target");
var o=l.data("lightbox-footer-link-tooltip");
var q=l.data("is-lightbox-footer-configured");
var g=new SAP.wcms.sapdx.page.lightBox.ShareDropdownItemsController(f);
var a=new SAP.wcms.sapdx.page.lightBox.videoToolbarController(f);
var p=g.getLinkObjects();
setUlrIdCookie(l);
var h={assetTitle:j,assetDescription:n,popupContent:k[0].outerHTML,socialItems:p,assetFooterTitle:e,assetFooterDescription:c,assetFooterLinkName:m,assetFooterLinkPath:i,assetFooterLinkTarget:b,assetFooterLinkTooltip:o,isFooterConfigured:q};
$(document).trigger("suspendScrollBehaviour");
$.magnificPopup.open({enableEscapeKey:false,mainClass:"videoLightbox",items:{src:r(h),type:"inline"},callbacks:{open:function(){a.initContext(this);
a.initEmailLink();
var u=$(window);
var B=this.content.find(".popupContent");
var t=this.content.find(".popupHeader");
var x=this.content.find(".popupFooter");
var w=B.find(".videoWrapper");
var A=B.find(".video-js");
w.removeClass("mfp-hide");
$(".videoWrapper").trigger("embeddedVideoPause");
var v=A.data("lightbox-video-setup");
var z=k.data("asset-id");
var y="#video="+z;
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.fitToScreenHeight(u,t,x,B,false);
if(v){if(y!==window.location.hash){window.location.replace(y)
}videojs(A[0],v,function(){$("html").trigger("playerInitialized",[this.id(),true]);
this.ready(function(){registerPlayerEvents(this,B,x);
this.play()
})
})
}u.on("resize",function(){SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.fitToScreenHeight(u,t,x,B,false)
})
},beforeClose:function(){var t=this.content.find(".popupContent");
var v=t.find(".video-js");
var u=videojs(v.attr("id"));
l.removeClass(d);
removeLocationHash();
u.pause();
u.trigger("lightbox-closed");
$(document).trigger("lightboxClosed");
$(document).trigger("resumeScrollBehaviour");
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.removeShareIdRequestParameter()
}}})
},"video-mobile":function(c,h,b){$(document).trigger("lightboxClosed");
var d=c.parent().find(".videoWrapper");
var a=d.find(".video-js");
a.data("isFromGatedFlow",b.isFromGatedFlow);
if(h.is("AndroidOS")||a.data("is-youtube")){var e=a.data("akamaimobileurl");
var g=a.data("akamaiurl");
location.href=e?e:g;
return
}$(".videoWrapper").trigger("embeddedVideoPause");
var f=videojs(a.attr("id"));
f.ready(function(){this.play()
});
if(h.is("iOS")){f.requestFullscreen()
}},feedback:function(a){var d=a.data("asset-title");
var e=$("body");
var c=Handlebars.compile($(".feedbackLightbox").html());
var b={assetTitle:d};
$(document).trigger("suspendScrollBehaviour");
$.magnificPopup.open({enableEscapeKey:false,fixedBgPos:true,items:{src:c(b),type:"inline"},callbacks:{open:function(){var f=this.content.find(".popupContent");
f.append(a);
a.removeClass("mfp-hide");
$(".videoWrapper").trigger("embeddedVideoPause");
e.addClass("hideContent")
},close:function(){var g=this.content.find(".feedbackForm__wrapper");
var f=this.content.find(".thankYouMessage");
g.removeClass("hidden");
f.addClass("hidden");
a.addClass("mfp-hide");
e.removeClass("hideContent");
$(document).trigger("resumeScrollBehaviour")
},afterClose:function(){setTimeout(function(){$(window).trigger("resize")
},100)
}}})
},compatibility:function(){var b=Handlebars.compile($(".compatibilityLightbox").html());
var a={compatibilityTitle:CQ.I18n.getI18nMessage("2017.Form.BrowserCompatibility.MainTitle.Text"),compatibilityHeadline:CQ.I18n.getI18nMessage("2017.Form.BrowserCompatibility.Headline.Text"),compatibilityContent:CQ.I18n.getI18nMessage("2017.Form.BrowserCompatibility.Paragraph.Text"),compatibilityConfirmButton:CQ.I18n.getI18nMessage("2017.Form.BrowserCompatibility.Button.Confirm.Label")};
$(".videoWrapper").trigger("embeddedVideoPause");
$.magnificPopup.open({enableEscapeKey:false,fixedBgPos:true,items:{src:b(a),type:"inline"}})
},"trust-center-incidents":function(f,d){var c=Handlebars.compile($(d).html());
var a=$("html"),g=$(window),b="is-lightbox-opened",e;
$(document).trigger("suspendScrollBehaviour");
$.magnificPopup.open({enableEscapeKey:false,fixedContentPos:true,mainClass:"trustCenterLiveStatusContainer",items:{src:c(f),type:"inline"},callbacks:{open:function(){e=g.scrollTop();
a.addClass(b);
a.css("top",-e);
$(".videoWrapper").trigger("embeddedVideoPause")
},close:function(){a.removeClass(b);
a.css("top","");
g.scrollTop(e);
$(document).trigger("resumeScrollBehaviour")
}}})
},pdf:function(e,m,o){var p=e.data("asset-title");
var l=e.data("asset-description");
var k=Handlebars.compile($(".markupLigtbox").html());
var d=e.data("lightbox-footer-headline");
var g=e.data("lightbox-footer-paragraph");
var i=e.data("lightbox-footer-link-name");
var c=e.data("lightbox-footer-link-path");
var q=e.data("lightbox-footer-link-target");
var f=e.data("lightbox-footer-link-tooltip");
var h=e.data("is-lightbox-footer-configured");
var b=new SAP.wcms.sapdx.page.lightBox.ShareDropdownItemsController(e.attr("data-share-link"));
var n=b.getLinkObjects();
var j={assetTitle:p,assetDescription:l,socialItems:n,assetFooterTitle:d,assetFooterDescription:g,assetFooterLinkName:i,assetFooterLinkPath:c,assetFooterLinkTarget:q,assetFooterLinkTooltip:f,isFooterConfigured:h};
$(document).trigger("suspendScrollBehaviour");
var a=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfController(e,m,o);
$(".videoWrapper").trigger("embeddedVideoPause");
$.magnificPopup.open({enableEscapeKey:false,fixedContentPos:true,fixedBgPos:true,mainClass:"pdfLightbox",items:{src:k(j),type:"inline"},callbacks:{open:a.openLightbox,close:a.closeLightbox}})
},"pdf-mobile":function(b,c,a){$(document).trigger("suspendScrollBehaviour");
$(".videoWrapper").trigger("embeddedVideoPause");
SAP.wcms.sapdx.page.lightBox.processors.pdf(b,c,a)
},overlayComponent:function(a){openHtmlContentPopup(a)
},"overlayComponent-mobile":function(a){openHtmlContenMobile(a.attr("href"))
},complexAssetLightbox:function(a){openHtmlContentPopup(a)
},"complexAssetLightbox-mobile":function(a){openHtmlContentPopup(a)
},integratedReportPdf:enhancedLighboxProcessor,"integratedReportPdf-mobile":enhancedLighboxProcessor};
function registerPlayerEvents(l,m,i){var d=i.find(".footer-container"),j,e,n=i.parents(".lightboxPopup").first(),h,g="animation-in-progress",c="hidden-footer",b=1000;
if(!d.length){return false
}l.on("play",k);
l.on("pause",a);
l.on("ended",a);
function k(){f();
n.addClass(g);
d.animate({height:0,opacity:0},b,function(){d.addClass(c).css({height:""});
m.removeClass(g)
});
m.animate({height:e+j},b)
}function a(){if(m.hasClass(g)){return false
}f();
d.css({height:0}).removeClass(c).animate({height:h,opacity:1},b,function(){d.css({height:""});
m.removeClass(g);
n.removeClass(g)
});
m.animate({height:e-j},b)
}function f(){var p=parseInt(i.css("paddingTop"),10)+parseInt(i.css("paddingBottom"),10);
var o=parseInt(i.css("minHeight"),10);
m.addClass(g);
e=m.height();
h=d.height();
j=(h+p)>o?h-p:0
}}function enhancedLighboxProcessor(d,h){var b=d.data("asset-title");
var j=d.data("asset-description");
var g=Handlebars.compile($(".integrationReportLightbox").html());
var f=h.mobile()?"mobileScrollContainer mobile-toc-scroll-visible":"";
var c=new SAP.wcms.sapdx.page.lightBox.ShareDropdownItemsController(d.attr("data-share-link"));
var i=c.getLinkObjects();
var e={assetTitle:b,assetDescription:j,socialItems:i};
$(document).trigger("suspendScrollBehaviour");
var a=new SAP.wcms.sapdx.page.lightBox.ExtendedLightBoxController(d,h);
$(".videoWrapper").trigger("embeddedVideoPause");
$.magnificPopup.open({enableEscapeKey:false,fixedContentPos:true,fixedBgPos:true,mainClass:"lightboxReport "+f,items:{src:g(e),type:"inline"},callbacks:{open:a.openLightbox,beforeClose:a.beforeCloseLightbox,close:a.closeLightbox}})
}function removeLocationHash(){if(history.replaceState){var a=window.location.pathname+window.location.search;
history.replaceState("",document.title,a)
}else{var b=document.body.scrollTop;
window.location.hash="";
document.body.scrollTop=b
}}function setUlrIdCookie(b){var a=b[0].getAttribute("href");
if(a){var c=$.deparam.querystring(a).url_id;
if(c){SAP.sapdx.analytics.cookies.checkAndSetCookie("url_id",c)
}}}function openHtmlContenMobile(b){var a=$('<a id="tmpLink" href="'+b+'"></a>');
$("body").append(a);
a[0].click();
a.remove()
}function openHtmlContentPopup(a){var c=a.attr("href");
var f=new SAP.wcms.sapdx.page.lightBox.HTMLContentLightboxOverlayController();
var e=new SAP.wcms.sapdx.page.lightBox.ComplexAssetsLightboxToolbarController(c);
var g=Handlebars.compile($(".html-content-lightbox").html());
var b=a.attr("data-light-box-type")==="complexAssetLightbox";
a.attr("data-share-link",c);
var d=getHtmlContentPopupTemplate(a,c);
$.magnificPopup.open({enableEscapeKey:false,fixedContentPos:true,fixedBgPos:true,mainClass:b?"complexAssetsLightbox":"complexAssetsLightbox overlayComponent",items:{src:g(d),type:"inline"},callbacks:{open:function(){f.openLightbox(this);
if(b){e.initContext(this);
e.initShareToolbar()
}else{showURLHashSelector(c)
}},close:function(){removeLocationHash()
}}})
}function getHtmlContentPopupTemplate(a,b){var e=new SAP.wcms.sapdx.page.lightBox.ShareDropdownItemsController(b);
var d=e.getLinkObjects();
if(a.data("lightbox-overlay-page")){b=c(b)
}return{src:b,isHeaderConfigured:a.data("is-lightbox-header-configured"),assetTitle:a.data("lightbox-header-headline"),assetDescription:a.data("lightbox-header-paragraph"),socialItems:d,isFooterConfigured:a.data("is-lightbox-footer-configured"),assetFooterTitle:a.data("lightbox-footer-headline"),assetFooterDescription:a.data("lightbox-footer-paragraph"),assetFooterLinkName:a.data("lightbox-footer-link-name"),assetFooterLinkPath:a.data("lightbox-footer-link-path"),assetFooterLinkTarget:a.data("lightbox-footer-link-target"),assetFooterLinkTooltip:a.data("lightbox-footer-link-tooltip")};
function c(f){if(!!f){return f.replace(".html",".overlay-component.html")
}}}function showURLHashSelector(a){var b="#overlay="+a;
if(b!==window.location.hash){window.location.replace(b)
}}SAP.wcms.sapdx.page.lightBox.HTMLContentLightboxOverlayController=(function(){function c(){var g=window.top.document;
var e="data-light-box-type";
var f="_blank";
var h=$(g).find(".html-content-lightbox-frame");
if(h.length!==0){var d=h.contents().find('a:not([href^="#"])a:not([href*="/documents/"])a:not([href*="/assetdetail/"])a[href]');
d.each(function(){var j=$(this);
j.attr("target",f);
var i=j.attr(e);
if(!$.isEmptyObject(i)){j.attr(e,f)
}})
}}var b=function(e){this.$lightboxContent=$(e);
this.$loader=this.$lightboxContent.find(".loading-bar-overlay");
var d=document.getElementsByClassName("html-content-lightbox-frame")[0];
var f;
d.onload=function(){try{f=$(d.contentDocument||d.contentWindow.document);
f.find("#header").hide();
f.find("#footer").hide();
c()
}catch(g){}this.$loader.addClass("hidden")
}.bind(this)
};
var a=function(){this.$lightboxContent={};
this.$loader={}
};
a.prototype.openLightbox=b;
return a
})();
SAP.wcms.sapdx.page.lightBox.ComplexAssetsLightboxToolbarController=(function(){var f,d;
var a=function(){var g=d.find(".icon-email");
g.on("click",function(){g.attr("href","mailto:?body="+f)
});
c()
};
function c(){var g=d.find(".share-wrap");
var h=g.find(".share-dropdown a");
if(!h.length){g.hide()
}}var b=function(g){f=g;
d=null
};
var e=function(g){d=g.content.find(".toolbar")
};
b.prototype.initContext=e;
b.prototype.initShareToolbar=a;
return b
})();
SAP.wcms.sapdx.page.lightBox.SearchController=(function(){var c=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils,h;
var f=function(){return{pageIdx:-1,matchIdx:-1}
};
var a=function(){};
var k=function(l,m){c.scrollIntoView(l,h,m)
};
var b=function(l){return l.selected.pageIdx!==-1
};
var g=function(l){return l.findState===pdfjsWebPDFFindController.FindStates.FIND_NOTFOUND
};
var j=function(o){var m=o.selected.pageIdx-1,n=0;
for(var l=0;
l<=m;
l++){n+=o.pageMatches[l].length
}return n+1
};
var i=function(o,l,n,m){if(o()){n()
}if(l()){m()
}setTimeout(i.bind(this,o,l,n,m),250)
};
var e=function(m,l){return new Promise(function(o,n){i(m,l,o,n)
})
};
var d=function(n,m,l){return n&&m.isLastMatchReached()&&l
};
a.prototype={initialize:function(l,m){this.pdfFindController=new pdfjsWebPDFFindController.PDFFindController({pdfViewer:l});
this.pdfFindController.scrollIntoView=k;
this.pdfFindController.onUpdateResultsCount=m.updateResultsCount.bind(m);
this.pdfFindController.onUpdateState=m.updateUIState.bind(m);
this.findBar=m;
this.pdfFindController.resolveFirstPage();
h=l.lightboxType
},search:function(q,n,p){var l=this.query===q?"again":"",o="find"+l;
if(d(l,this.findBar,!n)||(l&&g(this.pdfFindController))){return
}if(this.scrollController&&l){this.scrollController.skipNextMove=true
}this.pdfFindController.executeCommand(o,{query:q,highlightAll:true,findPrevious:!!n,phraseSearch:true});
this.query=q;
if(!q){this.findBar.hide();
p&&p()
}else{if(l){this.findBar.updateMatchCount(!!n);
p&&p()
}else{var m=this;
this.pdfFindController.selected=f();
e(b.bind(this,this.pdfFindController),g.bind(this,this.pdfFindController)).then(function(){m.findBar.setMatchCount(j(m.pdfFindController));
p&&p()
},function(){console.warn("Matches not found")
})
}}},repeatedSearch:function(l){this.search(this.query,l)
},emptySearch:function(l){this.search("",false,l)
},setNotFoundState:function(){this.pdfFindController.findState=pdfjsWebPDFFindController.FindStates.FIND_NOTFOUND
},setFoundState:function(){this.pdfFindController.findState=pdfjsWebPDFFindController.FindStates.FIND_FOUND
},setScrollController:function(l){this.scrollController=l
}};
return a
})();
namespace("SAP.wcms.sapdx.page.lightBox");
SAP.wcms.sapdx.page.lightBox.FindBar=(function(){var c="Lightbox.Search.NoMatches.Text";
var b="Lightbox.Search.TotalMatches.Template";
var f="Lightbox.Search.CurrentMatch.Template";
var e=function(h){var g=this;
this.$previousMatch=h.previousMatch;
this.$nextMatch=h.nextMatch;
this.$findResultsCount=h.findResultsCount;
this.$overallMatches=h.overallMatches;
this.$matchesHolder=h.matchesHolder;
this.$searchResultsControl=h.searchResultsControl;
this.searchController=h.searchController;
this.currentMatchNumber=1;
this.$searchForm=h.searchForm;
this.$previousMatch.click(g.searchController.repeatedSearch.bind(g.searchController,true));
this.$nextMatch.click(g.searchController.repeatedSearch.bind(g.searchController,false));
this.$matchesHolder.hide()
};
var d=function(g){g.addClass("actionNotAllowed")
};
var a=function(g){g.removeClass("actionNotAllowed")
};
e.prototype={updateResultsCount:function(g){this.matchCount=g;
this.updateOverallMatches();
this.$findResultsCount.text(Granite.I18n.getI18nMessage(b,[g.toLocaleString()]));
this.$matchesHolder.show();
this.$searchResultsControl.show();
this.searchController.setFoundState();
this.handleButtonsState()
},updateUIState:function(g){if(g===1){this.$findResultsCount.text(Granite.I18n.getI18nMessage(c));
this.$searchResultsControl.hide();
this.searchController.setNotFoundState();
this.$matchesHolder.show();
this.$searchForm.addClass("not-found")
}},updateMatchCount:function(g){this.setMatchCount(g?--this.currentMatchNumber:++this.currentMatchNumber)
},setMatchCount:function(g){this.currentMatchNumber=g;
this.handleButtonsState();
this.updateOverallMatches()
},setSearchController:function(g){this.searchController=g
},isFirstMatchReached:function(){return this.currentMatchNumber===1
},isLastMatchReached:function(){return this.currentMatchNumber===this.matchCount
},handleButtonsState:function(){this.isFirstMatchReached()?d(this.$previousMatch):a(this.$previousMatch);
this.isLastMatchReached()?d(this.$nextMatch):a(this.$nextMatch)
},updateOverallMatches:function(){var h=[this.currentMatchNumber.toLocaleString(),this.matchCount.toLocaleString()];
var g=Granite.I18n.getI18nMessage(f,h);
this.$overallMatches.text(g)
},hide:function(){this.$matchesHolder.hide()
}};
return e
})();
SAP.wcms.sapdx.page.lightBox.LightBoxPdfFullScreenMode=(function(){var d=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils;
var c=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightBoxPdfViewerMode;
var h=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightboxScaleType;
var b=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightBoxPdfViewerKey;
var g=typeof navigator!=="undefined"&&navigator.userAgent||"";
var e=/Safari\//.test(g)&&!/(Chrome\/|Android\s)/.test(g);
var a=50;
var f=function(i){this.$container=i.$container;
this.lightBoxPdfViewer=i.lightBoxPdfViewer;
this.keyDownHandlerNormalViewMode=i.keyDownHandlerNormalViewMode
};
f.prototype={requestFullScreen:function(){if(e){jcf.destroy(this.$container)
}this._addFullScreenListeners();
var i=this.$container[0];
if(i.requestFullscreen){i.requestFullscreen()
}else{if(i.mozRequestFullScreen){i.mozRequestFullScreen()
}else{if(i.webkitRequestFullscreen){i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
}else{if(i.msRequestFullscreen){i.msRequestFullscreen()
}else{return false
}}}}return true
},_addFullScreenListeners:function(){this.fullScreenChangeHandler=this._fullScreenChangeHandler.bind(this);
this.mouseDownHandler=this._mouseDownHandler.bind(this);
this.keyDownHandler=this._keyDownHandler.bind(this);
this.mouseWheelHandler=this._mouseWheelHandler.bind(this);
window.addEventListener("webkitfullscreenchange",this.fullScreenChangeHandler);
window.addEventListener("mozfullscreenchange",this.fullScreenChangeHandler);
window.addEventListener("MSFullscreenChange",this.fullScreenChangeHandler);
window.addEventListener("fullscreenchange",this.fullScreenChangeHandler);
window.addEventListener("mousedown",this.mouseDownHandler);
window.addEventListener("keydown",this.keyDownHandler);
window.addEventListener("wheel",this.mouseWheelHandler)
},_fullScreenChangeHandler:function(){if(this.isFullscreen){this._enterFullScreen();
window.removeEventListener("keydown",this.keyDownHandlerNormalViewMode)
}else{this._exitFullScreen();
window.addEventListener("keydown",this.keyDownHandlerNormalViewMode)
}},_mouseDownHandler:function(i){i.preventDefault();
this.lightBoxPdfViewer.currentPageNumber+=1
},_keyDownHandler:function(i){i.preventDefault();
switch(i.keyCode){case b.PAGE_UP:case b.ARROW_UP:case b.ARROW_LEFT:this.lightBoxPdfViewer.currentPageNumber-=1;
break;
case b.PAGE_DOWN:case b.ARROW_RIGHT:case b.ARROW_DOWN:this.lightBoxPdfViewer.currentPageNumber+=1;
break;
case b.HOME_BUTTON:this.lightBoxPdfViewer.currentPageNumber=1;
break;
case b.END_BUTTON:this.lightBoxPdfViewer.currentPageNumber=this.lightBoxPdfViewer.pagesCount;
break;
default:break
}},_mouseWheelHandler:function(j){j.preventDefault();
var i=(new Date()).getTime();
var k=this.mouseScrollTimeStamp;
if(i>k&&i-k<a){return
}if(j.deltaY>0){this.lightBoxPdfViewer.currentPageNumber+=1
}else{if(j.deltaY<0){this.lightBoxPdfViewer.currentPageNumber-=1
}}this.mouseScrollTimeStamp=i
},get isFullscreen(){return !!(document.fullscreenElement||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement)
},_enterFullScreen:function(){SAP.isExitFromFullScreen=false;
this.$container.closest(".mfp-wrap.lightboxReport").addClass("fullScreenMode");
setTimeout(function(){this.lightBoxPdfViewer.setScale(h.PAGE_FIT);
this.lightBoxPdfViewer.presentationMode=c.FULLSCREEN;
this.lightBoxPdfViewer.scrollToCurrentPage()
}.bind(this),0)
},_exitFullScreen:function(){this._removeFullScreenListeners();
this.$container.closest(".mfp-wrap.lightboxReport").removeClass("fullScreenMode");
setTimeout(function(){this.lightBoxPdfViewer.setScale(h.NORMAL);
this.lightBoxPdfViewer.presentationMode=c.NORMAL;
this.lightBoxPdfViewer.scrollToCurrentPage();
if(e){jcf.replace(this.$container)
}if(SAP.isIE){d.isExitFullScreenIE=true
}SAP.isExitFromFullScreen=true
}.bind(this),0)
},_removeFullScreenListeners:function(){window.removeEventListener("webkitfullscreenchange",this.fullScreenChangeHandler);
window.removeEventListener("mozfullscreenchange",this.fullScreenChangeHandler);
window.removeEventListener("MSFullscreenChange",this.fullScreenChangeHandler);
window.removeEventListener("fullscreenchange",this.fullScreenChangeHandler);
window.removeEventListener("mousedown",this.mouseDownHandler);
window.removeEventListener("keydown",this.keyDownHandler);
window.removeEventListener("wheel",this.mouseWheelHandler);
delete this.fullScreenChangeHandler;
delete this.mouseDownHandler;
delete this.keyDownHandler;
delete this.mouseWheelHandler
}};
return f
})();
namespace("SAP.wcms.sapdx.page.lightBox");
SAP.wcms.sapdx.page.lightBox.LightBoxPdfOutline=(function(){var b=2;
var a=-1;
var c=function(d){this.outline=null;
this.bookmarksOnPage=[];
this.$container=d.$container;
this.$scrollContainer=d.$scrollContainer;
this.lightBoxPdfViewer=d.lightBoxPdfViewer;
this.linkService=d.linkService;
this.ignoreScrollHighlight=false;
this.outlineHeightHandler=d.outlineHeightHandler;
this.$outlinePanel=d.$outlinePanel
};
c.prototype={render:function(d,f){if(!d){return
}this.outline=d;
this.pdfDocument=f;
var h=$(document.createDocumentFragment());
var k=[{parent:h,items:this.outline,level:1}];
var o=[];
this.initScrollHandler();
while(k.length>0){var e=k.shift();
for(var j=0,l=e.items.length;
j<l&&e.level<=b;
j++){var q=e.items[j],n=$("<li></li>"),p=$("<a></a>");
p.text(q.title);
n.append(p);
var g=e.level>=b;
this._bindLink(p,q,g);
if(q.items.length>0&&!g){var m=$("<ul></ul>");
this._addToggleButton(n);
n.append(m);
k.push({parent:m,items:q.items,level:e.level+1})
}e.parent.append(n);
o.push({item:q,$bookmark:p,level:e.level})
}}this._initBookmarksMap(o);
this.$container.append(h)
},_initBookmarksMap:function(f){var e=[];
for(var d=0;
d<f.length;
d++){var g=f[d].item.dest[0];
e.push(this.pdfDocument.getPageIndex(g))
}Promise.all(e).then(function(k){for(var i=0;
i<k.length;
i++){var h=k[i];
if(!this.bookmarksOnPage[h]){this.bookmarksOnPage[h]=[]
}this.bookmarksOnPage[h].push({item:f[i].item,$bookmark:f[i].$bookmark,level:f[i].level})
}this.highlightCurrentBookmark()
}.bind(this))
},initScrollHandler:function(){var d=$.debounce(100,this._scrollBookmarkHandler.bind(this));
this.$scrollContainer.on("scroll.lightbox-outline touchmove.lightbox-outline",d)
},setScrollableContainer:function(d){this.$scrollContainer.off("scroll.lightbox-outline");
this.$scrollContainer.off("touchmove.lightbox-outline");
this.$scrollContainer=d;
this.initScrollHandler()
},_scrollBookmarkHandler:function(){if(this.ignoreScrollHighlight){this.ignoreScrollHighlight=false;
return
}this.highlightCurrentBookmark()
},highlightCurrentBookmark:function(){var d=this.lightBoxPdfViewer.currentPageNumber-1;
var e=this.bookmarksOnPage[d];
while(!e){d--;
if(d<0){this._cleanActiveElements();
return
}e=this.bookmarksOnPage[d]
}var f=this._getClosestBookmark(e,d);
this._cleanActiveElements();
if(this._isChildlessBookmark(f)){this._setActive(f.$bookmark.parent())
}},_isChildlessBookmark:function(d){return d.level===b||!d.item.items.length
},_getClosestBookmark:function(f,m){var e;
var l;
var j=Number.MAX_VALUE;
for(var h=0;
h<f.length;
h++){var k=f[h];
var g=this._convertBookmarkPointToRealPixels(k);
var d=this.lightBoxPdfViewer._pages[m].$pageWrapper[0].offsetTop;
l=Math.abs(d+g[1]-this.$scrollContainer.scrollTop());
if(l<j){j=l;
e=f[h]
}}return e
},_convertBookmarkPointToRealPixels:function(e){var d=e.item.dest;
return this._convertDestinationPointToRealPixels(d)
},_convertDestinationPointToRealPixels:function(e){var d=0;
var g=0;
var f=e[1].name;
if(f==="XYZ"){d=e[2];
g=e[3]
}else{if(f==="FitH"||f==="FitBH"){g=e[2]
}else{if(f==="FitV"||f==="FitBV"){d=e[2]
}}}return this.lightBoxPdfViewer.currentPage.viewport.convertToViewportPoint(d,g)
},_bindLink:function(e,f,g){var d=f.dest;
e.attr("href",this.linkService.getDestinationHash(d));
if(f.items.length===0||g){this._bindNavigateToHandler(e,d)
}else{this._bindToggleHandler(e)
}},_bindToggleHandler:function(d){var e=this;
d.on("click",function(){e._toggleHandler(d.parent(),d.prev(".drop-opener"));
return false
})
},_bindNavigateToHandler:function(e,d){var f=this;
e.on("click",function(){if(d){f.linkService.navigateTo(d);
f._cleanActiveElements();
f._setActive($(this).parent());
var g=f._findScrollPositionAfterNavigation(d);
if(f.$scrollContainer.scrollTop()!==g){f.ignoreScrollHighlight=true
}}return false
})
},_findScrollPositionAfterNavigation:function(d){var e=this._findPageByBookmark(d);
if(e===a){return a
}var f=e*this.lightBoxPdfViewer._pages[e].$pageWrapper.height()+this._convertDestinationPointToRealPixels(d)[1];
return Math.floor(f)
},_findPageByBookmark:function(e){for(var d in this.bookmarksOnPage){if(!this.bookmarksOnPage.hasOwnProperty(d)){break
}var g=this.bookmarksOnPage[d];
for(var f=0;
f<g.length;
f++){if(g[f].item.dest===e){return parseInt(d,10)
}}}return a
},_toggleHandler:function(d,e){this.$container.find(".has-child.opened").not(d).toggleClass("opened");
this.$container.find(".icon-arrowdown").not(e).toggleClass("icon-arrowright icon-arrowdown");
d.toggleClass("opened");
e.toggleClass("icon-arrowright icon-arrowdown");
this.outlineHeightHandler&&this.outlineHeightHandler();
jcf.refresh(this.$outlinePanel)
},_addToggleButton:function(f){var d=this;
var e=$('<span class="drop-opener icon-arrowright"></span>');
f.addClass("has-child").prepend(e);
e.on("click",function(){d._toggleHandler(f,e);
return false
})
},_cleanActiveElements:function(){this.$container.find(".active").removeClass("active")
},_setActive:function(d){d.addClass("active");
d.parentsUntil(".outline-tree","li.has-child").addClass("active")
},setOutlineHeightHandler:function(d){this.outlineHeightHandler=d
},collapseTree:function(){this.$container.children().each(function(){var d=$(this);
d.removeClass("opened");
d.find(".drop-opener").removeClass("icon-arrowdown").addClass("icon-arrowright")
})
}};
return c
})();
namespace("SAP.wcms.sapdx.page.lightBox");
SAP.wcms.sapdx.page.lightBox.scrollController=(function(){var f=15,e="minified",d="extended",c={DEFAULT:"DEFAULT",MINIFIED:"MINIFIED",EXTENDED:"EXTENDED"};
var b=function(g){var h=new SAP.sapdx.scroll.detectScrollProps({offset:g.startFixPosition||0,scrollingWindow:g.$lightboxReport,onTop:function(j,i,k){if(k!==i&&g.lastTransformationState!==c.DEFAULT){g.setDefaultHeader()
}},onBottom:function(i){if(i>=self.startFixPosition){g.setExtendedHeader()
}},onMovingDown:function(i){if(!g._isEnabledScrollAndToggleItIfNot()){return
}if(i<g.startFixPosition&&g.lastTransformationState!==c.DEFAULT){g.setDefaultHeader()
}if(i>=g.startFixPosition&&g.lastTransformationState!==c.MINIFIED){g.setMinifyHeader()
}},onMovingUp:function(j,i,k){if(!g._isEnabledScrollAndToggleItIfNot()){return
}if(k!==h.SCROLL_STATES.BOTTOM&&!g.isNextMoveSkipped()&&g.lastTransformationState===c.MINIFIED&&j>g.startFixPosition){g.setExtendedHeader()
}}});
h.startListhenScrollEvent();
return h
};
var a=function(g){this.$searchBlock=g.$searchBlock;
this.$asideLightbox=g.$asideLightbox;
this.$socialItemsWrap=g.$socialItemsWrap;
this.$lightboxReport=g.$lightboxReport;
this.$lightBoxContainer=g.$lightBoxContainer;
this.afterStateChanged=g.afterStateChanged;
this.scrollDetector=b(this);
this.startFixPosition=this.calcStartFixPosition();
this.lastTransformationState=c.DEFAULT;
this.isNewCalcNeeded=true;
this.timesDisablingScroll=0
};
a.prototype={calcStartFixPosition:function(){return this.$searchBlock.position().top-f
},calcParentOffsetTop:function(){return this.$asideLightbox.outerHeight()
},initCurrentHeaderState:function(){var g=this.scrollDetector.getCurrentScrollPosition();
if(this.scrollDetector.isScrollOnBottom()&&g>this.startFixPosition){this.setExtendedHeader()
}else{if(this.scrollDetector.isSrollOnTop()){this.setDefaultHeader()
}else{if(g>this.startFixPosition){this.setMinifyHeader()
}}}},setDefaultHeader:function(){this.$lightBoxContainer.css("paddingTop",0);
this.isNewCalcNeeded=true;
this.$asideLightbox.removeClass(e);
this.$asideLightbox.removeClass(d);
this.lastTransformationState=c.DEFAULT;
this.afterStateChanged()
},setMinifyHeader:function(){this.isNewCalcNeeded&&this.$lightBoxContainer.css("paddingTop",this.calcParentOffsetTop());
this.isNewCalcNeeded=false;
this.$asideLightbox.addClass(e);
this.$asideLightbox.removeClass(d);
this.lastTransformationState=c.MINIFIED;
this.afterStateChanged()
},setExtendedHeader:function(){this.$asideLightbox.addClass(d);
this.lastTransformationState=c.EXTENDED;
this.afterStateChanged()
},stopListenScrollEvent:function(){this.scrollDetector.stopListhenScrollEvent()
},disableListenScrollEvent:function(){this.timesDisablingScroll++
},_isEnabledScrollAndToggleItIfNot:function(){if(this.timesDisablingScroll>0){this.timesDisablingScroll--;
return false
}return true
},startListenScrollEvent:function(){this.scrollDetector.startListhenScrollEvent()
},isDefaultState:function(){return !this.$asideLightbox.hasClass(e)&&!this.$asideLightbox.hasClass(d)
},isNextMoveSkipped:function(){if(this.skipNextMove){this.skipNextMove=false;
return !this.isDefaultState()
}return false
}};
return a
})();
namespace("SAP.wcms.sapdx.page.lightBox");
SAP.wcms.sapdx.page.lightBox.BufferLightbox=(function(){var a=function(b){this.bufferSize=b;
this.data=[]
};
a.prototype={push:function(c){var b=this.data.indexOf(c);
if(b>=0){this.data.splice(b,1)
}this.data.push(c);
if(this.data.length>this.bufferSize){this.data.shift().destroy()
}}};
return a
})();
SAP.wcms.sapdx.page.lightBox.LightBoxPdfViewer=(function(){var d=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils;
var f=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightboxScaleType;
var c=1.1;
var b=0.5;
var a=4;
var e=function(g){this.$wrapper=g.$wrapper;
this.$popupContent=g.$popupContent;
this.$lightboxContainer=g.$lightboxContainer;
this.$scrollContainer=g.$scrollContainer;
this._pages=null;
this.pagesCount=0;
this._currentPageNumber=1;
this._presentationMode=d.LightBoxPdfViewerMode.NORMAL;
this.pdfAssetId=g.pdfAssetId;
this.searchController=g.searchController;
this._zoomScale=1;
this.originalViewport=null;
this.updateContainerOnZoomCallback=g.updateContainerOnZoomCallback;
this.oldScrollHeight=0;
this.oldScrollTop=0;
this.lightboxType=g.lightboxType;
this.isNarrowWindow=g.isNarrowWindow;
this._setScalingAndRenderingDelayed=$.debounce(30,this._setScalingAndRendering.bind(this))
};
e.prototype={zoomIn:function(){var g=this.zoomScale;
g=(g*c).toFixed(2);
g=Math.ceil(g*10)/10;
g=Math.min(a,g);
this.setZoomScaleAsync(g);
if(this.zoomScale>1){this.$wrapper.addClass("zoomedIn")
}return this.zoomScale===a
},zoomOut:function(){var g=this.zoomScale;
g=(g/c).toFixed(2);
g=Math.floor(g*10)/10;
g=Math.max(b,g);
this.setZoomScaleAsync(g);
if(this.zoomScale<=1){this.$wrapper.removeClass("zoomedIn")
}return this.zoomScale===b
},get zoomScale(){return this._zoomScale
},setZoomScaleAsync:function(g){this._zoomScale=g;
this._setScalingAndRenderingDelayed()
},setZoomScale:function(g){this._zoomScale=g;
this._setScalingAndRendering()
},_setScalingAndRendering:function(){this.setScale(this._zoomScale);
this.renderVisiblePages();
this.updateContainerOnZoomCallback()
},get standardScale(){var g=this._pages[this._currentPageNumber-1];
this.originalViewport=g.docPage.getViewport(1);
return this.$lightboxContainer.width()/this.originalViewport.width
},getStandardScaleForPage:function(g){this.originalViewport=g.docPage.getViewport(1);
return this.$lightboxContainer.width()/this.originalViewport.width
},get pageWidthScale(){var h=this._pages[this._currentPageNumber-1];
this.originalViewport=h.docPage.getViewport(1);
var g=this.isNarrowWindow?this.mobileContainerHeight:this.$lightboxContainer.height();
return g/this.originalViewport.height
},get mobileContainerHeight(){var g=$(".lightboxPopup .popupHeader").outerHeight();
return $(document.body).height()-g
},setPages:function(g){this._pages=g;
this.pagesCount=this._pages.length;
this._attachScrollEventListener()
},setDocument:function(g){this.pdfDocument=g
},setInitialPage:function(g){this.currentPageNumber=this.getInitialPage(g.attr("href"));
this.setPageToLocationHash()
},set presentationMode(g){this._presentationMode=g
},setLightboxContainer:function(g){this.$lightboxContainer=g
},get presentationMode(){return this._presentationMode
},scrollPageIntoView:function(i){var o=i.destArray||null;
var n=0;
var l=0;
var j=this.$lightboxContainer.height();
var h;
var m=i.pageNumber||0;
var k=this._pages[m-1];
if(o[1].name==="XYZ"){n=o[2];
l=o[3];
h=o[4];
n=n!==null?n:0;
l=l!==null?l:j
}else{if(o[1].name==="FitH"||o[1].name==="FitBH"){l=o[2];
h=this.standardScale
}else{if(o[1].name==="Fit"||o[1].name==="FitB"){h=Math.min(this.pageWidthScale,this.standardScale)
}else{console.error("PDFViewer_scrollPageIntoView: '"+o[1].name+"' is not a valid destination type.");
return
}}}if(h){this.setZoomScale(h/this.standardScale)
}var g=k.viewport.convertToViewportPoint(n,l);
if(this.zoomScale<=1){g[0]=undefined
}if(l===0){g[1]=undefined
}this.scrollIntoView(k.$pageWrapper[0],{left:g[0],top:g[1]})
},setScale:function(g){var h;
if(g===f.PAGE_FIT){this.resizeFitPages()
}else{if(g===f.NORMAL){h=this._zoomScale
}else{if(g){h=g
}}}if(h){this.resizePages(h)
}},resizeFitPages:function(){var g=$(document.createDocumentFragment());
this._pages.forEach(function(m){var j=screen.width/m.docPage.getViewport(1).width;
var i=screen.height/m.docPage.getViewport(1).height;
var l=Math.min(j,i);
var h=m.docPage.getViewport(l);
var k=$(d.getPageTemplate(Math.floor(h.width),Math.floor(h.height)));
m.setViewport(h);
m.initDomElements(k);
g.append(k)
}.bind(this));
this.$popupContent.empty();
this.$popupContent.append(g)
},resizePages:function(h){var g=$(document.createDocumentFragment());
this._pages.forEach(function(l){var k=this.getStandardScaleForPage(l);
var i=l.docPage.getViewport(h*k);
var j=$(d.getPageTemplate(Math.floor(i.width),Math.floor(i.height)));
l.setViewport(i);
l.initDomElements(j);
g.append(j)
}.bind(this));
this.$popupContent.empty();
this.$popupContent.append(g)
},get currentPageNumber(){return this._currentPageNumber
},get currentPage(){return this._pages[this._currentPageNumber-1]
},set currentPageNumber(g){if(g<=0||g>this._pages.length){return
}if(this._currentPageNumber===g){return
}this._currentPageNumber=g;
this.scrollToCurrentPage()
},scrollToCurrentPosition:function(g){var h=this.oldPositionPercent*this.$scrollContainer[0].scrollHeight;
if(g){h+=g
}this.$scrollContainer.scrollTop(h);
return h
},scrollToCurrentPage:function(){this.scrollToPage(this._currentPageNumber)
},scrollToPage:function(g){this._currentPageNumber=g;
var h=this._pages[this._currentPageNumber-1];
d.scrollIntoView(h.$pageWrapper[0],this.lightboxType);
this.setPageToLocationHash();
this.renderVisiblePages()
},scrollIntoView:function(g,h){d.scrollIntoView(g,this.lightboxType,h)
},renderVisiblePages:function(){return this.renderPages(this._getVisiblePages())
},renderPages:function(g){var j=g.first-1;
var i=g.last+1;
for(var h=j;
h<=i;
h++){if(h>=0&&h<this._pages.length){this._pages[h].render()
}}},setPageToLocationHash:function(){var g="#pdf-asset="+this.pdfAssetId+"&page="+this._currentPageNumber;
if(g!==window.location.hash){window.location.replace(g)
}},getInitialPage:function(i){var j=this.getLocationHash(),g=j.match(/page=(\d+)/)||(i&&i.match(/page=(\d+)/));
if(g){var h=parseInt(g[1],10);
if(h&&h>0&&h<=this._pages.length){return h
}}return 1
},getLocationHash:function(){var g=window.location.hash;
if(!g&&SAP&&SAP.locationHash){g="#"+SAP.locationHash
}return g
},removeLocationHash:function(){if(history.replaceState){var g=window.location.pathname+window.location.search;
history.replaceState("",document.title,g)
}else{var h=document.body.scrollTop;
window.location.hash="";
document.body.scrollTop=h
}},getPageTextContent:function(g){return this.pdfDocument.getPage(g+1).then(function(h){return h.getTextContent({normalizeWhitespace:true})
})
},getPageView:function(g){return this._pages[g]
},_attachScrollEventListener:function(){var g=$.debounce(100,this.handleCurrentPageChange.bind(this));
var h=$.debounce(10,this.handleCurrentPosition.bind(this));
this.$scrollContainer.on("scroll.lightbox-viewer touchmove.lightbox-viewer",h);
this.$scrollContainer.on("scroll.lightbox-viewer touchmove.lightbox-viewer",g)
},setScrollableContainer:function(g){this.$scrollContainer.off("scroll.lightbox-viewer");
this.$scrollContainer.off("touchmove.lightbox-viewer");
this.$scrollContainer=g;
this._attachScrollEventListener();
this.containerChanged=true
},handleCurrentPosition:function(){if(!this.containerChanged){this.oldScrollTop=this.$scrollContainer[0].scrollTop;
this.oldScrollHeight=this.$scrollContainer[0].scrollHeight;
this.oldPositionPercent=this.oldScrollTop/this.oldScrollHeight
}this.containerChanged=false
},handleCurrentPageChange:function(){if(this._presentationMode!==d.LightBoxPdfViewerMode.NORMAL){this.normalizePositionInFullscreen();
return
}var g=this._getVisiblePages();
if(this._isAutoScrolledInIE(g.central)){this.scrollToCurrentPage();
d.isExitFullScreenIE=false;
return
}this._currentPageNumber=g.central;
this.renderVisiblePages(g);
this.setPageToLocationHash()
},normalizePositionInFullscreen:function(){if(this.isNotOnlyCurrentPageOnScreen()){this.scrollToCurrentPage()
}},isNotOnlyCurrentPageOnScreen:function(){var g=this._pages[this._currentPageNumber-1];
var h=g.$canvasWrapper[0].getBoundingClientRect();
return h.bottom!==screen.height||h.top!==0
},_isAutoScrolledInIE:function(g){return SAP.isIE&&d.isExitFullScreenIE&&g!==this._currentPageNumber
},_getVisiblePages:function(){var g=Math.max(document.documentElement.clientHeight,window.innerHeight);
var h=g/2;
var m=null;
var i=null;
var l=null;
for(var k=0;
k<this._pages.length;
k++){var j=this._pages[k].$canvasWrapper[0].getBoundingClientRect();
if(j.top>g){break
}if(j.bottom>0&&j.top<g){if(m===null){m=k
}if(i===null&&j.bottom>h){i=k
}l=k
}}return{first:m+1,central:i+1,last:l+1}
}};
return e
})();
SAP.wcms.sapdx.page.lightBox.ExtendedLightBoxController=(function(){var q,a4,u,aA,C,al,f,M,a9,aH=[],X,a6,j,aU,a5,ad,bf,aG=$(window),Y="mobile-lightbox",U,av,z,ap,aC,am,r,at=50,aQ,bl,I,ae,ay,aM,x,h=0,E=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightBoxPdfViewerMode,au,ba=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightboxScaleType,aq=false,aw="actionNotAllowed",bp,ag=60,aO=20,e,a1,A,a3,aT,y,t=1000,S,a7,T=3,a8,ab,aD,N,aR,bm=new SAP.wcms.sapdx.page.lightBox.BufferLightbox(SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.DEFAULT_BUFFER_SIZE),bo=SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.LightBoxPdfViewerKey,bq;
var l=40;
var an=0.88;
var bk=function(bt,bs){q=bs;
a4=!!q.mobile();
u=bt;
aA=u.data("pdf-asset-direct-link");
C=u.data("pdf-asset-download-link");
f=u.data("asset-id");
a9=u.data("analytics-assetid");
I=u.data("dgl-asset");
aD=u.data("light-box-type")
};
var D=function(bt){switch(bt.keyCode){case bo.ARROW_LEFT:if(ae.zoomScale>1){a6.scrollLeft(a6.scrollLeft()-l)
}else{ae.currentPageNumber-=1
}break;
case bo.PAGE_UP:a6.scrollTop(a6.scrollTop()-a6.height()*an);
break;
case bo.ARROW_UP:a6.scrollTop(a6.scrollTop()-l);
break;
case bo.ARROW_RIGHT:if(ae.zoomScale>1){a6.scrollLeft(a6.scrollLeft()+l)
}else{ae.currentPageNumber+=1
}break;
case bo.PAGE_DOWN:a6.scrollTop(a6.scrollTop()+a6.height()*an);
break;
case bo.ARROW_DOWN:a6.scrollTop(a6.scrollTop()+l);
break;
case bo.HOME_BUTTON:ae.currentPageNumber=1;
break;
case bo.END_BUTTON:if(ae.currentPageNumber===ae.pagesCount){var bs=a6.scrollTop()+ae._pages[ae.currentPageNumber-1].$pageWrapper.height();
a6.scrollTop(bs)
}else{ae.currentPageNumber=ae.pagesCount
}break;
default:break
}};
var br=function(){if(typeof s!=="undefined"&&a9){s.track({eVar21:"sap:"+a9,events:"event26"});
s.clearVars()
}};
var aL=function(){setTimeout(function(){window.scrollTo(0,1)
},0)
};
var bj=function(){return !!q.tablet()&&(window.orientation===-90||window.orientation===90)
};
var B=function(){return !!q.tablet()&&(window.orientation===180||window.orientation===0)
};
var aZ=function(bs){return(bs===180&&window.orientation===0)||(bs===0&&window.orientation===180)
};
var ak=function(bs){return(bs===0&&window.orientation===0)||(bs===180&&window.orientation===180)
};
var ar=function(bs){return aZ(bs)||ak(bs)
};
var R=function(bs){return(bs===90&&window.orientation===-90)||(bs===-90&&window.orientation===90)
};
var ax=function(bs){return(bs===-90&&window.orientation===-90)||(bs===90&&window.orientation===90)
};
var be=function(bs){return ax(bs)||R(bs)
};
var H=function(bs){return ar(bs)||be(bs)
};
var m=function(){return aG.width()<=t
};
var c=function(){return !a4&&m()
};
var aF=function(){return a4&&!bj()
};
var bi=function(){return aF()||c()
};
var a2=function(bt){var bs=bt.getViewport(1);
var bu=a6.width()/bs.width;
return bt.getViewport(bu)
};
var n=function(){bm.push(this)
};
var aa=function(bz,by){var bv=$('<div class="pageWrapper"/>');
var bu=$('<div class="canvasWrapper"/>');
var bx=$('<div class="textLayer"/>');
var bt=$('<div class="annotationLayer"/>');
var bw=$("<canvas/>");
var bs=a2(by);
bu.width(bs.width);
bu.height(bs.height);
bw.attr("width",bs.width);
bw.attr("height",bs.height);
bv.append(bu);
bv.append(bx);
bv.append(bt);
bz.append(bv);
aH.push(new SAP.wcms.sapdx.page.lightBox.LightBoxPdfPage({docPage:by,viewport:bs,$canvasWrapper:bu,$canvas:bw,$canvasTextLayer:bx,$canvasAnnotationLayer:bt,$pageWrapper:bv,pdfViewer:ae,isMobile:a4,onBeforeDraw:n,linkService:ab}))
};
var aj=function(bw,bu){var bt=[];
for(var bs=1;
bs<=bu.numPages;
bs++){var bv=bu.getPage(bs)["catch"](function(by){if(by&&by.message!=="Transport destroyed"){console.error(by)
}});
bt.push(bv)
}var bx=$(document.createDocumentFragment());
return Promise.all(bt).then(function(by){by.forEach(function(bz){aa(bx,bz,ab)
});
bw.append(bx)
})
};
var W=function(){var bt=av.hasClass("extended")?0:h;
var bs=Math.max(av.outerHeight()-bt,ag)+aO;
if(av.hasClass("minified")&&a8.is(":visible")){bs=av.outerHeight()+aO
}a1.css("height",bs);
A.css("height",aG.height()-bs-aO)
};
var bd=function(bs){aH.forEach(function(bt){bt.findController=bs
})
};
var i=function(bs){return{findResultsCount:bs.find(".num__count"),previousMatch:bs.find(".find__prev"),nextMatch:bs.find(".find__next"),overallMatches:bs.find(".overall__matches"),matchesHolder:bs.find(".matches__holder"),searchResultsControl:bs.find(".search-results-control"),searchForm:bs.find(".search-form"),searchController:ay}
};
var Q=function(){return{$searchBlock:bp,$asideLightbox:av,$lightBoxContainer:j,$lightboxReport:x,afterStateChanged:W.bind(this)}
};
var bb=function(){var bt=aU.outerHeight()-aU.height();
var bs=z.outerHeight()+aQ.outerHeight()+bt;
U.height(q.phone()?U.css("max-height"):bs);
q.phone()&&U.width($(window).width());
aU.height(bs)
};
var bc=function(){aU.height(z.outerHeight()+aQ.outerHeight());
jcf.refresh(aU)
};
var k=function(){jcf.replace(aU);
aF()&&bc()
};
var ac=function(){U.height(U.css("max-height"));
U.width($(window).width());
jcf.refresh(aU)
};
var w=function(bs){bs["max-width"]=U.width()
};
var a=function(){var bs=q.phone()?0:at;
var bt={"max-height":window.innerHeight-av.height()-bs};
!q.phone()&&w(bt);
U.css(bt)
};
var aE=function(){U.hide();
a5.removeClass("active-btn")
};
var az=function(){jcf.refresh(aU)
};
var af=function(){am.collapseTree();
k();
ac();
bb();
aE();
aL()
};
var F=function(){if(a4&&!bj()){x.addClass("mobileScrollContainer")
}else{x.removeClass("mobileScrollContainer")
}};
var b=function(bs){au.dotdotdot({wrap:"word",height:Math.round(parseFloat(au.css("line-height"))*T),callback:function(){bs&&bs()
}})
};
var aS=function(){y.removeClass(aw);
aT.removeClass(aw)
};
var L=function(){aR=true;
ae.setZoomScale(1);
aS();
X.removeClass("zoomedIn")
};
var K=function(){a1=x.siblings(".jcf-scrollbar-vertical").find(".jcf-scrollbar-dec");
A=x.siblings(".jcf-scrollbar-vertical").find(".jcf-scrollbar-slider")
};
var aY=function(){return $(window).height()>window.innerHeight
};
var V=function(){if(aY()){x.addClass("addressbar-visible")
}else{x.removeClass("addressbar-visible")
}};
var v=function(){var bs=bj()?az:null;
b(bs);
bi()&&e&&e.calcStartFixPosition();
q.phone()&&af();
c()&&W();
if(ae.presentationMode===E.NORMAL){if(m()){if(ae.$scrollContainer!==x){ae.setScrollableContainer(x)
}}else{if(ae.$scrollContainer!==a6){ae.setScrollableContainer(a6)
}}!a4&&jcf.refresh(a6);
!m()&&jcf.refresh(aU);
ae.setScale(ba.NORMAL);
ae.renderVisiblePages();
if(!a4){ae.scrollToCurrentPosition();
jcf.refresh(a6)
}if(q.phone()&&!H(bq)){L();
var bu=ae.scrollToCurrentPosition();
var bt=ae.$scrollContainer.scrollTop();
if(e&&bu!==bt){e.disableListenScrollEvent()
}bq=window.orientation
}}V()
};
var bh=function(){if(av.hasClass("minified")){av.css("left",0);
return false
}a3=x.scrollLeft();
av.css("left",a3)
};
var p=function(bu,bt){var bs=document.createElement("span");
if(bs.style[bu]!==undefined){bs.style.cssText=bu+":"+bt
}else{return false
}return bs.style[bu]===bt
};
var aN=function(){h=x.scrollTop();
if(c()){!S&&bh();
W()
}};
var bg=function(){var bu=0;
var bt;
var bv=window.orientation;
if(!bj()){bu=$(".lightboxPopup .popupHeader").outerHeight()
}aG.on("orientationchange.tablet-pdf-ligthbox",bs);
function bs(){am.collapseTree();
if(bj()){x.removeClass("mobileScrollContainer");
jcf.destroy(aU);
jcf.replace(aU);
ae.setLightboxContainer(a6);
if(ae.$scrollContainer!==a6){ae.setScrollableContainer(a6)
}am.setScrollableContainer(a6);
am.setOutlineHeightHandler(null);
j.css("paddingTop",0)
}else{if(B()){aL();
x.addClass("mobileScrollContainer");
jcf.destroy(aU);
k();
U=aU.parent(".jcf-scrollable-wrapper");
if(bt){clearTimeout(bt)
}bt=setTimeout(function(){a()
},250);
bb();
ae.setLightboxContainer(a7);
if(ae.$scrollContainer!==x){ae.setScrollableContainer(x)
}am.setScrollableContainer(x);
am.setOutlineHeightHandler(bb.bind(this));
aE()
}else{console.error("Unknown screen.orientation type!");
return
}}(function(bw,bx){setTimeout(function(){if(H(bv)){bw=0
}else{if(bx){bu=$(".lightboxPopup .popupHeader").outerHeight();
bw=bu
}else{bw=-bu
}}L();
ae.scrollToCurrentPosition(bw);
bv=window.orientation
},300)
})(bu,B())
}};
var ao=function(){aG.on("resize.pdf-ligthbox orientationchange.pdf-ligthbox",$.debounce(150,v));
if(q.tablet()){bg()
}};
var aJ=function(){x.on("scroll.report-ligthbox",aN);
av.on("touchmove.report-ligthbox",function(bs){(a5.hasClass("active-btn")&&bi())&&bs.preventDefault()
})
};
var g=function(bt,bu,bs){if(bu.val()){bs.css("display","flex");
bu.addClass("search-active")
}else{bs.hide();
bu.removeClass("search-active")
}};
var o=function(bt,bu,bs){bt.addClass("search-focus");
g(bt,bu,bs)
};
var aB=function(bt,bu,bs){if(aq){aq=false
}else{bt.removeClass("search-focus");
g(bt,bu,bs)
}};
var aW=function(bs,bt){bs.submit(function(bu){bu.preventDefault();
var bv=bt.val();
if(c()||bi()){bt.blur()
}ay.search(bv,null,function(){if(!m()){jcf.refresh(aU)
}c()&&W()
})
})
};
var aV=function(bt,bu,bs){bu.on("keyup change",function(){g(bt,bu,bs)
})
};
var G=function(bt,bu,bs){bu.on("focus",function(){o(bt,bu,bs)
});
bu.on("blur",function(){aB(bt,bu,bs)
});
bs.on("mousedown",function(){if(bt.hasClass("search-focus")){aq=true
}})
};
var J=function(bt,bu,bs){bs.click(function(){ay.emptySearch(function(){c()&&W()
});
bu.val("").focus();
if(bj()||!m()){jcf.refresh(".outlinePanel")
}})
};
var aI=function(bs){var bv=bs.find(".search__input"),bt=j.find(".clear-search-btn"),bu=$(".lightboxContainer").find(".search-toc-container");
aW(bs,bv);
J(bu,bv,bt);
aV(bu,bv,bt);
G(bu,bv,bt)
};
var a0=function(){$(".lightboxPopup .loadingBar").removeClass("hidden")
};
var ai=function(){$(".lightboxPopup .loadingBar").addClass("hidden")
};
var P=function(){$(".lightboxPopup .lightboxContainer").removeClass("hidden")
};
var aK=function(){$(".lightboxPopup .lightboxContainer").addClass("hidden")
};
var d=function(){$(".fullscreen-link").on("click",function(){r.requestFullScreen()
})
};
var aX=function(){aT.on("click",function(){N=true;
var bs=ae.zoomIn();
if(bs){aT.addClass(aw)
}else{aS()
}return false
});
y.on("click",function(){N=true;
var bs=ae.zoomOut();
if(bs){y.addClass(aw)
}else{aS()
}return false
})
};
var O=function(){if(aR){aR=false;
return
}var bs=ae.$scrollContainer.scrollTop();
var bt=ae.scrollToCurrentPosition();
if(e&&N&&bt!==bs){e.disableListenScrollEvent()
}N=false
};
bk.prototype.openLightbox=function(){if(I){PDFJS.disableStream=true;
PDFJS.disableRange=true
}br();
a6=this.content.find(".popupContent");
bf=this.content.find(".toolbar");
aC=bf.find(".share-wrap");
ap=aC.find(".share-dropdown a");
X=this.wrap;
al=$("body");
aT=this.content.find(".zoomIn");
y=this.content.find(".zoomOut");
a5=$(".content-btn_mobile");
aU=$(".outlinePanel");
av=$(".aside-lightbox");
M=aG.scrollTop();
j=a6.parent(".lightboxContainer");
x=$(".mfp-wrap.lightboxReport");
aQ=$(".outline-headline");
au=$(".descriptionText");
bp=$(".search-toc-container");
a8=j.find(".matches__holder");
a7=this.content;
S=p("position","sticky")||p("position","-webkit-sticky")||p("position","-o-sticky")||!p("position","-moz-sticky")||!p("position","-ms-sticky");
if(m()){al.addClass(Y);
aL()
}if(a4){al.on("touchstart.btnHover",".zoomOut, .zoomIn",function(){$(this).addClass("hover")
});
al.on("touchend.btnHover",".zoomOut, .zoomIn",function(){$(this).removeClass("hover")
});
x.addClass("mobileDevicesClass");
bq=window.orientation
}$("html").addClass("lightboxIR-page");
F();
ay=new SAP.wcms.sapdx.page.lightBox.SearchController();
aM=new SAP.wcms.sapdx.page.lightBox.FindBar(i(j));
ae=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfViewer({$wrapper:X,$popupContent:a6,$lightboxContainer:m()?a7:a6,$scrollContainer:!bj()&&a4?x:a6,pdfAssetId:f,searchController:ay,lightboxType:aD,updateContainerOnZoomCallback:function(){if(!a4){if(m()){jcf.refresh(x)
}else{jcf.refresh(a6)
}}O()
},isNarrowWindow:m()});
r=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfFullScreenMode({$container:a6,lightBoxPdfViewer:ae,keyDownHandlerNormalViewMode:D});
z=this.content.find(".outline-tree");
if(!ap.length){aC.hide()
}q.tablet()&&$(".fullscreen-control").hide();
a0();
aK();
d();
aX();
ah()
};
var Z=(function(){var bs={showLinksList:function(){U.show();
a5.addClass("active-btn");
x.addClass("toc-opened")
},hideLinksList:function(){U.hide();
a5.removeClass("active-btn");
x.removeClass("toc-opened")
},toggleLinksList:function(){if(this.isLinksListVisible()){this.hideLinksList();
a5.removeClass("active-btn")
}else{this.showLinksList();
a5.addClass("active-btn")
}},isLinksListVisible:function(){return U.is(":visible")
},isClickOutside:function(bu,bt){if(bt.is(bu.target)){return false
}return bt.has(bu.target).length===0
},attachClickHandlers:function(){var bt=this;
a5.on("click.linksList",function(bu){bu.preventDefault();
bt.toggleLinksList();
if((a4||m())&&$(this).hasClass("active-btn")){a();
bb();
jcf.refresh(aU)
}});
al.on("click.linksList",function(bu){if(bt.isClickOutside(bu,U)&&bt.isClickOutside(bu,a5)){bt.hideLinksList()
}});
ad=aU.find("a:not(.has-child > a)");
ad.on("click.linkElementList",function(){bt.hideLinksList()
})
},destroyClickHandlers:function(){a5.off("click.linksList");
al.off("click.linksList");
ad&&ad.off("click.linkElementList")
}};
return bs
})();
var aP={"..1000":{on:function(){e=new SAP.wcms.sapdx.page.lightBox.scrollController(Q());
ae.setLightboxContainer(a7);
if(!a4){$(".mfp-wrap").addClass("mobileScrollContainer");
al.addClass(Y);
jcf.replace(aU);
jcf.replace(x,"Scrollable");
bc();
U=aU.parent(".jcf-scrollable-wrapper");
bb();
if(ae.$scrollContainer!==x){ae.setScrollableContainer(x)
}am.setScrollableContainer(x);
am.setOutlineHeightHandler(bb.bind(this));
aE();
jcf.refresh(a6)
}K();
setTimeout(function(){jcf.destroy(a6)
},0);
e.initCurrentHeaderState();
ay.setScrollController(e);
Z.hideLinksList();
Z.attachClickHandlers();
V()
}},"1000..":{on:function(){ae.setLightboxContainer(a6);
al.removeClass(Y);
if(!a4){$(".mfp-wrap").removeClass("mobileScrollContainer");
am.collapseTree();
setTimeout(function(){jcf.destroy(x)
},0);
jcf.destroy(aU);
jcf.replace(aU);
jcf.refresh(aU);
if(ae.$scrollContainer!==a6){ae.setScrollableContainer(a6)
}am.setScrollableContainer(a6);
am.setOutlineHeightHandler(null);
jcf.replace(a6);
j.css("paddingTop",0)
}e&&e.stopListenScrollEvent();
Z.showLinksList();
Z.destroyClickHandlers()
}}};
function bn(bs){ab=new pdfjsWebPDFLinkService.PDFLinkService();
ab.setDocument(bs);
ab.setViewer(ae)
}function ah(){jcf.setOptions("Scrollable",{mouseWheelStep:150});
bl=PDFJS.getDocument(aA);
bl.then(function(bs){var bt=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfToolbarController(bf,u.attr("href"),q);
bt.setUpToolbar();
bt.initDownloadButton(C,bs,a9);
bn(bs);
am=new SAP.wcms.sapdx.page.lightBox.LightBoxPdfOutline({$container:z,$outlinePanel:aU,lightBoxPdfViewer:ae,$scrollContainer:!bj()&&a4?x:a6,outlineHeightHandler:!bj()&&a4&&bb.bind(this),linkService:ab});
aj(a6,bs).then(function(){ae.setPages(aH);
ae.setDocument(bs);
bs.getOutline().then(function(bu){am.render(bu,bs)
}).then(function(){b(function(){k();
U=aU.parent(".jcf-scrollable-wrapper");
(aF()||m())&&a();
q.phone()&&ac();
bj()&&jcf.refresh(aU);
aF()&&$(".outlinePanel.jcf-scrollable").hide();
ResponsiveHelper.addRange(aP);
ai();
P();
ae.setInitialPage(u);
aF()&&$(".outlinePanel.jcf-scrollable").show();
ae.renderVisiblePages();
ao();
aJ();
ay.initialize(ae,aM);
c()&&W();
aI(j.find(".search__form"));
bd(ay.pdfFindController);
window.addEventListener("keydown",D);
aF()&&$(".outlinePanel.jcf-scrollable").show()
})
})
})
},function(bs){if(bs&&bs.message!=="Worker was destroyed"){console.error(bs)
}})
}bk.prototype.beforeCloseLightbox=function(){c()&&jcf.destroy(x)
};
bk.prototype.closeLightbox=function(){if(I){PDFJS.disableStream=false;
PDFJS.disableRange=false
}if(bl){bl.destroy()
}aH=[];
ae.removeLocationHash();
X.off("scroll");
X.css("top","");
aG.off("orientationchange.pdf-ligthbox resize.pdf-ligthbox");
aG.off("orientationchange.tablet-pdf-ligthbox");
al.removeClass(Y);
aG.scrollTop(M);
$(document).trigger("lightboxClosed");
jcf.setOptions("Scrollable",{mouseWheelStep:10});
e&&e.stopListenScrollEvent();
ResponsiveHelper.deleteRange(aP);
$(document).trigger("resumeScrollBehaviour");
al.off("touchstart.btnHover");
al.off("touchend.btnHover");
av.off("touchmove.report-ligthbox");
window.removeEventListener("keydown",D);
Z.destroyClickHandlers();
SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.removeShareIdRequestParameter()
};
return bk
})();
namespace("SAP.wcms.sapdx.page.lightBox");
$(document).ready(function(){var f={headerMessageKey:"Forms.Lightbox.DocumentNotFound.MainTitle.Text",failTitleKey:"Forms.Lightbox.DocumentNotFound.Headline.Text",errorMessageKey:"Forms.Lightbox.DocumentNotFound.Paragraph.Text",buttonTitleKey:"Forms.Lightbox.DocumentNotFound.Submit.Button.Label"};
var a=$("body").hasClass("errorPage")||$("body").hasClass("errorPageStandard");
var d=window.location.hash||(SAP&&SAP.locationHash),b=d.match(/pdf-asset=([^&]+)/);
if(a&&b){SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.redirectToADP(b[1]);
return
}SAP.wcms.sapdx.page.lightBox.isPdfLightboxEnabled=$("body").data("is-pdf-lightbox-enabled");
if(!SAP.wcms.sapdx.page.lightBox.isPdfLightboxEnabled){return
}var e=window.location.hash||(SAP&&SAP.locationHash),i=$.deparam.querystring().gated_resource_path,g=$.deparam.querystring().gated_asset_path,l=e.match(/pdf-asset=([^&]+)/),j=new SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncherFactory();
if(l&&!i&&!g&&!k()){var c=$("body").find('[data-asset-id*="'+l[1]+'"]');
if(c.attr("href")){h(c)
}else{SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.openLightboxByAssetId(l[1],h,f)
}}$("body").on("click",'[href*="/documents/"]:not([target="_blank"]):not(.exclude-ligthbox-handler), [href*="/docs/download/"][href*=".pdf"]:not([target="_blank"]):not(.exclude-ligthbox-handler)',function(m){this.blur();
if($(m.currentTarget).closest(".popup-container").length){return
}m.preventDefault();
var n=$(m.currentTarget);
n.addClass("activePdfLink");
h(n,m)
});
function h(m,n){var o=j.pdf();
o.openLightBox(m,n)
}function k(){var n=["/content/integrated-reports/website/global/sap-se/2017/en","/content/integrated-reports/website/global/sap-se/2017/de","/content/integrated-reports/website/global/sap-se/2018/en","/content/integrated-reports/website/global/sap-se/2018/de"];
var o=$("html").data("page-path");
var m=document.cookie.match("compatibilityPopup");
var q=window.navigator.userAgent.toLowerCase();
var p=(/trident/).test(q)||(/msie/).test(q);
return p&&!m&&n.indexOf(o)!==-1
}});
namespace("SAP.wcms.sapdx.page.lightBox");
$(document).ready(function(){var h={headerMessageKey:"Forms.Lightbox.VideoNotFound.MainTitle.Text",failTitleKey:"Forms.Lightbox.VideoNotFound.Headline.Text",errorMessageKey:"Forms.Lightbox.VideoNotFound.Paragraph.Text",buttonTitleKey:"Forms.Lightbox.VideoNotFound.Submit.Button.Label"};
var b=$("body").hasClass("errorPage")||$("body").hasClass("errorPageStandard");
var f=window.location.hash||(SAP&&SAP.locationHash),d=f.match(/video=([^&]+)/);
if(b&&d){SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.redirectToADP(d[1]);
return
}SAP.wcms.sapdx.page.lightBox.isVideoLightboxEnabled=$("body").data("is-video-lightbox-enabled");
var j=$("li[data-light-box-type], div[data-light-box-type], a[data-light-box-type]"),i=new SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncherFactory();
j.on("click",function(m){var l=$(m.currentTarget);
var o=l.attr("href");
var n=l.closest(".slide").find(".lightBoxControlWrapper");
if(!o||l.data("light-box-type")==="video"){m.preventDefault();
a(n,m)
}});
if(!SAP.wcms.sapdx.page.lightBox.isVideoLightboxEnabled||c()){return
}var g=window.location.hash||(SAP&&SAP.locationHash),k=g.match(/video=([^&]+)/);
if(k){var e=$("body").find('[data-asset-id*="'+k[1]+'"]');
if(e.attr("href")||e.attr("data-dam-link")){a(e)
}else{SAP.wcms.sapdx.page.lightBox.LightBoxUIUtils.openLightboxByAssetId(k[1],a,h)
}}$("body").on("click",'[href*="/assetdetail/"]:not([target="_blank"]):not(.exclude-ligthbox-handler)',function(m){this.blur();
m.preventDefault();
var l=$(m.currentTarget);
l.addClass("activeVideoLink");
a(l,m)
});
function a(l,n){var m=i.video();
m.openLightBox(l,n)
}function c(){return $("html").hasClass("AndroidOS")||$("html").hasClass("iOS")
}});
$(document).ready(function(){var d="[data-light-box-type=lightbox], [data-light-box-type=overlayComponent], [data-light-box-type=complexAssetLightbox]";
var g="#overlay=";
var f=new SAP.wcms.sapdx.page.lightBox.launcher.LightBoxLauncherFactory();
var c=$("body");
var b=false;
c.on("click",d,function(k){var j=$(this).attr("href");
var m=(j.indexOf("/assetdetail/")!==-1)?true:false;
var l=(j.indexOf("/documents/")!==-1||j.indexOf("/docs/download/")!==-1)?true:false;
if(!l&&!m){var i=$(k.currentTarget);
k.preventDefault();
this.blur();
e(i);
h(i,k)
}});
a();
$(window).load(a);
function a(){var i=window.location.hash;
if(i&&i.indexOf(g)===0&&!b){c.find('a[href="'+i.replace(g,"")+'"]').filter(d).trigger("click");
b=true
}}function h(i,j){var k=f.htmlContentLightboxOverlay();
k.openLightBox(i,j)
}function e(i){var l=i.data("is-lightbox-header-configured");
var j=i.data("is-lightbox-footer-configured");
var k=!l&&!j;
if(k){i.attr("data-light-box-type","overlayComponent")
}else{i.attr("data-light-box-type","complexAssetLightbox")
}}});