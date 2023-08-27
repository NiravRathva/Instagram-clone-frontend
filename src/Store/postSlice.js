import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  likes: [],
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
    likePost: (state, action) => {
      //id of the user who is going to like the post
      const { postId, userId } = action.payload;
      //id of the post
      const post = state.posts.find((post) => post._id === postId);
      if (post) {
        if (!post.likes.includes(userId)) {
          post.likes.push(userId);
        }
      }
    },
    disLikePost: (state, action) => {
      //id of the user who is going to like the post
      const { postId, userId } = action.payload;
      //id of the post
      const post = state.posts.find((post) => post._id === postId);
      if (post) {
        const index = post.likes.indexOf(userId);
        if (index !== -1) {
          post.likes.splice(index, 1);
        }
      }
    },
  },
});

export const { addPosts, addPost, likePost ,disLikePost} = postSlice.actions;

export default postSlice.reducer;
