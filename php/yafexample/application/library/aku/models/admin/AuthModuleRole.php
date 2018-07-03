<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class AuthModuleRole extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    protected $table = \GameConst::TBL_AKUADMIN_AUTH_MODULE_ROLE;

    protected $fillable = [
        'role_id',
        'module_id',
    ];

    // public function groups()
    // {
    //     return $this->belongsToMany(
    //         'Aku\Models\Admin\AuthRole'
    //     );
    // }

    

}