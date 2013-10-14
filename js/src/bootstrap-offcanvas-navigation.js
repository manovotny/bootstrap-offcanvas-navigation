(function ($) {

    'use strict';

    $(function () {

        function initializeFastClickFor(selector) {
            var $element = $(selector);

            if ($element.length) {
                try {
                    FastClick.attach($element.get(0));
                } catch (ignore) {
                    // User is not using FastClick.
                }
            }
        }

        function handleFastClick() {
            initializeFastClickFor('.navbar-toggle');
            initializeFastClickFor('.navbar-close');
            initializeFastClickFor('.container-overlay');
        }

        function showNavigation() {
            $('body').addClass('navbar-open navbar-transition');
        }

        function handleShowNavgation() {
            $('.navbar-toggle').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                showNavigation();
            });
        }

        function hideNavigation() {
            $('body').removeClass('navbar-open');

            setTimeout(function () {
                $('body').removeClass('navbar-transition');
            }, 350);
        }

        function handleHideNavigation() {
            $('.navbar-close, .container-overlay').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                hideNavigation();
            });
        }

        handleFastClick();
        handleShowNavgation();
        handleHideNavigation();

    });

}(jQuery));