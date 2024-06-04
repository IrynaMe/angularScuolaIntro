import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() appCardTitle: string = '';
  @Input() appCardText: string = '';
  @Input() appCardLink: string = '';
  @Input() appCardPicPath: string = '';
  @Input() appCardButtonText: string = '';

  title = '';
  text = '';
  link = '';
  picPath = '';
  buttonText='';


  constructor() {

  }

  ngOnInit(): void {
    if (this.appCardTitle!="") this.title = this.appCardTitle;
    if (this.appCardText!="") this.text = this.appCardText;
    if (this.appCardLink!="") this.link = this.appCardLink;
    if (this.appCardPicPath!="") this.picPath = this.appCardPicPath;
    if(this.appCardButtonText!="") this.buttonText=this.appCardButtonText;
  }

}
