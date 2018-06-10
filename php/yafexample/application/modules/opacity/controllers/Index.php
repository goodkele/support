<?php
//use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;

class IndexController extends BaseController {
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

        echo "asdf123";
        exit();

        $this->getView()->assign("content", "Hello opacity");

    }
}