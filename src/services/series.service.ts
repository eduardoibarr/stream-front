import axios from "axios";
import {
  SerieListResponse,
  SerieParams,
  SerieDetail,
} from "../interfaces/serie";

const apiUrl = import.meta.env.VITE_API_URL + "/series";

export const fetchPopularSeries = async (
  params: SerieParams
): Promise<SerieListResponse> => {
  const response = await axios.get(`${apiUrl}/popular`, {
    params: {
      ...params,
    },
  });

  return response.data;
};

export const fetchSerieById = async (id: number): Promise<SerieDetail> => {
  const response = await axios.get(`${apiUrl}/${id}`);
  return response.data;
};

export const searchSerie = async (
  query: string
): Promise<SerieListResponse> => {
  const response = await axios.get(`${apiUrl}/search`, {
    params: {
      query,
    },
  });

  return response.data;
};
