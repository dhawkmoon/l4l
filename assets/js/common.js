$(document).ready( function(){
	//Features icons tabs
	$('[data-toggle=tabs]').click(function(e){
		e.preventDefault();
		$(this).parents('.icons-tabs').find('[data-toggle=tabs]').removeClass('active');
		$(this).addClass('active');
		var target = $(this).attr('href');
		$(this).parents('.icons-tabs').find('.icons-tab').removeClass('active');
		$( target ).addClass('active')
		return false;
	})

	//Questions accordeon
	$('.question-item').click(function(e){
		$('.question-item').removeClass('question-item--active')
		$(this).addClass('question-item--active')
	});

	/*
	 * Sliders
	 *
	 * 01 TESTIMONIALS SLIDER
	 *
	 */
	 var TestimonialsSlider = new Swiper( '#testimonials', {
		 slidesPerView: 2,
		 navigation: {
			 nextEl: '.testimonials .swiper-button-next',
			 prevEl: '.testimonials .swiper-button-prev',
		 }
	 } )
	 /*
	  * 02 CLIENTS SLIDER
		*/
		var TestimonialsSlider = new Swiper( '#clients', {
			slidesPerView: 5,
			//spaceBetween: 35,
			navigation: {
				nextEl: '.clients .swiper-button-next',
				prevEl: '.clients .swiper-button-prev',
			}
		} )
});
