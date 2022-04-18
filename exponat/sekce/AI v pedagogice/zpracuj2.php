<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$btn=$_POST["second-question"];
$proc=$_POST["why2"];

$sql="INSERT INTO PedagogikaProgramSami (Odpoved, Proc) VALUES ('$btn', '$proc');";
$conn->query($sql);

Header("Location:pedagogika_second.php?druhe=true");
?>