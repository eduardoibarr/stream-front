import { FC, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full max-w-lg mx-auto mb-8"
    >
      <div className="relative w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar filmes..."
          className="w-full py-3 pl-5 pr-16 rounded-full border-none outline-none bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out shadow-md"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 ease-in-out shadow-md"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
