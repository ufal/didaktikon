<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";

$btn=$_POST["first-question"];

$st1=substr($btn,0,1);

$st2=substr($btn,1,1);

$st3=substr($btn,2,1);
$st4=substr($btn,3,1);
$st5=substr($btn,4,1);
$st6=substr($btn,5,1);


$sql="INSERT INTO PedagogikaVyhody (Statement1, Statement2, Statement3, Statement4, Statement5, Statement6) VALUES ('$st1', '$st2', '$st3', '$st4', '$st5', '$st6');";
$conn->query($sql);

Header("Location:pedagogika_third.php?dokonceno=true");
?>