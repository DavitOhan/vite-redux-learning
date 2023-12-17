import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CounterInitialState } from "./types"

const counerInitialState: CounterInitialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: "COUNTER",
  initialState: counerInitialState,
  reducers: {
    add: (state: CounterInitialState) => {
      state.count = state.count + 1
    },
    minus: (state: CounterInitialState) => {
      state.count = state.count - 1
    },
    multiply: (state: CounterInitialState, action: PayloadAction<number>) => {
      console.log(action.payload)
      state.count = state.count * action.payload
    },
    divide: (
      state: CounterInitialState,
      { payload = 2 }: PayloadAction<number | undefined>,
    ) => {
      state.count = state.count/ payload
    },
  },
})

export const actions = counterSlice.actions
export const counterReducer = counterSlice.reducer
