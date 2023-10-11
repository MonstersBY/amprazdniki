import $ from "jquery";
$(document).ready(function(){
	$('.header-burger').click(function(){
        $(this).parents('.header-container').toggleClass('active')
	});
});