import { Component } from '@angular/core';
import { Activities } from 'src/app/classes/activities';

@Component({
  selector: 'app-sign-up-for-course',
  templateUrl: './sign-up-for-course.component.html',
  styleUrls: ['./sign-up-for-course.component.css']
})
export class SignUpForCourseComponent {
  activitiesList: Activities[] = [
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"כנס ניסן"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"סדרה בבית שמש"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"סדרה ברכסים"},
    {activitiesId:0,urlImage:"../../../assets/photoes/rav shalom for abaut component.png",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"סדרה בירושלים"}
  ]; 
}
