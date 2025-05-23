import { Component, HostListener } from '@angular/core';
import { Spot } from '../models/spot.model';
import { SpotService } from '../services/spot.service';
import { inject } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
              './spots.scss',
  ]
})
export class HomeComponent {
  // Attributs
  spots: Spot[] = []; // Liste des spots
  spotsNames: string[] = []; // Liste des noms de spots
  private readonly spotService: SpotService = inject(SpotService);
  private readonly contactService: ContactService = inject(ContactService);
  contactForm!: FormGroup;
  private readonly fb: FormBuilder = inject(FormBuilder);

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

    // Initialiser le formulaire
    this.initForm();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }


  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
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

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: (response: any) => {
          console.log('Message envoyé', response);
          // Reset form
          this.contactForm.reset();
          // Afficher message succès
        },
        error: (error: any) => {
          console.error('Erreur lors de l\'envoi', error);
        }
      });
    }
  }
}
