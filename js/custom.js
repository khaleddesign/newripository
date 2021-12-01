
$(function () {
    'use strict';

    var x       = $(window).height(),
        y       = $('.top-navbar').innerHeight(),
        z       = $('.navbar').innerHeight();

        $('.slider, .carousel-item').height( x - ( y + z ));





  
});