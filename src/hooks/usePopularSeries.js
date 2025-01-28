import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularSeries } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const popularSeries = useSelector((state) => state.movies.popularSeries);
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
    if (!popularSeries) getPopularSeries();
  }, []);
};

export default usePopularSeries;
