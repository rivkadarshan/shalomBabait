import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service'; // import the EmailService
import { PersonGetUpdates } from '../../classes/person-get-updates'; // import the PersonGetUpdates class

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isChecked: boolean = false;
  
  toggleAgree() {
    this.formData.agree = !this.formData.agree;
  }  
  formData: PersonGetUpdates = new PersonGetUpdates('', '', '', false);

  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail(this.formData).subscribe(
      () => {
        alert('המייל נשלח בהצלחה!');
        this.resetForm();
      },
      (error) => {
        console.error('שגיאה בשליחת מייל:', error);
        alert('אירעה שגיאה בשליחת המייל, אנא נסו שוב מאוחר יותר.');
      }
    );
  }

  resetForm() {
    this.formData = new PersonGetUpdates('', '', '', false);
  }
}
