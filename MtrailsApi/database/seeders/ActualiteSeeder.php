<?php

namespace Database\Seeders;

use App\Models\Actualite;
use App\Models\ActualiteDetail;
use Illuminate\Database\Seeder;

class ActualiteSeeder extends Seeder
{
    public function run()
    {
        // Actu 1 - Nouveau parcours
        $actualite1 = Actualite::create([
            'titre' => 'Nouveau parcours de VTT',
            'sousTitre' => 'Des améliorations importantes',
            'description' => 'Le parcours de VTT a été complètement redéfini pour plus de plaisir et de sécurité.',
            'image' => 'assets/actus/actus1.jpg',
            'date' => now(),
            'type' => 'Évènement',
            'inscriptionUrl' => 'http://example.com/inscription',
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite1->idActu,
            'titre' => 'Modification des zones de montée',
            'description' => 'La montée est désormais plus fluide grâce aux nouveaux aménagements.',
            'image' => 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite1->idActu,
            'titre' => 'Nouvelles sections du parcours',
            'description' => 'Des sections plus techniques ont été ajoutées pour satisfaire les riders expérimentés.',
            'image' => 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
        ]);

        // Actu 2 - Shape passerelle et virage relevé
        $actualite2 = Actualite::create([
            'titre' => 'Retour sur la dernière session shape',
            'sousTitre' => 'Passerelle et virage relevé refaits à neuf',
            'description' => 'Une belle session de shape durant laquelle la passerelle a été entièrement refaite et un virage relevé retravaillé pour plus de flow.',
            'image' => 'assets/actus/shape1.jpg',
            'date' => now()->subDays(10),
            'type' => 'Évènement',
            'inscriptionUrl' => null,
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite2->idActu,
            'titre' => 'Passerelle reconstruite',
            'description' => 'La structure a été renforcée et le revêtement entièrement refait pour plus de sécurité.',
            'image' => 'https://example.com/images/passerelle.jpg',
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite2->idActu,
            'titre' => 'Virage relevé remis en forme',
            'description' => 'Le virage a été remodelé pour un meilleur appui et une relance plus fluide.',
            'image' => 'https://example.com/images/virage.jpg',
        ]);

        // Actu 3 - Nettoyage du parking
        $actualite3 = Actualite::create([
            'titre' => 'Nettoyage et entretien du parking',
            'sousTitre' => 'Merci à tous les bénévoles !',
            'description' => 'Un grand coup de propre sur le parking : débroussaillage, ramassage de déchets et remplacement du mobilier.',
            'image' => 'assets/actus/nettoyage_parking.jpg',
            'date' => now()->subDays(3),
            'type' => 'Information',
            'inscriptionUrl' => null,
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite3->idActu,
            'titre' => 'Débroussaillage des ronces',
            'description' => 'Les abords du parking ont été nettoyés pour une meilleure accessibilité.',
            'image' => 'https://example.com/images/debroussaillage.jpg',
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite3->idActu,
            'titre' => 'Nouveau mobilier installé',
            'description' => 'Une nouvelle table a été installée pour le confort des visiteurs.',
            'image' => 'https://example.com/images/table.jpg',
        ]);

        ActualiteDetail::create([
            'idActu' => $actualite3->idActu,
            'titre' => 'Nettoyage des déchets',
            'description' => 'Les plastiques accumulés ont été retirés, surtout près de l’ancienne déchetterie.',
            'image' => 'https://example.com/images/dechets.jpg',
        ]);
    }
}
