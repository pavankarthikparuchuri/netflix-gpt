import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/GPTSlice";
const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const fetchMovie = async (movieName) => {
    const dataJson = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      API_OPTIONS
    );
    const json = await dataJson.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    try {
      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query: " +
        searchText?.current?.value +
        ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Gaddar, Sholay, Don, 3 Idiots, Golmaal";
      let data = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-4o-mini",
      });
      const gptMovies = data.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map((item) => fetchMovie(item));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (err) {
      console.log(err, "::err");
    }
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage]?.gptSearchPlaceHolder}
          ref={searchText}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[selectedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
