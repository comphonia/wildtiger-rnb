<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//Quick API for for all data in db
include_once('includes/php/sqlInterface.php');


$sqlInterface = new sqlInterface();

$data = $sqlInterface->getAllCategories();

echo $data;

?>