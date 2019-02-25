// Scroll to top button
var btn = $("#back-top");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

/*     btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '100');
    }); */

// Owl Carousel
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: false,
  center: true,
  margin: 12,
  URLhashListener: true,
  autoplay: false,
  startPosition: "URLHash",
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
  menuItems[i].addEventListener("click", function() {
    toggleModal();
    setModal(this);
  });
}

// Aniamtion

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 150, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true // reset animation on end (default is true)
});
wow.init();
