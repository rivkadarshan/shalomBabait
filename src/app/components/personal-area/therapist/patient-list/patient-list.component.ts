import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patients = [
    { name: 'יוסי כהן', id: '123456789' },
    { name: 'מיכל לוי', id: '987654321' },
    { name: 'דוד ישראלי', id: '456789123' },
    { name: 'שרה פישר', id: '321654987' },
    { name: 'אורן ברק', id: '159753456' },
  ];

  viewPatientDetails(patient: any) {
    console.log(patient);
  }
}
