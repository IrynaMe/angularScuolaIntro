import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CategoriaUtente } from '../categoria-utente';
import { GetCategorieService } from '../get-categorie.service';
import { GetClasseService } from '../get-classe.service';
import { Utente } from '../utente';
import { Allievo } from '../allievo';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterOutlet],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  idInserito: number = -1;
  miaCategoria: CategoriaUtente | undefined;
  catToShow: string = '';
  GetCategorieServiceInst: GetCategorieService = inject(GetCategorieService);

  ElencoAllievi: Allievo[] = [];
  GetClasseServiceInst: GetClasseService = inject(GetClasseService);

  currentUsername = "";
  currentPassword = "";

  myUtente: Utente = {
    username: '',
    password: '',
    abilitato: -1,
    profilo: -1,
    id_allievo: '',
    id_docente: '',
    id_amministrativo: ''
  };

  constructor(private router: Router) {
    this.idInserito = this.route.snapshot.params['appId'];
    this.miaCategoria = this.GetCategorieServiceInst.getCategoriaById(this.idInserito);
    this.catToShow = this.miaCategoria?.nomeCat || "";
  }

  submitForm(form: any): void {
    if (form.valid) {
      this.myUtente.username = this.currentUsername;
      this.myUtente.password = this.currentPassword;
      console.log('Submitting form with:', this.myUtente);
      this.GetClasseServiceInst.getAllStudenti(this.myUtente)
        .then((allievi: Allievo[]) => {
          this.ElencoAllievi = allievi;
          console.log('Received allievi:', this.ElencoAllievi);
        })
        .catch((error: any) => {
          console.error('Errore durante il recupero degli allievi:', error);
        });
    } else {
      console.log('Form is not valid');
    }
  }
}

