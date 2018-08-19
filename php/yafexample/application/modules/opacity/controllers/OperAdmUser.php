<?php

class OperAdmUserController extends Base_OpacityController
{

    public function indexAction() 
    {

        \Yaf\Dispatcher::getInstance()->autoRender(false);
        

        
        
        $this->display("index2");
    }

    public function addAction()
    {
        
    }
    
}