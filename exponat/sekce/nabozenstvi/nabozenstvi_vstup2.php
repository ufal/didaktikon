<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$vstup=$_POST["second-otazka"];
$why = $_POST["why"];

$sql="INSERT INTO NabozenstviPraprababicka (Odpoved, Proc) VALUES ('$vstup','$why');";
$conn->query($sql);

Header("Location:nabozenstvi_4.php?druhe=true");
?>