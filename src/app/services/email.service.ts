import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonGetUpdates } from '../classes/person-get-updates'; 

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailUrl = '/api/send-email';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: PersonGetUpdates) {
    return this.http.post(this.emailUrl, emailData);
  }
}

