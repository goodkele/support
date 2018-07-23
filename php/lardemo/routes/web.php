<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Ramsey\Uuid\Uuid;
use Spatie\Browsershot\Browsershot;



Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {

    $a = \App\Feed::all();

    // vaR_dump($a->toArray());

    // var_dump("asdfasfd");

    // $uuid5 = Uuid::uuid5(Uuid::NAMESPACE_DNS, 'php.net1');
    // echo $uuid5->toString() . "\n"; // i.e. c4a760a8-dbcf-5254-a0d9-6a4474bd1b62

    // an image will be saved
    // $pathToImage = "./baidu.png";
    // $pathToChrome = "/usr/bin/google-chrome-stable";
    // Browsershot::url('http://www.baidu.com')
    // // ->setChromePath($pathToChrome)
    // ->save($pathToImage);

    // return view('welcome');

    // $uuids1 = [3,1,6];

    // sort($uuids1);
    // var_dump($uuids1);

    // exit();

    $uuid1 = Uuid::uuid5(Uuid::NAMESPACE_DNS, 1); 
    echo $uuid1->toString() . "<br />";
    $uuid1 = Uuid::uuid5(Uuid::NAMESPACE_DNS, 2); 
    echo $uuid1->toString() . "<br />";

    exit();



    $uuids1 = [];
    $uuids2 = [];
    for ($i=0; $i<10000; $i++) {
        $uuid1 = Uuid::uuid4(); 
        $uuids1[] = $uuid1->toString();
    }

    foreach ($uuids1 as $val) {
        echo $val . "<br />";
    }

    exit();

    $uuids2 = $uuids1;

    sort($uuids1);

    $td = true;
    for ($i=0; $i<10000; $i++) {
        if ($uuids2[$i] != $uuids1[$i]) {
            $td = false;
            break;
        }
    }

    vaR_dump($td);
    //echo $uuids2 == $uuids1;


    

});
 