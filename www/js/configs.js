<!--disable pushState to avoid problems with URL managment-->

$(document).bind("mobileinit", function(){
	$.support.cors=true;
	$.mobile.allowCrossDomainPages=true;
	$.mobile.pushState=false;
	$.mobile.phonegapNavigationEnabled = true;
	if (navigator.userAgent.indexOf("Android") != -1){
      $.extend(  $.mobile , {
          defaultPageTransition: 'none'
      });   
    }	
});


