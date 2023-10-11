import $ from "jquery";
if($('.baner').length) {
    setTimeout(() => {
        const main = $('.baner-slide--active')
        main.addClass('show')
        $('.baner-slider-main img').css('top', $('.baner-slide--active').offset().top)
        $('.baner-slider-main img').css('left', $('.baner-slide--active').offset().left)
        setTimeout(() => {
            $('.baner-slider-main').css('background', main.data('color'))
            $('.header').removeClass('black')
            $('.baner').addClass(main.data('baner'))
            $('.header').addClass(main.data('baner'))
        }, 1000)
        setTimeout(() => {
            $('.baner-slider').addClass('disabled')
            $('.baner-slider-main img').css('top', 0)
            $('.baner-slider-main img').css('left', 0)
            $('.baner-slider-main').removeClass('disabled')
            setTimeout(() => {
                $('.baner-slider-main').addClass('showed')
            }, 250)
        }, 2000)
    }, 3000)
}
