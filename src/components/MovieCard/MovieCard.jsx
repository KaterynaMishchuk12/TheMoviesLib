import css from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }
  return (
    <div className={css.container}>
      <div className={css.movieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
          height="440"
        />
        <div className={css.info}>
          <h2>
            {movie.title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h2>
          <p className={css.rating}>Rating: {movie.vote_average}</p>
          <h3>Overview</h3>

          <p className={css.overview}>{movie.overview}</p>
        </div>
      </div>

      <h3 className={css.addInfo}>Additional information</h3>
    </div>
  );
};
