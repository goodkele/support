<?php

namespace Admin;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{

    protected $table = \GameConst::TBL_AKUADMIN_USER;

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;

    public function groups()
    {
        return $this->hasMany('\Admin\GroupModel', 'id');
    }



}