import { LoadingSpin } from "../../components/Loading";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePopularMovies } from "../../hooks/use-movies";
import { usePopularSeries } from "../../hooks/use-series";

const HomePage = () => {
  const {
    data: movieData,
    isLoading: moviesLoading,
    error: moviesError,
  } = usePopularMovies({ page: 1 });
  const {
    data: seriesData,
    isLoading: seriesLoading,
    error: seriesError,
  } = usePopularSeries({ page: 1 });
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true, // Ativa as setas de navegação
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleClick = (id: number, type: "movie" | "serie") => {
    if (!isDragging) navigate(`/${type}/${id}`);
  };

  if (moviesLoading || seriesLoading) return <LoadingSpin />;
  if (moviesError) return <div>{moviesError.message}</div>;
  if (seriesError) return <div>{seriesError.message}</div>;

  return (
    <div className="bg-gray-900 min-h-screen py-8 overflow-hidden">
      <Link to="/movies/popular">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 cursor-pointer hover:text-red-500 transition-colors duration-200">
          Filmes Populares
        </h1>
      </Link>

      <div className="overflow-visible max-w-full px-12 mb-12">
        {" "}
        {/* padding ajustado */}
        <Slider {...settings}>
          {movieData?.results.map((movie) => (
            <div
              key={movie.id}
              className="p-2 cursor-pointer"
              onMouseDown={() => setIsDragging(false)}
              onMouseUp={() => handleClick(movie.id, "movie")}
              style={{ maxWidth: "100%" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                style={{ height: "300px" }}
              />
              <h2 className="text-white text-center mt-4 text-sm font-semibold">
                {movie.title}
              </h2>
            </div>
          ))}
        </Slider>
      </div>

      <Link to="/series/popular">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 cursor-pointer hover:text-red-500 transition-colors duration-200">
          Séries Populares
        </h1>
      </Link>

      <div className="overflow-visible max-w-full px-12">
        <Slider {...settings}>
          {seriesData?.results.map((series) => (
            <div
              key={series.id}
              className="p-2 cursor-pointer"
              onMouseDown={() => setIsDragging(false)}
              onMouseUp={() => handleClick(series.id, "serie")}
              style={{ maxWidth: "100%" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                alt={series.name}
                className="w-full h-64 object-cover rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                style={{ height: "300px" }}
              />
              <h2 className="text-white text-center mt-4 text-sm font-semibold">
                {series.name}
              </h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
