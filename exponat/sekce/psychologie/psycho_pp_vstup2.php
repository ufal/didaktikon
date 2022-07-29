<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$vstup=$_POST["second-question"];
$why = $_POST["why"];

$sql="INSERT INTO PsychoPop2 (Odpoved, Proc) VALUES ('$vstup','$why');";
$conn->query($sql);

Header("Location:psychologie_pp_3.php?druhe=true");
?>