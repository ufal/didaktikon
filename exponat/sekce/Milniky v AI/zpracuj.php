<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";

$btn=$_POST["first-question"];
$vysledky = $_POST["vysledky"];

$st1=substr($btn,0,4);
$st2=substr($btn,4,4);
$st3=substr($btn,8,4);
$st4=substr($btn,12,4);
$st5=substr($btn,16,4);
$st6=substr($btn,20,4);
$st7=substr($btn,24,4);
$st8=substr($btn,28,4);
$st9=substr($btn,32,4);
$st10=substr($btn,36,4);


$sql="INSERT INTO Milniky (Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10) VALUES ('$st1', '$st2', '$st3', '$st4', '$st5', '$st6','$st7', '$st8', '$st9', '$st10');";
$conn->query($sql);

Header("Location:milniky_otazka.php?odpovedi=$vysledky");
?>