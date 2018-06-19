<?php

\Yaf\Session::getInstance()->start();

$config = new \Yaf\Config\Ini(APP_PATH . "/application/modules/opacity/conf/application.ini");


$dis=Yaf\Dispatcher::getInstance();

$dis->registerPlugin(new AdminLoginPlugin());

// $dispatcher->registerPlugin(new LogPlugin());

// $this->config->application->protect_from_csrf &&
//     $dispatcher->registerPlugin(new AuthTokenPlugin());


\Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_STATIC_URL", $config->http->static_url);
\Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_HOST_URL", $config->http->host_url);
\Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("VIEW_PATH", $config->view_path);
