import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { AdvertisingComponent } from "./components/advertising/advertising.component";
import { AboutComponent } from "./components/about/about.component";
import { DonateButtonComponent } from "./components/donate-button/donate-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ListOfActivitiesComponent } from './components/list-of-activities/list-of-activities.component';
import { WeNumbersComponent } from "./components/we-numbers/we-numbers.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TheySayAboutUsComponent } from './components/they-say-about-us/they-say-about-us.component';


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
import { ContentComponent } from './components/content/content.component';

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
        ContentComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
