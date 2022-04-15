import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {

  movies$: any;
  searchText = "";
  moviesByName$: any;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe(data => {
      this.movies$ = data;
    });
  }

  deleteMovie(id: number) {
    if (confirm("Do you want to delete this movie?")) {
      this.movieService.deleteMovie(id).subscribe(data => {
        alert("Movie Deleted Successfully");
        this.router.navigate(['/movies/'])
      })
    }
  }

  onSearchMovieName(search: string) {
    if (search != "") {
      this.movieService.searchMovieByName(search).subscribe(data => {
        this.movies$ = data;
      });
    }
    else {
      this.getAllMovies();
    }
  }

}
