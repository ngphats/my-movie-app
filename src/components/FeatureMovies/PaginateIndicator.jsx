import { useContext, useEffect, useState } from "react";

function PaginateIndicator({ movies, activeMovieId, setActiveMovieId }) {
  /*useEffect(() => {
    const timeout = setTimeout(() => {
      const index = movies.findIndex((movie) => movie.id === activeMovieId);
      if (index === movies.length - 1) {
        setActiveMovieId(movies[0].id);
      } else {
        setActiveMovieId(movies[index + 1].id);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeMovieId, movies]);*/

  const lsMovie = movies.map((movie) => {
    return (
      <li
        key={movie.id}
        onClick={() => setActiveMovieId(movie.id)}
        className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
      ></li>
    );
  });
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-2">{lsMovie}</ul>
    </div>
  );
}
export default PaginateIndicator;
