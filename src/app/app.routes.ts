import { Routes } from '@angular/router';
//import { NavbarCategorieComponent } from './navbar-categorie/navbar-categorie.component';
//import { CardComponent } from './card/card.component';
//import { AppComponent } from './app.component';
import { ScuolaElementareComponent } from './scuola-elementare/scuola-elementare.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ScuolaMediaComponent } from './scuola-media/scuola-media.component';
import { ScuolaSuperioreComponent } from './scuola-superiore/scuola-superiore.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'scuolaElementare',
      component: ScuolaElementareComponent
      
    },
    {
      path: 'scuolaMedia',
      component: ScuolaMediaComponent
    },
    {
      path: 'scuolaSuperiore',
      component: ScuolaSuperioreComponent
    },
    {
      path: 'login/:appId',
      component: LoginformComponent
    }
  ];
