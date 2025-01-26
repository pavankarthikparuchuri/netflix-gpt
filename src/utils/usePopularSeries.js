import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularSeries } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const getPopularSeries = async () => {
    try {
      const SeriesList = await fetch(
        "https://api.themoviedb.org/3/tv/popular?page=1",
        API_OPTIONS
      );
      const data = await SeriesList.json();
      dispatch(addPopularSeries(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPopularSeries();
  }, []);
};

export default usePopularSeries;
