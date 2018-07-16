<?php

use Aku\Models\Admin\Example;
//use Aku\Models\Admin\Example;

class ExampleListController extends Base_OpacityController
{

    public function indexAction()
    {

    }
    
    public function listAction()
    {
        \Yaf\Dispatcher::getInstance()->autoRender(false);

        // var_dump($this->getRequest()->isXmlHttpRequest());

        // $a = Example::all();

        $page = $_GET['pn'];
        $limit = $_GET['limit'];

        $users = Example::paginate($limit, ['*'], 'pn', $page);

        

        //echo json_encode();

        

        \Tool::show_message($users->toArray());


        //exit();

        // [20,30,50,100,200]


        // var_dump($a);

    }

    // public function formAction()
    // {
        
    // }
}