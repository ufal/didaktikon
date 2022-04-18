<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$btn=$_POST["second-question"];
$proc=$_POST["why"];

$sql="INSERT INTO NabozenstviiPraprababicka (Odpoved, Proc) VALUES ('$vstup', '$proc');";
$conn->query($sql);

Header("Location:nabozenstvi_4.php?druhe=true");
?>