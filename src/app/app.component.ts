import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Activities } from './classes/activities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'שלום בבית';
  activitiesList: Activities[] = [
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"כנס ניסן"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"סדרה בבית שמש"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"סדרה ברכסים"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"סדרה בירושלים"}


  ]; 
   constructor(private elementRef: ElementRef) { }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
