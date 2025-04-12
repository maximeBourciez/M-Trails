<?php

namespace Database\Seeders;

use App\Models\Actualite;
use App\Models\ActualiteDetail;
use Illuminate\Database\Seeder;

class ActualiteSeeder extends Seeder
{
    public function run()
    {
        // Créer des actualités
        $actualite = Actualite::create([
            'titre' => 'Nouveau parcours de VTT',
            'sousTitre' => 'Des améliorations importantes',
            'description' => 'Le parcours de VTT a été complètement redéfini pour plus de plaisir et de sécurité.',
            'image' => 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
            'date' => now(),
            'type' => 'Évènement',
            'inscriptionUrl' => 'http://example.com/inscription',
        ]);

        // Ajouter des détails à l'actualité
        ActualiteDetail::create([
            'idActu' => $actualite->id,
            'titre' => 'Modification des zones de montée',
            'description' => 'La montée est désormais plus fluide grâce aux nouveaux aménagements.',
            'image' => 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite->id,
            'titre' => 'Nouvelles sections du parcours',
            'description' => 'Des sections plus techniques ont été ajoutées pour satisfaire les riders expérimentés.',
            'image' => 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
        ]);
    }
}
