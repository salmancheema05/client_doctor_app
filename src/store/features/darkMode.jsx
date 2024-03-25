import { createSlice } from "@reduxjs/toolkit";

const darKModeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    darkModeReducer: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});
export const { darkModeReducer } = darKModeSlice.actions;
export default darKModeSlice.reducer;
