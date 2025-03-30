export class Spot {
    // Attributs
    id: number;             // Identifiant unique du spot
    name: string;           // Nom du spot
    description: string;    // Description du spot
    isOpen: boolean;        // Indique si le spot est ouvert ou non
    elevation: number;      // Élévation du spot (en mètres)
    imageUrl: string;       // URL de l'image du spot
    ville: string;          // Ville du spot
    type: string;           // Type de spot (ex: airline, tech, mix, etc)
    rating: number;         // Note du spot (de 0 à 5)
    reviews: number;        // Nombre d'avis sur le spot
    maintenanceDate: string|Date;  // Date de la dernière maintenance
    details?: SpotDetail[]; // Détails supplémentaires sur le spot

    // Constructeur
    constructor(id: number, name: string, description: string, isOpen: boolean, elevation: number, imageUrl: string, ville: string, type: string, rating: number, reviews: number, maintenanceDate: Date, details?: SpotDetail[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isOpen = isOpen;
        this.elevation = elevation;
        this.imageUrl = imageUrl;
        this.ville = ville;
        this.type = type;
        this.rating = rating;
        this.reviews = reviews;
        this.maintenanceDate = new Date(maintenanceDate);
    }
}


// Classe détaillée pour le spot
export class SpotDetail{
    // Attributs
    id: number;             // Identifiant unique du détail
    name: string;           // Nom du détail
    description: string;    // Description du détail
    imageUrl: string;       // URL de l'image du détail
    idSpot: number;        // Identifiant du spot associé (optionnel)

    // Constructeur
    constructor(id: number, name: string, description: string, imageUrl: string, idSpot: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.idSpot = idSpot; 
    }
}