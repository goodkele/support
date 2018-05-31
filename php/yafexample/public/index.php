<?php
define("APPLICATION_PATH",  dirname(dirname(__FILE__)));

require_once APPLICATION_PATH . "/vendor/autoload.php";

$app  = new Yaf_Application(APPLICATION_PATH . "/conf/application.ini");
$app->bootstrap() //call bootstrap methods defined in Bootstrap.php
->run();