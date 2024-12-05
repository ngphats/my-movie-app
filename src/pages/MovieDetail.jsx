import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWJiYmE3M2E0MTI5OWM0MDZjMDZhMzE5ZTdlZmZmNyIsIm5iZiI6MTczMTE0Mjg0Ny43OTI0NTk1LCJzdWIiOiI2NjlhNzQzYzJlNGM5ZjNkZDRiMGY2M2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xLdgEpURNib1d9dlfNT0YpndbSBmoK4gVbJXQ_GzE4Y",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container relative overflow-hidden text-white">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        className="absolute inset-0 w-full brightness-[0.2]"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-8 text-white lg:gap-8">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{movie.original_title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              PG-13
            </span>
            <p>2008-07-16</p>
            <p>{(movie.genres || []).map((item) => item.name).join(", ")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={90} size={3.5} strokeWidth={0.3} />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>
              Batman raises the stakes in his war on crime. With the help of Lt.
              Jim Gordon and District Attorney Harvey Dent, Batman sets out to
              dismantle the remaining criminal organizations that plague the
              streets. The partnership proves to be effective, but they soon
              find themselves prey to a reign of chaos unleashed by a rising
              criminal mastermind known to the terrified citizens of Gotham as
              the Joker.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Screenplay</p>
              <p>Christopher Nolan, Jonathan Nolan</p>
            </div>
            <div>
              <p className="font-bold">Director</p>
              <p>Christopher Nolan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
