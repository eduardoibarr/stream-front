import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-500">
          Stream
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/movies/popular" className="hover:text-red-500">
            Filmes Populares
          </Link>
          <Link to="/series/popular" className="hover:text-red-500">
            Séries Populares
          </Link>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/movies/popular"
                className="block hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Filmes Populares
              </Link>
            </li>
            <li>
              <Link
                to="/series/popular"
                className="block hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Séries Populares
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Meu Perfil
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 py-4 mt-8">
    <div className="container mx-auto px-4 text-center text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Stream. Todos os direitos reservados.
      </p>
      <p className="text-sm mt-1">
        Desenvolvido com ❤️ por{" "}
        <span className="text-red-500">
          <a href="http://github.com/eduardoibarr">Eduardo de Paula</a>
        </span>
      </p>
    </div>
  </footer>
);

export default BaseLayout;
