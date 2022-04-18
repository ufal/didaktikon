<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$vstup=$_POST["prvni-otazka"];

$sql="INSERT INTO NabozenstviSmyslTvorivosti (Odpoved) VALUES ('$vstup');";
$conn->query($sql);

Header("Location:nabozenstvi_4.php?prvni=true");
?>