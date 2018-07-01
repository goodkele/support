<?php

class Tool
{

    /**
     * URL 重定向
     *
     * @param string $url
     * @param bool|false $client
     */
    public static function urlRedirect($url = '', $client = false)
    {
        if ($url == '') {
            $url = $_SERVER['PHP_SELF'];
        }

        if (function_exists('db_close_all')) {
            db_close_all();
        }

        if ($client) {
            echo("<script type='text/javascript'>window.location = '$url';</script>");
        } else {
            header("location:$url");
        }
        exit;
    }


    /**
     * 输出 json_encode 内容
     * $result: 结果 ( 字符串或数组 )
     *
     * @param $result
     */
    public static function json_show($result)
    {
        echo(json_encode($result));
        exit;
    }

    /**
     * 输出操作完成消息框
     *
     * @param $message
     * @param null $autoScript
     * @param null $scriptCode
     * @param null $scriptText
     */
    public static function show_message($message, $autoScript = null, $scriptCode = null, $code = 0, $error = '')
    {
        self::json_show([
            'code' => $code,
            'error' => $error,
            'data' => $message,
            'auto_script' => $autoScript,
            'script_code' => $scriptCode,
            ]);
    }

    ///**
    //  * 输出json
    //  *
    //  * @param $data
    //  * @param int $code
    //  * @param string $error
    //  */
    // protected function showMessage($code = 0, $data = null, $error = "")
    // {
    //     $json = [
    //         'code' => $code
    //     ];

    //     if ($code < 0) {
    //         if ($error) {
    //             $json['error'] = $error;
    //         } else {
    //             $json['error'] = GameCode::getError($code);
    //         }
    //     } else {
    //         $json['data'] = $data;
    //     }



    //     $this->json($json);
    // }


    /**
     * 系统根 URL
     *
     * @param string $url
     * @return string
     */
    public static function url_root($url = '')
    {
        if (!$url) {
            $scheme = $_SERVER["HTTPS"] == 'on' ? 'https://' : 'http://';
            $urlRoot = $scheme . $_SERVER['HTTP_HOST'];
        } else {
            $parseUrl = parse_url($url);
            $urlRoot = $parseUrl['scheme'] . '://' . $parseUrl['host'];
        }
        return $urlRoot;
    }

    /**
     * 当前页面
     *
     * @return string
     */
    public static function url_current()
    {
        if (!$url = $_SERVER['REQUEST_URI']) {
            $url = $_SERVER['SCRIPT_NAME'];
            if ($_SERVER['QUERY_STRING'] != '') {
                $url .= '?' . $_SERVER['QUERY_STRING'];
            }
        }
        $curUrl = self::url_root() . $url;
        return $curUrl;
    }

    /**
     * 检查非法字符
     *
     * @param $str
     * @return bool|string
     */
    public static function invalid_chars($str)
    {
        if (strlen(str_replace(array('\\', '/', '|', ':', '*', '?', '"' . "'", '<', '>'), '', $str)) != strlen($str)) {
            return '\ / | : * ? " \' < >';
        } else {
            return false;
        }
    }

    /**
     * 分表
     *
     * @param string $str
     * @param int $count
     * @return int
     */
    public static function hash($str, $count)
    {
        return abs(crc32($str) % $count);
    }

    /**
     * 输出
     *
     * @param int $error
     * @param array $result
     */
    public static function jsonResponse($error = 0, $result = array())
    {
        echo json_encode(array('code' => $error, 'data' => $result));
    }

    /**
     * 代理方json输出
     *
     * @param int $error
     * @param $object
     * @param $message
     */
    public static function rkJsonResponse($error =0, $object, $message) {
        echo json_encode(array('code' => $error, 'object' => $object, 'message'=>$message));
    }


    /**
     * 360的输出
     *
     * @param int $error    错误代码
     * @param string $errormsg  错误信息
     * @param $message  信息内容
     */
    public static function jsonResponse360($message, $error=0, $errormsg="") {
        echo json_encode(array('errno' => $error, 'errmsg' => $errormsg, 'data'=>$message));
    }


    /**
     * 获取客户端 IP
     *
     * @return bool
     */
    public static function get_ip()
    {
        $ip = false;

        if (!empty ($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        }

        if (!empty ($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ips = explode(',', str_replace(' ', '', $_SERVER['HTTP_X_FORWARDED_FOR']));
            if ($ip) {
                array_unshift($ips, $ip);
                $ip = false;
            }
        }
        return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
    }


    /**
     * 日期间隔
     *
     * @param $d1
     * @param $d2
     * @return number
     */
    public static function days_diff($d1, $d2) {
        $x1 = self::days($d1);
        $x2 = self::days($d2);

        if ($x1 && $x2) {
            return abs($x1 - $x2);
        }
    }

    public static function days($x) {
        if (get_class($x) != 'DateTime') {
            return false;
        }

        $y = $x->format('Y') - 1;
        $days = $y * 365;
        $z = (int)($y / 4);
        $days += $z;
        $z = (int)($y / 100);
        $days -= $z;
        $z = (int)($y / 400);
        $days += $z;
        $days += $x->format('z');

        return $days;
    }

}