import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BrideJewleryComponent } from './components/brides/bride-details/bride-jewlery/bride-jewlery.component';
import { DebtComponent } from './components/brides/bride-details/debt/debt.component';
import { BrideMoreDetailsComponent } from './components/brides/bride-details/bride-more-details/bride-more-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NewJewleryComponent } from './components/brides/bride-details/new-jewlery/new-jewlery.component';
import { BridesListComponent } from './components/brides/brides-list/brides-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    BrideJewleryComponent,
    DebtComponent,
    BrideMoreDetailsComponent,
    NewJewleryComponent,
    BridesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
