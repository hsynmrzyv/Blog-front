import { configureStore } from "@reduxjs/toolkit";

// Slices
import userSlice from "../slices/user.slice.js";
import blogSlice from "../slices/blog.slice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    blog: blogSlice,
  },
});

export default store;
