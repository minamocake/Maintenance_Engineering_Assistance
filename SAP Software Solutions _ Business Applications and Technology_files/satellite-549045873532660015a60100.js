/* from e-pam */
window.getActivationFlag=function() {
  var flag = false;
  try {
    var flagName = "useractivating";
    flag = !!sessionStorage.getItem(flagName);
console.log('DTM: getActivationFlag: flag: ',flag);
    if (flag) {
      sessionStorage.removeItem(flagName);
    }
  }catch(e){window.console&&console.error(e);}
  return flag;
}

window.s_aaTrigger=function() {
  try {
    console.log('DTM: s_aaTrigger called');
    var pageCanonicalElement = $("link[rel='canonical']");
    var pageCanonicalUrl = !!pageCanonicalElement ? pageCanonicalElement.attr("href") : "";

    if(!!pageCanonicalUrl && pageCanonicalUrl.match(/(.*)\/errors\/404.html/)){
      s.pageType="errorPage";
    }

    /* new demandbase integration */
    try {

    // bandaid: don't pop demandbase code for china traffic
    if ( !location.pathname.match(/^\/china/i) ) {

      s._dtm_db = _satellite.getVar('demandbase');
      if (s._dtm_db&&s._dtm_db.data) {
        console.log('DTM: demandbase data: ',s._dtm_db.data);

        s.new_db={
          _delim:':',
          _nonOrgMatchLabel:'[n/a]',
          _contextData: {
            /* eVar63 */
            s_dmdbase:[
              {"id":"demandbase_sid",    "max_size":10},
              {"id":"company_name",      "max_size":40},
              {"id":"industry",          "max_size":40},
              {"id":"sub_industry",      "max_size":20},
              {"id":"employee_range",    "max_size":30},
              {"id":"revenue_range",     "max_size":20},
              {"id":"audience",          "max_size":30},
              {"id":"audience_segment",  "max_size":30},
              {"id":"marketing_alias",   "max_size":25}
            ],
            /* eVar64 */
            s_dmdbase_custom:[
              {"id": "city",                                 "max_size":40},
              {"id": "state",                                "max_size":3},
              {"id": "zip",                                  "max_size":10},
              {"id": "country",                              "max_size":5},
              {"id": "b2b",                                  "max_size":5},
              {"id": "b2c",                                  "max_size":5},
              {"id": ["watch_list","BP_ID"],                 "max_size":30},
              {"id": ["watch_list","account_status"],        "max_size":45},
              {"id": ["watch_list","account_focus"],         "max_size":38},
              {"id": ["watch_list","hybris_account_status"], "max_size":45},
              {"id": ["watch_list","hybris_account_focus"],  "max_size":18}
            ],
            /* eVar65 */
            s_dmdbase_downstream:[
              { 'id': 'fortune_1000',    'max_size': 5 },
              { 'id': 'forbes_2000',     'max_size': 5 },
              { 'id': 'primary_sic',     'max_size': 8 },
              { 'id': 'employee_count',  'max_size': 7 },
              { 'id': 'web_site',        'max_size': 30 },
              { 'id': 'stock_ticker',    'max_size': 6 },
              { 'id': 'traffic',         'max_size': 30 },
              { 'id': 'information_level','max_size': 10 }
            ]
          }
        }
        var p,v;
        var cd = s.new_db._contextData;
        for (var c in cd) {
          if (cd.hasOwnProperty(c)) {
            s.contextData[c]=[];
            for (var i=0,l=cd[c].length;i<l;i++) {
              v='';
              p = cd[c][i];
              if (
                  (p.id instanceof Array)
                   &&
                  (typeof s._dtm_db.data[p.id[0]]!='undefined')
                   &&
                  (typeof s._dtm_db.data[p.id[0]][p.id[1]]!='undefined')
                ){
                  v=s._dtm_db.data[p.id[0]][p.id[1]];
              }
              else if (
                  (typeof s._dtm_db.data[p.id]!='undefined')
                ){
                  v=s._dtm_db.data[p.id];
              }
              v=((''+v)||s.new_db._nonOrgMatchLabel).slice(0,p.max_size);
              if (v=='null') v=s.new_db._nonOrgMatchLabel;
              var rep = new RegExp(s.new_db._delim,'g');
              v=v.replace(rep,'.').replace(/^\s+|\s+$/g,'');
              s.contextData[c].push(v);
            } // end for
          } // end if
          s.contextData[c]=s.contextData[c].join(s.new_db._delim);
        }

      } // end if s._dtm_db&&s._dtm_db.data

    } // end china bandaid

    } catch (e) {
      console.log(e);
    }

    /* banner impression tracking */
    var ADL = window.AnalyticsDataLayer||{};
    if ( ADL&&ADL.events&&ADL.events.bannerImpression ) {
        s.events = s.apl(s.events,'event76',',',2);
        var advertising = (ADL.advertising instanceof Array) ? ADL.advertising : [];
        for (var a=0,l=advertising.length;a<l;a++) {
            var banner_id = advertising[a].banner_id||false;
            if (banner_id) {
                s.products = s.apl(s.products,";banner impression;;;;eVar77="+banner_id,',',2);
            }
        }
    }

    
    /* component impression tracking */
    var ADL = window.AnalyticsDataLayer||{};
    if ( ADL&&ADL.events&&ADL.events.componentImpression ) {
        s.events = s.apl(s.events,'event76',',',2);
        var ad = (ADL.personalization instanceof Array) ? ADL.personalization : [];
        for (var a = 0, l = ad.length; a < l; a++) {
            var cid = ad[a].component_id || false;
            var oid = ad[a].output_id || false;
            if (cid||oid) {
                cid=cid||'no value';
                oid=oid||'no value';
                s.products = s.apl(s.products,";component_impression;;;;eVar77=" + [cid,oid].join(':'),',',2);
            }
        }
    }
    
    /* email activation */
    if(
        (typeof window.getActivationFlag == 'function')
         &&
        window.getActivationFlag()
    ) {
        s.events = s.apl(s.events,'event92',',',2);
        var url = decodeURIComponent(location.search.replace(/amp(;|%3B)/g,''));
        var itemId = url.split(/.*(gated_resource_path|trial)=.*(\/|trial\.)([-0-9a-f]+)(\.gate)?\.html.*/)[3];
        if (itemId) {
          s.eVar21 = 'sap:' + itemId;
        }
        window.s_skipNextEvent10 = true;
        console.log('DTM: event92 added, s_skipNextEvent10 set true');


    } // end email activation


    /* bandaid - suppress regular on-page request on search results page */
    if (!location.pathname.match(/\/search-results\.html$/)) {
   		console.log('DTM: Omn Trigger called');
   		console.log('DTM: s_setPercentPageViewedVars called (s_aaTrigger - 1)');
      s_setPercentPageViewedVars();
      s.t();
    /* suppress only if search parameter is present */
    } else if (
      !s.Util.getQueryParam('Query')
    ) {
   		console.log('DTM: Omn Trigger called');
   		console.log('DTM: s_setPercentPageViewedVars called (s_aaTrigger - 2)');
      s_setPercentPageViewedVars();
      s.t();
    }

  } catch(e) {
    console.log(e);
  }

} // end s_aaTrigger

function s_setPercentPageViewedVars() {
  try {
    console.log('DTM: s_setPercentPageViewedVars called');
    var page = s.pageURL||location.href; // s.pageName
    var percentViewed = s.getPercentPageViewed(page);
      if (
        (percentViewed instanceof Array)
         &&
         (percentViewed.length>1)
      ) {
        s.prop70=String(percentViewed[1]||'').toString();
        if (s.prop70) {
          // bandaid: remove previous e70 in case s.t call made instead of s.trackData (e.g. on search pages)
          s.events = s.removeEvent(s.events,'event70');
          // add current
          s.events = s.apl(s.events, 'event70=' + s.prop70, ',', 1);
        }
        s.prop68=s.eVar68=String(percentViewed[0]).toString();
      }
  } catch(e){console.log(e);}
} // end s_setPercentPageViewedVars

//var sapAnalyticsElement = document.getElementById('sap-analytics')
//if(sapAnalyticsElement && sapAnalyticsElement.getAttribute('data-use-sap-analytics') === "true") {
//	console.log('DTM: sap-analytics exists and marked with true - sap_load_analytics_ready listener added');
if (!window.NO_ANALYTICS_CALL) { //to allow pages not to make the initial calls
  if(document.querySelector('[data-delayed-load-analytics]')) {
    console.log('DTM: data-delayed-load-analytics exists - sap_load_analytics_ready listener added');


    document.addEventListener("sap_load_analytics_ready", function(e){
          console.log('DTM: sap_load_analytics_ready trigged - calling s_aaTrigger');
          s_aaTrigger();
      });
  } else {
      if (
        window.CQ_Analytics
        &&
        window.CQ_Analytics.CCM
        &&
        window.CQ_Analytics.CCM.areStoresInitialized
      ) {
        console.log('DTM: CQ_Analytics.CCM.areStoresInitialized exists - calling s_aaTrigger');
        s_aaTrigger();
      } else {
        try {
          console.log('DTM: CQ_Analytics.CCM.areStoresInitialized does not exist - storeinitialize listener added');
          CQ_Analytics.CCM.addListener("storesinitialize", function(e) {
            console.log('DTM: storesinitialize > calling s_aaTrigger');
            s_aaTrigger();
          });
        }catch(e) {console.log(e);}
      }
  }
}

//SAPONEDX-2232
try {
  if (!!$) {
    $(document).ajaxComplete(function (event, xhr, settings) {
      var url = settings.url,
          index = settings.url.indexOf('?'),
          urlHandler;
      if (index !== -1) {
        url = url.substr(0, index);
      }
      if (SAP && SAP.sapdx && SAP.sapdx.analytics && SAP.sapdx.analytics.ajax && SAP.sapdx.analytics.ajax.urlHandlerMapping) {
        urlHandler = SAP.sapdx.analytics.ajax.urlHandlerMapping[url];
        if (typeof urlHandler === 'function') {
          urlHandler.call(null, settings);
        }
      }
    });
  }
} catch (e) {
  console.log(e);
}
