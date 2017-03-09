$(function() {

	// Custom JS
$('.single-item').slick({
    autoplay: true,
  autoplaySpeed: 7500,
dots: true,
});
    
});
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 1280 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready