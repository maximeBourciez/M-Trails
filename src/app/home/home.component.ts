import { Component, HostListener } from '@angular/core';
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

    // Initialiser le scroll
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const spotCards = document.querySelectorAll('.spot-card');
    
    spotCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (cardPosition < screenPosition) {
        card.classList.add('visible');
      }
    });
  }
}
