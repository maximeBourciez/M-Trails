import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import { Spot } from '../models/spot.model'; // Importer le modèle Spot

@Injectable({
  providedIn: 'root'
})
export class SpotService {
  // Attributs
  static apiUrl = 'http://localhost:8000/api/spots'; // URL de l'API
  private readonly http: HttpClient = inject(HttpClient);



  // Constructeur
  constructor() { }

  // Méthodes
  getAllSpots(): Observable<Spot[]> {
    return this.http.get<Spot[]>(SpotService.apiUrl);
  }

  getSpotById(id: number): Observable<Spot> {
    return this.http.get<Spot>(`${SpotService.apiUrl}/${id}`);
  }
}
