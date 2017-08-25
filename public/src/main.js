$(function (){

    $('body').on('click','.nav-button',function(){
        $('body').toggleClass('nav-exposed');
    });

    $('#loader-wrapper').on('click',function(){
        setTimeout(function(){
            $("body").addClass("loaded");
        }, 3000);
    });

    
    function fadeinout(){
        var controller = $.superscrollorama();
        controller.addTween('#intro-block .container', TweenMax.from( $('#intro-block .container'), 2, {css:{opacity:0}, ease:Quad.easeOut}));
        controller.addTween('#services-block .container', TweenMax.from( $('#services-block .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
        controller.addTween('#packages-block .container', TweenMax.from( $('#packages-block .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));
        controller.addTween('#portfo-block .container', TweenMax.from( $('#portfo-block .container'), 1.5, {css:{opacity:0}, ease:Quad.easeOut}));

    }
    var origHeight = $(window).height();
    var origwith = $(window).width();
    if (origwith < 768){
        $('body').addClass('nav-exposed');
    }
    $(window).bind("load", function() {
        $(".swiper-container").height(origHeight);
        $(".swiper-wrapper > .swiper-slide").height(origHeight);
        $("body").addClass("loaded");
    });
    
//    $(".slider-wrapper > .slide").css('bottom','0');
    $(window).resize(function(){

        var bodyheight = $(window).height();
        var bodywith = $(window).width();


        $(".swiper-container").height(bodyheight);
        $(".swiper-wrapper > .slide").height(bodyheight);
//        $(".slider-wrapper > .slide").css('bottom','0');
        if (bodywith < 768){
            $('body').addClass('nav-exposed');
        }


    });


    var isRevealed=false;
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $('#back-to-top').fadeIn();
            $('.main-menu').addClass('main-menu-shrink');
        } else {
            $('#back-to-top').fadeOut();
            $('.main-menu').removeClass('main-menu-shrink');
        }
        if ($(this).scrollTop() > 1 ) {
            $('.scrollanim').addClass('modify');
            isRevealed = true;
        } else{
            $('.scrollanim').removeClass('modify');
            isRevealed = false;
        }
    });
    
    $('body').on('click','.trigger',function(){
        $('.scrollanim').addClass('modify' );
    });
    $('#back-to-top').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    $('#loader-wrapper').on('click',function(){
        setTimeout(function(){
            $("body").addClass("loaded");
        }, 3000);
    });

        
    });