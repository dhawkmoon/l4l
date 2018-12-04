<?php

	$routes = [
		[
			'method' 		=> 'GET',
			'uri'		 		=> '/',
			'callback' 	=> function(){
				return ['code'=>200, 'body'=>'Hello, world!'];
			}
		],
		[
			'method'		=> 'POST',
			'uri'				=> '/send',
			'callback'	=> function() {
				$fields = validateFormFields( FORM_FIELDS );

				if( isBadPhone( $fields['phone'] ) ) { //filter BAD and SCUM phones
            return ['code'=> 403, 'body' => 'К сожалению, введенный Вами номер телефона содержит неправильный код* оператора.<span style="color:black !important;font-size: 13px; display: block !important; border-top: 1px dashed #3f7592; padding-top: 5px; margin-top: 5px;">* Если Ваш телефон содержит действующий код оператора, но Вы видите данное сообщение, свяжитесь с нами по телефону (4812) 26-83-23</span>.'];
        }

				if( count( $fields ) > 0 ) {
                    //let get current phone number
                    $orderNumber = getOrderNumber();

					$data = [
						'phone' 	=> 	$fields['phone'],
						'number' 	=> 	$orderNumber,
						'date'		=>  date( 'd-m-Y' ),
						'time'		=>  date( 'H:i:s' ),
						'form'		=>  $_POST['form'],
						'url'			=>  preg_replace( '/\-_\-/', '&', $_POST['url'] ),
						'src'			=>  @$_POST['src'],
					];

					$tmpl = TemplateService::load( 'mails/phone.tpl' );

					$tmpl = TemplateService::replace( $tmpl, $data );

        	$emailSubject = getEmailSubject( $orderNumber, $data['src'] );

					if( isset($_POST['src']) && $_POST['src'] == 'Смоленск' ) {

						$mail = MailService::createMail( BASIC_FROM, BASIC_TO, $emailSubject, $tmpl );

					}
					elseif( isset($_POST['src']) && $_POST['src'] == 'Симферополь' ) {

						$mail = MailService::createMail( BASIC_FROM, ALT_TO, $emailSubject, $tmpl );
					}
					else {
						$mail = MailService::createMail( BASIC_FROM, BASIC_TO, $emailSubject, $tmpl );
					}


					//echo $m
					$mail->send();
					return ['code' => 200, 'body' => 'Спасибо, Ваше сообщение успешно отправлено.'];
				}
				else {
					return ['code'=> 200, 'body' => 'К сожалению, данные некорректны!'];
				}
				//
			}
		],


	];
