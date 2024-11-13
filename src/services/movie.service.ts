import { MovieListResponse, Movie, MovieParams } from "../interfaces/movie";
import { instance } from "./instance.service";

export const fetchPopularMovies = async (
  params: MovieParams
): Promise<MovieListResponse> => {
  const response = await instance.get("/movies/popular", {
    params: {
      ...params,
    },
  });

  return response.data;
};

export const fetchMovieById = async (id: number): Promise<Movie> => {
  const response = await instance.get(`/movies/${id}`);
  return response.data;
};

export const searchMovie = async (
  query: string
): Promise<MovieListResponse> => {
  const response = await instance.get("/movies/search", {
    params: {
      query,
    },
  });

  return response.data;
};
