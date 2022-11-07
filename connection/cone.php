<?php
    $servername: "localhost"; 
    $database: "ehsuite";



    $conec = mysqli_connect($servername, $database, $username, $password);


    if(!$conec) {
        die("connection_filed:". mysqli_connect_error());
    }
    echo "Connection Succesfull!";
    mysqli_close($conec);
?>