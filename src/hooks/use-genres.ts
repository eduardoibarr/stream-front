import { useQuery } from "@tanstack/react-query";
import { fetchMovieGenres, fetchSerieGenres } from "../services/genres.service";

export const useGetMovieGenres = () => {
  return useQuery({
    queryKey: ["movieGenres"],
    queryFn: fetchMovieGenres,
  });
};

export const useGetSerieGenres = () => {
  return useQuery({
    queryKey: ["serieGenres"],
    queryFn: fetchSerieGenres,
  });
};
