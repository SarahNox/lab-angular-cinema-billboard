import { Component, OnInit } from '@angular/core';
import { Cinema } from '../services/Cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  movie: Object;
  movieId: number;
  moviesArray: Array<Object>;
  constructor(public cinema: Cinema, private route: ActivatedRoute) {
    this.moviesArray = this.cinema.getMovies();
    this.route.params.subscribe((params) => this.movieId = +params['id']);
    this.movie = this.cinema.getMovie(this.movieId);
  }

  ngOnInit() {

  }

}
