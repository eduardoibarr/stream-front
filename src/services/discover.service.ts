import { MovieListResponse } from "../interfaces/movie";
import {
  MovieDiscoveryFilterParams,
  SeriesDiscoveryFilterParams,
} from "../interfaces/discover";
import { SerieListResponse } from "../interfaces/serie";
import { instance } from "./instance.service";

export const discoverMovies = async (params: MovieDiscoveryFilterParams) => {
  const response = await instance.get<MovieListResponse>("/discover/movies", {
    params,
  });
  return response.data;
};

export const discoverSeries = async (params: SeriesDiscoveryFilterParams) => {
  const response = await instance.get<SerieListResponse>("/discover/series", {
    params,
  });
  return response.data;
};
