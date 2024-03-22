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
  },
});
export const { userLoginReducer } = loginSlice.actions;
export default loginSlice.reducer;
