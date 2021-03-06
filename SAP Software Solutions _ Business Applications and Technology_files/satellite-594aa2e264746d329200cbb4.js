(function () {
    var social_sites = {
        "delicious": {
            "share_url": "https://delicious.com/post?url=",
            "title_name": "title",
            "content_name": "notes",
	    "fa_char": "fa-delicious"
        },
        "facebook": {
            "share_url": "https://facebook.com/sharer.php?u=",
            "width": "550",
            "height": "270",
            "fa_char": "fa-facebook",
			"fa_char_lightbox": "fa-facebook-square"
        },
        "google_plusone_share": {
            "share_url": "https://plus.google.com/share?url=",
	    "fa_char": "fa-google-plus",
		"fa_char_lightbox": "fa-google-plus-square"
        },
        "linkedin": {
            "share_url": "https://linkedin.com/shareArticle?url=",            
            "fa_char": "fa-linkedin",
			"fa_char_lightbox": "fa-linkedin-square"
        },
        "pinterest": {
            "share_url": "https://pinterest.com/pin/create/bookmarklet?url=",
            "title_name": "description",
            "fa_char": "fa-pinterest"
        },
        "renren": {
            "share_url": "http://widget.renren.com/dialog/share?link=",
            "title_name": "title",
            "content_name": "description",
            "fa_char": "fa-renren"
        },
        "reddit": {
            "share_url": "https://reddit.com/submit?url=",
            "title_name": "title",
            "fa_char": "fa-reddit"
        },
        "twitter": {
            "share_url": "https://twitter.com/intent/tweet?url=",
            "width": "550",
            "height": "450",
            "title_name": "text",
            "fa_char": "fa-twitter"
        },
        "weibo": {
            "share_url": "http://service.weibo.com/share/share.php?url=",
            "title_name": "title",
            "fa_char": "fa-weibo"
        },
        "vk": {
            "share_url": "http://vk.com/share.php?url=",
            "fa_char": "fa-vk"
        },
        "xing": {
            "share_url": "https://www.xing.com/spi/shares/new?url=",
            "fa_char": "fa-xing"
        },
        "email": {
            "share_url": "mailto:?body=",
            "fa_char": "fa-envelope"
        }
    };

    var default_width = 550, default_height = 450;
    var default_channel = "unknown";
		var sharing_params={};	
	
    $(document).on("click", "a[class^=share_button]:not(.footer-standard a)", function (e) {
        e.preventDefault();
        var channel = $(this).data("share-channel") || default_channel;  
        var url = $(this).attr("data-share-url");
      
        if (url && $(this).data("add-hash")) {
			     url = url + window.location.hash;
		    }
		
		//trigger an event
        var data = { "channel": channel, "url": url };
		handle_share_button (channel, url, function(args){			
			if(args.url){
				window.open(args.url, args.target, args.size);
			}
		});
        
    });

	function handle_share_button (channel, url, processRedirect, title){
        title = title || document.title;
        var site = social_sites[channel];   
		
		    var width = default_width;
        var height = default_height;

        if (site) {

            if (!url) url = window.location.href;

            url = site["share_url"] + encodeURIComponent(url);

            if (site["title_name"])
                url += "&" + site["title_name"] + "=" + encodeURIComponent(title);

            width = site["width"] || width;
            height = site["height"] || height;
        }      

		sharing_params.target = "_blank";
		sharing_params.size = "width=" + width + ",height=" + height;
		sharing_params.url = url;
		processRedirect(sharing_params);            
	}	   

    $(document).on("InVideoSocialShare", handle_social_share_video_event);

    //InVideoSocialShare handler
    function handle_social_share_video_event(e) {
		handle_share_button (e.message.kind, e.message.url, function(args){
			if(args.url){				
				if(e.message.kind == 'email' ){
					window.location.href = args.url;	
				} else {
					window.open(args.url, args.target, args.size);		
				}				
			}
      
      if (typeof s_trackShare == 'function') {
				s_trackShare(e.message.kind, '', e.message.url);
			} else {
				console.log('s_trackShare() not defined');
			}		
		}, e.message.title);
        
    }
  
  function resolveAwesomeFont(channel, fa_char_property) {
	  var upperChannel = channel.toUpperCase();
	    for (var ch in social_sites) {
              if (ch.toUpperCase() === upperChannel)
	        return fa_char_property(ch);
      }
  }

   window.getAwesomeFontName = function(channel) {
	   return resolveAwesomeFont(channel, function(ch){
		  return   social_sites[ch].fa_char;
	   });
   }
   
   window.getLightboxAwesomeFontName = function(channel) {
      return resolveAwesomeFont(channel, function(ch){
		  return social_sites[ch].fa_char_lightbox || social_sites[ch].fa_char;
	   });
   }
   
  setTimeout(function(){
    $(function(){$("body").off("click","a[data-share-tracking-analytics]");});
		$("body").off("click","a[data-share-tracking-analytics]");
    
    $(function(){
      $("body").on("click","a[data-share-tracking-analytics]",function() {
        try {
          var b = $(this).data("share-tracking-analytics");
          var c = $(this).data("share-channel");
          var channel = c == "mailto" ? "email" : c;
          var href = !!this.href ? this.href :  $(this).attr('data-share-url');
          s_trackShare(channel, "1", href, b);
        }
        catch(d){console.error("Share Tracking: "+d)}
      });
    });
    
     $.event.trigger({
                type: "ShareCodeLoaded",
                message: {},
                time: new Date()
 			});
    
  }, 0);
  
})();

