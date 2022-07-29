<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$vstup=$_POST["second-question"];
$why = $_POST["why"];

$sql="INSERT INTO PsychoVyzkum (Odpoved, Proc) VALUES ('$vstup','$why');";
$conn->query($sql);

Header("Location:psychoterapie_vyzkum.php?druhe=true");
?>