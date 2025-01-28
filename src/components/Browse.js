import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularSeries from "../hooks/usePopularSeries";
import useNowAiringSeries from "../hooks/useNowAiringSeries";
import useTopRatedSeries from "../hooks/useTopRatedTVSeries";
import useOntheAirSeries from "../hooks/useOntheAirSeries";

import GPTSearch from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularMovies();
  usePopularSeries();
  useNowAiringSeries();
  useTopRatedSeries();
  useOntheAirSeries();
  const gptToggle = useSelector((state) => state.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      {!gptToggle ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GPTSearch />
      )}
    </div>
  );
};

export default Browse;
