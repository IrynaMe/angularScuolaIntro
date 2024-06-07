import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  idInserito: number = -1;
  miaCategoria: CategoriaUtente | undefined;
  catToShow: string = '';
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  constructor(private router: Router) {
    this.idInserito = this.route.snapshot.params['appId'];
    this.miaCategoria = this.GetCategorieServiceInst.getCategoriaById(
      this.idInserito
    );
    this.catToShow = this.miaCategoria?.nomeCat||"";
  }
}
