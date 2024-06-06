import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';

@Component({
  selector: 'app-scuola-media',
  standalone: true,
  imports: [NgFor, CardComponent,NgIf],
  templateUrl: './scuola-media.component.html',
  styleUrl: './scuola-media.component.css'
})
export class ScuolaMediaComponent {
  cardButtonText = 'Accedi';
 
  
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  constructor() {
    this.GetCategorieServiceInst.getAllCategorie(1)
      .then((ListaCategorie: CategoriaUtente[]) => {
        this.ListaCategorie = ListaCategorie;
      })
      .catch((error) => {
        console.log("Categories not found: server error: "+error);
        this.ListaCategorie = [];
      });
  }

}
