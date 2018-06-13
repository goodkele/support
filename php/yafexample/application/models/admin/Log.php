<?php

namespace Admin;

use Illuminate\Database\Eloquent\Model;

class LogModel extends Model
{

    protected $table = \GameConst::TBL_AKUADMIN_LOG;

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;



}