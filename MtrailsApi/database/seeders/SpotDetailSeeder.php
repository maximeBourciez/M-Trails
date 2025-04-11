<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SpotDetail;
use App\Models\Spot;

class SpotDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $spot1 = Spot::where('name', 'Maillarenea')->first();
        $spot2 = Spot::where('name', 'Bittola')->first();

        $details = [
            [
                'id' => 1,
                'name' => 'Drop technique',
                'image' => 'https://example.com/maillarenea-drop.jpg',
                'description' => 'Un drop serré avec réception inclinée. Parfait pour tester ses suspensions.',
                'spot_id' => $spot1->id,
            ],
            [
                'id' => 2,
                'name' => 'Passage en racines',
                'image' => 'https://example.com/maillarenea-racines.jpg',
                'description' => 'Section remplie de racines glissantes en hiver. Un bon défi technique.',
                'spot_id' => $spot1->id,
            ],
            [
                'id' => 3,
                'name' => 'Wallride en courbe',
                'image' => 'https://example.com/maillarenea-wallride.jpg',
                'description' => 'Un wallride progressif dans un virage à gauche. Très visuel.',
                'spot_id' => $spot1->id,
            ],
            [
                'id' => 4,
                'name' => 'Table large',
                'image' => 'https://example.com/bittola-table.jpg',
                'description' => 'Une table de 6 mètres, très bien shappée, idéale pour envoyer fort.',
                'spot_id' => $spot2->id,
            ],
            [
                'id' => 5,
                'name' => 'Flowline avec virages relevés',
                'image' => 'https://example.com/bittola-flow.jpg',
                'description' => 'Enchaînement de virages relevés sur terrain lisse. Sensation de surf !',
                'spot_id' => $spot2->id,
            ],
            [
                'id' => 6,
                'name' => 'Double technique en montée',
                'image' => 'https://example.com/bittola-double.jpg',
                'description' => 'Un double à franchir en montée, demande précision et relance.',
                'spot_id' => $spot2->id,
            ]
        ];

        foreach ($details as $detailData) {
            SpotDetail::create($detailData);
        }
    }
}
