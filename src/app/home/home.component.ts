import { Component } from '@angular/core';
import { Spot } from '../models/spot.model';
import { SpotService } from '../services/spot.service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Attributs
  spots: Spot[] = []; // Liste des spots
  private readonly spotService: SpotService = inject(SpotService); 

  // Constructeur
  constructor() { }

  // Méthodes
  ngOnInit() {
    // Initialiser la liste des spots
    this.spotService.getAllSpots().subscribe((data: Spot[]) => {
      this.spots = data;
    });
  }
}
