import { FC } from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  rating: number;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  posterPath,
  overview,
  rating,
}) => (
  <Link to={`/movie/${id}`} className="movie-card">
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:scale-105 h-[35rem] flex flex-col">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-2 overflow-hidden text-ellipsis line-clamp-3">
          {overview}
        </p>
        <p className="text-yellow-500 mt-2">Nota: {rating.toFixed(1)}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
