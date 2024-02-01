import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BridesListComponent } from './components/brides/brides-list/brides-list.component';

const routes: Routes = 
[
    {path:"", component:BridesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
