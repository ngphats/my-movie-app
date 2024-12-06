import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MediaList({ title, tabs }) {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs?.[0].id);

  useEffect(() => {
    const url = tabs.find((item) => item.id === activeTabId)?.url;
    if (url) {
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
          const data = json.results;
          if (data.length > 0) {
            setMediaList(data.slice(0, 6));
          }
        })
        .catch((err) => console.error(err));
    }
  }, [activeTabId, tabs]);

  const mediaListView = mediaList.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  const tabView = tabs.map((item) => {
    return (
      <li
        key={item.id}
        onClick={() => {
          setActiveTabId(item.id);
        }}
        className={`cursor-pointer rounded px-2 py-1 ${activeTabId === item.id && "bg-white text-black"}`}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <header className="flex items-center gap-4 py-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex items-center rounded border border-white">
          {tabView}
        </ul>
      </header>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaListView}
      </section>
    </div>
  );
}
export default MediaList;
