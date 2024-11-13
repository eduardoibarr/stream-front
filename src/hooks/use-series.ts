import { useQuery } from "@tanstack/react-query";
import {
  fetchSerieById,
  fetchPopularSeries,
  searchSerie,
} from "../services/series.service";
import { SerieDetail, SerieParams } from "../interfaces/serie";

export const usePopularSeries = (params: SerieParams) => {
  return useQuery({
    queryKey: ["popularSeries", params],
    queryFn: () => fetchPopularSeries(params),
  });
};

export const useSerieDetail = (id: number) => {
  return useQuery<SerieDetail, Error>({
    queryKey: ["serieDetail", id],
    queryFn: () => fetchSerieById(id),
  });
};

export const useSearchSerie = (query: string) => {
  return useQuery({
    queryKey: ["searchSerie", query],
    queryFn: () => searchSerie(query),
  });
};
