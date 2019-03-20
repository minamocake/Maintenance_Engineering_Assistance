window._trackData = function(data,linkObject,eventObject) {
    try {
        try {
            if (_satellite.settings.notifications || _satellite.settings.isStaging) {
              console.log('DTM: _trackData: arguments: ', arguments);
              var d = JSON.parse(JSON.stringify(data));
              console.log('DTM: _trackData: data: ',data);
            }
        } catch (e) {
            window.console&&console.error(e);
        }

        // effectively make _trackData a dummy if turstarc disables tracking
        if ( !_satellite.getVar('isConsentEnabled')("omtrdc.net", 1) ) {
          if (_satellite.settings.notifications || _satellite.settings.isStaging) {
            console.log('DTM: _trackData: no AA tracking because of trustarc/privacy settings');
          }
          return;
        }

        var ADL = (data || {}),
            p = {},
            tl = false;

        // banner click tracking
        var a, l, ad, bid;
        if (ADL && ADL.events && ADL.events.bannerClick) {
            tl = 'o';
            // banner vars
            p.products = [];
            p.events = [];
            p.events.push('event77');
            var ad = (ADL.advertising instanceof Array) ? ADL.advertising : [];
            p.products = [];
            for (var a = 0, l = ad.length; a < l; a++) {
                var bid = ad[a].banner_id || false;
                if (bid) {
                    p.products.push(";banner click;;;;eVar77=" + bid);
                }
            }
            // banner engagement
            if (ADL.events.engagement && ADL.engagement) {
                p.events.push('event23');
                p.products.push(';;;;event23=1');
                var desc=ADL.engagement.description || '';
                var type=(ADL.engagement.type || 'click').toUpperCase();
                p.eVar44 = p.prop44 = type+'|'+desc;
                p.prop45 = location.href;
                p.eVar45 = '+' + (ADL.engagement.score || '1');
                p.prop51 = ADL.engagement.destination || 'destination not provided';
                p.prop52 = (desc.match(/^(nav_l|header|footer)/i)) ? desc : '';
            }

            p.products = p.products.join(',');
            p.events = p.events.join(',');
        }
		
        /* component tracking */
            // component impression
            var a='', l='', ad='', cid='', oid='';
            if (ADL && ADL.events && ADL.events.componentImpression) {
                //tl = 'o';
                // component vars
                p.products = [];
                p.events = [];
                p.events.push('event76');
                var ad = (ADL.personalization instanceof Array) ? ADL.personalization : [];
                p.products = [];
                for (var a = 0, l = ad.length; a < l; a++) {
                    var cid = ad[a].component_id || false;
                    var oid = ad[a].output_id || false;
                    if (cid||oid) {
                        cid=cid||'no value';
                        oid=oid||'no value';
                        p.products.push(";component_impression;;;;eVar77=" + [cid,oid].join(':'));
                    }
                }
    /*
                // component engagement
                if (ADL.events.engagement && ADL.engagement) {
                    p.events.push('event23');
                    p.products.push(';;;;event23=1');
                    var desc=ADL.engagement.description || '';
                    var type=(ADL.engagement.type || 'click').toUpperCase();
                    p.eVar44 = p.prop44 = type+'|'+desc;
                    p.prop45 = location.href;
                    p.eVar45 = '+' + (ADL.engagement.score || '1');
                    p.prop51 = ADL.engagement.destination || 'destination not provided';
                    p.prop52 = (desc.match(/^(nav_l|header|footer)/i)) ? desc : '';
                }
    */
                p.products = p.products.join(',');
                p.events = p.events.join(',');
            }
            // component click
            var a='', l='', ad='', cid='', oid='';
            if (ADL && ADL.events && ADL.events.componentClick) {
                tl = 'o';
                // component vars
                p.products = [];
                p.events = [];
                p.events.push('event77');
                var ad = (ADL.personalization instanceof Array) ? ADL.personalization : [];
                p.products = [];
                for (var a = 0, l = ad.length; a < l; a++) {
                    var cid = ad[a].component_id || false;
                    var oid = ad[a].output_id || false;
                    if (cid||oid) {
                        cid=cid||'no value';
                        oid=oid||'no value';
                        p.products.push(";component_click;;;;eVar77=" + [cid,oid].join(':'));
                    }
                }
    /*
                // component engagement
                if (ADL.events.engagement && ADL.engagement) {
                    p.events.push('event23');
                    p.products.push(';;;;event23=1');
                    var desc=ADL.engagement.description || '';
                    var type=(ADL.engagement.type || 'click').toUpperCase();
                    p.eVar44 = p.prop44 = type+'|'+desc;
                    p.prop45 = location.href;
                    p.eVar45 = '+' + (ADL.engagement.score || '1');
                    p.prop51 = ADL.engagement.destination || 'destination not provided';
                    p.prop52 = (desc.match(/^(nav_l|header|footer)/i)) ? desc : '';
                }
    */
                p.products = p.products.join(',');
                p.events = p.events.join(',');
            }

      //TrailStart tracking
        if (eventObject && eventObject.type=="TrialStart") {
            tl = 'o';
            p.events = 'event32';
						p.eVar21 = ADL.trialId;
        }
		
				//TrailFail tracking
        if (eventObject && eventObject.type=="TrialFail") {
            tl = 'o';
            p.events = 'event3';
            p.eVar54 = ADL.error;
        }
		
		    //ItemDownloadAttempt attempt tracking
        if (eventObject && eventObject.type=="ItemDownloadAttempt") {
            tl = 'o';
            p.events = 'event10';
            p.eVar5 = ADL.referrer;
            p.eVar21 = ADL.itemId;
            //SAPONEDX-18100
			        p.eVar13 = ADL.eVar13;
			     //END OF SAPONEDX-18100
        }

        // Login Event
        if (eventObject && eventObject.type=="Login") {
			  		if (ADL.onlyLoginEvent) {
								tl = 'o';
						}
            p.events = 'event8';
          	p.eVar22 = ADL.formName;
        }
      
      // Search Initiated
      if (ADL.events && ADL.events.searchInit && ADL.search.term) {
        tl = 'o';
        p.events = 'event85';
        p.prop11 = ADL.search.term.toLowerCase();
      }
      
      /*** trigger AA code ***/
        if (tl)
            s.trackData(p, tl);
        else
            s.trackData(p);
      
    } catch (e) {
        window.console&&console.error(e);
    }
};
