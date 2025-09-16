// import { Component, Inject, Input } from '@angular/core';
// import { Activities } from '../../classes/activities';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { RegistrationFormComponent } from '../registration-form/registration-form.component';

// @Component({
//   selector: 'app-list-of-activities',
//   templateUrl: './list-of-activities.component.html',
//   styleUrls: ['./list-of-activities.component.css']
// })
// export class ListOfActivitiesComponent {
 
//   @Input() activitiesList: Activities[] = [];
//   constructor(private dialog: MatDialog) {}

// openDialog() {
//   const dialogRef = this.dialog.open(RegistrationFormComponent, {
//     // width: '250px', // ניתן להתאים את הרוחב והגובה לפי הצורך
//     //  data: { activity: this.activity } // ניתן להעביר נתונים לדיאלוג
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//   });
// }
// }
import { Component, Inject, Input } from '@angular/core';
import { Activities } from '../../../classes/activities';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../../registration-form/registration-form.component';

@Component({
  selector: 'app-list-of-activities',
  templateUrl: './list-of-activities.component.html',
  styleUrls: ['./list-of-activities.component.css']
})
export class ListOfActivitiesComponent {
 
  @Input() activitiesList: Activities[] = [];
  constructor(private dialog: MatDialog) {}

  openDialog(activity: Activities) {
    alert(activity.titleActivities)
    const dialogRef = this.dialog.open(RegistrationFormComponent, {
      // width: '250px', // ניתן להתאים את הרוחב והגובה לפי הצורך
      data: { data: activity.titleActivities } // Pass activity data to the dialo
    });
alert
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

