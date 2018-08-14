<?php

class IndexController extends Base_OpacityController {

    public function indexAction()
    {

    }

    /**
     * 登录
     */
    public function loginAction()
    {
        
    }

    /**
     * 登出
     */
    public function logoutAction()
    {

    }

    /**
     * 验证码
     */
    public function vercodeAction()
    {
        \Yaf\Dispatcher::getInstance()->disableView();
        $vi = new Vcode();
        $vi->SetImage(1, 4, 130, 38, 10, 3);
    }

}