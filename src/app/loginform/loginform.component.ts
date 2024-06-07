import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  idInserito: number=-1;

  constructor(private router: Router){
    this.idInserito=this.route.snapshot.params['id'];
  }

}
