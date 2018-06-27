<?php

class Vcode
{

    var $mode;
    var $v_num;
    var $img_w;
    var $img_h;
    var $int_pixel_num;
    var $int_line_num;
    var $font_dir;
    var $border;
    var $borderColor;

    function SetImage(
        $made,
        $v_num,
        $img_w,
        $img_h,
        $int_pixel_num,
        $int_line_num,
        $font_dir = './opacity/assets/font',
        $border = true,
        $borderColor = '255,200,85'
    ) {
//  if(!isset($_SESSION['vCode'])){
//   session_register('vCode');
//  }
        $_SESSION['vCode'] = "";

        $this->mode = $made;
        $this->v_num = $v_num;
        $this->img_w = $img_w;
        $this->img_h = $img_h;
        $this->int_pixel_num = $int_pixel_num;
        $this->int_line_num = $int_line_num;
        $this->font_dir = $font_dir;
        $this->border = $border;
        $this->borderColor = $borderColor;
        $this->GenerateImage();
    }

    function GetChar($mode)
    {
        if ($mode == "1") {
            $ychar = "0,1,2,3,4,5,6,7,8,9";
        } else {
            if ($mode == "2") {
                $ychar = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
            } else {
                if ($mode == "3") {
                    $ychar = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
                } else {
                    $ychar = "3,4,5,6,7,8,9,A,B,C,D,H,K,P,R,S,T,W,X,Y";
                }
            }
        }
        return $ychar;
    }

    function RandColor($rs, $re, $gs, $ge, $bs, $be)
    {
        $r = mt_rand($rs, $re);
        $g = mt_rand($gs, $ge);
        $b = mt_rand($bs, $be);
        return array($r, $g, $b);
    }

    function GenerateImage()
    {
        $im = imagecreate($this->img_w, $this->img_h);

        $black = imagecolorallocate($im, 0, 0, 0);
        $white = imagecolorallocate($im, 255, 255, 255);
        $bgcolor = imagecolorallocate($im, 223, 225, 154);

        imagefill($im, 0, 0, $bgcolor);

        $ychar = $this->GetChar($this->mode);
        $list = explode(",", $ychar);

        $x = mt_rand(2, $this->img_w / ($this->v_num + 2));
        $cmax = count($list) - 1;

        $v_code = '';

        for ($i = 0; $i < $this->v_num; $i++) {
            $randnum = mt_rand(0, $cmax);
            $this_char = $list[$randnum];
            $v_code .= $this_char;
            $size = mt_rand(intval($this->img_w / 5), intval($this->img_w / 4));
            $angle = mt_rand(-20, 20);
            $y = mt_rand(($size + 2), ($this->img_h - 2));
            if ($this->border) {
                $y = mt_rand(($size + 3), ($this->img_h - 3));
            }
            $rand_color = $this->RandColor(0, 200, 0, 100, 0, 250);
            $randcolor = imagecolorallocate($im, $rand_color[0], $rand_color[1], $rand_color[2]);
            $font = "$this->font_dir/arial.ttf";
            imagettftext($im, $size, $angle, $x, $y, $randcolor, $font, $this_char);
            $x = $x + intval($this->img_w / ($this->v_num + 1));
        }

        for ($i = 0; $i < $this->int_pixel_num; $i++) {//
            $rand_color = $this->RandColor(50, 250, 0, 250, 50, 250);
            $rand_color_pixel = imagecolorallocate($im, $rand_color[0], $rand_color[1], $rand_color[2]);
            imagesetpixel($im, mt_rand() % $this->img_w, mt_rand() % $this->img_h, $rand_color_pixel);
        }

        for ($i = 0; $i < $this->int_line_num; $i++) { //
            $rand_color = $this->RandColor(0, 250, 0, 250, 0, 250);
            $rand_color_line = imagecolorallocate($im, $rand_color[0], $rand_color[1], $rand_color[2]);
            imageline($im, mt_rand(0, intval($this->img_w / 3)), mt_rand(0, $this->img_h),
                mt_rand(intval($this->img_w - ($this->img_w / 3)), $this->img_w), mt_rand(0, $this->img_h),
                $rand_color_line);
        }

        if ($this->border) {
            $borderColor = array('187', '187', '187');
            $border_color_line = imagecolorallocate($im, $borderColor[0], $borderColor[1], $borderColor[2]);
            imageline($im, 0, 0, $this->img_w, 0, $border_color_line);
            imageline($im, 0, 0, 0, $this->img_h, $border_color_line);
            imageline($im, 0, $this->img_h - 1, $this->img_w, $this->img_h - 1, $border_color_line);
            imageline($im, $this->img_w - 1, 0, $this->img_w - 1, $this->img_h, $border_color_line);
        }

        $time = time();
        $_SESSION['vCode'] = $v_code;

        if (function_exists("imagegif")) {
            header("Content-type: image/gif");
            imagegif($im);
        } elseif (function_exists("imagepng")) {
            header("Content-type: image/png");
            imagepng($im);
        } elseif (function_exists("imagejpeg")) {
            header("Content-type: image/jpeg");
            imagejpeg($im, "", 80);
        } elseif (function_exists("imagewbmp")) {
            header("Content-type: image/vnd.wap.wbmp");
            imagewbmp($im);
        } else {
            die("No Image Support On This Server !");
        }

        imagedestroy($im);
    }

}

?>
