import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showEmail: boolean = false;
  showPhone: boolean = false;
  showWhatsapp: boolean = false;

  showPhoneInfo() {
    this.showPhone = true;
  }

  hidePhoneInfo() {
    this.showPhone = false;
  }

  showEmailInfo() {
    this.showEmail = true;
  }

  hideEmailInfo() {
    this.showEmail = false;
  }

  showWhatsappInfo() {
    this.showWhatsapp = true;
  }

  hideWhatsappInfo() {
    this.showWhatsapp = false;
  }
}