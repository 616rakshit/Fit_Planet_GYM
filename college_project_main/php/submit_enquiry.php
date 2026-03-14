<?php
/**
 * Fit Planet – Enquiry form handler.
 * Saves submissions to enquiries.txt (Notepad) and enquiries.csv (Excel).
 * Accepts: form POST or JSON POST (e.g. from React).
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get input: JSON body or form POST
$raw = file_get_contents('php://input');
$contentType = isset($_SERVER['HTTP_CONTENT_TYPE']) ? $_SERVER['HTTP_CONTENT_TYPE'] : '';
$isJson = (strpos($contentType, 'application/json') !== false);

if ($isJson && $raw !== '') {
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
        exit;
    }
} else {
    $data = $_POST;
}

$name    = isset($data['name']) ? trim((string) $data['name']) : '';
$phone   = isset($data['phone']) ? trim((string) $data['phone']) : '';
$email   = isset($data['email']) ? trim((string) $data['email']) : '';
$plan    = isset($data['plan']) ? trim((string) $data['plan']) : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

// Validate
if ($name === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name is required']);
    exit;
}
if ($phone === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Phone is required']);
    exit;
}
if ($email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Email is required']);
    exit;
}
if ($plan === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please select a plan']);
    exit;
}

$dir = __DIR__;
$txtFile = $dir . '/enquiries.txt';
$csvFile = $dir . '/enquiries.csv';
$timestamp = date('c');

// Append to Notepad-style text file
$line = "[$timestamp] Name: $name | Phone: $phone | Email: $email | Plan: $plan | Message: " . ($message !== '' ? $message : '') . "\n";
if (file_put_contents($txtFile, $line, FILE_APPEND | LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save enquiry']);
    exit;
}

// Append to CSV (Excel-openable)
$csvNew = !file_exists($csvFile);
$fp = @fopen($csvFile, 'a');
if ($fp === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save enquiry']);
    exit;
}
if ($csvNew) {
    fputcsv($fp, ['Timestamp', 'Name', 'Phone', 'Email', 'Plan', 'Message']);
}
fputcsv($fp, [$timestamp, $name, $phone, $email, $plan, $message]);
fclose($fp);

// Form POST: redirect to contact page with success
if (!$isJson) {
    header('Location: contact.html?success=1');
    exit;
}

header('Content-Type: application/json; charset=utf-8');
http_response_code(200);
echo json_encode(['success' => true]);
exit;
