<?php

namespace Goodkele\Support\Snowflake;

/**
 * Twitter Snowflake算法 生成全局唯一ID
 * 
 * 1 2 ~ 41 42 ~ 52 53 ~ 64
 * 
 * ID 生成策略
 * 毫秒级时间41位+机器ID 10位+毫秒内序列12位。
 * 0           41     51     64
 * +-----------+------+------+
 * |time       |pc    |inc   |
 * +-----------+------+------+
 *  前41bits是以微秒为单位的timestamp。
 *  接着10bits是事先配置好的机器ID。
 *  最后12bits是累加计数器。
 *  macheine id(10bits)标明最多只能有1024台机器同时产生ID，sequence number(12bits)也标明1台机器1ms中最多产生4096个ID，
 * 
 * @author wulei
 */
class Snowflake 
{
    
    // 2018-08-10 00:00:00 
    const BEGIN_TIME = 1533830400000;

    const PARAM_WORKID = 1;
    const PARAM_INCTYPE = 2;

    const INC_TYPE_CLASS = 1;
    const INC_TYPE_FILE = 2;
    const INC_TYPE_REDIS = 3;
    const INC_TYPE_RAND = 4;

    public $options = [
        self::PARAM_WORKID => 1,
        self::PARAM_INCTYPE => self::INC_TYPE_CLASS,
    ];
    

    // public $incType = self::INC_TYPE_RAND;
    // public $workId = 0;
    // public $inc = 0;

    /**
     * 构造函数
     * 
     * @param array 
     */
    public function __construct($options = [])
    {
        $this->options = array_merge($this->options, $options);
    }

    /**
     * 获得工作机器ID
     */
    public function getWorkId()
    {
        return $this->workId;
    }
    
    /**
     * 设置机器ID
     */
    public function setWorkId($workId)
    {
        $this->workId = $workId;
    }

    /**
     * 获得序列号记数方式
     */
    public function getIncType()
    {
        return $this->incType;
    }

    /**
     * 设置序列号记数方式
     */
    public function setIncType($incType)
    {
        $this->incType = $incType;
    }

    /**
     * 计算时间戳记（毫秒）
     * 
     * @return int
     */
    public function calcMicroTime()
    {
        return intval(microtime(true) * 1000) - self::BEGIN_TIME;
    }



    /**
     * 生成GUID
     */
    public function guid()
    {
        
        // $this->calcMicroTime();

        var_dump(dirname(__FILE__));

        var_dump(__FILE__);


        $a = 1;
        $b = -1;

        printf("%b", ($a));
        echo "\n";

        printf("%b", $b);
        echo "\n";
        
        

        var_dump(PHP_INT_MAX );

        var_dump( PHP_INT_SIZE);


        vaR_dump(PHP_OS);

        // vaR_dump($_SERVER);

        var_dump(microtime());

        $microtime = microtime(true);

        return $microtime;
    }

}



$s = new Snowflake();

var_dump($s->guid());

// 1 2 ~ 41 42 ~ 52 53 ~ 64

// /**
//  * Created by PhpStorm.
//  * User: liwenle
//  * Date: 14-5-12
//  * Time: 下午1:36
//  */
// /**
//  * ID 生成策略
//  * 毫秒级时间41位+机器ID 10位+毫秒内序列12位。
//  * 0           41     51     64
// +-----------+------+------+
// |time       |pc    |inc   |
// +-----------+------+------+
//  *  前41bits是以微秒为单位的timestamp。
//  *  接着10bits是事先配置好的机器ID。
//  *  最后12bits是累加计数器。
//  *  macheine id(10bits)标明最多只能有1024台机器同时产生ID，sequence number(12bits)也标明1台机器1ms中最多产生4096个ID，
//  *
//  * auth: zhouyuan24@gmail.com
//  */
// class helper_idwork
// {
//     const debug = 1;
//     static $workerId;
//     static $twepoch = 1399943202863;
//     static $sequence = 0;
//     const workerIdBits = 4;
//     static $maxWorkerId = 15;
//     const sequenceBits = 10;
//     static $workerIdShift = 10;
//     static $timestampLeftShift = 14;
//     static $sequenceMask = 1023;
//     private  static $lastTimestamp = -1;
//     /**
//      * @var helper_idwork
//      */
//     private static $self = NULL;
//     /**
//      * @static
//      * @return helper_idwork
//      */
//     public static function getInstance()
//     {
//         if (self::$self == NULL) {
//             self::$self = new self();
//         }
//         return self::$self;
//     }
//     function __construct($workId=1){
//         if($workId > self::$maxWorkerId || $workId< 0 )
//         {
//             throw new Exception("worker Id can't be greater than 15 or less than 0");
//         }
//         self::$workerId=$workId;
//     }
//       function timeGen(){
//         //获得当前时间戳
//         $time = explode(' ', microtime());
//         $time2= substr($time[0], 2, 3);
//         return  $time[1].$time2;
//     }
//    private  function  tilNextMillis($lastTimestamp) {
//         $timestamp = $this->timeGen();
//         while ($timestamp <= $lastTimestamp) {
//             $timestamp = $this->timeGen();
//         }
//         return $timestamp;
//     }
//       function  nextId()
//     {
//         $timestamp=$this->timeGen();
//         if(self::$lastTimestamp == $timestamp) {
//             self::$sequence = (self::$sequence + 1) & self::$sequenceMask;
//             if (self::$sequence == 0) {
//                 $timestamp = $this->tilNextMillis(self::$lastTimestamp);
//             }
//         } else {
//             self::$sequence  = 0;
//         }
//         if ($timestamp < self::$lastTimestamp) {
//             throw new Excwption("Clock moved backwards.  Refusing to generate id for ".(self::$lastTimestamp-$timestamp)." milliseconds");
//         }
//         self::$lastTimestamp  = $timestamp;
//         $nextId = ((sprintf('%.0f', $timestamp) - sprintf('%.0f', self::$twepoch)  )<< self::$timestampLeftShift ) | ( self::$workerId << self::$workerIdShift ) | self::$sequence;
//         return $nextId;
//     }
// }
