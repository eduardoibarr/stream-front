export interface MovieDiscoveryFilterParams {
  primary_release_year?: number;
  with_genres?: string;
  vote_average_gte?: number;
  region?: string;
  sort_by?: string;
  page?: number;
  language?: string;
}

export interface SeriesDiscoveryFilterParams {
  first_air_date_year?: number;
  with_genres?: string;
  vote_average_gte?: number;
  with_networks?: string;
  with_original_language?: string;
  sort_by?: string;
  page?: number;
  language?: string;
}
