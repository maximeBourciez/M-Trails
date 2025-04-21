import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Spot } from '../models/spot.model';
import { SpotDetail } from '../models/spotDetail.model';
import { SpotService } from '../services/spot.service';
import { SpotDetailsService } from '../services/spot-details.service';
import { forkJoin, catchError, of } from 'rxjs';

@Component({
  selector: 'app-spot',
  standalone: false,
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {
  spot: Spot | null = null;
  spotDetails: SpotDetail[] = [];
  loading = true;
  error: string | null = null;

  videoUrlSafe: SafeResourceUrl | null = null;
  mapUrlSafe: SafeResourceUrl | null = null;

  private readonly route = inject(ActivatedRoute);
  private readonly spotService = inject(SpotService);
  private readonly spotDetailsService = inject(SpotDetailsService);
  private readonly sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const spotId = idParam ? Number(idParam) : NaN;

      if (isNaN(spotId)) {
        this.handleInvalidId();
        return;
      }

      this.loadSpotData(spotId);
    });
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
          return;
        }

        if (spot.videoUrl) {
          const embedUrl = this.getEmbeddedVideoUrl(spot.videoUrl);
          this.videoUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        }

        if (spot.latitude && spot.longitude) {
          const mapUrl = `https://www.google.com/maps?q=${spot.latitude},${spot.longitude}&hl=fr&z=15&output=embed`;
          this.mapUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des données';
        this.loading = false;
        console.error('Global error:', err);
      }
    });
  }

  openVideo() {
    if (this.spot?.videoUrl) {
      window.open(this.spot.videoUrl, '_blank');
    }
  }

  private getEmbeddedVideoUrl(url: string): string {
    // Si l'URL contient "youtube.com/watch?v="
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/[^\n\s]+\/|(?:v|e(?:mbed)?)\/?|(?:.*[?&]v=))([^"&?\/\s]*))/;
    const matches = url.match(regex);

    if (matches && matches[1]) {
      const videoId = matches[1];
      console.log('Video ID:', videoId); // Affiche l'ID dans la console pour le débogage
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      console.log('Aucun ID trouvé dans l\'URL YouTube');
      return ''; // Retourne une URL vide si l'ID ne peut pas être extrait
    }
  }

}
