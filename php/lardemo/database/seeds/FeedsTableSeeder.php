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
        //
        // DB::table('feeds')->insert([
        //     'user_id' => 1,
        //     'feed_content' => str_random(10),
        //     'feed_mark' => time(),
        // ]);

        factory(\App\Feed::class, 10)->create()->each(function($feed) {
            var_dump($feed);
        });
        
        exit();

        // factory(\App\Feed::class, 10)->create()->each(function ($a, $b) {


        //     //var_dump($feed);
        //     //$feed->save();


        //     //$u->posts()->save(factory(App\Post::class)->make());
        // });

    }
}
