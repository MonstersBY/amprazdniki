import $ from "jquery";

$('.detail_show-main--open').on("click", function () {
    $(this).css('display', 'none')
    $('.detail_show-main--text').slideToggle()
});
$('.detail_show-questions-item--top').on("click", function () {
    $(this).toggleClass('active')
    $(this).next('.detail_show-questions-item--bottom').slideToggle()
});