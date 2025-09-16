import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonGetUpdates } from '../classes/person-get-updates';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/api/email/send-email'; // כתובת ה-API שלך

  constructor(private http: HttpClient) {}

  sendEmail(data: PersonGetUpdates): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}