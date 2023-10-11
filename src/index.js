import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/modules/effect-fade';
import './js/components/header';
import './js/components/footer';
import './js/pages/home';
import './index.scss';



let home_second
if(!$('.home-second-swiper').data('platform')) {
    screen.width < 769 ? $('.home-second-swiper').data('platform', 'mobile') : $('.home-second-swiper').data('platform', 'desktop')
}
if (screen.width < 769) {
    home_second = new Swiper('.home-second-swiper', {
        modules: [Navigation, Pagination, EffectFade],
        speed: 1500, 
        slidesPerView: 1,
        spaceBetween: 30,
    });
} else {
    home_second = new Swiper('.home-second-swiper', {
        modules: [Navigation, Pagination, EffectFade],
        speed: 1500, 
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });
}
$(window).resize(function () {
    changeHomeSecond ()
});
function changeHomeSecond () {
    if (screen.width < 769) {
        if($('.home-second-swiper').data('platform') == 'desktop') {
            $('.home-second-swiper').data('platform', 'mobile')
            home_second.destroy();
            home_second = new Swiper('.home-second-swiper', {
                modules: [Navigation, Pagination, EffectFade],
                speed: 2000, 
                slidesPerView: 1,
                spaceBetween: 30,
            });
        }
    } else {
        if($('.home-second-swiper').data('platform') == 'mobile') {
            $('.home-second-swiper').data('platform', 'desktop')
            home_second.destroy();
            home_second = new Swiper('.home-second-swiper', {
                modules: [Navigation, Pagination, EffectFade],
                speed: 2000, 
                slidesPerView: 1,
                spaceBetween: 30,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
            });
        }
    }
}

$('.home-second-slide-center--btn').on("click", function (e) {
    e.preventDefault();
    home_second.slideNext()
});


const home_programs_img = new Swiper('.home-programs--swiper-img', {
    modules: [Navigation, Pagination, EffectCoverflow, Thumbs],
    speed: 2000, 
    slidesPerView: 'auto',
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
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
});
const home_programs_info = new Swiper('.home-programs--swiper-text', {
    modules: [Navigation, Pagination, EffectFade, Thumbs],
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: home_programs_img,
    },
});
home_programs_img.update();

const home_review_swiper = new Swiper('.home-review-swiper', {
    modules: [Navigation, Pagination, EffectFade, Thumbs],
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 300,
});

const home_command_swiper = new Swiper('.home-command-swiper', {
    modules: [Navigation, Pagination, EffectFade, Thumbs],
    direction: "vertical",
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 300,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
});
const home_command_text = new Swiper('.home-command-swiper--text', {
    modules: [Navigation, Pagination, EffectFade, Thumbs],
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 300,
    thumbs: {
        swiper: home_command_swiper,
    },
});