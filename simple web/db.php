<?php
$server = "localhost";
$database = "aivkDB";
$username = "mazna";
$password = "Aivk_Maz7!";

//Create connection
$conn = new mysqli($server, $username, $password, $database);

//Check connection
if($conn->connect_error){
    die("Chyba připojení: ".$conn->connect_error);
}
else{
    echo "<p>Úspěšně připojeno</p>";
}
$sql="INSERT INTO Fyzika VALUES ('pokus1', 'pokus2');";
$conn->query($sql);
?>