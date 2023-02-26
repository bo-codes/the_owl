import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    },
    removeUser(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  }
});

export const {addUser, removeUser} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
