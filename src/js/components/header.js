import $ from "jquery";

$(document).ready(function(){
	$('.header-burger').click(function(){
		$('body').toggleClass('lock');
        $(this).parents('.header-container').toggleClass('active')
	});
});
