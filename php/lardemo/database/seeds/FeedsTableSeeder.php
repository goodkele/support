<?php

use Illuminate\Database\Seeder;
use App\Feed;

class FeedsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        // 10000 

        


        for ($i=0; $i<10000000; $i++) {
            $mtime = microtime();
            $mtime = explode(" ", $mtime);
            $mtime = $mtime[1] . "" . ($mtime[0] * 100000000);

            $feed_content = str_random(mt_rand(500, 5000));

            DB::table('feeds')->insert([
                'user_id' => mt_rand(1, 100000),
                'feed_content' => $feed_content, //str_random(10),
                'feed_from' => mt_rand(1, 5),
                'like_count' => mt_rand(1,1000),
                'feed_view_count' => mt_rand(1,1000),
                'feed_comment_count' => mt_rand(1,1000),
                //'feed_client_id' => ''
                'feed_mark' => $mtime, //md5($feed_content), //time(),
                'created_at' => date("Y-m-d H:i:s"),
            ]);
        }


        // factory(\App\Feed::class, 10)->create()->each(function($feed) {
        //     var_dump($feed);
        // });

        // $feeds = factory(App\Feed::class, 1)->make();
        // var_dump($feeds);
        
        //exit();

        // factory(\App\Feed::class, 10)->create()->each(function ($a, $b) {


        //     //var_dump($feed);
        //     //$feed->save();


        //     //$u->posts()->save(factory(App\Post::class)->make());
        // });

    }
}
