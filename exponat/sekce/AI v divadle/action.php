<?php
include "../db.php";
 
    // Checking, if post value is
    // set by user or not
    if(isset($_GET['vystup']))
    {
        // Getting the value of button
        // in $btnValue variable
        $btnValue = $_GET['vystup'];
        if($btnValue == "Výstup A"){
            $sql="INSERT INTO Divadlo(Odpoved) VALUES (TRUE);";
        }
        else if($btnValue == "Výstup B"){
            $sql="INSERT INTO Divadlo(Odpoved) VALUES (FALSE);";
        }
        $conn->query($sql);

        $sql_correct="SELECT Count(Odpoved) FROM Nabozenstvi WHERE Odpoved='1';";
        $result = $conn->query($sql_correct);

        Header("Location:divadlo_kviz_3.html?count=$result");
    }
?>