<?php
require_once './backend/config.php';

// Get POST data from Fetch API
$data = json_decode(file_get_contents("php://input"), true);
$full_name = $data['full_name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT); // Hash password
$user_type = $data['user_type']; // 'resident_owner' or 'waste_collector'

// Validate
if (empty($full_name) || empty($email) || empty($password) || empty($user_type)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit;
}

// Check if email already exists
$query = $conn->prepare("SELECT * FROM users WHERE email = ?");
$query->bind_param("s", $email);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Email already exists"]);
    exit;
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO users (full_name, email, password, user_type) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $full_name, $email, $password, $user_type);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Account created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Signup failed"]);
}
