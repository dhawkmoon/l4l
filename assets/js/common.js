$(document).ready( function(){
	/*
	 * Scrolls
	 *
	 * 01 Anchor Scrolls
	 *
	 */
			$( '.header-nav a' ).on( 'click', function(e){
				e.preventDefault();
				$('.mobile-menu').removeClass('active')
				var target = $(this).attr('href')
				var to = $( target ).offset().top

				$('html,body').animate({scrollTop: to}, 400)

				//$('.mobile-menu').removeClass('mobile-menu--active')
				//$('.mobile-menu').trigger('mutation')
				return false

			} )

	/*
	 *
	 * 02 Arrow-top scroll
	 *
	 */

	 $('#arrow-top').click( function(){
		 $('html,body').animate({scrollTop: 0}, 400)
	 } )

	 $(window).scroll( function(){
		 window.requestAnimationFrame( function(){

			 if( $(document).scrollTop() > 0 &&  !$('#arrow-top').hasClass('active') )  {
				 $('#arrow-top').fadeIn(200)
				 $('#arrow-top').addClass('active')
			 }
			 else if( $(document).scrollTop() == 0 ) {
				 $('#arrow-top').fadeOut(200);
				 $('#arrow-top').removeClass('active')
			 }
		 } );
	 } )

	 //Mobile menu toggler
	 $('.mobile-menu-toggler,.mobile-menu-overlay').click(function(e){
		 $('.mobile-menu').toggleClass( 'active' )
		 $('.mobile-menu-toggler').toggleClass( 'active' )
	 });

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
		 },
		 breakpoints: {
			 768: {
				 slidesPerView: 1,
				 pagination: {
					 el: '#testimonials + .swiper-pagination',
					 clickable: true,
				 }
			 }
		 }
	 } )
	 /*
	  * 02 CLIENTS SLIDER
		*/
		var ClientsSlider = new Swiper( '#clients', {
			slidesPerView: 5,
			//spaceBetween: 35,
			navigation: {
				nextEl: '.clients .swiper-button-next',
				prevEl: '.clients .swiper-button-prev',
			},
			breakpoints: {
				768: {
					slidesPerView:3,
				}
			}

		} )
		/*
 	   * 03 FEATURES SLIDER (ONLY MOBILE)
 		 */
		if( $(window).width() <= 768 ) {
	 		var FeaturesSlider = new Swiper( '#features', {
	 			slidesPerView: 1,
	 			spaceBetween: 5,

				wrapperClass: 'features-wrapper',
				slideClass: 'features-slide',
				pagination: {
					el: '#features+.swiper-pagination',
					clickable: true,
				},

	 		} )
		}
		/*
		 * 04 TABS WITH REQUIRMENTS
		 */
		 if( $(window).width() <= 768 ) {
 	 		var hTab1Slider = new Swiper( '#htab1', {
 	 			slidesPerView: 1,
 	 			spaceBetween: 105,

 				wrapperClass: 'h-tab-wrapper',
 				slideClass: 'h-tab',
 				pagination: {
 					el: '#htab1 .swiper-pagination',
 					clickable: true,
 				},
				observeParents: true,

 	 		} )
 		}
		/*
		 * 05 TABS WITH REQUIRMENTS 2
		 */
		 if( $(window).width() <= 768 ) {
	 	 	var hTab2Slider = new Swiper( '#htab2', {
	 	 			slidesPerView: 1,
	 	 			spaceBetween: 105,

	 				wrapperClass: 'h-tab-wrapper',
	 				slideClass: 'h-tab',
	 				pagination: {
	 					el: '#htab2 .swiper-pagination',
	 					clickable: true,
	 				},
					observeParents: true,
					observer: true,
		 	 	} )
	 		}
			/*
	 	   * 06 FEATURES 2 SLIDER (ONLY MOBILE)
	 		 */
			if( $(window).width() <= 768 ) {
		 		var FeaturesSlider = new Swiper( '#features-2', {
		 			slidesPerView: 1,
		 			spaceBetween: 5,

					wrapperClass: 'features-wrapper',
					slideClass: 'features-slide',
					pagination: {
						el: '#features-2+.swiper-pagination',
						clickable: true,
					},

		 		} )
			}
			/*
	 	   * 07 OFFICE IMAGES SLIDER (ONLY MOBILE)
	 		 */
			if( $(window).width() <= 768 ) {
		 		var FeaturesSlider = new Swiper( '#office', {
		 			slidesPerView: 1,
		 			spaceBetween: 5,

					wrapperClass: 'office-wrapper',
					slideClass: 'office-item',
					pagination: {
						el: '#office+.swiper-pagination',
						clickable: true,
					},

		 		} )
			}

			/*
			 * Masks
			 *
			 * 01 Phones
			 *
			 */
			 var phoneCleaves = []
			 var phones = $( '[data-mask="phone"]' )
			 for( var i=0; i<phones.length; i++ ) {
				 phoneCleaves[i] = new Cleave( phones[i], {
					 prefix: '+7 ',
					 blocks: [3, 3, 3, 2, 2],
					 delimiters: ['(', ') ', '-', '-'],
					 numericOnly: true
				 } );
			 }


			 //Fix if somebody inputs 8 in the place of +7
			 $( '[data-type="phone"]' ).on( 'keypress', function(e){
				 $(this).val( $(this).val().replace( /^\+7 \(8/, '+7 (' ) );
			 } )

			 $('.s4 .btn-chevron').click( function(){
				 $(this).toggleClass('active')
				 $('.s4 .questions-wrapper').toggleClass('expanded')
				 if( $(this).text() == 'Показать все вопросы' ) {
					 $(this).text('Скрыть')
				 }
				 else {
					 $(this).text( 'Показать все вопросы' )
				 }
			 } )
});
