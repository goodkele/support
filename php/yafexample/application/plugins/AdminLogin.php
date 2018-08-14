<?php

use \Aku\Models\Admin\User;

class AdminLoginPlugin extends \Yaf\Plugin_Abstract
{
    
    public function routerStartup(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        // var_dump("routerStartup");
    }

    public function routerShutdown(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        
        // $rep->module
        // $rep->controller
        // $rep->action

        // var_dump($req->module, $req->controller, $req->action);




        $user = User::find(1);
        
        \Yaf\Registry::set(\GameConst::ADMINUSER, $user);

        


        // \Yaf\Registry::get(\GameConst::CURRENTVIEW)->assign("HTTP_STATIC_URL", $config->http->static_url);
        // var_dump("routerShutdown");
    }


    public function dispatchLoopStartup(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        // var_dump("dispatchLoopStartup");
    }
    public function preDispatch(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        // var_dump("preDispatch");
    }
    public function postDispatch(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        // var_dump("postDispatch");
    }
    public function dispatchLoopShutdown(\Yaf\Request_Abstract $req, \Yaf\Response_Abstract $rep) 
    {
        // var_dump("dispatchLoopShutdown");
    }



}
