(function($) { 
	console.log("totpjs is ok");
	// When to show the scroll link
	// higher number = scroll link appears further down the page   
	var upperLimit = 1000;
	
	// Our scroll link element
	var scrollElem = $('#totop');
   
	// Scroll to top speed
	var scrollSpeed = 500;
   
	// Show and hide the scroll to top link based on scroll position   
	scrollElem.hide();
		console.log(12);     
	$(document).scroll(function () {       
		console.log(113);     
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);