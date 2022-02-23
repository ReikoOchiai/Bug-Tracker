import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Ryan Beasley" });
      state.push({ name: "John Bradly" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;
