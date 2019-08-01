import { Injectable } from '@angular/core';
import { Movie } from './interface';

@Injectable({
  providedIn: 'root'
})


export class AddRemoveMovieDataService {

  constructor() { }

  watchList: Movie[] = [{
    "id": 301528,
    "title": "Toy Story 4",
    "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    "genre_ids": [
      12,
      16,
      35,
      10751
    ],
    "release_date": "2019-06-19"
  }];

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
