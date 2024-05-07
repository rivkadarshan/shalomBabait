import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Activities } from './classes/activities';
import {SignUpForCourseComponent} from '././components/pages/sign-up-for-course/sign-up-for-course.component';
import { HomeComponent } from './components/home/home.component';
import { DetilsContactComponent } from './components/detils-contact/detils-contact.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'SignUpForCourse', component: SignUpForCourseComponent },
  { path: 'contact', component: DetilsContactComponent },
  { path: 'RegistrationForm', component: RegistrationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  activities: Activities[] = [
    { activitiesId: 1, titleActivities: 'פעילות 1', urlImage: 'URL לתמונה', activitiesLink: 'לינק לפעילות 1' },
    { activitiesId: 2, titleActivities: 'פעילות 2', urlImage: 'URL לתמונה', activitiesLink: 'לינק לפעילות 2' },
  ];
  scrollToTop() {
    window.scrollTo(1000, window.innerHeight);
  }
 }
