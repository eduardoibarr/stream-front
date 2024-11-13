import { Genre } from "../interfaces/movie";
import { instance } from "./instance.service";

export const fetchMovieGenres = async () => {
  const response = await instance.get<Genre[]>("/genres/movie");
  return response.data;
};

export const fetchSerieGenres = async () => {
  const response = await instance.get<Genre[]>("/genres/serie");
  return response.data;
};
