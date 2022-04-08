import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieData: Movie = new Movie();//Movie movieData=new Movie();

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:59299/api/Movies/";

  getAllMovies() {

    return this.http.get<Movie>(this.baseUrl + "GetAll");
  }

  getMovie(id: number) {
    return this.http.get<Movie>(this.baseUrl + `GetMovieById/${id}`);
  }

  createMovie() {
    return this.http.post(this.baseUrl + "CreateMovie", this.movieData);
  }

  updateMovie() {
    return this.http.put(this.baseUrl + `UpdateMovie/${this.movieData.id}`, this.movieData);
  }

  deleteMovie(id:number){
    return this.http.delete(this.baseUrl+`DeleteMovie/${id}`);
  }

}
