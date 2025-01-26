import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);
  const popular = useSelector((state) => state.movies.popularMovies);
  const topRated = useSelector((state) => state.movies.topRatedMovies);
  const upComing = useSelector((state) => state.movies.UpcomingMovies);

  console.log(
    nowPlaying,
    "::nowPlaying",
    popular,
    "::popular",
    topRated,
    "topRated",
    upComing,
    "::upComing"
  );
  return (
    <div className="bg-black pl-20">
      <div className="-mt-80 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlaying} />
        <MovieList title={"Popular"} movies={popular} />
        <MovieList title={"Top Rated"} movies={topRated} />
      </div>
      <MovieList title={"Up Coming"} movies={upComing} />
    </div>
  );
};

export default SecondaryContainer;
