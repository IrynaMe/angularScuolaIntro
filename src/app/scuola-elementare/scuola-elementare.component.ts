import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-scuola-elementare',
  standalone: true,
  imports: [NgFor, CardComponent,NgIf],
  templateUrl: './scuola-elementare.component.html',
  styleUrl: './scuola-elementare.component.css'
})
export class ScuolaElementareComponent {

  cardButtonText = 'Accedi';
  serverErrorMsg="Attenzione: Server non è disponibile";
  loginLink="../login";

 
  
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
/*   constructor() { 

    this.GetCategorieServiceInst.getAllCategorie(0).then(
    (ListaCategorie: CategoriaUtente[]) => { 
    this.ListaCategorie = ListaCategorie; 
    //Add here your code
    }
    ); } */

    constructor() {
      this.GetCategorieServiceInst.getAllCategorie(0)
        .then((ListaCategorie: CategoriaUtente[]) => {
          this.ListaCategorie = ListaCategorie;
        })
        .catch((error) => {
          console.log("Categories not found: server error: "+error);
          this.ListaCategorie = [];
        });
    }
  }
