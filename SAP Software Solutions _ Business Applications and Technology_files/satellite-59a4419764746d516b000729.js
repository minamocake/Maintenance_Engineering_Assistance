try {
  
if ('function'===typeof jQuery) {
    jQuery(document).on('BannerClick',function(event, args) { 
      if (_satellite.settings.isStaging||_satellite.settings.notifications) {
        console.log("DTM: BannerClick: arguments: ",arguments);
        console.log("DTM: BannerClick: event:", event); 
        console.log("DTM: BannerClick: event.currentTarget:", event.currentTarget); 
        console.log("DTM: BannerClick: args:", args); 
      }
      _trackData(args, args.initialClickEvent, event);
    });
}

}catch(e){console.log(e);}
