import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const MovieList = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const data = await MovieList.json();
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
