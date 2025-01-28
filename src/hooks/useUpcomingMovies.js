import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);
  const getUpcomingMovies = async () => {
    try {
      const MovieList = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const data = await MovieList.json();
      dispatch(addUpcomingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!UpcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
