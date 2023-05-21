import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { IMovieDetails } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResult!: IMovieDetails;

  constructor(
    private service: MovieApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      this.getMovieDetailResult = await result;
    });
  }
}
