import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Corrected styleUrl to styleUrls
})
export class NavbarComponent implements OnInit {
  @Input() sTitoloRicevuto: string = '';
  @Input() sColoreNavbar: string = '';
  @Input() sTextColorNav: string = '';
  @Input() sLogoPath: string = '';

  navTitle = '';
  navColor = '';
  navTextColor = '';
  navLogoPath = '';

  constructor() {
    setTimeout(() => {
      this.navTitle = 'Nuova scuola';
    }, 3000);
  }

  ngOnInit(): void {
    if (this.sTitoloRicevuto) this.navTitle = this.sTitoloRicevuto;
    if (this.sColoreNavbar) this.navColor = this.sColoreNavbar;
    if (this.sTextColorNav) this.navTextColor = this.sTextColorNav;
    if (this.sLogoPath) this.navLogoPath = this.sLogoPath;
  }
}

