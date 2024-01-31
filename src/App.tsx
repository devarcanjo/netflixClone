import { Header } from "./components/Header";
import "./App.css";
import { FeatureMovie } from "./components/FeatureMovie";
import { useEffect, useState } from "react";

const App = () => {
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      setFeaturedData;
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <Header />
      {featuredData && <FeatureMovie item={featuredData} />}
    </div>
  );
};

export default App;
