import { Component, OnInit } from '@angular/core';
import { Cinema } from '../services/Cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object>;
    constructor(public cinema: Cinema) {
      this.movies = this.cinema.getMovies();
    }

    ngOnInit() {
    }
  }
