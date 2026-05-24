<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid request data"]);
    exit;
}

$name = strip_tags(trim($data["name"] ?? ""));
$email = filter_var(trim($data["email"] ?? ""), FILTER_VALIDATE_EMAIL);
$phone = strip_tags(trim($data["phone"] ?? ""));
$brandName = strip_tags(trim($data["brandName"] ?? $data["brand"] ?? ""));
$budgetRaw = strip_tags(trim($data["budget"] ?? $data["spend"] ?? ""));
$budget = $budgetRaw;

$budgetMapping = [
    "under_10l" => "Under ₹10 Lakhs",
    "10l_to_50l" => "₹10 Lakhs - ₹50 Lakhs",
    "2cr_plus" => "₹2 Crores+",
    "Under 10L" => "Under ₹10 Lakhs",
    "10-50L" => "₹10 Lakhs - ₹50 Lakhs",
    "2Cr+" => "₹2 Crores+"
];

if (isset($budgetMapping[$budgetRaw])) {
    $budget = $budgetMapping[$budgetRaw];
}

$message = strip_tags(trim($data["message"] ?? ""));

if (empty($name) || !$email) {
    echo json_encode(["success" => false, "message" => "Name and valid Email are required."]);
    exit;
}

$to = "support@theventurebeast.com";
$subject = "New Strategy Call Request from: " . $name;

$body = '
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #18181b; background-color: #fafafa; padding: 20px; }
    .card { background: #ffffff; border-radius: 12px; border: 1px solid #e4e4e7; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #f97316; padding: 24px; text-align: center; color: #ffffff; }
    .header h2 { margin: 0; font-size: 22px; font-weight: 800; }
    .content { padding: 30px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid #f4f4f5; padding-bottom: 15px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; font-weight: 800; color: #a1a1aa; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #18181b; font-weight: 500; }
    .message-box { background: #fafafa; border: 1px solid #e4e4e7; padding: 15px; border-radius: 8px; font-style: italic; color: #27272a; margin-top: 5px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>New Lead Strategy Booking</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">' . htmlspecialchars($name) . '</div>
      </div>
      <div class="field">
        <div class="label">Work Email</div>
        <div class="value"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #f97316; text-decoration: none;">' . htmlspecialchars($email) . '</a></div>
      </div>';

if (!empty($phone)) {
    $body .= '
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value">' . htmlspecialchars($phone) . '</div>
      </div>';
}

if (!empty($brandName)) {
    $body .= '
      <div class="field">
        <div class="label">Brand Name / URL</div>
        <div class="value">' . htmlspecialchars($brandName) . '</div>
      </div>';
}

if (!empty($budget)) {
    $body .= '
      <div class="field">
        <div class="label">Ad Budget /Month</div>
        <div class="value" style="color: #f97316; font-weight: bold;">' . htmlspecialchars($budget) . '</div>
      </div>';
}

if (!empty($message)) {
    $body .= '
      <div class="field">
        <div class="label">Goals & Bottlenecks</div>
        <div class="message-box">' . nl2br(htmlspecialchars($message)) . '</div>
      </div>';
}

$body .= '
    </div>
  </div>
</body>
</html>
';

/**
 * Sends an email using a raw socket connection over secure SMTP.
 * Built as a self-contained, zero-dependency SMTP client for maximum compatibility on Hostinger.
 */
function send_smtp_mail($to, $subject, $body, $replyTo, $smtp_host, $smtp_port, $smtp_user, $smtp_pass, &$error_msg = "") {
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false, // Prevents certificate verification issues on older PHP systems
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);
    
    $socket = @stream_socket_client("ssl://" . $smtp_host . ":" . $smtp_port, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        $error_msg = "SMTP Socket connection failed: $errstr ($errno)";
        return false;
    }
    
    $read = function() use ($socket) {
        $response = "";
        while (($line = fgets($socket, 512)) !== false) {
            $response .= $line;
            if (substr($line, 3, 1) === " ") {
                break;
            }
        }
        return $response;
    };
    
    $write = function($cmd) use ($socket) {
        fwrite($socket, $cmd . "\r\n");
    };
    
    // Greeting
    $res = $read();
    if (substr($res, 0, 3) !== "220") {
        $error_msg = "SMTP 220 Greeting failed: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // EHLO
    $write("EHLO " . ($_SERVER['SERVER_NAME'] ?: 'localhost'));
    $res = $read();
    if (substr($res, 0, 3) !== "250") {
        $error_msg = "SMTP EHLO command failed: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // AUTH LOGIN
    $write("AUTH LOGIN");
    $res = $read();
    if (substr($res, 0, 3) !== "334") {
        $error_msg = "SMTP AUTH LOGIN command failed: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // SMTP Username
    $write(base64_encode($smtp_user));
    $res = $read();
    if (substr($res, 0, 3) !== "334") {
        $error_msg = "SMTP Username rejected: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // SMTP Password
    $write(base64_encode($smtp_pass));
    $res = $read();
    if (substr($res, 0, 3) !== "235") {
        $error_msg = "SMTP Password rejected: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // MAIL FROM
    $write("MAIL FROM:<" . $smtp_user . ">");
    $res = $read();
    if (substr($res, 0, 3) !== "250") {
        $error_msg = "SMTP MAIL FROM command rejected: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // RCPT TO
    $write("RCPT TO:<" . $to . ">");
    $res = $read();
    if (substr($res, 0, 3) !== "250" && substr($res, 0, 3) !== "251") {
        $error_msg = "SMTP RCPT TO command rejected: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // DATA
    $write("DATA");
    $res = $read();
    if (substr($res, 0, 3) !== "354") {
        $error_msg = "SMTP DATA command rejected: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // MIME & Headers Construct
    $subjectEncoded = "=?UTF-8?B?" . base64_encode($subject) . "?=";
    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "From: The Venture Beast <" . $smtp_user . ">",
        "Reply-To: " . $replyTo,
        "To: " . $to,
        "Subject: " . $subjectEncoded
    ];
    
    $rawMessage = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.\r\n";
    
    fwrite($socket, $rawMessage);
    $res = $read();
    if (substr($res, 0, 3) !== "250") {
        $error_msg = "SMTP raw body transmission failed: " . trim($res);
        fclose($socket);
        return false;
    }
    
    // QUIT
    $write("QUIT");
    $read();
    fclose($socket);
    
    return true;
}

// SMTP credentials setup
$smtp_host = "smtp.hostinger.com";
$smtp_port = 465;
$smtp_user = "support@theventurebeast.com";
$smtp_pass = "Gratitude@1255";

$error_msg = "";
if (send_smtp_mail($to, $subject, $body, $email, $smtp_host, $smtp_port, $smtp_user, $smtp_pass, $error_msg)) {
    echo json_encode(["success" => true, "message" => "Form submitted successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send email. Error: " . $error_msg]);
}
?>
