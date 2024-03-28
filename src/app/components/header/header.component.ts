import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private elRef: ElementRef) { }

  goToAbout() {
     alert("about");
    const aboutElement = this.elRef.nativeElement.querySelector('app-about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/about']); // ניתוב רגיל במקרה של אי מציאת קומפוננטת about
    }
  }

}