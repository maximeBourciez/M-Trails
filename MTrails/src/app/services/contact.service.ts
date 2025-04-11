import { inject, Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8000/api';
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  sendContactForm(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  getContacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/contacts`);
  }
}
