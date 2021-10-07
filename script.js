
$(function () {

    /* Fixed Header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPoss = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPoss, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPoss = $(this).scrollTop();
        

        checkScroll(scrollPoss, introH);
       

    });

    function checkScroll(scrollPoss, introH) {
        if (scrollPoss > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth Scroll */

    $("[data-scroll]").on("click", function (event) {

        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -70

        }, 700);

    });



    /* Nav Toggle */


   navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");


    });




});