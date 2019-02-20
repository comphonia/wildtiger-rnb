$(document).ready(function () {


    // Scroll to top button
    var btn = $('#back-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '100');
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 12,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        touchDrag: false,
        mouseDrag: false
    });

    //Modal
    var body = document.querySelector("body");
    var modal = document.querySelector("#modal");
    var modalOverlay = document.querySelector("#modal-overlay");
    var closeButton = document.querySelector("#close-button");
    var menuItems = document.querySelectorAll(".menu-item");

    // toggleModal();

    function toggleModal() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
     //   body.classList.toggle("modal-open");
    }

    closeButton.addEventListener("click", () => toggleModal());

    modalOverlay.addEventListener("click", () => toggleModal());

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", () => toggleModal());
    }


})
