export const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }
  return (
    <div>
      <div>
        {" "}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
          height="440"
        />
        <div>
          <h2>
            {movie.title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h2>
          <p>Rating: {movie.vote_average}</p>
          <h3>Overview</h3>

          <p>{movie.overview}</p>
        </div>
      </div>
      <h3>Additional information</h3>
    </div>
  );
};
