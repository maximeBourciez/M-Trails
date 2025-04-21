import {Component, inject, OnInit} from '@angular/core';
import {Actualite,TypeActu} from '../models/actualite.model';
import {ActualiteService} from '../services/actualite.service';

@Component({
  selector: 'app-list-actualite',
  standalone: false,
  templateUrl: './list-actualite.component.html',
  styleUrl: './list-actualite.component.scss'
})
export class ListActualiteComponent implements OnInit {
  TypeActu = TypeActu;

  isLoading: boolean = true;
  actualites: Actualite[] = [];
  defaultImage: string = '';

  private readonly actuService: ActualiteService = inject(ActualiteService);

  ngOnInit() {
    this.actuService.getActualites().subscribe(
      data => {
        this.actualites = data;
      }
    );
    this.isLoading = false;
  }


  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage;
  }

  getTypeClass(type: TypeActu): string {
    switch (type) {
      case TypeActu.Information:
        return 'type-information';
      case TypeActu.Evenement:
        return 'type-evenement';
      case TypeActu.Alerte:
        return 'type-alerte';
      default:
        return '';
    }
  }


}
