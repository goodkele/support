<?php
//use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;

class HomepageController extends Base_V1Controller {

    public function indexAction() { //默认Action



//        $a = \Yaf\Application::app()->getDispatcher()->getRequest();
//
//            vaR_dump($a);
//
//            return;


        $this->getView()->assign('content', 'asdf');


//        Admin_UserModel::getInstance()->sayHello();

        $a = Admin_UserModel::all();

        foreach ($a as $aa) {
            vaR_dump($aa->name);
        }



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

//        $this->getView()->assign("content", "Hello opacity");
        
        // var_dump(APP_VERSION);

        // define("APP_PATH",  realpath(dirname(__FILE__) . '/../'));
        // define("PUBLIC_PATH",  dirname(__FILE__));
        // define("APPLICATION_PATH",  dirname(dirname(__FILE__)));

        // var_dump(APP_PATH);
        // var_dump(APPLICATION_PATH);

        // APP_PATH

        
        
        // vaR_dump($this->getRequest()->module);

        // echo APP_PATH . "/application/modules/v1/views/homepage/index.html";

    //    return $this->getView()->render(APP_PATH . "/application/modules/v1/views/homepage/index.html");

 
//    echo "asdf";
//    exit();
    
        
    }

    public function mainAction()
    {

    }

    public function main2Action()
    {
    }
}