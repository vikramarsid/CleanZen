<?php 
//////////////////////////
//Specify default values//
//////////////////////////

//Your E-mail
$your_email = 'vikramsai.arsid@sjsu.edu';

//Default Subject if 'subject' field not specified
$default_subject = 'Hi Cleanzen';

//Message if 'name' field not specified
$name_not_specified = 'Please type a valid name';

//Message if 'message' field not specified
$message_not_specified = 'Please type a vaild message';

//Message if e-mail sent successfully
$email_was_sent = 'Thanks, your message successfully sent';

//Message if e-mail not sent (server not configured)
$server_not_configured = 'Sorry, mail server not configured';


///////////////////////////
//Contact Form Processing//
///////////////////////////
$errors = array();
if(isset($_POST['message']) and isset($_POST['name'])) {
	if(!empty($_POST['name']))
		$sender_name  = stripslashes(strip_tags(trim($_POST['name'])));
	
	if(!empty($_POST['message']))
		$message      = stripslashes(strip_tags(trim($_POST['message'])));
	
	if(!empty($_POST['email']))
		$sender_email = stripslashes(strip_tags(trim($_POST['email'])));
	
	if(!empty($_POST['subject']))
		$subject      = stripslashes(strip_tags(trim($_POST['subject'])));


	//Message if no sender name was specified
	if(empty($sender_name)) {
		$errors[] = $name_not_specified;
	}

	//Message if no message was specified
	if(empty($message)) {
		$errors[] = $message_not_specified;
	}

	$from = (!empty($sender_email)) ? 'From: '.$sender_email : '';

	$subject = (!empty($subject)) ? $subject : $default_subject;

	$message = (!empty($message)) ? wordwrap($message, 70) : '';

	//sending message if no errors
	if(empty($errors)) {
		if (mail($your_email, $subject, $message, $from)) {
			echo $email_was_sent;
		} else {
			$errors[] = $server_not_configured;
			echo implode('<br>', $errors );
		}
	} else {
		echo implode('<br>', $errors );
	}
} else {
	// if "name" or "message" vars not send ('name' attribute of contact form input fields was changed)
	echo '"name" and "message" variables were not received by server. Please check "name" attributes for your input fields';
}
?>