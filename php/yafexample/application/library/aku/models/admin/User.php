<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    public function groups()
    {
        return $this->belongsToMany('Aku\Models\Admin\AuthGroup');
    }

    /**
     * 获得顶部导航栏
     */
    public function getTopMenu()
    {
        $list = [];
        foreach ($this->groups as $group) {
            $list = array_merge($list, $group->modules()->where("pid", 0)->get()->toArray());
        }
        return $list;
    }

    /**
     * 获得左边导航栏
     */
    public function getLeftMenu()
    {

    }
    

}