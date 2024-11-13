import React from "react";

interface Genre {
  id: number;
  name: string;
}

interface GenreFilterProps {
  selectedGenre: number | undefined;
  onGenreChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  genres: Genre[];
}

const GenreFilter: React.FC<GenreFilterProps> = ({
  selectedGenre,
  onGenreChange,
  genres,
}) => {
  return (
    <div className="w-full md:w-1/2">
      <select
        value={selectedGenre || ""}
        onChange={onGenreChange}
        className="w-full p-2 rounded-md bg-gray-700 text-white mb-8"
      >
        <option value="">Todos os Gêneros</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
