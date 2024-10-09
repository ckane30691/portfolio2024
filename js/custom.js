(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();
    

    $('.portfolio-item-img').mouseenter((e) => {
      e.currentTarget.children[1].style.opacity=1;
      e.currentTarget.children[0].style.filter="grayscale(100%)";
    })

    $('.portfolio-item-img').mouseleave((e) => {
      e.currentTarget.children[1].style.opacity=0;
      e.currentTarget.children[0].style.filter="grayscale(0%)";
    })

})(jQuery);
