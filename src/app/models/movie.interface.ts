export interface IMovie {
  id: number;
  title: string;
  poster: string;
  genres: string[];
  images: string[];
}

export interface IMovieRequestData {
  data: IMovie[];
  metadata: {
    current_page: number;
    per_page: number;
    page_count: number;
    total_count: number;
  };
}

export interface IMovieDetails {
  id: number;
  title: string;
  poster: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  awards: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  genres: string[];
  images: string[];
}
