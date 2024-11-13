import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import HomePage from "./pages/HomePage";
import BaseLayout from "./pages/BaseLayout";
import SerieDetailPage from "./pages/SerieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SeriesPage from "./pages/SeriesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/popular" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />

          <Route path="/series/popular" element={<SeriesPage />} />
          <Route path="/serie/:id" element={<SerieDetailPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
