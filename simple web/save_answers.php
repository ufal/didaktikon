<?php 
include "db.php";
$prvni_otazka=$_POST["prvni-otazka"];
$druha_otazka=$_POST["druha-otazka"];

echo $prvni_otazka;
echo $druha_otazka;

$sql="INSERT INTO Fyzika VALUES ('$prvni_otazka', '$druha_otazka');";
$conn->query($sql);
?>