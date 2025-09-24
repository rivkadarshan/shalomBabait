//  import { Component, OnInit } from '@angular/core';
//  import { PatientService, Patient } from 'src/app/services/patient.service';
//  @Component({
//    selector: 'app-patient-list',
//    templateUrl: './patient-list.component.html',
//    styleUrls: ['./patient-list.component.css']
//  })
//  export class PatientListComponent implements OnInit {
//    patients: Patient[] = [];
//    selectedPatientId: number | null = null;
//    therapistId: number = 1; 
//    constructor(private patientService: PatientService) {}
//    ngOnInit() {
//      // קריאה לשירות כדי להביא את רשימת המטופלים
//      this.loadPatients();
//    }
//    loadPatients() {
//      this.patientService.getPatientsByTherapist(this.therapistId)
//        .subscribe(data => {
//          this.patients = data;
//        });
//    }
//    viewPatientDetails(patient: Patient) {
//      // שולח את המטופל שנבחר לשירות
//      this.patientService.selectPatient(patient.patient_id);
//      this.selectedPatientId = patient.patient_id;
//      console.log('Selected patient:', patient);
//    }
//  }



import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { PatientService, Patient } from 'src/app/services/patient.service';
import { AddPatientDialogComponent } from '../../patient/add-patient-dialog/add-patient-dialog.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients: Patient[] = [];
  selectedPatientId: number | null = null;
  therapistId: number = 1;
  isLoading = false;
  
  private destroy$ = new Subject<void>();

  constructor(
    private patientService: PatientService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadPatients();
    
    this.patientService.patientsList$
      .pipe(takeUntil(this.destroy$))
      .subscribe(patients => {
        this.patients = patients;
      });

    this.patientService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => {
        this.isLoading = loading;
      });

    this.patientService.selectedPatient$
      .pipe(takeUntil(this.destroy$))
      .subscribe(patient_id => {
        this.selectedPatientId = patient_id;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPatients() {
    this.patientService.getPatientsByTherapist(this.therapistId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.patients = data;
        },
        error: (error) => {
          console.error('Error loading patients:', error);
        }
      });
  }

  viewPatientDetails(patient: Patient) {
    const patient_id = patient.patient_id || patient.patient_id;
    if (patient_id) {
      this.patientService.selectPatient(patient_id);
      this.selectedPatientId = patient_id;
      console.log('Selected patient:', patient);
    }
  }

  openAddPatientDialog(): void {
    const dialogRef = this.dialog.open(AddPatientDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      height: 'auto',
      maxHeight: '90vh',
      disableClose: false,
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-dialog-panel',
      direction: 'rtl',
      data: {
        initialData: {
          therapist_id: this.therapistId,
          status: 'פעיל'
        },
        context: 'patient-list',
        therapistId: this.therapistId
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result && result.success) {
          console.log('מטופל חדש נוסף:', result.data);
          
          this.refreshPatientsList();
          
          if (result.data?.patient_id || result.data?.patient_id) {
            const newPatientId = result.data.patient_id || result.data.patient_id;
            setTimeout(() => {
              this.patientService.selectPatient(newPatientId);
            }, 500); 
          }
          
        } else if (result === undefined) {
          console.log('הדיאלוג נסגר ללא הוספת מטופל');
        }
      });
  }

  refreshPatientsList(): void {
    this.loadPatients();
  }

  openSearchDialog(): void {
    console.log('פתיחת דיאלוג חיפוש - עוד לא מומש');
    
    const searchTerm = prompt('הכנס שם לחיפוש:');
    if (searchTerm) {
      this.patientService.searchPatients(searchTerm)
        .pipe(takeUntil(this.destroy$))
        .subscribe(results => {
          console.log('תוצאות חיפוש:', results);
        });
    }
  }

}