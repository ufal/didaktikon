<head>
<meta charset="UTF-8">
</head>
<?php 
include "../db.php";
$btn=$_POST["first-question"];



$sql="INSERT INTO PedagogikaVyhody (Statement1, Statement2, Statement3, Statement4, Statement5, Statement6) VALUES ('$btn[0]', '$btn[1]', '$btn[2]', '$btn[3]', '$btn[4]', '$btn[5]');";
$conn->query($sql);

Header("Location:pedagogika_third.php?dokonceno=true");
?>