import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
