import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
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
      maintenanceDate: "2024-02-20T00:00:00.000Z"
    }
  ]; // Liste des spots

  // Constructeur
  constructor() { }

  // Méthodes
  getAllSpots(): Observable<Spot[]> {
    return of(this.lesSpots).pipe(
      catchError(() => {
        console.error('Erreur de chargement des spots');
        return of([]);
      })
    );
  }

  getSpotById(id: number): Observable<Spot> {
    this.getAllSpots().find(spot => )
  }

  // Méthodes supplémentaires utiles
  getOpenSpots(): Observable<Spot[]> {
    return of(this.lesSpots.filter(spot => spot.isOpen));
  }

  getSpotsByType(type: string): Observable<Spot[]> {
    return of(this.lesSpots.filter(spot => spot.type === type));
  }
}
