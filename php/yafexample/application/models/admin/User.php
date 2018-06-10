<?php

class Admin_UserModel 
{
    /**
     * @var Admin_UserModel
     */
    private static $instance;

    /**
     * Get the instance of Admin_UserModel.
     *
     * @return Admin_UserModel
     */
    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }


}