<?php


use Illuminate\Database\Eloquent\Model;



class UserModel extends Model
{

    protected $dateFormat = 'U';

    protected $connection = \GameConst::DB_DEFAULT;

    protected $table = "users";


    
}