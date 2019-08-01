import { Component, OnInit, Input } from '@angular/core';
import { AddRemoveMovieDataService } from '../add-remove-movie-data.service';
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



  constructor(private movieCallService : MovieCallService, private addRemoveMovieDataService : AddRemoveMovieDataService) { 
    console.log("constructor");
  }  

  ngOnInit() {}

  results : [];
  movieResults(movieList){
    this.results = movieList;
  }

  addToList(result){
    this.addRemoveMovieDataService.addMovieToWatchList(result);
  }
}
