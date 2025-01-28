import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addAiringSeries } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowAiringSeries = () => {
  const dispatch = useDispatch();
  const AiringTodaySeries = useSelector(
    (state) => state.movies.AiringTodaySeries
  );
  const getNowAiringSeries = async () => {
    try {
      const SeriesList = await fetch(
        "https://api.themoviedb.org/3/tv/popular?page=1",
        API_OPTIONS
      );
      const data = await SeriesList.json();
      dispatch(addAiringSeries(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!AiringTodaySeries) getNowAiringSeries();
  }, []);
};

export default useNowAiringSeries;
