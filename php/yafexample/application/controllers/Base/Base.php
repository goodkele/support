<?php

class Base_BaseController extends \Yaf\Controller_Abstract
{
    public function init()
    {
        // $topMenus = AdmUserModel::getInstance()->getModule('top', AdmUserModel::getInstance()->purview);
        // $leftMenus = AdmUserModel::getInstance()->getModule('left', AdmUserModel::getInstance()->purview);

        // system

        //date_default_timezone_set(\Yaf\Application::app()->getConfig()->application->timezone);

        //var_dump(Yaf\Application::app()->getConfig()->system);



        $this->getView()->assign("APP_VERSION", APP_VERSION);
        $this->getView()->assign("APP_WEB_HOST", APP_WEB_HOST);
        $this->getView()->assign("APP_STATIC_HOST", APP_STATIC_HOST);   

    }

    /**
     * 输出 json
     */
    public function showMessage($message, $autoScript = null, $scriptCode = null, $code = 0, $error = '')
    {
        \Tool::show_message($message, $autoScript, $scriptCode, $code, $error);
    }
}