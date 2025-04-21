import {Component, inject, Input} from '@angular/core';
import {Actualite} from '../models/actualite.model';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ActualiteService} from '../services/actualite.service';

@Component({
  selector: 'app-actualite',
  standalone: false,
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.scss'
})
export class ActualiteComponent {
  // Attributs
  @Input() idActu!: number;
  actualite!: Actualite;
  isListView: boolean = true;
  isLoading: boolean = true;

  // Dépendances
  private readonly http: ActivatedRoute = inject(ActivatedRoute);
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly actuService: ActualiteService = inject(ActualiteService);

  // Constructeur
  constructor() {}

  // Initalisation
  ngOnInit() {
    // Get id from url
    const id = Number(this.http.snapshot.paramMap.get('id'));

    if(id){  // Page d'une actualité seule
      this.actuService.getActuById(id).subscribe(
        data =>{
          this.actualite = data;
        }

      )
      console.log(this.actualite);
    }

    this.isListView = false;
    this.isLoading = false;
  }
}
