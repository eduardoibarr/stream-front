import { usePopularMovies } from "../../hooks/useMovies";
import { LoadingSpin } from "../../components/Loading";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const { data, isLoading, error } = usePopularMovies({ page: 1 });
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  if (isLoading) return <LoadingSpin />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <Link to="/movies/popular">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 cursor-pointer hover:text-red-500 transition-colors duration-200">
          Filmes Populares
        </h1>
      </Link>

      <Slider {...settings} className="px-8">
        {data?.results.map((movie) => (
          <div
            key={movie.id}
            className="p-2"
            onMouseDown={() => setIsDragging(false)}
            onMouseUp={() => {
              if (!isDragging) navigate(`/movie/${movie.id}`);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="h-64 w-full object-cover rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ height: "300px" }}
            />
            <h2 className="text-white text-center mt-4 text-sm font-semibold">
              {movie.title}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;
