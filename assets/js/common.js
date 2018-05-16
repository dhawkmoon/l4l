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

});
