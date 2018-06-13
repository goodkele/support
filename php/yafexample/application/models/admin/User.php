<?php

namespace Admin;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{

    /**
     * 表名
     *
     * @var string
     */
    protected $table = \GameConst::TBL_AKUADMIN_USER;

    /**
     * update_at create_at 时间戳记
     *
     * @var string
     */
    protected $dateFormat = 'U';

    /**
     * 数据库连接
     *
     * @var string
     */
    protected $connection = \GameConst::DB_AKUADMIN;



}