import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export const MoviesList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {console.log(movies)}
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
              height="300"
            />
            <div className={css.title}>{movie.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
//console.log(movies):
