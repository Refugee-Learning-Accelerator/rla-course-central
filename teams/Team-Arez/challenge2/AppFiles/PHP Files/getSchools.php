<?php
require "conn.php";

$command_given = $_POST["Schools"];

//Command to return random results

if (strcmp($command_given, "Schools") === 0){
    
    $mysql_qry = "Select * FROM tbl_schools LIMIT 100;";
    $result = mysqli_query($con , $mysql_qry);

    if(mysqli_num_rows($result) >= 1){
       echo "CodeXE2001 ";
        while($row = $result->fetch_assoc()) {
            echo $row["schoolName"]. PHP_EOL . $row["schoolLong"]. PHP_EOL .
            $row["schoolLat"]. PHP_EOL. $row["schoolDescription"]. PHP_EOL . $row["schoolFees"] . PHP_EOL; 
        }
    }

    else
    echo "Error: " . $sql . "<br>" . $con->error . ". Try again in a minute";

    $con->close();
}







?>