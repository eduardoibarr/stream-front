import {
  SerieListResponse,
  SerieParams,
  SerieDetail,
} from "../interfaces/serie";
import { instance } from "./instance.service";

export const fetchPopularSeries = async (
  params: SerieParams
): Promise<SerieListResponse> => {
  const response = await instance.get("series/popular", {
    params: {
      ...params,
    },
  });

  return response.data;
};

export const fetchSerieById = async (id: number): Promise<SerieDetail> => {
  const response = await instance.get(`series/${id}`);
  return response.data;
};

export const searchSerie = async (
  query: string
): Promise<SerieListResponse> => {
  const response = await instance.get("series/search", {
    params: {
      query,
    },
  });

  return response.data;
};
