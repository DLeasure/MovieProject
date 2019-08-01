import { Injectable } from '@angular/core';
import { Movie } from './interface';

@Injectable({
  providedIn: 'root'
})


export class AddRemoveMovieDataService {

  constructor() { }

  watchList: Movie[] = [];

  results : Movie[];

  movieResults(movieList){
    this.results = movieList;
  }

  addMovieToWatchList(newMovie : Movie) {
    this.watchList.push(newMovie);
    console.log(this.watchList);
    return;
  }

  removeMovieFromWatchList(i){
    // let i = this.results.findIndex(result);
    console.log(i);
    this.watchList.splice(i, 1);
    
  }

}
