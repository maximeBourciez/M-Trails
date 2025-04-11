import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SpotComponent} from './spot/spot.component';

const routes: Routes = [
  { 'path' : '', 'component' : HomeComponent },
  { 'path' : 'spot/:id', component : SpotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
