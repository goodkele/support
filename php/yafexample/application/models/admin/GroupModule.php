<?php

namespace Admin;

use Illuminate\Database\Eloquent\Model;

class GroupModel extends Model
{

    protected $table = \GameConst::TBL_AKUADMIN_GROUP;

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;



}