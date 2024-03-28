import { Component } from '@angular/core';
import { Activities } from '../../classes/activities';

@Component({
  selector: 'app-list-of-activities',
  templateUrl: './list-of-activities.component.html',
  styleUrls: ['./list-of-activities.component.css']
})
export class ListOfActivitiesComponent {
 
  public activitiesList: Activities[] = [{activitiesId:0,urlImage:"",activitiesLink:"https://material.angular.io/guide/getting-started",titleActivities:"כנס ניסן"}];
  ngOnInit():void{

  }
}
