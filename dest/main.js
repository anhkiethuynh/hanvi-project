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

	function init() {
		$("body")
			.imagesLoaded()
			.progress({ background: true }, function (instance, image) {})
			.always(function (instance) {
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
