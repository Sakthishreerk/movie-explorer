import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = "885d6bbd4f6629a65232e2f179017e1a";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );

      const data = await response.json();

      setMovies(data.results || []);

      if (!data.results?.length) {
        setError("No movies found");
      }
    } catch (err) {
      setError("Failed to fetch movies");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">🎬 Movie Explorer</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;