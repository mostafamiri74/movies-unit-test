import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  // allmovieapidata
  AllMovieApiData(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movies?page=1`);
  }

  // crime
  fetchCrimeMovies(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/genres/1/movies`);
  }

  // drama
  fetchDramaMovies(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/genres/4/movies`);
  }

  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/genres/3/movies`);
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get<any>(
      `${environment.baseUrl}/movies?query=${data.movieName}`
    );
  }

  bannerApiData(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/trending/all/week`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movies/${data}`);
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movie/${data}/videos`);
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movie/${data}/credits`);
  }
}
