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
                'name' => 'Ligne à double lecture',
                'image' => 'assets/spots/bittola_1.JPEG',
                'description' => 'Une ligne complète pensée pour tous les riders, qu’ils soient novices ou confirmés. Chaque module est conçu avec deux options : un saut engagé pour ceux qui veulent envoyer, ou une échappatoire plus douce pour rouler en confiance. Cette configuration permet à chacun de s’exprimer à son rythme tout en partageant la même piste. C’est l’endroit idéal pour progresser, se challenger ou simplement rouler avec style.',
                'spot_id' => $spot2->id,
            ],
            [
                'name' => 'Modules engagés',
                'image' => 'assets/spots/bittola_2.JPEG',
                'description' => 'Step-up puissants, gros doubles aériens, tables propres et bien shapées… cette ligne est pensée pour ceux qui en veulent. Chaque module est calibré pour t’offrir un maximum de sensations tout en conservant une certaine marge de sécurité. Les réceptions sont larges, dégagées et entretenues pour poser en confiance. Tu peux y envoyer des gros tricks ou juste te laisser porter dans le flow puissant du tracé.',
                'spot_id' => $spot2->id,
            ],
            [
                'name' => 'Remontée dédiée',
                'image' => 'assets/spots/bittola_3.JPEG',
                'description' => 'Une piste de montée séparée et sécurisée te permet de remonter tranquillement sans gêner les riders en descente. Que tu remontes à la pédale ou que tu pousses ton bike, tu ne croiseras jamais la ligne principale. Cela garantit une session plus fluide et sans interruptions. C’est un vrai confort pour l’organisation, la sécurité, et le plaisir de rouler sans stress, en boucle.',
                'spot_id' => $spot2->id,
            ],
            [
                'name' => 'Entretien régulier',
                'image' => 'assets/spots/bittola_4.JPEG',  
                'description' => 'L’entretien du spot est une priorité pour garantir la sécurité et le plaisir des riders. Les modules sont régulièrement contrôlés et ajustés selon leur état. Lorsque des bosses commencent à se fragiliser ou deviennent inadéquates, elles sont immédiatement retravaillées. De plus, chaque élément du parcours est vérifié, nettoyé et entretenu pour assurer une expérience fluide et sécurisée. Nous nous engageons à maintenir ce spot dans un état optimal pour que chaque session soit aussi agréable que sécuritaire.',
                'spot_id' => $spot2->id,  
            ],
        ];

        foreach ($details as $detailData) {
            SpotDetail::create($detailData);
        }
    }
}
