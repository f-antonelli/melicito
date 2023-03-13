import { createSlice } from "@reduxjs/toolkit";
import { IStateAuth } from "../../interfaces/auth.interface";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      const accessToken = action.payload;

      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state: IStateAuth) => state.auth 

