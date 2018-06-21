<?php

//namespace Aku\Opacity;
//
// use \Admin\ModuleModel as Module;
// use \Admin\UserModel as User;
// use \Admin\GroupModel as Group;



class IndexController extends Base_OpacityController {

    public function indexAction()
    {


        // exit();

        $user = \Yaf\Registry::get(\GameConst::ADMINUSER);

        $a = $user->getTopMenu();

        // var_dump($a->);


        exit();

        // $a = User::find(1);

        // var_dump($a->groups);

        

        // $aa = Group::find(1);

        // var_dump($aa->id);

        // var_dump($aa->users->name);




        // $a = Module::all();

        // var_dump($a);



//
//        $a = 'a:1:{s:1:"a";s:10:"helloworld";}';
//
//        $a = unserialize($a);
//
//        $a['b'] = 'asdf';
//
//        echo serialize($a);
//
//
//        var_dump($a);
//
//        exit();



        //$str = 'a|s:10:"helloworld";';

//        $str = "a|s:10:\"helloworld\";
//        ";
//
//
////        $a = session_decode($str);
//
//        $a = unserialize($str);
//
//
//        vaR_dump($str);
//        vaR_dump($a);
//
//        exit();

//
//        $a = unserialize('a:1:{s:1:"a";s:10:"helloworld";}');
//
//        var_dump($a);
//
//        exit();


//        \Yaf\Session::getInstance()->set('a', 'helloworld');
//
//        $a = \Yaf\Session::getInstance()->get('a');
//        $b = \Yaf\Session::getInstance()->get('b');
//
//        var_dump($a);
//        var_dump($b);

        //默认Action
//        $qrcode = new BaconQrCodeGenerator;
//
////        $log = file_get_contents(DATAPATH . "/s_akuyd.png");
//
//        $png = $qrcode->format("png")
//            ->size(510)
//            ->margin(0)
////            ->mergeString($log, .2)
//            ->errorCorrection('H')
//            ->generate("123");
//
//        header('Content-type: image/png');
//        echo $png;
//
//        exit();
//

//        echo "asdf123";
//        exit();



//        $a = \Admin\GroupModel::all();

//        vaR_dump($a);


//        $a = \Admin\UserModel::all();
//
//        vaR_dump($a->toArray());
//
//        $a->free_time = "1213";
//        $a->save();

//        foreach ($a as $aa) {
//            var_dump($aa->username);
//        }


//        $this->getView()->assign("content", "Hello opacity");

    }



    public function topmenuAction()
    {
        $adminuser = \Yaf\Registry::get(\GameConst::ADMINUSER);

        // $adminuser->groupid

    }

    public function leftmenuAction()
    {
        $adminuser = \Yaf\Registry::get(\GameConst::ADMINUSER);

        // $adminuser->group_id

        
    }


}