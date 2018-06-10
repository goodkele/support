<?php
//use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;

// namespace mod;



class IndexController extends Base_ModController {
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
       $this->getView()->assign("content", "Hello World");
       $this->getView()->assign("content2", "2");
        // echo "Asdf123";
        // exit();
    }
}