<?php


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Events\Dispatcher as LDispatcher;
use Illuminate\Container\Container as LContainer;
use Illuminate\Database\Capsule\Manager as Capsule;


class Admin_UserModel extends Model
{
    /**
     * @var Admin_UserModel
     */
    private static $instance;

    /**
     * Get the instance of Admin_UserModel.
     *
     * @return Admin_UserModel
     */
    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function sayHello()
    {

        ;
//        var_dump(DB::connection());

//        ; database
//database.driver     = mysql
//database.host       = 127.0.0.1
//database.database   = yaf
//database.username   = root
//database.password   = 123456
//database.port       = 3306
//database.charset    = utf8
//database.collation  = utf8_unicode_ci
//database.prefix     = ""
//
//
//        $capsule = new Capsule();
//        $capsule->addConnection(
//            [
//                'driver' => 'mysql',
//                'host' => '127.0.0.1',
//                'database' => 'aku_yd',
//                'username' => 'root',
//                'password' => '!Mima2008',
//                'port' => 3306,
//                'charset' => 'utf8',
//                'collation' => 'utf8_unicode_ci',
//                'prefix' => '',
//            ]
//        );
//        $capsule->setEventDispatcher(new LDispatcher(new LContainer));
////        $capsule->setAsGlobal();
////        $capsule->bootEloquent();




        vaR_dump($capsule);

        var_dump('hello world');
    }


}