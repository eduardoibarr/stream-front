import axios from "axios";
import { MovieListResponse } from "../interfaces/movie";
import {
  MovieDiscoveryFilterParams,
  SeriesDiscoveryFilterParams,
} from "../interfaces/discover";
import { SerieListResponse } from "../interfaces/serie";

const apiUrl = import.meta.env.VITE_API_URL + "/discover";

export const discoverMovies = async (params: MovieDiscoveryFilterParams) => {
  const response = await axios.get<MovieListResponse>(`${apiUrl}/movies`, {
    params,
  });
  return response.data;
};

export const discoverSeries = async (params: SeriesDiscoveryFilterParams) => {
  const response = await axios.get<SerieListResponse>(`${apiUrl}/series`, {
    params,
  });
  return response.data;
};
