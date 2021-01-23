<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>

</head>
<body>
    <form method="post">
        <fieldset>
            <legend>Register new Account:</legend>
            Account name:<br>
            <input type="text" placeholder="Name" name="account">
            <br>
            Password:<br>
            <input type="password" placeholder="12345" name="password">
            <br><br>
            <input type="submit" value="Submit">
        </fieldset>
    </form>
<?php
    if( isset($_POST['account'])&& isset($_POST['password'])){
        $account = $_POST['account'];
        $password = $_POST['password'];
        $file = './accountData.csv';
        $new_line =  hash("sha384",$account) . ',' . hash("sha384",$password) . PHP_EOL;

        if( file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)){
            echo "<script> alert(\"Registered successfully!\") </script>";
        }
    }
?>
</body>
</html>
