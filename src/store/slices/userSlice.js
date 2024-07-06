import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    randomText: "",
  },
  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    showRandomText: (state, action) => {
      state.randomText = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, showRandomText } = userSlice.actions;

export default userSlice.reducer;
