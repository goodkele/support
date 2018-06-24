<?php

use \Aku\Models\Admin\User;

class AdminLoginPlugin extends \Yaf\Plugin_Abstract
{

    public function routerShutdown(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        
        // $rep->module
        // $rep->controller
        // $rep->action

        // var_dump($req->module, $req->controller, $req->action);

        $user = User::find(1);
        
        \Yaf\Registry::set(\GameConst::ADMINUSER, $user);

        
        $topMenu = $user->getTopMenu();

        // var_dump($topMenu);

        // $leftMenu = $user->getLeftMenu();

        

        \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("topMenu", $topMenu);
        \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("leftMenu", $leftMenu);

        \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign('module', strtolower($req->module));
        \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign('controller', strtolower($req->controller));
        \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign('action', strtolower($req->action));


        // \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_STATIC_URL", $config->http->static_url);
        
    }

}
