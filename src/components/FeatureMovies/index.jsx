import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

function FeatureMovies() {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_MOVIE_API_KEY}/movie/popular`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setActiveMovieId(popularMovies[0].id);
      setMovies(popularMovies);
    });
  }, []);

  const movieList = movies
    .filter((movie) => movie.id === activeMovieId)
    .map((movie) => {
      return <Movie key={movie.id} data={movie} />;
    });

  return (
    <section className="relative text-white">
      {movieList}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </section>
  );
}
export default FeatureMovies;
