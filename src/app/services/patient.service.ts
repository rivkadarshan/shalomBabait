import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Patient {
  patientId: number;
  firstName: string;
  lastName: string;
  // כל שדות נוספים שתצטרכי
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private selectedPatientSubject = new BehaviorSubject<number | null>(null);
  selectedPatient$ = this.selectedPatientSubject.asObservable();

  constructor(private http: HttpClient) {}

  // פונקציה לקריאת מטופלים לפי מטפל
  getPatientsByTherapist(therapistId: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patients/byTherapist/${therapistId}`);
  }

  // פונקציה לקריאת פרטי מטופל לפי id
  getPatientById(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(`${environment.apiUrl}/patients/${patientId}`);
  }

  // עדכון המטופל שנבחר
  selectPatient(patientId: number) {
    this.selectedPatientSubject.next(patientId);
  }
}
