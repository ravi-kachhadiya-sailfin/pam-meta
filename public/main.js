
/* for slider */
(function () {
    'use strict';

    var init = function () {                
        var slider2 = new rSlider({
            target: '#slider2',
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            range: false,
            set: [3],
            tooltip: true,
            labels: true,
            onChange: function (vals) {
                // console.log(vals);
            }
        });
    };
    window.onload = init;
})();
/* for slider */




/* for carousel */
$(document).ready(function(){
   var testimonial =  $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });


    var banner = $("#banner-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:500,
        autoPlay:true
    });

    // Custom Navigation Events
    $(".next").click(function(){
      testimonial.trigger('owl.next');
    });
    $(".prev").click(function(){
      testimonial.trigger('owl.prev');
    });

/* for carousel */



    $(".video-play").on('click', function(e) {
        e.preventDefault(); 
        var vidWrap = $(this).parent(),
            iframe = vidWrap.find('.video iframe'),
            iframeSrc = iframe.attr('src'),
            iframePlay = iframeSrc += "?autoplay=1";
        vidWrap.children('.video-thumbnail').fadeOut();
        vidWrap.children('.video-play').fadeOut();
        vidWrap.find('.video iframe').attr('src', iframePlay);
    });
});