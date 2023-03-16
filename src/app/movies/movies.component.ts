import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _moviesService:MoviesService) { }

  imgPrefix:string = `https://image.tmdb.org/t/p/w500`
  movies:any
  pages:number[] = []
  
  getMovies(page:number){
    this._moviesService.getAllMovies(page).subscribe({
      next:(e) => this.movies = e.results
    })
  }

  ngOnInit(): void {
    this.getMovies(1)
    this.pages = new Array(10).fill(0).map((e,i)=> i+1)
  }

}
