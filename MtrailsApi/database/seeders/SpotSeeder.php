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
                'description' => 'Un spot privé niché en pleine nature, accessible uniquement sur invitation. Pensé pour les riders en quête de précision, il propose une variété de modules techniques qui mettent à l’épreuve ton flow, ta lecture du terrain et ton engagement. Régulièrement, des sessions ouvertes sont annoncées sur Instagram, l’occasion idéale de venir partager une ride sur ce terrain d’entraînement à l’ambiance conviviale.',
                'imageUrl' => 'assets/spots/maillarenea_0.JPEG',
                'isOpen' => false,
                'elevation' => 250,
                'ville' => 'Urrugne',
                'type' => 'tech',
                'maintenanceDate' => '2024-12-15',
                'videoUrl' => 'https://youtu.be/9TnODSeiBTg?si=nzGvzAeZGXSMfyX4',
                'latitude' => null,
                'longitude' => null,
            ],
            
            [
                'name' => 'Bittola',
                'description' => 'Une piste officielle et reconnue par la mairie, avec une ligne airline rouge et noir. La partie rouge offre des sauts et des modules accessibles à tous, tandis que la partie noire est plus engagée, offrant des défis supplémentaires pour les riders expérimentés. Chaque saut est accompagné d’une échappatoire pour permettre à tous les niveaux de passer à leur rythme. Un entretien régulier garantit que cette piste reste en excellent état, offrant ainsi une expérience fluide et sécuritaire pour tous.',
                'imageUrl' => 'assets/spots/bittola_0.JPEG',
                'isOpen' => true,
                'elevation' => 300,
                'ville' => 'Urrugne',
                'type' => 'airline',
                'maintenanceDate' => '2025-04-21',
                'videoUrl' => 'https://www.youtube.com/watch?v=ELaYAlCIOzI&t=7s',
                'latitude' => 43.362278,    // 43°21'44.2"N converti en décimal
                'longitude' => -1.732111,   // 1°43'55.6"W converti en décimal
            ]
        ];

        foreach ($spots as $spotData) {
            Spot::create($spotData);
        }
    }
}
