import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { PersonGetUpdates } from '../../classes/person-get-updates';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isChecked: boolean = false;
  formData: PersonGetUpdates = new PersonGetUpdates('', '', '', false);

  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail(this.formData).subscribe(
      () => {
        alert('המייל נשלח בהצלחה!');
        this.resetForm();
      },
      (error) => {
        alert('אירעה שגיאה בשליחת המייל');
      }
    );
  }

  resetForm() {
    this.formData = new PersonGetUpdates('', '', '', false);
  }
}