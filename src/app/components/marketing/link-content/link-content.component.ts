import { Component } from '@angular/core';

@Component({
  selector: 'app-link-content',
  templateUrl: './link-content.component.html',
  styleUrls: ['./link-content.component.css']
})


export class LinkContentComponent {
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