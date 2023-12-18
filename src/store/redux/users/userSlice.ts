import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState, User } from "./types"

const usersInitialState: UserState = {
  users: [],
}

const userSlice = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    addUser: (state: UserState, { payload }: PayloadAction<User>) => {
      state.users = [...state.users, payload]
    },
  },
})

export const userActions = userSlice.actions
export const UsersReducers = userSlice.reducer
