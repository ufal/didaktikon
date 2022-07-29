<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$vstup=$_POST["first-question"];
$why = $_POST["why"];

$sql="INSERT INTO PsychoPop1 (Odpoved, Proc) VALUES ('$vstup','$why');";
$conn->query($sql);

Header("Location:psychologie_pp_3.php?prvni=true");
?>