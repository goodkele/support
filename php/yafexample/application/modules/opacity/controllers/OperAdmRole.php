<?php


use \Aku\Models\Admin\AuthRole;

class OperAdmRoleController extends Base_OpacityController
{

    public function indexAction() 
    {
        // echo "index";
        // exit();
    }

    public function addAction()
    {

        if ($this->getRequest()->isPost() && $this->getRequest()->isXmlHttpRequest()) {

            \Yaf\Dispatcher::getInstance()->autoRender(false);

            

            $data = [];
            $data['name'] = $_POST['name'];
            $data['is_admin'] = intval($_POST['is_admin']);

            AuthRole::create(['name' => 'bb']);

            $this->showMessage("创建成功", "location.reload()");

            return;
        }

        $user = \Yaf\Registry::get(\GameConst::ADMINUSER);
        $moduleTree =  $user->getModuleTree();

        $this->getView()->assign('moduleTree', $moduleTree);

        

        
    }

}