_satellite.pushBlockingScript(function(event, target, $variables){
  try {
    var globalMboxName = 'sap_global_target',
        mboxParams = {};
    if(typeof adobe === 'object' && typeof adobe.target === 'object') {
        adobe.target.getOffer({
            mbox: globalMboxName,
            params: mboxParams || {},
            success: function(offer) {
                adobe.target.applyOffer({
                    mbox: globalMboxName,
                    offer: offer
                });
                if(document.readyState !== "loading" && typeof window.picturefill === 'function') {
                    window.picturefill();
                }
            },
            error: function(status, error) {
                _satellite.notify('Target error:' + status + ' ' + error, 5);
                if(error === "disabled due to optout") {
                    /* Show the original content if opted out of tracking */
                    var style = document.createElement("style");
                    style.type = "text/css";
                    style.innerHTML = ".mboxDefault { visibility: visible !important; }";
                    document.getElementsByTagName('head')[0].appendChild(style);
                }
            },
            timeout: function() {
                _satellite.notify('Target timeout', 5);
            }
        });
    } else {
        _satellite.notify('Target library not loaded', 4);
    }
} catch(e) {
    _satellite.notify(e.message, 5);
}
});
