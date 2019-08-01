import { MovieCallService } from '../movie-call.service';
import { Component, OnInit, Input } from '@angular/core';
import { AddRemoveMovieDataService } from '../add-remove-movie-data.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {

  private addedMovie;
  constructor(private addRemoveMovieDataService : AddRemoveMovieDataService) { }

  ngOnInit() {
    this.addedMovie = this.addRemoveMovieDataService.watchList;
  }

}
