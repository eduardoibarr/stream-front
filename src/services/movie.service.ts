import axios from "axios";
import { MovieListResponse, Movie, MovieParams } from "../interfaces/movie";

const apiUrl = import.meta.env.VITE_API_URL + "/movies";

export const fetchPopularMovies = async (
  params: MovieParams
): Promise<MovieListResponse> => {
  const response = await axios.get(`${apiUrl}/popular`, {
    params: {
      ...params,
    },
  });

  return response.data;
};

export const fetchMovieById = async (id: number): Promise<Movie> => {
  const response = await axios.get(`${apiUrl}/${id}`);
  return response.data;
};

export const searchMovie = async (
  query: string
): Promise<MovieListResponse> => {
  const response = await axios.get(`${apiUrl}/search`, {
    params: {
      query,
    },
  });

  return response.data;
};
