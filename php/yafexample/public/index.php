<?php
//session_start();

ini_set('session.save_handler', 'redis');
ini_set('session.save_path', 'tcp://:::6379');
ini_set('session.serialize_handler', 'php_serialize');

\Yaf\Session::getInstance()->start();

define("APP_PATH",  realpath(dirname(__FILE__) . '/../'));
define("PUBLIC_PATH",  dirname(__FILE__));
define("APPLICATION_PATH",  dirname(dirname(__FILE__)));

define("APP_WEB_HOST", "http://yafexample.goodkele.com");
define("APP_STATIC_HOST", "http://yafexample.goodkele.com");
define("APP_VERSION", "v1");

require_once APPLICATION_PATH . "/vendor/autoload.php";



$app  = new \Yaf\Application(APPLICATION_PATH . "/conf/application.ini");
$app->bootstrap()->run();
