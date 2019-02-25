<?php
//Quick API for for all data in db
include_once('includes/php/sqlInterface.php');


$sqlInterface = new sqlInterface();

$data = $sqlInterface->getAllCategories();

echo $data;

?>