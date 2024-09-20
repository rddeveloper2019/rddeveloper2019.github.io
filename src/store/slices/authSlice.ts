import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type authStateType = {
  isAuth: boolean;
};

const initialState: authStateType = {
  isAuth: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>): void => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
