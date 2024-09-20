import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type authSliceType = {
  isAuth: boolean;
};
const authSlice = createSlice<authSliceType>({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth(state, payload: PayloadAction) {
      state.isAuth = payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
