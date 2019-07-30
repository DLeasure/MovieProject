import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieCallService {

  constructor(private httpClient : HttpClient) { }

  getMovie(genre, rating, length1, length2){
    return this.httpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=da3a15f6cd5a492457daf7a4d918add2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=${rating}&with_genres=${genre}&with_runtime.gte=${length1}&with_runtime.lte=${length2}`);
  }
}
