import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() appFooterText: string = '';
  @Input() appFooterLogoMain: string = '';
  @Input() appFooterIcon1: string = '';
  @Input() appFooterIcon2: string = '';
  @Input() appFooterContact1: string = '';

  footerText = '';
  footerLogoMain = '';
  footerIcon1 = '';
  footerIcon2 = '';
  footerContact1 = '';

  constructor() {}

  ngOnInit(): void {
    if (this.appFooterText) this.footerText = this.appFooterText;
    if (this.appFooterLogoMain) this.footerLogoMain = this.appFooterLogoMain;
    if (this.appFooterIcon1) this.footerIcon1 = this.appFooterIcon1;
    if (this.appFooterIcon2) this.footerIcon2 = this.appFooterIcon2;
    if (this.appFooterContact1) this.footerContact1 = this.appFooterContact1;
  }
}
