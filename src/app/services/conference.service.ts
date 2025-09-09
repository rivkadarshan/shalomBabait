import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Speaker {
  name: string;
  videoId: string;
}

interface Conference {
  title: string;
  speakers: Speaker[];
}

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private apiUrl = 'http://localhost:3000/api/conferences'; // הכתובת של השרת שלך

  constructor(private http: HttpClient) {}

  getConferences(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.apiUrl);
  }
}
