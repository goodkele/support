<?php

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

            echo '<div>
            <h5><label><input type="checkbox">账户管理</label></h5>
            <label style="display:inline-block"><input type="checkbox">用户信息添加</label>
            <label style="display:inline-block"><input type="checkbox">用户管理</label>
            <label style="display:inline-block"><input type="checkbox">部门管理</label>
            <label style="display:inline-block"><input type="checkbox">用户日志</label>
            <label style="display:inline-block"><input type="checkbox">用户信息添加</label>
            <label style="display:inline-block"><input type="checkbox">用户管理</label>
            <label style="display:inline-block"><input type="checkbox">部门管理</label>
            <label style="display:inline-block"><input type="checkbox">用户日志</label>
            <label style="display:inline-block"><input type="checkbox">用户信息添加</label>
            <label style="display:inline-block"><input type="checkbox">用户管理</label>
            <label style="display:inline-block"><input type="checkbox">部门管理</label>
            <label style="display:inline-block"><input type="checkbox">用户日志</label>
            <label style="display:inline-block"><input type="checkbox">用户信息添加</label>
            <label style="display:inline-block"><input type="checkbox">用户管理</label>
            <label style="display:inline-block"><input type="checkbox">部门管理</label>
            <label style="display:inline-block"><input type="checkbox">用户日志</label>
            <label style="display:inline-block"><input type="checkbox">用户信息添加</label>
            <label style="display:inline-block"><input type="checkbox">用户管理</label>
            <label style="display:inline-block"><input type="checkbox">部门管理</label>
            <label style="display:inline-block"><input type="checkbox">用户日志</label>
            <label style="display:inline-block"><input type="checkbox">用户信息添加</label>
            <label style="display:inline-block"><input type="checkbox">用户管理</label>
            <label style="display:inline-block"><input type="checkbox">部门管理</label>
            <label style="display:inline-block"><input type="checkbox">用户日志</label>
        </div>';
            
            return;
        }

        
        
    }

}