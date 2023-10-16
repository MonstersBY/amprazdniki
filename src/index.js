import $ from "jquery";

import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./js/utils/jquery.mask";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/mousewheel";
import "./js/components/header";
import "./js/components/footer";
import "./js/pages/home";
import "./index.scss";
import "./js/pages/decor";

$(document).ready(function () {
	if ($("input[type=tel]").length) {
		$("input[type=tel]").mask("+7(999) 999-99-99");
	}
	function remToPx(remValue) {
		// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
		var htmlFontSize = parseFloat(
			getComputedStyle(document.documentElement).fontSize
		);

		// Переводим значение из rem в px
		var pxValue = remValue * htmlFontSize;

		// Округляем значение до целых пикселей (по желанию)
		return Math.round(pxValue) + "px";
	}

	function countSlider(swip, info) {
		$(info)
			.find(".pagination-number--all")
			.html("0" + swip.slides.length);
		$(info)
			.find(".pagination-number--current")
			.html("0" + (swip.activeIndex + 1));
		swip.on("slideChange", function () {
			$(info)
				.find(".pagination-number--current")
				.html("0" + (swip.activeIndex + 1));
		});
	}

	let home_second;
	if (!$(".home-second-swiper").data("platform")) {
		screen.width < 769
			? $(".home-second-swiper").data("platform", "mobile")
			: $(".home-second-swiper").data("platform", "desktop");
	}
	if (screen.width < 769) {
		home_second = new Swiper(".home-second-swiper", {
			modules: [Navigation, Pagination, EffectFade],
			speed: 1500,
			slidesPerView: "auto",
			spaceBetween: `${remToPx(2)}rem`,
			breakpoints: {
				769: {
					spaceBetween: `${remToPx(1.5)}rem`,
				},
			},
		});
	} else {
		home_second = new Swiper(".home-second-swiper", {
			modules: [Navigation, Pagination, EffectFade],
			speed: 1500,
			slidesPerView: 1,
			spaceBetween: 30,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: ".home-second-pagination",
			},
		});
		countSlider(home_second, ".home-second-pagination-number");
	}
	$(window).resize(function () {
		changeHomeSecond();
	});
	function changeHomeSecond() {
		if (screen.width < 769) {
			if ($(".home-second-swiper").data("platform") == "desktop") {
				$(".home-second-swiper").data("platform", "mobile");
				home_second.destroy();
				home_second = new Swiper(".home-second-swiper", {
					modules: [Navigation, Pagination, EffectFade],
					speed: 2000,
					slidesPerView: "auto",
					spaceBetween: `${remToPx(2)}rem`,
					breakpoints: {
						769: {
							spaceBetween: `${remToPx(1.5)}rem`,
						},
					},
				});
			}
		} else {
			if ($(".home-second-swiper").data("platform") == "mobile") {
				$(".home-second-swiper").data("platform", "desktop");
				home_second.destroy();
				home_second = new Swiper(".home-second-swiper", {
					modules: [Navigation, Pagination, EffectFade],
					speed: 2000,
					slidesPerView: 1,
					spaceBetween: 30,
					effect: "fade",
					fadeEffect: {
						crossFade: true,
					},
					pagination: {
						el: ".home-second-pagination",
					},
				});
			}
		}
	}

	$(".home-second-slide-center--btn").on("click", function (e) {
		e.preventDefault();
		home_second.slideNext();
	});

	const home_programs_img = new Swiper(".home-programs--swiper-img", {
		modules: [Navigation, Pagination, EffectCoverflow, Thumbs],
		speed: 2000,
		slidesPerView: "auto",
		centeredSlides: true,
		effect: "coverflow",
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 300,
			modifier: 3,
			slideShadows: false,
			scale: 1.12,
		},
		pagination: {
			el: ".home-programs-pagination",
		},
		breakpoints: {
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 1000,
				modifier: 2,
				slideShadows: false,
				scale: 1.7,
			},
		},
	});
	countSlider(home_programs_img, ".home-programs-pagination-number");
	const home_programs_info = new Swiper(".home-programs--swiper-text", {
		modules: [Navigation, Pagination, EffectFade, Thumbs],
		speed: 2000,
		slidesPerView: 1,
		spaceBetween: 30,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
	});
	home_programs_img.on("slideChange", function () {
		home_programs_info.slideTo(this.activeIndex, 2000);
	});

	const home_review_swiper = new Swiper(".home-review-swiper", {
		modules: [Navigation, Pagination, EffectFade, Thumbs],
		speed: 2000,
		slidesPerView: "auto",
		spaceBetween: `${remToPx(1.5)}rem`,
		pagination: {
			el: ".home-review-pagination",
		},
		breakpoints: {
			769: {
				slidesPerView: 1,
			},
		},
	});
	countSlider(home_review_swiper, ".home-review-pagination-number");

	$(".home-command-slide").each(function (i) {
		(i + 1) % 2 ? $(this).data("rot", 30) : $(this).data("rot", -30);
	});
	let home_command_swiper;
	function mainCommandSwiper() {
		if (screen.width < 769) {
			if ($(".home-command-swiper").data("platform") == "desktop") {
				$(".home-second-swiper").data("platform", "mobile");
				home_second.destroy();
				home_command_swiper = new Swiper(".home-command-swiper", {
					modules: [Navigation, Pagination, EffectFade, EffectCreative],
					speed: 2000,
					slidesPerView: 1,
					spaceBetween: 300,
					pagination: {
						el: ".home-command-pagination",
					},
				});
			}
		} else {
			if ($(".home-command-swiper").data("platform") == "mobile") {
				$(".home-second-swiper").data("platform", "desktop");
				home_second.destroy();
				home_command_swiper = new Swiper(".home-command-swiper", {
					modules: [Navigation, Pagination, EffectFade, EffectCreative],
					direction: "vertical",
					speed: 2000,
					slidesPerView: 1,
					spaceBetween: 300,
					pagination: {
						el: ".home-command-pagination",
					},
					effect: "creative",
					creativeEffect: {
						prev: {
							translate: [0, "-200%", 0],
							rotate: [0, 0, 0],
						},
						next: {
							translate: [0, 0, -1],
							rotate: [0, 0, 0],
						},
					},
				});
			}
		}
	}
	if (!$(".home-command-swiper").data("platform")) {
		screen.width < 769
			? $(".home-second-swiper").data("platform", "mobile")
			: $(".home-second-swiper").data("platform", "desktop");
	}
	mainCommandSwiper();
	if (screen.width < 769) {
		home_command_swiper = new Swiper(".home-command-swiper", {
			modules: [Navigation, Pagination, EffectFade, EffectCreative],
			speed: 2000,
			slidesPerView: 1,
			spaceBetween: 300,
			pagination: {
				el: ".home-command-pagination",
			},
		});
	} else {
		home_command_swiper = new Swiper(".home-command-swiper", {
			modules: [Navigation, Pagination, EffectFade, EffectCreative],
			direction: "vertical",
			speed: 2000,
			slidesPerView: 1,
			spaceBetween: 300,
			pagination: {
				el: ".home-command-pagination",
			},
			effect: "creative",
			creativeEffect: {
				prev: {
					translate: [0, "-200%", 0],
					rotate: [0, 0, 0],
				},
				next: {
					translate: [0, 0, -1],
					rotate: [0, 0, 0],
				},
			},
		});
		countSlider(home_command_swiper, ".home-command-pagination-number");
	}

	countSlider(home_command_swiper, ".home-command-pagination-number");
	const home_command_text = new Swiper(".home-command-swiper--text", {
		modules: [Navigation, Pagination, EffectFade, Thumbs],
		speed: 2000,
		slidesPerView: 1,
		spaceBetween: 300,
	});
	home_command_swiper.on("slideChange", function () {
		home_command_text.slideTo(this.activeIndex, 2000);
	});
	home_command_text.on("slideChange", function () {
		home_command_swiper.slideTo(this.activeIndex, 2000);
	});
	$(".home-command--next").on("click", function () {
		const deg = $(".home-command-slide.swiper-slide-active").data("rot");
		home_command_swiper.params.creativeEffect.prev.rotate = [0, 0, deg];
		home_command_swiper.slideNext();
		home_command_swiper.init();
	});
	$(".home-command--prev").on("click", function () {
		const deg = $(".home-command-slide.swiper-slide-active").data("rot");
		home_command_swiper.params.creativeEffect.prev.rotate = [0, 0, deg];
		home_command_swiper.slidePrev();
		home_command_swiper.init();
	});
	$(window).resize(function () {
		mainCommandSwiper();
	});

	if (screen.width < 769) {
		const home_advantages_swiper = new Swiper(".home-advantages-swiper", {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: ".home-advantages-pagination",
			},
		});
	}
});
