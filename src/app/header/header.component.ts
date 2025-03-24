import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false; // Variable pour gérer l'état du menu

  // Fonction pour toggler l'état du menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
