$(document).ready(function(){
	 $("img.large").hide();
	 $('div.shader').hide();
    $("figure").click(function(){
		 $('div.shader').show();
        $("img.large").show(speed='fast');
    });
	    $(".notice").click(function(){
		 $('div.shader').show();
        $("img.large").show(speed='fast');
    });
	    $("img.large").click(function(){
		 $('div.shader').hide();
        $("img.large").hide(speed='fast');
    });
});