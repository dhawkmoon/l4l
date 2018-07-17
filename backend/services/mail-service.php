<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	Class MailService {

		static function createMail( $from, $to, $subject, $body )
		{
			$mail = new PHPMailer();
			$mail->setFrom( $from );

			foreach( $to as $addr => $name ) {
				$mail->AddAddress( $addr, $name );
			}

			//
			$mail->Subject = $subject;
			$mail->Body 	 = $body;
			$mail->CharSet = 'UTF-8';
			return $mail;
		}

	}
