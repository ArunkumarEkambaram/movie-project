import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  //Add Router in the constructor
  constructor(public movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(movieForm: NgForm) {
    this.movieService.createMovie().subscribe({
      next: (data) => { },
      complete: () => { this.router.navigate(['/movies/']) }, //On successfull Complete, redirect to another page
      error: (err) => { console.log("Unable to create movie" + err); }
    })
  }

}
