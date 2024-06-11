import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

import { NgFor } from '@angular/common';
import { NavbarCategorieComponent } from './navbar-categorie/navbar-categorie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NavbarCategorieComponent,  NgFor, FooterComponent,FormsModule],
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




}


