try {
  console.log('DTM: Video Config Called');  
/* Video Variable Mapping */
        s.enableVideoTracking=true;
        if(s.enableVideoTracking){
        s.loadModule("Media")
        s.Media.autoTrack=false;
        s.Media.trackWhilePlaying=true;
        s.Media.trackVars="events,prop9,eVar9,eVar48,eVar5,eVar21,prop44,eVar44,prop45,eVar45,prop50,events,products,prop56,eVar56,eVar57,eVar58,prop72,eVar92,channel,server";
        s.Media.trackEvents="event9,event23,event53,event54,event55,event56,event57,event58,event59,event200"; 

        s.Media.trackMilestones="25,50,75";
        s.Media.segmentByMilestones = true;
        s.Media.trackUsingContextData = true;
        s.Media.contextDataMapping = {
          "a.media.name":"eVar56,prop56",
          "a.media.segment":"eVar57",
          "a.media.timePlayed":"event57",
          "a.media.view":"event23,event56,event9,event200", 
          "a.media.segmentView":"event58",
          "a.media.complete":"event59,event200",
          "a.media.milestones":{
             25:"event53,event200", 
             50:"event54,event200",
             75:"event55,event200" 
            }
          }
        };

		    s.Media.closingTracked = false;
        s.Media.monitor = function (s,media) {			
          // fix: values carrying over from other clicks/events..
          s.eVar21 = ''; s.events='';
          /* bandaid: pop v5 with referrer if assetdetail page */
          var v5 = location.href;
          if ( 
            location.pathname.match(/\/assetdetail\//) 
             || 
            location.hash.match(/#video=/)
          ) {
            if ( document.referrer ) {
                v5 = s._isNotSAPReferrer(document.referrer) && 'External Referrer' || document.referrer;
              } else {
                v5 = 'Referrer Not Available';  
              }
          }      
          console.log('DTM: Media.monitor: v5: ',v5);
          if (s.Media&&s.Media.dataLayer&&s.Media.dataLayer.eVar21) {
              s.Media.dataLayer.eVar21=s.Media.dataLayer.eVar21.replace(/^sap:/,'');              
          }
          /* bandaid: undefined value is passed to s.Media for frontpage video. Dupe from v21*/
          //console.log('media.name (1):',media.name);
          //if (media.name=='sap:undefined') {
              //media.name='sap:'+s.Media.dataLayer.eVar21;
          //}
          //console.log('media.name (2):',media.name);

          if (media.event == "OPEN") {
                s.Media.closingTracked = false;
				        s.products = s.apl(s.products,";;;;event23=1",',',2);
                //-------------SAPONEDX-17329------------------
                if (s.Media.dataLayer&&s.Media.dataLayer.eVar13) {
                    s.eVar13 = s.Media.dataLayer.eVar13;
                    s.Media.trackVars+=',eVar13';              
                }
                s.eVar5 =s.prop45 = s.eVar5 || v5;
                //-------------END OF SAPONEDX-17329-----------
                s.eVar45="+1";
                s.eVar21 = 'sap:'+s.Media.dataLayer.eVar21;
                console.log('eVar21: ',s.eVar21);
                // if this is a gated asset, only pop e9 (not e10)
                if (s.Media.dataLayer&&s.Media.dataLayer.isGated==true) {
                    // do nothing; this is already configured in "a.media.view" above
                } else {
                    // stuff from "a.media.view" already gets set. Throw e10 into mix
                    s.events='event10,event99';
                    s.Media.trackEvents+=',event10,event99';
                }
                s.consoleLog('Media.dataLayer: ',s.Media.dataLayer);
                s.consoleLog('Media.trackEvents: ',s.Media.trackEvents);
                s.consoleLog('Media.trackVars: ',s.Media.trackVars);
                s.consoleLog('events: ',s.events);

                s.eVar58 = media.playerName; 
                s.prop44 = s.eVar44 = "VID|Play";  
//console.log('media.name ('+media.event+'):',media.name);
                s.Media.trackX(media.name);
                //-------------CLEAR eVar13 SAPONEDX-17329------------------
                s.prop44 = s.eVar44 = s.prop45 = s.eVar45 = s.products = s.eVar13 = "";  
            };
            if (media.event == "MILESTONE" || media.event == "PLAY" || media.event == "STOP" || media.event=="COMPLETE") {				
                s.eVar5 = s.eVar5 || v5;
                //s.eVar21 = s.Media.dataLayer.eVar21;
                console.log('eVar21: ',s.eVar21);
                s.eVar58 = media.playerName;
                //var mediaName = media.name;
//s.prop56=s.eVar56 = media.name;
//console.log('media.name ('+media.event+'):',media.name);
                s.Media.trackX(media.name);				
            };
            if (media.event == "CLOSE") {				
              if(!s.Media.closingTracked){					
                s.eVar5 = s.eVar5 || v5;
                //s.eVar21 = s.Media.dataLayer.eVar21;
                console.log('in CLOSE eVar21: ',s.eVar21);
                s.eVar58 = media.playerName;
                //var mediaName = media.name;
                s.Media.closingTracked = true;
                s.openEventTriggered=false;
//s.prop56=s.eVar56 = media.name;
//console.log('media.name ('+media.event+'):',media.name);
                s.Media.trackX(media.name);					
              }
            };
          
        };  
  
} catch (e) {
  console.log(e); 
}
