<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$vstup=$_POST["second-question"];

$sql="INSERT INTO PsychoChatbot (OdpovedText) VALUES ('$vstup');";
$conn->query($sql);

Header("Location:psychologie_chatbot.php?druhe=true");
?>