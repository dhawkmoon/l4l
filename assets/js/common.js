$(document).ready( function(){
	/***
				ANCHORS SCROLL
										***/
			$( '.header-nav a' ).on( 'click', function(e){
				e.preventDefault();

				var target = $(this).attr('href')
				var to = $( target ).offset().top

				$('html,body').animate({scrollTop: to}, 400)

				//$('.mobile-menu').removeClass('mobile-menu--active')
				//$('.mobile-menu').trigger('mutation')
				return false

			} )

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

	//Heading tabs
	$('.h-tabs-toggler').click(function(e){
		e.preventDefault();
		$(this).parents('h2').find('.h-tabs-toggler').removeClass('active');
		$(this).addClass('active');
		var target = $(this).data('target');
		$( target ).parents('.h-tabs-body').find('.h-tab__panel').removeClass('active');
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
