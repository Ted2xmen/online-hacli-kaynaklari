import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter,
  },
});
