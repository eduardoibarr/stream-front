import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchMovieById } from "../services/movieService";
import { Movie, MovieParams } from "../interfaces/movie";

export const usePopularMovies = (params: MovieParams) => {
  return useQuery({
    queryKey: ["popularMovies", params],
    queryFn: () => fetchPopularMovies(params),
  });
};

export const useMovieDetail = (id: number) => {
  return useQuery<Movie, Error>({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieById(id),
  });
};
