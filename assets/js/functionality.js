        // Animation

        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 70, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null, // optional scroll container selector, otherwise use window,
            resetAnimation: true, // reset animation on end (default is true)
        });

        //Preloader
        $(window).on('load', function () {
            $('.loader .loader-guts').delay(900).fadeOut(1500, function () {
                $('.loader').fadeOut(100);
                $('html').removeClass('loadbody');
                wow.init();
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


        // Owl Carousel
        function initOwl() {
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
                autoHeight: true,
                nav: false
            });
        }

        //some audit stuff
        jQuery.event.special.touchstart = {
            setup: function (_, ns, handle) {
                if (ns.includes("noPreventDefault")) {
                    this.addEventListener("touchstart", handle, {
                        passive: false
                    });
                } else {
                    this.addEventListener("touchstart", handle, {
                        passive: true
                    });
                }
            }
        };
