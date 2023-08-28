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
    followUser: (state, action) => {
      const { userId, postOwener } = action.payload;

      const followedUser = state.user.user.following.includes(postOwener);
      if (!followedUser) {
        state.user.user.following.push(postOwener);
      }
    },

    addPostIdToUser: (state, action) => {
      state.user.user.posts.push(action.payload);
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  followUser,
  addPostIdToUser,
} = userSlice.actions;
export default userSlice.reducer;
