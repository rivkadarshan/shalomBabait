import { Component, Input } from '@angular/core';
import { Activities } from '../../classes/activities';

@Component({
  selector: 'app-list-of-activities',
  templateUrl: './list-of-activities.component.html',
  styleUrls: ['./list-of-activities.component.css']
})
export class ListOfActivitiesComponent {
 
  @Input() activitiesList: Activities[] = [];

}
