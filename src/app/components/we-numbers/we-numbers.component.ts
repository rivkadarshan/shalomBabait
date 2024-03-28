import { Component, Input } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-we-numbers',
  templateUrl: './we-numbers.component.html',
  styleUrls: ['./we-numbers.component.css']
})
export class WeNumbersComponent {
  @Input() targetNumber: number = 0;
  displayNumber: number = 0;
  subscription: Subscription | undefined;

  ngOnInit() {
    const interval$ = interval(1); // אפשר לשנות את המהירות כרצונך

    this.subscription = interval$
      .pipe(
        takeWhile(() => this.displayNumber <= this.targetNumber) // מפסיק את האינטרוול כשהמספר המוצג מגיע למספר היעד
      )
      .subscribe(() => {
        this.displayNumber++;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

