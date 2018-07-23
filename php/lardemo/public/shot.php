<?php


use Ramsey\Uuid\Uuid;
use Spatie\Browsershot\Browsershot;

require __DIR__.'/../vendor/autoload.php';

$pathToImage = "./baidu.png";
$pathToChrome = "/usr/bin/google-chrome-stable";
Browsershot::url('http://www.baidu.com')
// ->setChromePath($pathToChrome)
->save($pathToImage);