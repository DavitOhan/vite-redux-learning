
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import { counterReducer } from "./redux/counter/counterSlice"
import { feadbackReducer } from "./feadback/feadbackSlice"
import { UsersReducers } from "./redux/users/userSlice" 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feadback: feadbackReducer,
    users:UsersReducers
  },
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>


