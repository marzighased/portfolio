<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Only POST method is allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input);

if (!$data || !isset($data->name) || !isset($data->email) || !isset($data->message)) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$name = $data->name;
$email = $data->email;
$message = $data->message;

$to = 'marzighased@gmail.com';

$subject = "Contact From: $name <$email>";

$email_content = "
<html>
<head>
  <title>New Contact Message</title>
</head>
<body>
  <h2>New Contact Message</h2>
  <p><strong>Name:</strong> $name</p>
  <p><strong>Email:</strong> $email</p>
  <p><strong>Message:</strong><br>$message</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@marzighased.de\r\n";
$headers .= "Reply-To: $email\r\n";

error_log("Attempting to send email from $name <$email> to $to");

$mail_sent = mail($to, $subject, $email_content, $headers);

error_log("Mail sending result: " . ($mail_sent ? "Success" : "Failed"));

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    $error = error_get_last();
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send email. Please try again later.',
        'error' => $error ? $error['message'] : 'Unknown error'
    ]);
}