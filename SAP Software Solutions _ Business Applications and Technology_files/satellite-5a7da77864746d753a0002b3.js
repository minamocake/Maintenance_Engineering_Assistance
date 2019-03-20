function SCIMessageHandler(event) {
  if (event.origin.indexOf("https://accounts400.sap.com") !== 0 && event.origin.indexOf("https://accounts.sap.com") !== 0)
    return;
  
  //console.log("****SCIMessageHandler event:*****");
  //console.log(event);
  if(event.data=='SAPFrameProtection*require-origin') {
     event.source.postMessage('SAPFrameProtection*parent-origin','*');
  } else if (event.data) {
     try {
       var message = JSON.parse(event.data);
       //console.log("****SCI message:*****");
       //console.log(message); 
       if (message && message.page == "ids-registration/new") { // && message.action == "resize") { //&& message.action == "ready"
         //top.location.href = message.iframeURL; 
         //hide the left registration form
         //expand the login form to cover the whole lightbox
         //console.log("****updating css*****")
         $('.responsiveColumnControl-colctrl-col-34').css('width','100%')
				 $('.responsiveColumnControl-colctrl-col-66').css('display','none')
				 $('.form-login-iframe').css('height',message.height || '700px')
				 $('.form-login-iframe').css('max-width','100%')
         
         $('.forgotPasswordLink').hide()
       }
     } catch(e) {
        console.log(e); 
     }
  }
}

window.addEventListener("message", SCIMessageHandler, false);


