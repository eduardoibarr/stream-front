import { useState } from "react";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { LoadingSpin } from "../../components/Loading";
import { usePopularSeries } from "../../hooks/use-series";
import SeriesList from "../../components/SeriesList";

const SeriesPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState<string | undefined>(undefined);

  const { data, isLoading, error } = usePopularSeries({ page, query, genre });

  const handleSearch = (term: string) => {
    setQuery(term);
    setPage(1);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value || undefined);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  const genres = [
    { id: 28, name: "Ação" },
    { id: 12, name: "Aventura" },
    { id: 35, name: "Comédia" },
    { id: 16, name: "Animação" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Família" },
    { id: 14, name: "Fantasia" },
    { id: 36, name: "História" },
    { id: 27, name: "Terror" },
    { id: 10402, name: "Música" },
    { id: 9648, name: "Mistério" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ficção científica" },
    { id: 10770, name: "Cinema TV" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "Guerra" },
    { id: 37, name: "Faroeste" },
  ];

  if (isLoading) return <LoadingSpin />;
  if (error)
    return <div className="text-center text-white mt-12">{error.message}</div>;

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">
        Séries Populares
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <select
          value={genre || ""}
          onChange={handleGenreChange}
          className="w-full md:w-auto p-2 rounded-md bg-gray-700 text-white"
        >
          <option value="">Todos os gêneros</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      {data && data.results && data.results.length > 0 ? (
        <SeriesList series={data.results} />
      ) : (
        <div className="text-center text-gray-500 mt-10">
          Nenhuma série encontrada
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={data?.total_pages || 1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SeriesPage;
