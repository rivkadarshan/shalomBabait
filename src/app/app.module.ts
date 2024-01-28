import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BrideComponent } from './components/brides/bride/bride.component';
import { SearchBrideDialogComponent } from './components/brides/search-bride/search-bride-dialog/search-bride-dialog.component';
import { SelectBrideForUpdateComponent } from './components/brides/search-bride/select-bride-for-update/select-bride-for-update.component';
import { BrideJewleryComponent } from './components/brides/bride-details/bride-jewlery/bride-jewlery.component';
import { DebtComponent } from './components/brides/bride-details/debt/debt.component';
import { BrideDetailsComponent } from './components/brides/bride-details/bride-details/bride-details.component';
import { BrideMoreDetailsComponent } from './components/brides/bride-details/bride-more-details/bride-more-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewJewleryComponent } from './components/brides/bride-details/new-jewlery/new-jewlery.component';
import { AdditionJewleryComponent } from './components/brides/bride-details/addition-jewlery/addition-jewlery.component';
import { BridesListComponent } from './components/brides/brides-list/brides-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    BrideComponent,
    SearchBrideDialogComponent,
    SelectBrideForUpdateComponent,
    BrideJewleryComponent,
    DebtComponent,
    BrideDetailsComponent,
    BrideMoreDetailsComponent,
    HomeComponent,
    NewJewleryComponent,
    AdditionJewleryComponent,
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
