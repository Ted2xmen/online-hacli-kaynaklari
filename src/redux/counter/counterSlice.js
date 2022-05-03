import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 109,
  },
  reducers: {},
});

export default counterSlice.reducer;
