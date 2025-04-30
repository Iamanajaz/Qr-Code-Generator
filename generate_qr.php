<?php
// DB connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "qr_project";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database Connection failed: " . $conn->connect_error);
}

if (isset($_POST['data']) && isset($_POST['size'])) {
    $data = trim($_POST['data']);
    $size = $_POST['size'];

    if (!preg_match('/^\d+x\d+$/', $size)) {
        http_response_code(400);
        echo "Invalid size format.";
        exit;
    }

    // Fetch QR image from API
    $apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=$size&data=" . urlencode($data);
    $qrContent = file_get_contents($apiUrl);

    if ($qrContent === FALSE) {
        http_response_code(500);
        echo "Failed to generate QR code.";
        exit;
    }

    // Save the QR image
    $folderPath = "qrcodes/";
    if (!is_dir($folderPath)) {
        mkdir($folderPath, 0777, true); // Create folder if it doesn't exist
    }

    $fileName = uniqid('qr_', true) . ".png";
    $filePath = $folderPath . $fileName;

    file_put_contents($filePath, $qrContent);

    // Save into database
    $stmt = $conn->prepare("INSERT INTO qr_codes (input_text, image_path) VALUES (?, ?)");
    $stmt->bind_param("ss", $data, $filePath);

    if ($stmt->execute()) {
        // Return the saved QR code image
        header("Content-Type: application/json");
        echo json_encode(["success" => true, "image" => $filePath]);
    } else {
        http_response_code(500);
        echo "Database Insert Failed.";
    }

    $stmt->close();
} else {
    http_response_code(400);
    echo "Missing required parameters.";
}

$conn->close();
?>
