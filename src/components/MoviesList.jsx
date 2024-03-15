import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export const MoviesList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {/* {console.log(movies)} */}
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

// :
// adult
// :
// false
// backdrop_path
// :
// "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg"
// genre_ids
// :
// (3) [16, 10751, 14]
// id
// :
// 129
// media_type
// :
// "movie"
// original_language
// :
// "ja"
// original_title
// :
// "千と千尋の神隠し"
// overview
// :
// "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family."
// popularity
// :
// 214.154
// poster_path
// :
// "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
// release_date
// :
// "2001-07-20"
// title
// :
// "Spirited Away"
// video
// :
// false
// vote_average
// :
// 8.54
// vote_count
// :
// 15654
// [[Prototype]]
// :
// Object
