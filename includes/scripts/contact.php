<?php

session_start();
header("Content-Type: application/json; charset=UTF-8");
// var_dump($_POST);

spl_autoload_register(function ($class) {
    $class = str_replace('Portfolio\\', '', $class);
    $class = str_replace("\\", DIRECTORY_SEPARATOR, $class); # needed for both
    $filepath = __DIR__ . '/../../includes/classes/' . $class . '.php';
    $filepath = str_replace("/", DIRECTORY_SEPARATOR, $filepath); # only required for windows
    
    require_once $filepath;
});

use Portfolio\Database;


    // Error reporting, turn off when we launch
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        $recipent = 'situranjit6@gmail.com';
        $subject = 'Inquiry from mydomain.com';

        $name_raw = $_POST['name'] ?? '';
        $email_raw = $_POST['email'] ?? '';
        $phone_raw = $_POST['phone'] ?? '';
        $msg_raw = $_POST['message'] ?? '';

        $name = trim(strip_tags($name_raw));
        $visitor_name = $name;

        $email_clean = str_replace(["\r", "\n", "%0a", "%0d"], '', trim($email_raw));

        // validate email format
        $visitor_email = filter_var($email_clean, FILTER_VALIDATE_EMAIL);

        $phone = trim(strip_tags($phone_raw));

        $message = trim(strip_tags($msg_raw));
        
    
 $errors = [];

if ($name === '') {
    $errors[] = '**Name field is empty.';
}

if ($email_raw === '') {
    $errors[] = '**Email field is empty.';
} elseif (!$visitor_email) {
  $errors[] = "\"" . $email_raw . "\" is not a valid email address.";
}

if ($phone_raw === '') {
    $errors[] = '**Number field is empty.';
}

if ($message === '') {
    $errors[] = '**Message field is empty.';
}

// any errors in validation will return as JSON
  $errcount = count($errors);
    if ($errcount > 0) {
        $errmsg = array();
        for ($i = 0; $i < $errcount; $i++) {
            $errmsg[] = $errors[$i];
        }
        echo json_encode(array("errors" => $errmsg));
        exit;
    } else {

    // Create a database connection
   $database = new Database();
      $database->query('INSERT INTO tbl_contact 
    (name, email, phone, message) 
    VALUES (:name, :email, :phone, :message);',
    [
        'name' => $name,
        'email' => $visitor_email,
        'phone' => $phone,
        'message' => $message
    ]
);

        $emailBody = "You received a new inquiry:\r\n\r\n";
        $emailBody .= "Name: {$visitor_name}\r\n";
        $emailBody .= "Email: {$visitor_email}\r\n\r\n";
        $emailBody .= "Phone:\r\n{$phone}\r\n";
        $emailBody .= "Message:\r\n{$message}\r\n";

        $fromAddress = "no-reply@yourdomain.com";

        // Create the email headers (metadata for the message)
        $headers = "From: Your domain <{$fromAddress}>\r\n"; // Sender name and address
        $headers .= "Reply-To: {$visitor_email}\r\n"; // Where replies will go
        $headers .= "MIME-Version: 1.0\r\n"; // Email standard version
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Plain text email
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n"; // Identifies PHP mailer

        // send email
        $sent = mail($recipent, $subject, $emailBody, $headers);

        // Success message will show if the message goes through 
     if($sent) { echo json_encode(["message" => "Message Sent! Will be back to you soon!"]);
      exit;}
      
    }

    }
?>