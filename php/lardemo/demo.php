<?php

require __DIR__.'/vendor/autoload.php';


use Ramsey\Uuid\Uuid;



$uuid1 = Uuid::uuid1();
echo $uuid1->toString() . "\n"; // i.e. e4eaaaf2-d142-11e1-b3e4-080027620cdd
$uuid2 = Uuid::uuid1();
echo $uuid2->toString() . "\n"; // i.e. e4eaaaf2-d142-11e1-b3e4-080027620cdd
$uuid3 = Uuid::uuid1();
echo $uuid3->toString() . "\n"; // i.e. e4eaaaf2-d142-11e1-b3e4-080027620cdd


$uuid1 = Uuid::uuid5(Uuid::NAMESPACE_DNS, 1);
echo $uuid1->toString() . "<br />";
$uuid1 = Uuid::uuid5(Uuid::NAMESPACE_DNS, 2);
echo $uuid1->toString() . "<br />";