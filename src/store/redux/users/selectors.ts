// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';  // Путь к вашему файлу с корневым редюсером
import { UserState } from './types'; 

const selectUserState = (state: RootState): UserState => state.users;

export const selectAllUsers = createSelector(
  [selectUserState],
  (userState) => userState.users
);

// Другие селекторы, если они понадобятся, могут быть добавлены здесь
