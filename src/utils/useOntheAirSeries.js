import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirSeries } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useOntheAirSeries = () => {
  const dispatch = useDispatch();
  const getOnTheAirSeries = async () => {
    try {
      const SeriesList = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?page=1",
        API_OPTIONS
      );
      const data = await SeriesList.json();
      dispatch(addOnTheAirSeries(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOnTheAirSeries();
  }, []);
};

export default useOntheAirSeries;
