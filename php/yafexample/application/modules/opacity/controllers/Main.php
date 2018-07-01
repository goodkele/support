<?php

class MainController extends Base_OpacityController 
{
    /**
     * 首页
     */
    public function indexAction() 
    {

        /* @var \Aku\Models\Admin\User */
        $user = \Yaf\Registry::get(\GameConst::ADMINUSER);

        $topMenu = $user->getTopMenu();

        $this->getView()->assign("topMenu", $topMenu);
        $this->getView()->assign("leftMenu", $topMenu[0]['sub'] ? $topMenu[0]['sub'] : []);
        
        $this->getView()->assign('module', strtolower($req->module));
        $this->getView()->assign('controller', strtolower($req->controller));
        $this->getView()->assign('action', strtolower($req->action));
    }

    /**
     * 获得左边导航栏
     */
    public function getLeftMenuAction()
    {
        \Yaf\Dispatcher::getInstance()->autoRender(false);

        //$this->getRequest()->get
        $pid = intval($_GET['pid']);
        $callback = $_GET['callback'];
        $user = \Yaf\Registry::get(\GameConst::ADMINUSER);

        // $topMenu = $user->getTopMenu();

        $leftMenu = $user->getLeftMenu($pid);

        $html = $this->getView()->render(
            "main/getleftmenu.html",
            [
                'callback' => $callback,
                'leftMenu' => $leftMenu['sub'] ? $leftMenu['sub'] : [],
            ]
        );

        echo $callback . "(". json_encode([
            'html' => $html,
            'module' => $leftMenu['module'],
            'controller' => $leftMenu['controller'],
        ]) .")" ;
    }

    /**
     * 
     */
    public function homepageAction()
    {


    }


}