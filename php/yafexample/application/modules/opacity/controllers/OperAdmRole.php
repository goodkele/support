<?php


use \Aku\Models\Admin\AuthRole;
use \Aku\Models\Admin\AuthModuleRole;


class OperAdmRoleController extends Base_OpacityController
{

    public function indexAction() 
    {
        // echo "index";
        // exit();

        $list = AuthRole::orderBy('id', 'DESC')->get();



        $this->getView()->assign('list', $list);

        //vaR_dump($list->toArray());

    }

    public function addAction()
    {

        if ($this->getRequest()->isPost() && $this->getRequest()->isXmlHttpRequest()) {

            \Yaf\Dispatcher::getInstance()->autoRender(false);

            $data = [];
            $data['name'] = $_POST['name'];
            $data['is_admin'] = intval($_POST['is_admin']);
            $auto_module = $_POST['auto_module'];

            $roleInfo = AuthRole::create($data);

            if ($auto_module && is_array($auto_module)) {
                foreach ($auto_module as $module_id)
                AuthModuleRole::create(['role_id'=>$roleInfo->id, 'module_id'=>$module_id]);
            }

            $this->showMessage("创建成功", "location.reload()");

            return;
        }

        $user = \Yaf\Registry::get(\GameConst::ADMINUSER);
        $moduleTree =  $user->getModuleTree();

        $this->getView()->assign('moduleTree', $moduleTree);
    }



}