import {Component, inject} from '@angular/core';
import {SpotService} from '../services/spot.service';
import {LightSpot} from '../models/spot.model';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobileMenuOpen = false;

  private readonly spotService: SpotService = inject(SpotService);
  spots!: LightSpot[];

  ngOnInit() {
    this.spotService.getAllSpots().subscribe(
      response => {
        this.spots = response;
      }
    )
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
