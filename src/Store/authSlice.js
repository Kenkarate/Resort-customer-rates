// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {  useNavigate } from "react-router-dom";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    // Add other relevant state properties here
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", action.payload.accessToken);
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    
    },
    // Add other reducer functions as needed

    // Add other reducer functions as needed
  },
});

export const { setUser ,logoutUser} = authSlice.actions;
export default authSlice.reducer;
