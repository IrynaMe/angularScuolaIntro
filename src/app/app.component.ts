import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CategoriaUtente } from './categoria-utente';
import { GetCategorieService } from './get-categorie.service';
import { NgFor } from '@angular/common';
import { NavbarCategorieComponent } from './navbar-categorie/navbar-categorie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavbarCategorieComponent, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  navTitle = 'Mia Scuola';
  navItem1 = 'Scuola elementare';
  navItem2 = 'Scuola media';
  navItem3 = 'Scuola superiore';
  navLogoPath='logo.png';
  navLink1="scuolaElementare";
  


  /*  commento = 'Stiamo per iniziare a lavorare con angular';
   navText = 'Mio negozio di scarpe';
   navColor = 'blue';
   navTextColor = 'white';
   navLogoPath = 'logo1.jpg';
 
   cardButtonText = 'Accedi';
 
   cardTitle = 'Docenti';
   cardText = 'Inserimento voti, stampa classe del docente';
   cardButtonText = 'Accedi';
   cardLink = 'https://getbootstrap.com/docs/5.0/components/card/';
   cardPicPath = 'teacher1.jpg';
 
   cardTitle2 = 'Alunni';
   cardText2 = 'Vedere voti';
   cardButtonText2 = 'Accedi';
   cardLink2 = 'https://getbootstrap.com/docs/5.0/components/card/';
   cardPicPath2 = 'student.jpg';
   
   cardTitle3 = 'Amministrativi';
   cardText3 = 'Inserimento docente, alunno';
   cardButtonText3 = 'Accedi';
   cardLink3 = 'https://getbootstrap.com/docs/5.0/components/card/';
   cardPicPath3 = 'secretary.jpg';
 
   cardTitle4 = 'Amministrativi';
   cardText4 = 'Inserimento docente, alunno';
   cardButtonText4 = 'Accedi';
   cardLink4 = 'https://getbootstrap.com/docs/5.0/components/card/';
   cardPicPath4 = 'secretary.jpg'; */

  /* listaCategorie: CategoriaUtente[] = [];
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);
  constructor() {
    this.listaCategorie = this.GetCategorieServiceInst.getAllCategorie();
  }
 */

}


