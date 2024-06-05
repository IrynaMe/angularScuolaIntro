import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-categorie',
  standalone: true,
  imports: [],
  templateUrl: './navbar-categorie.component.html',
  styleUrl: './navbar-categorie.component.css'
})
export class NavbarCategorieComponent {
  @Input() appTitle: string = '';
  @Input() appNavItem1: string = '';
  @Input() appNavItem2: string = '';
  @Input() appNavItem3: string = '';
  @Input() appNavLogoPath: string = '';
  @Input() appNavLink1: string = '';
  @Input() appNavLink2: string = '';

  navTitle = '';
  navItem1 = '';
  navItem2 = '';
  navItem3 = '';
  navLogoPath='';
  navLink1='';
  navLink2='';


  constructor() {

  }

  ngOnInit(): void {
    if (this.appTitle) this.navTitle = this.appTitle;
    if (this.appNavItem1) this.navItem1 = this.appNavItem1;
    if (this.appNavItem2) this.navItem2 = this.appNavItem2;
    if (this.appNavItem3) this.navItem3 = this.appNavItem3;
    if(this.appNavLogoPath) this.navLogoPath=this.appNavLogoPath;
    if(this.appNavLink1) this.navLink1=this.appNavLink1;
    if(this.appNavLink2) this.navLink1=this.appNavLink2;
  }
}
