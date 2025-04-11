import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { spotDetail } from '../models/spotDetail.model';
import { SpotService } from './spot.service';

@Injectable({
  providedIn: 'root'
})
export class SpotDetailsService {
  // Attributs
  private readonly apiUrl = 'http://localhost:8000/api/spotDetails'; // URL de l'API
  private readonly http = inject(HttpClient);

  constructor() { }

  // Méthodes
  getAllDetails(): Observable<spotDetail[]> {
    return this.http.get<spotDetail[]>(this.apiUrl);
  }
  

  getSpotDetails(spotId: number): Observable<spotDetail[]> {
    return this.http.get<spotDetail[]>(`${SpotService.apiUrl}/${spotId}`);
  }

}
