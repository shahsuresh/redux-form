import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
import snackbarReducer from "../store/slices/snackbarSlice";
export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
  },
});
