import axios from "axios";
import { Genre } from "../interfaces/movie";

const apiUrl = import.meta.env.VITE_API_URL + "/genres";

export const fetchMovieGenres = async () => {
  const response = await axios.get<Genre[]>(`${apiUrl}/movie`);
  return response.data;
};

export const fetchSerieGenres = async () => {
  const response = await axios.get<Genre[]>(`${apiUrl}/serie`);
  return response.data;
};
