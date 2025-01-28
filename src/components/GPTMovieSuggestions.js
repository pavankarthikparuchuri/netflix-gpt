import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gptResults = useSelector((state) => state.gpt.gptMovies);
  const movieNames = useSelector((state) => state.gpt.movieNames);
  if (!movieNames) return;
  console.log(gptResults, "::gptResults");
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((item, index) => (
          <MovieList title={item} movies={gptResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
