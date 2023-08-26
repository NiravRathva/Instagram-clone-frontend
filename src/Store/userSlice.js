import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: false,
  followers: [],
  following: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
    },
    follow: (state, action) => {
      const followedUserId = action.payload;
      if (!state.user.following.includes(followedUserId)) {
        state.user.following.push(action.payload);
      }
      const followedUser = state.user.find(
        (user) => user._id === followedUserId
      );
      if (followedUser) {
        state.user.followers.push(state.user._id);
      }
    },
    addPostIdToUser: (state, action) => {
      state.user.user.posts.push(action.payload);
    },
  },
});
export const { loginStart, loginSuccess, loginFailure, logout ,follow,addPostIdToUser} =
  userSlice.actions;
export default userSlice.reducer;
