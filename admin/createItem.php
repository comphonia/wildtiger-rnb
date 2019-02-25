<?php session_start(); 

if($_SESSION["isAdmin"] == false){
   header('Location: http://localhost/wildtiger-rnb/admin/index.php');
}

?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="assets/admin.css">
    <title>Admin | WildTiger</title>
</head>

<body class="">
    <div class="container">
        <div class="row">
            <div class="col-12 my-4">
                <div class="text-center sig-header">WildTiger Admin Page</div>
                <a href="http://localhost/wildtiger-rnb/admin/index.php" class="backbtn float-left"> Logout</a>
                <a href="../" class="backbtn float-right"> Go to Menu</a>
            </div>
            <div class="col-12">
                <?php
                if(isset($_SESSION["isError"])){
                if( $_SESSION["isError"] == true){
                    echo "<div class='alert alert-danger alert-dismissible fade show' role='alert' id='alert'>
                            <div><strong>Error: </strong> {$_SESSION["errorMessage"]}</div>
                            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                           </div>";
                    } else{
                        echo "<div class='alert alert-success alert-dismissible fade show' role='alert' id='alert'>
                            <div><strong>Success: </strong> Menu Item Created</div>
                            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                           </div>";
                
                          }
                    session_destroy();
                }
            ?>


                <form class="add-form my-3" action="includes/php/uploadHandler.php" method="post" enctype="multipart/form-data" id="">

                    <div class="form-group">
                        <label>Menu Item Name:</label>
                        <input type="text" name="name" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Item Category:</label>
                        <select class="form-control" name="category">
                            <option value="1">Appetizers</option>
                            <option value="2">Entrees</option>
                            <option value="3">Sides</option>
                            <option value="4">Specials</option>
                            <option value="5">Desserts</option>
                            <option value="6">Drinks</option>
                        </select>
                    </div>


                    <label>Item Image:</label>
                    <div class="file-upload">
                        <div class="image-upload-wrap">
                            <input class="file-upload-input" type="file" name="fileToUpload" onchange="readURL(this);" accept="image/*" />
                            <div class="drag-text">
                                <h3>Drag and drop or click to select a file</h3>
                            </div>
                        </div>
                        <div class="file-upload-content">
                            <img class="file-upload-image" src="#" alt="your image" />
                            <div class="image-title-wrap">
                                <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="card-header-text my-3 ">Price: <span class="float-right"><input type="text" name="price" id="currencyTextBox" class="form-control" required></span><span class="text-muted float-right mr-3 f1-5">$</span></div>

                    <div class="form-group">
                        <label for="txtArea">Enter Description:</label>
                        <textarea class="form-control" name="description" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-dark float-right">Submit</button>
                </form>
            </div>
            <div class="col-12 mt-5">
                <div class="text-center sig-footer mt-5 mb-2">made with ♡ by <a href="https://www.comphonia.com">Comphonia</a></div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <script src="assets/admin.js"></script>

    <script>
        $(document).ready(function() {

        })

    </script>
</body>

</html>
