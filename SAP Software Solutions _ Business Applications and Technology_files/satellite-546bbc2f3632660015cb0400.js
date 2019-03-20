/** 
 Adobe Analytics AppMeasurement
 Global Libary and Customizations for SAP
 Maintained by Neil Evans 
**********************************************************************/
// save local s object
if ( typeof(s)!='undefined' ) var t_s = s;
// create global s object
var s_account=s_account||'sapdev';
var s=new AppMeasurement();
s.account=s_account;

/* global s_code imp version -  PLEASE UPDATE WITH EACH CHANGE TO THE .JS FILE - should be AM:yyyy.mm.dd */
s.lastUpdateGlobal = 'DTM_AM:2019.02.07';  // Last updater: ACR.JD
s.dtmPropertyName = '1DX -- www.SAP.com';

// copy local s obect to global s object
for (var k in t_s) s[k] = t_s[k];
// legacy local sap object
if(typeof sap != 'undefined') for(var k in sap) s[k] = sap[k];

/* new - VisitorAPI */
try {
  s.visitor = Visitor.getInstance("227AC2D754DCAB340A4C98C6@AdobeOrg");
} catch (e) {
  s.prop71=String(e);
}
if (!s.prop71) {
  s.prop71 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");
}


// enable share listener unless otherwise specified in local
if (!s.enableShare&&s.enableShare!=false) s.enableShare=true;

/* Exit Link Config */
if (!s.thisHost) s.thisHost = location.host;
s.globalLinkInternalFilters = "concur.com,fieldglass.com,gigya.com,successfactors.eu,sapanalytics.cloud,sapandasug.com,jam4.sapjam.com,saps4hanahub.com,sap.wegone.com,sapsupport.info,sapforum.it,sapappsdevelopmentpartnercenter.com,aribalive.com,concur.cn,concur.co.jp,concur.co.uk,concur.com.sg,sapsf.eu,mailsap.com,sapbydesign.com,yaas.io,sapsf.com,sapdigital.com,sapbusinessobjects.cloud,workconnect.io,digital.sap.com,sap.io,sap.to,growthmattersnetwork.com,saplumira.com,sapappcenter.com,digitalistmag.com,hybris.com,the-future-of-commerce.com,sapmobileconsumertrends.com,sapeducationsolutions.com,sapns2.com,sapvirtualevents.com,streamwork.com,sapstreamwork.com,aboutsapcampbell.com,analytics-usa.com,estara.com,bestsapchina.com,businessobjects.com,businessobjects.com.pl,business-objects.com.pl,businessobjects.pl,business-objects.pl,careersatsap.com,cfolder.de,cfolders.com,cfolders.de,cfolders.net,crystalreports.com,digitalriver.com,edusap.at,fazi.at,fazi.com,fazi.de,futurefactoryinitiative.com,futurefactoryinitiative.org,fuzzy.at,fuzzy.ch,fuzzy-informatik.com,fuzzy-informatik.de,fuzzy-online.com,fuzzy-online.de,infommersion.com,ondemand.com,sap.at,sap.bg,sap.biz,sap.ca,sap.ch,sap.cl,sap.cn,sap.co.at,sap.co.il,sap.co.jp,sap.co.kr,sap.co.nz,sap.co.th,sap.co.uk,sap.co.za,sap.com,sap.com.au,sap.com.cn,sap.com.pl,sap.com.sg,sap.com.tr,sap.com.tw,sap.cz,sap.de,sap.ee,sap.fi,sap.hk,sap.hr,sap.hu,sap.ie,sap.in,sap.info,sap.kz,sap.lu,sap.nl,sap.pl,sap.pt,sap.ro,sap.ru,sap.si,sap.sk,sap.tw,sap.ua,sap.us,sapag.de,sap-ag.de,sapamerica.com,sap-answer.com,sap-austria.com,sap-best-fit-adviser.com,sapbusinessbydesign.cn,sapbusinessbydesign.co.uk,sapbusinessbydesign.com,sapbusinessbydesign.de,sapbusinessbydesign.us,sapbusinessobjects.com.pl,sap-business-objects.com.pl,sapbusinessobjects.pl,sap-business-objects.pl,sapbusinessobjectsresponses.com,sapbusinessone.pl,sap-campbell.com,sapcampbell.net,sapcampbell.org,sapchina.com,sapclear.com,sapconfigurator.com,sapdesignguild.org,sap-event.jp,sapevents.com,sap-forum.de,sap-insights.com,sapkhimetrics.com,saplabs.bg,saplabs.co.in,saplabs.fr,saplabs.in,sapnetweaver.com,sapphirenow.com,sap-retail.de,sapsapphire.com,sapsem.com,sap-spectrum.com,sapstreamwork.com,sapteched.com,sapthai.com,sapturkiye.com.tr,sap-tv.com,sapventures.com,sapworldtour.com,sapworldtour2010.com,steeb.de,sap.corp,saplabs.com,sybase.com,sappartneredge.eu,sapbusinessinthemoment.com,sapbusinessoptimizer.com,sapcampaigns.com,sapcfo.com,sapcpg.com,sapcrystalconfigurator.com,SAPEnterpriseMobility.mobi,sapevent.ch,sapfinancialservices.com,sapforumbimadrid2011.com,sap-im-dialog.com,sap-innovationnow.com,sap-it-leadership.com,sappartnermobileapps.com,sap-readytoboost.com,sapretailtoday.com,saprunprouder.com,sapsponsorships.com,sapstrategichr.com,sapsurvey.com,sapsustainabilitytoday.com,saputilitiestoday.com,sap-webseminare.de,iqformarketers.com,sybase.be,sybase.ca,sybase.ch,sybase.co.kr,sybase.co.uk,sybase.com,sybase.com.ar,sybase.com.au,sybase.com.br,sybase.com.cn,sybase.com.hk,sybase.com.mx,sybase.com.tw,sybase.de,sybase.dk,sybase.es,sybase.fr,sybase.hu,sybase.in,sybase.it,sybase.jp,sybase.nl,sybase.no,sybase.se,sybase365.com,sappartneredge.com,ariba.com,saphana.com,saphanacouncil.com,saphanapartnerrace.com,successfactors.co.kr,successfactors.com,successfactors.com.br,successfactors.com.cn,successfactors.de,successfactors.es,successfactors.jp,successfactors.nl,successfactors.se,sybase.asia,sybase.at,SYBASE.BIZ,sybase.co.at,sybase.co.hu,sybase.co.it,sybase.co.jp,sybase.co.ma,sybase.co.nz,sybase.co.za,sybase.com.ec,sybase.com.es,sybase.com.gr,sybase.com.my,sybase.com.pe,sybase.com.pk,sybase.com.pl,sybase.com.ro,sybase.com.sg,sybase.com.ve,sybase.cz,sybase.ec,sybase.ee,sybase.eu,sybase.hk,sybase.ie,sybase.info,sybase.li,sybase.lu,sybase.mobi,SYBASE.ORG,sybase.ph,sybase.pl,sybase.tw,sybase.us,sybasesolutions.net,syclo.co.uk,syclo.com,syclo.com.br,syclo.de,syclo.es,syclo.it,syclo.mobi,gainthevisibleadvantage.com,getconnected-sap.co.uk,myrunwayapp.com,sapafaria.com,saparpfasttrack.com,sapbusinessonnesolutions.com,sapcloudappspartnercenter.com,sapcustomerexerience.com,sapcycle4youth.com,sapdashboardgallery.com,sapdatacentertour.com,sapdatachallenge.com,sap-milestones.com,sap-milestones.de,sapmobileappspartnercenter.com,sapmobileappspartnercenter.com,sapmobileservices.com,sapmobiletransformation.com,sap-sybase-ase.com,sap-sybase-iq.com,stepaheadwithsap.com,thinkbiggrowfast.net,sapbusinessobjectsbi.com,sapbigdata.com,"+s.thisHost;

if (!s.linkInternalFilters) { 
  s.linkInternalFilters = s.globalLinkInternalFilters;
} 

/* bandaids: remove some values from s.linkInternalFilters since they mess with exit link in H26+ */
s.linkInternalFilters=s.linkInternalFilters.replace(/(#|javascript:)(,|$)/g,'').replace(/^,|,$/g,'').replace(/,+/g,',');
s.globalLinkInternalFilters=s.globalLinkInternalFilters.replace(/^,|,$/g,'').replace(/,+/g,',');

/* Plugin Config */

/**** Time Parting config pt.1 ****/
/* getYear or getFullYear depending on browser app */
s.TPcurrentDate = new Date();
s.TPappVers = parseInt(navigator.appVersion, 10);
s.TPappName = navigator.appName;
if((s.TPappVers == '2' || s.TPappVers == '3') && (s.TPappName == 'Netscape' || s.TPappName == 'Microsoft Internet Explorer')) {
	s.TPyear = s.TPcurrentDate.getYear();
  if (s.TPyear >= 100 && s.TPyear <= 1999) {
    s.TPcurrentYear=s.TPyear + 1900;
  } else {
    s.TPcurrentYear=s.TPyear;
  }
} else {
  s.TPcurrentYear = s.TPcurrentDate.getFullYear();
}
// timeparting config variables
s.dstStart="1/1/" + s.TPcurrentYear;
s.dstEnd="1/1/" + s.TPcurrentYear;
s.currentYear=s.TPcurrentYear;
/**** End Time Parting config ****/

// Legacy: Internal Campaign Tracker
function s_intCampaignTracker(that,eVar13Value,linkName) {
  if (typeof(that) == 'undefined') var that=true;
  if (typeof(linkName) == 'undefined') var linkName='';
  if (typeof(eVar13Value) == 'undefined') var eVar13Value='';
  var s=s_gi(s_account);
  s.linkTrackVars='eVar48,eVar13';
  s.eVar13 = eVar13Value;
  s.tl(that,'o',linkName);
}

s.usePlugins=true;
function s_doPlugins(s) {
  /* Add calls to plugins here */
  s.account=s.dynamicAccountPlugin();

/* Set defaults, check to see if it has been set already */
  s.events = (s.events)?s.events:'';	// Leave this in to prevent inList plugin to throw an undefined error

	/* Local file */
    // default to true, but allow to override in local_s
    s.enableDownloadLinkHandler = true;
		s.enableExitLinkHandler = true;
		if(typeof local_s == 'function')
			local_s();

 /* percent page view (virtual page views) */
  if (s.isTrackCall&&s.isTrackCall.T) {
    if (typeof s_setPercentPageViewedVars=='function') {
      console.log('DTM: s_setPercentPageViewedVars called: virtual page view');
      s_setPercentPageViewedVars();  
    }
  }
  
/* asset view */
	//* Documents page asset view data extration */
  var pdfPanel = document.getElementsByClassName('pdf-panel')[0];
  if (!s.linkObject 
       && 
      !s.linkType 
       && 
      !s.inList('event26',s.events,',',':') 
       && 
      !s.eVar21 
       && 
      pdfPanel
  ) {
	  var analyticsAssetId = pdfPanel.getAttribute("data-analyticsassetid");
	    if (analyticsAssetId) {
	      s.eVar21 = "sap:" + analyticsAssetId;
	      s.events = s.apl(s.events, "event26", ",", 2);
	  }
  }
  if ( 
    !s.linkObject&&!s.linkType
     &&
    s.inList('event26',s.events,',',':') 
     &&
    s.eVar21
  ) {
    s.eVar5 = s.eVar5 || location.href;
    if ( s.eVar5.match(/\/documents\//) ) {
      var v5_ref = s.referrer || document.referrer;
      if ( v5_ref ) {
        s.eVar5 = s._isNotSAPReferrer(v5_ref) && 'External Referrer' || v5_ref;
      } else {
        s.eVar5 = 'Referrer Not Available';  
      }
    }
    console.log( 'DTM: event26: s_transactionID: ', window.s_transactionID );
    s.transactionID=s.eVar50=window.s_transactionID||'';
    // asset engagement
    s.prop44 = "ASSET_VIEW|"+s.eVar21;
    s.eVar44 = s.prop44;
	  s.prop45 = location.href;
    s.eVar45 = "+1";
    s.events=s.apl(s.events,"event23",",",2)
    s.products=";;;;event23=1";
  }
  

	/* dynamic account selection */
		s.dynamicAccountSelection = (s.dynamicAccountSelection)?s.dynamicAccountSelection:false; 
		s.dynamicAccountList = (s.dynamicAccountList)?s.dynamicAccountList:"";  
	
	/* Link Tracking Config */
		s.trackDownloadLinks = (s.trackDownloadLinks)?s.trackDownloadLinks:true;
		s.trackExternalLinks = (s.trackExternalLinks)?s.trackExternalLinks:true;
		s.trackInlineStats = false;
		//s.linkDownloadFileTypes = (s.linkDownloadFileTypes)?s.linkDownloadFileTypes:"bin,jar,rar,exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,xml";
		s.linkDownloadFileTypes = "csv,bin,jar,rar,exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,xml";
    s.linkLeaveQueryString = (s.linkLeaveQueryString)?s.linkLeaveQueryString:true;
		s.linkTrackEvents = (s.linkTrackEvents)?s.linkTrackEvents:"None";

	/* 404 Variable Supression */
		if(s.pageType) {
			s.hier1 = s.channel = s.prop17 = s.prop18 = s.prop19 = s.prop20 = '';
			s.pageName = s.server+':errorpage';
      s.channel = 'no site section';
    }
				
	/* Site Variables */
		if (!s.eVar1) s.eVar1 = s.server+":"+s.prop5;
    s._mboxVersion='|mbox:'+((window.mboxVersion&&window.mboxVersion+' (legacy)')||(window.adobe&&adobe.target&&adobe.target.VERSION)||'none');
    s._mcidVersion='|mcid:'+((s.visitor&&s.visitor.version)?s.visitor.version:'none');
    s._aaVersion='|AA:'+(s.version||'unknown');
    s._dtmPropertyName='|DTM_PNAME:'+(s.dtmPropertyName||'unknown');
    s.prop50 = s.server + ":" + s.lastFileUpdate + "|gl:" + s.lastUpdateGlobal + s._aaVersion +s._mboxVersion +s._mcidVersion+s._dtmPropertyName;
		
/* previous page/events */
	s.prevPage=s.getPreviousValue(s.pageName,'c13');
	s.prevEvents=s.getPreviousValue(s.events,'pe');
//	s.prevProp3=s.getPreviousValue(s.prop3,'c3');

/* SAP referrer - unified traffic sources*/
  s.eVar35 = s.getInternalReferer({'exclude':['accounts.sap.com']}); 

/* form referrers */
	if(s.inList('event1',s.events,',',':')){
    if (!s.eVar23)
		  s.eVar23=s.referrer||document.referrer;
		if(!s.eVar22) 
			s.eVar22=s.pageName;
	}

/* form engagement */
  // form view
  if(s.inList('event1',s.events,',',':')){
    s.eVar44 = "FORM|"+s.eVar22;
    s.prop44 = s.eVar44;
    s.prop45 = location.href;
    s.eVar45 = "+1";
    s.events = s.apl(s.events,'event23',',',2);
    s.products = s.apl(s.products,";;;;event23=1",',',2);
	}
  // form submit
  /* dupe e2 to e4 */
    s.events=s.addEventIfEvent(s.events,'event2','event4',true);
    if (s.linkType||s.linkObject){
      s.linkTrackEvents=s.addEventIfEvent(s.linkTrackEvents,'event2','event4');
    }  

  // form submit
  /* dupe e4 to e25 (no serial) */
    if( s.inList('event4',s.events,',',':') ){
        s.events = s.apl(s.events,'event25',',',2);
        if (s.linkType||s.linkObject){
            s.linkTrackEvents = s.apl(s.linkTrackEvents,'event25',',',2);
        }
    }

  if(s.inList('event4',s.events,',',':')){
    s._formVars=['eVar24','eVar25','eVar27','eVar28','eVar29','eVar30','eVar32','eVar33','eVar85','eVar87','eVar88'];
    for (var c=0,l=s._formVars.length;c<l;c++) {
      s[s._formVars[c]]=s[s._formVars[c]]||'Not Asked';  
    }
    s.eVar26 = s.eVar26||'value not provided';
    s.eVar44 = "ONLINE REGISTRATION|"+(s.eVar22||'no value');
    s.prop44 = s.eVar44;
    s.prop45 = location.href;
    s.eVar45 = "+1";
    s.events = s.apl(s.events,'event23',',',2);
    s.products=s.products||'';
//      s.newsletterOptins = s.newsletterOptins instanceof Array ? s.newsletterOptins : [s.newsletterOptins];

    /* newsletter optins */
      // default value if not set
      s.newsletterOptins=s.newsletterOptins||[];
      // if string, assume single value passed, convert to array
      if (typeof s.newsletterOptins == 'string') {
        s.newsletterOptins=Array(s.newsletterOptins);  
      }
      // loop through newsletterOptins array to push to products
      // we only care about [yes|no]:[id] values; skip "notasked" default
      for (var i=0,l=s.newsletterOptins.length;i<l;i++) {
        var nl = s.newsletterOptins[i].split(':');
        var e=false;
				switch ( nl[0].toLowerCase() ) {
				  case 'yes': e='event81'; break;
					case 'no' : e='event82'; break;
				}
        if (e) {
          s.products = s.apl(s.products,";newsletter optin;;;"+e+"=1;eVar81="+nl[1],',',2);
          s.events = s.apl(s.events,e,',',2);
          s.linkTrackEvents = s.apl(s.linkTrackEvents,e,',',2);
        }
      }

    if ( 
      !s.inList(";;;;event23=1",s.products,',')
       &&
      !s.inList(";engagement_tracking;;;event23=1",s.products,',')
    ) {
        s.products = s.apl(s.products,";;;;event23=1",',',2);
    }
    if (s.linkType||s.linkObject) {
      s._formVars=s._formVars.concat(['eVar26','eVar44','prop44','prop45','eVar45','eVar81','products']);
      for (var c=0,l=s._formVars.length;c<l;c++) {
        s.linkTrackVars = s.apl(s.linkTrackVars,s._formVars[c],',',2);
      }
      s.linkTrackEvents = s.apl(s.linkTrackEvents,'event23',',',2);
    }
  }

  /* ecommerce engagement */
    var ecEvents = {
      purchase : 'ORDERS',
      prodView : 'PRODUCT_VIEW',
      scAdd    : 'ADD_TO_CART'
    }
    for (var e in ecEvents) {
        if(
            s.inList(e,s.events,',',':')
        ){
          var prods=(s.products||'').split(',');
          var pids=[];
          for (p=0,l=prods.length;p<l;p++) {
            prod = prods[p].split(';');
            pids.push(prod[1]);
          }  
          pids=pids.join(':').replace(/:+/g,':').replace(/(^:|:$)/g,'');
          s.eVar44 = ecEvents[e]+"|"+pids;
          s.prop44 = s.eVar44;
          s.prop45 = location.href;
          s.eVar45 = "+1";
          s.events = s.apl(s.events,'event23',',',2);
          s.products = s.apl(s.products,";;;;event23=1",',',2);
          if (s.linkType||s.linkObject) {
            s.linkTrackEvents = s.apl(s.linkTrackEvents,'event23',',',2);
            s.linkTrackVars = s.apl(s.linkTrackVars,'events',',',2);
            s.linkTrackVars = s.apl(s.linkTrackVars,'eVar44',',',2);
            s.linkTrackVars = s.apl(s.linkTrackVars,'prop44',',',2);
            s.linkTrackVars = s.apl(s.linkTrackVars,'prop45',',',2);
            s.linkTrackVars = s.apl(s.linkTrackVars,'eVar45',',',2);
          }
        }
    }

/* login engagement */
	if(s.inList('event8',s.events,',',':')){
    s.eVar44 = "LOGIN";
    s.prop44 = s.eVar44;
    s.prop45 = location.href;
    s.eVar45 = "+1";
    s.eVar22 = (s.eVar22 || sessionStorage.formName);
    s.events = s.apl(s.events,'event23',',',2);
    s.products = s.apl(s.products,";;;;event23=1",',',2);
    sessionStorage.removeItem("formName");
	}	
		
	
/* form confirmation transaction id */
  if (s.inList('event4', s.events, ',', ':')) {
      // both should be set, but some sites only set one or the other...
      if (s.eVar50 || s.transactionID) {
          if (s.eVar50) s.transactionID = s.eVar50;
          else if (s.transactionID) s.eVar50 = s.transactionID;
          s.transactionID = s.eVar50;
          if (s.linkType) {
              s.linkTrackVars = s.apl(s.linkTrackVars, 'transactionID', ',', 2);
              s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar50', ',', 2);
          }
      }
  }
		
/* paid search keywords */
  if(!s.eVar16) {
    // list of allowed url params and their allowed value prefixes
    s.paid_search = {
      'gclid' : [''],
      'mid'   : [''],
      'dna'   : [''],
      'KW_ID' : ['']
    };
    upwithme:
    // loop through allowed url params
    for (var pcp in s.paid_search) {
      // if param exists..
      if ( s.paid_search.hasOwnProperty(pcp) && s.Util.getQueryParam(pcp) ) {
        var pcpv = s.Util.getQueryParam(pcp);
        // loop through allowed prefixes
        for (var pcpvp=0;pcpvp<s.paid_search[pcp].length;pcpvp++) {
          // if param value has correct prefix..
          if ( pcpv.toLowerCase().indexOf(s.paid_search[pcp][pcpvp])===0 ) {         
            // exception to not include param name if mid
            if (s.inList(pcp,['mid','gclid']))
              s.eVar16=pcpv;
            else
              s.eVar16=pcp+"="+pcpv;
            // shoulda signed a prenup!
            break upwithme;
          }
        }
      }
    }
    s.eVar16=s.getValOnce(s.eVar16, 'v16',0);  
  }



/* traffic sources & campaigns */
  if(!s.campaign) {
    // list of allowed url params and their allowed value prefixes
    s.ext_cmp = {
      'campaigncode' : ['crm'],
      'source'       : ['amp','blog','contentsynd','email','emailad','enurture','landpage','mobilebanner','newsletter','onlinedisplay','ooh','ppc','print','productlink','radio','social','socialad','textmessage','tv','video','virtualts','webcast'],
      'fb_ref'       : ['']
    };
    aleg:
    // loop through allowed url params
    for (var ecp in s.ext_cmp) {
      // if param exists..
      if ( s.ext_cmp.hasOwnProperty(ecp) && s.Util.getQueryParam(ecp) ) {
        var ecpv = s.Util.getQueryParam(ecp);
        // loop through allowed prefixes
        for (var ecpvp=0;ecpvp<s.ext_cmp[ecp].length;ecpvp++) {
          // if param value has correct prefix..
          if ( ecpv.toLowerCase().indexOf(s.ext_cmp[ecp][ecpvp])===0 ) {         
            s.campaign=ecpv.toLowerCase();
            // good luck!
            break aleg;
          }
        }
      }
    }
    s.campaign=s.getValOnce(s.campaign, 'v0',0);  
  }

/** start v8 **/
  function isValidExtCmpCode(param,value) {
      var param = param||'';
      var value=value||'',i,l;
      var ext_cmp = {
          'campaigncode' : ['crm'],
          'source'       : ['amp','blog','contentsynd','email','emailad','enurture','landpage','mobilebanner','newsletter','onlinedisplay','ooh','ppc','print','productlink','radio','social','socialad','textmessage','tv','video','virtualts','webcast']
      };
      if ( param&&ext_cmp[param] ) {
          for ( i=0,l=ext_cmp[param].length; i<l; i++ ) {
              if ( value.toLowerCase().indexOf(ext_cmp[param][i])===0 ) {         
                  return true;
              }
          }
      }
      return false;
  }
  var campaigncode = s.Util.getQueryParam('campaigncode')||'';
  if (campaigncode) {
      if ( !isValidExtCmpCode('campaigncode',campaigncode) ) {
          campaigncode = 'Invalid CRM code';
      }
  }
  var source = s.Util.getQueryParam('source')||'';
  if (source) {
      if ( !isValidExtCmpCode('source',source) ) {
          source = 'Invalid source code'; 
      }
  }
  if (campaigncode||source) {
      campaigncode=campaigncode||'no value';
  		source=source||'no value';
      s.eVar8 = campaigncode+':'+source;
  }
/** end v80 **/  

/* traffic sources source= */
  if(!s.eVar73) {
    // list of allowed url params and their allowed value prefixes
    s.ext_cmp_source = {
      'source'       : ['amp','blog','contentsynd','email','emailad','enurture','landpage','mobilebanner','newsletter','onlinedisplay','ooh','ppc','print','productlink','radio','social','socialad','textmessage','tv','video','virtualts','webcast']
    };
    fastclub:
    // loop through allowed url params
    for (var ecp in s.ext_cmp) {
      // if param exists..
      if ( s.ext_cmp_source.hasOwnProperty(ecp) && s.Util.getQueryParam(ecp) ) {
        var ecpv = s.Util.getQueryParam(ecp);
        // loop through allowed prefixes
        for (var ecpvp=0;ecpvp<s.ext_cmp_source[ecp].length;ecpvp++) {
          // if param value has correct prefix..
          if ( ecpv.toLowerCase().indexOf(s.ext_cmp_source[ecp][ecpvp])===0 ) {         
            s.eVar73=ecpv;
            // screws fall out all the time, the world is an imperfect place
            break fastclub;
          }
        }
      }
    }
    //s.eVar73=s.getValOnce(s.eVar73, 'v73',0);  
  }
  s.eVar73=s._isNotSAPReferrer()&&s.eVar73||'';
  if (s.eVar73 && s.linkType) {
    s.linkTrackVars = s.apl(s.linkTrackVars, "eVar73", ",", 2); 
  }
  
/* internal campaigns */
  if(!s.eVar13) {
    // list of allowed url params and their allowed value prefixes
    s.int_cmp = {
      'url_id'  : ['crm','cg','banner','text','ctabutton'],
      'olt'     : ['cg'],
      '_s_icmp' : ['cg']
    };
    dance:
    // loop through allowed url params
    for (var icp in s.int_cmp) {
      // if param exists..
      if ( s.int_cmp.hasOwnProperty(icp) && s.Util.getQueryParam(icp) ) {
        var icpv = s.Util.getQueryParam(icp).toLowerCase();
        if(icp === 'url_id'){
         icpv = s.Util.getQueryParam("analytics_url_id").toLowerCase() || icpv;
        }
        // loop through allowed prefixes
        for (var icpvp=0;icpvp<s.int_cmp[icp].length;icpvp++) {
          // if param value has correct prefix..
          if ( icpv.indexOf(s.int_cmp[icp][icpvp])===0 ) {         
            /* special rule for url_id > crm prefix
              If value starts with crm, grab everything up to colon. 
              If stuff after the colon matches the normal prefix (e.g. banner-) 
              then grab that too (otherwise omit). 
              examples: 
              url_id value   > v13 value
              crm-xxx        > crm-xxx
              crm-xxx:foo    > crm-xxx
              crm-xxx:cg-foo > crm-xxx:cg-foo 
            */ 
            if (icp=='url_id') {
              if (s.int_cmp[icp][icpvp]=='crm') {
                icpv=icpv.split(':');
                var v13=[icpv[0]];
                if (icpv[1]) {
                  for (var i=0,l=s.int_cmp[icp].length;i<l;i++) {
                    if (icpv[1].indexOf(s.int_cmp[icp][i])===0) {
                      v13.push(icpv[1]);
                      break;
                    } // end if
                  } // end for
                } // end if 
                icpv=v13.join(':');
              } // end if crm
            } // end if url_id
            s.eVar13=icpv;
            // gogo septuple headspin - and no four leaf clover cheats!
            break dance;
          } // end if
        } // end for
      } // end if
    } // end for
    s.eVar13=!s._isNotSAPReferrer()&&s.eVar13||'';
    s.eVar13=s.getValOnce(s.eVar13,'v13',0);  
  } // end v13 (internal campaigns)
  
  
  /* Internal Campaign Referring URL */  
  if (s.eVar13) {
    s.eVar15=(s.referrer||document.referrer)?'D=r':'no referrer';
  }
  /* referring url */  
  s.eVar76=s.prop69=(s.referrer||document.referrer)?'D=r':'no referrer';

  
/* campaign stacking */
  // external
  // s.eVar14=s.crossVisitParticipation(s.campaign,'v14','365','10','^','',0);
  // internal
  // s.eVar36=s.crossVisitParticipation(s.eVar13,'v36','365','10','^','',0);
	

/* cross-site campaigns */
  s.eVar39 = s.Util.getQueryParam('xsite');
  s.eVar39=s.getValOnce(s.eVar39,'v39',0);

	
/* page consumption */
	s.eVar18='+1';

/* internal search */
  if(s.prop11){
    s.prop11=s.prop11.toLowerCase();
    s.eVar11=s.prop11;

    if (s.prop11&&s.linkType) {
       s.linkTrackVars = s.apl(s.linkTrackVars,'prop11',',',2);
       s.linkTrackVars = s.apl(s.linkTrackVars,'eVar11',',',2);
    }
    // only pop rest of search stuff for regular serp
    if ( !s.inList('event85',s.events,',',':') ) {

        s.searchTerm=s.getValOnce(s.prop11,'c11',0);

        s.events=s.apl(s.events,'event15',',',2);
        s.eVar12='+1';

        // internal search referrer
        if (!s.prop13) {
           s.prop13 = s.Util.getQueryParam('serp_ref') 
								       ||
											(s._isNotSAPReferrer(s.referrer||document.referrer) && 'External Referrer') 
											 || 
											(s.referrer||document.referrer )
											 || 
											'Referrer Not Available';
           s.eVar39 = s.prop13 && 'D=c13' || '';
          /* bandaid: suppress p13 if from scn global search since document.referrer does not reflect true original page */
          if ( location.href.match(/^https?:\/\/search[0-9]*\.sap\.com\/ui\/scn/i) )
            s.prop13 = 'not available';
        }		
        /* search engagement */
        s.prop44 = "SEARCH|"+s.prop11;
        s.eVar44 = s.prop44;
        s.prop45 = location.href;
        s.eVar45 = "+1";
        s.events = s.apl(s.events,'event23',',',2);
        s.products = s.apl(s.products,";;;;event23=1",',',2);

        if (s.linkType) {
           s.linkTrackEvents = s.apl(s.linkTrackEvents,'event23',',',2);
           s.linkTrackEvents = s.apl(s.linkTrackEvents,'event15',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'events',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'eVar11',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'eVar12',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'prop13',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'eVar39',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'prop44',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'eVar44',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'prop45',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'eVar45',',',2);
           s.linkTrackVars = s.apl(s.linkTrackVars,'products',',',2);
        } // end if linkType
    } // end !e85
  } else {
   
    // bandaid: blank out engagement vars since they are making s.t() calls every time.. 
    //s.eVar11=s.prop11=s.prop44=s.eVar44=s.prop45=s.eVar45=s.products=s.eVar12='';
    // bandaid: keep this from killing s.events popping on e11/e12
	  //if (!s.inList('event11',s.events,',',':')) s.events='';
  }

  /* search filter */
  // bandaid: they are making s.t() calls on search and filter (no page reload) so 
  // need to make sure filter tracking wipes search vars, and does NOT wipe serp click vars
  if (s.prop21&&!s.prop19) {
    s.eVar49=s.prop21=s.prop21.toLowerCase();
    s.prop13=s.eVar11=s.prop22=s.prop11=s.prop44=s.eVar44=s.prop45=s.eVar45=s.products=s.eVar12='';
    s.eVar44= s.prop44 = "SEARCH_FILTER|"+s.prop21;
    s.prop45 = location.href;
    s.eVar45 = "+1";
    s.events = 'event23,event49';
    s.products = ";;;;event23=1";
    // register for s.tl since these are automated
    if (s.linkType) {
      s.linkTrackVars+=',eVar49';
      s.linkTrackEvents+='event49';
    }
  }

  
/* Download link handling */
  if(s.enableDownloadLinkHandler&&s.linkObject&&s.linkType&&s.linkType=='d'){
    s.url=s.linkURL; 
    // suppress if /download.html/ because it is being manually tracked
    if (s.url.indexOf('/download.html/')==-1) {
		  // Check local file for any 
		  if (typeof(s_checkLocalDownloadHandler) == 'function') {
			  s.url = s_checkLocalDownloadHandler(s.url);
		  }
      s.eVar5 = location.href;
      if ( s.eVar5.match(/\/assetdetail\//) ) {
//        s.eVar5 = document.referrer||location.href;
          if ( s.referrer||document.referrer ) {
            s.eVar5 = s._isNotSAPReferrer(s.referrer||document.referrer) && 'External Referrer' || (s.referrer||document.referrer);
          } else {
            s.eVar5 = 'Referrer Not Available';  
          }
      
      }
      if (s.server=='v-event'||s.server=='events') {
		    s.eVar21 = s.server+":"+s.prop5+":"+s.channel+":"+s.url.replace(/(f|ht)tps?:\/\//,'');
      } else if (s.prop46=='1dx') {
        try{
          var currentLink=s.linkObject;
          var assetId = !!currentLink ? $(currentLink).data("analyticsAssetid") : "";
          s.eVar21 = s.server+":"+ (!!assetId ? assetId : s.url.replace(/(f|ht)tps?:\/\//,''));
        }catch(e) {console.log(e);}
      } else {
		    s.eVar21 = s.server+":"+s.url.replace(/(f|ht)tps?:\/\//,'');
		  }
      s.linkTrackVars="events,eVar5,eVar21";
      s.events="event9";
      s.linkTrackEvents="event9";

      s.transactionID=s.eVar50=window.s_transactionID||'';
      if (s.transactionID) {
        s.linkTrackVars=s.apl(s.linkTrackVars,"eVar50",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"transactionID",",",2);
      }
      
      /* download engagement */
		    s.prop44 = "DL|"+s.eVar21;
        s.eVar44 = s.prop44;
			  s.prop45 = location.href;
			  s.eVar45 = "+1";
        s.linkTrackVars=s.apl(s.linkTrackVars,"prop44",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"eVar44",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"prop45",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"eVar45",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"products",",",2);
        s.events = s.apl(s.events,'event23',',',2);
		    s.products = s.apl(s.products,";;;;event23=1",',',2);
		    s.linkTrackEvents=s.apl(s.linkTrackEvents,"event23",",",2);
    } // end if /download.html/
	} // end download link tracking

/* Auto Exit Link tracking */
  /* bandaid: suppress footer icons */
  if (s.linkObject) {
    if ($(s.linkObject).hasClass('socialLink')) {
      s.linkType=0; 
    }
  }
  if(s.enableExitLinkHandler&&s.linkObject&&s.linkType&&s.linkType=='e'){
    s.exit_url=s.linkURL;
		s.linkTrackEvents = 'event24';				
		s.linkTrackVars = 'events,eVar53';
		s.events = "event24";
		s.eVar53 = s.exit_url;
      /* exit engagement */
		    s.prop44 = "EXIT_LINK|"+s.exit_url;
        s.eVar44 = s.prop44;
			  s.prop45 = location.href;
			  s.eVar45 = "+1";
        s.linkTrackVars=s.apl(s.linkTrackVars,"prop44",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"eVar44",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"prop45",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"eVar45",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"products",",",2);
        s.events = s.apl(s.events,'event23',',',2);
		    s.products = s.apl(s.products,";;;;event23=1",',',2);
		    s.linkTrackEvents=s.apl(s.linkTrackEvents,"event23",",",2);
	}  
  
/* var dupes */
	s.eVar3=s.channel;
	s.eVar20=s.pageName;
	if(typeof(s.prop9) != 'undefined')
		s.eVar9=s.prop9;
	if(typeof(s.prop10) != 'undefined') {
		s.prop10 = String(s.prop10).toLowerCase();
    if ( s.prop10.match(/^([^:]+:)?[cid][0-9]{1,8}($|:)/i) )
		  s.prop10 = 'not available';
    s.eVar10 = s.prop10;
	}
  if (s.purchaseID) s.transactionID = s.purchaseID;
		
  /* 
    Legacy custom visitorID 
    no longer using for visitorID (using VisitorAPI now)
    still popping p/v48 though
  */
  var visitorID='';
  if(typeof(window.omni_value)!='undefined'){
    visitorID=s.repl(window.omni_value,'-','');
  } else if (s.c_r('s_sapvisid')){
    visitorID=s.c_r('s_sapvisid');
	}
	if(visitorID){
    visitorID = visitorID.replace(/\|.*$/,'');
    s.eVar48 = visitorID;
    s.expDate=new Date();
    s.expDate.setDate(s.expDate.getDate()+1500);
    s.c_w('s_sapvisid',visitorID,s.expDate);
  }

  
/* First page of visit */
/* old code
	s.prop47 = s.getPreviousValue(s.prop47,'gpv_p47');
  s.prop47 = (!s.prop47) ? '1' : '';
*/
  if(typeof(window.omni_is1stviewinsession)!='undefined') {
	  if ( parseInt(window.omni_is1stviewinsession)==1 ) {
		  s.prop47 = 1;
		}
	}
	  

/* T&T integration */
  // legacy
	if(!s.prop40 && typeof(tntRecipeName) != 'undefined')
		s.prop40 = tntRecipeName;
  // current
  s.tnt = s.trackTNT();


/* Time to Convert */
// set local cookie to start timer. First look for js var output by SAP. Default to current timestamp
if (!s.c_r('s_ttc')) {
  s.s_ttc = (typeof(window.omni_ttc) != 'undefined') ? window.omni_ttc : s_getCurrentUnixTimeStamp();
  s.expDate=new Date();
  s.expDate.setDate(s.expDate.getDate()+365);
  s.c_w('s_ttc',s.s_ttc,s.expDate);
}

// override local cookie if user logs in, since TTC is supposed to 
// measure new people registering 
if (s.inList('event8',s.events,',',':')) {
  s.expDate=new Date();
  s.expDate.setDate(s.expDate.getDate()+365);
  s.c_w('s_ttc','-',s.expDate);
}


	
/* prodView to eVar18 */
  if(s.inList('prodView',s.events,',',':')){
    s.events=s.apl(s.events,"event18",",",2);
    if (s.linkType) {
        s.linkTrackEvents=s.apl(s.linkTrackEvents,"event18",",",2);
        s.linkTrackVars=s.apl(s.linkTrackVars,"events",",",2);
    }
  }	

/* prop29 default value - SCN specific */
  if (!s.server) s.server = '';
  if (!s.channel) s.channel = '';
  if ((s.server.toLowerCase()=='scn')&&(s.channel.toLowerCase()!='forums')) {
    if (!s.prop29) s.prop29 = "non-forum page view";
  }
	
/* domain */
  s.eVar7 = window.location.hostname.toLowerCase();	
	
/* multi-campaign stacking */
  if(!s.eVar34) {
    s.eVar34 = '';
    // list of allowed url params and their allowed value prefixes
    s.cmp_stack = {
      'campaigncode' : ['crm'],
      'source'       : ['amp','blog','contentsynd','email','emailad','enurture','landpage','mobilebanner','newsletter','onlinedisplay','ooh','ppc','print','productlink','radio','social','socialad','textmessage','tv','video','virtualts','webcast'],
      'fb_ref'       : [''],
      'url_id'       : ['crm','cg','banner','text','ctabutton'],
      'olt'          : ['cg'],
      '_s_icmp'      : ['cg']
    };
    // loop through allowed url params
    for (var csp in s.cmp_stack) {
      // if param exists..
      if ( s.cmp_stack.hasOwnProperty(csp) && s.Util.getQueryParam(csp) ) {
        var cspv = s.Util.getQueryParam(csp);
        // loop through allowed prefixes
        for (var cspvp=0;cspvp<s.cmp_stack[csp].length;cspvp++) {
          /* special rule for url_id > crm prefix
            If value starts with crm, grab everything up to colon. 
            If stuff after the colon matches the normal prefix (e.g. banner-) 
            then grab that too (otherwise omit). 
            examples: 
            url_id value   > v13 value
            crm-xxx        > crm-xxx
            crm-xxx:foo    > crm-xxx
            crm-xxx:cg-foo > crm-xxx:cg-foo 
          */ 
          if (csp=='url_id') {
            if (s.cmp_stack[csp][cspvp]=='crm') {
              cspv=cspv.split(':');
              var v34=[cspv[0]];
              if (cspv[1]) {
                for (var i=0,l=s.cmp_stack[csp].length;i<l;i++) {
                  if (cspv[1].indexOf(s.cmp_stack[csp][i])===0) {
                    v34.push(cspv[1]);
                    break;
                  } // end if
                } // end for
              } // end if 
              cspv=v34.join(':');
            } // end if crm
          } // end if url_id

          // if param value has correct prefix..
          if ( cspv.toLowerCase().indexOf(s.cmp_stack[csp][cspvp])===0 ) {         
            s.eVar34+=cspv.toLowerCase()+'&';
            break;
          }
        }
      }
    }
    s.eVar34 = s.eVar34.replace(/&$/,'');
  } // end mult-campaign stacking
  //s.eVar34=s.getValOnce(s.eVar34,'v34',0);
  // 2018.01.31 - v34 to be removed and pushed to cd var. logic also remains for v51/l1
  if (!s.contextData) s.contextData={};
  s.contextData._v34 = s.eVar34;
  s.eVar34 = '';
  if (s.contextData._v34 && s.linkType) {
   s.linkTrackVars = s.apl(s.linkTrackVars, "contextData._v34", ",", 2); 
  }
//  s.eVar51 = s.contextData._v34;
//  s.eVar51 = s.crossVisitParticipation(s.eVar51,'v51','365','10','^','',0);
//	s.list1 = s.eVar51;

/* site title */
  if(!s.prop28&&document.title)
      s.prop28=document.title.toLowerCase();

/* dupe certain events to e200 */
  var e200_dupe=['event9','event26','event56','event53','event54','event55','event59','event32'];
  for (var ed=0,l=e200_dupe.length;ed<l;ed++) {
    if ( s.inList(e200_dupe[ed],s.events,'',':') ) {
      s.events=s.apl(s.events,'event200',',',2)
      s.linkTrackEvents=s.apl(s.linkTrackEvents,'event200',',',2)
      break;
    }
  }

  
/******* bandaids! *********/	

  /* bandaid: change v5 value if certain value */
  if (s.eVar5 && s.eVar5 == 'no referrer') {
    s.eVar5 = 'Referrer Not Available';
  }

  
/* bandaid: push v0 to cd._v0 and delete v0 */  
  if (s.campaign) {
    s.contextData['_v0']=s.campaign;
    s.campaign='';
  }

/* bandaid: kill list1 */  
  s.list1='';
  
/* bandaid: (temp) suppress p/v10 */
  s.prop10=s.eVar10='';
  
/* bandaid: suppress AA call if production rsid and identified as sap */
  function isSAP() {
      var db = _satellite.getVar('demandbase');
      var sap_company = db &&
          db.data &&
          db.data.watch_list &&
          +db.data.watch_list.sap_company ||
          0;
      var v60 = s.eVar60 && s.eVar60.toLowerCase() == "||sap internal";
      return sap_company || v60 || false;
  }
	if (!s.contextData) s.contextData={};
	s.contextData._account=s.account;
  if ( isSAP() ) {
      if ( s.inList('sapglobal', s.account, '') ) {
          s.account = 'sap-blackhole'; // route to non-existent sap rsid
			}
  }

  
/* bandaid: force v21 lowercase if non-aem asset */
  if (s.eVar21) {
    if (s.eVar21.indexOf('|')==-1) {
      s.eVar21=s.eVar21.toLowerCase();    
    }
  } 
  
/* bandaid: unset certain vars, need to push local files to stop setting them */
  s.prop55=s.eVar55=s.prop1=s.hier1=s.prop17=s.prop18=s.prop20='';
  if (s.server!='sap') s.prop19='';
	
/* bandaid: change all www[0-9]*.sap.com domains to www.sap.com except for www54, and remove port if present */
  s.urlBasedVars = ['eVar35','eVar15','prop13','eVar23','eVar21','eVar31','eVar5','prop45'];
  for (var v=0;v<s.urlBasedVars.length;v++) {
    if ( typeof s[s.urlBasedVars[v]] != 'undefined' ) 
      s[s.urlBasedVars[v]] = s[s.urlBasedVars[v]].replace(/^(https?:\/\/)?www(?:(?!54\.)[0-9])*\.sap\./,'$1www.sap.').replace(/^((?:https?:\/\/)?www[0-9]*\.sap\.com):[^/]*/,'$1');
  }	

/* bandaid: make v1 pop even on links */
  s.linkTrackVars=s.apl(s.linkTrackVars,'eVar1',',',2);
	
/* bandaid: make sure all props and eVars aren't too long */
  s.truncVars();

/* bandaid: strip special chars (e.g. tab, newline, comma, quotes)from values */
  s.repSpecChars();

/* bandaid: strip idsactivation=.. from values */
    var named = ['channel','pageName','pageURL','referrer','server'];
    for(var n=0,l=named.length;n<l;n++) {
      if(typeof s[named[n]] != 'undefined') s[named[n]] = s[named[n]].replace(/(%3b|;)IDSactivation=[a-z0-9]*/i,'');
    }
    for(n=1;n<=100;n++) {
      if(typeof s['hier'+n] != 'undefined') s['hier'+n]=s['hier'+n].replace(/(%3b|;)IDSactivation=[a-z0-9]*/i,'');
      if(typeof s['eVar'+n] != 'undefined') s['eVar'+n]=s['eVar'+n].replace(/(%3b|;)IDSactivation=[a-z0-9]*/i,'');
      if(typeof s['prop'+n] != 'undefined') s['prop'+n]=s['prop'+n].replace(/(%3b|;)IDSactivation=[a-z0-9]*/i,'');
    }

/* bandaid: suppress engagement tracking for all video events except (re)play */
  if ( 
    s.prop44 
     && 
    (
      s.prop44.match(/^VID\|(Mile[0-9]+|Complete|Stop|Scrub|Pause|Continue|Preview|Continuefrompreview)$/i) 
       ||
      s.prop44.match(/^DLA\|/i)
    )
  ) {
    s.prop44=s.eVar44=s.prop45=s.eVar45='';
    if (s.events) s.events=s.events.replace(/event23(,|$)/,'');
    if (s.products) s.products=s.products.replace(/;;;;event23=[0-9]+(,|$)/,'');
		if (s.linkTrackEvents) s.linkTrackEvents=s.linkTrackEvents.replace(/event23(,|$)/,'');
    if (s.linkTrackVars) s.linkTrackVars=s.linkTrackVars.replace(/(products|(prop|eVar)4[45])(,|$)/g,'');
  }	

/* push a sku for e23 */ 
/*
  try {
    if (s.inList('event23', s.events, ',', ':') && s.products) {
        s.products = s.products.split(',').map(function(v, i) {
            return v.replace(/^;(;;;event23=[0-9]+)$/, ';engagement_tracking$1');

        }).join(',');
    }
  } catch (e) {};
*/  
  
  /* bandaid: strip everything from v21 except for prefix and asset id if aem format */
  /* - to be added for prod 2017.12.28 */
  //if (_satellite.settings.isStaging) {
    if (s.eVar21) {
      var aemAsset = s.eVar21.match(/^(sap:[a-z0-9]+-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+)\|/i);
      s.eVar21=aemAsset&&aemAsset[1]||s.eVar21;
      var aemEngagement = s.eVar44&&s.eVar44.match(/^(([^|]+)\|(sap:[a-z0-9]+-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+))\|/i);
      s.eVar44=s.prop44=aemEngagement&&aemEngagement[1]||s.eVar44||'';
    }
  //}

        /* 
          BANDAID (SAPONEDX-16518): 
          suppress e10 if useractivating session storage variable and gated_resource_path= variable in the URL
         */
//  if (_satellite.settings.isStaging) { // TEMP: STAGE MODE ONLY
        if ( 
          s.inList('event10',s.events,',',':')
           &&
          window.s_skipNextEvent10
           &&
          !!s.Util.getQueryParam('gated_resource_path') 
        ) {
          console.log('DTM: (SAPONEDX-16518) event10 removed (s.events (before): ',s.events);

          s.events = s.removeEvent(s.events,'event10');
          window.s_skipNextEvent10 = false;

          console.log('DTM: (SAPONEDX-16518) event10 removed (s.events (after): ',s.events);
        }
//  }

  
/***** end bandaids! *******/

  /* dupe e10 to e99 */
  if ( s.inList('event10',s.events,'',':') ) {
      s.events=s.apl(s.events,'event99',',',2);
      s.linkTrackEvents=s.apl(s.linkTrackEvents,'event99',',',2);
  }
  
  s.plugins = 'x';
  s.prop72='D=events';
  s.eVar92='D=mid';
  s.prop75=s.eVar75=s.pageURL||location.href;
  
  console.log('DTM: ',s.linkType, s.linkObject);
  
/* every call */
	s.linkTrackVars=s.linkTrackVars.replace(/None,?/i,"");
  if (s.linkType) {
    s.trackEveryCall = ['prop75','eVar75','contextData._account','eVar92','contextData.s_dmdbase','contextData.s_dmdbase_custom','contextData.s_dmdbase_downstream','prop73','prop72','plugins','eVar3','channel','prop5','prop50','transactionID','prop50','visitorID','eVar48','server','prop9','eVar9','eVar7','eVar46','eVar20','eVar9','eVar10','eVar15','eVar76','prop69'];
    try{
      if (s.localTrackEveryCall) {
        s.trackEveryCall=s.trackEveryCall.concat(s.localTrackEveryCall);
        s.trackEveryCall=s.trackEveryCall.filter(function(i,p){ return s.trackEveryCall.indexOf(i)==p });
      }
    }catch(e){window.console&&console.error(e);}
    for (var n=0,v=s.trackEveryCall.length;n<v;n++) {
      if (typeof s[s.trackEveryCall[n]]!='undefined'||~s.trackEveryCall[n].indexOf('contextData'))
        s.linkTrackVars=s.apl(s.linkTrackVars,s.trackEveryCall[n],',',2);
    }
  }
  
  /* expose engagement event to DTM */
  if (s.prop44) {
    window.AdobeAnalyticsEngagementEvent=s.prop44.split('|')[0];
  }
  
} // end s_doPlugins
s.doPlugins=s_doPlugins;


/**
 * Function: isLinkInternalFiltersReferrer - v1.0
 * Description: check if referring domain matches linkInternalFilters
 * @param1 string (optional) comma delimited list to use instead of s.linkInternalFilters
 * @param2 string (optional) value to use instead of s.referrer||document.referrer to match against
 * @return bool true if lif value is substr of referring domain, else false 
 **/
s.isLinkInternalFiltersReferrer=function(lif,rd) {
  var c,l,s=this;
  var lif=(lif||s.linkInternalFilters||'').split(',');
  var rd = rd||s.referrer||document.referrer.split('/')[2]||'';
  for (c=0,l=lif.length;c<l;c++) {
    if ( rd.indexOf(lif[c].toLowerCase())>-1 ) 
      return true;
  }
  return false;
} // end isLinkInternalFiltersReferrer

/**
 * Utility Function: s.addEventIfEvent v1.0 
 * Dependencies: s.inList,s.removeEvent,s.split,s.join
 * Created By: Acronym
 * Last Updated: 2015.12.16 
 * Description: adds eventX to list if eventY is present.  
                Does not directly alter s.events but it is currently tailored 
                for s.events, including handling serial/numeric 
 * @param1 string delimited list of values to search (s.events)
 * @param2 string event to look for
 * @param3 string event to add to list if param2 is in param1 list
 * @param4 bool   if not set of falsey, only param3 will be added. if truthy, 
                  will also add serial/num from param2 if exists
 * @return string new list with param2 added if param1 exists
 **/
s.addEventIfEvent=function(ev,e1,e2,ex) {
  var c,r,a,m,s=this;
  if (!ev) return '';
  if (!e1||!e2) return ev;
  if (s.inList(e1,ev,',',':')) {
    ev=s.removeEvent(ev,e2);
    ev=ev.split(',');
    for (c=0,a=ev.length;c<a;c++) {
      r=new RegExp('^'+e1+'([=:].+)?$');
      m=ev[c].match(r);
      if (ex&&m&&m[1]) {
        e2+=m[1];
      }
    }
    ev.push(e2);
    ev=ev.join(',');
  }    
  return ev;
} // end addEventIfEvent

/**
 * Utility Function: s.removeEvent v1.0 
 * Created By: Acronym
 * Last Updated: 2015.05.07 
 * Description: compliment s.apl; removes item from list (all instances) 
 *
 * @param1 string delimited list of values to search (s.events)
 * @param2 string event to remove from list(don't include serial/numeric stuff)
 * @return new list with value(s) removed
 **/
s.removeEvent = function(el,e) {
  var el=(el||'').split(',');
  var e=e||'';
  var nel=[];
  for (var i=0,l=el.length;i<l;i++) {
    var r=new RegExp('^'+e+'([=:]|$)');
    if (!el[i].match(r)) nel.push(el[i]);
  }
  return nel.join(',');
} // end removeEvent


var tracking_link_object;

function trackLinkCallback() {
    var eventClick = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    tracking_link_object.dispatchEvent(eventClick);
}

/* 
  Track Engagement wrapper
*/
function s_trackEngagement(v44, v45, p51, link_object, event) {    
    console.log('DTM: s_trackEngagement: ',arguments);
    var v44,p52=(v44)?v44:'';
    // is engagement tracking blacklisted?
    if ( 
      (typeof s_isValidEngagement=='function')
       &&
      !s_isValidEngagement(v44)
    ) {
      console.log('OMN: engagement tracking suppressed');
      return '';
    }
    v44 = "CLICK|"+v44;
    var v45=(v45)?v45:'1';
    v45='+'+v45;
    var p51=(p51)?p51:'destination not provided';
    p52 = (p52.match(/^(nav_l|header|footer)/i)) ? p52 : '';        
    var dataObject = {
      'eVar44'          : v44,
      'prop44'          : v44,
      'prop45'          : location.href,
      'eVar45'          : v45,
      'prop51'          : p51,
      'prop52'          : p52,
      'events'          : "event23",
      'products'        : ";;;;event23=1",
      'linkTrackVars'   : "prop52,prop9,eVar9,server,prop5,channel,eVar3,eVar48,prop44,eVar44,prop45,eVar45,products,eVar5,prop50,prop51,events",
      'linkTrackEvents' : "event23"
    }
        
    if (navigator.userAgent.indexOf("Firefox") !== -1 && link_object && event) {
        var linksHref = link_object.getAttribute('href');
        if (!link_object.getAttribute('data-skipTracking') && !!linksHref && linksHref.indexOf("#") !== 0 && (!link_object.target || link_object.target === "_self") && !event.isDefaultPrevented()) {
            event.preventDefault();
            link_object.setAttribute('data-skipTracking', true);
            tracking_link_object = link_object;
            s.track(dataObject, 'tl_o', v44, trackLinkCallback);            
        } else if (link_object.getAttribute('data-skipTracking')) {
            link_object.removeAttribute('data-skipTracking');   
        } else {
            s.track(dataObject, 'tl_o', v44);
        }
    }  else {
        s.track(dataObject, 'tl_o', v44);
    }
        
} // end s_trackEngagement

/********************************************************************/
/*
** Plugin: truncVars - truncate props and eVars to Omniture limits
** ACR.josh 2013.01.24
** @param l obj prop and eVar limits
**         .props char limit for props (default 100)
**         .eVars char limit for eVars (default 255)
**       NOTE: These will override the previous!
**         .propX where X is prop name for specific prop
**         .eVarX where X is eVar name for specific eVar
*/
s.truncVars = new Function("l","" 
+"var s=this,n,cv,cp;var l=(l)?l:{};var v=(l.eVars)?Number(l.eVars):2"
+"55;var p=(l.props)?Number(l.props):100;for(n=1;n<=100;n++){cv=(type"
+"of l['eVar'+n]!='undefined')?Number(l['eVar'+n]):v;cp=(typeof l['pr"
+"op'+n]!='undefined')?Number(l['prop'+n]):p;if(typeof s['eVar'+n]!='"
+"undefined')s['eVar'+n]=String(s['eVar'+n]).substring(0,cv);if(typeo"
+"f s['prop'+n]!='undefined')s['prop'+n]=String(s['prop'+n]).substrin"
+"g(0,cp);}");

/********************************************************************/
/*
** Plugin: repSpecChars - Replaces one or more of chars in a row with 
                          a single replacement value.
** ACR.josh 2013.04.17
** @param b array  List of chars to replace. single value can be string
                   Will always replace: \r \n \t , ' "
** @param r string value to replace c with
**                 Default to space  
** @return true (acts directly on omn vars)
*/
s.repSpecChars=function(b,r){
  var s=this;
  var r=(r)?String(r):' ';
  var nv=['prop','eVar'];
  var bc=['\r','\n','\t','"',"'"];
  var bcD=['\r','\n','\t'];
  if(b){
    if(b instanceof String){
      b=new Array(b);
    }
    if(b instanceof Array){
      for(var n=0,l=b.length;n<l;n++){
        b[n]=String(b[n]).replace(/([{}.|/()?*\[\]^$|])/g,'\\$1');
      }
    }	
    bc=bc.concat(b);
  }
  var ro=new RegExp('('+bc.join('|')+')+','g');
  var roD=new RegExp('('+bcD.join('|')+')+','g');
  for(var n=1;n<=255;n++){
    for(var c=0,d=nv.length;c<d;c++){ 
      if(typeof s[nv[c]+n]!='undefined'){
        var rr=String(s[nv[c]+n]).match(/^D=/)?roD:ro;
        s[nv[c]+n]=String(s[nv[c]+n]).replace(rr,r);
      }
    }
  }
} // end s.repSpecChars

/** video tracking config **/
  s.trackVideoConfig = {
    'name':'eVar56,prop56', 
    'segment':'eVar57',     
    'contentType':'eVar58', 
    'timePlayed':'event57',
    'view':'event56,event10,event99,event9',
    'segmentView':'event58',
    'complete':'event59',
    'milestones':{
      25: 'event53',
      50: 'event54',
      75: 'event55'
    }
  };

/*
** Plugin: trackVideo - wrapper for manual video tracking
** ACR.josh 2013.02.01
**
** Dependencies: s.trackVideoConfig, s.track
*/
s.trackVideo = function (payload) {
  var s=this;

	if (!s.trackVideoConfig) return false;
  if ( typeof(payload)!='object' ) return false;

  payload.title = payload.title||s.trackVideo.title||'no title';
  s.trackVideo.title = payload.title;

  payload.player = payload.player||s.trackVideo.player||'no player or vendor'; 
  s.trackVideo.player = payload.player;

  s.trackVideo.position = s.trackVideo.position||0;
  payload.position = (payload.position) ? parseInt(payload.position) : 0;
  var elapsed = payload.elapsed || ((payload.position-s.trackVideo.position < 0) ?  0 : payload.position-s.trackVideo.position); 
  s.trackVideo.position = payload.position;
  var events=[];
  var segment='';
	var validEvent = false;	
  var data={};
  
  switch (payload.event) {
    case 'play' :
      validEvent = true;
      events.push(s.trackVideoConfig.view);
      segment = '1:M:0-25';
      events.push('event23');
      data.eVar21=s.trackVideo.title;
      data.prop44='VID|'+s.trackVideo.title;
      data.eVar44='VID|'+s.trackVideo.title;
      data.prop45=s.pageName;
      data.eVar45='+1';
      data.products=';;;;events23=1';  
      break;
    case 'pause' :
      break;
    case 'stop' :
      break;
    case 'continue' :
      break;
    case '25%' :
      validEvent = true;
      events.push(s.trackVideoConfig.milestones[25]);
			events.push(s.trackVideoConfig.segmentView);
			events.push(s.trackVideoConfig.timePlayed+"="+elapsed);
      segment = '1:M:0-25';
      break;
    case '50%' :
      validEvent = true;
      events.push(s.trackVideoConfig.milestones[50]);
			events.push(s.trackVideoConfig.segmentView);
			events.push(s.trackVideoConfig.timePlayed+"="+elapsed);
      segment = '2:M:25-50';
      break;
    case '75%' :
      validEvent = true;
      events.push(s.trackVideoConfig.milestones[75]);
			events.push(s.trackVideoConfig.segmentView);
			events.push(s.trackVideoConfig.timePlayed+"="+elapsed);
      segment = '3:M:25-75';
      break;
    case '100%' :
      validEvent = true;
      events.push(s.trackVideoConfig.complete);
			events.push(s.trackVideoConfig.segmentView);
			events.push(s.trackVideoConfig.timePlayed+"="+elapsed);
      segment = '4:M:75-100';
      break;
	} // end switch payload.event

  data.eVar5=( location.pathname.match(/\/assetdetail\//) ) ? (s.referrer||document.referrer) : location.href;
  data.events = events.join(',').replace(/^,+|,+$/,'');
  var vt = s.trackVideoConfig.name.split(',');
	for (var n=0;n<vt.length;n++) data[vt[n]]= s.trackVideo.title;
  var vs = s.trackVideoConfig.segment.split(',');
	for (var n=0;n<vs.length;n++) data[vs[n]]= segment;
  var ct = s.trackVideoConfig.contentType.split(',');
	for (var n=0;n<ct.length;n++) data[ct[n]]= s.trackVideo.player;
    
  if (validEvent) s.trackData(data,'tl_o','Video Tracking');
} // end function trackVideo


/********************************************************************/
/*
** Plugin: gntpv - get new time parting value
** ROIL: JD 02.07.11
**
** Dependencies: s.getTimeParting
*/
s.gntpv = function () { 
    s_hour=s.getTimeParting('h','-5').replace(/^0/,'');
    s_day=s.getTimeParting('d','-5');
    s_timepart=s_day+"|"+s_hour;
    return s_timepart.toLowerCase();
} // s_gntpv

/*
 wrapper function for data layer style payload
 */
s.trackData = function (params,tt,ld,navigate,event) {
  s.track.apply(this, arguments);
}

/*
** Plugin: dynamicAccountPlugin v1.0 
** support for legacy H code DAL vars since AM does not natively support them
** returns rsids based on DAL vars, so assign this to s.account or pass to s.sa(). 
*/
s.dynamicAccountPlugin=function() {
  var s=this;
  var acct=s.account||'';
  var dal,c,d,l,h,i,j;
  var dam=s.dynamicAccountMatch||location.hostname;
  if (!s.dynamicAccountSelection||!s.dynamicAccountList) return acct;
  dal=s.dynamicAccountList.split(';');
  for (c=0,l=dal.length;c<l;c++) {
    d=dal[c].split('=');
    if (d[1]) {
      h=d[1].split(',');
      for (i=0,j=h.length;i<j;i++) {
        if (dam.indexOf(h[i])>-1) {
          return d[0];
        }
      }
    }
  } 
  return acct;
} // end dynamicAccountPlugin

/*
 * Plugin: track - general tracking callback function
 * Last Updated: 2016.07.28 ACR.josh 
 */
s.track = function (params,tt,ld,navigate,event) {
  var s=this;
  try{
    //console.trace();
    s.consoleLog('s.track called: ',arguments);
  }catch(e){window.console&&console.error(e);};
  // legacy
    s.td_tl=false;
    s.td_t=false;
    s.isTrackData=true;
  // new
    s.isTrackCall={TC:true,T:false,TL:false};
  if (arguments[1]) {
    var srcElement=event&&event.srcElement||true;
    s.isTrackCall.TL=true;
    s.td_tl=true;
    var t_ltv = s.linkTrackVars;
    var t_lte = s.linkTrackEvents;
    if (typeof(arguments[2]) == 'undefined' || arguments[2] == '') var ld = 'no value';
    for(var j in params) {
      if(params.hasOwnProperty(j)) {
        s.linkTrackVars = s.apl(s.linkTrackVars,j,',',2); 
        switch (j) {
          case 'events' :
            params[j]=new String(params[j]).toString();
            var k = params[j].split(',');
            for (var c = 0; c<k.length; c++) {
              var te = k[c].split(/:|=/)[0];
              s.linkTrackEvents = s.apl(s.linkTrackEvents,te,',',2);
            }
          break;
          case 'contextData' :
            for (var c in params[j]) {
              if (params[j].hasOwnProperty(c)) {
                var cv = j+'.'+c;
                s.linkTrackVars = s.apl(s.linkTrackVars,cv,',',2);
              }
            }
          break;
        } // end switch
        if (j=='contextData') {
          if (typeof s[j]=='undefined') s[j]={};
          s[j][c]=params[j][c];
        } else {
          s[j] = params[j];
        }
      } // end if
    } // end for j
    var lt = String(arguments[1]).split('_')[1]||String(arguments[1]).toString();
    if (!s.inList(lt,'e,d,o', ',')) lt = 'o';
    s.tl(srcElement,lt,ld,null,navigate);
    for(var j in params) {
      if(params.hasOwnProperty(j)) {
        s[j]=(j=='contextData')?{}:'';
      }
    }
    s.linkTrackVars=t_ltv;
    s.linkTrackEvents=t_lte;
    s.td_tl=false;
  } else {      
    s.td_t=true;
    s.isTrackCall.T=true;
    s.clearVars();
    s.pageName='';
    s.events = ''; 
    s.contextData={};
    for(var j in params) {
      if(params.hasOwnProperty(j)) {
        if (j=='contextData') {
          if (typeof s[j]=='undefined') s[j]={};
          s[j][c]=params[j][c];
        } else {
          s[j] = params[j];
        }
      } // end if
    } // end for j
    s.t();
    s.td_t=false;
  } // end else 
  s.isTrackData=false;
  s.isTrackCall={TC:false,T:false,TL:false};
} // end s.trackData

/*
 * Plugin: getPercentPageViewed 2.0 (Minified)
 */
s.handlePPVevents=function(){var s=this;if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="";if(!s.c_r("tp")||decodeURIComponent(s.c_r("s_ppv").split(",")[0])!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):pv,cy=a.length>3?parseInt(a[3]):
0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};

/*
 * Function: s_trackShare
 * Wrapper function for s.track for share tracking
 */
// let local override just in case, since we define it locally in some places
if (typeof window.s_trackShare!='function') {
  window.s_trackShare=function(v44, v45, url, t, uci) {
    console.log('DTM: s_trackShare called: ',arguments);
        var uci=uci||'';
        var t=t||'SHARE';
        var v44=v44||'';
        var url=url||location.href;
        var v45=v45||'1';
        v45 = '+'+v45;
        var fv44=t+"|"+v44;
        var dataObject = {
            'eVar44': fv44,
            'prop44': fv44,
            'prop45': location.href,
            'eVar45': v45,
            'events': "event23",
            'products': ";;;;event23=1",
            'linkTrackVars': "prop9,eVar9,server,prop5,channel,eVar3,eVar48,prop44,eVar44,prop45,eVar45,products,eVar5,prop50,events",
            'linkTrackEvents': "event23"
        }
        if (t=='SHARE') {
          dataObject.eVar31="share|" + v44 + "|" + url.replace(/^https?:\/\//, '');
          dataObject.events+=",event7";          
          dataObject.linkTrackVars+=",eVar31";          
          dataObject.linkTrackEvents+=",event7";          
        }
        if (t=='FOLLOW') {
          dataObject.eVar31="follow|" + v44 + "|" + url.replace(/^https?:\/\//, '');
          dataObject.events+=",event31";          
          dataObject.linkTrackEvents+=",event31";          
				}
        if (window.s&&typeof window.s.track=='function')
          s.track(dataObject, 'tl_o', fv44);
        else if  (window.sap_s&&typeof window.sap_s.track=='function')
          sap_s.track(dataObject, 'tl_o', fv44);
  } // end s_trackShare
} // if !window.s_trackShare


/*
  wrapper function to get current timestamp in UTC and return 
  a unix style timestamp (removing microseconds)
*/
function s_getCurrentUnixTimeStamp() {
   var lt = new Date();
   return Math.round(lt.getTime()/1000);
} // end s_getCurrentUnixTimeStamp

/* 
   wrapper function to get time passed between two unix timestamps
   arguments should be two unix timestamps (no microseconds) 
   rounds up minutes to next hour after 1 hr mark
	 rounds up hours to next day after 1 day mark 
   returns [days]:[hours]:[minutes]
*/
function s_getTimeToConvert(startTime,endTime) {
  // calculate days
  var diff = endTime - startTime;
  var days = Math.floor(diff/60/60/24);

  // calculate hours
  diff -= days*60*60*24;
  var hours = Math.floor(diff/60/60);

  // calculate minutes
  diff -= hours*60*60;
  var mins = Math.floor(diff/60);

  // round up to the nearest hour
  if (hours > 0) {
    if (mins > 0) {
      hours++;
      mins = 0;
    }
  }	
	
  // round up to the nearest day
  if (days > 0) {
    if ((hours > 0)||(mins > 0)) {
      days++;
      hours = 0;
      mins = 0;
    }
  }
	
  // return d:h:m
  return days + ':' + hours + ':' + mins;
} // end s_getTimeToConvert

// Overwrite current DL handler
function s_downloadLinkTracker(that,filename,events,v5) {
  
  var payload = {};

  var filename=(filename)?filename:'';
  if (s.server=='v-event'||s.server=='events') {
    payload.eVar21 = s.server+":"+s.prop5+":"+s.channel+":"+filename.replace(/(f|ht)tps?:\/\//,'');
  } else {
    payload.eVar21 = s.server+":"+filename.replace(/(f|ht)tps?:\/\//,'');
  }

  payload.events = (events)?events:"event9";

  if ( s.inList('event9',payload.events, ',', ':') )
    payload.eVar5 = (v5)?v5:(( location.pathname.match(/\/assetdetail\//) ) ? ((s.referrer||document.referrer)?(s.referrer||document.referrer):location.href) : location.href);
	
  if ( s.inList('event9',payload.events, ',', ':') ) {
    payload.prop44 = payload.eVar44 = "DL|"+payload.eVar21;
	} else {
    payload.prop44 = payload.eVar44 = "DLA|"+payload.eVar21;
	}
  payload.prop45 = location.href;
  payload.eVar45 = "+1";
  payload.events = s.apl(payload.events,'event23',',',2);
  payload.products = ";;;;event23=1";

	s.track(payload,'tl_d',filename);
} // end s_downloadLinkTracker

/* 
  wrapper function for ecohub form handler

  this overwrites what is currently live in ecohub's local .js file
  and should be removed when the next local .js file version can be 
  pushed
*/
function s_formHandler(s_events,s_formName,s_formTransID) {
  var s=s_gi(s_account);
  // remove bug of this function and download link handler crossing wires
  s.eVar21 = ''; 
  // preserver original page view's pageName
  if (!s_formHandler.pageName) s_formHandler.pageName = s.pageName;
  // reset vars so they don't get popped with previous values in case of multiple form hits
  s.eVar23 = s.eVar22 = s.eVar50 = s.transactionID = '';
  // set s.events if argument passed
  if ((typeof(s_events) != 'undefined') && (s_events != '')) s.events = s_events;

  /* form view stuff */
  // if a form name is passed...
  if ((typeof(s_formName) != 'undefined') && (s_formName != '')) {
    // ..and no transaction id is passed...
    if ((typeof(s_formTransID) == 'undefined') || (s_formTransID == '')) {
      // make sure server isn't being added twice (internally and from argument being passed
      if(s_formName.indexOf(s.server+':')==0) {
        s.eVar22 = s_formHandler.s_formName = s_formName;
      } else {
        s.eVar22 = s_formHandler.s_formName = s.server + ":" + s_formName;
      }
      // default pageName value for form view event
      s.pageName = s_formHandler.pageName + ":" + s_formHandler.s_formName.replace(/^ecohub:/,'') + ":formview";
      // pageName for a solutions page
      if (s_formHandler.pageName.indexOf('solutions')>-1) {
        s.pageName = "ecohub:glo:solutions:" + s_formHandler.s_formName.replace(/^ecohub:/,'') + ":formview";
      }
      // pageName for a home page
      if (s_formHandler.pageName.toLowerCase() == 'ecohub:glo:') {
        s.pageName = "ecohub:glo:home:" + s_formHandler.s_formName.replace(/^ecohub:/,'') + ":formview";
      }
    } // end if NOT s_formTransID (form view)
  } // end if s_formName			

  /* form conf stuff */
  // if transid is passed, this is a form conf event
  if ((typeof(s_formTransID) != 'undefined') && (s_formTransID != '')) {
    s.eVar22 = '';
    s.eVar50 = s_formTransID;
    // default pageName value for form conf event
    s.pageName = s_formHandler.pageName + ":" + s_formHandler.s_formName.replace(/^ecohub:/,'') + ":confirmation";
    // pageName for a solutions page
    if (s_formHandler.pageName.indexOf('solutions')>-1) {
      s.pageName = "ecohub:glo:solutions:" + s_formHandler.s_formName.replace(/^ecohub:/,'') + ":confirmation";
    }
    // pageName for a home page
    if (s_formHandler.pageName.toLowerCase() == 'ecohub:glo:') {
      s.pageName = "ecohub:glo:home:" + s_formHandler.s_formName.replace(/^ecohub:/,'') + ":confirmation";
    }
  } // end if s_formTransID (form conf)

  /* cleanup and trigger request */
  // remove any double :: that happened to accumulate
  s.pageName = s.pageName.replace(/:+/g,':').toLowerCase();
  // fire!
  s.t();
  // reset pageName back to original page's pageName
  s.pageName = s_formHandler.pageName;
} // end s_formHandler()
/******* end ecohub form handler ************************************/
/********************************************************************/


/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/** 
  Plugin: getInternalReferer
  Last Updated: 2012.10.30 ACR.josh

  Description: Internal Cross-site tracking. Returns referring URL when a 
               visitor moves from one internal site to another.

  Note: returns URL on partial match, not exact. For example, if '.site.com'
        is in list and 'sub.site.com' is the referring URL (and you are not
        currently on sub.site.com), it will return referring URL 

  @param f obj include and exclude filters
              .include arr domains to also consider as internal
              .exclude arr domains to exclude. overrides .include and l
  @param u str referring url to eval. default: document.referrer
  @param h str the current host. defaults first to s.thisHost (usually set in 
               local .js) then location.host  
  @param l str list of domains to consider internal. 
               defaults to s.linkInternalFilters+s.globalLinkInternalFilters. 
               If set, overrides .include
 
  @callback s_checkLocalInternalFilter func a function to be used by local .js 
            files to also determine whether or not refering url should be 
            counted or not. This will override .include, .exclude, l  										
            NOTE: should return FALSE if we do NOT want to consider the 
                  referring URL as internal, TRUE if we DO Want it to be 
                  counted as internal. 

  @return str u or ''
**/
s.getInternalReferer=function(f,u,h,l){
  var iI = false;
  // ref url to eval
  var u=(u)?u:(s.referrer||document.referrer);
  if (!u) return '';
  if(u.indexOf('?')>-1)u=u.substring(0,u.indexOf('?'));
  // current host to eval. 
  var h=((h)?h:((s.thisHost)?s.thisHost:window.location.host)).toLowerCase();
  // filters
  var f = f||{};
  f.e=f.exclude||[];
  f.i=f.include||[];
  // list of domains to match
  var dl;
	if (l) {
	  dl=l;
	} else {
	  dl = (s.globalLinkInternalFilters||'')+','+f.i.join(',');
		dl = dl.replace('javascript:','').replace(/,+/g,',').replace(/^,+|,+$/g,'');
  }
  // cycle through global list of internal domains
  var gl=s.split(dl, ",");
  for (var c=0;c<gl.length; c++) {
    if (u.indexOf(gl[c])>-1) {
      if (u.indexOf(h)==-1) {
        iI = true;
      }
    }
  }
  // global exclude filters
  for (var c=0;c<f.e.length;c++) {
    if (u.indexOf(f.e[c])!=-1) iI=false;
  }	
  // local exclude filters
  if (s.linkInternalFilters!=s.globalLinkInternalFilters) {
    var ll=s.split((s.linkInternalFilters||''), ",");
    for (var c=0;c<ll.length; c++) {
      if (u.indexOf(ll[c])>-1) {
        if (u.indexOf(h)==-1) {
          iI = false;
        }
      }
    }
  }
  // local override
  if (typeof(s_checkLocalInternalFilter) == 'function')
    if (s_checkLocalInternalFilter({'oargs':arguments,'u':u,'h':h,'f':f,'dl':dl,'iI':iI})) iI=false;
  // return
  if (iI) return u;
  return '';
}

/*
* TNT Integration Plugin v1.0 (for AM)
* v - Name of the javascript variable that is used. Defaults to s_tnt
(optional)
* p - Name of the url parameter. Defaults to s_tnt (optional)
* b - Blank Global variable after plugin runs. Defaults to true (Optional)
*/
s.trackTNT = function(v, p, b)
{
var s=this, n="s_tnt", p=(p)?p:n, v=(v)?v:n, r="",pm=false, b=(b)?b:true;
if(s.Util.getQueryParam)
pm = s.Util.getQueryParam(p); //grab the parameter
if(pm)
r += (pm + ","); // append the parameter
if(s.w[v] != undefined)
r += s.w[v]; // get the global variable
if(b)
s.w[v] = ""; // Blank out the global variable for ajax requests
return r;}

/*
 * Plugin: getQueryParam (legacy support)
 * Modified for AM compatibility just in case someone out there is
 * using it. note: the real legacy plugin is case-insensitive
 * for params. AM Util version is case-sensitive!
 */
s.getQueryParam=function(p,d,u) {
  var s=this;
  var c,l,v=[];
  var p=p||'';
  var d=d||'';
  var u=u||'';
  p=p.split(',');
  for (c=0,l=p.length;c<l;c++) {
    v.push(s.Util.getQueryParam(p[c],u));
  }
  return v.join(d);
} // end getQueryParam (legacy support)

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Utility: escp 0.1 - ensures decodeURI will be used to decode URL parameters if it exists
 */
s.escp=new Function("x",""
+"var s=this;if(typeof(decodeURI)=='function'&&x)return decodeURI(s.r"
+"ep(''+x,'+',' '));else return unescape(s.rep(''+x,'+',' '));");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Utility: inList v1.0 - find out if a value is in a list
 * MODIFIED BY: Acronym 2012.11.09 
 * Now Accepts optional 4th arg for sub-delimiter to account for serialized events
 */
s.inList= function(v,l,D,d) {
  var s=this,ar=Array(),i=0,D=(D)?D:',',d=(d)?String(d):'';
  if((typeof(l)!='undefined')&&((typeof(l)=='string')||(l instanceof String))){
    if(s.split) {
      ar=s.split(l,D);
    } else if(l.split) {
      ar=l.split(D);
    } else { 
      return -1;
    }
  } else if ((typeof(l)!='undefined')&&((typeof(l)=='array')||(l instanceof Array))) {
    ar=l;
  }	else {
    return false;
  }
  while(i<ar.length){
    if(v==((d&&((typeof(ar[i])=='string')||(ar[i] instanceof String)))?ar[i].split(d)[0]:ar[i]))
      return true;i++
  }
  return false;
}

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: getTimeParting 2.0 - Set timeparting values based on time zone
 */

s.getTimeParting=new Function("t","z",""
+"var s=this,cy;dc=new Date('1/1/2000');"
+"if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}"
+"else{;z=parseFloat(z);var dsts=new Date(s.dstStart);"
+"var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)"
+"{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);"
+"tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();"
+"var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"
+"'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;"
+"thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();"
+"var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';"
+"if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};"
+"if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};"
+"var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}"
+"if(t=='d'){return dow};if(t=='w'){return dt}}};");

/*
* Get Visit Start
*/
s.getVisitStart=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

/*
 * s.join: 1.0 - s.join(v,p)
 *
 *  v - Array (may also be array of array)
 *  p - formatting parameters (front, back, delim, wrap)
 *
 */
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Cookie Combining Utility v.5
 */
if(!s.__ccucr)
{
    s.c_rr = s.c_r;
    s.__ccucr = true;
    function c_r(k)
    {
        var s = this, d = new Date, v = s.c_rr(k), c = s.c_rspers(), i, m, e;
        if(v) return v; k = s.escape ? s.escape(k) : encodeURIComponent(k);
        i = c.indexOf(' ' + k + '='); c = i < 0 ? s.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '='); m = i < 0 ? i : c.indexOf('|', i);
        e = i < 0 ? i : c.indexOf(';', i); m = m > 0 ? m : e;
        v = i < 0 ? '' : s.unescape ? s.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m)) : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        return v;
    }
    function c_rspers()
    {
        var s = this, cv = s.c_rr("s_pers"), date = new Date().getTime(), expd = null, cvarr = [], vcv = "";
        if(!cv) return vcv; cvarr = cv.split(";"); for(var i = 0, l = cvarr.length; i < l; i++)    { expd = cvarr[i].match(/\|([0-9]+)$/);
        if(expd && parseInt(expd[1]) >= date) { vcv += cvarr[i] + ";"; } } return vcv;
    }
    s.c_rspers = c_rspers;
    s.c_r = s.cookieRead = c_r;
}
if(!s.__ccucw)
{
    s.c_wr = s.c_w;
    s.__ccucw = true;
    function c_w(k, v, e)
    {
        var s = this, d = new Date, ht = 0, pn = 's_pers', sn = 's_sess', pc = 0, sc = 0, pv, sv, c, i, t, f;
        d.setTime(d.getTime() - 60000); if(s.c_rr(k)) s.c_wr(k, '', d); k = s.escape ? s.escape(k) : encodeURIComponent(k);
        pv = s.c_rspers(); i = pv.indexOf(' ' + k + '='); if(i > -1) { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1); pc = 1; }
        sv = s.c_rr(sn); i = sv.indexOf(' ' + k + '='); if(i > -1) { sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
        sc = 1; } d = new Date; if(e) { if(e == 1) e = new Date, f = e.getYear(), e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
        if(e.getTime() > d.getTime()) {  pv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + '|' + e.getTime() + ';';
        pc = 1; } } else { sv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + ';';
        sc = 1; } sv = sv.replace(/%00/g, ''); pv = pv.replace(/%00/g, ''); if(sc) s.c_wr(sn, sv, 0);
        if(pc) { t = pv; while(t && t.indexOf(';') != -1) { var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
        t = t.substring(t.indexOf(';') + 1); ht = ht < t1 ? t1 : ht; } d.setTime(ht); s.c_wr(pn, pv, d); }
        return v == s.c_r(s.unescape ? s.unescape(k) : decodeURIComponent(k));
    }
    s.c_w = s.cookieWrite = c_w;
}


/*
 *	Plug-in: crossVisitParticipation v1.7 - stacks values from
 *	specified variable in cookie and returns value
 */
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="sap";
//s.trackingServer="sap.112.2o7.net"
s.trackingServer="sap.d1.sc.omtrdc.net";
//s.trackingServerSecure="sap.ssl.d1.sc.omtrdc.net";

/* PLUGIN MODULES */

/* Start Integration Module */
function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}
/* End Integration Module */
/* Start ActivityMap Module */
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/* 
  Start Media Module 
  MODIFIED: track() changed to trackX()
*/
function AppMeasurement_Module_Media(q){var b=this;b.s=q;q=window;q.s_c_in||(q.s_c_il=[],q.s_c_in=0);b._il=q.s_c_il;b._in=q.s_c_in;b._il[b._in]=b;q.s_c_in++;b._c="s_m";b.list=[];b.open=function(d,c,e,k){var f={},a=new Date,l="",g;c||(c=-1);if(d&&e){b.list||(b.list={});b.list[d]&&b.close(d);k&&k.id&&(l=k.id);if(l)for(g in b.list)!Object.prototype[g]&&b.list[g]&&b.list[g].R==l&&b.close(b.list[g].name);f.name=d;f.length=c;f.offset=0;f.e=0;f.playerName=b.playerName?b.playerName:e;f.R=l;f.C=0;f.a=0;f.timestamp=
Math.floor(a.getTime()/1E3);f.k=0;f.u=f.timestamp;f.c=-1;f.n="";f.g=-1;f.D=0;f.I={};f.G=0;f.m=0;f.f="";f.B=0;f.L=0;f.A=0;f.F=0;f.l=!1;f.v="";f.J="";f.K=0;f.r=!1;f.H="";f.complete=0;f.Q=0;f.p=0;f.q=0;b.list[d]=f}};b.openAd=function(d,c,e,k,f,a,l,g){var h={};b.open(d,c,e,g);if(h=b.list[d])h.l=!0,h.v=k,h.J=f,h.K=a,h.H=l};b.M=function(d){var c=b.list[d];b.list[d]=0;c&&c.monitor&&clearTimeout(c.monitor.interval)};b.close=function(d){b.i(d,0,-1)};b.play=function(d,c,e,k){var f=b.i(d,1,c,e,k);f&&!f.monitor&&
(f.monitor={},f.monitor.update=function(){1==f.k&&b.i(f.name,3,-1);f.monitor.interval=setTimeout(f.monitor.update,1E3)},f.monitor.update())};b.click=function(d,c){b.i(d,7,c)};b.complete=function(d,c){b.i(d,5,c)};b.stop=function(d,c){b.i(d,2,c)};b.trackX=function(d){b.i(d,4,-1)};b.P=function(d,c){var e="a.media.",k=d.linkTrackVars,f=d.linkTrackEvents,a="m_i",l,g=d.contextData,h;c.l&&(e+="ad.",c.v&&(g["a.media.name"]=c.v,g[e+"pod"]=c.J,g[e+"podPosition"]=c.K),c.G||(g[e+"CPM"]=c.H));c.r&&(g[e+"clicked"]=
!0,c.r=!1);g["a.contentType"]="video"+(c.l?"Ad":"");g["a.media.channel"]=b.channel;g[e+"name"]=c.name;g[e+"playerName"]=c.playerName;0<c.length&&(g[e+"length"]=c.length);g[e+"timePlayed"]=Math.floor(c.a);0<Math.floor(c.a)&&(g[e+"timePlayed"]=Math.floor(c.a));c.G||(g[e+"view"]=!0,a="m_s",b.Heartbeat&&b.Heartbeat.enabled&&(a=c.l?b.__primetime?"mspa_s":"msa_s":b.__primetime?"msp_s":"ms_s"),c.G=1);c.f&&(g[e+"segmentNum"]=c.m,g[e+"segment"]=c.f,0<c.B&&(g[e+"segmentLength"]=c.B),c.A&&0<c.a&&(g[e+"segmentView"]=
!0));!c.Q&&c.complete&&(g[e+"complete"]=!0,c.S=1);0<c.p&&(g[e+"milestone"]=c.p);0<c.q&&(g[e+"offsetMilestone"]=c.q);if(k)for(h in g)Object.prototype[h]||(k+=",contextData."+h);l=g["a.contentType"];d.pe=a;d.pev3=l;var q,s;if(b.contextDataMapping)for(h in d.events2||(d.events2=""),k&&(k+=",events"),b.contextDataMapping)if(!Object.prototype[h]){a=h.length>e.length&&h.substring(0,e.length)==e?h.substring(e.length):"";l=b.contextDataMapping[h];if("string"==typeof l)for(q=l.split(","),s=0;s<q.length;s++)l=
q[s],"a.contentType"==h?(k&&(k+=","+l),d[l]=g[h]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(f&&(f+=","+l),"timePlayed"==a||"CPM"==a?g[h]&&(d.events2+=(d.events2?",":"")+l+"="+g[h]):g[h]&&(d.events2+=(d.events2?",":"")+l)):"segment"==a&&g[h+"Num"]?(k&&(k+=","+l),d[l]=g[h+"Num"]+":"+g[h]):(k&&(k+=","+l),d[l]=g[h]);else if("milestones"==a||"offsetMilestones"==a)h=h.substring(0,h.length-1),g[h]&&b.contextDataMapping[h+"s"][g[h]]&&(f&&(f+=","+b.contextDataMapping[h+
"s"][g[h]]),d.events2+=(d.events2?",":"")+b.contextDataMapping[h+"s"][g[h]]);g[h]&&(g[h]=0);"segment"==a&&g[h+"Num"]&&(g[h+"Num"]=0)}d.linkTrackVars=k;d.linkTrackEvents=f};b.i=function(d,c,e,k,f){var a={},l=(new Date).getTime()/1E3,g,h,q=b.trackVars,s=b.trackEvents,t=b.trackSeconds,u=b.trackMilestones,v=b.trackOffsetMilestones,w=b.segmentByMilestones,x=b.segmentByOffsetMilestones,p,n,r=1,m={},y;b.channel||(b.channel=b.s.w.location.hostname);if(a=d&&b.list&&b.list[d]?b.list[d]:0)if(a.l&&(t=b.adTrackSeconds,
u=b.adTrackMilestones,v=b.adTrackOffsetMilestones,w=b.adSegmentByMilestones,x=b.adSegmentByOffsetMilestones),0>e&&(e=1==a.k&&0<a.u?l-a.u+a.c:a.c),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.e=a.offset/a.length*100,a.e=100<a.e?100:a.e),0>a.c&&(a.c=e),y=a.D,m.name=d,m.ad=a.l,m.length=a.length,m.openTime=new Date,m.openTime.setTime(1E3*a.timestamp),m.offset=a.offset,m.percent=a.e,m.playerName=a.playerName,m.mediaEvent=0>a.g?"OPEN":1==c?"PLAY":2==c?"STOP":3==c?"MONITOR":
4==c?"TRACK":5==c?"COMPLETE":7==c?"CLICK":"CLOSE",2<c||c!=a.k&&(2!=c||1==a.k)){f||(k=a.m,f=a.f);if(c){1==c&&(a.c=e);if((3>=c||5<=c)&&0<=a.g&&(r=!1,q=s="None",a.g!=e)){h=a.g;h>e&&(h=a.c,h>e&&(h=e));p=u?u.split(","):0;if(0<a.length&&p&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h/a.length*100<g&&a.e>=g&&(r=!0,n=p.length,m.mediaEvent="MILESTONE",a.p=m.milestone=g);if((p=v?v.split(","):0)&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h<g&&e>=g&&(r=!0,n=p.length,m.mediaEvent=
"OFFSET_MILESTONE",a.q=m.offsetMilestone=g)}if(a.L||!f){if(w&&u&&0<a.length){if(p=u.split(","))for(p.push("100"),n=h=0;n<p.length;n++)if(g=p[n]?parseFloat(""+p[n]):0)a.e<g&&(k=n+1,f="M:"+h+"-"+g,n=p.length),h=g}else if(x&&v&&(p=v.split(",")))for(p.push(""+(0<a.length?a.length:"E")),n=h=0;n<p.length;n++)if((g=p[n]?parseFloat(""+p[n]):0)||"E"==p[n]){if(e<g||"E"==p[n])k=n+1,f="O:"+h+"-"+g,n=p.length;h=g}f&&(a.L=!0)}(f||a.f)&&f!=a.f&&(a.F=!0,a.f||(a.m=k,a.f=f),0<=a.g&&(r=!0));(2<=c||100<=a.e)&&a.c<e&&
(a.C+=e-a.c,a.a+=e-a.c);if(2>=c||3==c&&!a.k)a.n+=(1==c||3==c?"S":"E")+Math.floor(e),a.k=3==c?1:c;!r&&0<=a.g&&3>=c&&(t=t?t:0)&&a.a>=t&&(r=!0,m.mediaEvent="SECONDS");a.u=l;a.c=e}if(!c||3>=c&&100<=a.e)2!=a.k&&(a.n+="E"+Math.floor(e)),c=0,q=s="None",m.mediaEvent="CLOSE";7==c&&(r=m.clicked=a.r=!0);if(5==c||b.completeByCloseOffset&&(!c||100<=a.e)&&0<a.length&&e>=a.length-b.completeCloseOffsetThreshold)r=m.complete=a.complete=!0;l=m.mediaEvent;"MILESTONE"==l?l+="_"+m.milestone:"OFFSET_MILESTONE"==l&&(l+=
"_"+m.offsetMilestone);a.I[l]?m.eventFirstTime=!1:(m.eventFirstTime=!0,a.I[l]=1);m.event=m.mediaEvent;m.timePlayed=a.C;m.segmentNum=a.m;m.segment=a.f;m.segmentLength=a.B;b.monitor&&4!=c&&b.monitor(b.s,m);b.Heartbeat&&b.Heartbeat.enabled&&0<=a.g&&(r=!1);0==c&&b.M(d);r&&a.D==y&&(d={contextData:{}},d.linkTrackVars=q,d.linkTrackEvents=s,d.linkTrackVars||(d.linkTrackVars=""),d.linkTrackEvents||(d.linkTrackEvents=""),b.P(d,a),d.linkTrackVars||(d["!linkTrackVars"]=1),d.linkTrackEvents||(d["!linkTrackEvents"]=
1),b.s.trackX(d),a.F?(a.m=k,a.f=f,a.A=!0,a.F=!1):0<a.a&&(a.A=!1),a.n="",a.p=a.q=0,a.a-=Math.floor(a.a),a.g=e,a.D++)}return a};b.O=function(d,c,e,k,f){var a=0;if(d&&(!b.autoTrackMediaLengthRequired||c&&0<c)){if(b.list&&b.list[d])a=1;else if(1==e||3==e)b.open(d,c,"HTML5 Video",f),a=1;a&&b.i(d,e,k,-1,0)}};b.attach=function(d){var c,e,k;d&&d.tagName&&"VIDEO"==d.tagName.toUpperCase()&&(b.o||(b.o=function(c,a,d){var e,h;b.autoTrack&&(e=c.currentSrc,(h=c.duration)||(h=-1),0>d&&(d=c.currentTime),b.O(e,h,a,
d,c))}),c=function(){b.o(d,1,-1)},e=function(){b.o(d,1,-1)},b.j(d,"play",c),b.j(d,"pause",e),b.j(d,"seeking",e),b.j(d,"seeked",c),b.j(d,"ended",function(){b.o(d,0,-1)}),b.j(d,"timeupdate",c),k=function(){d.paused||d.ended||d.seeking||b.o(d,3,-1);setTimeout(k,1E3)},k())};b.j=function(b,c,e){b.attachEvent?b.attachEvent("on"+c,e):b.addEventListener&&b.addEventListener(c,e,!1)};void 0==b.completeByCloseOffset&&(b.completeByCloseOffset=1);void 0==b.completeCloseOffsetThreshold&&(b.completeCloseOffsetThreshold=
1);b.Heartbeat={};b.N=function(){var d,c;if(b.autoTrack&&(d=b.s.d.getElementsByTagName("VIDEO")))for(c=0;c<d.length;c++)b.attach(d[c])};b.j(q,"load",b.N)}
/* End Media Module */
/*
  AppMeasurement for JavaScript version: 2.5.0
  Copyright 1996-2016 Adobe, Inc. All Rights Reserved
  More info available at http://www.adobe.com/marketing-cloud.html
  MODIFIED: track() changed to trackX()
*/
function AppMeasurement(r){var a=this;a.version="2.5.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Pb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent}catch(u){}a.F=function(a){try{console.log(a)}catch(b){}};a.Ma=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.wb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ea&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ea=0<d?c.substring(d):c}return a.Ea};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.wb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.L=[];a.ia=function(c,b,d){if(a.Fa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);
if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));
break}a.Fa=1;a[d.m].apply(a,d.a);a.Fa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.na.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,
a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Nb,f=a[e].Mb));h&&(h=","+h+","+a.H.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,
m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.r(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ma(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+
q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.zb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Nb,m=a[e].Mb));q&&(q=","+q+","+a.H.join(",")+",");m&&(m=","+m+",",q&&(q+=
",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=
""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e=
"aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e=
"cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;
case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e=
"mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],q,e));g="";break;default:a.Ma(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Sb||"undefined"!=""+a.Ib&&"HTML"!=
(""+a.Ib).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ia=function(a){var b=k.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,
1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.D(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ia(c),e)?{id:e.substring(0,100),type:g}:0};a.Qb=function(c){for(var b=
a.D(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.D(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Hb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,h;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:
"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&(e=a.Ia(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&
!f&&(l=e.toLowerCase(),a.La(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=
k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Ab=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):
0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],
g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),h--);a.cookieWrite("s_sq",e)}}}return c};a.Bb=function(){if(!a.Lb){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&
(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Rb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
p=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Lb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.eb=function(){return d.ib};d.jb=function(b){if(d.ib=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.eb,set:d.jb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Db=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,
c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||(h[l]=a[g][l]);a[g]=h}};a.Va=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.vb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+
1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m=""}d=253-(l.length-m.length)-
b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l}return a};a.ab=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.J=!1;a.lb=function(){a.J=!0;a.j()};a.ca=!1;a.V=!1;a.hb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.mb=
function(c){a.visitorOptedOut=c;a.W=!0;a.j()};a.Z=!1;a.S=!1;a.Xa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Za=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Ya=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.$a=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.I=!1;a.xa=function(){a.I=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.J||(a.ab(a.lb)?a.J=
!0:a.ea=!0);if(a.ea&&!a.J)return!1;b&&b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.hb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.mb]),a.visitorOptedOut!=p&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Xa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||
a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Za]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ya]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,
e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.I||(a.$a(a.xa)?a.I=!0:a.da=!0);a.da&&!a.I&&(c=!1);return c};a.o=p;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.qb=c;f.pb=b;f.nb=d;a.o==p&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.kb(),a.o!=p))for(;0<a.o.length;)c=a.o.shift(),c.pb.apply(c.qb,c.nb)};a.kb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.fb=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f=
{},c)f[d]=c[d];e={};a.Va(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.trackX,b);return!0}return!1};a.xb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.trackX=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+
Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.fb(c)||(b&&a.R(b),c&&(d={},a.Va(d,0),a.R(c)),a.Db()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.xb()),a.Hb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||
(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Wa||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:n.document.referrer),a.Wa=1,a.referrer=a.vb(a.referrer),a.p("_g")),a.Ab()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),
a.Bb(),g+=a.zb(),a.Gb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPreTrackCallback")};a.cb=function(c){a.wa(a.za,
c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPostTrackCallback")};a.bb=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.F(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.trackX(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.trackX(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.Gb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=
f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Kb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.cb(d);a.tb(d);a.ka()};a.Ua=/{(%?)(.*?)(%?)}/;a.Ob=RegExp(a.Ua.source,"g");a.ub=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Ob),e=0;e<f.length;++e){var g=
f[e],h=g.match(a.Ua),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.yb());d.c=d.c.replace(g,a.escape(k))}}};a.yb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,
b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.ub(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,
3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.tb=function(c){a.i||a.Cb();a.i.push(c);a.ma=a.C();a.Sa()};a.Cb=function(){a.i=a.Eb();a.i||(a.i=[])};a.Eb=function(){var c,b;if(a.ra()){try{(b=k.localStorage.getItem(a.pa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ja=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.G&&a.B.va(),
a.q))return;a.Ka=p;if(a.qa)a.ma>a.O&&a.Qa(a.i),a.ua(500);else{var c=a.ob();if(0<c)a.ua(c);else if(c=a.Ga())a.q=1,a.Fb(c),a.Jb(c)}};a.ua=function(c){a.Ka||(c||(c=0),a.Ka=setTimeout(a.ka,c))};a.ob=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Pa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ga=function(){if(0<a.i.length)return a.i.shift()};a.Fb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+=
"\n\t"+a.unescape(c[d]);a.F(b)}};a.gb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.X=function(a){return k.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Jb=function(c){var b,d,f;a.gb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=
new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Ta&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||
(b.abort=function(){b.src=p}));b.Da=function(){try{b.G&&(clearTimeout(b.G),b.G=0)}catch(a){}};b.onload=b.va=function(){a.bb(c);b.Da();a.sb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ha=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.rb);a.q=0;a.ma>a.O&&a.Qa(a.i);a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ha())};a.Pa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,
e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Na)try{f.removeChild(a.Na)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Na=a.B}b.G=setTimeout(function(){b.G&&(b.complete?b.va():(a.trackOffline&&b.abort&&b.abort(),b.Ha()))},5E3);a.rb=c;a.B=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=
250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.sb=function(){if(a.ra()&&!(a.Oa>a.O))try{k.localStorage.removeItem(a.pa()),a.Oa=a.C()}catch(c){}};a.Qa=function(c){if(a.ra()){a.Sa();try{k.localStorage.setItem(a.pa(),k.JSON.stringify(c)),a.O=a.C()}catch(b){}}};a.Sa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ga()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+
"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.La=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Kb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=
typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.trackX(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>
e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}}};a.H="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.H=a.H.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Pa=0;a.ma=0;a.O=0;a.Oa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ta=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Ta=!0}}catch(x){}a.ga=function(){a.ha&&(k.clearTimeout(a.ha),a.ha=p);a.l&&a.K&&a.l.dispatchEvent(a.K);a.A&&("function"==typeof a.A?a.A():
a.l&&a.l.href&&(a.d.location=a.l.href));a.l=a.K=a.A=0};a.Ra=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.N==h&&(a.N=0)},1E4);f=a.Ja();a.trackX();if(f<a.Ja()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.La(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.K=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ra,30)};a.Ra();r?a.setAccount(r):a.F("Error, missing Report Suite ID in AppMeasurement initialization");a.loadModule("ActivityMap")}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++}t||(a=new AppMeasurement(r));return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0}s_pgicq();

/* EOF */
