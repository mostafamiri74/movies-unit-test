import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { Title, Meta } from '@angular/platform-browser';
import { IMovie, IMovieRequestData } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResult: IMovie[] = [];

  constructor(
    private service: MovieApiService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({
      name: 'description',
      content: 'search here movies like avatar,war etc',
    });
  }

  ngOnInit(): void {}

  searchForm = new FormGroup({
    movieName: new FormControl(''),
  });

  submitForm() {
    this.service
      .getSearchMovie(this.searchForm.value.movieName)
      .subscribe((result: IMovieRequestData) => {
        this.searchResult = result.data;
      });
  }
}
