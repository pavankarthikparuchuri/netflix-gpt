import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const selectedLanguage = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage]?.gptSearchPlaceHolder}
        ></input>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[selectedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
