import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const MovieList = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await MovieList.json();
      console.log(data, "::data");
      dispatch(addNowPlayingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
