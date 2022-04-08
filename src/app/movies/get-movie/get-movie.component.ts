import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-get-movie',
  templateUrl: './get-movie.component.html',
  styleUrls: ['./get-movie.component.css']
})
export class GetMovieComponent implements OnInit {

  movie$: any;
  id: any;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data?.['id'];
    });

    this.movieService.getMovie(this.id).subscribe({
      next: (data) => { this.movie$ = data; },
      error: (err) => { console.log("Unable to fetch movie, Please contact server administrator" + err); },
      complete: () => { console.log("Success"); },
    });
  }
}
