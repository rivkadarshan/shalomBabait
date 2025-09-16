import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/marketing/header/header.component";
import { AdvertisingComponent } from "./components/marketing/advertising/advertising.component";
import { AboutComponent } from "./components/marketing/about/about.component";
import { DonateButtonComponent } from "./components/marketing/donate-button/donate-button.component";

import { FooterComponent } from "./components/marketing/footer/footer.component";
import { ListOfActivitiesComponent } from './components/marketing/list-of-activities/list-of-activities.component';
import { WeNumbersComponent } from "./components/marketing/we-numbers/we-numbers.component";
import { ContactComponent } from "./components/marketing/contact/contact.component";
import { TheySayAboutUsComponent } from './components/marketing/they-say-about-us/they-say-about-us.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SignUpForCourseComponent } from './components/marketing/sign-up-for-course/sign-up-for-course.component';
import { HomeComponent } from './components/marketing/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LogInComponent } from './components/marketing/log-in/log-in.component';
import { ConsultationMeetingComponent } from './components/consultation-meeting/consultation-meeting.component';
import { AdminDashboardComponent } from './components/personal-area/admin/admin-dashboard/admin-dashboard.component';
import { SecretaryDashboardComponent } from './components/personal-area/secretary/secretary-dashboard/secretary-dashboard.component';
import { PatientDashboardComponent } from './components/personal-area/patient/patient-dashboard/patient-dashboard.component';
import { LinkContentComponent } from './components/marketing/link-content/link-content.component';
import { PatientListComponent } from './components/personal-area/therapist/patient-list/patient-list.component';
import { TherapistCalendarComponent } from './components/personal-area/therapist/therapist-calendar/therapist-calendar.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AdvertisingComponent,
        AboutComponent,
        DonateButtonComponent,
        FooterComponent,
        ListOfActivitiesComponent,
        WeNumbersComponent,
        ContactComponent,
        TheySayAboutUsComponent,
        SignUpForCourseComponent,
        PatientListComponent,
        HomeComponent,
        RegistrationFormComponent,
        LogInComponent,
        ConsultationMeetingComponent,
        AdminDashboardComponent,
        SecretaryDashboardComponent,
        TherapistCalendarComponent,
        PatientDashboardComponent,
        LinkContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatGridListModule,
        MatToolbarModule,
        MatListModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatCheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
