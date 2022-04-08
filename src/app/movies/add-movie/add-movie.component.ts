import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }


  onSubmit(movieForm: NgForm) {
    this.movieService.createMovie().subscribe({
      next: (data) => { },
      complete: () => { alert("Created"); },
      error: (err) => { console.log("Unable to create movie" + err); }
    })
  }

}
