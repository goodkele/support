<?php

//use Yaf;

\Yaf\Loader::import("Smarty/Adapter.php");


$config = new \Yaf\Config\Ini(APP_PATH . "/application/modules/opacity/conf/application.ini");

$smarty = new Smarty_Adapter(null, $config->smarty->toArray());


\Yaf\Application::app()->getDispatcher()->setView($smarty);

