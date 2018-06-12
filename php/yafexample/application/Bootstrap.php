<?php

use Yaf\Registry;
use Yaf\Dispatcher;
use Yaf\Application;
use Yaf\Bootstrap_Abstract;

//use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
use Illuminate\Database\Capsule\Manager as Capsule;

class Bootstrap extends \Yaf\Bootstrap_Abstract{

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
        \Yaf\Registry::set('NOWTIME', time());

        // 时区
        if (!is_null(\Yaf\Application::app()->getConfig()->application->timezone)) {
            date_default_timezone_set(\Yaf\Application::app()->getConfig()->application->timezone);
        } else {
            date_default_timezone_set('Asia/Shanghai');
        }
    }


    public function _initDb(Dispatcher $dispatcher)
    {

        $capsule = new Capsule();
        $a = $capsule->addConnection(
            [
                'driver' => 'mysql',
                'host' => '127.0.0.1',
                'database' => 'aku_yd',
                'username' => 'root',
                'password' => '!Mima2008',
                'port' => 3306,
                'charset' => 'utf8',
                'collation' => 'utf8_unicode_ci',
                'prefix' => '',
            ]
        );


//        vaR_dump($capsule->select("select * from aku_user"));

        $capsule->setEventDispatcher(new \Illuminate\Events\Dispatcher(new \Illuminate\Container\Container));

        $capsule->setAsGlobal();
        $capsule->bootEloquent();



//        $capsule->setEventDispatcher(new LDispatcher(new LContainer));
//        $capsule->setAsGlobal();
//        $capsule->bootEloquent();
    }

    // /**
    //  * 注册本地命名空间
    //  */
    // public function _initLocalName()
    // {
    //     Yaf_Loader::getInstance()->registerLocalNamespace(array(
    //         'Smarty',
    //     ));
    // }

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

}