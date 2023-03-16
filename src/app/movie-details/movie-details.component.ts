import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private _moviesService:MoviesService) { }

  movieId:number = 0;
  imgPrefix:string = `https://image.tmdb.org/t/p/w500`
  movieDetails:any

  getDetails(){
    this._moviesService.getMovieDetails(this.movieId).subscribe({
      next:(res)=> this.movieDetails = res
    })
  }
  ngOnInit(): void {
    this.movieId = this._activatedRoute.snapshot.params['id']

    this.getDetails()
  }

}
