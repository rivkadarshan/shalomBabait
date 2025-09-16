import { Component } from '@angular/core';

@Component({
  selector: 'app-detils-contact',
  templateUrl: './detils-contact.component.html',
  styleUrls: ['./detils-contact.component.css']
})
export class DetilsContactComponent {
  constructor() { }

  sendMessage() {
    // כאן נוסיף את הקוד לשליחת ההודעה, לדוגמה HTTP request או אירוע עם המידע מהטופס
    console.log('הודעה נשלחה');
  }
}
