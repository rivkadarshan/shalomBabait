// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-log-in',
//   templateUrl: './log-in.component.html',
//   styleUrls: ['./log-in.component.css']
// })
// export class LogInComponent {
//   enrollmentFormDisplayed: boolean = true;
//   connectionFormDisplayed: boolean = false;
//   forgatPassword:boolean=false
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  enrollmentFormDisplayed: boolean = true;
  connectionFormDisplayed: boolean = false;
  forgatPassword: boolean = false;

  showEnrollmentForm() {
    this.enrollmentFormDisplayed = true;
    this.connectionFormDisplayed = false;
    this.forgatPassword = false;
  }

  showConnectionForm() {
    this.enrollmentFormDisplayed = false;
    this.connectionFormDisplayed = true;
    this.forgatPassword = false;
  }

  showForgotPassword() {
    this.enrollmentFormDisplayed = false;
    this.connectionFormDisplayed = false;
    this.forgatPassword = true;
  }
}

