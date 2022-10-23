// const { option } = require("grunt");
gsap.registerPlugin(ScrollTrigger);

/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
  let header = $(".header"),
    mobile,
    tablet;
  function cloneMenu() {
    const currentMenu = $(".header .menu .menu");
    if (currentMenu?.length > 0) {
      const cloneMenu = currentMenu.clone();
      const nav = $(".mobile-nav .inner");

      nav.append(cloneMenu);
    }
  }
  function menuMobile() {
    const nav = $(".mobile-nav"),
      btnMenu = $(".header .hamburger"),
      btnClose = $(".mobile-nav .btn-close-nav");
    btnMenu.on("click", function () {
      nav.addClass("show");
    });
    btnClose.on("click", function () {
      nav.removeClass("show");
    });
  }
  function handleScrollToSection() {
    const actionsToScroll = $("[data-scroll-to]");

    if (!actionsToScroll?.length) return;
    actionsToScroll.on("click", function (e) {
      if (!$(this).attr("href")) e.preventDefault();

      const target = $(
        `[data-target-scroll=${$(this).attr("data-scroll-to")}]`
      )[0];

      window?.scrollTo({
        behavior: "smooth",
        top: $(target).offset().top - 100,
      });
    });
  }
  function handleMenuScroll() {
    const actionsToScroll = $("#menu-hanvi-menu li a");

    if (!actionsToScroll?.length) return;
    actionsToScroll.on("click", function (e) {
      let str = $(this).attr("href");
      if (str.startsWith("#")) {
        str = str.replace("#", "");
        e.preventDefault();
      }
      const target = $(`[data-target-scroll="${str}"]`)[0];
      console.log(target, str);
      window?.scrollTo({
        behavior: "smooth",
        top: $(target).offset().top - 100,
      });
    });
  }
  function handlePageScroll() {
    $(window).on("load", function () {
      if ($(window).scrollTop() > header.height()) {
        $(".fixed-navigator").removeClass("hide");
      } else {
        $(".fixed-navigator").addClass("hide");
      }
    });
    $(window).on("scroll", function () {
      const header = $(".header");
      if ($(window).scrollTop() > header.height()) {
        $(".fixed-navigator").removeClass("hide");
      } else {
        $(".fixed-navigator").addClass("hide");
      }
    });
  }
  function handleHomeSlider() {
    console.log("first");
    const slides = $(".hero-banner .hero-banner-item");
    if (slides.length > 1) {
      console.log("first", slides.parent());
      console.log("init slider");
      slides.parent().flickity({
        // align: "center",
      });
    }
  }
  function setupCardLabel() {
    $(window).ready(function () {
      const cards = $(".card-list .card");
      const cardLabels = $(".card-list .card .card-label");
      if (cards.length > 0) {
        cards.each((i, card) => {
          const settings = $(card).find(".card-label-settings");
          settings.hide();
          const index = $(card).index();
          const background = settings.css("background-color");
          const textColor = settings.css("color");
          cardLabels
            .eq(index)
            .css({ "background-color": background, color: textColor });
        });
      }
    });
  }
  function init() {
    $("body")
      .imagesLoaded()
      .progress({ background: true }, function (instance, image) {})
      .always(function (instance) {
        cloneMenu();
        menuMobile();
        handleScrollToSection();
        handlePageScroll();
        handleHomeSlider();
        setupCardLabel();
        handleMenuScroll();

        $(".loading").addClass("--hide");
      })
      .fail(function () {
        // console.log('all images loaded, at least one is broken');
      })
      .done(function (instance) {
        // console.log('all images successfully loaded');
      });
  }
  init();
});
