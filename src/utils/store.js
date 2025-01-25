import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userSlice";

const appStore = configureStore({
  reducer: { user: userInfoReducer },
});
export default appStore;
