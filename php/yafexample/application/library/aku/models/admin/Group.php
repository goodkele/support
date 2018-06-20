<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    public function users()
    {
        return $this->belongsToMany('Aku\Models\Admin\User');
    }

    public function modules()
    {
        return $this->belongsToMany('Aku\Models\Admin\Module');
    }



}