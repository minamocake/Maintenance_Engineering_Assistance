_satellite.pushBlockingScript(function(event, target, $variables){
  /*
There isn't aem code on test page to trigger the AA call 
so here is a separate tag to do it
 */
try {
  
  if ( location.pathname.match(/\/dmc\/testing\/gtm[0-9]+\.html/) ) {
    
      s_aaTrigger();
    
  }
  
} catch(e){window.console&&console.error(e);};
});
