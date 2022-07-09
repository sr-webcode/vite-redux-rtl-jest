import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TCounterState = { value: number }

const initialState: TCounterState = { value: 0 }

export const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// every slice file will export actions, the slice itself tagged as reducer

export const counterAction = counterSlice.actions

export default counterSlice.reducer;
