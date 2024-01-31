import { Header } from "./components/Header";
import "./App.css";
import { FeatureMovie } from "./components/FeatureMovie";
import { useEffect, useState } from "react";

const App = () => {
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      setFeaturedData;
      console.log(featuredData);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <Header />
      <FeatureMovie
        item={{
          first_air_date: "",
          genres: [],
          overview: "",
          backdrop_path: "",
          original_name: "",
          vote_average: 0,
          number_of_seasons: 0,
          id: 0,
        }}
      />

      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          {" "}
          ❤️{" "}
        </span>{" "}
        por Victor Arcanjo.
        <br />
        Direitos de imagem para Netflix. <br />
        Dados pegos do site <a href="https://themoviedb.org">themoviedb.org</a>;
      </footer>
    </div>
  );
};

export default App;
