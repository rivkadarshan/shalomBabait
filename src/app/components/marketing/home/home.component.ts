import { Component, ElementRef } from '@angular/core';
import { Activities } from 'src/app/classes/activities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'שלום בבית';
  activitiesList: Activities[] = [
    {activitiesId:0,urlImage:"../../../assets/photoes/Ad for the Beit Shemesh series.jpg",activitiesLink:"",titleActivities:"סדרה בבית שמש"},
    {activitiesId:0,urlImage:"../../../assets/photoes/Rabbi Silver's email series.jpg",activitiesLink:"",titleActivities:"כנס ניסן"},
    {activitiesId:0,urlImage:"../../../assets/photoes/shalom babit page sofi.jpg",activitiesLink:"",titleActivities:"סדרה ברכסים"},
    {activitiesId:0,urlImage:"../../../assets/photoes/shlom babit page.jpg",activitiesLink:"",titleActivities:"סדרה בירושלים"}
  ]; 
   constructor(private elementRef: ElementRef) { }
   scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
