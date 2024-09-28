import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TokenService } from '../../model/TokenService';
import { Profile } from '../../store/types';

type AuthStateType = {
  isAuth: boolean;
  isAdmin: boolean;
  profile: Profile | null;
  authError?: string;
};

const initialState: AuthStateType = {
  isAuth: TokenService.checkToken(),
  isAdmin: true,
  profile: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>): void => {
      TokenService.setToken(action.payload.token);
      state.isAuth = true;
    },
    logout: (state): void => {
      TokenService.clearToken();
      state.isAuth = false;
      state.profile = null;
      TokenService.clearToken();
    },
    signup: (state, { payload }: PayloadAction<{ profile: Profile; token: string }>): void => {
      TokenService.setToken(payload.token);
      state.isAuth = true;
      state.profile = payload.profile;
    },
    setAuthError: (state, { payload }: PayloadAction<{ error: string }>): void => {
      state.isAuth = false;
      state.profile = null;
      state.authError = payload.error || ' ❌ Неизвестная ошибка';
    },
    clearAuthError: (state): void => {
      state.authError = null;
    },
  },
});

export const { login, logout, signup, setAuthError, clearAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
