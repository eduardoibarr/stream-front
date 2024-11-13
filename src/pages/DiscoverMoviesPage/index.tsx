import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoadingSpin } from "../../components/Loading";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";
import { useDiscoverMovies } from "../../hooks/use-discover";
import { useGetMovieGenres } from "../../hooks/use-genres";
import { MovieDiscoveryFilterParams } from "../../interfaces/discover";

const DiscoverMoviesPage = () => {
  const { register, handleSubmit, setValue } =
    useForm<MovieDiscoveryFilterParams>();
  const [filters, setFilters] = useState<MovieDiscoveryFilterParams>({
    page: 1,
  });
  const [hasSearched, setHasSearched] = useState(false);

  const { data: genresData, isLoading: isLoadingGenres } = useGetMovieGenres();
  const { data, isLoading, error } = useDiscoverMovies(filters, {
    enabled: hasSearched,
  });

  const onSubmit = (data: MovieDiscoveryFilterParams) => {
    setFilters({ ...data, page: 1 });
    setHasSearched(true);
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("with_genres", event.target.value);
  };

  if (isLoadingGenres) return <LoadingSpin />;

  const genresArray = Object.values(genresData || {});

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-red-500">
        Descobrir Filmes
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-6 rounded-lg mb-8 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">
              Ano de Lançamento
            </label>
            <input
              type="number"
              {...register("primary_release_year")}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Gênero</label>
            {isLoadingGenres ? (
              <LoadingSpin />
            ) : (
              <select
                onChange={handleGenreChange}
                className="w-full p-2 rounded-md bg-gray-700 text-white"
              >
                <option value="">Selecione um gênero</option>
                {genresArray.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Nota Mínima</label>
            <input
              type="number"
              step="0.1"
              {...register("vote_average_gte")}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Região</label>
            <input
              type="text"
              {...register("region")}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Ordenar Por</label>
            <select
              {...register("sort_by")}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
            >
              <option value="popularity.desc">Popularidade (Desc)</option>
              <option value="popularity.asc">Popularidade (Asc)</option>
              <option value="release_date.desc">
                Data de Lançamento (Desc)
              </option>
              <option value="release_date.asc">Data de Lançamento (Asc)</option>
              <option value="vote_average.desc">Avaliação (Desc)</option>
              <option value="vote_average.asc">Avaliação (Asc)</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 col-span-1 md:col-span-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition-colors duration-300"
          >
            Aplicar Filtros
          </button>
        </div>
      </form>

      {hasSearched && (
        <>
          {isLoading ? (
            <LoadingSpin />
          ) : error ? (
            <div className="text-center text-white mt-12">{error.message}</div>
          ) : data && data.results.length > 0 ? (
            <>
              <div className="mt-16">
                <MovieList movies={data.results} />
              </div>
              <div className="mt-10 flex justify-center">
                <Pagination
                  currentPage={filters.page || 1}
                  totalPages={data.total_pages || 1}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 mt-10">
              Nenhum filme encontrado
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DiscoverMoviesPage;
