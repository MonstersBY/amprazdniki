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

function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + 'px';
}

const decorSwiperText = new Swiper('.programs-swiper', {
    modules: [Navigation, Pagination, EffectFade],
    speed: 2000,
    slidesPerView: 1.065,
    // initialSlide: 2,
    // centeredSlides: true,
    loop: true,
    spaceBetween: `${remToPx(1.9)}rem`,
    breakpoints: {
        769: {
            slidesPerView: 'auto',
        },
    },

});