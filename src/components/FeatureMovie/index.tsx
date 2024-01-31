import "./styles.css";

interface FeatureMovieProps {
  item: {
    first_air_date: string;
    genres: { name: string }[];
    overview: string;
    backdrop_path: string;
    original_name: string;
    vote_average: number;
    number_of_seasons: number;
    id: number;
  };
}

export const FeatureMovie = ({ item }: FeatureMovieProps) => {
  const firstDate = new Date(item.first_air_date);

  const genres = item.genres.map((genre) => genre.name);

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="feature--vertical">
        <div className="feature--horizontal">
          <div className="feature--name">{item.original_name}</div>
          <div className="feature--info">
            <div className="feature--points">{item.vote_average} pontos</div>
            <div className="feature--year">{firstDate.getFullYear()}</div>
            <div className="feature--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="feature--description">{description}</div>
            <div className="feature--buttons">
              <a href={`/watch/${item.id}`} className="feature--watchButton">
                ▶️ Assistir
              </a>
              <a
                href={`/list/add/${item.id}`}
                className="feature--myListButton"
              >
                + Minha Lista
              </a>
            </div>
            <div className="feature--genres">
              <strong>Gêneros:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
