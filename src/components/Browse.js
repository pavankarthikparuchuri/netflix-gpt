import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {/* 
        MainContainer
         - VideoBackground
         -  VideoTitle
        SecondaryContainer
         - MovieList * n
           - cards * n 
       */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
