try {
  
if ('function'===typeof jQuery) {
    jQuery(document).on('ItemDownloadAttempt',function(event, args) { 
      if (_satellite.settings.isStaging||_satellite.settings.notifications) {
        console.log("DTM: ItemDownloadAttempt: arguments: ",args);
      }
	  _trackData(args, null, event);
    });
	
	jQuery(document).on('TrialStart',function(event, args) { 
      if (_satellite.settings.isStaging||_satellite.settings.notifications) {
        console.log("DTM: TrialStart: arguments: ",args);
      }
	  _trackData(args, args.initialClickEvent, event);
    });
	
	
	jQuery(document).on('TrialFail',function(event, args) { 
      if (_satellite.settings.isStaging||_satellite.settings.notifications) {
        console.log("DTM: TrialFail: arguments: ",args);
      }
	  _trackData(args, null, event);
    });
  
	jQuery(document).on('Login',function(event, args) {
			if (_satellite.settings.isStaging||_satellite.settings.notifications) {
		  	console.log("DTM: Login: arguments: ", args);
			}
		_trackData(args, null, event);
   	});
  
  //-------------SAPONEDX-17198------------
	jQuery(document).on('searchInitiated',function(event, args) { 
     if (_satellite.settings.isStaging||_satellite.settings.notifications) {
     		console.log("DTM: searchInitiated: arguments: ",args);
     }
	   _trackData(args, null, event);
  });
  //------------END OF SAPONEDX-17198--------
  
  window.SAP = window.SAP || {};
	SAP.dataLayerEventCatcherInitialized = true;
	var dataLayerTrackingEvent = document.createEvent("CustomEvent");
	dataLayerTrackingEvent.initCustomEvent("dataLayerEventCatcherInitialized", true, true, {});
	document.dispatchEvent(dataLayerTrackingEvent);
}

}catch(e){console.log(e);}
