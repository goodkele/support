<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class AuthRole extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    protected $fillable = [
        'name',
        'is_admin',
    ];

    public function users()
    {
        return $this->belongsToMany(
            'Aku\Models\Admin\User',
            \GameConst::TBL_AKUADMIN_AUTH_ROLE_USER,
            'role_id',
            'user_id'
        );
    }

    public function modules()
    {
        return $this->belongsToMany(
            'Aku\Models\Admin\AuthModule', 
            \GameConst::TBL_AKUADMIN_AUTH_MODULE_ROLE,
            'role_id',
            'module_id'
        );
    }


}