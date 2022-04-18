<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$btn=$_POST["first-question"];
$proc=$_POST["why"];

$sql="INSERT INTO NabozenstviPraprababicka (Odpoved, Proc) VALUES ('$btn', '$proc');";
$conn->query($sql);

Header("Location:pedagogika_second.php?prvni=true");
?>