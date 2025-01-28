import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTSlice",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearchView } = GPTSlice.actions;
export default GPTSlice.reducer;
