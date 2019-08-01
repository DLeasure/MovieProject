import { Component, OnInit } from '@angular/core';
import { MovieCallService } from '../movie-call.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {

  constructor(private movieCallService : MovieCallService) { }

  ngOnInit() {
  }

}
