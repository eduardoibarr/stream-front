import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovies";
import { LoadingSpin } from "../../components/Loading";

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useMovieDetail(Number(id));

  if (isLoading) return <LoadingSpin />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-gray-800 min-h-screen py-8 fade-in">
      {movie && (
        <div className="max-w-5xl mx-auto text-white p-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            {movie.tagline && (
              <p className="italic text-lg text-gray-400">{movie.tagline}</p>
            )}
          </div>

          <hr className="border-gray-700" />

          <div className="flex flex-col md:flex-row gap-8 items-start fade-in">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full md:w-80 h-auto max-h-96 object-cover rounded-lg shadow-lg"
              />
            )}

            <div className="space-y-4">
              {movie.overview && <p className="text-lg">{movie.overview}</p>}
              <div className="flex flex-col space-y-1">
                {movie.vote_average && (
                  <p className="text-lg font-semibold">
                    Nota: {movie.vote_average.toFixed(1)} / 10
                  </p>
                )}
                {movie.vote_count && (
                  <p className="text-gray-400">
                    Votos: {movie.vote_count.toLocaleString()}
                  </p>
                )}
                {movie.runtime && (
                  <p className="text-gray-400">
                    <strong>Duração:</strong> {movie.runtime} minutos
                  </p>
                )}
                {movie.status && (
                  <p className="text-gray-400">
                    <strong>Status:</strong> {movie.status}
                  </p>
                )}
                {movie.release_date && (
                  <p className="text-gray-400">
                    <strong>Data de Lançamento:</strong>{" "}
                    {formatDate(movie.release_date)}
                  </p>
                )}
                {movie.original_language && (
                  <p className="text-gray-400">
                    <strong>Idioma Original:</strong>{" "}
                    {movie.original_language.toUpperCase()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="border-gray-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md space-y-2">
              {movie.genres && movie.genres.length > 0 && (
                <p>
                  <strong>Gêneros:</strong>{" "}
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
              )}
              {movie.budget > 0 && (
                <p>
                  <strong>Orçamento:</strong> {formatCurrency(movie.budget)}
                </p>
              )}
              {movie.revenue > 0 && (
                <p>
                  <strong>Receita:</strong> {formatCurrency(movie.revenue)}
                </p>
              )}
              {movie.popularity && (
                <p>
                  <strong>Popularidade:</strong> {movie.popularity.toFixed(2)}
                </p>
              )}
              {movie.production_countries &&
                movie.production_countries.length > 0 && (
                  <p>
                    <strong>Países de Produção:</strong>{" "}
                    {movie.production_countries
                      .map((country) => country.name)
                      .join(", ")}
                  </p>
                )}
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-md space-y-2">
              {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                <p>
                  <strong>Idiomas Falados:</strong>{" "}
                  {movie.spoken_languages
                    .map((lang) => lang.english_name)
                    .join(", ")}
                </p>
              )}
              {movie.homepage && (
                <p>
                  <strong>Site Oficial:</strong>{" "}
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {movie.homepage}
                  </a>
                </p>
              )}
            </div>
          </div>

          {movie.production_companies &&
            movie.production_companies.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Produtoras</h2>
                <div className="flex flex-wrap gap-4">
                  {movie.production_companies.map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center space-x-2 bg-gray-700 p-3 rounded-lg shadow-md fade-in"
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

export default MovieDetailPage;
