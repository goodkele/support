<?php
session_start();
define("APP_PATH",  realpath(dirname(__FILE__) . '/../'));
define("PUBLIC_PATH",  dirname(__FILE__));
define("APPLICATION_PATH",  dirname(dirname(__FILE__)));

define("APP_WEB_HOST", "http://yafexample.goodkele.com");
define("APP_STATIC_HOST", "http://yafexample.goodkele.com");
define("APP_VERSION", "v1");

require_once APPLICATION_PATH . "/vendor/autoload.php";

$app  = new \Yaf\Application(APPLICATION_PATH . "/conf/application.ini");
$app->bootstrap()->run();
