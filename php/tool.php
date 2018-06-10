<?php

class Tool 
{
    
    /**
     * 获得最新省市区数据
     * @return array | bool
     */
    public static function getNewAreaData()
    {
        $url = 'http://apis.map.qq.com/ws/district/v1/list?key=IVYBZ-PKMWX-UMU42-ZC476-IGFHE-ACBJY';
        $json = file_get_contents($url);
        $json = json_decode($json, true);

        if (!is_array($json)) return false;

        list ($sheng, $shi, $qu) = $json['result'];

        if (!is_array($sheng)) return false;
        if (!is_array($shi)) return false;
        if (!is_array($qu)) return false;

        $re = [];

        foreach ($sheng as $val) {

            $data = [];
            $isZhixia = false;
            if (in_array($val['name'], array('北京', '上海', '天津', '重庆', '香港', '澳门'))) {
                $isZhixia = true;
            }

            $data['n'] = $isZhixia ? $val['name'] : $val['fullname'];

            // 二级
            for ($i=$val['cidx'][0]; $i<=$val['cidx'][1]; $i++) {

                $sub = [];
                $sub['n'] = $shi[$i]['fullname'];

                // 三级
                if (array_key_exists('cidx', $shi[$i])) {
                    $subsub = [];
                    for ($y = $shi[$i]['cidx'][0]; $y<=$shi[$i]['cidx'][1]; $y++) {
                        $subsub[]['n'] = $qu[$y]['fullname'];
                    }
                    if ($subsub) {
                        $sub['s'] = $subsub;
                    }
                }

                if ($sub) {
                    $data['s'][] = $sub;
                }
            }

            if ($isZhixia) {
                $tmp = $data['s'];
                unset($data['s']);
                $data['s'][0]['n'] = $val['fullname'];
                $data['s'][0]['s'] = $tmp;
            }

            $re[] = $data;

        }

        return $re;
    }

    /**
     * 生成微页面ID
     *
     * @return string
     */
    public static function calcMicroPageId()
    {
        $mtime = microtime();
        $mtime = explode(" ", $mtime);
        $last = str_pad((1000000 * $mtime[0]),  6, "0");
        $version = base_convert($mtime[1] . $last, 10, 36);
        return$version . mt_rand(10000, 99999);
    }



    /**
     * 营销模板变量替换
     *
     * @author wulei
     * @param $str      string  寻找字符串中<:abcde/>标签
     * @param $params   array   替换['abcde'=>''] 替换abcde标签为空字符串
     * @return string
     */
    public static function promotionTempRender($str, $params)
    {
        $p = '/<:(\w+)\/>/';

        $str = preg_replace_callback($p,
            function ($matches) use ($params) {
                if (isset($matches[1])) {
                    return $params[strtolower($matches[1])] ? $params[strtolower($matches[1])] : '';
                }
                return '';
            },
            $str
        );

        return $str;
    }

}