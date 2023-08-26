import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "myPost",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPosts, addPost, updatePost } = postSlice.actions;

export default postSlice.reducer;
