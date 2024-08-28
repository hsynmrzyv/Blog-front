import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { setBlogs } = blogSlice.actions;

export default blogSlice.reducer;
