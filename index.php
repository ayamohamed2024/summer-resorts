<?php
$Name=$_REQUEST['Name'];
$Email=$_REQUEST['Email'];
$password=$_REQUEST['Password'];
$PhoneNumber=$_REQUEST['PhoneNumber'];

if(isset($_post['btntest']))
{
    $host="localhost";
    $user="root"
    $password = "";
    $db="customers";
    @$conn = mysqli_connect($host,$user,$password,$db);
    $insert= "insert into persons values('$Name','$Email','$password','$PhoneNumber')"; 

if($conn)
{
    echo("<h1 style- 'color:green';> Your Registration is Done! </h1>")/;
}

else{
    echo("<h1 style- 'color:red';> Your Registration is Failed! </h1>")/;
}
}

?>