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
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"",titleActivities:"כנס ניסן"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"",titleActivities:"סדרה בבית שמש"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"",titleActivities:"סדרה ברכסים"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"",titleActivities:"סדרה בירושלים"}
  ]; 
   constructor(private elementRef: ElementRef) { }
   scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
