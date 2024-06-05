import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-scuola-elementare',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './scuola-elementare.component.html',
  styleUrl: './scuola-elementare.component.css'
})
export class ScuolaElementareComponent {
  cardButtonText = 'Accedi';
  
  listaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  constructor() {
    this.listaCategorie = this.GetCategorieServiceInst.getAllCategorie();
  }

}
