<?php

use Illuminate\Database\Eloquent\Model;


class Aku_UserModel extends Model
{

    /**
     * 表名
     *
     * @var string
     */
    protected $table = GameConst::TBL_AKU_USER;

    /**
     * update_at create_at 时间戳记
     *
     * @var string
     */
    protected $dateFormat = 'U';


//    protected $connection = GameConst::DB_AKUADMIN; //'connection-name';

//    public $timestamps = false;




}