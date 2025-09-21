import { Component, OnInit } from '@angular/core';
import { PatientService, Patient } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];
  selectedPatientId: number | null = null;
  therapistId: number = 1; 

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    // קריאה לשירות כדי להביא את רשימת המטופלים
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getPatientsByTherapist(this.therapistId)
      .subscribe(data => {
        this.patients = data;
      });
  }

  viewPatientDetails(patient: Patient) {
    // שולח את המטופל שנבחר לשירות
    this.patientService.selectPatient(patient.patientId);
    this.selectedPatientId = patient.patientId;
    console.log('Selected patient:', patient);
  }
}
