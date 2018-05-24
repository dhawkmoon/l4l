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
			}
		},
		{
			id: 'modal-form',
			fields: {
				'modal-phone': phone,
			}
		}
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
			 alert('Form is valid')
		 }

		validateUs( forms )
