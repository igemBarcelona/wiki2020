/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */


    (function ($) {
    "use strict"; // Start of use strict



    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Table of contents
    document.getElementById("description_container").style.display = "none"
    $(window).scroll(function(){
        if($(window).scrollTop()<600){ // Change depending on intro photo length
            $("#description_container").fadeOut();
        }else if($(window).scrollTop()>2700){ // Change depending on page length
            $("#description_container").fadeOut();
        }else{
            $("#description_container").fadeIn();
        }
    
    });




    $(document).ready(function() {

        var getMax = function() {
            return $(document).height() - $(window).height();
        }
    
        var getValue = function() {
            return $(window).scrollTop();
        }
    
        if ('max' in document.createElement('progress')) {
            var progressBar = $('progress');
            
            progressBar.attr({
                max: getMax()
            });
    
            $(document).on('scroll', function() {
                progressBar.attr({
                    value: getValue()
                });
            });
    
            $(window).resize(function() {
                
                progressBar.attr({
                    max: getMax(),
                    value: getValue()
                });
            });
    
        } else {
    
            var progressBar = $('.progress-bar'),
                max = getMax(),
                value, width;
    
            var getWidth = function() {
                
                value = getValue();
                width = (value / max) * 100;
                width = width + '%';
                return width;
            }
    
            var setWidth = function() {
                progressBar.css({
                    width: getWidth()
                });
            }
    
            $(document).on('scroll', setWidth);
            $(window).on('resize', function() {
                
                max = getMax();
                setWidth();
            });
        }
    });




})(jQuery); // End of use strict


