import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit {
  treatments: any[] = [];
  searchTerm: string = '';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getTreatments().subscribe(data => {
      this.treatments = data;
    });
  }
}
