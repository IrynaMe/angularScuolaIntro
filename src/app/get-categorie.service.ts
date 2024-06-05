import { Injectable } from '@angular/core';
import { CategoriaUtente } from './categoria-utente';

@Injectable({
  providedIn: 'root'
})
export class GetCategorieService {
  elencoCategorie:CategoriaUtente[]=[
    {
      id:1,
      nomeCat:"Docenti",
      descrCat:"Sezione dedicata agli insegnanti per la gestione del loro classi",
      photo: "teacher.png",
      linkCat:"pagInsegnate.html"
    },
    {
      id:2,
      nomeCat:"Alunni",
      descrCat:"Sezione dedicata agli alunni per prenotazione prove e visualizzazione voti",
      photo: "backpack.png",
      linkCat:"pagAlunno.html"
    },
    {
      id:3,
      nomeCat:"Amministrativi",
      descrCat:"Sezione dedicata agli amministrativi per la gestione delle classi",
      photo: "folder.png",
      linkCat:"pagAmmin.html"
    },
    {
      id:4,
      nomeCat:"Famiglie",
      descrCat:"Sezione dedicata agli famiglie per la gestione dello studio degli alunni",
      photo: "home.png",
      linkCat:"pagFamiglie.html"
    }
    
  ]

  constructor() { }
  
  getAllCategorie():CategoriaUtente[]{
    return this.elencoCategorie;
  }
}
