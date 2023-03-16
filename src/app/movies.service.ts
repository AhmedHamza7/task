import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

  getAllMovies(pageNum:number):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=c230d25531822549561f354d375fe98f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`)
  }

  getMovieDetails(id:number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c230d25531822549561f354d375fe98f&language=en-US`)
  }
}
