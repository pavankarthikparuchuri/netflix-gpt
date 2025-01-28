import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTSlice",
  initialState: {
    showGPTSearch: false,
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.gptMovies = movieResults;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult } = GPTSlice.actions;
export default GPTSlice.reducer;
