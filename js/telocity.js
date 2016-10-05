$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.header').css({
		"transform": "translate(0px, '+ wScroll /20 +'%)"

	});
});