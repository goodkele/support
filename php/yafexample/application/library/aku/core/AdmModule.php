<?php

namespace Aku\Core;

use \Aku\Models\Admin\Module;

class AdmModule 
{

    /**
     * 获得权限树-3层
     */
    public static function getModuleTree($pid = 0)
    {
        $list = Module::all();
        return self::getModuleTreeRecursion($list, $pid);
    }

    /**
     * 私有方法-递归权限树
     */
    private static function getModuleTreeRecursion($list, $pid = 0) 
    {
        $re = [];
        foreach ($list as $val) {
            if ($val->pid == $pid) {
                $module = $val->toArray();
                if ($val->level < 3) {
                    $module['sub'] = self::getModuleTreeRecursion($list, $val->id);
                }
                $re[] = $module;
            }
        }
        
        return $re;
    }
}

