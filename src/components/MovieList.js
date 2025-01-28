import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <div className="flex">
          {movies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
