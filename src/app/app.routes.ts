import { Routes } from '@angular/router';
//import { NavbarCategorieComponent } from './navbar-categorie/navbar-categorie.component';
//import { CardComponent } from './card/card.component';
//import { AppComponent } from './app.component';
import { ScuolaElementareComponent } from './scuola-elementare/scuola-elementare.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ScuolaMediaComponent } from './scuola-media/scuola-media.component';
<<<<<<< HEAD
=======
import { ScuolaSuperioreComponent } from './scuola-superiore/scuola-superiore.component';
>>>>>>> 5025b811764a707995cb72b4ab82e381a0a15081

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
    },
    {
      path: 'scuolaMedia',
      component: ScuolaMediaComponent
     // title: 'Home details'
<<<<<<< HEAD
    }

=======
    },
    {
      path: 'scuolaSuperiore',
      component: ScuolaSuperioreComponent
     // title: 'Home details'
    }
>>>>>>> 5025b811764a707995cb72b4ab82e381a0a15081
  ];
