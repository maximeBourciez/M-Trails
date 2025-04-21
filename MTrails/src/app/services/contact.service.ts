import { inject, Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.apiUrl}`;
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  sendContactForm(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  getContacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/contacts`);
  }
}
