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

    // Constructeur
    constructor(id: number, name: string, description: string, isOpen: boolean, elevation: number, imageUrl: string, ville: string, type: string, rating: number, reviews: number, maintenanceDate: Date) {
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
