<?php

\Yaf\Session::getInstance()->start();

//use Yaf;
//
//\Yaf\Loader::import("Smarty/Adapter.php");
//
//
$config = new \Yaf\Config\Ini(APP_PATH . "/application/modules/opacity/conf/application.ini");
//
//$smarty = new Smarty_Adapter(null, $config->smarty->toArray());
//
//
//\Yaf\Application::app()->getDispatcher()->setView($smarty);
//


//$view = \Yaf\Dispatcher::getInstance()->initView(APP_PATH . "/application/modules/opacity/views/");

//$view->assign("content2", "123");



\Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_STATIC_URL", $config->http->static_url);
\Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_HOST_URL", $config->http->host_url);

\Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("VIEW_PATH", $config->view_path);





