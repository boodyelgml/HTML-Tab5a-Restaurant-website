$(document).ready(function () {
    // ******************************owl carousel customization***********************************
    $(".owl-carousel").owlCarousel({
        items: 1
        , rtl: true
        , loop: true
        , nav: true
        , animateOut: 'fadeOut'
        , autoplay: true
        , autoplayTimeout: 2300
    , });
    // ******************************slider height***********************************
    
    $(window).on("resize , load", function () {
            if ($(window).innerWidth() >= 767) {
               $(".owl-carousel").height($(window).height() - ($(".navbar-search").height()));
                $(".owl-carousel img").height($(window).height() - ($(".navbar-search").height()) + (200));
            }else{
                  $(".owl-carousel").height(($(window).height() - ($(".navbar-search").height())) / 1.5);
                $(".owl-carousel img").height(($(window).height() - ($(".navbar-search").height()) + (200)) / 1.5);
            }
           
        })
        // ******************************smooth scroll***********************************
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } // End if
    });
    // ******************************NAVBAR***********************************
});