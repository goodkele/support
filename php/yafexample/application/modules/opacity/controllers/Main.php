<?php

class MainController extends Base_OpacityController 
{

    public function indexAction() 
    {

        $user = \Yaf\Registry::get(\GameConst::ADMINUSER);

        $topMenu = $user->getTopMenu();

        // $leftMenu = $topMenu[0];

        //var_dump($topMenu[0]['sub']);

        // $leftMenu = $user->getLeftMenu();



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
                'leftMenu' => $leftMenu,
            ]
        );

        echo $callback . "(". json_encode([
            'html' => $html,
        ]) .")" ;
    }



}