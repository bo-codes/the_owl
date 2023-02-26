import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const postsSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addPost(state, action) {
      // key into the action to get our payload, and get our post we are passing through there
      state.push(action.payload);
    },
    removePost(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
    // builder.addCase('movie/reset', (state, action) => {
    //     return [];
    // })
  },
});

export const {addPost, removePost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
