<?php
$db_name = "anthonye_mit";
$mysql_username = "anthonye_admin";
$mysql_password = "the.Pass1";
$server_name = "204.93.216.11:3306";

$con = mysqli_connect($server_name, $mysql_username, $mysql_password, $db_name);

if($con){
    echo "Connection Successful";
}

else
    echo "Something went wrong"


?>