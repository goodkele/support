<?php

use \Aku\Models\Admin\User;

class AdminLoginPlugin extends \Yaf\Plugin_Abstract
{

    public function routerShutdown(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        
        // $rep->module
        // $rep->controller
        // $rep->action

        $user = User::find(1);
        
        \Yaf\Registry::set(\GameConst::ADMINUSER, $user);

        

        // \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_STATIC_URL", $config->http->static_url);
        
        
    }

}
