import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "885d6bbd4f6629a65232e2f179017e1a";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <Link to="/">
        <button className="back-btn">← Back</button>
      </Link>

      <div className="details-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div>
          <h1>{movie.title}</h1>

          <p>
            <strong>Release:</strong> {movie.release_date}
          </p>

          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>

          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;