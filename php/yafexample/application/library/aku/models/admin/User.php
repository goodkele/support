<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Codeception\Step\Condition;

class User extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    public function groups()
    {
        return $this->belongsToMany(
            'Aku\Models\Admin\AuthROle',
            \GameConst::TBL_AKUADMIN_AUTH_ROLE_USER,
            'user_id',
            'role_id'
        );
    }

    /**
     * 获得权限模型树
     */
    public function getModuleTree()
    {
        $re = [];

        $isAdmin = false;
        foreach ($this->groups as $group) {
            if ($group->is_admin) {
                $isAdmin = true;
            }
        }

        $moduleTree = \Aku\Core\AdmAuthModule::getModuleTree();

        if ($isAdmin) {
            $re = $moduleTree;
        } else {

            foreach ($moduleTree as $module) {

                // 一层
                foreach ($this->groups as $group) {
                    foreach ($group->modules as $groupModule) {   
                        if ($module['id'] == $groupModule->id) {
                            $re[$module['id']] = $module;
                            continue;
                        }
                    }
                }

                foreach ($module['sub'] as $subModule) {

                    // 二层
                    foreach ($this->groups as $group) {
                        foreach ($group->modules as $groupModule) {
                            if ($subModule['id'] == $groupModule->id) {
                                $re[$module['id']]['sub'][$subModule['id']] = $subModule;
                                continue;
                            }
                        }
                    }

                    foreach ($subModule['sub'] as $subSubModule) {

                        // 三层
                        foreach ($this->groups as $group) {
                            foreach ($group->modules as $groupModule) {
                                if ($subSubModule['id'] == $groupModule->id) {
                                    
                                    if (!$re[$module['id']]) {
                                        $temp = $module;
                                        $temp['sub'] = [];
                                        $re[$module['id']] = $temp;
                                    }

                                    if (!$re[$module['id']]['sub'][$subModule['id']]) {
                                        $temp = $subModule;
                                        $temp['sub'] = [];
                                        $re[$module['id']]['sub'][$subModule['id']] = $temp;
                                    }
                                    
                                    $re[$module['id']]['sub'][$subModule['id']]['sub'][$subSubModule['id']] = $subSubModule;
                                }
                                
                            }
                        }

                    }
                }
            }
        }

        return $re;
    }

    /**
     * 获得顶部导航栏
     */
    public function getTopMenu()
    {
        return $this->getModuleTree();
    }

    /**
     * 获得左边导航栏
     */
    public function getLeftMenu($module_id)
    {
        $moduleTree = $this->getModuleTree();
        foreach ($moduleTree as $module) {
            if ($module['id'] == $module_id) {
                return $module ? $module : [];
            }
        }
        return [];
    }

    /**
     * 验证用户是否有此权限
     */
    public function checkAuth($module, $controller)
    {
        // module, controller
        $whilelist = [
            ['opacity', 'index'],
            ['opacity', 'failed'],
        ];

        foreach ($whilelist as $val) {
            if ($module == $val[0] && $controller == $val[1]) {
                return true;
            }
        }

        $moduleTree = $this->getModuleTree();

        foreach ($moduleTree as $module) {
            if ($module['module'] == $module && $module['controller'] == $controller) {
                return true;
            }
            foreach ($module['sub'] as $subModule) {
                if ($subModule['module'] == $module && $subModule['controller'] == $controller) {
                    return true;
                }
                foreach ($subModule['sub'] as $subSubModule) {
                    if ($subSubModule['module'] == $module && $subSubModule['controller'] == $controller) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
    
}