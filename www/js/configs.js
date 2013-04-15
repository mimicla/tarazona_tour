<!--disable pushState to avoid problems with URL managment-->

$(document).bind("mobileinit", function(){
	$.support.cors=true;
	$.mobile.allowCrossDomainPages=true;
	$.mobile.pushState=false;
	$.mobile.phonegapNavigationEnabled = true;
});
