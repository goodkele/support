<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_AKUADMIN;
    
}