$(document).ready( function(){

	$('[data-toggle=tabs]').click(function(e){
		e.preventDefault();
		$('[data-toggle=tabs]').removeClass('active');
		$(this).addClass('active');

		return false;
	})

});
