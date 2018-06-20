<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    public function groups()
    {
        return $this->belongsToMany('Aku\Models\Admin\Group');
    }


    

}