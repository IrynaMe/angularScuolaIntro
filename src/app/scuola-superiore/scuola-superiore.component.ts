import { Component, inject } from '@angular/core';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-scuola-superiore',
  standalone: true,
  imports: [NgFor,CardComponent],
  templateUrl: './scuola-superiore.component.html',
  styleUrl: './scuola-superiore.component.css'
})
export class ScuolaSuperioreComponent {
  cardButtonText = 'Accedi';
 
  
  ListaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  constructor() { 

    this.GetCategorieServiceInst.getAllCategorie(2).then(
    (ListaCategorie: CategoriaUtente[]) => { 
    this.ListaCategorie = ListaCategorie; 
    //Add here your code
    }
    ); }

}
