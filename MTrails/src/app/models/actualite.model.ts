// Actualite
export enum TypeActu {
  Information= "Information",
  Evenement= "Évènement",
  Alerte= "Alerte",
}


export interface Actualite{
  idActu: number;
  titre: string;
  sousTitre: string;
  description: string;
  image: string;
  date: Date;
  type: TypeActu;
  inscriptionUrl?: string;
  details: ActualiteDetail[]
}


// ActualiteDetail
export interface ActualiteDetail{
  idDetailActu: number;
  titre: string;
  description: string;
  image: string;
  idActu: number;
}
