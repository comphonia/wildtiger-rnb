<?php
session_start();
// Basic auth for demo purposes

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $password = trim(filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING));
    if($name == "admin" && $password == "wild104.9"){
        $_SESSION["isAdmin"] = true;
        header('Location: http://comphonia.com/playground/wildtiger-rnb/admin/createItem.php');
    }
} else session_destroy();

?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Admin for wildtiger">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="assets/admin.css">
    <title>Admin | WildTiger</title>
</head>

<body class="">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto login ">
                <img src="assets/tiger-draw.png" class="img-fluid">
                <div class="sig-header" style="position: relative; top: -60px">Admin Login <span class="f" style="top: 22px; position: relative; font-size: 0.5em;">beta</span></div>
                <form class="mt-3" method="post" action="">
                    <div class="form-group">
                       <label for="usernameInput" class="sr-only">Enter your Username</label>
                        <input type="text" class="form-control" name="name"  placeholder="Enter username">
                    </div>
                    <div class="form-group my-5">
                       <label for="passwordInput" class="sr-only">Enter your Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Password">
                    </div>
<!--
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
-->
                    <button type="submit" class="btn btn-outline-dark w-100">Submit</button>
                   <small class="form-text text-muted text-center my-3">[demo] u: admin | p: wild104.9</small>
                </form>
            </div>

            <div class="col-12 mt-5">
                <div class="text-center sig-footer mt-5 mb-2">made with ♡ by <a href="https://www.comphonia.com">Comphonia</a></div>
            </div>
        </div>
    </div>
</body>

</html>
