<?php
include "../db.php";
 echo "ahoj";
    // Checking, if post value is
    // set by user or not
    if(isset($_GET['vystup']))
    {
        echo "vystup je setly";
        // Getting the value of button
        // in $btnValue variable
        $btnValue = $_GET['vystup'];
        if($btnValue == "Výstup A"){
            $sql="INSERT INTO Divadlo(Odpoved) VALUES (TRUE);";
            $vystup="A";
        }
        else if($btnValue == "Výstup B"){
            $sql="INSERT INTO Divadlo(Odpoved) VALUES (FALSE);";
            $vystup="B";
        }
        $conn->query($sql);

        $sql_correct="SELECT Count(Odpoved) AS Pocet FROM Divadlo WHERE Odpoved='1';";
        $result = $conn->query($sql_correct);
        $row=$result->fetch_assoc();
        $correct= $row["Pocet"];
        $sql_correct="SELECT Count(Odpoved) AS Pocet FROM Divadlo ;";
        $result = $conn->query($sql_correct);
        $row=$result->fetch_assoc();
        $all= $row["Pocet"];
        
       Header("Location:divadlo_kviz_3.php?correct=$correct&all=$all&vystup=$vystup");
    }
?>