(function ($) {
    'use strict';

    // 1.0 Fullscreen Code

    $(window).on('resizeEnd', function () {
        $(".welcome_area, .welcome_slides .single_slide, .single_slide, .coming-soon-area").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // 2.0 search box active code
    var mainMenu = $(".main_menu_area .search_button");
    mainMenu.on('click', function () {
        $("#search").css('transform', 'scale(1,1)');
        $(".search_box_area").css({
            "transform": "scale(1,1)",
            "transition-delay": "1200ms"
        });
    });

    var btnSearch = $("#close_button");
    btnSearch.on('click', function () {
        $("#search").css('transform', 'scale(1,0)');
        $(".search_box_area").css({
            "transform": "scale(1,0)",
            "transition-delay": "0ms"
        });
    });

    // 3.0 color changer active code
    var color1 = $("#color_1"),
        color2 = $("#color_2"),
        color3 = $("#color_3"),
        color4 = $("#color_4");
    color1.on('click', function () {
        $('body').removeClass('color_1 color_2 color_3');
    });

    color2.on('click', function () {
        $('body').addClass('color_1').removeClass('color_2 color_3');
    });

    color3.on('click', function () {
        $('body').addClass('color_2').removeClass('color_1 color_3');
    });

    color4.on('click', function () {
        $('body').addClass('color_3').removeClass('color_1 color_2');
    });

    // 3.0 magnific-popup active code 
    var mgPopup = $('.magnific-popup');
    mgPopup.magnificPopup({
        type: 'image'
    });

    var btnVideo = $('.video_btn');
    btnVideo.magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });

    // 4.0 counterup active code
    var counterCs = $('.counter');
    counterCs.counterUp({
        delay: 10,
        time: 3000
    });

    // 5.0 team slider active code
    var testiCs = $(".testimonials");
    testiCs.owlCarousel({
        items: 3,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // 6.0 team slider active code
    var testiCs2 = $(".testimonials_home2");
    testiCs2.owlCarousel({
        items: 2,
        margin: 50,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    // 7.0 scrollUp active code
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 450,
        scrollFrom: 'top',
        scrollSpeed: 500,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="fa fa-angle-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // 8.0 meanmenu active code
    $('.main_menu_area .mainmenu nav').meanmenu();

    // 9.0 wow active code
    new WOW().init();

    // 10.0 PreventDefault a click
    var aClick = $("a[href='#']");
    aClick.on('click', function ($) {
        $.preventDefault();
    });

    // 11.0 countdown active code
    var countDownCs = $('[data-countdown]');
    countDownCs.each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).find(".days").html(event.strftime("%D"));
            $(this).find(".hours").html(event.strftime("%H"));
            $(this).find(".minutes").html(event.strftime("%M"));
            $(this).find(".seconds").html(event.strftime("%S"));
        });
    });

    // 12.0 Preloader active code
    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // 13.0 Contact form

    var submitContact = $('#submit_contact'),
    message = $('#success_fail_info');

    submitContact.on('click', function(e) {
        e.preventDefault();

        var $this = $(this);

        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#main_contact_form').serialize(),
            success: function(data) {

                if (data.info !== 'error') {
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });

})(jQuery);