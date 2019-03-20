//if (window.location.href.toUpperCase().indexOf("/CMP/") < 0 ) {
if (window.location.href.toUpperCase().indexOf("/COMMUNITY") >= 0 && (!document.cookie.match(/\bnotice_preferences=/) || !!document.cookie.match(/\bnotice_preferences=(1|2)/)) ) {
  var swa = {
    pubToken: '33255556-c863-4a29-9bda-1309df0cff50',
    baseUrl: 'https://webanalytics.cfapps.eu10.hana.ondemand.com/tracker/',
    visitorCookieTimeout: 63113852,
    dntLevel: 1,
    bannerEnabled: false,
    subSiteId: 'www.sap.com',
    optOutCookieDomain: 'sap.com',
    optOutGroup: 'sapcomTracking'
  };
  $(function(){
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.defer=true; g.async=true; g.src=swa.baseUrl+'js/privacy.js';
    s.parentNode.insertBefore(g,s);
  });
}
