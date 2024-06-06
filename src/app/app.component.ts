import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

import { NgFor } from '@angular/common';
import { NavbarCategorieComponent } from './navbar-categorie/navbar-categorie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NavbarCategorieComponent,  NgFor, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  navTitle = 'Mia Scuola';
  navItem1 = 'Scuola elementare';
  navItem2 = 'Scuola media';
  navItem3 = 'Scuola superiore';
  navLogoPath='logo3.png';
  navLink1="scuolaElementare";
  navLink2="scuolaMedia";
  navLink3="scuolaSuperiore";
  
  textFooter = '@ Mia Scuola 2024';
  logoMainFooter= 'logo3.png';
  iconFooter1="iconYoutube.png";
  iconFooter2="iconInsta.png";
  contactFooter1="tel.: 06 7894564";


  //homePic="school4.png";

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

