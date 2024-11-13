import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl font-semibold">Página Não Encontrada</p>
        <p className="text-gray-400">
          A página que você está procurando pode ter sido removida ou está
          temporariamente indisponível.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
