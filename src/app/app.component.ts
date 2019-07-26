import { Component } from '@angular/core';

interface Movie {
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
}
