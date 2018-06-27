<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;



}