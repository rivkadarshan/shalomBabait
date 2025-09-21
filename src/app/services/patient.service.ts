import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  getTreatments(): Observable<any[]> {
    // נתונים מקומיים לצורך בדיקה
    const treatments = [
      { 
        date: '15/09/2025', 
        name: 'פגישה טלפונית', 
        therapist: 'מרפאה מרכזית', 
        startTime: '10:00', 
        endTime: '11:00', 
        totalCost: 200 
      },
      { 
        date: '10/09/2025', 
        name: 'פגישה אישית', 
        therapist: 'קליניקה רעננה', 
        startTime: '14:30', 
        endTime: '15:30', 
        totalCost: 350 
      },
      { 
        date: '01/09/2025', 
        name: 'פגישה בזום', 
        therapist: 'משרד ביתי', 
        startTime: '09:00', 
        endTime: '10:00', 
        totalCost: 250 
      }
    ];
    return of(treatments);
  }
}

