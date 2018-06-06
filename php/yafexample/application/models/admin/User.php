<?php

class Admin_UserModel 
{
    /**
     * @var Admin_UserModel
     */
    private static $instance;

    /**
     * Get the instance of ExampleModel.
     *
     * @return ExampleModel
     */
    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }


}