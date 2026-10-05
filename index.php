<?php
// Database connection parameters
$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "acedb";

// Initialize response array
$response = array(
    'success' => false,
    'message' => ''
);

// Serve homepage on GET when accessed at root
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    header('Content-Type: text/html; charset=UTF-8');
    readfile('index.html');
    exit;
}

// Handle booking form submission

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        // Server-side validation
        $errors = array();
        
        // Sanitize and validate name
        $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
        if (empty($name) || !preg_match("/^[A-Za-z]+ [A-Za-z ]+$/", $name)) {
            $errors[] = "Invalid name format";
        }

        // Sanitize and validate email
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Invalid email format";
        }

        $validServices = array("Consultation", "Device Management", "Windows Troubleshooting", "Network Solutions");
        if (!in_array($_POST['service'], $validServices)) {
            $errors[] = "Invalid service selected";
        }

        // Sanitize and validate location
        $location = filter_var(trim($_POST['location']), FILTER_SANITIZE_STRING);
        if (strlen($location) < 3) {
            $errors[] = "Location is too short";
        }

        // Validate date
        $date = $_POST['date'];
        $selectedDate = strtotime($date);
        $today = strtotime(date('Y-m-d'));
        
        if (!$selectedDate || $selectedDate < $today) {
            $errors[] = "Invalid date selected";
        }

        // Sanitize and validate message
        $message = filter_var(trim($_POST['info']), FILTER_SANITIZE_STRING);
        if (strlen($message) < 10) {
            $errors[] = "Message is too short";
        }

        // If there are validation errors
        if (!empty($errors)) {
            throw new Exception(implode("<br>", $errors));
        }

        // If validation passes, proceed with database insertion
        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            throw new Exception("Connection failed: " . $conn->connect_error);
        }

        $stmt = $conn->prepare("INSERT INTO bookings (name, email, service, location, preferred_date, message) VALUES (?, ?, ?, ?, ?, ?)");
        
        if (!$stmt) {
            throw new Exception("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("ssssss", 
            $name,
            $email,
            $_POST['service'],
            $location,
            $date,
        $message
        );

        if ($stmt->execute()) {
            $response['success'] = true;
            $response['message'] = "Booking submitted successfully!";
        } else {
            throw new Exception("Error executing statement: " . $stmt->error);
        }

        $stmt->close();
        $conn->close();

    } catch (Exception $e) {
        error_log($e->getMessage());
        $response['message'] = "Unable to process the booking request.";
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>