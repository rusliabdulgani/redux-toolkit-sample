import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'slice/counter',
  initialState: {
    value: 0,
    gembel: 'halo aku gembel',
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


