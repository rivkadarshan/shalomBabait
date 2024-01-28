import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrideComponent } from './components/brides/bride/bride.component';
import { BridesListComponent } from './components/brides/brides-list/brides-list.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = 
[
    {path:"", component:HomeComponent},
    {path:"bridesList", component:BridesListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
