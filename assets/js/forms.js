/*
 * Forms settings
 * Library used: validate-us
 * @author Mikhail Vikrian
 *
 * Fields
 *
 * 01 Phone
 */

 var phone = {
	 value: '',
	 placeholder: '+7 (',
	 validate: {
		 required: {
			 error: 'Укажите, пожалуйста, Ваш телефон',
		 },
		 pattern: {
			 reg: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
			 error: 'Укажите номер телефона в правильном формате',
		 }
	 }
 }

 /*
 	*
  * Forms Array
	*
	*/

	var forms = [
		{
			id: 's1-form',
			fields: {
				'phone-top': phone,
			},
		},
		{
			id: 'modal-form',
			fields: {
				'modal-phone': phone,
			}
		},
		{
			id: 'prefooter-form',
			fields: {
				'phone-bottom': phone,
			}
		},
	]

	/*
	 *
	 * Error Handlers
	 * [f = field, r = result]
	 *
	 * 01 On field error
	 */

	 var onFieldError = function( f, r ) {
		 f.removeClass( 'has-success' )
		 f.addClass( 'has-error' )
	 }

	 /*
	  * 02 onSubmitError
		*/

		var onSubmitError = function( f, r ) {
			f.next().text( r.error )
			f.removeClass( 'has-success' )
 		 	f.addClass( 'has-error' )
		}

	 /*
	  * 03 onSuccess
	  */

		var onSuccess = function( f ) {
			f.next().text( '' )
			f.removeClass( 'has-error' )
			f.addClass( 'has-success' )
		}

		/*
		 * 04 onFormSuccess
		 */

		 var onFormSuccess = function( f ) {
			 startLoading( $(f) )
			 send( $(f) )
		 }

		 /*
		  * Helpers
			*
			* 01 startLoading
			*
			* Start loading the form. Adds specific classes
			*
			*/
		 function startLoading( $form )
		 {
			 $form.addClass('loading');
			 $form.find('button').prop( 'disabled', true )
		 }
		 /*
		  * 02 Prints mesaage to user on onSuccess
			*/
		 function printSuccess( $f, t )
		 {
			 $f.html( '<span class="message message-success">'+t+'</span>' )
		 }
		 /*
		  * 03 Prints mesaage to user on onError
		  */
		 function printError( $f, t )
		 {
			 $f.html( '<span class="message message-error">'+t+'</span>' )
		 }
		 /*
		  * 04 Sends data
		  */
		 function send( $form )
		 {
			 var data = $form.serialize()
			 data += '&form='+$form.attr('id')
			 data += '&url=' + window.location.search.replace( /&/g, '-_-' )
			 data += '&src=Симферополь'
			 //console.log( data )
			 $.ajax({
					url: 'http://job.line4life.ru/backend/send',
					type: 'POST',
					data: data,
					context: $form,
					success: function( response ) {
						//printSuccess( $(this), response )
						setTimeout( printSuccess, 2000, $(this), response )
						dataLayer.push({
			 				'event' : 'formsend',
			 				'eventCategory' : 'form',
			 				'eventAction' : 'send-btn',
			 				'eventLabel' : $(this).attr('id')
		 				});
					},
					error: function( response ) {
						//console.log(response)
						setTimeout( printError, 2000, $(this), response.responseText )
					},
				})
		 }
		 //Let's rock
		 validateUs( forms )
