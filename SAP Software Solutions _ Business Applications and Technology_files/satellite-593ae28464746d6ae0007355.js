try {
if (window.lpTag&&window.lpTag.events) {
  lpTag.events.bind({
    eventName : '*',
    func: function(data, eventInfo) {
        var log=function() {
          if (
            location.search.match(/[&?]debug=/)
            //||_satellite.settings.isStaging
          ) console.log.apply(this,['DTM: LIVEPERSON_FULL_DEBUG: '].concat([].slice.call(arguments)));
            
        };
        var eventInfo=eventInfo||{};
        var data = data||{};
        log('data: ',data);
        log('eventInfo: ',eventInfo);
        log('arguments: ',arguments);
        log('*****************************');
    } // end func
  }); // end lpTag.events.bind
}
} catch(e) { console.log('DTM: ERROR: ',e); }
