import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieCallService } from '../movie-call.service';
import {  Movie } from '../app.component';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieData : EventEmitter<Movie[]> = new EventEmitter<Movie[]>();

  genre : any;
  rating: any;
  length: any;

  constructor(private movieCallService : MovieCallService) { }

  getGenre(genre){
    if(genre === "action"){
      return genre = 28;
    } else if (genre === "adventure"){
      return genre = 12;
    } else if(genre === "animation"){
      return genre = 16;
    }else if(genre === "comedy"){
      return genre = 35;
    }else if(genre === "crime" ){
      return genre = 80;
    }else if(genre === "documentary"){
      return genre = 99;
    }else if(genre === "drama"){
      return genre = 18;
    }else if(genre === "family"){
      return genre = 10751;
    } else if (genre === "fantasy"){
      return genre = 14;
    } else if (genre === "history"){
      return genre = 36;
    } else if (genre === "horror") {
      return genre = 27;
    } else if (genre === "music"){
      return genre = 10402;
    }else if(genre === "mystery"){
      return genre = 9648;
    }else if(genre === "romance"){
      return genre = 10749;
    } else if (genre === "science fiction"){
      return genre = 878;
    } else if (genre === "tv movie"){
      return genre = 10770;
    } else if (genre === "thriller"){
      return genre = 53;
    } else if (genre === "war"){
      return genre = 10752;
    } else if (genre === "western"){
      return genre = 37;
    }
  }

  getRating(rating){
    if(rating === "poor"){
      return 59;
    } else if(rating === "fair"){
      return 69;
    } else if(rating === "good"){
      return 79;
    } else if (rating === "veryGood"){
      return 89;
    } else if (rating === "excellent"){
      return 100;
    }
  }

  getLength(length){
    if(length === "ltHour"){
      return 50;
    } else if (length === "hour"){
      return 60;
    } else if (length === "hourHalf"){
      return 90;
    } else if (length === "twoHours"){
      return 120;
    } else if (length === "overHour"){
      return 150;
    }
  }

  

  returnMovie(){
    this.movieCallService.getMovie(this.getGenre(this.genre), this.getRating(this.rating), this.getLength(this.length)).subscribe((e : any) => {
      this.movieData.emit(e.results);
      console.log(e.results)
      console.log(this.getRating(this.rating));
    });
  }

  ngOnInit() {
  }

}
