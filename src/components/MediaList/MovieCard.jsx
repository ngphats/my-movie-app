import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar";

function MovieCard({ movie }) {
  const {
    id,
    name,
    first_air_date,
    title,
    poster_path,
    release_date,
    vote_average,
    media_type,
  } = movie;

  return (
    <article className="relative rounded-lg border border-slate-400">
      {media_type == "tv" && (
        <p className="absolute right-1 top-1 rounded bg-slate-900 px-2 py-1 text-sm font-bold text-white shadow-md">
          TV Show
        </p>
      )}

      <Link to={`movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="overflow-hidden rounded-lg"
        />
      </Link>
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar percent={Math.round(vote_average * 10) / 10} />
        <Link to={`movie/${id}`}>
          <p className="mt-2 font-bold">{title || name}</p>
        </Link>
        <p className="text-slate-300">{release_date || first_air_date}</p>
      </div>
    </article>
  );
}
export default MovieCard;
