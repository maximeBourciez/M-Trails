import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotDetail } from '../models/spotDetail.model';
import { SpotService } from './spot.service';

@Injectable({
  providedIn: 'root'
})
export class SpotDetailsService {
  // Attributs
  private readonly apiUrl = 'http://127.0.0.1:8000/api/spotDetails'; // URL de l'API
  private readonly http = inject(HttpClient);

  constructor() { }

  // Méthodes
  getAllDetails(): Observable<SpotDetail[]> {
    return this.http.get<SpotDetail[]>(this.apiUrl);
  }
  

  getSpotDetails(spotId: number): Observable<SpotDetail[]> {
    return this.http.get<SpotDetail[]>(`${SpotService.apiUrl}/${spotId}/details`);
  }

}
