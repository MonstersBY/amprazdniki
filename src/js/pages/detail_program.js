import $ from "jquery";

import Swiper from "swiper";

$(document).ready(function () {
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

	let programDetailDiff = new Swiper('.program-difficult__swiper', {
		slidesPerView: 'auto',
		spaceBetween: `${remToPx(3.2)}rem`,
	})

	let programDetailCharacter = new Swiper('.program-character__content--swiper', {
		slidesPerView: 'auto',
		spaceBetween: `${remToPx(3.2)}rem`,
	})

	let separate = document.querySelector('.program-character__separate');

	if (window.outerWidth > 768) {
		$('.program-character__content-item').on('mouseover', function (evt) {
			$(this).addClass('active');
			$('.program-character__header').addClass('remove');
			$(separate).addClass('remove');
		})
		$('.program-character__content-item').on('mouseout', function (evt) {
			$(this).removeClass('active');
			$('.program-character__header').removeClass('remove');
			$(separate).removeClass('remove');
		})
	}
})