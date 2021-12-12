<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserDataSeeder extends Seeder
{
    /**
     * php artisan db:seed --class=UserDataSeeder
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => "whiteboard",
            'email' => "admin@whiteboard.com",
            'password' => bcrypt('^2nTkh$c*ZE9dUxQa*sM')
        ]);
    }
}
