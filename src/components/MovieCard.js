import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie?.poster_path) return;
  return (
    <div className="w-48 pr-4">
      <img alt="movie-card" src={IMG_CDN_URL + movie.poster_path} />
    </div>
  );
};

export default MovieCard;
