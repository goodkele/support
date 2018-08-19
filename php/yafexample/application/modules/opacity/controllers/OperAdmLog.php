<?php

class OperAdmLogController extends Base_OpacityController
{

    public function indexAction() 
    {
        
        \Yaf\Dispatcher::getInstance()->autoRender(false);


        $this->display("index2");

        // echo "index";
        // exit();
    }
}