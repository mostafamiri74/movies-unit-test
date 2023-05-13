import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  baseurl = 'https://moviesapi.ir/api/v1';

  // allmovieapidata
  AllMovieApiData(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/movies?page=1`);
  }

  // crime
  fetchCrimeMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/genres/1/movies`);
  }

  // drama
  fetchDramaMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/genres/4/movies`);
  }

  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/genres/3/movies`);
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get<any>(`${this.baseurl}/movies?query=${data.movieName}`);
  }

  bannerApiData(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/trending/all/week`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/movies/${data}`);
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/movie/${data}/videos`);
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/movie/${data}/credits`);
  }
}
