$(document).ready(function(){
	 $("img.large").hide();
	 $('div.shader').hide();
    $("img.padr").click(function(){
		 $('div.shader').show();
        $("img.large").show(speed='fast');
    });
	    $("img.large").click(function(){
		 $('div.shader').hide();
        $("img.large").hide(speed='fast');
    });
});