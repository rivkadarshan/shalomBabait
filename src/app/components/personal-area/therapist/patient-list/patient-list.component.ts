import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    const therapistId = '123'; 
    this.http.get<any[]>(`http://localhost:3000/api/patients/byTherapist/${therapistId}`)
      .subscribe(data => {
        this.patients = data;
      });
  }

  viewPatientDetails(patient: any) {
    console.log(patient);
  }
}
