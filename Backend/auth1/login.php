<?php
session_start();  // Start the session
require 'config.php'; // Ensure you have your database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (empty($email) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit();
    }

    // Check if the user exists in the database
    $stmt = $conn->prepare("SELECT id, user_type, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user["password"])) {
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["user_type"] = $user["user_type"];

            // Redirect based on user_type
            switch ($user["user_type"]) {
                case 'admin':
                    echo json_encode(["status" => "success", "redirect" => "admin/dashboard.php"]);
                    break;
                case 'waste_collector':
                    echo json_encode(["status" => "success", "redirect" => "waste-collector/dashboard.php"]);
                    break;
                case 'resident':
                    echo json_encode(["status" => "success", "redirect" => "resident/dashboard.php"]);
                    break;
                default:
                    echo json_encode(["status" => "error", "message" => "Invalid user role"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect password"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }

    $stmt->close();
    $conn->close();
}
