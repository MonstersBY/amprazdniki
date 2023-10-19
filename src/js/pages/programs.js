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

let programs_show

function programsShow() {
    const cards = document.querySelectorAll('.programs-show-slide')
    if (screen.width < 769) {
        cards.forEach(card => {
            card.classList.add('swiper-slide')
        })
        programs_show = new Swiper('.programs-show-swiper', {
            modules: [Navigation, Pagination, EffectFade],
            speed: 2000,
            slidesPerView: 1.065,
            spaceBetween: `${remToPx(1)}rem`,
        });
    } else {
        cards.forEach(card => {
            card.classList.remove('swiper-slide')
          })
        if(programs_show) {
            programs_show.forEach(show_swiper => {
                show_swiper.destroy()
                show_swiper = undefined
            })
        }
    }
}

programsShow();

$(window).resize(function () {
    programsShow();
});