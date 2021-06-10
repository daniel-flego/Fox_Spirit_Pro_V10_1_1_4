
<?php

$servername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "fox_spirit_v2";

$conn = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);

// Check if connection has failed, display error message
if (!$conn) {
  die("Connection Failed: " . mysqli_connect_error());
  
}



















