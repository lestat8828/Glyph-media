<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
	die('Forbidden');
}

$email = '';
$name = '';
$message = '';

$to = 'glyph.llc@gmail.com';

if (isset($_POST['email'])) {
	$email = $_POST['email'];
}

if (isset($_POST['name'])) {
	$name = $_POST['name'];
}

if (isset($_POST['message'])) {
	$message = $_POST['message'];
}

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$body = "
		Имя: ${name}
		Email: ${email}
		Сообщение: ${message}
";

mail($to, 'Прорахунок' . date('Y-m-d H:m'), $body);

header("Location: http://glyphmedia.com.ua/", true, 301);
exit();