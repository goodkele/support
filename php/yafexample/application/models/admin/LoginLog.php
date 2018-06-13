<?php

namespace Admin;

use Illuminate\Database\Eloquent\Model;

class LoginLogModel extends Model
{

    protected $table = \GameConst::TBL_AKUADMIN_LOGIN_LOG;

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;



}