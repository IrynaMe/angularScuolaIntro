import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() appCardTitle: string = '';
  @Input() appCardText: string = '';
  @Input() appCardLink: string = '';
  @Input() appCardPicPath: string = '';
  @Input() appCardButtonText: string = '';
  @Input() appId: number = -1;

  title = '';
  text = '';
  linkLogin = '';
  picPath = '';
  buttonText = '';
  id = -1;

  constructor() {}

  ngOnInit(): void {
    if (this.appCardTitle != '') this.title = this.appCardTitle;
    if (this.appCardText != '') this.text = this.appCardText;
    if (this.appCardLink != '') this.linkLogin = this.appCardLink;
    if (this.appCardPicPath != '') this.picPath = this.appCardPicPath;
    if (this.appCardButtonText != '') this.buttonText = this.appCardButtonText;
    if (this.appId != -1) this.id = this.appId;
  }
}
