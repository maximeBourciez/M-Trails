import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SpotComponent} from './spot/spot.component';
import {SignalementComponent} from './signalement/signalement.component';

const routes: Routes = [

  // Home
  { 'path' : '', 'component' : HomeComponent },

  // Spots
  { 'path' : 'spot/:id', component : SpotComponent },

  // Contact
  { path: 'contact', component: SignalementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
