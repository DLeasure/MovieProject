import { Component, OnInit } from '@angular/core';
import { MovieCallService } from './movie-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieProject';
  _data: any;

  constructor(
    private _requestService: MovieCallService
  ) { }

  ngOnInit() {
    this._data = [];
  }
}
