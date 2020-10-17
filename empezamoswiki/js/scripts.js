/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */

    // Accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
      }
    }


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
    document.getElementById("description_container").style.display = "none";
    var h_abs = document.documentElement.scrollHeight - document.documentElement.clientHeight + $("#description_container").height() - document.getElementById("description-section").scrollHeight - document.getElementById("footer_id").scrollHeight;
    var h_footer = document.documentElement.scrollHeight - document.documentElement.clientHeight - document.getElementById("footer_id").scrollHeight;

    $(window).scroll(function(){ 
        if($(window).scrollTop()<h_abs){ 
            $("#description_container").fadeOut();
        }else if($(window).scrollTop()>h_footer){ 
            $("#description_container").fadeOut();
            
        }else{
            $("#description_container").fadeIn();
        }
    
    });



    // Make anchor link go some pixels above where it's linked to
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 110);
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


        //Text segment select functionality
        $(".text-segment-select-item").on('click', function (event) {

            var selectID = $(this).attr('id');
            $(".text-segment-select-item").css({'background-color': '#f1f1f1'});
            
            if (selectID == "select-sleeve") {
                $("#select-sleeve").css({'background-color': '#e1e1e1'});
                
                $("#select-sleeve-2").show();
                $("#select-fluidic-2").hide();
                $("#select-electronic-2").hide();
                
            } else if (selectID == "select-fluidic") {
                $("#select-fluidic").css({'background-color': '#e1e1e1'});
                
                $("#select-sleeve-2").hide();
                $("#select-fluidic-2").show();
                $("#select-electronic-2").hide();
                
            } else if (selectID == "select-electronic") {
                $("#select-electronic").css({'background-color': '#e1e1e1'});
                
                $("#select-sleeve-2").hide();
                $("#select-fluidic-2").hide();
                $("#select-electronic-2").show();
                
            }
            
            AOS.refresh();
    
        });


})(jQuery); // End of use strict


