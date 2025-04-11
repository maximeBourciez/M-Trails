import {Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spot } from '../models/spot.model';
import { SpotService } from '../services/spot.service';
import { spotDetail } from '../models/spotDetail.model';
import { SpotDetailsService } from '../services/spot-details.service';
import { forkJoin, catchError, of } from 'rxjs';

@Component({
  selector: 'app-spot',
  standalone: false,
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {
  // Données initialisées avec des valeurs par défaut plus strictes
  spot!: Spot;
  spotDetails: spotDetail[] = [];
  loading = true;
  error: string | null = null;

  private readonly route = inject(ActivatedRoute);
  private readonly spotService = inject(SpotService);
  private readonly spotDetailsService = inject(SpotDetailsService);

  ngOnInit(): void {
    const spotId = this.getSpotIdFromRoute();

    if (isNaN(spotId)) {
      this.handleInvalidId();
      return;
    }

    this.loadSpotData(spotId);
  }

  private getSpotIdFromRoute(): number {
    const idParam = this.route.snapshot.paramMap.get('id');
    return idParam ? Number(idParam) : NaN;
  }

  private handleInvalidId(): void {
    this.error = 'ID de spot invalide';
    this.loading = false;
  }

  private loadSpotData(spotId: number): void {
    forkJoin({
      spot: this.spotService.getSpotById(spotId),
      details: this.spotDetailsService.getSpotDetails(spotId),
    }).subscribe({
      next: ({spot, details}) => {
        this.spot = spot; 
        this.spotDetails = details;
        this.loading = false;

        if (!spot) {
          this.error = 'Spot non trouvé';
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des données';
        this.loading = false;
        console.error('Erreur:', err);
      }
    });
  }
}
