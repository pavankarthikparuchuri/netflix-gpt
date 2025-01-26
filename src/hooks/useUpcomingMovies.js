import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
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
    getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
