import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);
  const popular = useSelector((state) => state.movies.popularMovies);
  const topRated = useSelector((state) => state.movies.topRatedMovies);
  const upComing = useSelector((state) => state.movies.UpcomingMovies);
  const airTodaySeries = useSelector((state) => state.movies.AiringTodaySeries);
  const onTheAirSeries = useSelector((state) => state.movies.OnTheAirSeries);
  const popularSeries = useSelector((state) => state.movies.popularSeries);
  const topRatedSeries = useSelector((state) => state.movies.topRatedSeries);

  return (
    <div className="bg-black pl-4 md:pl-12 w-screen pb-20">
      <div className="mt-0 md:-mt-52 relative z-20">
        <MovieList title={"Now Playing Movies"} movies={nowPlaying} />
        <MovieList title={"Popular Movies"} movies={popular} />
        <MovieList title={"Top Rated Movies"} movies={topRated} />
      </div>
      <MovieList title={"Up Coming Movies"} movies={upComing} />
      <MovieList title={"Airing Today Series"} movies={airTodaySeries} />
      <MovieList title={"On The Air Series"} movies={onTheAirSeries} />
      <MovieList title={"Popular Series"} movies={popularSeries} />
      <MovieList title={"Top Rated Series"} movies={topRatedSeries} />
    </div>
  );
};

export default SecondaryContainer;
