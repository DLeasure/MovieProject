import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie} from '../app.component';
import { MovieCallService} from '../movie-call.service';

interface MovieData {
  results : []; 
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

@Input() result: Movie;

  constructor(private movieCallService : MovieCallService) { 
    console.log("constructor");
  }  

  ngOnInit() {

  }

  results : [];

  movieResults(movieList){
    this.results = movieList;
  }
}
