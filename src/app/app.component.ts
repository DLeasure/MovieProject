import { Component, OnInit } from '@angular/core';
import { MovieCallService } from './movie-call.service';
import { AddRemoveMovieDataService } from './add-remove-movie-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieProject';
  _data: any;


  constructor(private movieCallService : MovieCallService, private addRemoveMovieDataService : AddRemoveMovieDataService) {}

}
