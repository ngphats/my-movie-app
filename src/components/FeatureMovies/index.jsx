import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

function FeatureMovies() {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWJiYmE3M2E0MTI5OWM0MDZjMDZhMzE5ZTdlZmZmNyIsIm5iZiI6MTczMTE0Mjg0Ny43OTI0NTk1LCJzdWIiOiI2NjlhNzQzYzJlNGM5ZjNkZDRiMGY2M2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xLdgEpURNib1d9dlfNT0YpndbSBmoK4gVbJXQ_GzE4Y",
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
