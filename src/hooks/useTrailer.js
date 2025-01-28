import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const dataJson = await data.json();
      const filterData = dataJson.results.filter(
        (item) => item.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : dataJson.results[0];
      dispatch(addTrailer(trailer));
    } catch (err) {
      console.log(err, "::err");
    }
  };
  useEffect(() => {
    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useTrailer;
