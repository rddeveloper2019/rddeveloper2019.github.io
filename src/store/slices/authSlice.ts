import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TokenService } from '../../model/TokenService';
import { ServerErrors } from '../../model/FetchService';
import { SignUp } from '../../store/thunks/authThunk';

export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
};

type AuthStateType = {
  isAuth: boolean;
  profile: Profile | null;
  authError?: string;
  isLoading: boolean;
};

const initialState: AuthStateType = {
  isAuth: TokenService.checkToken(),
  profile: null,
  authError: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<{ token: string }>): void => {
      TokenService.setToken(action.payload.token);
      state.isAuth = true;
      state.isLoading = false;
    },
    signout: (state): void => {
      TokenService.clearToken();
      state.isAuth = false;
      state.profile = null;
      TokenService.clearToken();
    },
    signup: (state, { payload }: PayloadAction<{ profile: Profile; token: string }>): void => {
      TokenService.setToken(payload.token);
      state.isAuth = true;
      state.profile = payload.profile;
      state.isLoading = false;
    },
    setAuthError: (state, { payload }: PayloadAction<{ error: unknown }>): void => {
      const { errors = [] } = payload.error as ServerErrors;
      const message = errors?.[0]?.message || '❌ Неизвестная ошибка';
      state.isAuth = false;
      state.profile = null;
      state.authError = message;
      state.isLoading = false;
    },
    clearAuthError: (state): void => {
      state.authError = null;
    },
    setIsLoading: (state): void => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SignUp.fulfilled, (state, { payload }) => {
      TokenService.setToken(payload.token);
      state.isAuth = true;
      state.profile = payload.profile;
      state.authError = null;
      state.isLoading = false;
    });
    builder.addCase(SignUp.rejected, (state, { payload }) => {
      const { errors = [] } = payload as ServerErrors;
      const message = errors?.[0]?.message || '❌ Неизвестная ошибка';
      state.isAuth = false;
      state.profile = null;
      state.authError = message;
      state.isLoading = false;
    });
  },
});

export const { signin, signout, signup, setAuthError, clearAuthError, setIsLoading } = authSlice.actions;
export const authReducer = authSlice.reducer;
