import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-card',
  standalone: true,
  imports: [],
  templateUrl: './one-card.component.html',
  styleUrl: './one-card.component.css'
})
export class OneCardComponent {

  imgPath : string = "https://image.tmdb.org/t/p/w500/";
  
  @Input() oneCard : any ;
}
