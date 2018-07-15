<?php

use Aku\Models\Admin\Example;

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

        $users = Example::paginate(5, ['*'], 'pn', $page);

        echo json_encode($users->toArray());
        exit();

        


        // var_dump($a);

    }

    // public function formAction()
    // {
        
    // }
}