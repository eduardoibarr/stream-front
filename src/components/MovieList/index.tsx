import { FC } from "react";
import { Movie } from "../../interfaces/movie";
import MovieCard from "../MovieCard";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
        overview={movie.overview}
        rating={movie.vote_average}
      />
    ))}
  </div>
);

export default MovieList;
