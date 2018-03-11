$(document).ready(function(){

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// OPENING SECTION //
var tween = new TimelineMax ()
.add([
	TweenMax.fromTo(".zelda", 1, {scale: 1, autoAlpha: 1, top: 1}, {top: -1000, ease: Linear.easeNone}),
	TweenMax.fromTo(".flisiuk", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -3000, ease:Linear.easeNone}),
  TweenMax.fromTo(".tree-square", 1, {scale: 1, autoAlpha: 1, top: 1}, {top: 1000, ease:Linear.easeNone}),
  TweenMax.fromTo(".description", 1, {scale: 1, autoAlpha: 1, top: 1}, {top: -200, ease:Linear.easeNone}),
  TweenMax.fromTo(".title", 1, {scale: 1, autoAlpha: 1, top: 1}, {top: -200, ease:Linear.easeNone}),
  TweenMax.fromTo(".logo", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -700, autoAlpha: 0, ease:Linear.easeNone})
]);

// build scene
var scene1 = new ScrollMagic.Scene({triggerElement: "#top", triggerHook: 0, duration: 6000})
				.setTween(tween)
				.addTo(controller);

// FIRST LOOK SECTION //
var scene2 = new ScrollMagic.Scene({
  triggerElement: ".first-look-background", // point of execution
	duration: $(window).height() * 1.4, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin(".first-look-background") // the element we want to pin
.addTo(controller);

// Scene Handler
var scene3 = new ScrollMagic.Scene({
  triggerElement: ".first-look-background", // point of execution
  duration: $(window).height() * 2, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin(".h3-1") // the element we want to pin
.addTo(controller);


var tween = new TimelineMax ()
	.add([
		TweenMax.fromTo(".first-look-1", 1, {scale: 1, autoAlpha: 1, top: 900}, {top: -150, ease: Linear.easeNone}),
		TweenMax.fromTo(".first-look-2", 1, {scale: 1, autoAlpha: 1, top: 800}, {top: -1000, ease:Linear.easeNone}),
    TweenMax.fromTo(".first-look-3", 1, {scale: 1, autoAlpha: 1, top: 1300}, {top: -2000, ease:Linear.easeNone}),
    TweenMax.fromTo(".video-1", 1, {scale: 1, autoAlpha: 1, top: 500}, {top: 300, ease:Linear.easeNone})
	]);

	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: ".first-look",duration: 5000})
					.setTween(tween)
					.addTo(controller);








// SECOND LOOK SECTION //
var scene5 = new ScrollMagic.Scene({
  triggerElement: ".second-look-background", // point of execution
  duration: 600, // pin the element for a total of 400px
  triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin(".second-look-background") // the element we want to pin
.addTo(controller);

var tween = new TimelineMax ()
	.add([
		TweenMax.fromTo(".second-look-1", 1, {scale: 1, autoAlpha: 1, top: 150}, {top: -1255, ease: Linear.easeNone}),
		TweenMax.fromTo(".second-look-2", 1, {scale: 1, autoAlpha: 1, top: 750}, {top: -3900, ease:Linear.easeNone}),
		TweenMax.fromTo(".second-look-3", 1, {scale: 1, autoAlpha: 1, top:500}, {top: 300, ease:Linear.easeNone}),
    TweenMax.fromTo(".video-2", 1, {scale: 1, autoAlpha: 1, top: 10}, {top: -100, ease:Linear.easeNone})
	]);

	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: ".second-look-background",duration: 5000})
					.setTween(tween)
					.addTo(controller);

// Scene Handler
var scene6 = new ScrollMagic.Scene({
  triggerElement: ".second-look-background", // point of execution
  duration: $(window).height() * 2, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin(".h3-2") // the element we want to pin
.addTo(controller);








// THIRD LOOK SECTION //
var scene5 = new ScrollMagic.Scene({
  triggerElement: ".third-look-background", // point of execution
  duration: 800, // pin the element for a total of 400px
  triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
})
.setPin(".third-look-background") // the element we want to pin
.addTo(controller);

var tween = new TimelineMax ()
	.add([
		TweenMax.fromTo(".third-look-1", 1, {scale: 1, autoAlpha: 1, top: 800}, {top: -4105, ease: Linear.easeNone}),
		TweenMax.fromTo(".third-look-2", 1, {scale: 1, autoAlpha: 1, top: 100}, {top: -500, ease:Linear.easeNone}),
    TweenMax.fromTo(".third-look-3", 1, {scale: 1, autoAlpha: 1, top: 100}, {top: -500, ease:Linear.easeNone}),
    TweenMax.fromTo(".video-3", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -50, ease:Linear.easeNone})
	]);

	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: ".third-look-background",duration: 5000})
					.setTween(tween)
					.addTo(controller);

	// Scene Handler
	var scene6 = new ScrollMagic.Scene({
	  triggerElement: ".third-look-background", // point of execution
	  duration: $(window).height() * 1.7, // pin element for the window height - 1
		offset: 250,
		triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
	  reverse: true // allows the effect to trigger when scrolled in the reverse direction
	})
	.setPin(".h3-3") // the element we want to pin
	.addTo(controller);








	// FOURTH LOOK SECTION //
	var scene5 = new ScrollMagic.Scene({
	  triggerElement: ".fourth-look-background", // point of execution
	  duration: 800, // pin the element for a total of 400px
	  triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
	})
	.setPin(".fourth-look-background") // the element we want to pin
	.addTo(controller);

	var tween = new TimelineMax ()
		.add([
			TweenMax.fromTo(".fourth-look-1", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -1255, ease: Linear.easeNone}),
			TweenMax.fromTo(".fourth-look-2", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -3500, ease:Linear.easeNone}),
      TweenMax.fromTo(".fourth-look-3", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -1200, ease:Linear.easeNone}),
			TweenMax.fromTo(".fourth-look-4", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -3500, ease:Linear.easeNone}),
      TweenMax.fromTo(".video-4", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -10, ease:Linear.easeNone})
		]);

		// build scene
		var scene4 = new ScrollMagic.Scene({triggerElement: ".fourth-look-background",duration: 6000})
						.setTween(tween)
						.addTo(controller);

		// Scene Handler
		var scene6 = new ScrollMagic.Scene({
		  triggerElement: ".fourth-look-background", // point of execution
		  duration: $(window).height() * 1.7, // pin element for the window height - 1
			offset: 280,
			triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
		  reverse: true // allows the effect to trigger when scrolled in the reverse direction
		})
		.setPin(".h3-4") // the element we want to pin
		.addTo(controller);










// FIFTH LOOK SECTION //
		var scene5 = new ScrollMagic.Scene({
			triggerElement: ".fifth-look-background", // point of execution
			duration: 800, // pin the element for a total of 400px
			triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
		})
		.setPin(".fifth-look-background") // the element we want to pin
		.addTo(controller);

		var tween = new TimelineMax ()
			.add([
				TweenMax.fromTo(".fifth-look-1", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -3000, ease: Linear.easeNone}),
				TweenMax.fromTo(".fifth-look-2", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -1500, ease:Linear.easeNone}),
				TweenMax.fromTo(".fifth-look-3", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -3000, ease:Linear.easeNone}),
				TweenMax.fromTo(".fifth-look-4", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -2500, ease:Linear.easeNone}),
				TweenMax.fromTo(".video-5", 1, {scale: 1, autoAlpha: 1, top: 0}, {top: -10, ease:Linear.easeNone})
			]);

			// build scene
			var scene4 = new ScrollMagic.Scene({triggerElement: ".fifth-look-background",duration: 6000})
							.setTween(tween)
							.addTo(controller);

			// Scene Handler
			var scene6 = new ScrollMagic.Scene({
				triggerElement: ".fifth-look-background", // point of execution
				duration: $(window).height() * 1.7, // pin element for the window height - 1
				offset: 400,
				triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
				reverse: true // allows the effect to trigger when scrolled in the reverse direction
			})
			.setPin(".h3-5") // the element we want to pin
			.addTo(controller);
});
