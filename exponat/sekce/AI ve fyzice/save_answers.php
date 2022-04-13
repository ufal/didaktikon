<head>
<meta charset="UTF-8">
</head>
<?php 
include "db.php";
$prvni_otazka=$_POST["prvni-otazka"];
$druha_otazka=$_POST["druha-otazka"];

$sql="INSERT INTO Fyzika (CoJeAlgoritmus, UzitecnostVCasticoveFyzice) VALUES ('$prvni_otazka', '$druha_otazka');";
$conn->query($sql);

Header("Location:fyzika_2_stranka.html?vyplneno=true");
?>