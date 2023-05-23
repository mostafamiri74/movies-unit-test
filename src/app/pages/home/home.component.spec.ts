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

  it('should ceate exact same number of movie item in all movie list', () => {
    let allMovieItemsDEs = fixture.debugElement.queryAll(By.css('.all-movie'));
    expect(allMovieItemsDEs.length).toEqual(MOVIE_LIST.data.length);
  });

  it('should check all movie exact id is sending to router link', () => {
    const allMovieItemsDEs = fixture.debugElement.queryAll(
      By.css('.all-movie')
    );

    for (let i = 0; i < allMovieItemsDEs.length; i++) {
      expect(allMovieItemsDEs[i].nativeElement.routerLink[1]).toEqual(
        MOVIE_LIST.data[i].id
      );
    }
  });

  it('should set all movies from the service directly', () => {
    expect(component.allMovieResult.length).toBe(2);
  });

  it('should ceate exact same number of movie item in crime movie list', () => {
    let crimeListItemsDEs = fixture.debugElement.queryAll(
      By.css('.crime-movie')
    );
    expect(crimeListItemsDEs.length).toEqual(MOVIE_LIST.data.length);
  });

  it('should check crime movie exact id is sending to router link', () => {
    const crimeListItemsDEs = fixture.debugElement.queryAll(
      By.css('.crime-movie')
    );

    for (let i = 0; i < crimeListItemsDEs.length; i++) {
      expect(crimeListItemsDEs[i].nativeElement.routerLink[1]).toEqual(
        MOVIE_LIST.data[i].id
      );
    }
  });

  it('should set crime movies from the service directly', () => {
    expect(component.crimeMovieResult.length).toBe(2);
  });

  it('should ceate exact same number of movie item in drama movie list', () => {
    let dramaListItemsDEs = fixture.debugElement.queryAll(
      By.css('.drama-movie')
    );
    expect(dramaListItemsDEs.length).toEqual(MOVIE_LIST.data.length);
  });

  it('should check drama movie exact id is sending to router link', () => {
    const dramaListItemsDEs = fixture.debugElement.queryAll(
      By.css('.drama-movie')
    );

    for (let i = 0; i < dramaListItemsDEs.length; i++) {
      expect(dramaListItemsDEs[i].nativeElement.routerLink[1]).toEqual(
        MOVIE_LIST.data[i].id
      );
    }
  });

  it('should set drama movies from the service directly', () => {
    expect(component.dramaMovieResult.length).toBe(2);
  });

  it('should ceate exact same number of movie item in action movie list', () => {
    let actionListItemsDEs = fixture.debugElement.queryAll(
      By.css('.action-movie')
    );
    expect(actionListItemsDEs.length).toEqual(MOVIE_LIST.data.length);
  });

  it('should check action movie exact id is sending to router link', () => {
    const actionListItemsDEs = fixture.debugElement.queryAll(
      By.css('.action-movie')
    );

    for (let i = 0; i < actionListItemsDEs.length; i++) {
      expect(actionListItemsDEs[i].nativeElement.routerLink[1]).toEqual(
        MOVIE_LIST.data[i].id
      );
    }
  });

  it('should set action movies from the service directly', () => {
    expect(component.actionMovieResult.length).toBe(2);
  });
});
