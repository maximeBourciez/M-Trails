import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Actualite} from '../models/actualite.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  // Attributs
  private ApiUrl = `${environment.apiUrl}/actualites`;
  private readonly http: HttpClient = inject(HttpClient);

  constructor() { }

  // Méthodes
  getActualites(): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(this.ApiUrl);
  }

  getActuById(id: number): Observable<Actualite> {
    return this.http.get<Actualite>(`${this.ApiUrl}/${id}`);
  }
}
