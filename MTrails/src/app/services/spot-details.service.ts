import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { spotDetail } from '../models/spotDetail.model';

@Injectable({
  providedIn: 'root'
})
export class SpotDetailsService {
  // Attributs
  private readonly apiUrl = 'http://localhost:3000/spotDetails'; // URL de l'API
  private readonly http = inject(HttpClient);

  constructor() { }

  // Méthodes
  getAllDetails(): Observable<spotDetail[]> {
    return this.http.get<spotDetail[]>(this.apiUrl);
  }
  

  getSpotDetails(spotId: number): Observable<spotDetail[]> {
    this.http.get<spotDetail[]>(`${this.apiUrl}/${spotId}`);
  }

}
