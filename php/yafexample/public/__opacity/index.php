<?php

// ini_set('yaf.use_namespace','0');

// var_dump(ini_get('yaf.use_namespace'));



session_start();
define("APP_PATH",  realpath(dirname(__FILE__) . '/../'));
define("PUBLIC_PATH",  dirname(__FILE__));

$app  = new \Yaf\Application(APP_PATH . "/conf/application.ini");
$app->bootstrap()->run();
