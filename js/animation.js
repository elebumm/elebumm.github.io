//All animation logic is stored in a seprate js file for convenience 

$(window).load(function() {
    "use strict";

    var fadeOutPreloder = {
        p: { //p for properties
            opacity: 0
        },
        o: { //o for options
            duration: 750,
            display: 'none'
        }
    };

    var fadeIn = {
        p: { //p for properties
            opacity: 1
        },
        o: { //o for options
            duration: 750,
        }
    };

    var scroll = {
        o: {
            duration: 500,
            easing: "easeInOutQuart"
        }
    };
    //remove preloder and animate home page in 
    $('.preloder').velocity(fadeOutPreloder.p, fadeOutPreloder.o);

    //Home section
    var homeInSequence = [{
        e: $('.home h1'),
        p: fadeIn.p,
        o: fadeIn.o
    }, {
        e: $('.home h2'),
        p: fadeIn.p,
        o: fadeIn.o
    }, {
        e: $('#booknow'),
        p: fadeIn.p,
        o: fadeIn.o
    }, {
        e: $('.scroll-down'),
        p: fadeIn.p,
        o: fadeIn.o
    }];

    $(".logo").css("opacity", "0");
    $(".home h1").css("opacity", "0");
    $(".home h2").css("opacity", "0");
    $(".scroll-down").css("opacity", "0");

    setTimeout(function() {
        $.Velocity.RunSequence(homeInSequence); //home page loads in
    }, 750);
    $(".scroll-down a").on('click', function() {
        $(".about").velocity("scroll", scroll.o);
    });

});
