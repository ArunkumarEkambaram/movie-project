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
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatDatepickerModule } from "@angular/material/datepicker";


@NgModule({
  declarations: [
    MoviesComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    GetMovieComponent,
    ViewMoviesComponent,
    DeleteMovieComponent,
    GetMovieGenreComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDatepickerModule
  ]
})
export class MoviesModule { }
