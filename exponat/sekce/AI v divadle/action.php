<?php
include "../db.php";
 
    // Checking, if post value is
    // set by user or not
    if(isset($_POST['btnValue']))
    {
        // Getting the value of button
        // in $btnValue variable
        $btnValue = $_POST['btnValue'];
        if($btnValue=="A"){
            $sql="INSERT INTO Divadlo(Odpoved) VALUES (TRUE);";
        }
        else if($btnValue == "B"){
            $sql="INSERT INTO Divadlo(Odpoved) VALUES (FALSE);";
        }
        $conn->query($sql);

        $sql_correct="SELECT Count(Odpoved) FROM Nabozenstvi WHERE Odpoved='1';";
        $result = $conn->query($sql_correct);

         // Sending Response
        echo "Success, $result";
    }
?>