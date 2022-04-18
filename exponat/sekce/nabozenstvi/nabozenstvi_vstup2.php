<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$btn=$_POST["second-question"];
$proc=$_POST["why"];

$sql="INSERT INTO NabozenstviPraprababicka (Odpoved, Proc) VALUES ('$btn', '$proc');";
$conn->query($sql);

Header("Location:nabozenstvi_4.php?druhe=true");
?>