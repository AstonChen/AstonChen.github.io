(function($) {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    var upperLimit = 1000;

    // Our scroll link element
    var scrollElem = $('#totop');

    // Scroll to top speed
    var scrollSpeed = 1600;

    // Show and hide the scroll to top link based on scroll position
    scrollElem.hide();
    $(window).scroll(function () {
        scrollElem.show();
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){
        $('.body-wrap').animate({scrollTop:0}, scrollSpeed); return false;
    });
})(jQuery);