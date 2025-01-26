import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: { user: userInfoReducer, movies: moviesReducer },
});
export default appStore;
