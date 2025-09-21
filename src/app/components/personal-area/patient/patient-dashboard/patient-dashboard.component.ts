import { Component } from '@angular/core';
import { Patient, PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  patient: Patient | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    // נרשם ל-BehaviorSubject כדי לקבל את המטופל שנבחר
    this.patientService.selectedPatient$.subscribe(patientId => {
      if (patientId !== null) {
        this.patientService.getPatientById(patientId).subscribe(data => {
          this.patient = data;
        });
      }
    });
  }
}
