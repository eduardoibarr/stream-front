import { useQuery } from "@tanstack/react-query";
import { Movie, MovieParams } from "../interfaces/movie";
import { fetchMovieById, fetchPopularMovies } from "../services/movie.service";

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
