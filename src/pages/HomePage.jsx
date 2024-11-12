import MediaList from "../components/MediaList";
import FeatureMovies from "../components/FeatureMovies";
import { TRENDING_TABS_DEFINE, RATED_TABS_DEFINE } from "../libs/constants";

function HomePage() {
  return (
    <>
      <FeatureMovies />
      <MediaList title={"Trending"} tabs={TRENDING_TABS_DEFINE} />
      <MediaList title={"Top Rated"} tabs={RATED_TABS_DEFINE} />
    </>
  );
}

export default HomePage;
