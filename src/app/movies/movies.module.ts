import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { GetMovieComponent } from './get-movie/get-movie.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { GetMovieGenreComponent } from './get-movie-genre/get-movie-genre.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoviesComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    GetMovieComponent,
    ViewMoviesComponent,
    DeleteMovieComponent,
    GetMovieGenreComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MoviesModule { }
