import { useParams } from "react-router-dom";
import { LoadingSpin } from "../../components/Loading";
import { useSerieDetail } from "../../hooks/use-series";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

const SerieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: series, isLoading, error } = useSerieDetail(Number(id));

  if (isLoading) return <LoadingSpin />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-gray-800 min-h-screen py-8 fade-in rounded-3xl">
      {series && (
        <div className="max-w-5xl mx-auto text-white p-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold mb-2">{series.name}</h1>
            {series.tagline && (
              <p className="italic text-lg text-gray-400">{series.tagline}</p>
            )}
          </div>

          <hr className="border-gray-700" />

          <div className="flex flex-col md:flex-row gap-8 items-start fade-in">
            {series.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
                className="w-full md:w-80 h-auto max-h-96 object-cover rounded-lg shadow-lg"
              />
            )}

            <div className="space-y-4">
              {series.overview && (
                <p className="text-lg overflow-wrap break-words">
                  {series.overview}
                </p>
              )}
              <div className="flex flex-col space-y-1">
                {series.vote_average && (
                  <p className="text-lg font-semibold">
                    Nota: {series.vote_average.toFixed(1)} / 10
                  </p>
                )}
                {series.vote_count && (
                  <p className="text-gray-400">
                    Votos: {series.vote_count.toLocaleString()}
                  </p>
                )}
                {series.status && (
                  <p className="text-gray-400">
                    <strong>Status:</strong> {series.status}
                  </p>
                )}
                {series.first_air_date && (
                  <p className="text-gray-400">
                    <strong>Data de Estreia:</strong>{" "}
                    {formatDate(series.first_air_date)}
                  </p>
                )}
                {series.original_language && (
                  <p className="text-gray-400">
                    <strong>Idioma Original:</strong>{" "}
                    {series.original_language.toUpperCase()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="border-gray-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md space-y-2">
              {series.genres && series.genres.length > 0 && (
                <p>
                  <strong>Gêneros:</strong>{" "}
                  {series.genres.map((genre) => genre.name).join(", ")}
                </p>
              )}
              {series.popularity && (
                <p>
                  <strong>Popularidade:</strong> {series.popularity.toFixed(2)}
                </p>
              )}
              {series.origin_country && series.origin_country.length > 0 && (
                <p>
                  <strong>Países de Origem:</strong>{" "}
                  {series.origin_country.join(", ")}
                </p>
              )}
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-md space-y-2">
              {series.spoken_languages &&
                series.spoken_languages.length > 0 && (
                  <p>
                    <strong>Idiomas Falados:</strong>{" "}
                    {series.spoken_languages
                      .map((lang) => lang.english_name)
                      .join(", ")}
                  </p>
                )}
              {series.homepage && (
                <p className="truncate">
                  <strong>Site Oficial:</strong>{" "}
                  <a
                    href={series.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline break-all"
                  >
                    {series.homepage}
                  </a>
                </p>
              )}
            </div>
          </div>

          {series.production_companies &&
            series.production_companies.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Produtoras</h2>
                <div className="flex flex-wrap gap-4">
                  {series.production_companies.map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center space-x-2 bg-gray-700 p-3 rounded-lg shadow-md fade-in break-words"
                    >
                      <span>{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default SerieDetailPage;
