<?php

use Aku\Validator\Validator;

class ExampleController extends Base_BaseController {
    
    public function indexAction() 
    {
        
        echo "asdf";

        exit();

    }


    public function mainAction()
    {
        $rules = [  
            'user_name'=>'required|between:4,20',  
            'user_pwd'=>'required|between:6,20',  
            'code'=>'required|between:4,4'  
        ];  
        $message = [  
            'user_name.required'=>'账号不能为空！',  
            'user_name.between'=>'账号必须在6-20位之间！',  
            'user_pwd.required'=>'密码不能为空！',  
            'user_pwd.between'=>'密码必须在6-20位之间！',  
            'code.required'=>'验证码不能为空！',  
            'code.between'=>'验证码必须为4位！',  
        ];  
        $input['user_name'] = "a";


        vaR_dump(new Validator());

        exit();

        $validator = Validator::make($input,$rules,$message);  
        

        vaR_dump($validator->passes());

        vaR_dump($_SESSION);

        //echo "fdsa";
        
        exit();
    }

    public function validAction()
    {
        // new Validator();
    }

}


