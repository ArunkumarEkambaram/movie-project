import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {

  movies$: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(data => {
      this.movies$ = data;
    })
  }

  deleteMovie(id: number) {
    if (confirm("Do you want to delete this movie?")) {
      this.movieService.deleteMovie(id).subscribe(data => {
        alert("Movie Deleted Successfully");
      })
    }
  }

}
