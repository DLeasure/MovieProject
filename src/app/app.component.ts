import { Component } from '@angular/core';
import { MovieCallService } from './movie-call.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface Movie {
  id: number,
  title: string,
  poster_path: string,
  genre_ids: number[],
  release_date: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MovieProject';

  constructor(
    private router: Router,
  ) {}

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

  addMovieToWatchList(newMovie : Movie) {
    this.watchList.push(newMovie);
    return;
  }

  goToWatchList(watchList : Movie[]) {
    this.router.navigate(['/watchList', { list : watchList }])
    console.log("function ran");
  }
}
