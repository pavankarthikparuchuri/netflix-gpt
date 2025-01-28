import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedSeries } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const topRatedSeries = useSelector((state) => state.movies.topRatedSeries);
  const getTopRatedSeries = async () => {
    try {
      const SeriesList = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?page=1",
        API_OPTIONS
      );
      const data = await SeriesList.json();
      dispatch(addTopRatedSeries(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!topRatedSeries) getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
