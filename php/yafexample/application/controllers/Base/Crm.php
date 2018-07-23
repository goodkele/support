<?php

class Base_CrmController extends \Yaf\Controller_Abstract
{
    public function init()
    {
        $system = Yaf\Application::app()->getConfig()->system->toArray();
        $system['version_name'] = "v{$system['version']}";
        $system['static_assets'] = "{$system['static']}/{$system['static_dir']}";
        $system['static_version_assets'] = "{$system['static']}/{$system['version_name']}/{$system['static_dir']}";
        
        $this->getView()->assign("SYSTEM", $system);
    }

    /**
     * 输出 json
     */
    public function showMessage($message, $autoScript = null, $scriptCode = null, $code = 0, $error = '')
    {
        \Tool::show_message($message, $autoScript, $scriptCode, $code, $error);
    }
}