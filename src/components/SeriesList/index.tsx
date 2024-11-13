import { FC } from "react";
import { Serie } from "../../interfaces/serie";
import SeriesCard from "../SerieCard";

interface SeriesListProps {
  series: Serie[];
}

const SeriesList: FC<SeriesListProps> = ({ series }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
    {series.map((serie) => (
      <SeriesCard
        key={serie.id}
        id={serie.id}
        name={serie.name}
        posterPath={serie.poster_path}
        overview={serie.overview}
        rating={serie.vote_average}
      />
    ))}
  </div>
);

export default SeriesList;
