<?php

use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for($i=0;$i<5;$i++){
            \App\Tags::create([
                'libelle'=>$faker->text(6)

            ]);
        }
    }
}
