<?php

class MainController extends Base_OpacityController {

    public function indexAction() {//默认Action
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



//        $a = Admin_UserModel::find(31);
//
//        vaR_dump($a->toArray());
//
//        $a->free_time = "1213";
//        $a->save();

//        foreach ($a as $aa) {
//            var_dump($aa->username);
//        }


        $this->getView()->assign("content", "Hello opacity");

    }




}