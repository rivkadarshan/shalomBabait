import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Activities } from 'src/app/classes/activities';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  // // Define a variable to hold the activity data
  // activity: Activities;

  // constructor(
  //   private dialogRef: MatDialogRef<RegistrationFormComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Activities
  // ) {
  //   console.log(data)
  //   alert(data)
  //   // Assign the data to the variable
  //   this.activity = data;
  //   alert(this.activity.activitiesId)
  // }
  activity: Activities | undefined;

  constructor(
    private dialogRef: MatDialogRef<RegistrationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Activities
  ) {}

  ngOnInit() {
    // Assign the data to the variable
    this.activity = this.data;
    console.log(this.activity);
    // You can perform any other initialization logic here
  }

}
