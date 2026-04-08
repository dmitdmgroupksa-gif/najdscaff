<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration - Users will edit this
$db_host = 'localhost';
$db_name = 'YOUR_DATABASE_NAME';
$db_user = 'YOUR_DATABASE_USER';
$db_pass = 'YOUR_DATABASE_PASSWORD';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Simple Router
$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// Extract endpoint from URI
$path = parse_url($request_uri, PHP_URL_PATH);
// Remove the base directory if it's in a folder like /api/
$path = str_replace('/api/', '', $path); 
$path = trim($path, '/');

$data = json_decode(file_get_contents("php://input"), true);

if ($path == 'inquiries') {
    if ($request_method == 'POST') {
        // Create Inquiry
        $stmt = $pdo->prepare("INSERT INTO inquiries (name, email, phone, subject, message, status) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $data['name'], 
            $data['email'], 
            $data['phone'], 
            $data['subject'], 
            $data['message'], 
            $data['status'] ?? 'new'
        ]);
        
        // Send Email
        $to = "sales@najdscaff.com, dmit.dmgroupksa@gmail.com";
        $subject = "New Inquiry: " . $data['subject'];
        $message = "Name: {$data['name']}\nEmail: {$data['email']}\nPhone: {$data['phone']}\nSubject: {$data['subject']}\n\nMessage:\n{$data['message']}";
        $headers = "From: noreply@najdscaff.com";
        
        mail($to, $subject, $message, $headers);
        
        http_response_code(201);
        echo json_encode(["message" => "Inquiry created successfully"]);
    } elseif ($request_method == 'GET') {
        // List Inquiries
        $sort = $_GET['sort'] ?? '-created_at';
        $order = ($sort[0] == '-') ? 'DESC' : 'ASC';
        $column = ltrim($sort, '-');
        
        $stmt = $pdo->prepare("SELECT * FROM inquiries ORDER BY $column $order");
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
    }
} elseif ($path == 'catalogue-downloads') {
    if ($request_method == 'POST') {
        $stmt = $pdo->prepare("INSERT INTO catalogue_downloads (name, email, phone) VALUES (?, ?, ?)");
        $stmt->execute([$data['name'] ?? null, $data['email'] ?? null, $data['phone'] ?? null]);
        http_response_code(201);
        echo json_encode(["message" => "Download logged"]);
    } elseif ($request_method == 'GET') {
        $stmt = $pdo->prepare("SELECT * FROM catalogue_downloads ORDER BY downloaded_at DESC");
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
    }
} elseif (preg_match('/^inquiries\/(\d+)$/', $path, $matches)) {
    $id = $matches[1];
    if ($request_method == 'PUT') {
        $stmt = $pdo->prepare("UPDATE inquiries SET status = ? WHERE id = ?");
        $stmt->execute([$data['status'], $id]);
        echo json_encode(["message" => "Inquiry updated"]);
    } elseif ($request_method == 'DELETE') {
        $stmt = $pdo->prepare("DELETE FROM inquiries WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(["message" => "Inquiry deleted"]);
    }
} else {
    http_response_code(404);
    echo json_encode(["message" => "Endpoint not found"]);
}
