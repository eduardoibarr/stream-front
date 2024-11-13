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
    <form onSubmit={handleSubmit} className="flex justify-center mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquisar filmes"
        className="p-3 w-72 sm:w-96 rounded-l-full border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300 ease-in-out shadow-sm"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-full font-semibold transition-colors duration-300 ease-in-out shadow-md"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
