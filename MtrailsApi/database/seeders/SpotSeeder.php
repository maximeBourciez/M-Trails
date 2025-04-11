<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Spot;

class SpotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $spots = [
            [
                'name' => 'Maillarenea',
                'description' => 'Un spot technique avec des modules variés et un flow unique.',
                'imageUrl' => 'https://example.com/maillarenea.jpg',
                'isOpen' => false,
                'elevation' => 250,
                'ville' => 'Urrugne',
                'type' => 'tech',
                'maintenanceDate' => '2024-03-15',
            ],
            [
                'name' => 'Bittola',
                'description' => 'Un spot mix avec de belles lignes et un bon entretien.',
                'imageUrl' => 'https://www.ourouler.com/upload/galerie_pistes/big/Screenshot_20230518-183726_Instagram.jpg',
                'isOpen' => true,
                'elevation' => 300,
                'ville' => 'Urrugne',
                'type' => 'airline',
                'maintenanceDate' => '2024-02-20',
            ]
        ];

        foreach ($spots as $spotData) {
            Spot::create($spotData);
        }
    }
}
