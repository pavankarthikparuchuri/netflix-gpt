import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularSeries from "../utils/usePopularSeries";
import useNowAiringSeries from "../utils/useOntheAirSeries";
import useTopRatedSeries from "../utils/useTopRatedTVSeries";
import useOntheAirSeries from "../utils/useOntheAirSeries";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularMovies();
  usePopularSeries();
  useNowAiringSeries();
  useTopRatedSeries();
  useOntheAirSeries();
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
