<?php

use Illuminate\Database\Seeder;

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
        DB::table('feeds')->insert([
            'user_id' => 1,
            'feed_content' => str_random(10),
            'feed_mark' => time(),
        ]);
    }
}
