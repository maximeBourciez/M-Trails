export interface Spot {
    // Attributs
    id: number;             // Identifiant unique du spot
    name: string;           // Nom du spot
    description: string;    // Description du spot
    isOpen: boolean;        // Indique si le spot est ouvert ou non
    elevation: number;      // Élévation du spot (en mètres)
    imageUrl: string;       // URL de l'image du spot
    ville: string;          // Ville du spot
    type: string;           // Type de spot (ex: airline, tech, mix, etc)
    maintenanceDate: string|Date;  // Date de la dernière maintenance
}
