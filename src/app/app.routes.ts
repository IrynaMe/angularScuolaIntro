import { Routes } from '@angular/router';
//import { NavbarCategorieComponent } from './navbar-categorie/navbar-categorie.component';
//import { CardComponent } from './card/card.component';
//import { AppComponent } from './app.component';
import { ScuolaElementareComponent } from './scuola-elementare/scuola-elementare.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
      path: '',
      component: HomePageComponent
     // title: 'Home page'
    },
    {
      path: 'scuolaElementare',
      component: ScuolaElementareComponent
     // title: 'Home details'
    }

  ];
