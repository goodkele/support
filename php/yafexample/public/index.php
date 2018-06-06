<?php
session_start();
define("APP_PATH",  realpath(dirname(__FILE__) . '/../'));
define("PUBLIC_PATH",  dirname(__FILE__));
define("APPLICATION_PATH",  dirname(dirname(__FILE__)));

require_once APPLICATION_PATH . "/vendor/autoload.php";

$app  = new Yaf_Application(APPLICATION_PATH . "/conf/application.ini");
$app->bootstrap()->run();
