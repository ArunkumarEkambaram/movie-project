import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  id: any;
  constructor(public movieService: MovieService, private activetedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((data) => {
      this.id = data?.['id'];
    });

    this.movieService.getMovie(this.id).subscribe((data) => {
      this.movieService.movieData = data;
    })
  }

  onSubmit(movieForm: NgForm) {
    this.movieService.updateMovie().subscribe({
      next: (data) => { alert("Successfully Updated"); },
      complete: () => { this.router.navigate(['/movies']); },
      error: (err) => { console.log("Unable to update selected movie" + err); }
    });
  }
}
