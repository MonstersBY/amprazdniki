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

function countSlider(swip, info) {
    if($(info).length == 1) {
        $(info).each(function(i){
            var current = $(this).find(".pagination-number--current")
            swip.slides.length < 10 ? $(this).find(".pagination-number--all").html("0" + swip.slides.length) : $(this).find(".pagination-number--all").html(swip.slides.length)
            swip.realIndex + 1 < 10 ? current.html("0" + (swip.realIndex + 1)) : current.html(swip.realIndex + 1)
            swip.on("slideChange", function () {
                swip.realIndex + 1 < 10 ? current.html("0" + (swip.realIndex + 1)) : current.html(swip.realIndex + 1)
            });
        })
    } else {
        $(info).each(function(i){
            var current = $(this).find(".pagination-number--current")
            swip[i].slides.length < 10 ? $(this).find(".pagination-number--all").html("0" + swip[i].slides.length) : $(this).find(".pagination-number--all").html(swip[i].slides.length)
            swip[i].realIndex + 1 < 10 ? current.html("0" + (swip[i].realIndex + 1)) : current.html(swip[i].realIndex + 1)
            swip[i].on("slideChange", function () {
                swip[i].realIndex + 1 < 10 ? current.html("0" + (swip[i].realIndex + 1)) : current.html(swip[i].realIndex + 1)
            });
        })
    }
}

const programsSwiper = new Swiper('.programs-swiper', {
    modules: [Navigation, Pagination, EffectFade],
    speed: 2000,
    slidesPerView: 1.065,
    loop: true,
    spaceBetween: `${remToPx(1.9)}rem`,
    breakpoints: {
        769: {
            slidesPerView: 'auto',
        },
    },
});

countSlider(programsSwiper, ".programs-pagination-number");
$(".programs-swiper--prev").on("click", function () {
    if($(".programs-pagination-number").length == 1) {
        programsSwiper.slidePrev();
    } else {
        const index = $(".programs-swiper--prev").index(this)
        programsSwiper[index].slidePrev();
    }
});
$(".programs-swiper--next").on("click", function () {
    if($(".programs-pagination-number").length == 1) {
        programsSwiper.slideNext();
    } else {
        const index = $(".programs-swiper--next").index(this)
        programsSwiper[index].slideNext();
    }
});


if($('.programs-show-slide').length) {
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
}
