<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{

//    public function _initConfig() {
//        $config = Yaf_Application::app()->getConfig();
//        Yaf_Registry::set("config", $config);
//    }

//    public function _initDefaultName(Yaf_Dispatcher $dispatcher) {
//        $dispatcher->setDefaultModule("Index")->setDefaultController("Index")->setDefaultAction("index");
//    }

    /**
     * 初始化时间
     */
    public function _initDate()
    {
        Yaf_Registry::set('NOWTIME', time());

        // 时区
        if (!is_null(Yaf_Application::app()->getConfig()->application->timezone)) {
            date_default_timezone_set(Yaf_Application::app()->getConfig()->application->timezone);
        } else {
            date_default_timezone_set('Asia/Shanghai');
        }
    }

    /**
     * 注册本地命名空间
     */
    public function _initLocalName()
    {
        Yaf_Loader::getInstance()->registerLocalNamespace(array(
            'Smarty',
        ));
    }

    /**
     * 初始化smarty
     *
     * @param Yaf_Dispatcher $dispatcher
     */
    public function _initSmarty(Yaf_Dispatcher $dispatcher)
    {
        Yaf_Loader::import("Smarty/Adapter.php");
        $smarty = new Smarty_Adapter(null, Yaf_Application::app()->getConfig()->smarty);
        $dispatcher->setView($smarty);
    }

}