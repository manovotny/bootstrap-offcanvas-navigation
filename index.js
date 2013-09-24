jQuery(document).ready(function ($) {
    
    'use strict';
  
    var ESC_KEY = 27,
        LEFT_KEY = 37,
        RIGHT_KEY = 39;  
  
    // Scroll to top.
    $('body').append('<div id="scroll-top">&#x25B2;</div>');
    $('#scroll-top').hide();
    $('#scroll-top').on('click', function () {
        $('html, body').animate(
            {
                scrollTop: 0
            },
            {
                duration: 500,
                easing: 'swing'
            }
        );
    });
    $(window).scroll(function() {
        var threshold = 600;

        if ( $(window).scrollTop() >= threshold ) {
            $('#scroll-top').fadeIn();
        } else if ( $(window).scrollTop() < threshold ) {
            $('#scroll-top').fadeOut();
        }
    });
  
    // FastClick.
    FastClick.attach($('.navbar-toggle').get(0));
/*     FastClick.attach($('.navbar-close').get(0)); */
    FastClick.attach($('.container-overlay').get(0));
    FastClick.attach($('#scroll-top').get(0));

    function hideNavigation() {
        $('body').removeClass('navbar-open');
    
        setTimeout(function () {
            $('body').removeClass('navbar-transition');
        }, 350);
    }
    
    function showNavigation() {
        $('body').addClass('navbar-open navbar-transition');
    }

    // Show navigation (click).
    $('.navbar-toggle').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        
        showNavigation();
    });        
    
    // Hide navigation (click).
    $('.navbar-close, .container-overlay').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    
        hideNavigation();
    });
});