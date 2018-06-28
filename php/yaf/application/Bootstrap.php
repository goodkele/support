<?php

use Illuminate\Database\Capsule\Manager as Capsule;

class Bootstrap extends \Yaf\Bootstrap_Abstract{

    /**
     * 初始化时区
     */
    public function _initDate()
    {
        \Yaf\Registry::set('NOWTIME', time());

        // 时区
        if (!is_null(\Yaf\Application::app()->getConfig()->application->timezone)) {
            date_default_timezone_set(\Yaf\Application::app()->getConfig()->application->timezone);
        } else {
            date_default_timezone_set('Asia/Shanghai');
        }
    }


    /**
     * 初始化orm
     *
     * @param \Yaf\Dispatcher $dispatcher
     */
    public function _initDb(\Yaf\Dispatcher $dispatcher)
    {
        $capsule = new Capsule();
        $capsule->addConnection(
            \Yaf\Application::app()->getConfig()->database->default->toArray(),
            GameConst::DB_AKUYD
        );

        // $capsule->addConnection(
        //     \Yaf\Application::app()->getConfig()->database->akuadmin->toArray(),
        //     GameConst::DB_AKUADMIN
        // );

        $capsule->setEventDispatcher(new \Illuminate\Events\Dispatcher(new \Illuminate\Container\Container));

        $capsule->setAsGlobal();

        $capsule->bootEloquent();
    }


    /**
     * 注册本地命名空间
     */
    public function _initLocalName()
    {
        \Yaf\Loader::getInstance()->registerLocalNamespace(array(
            'Smarty',
        ));
    }

    // /**
    //  * 初始化smarty
    //  *
    //  * @param Yaf_Dispatcher $dispatcher
    //  */
    // public function _initSmarty(Yaf_Dispatcher $dispatcher)
    // {
    //     Yaf_Loader::import("Smarty/Adapter.php");
    //     $smarty = new Smarty_Adapter(null, Yaf_Application::app()->getConfig()->smarty);
    //     $dispatcher->setView($smarty);
    // }
    

    public function _initModules(\Yaf\Dispatcher $dispatcher)
    {

        $app = $dispatcher->getApplication();
        $modules = $app->getModules();

        $requestUri = $dispatcher->getRequest()->getRequestUri();
        $requestUri = explode("/", $requestUri);

        foreach ($modules as $module) {
            if ('index' == strtolower($module)) continue;
            if ($requestUri['1'] != strtolower($module) || empty($requestUri['1'])) continue;

            

            $view = $dispatcher->initView(APP_PATH . "/application/modules/". strtolower($module) ."/views/");
            \Yaf\Registry::set(\GameConst::CURRENTVIEW, $view);

            require_once $app->getAppDirectory() . "/modules/" . $module . "/boot.php";
        }
    }

}