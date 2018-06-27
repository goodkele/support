<?php

namespace Aku\Validator;

// use \Aku\Models\Admin\AuthModule;

class Validator extends \Illuminate\Validation\Factory
{
    /***
     * 创建实例
     *
     * @return \Illuminate\Validation\Factory
     */
    public static function getInstance()
    {
        static $validator = null;
        if ($validator === null) {
            $test_translation_path = APP_PATH.'/resource/lang';
            $test_translation_locale = 'cn';
            $translation_file_loader = new \Illuminate\Translation\FileLoader(new \Illuminate\Filesystem\Filesystem, $test_translation_path);
            $translator = new \Illuminate\Translation\Translator($translation_file_loader, $test_translation_locale);
            $validator = new \Illuminate\Validation\Factory($translator);
        }
        return $validator;
    }

    public static function make()
    {
        
    }


}