import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GPTSearchReducer from "./GPTSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userInfoReducer,
    movies: moviesReducer,
    gpt: GPTSearchReducer,
    config: configReducer,
  },
});
export default appStore;
