import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';

@Component({
  selector: 'app-scuola-media',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './scuola-media.component.html',
  styleUrl: './scuola-media.component.css'
})
export class ScuolaMediaComponent {
  cardButtonText = 'Accedi';
 
  
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  constructor() { 

    this.GetCategorieServiceInst.getAllCategorie(1).then(
    (ListaCategorie: CategoriaUtente[]) => { 
    this.ListaCategorie = ListaCategorie; 
    //Add here your code
    }
    ); }

}
