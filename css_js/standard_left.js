$(document).ready(function() {
	

var scrollBottom = $(document).width() ;

$("body").scrollLeft(scrollBottom);
$("body").animate({ scrollLeft:scrollBottom }, "fast"); 
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft += (delta * 60);
        e.preventDefault();
    });
});