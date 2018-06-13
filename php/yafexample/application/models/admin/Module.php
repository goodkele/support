<?php

namespace Admin;

use Illuminate\Database\Eloquent\Model;

class ModuleModel extends Model
{

    protected $table = \GameConst::TBL_AKUADMIN_MODULE;

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;



}