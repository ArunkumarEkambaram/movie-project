import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-get-movie',
  templateUrl: './get-movie.component.html',
  styleUrls: ['./get-movie.component.css']
})
export class GetMovieComponent implements OnInit {

  movie$: any;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie(1).subscribe({
      next: (data) => { this.movie$ = data; },
      error: (err) => { console.log("Unable to fetch movie, Please contact server administrator" + err); },
      complete: () => { console.log("Success"); },
    });
  }
}
