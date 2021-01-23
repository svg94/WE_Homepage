<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

</head>
<body>
<form method="post">
    <fieldset>
        <legend>Login:</legend>
        Account name:<br>
        <input type="text" placeholder="Name" name="account">
        <br>
        Password:<br>
        <input type="password" placeholder="12345" name="password">
        <br><br>
        <input type="submit" value="Login">
    </fieldset>
</form>
<?php
if( isset($_POST['account'])&& isset($_POST['password'])){
    $account = $_POST['account'];
    $password = $_POST['password'];
    $UserAccount =  hash("sha384",$account) . ',' . hash("sha384",$password);

    $file = './accountData.csv';
    $data = file_get_contents($file);
    $dataLines = explode(PHP_EOL,$data);
    array_pop($dataLines);

    foreach ($dataLines as $account){
        if(strcmp($account,$UserAccount) === 0){
            echo "Login successful";
            return;
        }
    }
    echo "Login unsuccessful";
}
?>
</body>
</html>
