import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  enrollmentFormDisplayed: boolean = false;
  connectionFormDisplayed: boolean = true;
  forgatPassword: boolean = false;
  passwordHasBeenSent:boolean=false;
  SendingPasswordToMail:boolean=false;

  showEnrollmentForm() {
    this.enrollmentFormDisplayed = true;
    this.connectionFormDisplayed = false;
    this.forgatPassword = false;
    this.passwordHasBeenSent=false;
    this.SendingPasswordToMail=false;
  }

  showConnectionForm() {
    this.enrollmentFormDisplayed = false;
    this.connectionFormDisplayed = true;
    this.forgatPassword = false;
    this.passwordHasBeenSent=false;
    this.SendingPasswordToMail=false;
  }
  showSendingPasswordToMail()
  {
    this.enrollmentFormDisplayed = false;
    this.connectionFormDisplayed = false;
    this.forgatPassword = false;
    this.passwordHasBeenSent=false;
    this.SendingPasswordToMail=true;
  }
  showPasswordHasBeenSent(){
    this.enrollmentFormDisplayed = false;
    this.connectionFormDisplayed = false;
    this.forgatPassword = false;
    this.passwordHasBeenSent=true;
    this.SendingPasswordToMail=false;
  }
  showForgotPassword() {
    this.enrollmentFormDisplayed = false;
    this.connectionFormDisplayed = false;
    this.forgatPassword = true;
    this.passwordHasBeenSent=false;
    this.SendingPasswordToMail=false;
  }
}

