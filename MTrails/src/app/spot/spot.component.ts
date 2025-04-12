import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spot } from '../models/spot.model';
import { SpotService } from '../services/spot.service';
import { SpotDetail } from '../models/spotDetail.model';
import { SpotDetailsService } from '../services/spot-details.service';
import { forkJoin, catchError, of } from 'rxjs';

@Component({
  selector: 'app-spot',
  standalone: false,
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {
  // États du composant
  spot: Spot | null = null;
  spotDetails: SpotDetail[] = [];
  loading = true;
  error: string | null = null;

  // Injection des services
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

    // Debug
    console.log('Spot ID:', spotId);
    console.log('Spot:', this.spot);
    console.log('Spot Details:', this.spotDetails);
  }

  private getSpotIdFromRoute(): number {
    const idParam = this.route.snapshot.paramMap.get('id');
    return idParam ? Number(idParam) : NaN;
  }

  private handleInvalidId(): void {
    this.error = 'ID de spot invalide';
    this.loading = false;
    console.error('Invalid spot ID');
  }

  private loadSpotData(spotId: number): void {
    forkJoin([
      this.spotService.getSpotById(spotId).pipe(
        catchError(err => {
          console.error('Error loading spot:', err);
          return of(null);
        })
      ),
      this.spotDetailsService.getSpotDetails(spotId).pipe(
        catchError(err => {
          console.error('Error loading spot details:', err);
          return of([]);
        })
      )
    ]).subscribe({
      next: ([spot, details]) => {
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
        console.error('Global error:', err);
      }
    });
  }
}