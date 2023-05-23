import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { ActivatedRoute, Route, convertToParamMap } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { IMovieDetails } from 'src/app/models/movie.interface';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let mockMovieService: any;
  let route: any;
  let MOVIE_DETAILS: IMovieDetails;

  beforeEach(async () => {
    MOVIE_DETAILS = {
      id: 1,
      title: 'The Shawshank Redemption',
      poster: 'tt0111161_poster.jpg',
      year: '1994',
      rated: 'R',
      released: '14 Oct 1994',
      runtime: '142 min',
      director: 'Frank Darabont',
      writer: 'Stephen King, Frank Darabont (screenplay)',
      actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      country: 'USA',
      awards: 'Nominated for 7 Oscars. Another 19 wins &amp; 30 nominations.',
      metascore: '80',
      imdb_rating: '9.3',
      imdb_votes: '1,738,596',
      imdb_id: 'tt0111161',
      type: 'movie',
      genres: ['Crime', 'Drama'],
      images: [
        'http://moviesapi.ir/images/tt0111161_screenshot1.jpg',
        'http://moviesapi.ir/images/tt0111161_screenshot2.jpg',
        'http://moviesapi.ir/images/tt0111161_screenshot3.jpg',
      ],
    };

    mockMovieService = jasmine.createSpyObj(['getMovieDetails']);

    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],

      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: MovieApiService,
          useValue: mockMovieService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: MOVIE_DETAILS.id }) },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    component.getMovieDetailResult = MOVIE_DETAILS;
    route = TestBed.inject(ActivatedRoute);
    mockMovieService.getMovieDetails.and.returnValue(of(MOVIE_DETAILS));
  });

  it('should create post component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should get movie same id', () => {
    const id = route.snapshot.paramMap.get('id');
    expect(id).toEqual(MOVIE_DETAILS.id);
  });

  it('should render the movie title in the h1 element', () => {
    fixture.detectChanges();
    const movieTitleEL: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(movieTitleEL.textContent).toEqual(MOVIE_DETAILS.title);
  });

  it('should render the movie plot in the p element', () => {
    fixture.detectChanges();
    const moviePlotEL: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(moviePlotEL.textContent).toEqual(MOVIE_DETAILS.plot);
  });

  it('should movie poster same image src', () => {
    fixture.detectChanges();
    const moviePosterImageEL: HTMLImageElement =
      fixture.debugElement.nativeElement.querySelector('img');
    expect(moviePosterImageEL.src).toContain(MOVIE_DETAILS.poster);
  });
});
