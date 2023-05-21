import { TestBed } from '@angular/core/testing';
import { MovieApiService } from './movie-api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('MovieApi Service', () => {
  let movieSerivce: MovieApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const MOVIE_LIST = {
    data: [
      {
        id: 1,
        title: 'title 1',
        poster: 'poster 1',
        genres: ['genres 1'],
        images: ['image1.jpg', 'image1.jpg'],
      },
      {
        id: 2,
        title: 'title 2',
        poster: 'poster 2',
        genres: ['genres 2'],
        images: ['image2.jpg', 'image2.jpg'],
      },
    ],
    metadata: {
      current_page: 1,
      per_page: 2,
      page_count: 25,
      total_count: 250,
    },
  };

  const MOVIE_DETAILS = {
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

  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        MovieApiService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });

    movieSerivce = TestBed.inject(MovieApiService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('getAllMovie()', () => {
    it('should reture expected movies when getAllMovies is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(MOVIE_LIST));
      movieSerivce.getAllMovie().subscribe({
        next: (movies) => {
          expect(movies).toEqual(MOVIE_LIST);
          done();
        },
        error: () => {
          done.fail;
        },
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCrimeMovies()', () => {
    it('should reture expected crime movies when getCrimeMovies is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(MOVIE_LIST));
      movieSerivce.getCrimeMovies().subscribe({
        next: (movies) => {
          expect(movies).toEqual(MOVIE_LIST);
          done();
        },
        error: () => {
          done.fail;
        },
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getDramaMovies()', () => {
    it('should reture expected crime movies when getDramaMovies is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(MOVIE_LIST));
      movieSerivce.getDramaMovies().subscribe({
        next: (movies) => {
          expect(movies).toEqual(MOVIE_LIST);
          done();
        },
        error: () => {
          done.fail;
        },
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getActionMovies()', () => {
    it('should reture expected crime movies when getActionMovies is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(MOVIE_LIST));
      movieSerivce.getActionMovies().subscribe({
        next: (movies) => {
          expect(movies).toEqual(MOVIE_LIST);
          done();
        },
        error: () => {
          done.fail;
        },
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getSearchMovie()', () => {
    it('should reture expected crime movies when getSearchMovie is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(MOVIE_LIST));
      movieSerivce.getSearchMovie('example-movie').subscribe({
        next: (movies) => {
          expect(movies).toEqual(MOVIE_LIST);
          done();
        },
        error: () => {
          done.fail;
        },
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getMovieDetails()', () => {
    it('should reture expected crime movies when getMovieDetails is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(MOVIE_DETAILS));
      movieSerivce.getMovieDetails(1).subscribe({
        next: (movies) => {
          expect(movies).toEqual(MOVIE_DETAILS);
          done();
        },
        error: () => {
          done.fail;
        },
      });

      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
