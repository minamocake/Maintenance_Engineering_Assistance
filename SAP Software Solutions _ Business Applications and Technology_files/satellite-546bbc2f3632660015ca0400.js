/* push mid to a cookie so epam can grab it in form submissions for.. reasons? */
(function() {
try {
  var mid = _satellite.getVisitorId().getMarketingCloudVisitorID()||'';
  if (mid) {
    document.cookie = 'AMCV_MCMID='+mid+';path=/;domain=sap.com';
  }
} catch (e) { window.console&&console.error(e); }
})();

/* Adobe Analytics AppMeasurement
 * Maintained by Neil Evans 
 */
var s = new Object();
s.lastFileUpdate = 'dtm_1dx:2019.01.29'; // Last Edit: ACR.JD

try {
    /** Baindaid for preserving original referrer because of trustarc reload **/
    s._getReferrer = function() {
        var ref = document.cookie.match(/(?:^|;\s*)s_referrer=([^;]*)/);
        if (ref && ref[1]) {
            ref = unescape(ref[1]).split('|');
            if (+ref[0] === 0 && ref[1]) {
                document.cookie = 's_referrer=' + escape('1|' + ref[1]) + ';path=/;domain=' + location.hostname.split('.').slice(-2).join('.');
                return ref[1];
            }
        }
        return document.referrer || '';
    }
    s.referrer = s._getReferrer();
} catch (e) {
    window.console&&console.error(e);
}

s.consoleLog = function() {
    if (
        //location.search.match(/[&?]debug=true(&|$)/)
        //||
        _satellite.settings.notifications
    ) window.console&&console.log.apply(this, ['DTM: '].concat([].slice.call(arguments)));
};
s.consoleError = function() {
    if (
        //location.search.match(/[&?]debug=true(&|$)/)
        //||
      _satellite.settings.notifications
    ) window.console&&console.error.apply(this, ['DTM: '].concat([].slice.call(arguments)));
};

s.trackSocial = function(data) {
  try{  
    s.consoleLog(arguments);  
    var data = data||{};
    data.type=(''+(data.type||'share')).toUpperCase();
    s_trackShare(data.platform,'',data.url,data.type);
  
  } catch(e) {window.console&&console.error(e);}
}

/* grab transaction id for asset view / dl on asset pages */
try {
//if (_satellite.settings.isStaging) { // TEMP
    window.s_transactionID = '';
    if (window.jQuery && (typeof jQuery == 'function')) {
        jQuery(document).on("AfterHybris", {}, function(event, arg) {
            try {
                s.consoleLog("AfterHybris: event: ", event);
                s.consoleLog("AfterHybris: arg: ", arg);

                window.s_transactionID = arg.TransactionID;

                var payload = {
                    "events": "event93,event23",
                    "eVar93": arg.TransactionID,
                    /* Neil to provide final (for now, static) value. needs to be exposed in arg */
                    /*"eVar94": "Gated Download",*/
                    "eVar94": (arg.IA_TYPE||'No Interaction Type Value'),
                    "eVar98": (arg.INTEREST_ITEM||'No Item of Interest Value'),
                    "prop44": ["Hybris Interaction", "Gated Download", arg.TransactionID].join('|'),
                    "eVar44": ["Hybris Interaction", "Gated Download", arg.TransactionID].join('|'),
                  	"eVar21": arg.itemId,
                    "prop45": location.href,
                    "eVar45": "+1",
                    "products": ";;;;event23=1"
                }
                s.consoleLog("AfterHybris: payload: ", payload);

                /* 
                  Xuegen's code showed to look for window.adobeCallMade to determine whether 
                  or not to set the vars or make a separate s.trackData call. I'm not sure where/how 
                  this is supposed to be set, but I do not currently see it set on www-qa.sap.com.
                  For now I am commenting out the condition and assume always separate s.trackData call
                */
//                if (window.adobeCallMade) {
                    s.trackData(payload, 'o', 'Hybris Interaction');
//                } else {
//                    for (var p in payload) {
//                        if (payload.hasOwnProperty(p)) {
//                            s[p] = payload[p];
//                        }
//                    }
//                } // end if..else adobeCallMade

            } catch (e) {
                window.console && console.error(e);
            }
        });
    } // end if jQuery
//} // TEMP: end if staging
} catch (e) {
    window.console && console.error(e);
}


s.tryParseJSON=function(js){
    try {
        var o=JSON.parse(js);
        if (o&&typeof o==="object") {
            return o;
        }
    }
    catch (e) {
      //console.log('DTM: ERROR: ',e);
    }
    return false;
};

// map of rsids/regions/countries
s.fsdAppendix = {
    "A": [{
        "subdir": "africa",
        "rsid": "sapcomafr",
        "region": "emea",
        "country": "afr"
    }, {
        "subdir": "americas",
        "rsid": "sapcomams",
        "region": "oth",
        "country": "ams"
    }, {
        "subdir": "andeancarib",
        "rsid": "sapcomand",
        "region": "la",
        "country": "and"
    }, {
        "subdir": "argentina",
        "rsid": "sapcomar",
        "region": "la",
        "country": "ar"
    }, {
        "subdir": "asia",
        "rsid": "sapcomapj",
        "region": "apj",
        "country": "apj"
    }, {
        "subdir": "sea",
        "rsid": "sapcomapj",
        "region": "apj",
        "country": "apj"
    }, {
        "subdir": "australia",
        "rsid": "sapcomau",
        "region": "apj",
        "country": "au"
    }, {
        "subdir": "austria",
        "rsid": "sapcomat",
        "region": "emea",
        "country": "at"
    }, {
        "subdir": "baltics",
        "rsid": "sapcomblt",
        "region": "emea",
        "country": "blt"
    }, {
        "subdir": "belgie",
        "rsid": "sapcombe",
        "region": "emea",
        "country": "be"
    }, {
        "subdir": "belgique",
        "rsid": "sapcombefr",
        "region": "emea",
        "country": "befr"
    }, {
        "subdir": "belux",
        "rsid": "sapcomblx",
        "region": "emea",
        "country": "blx"
    }, {
        "subdir": "bolivia",
        "rsid": "sapcombo",
        "region": "la",
        "country": "bo"
    }, {
        "subdir": "brazil",
        "rsid": "sapcombr",
        "region": "la",
        "country": "br"
    }, {
        "subdir": "bulgaria",
        "rsid": "sapcombg",
        "region": "emea",
        "country": "bg"
    }, {
        "subdir": "canada",
        "rsid": "sapcomca",
        "region": "na",
        "country": "ca"
    }, {
        "subdir": "canada-fr",
        "rsid": "sapcomcafr",
        "region": "na",
        "country": "cafr"
    }, {
        "subdir": "caribe",
        "rsid": "sapcomcrb",
        "region": "la",
        "country": "crb"
    }, {
        "subdir": "centralamerica",
        "rsid": "sapcomcam",
        "region": "la",
        "country": "cam"
    }, {
        "subdir": "chile",
        "rsid": "sapcomcl",
        "region": "la",
        "country": "cl"
    }, {
        "subdir": "china",
        "rsid": "sapcomcn",
        "region": "apj",
        "country": "cn"
    }, {
        "subdir": "cis",
        "rsid": "sapcomcis",
        "region": "emea",
        "country": "cis"
    }, {
        "subdir": "colombia",
        "rsid": "sapcomco",
        "region": "la",
        "country": "co"
    }, {
        "subdir": "croatia",
        "rsid": "sapcomhr",
        "region": "emea",
        "country": "hr"
    }, {
        "subdir": "cyprus",
        "rsid": "sapcomcy",
        "region": "emea",
        "country": "cy"
    }, {
        "subdir": "cz",
        "rsid": "sapcomcz",
        "region": "emea",
        "country": "cz"
    }, {
        "subdir": "denmark",
        "rsid": "sapcomdk",
        "region": "emea",
        "country": "dk"
    }, {
        "subdir": "estonia",
        "rsid": "sapcomee",
        "region": "emea",
        "country": "ee"
    }, {
        "subdir": "finland",
        "rsid": "sapcomfi",
        "region": "emea",
        "country": "fi"
    }, {
        "subdir": "france",
        "rsid": "sapcomfr",
        "region": "emea",
        "country": "fr"
    }, {
        "subdir": "germany",
        "rsid": "sapcomde",
        "region": "emea",
        "country": "de"
    }, {
        "subdir": "greece",
        "rsid": "sapcomgr",
        "region": "emea",
        "country": "gr"
    }, {
        "subdir": "hk",
        "rsid": "sapcomhk",
        "region": "apj",
        "country": "hk"
    }, {
        "subdir": "hungary",
        "rsid": "sapcomhu",
        "region": "emea",
        "country": "hu"
    }, {
        "subdir": "india",
        "rsid": "sapcomin",
        "region": "apj",
        "country": "in"
    }, {
        "subdir": "indonesia",
        "rsid": "sapcomid",
        "region": "apj",
        "country": "id"
    }, {
        "subdir": "israel",
        "rsid": "sapcomil",
        "region": "emea",
        "country": "il"
    }, {
        "subdir": "italy",
        "rsid": "sapcomit",
        "region": "emea",
        "country": "it"
    }, {
        "subdir": "japan",
        "rsid": "sapcomjp",
        "region": "apj",
        "country": "jp"
    }, {
        "subdir": "korea",
        "rsid": "sapcomkr",
        "region": "apj",
        "country": "kr"
    }, {
        "subdir": "latinamerica",
        "rsid": "sapcomla",
        "region": "la",
        "country": "lao"
    }, {
        "subdir": "latvia",
        "rsid": "sapcomlv",
        "region": "emea",
        "country": "lv"
    }, {
        "subdir": "lithuania",
        "rsid": "sapcomlt",
        "region": "emea",
        "country": "lt"
    }, {
        "subdir": "maghreb",
        "rsid": "sapcommag",
        "region": "emea",
        "country": "mag"
    }, {
        "subdir": "malaysia",
        "rsid": "sapcommy",
        "region": "apj",
        "country": "my"
    }, {
        "subdir": "mena",
        "rsid": "sapcommna",
        "region": "emea",
        "country": "mna"
    }, {
        "subdir": "mena-ar",
        "rsid": "sapsuite13",
        "region": "emea",
        "country": "mnar"
    }, {
        "subdir": "mexico",
        "rsid": "sapcommx",
        "region": "la",
        "country": "mx"
    }, {
        "subdir": "netherlands",
        "rsid": "sapcomnl",
        "region": "emea",
        "country": "nl"
    }, {
        "subdir": "norway",
        "rsid": "sapcomno",
        "region": "emea",
        "country": "no"
    }, {
        "subdir": "pakistan",
        "rsid": "sapcompk",
        "region": "apj",
        "country": "pk"
    }, {
        "subdir": "paraguay",
        "rsid": "sapcompy",
        "region": "la",
        "country": "py"
    }, {
        "subdir": "peru",
        "rsid": "sapcompe",
        "region": "la",
        "country": "pe"
    }, {
        "subdir": "philippines",
        "rsid": "sapcomph",
        "region": "apj",
        "country": "ph"
    }, {
        "subdir": "poland",
        "rsid": "sapcompl",
        "region": "emea",
        "country": "pl"
    }, {
        "subdir": "portugal",
        "rsid": "sapcompt",
        "region": "emea",
        "country": "pt"
    }, {
        "subdir": "romania",
        "rsid": "sapcomro",
        "region": "emea",
        "country": "ro"
    }, {
        "subdir": "serbia",
        "rsid": "sapcomrs",
        "region": "emea",
        "country": "rs"
    }, {
        "subdir": "singapore",
        "rsid": "sapcomsg",
        "region": "apj",
        "country": "sg"
    }, {
        "subdir": "sk",
        "rsid": "sapcomsk",
        "region": "emea",
        "country": "sk"
    }, {
        "subdir": "slovenia",
        "rsid": "sapcomsi",
        "region": "emea",
        "country": "si"
    }, {
        "subdir": "southafrica",
        "rsid": "sapcomza",
        "region": "emea",
        "country": "za"
    }, {
        "subdir": "spain",
        "rsid": "sapcomes",
        "region": "emea",
        "country": "es"
    }, {
        "subdir": "suisse",
        "rsid": "sapcomchfr",
        "region": "emea",
        "country": "chfr"
    }, {
        "subdir": "sweden",
        "rsid": "sapcomse",
        "region": "emea",
        "country": "se"
    }, {
        "subdir": "swiss",
        "rsid": "sapcomch",
        "region": "emea",
        "country": "ch"
    }, {
        "subdir": "taiwan",
        "rsid": "sapcomtw",
        "region": "apj",
        "country": "tw"
    }, {
        "subdir": "thailand",
        "rsid": "sapcomth",
        "region": "apj",
        "country": "th"
    }, {
        "subdir": "turkey",
        "rsid": "sapcomtr",
        "region": "emea",
        "country": "tr"
    }, {
        "subdir": "uk",
        "rsid": "sapcomui",
        "region": "emea",
        "country": "uk"
    }, {
        "subdir": "ukraine",
        "rsid": "sapcomukr",
        "region": "emea",
        "country": "ua"
    }, {
        "subdir": "uruguay",
        "rsid": "sapcomuy",
        "region": "la",
        "country": "uy"
    }, {
        "subdir": "usa",
        "rsid": "sapcomus",
        "region": "na",
        "country": "us"
    }, {
        "subdir": "venezuela",
        "rsid": "sapcomve",
        "region": "la",
        "country": "ve"
    }, {
        "subdir": "vietnam",
        "rsid": "sapcomvn",
        "region": "apj",
        "country": "vn"
    }, {
        "subdir": "westbalkans",
        "rsid": "sapcomwbk",
        "region": "emea",
        "country": "wbk"
    }]
};

/* function to get country based on URL */
s.getCountry = function(url) {
        if (typeof(url) == 'undefined') var url = location.href;
        if (typeof(s.fsdAppendix) == 'undefined') return '';
        var country = (url.toString().split("/")[3] || '').toLowerCase();
        for (var c = 0; c < s.fsdAppendix.A.length; c++) {
            if (s.fsdAppendix.A[c].subdir == country) return country;
        }
        // china domain
        if ( ~location.hostname.indexOf('sap.cn') ) return 'cn';
  
        return '';
    } // end s.getCountry

/* function to get value from appendix table */
s.getFromAppendix = function(appendix, column, country) {
        if (typeof(s.fsdAppendix) == 'undefined') return '';
        if (typeof(appendix) == 'undefined') return '';
        if (typeof(column) == 'undefined') return '';
        if (typeof(country) == 'undefined') return '';

        for (var c = 0; c < s.fsdAppendix[appendix].length; c++) {
            if (s.fsdAppendix[appendix][c].subdir == country) return s.fsdAppendix[appendix][c][column];
        }
        return '';
    } // end s.getFromAppendix


/************************ ADDITIONAL FEATURES ***********************/

//var s_account = (typeof(s_account)!='undefined')?s_account:'sapcmsdev';

// determine which rsid to point to...
if (typeof(s_account) == 'undefined') {
    // default
    var s_account = 'sapcmsdev';//'sap-blackhole'; // 'sapcmsdev';
    // production domains
    s.prodDomains = [
        'go\.sap\.com',
        'www(54)?\\.sap\\.com',
        'global[0-9]*\\.sap\\.com'
    ];
    for (var c = 0; c < s.prodDomains.length; c++) {
        s.pd_regex = new RegExp('^' + s.prodDomains[c] + '$', 'i');
        if (location.hostname.match(s.pd_regex)) {
            s_account = s.getFromAppendix("A", "rsid", s.getCountry()) || 'sapcomglobal';
            s_account += ',sapcomrollup,sapglobal';
            break;
        }
    }
}

/** DAL - can still override custom rsid code above, if needed **/
//s.dynamicAccountSelection = true;
//s.dynamicAccountList = '';


/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */

/* Editable options: */

/* Default Site Variables */
s.linkInternalFilters = "accounts.sap.com,global.sap.com,download.sap.com,www.sap.com,www1.sap.com,www12.sap.com,www28.sap.com,www36.sap.com,www54.sap.com,go.sap.com,.sap.cn," + location.hostname;
s.enableShare = false;


/* Get page/server info */
s.thisHost = (typeof(s_devHost) != 'undefined') ? s_devHost : window.location.host.toLowerCase();
s.thisPathName = (typeof(s_devPath) != 'undefined') ? s_devPath : window.location.pathname.toLowerCase();
s.thisHash = (typeof(s_devHash) != 'undefined') ? s_devHash : window.location.hash.toLowerCase();
s.thisSearch = (typeof(s_devSearch) != 'undefined') ? s_devSearch : window.location.search.toLowerCase();
s.thisProtocol = window.location.protocol.toLowerCase();
s.thisTitle = document.title;

// local callback for v35 logic
function s_checkLocalInternalFilter() {
    var refDomain = (s.referrer || document.referrer).split('/');
    if (refDomain && typeof refDomain[2] != 'undefined')
        refDomain = refDomain[2].toLowerCase();
    else
        refDomain = '';
    /* standard lif stuff */
    if (s.linkInternalFilters) {
        var d = s.linkInternalFilters.split(',');
        for (var c = 0; c < d.length; c++) {
            if (refDomain.indexOf(d[c].toLowerCase()) > -1)
                return true;
        }
    }
    /* account for load balance servers */
    if (refDomain.match(/(go|global|www)[0-9]*\.sap\.(com|cn)/i))
        return true;
}

function s_trackShare(v44, v45, url, t, uci) {
  console.log('DTM: s_trackShare called: ',arguments);
        var uci=uci||'';
        var t=t||'SHARE';
        var v44=v44||'';
        var url=url||location.href;
        var v45=v45||'1';
        v45 = '+'+v45;
        var fv44=t+"|"+v44;
        var dataObject = {
            'prop73': 's_trackShare(local)',
            'eVar44': fv44,
            'prop44': 'D=v44',
            'prop45': 'D=g',
            'eVar45': v45,
            'events': "event23",
            'products': ";;;;event23=1"
        }
        if (t=='SHARE') {
          dataObject.eVar31="share|" + v44 + "|" + url.replace(/^https?:\/\//, '');
          dataObject.events+=",event7";          
        }
        if (t=='FOLLOW') {
          dataObject.eVar31="follow|" + v44 + "|" + url.replace(/^https?:\/\//, '');
          dataObject.events+=",event31";          
				}
        s.track(dataObject, 'tl_o', fv44);
} // end s_trackShare

/* Changes for local files, called from s_doPlugins section */
function local_s() {
//console.log('s.referrer(3)(local_s):',s.referrer);

      /* 
         2018.01.17 bandaid - suppress form tracking on specific form
         subject: [1DX] Idea Place - Submission Finder and Details pages: engagement tracking [Feedback needed]
      */
      if (location.pathname=="/idea-place/sap-innovation-awards-2018/submit-entry.html") {
          s.events=s.removeEvent(s.events,'event1');
          s.events=s.removeEvent(s.events,'event2');
          s.events=s.removeEvent(s.events,'event4');
          s.events=s.removeEvent(s.events,'event5');
          s.eVar22='';
      }
  

  //if (_satellite&&_satellite.settings&&_satellite.settings.isStaging) { // temp
      /* 2018.01.10 Bandaid - (SAPONEDX-16175) suppress trackign on phantom form pages */
      if (location.pathname.match(/\/protected\/form-assets\.html$/) && location.search.indexOf('gating_flow=true') !== -1 ) {
          s.consoleLog('Suppressed AA call for gated asset form view/complete, download attempt', s.eVar22);
          s.abort=true;
          return;
      }
  //}  

  
 
  /* 
     BANDAID: replace &amp; with & in query string so url params are properly parsed.
     note that it can recursively show up as &amp;amp; or &amp;amp;amp; etc.  because 
     of whatever is replacing/htmlentitying stuff.. 
     Will be permanently fixed in next sprint SAPONEDX-16292

     Also strip email= param from URL because PII (not sure if sap devs going to fix)
   */
                           /* replace &amp;[amp;..] stuff */
    s.pageURL=location.href.replace(/(?:(?:&?amp;)+)/gi,'&') 
                           /* strip email= param */
                           .replace(/(\?|&)email=[^&#]*/i,function(m,m1){return m1=='?'&&m1}) 
                           /* make sure format proper if email= is first param */
                           .replace('?&','?'); 
    //var href = location.href.split('?');
    //if (href[1]) { 
    //    href[1]=href[1].replace(/(?:(?:&?amp;)+)/gi,'&');
    //    href[1]=href[1].replace(/(?:(?:&?amp;)+)?email=[^&#]*/i,'');
    //}
    //href=href.join('?')
    //s.pageURL=href;


  
    /* bandaid - suppress first ping on search results page */
        if (location.href.split('?')[0].match(/\/search-results\.html$/)) {
            if (s.linkObject && s.linkObject != "") {
                var link = $(s.linkObject);
                if (link[0].nodeName != "A") {
                    link = link.parents("a").first();
                }
                var rank = "";
                var pageNumber = Number($('.page-selector .on').text());
                pageNumber = pageNumber ? pageNumber : 1;
                if (link.attr('ctype') == "c") {
                    var href = "";
                    if (link.hasClass("UMP_open_asset")) {
                        href = $(s.linkObject).parents("a").parent().parent().find("p a")[0].innerText;
                    } else if (link.hasClass("downloadhandler")) {
                        href = link.attr('href');
                    } else {
                        href = link.attr('href');
                    }
                    rank = link.attr("rank");
                    s.eVar19 = rank + "^p" + pageNumber + "^" + href;
                    s.prop19 = 'D=v19';
                    s.events = "event23,event11,event12=" + rank;
                    s.products=';;;;event23=1';
                    s.prop44=s.eVar44='SEARCH_CLICK|'+href;
                    s.prop45=location.href;
                    s.eVar45='+1';
                    s.prop51=href;
                    s.linkTrackEvents = 'event11,event12,event23';
                    s.linkTrackVars = 'events,eVar19,prop19,products,prop44,eVar44,prop45,eVar45,prop51';
                    if (s.linkType!='d') s.linkType = 'o';
                    s.linkName = s.server + ':serp result click';
                } else if (link.attr('ctype') == "keymatch") {
                    var linkRank = 0;
                    $("a[ctype='keymatch']").each(function(index) {
                        if (index % 2 == 0) {
                            linkRank++;
                        }
                        $(this).attr('rank', linkRank);
                    });

                    rank = "K" + link.attr("rank");
                    var href = link.attr('href');
                    s.eVar19 = rank + "^p" + pageNumber + "^" + href;
                    s.prop19 = 'D=v19';
                    s.events = "event23,event11,event12=1";
                    s.products=';;;;event23=1';
                    s.prop44=s.eVar44='SEARCH_CLICK|'+href;
                    s.prop45=location.href;
                    s.eVar45='+1';
                    s.prop51=href;
                    s.linkTrackEvents = 'event11,event12,event23';
                    s.linkTrackVars = 'events,eVar19,prop19,products,prop44,eVar44,prop45,eVar45,prop51';
                    if (s.linkType!='d') s.linkType = 'o';
                    s.linkName = s.server + ':serp result click';
                }
            }
        }


        /** stuff to mimic omni.epx **/

        // set client cookie if none exists
        if (!s.c_rr('client')) {
            var GUID = s.UUID.genV1().toString();
            s.expDate = new Date();
            s.expDate.setDate(s.expDate.getDate() + 720);
            s.c_wr('client', GUID, s.expDate);
        }
        window.omni_value = s.c_rr('client');
        // set SAP.TTC cookie if none exists
        if (!s.c_rr('SAP.TTC')) {
            s.s_ttc = s_getCurrentUnixTimeStamp();
            window.omni_ttc = s.s_ttc;
            s.expDate = new Date();
            s.expDate.setDate(s.expDate.getDate() + 90);
            s.c_wr('SAP.TTC', s.s_ttc, s.expDate);
        }
        // omni_is1stviewinsession
        if (!s.c_rr('session')) {
            var GUID = s.UUID.genV1().toString();
            s.c_wr('session', GUID);
            window.omni_is1stviewinsession = 1;
        }

        /* default site vars */
        if (!s.server) s.server = 'sap';
        if (!s.prop1) s.prop1 = s.getFromAppendix("A", "region", s.getCountry()) || 'gl';
        if (!s.prop5) s.prop5 = s.getFromAppendix("A", "country", s.getCountry()) || 'glo';
        if (!s.prop9) s.prop9 = 'logN';

        /* region and country */

        /* page name */
        if (!s.pageName || s.pageName == '') {
          s.pageName=s.getDefaultPageName();
        }
        /* bandaid: overwrite pageName that is set on form view/submit */
        if (
          s.inList('event1',s.events,',',':')
           ||
          s.inList('event47',s.events,',',':')
        ) {
          s.pageName=s.getDefaultPageName();
        }
        if (
          s.inList('event2',s.events,',',':')
           ||
          s.inList('event48',s.events,',',':')
        ) {
          s.pageName=s.getDefaultPageName()+'^submit';
        }

  
        /* site hierarchy */
        var path = s.thisPathName.replace(/\//g, ',');
        // remove country dir if exists    
        if (s.getCountry()) {
            var path = path.split(',');
            path.shift();
            path.shift();
            path = path.join(',');
        }
        var hier = (s.server + ',' + s.prop1 + ',' + s.prop5 + ',' + path).replace(/,+/g, ',').replace(/^,+|,+$/g, '');
        hier = hier.split(',');

        if (hier[3] && !s.channel)
            s.channel = hier[3];

        if (!s.prop28)
            s.prop28 = s.thisTitle.toLowerCase();

        // get error page url if 404 error page
        if (s.pageType) {
            if (!s.prop27) s.prop27 = 'D=g';
            if (!s.pageName) s.pageName = s.server + ":errorpage";
            s.channel = 'no site section';
        }

        if (!s.prop46) s.prop46 = s.eVar46 = '1dx';


        /* page language : requires jQuery */
        if (typeof(jQuery) == 'function') {
          s.prop2 = (jQuery("html").attr('lang') || 'undefined').toLowerCase();
        }
        
        /* props to evars */
        if (s.prop6) {
            s.prop6 = s.prop6.toLowerCase();
            s.eVar6 = 'D=c6';
        }
        if (s.prop2) 
            s.eVar2 = 'D=c2';



        /* logged in status and member id */
        // on login header is updated with user information. ID is saved at the same time and made available for the following call.
        // there is no more a need to call \bin\user to get user id.
        getUserId = function() {                        
          return ((typeof WCMS != 'undefined') && (typeof WCMS.IDS != 'undefined') && (typeof WCMS.IDS.Users != 'undefined') && (WCMS.IDS.Users.wcmstrackingid != null) && (WCMS.IDS.Users.wcmstrackingid.length > 0)) ? WCMS.IDS.Users.wcmstrackingid : '';
        }

        /* login status */
        try{
          var loginStatus = $("div.userDetailsComp").data("login-status");
          if (loginStatus && loginStatus === "LoggedIn") {
            s.prop9 = 'logY';
          } else {
            s.prop9 = 'logN';
          }
        }catch(e){}

        /* 
          BANDAID: in some cases click events are artificially triggered, which is screwing 
          with previous values, so make sure this is an actual s.t/tl call
          SAPONEDX-16504 - moved s.linkType wrapper below the getUserId block above
         */
        if (s.linkType!==0) {
          
           /* login event */
           s.prevProp9 = s.getPreviousValue(s.prop9, 'gpv_p9');
           if (!s.prop9) s.prop9 = '';
           // if visitor is logged in and was previously not...
           if ((s.prop9.toLowerCase() == 'logy') && (!s.prevProp9 || (s.prevProp9.toLowerCase() == 'logn'))) {
             // assume login event already occured if ref is in lif it came from pion
             s.events = s.apl(s.events, "event8", ",", 2);
           } // end login p9
        } // end if s.linkType

  if (_satellite.settings.isStaging||_satellite.settings.notifications) {
    console.log('DTM: gpv_p9: ',s.c_r('gpv_p9'),'prevProp9: ',s.prevProp9, 'prop9: ',s.prop9,'events: ',s.events);
    //console.trace();
  }
    /* search filter event */
    if (s.prop21) s.events = s.apl(s.events, "event21", ",", 2);

  
  /* sap.com form crm code + form name */  
  if (typeof jQuery=='function') {
    var CampaignName = jQuery('input[name="InputParameters.CampaignName"]').val()||'';
    var FormCampaignCode = jQuery('input[name="InputParameters.FormCampaignCode"]').val()||'';
    if (CampaignName||FormCampaignCode) {
      FormCampaignCode = FormCampaignCode.match(/^CRM/i) ? FormCampaignCode : 'Non CRM Code Value';
      CampaignName = CampaignName.match(/^WCP_/i) ? 'Non Template Value' : CampaignName;
      s.eVar70 = FormCampaignCode+'|'+CampaignName;      
    }
  }

  /* sm_tech_id page tags */
  if (typeof jQuery=='function') {
    var sm_tech_ids = jQuery('meta[name="sm_tech_ids"]').attr('content')||'';
    if (sm_tech_ids) {
        s.list2 = sm_tech_ids.replace(/\s*,\s*/g,',');
    }
  }
  
  /* suppress automated download tracking if flagged */
    if(s.enableDownloadLinkHandler&&s.linkObject&&s.linkType&&s.linkType=='d'){
        /* Skip download tracking for PDF lightbox links */  
        if ('true' === s.linkObject.getAttribute('data-exclude-download-tracking')) {
          s.linkType=0;
        } 
    }

  // bandaid: decode finder filter values
  if (s.eVar69) s.eVar69 = decodeURIComponent(s.eVar69);
  

  /* dupe e93 to e200 */
  if ( s.inList('event93',s.events,',',':') ) {
     s.events=s.apl(s.events,"event200",",",2);
     if (s.linkType) s.linkTrackEvents=s.apl(s.linkTrackEvents,'event200',',',2);
  }
  
  
  /* raw cc+products */
  if (s.products) {
    s.eVar74='D=cc+"|"+products';
    if (s.linkType) 
      s.linkTrackVars=s.apl(s.linkTrackVars,'eVar74',',',2);
  }
  
  /* account activation */
  //if ( ~location.href.toLowerCase().indexOf('idsactivation=') ) {
  //  s.events = s.apl(s.events, "event72", ",", 2);
  //}

} // end local_s()

s.getDefaultPageName=function() {
  var s=this;
  var pageNamePath = s.thisPathName;
  if (s.prop5!='glo') {
    pageNamePath = pageNamePath.replace(/^\/[^\/]+/,s.prop5+':');
  }
  return (s.server+':'+pageNamePath).substring(0,254);
}

/* 
 * checks if referring domain is a sap domain (globalLinkInternalFilters)
 * note: makes exception to treat accounts.sap.com as external SAPONEDX-17468
 * @param string (optional) specify referring url (must be full url including protocol)
 * @return bool false if matched, true if not matched
 */
s._isNotSAPReferrer=function(r) {
      try {
          var s=this;
          var r = (r || s.referrer || document.referrer || '').toLowerCase();
          if (!r) return true;
          var a = document.createElement('a');
          a.href = r;
          var rd = a.hostname;
          var gLIF = s.globalLinkInternalFilters.split(',');
          var i = 0,
              l = gLIF.length;
          for (; i < l; i++) {
              if (
                  ~rd.indexOf( gLIF[i].toLowerCase() )
                   &&
                  !~['accounts.sap.com','accounts400.sap.com'].indexOf( rd )
              ) {
                  return false;
              }
          }
          return true;
      } catch (e) {
          window.console && console.error(e);
      }
} // end _isNotSAPReferrer

/**** temp GUID generator for session and client cookies ****/
/**
 * UUID.js: The RFC-compliant UUID generator for JavaScript.
 *
 * @fileOverview
 * @author LiosK
 * @version 3.2
 * @license The MIT License: Copyright (c) 2010-2012 LiosK.
 * @url https://github.com/LiosK/UUID.js
 */
/** @constructor */
s.UUID = (function(overwrittenUUID) {
    function UUID() {}
    UUID.generate = function() {
        var rand = UUID._getRandomInt,
            hex = UUID._hexAligner;
        return hex(rand(32), 8) // time_low
            + "-" + hex(rand(16), 4) // time_mid
            + "-" + hex(0x4000 | rand(12), 4) // time_hi_and_version
            + "-" + hex(0x8000 | rand(14), 4) // clock_seq_hi_and_reserved clock_seq_low
            + "-" + hex(rand(48), 12); // node
    };
    UUID._getRandomInt = function(x) {
        if (x < 0) return NaN;
        if (x <= 30) return (0 | Math.random() * (1 << x));
        if (x <= 53) return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << x - 30)) * (1 << 30);
        return NaN;
    };
    UUID._getIntAligner = function(radix) {
        return function(num, length) {
            var str = num.toString(radix),
                i = length - str.length,
                z = "0";
            for (; i > 0; i >>>= 1, z += z) {
                if (i & 1) {
                    str = z + str;
                }
            }
            return str;
        };
    };
    UUID._hexAligner = UUID._getIntAligner(16);
    UUID.FIELD_NAMES = ["timeLow", "timeMid", "timeHiAndVersion",
        "clockSeqHiAndReserved", "clockSeqLow", "node"
    ];
    UUID.FIELD_SIZES = [32, 16, 16, 8, 8, 48];
    UUID.genV4 = function() {
        var rand = UUID._getRandomInt;
        return new UUID()._init(rand(32), rand(16), // time_low time_mid
            0x4000 | rand(12), // time_hi_and_version
            0x80 | rand(6), // clock_seq_hi_and_reserved
            rand(8), rand(48)); // clock_seq_low node
    };
    UUID.parse = function(strId) {
        var r, p = /^\s*(urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(\})?\s*$/i;
        if (r = p.exec(strId)) {
            var l = r[1] || "",
                t = r[8] || "";
            if (((l + t) === "") ||
                (l === "{" && t === "}") ||
                (l.toLowerCase() === "urn:uuid:" && t === "")) {
                return new UUID()._init(parseInt(r[2], 16), parseInt(r[3], 16),
                    parseInt(r[4], 16), parseInt(r[5], 16),
                    parseInt(r[6], 16), parseInt(r[7], 16));
            }
        }
        return null;
    };
    UUID.prototype._init = function() {
        var names = UUID.FIELD_NAMES,
            sizes = UUID.FIELD_SIZES;
        var bin = UUID._binAligner,
            hex = UUID._hexAligner;
        this.intFields = new Array(6);
        this.bitFields = new Array(6);
        this.hexFields = new Array(6);
        for (var i = 0; i < 6; i++) {
            var intValue = parseInt(arguments[i] || 0);
            this.intFields[i] = this.intFields[names[i]] = intValue;
            this.bitFields[i] = this.bitFields[names[i]] = bin(intValue, sizes[i]);
            this.hexFields[i] = this.hexFields[names[i]] = hex(intValue, sizes[i] / 4);
        }
        this.version = (this.intFields.timeHiAndVersion >> 12) & 0xF;
        this.bitString = this.bitFields.join("");
        this.hexString = this.hexFields[0] + "-" + this.hexFields[1] + "-" + this.hexFields[2] + "-" + this.hexFields[3] + this.hexFields[4] + "-" + this.hexFields[5];
        this.urn = "urn:uuid:" + this.hexString;

        return this;
    };
    UUID._binAligner = UUID._getIntAligner(2);
    UUID.prototype.toString = function() {
        return this.hexString;
    };
    UUID.prototype.equals = function(uuid) {
        if (!(uuid instanceof UUID)) {
            return false;
        }
        for (var i = 0; i < 6; i++) {
            if (this.intFields[i] !== uuid.intFields[i]) {
                return false;
            }
        }
        return true;
    };
    UUID.genV1 = function() {
        var now = new Date().getTime(),
            st = UUID._state;
        if (now != st.timestamp) {
            if (now < st.timestamp) {
                st.sequence++;
            }
            st.timestamp = now;
            st.tick = UUID._getRandomInt(4);
        } else if (Math.random() < UUID._tsRatio && st.tick < 9984) {
            st.tick += 1 + UUID._getRandomInt(4);
        } else {
            st.sequence++;
        }
        var tf = UUID._getTimeFieldValues(st.timestamp);
        var tl = tf.low + st.tick;
        var thav = (tf.hi & 0xFFF) | 0x1000; // set version '0001'
        st.sequence &= 0x3FFF;
        var cshar = (st.sequence >>> 8) | 0x80; // set variant '10'
        var csl = st.sequence & 0xFF;
        return new UUID()._init(tl, tf.mid, thav, cshar, csl, st.node);
    };
    UUID.resetState = function() {
        UUID._state = new UUID._state.constructor();
    };
    UUID._tsRatio = 1 / 4;
    UUID._state = new function UUIDState() {
        var rand = UUID._getRandomInt;
        this.timestamp = 0;
        this.sequence = rand(14);
        this.node = (rand(8) | 1) * 0x10000000000 + rand(40); // set multicast bit '1'
        this.tick = rand(4); // timestamp fraction smaller than a millisecond
    };
    UUID._getTimeFieldValues = function(time) {
        var ts = time - Date.UTC(1582, 9, 15);
        var hm = ((ts / 0x100000000) * 10000) & 0xFFFFFFF;
        return {
            low: ((ts & 0xFFFFFFF) * 10000) % 0x100000000,
            mid: hm & 0xFFFF,
            hi: hm >>> 16,
            timestamp: ts
        };
    };
    UUID.makeBackwardCompatible = function() {
        var f = UUID.generate;
        UUID.generate = function(o) {
            return (o && o.version == 1) ? UUID.genV1().hexString : f.call(UUID);
        };
        UUID.makeBackwardCompatible = function() {};
    };
    UUID.overwrittenUUID = overwrittenUUID;
    return UUID;
})(s.UUID);

/* EOF */
