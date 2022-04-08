import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { GetMovieGenreComponent } from './get-movie-genre/get-movie-genre.component';
import { GetMovieComponent } from './get-movie/get-movie.component';
import { MoviesComponent } from './movies.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';

const routes: Routes = [
  { path: '', component: ViewMoviesComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'update-movie/:id', component: UpdateMovieComponent },
  { path: 'delete-movie/:id', component: DeleteMovieComponent },
  { path: 'get-movie/:id', component: GetMovieComponent },
  { path: 'search', component: GetMovieGenreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
