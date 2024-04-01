import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    authorization: null,
  },
  reducers: {
    userLoginReducer: (state, action) => {
      state.user = action.payload;
      state.authorization = action.payload.user_status;
    },
    userLogoutReducer: (state, action) => {
      state.user = null;
      state.authorization =null;
    },

  },
});
export const { userLoginReducer ,userLogoutReducer} = loginSlice.actions;
export default loginSlice.reducer;
