// const { option } = require("grunt");
gsap.registerPlugin(ScrollTrigger);

/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
	let header = $(".header"),
		mobile,
		tablet;

	// DETECT DEVICE
	// let md = new MobileDetect(window.navigator.userAgent);
	// function mobileDetect() {
	//     if (md.mobile() != null || md.tablet() != null) {
	//         mobile = true
	//         tablet = true
	//     } else {
	//         mobile = false
	//         tablet = false
	//     }
	// }
	// mobileDetect();
	function cloneMenu() {
		const currentMenu = $(".header .menu .menu-wrap");
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
	function init() {
		$("body")
			.imagesLoaded()
			.progress({ background: true }, function (instance, image) {})
			.always(function (instance) {
				cloneMenu();
				menuMobile();
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

