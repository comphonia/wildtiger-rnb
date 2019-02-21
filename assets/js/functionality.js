
    // Scroll to top button
    var btn = $('#back-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

/*     btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '100');
    }); */

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 12,
        URLhashListener: true,
        autoplay: false,
        startPosition: 'URLHash',
        touchDrag: false,
        mouseDrag: false
    });

