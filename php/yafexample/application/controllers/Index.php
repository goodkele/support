<?php

use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;

use \Aku\Models\Admin\User;
use \Aku\Models\Admin\LoginLog;

use \Aku\Core\AdmModule;

class IndexController extends Base_BaseController {
    
    public function indexAction() 
    {

        // $a = LoginLog::all();
        // var_dump($a);
        // exit();

        $a = AdmModule::getModuleTree();

        var_dump($a);

        exit();


        $user = User::find(1);
        
        var_dump($user->modules);

        exit();


        foreach ($user->groups as $group) {
            var_dump($group->modules);
        }
        
        
        exit();
        
        //默认Action


        $qrcode = new BaconQrCodeGenerator;

//        $log = file_get_contents(DATAPATH . "/s_akuyd.png");

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

        return;
        exit();

        new \Admin\UserModel();

        $this->getView()->assign("content", "Hello Wor123ld");
    }

    public function mainAction()
    {
        
    }

    public function main2Action()
    {
    }



    public function testAction() {
        $str = <div class=\"hDiv\">
    <div class=\"hDivBox\">
<table cellpadding=\"0\" cellspacing=\"0\">
<thead>
<tr>
<th align=\"right\" >
<div style=\"text-align: center; width: 100px;\">操作</div>
</th>
<th align=\"Center\"  class=\"\">
<div style=\"text-align: center; width: 100px;\">学员姓名</div>
</th>
<th align=\"Center\"  class=\"\">
<div style=\"text-align: center; width: 100px;\">手机号码</div>
</th>
<th align=\"Center\" class=\"\">
<div style=\"text-align: center; width: 100px;\">跟进方式</div>
</th>
<th align=\"left\" >
<div style=\"text-align: center; width: 260px;\">跟进内容</div>
</th>
<th align=\"Center\" class=\"sorted\">
<div class=\"sdesc\" style=\"text-align: center; width: 120px;\">跟进时间</div>
</th>
<th align=\"Center\">
<div style=\"text-align: center; width: 120px;\">预计下次跟进时间</div>
</th>
<th align=\"Center\"  class=\"\">
<div style=\"text-align: center; width: 100px;\">跟进人</div>
</th>
<th align=\"Center\" >
<div style=\"text-align: center; width: 100px;\">状态</div>
</th>
</tr>
</thead>
</table>
</div>

<div id=\"btnShowOrHide\" style=\"
background-image: url('/opacity/images/more.png');
background-repeat: no-repeat;
width: 24px;
height: 28px;
z-index: 999;
position: absolute; top: 3px; left: 1174px;
cursor: default;
cursor:hand;
\"
title=\"隐藏/显示列\">&nbsp;</div>

</div>
    }
}




//function gen_uuid() {
//    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
//        // 32 bits for "time_low"
//        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),
//
//        // 16 bits for "time_mid"
//        mt_rand( 0, 0xffff ),
//
//        // 16 bits for "time_hi_and_version",
//        // four most significant bits holds version number 4
//        mt_rand( 0, 0x0fff ) | 0x4000,
//
//        // 16 bits, 8 bits for "clk_seq_hi_res",
//        // 8 bits for "clk_seq_low",
//        // two most significant bits holds zero and one for variant DCE1.1
//        mt_rand( 0, 0x3fff ) | 0x8000,
//
//        // 48 bits for "node"
//        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
//    );
//}