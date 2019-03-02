//Preloader
$(window).on('load', function () {
    $('.loader .loader-guts').delay(900).fadeOut(1500, function () {
        $('.loader').fadeOut(900);
        $('html').removeClass('loadbody');
    });
});

// Scroll to top button
var btn = $('#back-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});


//Swap menu active btn
var menubtns = $('.menu-nav ');
menubtns.click(function () {
    menubtns.removeClass('active').removeClass('nohover')
    $(this).addClass('active').addClass('nohover')
})


setTimeout(function () { // Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 12,
        URLhashListener: true,
        autoplay: false,
        startPosition: 'URLHash',
        touchDrag: false,
        mouseDrag: false,
        autoHeight: true
    });
}, 1000);
