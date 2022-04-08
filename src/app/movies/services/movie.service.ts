import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    const baseUrl: string = "http://localhost:59299/api/Movies/GetAll";
    return this.http.get<Movie>(baseUrl);
  }

  getMovie(id:number){
    return this.http.get<Movie>(`http://localhost:59299/api/Movies/GetMovieById/${id}`);
  }
}
