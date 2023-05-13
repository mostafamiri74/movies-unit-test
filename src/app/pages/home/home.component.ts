import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { IMovie, IMovieRequestData } from 'src/app/models/movie.interface';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  allMovieResult: IMovie[] = [];
  crimeMovieResult: IMovie[] = [];
  dramaMovieResult: IMovie[] = [];
  actionMovieResult: IMovie[] = [];

  constructor(
    private service: MovieApiService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Home - Showtime');
    this.meta.updateTag({
      name: 'description',
      content: 'top movies',
    });
  }

  ngOnInit(): void {
    this.allData();
    this.actionMovie();
    this.crimeMovie();
    this.dramaMovie();
  }

  allData() {
    this.service.AllMovieApiData().subscribe((result: IMovieRequestData) => {
      this.allMovieResult = result.data;
    });
  }

  crimeMovie() {
    this.service.fetchCrimeMovies().subscribe((result: IMovieRequestData) => {
      this.crimeMovieResult = result.data;
    });
  }

  dramaMovie() {
    this.service.fetchDramaMovies().subscribe((result: IMovieRequestData) => {
      this.dramaMovieResult = result.data;
    });
  }

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result: IMovieRequestData) => {
      this.actionMovieResult = result.data;
    });
  }
}
