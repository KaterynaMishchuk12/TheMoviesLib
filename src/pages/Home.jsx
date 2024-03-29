import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../fetch";
import { MoviesList } from "../components/MoviesList";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchTrendingMovies({});
        setMovies(fetchedData.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ padding: "90px", margin: "auto" }}>Trending today</h1>
      {error && <ErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
