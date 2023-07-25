$(window).on("load", function () {
  // makes sure the whole site is loaded
  $(".loader").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(350);
  $(".banner").addClass("banner-anim");
});

const target = document.querySelectorAll(".section-head");
const banner_text = document.querySelectorAll(".banner-text");
const results = Splitting({ target: target, by: "chars" });
const resultsTwo = Splitting({ target: banner_text, by: "words" });
//const banner = document.querySelectorAll('.banner');
$(".char").each(function () {
  new Waypoint.Inview({
    element: this,
    entered: function (direction) {
      $(this.element).addClass("start");
    },
  });
});
$(".word").each(function () {
  new Waypoint.Inview({
    element: this,
    entered: function (direction) {
      $(this.element).addClass("start");
    },
  });
});

$(".shipment").hover(function () {
  $(".track").toggleClass("disable");
});
$(".track").hover(function () {
  $(".shipment").toggleClass("disable");
});

let currentCountry = document.querySelector(".current");
let countryBox = document.querySelector(".country-box");
currentCountry.addEventListener("click", function () {
  countryBox.classList.add("active");
});
document.addEventListener("click", function handleClickOutsideBox(event) {
  if (!currentCountry.contains(event.target)) {
    countryBox.classList.remove("active");
  }
});

// menu start
let hand_burger_box = document.querySelector(".hand-burger-box");
let menu_item_wraper = document.querySelector(".menu-item-wraper");
let backdrop = document.querySelector(".backdrop");
hand_burger_box.addEventListener("click", function () {
  menu_item_wraper.classList.add("active");
  backdrop.classList.add("d-block");
});
backdrop.addEventListener("click", function () {
  menu_item_wraper.classList.remove("active");
  backdrop.classList.remove("d-block");
});
var tlmenu = new TimelineMax({ paused: true });
if ($(window).width() < 991) {
  tlmenu
    .to(".menu-item-wraper", 0.3, { autoAlpha: 1 })
    .staggerFromTo(
      ".menu-item-wraper .menu-item",
      0.5,
      { y: 90, opacity: 0 },
      { y: 0, opacity: 1 },
      0.1
    );
}

$(".hand-burger-box").click(function () {
  tlmenu.play(0);
});

$(".backdrop").click(function () {
  tlmenu.reverse(0);
});
// menu end

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

AOS.init();
