import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const datasSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { dataAdded } = datasSlice.actions;

export default datasSlice.reducer;
