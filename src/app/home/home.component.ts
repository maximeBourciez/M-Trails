import { Component, HostListener } from '@angular/core';
import { Spot } from '../models/spot.model';
import { SpotService } from '../services/spot.service';
import { inject } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
              './spots.scss',
              './issues.scss',
  ]
})
export class HomeComponent {
  // Attributs
  spots: Spot[] = []; // Liste des spots
  spotsNames: string[] = []; // Liste des noms de spots
  private readonly spotService: SpotService = inject(SpotService); 
  viewportScroller: any;

  // Constructeur
  constructor() { }

  // Méthodes
  ngOnInit() {
    // Initialiser la liste des spots
    this.spotService.getAllSpots().subscribe((data: Spot[]) => {
      this.spots = data;
      this.spotsNames = data.map(spot => spot.name); // Récupérer les noms des spots
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

  scrollToSpots() {
    document.getElementById('spots')?.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log('Formulaire soumis avec succès!', contactForm.value);
      // Traite la soumission, par exemple en envoyant les données au serveur.
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  }


}
