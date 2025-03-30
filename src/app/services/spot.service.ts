import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Spot } from '../models/spot.model'; // Importer le modèle Spot

@Injectable({
  providedIn: 'root'
})
export class SpotService {
  // Attributs
  private apiUrl = 'http://localhost:3000/spots'; // URL de l'API
  private readonly http: HttpClient = inject(HttpClient);

  private lesSpots: Spot[] = [
    {
      id: 1,
      name: "Maillarenea",
      description: "Un spot technique avec des modules variés et un flow unique.",
      imageUrl: "https://example.com/maillarenea.jpg",
      isOpen: false,
      elevation: 250,
      ville: "Urrugne",
      type: "tech",
      rating: 4.7,
      reviews: 128,
      maintenanceDate: "2024-03-15T00:00:00.000Z"
    },
    {
      id: 2,
      name: "Bittola",
      description: "Un spot mix avec de belles lignes et un bon entretien.",
      imageUrl: "https://www.ourouler.com/upload/galerie_pistes/big/Screenshot_20230518-183726_Instagram.jpg",
      isOpen: true,
      elevation: 300,
      ville: "Urrugne",
      type: "airline",
      rating: 4.5,
      reviews: 98,
      maintenanceDate: "2024-02-20T00:00:00.000Z"
    }
  ]; // Liste des spots

  // Constructeur
  constructor() { }

  // Méthodes
  // Récupérer tous les spots depuis l'API
  getAllSpots(): Observable<Spot[]> {
    return of(this.lesSpots);
  }

  getSpotById(id: number): Observable<Spot | undefined> {
    return of(this.lesSpots.find(spot => spot.id === id));
  }
}
