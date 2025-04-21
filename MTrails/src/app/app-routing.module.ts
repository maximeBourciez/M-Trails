import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SpotComponent} from './spot/spot.component';
import {SignalementComponent} from './signalement/signalement.component';
import {ListActualiteComponent} from './list-actualite/list-actualite.component';
import {ActualiteComponent} from './actualite/actualite.component';

const routes: Routes = [

  // Home
  { 'path' : '', 'component' : HomeComponent },

  // Spots
  { 'path' : 'spot/:id', component : SpotComponent },

  // Actualités
  { 'path' : 'actus', component : ListActualiteComponent },
  { 'path': 'actu/:id', component : ActualiteComponent },

  // Contact
  { path: 'contact', component: SignalementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
