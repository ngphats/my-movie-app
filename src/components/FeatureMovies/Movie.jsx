import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ModalContext from "../../contexts/ModelContext";

function Movie(props) {
  const {
    data: { backdrop_path, title, release_date, overview },
  } = props;

  const openPopup = useContext(ModalContext);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        title="background"
        className="aspect-video w-full brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 md:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        
        <div className="mt-4 hidden text-[1.2vw] sm:block">
          <p className="mb-2 font-bold">Overview</p>
          <p>{overview}</p>
        </div>

        <div className="mt-4">
          <button
            className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg"
            onClick={() => {
              openPopup(<iframe className="w-[50vw]" src="https://www.youtube.com/embed/hUg65k2OPSA" title="Ancient Greek Music For Sleep, Meditation, Study | 3 Hours Of Relaxing Fantasy Music &amp; Ambience" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>);
            }}
          >
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>Trailer
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-10 text-black lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </>
  );
}
export default Movie;