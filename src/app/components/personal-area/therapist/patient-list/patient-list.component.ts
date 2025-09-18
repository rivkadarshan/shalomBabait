import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // ודא שאתה מייבא את environment
interface Patient {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatientId: number | null = null;
  therapistId: number = 1; // או כל ערך אחר שמתאים

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.http.get<Patient[]>(`${environment.apiUrl}/patients/byTherapist/${this.therapistId}`)
      .subscribe(data => {
        this.patients = data;
      });
  }

  viewPatientDetails(patient: Patient) {
    this.selectedPatientId = patient.id;
    console.log(patient);
  }
}
