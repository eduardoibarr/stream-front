export interface Serie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface SerieParams {
  page?: number;
  language?: string;
  region?: string;
  query?: string;
  genre?: string;
}

export interface SerieListResponse {
  page: number;
  results: Serie[];
  total_pages: number;
  total_results: number;
}

export interface SerieDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id?: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  first_air_date: string;
  revenue?: number;
  episode_run_time?: number[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  name: string;
  vote_average: number;
  vote_count: number;
}
