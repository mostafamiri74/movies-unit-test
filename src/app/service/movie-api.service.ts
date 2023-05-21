import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieDetails, IMovieRequestData } from '../models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  getAllMovie(): Observable<IMovieRequestData> {
    return this.http.get<IMovieRequestData>(`${environment.baseUrl}/movies`);
  }

  getCrimeMovies(): Observable<IMovieRequestData> {
    return this.http.get<IMovieRequestData>(
      `${environment.baseUrl}/genres/${environment.crimeGenresId}/movies`
    );
  }

  getDramaMovies(): Observable<IMovieRequestData> {
    return this.http.get<IMovieRequestData>(
      `${environment.baseUrl}/genres/${environment.dramaGenresId}/movies`
    );
  }

  getActionMovies(): Observable<IMovieRequestData> {
    return this.http.get<IMovieRequestData>(
      `${environment.baseUrl}/genres/${environment.actionGenresId}/movies`
    );
  }

  getSearchMovie(movieName: any): Observable<IMovieRequestData> {
    return this.http.get<IMovieRequestData>(
      `${environment.baseUrl}/movies?query=${movieName}`
    );
  }

  getMovieDetails(id: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${environment.baseUrl}/movies/${id}`);
  }
}
