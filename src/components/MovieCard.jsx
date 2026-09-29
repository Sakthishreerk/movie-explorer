import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450";

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.slice(0, 4)}</p>

        <Link to={`/movie/${movie.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;