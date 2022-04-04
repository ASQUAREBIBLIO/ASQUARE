<?php
$email = $_POST['email'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "asquaredb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO registration (email)
VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
  echo "You have been registered. Thanks!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>