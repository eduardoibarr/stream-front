import { useQuery } from "@tanstack/react-query";
import {
  MovieDiscoveryFilterParams,
  SeriesDiscoveryFilterParams,
} from "../interfaces/discover";
import { discoverMovies, discoverSeries } from "../services/discover.service";

export const useDiscoverMovies = (
  params: MovieDiscoveryFilterParams,
  { enabled = true }
) => {
  return useQuery({
    queryKey: ["discoverMovies", params],
    enabled,
    queryFn: () => discoverMovies(params),
  });
};

export const useDiscoverSeries = (
  params: SeriesDiscoveryFilterParams,
  { enabled = true }
) => {
  return useQuery({
    queryKey: ["discoverSeries", params],
    enabled,
    queryFn: () => discoverSeries(params),
  });
};
