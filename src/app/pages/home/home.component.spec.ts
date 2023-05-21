import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { IMovieRequestData } from 'src/app/models/movie.interface';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let MOVIE_LIST: IMovieRequestData;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockMovieService: any;

  beforeEach(async () => {
    MOVIE_LIST = {
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

    mockMovieService = jasmine.createSpyObj([
      'getAllMovie',
      'getCrimeMovies',
      'getDramaMovies',
      'getActionMovies',
    ]);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MovieApiService,
          useValue: mockMovieService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockMovieService.getAllMovie.and.returnValue(of(MOVIE_LIST));
    mockMovieService.getCrimeMovies.and.returnValue(of(MOVIE_LIST));
    mockMovieService.getDramaMovies.and.returnValue(of(MOVIE_LIST));
    mockMovieService.getActionMovies.and.returnValue(of(MOVIE_LIST));
    fixture.detectChanges();
  });

  it('should ceate exact same number of movie item in list', () => {
    let homeComponentDEs = fixture.debugElement.queryAll(By.css('.all-movie'));
    expect(homeComponentDEs.length).toEqual(MOVIE_LIST.data.length);
  });

  it('should check whether exact id is sending to router link', () => {
    const homeComponentDEs = fixture.debugElement.queryAll(
      By.css('.all-movie')
    );

    for (let i = 0; i < homeComponentDEs.length; i++) {
      expect(homeComponentDEs[i].nativeElement.routerLink[1]).toEqual(
        MOVIE_LIST.data[i].id
      );
    }
  });

  it('should set movies from the service directly', () => {
    expect(component.allMovieResult.length).toBe(2);
  });

  // For the other three methods, we do the same codes as above
});
