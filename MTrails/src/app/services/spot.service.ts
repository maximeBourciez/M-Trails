import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import { Spot, LightSpot } from '../models/spot.model'; // Importer le modèle Spot

@Injectable({
  providedIn: 'root'
})
export class SpotService {
  // Attributs
  static apiUrl = 'http://127.0.0.1:8000/api/spots'; // URL de l'API
  private readonly http: HttpClient = inject(HttpClient);
  private lightSpotsUrl: string = 'http://127.0.0.1:8000/api/lightSpots';



  // Constructeur
  constructor() { }

  // Méthodes
  getAllSpots(): Observable<Spot[]> {
    return this.http.get<Spot[]>(SpotService.apiUrl);
  }

  getAllLightSpots(){
    return this.http.get<LightSpot[]>(this.lightSpotsUrl);
  }

  getSpotById(id: number): Observable<Spot> {
    return this.http.get<Spot>(`${SpotService.apiUrl}/${id}`);
  }
}
