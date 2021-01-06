import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  //action名を定義
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//定義したactionをexport
export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
