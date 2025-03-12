<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "waste_management_system";

// Connect to database
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}
