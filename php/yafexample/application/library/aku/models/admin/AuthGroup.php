<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class AuthGroup extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    public function users()
    {
        return $this->belongsToMany(
            'Aku\Models\Admin\User',
            \GameConst::TBL_AKUADMIN_AUTH_GROUP_USER,
            'group_id',
            'user_id'
        );
    }

    public function modules()
    {
        return $this->belongsToMany(
            'Aku\Models\Admin\AuthModule', 
            \GameConst::TBL_AKUADMIN_AUTH_GROUP_MODULE,
            'group_id',
            'module_id'
        );
    }


}