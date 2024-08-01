import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { HttpClientModule } from '@angular/common/http';
import { OneCardComponent } from '../one-card/one-card.component';
import { oneCard } from '../interface/interface';

@Component({
  selector: 'app-home',
  standalone: true,
  providers:[MoviesDataService],
  imports: [HttpClientModule,OneCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  homeMovies !: oneCard[] 
 
  imgPath : string = "https://image.tmdb.org/t/p/w500/";
  
  constructor(private _MoviesDataService : MoviesDataService){
    
    this._MoviesDataService.getApiData().subscribe({
      next: (data) => {
        console.log(data.results);
        this.homeMovies = data.results; 
      },
      error : function (errr){
        console.log(errr);
      }
    })
  }
  
}
