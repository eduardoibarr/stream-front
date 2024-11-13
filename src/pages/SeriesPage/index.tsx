import { useState } from "react";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { LoadingSpin } from "../../components/Loading";
import { usePopularSeries, useSearchSerie } from "../../hooks/use-series";
import SeriesList from "../../components/SeriesList";

const SeriesPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const {
    data: popularSeries,
    isLoading: isLoadingPopular,
    error: errorPopular,
  } = usePopularSeries({ page });
  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useSearchSerie(query);

  const isSearching = query.trim() !== "";

  const handleSearch = (term: string) => {
    setQuery(term);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  if (isLoadingPopular || isLoadingSearch) return <LoadingSpin />;
  if (errorPopular && !isSearching)
    return (
      <div className="text-center text-white mt-12">{errorPopular.message}</div>
    );
  if (errorSearch && isSearching)
    return (
      <div className="text-center text-white mt-12">{errorSearch.message}</div>
    );

  const seriesToDisplay = isSearching
    ? searchResults?.results
    : popularSeries?.results;

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">
        {isSearching ? "Resultados da Pesquisa" : "Séries Populares"}
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <SearchBar type="tv" onSearch={handleSearch} />
      </div>

      {seriesToDisplay && seriesToDisplay.length > 0 ? (
        <SeriesList series={seriesToDisplay} />
      ) : (
        <div className="text-center text-gray-500 mt-10">
          Nenhuma série encontrada
        </div>
      )}

      {!isSearching && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={page}
            totalPages={popularSeries?.total_pages || 1}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default SeriesPage;
