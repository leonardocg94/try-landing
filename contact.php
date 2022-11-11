<?php
 
$content = file_get_contents("php://input");
$data = json_decode($content, true);

$servername = "localhost";
$username = "leonardocg";
$password = "leo!@#123";
$dbname = "fitaldb";
 
// Create connection
$conn = new mysqli($servername,
    $username, $password, $dbname);
 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: "
        . $conn->connect_error);
}
 
// $sqlquery = "INSERT INTO contact VALUES
//     ('John', 'john@example.com', '5511223344')";
// $aux = "INSERT INTO contact VALUES ('". $data['name'] . "', '" . $data['email'] . "', '1122334455')";
$aux = "INSERT INTO contact VALUES ('". $data['name'] . "', '" . $data['email'] . "', '" . $data['phone'] . "')";
 
if ($conn->query($aux) === TRUE) {
    echo json_encode(['success'=>true]);
} else {
    echo json_encode(['success'=>false]);
}
$conn->close();
exit();

?>