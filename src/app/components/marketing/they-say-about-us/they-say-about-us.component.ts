import { Component } from '@angular/core';


@Component({
  selector: 'app-they-say-about-us',
  templateUrl: './they-say-about-us.component.html',
  styleUrls: ['./they-say-about-us.component.css']
})
export class TheySayAboutUsComponent {
  displayedIndexes: number[] = [];
  cards = [
    { id: 1, title: "מאיר השתתף בסדרת חמשת הצעדים '38 שנה אני נשוי הצלת לי את החיים, חבל שלא הכרתי אותך לפני 38 שנה",name:"ישראל ישראלי" },
    { id: 2, title:"דניאל, חתן שלמד את ההדרכה חתנים בארגון הסדרה והדרכה מלווה אותי רגע רגע שניה שניה ופשוט, אלו חיים מאושרים, כל ההתנהלות בבית עם אפס תקלות.",name:"ישראל ישראלי" },
    { id: 3, title: "הארגון שלכם הוא השוטנשטיין של כל המדריכים הוא מוריד את הדברים למעשה.",name:"ישראל ישראלי"},
    { id: 4, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
    { id: 5, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
    { id: 6, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
    { id: 7, title: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.  תצטנפל בלינדו למרקל אס לכימפו, דול,  צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.  קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן.צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן",name:"ישראל ישראלי" },
  ];

    displayedCards: { id: number, title: string, name: string }[] = [];
    currentIndex = 0;
    intervalId: any;
  
    ngOnInit() {
      this.intervalId = setInterval(() => {
        this.showNextCards();
      }, 1500);
    }
  
    ngOnDestroy() {
      clearInterval(this.intervalId);
    }
  
    showNextCards() {
      this.displayedCards = [];
      for (let i = 0; i < 3; i++) {
        const index = (this.currentIndex + i) % this.cards.length;
        this.displayedCards.push(this.cards[index]);
      }
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }
  
    prevCards() {
      this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
      this.displayedCards = [];
      for (let i = 0; i < 3; i++) {
        const index = (this.currentIndex + i) % this.cards.length;
        this.displayedCards.push(this.cards[index]);
      }
    }
  
    nextCards() {
      this.displayedCards = [];
      for (let i = 0; i < 3; i++) {
        const index = (this.currentIndex + i + 1) % this.cards.length;
        this.displayedCards.push(this.cards[index]);
      }
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }
  
    goToCard(index: number) {
      this.currentIndex = index;
      this.displayedCards = [];
      for (let i = 0; i < 3; i++) {
        const idx = (this.currentIndex + i) % this.cards.length;
        this.displayedCards.push(this.cards[idx]);
      }
    }
  }
