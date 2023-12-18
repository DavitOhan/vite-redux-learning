import { createSlice} from '@reduxjs/toolkit';
import { FeadbackState } from "./types"

const initialState: FeadbackState = {
    likes: 0,
    dislikes: 0,
};

const feadbackSlice = createSlice({
    name: 'FEEDBACK',
    initialState: initialState,
    reducers: {
        incrementLikes: (state: FeadbackState) => {
            state.likes += 1;
        },
        incrementDislikes: (state: FeadbackState) => {
            state.dislikes += 1;
        },
        resetResults: (state: FeadbackState) => initialState
        },
    },
);

export const actions = feadbackSlice.actions;
export const feadbackReducer = feadbackSlice.reducer;