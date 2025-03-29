import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spot } from '../models/spot.model'; // Importer le modèle Spot

@Injectable({
  providedIn: 'root'
})
export class SpotService {
  // Attributs
  private apiUrl = 'http://localhost:3000/spots'; // URL de l'API
  private readonly http : HttpClient = inject(HttpClient);

  // Constructeur
  constructor() { }

  // Méthodes
  // Récupérer tous les spots
  getAllSpots(): Observable<Spot[]> {
    return this.http.get<Spot[]>(this.apiUrl);
  }

  // Récupérer un spot par son id
  getSpotById(id: number): Observable<Spot> {
    return this.http.get<Spot>(`${this.apiUrl}/${id}`);
  }
}
