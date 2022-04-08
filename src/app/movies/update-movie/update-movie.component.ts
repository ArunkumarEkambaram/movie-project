import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  id: any;
  constructor(public movieService: MovieService, private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((data) => {
      this.id = data?.['id'];
    });

    this.movieService.getMovie(this.id).subscribe((data) => {
      this.movieService.movieData = data;
    })
  }

  onSubmit(movieForm: NgForm) {
    this.movieService.updateMovie().subscribe((data) => {
      alert("Movie Updated Successfully");
    })
  }
}
