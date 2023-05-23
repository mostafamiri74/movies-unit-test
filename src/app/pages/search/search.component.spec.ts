import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SearchComponent } from './search.component';
import { IMovie } from 'src/app/models/movie.interface';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { IMovieRequestData } from 'src/app/models/movie.interface';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockMovieService: any;
  let MOVIE: IMovieRequestData;

  beforeEach(async () => {
    MOVIE = {
      data: [
        {
          id: 1,
          title: 'The Shawshank Redemption',
          poster: 'http://moviesapi.ir/images/tt0111161_poster.jpg',
          genres: ['Crime', 'Drama'],
          images: [
            'http://moviesapi.ir/images/tt0111161_screenshot1.jpg',
            'http://moviesapi.ir/images/tt0111161_screenshot2.jpg',
            'http://moviesapi.ir/images/tt0111161_screenshot3.jpg',
          ],
        },
        {
          id: 2,
          title: 'The Godfather',
          poster: 'http://moviesapi.ir/images/tt0068646_poster.jpg',
          genres: ['Crime', 'Drama'],
          images: [
            'http://moviesapi.ir/images/tt0068646_screenshot1.jpg',
            'http://moviesapi.ir/images/tt0068646_screenshot2.jpg',
            'http://moviesapi.ir/images/tt0068646_screenshot3.jpg',
          ],
        },
      ],
      metadata: {
        current_page: 1,
        per_page: 2,
        page_count: 25,
        total_count: 250,
      },
    };

    mockMovieService = jasmine.createSpyObj(['getSearchMovie']);

    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MovieApiService,
          useValue: mockMovieService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    mockMovieService.getSearchMovie.and.returnValue(of(MOVIE));
    component.searchResult = MOVIE.data;
    fixture.detectChanges();
  });

  it('should create search component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should get movie exact with search movie', () => {
    expect(component.searchResult.length).toBe(2);
  });

  it('should ceate exact same number of movie item in search movie list', () => {
    let searchListItemsDEs = fixture.debugElement.queryAll(
      By.css('.movie-box')
    );
    expect(searchListItemsDEs.length).toEqual(MOVIE.data.length);
  });

  it('should same title with movies titles', () => {
    const movieTitleEL = fixture.debugElement.queryAll(By.css('h5'));

    for (let i = 0; i < movieTitleEL.length; i++) {
      expect(movieTitleEL[i].nativeElement.textContent).toEqual(
        MOVIE.data[i].title
      );
    }
  });

  it('should same title with movies titles', () => {
    const movieTitleEL = fixture.debugElement.queryAll(By.css('h5'));

    for (let i = 0; i < movieTitleEL.length; i++) {
      expect(movieTitleEL[i].nativeElement.textContent).toEqual(
        MOVIE.data[i].title
      );
    }
  });
});
