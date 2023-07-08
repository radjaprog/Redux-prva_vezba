// src/store/counter/slice.js
import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performCounterReset: () => {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setToRandom: (state) => {
      state.value = Math.floor(Math.random() * 100);
    },
    reset: (state) => {
      state.value = 0;
    },
    ...middlewareActions,
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setToRandom,
  performCounterReset,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer; // reducer
