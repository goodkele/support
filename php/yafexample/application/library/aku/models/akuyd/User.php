<?php

namespace Aku\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Aku_UserModel extends Model
{

    protected $dateFormat = 'U';

    protected $connection = GameConst::DB_AKUYD;

    

}